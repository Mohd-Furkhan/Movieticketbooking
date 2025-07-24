let userAge = Number(prompt("Please enter your age:"));

if(userAge>=0 && userAge<=5)
{
    alert(`Your age is: ${userAge}`);
    alert("Your ticket price is ₹Free");
} 
else if(userAge>=6 && userAge<=17)
{
    alert(`Your age is: ${userAge}`);
    alert("Your ticket price is ₹100");
} 
else if(userAge>=18 && userAge<=59)
{
    alert(`Your age is: ${userAge}`);
    alert("Your ticket price is ₹200");
} 
else if(userAge>=60)
{
    alert(`Your age is above or equal to 60`);
    alert("Your ticket price is ₹150");
}
else
{
    alert("Negative age not allowed");
}

let isConfirm = confirm("Do you want to book ticket 🎫?")

if(isConfirm)
{
    alert("✔️ Booking successful!");
}
else
{
    alert("❌ Booking cancelled.");
}

let bookTicketAgain = confirm("Want to book another ticket 🎫?");

if(bookTicketAgain)
{
    alert("Okay, let's book again! 🔄 Reload and re-enter age.")
}
else
{
    alert("👋 Thank you for using 🎬 Movie Ticket Booking Software!")
}
