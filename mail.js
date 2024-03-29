function SendMSG(e) {
    e.preventDefault();
    let nam_txt = document.querySelector("#name");
    let email_txt = document.querySelector("#email");
    let subject_txt = document.querySelector("#subject");
    let message_txt = document.querySelector("#message");
    let body =
      "Name:" +
      nam_txt.value +
      ",  " +
      "email:" +
      email_txt.value +
      ",  " +
      "subject:" +
      subject_txt.value +
      ",  " +
      "Message : " +
      message_txt.value;
  
    let temp = {
      from_name: nam_txt.value,    
      to_name: "Akash Mishra",
      message: body,
    };
    // "service_6ke7mf1", "template_d60ly8l",
    emailjs.send("service_v8094he", "template_pa2q29q", temp).then((res) => {
      if (res.status == 200) {
        success();
      } else {
        failure();
      }
    });
  
    nam_txt.value = "";
    email_txt.value = "";
    subject_txt.value = "";
    message_txt.value = "";
  }
  
  function success() {
    let thank = document.querySelector(".msg-pop-up");
    thank.style.display = "block";
    setTimeout(() => {
      thank.style.display = "none";
    }, 2000);
  }
  
  function failure() {
    let fail = document.querySelector(".failed-msgpop");
    fail.style.display = "block";
    setTimeout(() => {
      fail.style.display = "none";
    }, 2000);
  }
  