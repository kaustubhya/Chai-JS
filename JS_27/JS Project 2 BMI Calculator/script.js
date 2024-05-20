// Select the form first as it has a submit button inside it

// As we have a submit button, we will use a submit event instead of a click event here.

const form = document.querySelector("form");

// This useCase i.e. taking in values before the event in a form will give us blank values as output.
// const height = parseInt(document.querySelector('#height').value)

// Now we submit a form via the get or post method.
// Also upon submission the form values go to the url or the server. We need to prevent this default action of the form.

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  // Extracting the value from the height data (which is initially a string but we convert it into a number using parseInt)

  const weight = parseInt(document.querySelector("#weight").value);

  const results = document.querySelector("#results");

  // To prevent us from getting errors, we will do some checks, if those checks are right, we will add values to the results section of the form.
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height. Value given: ${height}`;
    // isNaN(height) means height === NaN
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight. Value given: ${weight}`;
    // isNaN(height) means height === NaN
  }

  // All good => Give BMI Formula
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // Till after 2 places of decimal

    // Displaying the bmi results in a span

    let category = "";

    if (bmi < 18.6) {
      category = "Underweight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = "Normal and Fine";
    } else {
      category = "Overweight";
    }

    results.innerHTML = `<span>BMI: ${bmi}</span> <br> You are <span>${category}</span>`;
  }
});
