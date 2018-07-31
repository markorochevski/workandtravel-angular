"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const city_controller_1 = __importDefault(require("../controllers/city-controller"));
const simple_router_1 = __importDefault(require("simple-router"));
const app = simple_router_1.default();
exports.route = app.route;
app.get('/', (req, res) => {
    res.send('Hello world');
});
app.post('/add-city', (req, res) => {
    console.log('Calling route /add-city');
    const city = req.body;
    return city_controller_1.default.addCity(city)
        .then((result) => {
        return res.send(result);
    })
        .catch((err) => {
        return res.setatus(err.code).send(err.message);
    });
});
app.post('/add-cities', (req, res) => {
    console.log('Calling route /add-cities');
    console.log(req.body);
    const cities = req.body;
    return city_controller_1.default.addCities(cities)
        .then((result) => {
        return res.send(result);
    })
        .catch((err) => {
        return res.setatus(err.code).send(err.message);
    });
});
app.get('/get-cities', (req, res) => {
    console.log('Calling route /get-cities');
    return city_controller_1.default.getCities()
        .then((result) => {
        return res.send(result);
    })
        .catch((err) => {
        return res.status(err.code).send(err.message);
    });
});
app.get('/get-city/:name', (req, res) => {
    console.log('Calling route /get-city');
    return city_controller_1.default.getCityByName(req.params.name);
    // .then(result => {
    //     return res.send(result);
    // })
    // .catch(err => {
    //     return res.status(err.code).send(err.message);
    // })
});
app.delete('/delete/:name', (req, res) => {
    console.log('Calling route /delete');
    return city_controller_1.default.deleteCity(req.params.name)
        .then((result) => {
        return res.send(result);
    })
        .catch((err) => {
        return res.status(err.code).send(err.message);
    });
});
app.delete('/delete-all', (req, res) => {
    console.log('Calling route /delete-all');
    return city_controller_1.default.deleteAllCities(req.body)
        .then((result) => {
        return res.send(result);
    })
        .catch((err) => {
        return res.status(err.code).send(err.message);
    });
});
//# sourceMappingURL=cities.js.map