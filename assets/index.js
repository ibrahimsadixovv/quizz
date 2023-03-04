const timerDisplay = document.querySelector('.timer-display');
const text = document.querySelector('.start-p');
const startBtn = document.querySelector('.start-btn');
const questionDiv = document.querySelector('.question');
const questionDiv1 = document.querySelector('.question1');
const questionDiv2 = document.querySelector('.question2');
const questionDiv3 = document.querySelector('.question3');
const questionDiv4 = document.querySelector('.question4');
const questionDiv5 = document.querySelector('.question5');
const questionDiv6 = document.querySelector('.question6');
const questionDiv7 = document.querySelector('.question7');
const questionDiv8 = document.querySelector('.question8');
const questionDiv9 = document.querySelector('.question9');
const questionDiv10 = document.querySelector('.question10');



const submitBtn = document.querySelector('.btn1');
const submitBtn2 = document.querySelector('.btn2');
const submitBtn3 = document.querySelector('.btn3');
const submitBtn4 = document.querySelector('.btn4');
const submitBtn5 = document.querySelector('.btn5');
const submitBtn6 = document.querySelector('.btn6');
const submitBtn7 = document.querySelector('.btn7');
const submitBtn8 = document.querySelector('.btn8');
const submitBtn9 = document.querySelector('.btn9');
const submitBtn10 = document.querySelector('.btn10');

const answerInput = document.querySelector('.input1');
const answerInput2 = document.querySelector('.input2');
const answerInput3 = document.querySelector('.input3');
const answerInput4 = document.querySelector('.input4');
const answerInput5 = document.querySelector('.input5');
const answerInput6 = document.querySelector('.input6');
const answerInput7 = document.querySelector('.input7');
const answerInput8 = document.querySelector('.input8');
const answerInput9 = document.querySelector('.input9');
const answerInput10 = document.querySelector('.input10');




const submitBtntr = document.querySelector('.btn1tr');
const submitBtn2tr= document.querySelector('.btn2tr');
const submitBtn3tr = document.querySelector('.btn3tr');
const submitBtn4tr = document.querySelector('.btn4tr');
const submitBtn5tr = document.querySelector('.btn5tr');
const submitBtn6tr = document.querySelector('.btn6tr');
const submitBtn7tr = document.querySelector('.btn7tr');
const submitBtn8tr = document.querySelector('.btn8tr');
const submitBtn9tr = document.querySelector('.btn9tr');
const submitBtn10tr= document.querySelector('.btn10tr');

const answerInputtr = document.querySelector('.input1tr');
const answerInput2tr = document.querySelector('.input2tr');
const answerInput3tr = document.querySelector('.input3tr');
const answerInput4tr = document.querySelector('.input4tr');
const answerInput5tr = document.querySelector('.input5tr');
const answerInput6tr = document.querySelector('.input6tr');
const answerInput7tr = document.querySelector('.input7tr');
const answerInput8tr = document.querySelector('.input8tr');
const answerInput9tr = document.querySelector('.input9tr');
const answerInput10tr = document.querySelector('.input10tr');





const neticeDiv = document.querySelector(".netice")

const stopBtn = document.querySelector('.btn10');

const  mohtesem = document.querySelector('.mohtesem')
const  ela = document.querySelector('.ela')
const  yaxsi = document.querySelector('.yaxsi')
const  muhtesem = document.querySelector('.muhtesem')
const  ala = document.querySelector('.ala')
const  iyi = document.querySelector('.iyi')

const  trButton = document.querySelector('.tr-button')
const  azButton = document.querySelector('.az-button')


const languages = document.querySelector('.languages');
const lang = document.querySelector('.lang');
const buttons = document.querySelectorAll('.button');

languages.addEventListener('click', function() {
  if (lang.style.display === 'none') {
    lang.style.display = 'block';
    buttons.forEach(function(buttons) {
      buttons.style.display = 'none';
    });
  } else {
    lang.style.display = 'none';
    buttons.forEach(function(buttons) {
      buttons.style.display = 'block';
    });
  }
 
});



