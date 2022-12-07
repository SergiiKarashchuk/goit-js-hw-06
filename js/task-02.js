// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const PotatoesEl = document.createElement('li');
PotatoesEl.classList.add('item');
PotatoesEl.textContent = 'Potatoes';
console.log(PotatoesEl);

const MushroomsEl = document.createElement('li');
MushroomsEl.classList.add('item');
MushroomsEl.textContent = 'Mushrooms';
console.log(MushroomsEl);

const GarlicEl = document.createElement('li');
GarlicEl.classList.add('item');
GarlicEl.textContent = 'Garlic';
console.log(GarlicEl);

const TomatosEl = document.createElement('li');
TomatosEl.classList.add('item');
TomatosEl.textContent = 'Tomatos';
console.log(TomatosEl);

const HerbsEl = document.createElement('li');
HerbsEl.classList.add('item');
HerbsEl.textContent = 'Herbs';
console.log(HerbsEl);

const CondimentsEl = document.createElement('li');
CondimentsEl.classList.add('item');
CondimentsEl.textContent = 'Condiments';
console.log(CondimentsEl);

// let ulList = document.getElementById("ingredients");
const ulListEl = document.createElement('ul');
ulListEl.classList.add('#ingredients');
console.log(ulListEl);

ulListEl.append(PotatoesEl, MushroomsEl, GarlicEl, TomatosEl,HerbsEl, CondimentsEl);