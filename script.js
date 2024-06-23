const data = [
    "Beruang Tipes","Naga Hytam","Pelek Tronton","Teh Celup","Gojo Skibidi","Tuyul Mullet","Cupang Rembo","Kenalpot Resing","Rusdi Sigma","Mas Faiz 😋","Reza Kecap","Bekantan","Kambir Jawir","Paus Biru Mandalika","Joker Merah","Pelek Vario","Cicak Manado","Ilham Batagor","Musang Birahi","Paus Sumatra","Farhan Kebab","Gendang Jawa","Orang Hytam","Harimau Jawa"
];

function getRandomData() {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
}

document.getElementById("randomForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formElement = document.querySelector(".form-container form");
    formElement.style.display = "none";

    const loadingElement = document.getElementById("loading");
    loadingElement.style.display = "block";

    const resultElement = document.getElementById("result");
    resultElement.style.display = "none";

    const messageElement = document.getElementById("message");
    messageElement.style.display = "none";

    const refreshSection = document.getElementById("refreshSection");
    refreshSection.style.display = "none";

    setTimeout(function() {
        loadingElement.style.display = "none";

        messageElement.style.display = "block";

        const randomData = getRandomData();
        resultElement.textContent = randomData;
        resultElement.style.display = "block";

        refreshSection.style.display = "block";
    }, 2000); 
});

document.getElementById("refreshButton").addEventListener("click", function() {
    location.reload();
});
