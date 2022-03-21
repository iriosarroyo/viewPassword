{
  //TODO: Get new password fields added after page loaded
  const createEye = (field) =>{
    const wrapper = document.createElement("div");
    wrapper.classList.add("viewPassword-1234-qwerty-password-wrapper")
    const parentElem = field.parentElement;
    parentElem.append(wrapper)
    wrapper.append(field)
  }
  
  const passwordFields = document.querySelectorAll("input[type=password]");
  passwordFields.forEach(field =>{
    createEye(field);
  })
}
