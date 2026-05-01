const emailJSConfig = {
  publicKey: "kqIuzHZUeAeN8IFyN",
  serviceId: "service_kl1jd29",  // Service ID
  templateId: "template_tn4elg7" // Template ID
};

// Initialize EmailJS with the public key
emailjs.init(emailJSConfig.publicKey);

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("enquiryForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const timeInput = form.querySelector("input[name='time']");
    if (timeInput) {
      timeInput.value = new Date().toLocaleString();
    }

    // Use the serviceId and templateId from the config object
    emailjs.sendForm(emailJSConfig.serviceId, emailJSConfig.templateId, form)
      .then(function () {
        alert("✅ Enquiry sent successfully!");
        form.reset();
      })
      .catch(function (error) {
        console.log("EmailJS Error:", error);
        alert("❌ Failed: " + error.text);
      });
  });
});