let selectedSeats = [];
let count =0;
let couponApplied =false;


const allBtn = document.getElementsByClassName('seat');

for(const btn of allBtn){
   btn.addEventListener('click',function(e){
      count = count + 1;
      
       const seatName = e.target.innerText;
       const price = document.getElementById('price').innerText;
       const selectedContainer = document.getElementById("selected-seats-container");
       const li =  document.createElement('li');
       const p = document.createElement('p');
        p.innerText =seatName + " ____________ " + "economy" + "  ____________ " +"550";
       
        li.appendChild(p);       
        selectedContainer.appendChild(li);  
        
        const totalPrice =document.getElementById('total-price').innerText;
        const convertedTotalPrice= parseInt(totalPrice);
        const sum =convertedTotalPrice + parseInt(price)
        

        const grandPrice = document.getElementById('grand-price').innerText;
        const convertedGrandPrice = parseInt(grandPrice);
        const sum2 =convertedGrandPrice + parseInt(price);
      
       
      setInnerText('cart-count', count);
      setInnerText('total-price', sum);
      setInnerText('grand-price', sum2);
     
      

   })
}

const applyBtn = document.getElementById('apply-btn');
      applyBtn.addEventListener('click',function applyCoupon(){
         // get the value from coupon-code input 
     const couponCode = document.getElementById('coupon-code').value;
     const couponElement = couponCode.split(" ").join("").toUpperCase();
     if (!couponApplied) {
      const couponCode = document.getElementById('coupon-code').value;
      if (couponCode === "NEW15" || couponCode === "Couple 20") {
        totalPrice -= 100;
        document.getElementById('total-price').innerText = totalPrice;
        couponApplied = true;
        document.getElementById('coupon-section').style.display = 'none';
      }
    } else {
      alert('Coupon has already been applied.');
    }
      
  
  
})

function setInnerText(id, value){
   document.getElementById(id).innerText =value;
}


const new15 = document.getElementById('new15').innerText;
   console.log(new15);


   function nextBtn() {
      const confirmationSection = document.getElementById("confirmation");
      const phoneNumberInput = document.getElementById("phone");
      const phoneNumber = phoneNumberInput.value;

      
      if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
          alert("Please enter a valid 10-digit phone number.");
          return;
      }
      

     
  }
 







