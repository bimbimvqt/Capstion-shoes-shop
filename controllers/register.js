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
  valid = kiemTraTatCaKyTu(mb.name, 1234"#tbName", "name");
  valid = confirmPassword(
    mb.cfPassword,
    mb.password,
    "#tbCfPassword",
    "password"
  );
  if (!valid) {
    return;
  }

  let Gender = document.querySelectorAll(" #test1,#test2");
  Gender.forEach((input) => {
    if (input.checked === true) {
      mb.gender = input.value;
    }
  });

  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    data: mb,
  });

  promise.then(function (result) {
    document.getElementById("title").innerHTML = "Đăng ký thành công";
    document.getElementById("title").style.color = "green";
    console.log(result.data.content);
  });
  promise.catch(function (err) {
    document.getElementById("title").innerHTML = "Đăng ký không thành công";
    document.getElementById("title").style.color = "red";
  });
};
