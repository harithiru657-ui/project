function checkEligibility() {
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let days = document.getElementById("days").value;
  let result = document.getElementById("result");

  if (age === "" || weight === "" || days === "") {
    alert("Please fill all fields");
    return;
  }

  if (age >= 18 && age <= 65 && weight >= 50 && days >= 90) {
    result.style.color = "green";
    result.innerHTML = "✅ Eligible! You can donate blood.";
  } else {
    result.style.color = "red";
    result.innerHTML = "❌ Not eligible at the moment.";
  }
}

function submitDonation() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age2").value;
  let blood = document.getElementById("blood").value;
  let city = document.getElementById("city").value;
  let phone = document.getElementById("phone").value;
  let msg = document.getElementById("msg");

  if (name === "" || age === "" || blood === "" || city === "" || phone === "") {
    alert("Please fill all details");
    return;
  }

  msg.style.color = "green";
  msg.innerHTML = "🎉 Thank you! Your donation request is submitted.";
}