const mockIndexData = require("./mock/myindex.json");
const mockCityData = require("./mock/city.json");
module.exports = {
  //...  
  devServer: {
    port: 8080,
    before(app) {
      app.get("/api/index", (req, res) => {
        res.json(mockIndexData);
      });
      app.get("/api/city", (req, res) => {
        res.json(mockCityData);
      });
    }
  }
};