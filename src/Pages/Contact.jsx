import React, { useState } from 'react';
import Container from '../Components/Container';
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { IoEye } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
import Sharee from '../Components/Sharee';



const Contact = () => {
    const auth = getAuth();
    const db = getDatabase();
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [subject, setSubject] = useState('');
    let [message, setMessage] = useState('');
    let [password, setPassword] = useState('');
    let navigate = useNavigate()
    let [Coneye, setConeye] = useState(false)



    let handleClick = () => {

        if (!name || !email || !password || !subject || !message) {
            toast.error('Please fill in all the fields');
            return;
        }


        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const userId = userCredential.user.uid;
                writeUserData(userId, name, email, subject, message);
                toast.success('Registration successful!');
                setTimeout(() => {
                    navigate('/')
                }, 1000)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage);
                toast.error(`Error: ${errorMessage}`);
            });
    };


    const writeUserData = (userId, name, email, subject, message) => {
        set(ref(db, 'users/' + userId), {
            name: name,
            email: email,
            subject: subject,
            message: message,
        });
    };

    return (
        <div className='py-[20px]'>
            <Container>
                <div>
                    <h2 className='font-semibold text-[24px] text-black font-bangla mx-3 lg:mx-0'>যোগাযোগ</h2>
                    <div className="lg:flex justify-between mx-3 lg:mx-0">


                        <div className="lg:w-[60%] py-4">
                            <div>
                                <h2 className='font-normal text-[16px] text-black py-2  font-bangla'>
                                    রংপুর-বগুড়া মহাসড়কের পীরগঞ্জ উপজেলার বাস স্ট্যান্ড থেকে সোজা পশ্চিমে গেলে শাহ্ আব্দুর রউফ কলেজ নামে পরিচিতি।
                                </h2>
                                <h4 className='font-normal text-[16px] text-black py-1 font-bangla'>উপজেলা পরিষদ রোড, পীরগঞ্জ, রংপুর।</h4>
                                <h4 className='font-normal text-[16px] text-black py-1 font-bangla'>ই-মেইল: sarcpir@yahoo.com</h4>
                                <h4 className='font-normal text-[16px] text-black py-1 font-open'>মোবাইল: +8801717-013948</h4>
                                <div className="lg:w-[60%]">
                                    <div className="py-[20px]">
                                        <h2 className='font-medium font-open text-[18px] text-black'>Your Name (required)</h2>
                                        <input type="text" onChange={(e) => setName(e.target.value)} className='border-[1px] border-black w-full h-[40px] outline-none ' value={name} />
                                    </div>
                                    <div className="py-3">
                                        <h2 className='font-medium text-[18px] text-black font-open'>Your Email (required)</h2>
                                        <input type="email" onChange={(e) => setEmail(e.target.value)} className='border-[1px] border-black w-full h-[40px] outline-none' value={email} />
                                    </div>

                                    <div className="py-3">
                                        <h2 className='font-medium text-[18px] text-black font-open'>Subject</h2>
                                        <input
                                            type="text" onChange={(e) => setSubject(e.target.value)} className='border-[1px] border-black w-full h-[40px] outline-none' value={subject} />
                                    </div>
                                    <div className="py-3">
                                        <h2 className='font-medium text-[18px] text-black font-open'>Your Message</h2>
                                        <textarea onChange={(e) => setMessage(e.target.value)} className='border-[1px] border-black w-full h-[100px] outline-none' value={message} />
                                    </div>
                                    <div className="py-3">
                                        <h2 className='font-medium text-[18px] text-black font-open'>Password (required)</h2>
                                        <div className=" relative">
                                            <input type={Coneye == true ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} className='border-[1px] border-black w-full h-[40px] outline-none' value={password} />
                                            <div onClick={() => setConeye(!Coneye)} className=" absolute top-[10px] right-[15px] text-[20px] ">
                                                {Coneye == true ? <IoEye /> : <FaRegEyeSlash />}

                                            </div>
                                        </div>

                                    </div>
                                    <button onClick={handleClick} className='py-2 px-3 bg-slate-500 font-medium font-open text-[18px] text-white'>
                                        Send
                                    </button>
                                    <ToastContainer />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[38%]">
                            <Sharee/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;
