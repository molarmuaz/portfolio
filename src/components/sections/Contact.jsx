import { Reveal } from "../Reveal";
import emailjs from "emailjs-com";
import React, { useState } from "react";


export const Contact = () => {

    const[formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });


    const submitted = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_API_KEY)
            .then((result)=>{
                alert("Message sent successfully!")
                setFormData({name: "", email: "", message: ""})
        }).catch(()=>{alert("Message not sent!")})
    }
    return (
        <section className="min-h-screen flex items-center justify-center py-20" id="contact">
            <Reveal>
                <div className = "px-4 w-150">
                    <h2 className = "text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-400 bg-clip-text text-transparent text-center">
                        Get in Touch 
                    </h2>
                    <form className = "space-y-6" onSubmit={submitted} >
                        <div className = "relative">
                            <input value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})} type = "text" id = "name" name = "name" required placeholder="Name" className = "w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-non focus:border-indigo-500 focus:bg-indigo-500/5 "/>
                        </div>

                        <div className = "relative">
                            <input value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})} type = "email" id = "email" name = "email" required placeholder="Email" className = "w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-non focus:border-indigo-500 focus:bg-indigo-500/5 "/>
                        </div>

                        <div className = "relative">
                            <textarea value={formData.message} onChange={(e)=>setFormData({...formData, message: e.target.value})} id = "message" name = "message" required rows = {5} placeholder="Message" className = "w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-non focus:border-indigo-500 focus:bg-indigo-500/5 "/>
                        </div>

                        <button type = "submit" className = "w-full bg-gradient-to-r from-purple-400 to-indigo-600 text-white font-medium py-3 px-6 rounded hover:from-purple-500 to-indigo-700 transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">Submit</button>
                    </form>
                </div>
            </Reveal>
        </section>
    )

}