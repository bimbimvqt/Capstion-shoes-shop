document.querySelector("#btnSubmit").onclick = function () {
  let mb = new Member();
  mb.email = document.querySelector("#email").value;
  mb.name = document.querySelector("#name").value;
  mb.password = document.querySelector("#password").value;
  mb.phone = document.querySelector("#phone").value;
  mb.cfPassword = document.querySelector("#cfPassword").value;

  let valid = true;
  valid &=
    kiemTraRong(mb.email, "#tbEmail", "email ") &
    kiemTraEmail(mb.email, "#tbEmail", "email") &
    kiemTraRong(mb.cfPassword, "#tbCfPassword", "password ") &
    kiemTraRong(mb.phone, "#tbPhone", "Phone ");
  valid = kiemTraPassword(mb.password, "#tbPassword", "password");
  valid = kiemTraTatCaKyTu(mb.name, "#tbName", "name");
  if (!valid) {
    return;
  }
};
