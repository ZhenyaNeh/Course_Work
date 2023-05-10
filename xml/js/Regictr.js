//Registration
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username').value.trim();
    
    const surname = document.querySelector('#surname').value.trim();
    const name = document.querySelector('#name').value.trim();
    const fathername = document.querySelector('#fathername').value.trim();

    const checkbox = document.querySelector('#checkbox').value.trim();
    const date = document.querySelector('#date').value.trim();
    
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (!username || !surname || !name || !fathername || !date || !email || !password) {
      alert('Заполните все поля формы!');
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Введите корректный E-mail!');
      return;
    }

    var osnova = document.getElementById("osnova");
    var reg = document.getElementById("reg");

    if (username || surname || name || fathername || date || email || password || emailRegex.test(email)) {
        osnova.style.display = "none";
        reg.style.display = "flex";
    }

    var reg1 = document.getElementById("reg1");
    var reg2 = document.getElementById("reg2");
    var reg3 = document.getElementById("reg3");
    var reg4 = document.getElementById("reg4");
    var reg5 = document.getElementById("reg5");

    reg1.innerHTML += "Имя пользователя на сайте: " + username;
    reg2.innerHTML += "Настоящее имя: " + surname + " " + name + " " + fathername;
    reg3.innerHTML += "Пол: " + checkbox;
    reg4.innerHTML += "Дата рождения: " + date;
    reg5.innerHTML += "E-mail: " +email;
  
  });