trButton.addEventListener('click', function() {

  const tr = document.querySelectorAll('.tr');
  for(let i = 0; i < tr.length; i++) {
    tr[i].style.display = 'flex';
    if (text.style.display !="none"){
    text.innerHTML=" Başla! düğmesine bastıktan sonra zaman akmaya başlayacak ve karşınıza sırasıyla 10 soru çıktacaktır, bu soruları cevaplamak için 10 dakika süreniz olacaktır. Amacımınız bu 10 soruyu internet veya her hangi bir kenar yardım olmadan en hızlı ve doğru şekilde cevaplandırmaktır. Soruları Onayla düğmesine basarak veya enter'a basarak cevaplandırabilirsiniz. Bir soruya doğru cevap vermeden diğer soruya geçmeniz mümkün değildir."
 text.style.display="flex"
 text.style.alignItmes="center"
 text.style.justifyContent="center"
  }}
  
  const az = document.querySelectorAll('.az');
  for(let i = 0; i < az.length; i++) {
    az[i].style.display = 'none';
    
  }
});


azButton.addEventListener('click', function() {
const az = document.querySelectorAll('.az');
for(let i = 0; i < az.length; i++) {
  az[i].style.display = 'flex';
  if (text.style.display!="none") {
    text.innerHTML=" Başla! düyməsinə basdıqdan sonra vaxt işləməyə başlayacaq və qarşınıza sırasıyla 10 sual gələcək, bu sualları cavablandırmaq üçün 10 dəqiqə vaxtınız olacaq. Məqsədiniz bu 10 sualı internet və ya hər hansı bir kənar yardım olmadan ən sürətli və doğru şəkildə cavablandırmaqdır. Sualları Təsdiqlə düyməsinə basaraq və ya enter'ə basaraq cavablandıra bilərsiniz. Bir suala doğru cavab vermədən növbəti suala keçid etmək mümkün deyil."
    text.style.display="flex"
    text.style.alignItmes="center"
    text.style.justifyContent="center"
  }
 
}

const tr = document.querySelectorAll('.tr');
for(let i = 0; i < tr.length; i++) {
  tr[i].style.display = 'none';
}

});


let seconds = 0;
let minutes = 0;

function updateDisplay() {
  timerDisplay.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
  if (!stop) {
    seconds++;
  }
   if (seconds === 60) {
    seconds=0;
    minutes++;
  }
  else if (stop) {
    seconds+=0
  }
 
}


let intervalId;

function showQuestion() {
  intervalId = setInterval(updateDisplay, 1000);
  questionDiv.style.display = "flex";
  timerDisplay.style.display = "flex";
  text.style.display = "none";
  this.style.display="none"
  startBtn.removeEventListener('click', showQuestion);
}

startBtn.addEventListener('click', showQuestion);


var stop = false
stopBtn.addEventListener('click', function() {
  
 if (!stop) {
 
  console.log("done")
  stop=true
 }
 
});


submitBtn.addEventListener('click', function() {
  let answer1 = ["mars","merih"];
  if (answer1.includes(answerInput.value.trim().toLowerCase()) ) {
    console.log("Answer 1 is correct!");
    questionDiv1.style.display = "none";
    questionDiv2.style.display = "flex";
  } 
 
});
submitBtntr.addEventListener('click', function() {
  let answer1 = ["mars","merih"];
  if (answer1.includes(answerInputtr.value.trim().toLowerCase()) ) {
    console.log("Answer 1 is correct!");
    questionDiv1.style.display = "none";
    questionDiv2.style.display = "flex";
  } 
 
});

submitBtn2.addEventListener('click', function() {

  let answer2 = ["das kapital","das capital"];
  

  if (answer2.includes(answerInput2.value.trim().toLowerCase())) {
    console.log("Answer 2 is correct!");
    questionDiv2.style.display = "none";
    questionDiv3.style.display = "flex";
  } 
  
});

