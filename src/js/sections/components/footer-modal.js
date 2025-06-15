


window.greetFooterSubscribe = function() {
  const emailInput = document.getElementById('footer-input');
  const email = emailInput ? emailInput.value.trim() : '';
  if (!email) {
    emailInput.classList.add("error");
    emailInput.value = "";
    emailInput.placeholder = "Please enter your email";
    return; 
  } else {
    emailInput.classList.remove("error");
    emailInput.placeholder = "Email";
  }
  checkEmailExists(email);
  openFooterModal();
};



window.closeFooterModal = function() {
  document.getElementById("footer-modal").style.display = "none";
};

window.openFooterModal = function() {
  document.getElementById("footer-modal").style.display = "flex";
};



async function checkEmailExists(email) {
  try {
    const response = await fetch("https://food-boutique.b.goit.study/api/subscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });

    if (response.status === 400) {
         document.getElementById("footer-modal-content").classList.remove("footer-modal-content-modi-height");
     
      document.getElementById("footer-modal-center-div").classList.remove("footer-modal-center-div-modi-margin");

      document.getElementById("footer-modal-content").classList.add("footer-modal-content-height");
      
      document.getElementById("footer-modal-center-div").classList.add("footer-modal-center-div-margin");

            document.getElementById("footer-modal-image").style.display = "none";
           
     
      document.getElementById("footer-modal-title").innerHTML = `Service  <span style="color:#6D8434;">not found</span> (400)`;
      document.getElementById("footer-modal-text").textContent = "Check your email address and try again.";
     
      return;
    }

    const data = await response.json();
    const exists = data.success === false && data.message && data.message.includes("already exists");

    if (exists) {
      document.getElementById("footer-modal-content").classList.remove("footer-modal-content-height");
      document.getElementById("footer-modal-center-div").classList.remove("footer-modal-center-div-height");
      document.getElementById("footer-modal-center-div").classList.remove("footer-modal-center-div-margin");

      document.getElementById("footer-modal-content").classList.add("footer-modal-content-modi-height");
      document.getElementById("footer-modal-center-div").classList.add("footer-modal-center-div-modi-height");
      document.getElementById("footer-modal-center-div").classList.add("footer-modal-center-div-modi-margin");
      document.getElementById("footer-modal-image").style.display = "none";
      document.getElementById("footer-modal-title").innerHTML = `This <span style="color:#6D8434;">email address</span> has already been entered`;
      document.getElementById("footer-modal-text").textContent = "You have already subscribed to our new products. Watch for offers at the mailing address.";
    } else {
      document.getElementById("footer-modal-content").classList.remove("footer-modal-content-modi-height");
      document.getElementById("footer-modal-center-div").classList.remove("footer-modal-center-div-modi-height");
      document.getElementById("footer-modal-center-div").classList.remove("footer-modal-center-div-modi-margin");

      document.getElementById("footer-modal-content").classList.add("footer-modal-content-height");
      document.getElementById("footer-modal-center-div").classList.add("footer-modal-center-div-height");
      document.getElementById("footer-modal-center-div").classList.add("footer-modal-center-div-margin");
      document.getElementById("footer-modal-image").style.display = "block";
      document.getElementById("footer-modal-title").innerHTML = `Thanks for subscribing for <span style="color:#6D8434;">new</span> products`;
      document.getElementById("footer-modal-text").textContent = "We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.";
      document.getElementById("footer-modal-center-div").style.marginTop = "100px";
    }
  } catch (error) {
    document.getElementById("footer-modal-title").textContent = "Network error";
    document.getElementById("footer-modal-text").textContent = "Please check your connection and try again.";
    console.error("API ERROR", error);
  }
}