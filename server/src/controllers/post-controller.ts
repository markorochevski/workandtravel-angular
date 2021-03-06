import * as uuid from 'uuid';
import { newPost, Post } from '../entities/all';
import * as _ from 'lodash';
const Promise = require('bluebird');

class PostController {
    constructor() { }

    public addPost(newPost: newPost) {
        return new Promise((resolve: any, reject: any) => {
            const id = uuid.v4();
            return Post.create({
                _id: id,
                route_name: newPost.route_name,
                agency: newPost.agency,
                employer: newPost.employer,
                content: newPost.content,
                wage: newPost.wage,
                avg_hours: newPost.avg_hours,
                year: newPost.year,
                profile_link: newPost.profile_link,
                profile_link_public: newPost.profile_link_public,
                profile_link_path: this.getFacebookUserPath(newPost.profile_link),
                is_approved: 'yes'
                // TODO: change is_approved to no
            }, (err: any, data: any) => {
                if (err) {
                    console.log('Can not add a post');
                    return reject({ code: err.code, message: err.message });
                }
                else {
                    console.log('Success add post');
                    return resolve({ done: true });
                }
            });
        });
    }

    public getPostById(id: string) {
        return Post.find({ _id: id })
            .then((data: any) => {
                if (_.isEmpty(data)) {
                    return Promise.reject({ code: 404, message: 'Post does not exist' });
                }
                else {
                    return data;
                }
            })
            .catch((err: any) => {
                return Promise.reject(err);
            });
    }

    public getPostsByCity(name: string) {
        return Post.find({ route_name: name }).sort({ year: -1 })
            .then((data: any) => {
                if (_.isEmpty(data)) {
                    return Promise.reject({ code: 404, message: 'Post does not exist' });
                }
                else {
                    return data;
                }
            })
            .catch((err: any) => {
                return Promise.reject(err);
            });
    }

    public deletePost(id: string) {
        return new Promise((resolve: any, reject: any) => {
            return this.getPostById(id)
                .then((result: any) => {
                    return Post.deleteOne({ _id: id }, (err: any) => {
                        if (err) {
                            console.log('Error deleting post: ', err);
                            return reject({ code: err.code, message: err.message });
                        }
                        else {
                            console.log('Deleted post: ', id);
                            return resolve({ done: true });
                        }
                    });
                })
                .catch((err: any) => {
                    console.log('Error getting post before delete: ', err);
                    return reject({ code: err.code, message: err.message });
                });

        });
    }

    public getAllPosts() {
        return new Promise((resolve: any, reject: any) => {
            return Post.find({}, (err: any, data: any) => {
                if (err) {
                    console.log('Error getting posts: ', err);
                    return reject({ code: err.code, message: err.message });
                }
                else {
                    console.log('Success getting posts');
                    console.log(data);
                    return resolve(data);
                }
            });
        });
    }

    public addPosts(posts: newPost[]) {
        return new Promise((resolve: any, reject: any) => {
            _.forEach(posts, post => {
                console.log('Post: ', post);
                this.addPost(post);
            });
            return resolve({ done: true });
        });
    }

    public searchInEmployer(input: string) {
        console.log('Search in empolyer: ', input);
        return new Promise((resolve: any, reject: any) => {
            const words = input.split(' ');
            let text = '';
            for (const word of words) {
                text += word + '|';
            }
            text = text.slice(0, -1);
            console.log(text);
            const query = new RegExp(text, 'ig');
            return Post.find(
                {
                    $or: [
                        { agency: query },
                        { route_name: query },
                        { employer: query },
                        { year: query },
                        { profile_link: query },
                        { content: query },
                        { wage: query }
                    ]
                }, (err: any, data: any) => {
                    if (err) {
                        console.log('Error getting result: ', err);
                        return reject({ code: err.code, message: err.message });
                    }
                    else {
                        console.log('Success getting result');
                        //  console.log(data);
                        return resolve(data);
                    }
                });
        });
    }

    private getFacebookUserPath = (link: string) => {
        const regex = new RegExp('.*\/');
        const path = link.replace(regex, '');
        return path;
    }
}

export default new PostController();
