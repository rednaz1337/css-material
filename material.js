darkCheckbox = document.querySelector("#dark-checkbox");

function switchDarkTheme(){
    var style = document.documentElement.style;
    if(this.checked){
        style.setProperty("--color-background", "rgb(20, 20, 20)");
        style.setProperty("--color-background-card", "rgb(30, 30, 30)");
        style.setProperty("--color-text", "rgb(231, 231, 231)");
        style.setProperty("--shadow-card", "0px 1px 1.2px rgba(0, 0, 0, 0.5)");
        style.setProperty("--color-background-nav", "rgb(30, 30, 30)");
    }else{
        style.setProperty("--color-background", "rgb(240, 240, 240)");
        style.setProperty("--color-background-card", "white");
        style.setProperty("--color-text", "black");
        style.setProperty("--shadow-card", "0px 1px 1.2px rgba(0, 0, 0, 0.5)");
        style.setProperty("--color-background-nav", "rgb(226, 226, 226)");
    }
}

var prefersDark = window.matchMedia("(prefers-color-scheme: dark)")

if(prefersDark.matches){
    darkCheckbox.checked = true;
}

darkCheckbox.addEventListener("change", switchDarkTheme)