const html5QrCode = new Html5Qrcode("reader");
const config = { fps: 10, qrbox: 250 };
let scanning = false;

document.getElementById('start-button').addEventListener('click', function() {
    if (scanning) return;
    html5QrCode.start({ facingMode: "environment" }, config, onScanSuccess, onScanFailure)
    .catch(err => {
        console.error(`Unable to start scanning, error: ${err}`);
    });
    scanning = true;
});

document.getElementById('stop-button').addEventListener('click', function() {
    if (!scanning) return;
    html5QrCode.stop().then(() => {
        console.log("Scanning stopped");
    }).catch(err => {
        console.error(`Unable to stop scanning, error: ${err}`);
    });
    scanning = false;
});

function onScanSuccess(decodedText, decodedResult) {
    document.getElementById('result').textContent = `Scanned result: ${decodedText}`;
    console.log(`Code matched = ${decodedText}`, decodedResult);
}

function onScanFailure(error) {
    // Optionally handle scan failure, if you want to display a message to the user, for example
    console.warn(`Code scan error = ${error}`);
}