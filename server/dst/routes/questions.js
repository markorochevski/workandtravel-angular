"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const question_controller_1 = __importDefault(require("../controllers/question-controller"));
const simple_router_1 = __importDefault(require("simple-router"));
const app = simple_router_1.default();
exports.route = app.route;
app.get('/', (req, res) => {
    res.send('Hello world');
});
app.post('/add-question', (req, res) => {
    console.log('Calling route /add-question');
    const question = req.body;
    return question_controller_1.default.addQuestion(question)
        .then((result) => {
        return res.send(result);
    })
        .catch((err) => {
        return res.status(err.code).send(err);
    });
});
app.post('/add-questions', (req, res) => {
    console.log('Calling route /add-questions');
    const questions = req.body;
    return question_controller_1.default.addQuestions(questions)
        .then((result) => {
        return res.send(result);
    })
        .catch((err) => {
        return res.status(err.code).send(err);
    });
});
app.get('/get-all-questions', (req, res) => {
    console.log('Calling route /get-all-questions');
    return question_controller_1.default.getAllQuestions()
        .then((result) => {
        return res.send(result);
    })
        .catch((err) => {
        return res.status(err.code).send(err);
    });
});
app.delete('/delete/:id', (req, res) => {
    console.log('Calling route /delete');
    return question_controller_1.default.deleteQuestion(req.params.id)
        .then((result) => {
        return res.send(result);
    })
        .catch((err) => {
        return res.status(err.code).send(err);
    });
});
//# sourceMappingURL=questions.js.map