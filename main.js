let menuBlock = document.getElementById('menuBlock');
let totalParagraph = document.getElementById('total'); 




const menu = [
  { name: 'Борщ', price: 90, type: 'суп' },
  { name: 'Пюре с котлетой', price: 150, type: 'горячее' },
  { name: 'Салат', price: 70, type: 'закуска' },
  { name: 'Компот', price: 40, type: 'напиток' },
  { name: 'Пицца', price: 200, type: 'горячее' }
];

let totalSum = 0; 
let cardCount = 0; 
menu.forEach((cardMenu) => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.dataset.price = cardMenu.price;
    card.dataset.type = cardMenu.type;

    if (cardMenu.price > 100) {
        card.classList.add('expensive');
    } else if (cardMenu.price < 60) {
        card.classList.add('cheap');
    }

    if (cardMenu.type === 'напиток') {
        return;}

    const name = document.createElement('h3');
    name.textContent = `Название: ${cardMenu.name}`;

    const price = document.createElement('p');
    price.textContent = `Цена: ${cardMenu.price} руб.`;

    const type = document.createElement('p');
    type.textContent = `Тип: ${cardMenu.type}`;
    

    card.append(name, price, type);
    menuBlock.appendChild(card); 

    

    totalSum += Number(card.dataset.price);
    cardCount++; 
});

const specialCard = document.createElement('div');
specialCard.classList.add('card', 'special'); 

specialCard.dataset.name = 'Стейк';
specialCard.dataset.price = 120;
specialCard.dataset.type = 'горячее';
specialCard.classList.add('expensive'); 

const specialName = document.createElement('h3');
specialName.textContent = `Блюдо дня  ${specialCard.dataset.name}`;

const specialPrice = document.createElement('p');
specialPrice.textContent = `Цена: ${specialCard.dataset.price} руб.`;

const specialType = document.createElement('p');
specialType.textContent = `Тип: ${specialCard.dataset.type}`;

specialCard.append(specialName, specialPrice, specialType);

menuBlock.prepend(specialCard); 

totalSum += Number(specialCard.dataset.price);
cardCount++; 

totalParagraph.textContent = `Количество блюд: ${cardCount} шт и итоговое значение: ${totalSum} руб.`;
