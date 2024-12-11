/*==================== Plyr ====================*/
/* Initialize Plyr for both players */
const player1 = new Plyr('#player1', {});
const player2 = new Plyr('#player2', {});

/* Expose players so they can be used from the console */
window.player1 = player1;
window.player2 = player2;
/*==================== Plyr ====================*/