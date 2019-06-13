const mockIndexData = require("./mock/myindex.json");
 
module.exports = {
  //...  
  devServer: {
    port: 8080,
    before(app) {
      app.get("/api/index", (req, res) => {
        res.json(mockIndexData);
      });
    }
  }
};