import { Toast } from 'bootstrap';
/* -------------------------------------------------------------------------- */
/*                                    Toast                                   */
/* -------------------------------------------------------------------------- */

const toastInit = () => {
  const toastElList = [].slice.call(document.querySelectorAll('.toast'));
  toastElList.map(toastEl => new Toast(toastEl));

  const liveToastBtn = document.getElementById('liveToastBtn');

  if (liveToastBtn) {
    const liveToast = new Toast(document.getElementById('liveToast'));

    liveToastBtn.addEventListener('click', () => {
      liveToast && liveToast.show();
    });
  }
};

export default toastInit;
