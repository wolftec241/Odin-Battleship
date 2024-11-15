import { Ship } from "./Ship";
import { Gameboard } from "./Gameboard";

export class EnemyAi {
    private GRID_SIZE: number;
    private opponentBoard: Gameboard;
    private lastHit: [number, number] | null;
    private potentialTargets: [number, number][];
    private attackedCells: Set<string>;

    constructor(opponentBoard: Gameboard) {
        this.opponentBoard = opponentBoard;
        this.GRID_SIZE = 10;
        this.lastHit = null;
        this.potentialTargets = [];
        this.attackedCells = new Set();
    }

    makeMove(): [number, number] {
        let move: [number, number];
    
        if (this.lastHit && this.potentialTargets.length > 0) {
            move = this.targetAdjacentCells();
        } else {
            move = this.randomMove();
        }
    
        this.attackedCells.add(`${move[0]},${move[1]}`);
    
        // Check if all ships are sunk
        if (this.opponentBoard.allShipsSunk()) {
            console.log("AI: All ships are sunk. Game over!");
        }
    
        return move;
    }

    private targetAdjacentCells(): [number, number] {
    while (this.potentialTargets.length > 0) {
        const move = this.potentialTargets.pop();

        // Skip cells already attacked
        if (this.attackedCells.has(`${move[0]},${move[1]}`)) {
            continue;
        }

        // Attempt to attack the cell
        const result = this.opponentBoard.receiveAttack(move[0], move[1]);

        if (result) {
            // Successful hit
            if(this.opponentBoard.getShipAt(move[0],move[1]).isSunk()){
                this.lastHit = null;
                this.potentialTargets = [];
            }
            else{
                this.lastHit = move;
                this.addAdjacentCells(move);
            }
        }

        return move;
    }

    // If no valid adjacent targets remain, reset and make a random move
    this.lastHit = null;
    return this.randomMove();
}

    private randomMove(): [number, number] {
        let move: [number, number];
        do {
            move = [
                Math.floor(Math.random() * this.GRID_SIZE),
                Math.floor(Math.random() * this.GRID_SIZE)
            ];
        } while (this.attackedCells.has(`${move[0]},${move[1]}`));

        const result = this.opponentBoard.receiveAttack(move[0], move[1]);
        console.log(result);

        if (result) {
            this.lastHit = move;
            this.addAdjacentCells(move);
        }

        return move;
    }

    private addAdjacentCells(move: [number, number]): void {
    const [col, row] = move;
    const directions: [number, number][] = [
        [col - 1, row], // Left
        [col + 1, row], // Right
        [col, row - 1], // Up
        [col, row + 1]  // Down
    ];

    // Add valid and unvisited adjacent cells
    directions.forEach(([newCol, newRow]) => {
        if (
            newCol >= 0 && newCol < this.GRID_SIZE && // Within bounds horizontally
            newRow >= 0 && newRow < this.GRID_SIZE && // Within bounds vertically
            !this.attackedCells.has(`${newCol},${newRow}`) // Not already attacked
        ) {
            this.potentialTargets.push([newCol, newRow]);
        }
    });
}
}