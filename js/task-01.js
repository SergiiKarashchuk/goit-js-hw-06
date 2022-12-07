// 1. Звернутись до item;
// 2. Законсолити довжину item;
// 3. Перебрати категорії;
// 4. Вивести в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього);
// В результаті, в консолі будуть виведені наступні повідомлення.
// Number of categories: 3
// Category: Animals
// Elements: 4
// Category: Products
// Elements: 3
// Category: Technologies
// Elements: 5


const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);

const categoriesArray = [...totalCategories]
  .map(
    categories => `Category: ${categories.children[0].textContent}
    Elements: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);

