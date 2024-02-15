function convert(type) {
  let steps = "";
  let inputUnit = "";
  let inputValue = 0;
  let outputUnit = "";
  let outputValue = 0;
  let scientificFormula = "";

  if (type === 'celsius') {
    inputUnit = "Celsius";
    inputValue = parseFloat(document.getElementById('celsius').value);
    outputUnit = "Fahrenheit";
    outputValue = (inputValue * 9 / 5) + 32;
    scientificFormula = `°F = (°C X 9/5) + 32`;
    if (!isNaN(outputValue)) {
      steps = `${inputValue} ${inputUnit} dirubah ke ${outputValue.toFixed(2)} ${outputUnit} dengan perhitungan (${inputValue} * 9/5) + 32 = ${outputValue.toFixed(2)}. Penjelasanya yaitu Suhu (S) dalam derajat Fahrenheit (F) sama dengan Suhu (S) dalam derajat Celcius (C) dikali (9/5) tambah 32. Rumus ilmiahnya adalah ${scientificFormula}.`;
      document.getElementById('fahrenheit').value = outputValue.toFixed(2);
    } else {
      steps = `Invalid input. Please enter a valid number for Celsius.`;
      document.getElementById('fahrenheit').value = "";
    }
  } else if (type === 'fahrenheit') {
    inputUnit = "Fahrenheit";
    inputValue = parseFloat(document.getElementById('fahrenheit').value);
    outputUnit = "Celsius";
    outputValue = (inputValue - 32) * 5 / 9;
    scientificFormula = `°C = (°F - 32) X 5/9`;
    if (!isNaN(outputValue)) {
      steps = `${inputValue} ${inputUnit} dirubah ke ${outputValue.toFixed(2)} ${outputUnit} dengan perhitungan (${inputValue} - 32) * 5/9 = ${outputValue.toFixed(2)}. Penjelasanya yaitu Suhu (S) dalam derajat Celcius (C) sama dengan Suhu (S) dalam derajat Fahrenheit (F) dikurangi 32 kemudian hasilnya dikalikan (5/9). Rumus ilmiahnya adalah ${scientificFormula}.`;
      document.getElementById('celsius').value = outputValue.toFixed(2);
    } else {
      steps = `Invalid input. Please enter a valid number for Fahrenheit.`;
      document.getElementById('celsius').value = "";
    }
  }

  document.getElementById('calculation-steps').innerText = steps;
}
