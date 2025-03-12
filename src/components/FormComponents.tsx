"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const FormComponents = () => {
  const [error, setError] = useState<string[]>([]);
  const [success, setSuccess] = useState<boolean>(false);
  const fullname = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const phone = useRef<HTMLInputElement | null>(null);
  const message = useRef<HTMLTextAreaElement | null>(null);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const data = {
        fullname: fullname.current?.value || "",
        email: email.current?.value || "",
        phone: phone.current?.value || "",
        message: message.current?.value || "",
    };

    console.log("🚀 Form Data Sent:", data); // ✅ Debug Log

    const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);
};


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#0a0a0a] p-10 rounded-xl shadow-lg border border-purple-500 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-400">Join the Waitlist</h2>
        <form onSubmit={submitHandler} className="space-y-4">
          <input
            ref={fullname}
            className="w-full px-4 py-2 rounded-lg bg-[#121212] border border-purple-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
            type="text"
            placeholder="Full Name"
          />
          <input
            ref={email}
            className="w-full px-4 py-2 rounded-lg bg-[#121212] border border-purple-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
            type="email"
            placeholder="Email Address"
          />
          <input
            ref={phone}
            className="w-full px-4 py-2 rounded-lg bg-[#121212] border border-purple-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
            type="text"
            placeholder="Phone Number"
          />
          <textarea
            ref={message}
            className="w-full px-4 py-2 rounded-lg bg-[#121212] border border-purple-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
            rows={4}
            placeholder="Your Message"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-bold text-lg"
            type="submit"
          >
            Submit
          </motion.button>
        </form>
        <div className=''>
                   {
                    error && error.length > 0 ? error.map((item)=>{
                        return <div key={item} className="text-lg text-red-700 mt-2 p-3">{item}</div>
                    }): ''
                   }
                   {
                    success ? <div className='bg-white text-green-700'>{success}</div> : ''
                   }
        </div>
      </motion.div>
    </div>
  );
};

export default FormComponents;
