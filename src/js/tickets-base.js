function registerTicketsBase() {
  let totalEl = document.querySelector('.tickets__total');
  let inps = document.querySelectorAll('.amount__btn');

  let senior = document.querySelector('.amount__input_senior');
  let basic = document.querySelector('.amount__input_basic');

  let types = document.querySelectorAll('.tickets__type input');

  let formSelect = document.querySelector('.select-ticket');
  let formInps = document.querySelectorAll('.entry__btn');
  let formInputS = document.querySelector('.entry__input_senior');
  let formInputB = document.querySelector('.entry__input_basic');

  let prices = {
    0: 20,
    1: 25,
    2: 40
  }

  let typesE = {
    0: 'Permanent exhibition',
    1: 'Temporary exhibition',
    2: 'Combined Admission'
  }

  setOrder();

  let total1 = 0;
  let total2 = 0;
  let price = prices[1];
  let bValue = basic.value;
  let sValue = senior.value;

  types.forEach(el => {
    el.addEventListener('change', (e) => {
      price = e.target.dataset.price;

      total1 = 0;
      total1 += (e.target.dataset.price / 2) * senior.value;

      total2 = 0;
      total2 += e.target.dataset.price * Number(basic.value);


      let x = Object.keys(prices).filter(el => prices[el] ==  price)
      document.querySelector('.overview_type').textContent = typesE[x[0]];

      formSelect.value = x[0];

      saveOrder(basic.value, senior.value);

      totalEl.textContent = total1 + total2;
    })
  })

  inps.forEach(el => {
    el.addEventListener('click', (e) => {
      if(e.target.dataset.action === 'senior') {
        total1 = 0;
        total1 += (price / 2) * senior.value;
      }

      if(e.target.dataset.action === 'basic') {
        total2 = 0;
        total2 += price * Number(basic.value);
      }

      document.querySelector('.price_basic .num').textContent = basic.value;
      document.querySelector('.price_senior .num').textContent = senior.value;

      document.querySelector('.price_basic .sum').textContent = total2;
      document.querySelector('.price_senior .sum').textContent = total1;
      document.querySelector('.book__total .total__sum').textContent = total1 + total2;


      saveOrder(basic.value, senior.value);

      totalEl.textContent = total1 + total2;
    })
  })

  formInps.forEach(el => {
    el.addEventListener('click', (e) => {
      if(e.target.dataset.action === 'senior') {
        total1 = 0
        total1 += (price / 2) * formInputS.value;


        document.querySelector('.price_senior .num').textContent = formInputS.value;
        document.querySelector('.price_senior .sum').textContent = total1;
        senior.value = formInputS.value;
      }

      if(e.target.dataset.action === 'basic') {
        total2 = 0
        total2 += price * Number(formInputB.value)

        document.querySelector('.price_basic .num').textContent = formInputB.value;
        document.querySelector('.price_basic .sum').textContent = total2;
        basic.value = formInputB.value;
      }

      document.querySelector('.book__total .total__sum').textContent = total1 + total2;

      saveOrder(formInputB.value, formInputS.value);

      totalEl.textContent = total1 + total2;
    })
  })


  formSelect.addEventListener('change', (e) => {
    console.log('++++', e.target.value)
    price = prices[e.target.value];
    types[e.target.value].checked = true;

    total1 = 0;
    total1 += (price / 2) * senior.value;

    total2 = 0;
    total2 += price * Number(basic.value);


    document.querySelector('.price_basic .sum').textContent = total2;
    document.querySelector('.price_senior .sum').textContent = total1;
    document.querySelector('.book__total .total__sum').textContent = total1 + total2;


    document.querySelector('.overview_type').textContent = typesE[e.target.value];



    totalEl.textContent = total1 + total2;

    saveOrder(formInputB.value, formInputS.value);
  })

  function setOrder() {
    let order = JSON.parse(localStorage.getItem('order'));

    let x = Object.keys(prices).filter(el => prices[el] === +order.price);

    console.log(x)
    types[x[0]].checked = true;


    basic.value = order.bValue;
    senior.value = order.sValue;

    totalEl.textContent = order.total1 + order.total2;


    formSelect.value = x[0];
    document.querySelector('.price_basic .num').textContent = order.bValue;
    document.querySelector('.price_senior .num').textContent = order.sValue;


    document.querySelector('.price_basic .sum').textContent = order.total2;
    document.querySelector('.price_senior .sum').textContent = order.total1;
    document.querySelector('.book__total .total__sum').textContent = order.total1 + order.total2;


    document.querySelector('.overview_type').textContent = typesE[x[0]];


    formInputS.value = order.sValue;
    formInputB.value = order.bValue
  }

  function saveOrder(bv, sv) {
    let order = {
      bValue: bv,
      sValue: sv,
      total1,
      total2,
      price
    }

    // setOrder();
    localStorage.setItem('order', JSON.stringify(order));
  }
}

export {registerTicketsBase}
