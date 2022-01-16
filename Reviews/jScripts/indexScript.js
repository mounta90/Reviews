const reviews = [
  {
    profilePicture: "./Images/DillaCartoon.jpg",
    firstName: "J",
    lastName: "Dilla",
    role: "Music Producer",
    review: "Love the website, keep doing your thing!",
  },
  {
    profilePicture:
      "./Images/michael-porter-jr-072820-getty-ftr_255q7rj3w0kl1wyrzpmgwe1fg-1280x640.jpg",
    firstName: "MPJ",
    lastName: "",
    role: "BBall Player",
    review: "Not bad, but you can do better. Baby steps!",
  },
  {
    profilePicture: "./Images/52778939.jpg",
    firstName: "Internet",
    lastName: "Troll",
    role: "Professional Troller",
    review: "Terrible website, I can do better in my sleep, if I wanted to.",
  },
];

let profilePic = document.querySelector("#pFp");
let fName = document.getElementById("firstName");
let lName = document.getElementById("lastName");
let rol = document.querySelector(".role");
let rev = document.querySelector(".reviewContent");
let currReview = 0;

const randomReview = document.querySelector(".randomReviewBtn");
const previousReview = document.querySelector(".leftArrow");
const nextReview = document.querySelector(".rightArrow");

function displayReview() {
  profilePic.src = reviews[currReview].profilePicture;
  fName.textContent = reviews[currReview].firstName;
  lName.textContent = reviews[currReview].lastName;
  rol.textContent = reviews[currReview].role;
  rev.textContent = reviews[currReview].review;
}

//default loading environment
window.addEventListener("DOMContentLoaded", function () {
  displayReview();
});

nextReview.addEventListener("click", function () {
  if (currReview == reviews.length - 1) {
    currReview = 0;
  } else {
    currReview += 1;
  }

  displayReview();
});

previousReview.addEventListener("click", function () {
  if (currReview == 0) {
    currReview = reviews.length - 1;
  } else {
    currReview -= 1;
  }

  displayReview();
});

randomReview.addEventListener("click", function () {
  currReview = Math.floor(Math.random() * reviews.length);

  console.log(currReview);

  displayReview();
});
