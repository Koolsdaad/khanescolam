const phrases = [ 
    "Aproveite o Lunaris.",
    "Use por sua responsabilidade.",
    "Lunaris.",
    "Dúvidas? Entre no nosso discord."
    "https://discord.gg/PMbWMHKVfh"
];

setInterval(() => { 
    const greeting = document.querySelector('.stp-animated-banner h2');
    if (greeting&&features.customBanner) greeting.textContent = phrases[Math.floor(Math.random() * phrases.length)];
}, 3000);
