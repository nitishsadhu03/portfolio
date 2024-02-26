import { Download, GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const Hero = () => {

  const [text] = useTypewriter({
    words: ['Web Development', 'Frontend Development', 'Problem Solving'],
    loop: 0
  })

  return (
    <section className="flex flex-col lg:flex-row justify-evenly items-center lg:mx-24 lg:my-10 lg:mt-28">
        <div className="flex flex-col gap-6 items-center lg:items-start justify-center">
            <h1 className="text-3xl lg:text-6xl font-bold text-secondary">Hi There,</h1>
            <h1 className="text-3xl lg:text-6xl font-bold text-secondary">I am Nitish <span className="text-primary">Sadhu</span></h1>
            <p className="text-xl lg:text-3xl font-semibold text-secondary">I Am Into <span className="text-primary">{text}</span><Cursor cursorColor='red' /></p>
            <Link to="/assets/resume.pdf" target="_blank">
            <button className="flex gap-2 items-center text-lg lg:text-xl font-bold px-3 lg:px-6 py-1 lg:py-2 bg-primary rounded-3xl text-secondary shadow-xl shadow-zinc-500 hover:bg-secondary hover:text-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <p className="cursor-pointer">Resume</p>
              <Download/>
            </button>
            </Link>
            <div className="flex gap-5 justify-center items-center">
            <ul className="flex gap-4">
                    <Link to="https://www.linkedin.com/in/nitish-sadhu-752771233/" target="_blank"><li className="border-2 px-3 py-3 rounded-full bg-secondary text-primary hover:bg-primary hover:text-secondary"><LinkedinIcon/></li></Link>
                    <Link to="https://github.com/nitishsadhu03" target="_blank"><li className="border-2 px-3 py-3 rounded-full bg-secondary text-primary hover:bg-primary hover:text-secondary"><GithubIcon/></li></Link>
                    <Link to="https://twitter.com/NitishSadhu2003" target="_blank"><li className="border-2 px-3 py-3 rounded-full bg-secondary text-primary hover:bg-primary hover:text-secondary"><TwitterIcon/></li></Link>
                    <Link to="https://www.instagram.com/n.i.t_i.s.h/" target="_blank"><li className="border-2 px-3 py-3 rounded-full bg-secondary text-primary hover:bg-primary hover:text-secondary"><InstagramIcon/></li></Link>
                </ul>
            </div>
        </div>
        <div className="my-8 lg:my-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <img src="/assets/profile-pic.png" className="h-52 lg:h-96"/>
        </div>
    </section>
  )
}

export default Hero