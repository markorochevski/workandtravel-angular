"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const message_controller_1 = __importDefault(require("../controllers/message-controller"));
const simple_router_1 = __importDefault(require("simple-router"));
const app = simple_router_1.default();
exports.route = app.route;
app.get('/', (req, res) => {
    res.send('Hello world');
});
app.post('/add-message', (req, res) => {
    console.log('Calling route /add-message');
    const message = req.body;
    return message_controller_1.default.addMessage(message)
        .then((result) => {
        return res.send(result);
    })
        .catch((err) => {
        return res.status(err.code).send(err);
    });
});
app.get('/get-all-messages', (req, res) => {
    console.log('Calling route /get-all-messages');
    return message_controller_1.default.getAllMessages()
        .then((result) => {
        return res.send(result);
    })
        .catch((err) => {
        return res.status(err.code).send(err);
    });
});
//# sourceMappingURL=messages.js.map