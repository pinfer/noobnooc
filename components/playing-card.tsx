import Card from "./card";
import Image from "next/image";
import { CameraIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import {
  Blender,
  Github,
  Instagram,
  Javascript,
  ReactJs,
  Sketch,
  Swift,
  Twitter,
  Typescript,
} from "@icons-pack/react-simple-icons";

export default function PlayingCard() {
  return (
    <Card className="flex flex-col justify-between px-6">
      <h1 className="mb-2 text-lg">在玩什么</h1>
      <div className="my-3 flex space-x-4">
        <Typescript className="h-7 w-7 hover:text-[#3178C6]" />
        <ReactJs className="h-7 w-7 hover:text-[#61DAFB]" />
        <Swift className="h-7 w-7 hover:text-[#F05138]" />
        <Sketch className="h-7 w-7 hover:text-[#F7B500]" />
        <Blender className="h-7 w-7 hover:text-[#F5792A]" />
        <CameraIcon className="h-7 w-7" />
      </div>
    </Card>
  );
}