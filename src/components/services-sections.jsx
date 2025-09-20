const Servicessections = () => {
    const cardData = [

        {
            id: 2,
            color: '#89ec5b',
            icon: 'fa-solid fa-code',
            title: 'Web Development',
            description: 'We build beautiful, responsive and feature-rich web based applications that solve real customer problems.',
            link: '#'
        },
        {
            id: 7,
            color: '#ff712c',
            icon: 'fa-solid fa-code',
            title: 'E-Commerce Development',
            description: 'We build small to large scale beautiful e commerce web and mobile based applications.',
            link: '#'
        },
        {
            id: 3,
            color: '#5b98eb',
            icon: 'fa-brands fa-searchengin',
            title: 'App Development',
            description: 'We build Android, iOS and PWA s that work great across multiple devices, screen sizes and resolutions.',
            link: '#'
        },
        {
            id: 1,
            color: '#eb5ae5',
            icon: 'fa-solid fa-paintbrush',
            title: 'UI/UX Design',
            description: 'If great engineering is the heart of a product, great UI/UX is its face.',
            link: '#'
        },
        {
            id: 4,
            color: '#5b98eb',
            icon: 'fa-brands fa-searchengin',
            title: 'DevOps',
            description: 'We,ve worked on websites handling more than 10 million hits/day. We can scale your products too.',
            link: '#'
        },
        {
            id: 5,
            color: '#ff712c',
            icon: 'fa-brands fa-searchengin',
            title: 'AI/ML Chatbots',
            description: 'We,re always on the cutting edge of tech. Checkout some of the awesome Alexa skills, Google Actions and chatbots we,ve built!',
            link: '#'
        },

    ];

    return (
        <>
            {/* Font Awesome CDN */}
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
                rel="stylesheet"
            />

            <style jsx>{`
        // .card-box::before,
        // .card-box::after {
        //   content: "";
        //   position: absolute;
        //   z-index: -1;
        //   transition: 0.5s ease-in-out;
        // }

        .card::before,
        .card::after {
         display: none !important;
         content: none !important;
        }

        
        .card-box::before {
          top: -10px;
          bottom: -10px;
          left: 50px;
          right: 50px;
          border-top: 4px solid var(--card-color);
          border-bottom: 4px solid var(--card-color);
          transform: skewY(15deg);
        }
        
        .card-box:hover::before {
          top: -10px;
          bottom: -10px;
          left: 40px;
          right: 40px;
          transform: skewY(0deg);
        }
        
        .card-box::after {
          top: 60px;
          bottom: 60px;
          left: -10px;
          right: -10px;
          border-left: 4px solid var(--card-color);
          border-right: 4px solid var(--card-color);
          transform: skew(15deg);
        }
        
        .card-box:hover::after {
          top: 40px;
          bottom: 40px;
          left: -10px;
          right: -10px;
          transform: skew(0deg);
        }
        
        .card-icon {
          box-shadow: 0 0 0 4px #2e2e2e, 0 0 0 6px var(--card-color);
        }
        
        .card-box:hover .card-icon {
          box-shadow: 0 0 0 4px #2e2e2e, 0 0 0 300px var(--card-color);
        }
      `}</style>

            <div id="services" className="py-10 lg:py-20 bg-gray-50">
                <div className="max-w-[1170px] mx-auto text-center px-6 lg:px-8">
                    <h2 className="text-3xl uppercase lg:text-4xl font-extrabold text-gray-900 relative inline-block">
                        Our Services
                        <div className="flex items-center justify-center">
                            <span className="block  w-16 h-1 bg-gradient-to-r from-black via-[#ff712c] to-black mt-2 rounded"></span>
                        </div>
                    </h2>
                    <p className="text-[20px] text-[#000000] ">We pride ourselves on building successful, end to end web and mobile applications.</p>
                </div>

                <div className=" text-white font-['Poppins'] transition-all duration-200 flex items-center justify-center sm:px-12">


                    <section className="flex flex-wrap sm:gap-16 gap-10 justify-center w-full max-w-[1170px] mx-auto sm:pt-16 pt-8">
                        {cardData.map((card) => (
                            <div
                                key={card.id}
                                className="card-box relative flex justify-center items-center bg-gray-700 transition-all duration-500 ease-in-out w-80 h-96"
                                style={{ '--card-color': card.color }}
                            >
                                <div className="relative flex justify-center items-center flex-col gap-8 text-center px-5 h-full w-full overflow-hidden">
                                    <div
                                        className="card-icon w-20 h-20 flex justify-center items-center text-5xl bg-gray-700 transition-all duration-500 ease-in-out"
                                        style={{ color: card.color }}
                                    >
                                        <i className={card.icon}></i>
                                    </div>
                                    <div className="flex justify-center items-center flex-col gap-3">
                                        <h3
                                            className="text-2xl font-medium text-white transition-all duration-500 ease-in-out hover:text-gray-700"
                                            style={{
                                                color: 'white'
                                            }}
                                        >
                                            {card.title}
                                        </h3>
                                        <p
                                            className="text-sm text-gray-400 transition-all duration-500 ease-in-out leading-relaxed"
                                            style={{
                                                color: '#777777'
                                            }}
                                        >
                                            {card.description}
                                        </p>
                                        <a
                                            href={card.link}
                                            className="relative inline-flex py-2 px-4 no-underline font-medium mt-3 border-2 transition-all duration-500 ease-in-out text-gray-700"
                                            style={{
                                                borderColor: card.color,
                                                backgroundColor: card.color,
                                                color: '#2e2e2e'
                                            }}
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>


                </div>
            </div>

            <style jsx global>{`
        .card-box:hover .card-icon {
          color: #2e2e2e !important;
          background-color: var(--card-color) !important;
        }
        
        .card-box:hover h3 {
          color: #2e2e2e !important;
        }
        
        .card-box:hover p {
          color: #2e2e2e !important;
        }
        
        .card-box:hover a {
          color: var(--card-color) !important;
          background-color: #2e2e2e !important;
        }
        
        .card-box:hover a:hover {
          border-color: #2e2e2e !important;
          color: #2e2e2e !important;
          background-color: var(--card-color) !important;
        }
      `}</style>
        </>
    );
};

export default Servicessections;