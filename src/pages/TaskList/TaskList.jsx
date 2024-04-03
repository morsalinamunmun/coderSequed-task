import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/UseAxiosPublic";

const TaskList = () => {
    const axiosPublic = useAxiosPublic();
    const { data: task = [], refetch } = useQuery({
        queryKey: ['task'],
        queryFn: async () => {
            const res = await axiosPublic.get('/task');
            return res.data;
        }
    })
    return (
        <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {
                    task.map(isTask => <div className="mt-5 ml-2 border-2 p-3" key={isTask._id}>
                        <h2 className="text-xl font-bold">Task</h2>
                        <div className="flex gap-1">
                            <div className="space-y-3">
                                <p>{isTask?.taskDescription}</p>
                                <p className="text-sky-600">{isTask?.date}</p>
                            </div>
                            <div className="flex  flex-col justify-center items-center">
                                <img
                                    className="hidden h-12 w-12 rounded-full sm:block object-cover mr-2 border-2 border-blue-400"
                                    src={isTask?.photoURL}
                                    alt=""
                                />
                                <p className="font-semibold text-base  text-gray-700 pt-2 text-center w-full">
                                    {isTask?.name}
                                </p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TaskList;