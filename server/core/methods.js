import { Users } from '../../imports/api/collections';

Meteor.methods({
    async login(username, password) {
        const user = await Users.findOne({ username, password });
        return user ? user : false;
    },
    async checkUsername(username){
        const user = await Users.findOne({ username });
        return user ? true : false;
    }
});