{
  const WRAPPER_CLASS = "viewPassword-1234-qwerty-password-wrapper";
  const SHOW_CLASS = "viewPassword-1234-qwerty-password-show";
  const togglePassword = (field) => {
    const isPassword = !field.parentElement.classList.toggle(SHOW_CLASS);
    field.type = isPassword ? "password" : "text";
  }
  
  const handleClickWrapper = (event, field) =>{
    if(event.target.classList.contains(WRAPPER_CLASS)) togglePassword(field);
  }
  
  const createEye = (field) =>{
    const wrapper = document.createElement("div");
    wrapper.classList.add(WRAPPER_CLASS);
    const parentElem = field.parentElement;
    parentElem.append(wrapper);
    wrapper.append(field);
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
