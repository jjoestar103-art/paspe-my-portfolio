import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-[var(--cream)] pt-20 pb-20 md:pb-28 lg:pb-32"
    >
      <div className="absolute top-0 right-0 opacity-[0.04] pointer-events-none select-none leading-none">
        <span
          className="text-[28rem] font-black text-[var(--red)]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Paspe
        </span>
      </div>

      <div className="absolute left-0 top-1/3 w-1 h-48 bg-[var(--red)] hidden lg:block" />

      <div className="page-container grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="flex flex-col gap-10 animate-fade-in-up">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--red)] mb-2">
              Basic Web Developer
            </p>
            <h1
              className="text-7xl lg:text-[5.5rem] font-black leading-[0.92] text-[var(--text-dark)]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Hi, I am
              <br />
              <span className="italic text-[var(--red)]">Samuel Josh Paspe</span>
            </h1>
          </div>

          <p className="text-lg text-[var(--text-muted)] leading-relaxed max-w-sm animate-fade-in-up animate-delay-200">
            Building clean, functional websites with HTML, CSS, JavaScript, and modern frameworks. 
            Focused on responsive design and user‑friendly interfaces.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-300">
            <a href="#projects" className="group">
              <Button variant="primary" showArrow className="group min-w-[12rem]">
                View Projects
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="min-w-[12rem]">
                Contact Me
              </Button>
            </a>
          </div>
        </div>

        <div className="relative hidden md:block animate-fade-in-up animate-delay-200">
          <div className="relative h-[580px] w-full">
            <Image
              src="https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/476548146_1693732491493875_939567071371410695_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=53a332&_nc_ohc=_Pt5s7d-sYkQ7kNvwHA_Z-5&_nc_oc=AdpOVmPDfOb4glx6VLOhiS3VxO_9Z47fv52JTI5yVJhSgzT8XwCYmGk86mDZXCB21RM&_nc_zt=23&_nc_ht=scontent.fceb2-1.fna&_nc_gid=S-jN7o4fqwmWQK6Cb9x7fw&_nc_ss=7b2a8&oh=00_Af4C3Y0y7w7ftmBfe3_q-92Mx_0QCDNfXY9BcILOkYPUYA&oe=69FAADF0"
              alt="Profile photo"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute -bottom-5 -right-5 w-full h-full border-[5px] border-[var(--yellow-bg)] -z-10 pointer-events-none" />
            <div className="absolute -top-3 -left-3 w-12 h-12 bg-[var(--red)] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}