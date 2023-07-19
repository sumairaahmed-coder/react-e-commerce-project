import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: process.env.PUBLIC_URL + "images/hat.png",
      route: "/shop/hats",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: process.env.PUBLIC_URL + "images/jacket.png",
      route: "/shop/jackets",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: process.env.PUBLIC_URL + "images/shoe.png",
      route: "/shop/sneakers",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: process.env.PUBLIC_URL + "images/women.png",
      route: "/shop/womens",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: process.env.PUBLIC_URL + "images/men.png",
      route: "/shop/mens",
    },
  ];

  return <Directory categories={categories} />;
};

export default Home;
