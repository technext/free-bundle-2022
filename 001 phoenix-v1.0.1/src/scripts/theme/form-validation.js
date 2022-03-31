/* -------------------------------------------------------------------------- */
/*                              Form Validation                               */
/* -------------------------------------------------------------------------- */

const fromValidationInit = () => {
  const forms = document.querySelectorAll('.needs-validation');

  forms.forEach(form => {
    form.addEventListener(
      'submit',
      event => {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');
      },
      false
    );
  });
};
export default fromValidationInit;
