document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

   
    var form = document.getElementById("myForm");
    var loading = document.getElementById("loading");
    form.style.opacity = "0"; 
    loading.style.display = "block"; 


    var inputValue = document.getElementById("textInput").value.trim();


    setTimeout(function() {

        var outputText = document.getElementById("outputText");
        outputText.textContent = "Ini adalah teks tambahan yang muncul bersamaan dengan output.";
        outputText.style.display = "block"; 

  
        loading.style.display = "none";

 
        var options = [
            "Harimau Sigma",
            "Bebek Kanjut.",
            "Icikiwir.",
            "Pegunungan Himalaya",
            "Bebek Kanjut.",
            "Laba-laba Sunda."
        ];

 
        var randomIndex = Math.floor(Math.random() * options.length);
        var chosenOption = options[randomIndex];


        var resultDiv = document.getElementById("result");
        resultDiv.textContent = chosenOption;
        resultDiv.style.display = "block";

 
        var refreshBtn = document.getElementById("refreshBtn");
        refreshBtn.style.display = "inline-block";


        form.style.display = "none"; 
        resultDiv.style.marginTop = "50px"; 
        outputText.style.marginTop = "20px"; 

    }, 1500); 
});


function refreshForm() {
    var form = document.getElementById("myForm");
    var resultDiv = document.getElementById("result");
    var outputText = document.getElementById("outputText");
    var refreshBtn = document.getElementById("refreshBtn");

    
    form.style.opacity = "1"; 
    resultDiv.style.display = "none"; 
    outputText.style.display = "none"; 
    refreshBtn.style.display = "none"; 

    document.getElementById("textInput").value = "";
    form.style.display = "flex";
}
