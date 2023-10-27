export default (client:any) => {
    process.on('unhandledRejection', (reason:any, p:any) => {
//         console.log(' [antiCrash] :: Unhandled Rejection/Catch');
//         console.log(reason, p);

if(reason.errno == -3001){
    process.exit()
}

     });
     process.on("uncaughtException", (err:any, origin) => {

       console.log(' [antiCrash] :: Uncaught Exception/Catch');
        console.log('err:' + err,"origin:" + origin);
     }) 
     process.on('uncaughtExceptionMonitor', (err, origin) => {
        console.log(' [antiCrash] :: Uncaught Exception/Catch (MONITOR)');
       console.log(err, origin);
     });
     /*process.on('multipleResolves', (type, promise, reason) => {
         console.log(' [antiCrash] :: Multiple Resolves');
         console.log(type, promise, reason);
     });*/
 }