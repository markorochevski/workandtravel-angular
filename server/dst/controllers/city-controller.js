"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = __importStar(require("uuid"));
const all_1 = require("../entities/all");
const _ = __importStar(require("lodash"));
// import * as Promise from 'bluebird';
const Promise = require('bluebird');
class CityController {
    constructor() { }
    addCity(newCity) {
        return new Promise((resolve, reject) => {
            const id = uuid.v4();
            return all_1.City.create({
                _id: id,
                name: newCity.name,
                route_name: newCity.route_name,
                img_url: newCity.img_url
            }, (err, data) => {
                if (err) {
                    console.log('Can not create city');
                    return reject({ code: err.code, message: err.message });
                }
                else {
                    console.log('Success add city');
                    return resolve({ done: true });
                }
            });
        });
    }
    addCities(cities) {
        return new Promise((resolve, reject) => {
            _.forEach(cities, city => {
                console.log('City: ', city);
                this.addCity(city);
            });
            return resolve({ done: true });
        });
    }
    getCities() {
        return new Promise((resolve, reject) => {
            return all_1.City.find({}, (err, data) => {
                if (err) {
                    console.log('Error getting cities: ', err);
                    return reject({ code: err.code, message: err.message });
                }
                else {
                    console.log(data);
                    return resolve(data);
                }
            });
        });
    }
    // public getCityByName(route_name: string) {
    //     return new Promise((resolve, reject) => {
    //         return City.find({ route_name }, (err, data) => {
    //             if (err) {
    //                 return reject({ code: err.code, message: err.message });
    //             }
    //             else if (_.isEmpty(data)) {
    //                 return reject({ code: 404, message: 'City does not exist' });
    //             }
    //             else {
    //                 return resolve(data);
    //             }
    //         })
    //     })
    // }
    getCityByName(route_name) {
        return all_1.City.find({ route_name })
            .then((data) => {
            if (_.isEmpty(data)) {
                return Promise.reject({ code: 404, message: 'City does not exist' });
            }
            else {
                return data;
            }
        })
            .catch((err) => {
            return Promise.reject(err);
        });
    }
    deleteCity(route_name) {
        return new Promise((resolve, reject) => {
            return this.getCityByName(route_name)
                .then((result) => {
                return all_1.City.deleteOne({ route_name }, (err) => {
                    if (err) {
                        console.log('Error deleting city: ', err);
                        return reject({ code: err.code, message: err.message });
                    }
                    else {
                        console.log('Deleted city ', route_name);
                        return resolve({ done: true });
                    }
                });
            })
                .catch((err) => {
                console.log('Error getting city before delete: ', err);
                return reject({ code: err.code, message: err.message });
            });
        });
    }
    deleteAllCities(cities) {
        return new Promise((resolve, reject) => {
            _.forEach(cities, city => {
                this.deleteCity(city.route_name);
            });
            return resolve({ done: true });
        });
    }
}
exports.default = new CityController();
//# sourceMappingURL=city-controller.js.map