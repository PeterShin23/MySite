import * as React from 'react';
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { Colors } from '../../utils/colors';
import { minContainerWidth } from '../../constants/constants';

export const ContactContainer = (props) => {
    const { id, containerHeight } = props;

    const [isButtonHover, setIsButtonHover] = React.useState(false);
    const [isSending, setIsSending] = React.useState(false);

    const [formValues, setFormValues] = React.useState({
        name: "",
        email: "",
        content: "",
        test: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValues({ ...formValues, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let checkErrorState = Object.entries(formValues).reduce((acc, curr) => {
            const field = curr[0];
            const value = curr[1];

            if (!value) acc.push(field);

            return acc;
        }, [])

        if (!checkErrorState.includes("test")) {
            alert("Something went wrong while sending your email. Sorry!");

            return; // Checking for hidden field submission
        }
        checkErrorState = checkErrorState.filter(field => field !== "test");

        if (checkErrorState.length > 0) {
            alert("It seems like you're missing a field or two...");

            return;
        }
        setIsSending(true);

        emailjs.send(
            "service_fffef9i",
            "template_h6r3828",
            {
                from_name: formValues.name,
                to_name: "Peter Shin",
                from_email: formValues.email,
                to_email: "psshin.code@gmail.com",
                message: formValues.content,
            },
            "DWiwGdWs7jqmOh2lJ"
        ).then(() => {
            setIsSending(false);

            alert("Your form is sent!")

            setFormValues({ name: "", email: "", content: ""})
        }, (error) => {
            setIsSending(false);

            console.log(error);

            alert("Something went wrong while sending your email. Sorry!")
        })
    };

    return (
        <div
            id={id}
            className="container flex flex-row max-w-full"
            style={{
                backgroundColor: Colors.EnglishViolet,
                minWidth: minContainerWidth,
                minHeight: containerHeight,
            }}
        >
            <div className="flex flex-col w-3/5">
                <div className="flex flex-row px-20 pt-10">
                    <div className="text-7xl font-bold font-sans text-slate-300">Get in contact!</div>
                </div>
                <div className="flex flex-col px-20 py-10 h-full justify-center">
                    <label className="flex flex-col mb-8">
                        <span className="text-white font-medium text-sm ml-2 mb-2">Your Name</span>
                        <input 
                            type="text"
                            name="name"
                            value={formValues.name}
                            onChange={handleChange}
                            placeholder="Tell me your name!"
                            className="py-4 px-4 rounded-lg font-medium"
                            style={{ 
                                color: Colors.EnglishViolet,
                                backgroundColor: Colors.EnglishVioletLight,
                                outline: "none"
                            }}
                        />
                    </label>
                    <label className="flex flex-col mb-8">
                        <span className="text-white font-medium text-sm ml-2 mb-2">Your Email</span>
                        <input 
                            type="text"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className="py-4 px-4 rounded-lg font-medium"
                            style={{ 
                                color: Colors.EnglishViolet,
                                backgroundColor: Colors.EnglishVioletLight,
                                outline: "none"
                            }}
                        />
                    </label>
                    <label className="flex flex-col mb-8">
                        <span className="text-white font-medium text-sm ml-2 mb-2">Your Message to Me</span>
                        <textarea 
                            type="text"
                            name="content"
                            value={formValues.content}
                            onChange={handleChange}
                            placeholder="Tell or ask me something!"
                            className="py-4 px-4 rounded-lg font-medium"
                            style={{ 
                                color: Colors.EnglishViolet,
                                backgroundColor: Colors.EnglishVioletLight,
                                outline: "none"
                            }}
                        />
                        
                    </label>
                    {/* TEST FIELD */}
                    <label className="hidden flex flex-col mb-8">
                        <span className="text-white font-medium text-sm ml-2 mb-2">Your Secret Message to Me</span>
                        <textarea 
                            type="text"
                            name="test"
                            value={formValues.test}
                            onChange={handleChange}
                            placeholder="Tell me something."
                            className="py-4 px-4 rounded-lg font-medium"
                            style={{ 
                                color: Colors.EnglishViolet,
                                backgroundColor: Colors.EnglishVioletLight,
                                outline: "none"
                            }}
                        />
                        
                    </label>
                    <div className="flex justify-center -ml-12 mt-12">
                    <button 
                        className="flex items-center justify-center px-2 py-2 text-white text-sm rounded-xl"
                        style={{ 
                            borderColor: Colors.EnglishVioletLight, 
                            borderWidth: 2,
                            backgroundColor: isButtonHover ? Colors.EnglishVioletLight : undefined,
                            color: isButtonHover ? Colors.EnglishViolet : "white",
                            width: isSending ? "5rem" : "4rem"
                        }}
                        onMouseEnter={() => setIsButtonHover(true)}
                        onMouseLeave={() => setIsButtonHover(false)}
                        onClick={handleSubmit}
                    >{isSending ? "Sending..." : "Send"}</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-2/5 justify-center items-center">
                <header className="text-slate-300 text-3xl font-bold">Hmmm...</header>
                &nbsp;
                <p className="text-slate-300 text-xl font-bold">It feels a little empty here, doesn't it?</p>
                <p className="text-slate-300 text-xl font-bold">What should I put here?</p>
                <p className="text-slate-300 text-xl font-bold">Send me a recommendation!</p>
            </div>
        </div>
    )
}
