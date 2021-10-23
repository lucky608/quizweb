const data = [
    {
      question: "Who invented JavaScript?",
     
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich",
        d: "none",
        correct: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
   
        a: "Node.js",
        b: "TypeScript",
        c: "npm",
        d:"none",
        correct: "c"
    },
    

    {
      question: "what is your name?",
   
        a: "Node.js",
        b: "TypeScript",
        c: "npm",
        d:"none",
        correct: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
     
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint",
        correct: "d"
    }
  ];
  const quiz=document.getElementById('quiz');
  const answerEls=document.querySelectorAll(".answer");

  const queEl=document.getElementById
  ('question');
  const a_text=document.getElementById('a_text');
  const b_text=document.getElementById('b_text');
  const c_text=document.getElementById('c_text');
  const d_text=document.getElementById('d_text');
  const nextBtn=document.getElementById('next');
  const prevBtn=document.getElementById('previue');
  const submitBtn=document.getElementById('submit');


  let currentQuiz=0;
  let score=0;
  let again=0;
  
    loadQuiz();

    function loadQuiz() {
      ansDetector();

      const currentQuizData=data[currentQuiz];
     queEl.innerText=currentQuizData.question;
      a_text.innerText=currentQuizData.a;
      b_text.innerText=currentQuizData.b;
      c_text.innerText=currentQuizData.c;
      d_text.innerText=currentQuizData.d;

    
    };
    function getSelected(){
      let answer=undefined;
      answerEls.forEach(answerEl => {
         if(answerEl.checked){
            answer= answerEl.id;
         }     
      });
       return answer;
    }

    function ansDetector(){
      answerEls.forEach(answerEl => {
      
           answerEl.checked=false;
           
     });

    }

    nextBtn.addEventListener("click",() =>{
    
       const answer = getSelected();
       console.log(answer);
       if(answer){
         if(answer===data[currentQuiz].correct){
             score++
         }
        currentQuiz++;
        if(currentQuiz<data.length){
        
         loadQuiz();
        }
        else{
          quiz.innerHTML = `<h1> You completed all the question. Press the submit button.</h1>`;
        }
        getSelected();
       }
      console.log(score);

      
     
    });
    prevBtn.addEventListener("click",()=>{
      
      currentQuiz--;
      if(currentQuiz>=0){
        score--;
      loadQuiz();
      }else{
        currentQuiz=0;
      }
    });
    submitBtn.addEventListener("click",()=>{
     
      quiz.innerHTML= `<h1>You answered correctly at ${score}/${data.length} questions.</h1>`;
      quiz.style.color= '#006400' ;
      quiz.style.textAlign="center";
    });
  