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

// console.log(compound(10000, 50, 1, 6));

document.addEventListener("DOMContentLoaded", () => {
  let button = document.getElementById("check");
  let paragr = document.getElementById("result");

  button.addEventListener("click", () => {
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
});
