import React from "react";

export function Add(){

    return(
        <>
        <h1>Add Product</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Product Name"/>
            <input type="number" placeholder="Price"/>
            <textArea type="text" placeholder="Description"/>
            <Button type="submit">Add</Button>
          </form>
        </>
    )
}