function aceitarLGPD() {
  document.getElementById("lgpdBox").style.display = "none";
  document.getElementById("conteudo").style.display = "block";
}

async function validarDispositivo() {
  if (!window.PublicKeyCredential) {
    alert("Navegador não suporta validação de segurança.");
    return;
  }

  const possuiBloqueio =
    await PublicKeyCredential
      .isUserVerifyingPlatformAuthenticatorAvailable();

  if (possuiBloqueio) {
    alert("Dispositivo com bloqueio seguro confirmado.");
    document.getElementById("assinaturaBox").style.display = "block";
  } else {
    alert("Este dispositivo não possui bloqueio seguro ativo.");
  }
}