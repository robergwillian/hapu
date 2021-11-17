import React, { useState } from "react";
import {api} from '../../services/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NewsLetterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  console.log(name)
  console.log(email)

  async function handleSubscribe(){
      try{
        const response = await api.post('/', {
            "name": name, 
            "email": email
        }).then((result) => {
          result.status === 200 && toast.success("Thank you for subscribing")
        })
      }catch (e) {
        toast.error("Please try again");
      }

      
  }

  return (
    <div>
      <input type="text" name="name" required placeholder="Your name" onChange={(e) => setName(e.target.value)}/>
      <input type="email" name="email" required placeholder="Your email" onChange={(e) => setEmail(e.target.value)}/>
      <input type="button" value="Send" onClick={handleSubscribe}/>
      <ToastContainer />
    </div>
  );
}

export default NewsLetterForm;
