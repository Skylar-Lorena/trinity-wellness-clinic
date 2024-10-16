let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');
let header = document.querySelector('.header');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');

   if(window.scrollY > 0){
      header.classList.add('active');
   }else{
      header.classList.remove('active');
   }
}

// Form submission with mailto link
document.querySelector('form').onsubmit = function(event) {
   event.preventDefault(); // Prevent the default form submission

   let name = document.querySelector('input[name="name"]').value;
   let email = document.querySelector('input[name="email"]').value;
   let number = document.querySelector('input[name="number"]').value;
   let date = document.querySelector('input[name="date"]').value;

   // Construct the mailto URL with the form details
   let mailtoLink = `mailto:mbaekendi@gmail.com?subject=Appointment Request&body=Name: ${name}%0AEmail: ${email}%0APhone Number: ${number}%0AAppointment Date: ${date}`;

   // Open the mailto link
   window.location.href = mailtoLink;

   // Show an alert to confirm
   alert("Your appointment request has been made, and your email client will open for confirmation.");
};
