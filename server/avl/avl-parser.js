export function Parser(pdu) {
    if (pdu && (pdu.length == 15 || (pdu.match(/>R./g) || []).length > 0)) {

        return TAIP(pdu)
    }
}

function TAIP(pdu) {
    let mobileID = null;
    let sockIndex = null;
    let rawData = null;
    if (pdu.length == 15) {
        // heartbeat
        mobileID = pdu;
        sockIndex = mobileID[mobileID.length - 1];
        const serverTime = new Date().toISOString();
        const data = {
            mobileID, appVersion: APP_VERSION, mobileProtocol: TAIP_PROTOCOL_HB,serverTime
        };
        Meteor.call('insertReport', data);
    } else {
        // pdu
        mobileID = pdu.substring(pdu.indexOf(TAIP_INIT_MOBILEID) + 3, pdu.indexOf(TAIP_INIT_MOBILEID) + 3 + 15);
        sockIndex = mobileID[mobileID.length - 1];
        rawData = pdu.trim();
        const serverTime = new Date().toISOString();
        const data = {
            mobileID, appVersion: APP_VERSION, mobileProtocol: TAIP_PROTOCOL,serverTime, rawData
        };
        Meteor.call('insertReport', data);
    }

    if (mobileID) {
        return {
            mobileID,
            sockIndex
        }
    } else {
        return false
    }
}