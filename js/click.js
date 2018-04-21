
var productOneSelected=false;
var productTwoSelected=false;

var ProductIds=["london","amsterdam"];

function clickHandler(product){
 if(product==1){
   if(!productOneSelected)
    {productOneSelected=true;
     SelectIt(document.getElementById(ProductIds[product-1]));
     localStorage.productOne='true';
     product=0;
    } 
   
  }
 if(product==2){
   if(!productTwoSelected)
    {productTwoSelected=true;
     SelectIt(document.getElementById(ProductIds[product-1]));
     localStorage.productTwo='true';
     product=0;
    } 
  }
 if((product==1)&&(productOneSelected))
  {UnselectIt(document.getElementById(ProductIds[product-1]));
   localStorage.productOne='false';
  }
 if((product==2)&&(productTwoSelected))
  {UnselectIt(document.getElementById(ProductIds[product-1]));
   localStorage.productTwo='false';
  }  
}

function SelectIt(Id){
 //Id.setAttribute("style","border: red solid 2px;");
 Id.style.borderColor="red"; 
 console.log('localStorage '+localStorage.productOne+' '+localStorage.productTwo);
}

function UnselectIt(Id){
 //Id.setAttribute("style","border: grey solid 2px;");
 Id.style.borderColor="grey";c
 console.log('localStorage '+localStorage.productOne+' '+localStorage.productTwo);

}

function eraseLocalStorage(){
 localStorage.productOne=false;
 localStorage.productTwo=false;
 localStorage.goldenCard=false;
 console.log('localStorage '+localStorage.productOne+' '+localStorage.productTwo);
}

function goldenCardBonus(){
 if(localStorage.goldenCard='false') 
  {document.getElementById("goldencard").style.color="red"; 
   localStorage.goldenCard=true;
  }
 else
  {document.getElementById("goldencard").style.color="black"; 
   localStorage.goldenCard=false;
  }  
}

