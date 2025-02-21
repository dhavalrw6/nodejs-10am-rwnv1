module.exports.homePage =(req,res)=>{
    return res.render('index');
}

module.exports.addMoviePage = (req,res)=>{
    return res.render('./pages/add-movie.ejs');
}