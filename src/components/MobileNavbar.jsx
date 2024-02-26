import {
  CircleUserRound,
  Code2,
  Contact2,
  GraduationCap,
  Home,
  MonitorCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
  return (
    <section className="lg:hidden sticky bottom-0 bg-white z-10 flex justify-evenly items-center py-4 px-1 border-t border-zinc-200">
      <Link to="#home">
        <Home strokeWidth={3} className="text-secondary hover:text-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
      </Link>
      <Link to="#about">
        <CircleUserRound
          strokeWidth={3}
          className="text-secondary hover:text-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        />
      </Link>
      <Link to="#skills">
        <MonitorCheck
          strokeWidth={3}
          className="text-secondary hover:text-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        />
      </Link>
      <Link to="#education">
        <GraduationCap
          strokeWidth={3}
          className="text-secondary hover:text-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        />
      </Link>
      <Link to="#projects">
        <Code2 strokeWidth={3} className="text-secondary hover:text-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
      </Link>
      <Link to="#contact">
        <Contact2
          strokeWidth={3}
          className="text-secondary hover:text-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        />
      </Link>
    </section>
  );
};

export default MobileNavbar;
