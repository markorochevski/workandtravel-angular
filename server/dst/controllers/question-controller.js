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
const Promise = require('bluebird');
class QuestionController {
    constructor() { }
    addQuestion(newQuestion) {
        return new Promise((resolve, reject) => {
            const id = uuid.v4();
            return all_1.Question.create({
                _id: id,
                title: newQuestion.title,
                content: newQuestion.content
            }, (err, data) => {
                if (err) {
                    console.log('Can not add a question');
                    return reject({ code: err.code, message: err.message });
                }
                else {
                    console.log('Success add question');
                    return resolve({ done: true });
                }
            });
        });
    }
    getQuestionById(id) {
        return all_1.Question.find({ _id: id })
            .then((data) => {
            if (_.isEmpty(data)) {
                return Promise.reject({ code: 404, message: 'Question does not exist' });
            }
            else {
                return data;
            }
        })
            .catch((err) => {
            return Promise.reject(err);
        });
    }
    deleteQuestion(id) {
        return new Promise((resolve, reject) => {
            return this.getQuestionById(id)
                .then((result) => {
                return all_1.Question.deleteOne({ _id: id }, (err) => {
                    if (err) {
                        console.log('Error deleting question: ', err);
                        return reject({ code: err.code, message: err.message });
                    }
                    else {
                        console.log('Deleted question: ', id);
                        return resolve({ done: true });
                    }
                });
            })
                .catch((err) => {
                console.log('Error getting question before delete: ', err);
                return reject({ code: err.code, message: err.message });
            });
        });
    }
    getAllQuestions() {
        return new Promise((resolve, reject) => {
            return all_1.Question.find({}, (err, data) => {
                if (err) {
                    console.log('Error getting questions: ', err);
                    return reject({ code: err.code, message: err.message });
                }
                else {
                    console.log('Success getting questions');
                    console.log(data);
                    return resolve(data);
                }
            });
        });
    }
    addQuestions(questions) {
        return new Promise((resolve, reject) => {
            _.forEach(questions, question => {
                console.log('Question: ', question);
                this.addQuestion(question);
            });
            return resolve({ done: true });
        });
    }
}
exports.default = new QuestionController();
//# sourceMappingURL=question-controller.js.map