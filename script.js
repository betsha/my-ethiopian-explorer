document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop the form from submitting the traditional way

    const name = document.getElementById("name").value;
    const place = document.getElementById("place").value;

    alert('✅ Thank you, ${name}! Your booking to ${place} has been received.');
  });
});