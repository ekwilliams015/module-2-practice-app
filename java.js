  
function calculate(){
    let rateInput = parseFloat(document.getElementById("rate").value);
    let totalInput = parseFloat(document.getElementById("total").value);
    
    if (totalInput == ""){
        alert("ERROR! Need More Info.");
    }
    if (rateInput == ""){
        alert("ERROR! Need More Info.")
    }
    document.getElementById("tipAmount").innerHTML = "$" + totalInput*rateInput;
    document.getElementById("taxAmount").innerHTML = "$" + totalInput*0.055;
    document.getElementById("TotalAmount").innerHTML = "$" + (totalInput + (totalInput*rateInput) + (totalInput*0.055));
    return false;
}
