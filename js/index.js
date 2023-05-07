const popupButton = document.querySelector('.popup_menu_buton');
const popupWrapper = document.querySelector('.popup_menu');
const popupMenu = document.querySelector ('.popup_menu_list');

popupButton.addEventListener('click',handleMenu);

function handleMenu (evt) {
    evt.preventDefault();
    loginPopUp.classList.toggle ('handleMenu');
  };
  
function handleMenu() {
    popupMenu.classList.toggle('hide_popup');
}

document.addEventListener('click', hidePopup);

function hidePopup(el) {

    let targetInside = popupWrapper.contains(el.target);

    if (!targetInside) {
        popupMenu.classList.add('hide_popup');
    }
    else {
        return;
    }
} 
let btn = document.querySelector('.wrapper__btn') 
let navList = document.querySelector('.navigation')


btn.addEventListener('click', () => {
    navList.classList.toggle('show-list')  
})

function serializeForm(formNode) {
    console.log(formNode.elements)
  }
  
  function handleFormSubmit(event) {
    event.preventDefault()
    serializeForm(applicantForm)
  }
  
  const applicantForm = document.getElementById('mars-once')
  applicantForm.addEventListener('submit', handleFormSubmit)
  

 
  function serializeForm(formNode) {
    const { elements } = formNode
    const data = Array.from(elements)
      .filter((item) => !!item.name)
      .map((element) => {
        const { name, value } = element
  
        return { name, value }
      })
  
    console.log(data)
  }

  async function sendData(data) {
    return await fetch('/https://github.com/Nasty862/', {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: data,
    })
  }
  
  
  function toggleLoader() {
    const loader = document.getElementById('loader')
    loader.classList.toggle('hidden')
  }

  async function handleFormSubmit(event) {
    event.preventDefault()
    const data = serializeForm(event.target)
  
    toggleLoader()
  
    const response = await sendData(data)
  
    toggleLoader()
  }

  function onSuccess(formNode) {
    alert('Ваша заявка отправлена!')
    formNode.classList.toggle('hidden')
  }

  // Вызовем её вот так:

  async function handleFormSubmit(event) {
    event.preventDefault()
    const data = serializeForm(event.target)
  
    toggleLoader()
  
    const { status, error } = await sendData(data)
    toggleLoader()
  
    if (status === 200) {
      onSuccess(event.target)
    } else {
      onError(error)
    }
  }
  
  function checkValidity(event) {
    const formNode = event.target.form
    const isValid = formNode.checkValidity()
  
    formNode.querySelector('button').disabled = !isValid
  }
  
  applicantForm.addEventListener('input', checkValidity)
  


