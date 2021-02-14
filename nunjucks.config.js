
module.exports = {
    assetType: 'html',
    data : {
       name: "virtualtour",
       env: process.env.ENV || "dev",
       author: "",
       path: (process.env.ENV === 'prod')? "https://www.gannett-cdn.com/labs/dev/virtualTour/" :  "/"
    }
}