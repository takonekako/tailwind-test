import React from "react"

function MarketingStrategies() {

    const strategies = [

        {
            title: "CONTENT MARKETING",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            image: "/images/content-marketing.png"
        },
        {
            title: "INBOUND MARKETING",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            image: "/images/inbound-marketing.png"
        },
        {
            title: "SOCIAL MEDIA",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            image: "images/social-media.png"
        },
        {
            title: "SEARCH ENGINE OPTIMIZATION",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            image: "images/seo.png"
        }


    ]

    return (
        <div>
            <div>
                <h1 className="text-5xl font-semibold text-primary">Want to boost your business growth</h1>
                <h1 className="text-7xl font-semibold text-primary mt-10">The <b className="text-secondary">SOLUTION</b> is here..</h1>
                <p className="text-gray-600 text-xl mt-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            <div className="grid grid-cols-2 gap-20 mt-10">
                {strategies.map(item => {
                    return <div className="border border-primary p-5 flex flex-col space-y-10 rounded transform hover:scale-105 duration-300">
                        <h1 className="mx-20 -mt-8 text-center bg-white border-primary border text-secondary text-2xl rounded py-2">{item.title}</h1>
                        <img src={item.image} alt="title" className="h-24 w-24"></img>
                        <p className="text-gray-600 text-md transform hover:text-primary">{item.description}</p>
                    </div>
                }
                )}


            </div>
        </div>

    )
}

export default MarketingStrategies