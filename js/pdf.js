<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
function gerarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const assinatura = obterAssinatura();
  const agora = new Date().toLocaleString();

  doc.text("DDS – Diálogo Diário de Segurança", 20, 20);
  doc.text("Motorista: João da Silva", 20, 30);
  doc.text("Município: Valparaíso", 20, 40);
  doc.text("Turno: A", 20, 50);
  doc.text("Registro em: " + agora, 20, 60);

  doc.text("Assinatura:", 20, 80);
  doc.addImage(assinatura, "PNG", 20, 90, 90, 40);

  doc.setFontSize(9);
  doc.text(
    "Registro realizado por meio de dispositivo com bloqueio seguro " +
    "(PIN ou biometria), com manifestação inequívoca de vontade, " +
    "conforme Lei 14.063/2020.",
    20, 145
  );

  doc.save("DDS_Assinado.pdf");
}