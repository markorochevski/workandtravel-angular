import * as uuid from 'uuid';
import { Message, newMessage } from '../entities/all';
import * as _ from 'lodash';
const Promise = require('bluebird');

class PostController {
    constructor() {}

    public addMessage(message: newMessage) {
        return new Promise((resolve: any, reject: any) => {
            const id = uuid.v4();
            return Message.create({
                _id: id,
                name: message.name,
                email: message.email,
                message: message.message
            }, (err: any, data: any) => {
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

    public getAllMessages() {
        return new Promise((resolve: any, reject: any) => {
            return Message.find({}, (err: any, data: any) => {
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

export default new PostController();
