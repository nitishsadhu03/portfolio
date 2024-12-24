import { CircleUserRound } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="flex flex-col justify-center items-center my-20 lg:my-6 mx-4 gap-8 lg:gap-20 h-full
     lg:h-screen">
      <div className="flex gap-3 items-center">
        <CircleUserRound size={50} className="text-primary" />
        <h1 className="text-3xl lg:text-5xl font-bold text-secondary">About Me</h1>
      </div>
      <div className="flex flex-col gap-y-10 lg:flex-row justify-evenly items-center">
        <div className="w-[45%] flex justify-center">
          <img src="/assets/pfp.jpg" className="h-56 lg:h-96 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
        </div>
        <div className="flex flex-col items-center lg:items-start lg:w-[40%] gap-2">
          <h1 className="text-xl lg:text-3xl font-semibold">I&apos;m Nitish Sadhu</h1>
          <p className="text-lg lg:text-2xl font-semibold">Frontend Developer 🧑🏽‍💻</p>
          <p className="break-normal my-5 text-xs lg:text-lg">
          Passionate about web development, I&apos;m on a journey to craft experiences that truly connect with people. I love exploring new trends and techniques, always pushing the boundaries of what&apos;s possible. For me, it&apos;s about more than just code, it&apos;s about creating something meaningful that makes a difference in people&apos;s lives.
          </p>
          <p className="text-md lg:text-lg"><span className="text-primary font-semibold">Location: </span>Asansol, West Bengal, 713303</p>
          <p className="text-md lg:text-lg"><span className="text-primary font-semibold">Email: </span>nitishsadhu03@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default About;
