function calculate() {

let epi = parseFloat(document.getElementById("epi").value) || 0;
let ppi = parseFloat(document.getElementById("ppi").value) || 0;
let warp = parseFloat(document.getElementById("warp").value) || 1;
let weft = parseFloat(document.getElementById("weft").value) || 1;

let warpWt = epi / warp;
let weftWt = ppi / weft;
let gsm = (warpWt + weftWt) * 25;

document.getElementById("warpWt").innerHTML = warpWt.toFixed(2);
document.getElementById("weftWt").innerHTML = weftWt.toFixed(2);
document.getElementById("gsm").innerHTML = gsm.toFixed(2);

}
