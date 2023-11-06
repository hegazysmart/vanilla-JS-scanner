const html5QrCode = new Html5Qrcode("reader");
const config = { fps: 10, qrbox: { width: 300, height: 300 } };
let scanning = false;

document.getElementById('start-button').addEventListener('click', () => {
  if (scanning) return;
  html5QrCode.start(
    { facingMode: "environment" }, // Use the rear camera
    config,
    onScanSuccess,
    onScanFailure
  ).catch(err => {
    console.error(`Unable to start scanning, error: ${err}`);
  });
  scanning = true;
});

document.getElementById('stop-button').addEventListener('click', () => {
  if (!scanning) return;
  html5QrCode.stop().then(() => {
    console.log("Scanning stopped");
  }).catch(err => {
    console.error(`Unable to stop scanning, error: ${err}`);
  });
  scanning = false;
});

function onScanSuccess(decodedText, decodedResult) {
  // Handle the scanned code as required.
  console.log(`Code matched = ${decodedText}`, decodedResult);
  // Display the result in the result paragraph
  document.getElementById('result').textContent = `Scanned result: ${decodedText}`;
}

function onScanFailure(error) {
  // Log the error, scanning will continue.
  console.warn(`Code scan error = ${error}`);
  // Optionally update the result with error
//   document.getElementById('result').textContent = `Scan Error: ${error}`;
}