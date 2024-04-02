import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";

const AddTask = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="p-6 space-y-6 mt-20">
            <form action="#">
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label className="text-sm font-medium text-gray-900 block mb-2">Name</label>
                        <input type="text" defaultValue={user?.displayName} name="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Your name" required="" readOnly />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label className="text-sm font-medium text-gray-900 block mb-2">Email</label>
                        <input type="email" defaultValue={user?.email} name="email" id="" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="" required="" readOnly/>
                    </div>
                    <div className="col-span-full ">
                        <label className="text-sm font-medium text-gray-900 block mb-2">Date</label>
                        <input type="date" name="date" id="date" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Date" required="" />
                    </div>
                    <div className="col-span-full">
                        <label className="text-sm font-medium text-gray-900 block mb-2">Write Task</label>
                        <textarea id="task-details" rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Task here..."></textarea>
                    </div>
                </div>
            </form>
            <div className="p-6 border-t border-gray-200 rounded-b">
                <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Add Task</button>
            </div>
        </div>
    );
};

export default AddTask;