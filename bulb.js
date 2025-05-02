function toggleLight() {
    let lightbulb = document.getElementById("lightbulb");
    if (lightbulb.src.includes("lightbulb_off.png")) {
        lightbulb.src = "media/lightbulb_on.png";
    } else {
        lightbulb.src = "media/lightbulb_off.png";
    }
}
