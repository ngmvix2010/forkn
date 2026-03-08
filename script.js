const CORRECT_PIN = "090310";
const SECRET_PASS = "danhchoem";

let currentPin = "";
const pinDisplay = document.getElementById("pin-display");
const audioPlayer = document.getElementById("audio-player");

function addPin(num) {
    if (currentPin.length < 6) {
        currentPin += num;
        updatePinDisplay();
    }
}

function deletePin() {
    if (currentPin.length > 0) {
        currentPin = currentPin.slice(0, -1);
        updatePinDisplay();
    }
}

function updatePinDisplay() {
    let displayStr = "";
    for (let i = 0; i < 6; i++) {
        if (i < currentPin.length) {
            displayStr += "*";
        } else {
            displayStr += "°";
        }
    }
    pinDisplay.innerText = displayStr;
}

function checkPin() {
    if (currentPin === CORRECT_PIN) {
        document.getElementById("pin-screen").classList.add("hidden");
        document.getElementById("menu-screen").classList.remove("hidden");
    } else {
        alert("Sai mã PIN rồi! Hint: Sinh nhật của bạn đó nha.");
        currentPin = "";
        updatePinDisplay();
    }
}

function openModal(modalId) {
    document.getElementById(modalId).classList.remove("hidden");
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add("hidden");
}

function checkSecretPassword() {
    const inputPass = document.getElementById("secret-password").value;
    if (inputPass === SECRET_PASS) {
        closeModal("secret-login-modal");
        openModal("secret-confession-modal");
        playMusic('assets/rungdong.mp3');
    } else {
        alert("Sai mật khẩu bí mật rồi nha!");
    }
}

function playMusic(src) {
    audioPlayer.src = src;
    audioPlayer.play().catch(error => {
        console.log("Trình duyệt chặn autoplay, cần tương tác từ người dùng:", error);
        alert("Vui lòng tương tác với màn hình để phát nhạc!");
    });
}

function stopMusic() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}

/**
 * @param {string} page1 - ID của Tomorrow Modal
 * @param {string} page2 - ID của Second Message Modal
 */
function checkDateAndOpen(page1, page2) {
    const now = new Date();
    
    const targetDate = new Date(2026, 2, 9, 0, 0, 0);

    if (now < targetDate) {
        openModal(page1);
    } else {
        openModal(page2);
    }
}
