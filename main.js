fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            const wrapper = document.createElement("div");
            wrapper.style.width = "300px";
            wrapper.style.height = "300px";
            wrapper.style.border = "4px solid black";
            wrapper.style.backgroundColor = "green";
            wrapper.style.margin = "10px"; 
            wrapper.style.borderRadius = "50px"
            wrapper.style.color = "white"
            wrapper.style.border = "none"
            

            const newName = document.createElement("h1");
            const newUsername = document.createElement("p");
            const newStreet = document.createElement("p");
            const newEmail = document.createElement("p");

            
            newName.textContent =`Ismi: ${item.name}`;
            newUsername.textContent = `Username: ${item.username}`;
            newStreet.textContent = `Manzil: ${item.address.street}`; 
            newEmail.textContent = `Email: ${item.email}`;

           
            wrapper.appendChild(newName);
            wrapper.appendChild(newUsername);
            wrapper.appendChild(newStreet);
            wrapper.appendChild(newEmail);

            
            document.body.appendChild(wrapper);
        });
    })
    .catch(error => {
        console.log("XATO:", error);
    });
