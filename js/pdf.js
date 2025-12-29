<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
async function gerarPDF(){
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const assinatura = obterAssinatura();

  doc.text("DDS – Diálogo Diário de Segurança", 20, 20);
  doc.text("Motorista: João da Silva", 20, 30);
  doc.text("Município: Valparaíso", 20, 40);
  doc.text("Turno: A", 20, 50);
  doc.text("Data/Hora: " + new Date().toLocaleString(), 20, 60);

  doc.text("Assinatura:", 20, 80);
  doc.addImage(assinatura, "PNG", 20, 90, 80, 40);

  doc.text(
    "Registro validado por autenticação biométrica ou PIN do dispositivo.",
    20, 140
  );

  doc.save("DDS_Assinado.pdf");
}