import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const MySocials = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://https://www.linkedin.com/in/mthobisi-motimele-4499032a1/',
            style: 'rounded-tl-md lg:rounded-tr-md',
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/Mthobisi-8',
        },
        {
            id: 3,
            child: (
                <>
                    E-Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'motimelemthobisi@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/Mthobisi.docx',
            style: 'rounded-bl-md lg:rounded-br-md',
            download: true,
        },
    ];

    return (
        <div>
            {/* For larger screens */}
            <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
                <ul>
                    {links.map(({ id, child, href, style, download }) => (
                        <li
                            key={id}
                            className={
                                'flex justify-between items-center w-40 h-14 px-6 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' +
                                ' ' +
                                style
                            }
                        >
                            <a
                                href={href}
                                className="flex justify-between items-center w-full text-white"
                                download={download}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {child}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* For mobile screens */}
            <div className="flex lg:hidden fixed bottom-0 left-0 w-full bg-gray-800 text-white">
                <ul className="flex justify-around w-full">
                    {links.map(({ id, child, href, download }) => (
                        <li key={id} className="w-full h-14 flex items-center justify-center">
                            <a
                                href={href}
                                className="flex flex-col items-center justify-center text-sm"
                                download={download}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {child}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MySocials;
