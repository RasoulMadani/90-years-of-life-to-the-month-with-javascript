let divMain = document.querySelectorAll("#main > div");
let spans = document.querySelectorAll("span");
let radif1 = 1;

let previousElement = null;
spans.forEach((span1) => {
  radif = span1.parentElement.dataset.test;

  span1.innerHTML = new Number(radif1).toLocaleString("fa-ir");
  span1.dataset.month = radif1;
  radif1++;
  span1.addEventListener("click", (e) => {
    if (previousElement != null) {
      previousElement.target.querySelector(".tooltip").remove();
    }
    previousElement = e;
    monthMother = Number(e.target.dataset.month);
    console.log(monthMother);
    let el1 = document.createElement("span");
    el1.innerHTML = `
            : گذشته
            <span>  
                     سال : ${new Number(
                       Math.floor(monthMother / 12)
                     ).toLocaleString("fa-ir")} 
            </span>
            <span> 
                    ${new Number(Math.floor(monthMother % 12)).toLocaleString(
                      "fa-ir"
                    )}  : ماه 
            </span>
            <span> 
                    ${new Number(Math.floor(monthMother * 31 - (monthMother/2))).toLocaleString(
                        "fa-ir"
                      )  }   : روز  
            </span>
            ====<br>
           : مانده 

            `;
    el1.classList.add("tooltip");

    e.target.append(el1);
    spans.forEach((span3) => {
      let monthChild = Number(span3.dataset.month);
      if (monthChild <= monthMother) {
        span3.style.backgroundColor = "blue";
        span3.style.color = "white";
      } else {
        span3.style.backgroundColor = "red";
        span3.style.color = "white";
      }
    });
  });
});

// document.querySelector("#six").click()
