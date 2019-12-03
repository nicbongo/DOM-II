// Your code goes here


// 1. logo (click)

const logo = document.querySelector("h1");
logo.addEventListener("click", () => {
    logo.style.transform = "rotateY(-360deg)";
    logo.style.transitionDuration = "1000ms";
    logo.style.color = "green";
});

// 2. hover (mouseover)

const hover = document.querySelector(".logo-heading, .nav-link");
hover.addEventListener("mouseover", () => {
    hover.style.cursor = "pointer";  
});

// 3. pics (double click)
const pic = document.querySelector(".head-img");
pic.addEventListener("dblclick", () => {
    pic.style.transform = "scale(2)"
    pic.style.transition = "transform 0.5s";
});

// 4. pics (mouseleave)
pic.addEventListener("mouseleave", () => {
    pic.style.transform = "scale(1)"
    pic.style.transition = "transform 0.5s";
});


// 5. copy

const item = document.querySelector("html");
item.addEventListener("copy", (e) => {
    document.body.style.display = "none";
    e.preventDefault();
});

// 6. keydown

item.addEventListener("keydown", (e) => {
    
    if (e.key ==="r"){
    document.body.style.backgroundColor = "red";
    } else if (e.key ==="g"){
        document.body.style.backgroundColor = "green";
        }
});

// 7. keyup
item.addEventListener("keyup", (e) => {
    document.body.style.backgroundColor = "";
});

// 8. wheel (wheel)

document.body.addEventListener("wheel", (e) => {
    const top = document.querySelector(".nav-container");
    top.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",30)";
});

