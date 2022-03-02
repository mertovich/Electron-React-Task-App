import React, { useState } from 'react'
import List from '../components/List'
import TopBar from '../components/TopBar'

const Home = () => {
    const [TodoList, setTodoList] = useState([])

    const addTodo = task => {
        setTodoList(TodoList => [...TodoList, task])
    }

    const deleteItem = item => {
        let tmpList = TodoList.filter(i => i !== item)
        setTodoList(tmpList)
    }
    return (
        <div>
            <TopBar addTodo={addTodo} />
            <List TodoList={TodoList} deleteItem={deleteItem} />
        </div>
    )
}

export default Home