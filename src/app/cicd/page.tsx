"use client";

import { motion } from "framer-motion";

// Beautiful animated CI/CD presentation page
export default function CICDPage() {
  const steps = [
    {
      title: "Code",
      description: "Push your code to the repository and open a pull-request.",
      color: "from-teal-400 to-cyan-500",
    },
    {
      title: "Build & Test",
      description:
        "Automated pipelines build the project and run the full test-suite.",
      color: "from-amber-400 to-orange-500",
    },
    {
      title: "Deploy",
      description: "Artifacts are deployed to production in one click.",
      color: "from-purple-500 to-fuchsia-500",
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] px-4 py-24 text-white">
      {/* Animated background blobs */}
      <motion.div
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-teal-400/30 blur-3xl"
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-pink-400/30 blur-3xl"
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
      />

      {/* Title */}
      <motion.h1
        className="z-10 mb-4 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-center text-4xl font-extrabold text-transparent sm:text-6xl"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Seamless CI / CD Pipeline
      </motion.h1>
      <motion.p
        className="z-10 max-w-2xl text-center text-lg text-slate-200 sm:text-xl"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Automate building, testing and deployment with modern DevOps best
        practices. Ship features faster and with confidence.
      </motion.p>

      {/* Steps */}
      <div className="relative z-10 mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-10 backdrop-blur-md"
            initial={{ y: 40, opacity: 0 }}
            whileHover={{ translate: -6 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
          >
            <div
              className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${step.color}`}>
              <span className="text-lg font-extrabold">{i + 1}</span>
            </div>
            <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
            <p className="text-center text-sm text-slate-300">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
