const tabsContainers = Array.from(document.querySelectorAll('.tabs'));

tabsContainers.forEach(container => {
  const tabs = Array.from(container.querySelectorAll('.tab'));
  const tabContents = Array.from(container.querySelectorAll('.tab__content'));

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('tab_active'));

      tabContents.forEach(content => content.classList.remove('tab__content_active'));

      tab.classList.add('tab_active');

      tabContents[index].classList.add('tab__content_active');
    });
  });
});
