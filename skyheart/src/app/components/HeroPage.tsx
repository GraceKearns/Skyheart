"use client"
import { useState } from "react";
import Button from "./Button";
import Cloud from "./Cloud";
import Heading from "./Heading";
import Image from "next/image";

export default function HeroPage() {
    const [isFalling, setIsFalling] = useState(false);
    const cloudCount = 14;
    const cloudSpacing = 80; // pixels between clouds

    const handleButtonClick = () => {
        setIsFalling(true);
        console.log("ee");
    };

    return (
        <div className="">

            <div className={` ${isFalling ? "falling" : ""} absolute h-full w-full overflow-hidden`} style={{ zIndex: 1 }}>
                {Array.from({ length: cloudCount }).map((_, i) => (
                    <Cloud key={i} verticalOffset={i * cloudSpacing} />
                ))}
            </div>
            <div className={`absolute ${isFalling ? "falling" : ""} h-full w-full overflow-hidden`}>
                <div
                    className="absolute -top-5 -left-20 animate-float rotate-180"
                    style={{
                        animation: "float 3s ease-in-out infinite",
                    }}
                >
                    <Image src="/images/cloud.png" width={1000} height={1000} alt="cloud" />
                </div>
                <div
                    className="absolute -top-5 -right-20 animate-float rotate-180"
                    style={{
                        animation: "float 3s ease-in-out infinite",
                    }}
                >
                    <Image src="/images/cloud.png" width={1000} height={1000} alt="cloud" />
                </div>
                <div
                    className="absolute -bottom-5 -left-10 animate-float"
                    style={{
                        animation: "float 3s ease-in-out infinite",
                    }}
                >
                    <Image src="/images/cloud.png" width={1000} height={1000} alt="cloud" />
                </div>
                <div
                    className="absolute -bottom-5 -right-10 animate-float"
                    style={{
                        animation: "float 3s ease-in-out infinite",
                    }}
                >
                    <Image src="/images/cloud.png" width={1000} height={1000} alt="cloud" />
                </div>
            </div>
            <div className="flex relative min-h-screen overflow-hidden flex-col gap-y-2 justify-center items-center">
                <div className={`z-40 space-y-4 ${isFalling ? "falling" : ""}`} style={{ zIndex: 30 }}>
                    <Heading />
                    <div className="text-center">
                        <Button onClick={handleButtonClick} text="Enter the store" />
                    </div>
                </div>

              
            </div>

        </div>

    );
}

