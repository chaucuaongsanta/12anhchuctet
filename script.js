// Lời chúc
const texts = [
  "Hoa khai phú quý, trúc báo bình an.\nCung chúc tân xuân, vạn sự như ý.\n* * *\nNhân dịp Tết Nguyên đán 2025, xin chúc bạn có một năm mới luôn tràn đầy sức khỏe, thành công và hạnh phúc bên cạnh những người mình yêu thương.",
  "Xuân về rộn rã gần xa,\nTài lộc như nước vào nhà.\nChúc nhau sức khỏe thuận hòa,\nMột năm may mắn nở hoa.\n* * *\nNhân dịp năm mới xuân Ất Tỵ 2025, xin chúc bạn và gia đình có một năm mới luôn tràn đầy sức khỏe, hạnh phúc và thành công cùng một mùa Tết bình an và sum họp bên cạnh những người mình yêu thương. Happy New Year!",
  "Phúc lộc đồng nhà, tài lộc đồng gia.\nSức khoẻ dồi dào, tiền vào như nước.\n* * *\nNhân dịp Tết Nguyên đán 2025, xin chúc bạn có một năm mới an lành, hoan hỉ, thành công trong học tập, sự nghiệp và luôn tràn đầy niềm vui bên gia đình.",
  "Mừng xuân, chúc Tết mọi nhà,\nAn khang thịnh vượng, hạnh phúc chan hòa.\nCông việc thuận lợi, phát tài,\nNiềm vui viên mãn, chẳng còn âu lo.\n* * *\nNhân dịp Tết Nguyên đán 2025, xin chúc bạn và gia đình có một năm mới luôn bình an, hạnh phúc, dồi dào sức khoẻ, tiền vào như nước, 8386, tấn tài tấn lộc.",
  "Tân niên thịnh vượng tài lộc tới\nXuân mới an khang phúc lộc tràn.\n* * *\nMừng năm mới 2025, chúc bạn mỗi ngày đều đầy tiếng cười, tâm hồn thư thái tâm hồn thư thái và luôn được yêu thương.",
  "Chúc Tết đến bạn của tôi trăm điều như ý\nMừng xuân sang vạn sự đại thành công.",
  "Năm mới 2025 chúc bạn sức khỏe vô biên, kiếm được nhiều tiền, đời sướng như tiên và chẳng ai làm phiền. Happy New Year!",
  "Happy New Year 2025! Chúc bạn có 1 bầu trời sức khỏe, 1 biển cả tình thương, 1 đại dương tình bạn, 1 điệp khúc tình yêu, 1 người yêu chung thủy, nghiệp sáng ngời, 1 gia đình thịnh vượng. Chúc cả gia đình bạn vạn sự như ý, tỉ sự như mơ, triệu triệu bất ngờ, không chờ cũng đến!",
  "Chúc bạn năm mới có 12 tháng phú quý, 365 ngày phát tài, 8760 giờ sung túc, 525600 phút thành công và 31536000 giây vạn sự như ý.",
  "Tết 2025, chúc bạn sung sướng trong tình yêu, sung túc trong công việc và sung mãn trong sức khỏe.",
  "Năm mới 2025, chúc bạn sắc đẹp tuyệt vời, tiền vô phơi phới, người yêu không cần tìm cũng tự tới.",
  "Năm Ất Tỵ tới\nAi cũng giàu to\nSức khỏe chẳng lo\nBuồn bực xếp xó\nKhó khăn chuyện nhỏ\nViệc chạy ro ro\nKhông còn nhăn nhó\nMuốn gì được đó!",
  "Chúc bạn luôn hoan hỉ\nSức khỏe bền bỉ\nCông danh hết ý\nTiền vào bạc tỉ\nTiền ra ri rỉ\nTình yêu thỏa chí\nVạn sự như ý\nLuôn cười hí hí\nCung hỷ cung hỷ",
  "Năm mới cầu sức khỏe\nNăm mới cầu thành công\nNăm mới mong tài lộc\nNăm mới giữ yêu thương\nChúc cho năm mới đã sang\nNgười yêu vui vẻ, xinh tươi cả ngày\nGửi xuân mang đến niềm vui\nVạn sự như ý, đong đầy yêu thương.",
  "Tết này chúc bạn lộc đầy tay,\nTiền bạc dư dả, tình yêu say.\nSức khỏe dồi dào, công danh sáng,\nCả năm an lành, hạnh phúc bay.",
  "Chúc bạn một Tết ngọt ngào,\nTiền vào đầy túi, gia đình an khang.\nMọi việc thuận lợi, tình yêu bền lâu,\nVui vẻ, khỏe mạnh, đón xuân tưng bừng!",
  "Xuân sang đất trời thêm tươi mới\nCành mai khoe sắc, chim hót líu lo\nChúc bạn năm mới nhiều niềm vui\nGia đình hạnh phúc, tình yêu đong đầy.",
  "Chúc cả nhà mình năm mới 'cười nhiều, lo ít, sống chất, sống chill'.",
  "Năm mới đến rồi, chúc bạn luôn tươi cười, thành công và luôn giữ vững tinh thần lạc quan để vượt qua mọi thử thách",
  "Năm mới, chúc bạn luôn hạnh phúc trong tình yêu, thành công trong công việc và luôn là phiên bản tuyệt vời nhất của chính mình.\nHãy cùng đón chào năm 2025 với tinh thần rực rỡ!",
];

// t quá rảnh rỗi :)))
const secretText = "tcs1tg";

// Check load
let loadingAnimationRunning = false;
let displayedTexts = new Set();
let loadCount = 0;

// Function random lời chúc
function displayRandomText() {
  if (loadCount >= 25) return;
  loadCount++;

  let randomIndex;
  let randomText;
  const isSecret = Math.random() < 0.0001;

  if (isSecret) {
    randomText = secretText;
  } else {
    do {
      randomIndex = Math.floor(Math.random() * texts.length);
      randomText = texts[randomIndex];
    } while (displayedTexts.has(randomText) && displayedTexts.size < texts.length);
    displayedTexts.add(randomText);
  }

  randomText = randomText.replace(/\n/g, '<br>');
  document.getElementById('random-text').innerHTML = randomText;
}

// Function loading animation
function addLoadingAnimation() {
  if (loadingAnimationRunning) return; 
  loadingAnimationRunning = true; 

  const loadingText = document.getElementById('random-text');
  let dots = 0;
  const intervalId = setInterval(() => {
    loadingText.innerHTML = 'xin chờ một chút' + '.'.repeat(dots);
    dots = (dots + 1) % 4; // Cycle through 0, 1, 2, 3 dots
  }, 250); 
  setTimeout(() => {
    clearInterval(intervalId); 
    displayRandomText(); 
  }, 2200); 
}

// Execute
window.onload = addLoadingAnimation;

// Load lần 1
addLoadingAnimation();
