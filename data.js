const users = [
    {
      id: 1,
      firstName: "Alamin",
      lastName: "islam",
      gander: "Male",
      phone: "01734186660",
      email: "alamin@islam.com",
      isMarried: false,
      posts: [2],
      createdAt: "2023-01-22T18:47:59.894Z",
      password: "abc@123",
    },
    {
      id: 2,
      firstName: "Adnan",
      lastName: "ahmed",
      gander: "Male",
      phone: "01303525827",
      email: "adnan@ahmed.com",
      isMarried: true,
      posts: [1, 2],
      createdAt: "2023-01-22T18:47:59.894Z",
      password: "abc@123",
    },
  ];
  
  const posts = [
    {
      id: 1,
      title: "GraphQL",
      description: "SaA query language for your APIrkar",
      user: 1,
    },
    {
      id: 2,
      title: "JS",
      description: "SaA query language for your APIrkar",
      user: 1,
    },
    {
      id: 3,
      title: "PHP",
      description: "SaA query language for your APIrkar",
      user: 2,
    },
  ];
  
  module.exports = { users, posts };