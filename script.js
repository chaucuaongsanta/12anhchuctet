// List of random texts
const texts = [
  "Hoa khai phú quý, trúc báo bình an.
Cung chúc tân xuân, vạn sự như ý.

Nhân dịp Tết Nguyên đán 2025, xin chúc bạn có một năm mới luôn tràn đầy sức khỏe, thành công và hạnh phúc bên cạnh những người mình yêu thương.
",
  "Xuân về rộn rã gần xa,
Tài lộc như nước vào nhà.
Chúc nhau sức khỏe thuận hòa,
Một năm may mắn nở hoa.

Nhân dịp năm mới xuân Ất Tỵ 2025, xin chúc bạn và gia đình có một năm mới luôn tràn đầy sức khỏe, hạnh phúc và thành công cùng một mùa Tết bình an và sum họp bên cạnh những người mình yêu thương. Happy New Year!
",
  "Phúc lộc đồng nhà, tài lộc đồng gia.
Sức khoẻ dồi dào, tiền vào như nước.

Nhân dịp Tết Nguyên đán 2025, xin chúc bạn có một năm mới an lành, hoan hỉ, thành công trong học tập, sự nghiệp và luôn tràn đầy niềm vui bên gia đình.
",
  "Mừng xuân, chúc Tết mọi nhà,
An khang thịnh vượng, hạnh phúc chan hòa.
Công việc thuận lợi, phát tài,
Niềm vui viên mãn, chẳng còn âu lo.
Nhân dịp Tết Nguyên đán 2025, xin chúc bạn và gia đình có một năm mới luôn bình an, hạnh phúc, dồi dào sức khoẻ, tiền vào như nước, 8386, tấn tài tấn lộc.
",
  "Tân niên thịnh vượng tài lộc tới/ Xuân mới an khang phúc lộc tràn.
Mừng năm mới 2025, chúc bạn mỗi ngày đều đầy tiếng cười, tâm hồn thư thái và luôn được yêu thương.
",
  "Chúc Tết đến bạn của tôi trăm điều như ý - Mừng xuân sang vạn sự đại thành công.",
  "Năm mới 2025 chúc bạn sức khỏe vô biên, kiếm được nhiều tiền, đời sướng như tiên và chẳng ai làm phiền. Happy New Year!", 
  "Happy New Year 2025! Chúc bạn có 1 bầu trời sức khỏe, 1 biển cả tình thương, 1 đại dương tình bạn, 1 điệp khúc tình yêu, 1 người yêu chung thủy, 1 sự nghiệp sáng ngời, 1 gia đình thịnh vượng. Chúc cả gia đình bạn vạn sự như ý, tỉ sự như mơ, triệu triệu bất ngờ, không chờ cũng đến!",
  "Chúc bạn năm mới có 12 tháng phú quý, 365 ngày phát tài, 8760 giờ sung túc, 525600 phút thành công và 31536000 giây vạn sự như ý.",
  "Tết 2025, chúc bạn sung sướng trong tình yêu, sung túc trong công việc và sung mãn trong sức khỏe.",
  "Năm mới 2025, chúc bạn sắc đẹp tuyệt vời, tiền vô phơi phới, người yêu không cần tìm cũng tự tới.",
  "Năm Ất Tỵ tới
Ai cũng giàu to
Sức khỏe chẳng lo
Buồn bực xếp xó
Khó khăn chuyện nhỏ
Việc chạy ro ro
Không còn nhăn nhó
Muốn gì được đó!
",
  "Chúc bạn luôn hoan hỉ
Sức khỏe bền bỉ
Công danh hết ý
Tiền vào bạc tỉ
Tiền ra ri rỉ
Tình yêu thỏa chí
Vạn sự như ý
Luôn cười hí hí
Cung hỷ cung hỷ
", 
  "Tết này chúc bạn lộc đầy tay,
Tiền bạc dư dả, tình yêu say.
Sức khỏe dồi dào, công danh sáng,
Cả năm an lành, hạnh phúc bay.
",
  "Chúc bạn một Tết ngọt ngào,
Tiền vào đầy túi, gia đình an khang.
Mọi việc thuận lợi, tình yêu bền lâu,
Vui vẻ, khỏe mạnh, đón xuân tưng bừng!
",
  "Xuân sang đất trời thêm tươi mới
Cành mai khoe sắc, chim hót líu lo
Chúc bạn năm mới nhiều niềm vui
Gia đình hạnh phúc, tình yêu đong đầy.
",
  "Chúc cả nhà mình năm mới "cười nhiều, lo ít, sống chất, sống chill".",
  "Năm mới đến rồi, chúc bạn luôn tươi cười, thành công và luôn giữ vững tinh thần lạc quan để vượt qua mọi thử thách",
  "Năm mới, chúc bạn luôn hạnh phúc trong tình yêu, thành công trong công việc và luôn là phiên bản tuyệt vời nhất của chính mình. Hãy cùng đón chào năm 2025 với tinh thần rực rỡ!",

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
