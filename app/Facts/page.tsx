import Link from "next/link";
import Backmenu from "@/components/backmenu";

export default function Facts() {
  return (
    <div>
      <Backmenu />
      <div className=" flex justify-center text-4xl">
        <h1 className=" text-4xl text-indigo-700 pt-6  "> Interesting Facts</h1>
      </div>
      <div className="display flex-row gap-2">
        <p className="text-indigo-700  px-4.5 text-25px] cursor-pointer">
          Join Us on Facebook
        </p>
        <p className="text-indigo-700  px-4.5 text-25px] cursor-pointer">
          Join Us on Instagram
        </p>
        <p className="text-indigo-700 px-4.5 text-25px] cursor-pointer">
          Join Us on Youtube
        </p>
      </div>
    </div>
  );
}
