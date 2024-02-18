 const allBtn = document.getElementsByClassName('all-btn');
 let count =0
   for(const btn of allBtn){
    btn.addEventListener('click', function(e){
        count= count + 1;
      
        

       setInnerText('cart-count', count);
    })
   }

   function setInnerText(id, value){
      document.getElementById(id).innerText =value;
   }
   function nextBtn(){
        // Step 1: hide the home screen to the screen add the class hidden to home section 
        const homeSection = document.getElementsById('home-section');
        homeSection.add('hidden');
        // console.log(homeSection);
   }