import { Report, Mobiles } from '../../imports/api/collections';

Meteor.methods({
    insertReport: function (data) {
        Report.insert(data);
    },
    writeSingle: function (mobileID, cmd) {
        const sockIndex = mobileID[mobileID.length - 1];
        const SOCK_MASTER = main_getSOCK(sockIndex);
        const sock = SOCK_MASTER.find(element => { if (element) { return element.mobileID === mobileID } });
        if (sock) {
            sock.write(cmd);
            console.log(`Send ${cmd} to ${mobileID}`);
        }
    },
    writeBroadcast: function (arrayMobileID, cmd) {
        arrayMobileID.forEach(mobileID => {
            Meteor.call('writeSingle', mobileID, cmd)
        });
    },
    getAllMobiles: function () {
        return main_getAllMobiles();
    },
    setMobiles: function (indexSock, arrayMobileID) {
        Mobiles.update({sockID:indexSock},{$set:{ mobiles:arrayMobileID }},{upsert:true});
    }
});



