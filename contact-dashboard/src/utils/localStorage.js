import localforage from 'localforage';

export const saveContact = async (contact) => {
  const contacts = await localforage.getItem('contacts') || [];
  contacts.push(contact);
  await localforage.setItem('contacts', contacts);
};

export const getContacts = async () => {
  return await localforage.getItem('contacts') || [];
};
