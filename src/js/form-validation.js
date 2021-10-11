function registerFormValidation() {
  // TODO: refactor

  let name = document.querySelector('.input__name');
  let email = document.querySelector('.input__email');
  let phone = document.querySelector('.input__phone');

  name.addEventListener('change', e => {
    if(e.target.value.match(/^[A-Za-z]{3,15}$/) === null || !e.target.value.match(/^[А-Яа-яЁё]{3,15}$/) === null) {
      e.target.closest('.field-container').classList.add('invalid')
      console.log(e.target.closest('.field-container').nextElementSibling)
      e.target.closest('.field-container').nextElementSibling.classList.remove('text_hidden')
    }
  })

  name.addEventListener('input', e => {
    e.target.closest('.field-container').classList.remove('invalid');
    e.target.closest('.field-container').nextElementSibling.classList.add('text_hidden')
  })

  email.addEventListener('change', e => {
    let reg = /^([A-Za-z0-9_\-\.]{3,15})\@([A-Za-z]{4,})\.([A-Za-z]{2,})$/;

    if(e.target.value.match(reg) === null) {
      e.target.closest('.field-container').classList.add('invalid')
      console.log(e.target.closest('.field-container').nextElementSibling)
      e.target.closest('.field-container').nextElementSibling.classList.remove('text_hidden')
    }
  })

  email.addEventListener('input', e => {
    e.target.closest('.field-container').classList.remove('invalid');
    e.target.closest('.field-container').nextElementSibling.classList.add('text_hidden')
  })

  phone.addEventListener('change', e => {
    console.log(e.target.value)
    let reg = /^\d{1,10}$/;
    // let reg1 = /^\d{2|3}\s?\d{2|3}\s?\{d}{2|3}$/

    if(e.target.value.match(reg) === null) {
      e.target.closest('.field-container').classList.add('invalid')
      e.target.closest('.field-container').nextElementSibling.classList.remove('text_hidden')
    }
  })

  phone.addEventListener('input', e => {
    e.target.closest('.field-container').classList.remove('invalid');
    e.target.closest('.field-container').nextElementSibling.classList.add('text_hidden')
  })

}

export {registerFormValidation}
