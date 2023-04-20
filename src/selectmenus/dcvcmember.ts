export const name = 'dcvcmember';
export const run = async(client:any, int:any, interactorId:string, targetId:string) => {

    const interactor = await int.guild.members.cache.find((user:any) => user.id === interactorId)
    const target = await int.guild.members.cache.find((user:any) => user.id === targetId)
    //const target = client.members.cache.get(targetId)
  
  let tempvc = client.jointocreatemap.get(`tempvc_${interactor.voice.channel.id}`)
  if(tempvc && tempvc[1] == interactorId){
    if(target.voice.channel.id == tempvc[0]){
        target.voice.disconnect()
        int.update({
            content: 'user disconnected', components: []
        })
    }
  }


}