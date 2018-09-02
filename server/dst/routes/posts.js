"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_controller_1 = __importDefault(require("../controllers/post-controller"));
const simple_router_1 = __importDefault(require("simple-router"));
const app = simple_router_1.default();
exports.route = app.route;
app.get('/', (req, res) => {
    res.send('Hello world');
});
app.post('/add-post', (req, res) => {
    console.log('Calling route /add-post');
    const post = req.body;
    return post_controller_1.default.addPost(post)
        .then((result) => {
        return res.send(result);
    })
        .catch((err) => {
        return res.status(err.code).send(err);
    });
});
app.post('/add-posts', (req, res) => {
    console.log('Calling route /add-posts');
    const posts = req.body;
    return post_controller_1.default.addPosts(posts)
        .then((result) => {
        return res.send(result);
    })
        .catch((err) => {
        return res.status(err.code).send(err);
    });
});
app.get('/get-all-posts', (req, res) => {
    console.log('Calling route /get-posts');
    return post_controller_1.default.getAllPosts()
        .then((result) => {
        return res.send(result);
    })
        .catch((err) => {
        return res.status(err.code).send(err);
    });
});
app.get('/get-posts/:name', (req, res) => {
    console.log('Calling route /get-posts/:name');
    return post_controller_1.default.getPostsByCity(req.params.name)
        .then((result) => {
        return res.send(result);
    })
        .catch((err) => {
        return res.status(err.code).send(err);
    });
});
app.delete('/delete/:id', (req, res) => {
    console.log('Calling route /delete');
    return post_controller_1.default.deletePost(req.params.id)
        .then((result) => {
        return res.send(result);
    })
        .catch((err) => {
        return res.status(err.code).send(err);
    });
});
app.post('/search', (req, res) => {
    console.log('Calling route /search/:text');
    return post_controller_1.default.searchInEmployer(req.body.text)
        .then((result) => {
        return res.send(result);
    })
        .catch((err) => {
        return res.status(err.code).send(err);
    });
});
//# sourceMappingURL=posts.js.map