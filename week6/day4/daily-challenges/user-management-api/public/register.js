const inputs = document.querySelectorAll("#name, #userName, #email, #password");
const registerBtn = document.querySelector(".register-btn");

function checkInputs() {
  const anyEmpty = Array.from(inputs).some(
    (input) => input.value.trim() === ""
  );
  registerBtn.disabled = anyEmpty;
}

inputs.forEach((input) => input.addEventListener("input", checkInputs));

checkInputs();
document.querySelector(".register-btn").addEventListener("click", async () => {
  try {
    const name = inputs[0].value.trim();
    const userName = inputs[1].value.trim();
    const email = inputs[2].value.trim();
    const password = inputs[3].value.trim();
    const data = { fullName: name, userName, email, password };
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const message = await res.json();
    alert(message.message);
  } catch (err) {
    console.log(err);
  }
});
