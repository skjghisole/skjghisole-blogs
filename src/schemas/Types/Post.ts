import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql'

const PostType = new GraphQLObjectType({
	name: 'Post',
	fields: () => ({
		id: {
			type: GraphQLID
		},
		content: {
			type: GraphQLString
		},
		senderId: {
			type: GraphQLID
		}
	})
})

export default PostType;