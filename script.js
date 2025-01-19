// List of random texts
const texts = [
  "8386",
  "mẹ m béo!",
  "umk",
  "dạ",
  "ok chưa?",
  "quá là tuyệt vời",
  "kệ mẹ m",
];

// Select the element where the random text will appear
const randomTextElement = document.getElementById("random-text");

// Function to generate a random text
function getRandomText() {
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}

// Display a random text when the page loads
randomTextElement.textContent = getRandomText();
