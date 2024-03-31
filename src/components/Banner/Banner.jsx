import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="min-h-screen">
            <div className="flex justify-between">
                <div className="w-[50%] pt-[10%]">
                    <h1 className="text-5xl font-bold">Manage your task easily with simple.</h1>
                    <p className="py-6"></p>
                    <Link to="/login" className="bg-sky-600 text-white p-2 rounded">Get Started</Link>
                </div>
                <div className="absolute w-[50%] bg-gradient-to-r from-sky-300 to-sky-600 rounded-l-full ml-[11.5rem] py-52 left-[35%]">
                    <img src="https://i.ibb.co/8ztGvYS/Chikitsha-Hub-hilarious-wisp-3febc2-netlify-app.png" className="w-[90%] relative right-48 rounded-lg shadow-2xl" />
                </div>
            </div>
        </div>
    );
};

export default Banner;