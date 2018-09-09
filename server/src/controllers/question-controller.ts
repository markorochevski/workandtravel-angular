import * as uuid from 'uuid';
import { newQuestion, Question } from '../entities/all';
import * as _ from 'lodash';
const Promise = require('bluebird');

class QuestionController {
    constructor() { }

    public addQuestion(newQuestion: newQuestion) {
        return new Promise((resolve: any, reject: any) => {
            const id = uuid.v4();
            return Question.create({
                _id: id,
                title: newQuestion.title,
                content: newQuestion.content
            }, (err: any, data: any) => {
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

    public getQuestionById(id: string) {
        return Question.find({ _id: id })
            .then((data: any) => {
                if (_.isEmpty(data)) {
                    return Promise.reject({ code: 404, message: 'Question does not exist' });
                }
                else {
                    return data;
                }
            })
            .catch((err: any) => {
                return Promise.reject(err);
            });
    }

    public deleteQuestion(id: string) {
        return new Promise((resolve: any, reject: any) => {
            return this.getQuestionById(id)
                .then((result: any) => {
                    return Question.deleteOne({ _id: id }, (err: any) => {
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
                .catch((err: any) => {
                    console.log('Error getting question before delete: ', err);
                    return reject({ code: err.code, message: err.message });
                });

        });
    }

    public getAllQuestions() {
        return new Promise((resolve: any, reject: any) => {
            return Question.find({}, (err: any, data: any) => {
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

    public addQuestions(questions: newQuestion[]) {
        return new Promise((resolve: any, reject: any) => {
            _.forEach(questions, question => {
                console.log('Question: ', question);
                this.addQuestion(question);
            });
            return resolve({ done: true });
        });
    }
}

export default new QuestionController();
