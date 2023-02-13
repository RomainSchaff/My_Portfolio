const form = document.getElementById("contact-form");

emailjs.init("ptyxDTTX6KRaUDFN8");

function sendEmail() {
  let nom = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  emailjs
    .send("service_37juacq", "contact_form", {
      from_name: nom,
      from_email: email,
      message: message,
    })
    .then((res) => {
      console.log(res);
      alert("L'e-mail a été envoyé");
    })
    .then(() => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    })
    .catch((err) => {
      console.log(err);
      alert("Erreur : " + err);
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
