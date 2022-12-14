function distanceFromHqInBlocks(customerLocation){
    return Math.abs(customerLocation-42)
};

function distanceFromHqInFeet(customerLocation){
    return distanceFromHqInBlocks(customerLocation)*264
};

function distanceTravelledInFeet(start, destination){
    return Math.abs((destination*264) - (start*264))
};

function calculatesFarePrice(start, destination) {
    if (Math.abs((destination*264) - (start*264))<=400) 
        return 0
};