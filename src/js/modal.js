function registerModal() {
  const cover = document.getElementById('cover');
  const modalIconClose = document.querySelector('.book__btn_close');
  const btnDonateForVol = document.querySelector('.tickets__btn');
  const makeDonateModal = document.querySelector('.book__modal');

  btnDonateForVol.addEventListener('click', showDonateModal);

  function showDonateModal() {
    document.body.classList.add('not-scrollable');
    cover.classList.remove('hidden');
    makeDonateModal.classList.remove('hidden');
  }

  cover.addEventListener('click', () => {
    document.body.classList.remove('not-scrollable');
    cover.classList.add('hidden');
    makeDonateModal.classList.add('hidden');
  });

  modalIconClose.addEventListener('click', () => {
    document.body.classList.remove('not-scrollable');
    cover.classList.add('hidden');
    makeDonateModal.classList.add('hidden');
  });
}

export { registerModal }
