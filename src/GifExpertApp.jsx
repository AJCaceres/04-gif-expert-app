import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

const [categories, setCategories] = useState(['One Punch'])

const onAddCategory = (newCategory) =>{
    if(categories.includes(newCategory)) return;
    console.log("agregar categoria")
    // categories.push('Deadnote')

    console.log(categories)
    setCategories([newCategory, ...categories]);
    // setCategories(cat => [...cat, onNewCategory]);

}

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory 
        // setCategories={setCategories}

            onNewCategory = { (value) => onAddCategory(value)}
        ></AddCategory>
        
        {
            categories.map( (category) => (
                    <GifGrid key={category} category={category}/>
            ))
        }
            
        {/* GIF item */}

    </>
  )
}
