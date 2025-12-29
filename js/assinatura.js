const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let desenhando = false;

canvas.addEventListener("mousedown", () => desenhando = true);
canvas.addEventListener("mouseup", () => desenhando = false);
canvas.addEventListener("mousemove", desenhar);

function desenhar(e) {
  if (!desenhando) return;
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
}

function limpar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function obterAssinatura() {
  return canvas.toDataURL("image/png");
}