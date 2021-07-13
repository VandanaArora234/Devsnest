

function WhiteB(){
    return (
        <div className="white"></div>
    );
}

function BlackB(){
    return (
        <div className="black"></div>
    );
}

var arr1=[];

  
for(let i=0; i < 4 ;i++)
{
  arr1.push(<BlackB/>);
  arr1.push(<WhiteB/>);
}
var arr2=[];

for(let i=0;i < 4 ;i++)
{
  arr2.push(<WhiteB/>);
  arr2.push(<BlackB/>);
}


function Row1() {
    return (
        <div className='row'>
            {arr1}
        </div>
    );
}

function Row2() {
    return (
        <div className='row'>
            {arr2}
        </div>
    );
}

var arr=[];

for(let i=0;i<4;i++)
{
    arr.push(<Row2 />);
    arr.push(<Row1 />);
}
 function Board(){
 
   return(
    <div className="board">
     {arr}
    </div>
        );
}

export default Board;
