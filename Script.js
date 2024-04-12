// let hamburder = document.getElementById("hamburger");
// let navItem = document.getElementById("navItem");
// let cross = document.getElementById("cross");
// let color = document.getElementById("color");
// let home_bg = document.getElementById("home_bg");

// let colorChange = document.getElementById("colorChange");
// let body = document.getElementById("body");

// // Color Changer
// let count2 = 0;
// colorChange.addEventListener('click',()=>{
//     console.log("Hii");
//     if(count2 == 0)
//     {
//         body.style.backgroundColor = 'black';
//         body.style.color = 'white';
//         count2 = 1;
//     }
//     else
//     {
//         body.style.backgroundColor = 'white';
//         body.style.color = 'black';
//         count2 = 0;
//     }

// })

// let count = 0;

// hamburder.addEventListener("click", () => {
//   navItem.style.display = "inline";
//   cross.style.display = "inline";
//   hamburder.style.display = "none";
// });

// cross.addEventListener("click", () => {
//   navItem.style.display = "none";
//   hamburder.style.display = "inline";
//   cross.style.display = "none";
// });

// color.addEventListener("click", () => {
//   if (count == 0) {
//     home_bg.style.backgroundColor = "black";
//     home_bg.style.color = "white";
//     count = 1;
//   } else {
//     home_bg.style.backgroundColor = "white";
//     home_bg.style.color = "black";
//     count = 0;
//   }
// });

// // // type js
// // var typed = new Typed('#typed-text', {
// //     strings: ["WELCOME TO OUR CAF"],
// //     typeSpeed: 100,
// //     backSpeed: 40,
// //     startDelay: 0,
// //     backDelay: 2000,
// //     showCursor: false,
// //     loop: true,
// // });

// <!-- typed js -->
//     <!-- <h1 class="text-center text-5xl font-bold text-pink-400 mt-10">
//       Hello <span id="typedd"></span>
//     </h1> -->

let hamburder = document.getElementById("hamburger");
let navItem = document.getElementById("navItem");
let cross = document.getElementById("cross");
let color = document.getElementById("color");
let home_bg = document.getElementById("home_bg");

let colorChange = document.getElementById("colorChange");
let body = document.getElementById("body");

// Color Changer
// let count2 = 0;
// colorChange.addEventListener('click',()=>{
//     console.log("Hii");
//     if(count2 == 0)
//     {
//         body.style.backgroundColor = 'black';
//         body.style.color = 'white';
//         count2 = 1;
//     }
//     else
//     {
//         body.style.backgroundColor = 'white';
//         body.style.color = 'black';
//         count2 = 0;
//     }

// })

let count = 0;

hamburder.addEventListener("click", () => {
	navItem.style.display = "inline";
	cross.style.display = "inline";
	hamburder.style.display = "none";
});

cross.addEventListener("click", () => {
	navItem.style.display = "none";
	hamburder.style.display = "inline";
	cross.style.display = "none";
});

color.addEventListener("click", () => {
	if (count == 0) {
		home_bg.style.backgroundColor = "black";
		home_bg.style.color = "white";
		count = 1;
	} else {
		home_bg.style.backgroundColor = "white";
		home_bg.style.color = "black";
		count = 0;
	}
});

// // // type js
// // var typed = new Typed('#typed-text', {
// //     strings: ["WELCOME TO OUR CAF"],
// //     typeSpeed: 100,
// //     backSpeed: 40,
// //     startDelay: 0,
// //     backDelay: 2000,
// //     showCursor: false,
// //     loop: true,
// // });

// <!-- typed js -->
//     <!-- <h1 class="text-center text-5xl font-bold text-pink-400 mt-10">
//       Hello <span id="typedd"></span>
//     </h1> -->
