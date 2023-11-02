import { PB } from './pocketbase';

export function isLogined() {
  return !!PB.authStore.model
};

export async function registerUser(formData: any) {
  try {
    await PB.collection("users").create(formData);

    return 200;
  } catch (e) {
    return e
  };
};

export async function loginUser(username: string, password: string) {
  try {
    await PB.collection("users").authWithPassword(username, password);
    return 200
  } catch (e) {
    return e;
  }
};

export async function getUser() {
  await PB.collection('users').authRefresh({
    expand: "servers.channels.messages.author,servers.members",
  });
  return PB.authStore.model;
};

export async function logoutUser() {
  PB.authStore.clear();
  return 200;
};
