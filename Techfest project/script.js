// Smooth scroll and cart button feedback
document.querySelectorAll('.btn').forEach(btn => {
  if (btn.textContent.trim() === 'Add to Cart') {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      this.textContent = '✅ Added!';
      this.style.backgroundColor = '#28a745';
      setTimeout(() => {
        this.textContent = 'Add to Cart';
        this.style.backgroundColor = '';
      }, 1500);
    });
  }
});
