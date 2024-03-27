const switchTabs = (e) => {
  const tabs = document.querySelectorAll('.js--tabs');
  let strGET = window.location.search.replace( '?', '');
  const btn_tabs_show = document.querySelectorAll('[data-tabs-show]')

  if(tabs.length == 0) return;

  tabs.forEach(elem => {
    const btns = elem.querySelectorAll('.js--tabs-btn');
    const contents = elem.querySelectorAll('.js--tabs-content');

    if(btns.length == 0 || contents.length == 0) return;

    btns.forEach((btn, index) => {
      const url = btn.getAttribute('data-tabs-url');

      if(strGET && (url === strGET)){
        btns.forEach(el=> {el.classList.remove('active')});
        btn.classList.add('active');

        contents.forEach(el=> {el.classList.remove('active')});
        contents[index].classList.add('active');
      }

      btn.addEventListener('click', ()=> {
        btns.forEach(el=> {el.classList.remove('active')});
        btn.classList.add('active');

        contents.forEach(el=> {el.classList.remove('active')});
        contents[index].classList.add('active');

        const url = btn.getAttribute('data-tabs-url');
        if (url && history.pushState) {
          let baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
          let newUrl = baseUrl + `?${url}`;
          history.pushState(null, null, newUrl);
        }
      })


    })
    if(btn_tabs_show.length != 0) {
      btn_tabs_show.forEach(new_tab => {
        new_tab.addEventListener('click', () => {
          btns.forEach((btn, index) => {
            if (new_tab.getAttribute('data-tabs-show') == btn.getAttribute('data-tabs-url')) btn.click()
          })
        })
      })
    }
  })
}


export {switchTabs} ;