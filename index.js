
function saturdayFun(activity){
 if(activity===undefined ){
   return "This Saturday, I want to roller-skate!"
    }
    return (`This Saturday, I want to ${activity}!`)

}console.log(saturdayFun());

function mondayWork(activity){
    if(activity===undefined ){
       return "This Monday, I will go to the office."
    }
   return (`This Monday, I will ${activity}.`)
   
}console.log(mondayWork());


function wrapAdjective(initializer="||"){
    return function(msg="a dedicated programmer"){
        return `You are ${initializer}${msg}${initializer}!`
    }
 }