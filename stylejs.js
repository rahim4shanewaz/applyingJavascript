console.log('Style by js')

// style set by js
const places = document.getElementById('place');
places.style.backgroundColor= 'gray';
const fruits =document.getElementById('fruits');
fruits.classList.add('style');

// kono kisu create kore set kora 
const placesUl = document.querySelector('#place ul');
const li = document.createElement('li');
li.innerText = "Jessore";
placesUl.appendChild(li);


const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = "Subject";
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Bangla';
const li2 = document.createElement('li');
li2.innerText = 'Englis';
const li3 = document.createElement('li');
li3.innerText = 'Math';
const li4 = document.createElement('li');
li4.innerText = 'Sociology';

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
section.appendChild(ul);
mainContainer.appendChild(section);


const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>Game</h1
<ul>
<li>Cricket</li>
<li>Fooyball</li>
<li>Running</li>
<li>Tennis</li>
</ul>
`
mainContainer.appendChild(sectionDress);

const sections = document.querySelectorAll('section');
console.log(sections);
for(const section of sections){
    console.log(section);
    section.style.border= '2px solid steelblue';
    section.style.marginBottom= '5px';
    section.style.paddingLeft= '10px';
    section.style.borderRadius= '10px';
    

}




