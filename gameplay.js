/**
 * @class
 * @description Controls the actual execution of the game. When a player makes a move Gameplay validates it before adding it as an element of the board class.
 * Gameplay also checks for a winner and if one if found terminates the game.
 */

function Gameplay ()
{
    this.board_rows = 6; //How many rows the board has.
    this.board_cols = 7; //How many columns the board has.
    have_winner = false;
    player1_turn = true;
    let play_board = new Board(this.board_rows, this.board_cols);
}

/**
 * @description Main function for primary gameplay.
 */
Gameplay.prototype.run = function ()
{
    while (!have_winner) //Gameplay loop
    {//Do Stuff

        play_board.renderBoard();
        

        have_winner = true;
    }
}

Gameplay.prototype.isValidMove = function (row, col)
{

}

Gameplay.prototype.addToBoard = function (row, col)
{

}

Gameplay.prototype.checkForWin = function ()
{

} 