// List
const texts = [
  "8386",
  "mẹ m béo!",
  "umk",
  "dạ",
  "ok chưa?",
  "quá là tuyệt vời",
  "kệ mẹ m",
];

// Vi tri
const randomTextElement = document.getElementById("random-text");

// Code
function getRandomText() {
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}

// Hien thi
randomTextElement.textContent = getRandomText();
