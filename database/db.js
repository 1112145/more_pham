var fs = require('fs');
var path = require('path');

const JSONS = path.join(__dirname, '/jsons/');
const FOOD_LIST = path.join(JSONS, 'hang_thuc_an.json');

var _readJsonFile = function (filename) {
    try {
        var json = JSON.parse(fs.readFileSync(filename, 'utf8'));
        return json;
    } catch (e) {
        throw (e);
    }
}

var database = {}

database.getFoodList = function () {
    return _readJsonFile(FOOD_LIST);
}



module.exports = database;