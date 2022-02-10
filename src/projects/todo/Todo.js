import React, { useEffect, useState } from 'react'
import todo from "../../assets/todo_list.jpg"
import "./todo.css"


// to get the data from LS

const getLocalItmes = () => {
    let list = localStorage.getItem('lists');
    console.log(list);

    if (list) {
        return JSON.parse(localStorage.getItem('lists'));
    } else {
        return [];
    }
}

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(getLocalItmes());
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);

    const addItem = () => {
        if (!inputData) {
            alert('plzz fill data');
        } else if (inputData && !toggleSubmit) {
            setItems(
                items.map((elem) => {
                    if (elem.id === isEditItem) {
                        return { ...elem, name: inputData }
                    }
                    return elem;
                })
            )
            setToggleSubmit(true);

            setInputData('');

            setIsEditItem(null);
        } else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData }
            setItems([...items, allInputData]);
            setInputData('')
        }
    }


    // delete the items
    const deleteItem = (index) => {
        const updateditems = items.filter((elem) => {
            return index !== elem.id;
        });

        setItems(updateditems);
    }

    // edit the item
    //     When user clikc on edit button 

    // 1: get the id and name of the data which user clicked to edit
    // 2: set the toggle mode to change the submit button into edit button
    // 3: Now update the value of the setInput with the new updated value to edit. 
    // 4: To pass the current element Id to new state variable for reference 


    const editItem = (id) => {
        let newEditItem = items.find((elem) => {
            return elem.id === id
        });
        console.log(newEditItem);

        setToggleSubmit(false);

        setInputData(newEditItem.name);

        setIsEditItem(id);

    }


    // remove all 
    const removeAll = () => {
        setItems([]);
    }

    // add data to localStorage
    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(items))
    }, [items]);

    return (
        <div className='justify-content-center w-100'>
                  <h1 className=" mb-4 text-success"><b> Todo App </b></h1>

            <div className="main-div ">
                <div className="child-div">
                    <figure>
                        <img src={todo} alt="todologo" />
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>

                    <div className="addItems" >
                        <input type="text" placeholder="✍ Add Items..."
                           value={inputData} 
                           onChange={(e) => setInputData(e.target.value) }
                        />
                        {
                            toggleSubmit ? <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem} ></i> :
                                 <i className="far fa-edit add-btn" title="Update Item" onClick={addItem} ></i>
                        }
                       
                    </div>
                    
                    {/* <form className="addItems" onSubmit={addItem}>
                        <input
                            type="text"
                            placeholder="✍ Add Items..."
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value) }
                        />
                        //  <button title="Add Item" type="submit"> {editId ? "Edit" : "Go"} </button> 
                        {
                            toggleSubmit ? <i className="fa fa-plus add-btn" title="Add Item" type="submit" ></i> :
                                 <i className="far fa-edit add-btn" title="Update Item" type="submit" ></i>
                        }
                    </form> */}

                    <div className="showItems">

                        {
                            items.map((elem) => {
                                return (
                                    <div className="eachItem" key={elem.id}>
                                        <h3>{elem.name}</h3>
                                        <div className="todo-btn">
                                            <i className="far fa-edit add-btn" title="Edit Item" onClick={() => editItem(elem.id)}></i>
                                            <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => deleteItem(elem.id)}></i>
                                        </div>
                                    </div>
                                )
                            })

                        }

                    </div>

                    {/* clear all button  */}
                    <div className="showItems">
                        <button className="Tbtn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span> CHECK LIST </span> </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Todo