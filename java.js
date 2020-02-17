function calculate() {
    let rateInput = parseFloat(document.getElementById("rate").value);

    let rateInput = parseFloat(document.gerElementId("total".value));
if (totalInput == ""){
    alert("Error, please fill out all boxes.")
}
if (rateInput == ""){
    alert("Error, please fill out all boxes.")
}
document.getElementById("tipAmount").innerHTML = "$" + totalInput*rateInput;
document.getElementById("taxAmount").innerHTML = "$" + totalInput*0.055;
document.getElementById("TotalAmount").innerHTML = "$" + (totalInput + (totalInput*rateInput) + (totalInput*0.055));
return false;
}