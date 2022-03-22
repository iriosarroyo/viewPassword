{
  const MENU_CLASS = "viewPassword-1234-qwerty-password-menu";
  const WRAPPER_CLASS = "viewPassword-1234-qwerty-password-wrapper";
  const SHOW_CLASS = "viewPassword-1234-qwerty-password-show";
  const togglePassword = (field) => {
    const isPassword = !document.querySelector(`.${WRAPPER_CLASS}[data-id=${field.dataset.id}]`)
      .classList.toggle(SHOW_CLASS);
    field.type = isPassword ? "password" : "text";
  }
  
  const handleClickWrapper = (event, field) =>{
    if(event.target.classList.contains(WRAPPER_CLASS)) togglePassword(field);
  }
  
  const eyeMenu = document.createElement("div");
  eyeMenu.classList.add(MENU_CLASS);
  document.body.append(eyeMenu);
  
  const createEye = (field, idx) =>{
    const wrapper = document.createElement("div");
    wrapper.classList.add(WRAPPER_CLASS);
    eyeMenu.append(wrapper);
    eyeMenu.dataset.id = idx;
    field.dataset.id = idx;
    wrapper.addEventListener("click", (event) => handleClickWrapper(event, field));
  }
  
  //TODO: Get new password fields added after page loaded
  const passwordFields = document.querySelectorAll("input[type=password]");
  passwordFields.forEach(createEye);
  
  document.addEventListener("keydown", (event) =>{
    if(!event.ctrlKey || !event.shiftKey) return;
    let fieldIdx = parseInt(String.fromCharCode(event.keyCode));
    if(Number.isNaN(fieldIdx)) return;
    if(fieldIdx === 9) fieldIdx = passwordFields.length
    if(fieldIdx > passwordFields.length) return;
    const field = passwordFields[fieldIdx - 1];
    togglePassword(field);
  })
}
