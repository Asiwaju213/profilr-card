function updateTime() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  const now = Date.now();
  timeElement.textContent = `${now} ms`;
  timeElement.setAttribute('datetime', now);
}

setInterval(updateTime, 50);
updateTime();
