import { CardHoverEffectDemo } from "../ui/card"
import Image from "next/image"
import Footer from "./footer"
import Navbar from "./navbar"
import Link from "next/link"
const HeroSection = () => {
  return (
    <div className="bg-white dark:bg-black">
      <Navbar />
      <div className="min-h-screen bg-white dark:bg-black" style={{ marginLeft: "350px", marginRight: "350px" }}>
        <section className="flex items-center justify-center text-black dark:text-white px-6 py-12">
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 mt-12">
              <h1 className="text-4xl md:text-5xl sm:text-3xl lg:text-6xl font-bold leading-tight">Phoenix</h1>
              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Full Stack Developer passionate about building scalable web applications and delightful user
                experiences.
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed max-w-lg">
                Hi, I'm Phoenix! I love turning ideas into reality with code. Whether it's crafting robust backends or
                sleek frontends, I enjoy solving problems and learning new technologies. Let's build something amazing
                together!
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src="/phoenix2.jpg"
                alt="Phoenix"
                width={300}
                height={300}
                className="rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </section>

        <section className="px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white leading-tight">
                Check Out My Latest Work
              </h2>
              <div className="w-full">
                <CardHoverEffectDemo />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='max-w-6xl  mb-6 bg-zinc-300 dark:bg-zinc-900 text-black dark:text-white rounded-xl shadow-lg py-8 text-center'>
            <h1 className='text-2xl md:text-3xl font-bold leading-tight'>Let's create Something meaningful-work that stand out</h1>
            <p className='text-gray-400 mt-2 text-sm md:text-base'>Freelance, full-time, or just vibing with an idea - I&apos;m all ears.</p>
            <div className="mt-4 text-sm md:text-base text-gray-300 flex justify-center items-center gap-2" >
              <span>👉</span>
              <Link href={"mailto:youremail.com"} className="hover:underline underline-offset-4 text-white font-medium">
                Email me
              </Link>
              <span>or</span>
              <Link
                href="https://twitter.com/dhruvtripathi77"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4 text-white font-medium"
              >          Connect on Twitter
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  )
}

export default HeroSection
