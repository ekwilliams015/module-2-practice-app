  
function calculate(){
    let userRate = parseFloat(document.getElementById("rate").value);
    let userTotal = parseFloat(document.getElementById("total").value);
    
    if (userTotal == ""){
        alert("Need More Info.");
    }
    if (userRate == ""){
        alert("Need More Info.")
    }
    document.getElementById("tipAmount").innerHTML = "$" + userTotal*userRate;
    document.getElementById("taxAmount").innerHTML = "$" + 0.055*userTotal;
    document.getElementById("TotalAmount").innerHTML = "$" + (userTotal + (userTotal*userRate) + (userRate*0.055));
    return false;
}
