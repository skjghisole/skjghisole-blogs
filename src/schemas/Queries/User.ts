import { GraphQLList } from 'graphql';

import { UserType } from '../Types/';

import User from '../../models/User';

const UserQueries = {
	users: {
		type: new GraphQLList(UserType),
		async resolve() {
			return await User.find({});
		}
	}
}

export default UserQueries;