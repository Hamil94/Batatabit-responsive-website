// make a function where i can switch between tables with a button

function switchTable() {
    var table = document.getElementById("table");
    var table2 = document.getElementById("table2");
    if (table.style.display === "none") {
        table.style.display = "block";
        table2.style.display = "none";
    } else {
        table.style.display = "none";
        table2.style.display = "block";
    }
}

