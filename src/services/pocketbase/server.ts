import { PB } from './pocketbase';

export async function createServer(formData: any) {
  formData.append("owner", PB.authStore.model.id);
  formData.append("members", [PB.authStore.model.id]);

  try {
    var server = await PB.collection("servers").create(formData);
    await PB.collection('users').update(PB.authStore.model.id, {
      "servers+": [server.id]
    })

    server = await PB.collection('servers').getOne(server.id, {
      'expand': 'members,channels'
    })

    return {
      res: 200,
      server
    };
  } catch (e) {
    return e
  };
}

export async function joinServer(code: string) {
  try {
    var server = await PB.collection("servers").getOne(code);
    await PB.collection('users').update(PB.authStore.model.id, {
      "servers+": [server.id]
    })
    await PB.collection('servers').update(code, {
      "members+": [PB.authStore.model.id]
    })

    server = await PB.collection('servers').getOne(server.id, {
      'expand': 'members,channels'
    })



    return {
      res: 200,
      server
    };
  } catch (e) {
    return e
  };
}

export async function getServer(id: any) {
  const server = await PB.collection("servers").getOne(id);
  return server;
}

export async function deleteServer(id: any) {
  await PB.collection('servers').delete(id);
};

export async function quitServer(id: any) {
  await PB.collection('users').update(PB.authStore.model.id, {
    "servers-": [id]
  })
  await PB.collection('servers').update(id, {
    "members-": [PB.authStore.model.id]
  })
};

export async function createChannel(id: any, name: any) {

  try {
    const channel = await PB.collection('channels').create({
      server: id,
      name
    });

    await PB.collection('servers').update(id, {
      "channels+": [channel.id]
    })

    return {
      res: 200,
      channel
    }
  } catch (e) {
    return e
  }
};


export async function sendMessage(content: string, channel: string) {
  const cmessage = await PB.collection('messages').create({
    content,
    author: PB.authStore.model.id,
    channel
  });



  await PB.collection('channels').update(channel, {
    "messages+": [cmessage.id]
  })
}
