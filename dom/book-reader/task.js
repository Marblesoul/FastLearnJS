const book = document.getElementById('book');
const controls = document.querySelector('.book__controls');

controls.addEventListener('click', (e) => {
  const target = e.target;

  if (target.classList.contains('font-size')) {
    e.preventDefault();

    const fontSizes = controls.querySelectorAll('.font-size');
    fontSizes.forEach(fontSize => fontSize.classList.remove('font-size_active'));
    target.classList.add('font-size_active');

    book.classList.remove('book_fs-small', 'book_fs-big');

    const size = target.dataset.size;
    if (size === 'small') {
      book.classList.add('book_fs-small');
    } else if (size === 'big') {
      book.classList.add('book_fs-big');
    }
  }

  if (target.classList.contains('color') && target.dataset.textColor) {
    e.preventDefault();

    const textColors = controls.querySelectorAll('[data-text-color]');
    textColors.forEach(color => color.classList.remove('color_active'));
    target.classList.add('color_active');

    book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');

    const textColor = target.dataset.textColor;
    book.classList.add(`book_color-${textColor}`);
  }

  if (target.classList.contains('color') && target.dataset.bgColor) {
    e.preventDefault();

    const bgColors = controls.querySelectorAll('[data-bg-color]');
    bgColors.forEach(color => color.classList.remove('color_active'));
    target.classList.add('color_active');

    book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');

    const bgColor = target.dataset.bgColor;
    book.classList.add(`book_bg-${bgColor}`);
  }
});
