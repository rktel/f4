import { Users } from '../../imports/api/collections';

Meteor.methods({ 
    login: function(username, password) { 
         const user = Users.findOne({username, password});
         return user ? user: false;
    } 
});