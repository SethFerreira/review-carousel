const randomBtn = document.querySelector('.btn');
const img = document.querySelector('.box-top img');
const title = document.getElementsByTagName('h3')[0];
const fullName = document.getElementsByTagName('h4')[0];
const quote = document.getElementsByTagName('p')[0];
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

const person = [
    {
        name: 'Susan Smith',
        role: 'Web Developer',
        image: 'img/img-1.png',
        alt: 'Portrait of a woman smiling softly against a neutral background',
        quote: 'I love building websites that help businesses grow.'
    },
    {
        name: 'Jasmine Brooks',
        role: 'Data Analyst',
        image: 'img/img-2.png',
        alt: 'Professional headshot of a woman with braided hair, smiling warmly',
        quote: 'Data tells stories, and I love uncovering them.'
    },
    {
        name: 'Michael Johnson',
        role: 'Project Manager',
        image: 'img/img-3.png',
        alt: 'Headshot of a young man in his 20s with chestnut hair and a friendly smile',
        quote: 'Organizing teams and projects is my passion.'
    },
    {
        name: 'Agus Wirawan',
        role: 'Landscape Architect',
        image: 'img/img-4.png',
        alt: 'Portrait of a middle-aged man with salt-and-pepper hair and a gentle smile',
        quote: 'Designing outdoor spaces that feel alive is what I do best.'
    },
    {
        name: 'Rajesh Kumar',
        role: 'Cybersecurity Specialist',
        image: 'img/img-5.png',
        alt: 'Professional headshot of a man in his 50s wearing glasses and a light blue shirt, neutral expression',
        quote: 'Security is not just a job, it’s a responsibility.'
    },
    {
        name: 'Aiko Nakamura',
        role: 'Event Coordinator',
        image: 'img/img-6.png',
        alt: 'Headshot of a professional woman wearing glasses and a navy blazer, smiling confidently',
        quote: 'I make sure every event is unforgettable.'
    }
];

const reviewer = index => {
    const selectedPerson = person[index];
    img.src = selectedPerson.image;
    img.alt = selectedPerson.alt;
    fullName.innerHTML = selectedPerson.name;
    title.innerHTML = selectedPerson.role; 
    quote.innerHTML = selectedPerson.quote;
};

let currentIndex = 0;
rightBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= person.length) {
        currentIndex = 0;
    }
    reviewer(currentIndex);
});

leftBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = person.length - 1;
    }   
    reviewer(currentIndex);
});

randomBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * person.length);
    currentIndex = randomIndex;
    reviewer(currentIndex);
});

window.onload = () => reviewer(currentIndex);

