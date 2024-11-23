function compound(origin, percentPerYear, numberOfTakeProfitPerYear, goal) {
  let percent = percentPerYear / 100;
  let A =
    origin *
    Math.pow(
      1 + percent / numberOfTakeProfitPerYear,
      numberOfTakeProfitPerYear * goal
    );

  return A;
}
// A = P (1 + r/n)^(nt)

function noCompound(origin, percentPerYear, inputTerm, goal) {
  const term = {
    1: 30,
    3: 90,
    6: 180,
    9: 270,
    12: 365,
  };

  if (inputTerm in term) {
    let percent = percentPerYear / 100;
    let result = origin * percent * (term[inputTerm] / 365) * goal;

    return result;
  }

  return "lỗi!!";
}
// A = P (1 + r/n)^(nt)

// console.log(noCompound(100000000, 4.55, "6", 1));

document.addEventListener("DOMContentLoaded", () => {
  let button = document.getElementById("check");
  let button2 = document.getElementById("check2");

  button.addEventListener("click", () => {
    const content = document.querySelector("#content");
    let p = document.querySelector("#result");
    let origin = Number(document.getElementById("1").value);
    let percentPerYear = Number(document.getElementById("2").value);
    let numberOfTakeProfitPerYear = Number(document.getElementById("3").value);
    let goal = Number(document.getElementById("4").value);
    let result = compound(
      origin,
      percentPerYear,
      numberOfTakeProfitPerYear,
      goal
    );

    if (p) {
      content.removeChild(p);
    }

    let output = document.createElement("p");
    output.setAttribute("id", "result");
    output.innerHTML = result;
    content.appendChild(output);
  });

  button2.addEventListener("click", () => {
    const content = document.querySelector("#content2");
    let p = document.querySelector("#result2");
    let origin = Number(document.getElementById("5").value);
    let percentPerYear = Number(document.getElementById("6").value);
    let term = document.getElementById("7").value;
    let goal = Number(document.getElementById("8").value);
    let result = noCompound(origin, percentPerYear, term, goal) || 0;

    if (p) {
      content.removeChild(p);
    }

    let output2 = document.createElement("p");
    output2.setAttribute("id", "result2");
    output2.innerHTML = result;
    content.appendChild(output2);
  });
});
