//import _clickOutside from "../../js/_clickOutside.js";
const openSelect = () => {
  const select = document.querySelectorAll('.js--app-select');

  if(select.length === 0) return;

  select.forEach(elem => {

    const open = elem.querySelector('.js--app-select-title');
    const open_span = elem.querySelector('.js--app-select-title span')
    const content = elem.querySelector('.js--app-select-content');
    const list = content.querySelectorAll('label');
    const titleDefault = open.innerHTML;

    open.addEventListener('click', () => {
      if (!content.classList.contains('select__checkboxShow')) {
        content.classList.add('select__checkboxShow');
        open_span.parentNode.classList.add('active');
      } else {
        content.classList.remove('select__checkboxShow');
        open_span.parentNode.classList.remove('active');
      }
    });

    list.forEach(item => {
      item.addEventListener('click', () => {
        content.classList.remove('select__checkboxShow');
        open_span.parentNode.classList.remove('active');
      });
    });
    elem.querySelectorAll('input').forEach(item => {
      item.addEventListener('click', () => {
        if (item.checked) {
          open_span.innerHTML = item.value;
        }
        if (open.innerHTML == ' ' || open.innerHTML == '') {
          open_span.innerHTML = titleDefault;
        }
      })
    });

    // document.addEventListener('click', function (event) {
    //   let result = _clickOutside('open', content, 'js--app-select');
    //   if(result) {
    //     content.classList.remove('select__checkboxShow');
    //     open.classList.remove('active');
    //   }
    // });
  });
}


export {openSelect}