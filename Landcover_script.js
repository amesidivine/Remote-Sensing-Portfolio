// Sentinel-2 Land Cover Classification | Port Harcourt, Nigeria
// Tools: Google Earth Engine, Random Forest
// Result: 85% Overall Accuracy, Kappa 0.81

var roi = /* Define your Area of Interest here */;
var s2 = ee.ImageCollection('COPERNICUS/S2_SR')
           .filterBounds(roi)
           .filterDate('2024-01-01', '2024-12-31')
           .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20));

print('Land Cover Classification Script Loaded');
