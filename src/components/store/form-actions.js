export const sendFormData = (data) => {
  return () => {
    const sendRequest = async () => {
      fetch("https://384e-103-240-35-190.in.ngrok.io/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.enteredEmail,
          password: data.enteredPassword,
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
