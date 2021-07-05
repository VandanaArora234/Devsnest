
const quizDB=[

    {
        question:"Q1. What is the full form of HTML?",
        a:"Hello to my land",
        b:"Hey text markup Language",
        c:"Hypertext make up language",
        d:"Hypertext Markup Language",
        ans:"ans4"
    },

    {
        question:"Q2. What is the full form of CSS?",
        a:"Cascading Style Sheets",
        b:"Cascading Simple Sheets",
        c:"Castle Style Sheets",
        d:"Cascading Style Shine",
        ans:"ans1"
    },

    {
        question:"Q3. What is the full form of HTTP?",
        a:"Hyper Text Transfer Product",
        b:"Hyper Text Test Protocol",
        c:"Hyper Text Transfer Procure",
        d:"Hey Tranfer Protocol",
        ans:"ans3"
    },
    {
        question:"Q4. What is the full form of JS?",
        a:"Java Settler",
        b:"Java Script",
        c:"Jengo Settler",
        d:"Jumbo Script",
        ans:"ans2"
    },

];

const question=document.querySelector('.question');
const opt1=document.querySelector('#option1');
const opt2=document.querySelector('#option2');
const opt3=document.querySelector('#option3');
const opt4=document.querySelector('#option4');
const sub=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');
let quesCnt=0;
let score=0;

function quesCard(){
    
    question.innerHTML=quizDB[quesCnt].question;
    opt1.innerHTML=quizDB[quesCnt].a;
    opt2.innerHTML=quizDB[quesCnt].b;
    opt3.innerHTML=quizDB[quesCnt].c;
    opt4.innerHTML=quizDB[quesCnt].d;
}
quesCard();
let store=0;
function checked()
{
    answers.forEach((i)=>{
        if(i.checked)
     store=i.id;
    })
    return store;
}

function deselect()
{
    answers.forEach((i)=>{
        i.checked=false;
    })
}
sub.addEventListener('click',()=>{
    const answ=checked();
 if(answ===quizDB[quesCnt].ans)
 score++;

 quesCnt++;

if(quesCnt<quizDB.length)
{
 deselect();
quesCard();

}
else{
showScore.innerHTML=`<h3> You Scored ${score}/${quizDB.length} </h3>`
}
 
})








