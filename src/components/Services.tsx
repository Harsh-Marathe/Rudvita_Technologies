
import { motion } from "framer-motion";

const Services = () => {
    return (
        <section className="services-page" id="services">
            <h2>Our Services</h2>
            <p className="services-desc">
                At Rudvita Technologies, we offer complete website solutions – from
                development to long-term maintenance – ensuring your digital presence
                stays strong and secure.
            </p>

            {/* CARD 1 */}
            <motion.div
                className="service-box"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >

                <div className="service-content">
                    <img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" />
                    <div>
                        <h3>Website Development</h3>
                        <p>
                            We design and develop responsive, fast, and user-friendly websites
                            tailored to your business needs.
                        </p>
                        <ul>
                            <li>Business & corporate websites</li>
                            <li>Portfolio websites</li>
                            <li>Landing pages</li>
                            <li>Mobile-responsive design</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
                className="service-box"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >

                <div className="service-content">
                    <img src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png" />
                    <div>
                        <h3>Website Maintenance & Support</h3>
                        <p>
                            We ensure your website runs smoothly, stays secure, and remains
                            updated at all times.
                        </p>
                        <ul>
                            <li>Regular updates & backups</li>
                            <li>Bug fixes</li>
                            <li>Performance optimization</li>
                            <li>Technical support</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
                className="service-box"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >

                <div className="service-content">
                    <img src="https://cdn-icons-png.flaticon.com/512/2885/2885417.png" />
                    <div>
                        <h3>Hosting & Deployment Support</h3>
                        <p>
                            We help you deploy and manage your website efficiently with
                            optimized hosting solutions.
                        </p>
                        <ul>
                            <li>Domain & hosting guidance</li>
                            <li>Server setup</li>
                            <li>Website deployment</li>
                            <li>Performance optimization</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* CARD 4 */}
            <motion.div
                className="service-box"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >

                <div className="service-content">
                    <img src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png" />
                    <div>
                        <h3>UI / UX Design</h3>
                        <p>
                            We create clean and intuitive user interfaces that enhance user
                            experience and engagement.
                        </p>
                        <ul>
                            <li>User-centered design</li>
                            <li>Wireframes & prototypes</li>
                            <li>Modern UI layouts</li>
                            <li>Improved usability</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* CARD 5 */}
            <motion.div
                className="service-box"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >

                <div className="service-content" >
                    <img src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png" />
                    <div className="mini-card2">

                        <h3>Website Redesign & Upgrades</h3>
                        <p>
                            Already have a website? We redesign and upgrade existing websites
                            to match modern standards.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Services;


