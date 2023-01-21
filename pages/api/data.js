export default (req, res) => {
  // Get data from database or any other source
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Apple Mustard",
      creator: "AE",
      price: "14.99",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1576181177940-cb8592693079?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80",
      title: "Orange King",
      creator: "AE",
      price: "20.99",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "Mango Masala",
      creator: "AE",
      price: "50.99",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      title: "Pineapple Pine",
      creator: "AE",
      price: "25.19",
    },{
      id: 5,
      img: "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      title: "Pineapple Pine",
      creator: "AE",
      price: "25.19",
    },
  ];
  // Send the data as a JSON response
  res.status(200).json(data);
};
