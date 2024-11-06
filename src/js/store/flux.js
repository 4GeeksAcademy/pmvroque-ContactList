
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      users: [],
      updateUserData: {},
    },

    actions: {
      deleteContact: async (user) => {
		let store = getStore()

        let resp = await fetch(
          "https://playground.4geeks.com/contact/agendas/pmvroque/contacts/" +
            user.id,
          {
            method: "DELETE",
          }
        )
          .then((resp) => {
            if (!resp.ok) throw Error(resp.statusText);
            return resp.json();
          })
          .then((data) => {
            getActions().getAllContacts();
          })
          .catch((error) => {
            console.log(error);
          });
		  
      },

      updateContactData: (userData) => {
        setStore({ updateUserData: userData });
      },

      getAllContacts: async (users) => {
        let response = await fetch(
          "https://playground.4geeks.com/contact/agendas/pmvroque/contacts",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(users),
          }
        );
        let data = await response.json();

        setStore({ users: data.contacts });
      },
    },
  };
};

export default getState;
