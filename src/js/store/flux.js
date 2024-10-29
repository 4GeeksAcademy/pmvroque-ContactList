const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			pets: [  
				{"name" : "Chibi", "gender" : "male", "breed" : "Shih tzu", "email" : "Chibi@woof.com"},
				{"name" : "Chili", "gender" : "male", "breed" : "Shih tzu", "email" : "Chili@woof.com"},
				{"name" : "Cloudy", "gender" : "female", "breed" : "daschund", "email" : "Cloudy@woof.com"},
				{"name" : "Empi", "gender" : "female", "breed" : "Golden Lab", "email" : "Empi@woof.com"}
			]},
		actions: {
			// Use getActions to call a function within a fuction
			createPet: (name, email, breed, gender) => {
				let pet = {name: name, email: email, breed: breed, gender: gender}
				setStore({pets: [...getStore().pets, pet]})
			  },
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
