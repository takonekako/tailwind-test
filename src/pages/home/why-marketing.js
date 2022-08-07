import React from "react"

function WhyMarketing() {
    return (
        <div>
            <div className="text-center">
                <h1 className="text-8xl text-primary text-semibold mt-20">Why <b className="text-secondary">Marketing</b> ?</h1>
            </div>
            {/* h-500 Ne možemo primijeniti visinu za lottie-player. To moramo primijeniti za period.  */}
            <div className="h-[500px]">
                <lottie-player src="https://assets1.lottiefiles.com/private_files/lf30_GjhcdO.json" background="transparent" speed="1" loop autoplay></lottie-player>
            </div>
            <p className="text-gray-600 text-md mt-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            <h1 class="text-semibold text-4xl mt-10">The answers to all these questions lie in marketing</h1>
            <p className="text-gray-600 text-md mt-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>
    )
}

export default WhyMarketing