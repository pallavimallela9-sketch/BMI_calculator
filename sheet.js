const form = document.getElementById("bmiForm");
const resultBox = document.getElementById("result");
const bmiValue = document.getElementById("bmiValue");
const bmiCategory = document.getElementById("bmiCategory");
const marker = document.getElementById("marker");
const tip = document.getElementById("tip");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const weight = parseFloat(document.getElementById("weight").value);
    const heightCm = parseFloat(document.getElementById("height").value);  
    const heightM = heightCm / 100;

  const bmi = weight / (heightM * heightM);
  const rounded = bmi.toFixed(1);

  bmiValue.textContent = rounded;

  let category, color, tipText, markerPercent;

  if (bmi < 18.5) {
    category = "Underweight";
    color = "#3f6ea5";
    tipText = "You're below the healthy weight range. Consider a nutrient-rich diet and consult a doctor if needed.";
    markerPercent = (bmi / 18.5) * 25;
  } else if (bmi < 25) {
    category = "Normal weight";
    color = "#2f6b5e";
    tipText = "You're in the healthy range. Keep up a balanced diet and regular activity.";
    markerPercent = 25 + ((bmi - 18.5) / (25 - 18.5)) * 25;
  } else if (bmi < 30) {
    category = "Overweight";
    color = "#b9832f";
    tipText = "Slightly above the healthy range. A mix of regular exercise and mindful eating can help.";
    markerPercent = 50 + ((bmi - 25) / (30 - 25)) * 25;
  } else {
    category = "Obese";
    color = "#b5533c";
    tipText = "Consider speaking with a healthcare professional about a personalized health plan.";
    markerPercent = Math.min(50 + ((bmi - 25) / (30 - 25)) * 25 + 10, 100);
  }

  bmiCategory.textContent = category;
  bmiCategory.style.color = color;
  tip.textContent = tipText;
  marker.style.left = markerPercent + "%";

  resultBox.hidden = false;
});