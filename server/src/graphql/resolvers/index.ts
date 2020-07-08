import merge from 'lodash.merge';
import { bookingResolvers } from './Booking';
import { listingResolvers } from './Listing';
import { userResolvers } from './Users';
import { viewerResolvers } from './Viewer';

export const resolvers = merge(
  bookingResolvers,
  listingResolvers,
  userResolvers,
  viewerResolvers
);
