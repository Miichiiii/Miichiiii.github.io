var typed = new Typed(".text", {
    strings: ['Student', 'Frontend Developer', 'Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.classList.remove("bxs-moon");
    icon.classList.add("bxs-sun");
  } else {
    icon.classList.remove("bxs-sun");
    icon.classList.add("bxs-moon");
  }
};

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    let x = e.clientX; //replace pageX for clientX

    let y = e.clientY; // replace  pageY for clientY
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
cursor.style.display = "block";

function mouseStopped(){
    cursor.style.display="none";
}
clearTimeout(timeout);
timeout = setTimeout(mouseStopped,1000);
});

document.addEventListener("mouseout", ()=>{
    cursor.style.display="none";
});


