import { Mongo } from 'meteor/mongo';

// Users
export const Users = new Mongo.Collection('users');

// AVL
export const Report = new Mongo.Collection('report');
export const Mobiles = new Mongo.Collection('mobiles');