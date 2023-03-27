// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
    const hqBlock = 42
    return Math.abs(blockNumber - hqBlock)
}
function distanceFromHqInFeet(blockNumber) {
    const feetInBlock = 264;
    const hqBlock = 42;
    const distanceInBlocks = Math.abs(blockNumber - hqBlock);
    return distanceInBlocks * feetInBlock;
  }
  function distanceTravelledInFeet(start, destination) {
    const feetInBlock = 264
    const distanceInBlocks = Math.abs(destination - start);
    const distanceInFeet = distanceInBlocks * feetInBlock;
    return Math.round(distanceInFeet);
  }
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = Math.abs(destination - start) * 264;
    let farePrice = 0;
    if (distanceInFeet <= 400) {
      farePrice = 0;
    } else if (distanceInFeet <= 2000) {
      farePrice = (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet <= 2500) {
      farePrice = 25;
    } else {
      return "cannot travel that far";
    }
    return parseFloat(farePrice.toFixed(2));
  }