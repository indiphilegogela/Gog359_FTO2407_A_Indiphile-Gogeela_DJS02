const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Check for missing inputs
if (!dividend || !divider) {
  result.innerText = "Division not performed. Both values are required in inputs. Try again";
  return;
}

// Check for non-numeric inputs
if (isNaN(dividend) || isNaN(divider)) {
  console.error("Critical Error: Non-numeric input provided.");
  document.body.innerHTML = "Something critical went wrong. Please reload the page";
  throw new Error("Non-numeric input error");
}

// Check for division by zero
if (num2 === 0) {
  result.innerText = "Division not performed. Invalid number provided. Try again";
  console.error("Division by zero attempted", new Error("Division by zero"));
  return;
}
  result.innerText = dividend / divider;
});