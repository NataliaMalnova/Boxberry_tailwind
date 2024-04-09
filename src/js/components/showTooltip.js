import tippy from "tippy.js";

const showTooltip = () => {
   const tooltips = document.querySelectorAll('.js--tooltip');
   if (tooltips.length === 0) return;

  tooltips.forEach(tooltip => {
    if(!tooltip.hasAttribute('data-tooltip-text')) return;
    const text = tooltip.getAttribute('data-tooltip-text');
    let position = "top";
    if(tooltip.hasAttribute('data-tooltip-position')) position = tooltip.getAttribute('data-tooltip-position');
    let theme = "dark";
    if(tooltip.hasAttribute('data-tooltip-theme')) theme = tooltip.getAttribute('data-tooltip-theme');

    tippy(tooltip, {
      // trigger: 'click',
      theme: theme,
      content: text,
      placement: position,
    });
  })
}

export {showTooltip}