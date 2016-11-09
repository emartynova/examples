function calculateDistance(time, speedOfFirst, speedOfSecond) {
    debugger;

    var distanceOfFirst = speedOfFirst * time;
    var distanceOfSecond = speedOfSecond * time;
    var distanceTotal = distanceOfFirst + distanceOfSecond;
    return distanceTotal;
}

document.body.innerHTML = calculateDistance(3, 10, 12);