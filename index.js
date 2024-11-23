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
    let paragr = document.getElementById("result");
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

    paragr.innerHTML = result;
  });

  button2.addEventListener("click", () => {
    let paragr2 = document.getElementById("result2");
    let origin = Number(document.getElementById("5").value);
    let percentPerYear = Number(document.getElementById("6").value);
    let term = document.getElementById("7").value;
    let goal = Number(document.getElementById("8").value);
    let result = noCompound(origin, percentPerYear, term, goal);

    paragr2.innerHTML = result;
  });
});
