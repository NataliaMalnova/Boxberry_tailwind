import noUiSlider from "nouislider";

const filterRange = () => {
  const wrapper = document.querySelectorAll('.js--filter-range');

  if(wrapper.length === 0) return;

  wrapper.forEach(wrap => {
    if(!wrap.hasAttribute('data-range-min')
      || !wrap.hasAttribute('data-range-min')
      || !wrap.hasAttribute('data-range-min')
      || !wrap.hasAttribute('data-range-min')) return;

    const min = +wrap.getAttribute('data-range-min');
    const max = +wrap.getAttribute('data-range-max');
    const start_1 = +wrap.getAttribute('data-range-start-1');
    const start_2 = +wrap.getAttribute('data-range-start-2');
    let stepsSlider = wrap.querySelector('.js--filter-range-slider');
    let inputs = wrap.querySelectorAll('.js--filter-range-input');

    noUiSlider.create(stepsSlider, {
      start: [start_1, start_2],
      connect: true,
      format: {
        from: function(value) {
          return parseInt(value);
        },
        to: function(value) {
          return parseInt(value);
        }
      },
      range: {
        'min': [min],
        'max': max
      }
    });

    stepsSlider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = values[handle];
    });

    // Listen to keydown events on the input field.
    inputs.forEach(function (input, handle) {
      input.addEventListener('focus', function () {
        input.parentNode.classList.add('border-lime');
        input.parentNode.classList.add('hover:border-lime');
      });
      input.addEventListener('blur', function () {
        input.parentNode.classList.remove('border-lime');
        input.parentNode.classList.remove('hover:border-lime');
      });
      input.addEventListener('change', function () {
        stepsSlider.noUiSlider.setHandle(handle, this.value);
      });

      input.addEventListener('keydown', function (e) {

        var values = stepsSlider.noUiSlider.get();
        var value = Number(values[handle]);

        // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
        var steps = stepsSlider.noUiSlider.steps();

        // [down, up]
        var step = steps[handle];

        var position;

        // 13 is enter,
        // 38 is key up,
        // 40 is key down.
        switch (e.which) {

          case 13:
            stepsSlider.noUiSlider.setHandle(handle, this.value);
            break;

          case 38:

            // Get step to go increase slider value (up)
            position = step[1];

            // false = no step is set
            if (position === false) {
              position = 1;
            }

            // null = edge of slider
            if (position !== null) {
              stepsSlider.noUiSlider.setHandle(handle, value + position);
            }

            break;

          case 40:

            position = step[0];

            if (position === false) {
              position = 1;
            }

            if (position !== null) {
              stepsSlider.noUiSlider.setHandle(handle, value - position);
            }

            break;
        }
      });
    });
  })
}

const changeTag = () => {
  const wrapper = document.querySelectorAll('.js--filter-tag');

  if (wrapper.length === 0) return;

  wrapper.forEach(wrap => {
    const tags = wrap.querySelectorAll('.tag');

    tags.forEach(elem => {
      elem.addEventListener('click', () => {
        tags.forEach(el => {
          el.classList.remove('active');
        })
        elem.classList.add('active');
      })
    })
  })
}

const searchFilter = () => {
  const wrapper = document.querySelectorAll('.js--filter-search');

  if(wrapper.length === 0) return;

  wrapper.forEach(wrap => {
    const input = wrap.querySelector('input');
    const option = wrap.querySelector('.js--filter-search-option');
    const options = wrap.querySelectorAll('.js--filter-search-option p');

    if(!input || !option) return;

    input.addEventListener('focus', function () {
      input.parentNode.classList.add('border-lime');
      input.parentNode.classList.add('hover:border-lime');
      option.classList.remove('hidden');
    });
    input.addEventListener('blur', function () {
      input.parentNode.classList.remove('border-lime');
      input.parentNode.classList.remove('hover:border-lime');
    });

    if(options.length != 0) {
      options.forEach(op => {
        op.addEventListener('click', () => {
          input.value = op.innerHTML;
          option.classList.add('hidden');
        })
      })
    }
  })
}

const clearFilter = () => {
  const filters = document.querySelectorAll('.js--filter');

  if(filters.length === 0) return;

  filters.forEach(filter => {
    const btn = filter.querySelector('.js--filter-clear');

    const checkbox = filter.querySelectorAll('input[type="checkbox"]');

    btn.addEventListener('click', () => {
      if(checkbox.length != 0) {
        checkbox.forEach(el => {
          el.checked = false
        })
      }
    })
  })
}

const openFilterMobile = () => {
  const filter = document.querySelector('.js--filter-mobile');
  const btn = document.querySelector('.js--filter-mobile-btn');
  const close = document.querySelector('.js--filter-mobile-close')

  if(!filter || !btn || !close) return;

  btn.addEventListener('click', () => {
    filter.classList.add('active');
    const margin = window.innerWidth - document.body.clientWidth;
    document.documentElement.style.overflowY = 'hidden';
    document.documentElement.style.paddingRight = margin + 'px';
  })

  close.addEventListener('click', () => {
    filter.classList.remove('active');
    document.documentElement.style.overflowY = 'auto'
    document.documentElement.style.paddingRight = '0';
  })
}

export { filterRange, changeTag, searchFilter, clearFilter, openFilterMobile }