 let ver;
 let cup;
 let myscore=0;
 let uscore=0;

 let u = document.getElementById("u");
let my = document.getElementById("my");



let gameover= document.getElementById("gameover");
let finish= document.getElementById("finish");



let rg = document.getElementById("rg");

let rock = document.getElementById("rock");
let papper = document.getElementById("papper");
let cutter = document.getElementById("cutter");


 
let rockimg = document.getElementById("rockimg");
let papperimg = document.getElementById("papperimg");
let cutterimg = document.getElementById("cutterimg");



let rockimg_c = document.getElementById("rockimg_c");
let papperimg_c = document.getElementById("papperimg_c");
let cutterimg_c = document.getElementById("cutterimg_c");

let win = document.getElementById("win");
let loser = document.getElementById("loser");
let tie = document.getElementById("tie");

let sad = document.getElementById("sad");
let hap = document.getElementById("hap");
let cur = document.getElementById("cur");




rock.addEventListener("click",()=>{
    rg.style.display="block";
    console.log("what");

    papperimg.style.display="none";
    rockimg.style.display="block";
    cutterimg.style.display="none";
    ver=Math.random();
   

    if(ver>=0&&ver<=1/3){
        cup="rock";
        papperimg_c.style.display="none";
        rockimg_c.style.display="block";
        cutterimg_c.style.display="none";
        console.log( "system" + cup);
        
    }
    else if(ver>1/3&&ver<=2/3){
        cup="papper";
        papperimg_c.style.display="block";
        rockimg_c.style.display="none";
        cutterimg_c.style.display="none";
        console.log("system" + cup);
    
    }
    else{
        papperimg_c.style.display="none";
        rockimg_c.style.display="none";
        cutterimg_c.style.display="block";
    
        cup="cutter";
        console.log( "system" + cup);
    }








    // xjsifdidf

   if("rock"==cup){

    console.log("tie");
    tie.style.display="block";
    win.style.display="none";
    loser.style.display="none";

    cur.style.display="block";
    hap.style.display="none";
    sad.style.display="none";

   }
   else if(cup=="papper"){
    console.log("looser");
    tie.style.display="none";
    win.style.display="none";
    loser.style.display="block";

    hap.style.display="block";
    sad.style.display="none";
    cur.style.display="none";
    myscore+=1;

   }
   else if( cup == "cutter"   ){
     console.log("win");
     uscore+=1;
     tie.style.display="none";
     win.style.display="block";
     loser.style.display="none";


     sad.style.display="block";
     hap.style.display="none";
     cur.style.display="none";


   }
   u.innerHTML=`${uscore}`;
   my.innerHTML=`${myscore}`;
   console.log(myscore);
   if(myscore==10){
    gameover.style.display="block";       //    ===========================================================         
   }
   if(uscore==10){
    finish.style.display="block";
    console.log('$');
   }
})



papper.addEventListener("click",()=>{

 rg.style.display="block";
    console.log("what");

    papperimg.style.display="block";
    rockimg.style.display="none";
    cutterimg.style.display="none";

    ver=Math.random();
   

    if(ver>=0&&ver<=1/3){
        cup="rock";
        papperimg_c.style.display="none";
        rockimg_c.style.display="block";
        cutterimg_c.style.display="none";
        console.log( "system" + cup);
        
    }
    else if(ver>1/3&&ver<=2/3){
        cup="papper";
        papperimg_c.style.display="block";
        rockimg_c.style.display="none";
        cutterimg_c.style.display="none";
        console.log("system" + cup);
    
    }
    else{
        papperimg_c.style.display="none";
        rockimg_c.style.display="none";
        cutterimg_c.style.display="block";
    
        cup="cutter";
        console.log( "system" + cup);
    }







    // xjsifdidf

   if("papper"==cup){
    console.log("tie");
    tie.style.display="block";
    win.style.display="none";
    loser.style.display="none";

    cur.style.display="block";
    hap.style.display="none";
    sad.style.display="none";


   }
   else if(cup=="rock"){
    console.log("winner");
    uscore+=1;
    tie.style.display="none";
    win.style.display="block";
    loser.style.display="none";

    cur.style.display="none";
    hap.style.display="none";
    sad.style.display="block";
   }
   else if( cup == "cutter"   ){
     console.log("looser");
     tie.style.display="none";
     win.style.display="none";
     loser.style.display="block";
 
     cur.style.display="none";
     hap.style.display="block";
     sad.style.display="none";
     myscore+=1;
   }
   u.innerHTML=`${uscore}`;
   my.innerHTML=`${myscore}`;
   console.log(myscore);

   if(myscore==10){
    gameover.style.display="block";       //    ===========================================================         
   }
  if(uscore==10){
    finish.style.display="block";
    console.log('$');
   }
    
    
})




// ------




cutter.addEventListener("click",()=>{

    rg.style.display="block";
    console.log("what");

    papperimg.style.display="none";
    rockimg.style.display="none";
    cutterimg.style.display="block";
    ver=Math.random();
   

    if(ver>=0&&ver<=1/3){
        cup="cutter";
        papperimg_c.style.display="none";
        rockimg_c.style.display="none";
        cutterimg_c.style.display="block";
        console.log( "system" + cup);
        
    }
    else if(ver>1/3&&ver<=2/3){
        cup="papper";
        papperimg_c.style.display="block";
        rockimg_c.style.display="none";
        cutterimg_c.style.display="none";
        console.log("system" + cup);
    
    }
    else{
        papperimg_c.style.display="none";
        rockimg_c.style.display="block";
        cutterimg_c.style.display="none";
    
        cup="rock";
        console.log( "system" + cup);
        
    }








    // xjsifdidf

   if("cutter"==cup){
    console.log("tie");
    tie.style.display="block";
    win.style.display="none";
    loser.style.display="none";

    cur.style.display="block";
    hap.style.display="none";
    sad.style.display="none";
   }
   else if(cup=="papper"){
    console.log("win");
    uscore+=1;
    tie.style.display="none";
    win.style.display="block";
    loser.style.display="none";

    cur.style.display="none";
    hap.style.display="none";
    sad.style.display="block";
   }
   else if( cup == "rock"   ){
     console.log("looser");
     myscore+=1;
     
     tie.style.display="none";
     win.style.display="none";
     loser.style.display="block";
 
     cur.style.display="none";
     hap.style.display="block";
     sad.style.display="none";
   }
    
   u.innerHTML=`${uscore}`;
    my.innerHTML=`${myscore}`;
    console.log(myscore);

    if(myscore==10){
        gameover.style.display="block";       //    ===========================================================         
    }

   if(uscore==10){
        finish.style.display="block";
        console.log('$');
   } 
    
})











