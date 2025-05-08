import React from "react";
import { TypeAnimation } from 'react-type-animation';


const TypeWriteEffect = () => {
    return (
        <TypeAnimation
            sequence={[
                'a UofT Student',
                1000,
                'a Computer Engineer',
                1000
            ]}
            wrapper="span"
            speed={50}
            className="xl:text-[40px] lg:text-[35px] sm:text-[35px] text-[25px] text-white font-bold"
            repeat={Infinity}
        />
    )
}

export default TypeWriteEffect;
