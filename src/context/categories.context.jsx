import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoryContext = createContext({
  categoryMap: {},
});

export const CategoryProvider = ({ children }) => {
  const [categoryMap, setCategoryMap] = useState({});
  const value = { categoryMap };
  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoryMap(categoryMap);
    };

    getCategoryMap();
  }, []);

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
