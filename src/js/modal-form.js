function registerModalForm() {
  let monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let timeSelect = document.querySelector('.select-time');

  for(let i = 9; i < 18; i++) {
    let option = document.createElement('option');
    option.textContent = `${i} : 00`;

    let optionStep = document.createElement('option');
    optionStep.textContent = `${i} : 30`;

    timeSelect.append(option);
    timeSelect.append(optionStep);
  }

  timeSelect.addEventListener('change', (e) => {
    console.log(e.target.value)
    document.querySelector('.overview_time').textContent = e.target.value;
  })


  setMinDate();

  function setMinDate() {
    let today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();
    document.querySelector('.overview_date').textContent = `${monthNames[month]}, ${days[today.getDay()]} ${day}`;

    document.querySelector('.input_date').min = `${year}-${month + 1}-${day}`;
  }

  document.querySelector('.input_date').addEventListener('change', (e) => {
    let today = new Date(e.target.value);

    let month = today.getMonth();
    let day = today.getDate();
    document.querySelector('.overview_date').textContent = `${monthNames[month]}, ${days[today.getDay()]} ${day}`;
  })


}

export {registerModalForm}
