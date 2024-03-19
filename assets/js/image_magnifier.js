// $(document).ready(
function magnify(imgID, zoom) {
var img, glass, w, h, bw;
img = document.getElementById(imgID);
glass = document.createElement("DIV");
glass.setAttribute("class", "img-magnifier-glass");
img.parentElement.insertBefore(glass, img);
glass.style.backgroundImage = "url('" + img.src + "')";
glass.style.backgroundRepeat = "no-repeat";
glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
bw = 3;
w = glass.offsetWidth / 2;
h = glass.offsetHeight / 2;
let zoomLevel = 1;

glass.addEventListener("mousemove", moveMagnifier);
img.addEventListener("mousemove", moveMagnifier);
/*and also for touch screens:*/
glass.addEventListener("touchmove", moveMagnifier);
img.addEventListener("touchmove", moveMagnifier);

img.addEventListener('mouseover', function () {
    glass.classList.add('show');
    let originalImage = this.getElementsByTagName('a')[0].getAttribute('href');
    glass.style.backgroundImage = "url('" + originalImage + "')";
});

img.addEventListener('mouseout', function () {
    // remove scaling to prevent non-transition
    glass.style.transform = null;
    zoomLevel = 1;
    glass.classList.remove('show');
});

img.addEventListener('wheel', e => {
    e.deltaY > 0 ? zoomLevel-- : zoomLevel++;
    if (zoomLevel < 1) zoomLevel = 1;
    if (zoomLevel > 5) zoomLevel = 5;
    console.log(`zoom level: ${zoomLevel}`);
    glass.style.transform = `scale(${zoomLevel})`;
});

function moveMagnifier(e) {
    var pos, x, y;
    e.preventDefault();
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
}

function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.Event;
    a = img.getBoundingClientRect();
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    y = y - window.scrollX;
    y = y - window.scrollY;
    return {x : x, y : y};
}
// function getCursorPos(e) {
//   var a, x = 0, y = 0;
//   e = e || window.Event;
//   a = img.getBoundingClientRect();
//   x = e.clientX - a.left;
//   y = e.clientY - a.top;
//   return {x : x, y : y};
// }
}
// Export the magnify function if using modules
if (typeof module !== 'undefined') {
module.exports = magnify;
}