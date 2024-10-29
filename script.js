// Switch , prompt , Number - გამოყენებით, დავწეროთ კოდი, 
// კოდი იწყება 3 შეკითხვით(prompt): 
// 1. Enter your age: 
// 2. Enter movie type (regular or 3D):
// 3. Enter time of day (matinee or evening):

// თუ მომხმარებელი 10-წელზე ნაკლების არის ticket-ის ფასი იქნება 5 ლარი, 
// თუ მომხმარებელი 10-წლიდან 65-წლამდე არის ticket-ის ფასი იქნება 15 ლარი,
// თუ მომხარებელი 65+ წლის არის ticket-ის ფასი იქნება 10 ლარი,  

// ასევე 3D ფილს თუ აირჩევს მომხმარებელი ფასს ემატება 5 ლარი.
// თუ საღამოს სიანსია ასევე ემატება 5 ლარი.

// საბოლოოდ უნდა დაგვიწეროს კოდმა ასეთი რამ :  ბილეთის ფასი თქვენთვის არის : 25 ლარი. 
// Bonus დავალება, switch case-ის დავამატოთ if ფუნქციონალი, რომელიც შეამოწმებს თუ გვაქვს ფასდაკლების ბილეთი,
// თუ ფასდაკლების ბილეთი გვაქვს ფასს დააკლდეს 25% ან უბრალოდ 5 ლარი.

// წარმატებები 🚀   

//MAGRAMMMMMMMMMMMM// 

let age = Number(prompt("Enter your age:"));
let movieType = prompt("Enter movie type (regular or 3D):").toLowerCase();
let timeOfDay = prompt("Enter time of day (matinee or evening):").toLowerCase();
let discountTicket = prompt("Do you have a discount ticket? (yes or no):").toLowerCase();

let ticketPrice;

if (age < 10) {
    ticketPrice = 5;
} else if (age >= 10 && age <= 65) {
    ticketPrice = 15;
} else {
    ticketPrice = 10;
}

if (movieType === "3d") {
    ticketPrice += 5;
}

if (timeOfDay === "evening") {
    ticketPrice += 5;
}

if (discountTicket === "yes") {
    ticketPrice -= Math.min(ticketPrice * 0.25, 5);
}

alert(`ბილეთის ფასი თქვენთვის არის: ${ticketPrice} ლარი.`);