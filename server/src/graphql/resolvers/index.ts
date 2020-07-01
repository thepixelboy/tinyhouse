import merge from 'lodash.merge';
import { userResolvers } from './Users';
import { viewerResolvers } from './Viewer';

export const resolvers = merge(userResolvers, viewerResolvers);
