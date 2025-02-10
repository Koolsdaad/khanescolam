plppdo.on('domChanged', () => {
    const khanLogo = document.querySelector('svg._1rt6g9t');
    
    // Defina a URL ou o conteúdo SVG da logo do Lunaris
    const lunarisLogoUrl = 'https://i.postimg.cc/dVYRjYqr/unnamed-removebg-preview.png'; // URL da imagem

    // Caso queira usar o SVG diretamente, você pode alterar o código abaixo para o seu SVG específico
    const lunarisLogoSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
            <circle cx="50" cy="50" r="40" fill="#14bf96" />
            <text x="50" y="50" font-size="20" text-anchor="middle" fill="#fff" dy=".3em">Lunaris</text>
        </svg>
    `;

    if (features.rgbLogo && khanLogo) {
        // Substituindo o logo atual pelo novo logo (imagem ou SVG)
        if (khanLogo) {
            khanLogo.parentNode.replaceChild(createLunarisLogo(), khanLogo); // Substitui o SVG antigo
        }
    }

    // Função para criar o novo logo (Imagem ou SVG)
    function createLunarisLogo() {
        // Se você preferir usar uma imagem do logo
        const imgElement = document.createElement('img');
        imgElement.src = lunarisLogoUrl;
        imgElement.alt = 'Lunaris Logo';
        imgElement.width = 100;  // Ajuste o tamanho conforme necessário
        imgElement.height = 100;

        // Caso prefira usar um SVG diretamente
        // const divElement = document.createElement('div');
        // divElement.innerHTML = lunarisLogoSVG;  // Isso adiciona o SVG diretamente na página

        return imgElement; // ou divElement se usar o SVG
    }
});
