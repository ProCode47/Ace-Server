
axios
  .post("/api/contact", { email, budget, phone, name, message })
  .then((res) => {
    console.log(res.data);
  }) 
  .catch((err) => console.log(err));

