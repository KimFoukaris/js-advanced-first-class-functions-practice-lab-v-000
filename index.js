const logDriverNames = function (arr) {
  arr.forEach(function(el) {
    console.log(el.name);
  });
};

const logDriversByHometown = function (arr, location) {
  arr.forEach(function(el) {
    if (el.hometown === location) {
      console.log(el.name);};
  });
};

const driversByRevenue = function(arr) {
  debugger;
  arr.sort(function (a, b) {
    debugger;
  return a.revenue - b.revenue;
});
};
