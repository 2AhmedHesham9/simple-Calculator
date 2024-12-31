

function add0()
{  
  const h= document.getElementById("num");
  let text = "0";
  h.insertAdjacentHTML("beforeend", text);

}

function add1()
{
  const h= document.getElementById("num");
 
  let text = "1";
  h.insertAdjacentHTML("beforeend", text);


 

}

function add2()
{


  const h= document.getElementById("num");
  let text = "2";
  h.insertAdjacentHTML("beforeend", text);
}

function add3()
{

 const h= document.getElementById("num");
  let text = "3";
  h.insertAdjacentHTML("beforeend", text);
}

function add4()
{

 const h= document.getElementById("num");
  let text = "4";
  h.insertAdjacentHTML("beforeend", text);
}

function add5()
{


   const h= document.getElementById("num");
  let text = "5";
  h.insertAdjacentHTML("beforeend", text);
}
function add6()
{


   const h= document.getElementById("num");
  let text = "6";
  h.insertAdjacentHTML("beforeend", text);
}

function add7()
{

 const h= document.getElementById("num");
  let text = "7";
  h.insertAdjacentHTML("beforeend", text);
}

function add8()
{


   const h= document.getElementById("num");
  let text = "8";
  h.insertAdjacentHTML("beforeend", text);
}

function add9()
{

 const h= document.getElementById("num");
  let text = "9";
  h.insertAdjacentHTML("beforeend", text);
}


function addD()
{


   const h= document.getElementById("num");
  let text = "/";
  h.insertAdjacentHTML("beforeend", text);
}
function addm()
{


   const h= document.getElementById("num");
  let text = "*";
  h.insertAdjacentHTML("beforeend", text);
}

function addp()
{


   const h= document.getElementById("num");
  let text = "+";
  h.insertAdjacentHTML("beforeend", text);
}
function addmi()
{
   const h= document.getElementById("num");
  let text = "-";
  h.insertAdjacentHTML("beforeend", text);
}


function del()
{


   document.getElementById("num").innerHTML="";
 

}







function eq()
{
   var var1=document.getElementById("num").innerHTML;
//  console.log(var1.split(''));  

   
   var numm=1
   var pro=1 
   for(var i=0;i<var1.length;i++)
   {
    if(var1[i]!='*')
    {
      
        numm=Number(var1[i]);
        
    
    }
   
    pro=pro*numm;
    numm=1;
   
 

   }

  document.getElementById("result").innerHTML=pro;
   

}
function subt()
{
   var  var2=document.getElementById("num").innerHTML;
   console.log(var2)
   
   var numm=0;
   var sub=0;
   for(var i=0;i<var2.length;i++)
   {
    if(var2[i]!='-')
    {
        numm=Number(var2[i]);
      //  console.log(numm)
    }
    if(i==0){numm=numm*-1}
   sub=sub-numm;
        numm=0;
   }
   document.getElementById("num").innerHTML=sub
   console.log(sub);
   

}
function divv()
{
   var  var3=document.getElementById("num").innerHTML;
   // console.log(var1)
   
   var numm=0
   var div=0
   for(var i=0;i<var3.length;i++)
   {
    if(var3[i]!='/')
    {
        numm=Number(var3[i])
      
    }
   if(i==0){
    div=numm
    numm=1 }
  div=div/numm
    

   }
   console.log(div)
  //  document.getElementById("result").innerHTML=div

}