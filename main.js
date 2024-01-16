let register = [];
const list = document.getElementById('list');
fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        register = data;
        const result =  register.map(item => {
            return `<li class="list__item list__item--${item.category}">
            <img
              src=${item.icon}
              alt="Icon ${item.category}"
              class="item__icon"
            />
            <p class="item__text item__text--${item.category}">${item.category}</p>
            <p class="item__score-item">
              <strong>${item.score}</strong>
              <span>/ 100</span>
            </p>
          </li>`
        })
        list.innerHTML = result.join('');
        
    })
    .catch(error => console.log(error))
