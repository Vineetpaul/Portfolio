import { motion } from "framer-motion";
import Pic from '../assets/pic-web.webp'
import {
  FiDownload,
  FiArrowRight,
  FiCode,
  FiDatabase,
  FiServer,
  FiGlobe,
  FiMonitor,
} from "react-icons/fi";

// ======================
// Skills Data
// ======================
const skills = [
  { name: "React", icon: <FiCode />, percentage: 72 },
  { name: "JavaScript", icon: <FiCode />, percentage: 75 },
  { name: "Node.js", icon: <FiServer />, percentage: 68 },
  { name: "Express", icon: <FiServer />, percentage: 70 },
  { name: "MongoDB", icon: <FiDatabase />, percentage: 65 },
  { name: "Tailwind CSS", icon: <FiMonitor />, percentage: 80 },
];

// ======================
// Stats
// ======================
const stats = [
  { title: "Fresher", value: "Open to Work" },
  { title: "Projects", value: "5+" },
];

// ======================
// Services
// ======================
const services = [
  {
    title: "Full-Stack Development",
    description:
      "Building responsive and scalable web applications using React, Node.js, Express and MongoDB.",
    icon: <FiGlobe size={28} />,
  },
  {
    title: "Web Deployment / MERN ",
    description:
      "Deploying applications on Vercel and Render with optimized performance and production-ready setup.",
    icon: <FiServer size={28} />,
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black py-28 px-6"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/30 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* ================= LEFT CONTENT ================= */}
          <div>
            <p className="uppercase tracking-[0.3rem] text-sm text-violet-500 font-semibold mb-4">
              About Me
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-gray-100 to-violet-400 bg-clip-text text-transparent">
              Crafting Digital
              <br />
              Experiences That Matter
            </h2>

            <p className="mt-8 text-purple-200 leading-8 text-lg">
              I'm a passionate Full-Stack Developer who enjoys transforming
              creative ideas into modern, responsive and high-performance web
              applications. I love solving real-world problems through clean
              code and intuitive user experiences.
            </p>

            <p className="mt-6 text-purple-300/60 leading-8">
              My journey started with curiosity and has evolved into building
              full-stack applications using React, Node.js, Express and
              MongoDB. Every project helps me improve my skills while creating
              products that users genuinely enjoy using.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <motion.a
                href="/resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 text-white font-semibold shadow-lg hover:shadow-violet-700/30 transition-all"
              >
                <FiDownload />
                Download CV
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-3 rounded-xl border border-violet-700 text-gray-200 hover:bg-violet-900/20 transition-all"
              >
                View Projects
                <FiArrowRight />
              </motion.a>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl hover:border-violet-600 transition-all duration-300">
              <div className="flex items-center gap-5">
                <img
                  src={Pic}
                  alt="Vineet"
                  className="h-24 w-24 rounded-2xl object-cover border-2 border-violet-600"
                />

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Vineet 
                  </h3>
                  <p className="mt-1 text-gray-400">Full-Stack Developer/ MERN-Stack</p>

                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-violet-600/15 px-4 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-sm text-green-300 font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">
              {stats.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:-translate-y-1 hover:border-violet-600 transition-all duration-300"
                >
                  <h4 className="text-3xl font-bold text-violet-400">
                    {item.value}
                  </h4>
                  <p className="mt-2 text-gray-400">{item.title}</p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 hover:border-violet-600 transition-all duration-300">
              <div className="flex items-center gap-2 mb-6">
                <FiCode className="text-violet-500" />
                <h3 className="text-xl font-semibold text-white">
                  Technical Skills
                </h3>
              </div>

              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-300">
                        <span className="text-violet-400">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {skill.percentage}%
                      </span>
                    </div>

                    <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        style={{ width: `${skill.percentage}%` }}
                        className="h-full rounded-full bg-gradient-to-r from-violet-600 to-purple-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= SERVICES ================= */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-100 to-violet-400 bg-clip-text text-transparent">
              What I Can Do
            </h2>
            <p className="mt-4 text-purple-200 max-w-2xl mx-auto">
              Building modern, scalable and responsive web applications from
              frontend to backend.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-600 hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-violet-600/10 text-violet-400 mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-8">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;