function displayDiv(val) {

    var dashboardView = document.getElementById("dashboard");
    var graphView = document.getElementById("graph");
    var featuresView = document.getElementById("features");
    var scenariosView = document.getElementById("scenarios");
    var aboutView = document.getElementById("about");

    dashboardView.style.display = "none";
    graphView.style.display = "none";
    featuresView.style.display = "none";
    scenariosView.style.display = "none";
    aboutView.style.display = "none";

    if (val === 0) {
        //display == dashboard
        dashboardView.style.display = "block";
    } else if (val === 1) {
        //display == Graph
        graphView.style.display = "block";
    }
    else if (val === 2) {
        //display == Features
        featuresView.style.display = "block";
    }
    else if (val === 3) {
        //display == Scenarios
        scenariosView.style.display = "block";
    }
    else if (val === 4) {
        //display == about
        aboutView.style.display = "block";
    }
}