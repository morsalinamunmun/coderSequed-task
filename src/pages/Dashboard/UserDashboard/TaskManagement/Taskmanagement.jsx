import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useAxiosPublic from "../../../../hooks/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import UpdateDelete from "./UpdateDelete/UpdateDelete";

const AllTask = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const { data: task = [] } = useQuery({
        queryKey: ["task", user?.email], // Pass an array as the query key
        queryFn: async () => {
            const res = await axiosPublic.get(`/task/${user?.email}`);
            return res.data;
        },
    });
    console.log(task);
    //const doctor = doctors.find((data) => data.doctorEmail === doctorEmail);
    return (
        <div className="grid grid-cols-3 mt-20">
            <div>
                <h1 className="text-xl font-semibold">Todo</h1>
                {
                    task.map(isTask => <div className="mt-5 ml-2 border-2 p-3" key={isTask._id}>
                        <h2 className="text-xl font-bold">Task</h2>
                        <div className="space-y-3">
                            <p>{isTask?.taskDescription}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-sky-600">{isTask?.date}</p>
                            <UpdateDelete user={user} isTask={isTask} />
                        </div>
                    </div>)
                }
            </div>
            <div>
                <h1>Doing</h1>
            </div>
            <div>
                <h1>Complete</h1>
            </div>
        </div>
    );
};

export default AllTask;