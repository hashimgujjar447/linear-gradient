
      
      let rgb1="#004773";
        let rgb2="#54d542";

  //Generating the random number      

        let colorGenerator=()=>{
            let colorNum="0123456789ABCDEF";
            let color="#";
            for(let i=0 ; i<6 ; i++)
        {
      color=color+ colorNum[Math.floor(Math.random()*16)];
        }
       return color;
        }
 // handling the event perform in button 1 and also changing the gradient color
     const handleButton1=()=>{
         rgb1=colorGenerator();
         btn1.innerText=rgb1;
         btn1.style.backgroundColor=rgb1;
        
       document.body.style.backgroundImage= `linear-gradient(to right, ${rgb1},${rgb2})`;
       copyDiv.innerHTML=`background-image: linear-gradient(to right, ${rgb1}, ${rgb2} );`
        
     }
    // handling the event perform in button 2 and also changing the gradient color  
     
     
 const handleButton2=()=>{
 rgb2=colorGenerator();
 console.log(rgb2);
 btn2.innerText=rgb2;
 btn2.style.backgroundColor=rgb2;
  document.body.style.backgroundImage= `linear-gradient(to right, ${rgb1},${rgb2})`;
       copyDiv.innerHTML=`background-image: linear-gradient(to right, ${rgb1}, ${rgb2} );`
 }


//Step no 1:Accessing my html elements
        const btn1=document.querySelector("#myButton");
        const btn2=document.querySelector("#myButton2");
        const copyDiv=document.querySelector(".copyCode");

//Step no 2: Adding event listener on my buttons
      btn1.addEventListener("click",handleButton1);
      btn2.addEventListener("click",handleButton2);
      copyDiv.addEventListener("click",()=>{
     navigator.clipboard.writeText(copyDiv.innerText);
     alert("Gradient color is copied on your clipBoard");
 })
