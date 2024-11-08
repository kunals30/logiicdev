import React from "react";
import { motion } from "framer-motion";
import Omni from "../../assets/IOT.avif";

const Iot = () => {
  //Animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible:  {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      }
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div
          className="relative h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundColor: "Black" }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
          {/* Dark overlay */}
          <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-6 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              The Power of IoT: Shaping the Future of Connectivity
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl max-w-3xl"
            >
              The Internet of Things (IoT) is transforming how devices interact,
              offering new levels of connectivity and control. Logiicdev is a
              leader in IoT management, using cloud technologies like AWS to
              enable remote monitoring and control.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-lg"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </div>
      {/* Title Section */}
      {/* <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600">The Power of IoT: Shaping the Future of Connectivity</h1>
        <p className="text-gray-700 mt-2">
          The Internet of Things (IoT) is transforming how devices interact, offering new levels of connectivity and control. Logiicdev is a leader in IoT management, using cloud technologies like AWS to enable remote monitoring and control.
        </p>

      </motion.div> */}

      {/* Section Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Comprehensive IoT Solutions */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Trigger animation when card comes into view
          variants={cardVariants}
          className="bg-white shadow-lg rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold text-blue-600">
            Comprehensive IoT Solutions
          </h2>
          <ul className="mt-4 space-y-2">
            <li>
              <strong>Custom Circuit Boards:</strong> Designed to meet specific
              needs, ensuring optimal performance and reliability.
            </li>
            <li>
              <strong>Firmware and Software Development:</strong> Creating
              robust firmware and software for effective communication and
              control.
            </li>
            <li>
              <strong>Connectivity:</strong> Equipping devices with Wi-Fi,
              Bluetooth, and cellular networks for seamless system integration.
            </li>
          </ul>
        </motion.div>

        {/* Remote Monitoring and Control */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Trigger animation when card comes into view
          variants={cardVariants}
          className="bg-white shadow-lg rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold text-blue-600">
            Remote Monitoring and Control
          </h2>
          <ul className="mt-4 space-y-2">
            <li>
              <strong>AWS IoT Services:</strong> Utilizing AWS for scalable,
              secure cloud-based IoT management.
            </li>
            <li>
              <strong>Cloud Integration:</strong> Enabling global remote
              monitoring and management with real-time data access.
            </li>
            <li>
              <strong>Data Analytics:</strong> Processing and visualizing IoT
              data for actionable insights and optimization.
            </li>
          </ul>
        </motion.div>

        {/* Enhanced Security and Compliance */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Trigger animation when card comes into view
          variants={cardVariants}
          className="bg-white shadow-lg rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold text-blue-600">
            Enhanced Security and Compliance
          </h2>
          <ul className="mt-4 space-y-2">
            <li>
              <strong>Secure Data Transmission:</strong> Ensuring encrypted
              communication using AWS’s security features.
            </li>
            <li>
              <strong>Regulatory Compliance:</strong> Adhering to industry
              standards for data privacy and security.
            </li>
            <li>
              <strong>Regular Updates:</strong> Providing updates to maintain
              system integrity against evolving threats.
            </li>
          </ul>
        </motion.div>

        {/* Scalable and Flexible Architecture */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Trigger animation when card comes into view
          variants={cardVariants}
          className="bg-white shadow-lg rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold text-blue-600">
            Scalable and Flexible Architecture
          </h2>
          <ul className="mt-4 space-y-2">
            <li>
              <strong>Scalability:</strong> AWS services allow Logiicdev to
              offer solutions that grow with business needs.
            </li>
            <li>
              <strong>Flexible Architecture:</strong> Systems can be easily
              adapted to different use cases, ensuring continued relevance.
            </li>
          </ul>
        </motion.div>

        {/* Advanced Testing and Simulation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Trigger animation when card comes into view
          variants={cardVariants}
          className="bg-white shadow-lg rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold text-blue-600">
            Advanced Testing and Simulation
          </h2>
          <ul className="mt-4 space-y-2">
            <li>
              <strong>PINTA AI Test Equipment:</strong> Rigorous testing for
              performance and efficiency.
            </li>
            <li>
              <strong>Simulation Tools:</strong> Modeling and optimizing IoT
              systems before deployment to reduce risks.
            </li>
          </ul>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Trigger animation when card comes into view
          variants={cardVariants}
          className="bg-white shadow-lg rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold text-blue-600">Conclusion</h2>
          <p className="mt-4">
            Logiicdev combines innovative design with cloud technologies to
            deliver robust IoT solutions. Leveraging AWS, they offer secure,
            scalable, and efficient IoT management, driving innovation and
            connectivity in a connected world.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Iot;