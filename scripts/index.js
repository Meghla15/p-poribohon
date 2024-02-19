// For Coupon Code
function applyCoupon() {
   if (!couponApplied) {
     const couponCodeInput = document.getElementById('coupon-code');
     const couponCode = couponCodeInput.value.trim().toUpperCase();
     if (couponCode === "NEW15" || couponCode === "Couple 20") {
       const grandPriceElement = document.getElementById('grand-price');
       let grandPrice = parseInt(grandPriceElement.innerText);
       grandPrice -= 100;
       grandPriceElement.innerText = grandPrice + ' BDT';
       document.getElementById('coupon-section').style.display = 'none';
       couponApplied = true;
     } else {
       alert('Invalid coupon code. Please enter a valid one.');
     }
   } else {
     alert('Coupon has already been applied.');
   }
 }
 

//  For Seat;
let count = 0;
let couponApplied = false;
const selectedSeats = new Set();

const allBtn = document.getElementsByClassName('seat');

for (const btn of allBtn) {
  btn.addEventListener('click', function (e) {
    const seatName = e.target.innerText;

    if (!selectedSeats.has(seatName)) {
      if (count < 4) {
        count = count + 1;

        const price = document.getElementById('price').innerText;
        const selectedContainer = document.getElementById("selected-seats-container");
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = seatName + " ______ " + "economy" + "  ______ " + "550";

        li.appendChild(p);
        selectedContainer.appendChild(li);

        const totalPriceElement = document.getElementById('total-price');
        const convertedTotalPrice = parseInt(totalPriceElement.innerText);
        const sum = convertedTotalPrice + parseInt(price);

        const grandPriceElement = document.getElementById('grand-price');
        const convertedGrandPrice = parseInt(grandPriceElement.innerText);
        const sum2 = convertedGrandPrice + parseInt(price);

        setInnerText('cart-count', count);
        setInnerText('total-price', sum);
        setInnerText('grand-price', sum2);

        selectedSeats.add(seatName);
      } else {
        alert('You can only select up to 4 seats.');
      }
    } else {
      alert('Seat ' + seatName + ' has already been selected.');
    }
  });
}

function setInnerText(elementId, value) {
  document.getElementById(elementId).innerText = value;
}

   function nextBtn() {
      const homeSection = document.getElementsByClassName('home -section');
      const phoneNumberInput = document.getElementById("phone");
      const phoneNumber = phoneNumberInput.value;

      


      if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
          alert("Please enter a valid 10-digit phone number.");
          return ;
      }
      
    
     
  }
 







