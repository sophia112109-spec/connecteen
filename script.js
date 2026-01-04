function signup() {
  const user = document.getElementById("signUser").value;
  const pass = document.getElementById("signPass").value;
  localStorage.setItem(user, pass);
  window.location.href = "login.html";
}

function login() {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;
  const storedPass = localStorage.getItem(user);

  if (pass === storedPass) {
    window.location.href = "dashboard.html";
  } else {
    alert("Incorrect login");
  }
}

function postSpark() {
  const input = document.getElementById("sparkInput");
  if (!input.value.trim()) return;

  const sparks = JSON.parse(localStorage.getItem("sparks") || "[]");
  sparks.unshift(input.value);
  localStorage.setItem("sparks", JSON.stringify(sparks));
  input.value = "";
  loadSparks();
}

function loadSparks() {
  const feed = document.getElementById("sparkFeed");
  if (!feed) return;
  feed.innerHTML = "";

  const sparks = JSON.parse(localStorage.getItem("sparks") || "[]");
  sparks.forEach(text => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<p><strong>Anonymous Teen:</strong> ${text}</p>`;
    feed.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", loadSparks);

