var productTotalAmount = document.getElementById("productTotalAmount");
var shippingCharges = document.getElementById("shippingCharge");
var total_cart_amt = document.getElementById("total_cart_amt");
var discount_code1 = document.getElementById("discount_code1");
const decreaseNumber = (decrease, itemprice) => {
    let itemVal = document.getElementById(decrease);
    itemprice = document.getElementById(itemprice);
    if (itemVal.value <= 0) {
        itemVal.value = 0;

    } else {
        itemVal.value = parseInt(itemVal.value) - 1;
        itemVal.style.backgroundColor = "#fff";
        itemVal.style.color = "#000";
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - 15;
        productTotalAmount.innerHTML = parseInt(productTotalAmount.innerHTML) - 15;
        total_cart_amt.innerHTML = parseInt(productTotalAmount.innerHTML) + parseInt(shippingCharges.innerHTML);
    }
}

const increaseNumber = (increase, itemprice) => {
    let itemVal = document.getElementById(increase);
    itemprice = document.getElementById(itemprice);
    if (itemVal.value >= 5) {
        itemVal.value = 5;
        alert("you can't by more than 5")
        itemVal.style.backgroundColor = "red";
        itemVal.style.color = "#fff";
    } else {
        itemVal.value = parseInt(itemVal.value) + 1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + 15;
        productTotalAmount.innerHTML = parseInt(productTotalAmount.innerHTML) + 15;
        total_cart_amt.innerHTML = parseInt(productTotalAmount.innerHTML) + parseInt(shippingCharges.innerHTML);
    }
}
let counter1=0;
const discount_code = () => {
    if(counter1===0){
    let currentTotalAmount = parseInt(total_cart_amt.innerHTML);
    let error_trw = document.getElementById("error_trw");
    if(total_cart_amt.innerHTML>=100){

   
    if(discount_code1.value === "Avadhesh"){
     let  newTotalAmount = currentTotalAmount-15;
     total_cart_amt.innerHTML = newTotalAmount;
     error_trw.innerHTML = "The code is valid";
    
    }
    else{
        error_trw.innerHTML = "Try again! The code is Avadhesh"
    }
}else{
    alert("amount is lower than 100")
    counter1--
}
    counter1++
}else{
    alert("You have already used code")
}
}