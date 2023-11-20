'use client';

// import { useEffect } from "react";
// import { initFlowbite } from 'flowbite'
// import Image from 'next/image'

import { Footer } from 'flowbite-react';
import {BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter, BsYoutube} from 'react-icons/bs';
import Image from "next/image";
import {BiSolidCloud} from "react-icons/bi";

export default function FooterComponent(){
    // useEffect(() => {
    //     initFlowbite();
    // }, [])

    return (
        <Footer container>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <Footer.Brand
                            href="/"
                            src="/img/logo.png"
                            alt="Octoopus Logo"
                            name="Octoopus"
                        />
                        {/*<Image src="/img/logo.png" width={0} height={0} sizes="2rem" style={{ width: 'auto', height: 'auto' }} className="mr-2 h-6 sm:h-9" alt="Octoopus Logo" />*/}
                        {/*<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white pb-2">Octoopus</span>*/}
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="about" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Flowbite</Footer.Link>
                                <Footer.Link href="#">Tailwind CSS</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Github</Footer.Link>
                                <Footer.Link href="#">Discord</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Privacy Policy</Footer.Link>
                                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="Octoopus™" year={2023} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="https://www.youtube.com/@octoopus-vod" icon={BsYoutube} target={"_blank"} />
                        <Footer.Icon href="#" icon={BsFacebook} />
                        <Footer.Icon href="#" icon={BsInstagram} />
                        <Footer.Icon href="#" icon={BsTwitter} />
                        <Footer.Icon href="https://github.com/MrFaBemol/octoopus" icon={BsGithub} target={"_blank"} />
                    </div>
                </div>
            </div>
        </Footer>
    )
}


