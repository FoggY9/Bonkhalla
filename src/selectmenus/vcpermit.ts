import { PermissionFlagsBits} from 'discord.js'
export const name = 'vcpermit';
export const run = async(client:any, int:any, interactorId:string, targetId:string) => {

  const interactor = await int.guild.members.cache.find((user:any) => user.id === interactorId)
//const target = client.members.cache.get(targetId)

let tempvc = client.jointocreatemap.get(`tempvc_${interactor.voice.channel.id}`)
if(tempvc && tempvc[1] == interactorId){

    int.guild.channels.cache.get(tempvc[0]).permissionOverwrites.set([
        {
          id: targetId,
          allow: [PermissionFlagsBits.Connect]
        }
      ]).then(()=>{
        int.update({
            content: 'done', components: []
        })
      })
}else{console.log('bruh')}
}