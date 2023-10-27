"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client) => {
    process.on('unhandledRejection', (reason, p) => {
                console.log(' [antiCrash] :: Unhandled Rejection/Catch');
                console.log(reason, p);
        if (reason.errno == -3001) {
            process.exit();
        }
    });
    process.on("uncaughtException", (err, origin) => {
        console.log(' [antiCrash] :: Uncaught Exception/Catch');
        console.log('err:' + err, "origin:" + origin);
    });
    process.on('uncaughtExceptionMonitor', (err, origin) => {
        console.log(' [antiCrash] :: Uncaught Exception/Catch (MONITOR)');
        console.log(err, origin);
    });
    /*process.on('multipleResolves', (type, promise, reason) => {
        console.log(' [antiCrash] :: Multiple Resolves');
        console.log(type, promise, reason);
    });*/
};
