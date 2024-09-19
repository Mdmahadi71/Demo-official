import React, { useState } from 'react';
import Container from '../Components/Container';
import { FaSearch } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const auth = getAuth();
    const db = getDatabase();
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [subject, setSubject] = useState('');
    let [message, setMessage] = useState('');
    let [password, setPassword] = useState('');
    let navigate = useNavigate()

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
                setTimeout(()=>{
                    navigate('/')
                },1000)
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
        <div>
            <Container>
                <div>
                    <h2 className='font-semibold text-[24px] text-black font-bangla'>যোগাযোগ</h2>
                    <div className="lg:flex justify-between">
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
                                        <input type="password" onChange={(e) => setPassword(e.target.value)} className='border-[1px] border-black w-full h-[40px] outline-none' value={password} />
                                    </div>
                                    <button onClick={handleClick} className='py-2 px-3 bg-slate-500 font-medium font-open text-[18px] text-white'>
                                        Send
                                    </button>
                                    <ToastContainer />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[38%]">
                            <div className=" pt-[30px]">
                                <div className=" border-b-[1px] border-gray-400"></div>

                                <div className=" py-[30px] text-center lg:text-start  ">
                                    <input type="text" className=' lg:w-[290px] w-[250px] h-[50px] border-[1px] outline-none border-gray-400 ' name="" id="" />
                                    <button className=' py-[8px] px-[26px] bg-black text-white lg:ml-3'><FaSearch /></button>
                                </div>
                                <div className=" border-b-[1px] border-gray-400 mt-[20px]"></div>
                                <div className="">
                                    <div className=" border-b-[1px] border-gray-400 my-[30px]"></div>
                                </div>
                                <div className=" w-[100px] mx-auto  ">
                                    <div className=" border-[1px] border-gray-400  w-[70px]  text-center rounded-[5px]">
                                        <h2 className=' font-medium text-[16px] text-black  py-2'>5555k</h2>
                                        <div className=" bg-sky-400 h-[30px]  flex justify-center items-center rounded-b-[5px]">
                                            <AiOutlineLike className='text-white' />
                                            <h2 className='font-medium text-[16px] text-white'>Like</h2>
                                        </div>
                                    </div>

                                    <div className=" bg-sky-500 h-[40px] w-[70px] text-center my-[20px] leading-[40px] rounded-[5px]"><h2 className=' font-medium text-[16px] text-white'>Share</h2></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;
