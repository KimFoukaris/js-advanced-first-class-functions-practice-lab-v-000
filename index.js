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
  newArray = arr.sort(function (a, b) {
      return a.revenue - b.revenue;
});
return newArray;
};
