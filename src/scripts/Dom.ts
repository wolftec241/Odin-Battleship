import { Gameboard } from "./Gameboard";
import { ShipPlacementWindow } from "./ShipPlacementWindow";

export function Dom() {
    const GRID_SIZE = 10;

    // Create a grid for the game board
    function createGrid(containerId: string, gameboard: Gameboard): void {
        const container = document.getElementById(`${containerId}-board`);
        if (!container) return;

        container.innerHTML = ''; // Clear existing content
        container.classList.add('board');

        for (let col = 0; col < GRID_SIZE; col++) {
            for (let row = 0; row < GRID_SIZE; row++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.classList.add(`${containerId}-cell`)
                cell.dataset.row = row.toString();
                cell.dataset.col = col.toString();
                
                if (containerId === 'enemy')
                    cell.addEventListener('click', () => handleCellClick(col, row, gameboard, cell));

                container.appendChild(cell);
            }
        }
    }

    // Handle click events on the enemy board
    function handleCellClick(col: number, row: number, gameboard: Gameboard, cell: HTMLElement): void {
        const result = gameboard.receiveAttack(col, row);
        if (result) {
            cell.classList.add('hit');
            const ship = gameboard.getShipAt(col, row);
            if (ship && ship.isSunk()) {
                console.log(ship.getName() + ' is sunk');
                updateGrid('enemy', gameboard);
            }
        } else {
            cell.classList.add('miss');
        }
        
        //Check if all ships is sunk
        if(gameboard.allShipsSunk){
            GameFinale(gameboard);
        }
    }

    //Adding miss class to cell that near the sunk ship
    function updateGrid(containerId: string, gameboard: Gameboard) {
        const container = document.getElementById(`${containerId}-board`);
        if (!container) return;

        const cells = container.querySelectorAll('.cell');
        const missedCells = gameboard.getAllMissedCells();

        missedCells.forEach(([col, row]) => {
            const index = col * GRID_SIZE + row;
            cells[index].classList.add('miss');
        });
    }

    // Create a new game board
    function createNewGameboard(): void {
        deletePrevBoards();

        const gameContainer = document.createElement('div');
        gameContainer.classList.add('game-container');

        const playerBoardContainer = createBoardContainer('Player');
        const EnemyBoardContainer = createBoardContainer('Enemy');

        gameContainer.appendChild(playerBoardContainer);
        gameContainer.appendChild(EnemyBoardContainer);

        const mainContent = document.getElementById('app') || document.body;
        mainContent.appendChild(gameContainer);

        const playerBoard = new Gameboard('player');
        const enemyBoard = new Gameboard('enemy');

        // Create the player's board first
        createGrid('player', playerBoard);

        // Place enemy ships randomly
        enemyBoard.placeShipsRandomly();

        // Then open the ship placement window
        ShipPlacementWindow(playerBoard, () => {
            // Only create the enemy board after ship placement is complete
            createGrid('enemy', enemyBoard);
            
        });

        // Start with ship placement for the player
        
    }


    // Create a container for a game board
    function createBoardContainer(title: string): HTMLElement {
        const container = document.createElement('div');
        container.classList.add('board-container');

        const header = document.createElement('h2');
        header.textContent = `${title} board`;

        const board = document.createElement('div');
        board.id = `${title.toLowerCase()}-board`;
        board.classList.add('board');

        container.appendChild(header);
        container.appendChild(board);

        return container;
    }

    // Remove any existing game boards
    function deletePrevBoards() {
        let gameContainers = document.querySelectorAll('.game-container');
        gameContainers.forEach(container => {
            container.remove();
        });
    }

    // Initialize the game
    function startUp() {
        createNewGameboard();
        const newGameBtn = document.getElementById('new-game-btn');
        if (newGameBtn) {
            newGameBtn.addEventListener('click', createNewGameboard);
        } else {
            console.error("New game button not found");
        }
    }

    //Finish the game
    function GameFinale(gameboard:Gameboard): void{
        const finaleResult = document.getElementById('finale-result');
        if(gameboard.getName() === 'player'){
            finaleResult.textContent = 'Player Lose';
        }
        else{
            finaleResult.textContent = 'Player Win';
        }
    }

    return {
        startUp
    };
}