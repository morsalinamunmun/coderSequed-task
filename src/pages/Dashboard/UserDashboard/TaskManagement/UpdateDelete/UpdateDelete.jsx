
const UpdateDelete = ({user, isTask}) => {
    const handleUpdateTask = () =>{

    }

    const handleDelete = ()=>{

    }
    console.log(isTask);
    return (
        <div>
            <div className="flex gap-5">
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="bg-orange-500 px-2 py-1 text-white" onClick={() => document.getElementById('my_modal_3').showModal()}>Edit</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <form action="" onSubmit={handleUpdateTask}>
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="text-sm font-medium text-gray-900 block mb-2">Name</label>
                                    <input type="text" defaultValue={user?.displayName} name="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Your name" required readOnly />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="text-sm font-medium text-gray-900 block mb-2">Email</label>
                                    <input type="email" defaultValue={user?.email} name="email" id="" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="" required readOnly />
                                </div>
                                <div className="col-span-6 sm:col-span-3 ">
                                    <label className="text-sm font-medium text-gray-900 block mb-2">Date</label>
                                    <input type="date" name="date" id="date" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Date" />
                                </div>
                                <div className="col-span-6 sm:col-span-3 ">
                                    <label className="text-sm font-medium text-gray-900 block mb-2">Photo URL</label>
                                    <input type="text" name="photoURL" defaultValue={user?.photoURL} id="" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="" readOnly />
                                </div>
                                <div className="col-span-full">
                                    <label className="text-sm font-medium text-gray-900 block mb-2">Write Task</label>
                                    <textarea id="task-details" rows="6" name="taskDescription" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Task here..." required></textarea>
                                </div>
                            </div>
                            <div className="p-6 border-t border-gray-200 rounded-b">
                                <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Add Task</button>
                            </div>
                        </form>
                    </div>
                </dialog>
                <button onClick={() => handleDelete(isTask._id)} className="bg-red-500 px-2 py-1 text-white">Delete</button>
            </div>
        </div>
    );
};

export default UpdateDelete;