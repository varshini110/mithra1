/*Get 'home' page*/
module.exports.homelist=function(req,res){
    res.render('locations-list',{title:'Home'});
};
/*GET 'Location info' page*/
module.exports.locationsInfo=function(req,res){
    res.render('location-info',{title:'Location info'});
};
module.exports.locationsInfo2=function(req,res){
    res.render('location-info2',{title:'Location info'});
};
module.exports.locationsInfo3=function(req,res){
    res.render('location-info3',{title:'Location info'});
};
/*GET 'Add review' page*/
module.exports.addReview=function(req,res){
    res.render('location-review-form',{title:'Add review'});
};