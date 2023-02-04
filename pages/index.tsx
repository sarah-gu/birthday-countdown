import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import "react-datetime/css/react-datetime.css";
const inter = Inter({ subsets: ["latin"] });

const IMAGE_WIDTH = 275;

function pad2Digits(num: number) {
  return num.toString().padStart(2, "0");
}

const calcTimeLeft = () => {
  const date = new Date();
  // const [time, setTime] = useState({hours, minutes, seconds});
  const difference = +new Date(`02/04/2023`) - +date;

  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);
  return {
    hours: pad2Digits(hours),
    minutes: pad2Digits(minutes),
    seconds: pad2Digits(seconds),
  };
};

const FunImage = () => {
  return (
    <Image
      src="/images/"
      width={IMAGE_WIDTH}
      height="150"
      alt="google picture"
    />
  );
};

const generateImgLoc = () => {
  if (typeof window === "undefined") {
    return { top: 0, left: 0, src: "/images/1.JPG" };
  }
  const topPre = Math.floor(
    Math.random() * (window?.innerHeight - IMAGE_WIDTH)
  );

  const left = Math.floor(Math.random() * (window?.innerWidth - IMAGE_WIDTH));
  const imgNum = Math.floor(Math.random() * 23 + 1);

  var top = topPre;
  if (topPre > 200 && topPre < 400) {
    top = 50;
  }
  if (topPre > 400 && topPre < 600) {
    top = 600;
  }

  return {
    top,
    left,
    src: `/images/${imgNum}.JPG`,
  };
};
export default function Home() {
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calcTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [setTimeLeft]);

  const [imgLoc, setImgLoc] = useState(generateImgLoc());
  useEffect(() => {
    const updateImg = setInterval(() => {
      setImgLoc(generateImgLoc());
    }, 5000);
    return () => clearInterval(updateImg);
  }, [setImgLoc]);

  const [imgLoc2, setImgLoc2] = useState(generateImgLoc());
  useEffect(() => {
    const updateImg2 = setInterval(() => {
      setImgLoc2(generateImgLoc());
    }, 6000);
    return () => clearInterval(updateImg2);
  }, [setImgLoc2]);

  const [textLoc, setTextLoc] = useState(generateImgLoc());
  useEffect(() => {
    const updateText = setInterval(() => {
      setTextLoc(generateImgLoc());
    }, 4000);
    return () => clearInterval(updateText);
  }, [setTextLoc]);

  const [textLoc2, setTextLoc2] = useState(generateImgLoc());
  useEffect(() => {
    const updateText = setInterval(() => {
      setTextLoc2(generateImgLoc());
    }, 4000);
    return () => clearInterval(updateText);
  }, [setTextLoc2]);

  return (
    <div className="bg-gradient-to-r from-cyan-300 to-yellow-100 h-screen w-screen flex flex-col flex-grow justify-center relative font-sans">
      <div className="flex flex-col text-[100px] w-screen h-screen items-center justify-center">
        <div className="z-[10000] bg-white p-4 m-4 rounded-lg shadow-lg px-[75px] w-[675px]">
          <div className="text-[30px] text-slate-600 justify-center align-center h-[50px] w-[500px] grow-0">
            SARAH&apos;S 21ST BIRTHDAY!!!! 😎
          </div>
          <div className="pb-0">
            {timeLeft.hours}
            <span className="text-[40px] p-1">H&nbsp;</span>:{timeLeft.minutes}
            <span className="text-[40px] p-1">M&nbsp;</span>:{timeLeft.seconds}
            <span className="text-[40px] p-1">S&nbsp;</span>
          </div>
        </div>

        <div
          style={{ top: imgLoc.top, left: imgLoc.left }}
          className={`fixed rounded-lg animate-fade-in  w-[300px] h-[300px]`}
          key={imgLoc.left}
        >
          <Image
            src={`${imgLoc.src}`}
            className="rounded-lg animate-fade-in"
            width="275"
            height="150"
            alt="google picture"
          />
        </div>

        <div
          style={{ top: imgLoc2.top, left: imgLoc2.left }}
          className={`fixed rounded-lg animate-fade-in w-[200px] h-[200px]`}
          key={imgLoc2.left}
        >
          <Image
            src={`${imgLoc2.src}`}
            className="rounded-lg overflow-clip animate-fade-in "
            width="275"
            height="150"
            alt="google picture"
          />
        </div>

        <div
          style={{ top: textLoc.top, left: textLoc.left }}
          className={`fixed rounded-lg animate-fade-in w-[600px] h-[200px] text-[40px]`}
          key={textLoc.left}
        >
          🥳
        </div>

        <div
          style={{ top: textLoc2.top, left: textLoc2.left }}
          className={`fixed rounded-lg animate-fade-in w-[600px] h-[200px] text-[40px]`}
          key={textLoc2.left}
        >
          🎉
        </div>
      </div>
    </div>
  );
}
