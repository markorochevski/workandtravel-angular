import PostController from '../controllers/post-controller';
import router from 'simple-router';
const app = router();

export let route = app.route;

app.get('/', (req: any, res: any) => {
    res.send('Hello world');
});

app.post('/add-post', (req: any, res: any) => {
    console.log('Calling route /add-post');
    const post = req.body;
    return PostController.addPost(post)
        .then((result: any) => {
            return res.send(result);
        })
        .catch((err: any) => {
            return res.status(err.code).send(err);
        });
});

app.post('/add-posts', (req: any, res: any) => {
    console.log('Calling route /add-posts');
    const posts = req.body;
    return PostController.addPosts(posts)
        .then((result: any) => {
            return res.send(result);
        })
        .catch((err: any) => {
            return res.status(err.code).send(err);
        });
});

app.get('/get-all-posts', (req: any, res: any) => {
    console.log('Calling route /get-posts');
    return PostController.getAllPosts()
        .then((result: any) => {
            return res.send(result);
        })
        .catch((err: any) => {
            return res.status(err.code).send(err);
        });
});

app.get('/get-posts/:name', (req: any, res: any) => {
    console.log('Calling route /get-posts/:name');
    return PostController.getPostsByCity(req.params.name)
        .then((result: any) => {
            return res.send(result);
        })
        .catch((err: any) => {
            return res.status(err.code).send(err);
        });
});

app.delete('/delete/:id', (req: any, res: any) => {
    console.log('Calling route /delete');
    return PostController.deletePost(req.params.id)
        .then((result: any) => {
            return res.send(result);
        })
        .catch((err: any) => {
            return res.status(err.code).send(err);
        });
});


app.post('/search', (req: any, res: any) => {
    console.log('Calling route /search/:text');
    return PostController.searchInEmployer(req.body.text)
        .then((result: any) => {
            return res.send(result);
        })
        .catch((err: any) => {
            return res.status(err.code).send(err);
        });
});
