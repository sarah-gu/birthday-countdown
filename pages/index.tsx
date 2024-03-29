import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import "react-datetime/css/react-datetime.css";
const inter = Inter({ subsets: ["latin"] });

const IMAGE_WIDTH = 200;

function pad2Digits(num: number) {
  return num.toString().padStart(2, "0");
}

const calcTimeLeft = () => {
  const date = new Date();
  // const [time, setTime] = useState({hours, minutes, seconds});
  const difference = +new Date(`02/04/2024`) - +date;
  if (difference >= 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
    return {
      days: pad2Digits(days),
      hours: pad2Digits(hours),
      minutes: pad2Digits(minutes),
      seconds: pad2Digits(seconds),
    };
  } else {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }
};

const generateImgLoc = () => {
  if (typeof window === "undefined") {
    return { top: 0, left: 0, src: "/images/1.JPG" };
  }
  const topPre = Math.floor(
    Math.random() * (window?.innerHeight - IMAGE_WIDTH)
  );

  const left = Math.floor(Math.random() * (window?.innerWidth - IMAGE_WIDTH));
  const imgNum = Math.floor(Math.random() * 26 + 1);

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

  const [imgLoc3, setImgLoc3] = useState(generateImgLoc());
  useEffect(() => {
    const updateImg3 = setInterval(() => {
      setImgLoc3(generateImgLoc());
    }, 6000);
    return () => clearInterval(updateImg3);
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

  const [textLoc3, setTextLoc3] = useState(generateImgLoc());
  useEffect(() => {
    const updateText = setInterval(() => {
      setTextLoc3(generateImgLoc());
    }, 4000);
    return () => clearInterval(updateText);
  }, [setTextLoc3]);

  const [textLoc4, setTextLoc4] = useState(generateImgLoc());
  useEffect(() => {
    const updateText = setInterval(() => {
      setTextLoc4(generateImgLoc());
    }, 4000);
    return () => clearInterval(updateText);
  }, [setTextLoc4]);

  return (
    <div className="bg-gradient-to-tr from-fuchsia-500 to-cyan-500 h-screen w-screen flex flex-col flex-grow justify-center relative font-sans">
      <div className="flex flex-col text-[25px] sm:text-[100px] w-screen h-screen items-center justify-center">
        <div className="z-[10000] bg-white p-4 m-4 rounded-lg shadow-lg px-4 sm:px-[75px] w-[200px] sm:w-[470px]">
          <div className="text-[15px] sm:text-[24px] text-slate-600 justify-center align-center h-[25px] sm:h-[30px] w-[250px] sm:w-[400px]  grow-0">
            SARAH&apos;S 22ND BIRTHDAY!!!! 😎
          </div>
          <div className="z-[100] sm:text-[70px]">
            {timeLeft.hours}
            <span className="text-[10px] sm:text-[40px] p-0">H&nbsp;</span>:
            {timeLeft.minutes}
            <span className="text-[20px] sm:text-[40px] p-0">M&nbsp;</span>:
            {timeLeft.seconds}
            <span className="text-[20px] sm:text-[40px] p-0">S&nbsp;</span>
          </div>
        </div>

        <div
          style={{ top: imgLoc.top, left: imgLoc.left }}
          className={`fixed rounded-full animate-fade-in  w-[200px] h-[200px]`}
          key={imgLoc.left}
        >
          <Image
            src={`${imgLoc.src}`}
            className="rounded-full h-24 sm:h-64 w-24 sm:w-64 animate-fade-in"
            layout={"fill"}
            objectFit={"contain"}
            alt="google picture"
          />
        </div>

        <div
          style={{ top: imgLoc2.top, left: imgLoc2.left }}
          className={`fixed rounded-full animate-fade-in w-[200px] h-[200px]`}
          key={imgLoc2.left}
        >
          <Image
            src={`${imgLoc2.src}`}
            className="rounded-full h-24 sm:h-64 w-24 sm:w-64 overflow-clip animate-fade-in "
            layout={"fill"}
            objectFit={"contain"}
            alt="google picture"
          />
        </div>

        <div
          style={{ top: imgLoc3.top, left: imgLoc3.left }}
          className={`fixed rounded-full animate-fade-in w-[200px] h-[200px]`}
          key={imgLoc3.left}
        >
          <Image
            src={`${imgLoc3.src}`}
            className="rounded-full h-24 sm:h-64 w-24 sm:w-64 overflow-clip animate-fade-in "
            layout={"fill"}
            objectFit={"contain"}
            alt="google picture"
          />
        </div>

        <div
          style={{ top: textLoc.top, left: textLoc.left }}
          className={`fixed rounded-lg animate-fade-in w-[600px] h-[200px] text-[15px] sm:text-[30px]`}
          key={textLoc.left}
        >
          🥳
        </div>

        <div
          style={{ top: textLoc2.top, left: textLoc2.left }}
          className={`fixed rounded-lg animate-fade-in w-[600px] h-[200px] text-[15px] sm:text-[30px]`}
          key={textLoc2.left}
        >
          🎉
        </div>
        <div
          style={{ top: textLoc3.top, left: textLoc3.left }}
          className={`fixed rounded-lg animate-fade-in w-[600px] h-[200px] text-[15px] sm:text-[30px]`}
          key={textLoc3.left}
        >
          sarah
        </div>
        <div
          style={{ top: textLoc4.top, left: textLoc4.left }}
          className={`fixed rounded-lg animate-fade-in w-[600px] h-[200px] text-[15px] sm:text-[30px]`}
          key={textLoc4.left}
        >
          bday
        </div>
      </div>
    </div>
  );
}
