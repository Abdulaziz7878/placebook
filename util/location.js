function getCoordsForAddress(address) {
  if (address) {
    return {
      lat: 25.19752,
      lng: 55.274164,
    };
  }
  return;
}

module.exports = getCoordsForAddress;
