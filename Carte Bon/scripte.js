let carte = document.getElementById("carte");
let ID_input = document.getElementById("ID_input");
let years = document.getElementById("years");
let date_years = document.getElementById("date_years");
let date_day = document.getElementById("date_day");
let Month = document.getElementById("months");
let input = document.getElementById("CVV");
let UiController = (function () {
    return {
        retationControl: function () {
            carte.classList.add("anime");
            document.getElementById("face__1").style.display = "none";
            document.getElementById("face__2").style.display = "block";
        },
        First__input: function () {
            let first__input = document.getElementById("first__input").value;
            let  inputArry = first__input.split('');
            for ( var i = 0 ; i < inputArry.length; i++){
                if ( i <= 3 || i >= 12){
                    document.getElementById("code_" + i).innerHTML = inputArry[i];
                    if (inputArry[0] == 5 && inputArry[1] == 3 && inputArry[2] == 2 && inputArry[3] == 4){
                       document.getElementById("logo").src = "images/mastercard.png";
        
                    }else if ( inputArry[0] == 3 && inputArry[1] == 4 && inputArry[2] == 3 && inputArry[3] == 4 ){
                        document.getElementById("logo").src = "images/amex.png";
                    }else{
                        document.getElementById("logo").src = "images/visa.png";
                    }
                }else{
                    document.getElementById("code_" + i).innerHTML = "$";
                }
            };
        },
        id_input: function () {
            let ID = ID_input.value.toUpperCase();
            document.getElementById("ID_Cart").innerHTML = ID;
        },
        third_input: function(){
            let text = input.value;
            let texto = text.split('')
            for ( var y = 0 ; y < texto.length; y++){
                document.getElementById("span_" + y).innerHTML = "*";
            }
        },
    }
})();
//for the rotation carte
input.addEventListener("focus", function () {
  UiController.retationControl();
})
input.addEventListener("input", function (){
    UiController.third_input();
});
// for the big code 
first__input.addEventListener("input", function () {
    UiController.First__input();
 })      
// the user name 
ID_input.addEventListener("input", function () {
    UiController.id_input();
})
// date of the finish
years.addEventListener("click", function(e) {
        let target = e.target;
        if (target.matches("option")){
            date_years.innerHTML = this.value;
        }
 });
Month.addEventListener("click", function(e) {
    let target = e.target;
    if (target.matches("option")){
        date_day.innerHTML = this.value;
    }
}); 
