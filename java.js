  
function calculate(){
    let userRate = parseFloat(document.getElementById("rate").value);
    let userTotal = parseFloat(document.getElementById("total").value);
    
    if (userTotal == 0){
        alert("Total Cannot Be 0");
    }
    if (userRate == 0){
        alert("Need More Info.")
    }
    document.getElementById("tipAmount").innerHTML = "$" + userTotal*userRate;
    document.getElementById("taxAmount").innerHTML = "$" + 0.055*userTotal;
    document.getElementById("TotalAmount").innerHTML = "$" + (userTotal + (userTotal*userRate) + (userRate*0.055));
    return false;
}


function taskEstimator(countOfStories, avgTasksPerStory){
    const taskEstimator = countOfStories*avgTasksPerStory;
let countOfStories = parseFloat(document.getElementById())
}