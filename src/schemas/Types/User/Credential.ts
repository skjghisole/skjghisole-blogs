import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLString
} from 'graphql'

const CredentialProperties = {
	fields: () => ({
		firstName: {
			type: GraphQLString
		},
		lastName: {
			type: GraphQLString
		}
	})
}

const CredentialInputType = new GraphQLInputObjectType({
	name: 'CredentialInput',
	...CredentialProperties
})

const CredentialType = new GraphQLObjectType({
	name: 'Credential',
	...CredentialProperties
})

export {
	CredentialInputType,
	CredentialType
}