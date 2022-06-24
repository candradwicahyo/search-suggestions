window.onload = () => {
  
  const wrapper = document.querySelector('.wrapper');
  const input = document.querySelector('input');
  input.addEventListener('keyup', function() {
    const value = this.value;
    let array = [];
    if (!value) return clear();
    array = suggestions.filter(data => data.toLocaleLowerCase().startsWith(value.toLocaleLowerCase()));
    array = array.map(data => `<li class="list-group-item list">${data}</li>`);
    wrapper.innerHTML = array.join('');
  });
  
  window.addEventListener('click', function(event) {
    if (event.target.classList.contains('list')) {
      const value = event.target.textContent;
      input.value = value;
      clear();
    }
  });
  
  function clear() {
    wrapper.innerHTML = '';
  }
  
  const button = document.querySelector('.submit');
  button.addEventListener('click', () => {
    const value = input.value;
    if (value) {
      const target = 'https://www.google.com/search?q=' + value;
      document.location.href = target;
      input.value = '';
    }
  });
  
}