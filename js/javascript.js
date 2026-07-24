function toggle_nav(){
    const x = document.getElementById("nav_bar");
    if (window.getComputedStyle(x).display === "none") {
    x.style.display = "block";
    } 
    else {
    x.style.display = "none";
    }
}



function image_view(event) {
    const img = event.currentTarget;

    document.getElementById("preview_img").src = img.src;
    document.getElementById("preview_img").class = img.id;
    document.getElementById("preview_caption").textContent = img.alt;

    document.getElementById("preview_img_div").style.display = "flex";
    document.body.style.overflow = "hidden";

    
    let length = document.getElementsByClassName("image_view").length;
    if(length>1){
        document.getElementById("left_chevron").style.display = "block";
        console.log("made it block");
        document.getElementById("right_chevron").style.display = "block";
    }



    document.addEventListener("keydown", (event) => {
    switch (event.key) {
    case "ArrowLeft":
        console.log("Left");
        document.getElementById("left_chevron").click();
        break;
    case "ArrowRight":
        console.log("Right");
        document.getElementById("right_chevron").click();
        break;
  }
});
}

function image_close(event){
    document.getElementById("preview_img_div").style.display = "none";
    document.body.style.overflow = "auto";
    document.getElementById("preview_img").src = "";
    document.getElementById("preview_caption").textContent = "";
}

function left_scroll(element){
    const parent = element.parentElement;
    const img = parent.querySelector("img");
    let index = Number(img.class);
    let length = document.getElementsByClassName("image_view").length;
    index = ((index-1)+length)%length;
    console.log(index);

    img.src = document.getElementById(index).src;
    img.class = String(index);
    document.getElementById("preview_caption").textContent = document.getElementById(index).alt;
}

function right_scroll(element){
    const parent = element.parentElement;
    const img = parent.querySelector("img");
    let index = Number(img.class);

    let length = document.getElementsByClassName("image_view").length;
    index = (index+1)%length;
    console.log(index);
    img.src = document.getElementById(index).src;
    img.class = String(index);
    document.getElementById("preview_caption").textContent = document.getElementById(index).alt;
}