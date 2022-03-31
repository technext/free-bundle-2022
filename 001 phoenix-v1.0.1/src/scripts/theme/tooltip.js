import { Tooltip } from 'bootstrap';
/* -------------------------------------------------------------------------- */
/*                                   Tooltip                                  */
/* -------------------------------------------------------------------------- */
const tooltipInit = () => {
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );

  tooltipTriggerList.map(
    tooltipTriggerEl =>
      new Tooltip(tooltipTriggerEl, {
        trigger: 'hover'
      })
  );
};

export default tooltipInit;
