const API_URL =
"https://script.google.com/macros/s/AKfycby9BjG_Lb3BWDCUDXJBv9T0NdUn4AWtB796f1-x4FZX-KxD33NFokVK5iVaBgVsoadEKw/exec";

/* =========================
   SUBMIT TRIBUTE
========================= */
async function submitTribute() {

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || message === "") {
    alert("Please enter your name and tribute.");
    return;
  }

  try {

    await fetch(API_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain"
      },
      body: JSON.stringify({
        name: name,
        tribute: message
      })
    });

    alert("Tribute Submitted Successfully!");

    document.getElementById("name").value = "";
    document.getElementById("message").value = "";

    setTimeout(() => {
      loadTributes();
    }, 1500);

  } catch (error) {

    console.error(error);
    alert("Submission Failed");

  }

}

/* =========================
   LOAD TRIBUTES
========================= */
async function loadTributes() {

  const tributeList =
    document.getElementById("tributeList");

  tributeList.innerHTML =
    "<p>Loading tributes...</p>";

  try {

    const response = await fetch(API_URL);

    const data = await response.json();

    tributeList.innerHTML = "";

    if (!data || data.length <= 1) {

      tributeList.innerHTML = `
        <div class="tribute-card">
          <p>No tributes yet.</p>
        </div>
      `;

      return;
    }

    data
      .slice(1)
      .reverse()
      .forEach(row => {

        tributeList.innerHTML += `
          <div class="tribute-card">

            <h3>${row[0]}</h3>

            <p>${row[1]}</p>

            <small>${row[2]}</small>

          </div>
        `;

      });

  } catch (error) {

    console.error(error);

    tributeList.innerHTML = `
      <div class="tribute-card">
        <p>Unable to load tributes.</p>
      </div>
    `;

  }

}

/* =========================
   LOAD ON PAGE OPEN
========================= */
window.addEventListener(
  "DOMContentLoaded",
  loadTributes
);