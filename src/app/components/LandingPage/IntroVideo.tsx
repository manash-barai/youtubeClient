import React from 'react'

const IntroVideo = () => {
  return (
    <div className='bg-zinc-200 py-11 flex justify-center lg:px-28 md:px-11 sm:px-11'>
    <div className="container bg-red-900 rounded-lg relative introVideo overflow-hidden">
        <div style={{ alignItems: "center", height: "100%" }} className='flex flex-col md:flex-row px-20 z-10 py-11'>
            <div className='flex flex-col gap-6 z-20 flex-1'>
                <h1 className='text-slate-200 font-semibold text-md'>
                    Video
                </h1>
                <h2 className='text-4xl  leading-normal text-white font-bold'>
                    Getting started with ChannelCrawler
                </h2>
                <p className='text-zinc-300 font-semibold'>
                    This short video covers the basics of using ChannelCrawler; how to create a basic or advanced search, exporting channel data and contact information, and choosing a premium plan.
                </p>
            </div>
            <div style={{ height: "65%" }} className='flex-1 flex justify-end introVideo flex-col items-end z-10 md:pt-0 pt-6'>
                <button className='border flex items-center rounded w-52 text-white transition-transform font-bold py-3 px-5'>
                    Watch intro video <span className='ml-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                            <path d="M13.1799 6.94961L2.10403 0.180756C1.91747 0.0666742 1.70388 0.00435831 1.48524 0.000220414C1.2666 -0.00391748 1.05081 0.050272 0.860068 0.157213C0.669325 0.264154 0.510518 0.419985 0.399989 0.608672C0.289459 0.797359 0.231199 1.01209 0.231201 1.23076V14.7697C0.231379 14.9883 0.289752 15.2029 0.400323 15.3915C0.510895 15.5801 0.669678 15.7358 0.860359 15.8427C1.05104 15.9496 1.26675 16.0038 1.48531 15.9998C1.70388 15.9957 1.91743 15.9336 2.10403 15.8197L13.1799 9.05083C13.3598 8.94081 13.5085 8.78641 13.6116 8.60245C13.7148 8.41849 13.7689 8.21112 13.7689 8.00022C13.7689 7.78932 13.7148 7.58196 13.6116 7.39799C13.5085 7.21403 13.3598 7.05964 13.1799 6.94961Z" fill="currentColor"></path>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
        <div className='absolute bottom-0 start-0 z-0'>
            <span>
                <svg className="block w-full h-auto" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg" width="671" height="371" viewBox="0 0 671 371" fill="none">
                    <path d="M649.765 130.862C646.212 114.5 639.433 99.3767 629.986 86.7387C620.54 74.1007 608.698 64.3106 595.436 58.1764C467.079 -0.380782 262.66 0.107716 251.5 0.177172C240.346 0.0708089 35.925 -0.383099 -92.4346 58.1764C-105.695 64.3104 -117.537 74.0998 -126.984 86.737C-136.43 99.3742 -143.209 114.497 -146.763 130.857C-156.453 175.015 -168 255.76 -168 389.666C-168 523.571 -156.453 604.315 -146.765 648.471C-143.212 664.832 -136.433 679.956 -126.986 692.594C-117.54 705.232 -105.698 715.022 -92.4364 721.156C30.4402 777.215 223.019 779.164 249.033 779.164C251.357 779.167 251.643 779.167 253.967 779.164C280.001 779.162 472.565 777.21 595.435 721.156C608.695 715.023 620.537 705.233 629.984 692.596C639.43 679.959 646.21 664.836 649.763 648.476C659.453 604.318 671 523.573 671 389.666C671 255.762 659.453 175.017 649.765 130.862Z" fill="#7E0E1D"></path>
                </svg>
            </span>
        </div>
        <div className='absolute top-0 end-0 z-0'>
            <span>
                <svg className="block w-full h-auto" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg" width="448" height="348" viewBox="0 0 448 348" fill="none">
                    <path d="M616.004 -141.351C613.328 -153.68 608.221 -165.076 601.105 -174.599C593.99 -184.122 585.069 -191.499 575.08 -196.121C478.391 -240.246 324.406 -239.878 316 -239.826C307.598 -239.906 153.612 -240.248 56.9218 -196.121C46.9328 -191.499 38.0124 -184.123 30.8968 -174.6C23.7811 -165.078 18.6742 -153.682 15.9973 -141.354C8.69846 -108.08 0 -47.2363 0 53.6663C0 154.567 8.69846 215.411 15.9959 248.684C18.6723 261.012 23.7791 272.408 30.8948 281.932C38.0104 291.455 46.931 298.832 56.9204 303.454C149.481 345.696 294.546 347.165 314.142 347.165C315.893 347.166 316.108 347.166 317.858 347.165C337.469 347.163 482.524 345.692 575.078 303.454C585.067 298.832 593.988 291.455 601.103 281.933C608.219 272.41 613.326 261.015 616.003 248.687C623.302 215.413 632 154.569 632 53.6663C632 -47.2347 623.302 -108.078 616.004 -141.351Z" fill="#7E0E1D"></path>
                </svg>
            </span>
        </div>
    </div>
</div>

  )
}

export default IntroVideo