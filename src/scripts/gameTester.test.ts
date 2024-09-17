import { Ship } from "./Ship"; // Require the Ship module
import { Gameboard } from "./Gameboard";
import { EnemyAi } from './EnemyAi';

// Define the types if not already defined in your implementation files.
type Orientation = 'horizontal' | 'vertical';


describe('Ship', () => {
  let ship: Ship;

  beforeEach(() => {
    ship = new Ship('test',3,'horizontal');
  });

  test('ship should be created with correct length', () => {
    expect(ship.getLength()).toBe(3);
  });

  test('ship should not be sunk initially', () => {
    expect(ship.isSunk()).toBe(false);
  });

  test('ship should register hits', () => {
    ship.getHit();
    expect(ship.getNumberOfHits()).toBe(1);
  });

  test('ship should be sunk when hit enough times', () => {
    ship.getHit();
    ship.getHit();
    ship.getHit();
    expect(ship.isSunk()).toBe(true);
  });
});

describe('Gameboard', () => {
  let gameboard: Gameboard;

  beforeEach(() => {
    gameboard = new Gameboard('test');
  });


  test('gameboard should place ships at specific coordinates', () => {
    const ship = new Ship('test',3,'horizontal'); // Assuming Ship is a factory function or constructor
    expect(gameboard.placeShip(ship, 0, 0)).toBe(true);
    expect(gameboard.getShipAt(0, 0)).toBe(ship);
    expect(gameboard.getShipAt(1, 0)).toBe(ship);
    expect(gameboard.getShipAt(2, 0)).toBe(ship);
  });

  test('gameboard should not place ships outside of the board', () => {
    const ship = new Ship('test',3,'horizontal');
    expect(gameboard.placeShip(ship, 8, 0)).toBe(false);
  });

  test('gameboard should receive attacks and record hits', () => {
    const ship = new Ship('test',3,'horizontal');
    gameboard.placeShip(ship, 0, 0);
    expect(gameboard.receiveAttack(0, 0)).toBe(true);
    expect(gameboard.receiveAttack(1, 1)).toBe(false);
  });


  test('gameboard should report when all ships are sunk', () => {
    const ship1 = new Ship('test',2,'horizontal');
    const ship2 = new Ship('test',1,'horizontal');
    gameboard.placeShip(ship1, 0, 0);
    gameboard.placeShip(ship2, 0, 1);
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(1, 0);
    gameboard.receiveAttack(0, 1);
    expect(gameboard.allShipsSunk()).toBe(true);
  });
}); 

// Don't mock the entire Gameboard class
jest.unmock('./Gameboard');

describe('EnemyAi', () => {
    let enemyAi: EnemyAi;
    let mockGameboard: Gameboard;

    beforeEach(() => {
        // Create a manual mock for Gameboard
        mockGameboard = {
            name: jest.fn().mockRejectedValue('test'),
            receiveAttack: jest.fn().mockReturnValue(false),
            getMissedShots: jest.fn().mockReturnValue(Array(10).fill(Array(10).fill(false))),
            getShipAt: jest.fn().mockReturnValue(null),
        } as unknown as Gameboard;

        enemyAi = new EnemyAi(mockGameboard);
    });

    test('makeMove returns a valid move', () => {
        const move = enemyAi.makeMove();
        expect(move).toHaveLength(2);
        expect(move[0]).toBeGreaterThanOrEqual(0);
        expect(move[0]).toBeLessThan(10);
        expect(move[1]).toBeGreaterThanOrEqual(0);
        expect(move[1]).toBeLessThan(10);
    });

    test('makeMove calls receiveAttack on the gameboard', () => {
        const move = enemyAi.makeMove();
        expect(mockGameboard.receiveAttack).toHaveBeenCalledWith(move[0], move[1]);
    });

    test('EnemyAi targets adjacent cells after a hit', () => {
        (mockGameboard.receiveAttack as jest.Mock).mockReturnValue(true);
        const firstMove = enemyAi.makeMove();
        const adjacentMoves = [
            [firstMove[0] - 1, firstMove[1]],
            [firstMove[0] + 1, firstMove[1]],
            [firstMove[0], firstMove[1] - 1],
            [firstMove[0], firstMove[1] + 1],
        ].filter(([x, y]) => x >= 0 && x < 10 && y >= 0 && y < 10);

        const secondMove = enemyAi.makeMove();
        expect(adjacentMoves).toContainEqual(secondMove);
    });

    test('EnemyAi returns to random moves after exhausting adjacent cells', () => {
        (mockGameboard.receiveAttack as jest.Mock)
            .mockReturnValueOnce(true)
            .mockReturnValue(false);
        const firstMove = enemyAi.makeMove();

        // Simulate hitting all adjacent cells
        for (let i = 0; i < 4; i++) {
            enemyAi.makeMove();
        }

        const finalMove = enemyAi.makeMove();
        const adjacentMoves = [
            [firstMove[0] - 1, firstMove[1]],
            [firstMove[0] + 1, firstMove[1]],
            [firstMove[0], firstMove[1] - 1],
            [firstMove[0], firstMove[1] + 1],
        ];

        expect(adjacentMoves).not.toContainEqual(finalMove);
    });
});