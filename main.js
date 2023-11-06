function onScanSuccess(decodedText, decodedResult) {
  console.log(`Code scanned = ${decodedText}`, decodedResult);
  document.getElementById("result").innerText = decodedResult
}
var html5QrcodeScanner = new Html5QrcodeScanner(
"qr-reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);

