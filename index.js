// Your code here
function saturdayFun(activity="roller-skate") {
 return `This Saturday, I want to ${activity}!`;
}

saturdayFun();
saturdayFun("swimming");

let mondayWork=function (activity="go to the office"){
  return `This Monday, I will ${activity}.`
}
mondayWork();
mondayWork("uni");



function wrapAdjective(a="*") { 
  let innerFunction =  function(b="special") { 
    return `You are ${a}${b}${a}!`
  }
  return innerFunction
}

wrapAdjective("*")("a hard worker")
wrapAdjective("||")("a dedicated programmer")

const Calculator={
 add : function (a,b) { return a+b; },
 subtract : function (a,b) { return a-b; },
 multiply : function (a,b) { return a*b; },
 divide : function (a,b) { return a/b; }
};

  arrayOfTransforms = [
          function(a){ return a * 2 },
          function(a){ return a + 1000},
          function(a){ return a % 7 }
        ]

function actionApplyer(value,a){
  if(a.length===0){
  return a.length;
  }else{
    let result1=a[0](value);
    let result2=a[1](result1);
    let result3=a[2](result2);
  }
<<<<<<< HEAD
    return result3;
=======
    let message = `${value}`+","+" multiplied by 2, added to 1000 and then modulo 7 is " + `${result3}` +". Apply each function in the Array of functions on the given base"+` (${value}) `+"OR on the result of the use of the previous function to get this result";
    return message;
>>>>>>> 87efbd02204790bfab27adb82a5d57ce1e57358f
  }
}

actionApplyer(13, arrayOfTransforms);


<<<<<<< HEAD
  
=======
    


>>>>>>> 87efbd02204790bfab27adb82a5d57ce1e57358f


