import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';

import { CredentialType } from './Credential';

const UserType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		id: {
			type: GraphQLID
		},
		credentials: {
			type: CredentialType
		},
		email: {
			type: GraphQLString
		},
		password: {
			type: GraphQLString
		}
	})
})

export default UserType