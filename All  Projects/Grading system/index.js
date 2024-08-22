//function for math grade
function math(){
    var CA = Number(document.getElementById("math-ca").value);
    var CA2 = Number(document.getElementById("math-ca2").value);
    var exam = Number(document.getElementById("math-exam").value);
    var total = document.getElementById("math-answer");
    total.value = CA + CA2 + exam;
}
//function for english grade
function eng(){
    var CA = Number(document.getElementById("eng-ca").value);
    var CA2 = Number(document.getElementById("eng-ca2").value);
    var exam = Number(document.getElementById("eng-exam").value);
    var total = document.getElementById("eng-answer");
    total.value = CA + CA2 + exam;
}
//function for physics grade
function phy(){
    var CA = Number(document.getElementById("phy-ca").value);
    var CA2 = Number(document.getElementById("phy-ca2").value);
    var exam = Number(document.getElementById("phy-exam").value);
    var total = document.getElementById("phy-answer");
    total.value = CA + CA2 + exam;
}
//function for chemistry grade
function chem(){
    var CA = Number(document.getElementById("chem-ca").value);
    var CA2 = Number(document.getElementById("chem-ca2").value);
    var exam = Number(document.getElementById("chem-exam").value);
    var total = document.getElementById("chem-answer");
    total.value = CA + CA2 + exam;
}
//function for average
function average(){
    var math = Number(document.getElementById("math-answer").value);
    var eng = Number(document.getElementById("eng-answer").value);
    var phy = Number(document.getElementById("phy-answer").value);
    var chem = Number(document.getElementById("chem-answer").value);
    var average = (math + eng + phy + chem)/4;
    var show_average = document.getElementById("avg");
    var name = document.getElementById("name").value;
    show_average.innerHTML = "* Dear "+name+", "+"your average score is "+average+" *";
    show_average.style.color = "orangered";
    show_average.style.fontFamily = "times new roman";
    show_average.style.fontSize = "20px";
}
//function for grade
function grade(){
    var math = Number(document.getElementById("math-answer").value);
    var eng = Number(document.getElementById("eng-answer").value);
    var phy = Number(document.getElementById("phy-answer").value);
    var chem = Number(document.getElementById("chem-answer").value);
    var average = (math + eng + phy + chem)/4;
    var grade = document.getElementById("gde");
        grade.style.color = "orangered";
        grade.style.fontFamily = "times new roman";
        grade.style.fontSize = "20px";
    
    var name = document.getElementById("name").value;
    if(average < 40){
        grade.innerHTML = "* Dear "+name+", "+"your grade  is F *";
    }
    else if(average>=40 && average < 45){
        grade.innerHTML = "* Dear "+name+", "+"your grade  is E *";
    }
    else if(average>=45 && average < 50){
        grade.innerHTML = "* Dear "+name+", "+"your grade  is D *";
    }
    else if(average>=50 && average < 55){
        grade.innerHTML = "* Dear "+name+", "+"your grade  is CD *";
    }
    else if(average>=55 && average < 60){
        grade.innerHTML = "* Dear "+name+", "+"your grade  is C *";
    }
    else if(average>=60 && average < 65){
        grade.innerHTML = "* Dear "+name+", "+"your grade  is BC *";
    }
    else if(average>=65 && average < 70){
        grade.innerHTML = "* Dear "+name+", "+"your grade  is B *";
    }
    else if(average>=70 && average < 75){
        grade.innerHTML = "* Dear "+name+", "+"your grade  is AB *";
    }
    else if(average>=75 && average <= 100){
        grade.innerHTML = "* Dear "+name+", "+"your grade  is A *";
    }
    else{
        grade.innerHTML = "* Dear "+name+", "+"sorry we are unable to grade your performance! *";
    }
}
//function for remark
function remark(){
    var math = Number(document.getElementById("math-answer").value);
    var eng = Number(document.getElementById("eng-answer").value);
    var phy = Number(document.getElementById("phy-answer").value);
    var chem = Number(document.getElementById("chem-answer").value);
    var average = (math + eng + phy + chem)/4;
    var remark = document.getElementById("rmk");
        remark.style.color = "orangered";
        remark.style.fontFamily = "times new roman";
        remark.style.fontSize = "20px";
        if(average < 40){
            remark.innerHTML = "* Fail! *";
        }
        else if(average>=40 && average < 45){
            remark.innerHTML = "* Poor! *";
        }
        else if(average>=45 && average < 50){
            remark.innerHTML = "* Below Average! *";
        }
        else if(average>=50 && average < 55){
            remark.innerHTML = "* Average! *";
        }
        else if(average>=55 && average < 60){
            remark.innerHTML = "* Above Average! *";
        }
        else if(average>=60 && average < 65){
            remark.innerHTML = "* Good! *";
        }
        else if(average>=65 && average < 70){
            remark.innerHTML = "* Very Good! *";
        }
        else if(average>=70 && average < 75){
            remark.innerHTML = "* Great! *";
        }
        else if(average>=75 && average <= 100){
            remark.innerHTML = "* Outstanding! *";
        }
        else{
            remark.innerHTML = "* Sorry, remark is unavailable for your grade! *";
        }
}

