async function buscarFotoPerfil(username) {
  const response = await fetch("https://insta-photo-five.vercel.app/buscar-foto/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username })
  });

  const data = await response.json();

  console.log("URL da foto de perfil:", data.foto_perfil);
}

// Exemplo de uso:
buscarFotoPerfil("wandersonsous4");
