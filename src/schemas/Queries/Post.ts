import { GraphQLList } from 'graphql'

import Post from '../../models/Post'

import { PostType } from '../Types/'

const PostQueries = {
	posts: {
		type: new GraphQLList(PostType),
		async resolve() {
			return await Post.find({});
		}
	}
}

export default PostQueries