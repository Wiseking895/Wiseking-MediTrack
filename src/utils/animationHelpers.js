export const fadeIn = (element, duration = 500) => {
  element.style.opacity = 0;
  element.style.transition = `opacity ${duration}ms`;
  requestAnimationFrame(() => {
    element.style.opacity = 1;
  });
};
