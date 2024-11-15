// Ship class represents a ship in the Battleship game
export class Ship {
  name:string;
  shipLength: number;
  hitPositions: Set<string>;  // Track specific hit positions
  sunk: boolean;
  orientation:'vertical'| 'horizontal';

  // Constructor initializes a ship with a given length
  constructor(name:string, length: number, orientation: 'vertical'| 'horizontal') {
    this.name = name;
    this.shipLength = length;
    this.hitPositions = new Set();  // Initialize empty set of hit positions
    this.orientation = orientation;
  }

  // Returns the length of the ship
  public getLength(): number {
      return this.shipLength;
  }

  public getName():string{
    return this.name;
  }

  // Returns the number of hits the ship has taken
  public getNumberOfHits(): number {
    return this.hitPositions.size;
  }

  // Checks if the ship is sunk
  public isSunk(): boolean {
    return this.hitPositions.size >= this.shipLength;
  }

  // Registers a hit on the ship and checks if it's sunk
  public getHit(position: string): void {
    this.hitPositions.add(position);
    this.isSunk();
  }

  isVertical(){
    if(this.orientation === 'vertical')
        return true;
    return false;
  }
}