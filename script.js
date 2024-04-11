let password = '007007'
let num = 0
let seyf
do{
  seyf = prompt( "Введите пароль")
  if(seyf === password ){
    console.log("welcome");
  }else if (seyf !== password){
    num++
    if (num >= 3 ){
      console.log("У тебя было три попытка даун");
      break;
    }
  }

  
} while(seyf !== password)

  