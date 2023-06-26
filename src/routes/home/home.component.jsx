import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: process.env.PUBLIC_URL + "images/hat.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: process.env.PUBLIC_URL + "images/jacket.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: process.env.PUBLIC_URL + "images/shoe.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: process.env.PUBLIC_URL + "images/women.png",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: process.env.PUBLIC_URL + "images/men.png",
    },
  ];

  return <Directory categories={categories} />;
};

export default Home;
