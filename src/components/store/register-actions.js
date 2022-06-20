export const sendRegisterData = (data) => {
  return () => {
    const sendRequest = async () => {
      fetch("https://8ee1-103-240-35-190.in.ngrok.io/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.enteredName,
          mobile_number: data.enteredPhone,
          email: data.enteredRegEmail,
          password: data.enteredRegPassword,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    sendRequest();
  };
};
