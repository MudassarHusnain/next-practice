// components/Page.js

import SpinningBorderPattern from "./animatedCircle";
import { Nav } from "./nav";
import Image from "next/image";

const Page = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <div className="h-16 w-full bg-sky-900 px-4 sm:px-6 lg:px-8">
        <Nav />
      </div>

      {/* Hero Section */}
      <div className="flex items-center justify-center h-screen bg-sky-900 text-white text-center px-4">
        <div>
          <h1 className="text-4xl sm:text-7xl">The Password <br /> Manager for <br /> Teams</h1>
          <div className="relative">
            <div className="absolute md:left-64 md:top-6 sm:top:6 sm:left-10">
          <SpinningBorderPattern />
          </div>
          </div>
          <p className="pt-6 text-lg sm:text-2xl">TeamPassword is the fastest, easiest, and most secure way to store <br /> and share team logins and passwords.</p>
          <button className="mt-6 p-3 rounded bg-green-400 text-lg sm:text-2xl">Get Started</button>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex flex-col md:flex-row items-center justify-center relative top-16 px-4">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <Image
            src={"/g2badges.jpg"}
            width={1920}
            height={1080}
            className="w-full"
            alt="Features"
          />
        </div>
        <div className="w-full md:w-1/2 md:ml-16 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl leading-normal">Easy to Use, <br /> Easy to Love</h1>
          <p className="pt-4">In the office or on the go, TeamPassword makes storing <br /> and sharing passwords safely a cinch.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row bg-sky-50 items-center justify-center relative top-28 px-4">
        <div className="w-full md:w-1/2 mb-4 md:mb-0 pt-20">
          <Image
            src={"/teampassword-dashboard.jpg"}
            width={640}
            height={360}
            className="w-full"
            alt="Features"
          />
        </div>
        <div className="w-full md:w-1/2 md:ml-16 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl leading-normal">Ditch the spreadsheet</h1>
          <p className="pt-4 w-5/6">TeamPassword keeps all your logins safe and in-sync, so your team can get the access they need when they need it.</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap gap-4 relative h-auto top-28 bg-sky-50 lg:ps-28 md:ps-20">
        <div className="w-full sm:w-1/6">
          <Image
            src={"/webmechanix-logo.jpg"}
            width={256}
            height={256}
            alt="Example Image"
            className="w-full sm:w-96 sm:ps-20 sm:pt-20 lg:pt-0 md:pt-0 md:h-auto object-contain"
          />
        </div>
        <div className="w-full sm:w-1/6">
          <Image
            src={"/integrity-logo.jpg"}
            width={128}
            height={128}
            alt="Example Image"
            className="sm:w-96 md:ps-20 w-full h-auto object-contain"
          />
        </div>
        <div className="w-full sm:w-1/6">
          <Image
            src={"/praxent-logo.87a8dbb6.svg"}
            width={200} // Adjust as needed
            height={200} // Adjust as needed
            alt="Example Image"
            className="w-full md:ps-20 h-auto object-contain"
          />
        </div>
        <div className="w-full sm:w-1/6">
          <Image
            src=""
            width={200} // Adjust as needed
            height={200} // Adjust as needed
            alt="Example Image"
            className="sm:w-96 md:ps-20 w-full h-auto object-contain"
          />
        </div>
        <div className="w-full sm:w-1/6">
          <Image
            src={"/firstup-logo.db31916c.svg"}
            width={256}
            height={256}
            alt="Example Image"
            className="sm:w-96 md:ps-20 w-full h-auto object-contain"
          />
        </div>
      </div>

      <div className="flex flex-row text-black relative top-44">
        <h1 className="text-cyan-900 font-bold text-4xl font-serif absolute left-10">Your Team, Secure and In Sync</h1>
      </div>

      <div className="flex flex-col md:flex-row relative top-56">
        <div className="w-1/3 bg-cyan-900 h-96 m-5">
          <div className="">
            <Image
              src={"/infinite-logo.jpg"}
              width={96}
              height={96}
              className="absolute top-16 left-16"
              alt=""
            />
            <p className="pt-52 text-white">Everybody hates being locked out. With our shared password manager, your team&apos;s apps and tools are accessible anywhere, keeping your projects moving.</p>
          </div>
        </div>
        <div className="w-1/3 bg-cyan-950 h-96 m-5">
          <div className="">
            <Image
              src="https://teampassword.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdevices-icon.83037bcf.png&w=96&q=75"
              width={96}
              height={96}
              alt=""
            />
          </div>
          <p></p>
        </div>
        <div className="w-1/3 bg-cyan-500 h-96 m-5">
          <div className="">
            <Image
              src="https://teampassword.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdevices-icon.83037bcf.png&w=96&q=75"
              width={96}
              height={96}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="flex justify-center items-center w-full flex-1 px-20 text-center">
          <SpinningBorderPattern />
        </div>
      </div>
      <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">Hello World</h1>
      <div className="flex justify-end">
        <div>1</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
      </div>
    </div>
  );
};

export default Page;
