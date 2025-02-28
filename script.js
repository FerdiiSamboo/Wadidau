const questions = [
    "Kamu lebih suka kucing apa anjing?",
    "Kamu suka nya film apa?",
    "Klo aku si lebih suka kamu",
    "Kamu cantik banget si",
    "Kamu jadi pacarku aja ya"
];

const options = [
    ["Kucing", "Anjing"],
    ["Horror", "Drama", "Bokep"],
    [],
    ["SANGAT", "GACOR"],
    ["IYA", "Tidak"]
];

let currentQuestion = 0;
let iyaSize = 16;

function nextQuestion(answer) {
    if (currentQuestion === questions.length - 1) {
        if (answer === "Tidak") {
            iyaSize += 10;
            document.getElementById("iya").style.fontSize = iyaSize + "px";
        } else {
            document.getElementById("question-container").style.display = "none";
            document.getElementById("celebration").style.display = "block";
            setTimeout(() => {
                document.getElementById("celebration").style.display = "none";
                document.getElementById("final-message-container").style.display = "block";
            }, 3000); // Tampilkan final message setelah 3 detik
            document.getElementById("soundEffect").play();
        }
        return;
    }
    

    currentQuestion++;
    document.getElementById("question").textContent = questions[currentQuestion];
    let buttonsHTML = "";

    if (options[currentQuestion].length > 0) {
        options[currentQuestion].forEach(option => {
            buttonsHTML += `<button onclick="nextQuestion('${option}')">${option}</button>`;
        });
    } else {
        buttonsHTML += `<button onclick="nextQuestion('Lanjut')">Lanjut</button>`;
    }

    if (currentQuestion === questions.length - 1) {
        buttonsHTML = `
            <button id="iya" onclick="nextQuestion('IYA')">IYA</button>
            <button onclick="nextQuestion('Tidak')">Tidak</button>
        `;
    }

    document.getElementById("question-container").innerHTML = `
        <p id="question">${questions[currentQuestion]}</p>
        <div class="buttons">${buttonsHTML}</div>
    `;
}

function lanjutKeRamalan() {
    document.getElementById("final-message-container").style.display = "none";
    document.getElementById("ramalan-container").style.display = "block";
}

function kembaliKeAwal() {
    document.getElementById("ramalan-container").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    currentQuestion = 0;
    document.getElementById("question").textContent = questions[currentQuestion];
    document.getElementById("question-container").innerHTML = `
        <p id="question">${questions[currentQuestion]}</p>
        <div class="buttons">
            <button onclick="nextQuestion('IYA')">IYA</button>
            <button onclick="nextQuestion('iya')">iya</button>
        </div>
    `;
}