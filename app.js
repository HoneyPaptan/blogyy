const card = document.querySelector(".card");
const cardholder = document.querySelector(".card-holder");
const image = document.querySelector(".image");
const container = document.querySelector(".container");


cardholder.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth /2 -e.pageX) / 25;
    let yAxis = (window.innerWidth /2-e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    
});

//animate in
cardholder.addEventListener("mouseenter", e =>{
    card.style.transition = "none";
    // image.style.transform = "translateZ(20px) ";
    container.style.transform = "translateZ(50px)";
   

});
//animate out

cardholder.addEventListener("mouseleave", e =>{
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.transition = "all 0.5s ease";
    // image.style.transform = "translateZ(0px)";
    container.style.transform = "translateZ(0px)";
  

})