const tabBarItems = document.querySelectorAll('.tab-bar--item');

tabBarItems.forEach(item => {
  item.addEventListener('click', function() {
    const current = document.querySelector('.active');
    current.classList.remove('active');
    this.classList.add('active');
  });
});

