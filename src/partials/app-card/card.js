const showSliderForCard = () => {
  const sliders = document.querySelectorAll('.js--card-slider')

  if(sliders.length === 0) return

  sliders.forEach(slider => {
    const blocks = slider.querySelectorAll('label')
    const images = slider.querySelectorAll('img')

    if(blocks.length === 0 || images.length === 0 || blocks.length !== images.length) return

    blocks.forEach((elem, index) => {
      elem.addEventListener('mouseover', () => {
        images.forEach(el => { el.classList.remove('active') })
        images[index].classList.add('active')
      })
      elem.addEventListener('mouseout', () => {
        images.forEach(el => { el.classList.remove('active') })
        images[0].classList.add('active')
      });
    })
  })
}

export { showSliderForCard }