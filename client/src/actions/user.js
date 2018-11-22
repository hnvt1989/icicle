//import "@babel/polyfill";

// export async function loadContacts(state, getContactList) {
//   const contacts = await getContactList();

//   return Object.assign({}, state, { contacts });
// }

// export async function setSelectedId(state, selectedId) {
//   return Object.assign({}, state, { selectedId });
// }

export async function loadUserProfile(state, id, getUserProfile, routeConfig) {
  const profile = await getUserProfile(id);
  // routeConfig.navModel.setTitle(profile.firstName);
  console.log('dispatched loadUserProfile');
  return Object.assign({}, state, {
    userProfile: profile
  });
}

export async function authenticateUser(state, email, password, authenticateUser, routeConfig) {
  const user = await authenticateUser(email, password);

  console.log('dispatched authenticateUser');
  if (user !== null) {
    return Object.assign({}, state, {
      currentLoggedInUser: user,
      userLoggedin: true,
      loginStatus: {
        status: 'success',
        message: 'logged in successfully'
      }
    });
  } else {
    return Object.assign({}, state, {
      loginStatus: {
        status: 'failed',
        message: 'check user name & password'
      }
    });
  }
}

// export async function saveContact(state, modifiedContact, saveContactApi, routeConfig) {
//   const contact = await saveContactApi(modifiedContact);

//   routeConfig.navModel.setTitle(contact.firstName);

//   const idx = state.contacts.findIndex((c) => c.id === contact.id);

//   return Object.assign({}, state, {
//     contact,
//     contacts: [
//       ...state.contacts.slice(0, idx),
//       Object.assign({}, contact),
//       ...state.contacts.slice(idx + 1)
//     ],
//     originalContact: JSON.parse(JSON.stringify(contact))
//   });
// }
