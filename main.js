let img = document.querySelector('img');
let btn = document.querySelector('button');

btn.addEventListener("click", () => {
    if(btn.innerHTML == 'On'){
    img.setAttribute("src", "image/yoniq.jpg");
    btn.innerHTML = "Off";
    } else {
        img.setAttribute("src", "image/ochiq.jpg");
        btn.innerHTML = "On";
    }
});


