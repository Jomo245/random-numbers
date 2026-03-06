const generateBtn = document.getElementById('generateBtn');
const result = document.getElementById('result');

generateBtn.addEventListener('click', function() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  result.textContent = `Generated Random Numbers: ${randomNumber}`;
});