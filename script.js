function logToken() {
  const token = document.getElementById("tokenInput").value;
  alert("Token submitted: " + token);
}

function pulseIntention() {
  const intention = document.getElementById("intention").value;
  alert("Intention logged: " + intention);
}

function requestExport() {
  const reason = document.getElementById("exportReason").value;
  alert("Export request submitted: " + reason + " (.m export pending approval)");
}
