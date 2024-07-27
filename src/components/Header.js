import { useState,useEffect } from 'react';
import './Header.css';

export default function Header({authenticated}){
    const [isSolid, setIsSolid] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            // Get the position of the Featured component
            const featuredElement = document.querySelector('.featured');
            if (featuredElement) {
                const featuredPosition = featuredElement.getBoundingClientRect().top;
                // Check if the scroll position is past the Featured component
                if (window.scrollY > featuredPosition + window.innerHeight) {
                    setIsSolid(true);
                } else {
                    setIsSolid(false);
                }
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return(
        <div className={`dm-sans header ${isSolid?'bg-black':'bg-transparent'} mb-4 text-white  py-4 px-2 flex flex-row justify-between align-middle top-0 fixed w-full`}>
            <div>
                <span className="text-2xl px-2">Netflix Testing</span>
                <span className="mx-8">{authenticated && authenticated.is?'Home':'Welcome !'}</span>
            </div>
            <div>
                
                    {authenticated && authenticated.is?authenticated.username:(
                        <span className="cursor-pointer align-middle my-2 px-2">Login</span>
                    )}
                
                
            </div>
            
        </div>
    )
}