import Image from "next/image";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";
import Healthcheck from 'public/healthcheck.png'
import Map from '/public/mapview.png'
import LoginImage from '/public/login.png'

export default function Home() {
  return (
    <div>
      <div className="flex items-center gap-20 mx-20 my-10">
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
    How Chikitsalay works
  </div>
</div>

      <div className="flex justify-between items-center">
  <div className="mx-32 text-2xl">On visiting the page,<br/> user can signup or login with google</div>
  <div className="flex-1">
    <Image src={Healthcheck} alt="" className="w-full h-96 object-contain" />
  </div>
</div>
<div className="flex justify-between items-center">
  <div className="flex-1">
    <Image src={Map} alt="" className="w-full h-96 object-contain" />
  </div>
  <div className="mx-32 text-2xl">They can go to their dashboard<br/> and go to health checkup, enter<br/> their symptoms and see the<br/> probable health issues</div>
</div>
<div className="flex justify-between items-center">
  <div className="mx-32 text-2xl">Based on your location<br/> our platform also shows<br/> you nearby health centres<br/> on the map</div>
  <div className="flex-1">
    <Image src={LoginImage} alt="" className="w-full h-96 object-contain" />
  </div>
</div>


    </div>
  );
}
