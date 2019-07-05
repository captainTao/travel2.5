const mockIndexData = require("./mock/myindex.json");
const mockCityData = require("./mock/city.json");
const mockDetailData = require("./mock/detail.json");
//如果get带有参数，那么用正则？还是其他处理？
// const domain = /\/api\/detail\?id\=\d{3}/
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
      app.get("/api/detail", (req, res) => {
        res.json(mockDetailData);
      });
    }
  }
};