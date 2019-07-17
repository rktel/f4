import { Users } from '../../imports/api/collections';

Meteor.methods({ 
   async login: function(username, password) { 
         const user = await Users.findOne({username, password});
         return user ? user: false;
    } 
});