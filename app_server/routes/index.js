var express = require('express');
var router = express.Router();
var ctrlLocations=require('../controller/locations');
var ctrlOthers=require('../controller/others');

/*Locations pages*/
router.get('/',ctrlLocations.homelist);
router.get('/location',ctrlLocations.locationsInfo);
router.get('/location2',ctrlLocations.locationsInfo2);
router.get('/location3',ctrlLocations.locationsInfo3);
router.get('/location/review/new',ctrlLocations.addReview);

/*Other pages*/
router.get('/about',ctrlOthers.about);

module.exports = router;