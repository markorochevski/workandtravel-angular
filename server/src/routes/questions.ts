import QuestionController from '../controllers/question-controller';
import router from 'simple-router';
const app = router();

export let route = app.route;

app.get('/', (req: any, res: any) => {
    res.send('Hello world');
});

app.post('/add-question', (req: any, res: any) => {
    console.log('Calling route /add-question');
    const question = req.body;
    return QuestionController.addQuestion(question)
        .then((result: any) => {
            return res.send(result);
        })
        .catch((err: any) => {
            return res.status(err.code).send(err);
        });
});

app.post('/add-questions', (req: any, res: any) => {
    console.log('Calling route /add-questions');
    const questions = req.body;
    return QuestionController.addQuestions(questions)
        .then((result: any) => {
            return res.send(result);
        })
        .catch((err: any) => {
            return res.status(err.code).send(err);
        });
});

app.get('/get-all-questions', (req: any, res: any) => {
    console.log('Calling route /get-all-questions');
    return QuestionController.getAllQuestions()
        .then((result: any) => {
            return res.send(result);
        })
        .catch((err: any) => {
            return res.status(err.code).send(err);
        });
});

app.delete('/delete/:id', (req: any, res: any) => {
    console.log('Calling route /delete');
    return QuestionController.deleteQuestion(req.params.id)
        .then((result: any) => {
            return res.send(result);
        })
        .catch((err: any) => {
            return res.status(err.code).send(err);
        });
});

