import*as _0xe81723 from'fs';export async function before(_0x5e0156,{conn:_0x447ef9,isAdmin:_0x17c0a4,isBotAdmin:_0x523663,usedPrefix:_0x497d7b}){if(_0x5e0156['isBaileys']&&_0x5e0156['fromMe'])return!0x0;if(!_0x5e0156['isGroup'])return!0x1;let _0x478d1c=global['db']['data']['chats'][_0x5e0156['chat']],_0x200f34=global['db']['data']['settings'][this['user']['jid']]||{},_0x4827ba=_0x5e0156['key']['participant'],_0xca409e=_0x5e0156['key']['id'],_0x4a3203=await _0x447ef9['getName'](_0x5e0156['sender']),_0x20c7b2={'key':{'participant':'0@s.whatsapp.net','remoteJid':'0@s.whatsapp.net'},'message':{'groupInviteMessage':{'groupJid':'5212411719888@g.us','inviteCode':'m','groupName':'P','caption':'𝚃𝚑𝚎\x20𝙼𝚢𝚜𝚝𝚒𝚌\x20-\x20𝙱𝚘𝚝','jpegThumbnail':null}}};if(_0x478d1c['antiTraba']&&_0x5e0156['text']['length']>0x7d0){if(_0x17c0a4)return _0x447ef9['sendMessage'](_0x5e0156['chat'],{'text':'*???\x20??????s??????*\x20@'+_0x5e0156['sender']['split']('@')[0x0]+',\x20*?????\x20??\x20??????\x20??\x20??x??\x20???\x20????????\x20?????s\x20?????????s\x20-.-!*','mentions':[_0x5e0156['sender']]},{'quoted':_0x20c7b2});await _0x447ef9['sendButton'](_0x5e0156['chat'],'[?]s?\x20???????\x20??\x20???s???\x20???\x20????????\x20?????s\x20?????????s??*\x0a',''+(_0x523663?'':'No\x20soy\x20administrador,\x20no\x20puedo\x20hacer\x20nada\x20:/'),author,['[??s???????\x20????\x20?????s]',_0x497d7b+'apagar\x20antitraba'],_0x20c7b2);if(_0x523663&&_0x200f34['restrict'])_0x447ef9['sendMessage'](_0x5e0156['chat'],{'delete':{'remoteJid':_0x5e0156['chat'],'fromMe':![],'id':_0xca409e,'participant':_0x4827ba}}),setTimeout(()=>{_0x447ef9['sendMessage'](_0x5e0156['chat'],{'text':'*??????\x20??\x20????\x20????\x20?????*'+'\x0a'['repeat'](0x190)+'\x0a=>??????\x20:\x20wa.me/'+_0x5e0156['sender']['split']('@')[0x0]+'\x0a=>????s\x20\x20:\x20'+_0x4a3203+'\x0a*[?]?????\x20??\x20??????\x20??\x20??x??\x20???\x20????????\x20?????s\x20?????????s\x20???\x20?????\x20???s?????\x20?????s\x20??\x20??s\x20??s??s?????s\x20*','mentions':[_0x5e0156['sender']]},{'quoted':_0x20c7b2});},0x0),setTimeout(()=>{_0x447ef9['groupParticipantsUpdate'](_0x5e0156['chat'],[_0x5e0156['sender']],'remove');},0x3e8);else{if(!_0x200f34['restrict'])return _0x5e0156['reply']('[?]\x20*????\x20????????\x20???????s\x20??\x20????????0,\x20??\x20?????\x20?????\x20???\x20????????\x20??\x20????\x20??s????????!*');}}return!0x0;}