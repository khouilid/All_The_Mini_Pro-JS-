let ROCK = document.getElementById("ROCK");
let SCAISSORS = document.getElementById("SCAISSORS");
let PAPER = document.getElementById("PAPER");
let BTN = document.getElementById("btn");
let BTN_1 = document.getElementById("btn_1");
let para_ROCK = document.getElementById("para_ROCK");
let para_PAPER = document.getElementById("para_PAPER");
let para_SCAISSORS = document.getElementById("para_SCAISSORS");
let score_int = document.getElementById("SCORE"); // the UI score
let text = document.getElementById("text");//if the user lose or win 
let score = 0;
// btn for restaert the game 
BTN_1.addEventListener("click" , function () {
    SCAISSORS.classList.add("main__img");
    SCAISSORS.style.display = "";
    document.getElementById("papers").src = "images/icon-paper.svg";
    PAPER.classList.add("main__img_1");
    PAPER.classList.remove("main__img_2");
    PAPER.classList.remove("main__img_3");
    document.getElementById("rocks").src = "images/icon-rock.svg";
    ROCK.classList.add("main__img_2");
    ROCK.classList.remove("main__img_1");
    ROCK.classList.remove("main__img_3");
    para_ROCK.style.display = "none";
    para_PAPER.style.display = "none";
    para_SCAISSORS.style.display = "none";
    BTN.style.display = "none";
    let x;
});
// the function how decaide the win or lose 
function Rols (x, a , b ,c, d, e, f, g, h, m) {
    if ( x == 0 ) {
        document.getElementById("rocks").src = "images/icon-" + a +".svg";
        ROCK.classList.add("main__img_" + b);
        ROCK.classList.remove("main__img_" + c);
        score++;
        score_int.innerHTML = score;
        text.innerHTML = "YOU WIN";
    }else if ( x == 1) {
        document.getElementById("rocks").src = "images/icon-" + d + ".svg";
        ROCK.classList.add("main__img_" + e);
        ROCK.classList.remove("main__img_" + f);
        score--;
        score_int.innerHTML = score;
        text.innerHTML = "YOU LOSE";
    }else {
        document.getElementById("rocks").src = "images/icon-" + g + ".svg";
        ROCK.classList.add("main__img_" + h);
        ROCK.classList.remove("main__img_" + m);
        text.innerHTML = "MATCH NULL";
    }
}
// when the user click the ROCK
ROCK.addEventListener("click" , function () {
    let x = Math.floor(Math.random() * 3);
    SCAISSORS.style.display = "none";
    BTN.style.display = 'block';
    para_ROCK.style.display = "block";
    document.getElementById("papers").src = "images/icon-rock.svg";
    PAPER.classList.add("main__img_2");
    PAPER.classList.remove("main__img_1");
    Rols ( x, "scissors", 3, 2 , "paper", 1, 2, "rock", 2, 1 );
}) ;
// when the user click the PAPER
PAPER.addEventListener("click" , function () {
    let x = Math.floor(Math.random() * 3);
    SCAISSORS.style.display = "none";
    BTN.style.display = 'block';
    para_PAPER.style.display = "block";
    Rols ( x,"rock", 2, 1 ,"scissors", 3, 2 , "paper", 1, 2);
 });
// when the user click the SCAISSORS 
SCAISSORS.addEventListener("click" , function () {
    let x = Math.floor(Math.random() * 3);
    SCAISSORS.style.display = "none";
    document.getElementById("papers").src = "images/icon-scissors.svg";
    PAPER.classList.add("main__img_3");
    PAPER.classList.remove("main__img_1");
    BTN.style.display = 'block';
    para_SCAISSORS.style.display = "block";
    Rols ( x,"paper", 1, 2 ,"rock", 2, 1 , "scissors", 3, 2);
});