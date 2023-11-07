const yearInit = 1930;
const checks = document.querySelectorAll('.btn-check');
const selectYear = document.querySelector('#select-year');
const uncheck = document.querySelector('#uncheck');
let selects = 0;

uncheck.classList.add('invisible');

const checkSelects = () => {
  if (selects >= 3) {
    uncheck.classList.remove('invisible');
    uncheck.classList.add('visible');
  } else {
    uncheck.classList.remove('visible');
    uncheck.classList.add('invisible');
  }
};

// uncheck filters
const unchecks = () => {
  checks.forEach((checkbox) => {
    const i = checkbox.closest('.filter-check').querySelector('i');
    checkbox.checked = false;
    i.classList.remove('bi-check2');
    i.classList.add('bi-plus');
  });
  selectYear.selectedIndex = 0;
  selectYear.classList.remove('active');
  selects = 0;
  checkSelects();
};

// uncheck all filters
uncheck.addEventListener('click', unchecks);

checks.forEach((checkbox) =>
  checkbox.addEventListener('click', function () {
    // console.log(checkbox.closest('.filter-check').querySelector('i').classList);
    const i = checkbox.closest('.filter-check').querySelector('i');
    if (checkbox.checked == true) {
      ++selects;
      i.classList.remove('bi-plus');
      i.classList.add('bi-check2');
    } else {
      --selects;
      i.classList.remove('bi-check2');
      i.classList.add('bi-plus');
    }
    console.log(selects);
    checkSelects();
  })
);

// create years select
const currentYear = new Date().getFullYear();

for (let i = currentYear; i >= yearInit; i--) {
  const opt = document.createElement('option');
  opt.value = i;
  opt.text = i;
  selectYear.add(opt);
}

// add class if select
const ifSelect = () => {
  if (selectYear.value !== '' && selectYear.classList.contains('active') == false) {
    selectYear.classList.add('active');
    ++selects;
  } else if (selectYear.value !== '' && selectYear.classList.contains('active') == true) {
    selects = selects;
  } else {
    selectYear.classList.remove('active');
    if (selects > 0) {
      --selects;
    }
  }
  console.log(selects);
  checkSelects();
};

selectYear.addEventListener('input', ifSelect);

console.log(selects);
