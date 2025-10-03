const tooltips = document.querySelectorAll('.has-tooltip');
let activeTooltip = null;

document.addEventListener('click', (e) => {
  const target = e.target.closest('.has-tooltip');

  if (!target) {
    if (activeTooltip) {
      activeTooltip.remove();
      activeTooltip = null;
    }
    return;
  }

  e.preventDefault();

  if (activeTooltip && activeTooltip.previousElementSibling === target) {
    activeTooltip.remove();
    activeTooltip = null;
    return;
  }

  if (activeTooltip) {
    activeTooltip.remove();
  }

  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip tooltip_active';
  tooltip.textContent = target.title;

  target.insertAdjacentElement('afterend', tooltip);

  const rect = target.getBoundingClientRect();
  tooltip.style.left = rect.left + 'px';
  tooltip.style.top = rect.bottom + 'px';

  activeTooltip = tooltip;
});
