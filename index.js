
function distanceFromHqInBlocks (block) {
    return Math.abs(42 - block);
}

function distanceFromHqInFeet (block) {
    return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(location, endPoint) {
    return Math.abs((location - endPoint) * 264);
}

function calculatesFarePrice (start, destination) {
    const feetTravel = distanceTravelledInFeet(start, destination);
    console.log(feetTravel);
if (feetTravel <= 400) {
    return 0;
} else if (feetTravel > 400 && feetTravel <= 2000) {
    return (feetTravel - 400) * 0.02;
} else if (feetTravel > 2000 && feetTravel <= 2500) {
    return 25;
} else {
    return "cannot travel that far";
}
}   

