import { Ship } from './Ship'

// Gameboard class represents the game board for a player
export class Gameboard {
    private name: string;
    private board: Ship[][];
    private ships: { ship: Ship, places: number[][] }[] = [];
    private missedShots: boolean[][];
    private GRID_SIZE = 10;

    constructor(name: string) {
        this.name = name;
        this.board = [];
        this.missedShots = [];
        this.initialize();
    }

    initialize(): void {
        this.board = [];
        this.missedShots = [];
        for (let i = 0; i < this.GRID_SIZE; i++) {
            this.board[i] = [];
            this.missedShots[i] = [];
            for (let j = 0; j < this.GRID_SIZE; j++) {
                this.board[i][j] = null;
                this.missedShots[i][j] = null;
            }
        }
        this.ships = [];
    }

    getName(){
        return this.name;
    }

    // Place a ship on the board with additional checks
    placeShip(ship: Ship, column: number, row: number): boolean {
        let places = [];
        if (ship.isVertical() === true) {
            // Check if ship placement is within bounds
            if (row + ship.getLength() > this.GRID_SIZE || column < 0 || row < 0) return false;
            
            // Check for overlap and one-cell distance
            for (let i = 0; i < ship.getLength(); i++) {
                if (!this.isCellAvailable(column, row + i)) return false;
            }

            // Place the ship after successful checks
            for (let i = 0; i < ship.getLength(); i++) {
                this.board[column][row + i] = ship;
                places.push([column, row + i]);
            }
        } else {
            // Check if ship placement is within bounds
            if (column + ship.getLength() > this.GRID_SIZE || column < 0 || row < 0) return false;

            // Check for overlap and one-cell distance
            for (let i = 0; i < ship.getLength(); i++) {
                if (!this.isCellAvailable(column + i, row)) return false;
            }

            // Place the ship after successful checks
            for (let i = 0; i < ship.getLength(); i++) {
                this.board[column + i][row] = ship;
                places.push([column + i, row]);
            }
        }

        this.ships.push({
            ship: ship,
            places: places
        });
        return true;
    }

     // Helper to check if a position is within the game board bounds
     private isWithinBounds(column: number, row: number): boolean {
        return column >= 0 && column < this.GRID_SIZE && row >= 0 && row < this.GRID_SIZE;
    }


    // Check if a cell is available (no overlap) and has at least one cell distance
    private isCellAvailable(column: number, row: number): boolean {
        if (this.board[column][row] !== null) return false; // Check if there's already a ship

        // Check surrounding cells for one-cell distance
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const checkCol = column + i;
                const checkRow = row + j;
                if (this.isWithinBounds(checkCol, checkRow) && this.board[checkCol][checkRow] !== null) {
                    return false; // A ship is too close
                }
            }
        }
        return true;
    }


    // Get the ship at a specific position
    getShipAt(column: number, row: number) {
        return this.board[column][row];
    }

    // Receive an attack at a specific position
    receiveAttack(column: number, row: number): boolean {
        const ship = this.getShipAt(column, row);
    
        if (ship === null) {
            this.missedShots[column][row] = true;
            return false;
        }
    
        // Track hit
        ship.getHit(`${column},${row}`);
        console.log(this.ships.length);
    
        // Verify if the ship is sunk
        if (ship.isSunk()) {
            const shipInfo = this.ships.find((s) => s.ship === ship);
            if (shipInfo) {
                const allPositionsHit = shipInfo.places.every(([col, row]) =>
                    ship.hitPositions.has(`${col},${row}`)
                );
                if (allPositionsHit) {
                    this.markAdjacentCells(ship);
                }
            }
        }
        return true;
    }
    
    private markAdjacentCells(ship: Ship): void {
        const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
        this.ships.forEach((shipInfo) => {
            if(shipInfo.ship === ship){
                shipInfo.places.forEach((place) => {
                    directions.forEach(([dx, dy]) => {
                        const adjCol = place[0] + dx;
                        const adjRow = place[1] + dy;
                        if (this.isWithinBounds(adjCol, adjRow) && this.getShipAt(adjCol, adjRow) !== ship) {
                            this.missedShots[adjCol][adjRow] = true;
                        }
                    });
                });
            }
        });
    }

    // New method to get all cells that should be marked as 'miss'
    getAllMissedCells(): [number, number][] {
        let missedCells: [number, number][] = [];
        for (let col = 0; col < this.GRID_SIZE; col++) {
            for (let row = 0; row < this.GRID_SIZE; row++) {
                if (this.missedShots[col][row]) {
                    missedCells.push([col, row]);
                }
            }
        }
        return missedCells;
    }

    // Get all missed attacks
    getMissedShots() {
        return this.missedShots;
    }

    // Check if all ships are sunk
    allShipsSunk() {
        return this.ships.every(({ ship }) => ship.isSunk());
    }
    
    //Method to place ships randomly
    placeShipsRandomly(): void {
        // Reset the board and counters first
        this.initialize();

        const ships = [
            { name: 'Carrier', length: 5 },
            { name: 'Battleship', length: 4 },
            { name: 'Cruiser', length: 3 },
            { name: 'Submarine', length: 3 },
            { name: 'Destroyer', length: 2 }
        ];

        ships.forEach(shipInfo => {
            let placed = false;
            let attempts = 0;
            const maxAttempts = 100; // Prevent infinite loops

            while (!placed && attempts < maxAttempts) {
                const col = Math.floor(Math.random() * this.GRID_SIZE);
                const row = Math.floor(Math.random() * this.GRID_SIZE);
                const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
                const ship = new Ship(shipInfo.name, shipInfo.length, orientation);
                
                if (this.placeShip(ship, col, row)) {
                    placed = true;
                }
                attempts++;
            }

            if (!placed) {
                console.error(`Failed to place ${shipInfo.name}`);
            }
        });
    }

    getBoard(){
        return this.board;
    }
}