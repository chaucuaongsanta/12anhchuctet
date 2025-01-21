// Lời chúc
const texts = [
  "Hoa khai phú quý, trúc báo bình an.\nCung chúc tân xuân, vạn sự như ý.\n* * *\nNhân dịp Tết Nguyên đán 2025, xin chúc bạn có một năm mới luôn tràn đầy sức khỏe, thành công và hạnh phúc.",
  "Xuân về rộn rã gần xa,\nTài lộc như nước vào nhà.\nChúc nhau sức khỏe thuận hòa,\nMột năm may mắn nở hoa.\nNhân dịp năm mới xuân Ất Tỵ 2025, xin chúc bạn có một năm mới an lành, hoan hỉ.",
  "Phúc lộc đồng nhà, tài lộc đồng gia.\nSức khoẻ dồi dào, tiền vào như nước.\nNhân dịp Tết Nguyên đán 2025, xin chúc bạn có một năm mới an lành, hoan hỉ.",
  "Mừng xuân, chúc Tết mọi nhà,\nAn khang thịnh vượng, hạnh phúc chan hòa.\nCông việc thuận lợi, phát tài,\nNiềm vui viên mãn, chẳng còn âu lo.\nNhân dịp Tết Nguyên đán 2025, xin chúc bạn có một năm mới an lành, hoan hỉ.",
  "Tân niên thịnh vượng tài lộc tới\nXuân mới an khang phúc lộc tràn.\nMừng năm mới 2025, chúc bạn mỗi ngày đều đầy tiếng cười, tâm hồn thư thái và luôn tràn đầy niềm vui.",
  "Chúc Tết đến bạn của tôi trăm điều như ý\nMừng xuân sang vạn sự đại thành công.",
  "Năm mới 2025 chúc bạn sức khỏe vô biên, kiếm được nhiều tiền, đời sướng như tiên và chẳng ai làm phiền. Happy New Year!",
  "Happy New Year 2025! Chúc bạn có 1 bầu trời sức khỏe, 1 biển cả tình thương, 1 đại dương tình bạn, 1 điệp khúc tình yêu, 1 người yêu chung thủy, 1 sự nghiệp như ý.",
  "Chúc bạn năm mới có 12 tháng phú quý, 365 ngày phát tài, 8760 giờ sung túc, 525600 phút thành công và 31536000 giây vạn sự như ý.",
  "Tết 2025, chúc bạn sung sướng trong tình yêu, sung túc trong công việc và sung mãn trong sức khỏe.",
  "Năm mới 2025, chúc bạn sắc đẹp tuyệt vời, tiền vô phơi phới, người yêu không cần tìm cũng tự tới.",
  "Năm Ất Tỵ tới\nAi cũng giàu to\nSức khỏe chẳng lo\nBuồn bực xếp xó\nKhó khăn chuyện nhỏ\nViệc chạy ro ro\nKhông còn nhăn nhó\nMuốn gì được đó!",
  "Chúc bạn luôn hoan hỉ\nSức khỏe bền bỉ\nCông danh hết ý\nTiền vào bạc tỉ\nTiền ra ri rỉ\nTình yêu thỏa chí\nVạn sự như ý\nLuôn cười hí hí\nCung hỷ cung hỷ.",
  "Năm mới cầu sức khỏe\nNăm mới cầu thành công\nNăm mới mong tài lộc\nNăm mới giữ yêu thương\nChúc cho năm mới đã sang\nNgười yêu vui vẻ, xinh tươi cả ngày.",
  "Tết này chúc bạn lộc đầy tay,\nTiền bạc dư dả, tình yêu say.\nSức khỏe dồi dào, công danh sáng,\nCả năm an lành, hạnh phúc bay.",
  "Chúc bạn một Tết ngọt ngào,\nTiền vào đầy túi, gia đình an khang.\nMọi việc thuận lợi, tình yêu bền lâu,\nVui vẻ, khỏe mạnh, đón xuân tưng bừng!",
  "Xuân sang đất trời thêm tươi mới\nCành mai khoe sắc, chim hót líu lo\nChúc bạn năm mới nhiều niềm vui\nGia đình hạnh phúc, tình yêu đong đầy.",
  "Chúc cả nhà mình năm mới 'cười nhiều, lo ít, sống chất, sống chill'.",
  "Năm mới đến rồi, chúc bạn luôn tươi cười, thành công và luôn giữ vững tinh thần lạc quan để vượt qua mọi thử thách",
  "Năm mới, chúc bạn luôn hạnh phúc trong tình yêu, thành công trong công việc và luôn là phiên bản tuyệt vời nhất của chính mình.\nHãy cùng đón chào năm 2025 với nhiều niềm vui và thành công."
];

// t quá rảnh rỗi :)))
const secretText = "tcs1tg";

// Function
function displayRandomText() {
  const randomIndex = Math.floor(Math.random() * texts.length);
  let randomText = texts[randomIndex];
  randomText = randomText.replace(/\n/g, '<br>'); // Replace newline characters with <br>
  const isSecret = Math.random() < 0.00001; 
  document.getElementById('random-text').innerHTML = isSecret ? secretText : randomText; // Use innerHTML to render <br>
}

// Điều kiện
window.onload = displayRandomText;
