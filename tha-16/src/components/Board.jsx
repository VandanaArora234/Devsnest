
function Cell(){
    return(
        <div className="col"></div>
    );
}
function Row(){
    return(

    <div className="row">
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
    </div>

    );
}


function Board()
{
    return(
        <div className="chess-board">
         <Row />
         <Row />
         <Row />
         <Row />
         <Row />
         <Row />
         <Row />
         <Row />
        </div>
    );
}

export default Board;