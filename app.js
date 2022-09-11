const numbers = document.querySelectorAll(".numbers");

const updateCount = (item) => {
  const value = parseInt(item.dataset.value);
  const increment = Math.ceil(value / 1000);
  let initialCount = 0;

  // set interval
  const increaseCount = setInterval(() => {
    initialCount += increment;
    item.textContent = `${initialCount}+`;

    // clear interval
    if (initialCount > value) {
      clearInterval(increaseCount);
      item.textContent = `${value}+`;
      return;
    }
  }, 1);
};

numbers.forEach((numb) => {
  updateCount(numb);
});
