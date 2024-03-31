import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="min-h-screen">
            <div className="flex justify-between">
                <div className="md:w-[50%] pt-[11%] text-center md:text-left px-5">
                    <h1 className="text-5xl font-bold">Manage your task easily with simple.</h1>
                    <p className="py-6 text-xl">Task management services by CSq task manager</p>
                    <Link to="/login" className="bg-sky-600 text-white p-2 rounded">Get Started</Link>
                </div>
                <div className="md:absolute hidden md:block md:w-[50%] md:bg-gradient-to-r md:from-sky-300 md:to-sky-600 md:rounded-l-full md:ml-[11.5rem] md:py-48 md:left-[35%]">
                    <img src="https://i.ibb.co/8ztGvYS/Chikitsha-Hub-hilarious-wisp-3febc2-netlify-app.png" className="w-[90%] relative right-40 rounded-lg shadow-2xl" />
                </div>
            </div>
        </div>
    );
};

export default Banner;