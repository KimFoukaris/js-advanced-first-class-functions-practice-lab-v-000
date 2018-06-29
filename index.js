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
  newArray = arr.slice().sort(function (a, b) {
      return a.revenue - b.revenue;
  });
  return newArray;
};

const driversByName = function (arr) {
  return newArray = arr.slice().sort(function (a,b) {
    return a.name.localeCompare(b.name);
  });
  return newArray;
};

const totalRevenue = function (arr) {
  return arr.revenue.reduce(agg, el) {
    return agg + el;
    };
  };
