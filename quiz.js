const quizData = [
    {
        question: "How old is Alade?",
        a: "10",
        b: "21",
        c: "22",
        d: "24",
        correct: 'b'
    },
    {
        question: "what is the ages?",
        a: "10",
        b: "21",
        c: "22",
        d: "24",
        correct: 'b'
    },
    {
        question: "which of this is the foundation of computer science?",
        a: "mathematical science",
        b: "computer science",
        c: "data analysis",
        d: "statistics",
        correct : 'a'
    },
    {
        question: "javascript was formerly known as ?",
        a: "java",
        b: "emascript",
        c: "script",
        d: "ema",
        correct : 'b'
    },{
        question: "which of this is the foundation of computer science?",
        a: "mathematical science",
        b: "computer science",
        c: "data analysis",
        d: "statistics",
        correct : 'a'
    }
]
const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")

let currentQuiz  = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    

    const currentQuizData = quizData[currentQuiz]
    
    questionEl.innerText = currentQuizData.
    question; 
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}
function getSelected() {
    
    
    let answer = undefined

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}
function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false
    })
   
}


submitBtn.addEventListener("click", ()=>{
    const answer = getSelected()
    console.log(answer)
   

    if(answer){
        if(answer === quizData[currentQuiz].
        correct) {
            score++
            
        }
        currentQuiz++
        
        if (currentQuiz < quizData.length){
            loadQuiz()
            
        }else{
            quiz.innerHTML =`<h2>You have scored ${score} out of ${quizData.length}  </h2>`
        }
    }
    

    
        
       
})



    