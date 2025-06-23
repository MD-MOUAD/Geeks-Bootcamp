const inputs = document.querySelectorAll("#userName,  #password");
const loginBtn = document.querySelector(".login-btn");
const messageBox = document.getElementById('messageBox');

function checkInputs() {
  const anyEmpty = Array.from(inputs).some(
    (input) => input.value.trim() === ""
  );
  loginBtn.disabled = anyEmpty;
}

inputs.forEach((input) => input.addEventListener("input", checkInputs));

checkInputs();

loginBtn.addEventListener("click", async () => {
  try{
    const userName = inputs[0].value.trim();
  const password = inputs[1].value.trim();
  const data = { userName, password };
  const res = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const newRes = await res.json();
  if(newRes.error) {
    messageBox.className = 'message error';
    messageBox.textContent = newRes.error;
  }
  if(newRes.message){
    messageBox.className = 'message success';
    messageBox.textContent = newRes.message;
  }
  }catch (err){
    alert(err)
  }

});
