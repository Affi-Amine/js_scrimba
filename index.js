const userData = {
    name: "amine",
    age: 20
  };
  
  const returnData = (name) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = userData.name;
        if (user) {
            //e resolve bsh testaamlha fl .then
          resolve(userData);
        } else {
          reject("user not found");
        }
      }, 3000);
    });
  };
  
  returnData("amine")
    .then((userData) => {
      console.log("user data", userData);
    })
    .catch((error) => {
      console.log(error);
    });
  