const LIGHT = 0;
const DARK = 1;

let colorMode = LIGHT;
const images = [
    "https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp",
    "https://wddbyui.github.io/wdd131/images/byui-logo-white.png"

];

const colorModeNames = [
    "Light",
    "Dark"
];

const COLORS = {
    mainText: ["rgb(10, 10, 10)", "rgb(240, 240, 240)"],
    schoolText: ["rgb(138, 43, 226)", "rgb(228, 203, 255)"],
    divider: ["rgb(211, 211, 211)", "rgb(211, 211, 211)"],
    background: ["rgb(241, 241, 241)", "rgb(30, 30, 30)"],
};

function changeColorMode() {
    console.log('something happened');
    const btn = document.getElementById('colorMode');
    colorMode = (colorMode + 1) % colorModeNames.length;

    for (let className in COLORS) {
        const elements = document.getElementsByClassName(className);

        for (let j = 0; j < elements.length; j++) {
            const element = elements[j];
            const activeColor = COLORS[className][colorMode];

            if (className === 'background') {
                element.style.backgroundColor = activeColor;
            } else {
                element.style.color = activeColor;
            }
        }
    }
    btn.innerText = colorModeNames[colorMode];

    document.getElementById("byuiLogo").src = images[colorMode];
}
