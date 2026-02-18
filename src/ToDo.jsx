import React, { useState } from 'react'

function ToDo() {
    const [tasks,setTasks]=useState(["Eat Breakfast","Do Exercise"])
    const [newTask,setNewTask]=useState('')

    const handleInput=(e)=>{
        setNewTask(e.target.value)
    }
    const addTask=()=>{
        if(newTask.length>0){
            setTasks([...tasks,newTask])
            setNewTask('')
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 to-purple-400 p-4'>
            
            <div className='bg-white w-full max-w-md rounded-2xl shadow-xl p-6'>
                
                <h1 className='text-3xl font-bold text-center text-purple-700 mb-6'>
                    ToDo List
                </h1>

                <form className="w-full mb-6">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Enter the task..."
                            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                            required
                            onChange={handleInput}
                            value={newTask}
                        />
                        <button
                            type="button"
                            className="bg-purple-600 hover:bg-purple-700 text-white px-4 rounded-lg transition duration-200"
                        onClick={addTask}>
                            Add
                        </button>
                    </div>
                </form>

                <ol className='list-decimal list-inside space-y-3'>
                    {
                        tasks.map((task,index)=>
                        <li key={index} className='flex items-center justify-between bg-purple-50 p-3 rounded-lg shadow-sm'>
                            
                            <span className='flex-1'>{task}</span>

                            <div className='flex gap-2 ml-4'>
                                <button className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded-md text-sm">
                                    Delete
                                </button>
                                <button className='bg-emerald-400 hover:bg-emerald-500 text-white px-2 py-1 rounded-md text-sm'>
                                    ↑
                                </button>
                                <button className='bg-emerald-400 hover:bg-emerald-500 text-white px-2 py-1 rounded-md text-sm'>
                                    ↓
                                </button>
                            </div>

                        </li>)
                    }
                </ol>

            </div>
        </div>
    )
}

export default ToDo
