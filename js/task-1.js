const totalCategories = document.querySelectorAll('.item');

console.log(`Number of categories: ${totalCategories.length}`);

totalCategories.forEach((category) => {
    const title = category.querySelector('.title').textContent;
    console.log(`Category: ${title}`);

    const numberOfElemets = category.querySelectorAll('.category-item'); 
    console.log(`Elements: ${numberOfElemets.length}`);
});