  function updateProductNumber(product,price, isIncreasing ){ 
    const productInput = document.getElementById(product + '-number'); 
    let productNumber = productInput.value ; 
    
       if (isIncreasing == true) {
        productNumber =  parseInt(productNumber) + 1 ; 
       } else if(productNumber > 0) {
        productNumber = parseInt(productNumber)-1
       }    
       productInput.value = productNumber;
       
            //update case total       
       const productTotal = document.getElementById(product+ '-total') 
         productTotal.innerText= productNumber * price
  }
 
 //phone increase and decrease event 
    document.getElementById("phone-plus").addEventListener("click",function(){ 
      updateProductNumber('phone',1229, true)

    }) ;
    document.getElementById("phone-minus").addEventListener("click",function(){ 
      updateProductNumber("phone",1229,false)
    })
 

 
  //event for plus 
document.getElementById("case-plus").addEventListener("click",function(){ 
     updateProductNumber('case',59,true)
}) 
// event for minus button 
 document.getElementById("case_minus").addEventListener("click",function(){ 
   updateProductNumber('case',59,false)

 })