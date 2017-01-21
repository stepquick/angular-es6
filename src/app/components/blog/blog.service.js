export class BlogService {
  	constructor() {
        this.posts = [
            {title: "This is going to hurt you.", date: "2016-09-20T13:28:06.419Z", body: "Why are you running away?"},
            {title: "They say what doesn't kill you.", date: "2016-10-15T13:28:06.419Z", body: "You really don't get it do you?"},
            {title: "If you could shut up for a second.", date: "2016-12-08T13:28:06.419Z", body: "It hurts."},
            {title: "Please think about what you're doing.", date: "2016-01-21T13:28:06.419Z", body: "It's crushing me."}
        ];
  	}
    all() {
        return this.posts;
    }
    get(id) {
        return this.posts[id];
    }
}
