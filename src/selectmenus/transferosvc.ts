export const name = 'transferosvc';
export const run = async(client:any, int:any, interactorId:string, targetId:string) => {

    const interactor = await int.guild.members.cache.find((user:any) => user.id === interactorId)
    // const interactor = int.guild.members.cache.get(interactorId)//const target = client.members.cache.get(targetId)
 
 let tempvc = client.jointocreatemap.get(`tempvc_${interactor.voice.channel.id}`)
 if(tempvc && tempvc[1] == interactorId){
    client.jointocreatemap.set(`tempvc_${interactor.voice.channel.id}`, [interactor.voice.channel.id, targetId])
    .then(()=>{
        int.update({
          content: 'done', components: []
      })
      })
 }
}