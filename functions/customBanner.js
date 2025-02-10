const phrases = [ 
    "relaxa, não to hackeando tua conta *vendo a senha* ",
    "oq achou?",
    "baum dia",
    "aproveite",
    "bom pra vc",
    "sério, para de me chamar a cada 0.5 segundos" 
];

setInterval(() => { 
    const greeting = document.querySelector('.stp-animated-banner h2');
    if (greeting&&features.customBanner) greeting.textContent = phrases[Math.floor(Math.random() * phrases.length)];
}, 3000);
