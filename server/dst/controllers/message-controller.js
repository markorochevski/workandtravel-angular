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
const Promise = require('bluebird');
class PostController {
    constructor() { }
    addMessage(message) {
        return new Promise((resolve, reject) => {
            const id = uuid.v4();
            return all_1.Message.create({
                _id: id,
                name: message.name,
                email: message.email,
                message: message.message
            }, (err, data) => {
                if (err) {
                    console.log('Can not add a message');
                    return reject({ code: err.code, message: err.message });
                }
                else {
                    console.log('Success add message');
                    return resolve({ done: true });
                }
            });
        });
    }
    getAllMessages() {
        return new Promise((resolve, reject) => {
            return all_1.Message.find({}, (err, data) => {
                if (err) {
                    console.log('Error getting messages: ', err);
                    return reject({ code: err.code, message: err.message });
                }
                else {
                    console.log('Success getting messages: ', data);
                    return resolve(data);
                }
            });
        });
    }
}
exports.default = new PostController();
//# sourceMappingURL=message-controller.js.map