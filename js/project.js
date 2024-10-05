function updateTimer() {
  const future = Date.parse("2024/10/05 13:00:00");
  const now = new Date();
  const diff = future - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const mins = Math.floor(diff / (1000 * 60));
  const secs = Math.floor(diff / 1000);

  const d = days;
  const h = hours - days * 24;
  const m = mins - hours * 60;
  const s = secs - mins * 60;
  document.getElementById("timer").innerHTML =
    "<div>" +
    "<div class='txt-box'>DAY</div>" +
    d +
    "<span>Days</span></div>" +
    "<div>" +
    "<div class='txt-box'>HOUR</div>" +
    h +
    "<span>Hours</span></div>" +
    "<div>" +
    "<div class='txt-box'>MIN</div>" +
    m +
    "<span>Minutes</span></div>" +
    "<div>" +
    "<div class='txt-box'>SEC</div>" +
    s +
    "<span>Seconds</span></div>";
}
