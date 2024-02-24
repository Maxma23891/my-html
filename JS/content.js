
    function changeContent() {
        var demoParagraph = document.getElementById("demo");
        demoParagraph.innerHTML = "เนื้อหาถูกเปลี่ยนแปลงแล้ว!";
    }
    document.addEventListener("DOMContentLoaded", function() {
    var changeColorBtn = document.getElementById("changeColorBtn");
    var displayText = document.getElementById("displayText");

    if (changeColorBtn && displayText) {
        changeColorBtn.addEventListener("click", function () {
            var randomColor = getRandomColor();
            displayText.style.color = randomColor;
        });
    }

    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
//่๋๋Js ปวดหัวมากครับ555