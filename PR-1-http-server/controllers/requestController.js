const fs = require('fs');

const handleRequest = (req, res) => {
    let fileName = '';

    switch (req.url) {
        case '/':
            fileName = './index.html'
            break;
        case '/about':
            fileName = './about.html'
            break;
        case '/contact':
            fileName = './contact.html'
            break;
        case '/blog':
            fileName = './blog.html'
            break;
        default:
            fileName = './error.html'
            break;
    }

    fs.readFile(fileName,(err,result)=>{
        if(!err)
        {
            res.end(result);
        }
    })

}

module.exports = handleRequest;