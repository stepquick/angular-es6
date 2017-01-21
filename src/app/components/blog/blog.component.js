import controller from './blog.controller';
import template from './blog.tpl.html';

const BlogComponent = {
  	controller,
    template,
    bindings: {
		posts: '<'
	}
};

export default BlogComponent;
