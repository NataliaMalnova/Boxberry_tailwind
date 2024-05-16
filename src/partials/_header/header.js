//import _clickOutside from "../../js/_clickOutside.js";
const changeDatalist = () => {

    const search = document.querySelectorAll('.js--search');

    if (search.length === 0) return;
    search.forEach(sr => {
        const input = sr.querySelector('input');
        const list = sr.querySelector('.js--search-datalist');

        input.addEventListener('input', () => {
            console.log('seearch')
            let data = 'val=' + input.value
            fetchSearch(data)
        });

        input.addEventListener('blur', () => {
            setTimeout(() => {
                list.classList.add('hidden');
            }, 200);
        });

        const fetchSearch =  (data) => {
            list.classList.remove('hidden');

        }
    })
}

export {
    changeDatalist
}
