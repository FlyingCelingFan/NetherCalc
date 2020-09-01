//converts overworld coordinates to nether coordiantes
function ovToNe() {
    //multiplies overworld coords by 8 then changes nether coords accordingly
    document.nethToOver.nX.value = document.overToNeth.oX.value / 8;
    document.nethToOver.nY.value = document.overToNeth.oY.value / 8;
    document.nethToOver.nZ.value = document.overToNeth.oZ.value / 8;
}

//converts overworld coordinates to nether coordiantes
function neToOv() {
    //multiplies overworld coords by 8 then changes nether coords accordingly
    document.overToNeth.oX.value = document.nethToOver.nX.value * 8;
    document.overToNeth.oY.value = document.nethToOver.nY.value * 8;
    document.overToNeth.oZ.value = document.nethToOver.nZ.value * 8;
}



