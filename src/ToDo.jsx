import React from 'react'

function ToDo() {
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-300'>
            
            <div className='bg-purple-300 p-9'>
                <h1 className='text-white font-bold text-center mb-4 text-2xl'>ToDo List</h1>
                <form className="w-full">
                    <div className="relative">
                        
                        <input type="search" id="search" className=" w-full p-3 pr-25 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="Enter The Task" required />
                        <button type="button" className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition duration-200">Enter</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ToDo