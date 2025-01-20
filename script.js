// List
const texts = [
  " Hoa khai phú quý, trúc báo bình an.
  Cung chúc tân xuân, vạn sự như ý.
  Nhân dịp Tết Nguyên đán 2025, xin chúc bạn có một năm mới luôn tràn đầy sức khỏe, thành công và hạnh phúc bên cạnh những người mình yêu thương. ",
  "Xuân về rộn rã gần xa,
  Tài lộc như nước vào nhà.
  Chúc nhau sức khỏe thuận hòa,
  Một năm may mắn nở hoa.",
  "Phúc lộc đồng nhà, tài lộc đồng gia.
  Sức khoẻ dồi dào, tiền vào như nước.",
  "Nhân dịp Tết Nguyên đán 2025, xin chúc bạn có một năm mới an lành, hoan hỉ, thành công trong học tập, sự nghiệp và luôn tràn đầy niềm vui bên gia đình.",
  "Mừng xuân, chúc Tết mọi nhà,
  An khang thịnh vượng, hạnh phúc chan hòa.
  Công việc thuận lợi, phát tài,
  Niềm vui viên mãn, chẳng còn âu lo.",
  "Tân niên thịnh vượng tài lộc tới/ Xuân mới an khang phúc lộc tràn.
  Mừng năm mới 2025, chúc bạn mỗi ngày đều đầy tiếng cười, tâm hồn thư thái và luôn được yêu thương.",
  "Chúc Tết đến bạn của tôi trăm điều như ý - Mừng xuân sang vạn sự đại thành công.",
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
