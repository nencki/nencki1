const naglowek1 = document.querySelector('h1');
const naglowek2 = document.querySelector('h2');
const naglowek3 = document.querySelector('h3');

const przyciskKolor = document.querySelector('button:nth-of-type(1)');
const przyciskTekst = document.querySelector('button:nth-of-type(2)');
const przyciskStyl = document.querySelector('button:nth-of-type(3)');
const przyciskTlo = document.querySelector('button:nth-of-type(4)');

// Funkcje
przyciskKolor.addEventListener('click', () => {
    naglowek1.style.color = 'niebieski'; // Zmiana koloru tekstu
});

przyciskTekst.addEventListener('click', () => {
    naglowek2.textContent = 'Nowy tekst!'; // Zmiana tekstu
});

przyciskStyl.addEventListener('click', () => {
    naglowek3.style.fontStyle = 'italic'; // Zmiana stylu tekstu na kursywę
});

przyciskTlo.addEventListener('click', () => {
    document.body.style.backgroundColor = 'szary'; // Zmiana koloru tła
});