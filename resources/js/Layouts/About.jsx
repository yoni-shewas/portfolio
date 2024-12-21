import { FaEnvelope, FaPhone } from 'react-icons/fa';
export default function About() {
    return (
        <div
            id="about"
            className="flex flex-col items-center p-6 md:flex-row md:items-start"
        >
            <div className="mb-6 md:mb-0 md:w-1/2">
                <img src={''} alt="About Me" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pl-6">
                <h2 className="mb-4 text-5xl font-bold text-blue-400">
                    About Me
                </h2>
                <p className="mb-4 text-gray-300">
                    <section className="pb-1">
                        {' '}
                        Hello! I'm{' '}
                        <section className="inline text-blue-400">
                            Yonatan.
                        </section>
                    </section>
                    I’m a web developer specializing in JavaScript, React,
                    Django, and building user-centric applications. Passionate
                    about solving complex problems and creating intuitive UIs.
                    I’m always exploring new technologies and eager to
                    collaborate on innovative web projects.
                </p>
                <h2 className="mb-4 text-5xl font-bold text-blue-400">
                    Contact
                </h2>
                <p className="mb-4 text-gray-300">
                    <FaEnvelope className="h-5 w-5" /> yonatanmekuriya@gmail.com
                </p>
                <p className="mb-4 text-gray-300">
                    <FaPhone className="h-5 w-5" /> +251 912 345 678
                </p>
            </div>
        </div>
    );
}
