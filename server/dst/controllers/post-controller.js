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
class PostController {
    constructor() {
        this.getFacebookUserPath = (link) => {
            const regex = new RegExp('.*\/');
            const path = link.replace(regex, '');
            return path;
        };
    }
    addPost(newPost) {
        return new Promise((resolve, reject) => {
            const id = uuid.v4();
            return all_1.Post.create({
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
            }, (err, data) => {
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
    getPostById(id) {
        return all_1.Post.find({ _id: id })
            .then((data) => {
            if (_.isEmpty(data)) {
                return Promise.reject({ code: 404, message: 'Post does not exist' });
            }
            else {
                return data;
            }
        })
            .catch((err) => {
            return Promise.reject(err);
        });
    }
    getPostsByCity(name) {
        return all_1.Post.find({ route_name: name }).sort({ year: -1 })
            .then((data) => {
            if (_.isEmpty(data)) {
                return Promise.reject({ code: 404, message: 'Post does not exist' });
            }
            else {
                return data;
            }
        })
            .catch((err) => {
            return Promise.reject(err);
        });
    }
    deletePost(id) {
        return new Promise((resolve, reject) => {
            return this.getPostById(id)
                .then((result) => {
                return all_1.Post.deleteOne({ _id: id }, (err) => {
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
                .catch((err) => {
                console.log('Error getting post before delete: ', err);
                return reject({ code: err.code, message: err.message });
            });
        });
    }
    getAllPosts() {
        return new Promise((resolve, reject) => {
            return all_1.Post.find({}, (err, data) => {
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
    addPosts(posts) {
        return new Promise((resolve, reject) => {
            _.forEach(posts, post => {
                console.log('Post: ', post);
                this.addPost(post);
            });
            return resolve({ done: true });
        });
    }
    searchInEmployer(input) {
        console.log('Search in empolyer: ', input);
        return new Promise((resolve, reject) => {
            const words = input.split(' ');
            let text = '';
            for (const word of words) {
                text += word + '|';
            }
            text = text.slice(0, -1);
            console.log(text);
            const query = new RegExp(text, 'ig');
            return all_1.Post.find({
                $or: [
                    { agency: query },
                    { route_name: query },
                    { employer: query },
                    { year: query },
                    { profile_link: query },
                    { content: query },
                    { wage: query }
                ]
            }, (err, data) => {
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
}
exports.default = new PostController();
//# sourceMappingURL=post-controller.js.map