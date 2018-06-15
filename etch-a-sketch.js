var gridsize = 16;
var Colormode = "random";

//Generates a random color every call
function rand_color() {
  let letters = '0123456789ABCDE';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 15)];
  }
  return color;
}

//Define mouse_over function
function cell_mouseover() {
  if (Colormode == "random")
    draw_color = String(rand_color());
  else
    draw_color = "black";

  if (Colormode == "fade" && this.style.opacity < 1.0) {
    this.style.opacity = Number(this.style.opacity) + 0.2;
  }
  this.style.backgroundColor = draw_color;
}

//Draw canvas from scratch
function draw_canvas(gridsize) {
  let canvasdiv = document.getElementById("canvas");
  canvasdiv.innerHTML = "";
  for (i = 0; i < gridsize; i++) {
    let new_row = document.createElement("div");
    //new_row.id = ("row_" + i);
    new_row.classList.add("canvas_row")
    canvasdiv.appendChild(new_row);
    for (j = 0; j < gridsize; j++) {
      let new_cell = document.createElement("div");
      //new_cell.id = ("row_" + i + "-col_" + j);
      new_cell.classList.add("canvas_cell");
      new_cell.addEventListener("mouseover", cell_mouseover);
      new_row.appendChild(new_cell);
    }
  }
}

function On_Delay_Remove_Shake(elem) {
  setTimeout(function () {
    elem.className = elem.className.replace(' shake', '');
  }, 500);
}


//Setup Buttons & Textboxes
document.getElementById("btn_reset")
  .addEventListener("click", function () {
    let user_gridsize = 16;
    //let user_gridsize = document.querySelector('input[name="rng_slide"]').value;
    console.log(user_gridsize);
    draw_canvas(user_gridsize);
    canvas_elem = document.getElementById('canvas')
    canvas_elem.className += " shake";
    On_Delay_Remove_Shake(canvas_elem);
  });

document.getElementById("btn_color_black")
  .addEventListener("click", function () {
    Colormode = "black";
  });

document.getElementById("btn_color_random")
  .addEventListener("click", function () {
    Colormode = "random";
  });

document.getElementById("btn_color_fade")
  .addEventListener("click", function () {
    Colormode = "fade";
  });


//document.querySelector('input[name="rng_slide"]').value = gridsize;
draw_canvas(gridsize);