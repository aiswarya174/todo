import React, { useState } from 'react'

function ToDo() {
    const [tasks,setTasks]=useState(["Eat Breakfast","Do Exercise"])//for storing the tasks
    const [newTask,setNewTask]=useState('') //for storing the new task input by the user
    const handleInput=(e)=>{
        console.log(e.target.value);
        
        setNewTask(e.target.value)
    }
    // const addTask=()=>{
    //     sessionStorage.setItem('task',newTask)
    //     alert("Task Added Successfully")
        
    // }
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-300'>
            
            <div className='bg-purple-300 p-9 text-purple-800'>
                <h1 className='text-white font-bold text-center mb-4 text-2xl'>ToDo List</h1>
                <form className="w-full">
                    <div className="relative">
                        
                        <input type="search" id="search" className=" w-full p-3 pr-25 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="Enter The Task" required onChange={handleInput} value={newTask}/>
                        <button type="button" className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition duration-200">+Add</button>
                    </div>
                </form>
                <ol className='list-decimal text-center'>
                {
                    tasks.map((task,index)=>
                    <li key={index}>
                        {task}
                        <button className="ml-4 bg-red-300 hover:bg-red-400 text-white px-3 py-1 rounded-lg text-sm transition duration-200" >Delete</button>
                    </li>)
                }
            
            </ol>

            </div>
            
        </div>
    )
}

export default ToDo