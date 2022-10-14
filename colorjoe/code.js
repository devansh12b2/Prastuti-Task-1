// colorjoe code for generating colorhexcode and rgb values from colors
     

class ColorPicker {
        constructor(root) {
          this.root = root;
          this.colorjoe = colorjoe.rgb(this.root.querySelector(".colorjoe"));
          this.selectedColor = null;
          this.savedColors = this.getSavedColors();

          this.colorjoe.show();
          this.setSelectedColor("#009578");

          this.colorjoe.on("change", (color) => {
            this.setSelectedColor(color.hex(), true);
            //console.log(color.hex);
          });

          this.root.querySelectorAll(".saved-color").forEach((el, i) => {
            this.showSavedColor(el, this.savedColors[i]);

            el.addEventListener("mouseup", (e) => {
              if (e.button == 1) {
                this.saveColor(this.selectedColor, i);
                this.showSavedColor(el, this.selectedColor);
              }

              this.setSelectedColor(el.dataset.color);
            });
          });
        }

        setSelectedColor(color, skipCjUpdate = false) {
          this.selectedColor = color;
          console.log(color);
         
          const r = hexToRgb(color).r;
          const g = hexToRgb(color).g;
          const b = hexToRgb(color).b;
         
          this.root.querySelector(".selected-color-text").textContent = color;
          //this.root.querySelector(".selected-color-rgb-text").textContent = g, b ;
          this.root.querySelector(".selected-color-rgb-text").textContent = "rgb:" + r + "," + g + "," + b;
          this.root.querySelector(".selected-color").style.background = color;

          if (!skipCjUpdate) {
            this.colorjoe.set(color);
          }
        }



//inert functionality
        getSavedColors() {
          const saved = JSON.parse(
            localStorage.getItem("colorpicker-saved") || "[]"
          );

          return new Array(5).fill("#ffffff").map((defaultColor, i) => {
            return saved[i] || defaultColor;
          });
        }

        showSavedColor(element, color) {
          element.style.background = color;
          element.dataset.color = color;
          //console.log(color);
        }

        saveColor(color, i) {
          this.savedColors[i] = color;
          localStorage.setItem(
            "colorpicker-saved",
            JSON.stringify(this.savedColors)
          );
        }
      }

const cp = new ColorPicker(document.querySelector(".container"));
      
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
