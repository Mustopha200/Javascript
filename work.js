function check(number){
    if (number > 0){
        return "Positive"
    }else if(number == 0){
        return "zero"
    }else if(number < 0){
        return "negative"
    }
}
check(5)
'Positive'
check(0)
'zero'
check(-23)
'negative'

function time(hour){
    if (hour < 12){
        return "Good morning"
    }else if (hour >12 && hour <17){
        return "Good afternoon"
    }else if (hour > 17){
        return "Good evening"
    }
}
time(15)
'Good afternoon'
time(9)
'Good morning'
time(19)
'Good evening'


function score(grade){
    if (grade >= 90){
        return "Excellent"
    }else if(grade >=70 && grade <=89){
        return "Good"
    }else if(grade >=50 && grade <=69){
        return "Pass"
    }else if(grade <50){
        return "Fail"
    }
}
undefined
score(166)
'Excellent'
score(86)
'Good'
score(22)
'Fail'

function check(weather){
    if(weather == "rainy"){
        return "Take an umbrella"
    }else if(weather == "sunny"){
        return "Wear sunscreen"
    }else if(weather == "cold"){
        return "Dress Warm"
    }
}
undefined
check("sunny")
'Wear sunscreen'
check("rainy")
'Take an umbrella'
check("cold")
'Dress Warm'

function check(age){
    if(age < 13){
        return "Child"
    }else if(age >=13 && age <=19){
        return "Teenager"
    }else if(age>=20 && age<=64){
        return "Adult"
    }else if(age >= 65){
        return "Senior"
        }
}
undefined
check(66)
'Senior'
check(31)
'Adult'
check(19)
'Teenager'

function check(day){
    if(day == "Saturday" || day== "Sunday"){
        return "It's the weekend"
}else if(day == ""){
    return "It's a weekday"
}
}
undefined
check("tuesday")
undefined
check("Sunday")
"It's the weekend"

function check(traffic){
    if(traffic == "green"){
        return "Go"
}else if(traffic == "yellow"){
    return "slow down"
}else if (traffic == "red"){
    return "stop"
}
}

undefined
check("yellow")
'slow down'
check("red")
'stop'
check("red")
'stop'

function check(role){
    if(role == "admin"){
        return "welcome admin"
    }else if(role == "editor"){
        return "welcome editor"
    }else if(role == "viewer"){
        return "welcome viewer"
    }else{
        return "role not reognised"
    }
}
undefined
check("doctor")
'role not reognised'
check("admin")
'welcome admin'

function check(attendance){
    if(attendance == 100){
        return "Perfect attendance"
    }else if(attendance >= 75){
        return "Good attendance"
    }else if(attendance <75){
        return "Low attendance"
}
}
undefined
check(67)
'Low attendance'
check(96)
'Good attendance'
check(100)
'Perfect attendance'