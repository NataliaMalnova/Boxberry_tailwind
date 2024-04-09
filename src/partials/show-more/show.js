const showMore = () => {
    const wrapper = document.querySelectorAll('.js--show-more');

    if(wrapper.length === 0) return;

    wrapper.forEach(wrap => {
        const btn = wrap.querySelector('.js--show-more--btn');
        const content = wrap.querySelector('.js--show-more--content');
        let row = 3;
        if(wrap.hasAttribute('data-show-content-row')) row = wrap.getAttribute('data-show-content-row');
        let heightStart = 0;
        if (wrap.hasAttribute('data-show-start')) heightStart = wrap.getAttribute('data-show-start');
        else if (content.querySelector('a')) heightStart = content.querySelector('a').scrollHeight * row;

        if (wrap.hasAttribute('data-show-start') && wrap.hasAttribute('data-show-start-mobile')) {
            if(window.innerWidth > 991) heightStart = wrap.getAttribute('data-show-start');
            else heightStart = wrap.getAttribute('data-show-start-mobile');
        }

        const ob = content.querySelector('div');

        if(!btn || !content) return;

        content.style.setProperty('max-height', heightStart + 'px');

        if(heightStart >= content.scrollHeight) {
            btn.classList.add('hidden');
        } else {
            btn.classList.remove('hidden');
        }

        if(wrap.classList.contains('active')) {
            content.style.overflow = 'visible';
        } else {
            content.style.overflow = 'hidden';
        }

        btn.addEventListener('click', () => {
            let textShow = '';
            let textHidden = '';
            if(btn.hasAttribute('data-more-show')) textShow = btn.getAttribute('data-more-show');
            if(btn.hasAttribute('data-more-hidden')) textHidden = btn.getAttribute('data-more-hidden');
            if(wrap.classList.contains('active')) {
                content.style.setProperty('max-height', heightStart + 'px');
                if(textShow) btn.innerHTML = textShow;
                setTimeout(() => {
                    wrap.classList.remove('active');
                    content.style.overflow = 'hidden';

                }, 0);

            } else {
                content.style.setProperty('max-height', content.scrollHeight + 'px');
                if(textHidden) btn.innerHTML = textHidden;
                setTimeout(() => {
                    wrap.classList.add('active');
                }, 0);
                setTimeout(() => {
                    content.style.overflow = 'visible';
                }, 400);
            }
        })

        const ro = new ResizeObserver(entries => {

            if (wrap.hasAttribute('data-show-start') && wrap.hasAttribute('data-show-start-mobile')) {
                if(window.innerWidth > 991) {
                    heightStart = wrap.getAttribute('data-show-start');
                }
                else {
                    heightStart = wrap.getAttribute('data-show-start-mobile');
                }
            }
            if(heightStart >= content.scrollHeight) {
                btn.classList.add('hidden');
            } else {
                btn.classList.remove('hidden');
            }
            if(!wrap.classList.contains('active')) {
                content.style.setProperty('max-height', heightStart + 'px');
                return;
            }
            content.style.setProperty('max-height', content.scrollHeight + 'px');
        })

        if(ob) ro.observe(ob)

    })
};

export {
    showMore
}