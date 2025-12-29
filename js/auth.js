function aceitarLGPD(){
  document.getElementById("lgpd").style.display = "none";
  document.getElementById("conteudo").style.display = "block";
}

async function autenticar(){
  try {
    const cred = await navigator.credentials.get({
      publicKey: {
        challenge: new Uint8Array(32),
        timeout: 60000,
        userVerification: "required"
      }
    });

    if(cred){
      alert("Autenticação realizada com sucesso");
      document.getElementById("assinaturaBox").style.display = "block";
    }
  } catch(e){
    alert("Falha na autenticação");
  }
}