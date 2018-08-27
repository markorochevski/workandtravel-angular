import MessageController from '../controllers/message-controller';
import router from 'simple-router';
const app = router();

export let route = app.route;

app.get('/', (req: any, res: any) => {
    res.send('Hello world');
});

app.post('/add-message', (req: any, res: any) => {
    console.log('Calling route /add-message');
    const message = req.body;
    return MessageController.addMessage(message)
        .then((result: any) => {
            return res.send(result);
        })
        .catch((err: any) => {
            return res.status(err.code).send(err);
        });
});

app.get('/get-all-messages', (req: any, res: any) => {
    console.log('Calling route /get-all-messages');
    return MessageController.getAllMessages()
        .then((result: any) => {
            return res.send(result);
        })
        .catch((err: any) => {
            return res.status(err.code).send(err);
        });
});
