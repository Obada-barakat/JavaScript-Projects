const reviews = [
{
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
},
{
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
},
{
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
},
{
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
},
];

const elements = {
    img: document.getElementById('person-img'),
    author: document.getElementById('author'),
    job: document.getElementById('job'),
    info: document.getElementById('info'),
    buttons: document.querySelectorAll('[data-action]'),
};

let currentIndex = 0;

const updateUI = ({ img, name, job, text }) => {
    elements.img.src = img;
    elements.author.textContent = name;
    elements.job.textContent = job;
    elements.info.textContent = text;
};

const changeReview = (action) => {
    if (action == 'next') {
        currentIndex = (currentIndex + 1) % reviews.length;
    }   else if (action === 'prev') {
        currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    }   else if (action === 'random') {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * reviews.length);
        }   while (randomIndex === currentIndex);
        currentIndex = randomIndex;
    }
    updateUI(reviews[currentIndex])
}

window.addEventListener('DOMContentLoaded', () => updateUI(reviews[currentIndex]));

elements.buttons.forEach(btn => {
    btn.addEventListener('click', () => changeReview(btn.dataset.action));
})