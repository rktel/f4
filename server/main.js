import { Server } from './avl/avl-server'
//----------------------CONSTANTES

//#WORDS
APP_VERSION = "4.0";
TAIP_INIT_MOBILEID = "ID=";
TAIP_PORT = 3001;
TAIP_HOST = '0.0.0.0';
TAIP_PROTOCOL = 'TAIP';
TAIP_PROTOCOL_HB = 'TAIP_HEARTBEAT';
//----------------------VARIABLES
//#SOCKETS
SOCKS_0 = [];
SOCKS_1 = [];
SOCKS_2 = [];
SOCKS_3 = [];
SOCKS_4 = [];
SOCKS_5 = [];
SOCKS_6 = [];
SOCKS_7 = [];
SOCKS_8 = [];
SOCKS_9 = [];
//----------------------FUNCIONES
main_getSOCK = (index) => {
    if (index == 0) {
        return SOCKS_0
    } else if (index == 1) {
        return SOCKS_1
    } else if (index == 2) {
        return SOCKS_2
    } else if (index == 3) {
        return SOCKS_3
    } else if (index == 4) {
        return SOCKS_4
    } else if (index == 5) {
        return SOCKS_5
    } else if (index == 6) {
        return SOCKS_6
    } else if (index == 7) {
        return SOCKS_7
    } else if (index == 8) {
        return SOCKS_8
    } else if (index == 9) {
        return SOCKS_9
    } else {
        return false
    }
}
main_cleanSOCKS = () => {
    SOCKS_0 = [];
    SOCKS_1 = [];
    SOCKS_2 = [];
    SOCKS_3 = [];
    SOCKS_4 = [];
    SOCKS_5 = [];
    SOCKS_6 = [];
    SOCKS_7 = [];
    SOCKS_8 = [];
    SOCKS_9 = [];
};
main_getAllMobiles = () => {
    let allMobileID = [];
    if (SOCKS_0.length > 0) {
        SOCKS_0.forEach(element => {
            allMobileID.push(element.mobileID);
        });
    }
    if (SOCKS_1.length > 0) {
        SOCKS_1.forEach(element => {
            allMobileID.push(element.mobileID);
        });
    }
    if (SOCKS_2.length > 0) {
        SOCKS_2.forEach(element => {
            allMobileID.push(element.mobileID);
        });
    }
    if (SOCKS_3.length > 0) {
        SOCKS_3.forEach(element => {
            allMobileID.push(element.mobileID);
        });
    }
    if (SOCKS_4.length > 0) {
        SOCKS_4.forEach(element => {
            allMobileID.push(element.mobileID);
        });
    }
    if (SOCKS_5.length > 0) {
        SOCKS_5.forEach(element => {
            allMobileID.push(element.mobileID);
        });
    }
    if (SOCKS_6.length > 0) {
        SOCKS_6.forEach(element => {
            allMobileID.push(element.mobileID);
        });
    }
    if (SOCKS_7.length > 0) {
        SOCKS_7.forEach(element => {
            allMobileID.push(element.mobileID);
        });
    }
    if (SOCKS_8.length > 0) {
        SOCKS_8.forEach(element => {
            allMobileID.push(element.mobileID);
        });
    }
    if (SOCKS_9.length > 0) {
        SOCKS_9.forEach(element => {
            allMobileID.push(element.mobileID);
        });
    }
    return allMobileID;
}

Meteor.startup(() => {
   new Server(TAIP_PORT, TAIP_HOST);
})