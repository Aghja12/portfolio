const categories = document.querySelectorAll('.AboutMe,.Hobbies,.Skills,.Education');
const contents = document.querySelectorAll('.content');

categories.forEach((category) => {
  category.addEventListener('click', () => {
    const categoryName = category.getAttribute('data-text');
    const content = document.querySelector(`.${categoryName}Content`);
    contents.forEach((c) => c.style.display = 'none');
    content.style.display = 'block';
  });
});