submitBtn2tr.addEventListener('click', function() {

  let answer2 = ["das kapital","das capital"];
  

  if (answer2.includes(answerInput2tr.value.trim().toLowerCase())) {
    console.log("Answer 2 is correct!");
    questionDiv2.style.display = "none";
    questionDiv3.style.display = "flex";
  } 
  
});



  submitBtn3.addEventListener('click', function() {
    let answer3 = ["mesopotamiya", "mezopotamiya","mezopotamya","mesopotamiya"];
  
    if (answer3.includes(answerInput3.value.trim().toLowerCase())) {
      console.log("Answer 3 is correct!");
      questionDiv3.style.display = "none";
      questionDiv4.style.display = "flex";
    } 
    
  });

  submitBtn3tr.addEventListener('click', function() {
    let answer3 = ["mesopotamiya", "mezopotamiya","mezopotamya","mesopotamiya"];
  
    if (answer3.includes(answerInput3tr.value.trim().toLowerCase())) {
      console.log("Answer 3 is correct!");
      questionDiv3.style.display = "none";
      questionDiv4.style.display = "flex";
    } 
    
  });

  submitBtn4.addEventListener('click', function() {
    let answer4 = ["jack london","cek london","cek landın"];
    
    if (answer4.includes(answerInput4.value.trim().toLowerCase())) {
      console.log("Answer 4 is correct!");
      questionDiv4.style.display = "none";
      questionDiv5.style.display = "flex";
    } 
    
  });
  submitBtn4tr.addEventListener('click', function() {
    let answer4 = ["jack london","cek london","cek landın"];
    
    if (answer4.includes(answerInput4tr.value.trim().toLowerCase())) {
      console.log("Answer 4 is correct!");
      questionDiv4.style.display = "none";
      questionDiv5.style.display = "flex";
    } 
    
  });
  
  submitBtn5.addEventListener('click', function() {
    let answer5 = ["epistemologiya","epistemoloji"];
  
    if (answer5.includes(answerInput5.value.trim().toLowerCase())) {
      console.log("Answer 5 is correct!");
      questionDiv5.style.display = "none";
      questionDiv6.style.display = "flex";
    } 
   
  });
  submitBtn5tr.addEventListener('click', function() {
    let answer5 = ["epistemologiya","epistemoloji"];
  
    if (answer5.includes(answerInput5tr.value.trim().toLowerCase())) {
      console.log("Answer 5 is correct!");
      questionDiv5.style.display = "none";
      questionDiv6.style.display = "flex";
    } 
   
  });

  submitBtn6.addEventListener('click', function() {
    let answer6 = ["yaqub", "yagub","yakub","yakup"];
  
    if (answer6.includes(answerInput6.value.trim().toLowerCase())) {
      console.log("Answer 6 is correct!");
      questionDiv6.style.display = "none";
      questionDiv7.style.display = "flex";
    } 
   
  });
  submitBtn6tr.addEventListener('click', function() {
    let answer6 = ["yaqub", "yagub","yakub","yakup"];
  
    if (answer6.includes(answerInput6tr.value.trim().toLowerCase())) {
      console.log("Answer 6 is correct!");
      questionDiv6.style.display = "none";
      questionDiv7.style.display = "flex";
    } 
   
  });

  submitBtn7.addEventListener('click', function() {
    let answer7 = ["hubble","hubble qanunu","habıl","hubble kanunu"];
  
    if (answer7.includes(answerInput7.value.trim().toLowerCase())) {
      console.log("Answer 7 is correct!");
      questionDiv7.style.display = "none";
      questionDiv8.style.display = "flex";
    } 
   
  });

  submitBtn7tr.addEventListener('click', function() {
    let answer7 = ["hubble","hubble qanunu","habıl","hubble kanunu"];
  
    if (answer7.includes(answerInput7tr.value.trim().toLowerCase())) {
      console.log("Answer 7 is correct!");
      questionDiv7.style.display = "none";
      questionDiv8.style.display = "flex";
    } 
   
  });

  submitBtn8.addEventListener('click', function() {
    let answer8 = ["ülgen","ulgen","uelgen","bai-ülgen","bai ülgen"," bay ülgen", "bai ulgen"];
    
    if (answer8.includes(answerInput8.value.trim().toLowerCase())) {
      console.log("Answer 8 is correct!");
      questionDiv8.style.display = "none";
      questionDiv9.style.display = "flex";
    } 
    
  });

  submitBtn8tr.addEventListener('click', function() {
    let answer8 = ["ülgen","ulgen","uelgen","bai-ülgen","bai ülgen"," bay ülgen", "bai ulgen"];
    
    if (answer8.includes(answerInput8tr.value.trim().toLowerCase())) {
      console.log("Answer 8 is correct!");
      questionDiv8.style.display = "none";
      questionDiv9.style.display = "flex";
    } 
    
  });
  
  submitBtn9.addEventListener('click', function() {
    let answer9= ["antonio vivaldi","vivaldi", "antonyo vivaldi"];
  
    if (answer9.includes(answerInput9.value.trim().toLowerCase())) {
      console.log("Answer 9 is correct!");
      questionDiv9.style.display = "none";
      questionDiv10.style.display = "flex";
    } 
 
  });

  submitBtn9tr.addEventListener('click', function() {
    let answer9= ["antonio vivaldi","vivaldi", "antonyo vivaldi"];
  
    if (answer9.includes(answerInput9tr.value.trim().toLowerCase())) {
      console.log("Answer 9 is correct!");
      questionDiv9.style.display = "none";
      questionDiv10.style.display = "flex";
    } 
 
  });

  submitBtn10.addEventListener('click', function() {

    let answer10 = ["rafael santi","rafael","rafaello","raphael","raffaello","raffaello sanzio da urbino"];
  
    if (answer10.includes(answerInput10.value.trim().toLowerCase())) {
      console.log("Answer 10 is correct!");
      questionDiv10.style.display = "none";
      neticeDiv.style.display = "flex";
      timerDisplay.style.display="none"
     document.querySelector(".neticeTimer").innerHTML = document.querySelector(".timer-display").innerHTML
     if (document.querySelector(".timer-display").innerHTML.substring(1, 2) <=3) {
      mohtesem.style.display = "flex";
     } else if (document.querySelector(".timer-display").innerHTML.substring(1, 2) <= 6 && document.querySelector(".timer-display").innerHTML.substring(1, 2) >3 )  {
      ela.style.display = "flex";
     } 
     else if (document.querySelector(".timer-display").innerHTML.substring(1, 2) < 10 && document.querySelector(".timer-display").innerHTML.substring(1, 2) > 6 ) {
      yaxsi.style.display = "flex";
     } 
    } 
  });






  submitBtn10tr.addEventListener('click', function() {

    let answer10 = ["rafael santi","rafael","rafaello","raphael","raffaello","raffaello sanzio da urbino"];
  
    if (answer10.includes(answerInput10tr.value.trim().toLowerCase())) {
      console.log("Answer 10 is correct!");
      questionDiv10.style.display = "none";
      neticeDiv.style.display = "flex";
      timerDisplay.style.display="none"
     document.querySelector(".neticeTimer").innerHTML = document.querySelector(".timer-display").innerHTML
     if (document.querySelector(".timer-display").innerHTML.substring(1, 2) <=3) {
      muhtesem.style.display = "flex";
     } else if (document.querySelector(".timer-display").innerHTML.substring(1, 2) <= 6 && document.querySelector(".timer-display").innerHTML.substring(1, 2) >3 )  {
      ala.style.display = "flex";
     } 
     else if (document.querySelector(".timer-display").innerHTML.substring(1, 2) < 10 && document.querySelector(".timer-display").innerHTML.substring(1, 2) > 6 ) {
      iyi.style.display = "flex";
     } 
    } 
  });


  function linkto() {
    if (document.querySelector(".timer-display").innerHTML.substring(1, 2) > 0) {
      console.log("Redirecting to gif.html");
      window.location.href = "./finish.html";
    }
  }
  
  setInterval(linkto, 602800);







  answerInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtn.click();
    }
  });
  answerInputtr.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtntr.click();
    }
  });
  
  answerInput2.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtn2.click();
    }
  });
  answerInput2tr.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtn2tr.click();
    }
  });
  
  
  answerInput3.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtn3.click();
    }
  });
  answerInput3tr.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtn3tr.click();
    }
  });
  
  
  answerInput4.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtn4.click();
    }
  });
  answerInput4tr.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtn4tr.click();
    }
  });
  
  
  answerInput5.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtn5.click();
    }
  });
  answerInput5tr.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtn5tr.click();
    }
  });
  
  
  answerInput6.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtn6.click();
    }
  });
  answerInput6tr.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtn6tr.click();
    }
  });
  
  answerInput7.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtn7.click();
    }
  });
  answerInput7tr.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtn7tr.click();
    }
  });
  
  
  answerInput8.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtn8.click();
    }
  });
  answerInput8tr.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtn8tr.click();
    }
  });
  
  
  answerInput9.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtn9.click();
    }
  });

  answerInput9tr.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtn9tr.click();
    }
  });
  
  
  answerInput10.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtn10.click();
    }
  });
 answerInput10tr.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtn10tr.click();
    }
  });
