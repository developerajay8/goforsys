const Portfolio = () => {
    const projects = [
        {
            title: "Web Design",
            category: "Mobile / Design / Rebranding",
            image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
            link: "#"
        },
        {
            title: "UX Design",
            category: "UX / UI / Research",
            image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
            link: "#"
        },
        {
            title: "Concepts",
            category: "Design / Creative",
            image: "https://images.unsplash.com/photo-1553531888-a5892402adce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
            link: "#"
        },
        {
            title: "Creative & Cool",
            category: "Design / Food",
            image: "https://images.unsplash.com/photo-1484980859177-5ac1249fda6f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1684&q=80",
            link: "#"
        },
        {
            title: "AR-VR",
            category: "VR / AR / Creative",
            image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1398&q=80",
            link: "#"
        },
        {
            title: "Logo",
            category: "Design / Logo / Clothing",
            image: "https://images.unsplash.com/photo-1600609842388-3e2ed2a1454a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
            link: "#"
        },
        {
            title: "Art",
            category: "Drawing / Painting / Abstract",
            image: "https://images.unsplash.com/photo-1544273677-c433136021d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
            link: "#"
        },
        {
            title: "Native Apps",
            category: "Coding / Mobile",
            image: "https://images.unsplash.com/photo-1551650992-ee4fd47df41f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
            link: "#"
        },{
            title: "UX Design",
            category: "UX / UI / Research",
            image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
            link: "#"
        },
    ];

    return (
        <div className="w-full md:py-20 py-10 px-6 xl:px-0 bg-gray-50">
            <div className="max-w-[1170px] mx-auto px-6 xl:px-0">

                <div className="text-center mb-12 ">
                    <h2 className="text-3xl  uppercase lg:text-4xl font-extrabold text-gray-900 relative inline-block">
                        Case Studies
                        <div className="flex items-center justify-center">
                            <span className="block  w-16 h-1 bg-gradient-to-r from-black via-[#ff712c] to-black mt-2 rounded"></span>
                        </div>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-0">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 block"
                        >
                            <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {project.category}
                                </p>
                            </div>

                            {/* Hover overlay with better content visibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-200">
                                        {project.category}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;