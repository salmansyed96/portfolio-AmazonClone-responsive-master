// horizontal slider 1
document.querySelector('.l-btn').addEventListener('click',(event)=>{
    document.querySelector('.product-slide').scrollLeft -= 1100;
    event.preventDefault();
})
// The Element.scrollLeft property gets or sets the number of pixels that an element's content is scrolled from its left edge.
document.querySelector('.r-btn').addEventListener('click',(event)=>{
        document.querySelector('.product-slide').scrollLeft += 1100;
        event.preventDefault();
})




// horizontal slider 2
document.querySelector('.l-btn2').addEventListener('click',(event)=>{
    document.querySelector('.product-slide2').scrollLeft -= 1100;
    event.preventDefault();
})
document.querySelector('.r-btn2').addEventListener('click',(event)=>{
    document.querySelector('.product-slide2').scrollLeft += 1100;
    event.preventDefault();
})




// horizontal slider 3
document.querySelector('.l-btn3').addEventListener('click',(event)=>{
    document.querySelector('.product-slide3').scrollLeft -= 1100;
    event.preventDefault();
})
document.querySelector('.r-btn3').addEventListener('click',(event)=>{
    document.querySelector('.product-slide3').scrollLeft += 1100;
    event.preventDefault();
})



// horizontal slider 4
document.querySelector('.l-btn4').addEventListener('click',(event)=>{
    document.querySelector('.product-slide4').scrollLeft -= 1100;
    event.preventDefault();
})
document.querySelector('.r-btn4').addEventListener('click',(event)=>{
    document.querySelector('.product-slide4').scrollLeft += 1100;
    event.preventDefault();
})





// back-to-top button functionality
const backtotop= document.querySelector(".back-to-top");
backtotop.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})




// sidebar functionality
const sidebar = document.querySelector(".sidebar");
const closesidebar= document.querySelector(".fa-xmark");
const black= document.querySelector(".black");
const allbutton=document.querySelector(".second-1");

allbutton.addEventListener("click",()=>{
    sidebar.classList.add("active");
    closesidebar.classList.add("active");
    black.classList.add("active");
    document.body.classList.add("stop-scroll")
})
closesidebar.addEventListener("click",()=>{
    sidebar.classList.remove("active");
    closesidebar.classList.remove("active");
    black.classList.remove("active");
    document.body.classList.remove("stop-scroll")
})




// account & sign-in
const sign=document.querySelector(".ac");
const tri=document.querySelector(".triangle");
const signin=document.querySelector(".hidden-sign");

sign.addEventListener("click",()=>{
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    tri.classList.toggle("active");
    document.body.classList.toggle("stop-scroll")
})
