import * as uuid from 'uuid';
import { newPost, Post } from '../entities/all';
import * as _ from 'lodash';
const Promise = require('bluebird');

class PostController {
    constructor() {}

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
                is_approved: 'no'
            }, (err: any, data: any) => {
                if (err) {
                    console.log('Can not create a post');
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
        return Post.find({ route_name: name })
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
}

export default new PostController();
