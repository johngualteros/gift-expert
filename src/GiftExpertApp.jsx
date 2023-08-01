import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GridGIf } from "./components/GridGIf";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  function onAddCategory( newCatgeory ) {
    if( categories.includes( newCatgeory ) ) return;
    setCategories([...categories, newCatgeory]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {
        categories.map( category => <GridGIf category={category} key={category}/> )
      }
    </>
  );
};
