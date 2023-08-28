import { useState } from "react";
import { AddCategory } from "./components";
import { GridGIf } from "./components";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  function onAddCategory( newCategory ) {
    if( categories.includes( newCategory ) ) return;
    setCategories([newCategory, ...categories]);
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
