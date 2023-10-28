import Image from "next/image";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div>
      <div className="flex items-center gap-20 m-20">
        <div className="flex-1 flex flex-col gap-9">
          <h1 className="text-7xl bg-gradient-to-b from-blue-900 via-blue-500 to-white text-transparent bg-clip-text font-bold ">
            Your health checkup at the palm of your hand
          </h1>
          <p className="text-2xl font-light">
            Get your health checked using our Machine Learning model and get to
            know your probable issue
          </p>
          <Button url="/portfolio" text="How do we work" />
        </div>
        <div className="flex-1">
          <Image src={Hero} alt="" className=" w-11/12" />
        </div>
      </div>
      <div className=" h-56 flex flex-col justify-center items-center">
  <div className="text-7xl font-sans font-semibold font-inter">
    How SasthoSathi works
  </div>
</div>

      <div className="flex justify-between items-center">
  <div className="mx-40">Signup or Login<br />to our Platform</div>
  <div className="flex-1">
    <Image src={Hero} alt="" className="w-full h-96 object-contain" />
  </div>
</div>
<div className="flex justify-between items-center">
  <div className="flex-1">
    <Image src={Hero} alt="" className="w-full h-96 object-contain" />
  </div>
  <div className="mx-40">Signup or Login<br />to our Platform</div>
</div>
<div className="flex justify-between items-center">
  <div className="mx-40">Signup or Login<br />to our Platform</div>
  <div className="flex-1">
    <Image src={Hero} alt="" className="w-full h-96 object-contain" />
  </div>
</div>


    </div>
  );
}
