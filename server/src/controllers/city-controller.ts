import * as uuid from 'uuid';
import { newCity, City } from '../entities/all';
import * as _ from 'lodash';
// import * as Promise from 'bluebird';
const Promise = require('bluebird');

class CityController {
    constructor() { }

    public private(input: string) {
        return input.charAt(0).toUpperCase() + input.slice(1);
    }

    private capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    public convert() {
        const input = `https://image.ibb.co/dcW7pJ/sunvalley_thumb.jpg
    https://image.ibb.co/ca17pJ/santabarbara_thumb.jpg
    https://image.ibb.co/cxPhOd/ocean_city_thumb.jpg
    https://image.ibb.co/e05p3d/mackinac_island_thumb.jpg
    https://image.ibb.co/dCESpJ/dennisport_thumb.jpg
    https://image.ibb.co/jiFYUJ/branson_thumb.jpg
    https://image.ibb.co/e5ibid/colorado_thumb.jpg
    https://image.ibb.co/moF3wy/montauk_thumb.jpg
    https://image.ibb.co/iq1bGy/minot_thumb.jpg
    https://image.ibb.co/eq2SOd/long_branch_thumb.jpg
    https://image.ibb.co/m90xOd/lake_placid_thumb.jpg
    https://image.ibb.co/g7J6Gy/lake_george_thumb.jpg
    https://image.ibb.co/nPrhpJ/hyannis_thumb.jpg
    https://image.ibb.co/jmF8UJ/farmington_thumb.jpg
    https://image.ibb.co/mpwF9J/east_falmouth_thumb.jpg
    https://image.ibb.co/gvxNpJ/destin_thumb.jpg
    https://image.ibb.co/jab43d/corolla_thumb.jpg
    https://image.ibb.co/gVNNpJ/bar_harbor_thumb.jpg
    https://image.ibb.co/n1OTUJ/alexandria_thumb.jpg
    https://image.ibb.co/bLBF9J/alaska_thumb.jpg
    https://image.ibb.co/chZrid/wisconsin_dells_thumb.jpg
    https://image.ibb.co/j9KP3d/wildwood_thumb.jpg
    https://image.ibb.co/na9P3d/virginia_beach_thumb.jpg
    https://image.ibb.co/hgAWid/tofte_thumb.jpg
    https://image.ibb.co/b8qWid/surfside_beach_thumb.jpg
    https://image.ibb.co/bzHcOd/south_thumb.jpg
    https://image.ibb.co/kM0Lby/south_lake_tahoe_thumb.jpg
    https://image.ibb.co/bCcNpJ/rehoboth_beach_thumb.jpg
    https://image.ibb.co/b2NoUJ/port_aransas_thumb.jpg
    https://image.ibb.co/gRfxOd/park_city_thumb.jpg
    https://image.ibb.co/c9Va9J/outer_banks_thumb.jpg
    https://image.ibb.co/g07Ywy/myrtle_beach_thumb.jpg
    https://image.ibb.co/j4XNpJ/niagara_falls_thumb.jpg`;

        const reg_first = /(\n)http/g;
        let inputColons = input.replace(reg_first, 'http').replace(/.jpg/g, '.jpg,');
        inputColons = inputColons.slice(0, -1);

        const inputArray = inputColons.split(',');
        const json: any = [];
        inputArray.forEach(function (element) {
            const reg = /.*\//g;
            const imgName = element.replace(reg, '');
            const nameArray = imgName.split('_');
            let name = '';
            let route_name = '';
            for (let i = 0; i < nameArray.length - 1; i++) {
                // name += this.capitalizeFirstLetter(nameArray[i]) + ' ';
                route_name += nameArray[i] + '-';
            }
            name = name.substring(0, name.length - 1);
            route_name = route_name.slice(0, -1);

            json.push({ 'name': name, 'route_name': route_name, 'img_url': element });
        });

        console.log(json);
        return json;
    }

    public addCity(newCity: newCity) {
        return new Promise((resolve: any, reject: any) => {
            const id = uuid.v4();
            return City.create({
                _id: id,
                name: newCity.name,
                route_name: newCity.route_name,
                img_url: newCity.img_url
            }, (err: any, data: any) => {
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

    public addCities(cities: newCity[]) {
        return new Promise((resolve: any, reject: any) => {
            _.forEach(cities, city => {
                console.log('City: ', city);
                this.addCity(city);
            });
            return resolve({ done: true });
        });
    }

    public getCities() {
        return new Promise((resolve: any, reject: any) => {
            return City.find({}, (err: any, data: any) => {
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

    public getCityByName(route_name: string) {
        return City.find({ route_name })
            .then((data: any) => {
                if (_.isEmpty(data)) {
                    return Promise.reject({ code: 404, message: 'City does not exist' });
                }
                else {
                    return data;
                }
            })
            .catch((err: any) => {
                return Promise.reject(err);
            });
    }

    public deleteCity(route_name: string) {
        return new Promise((resolve: any, reject: any) => {
            return this.getCityByName(route_name)
                .then((result: any) => {
                    return City.deleteOne({ route_name }, (err: any) => {
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
                .catch((err: any) => {
                    console.log('Error getting city before delete: ', err);
                    return reject({ code: err.code, message: err.message });
                });

        });
    }

    public deleteAllCities(cities: any) {
        return new Promise((resolve: any, reject: any) => {
            _.forEach(cities, city => {
                this.deleteCity(city.route_name);
            });
            return resolve({ done: true });
        });
    }
}

export default new CityController();
