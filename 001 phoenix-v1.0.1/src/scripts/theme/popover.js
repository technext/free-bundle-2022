import { Popover } from 'bootstrap';
/* -------------------------------------------------------------------------- */
/*                                   Popover                                  */
/* -------------------------------------------------------------------------- */

const popoverInit = () => {
  const popoverTriggerList = Array.from(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );

  popoverTriggerList.map(popoverTriggerEl => {
    return new Popover(popoverTriggerEl);
  });
};

export default popoverInit;
