const btnUp = () => {
  const el = document.querySelector('.btn-up')
  const show = () => {
    el.classList.remove('hidden');
  }
  const hide = () => {
   el.classList.add('hidden');
  }
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    scrollY > 400 ? show() : hide()
  })
  el.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  })
}


export { btnUp }