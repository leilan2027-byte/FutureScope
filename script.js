// This gets the text from an input field
let userInput = document.getElementById("decisionQuestion").value;
function analyzeDecision() {
    // Get the values from the input fields
    let question = document.getElementById("decisionQuestion").value;
    let firstOption = document.getElementById("option1").value;
    let secondOption = document.getElementById("option2").value;
    
    // Test that we got the values (you can see this in the browser console)
    console.log("Decision:", question);
    console.log("Option 1:", firstOption);
    console.log("Option 2:", secondOption);
}
// Connect the function to the button
document.getElementById("analyzeButton").onclick = analyzeDecision;