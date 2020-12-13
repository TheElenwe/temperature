daynight=2
count=2

let counter=setInterval(function(){
    
   if (daynight>12 || daynight<0){
    
      count *=-1
      daynight +=count
   
   console.log(daynight)
    }
    else if (daynight<8){
      console.log(`${daynight}\u00b0 on`)
    }
    else if (daynight>=8){
      console.log(`${daynight}\u00b0 off`)
    }
   daynight+=count

},500)
