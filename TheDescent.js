/**
 * The while loop represents the game.
 * Each iteration represents a turn of the game
 * where you are given inputs (the heights of the mountains)
 * and where you have to print an output (the index of the mountain to fire on)
 * The inputs you are given are automatically updated according to your last actions.
 **/


// game loop
while (true) {
    for (let i = 0; i < 8; i++) {
        const mountains = [];
        for (let j = 0; j < 8; j++) {
            const height = parseInt(readline());
            mountains.push(height);
        }
        const maxHeight = Math.max(...mountains);
        const maxIndex = mountains.indexOf(maxHeight);
        console.log(maxIndex)
    }
    
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    
    
    // The index of the mountain to fire on. 

}
