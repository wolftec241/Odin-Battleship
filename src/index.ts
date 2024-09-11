// Import necessary files and styles
import './index.html';
import './style/style.css';
import { Dom } from './scripts/Dom';

// Main function to start the application
function main(): void {
    // Initialize the DOM and start the game
    document.addEventListener('DOMContentLoaded', () => {
        const dom = Dom();
        dom.startUp();
    });
}

// Run the main function when the script loads
main();