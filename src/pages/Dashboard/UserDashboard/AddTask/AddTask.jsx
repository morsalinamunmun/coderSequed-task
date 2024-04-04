import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddTask = () => {
    const { user } = useContext(AuthContext);
    const handleAddTask = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const taskDescription = form.taskDescription.value;
        const photoURL = form.photoURL.value;

        const taskInfo = { date, taskDescription, photoURL, name, email }

        //send form data to server
        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(taskInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Food add successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })
    }
    return (
        <div className="p-6 space-y-6 mt-20">
            <form action="" onSubmit={handleAddTask}>
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
                        <input type="date" name="date" id="date" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Date"/>
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
    );
};

export default AddTask;