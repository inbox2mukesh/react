import react from "react";
import { useForm } from 'react-hook-form';


function ContactUs() {
   
  
  const FORM_ENDPOINT = "https://herotofu.com/start";
   const additionalData = {
     sent: new Date().toISOString(),
   };
   const {
      register,
      handleSubmit,
      formState: { errors },
  } = useForm(
   additionalData
  );
 
   /*const { handleSubmit, status, message } = useForm({
     additionalData,
   });*/
  return (
<div className="App">
<div className="contact_section contact_main">
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-6 padding_0">
                  <div className="contact_bg">
                     <div className="input_main">
                        <div className="container">
                           <h2 className="request_text">REQUEST A CALL BACK</h2>
                           <form onSubmit={handleSubmit} method="post" action={FORM_ENDPOINT}>
                              <div className="form-group">
                              <input type="text" className="email-bt" placeholder="Your Name" name = "firstName" id="firstName" {...register("firstName", {
                              required: "Name is required" })}/>
                              {errors.firstName?.message && (
                              <small>{errors.firstName.message}</small>
                              )}
                              </div>
                              <div className="form-group">
                              <input type="text" className="email-bt" placeholder="Your Email" name="email"
                              id="email"
                              {...register("email", {
                              required: "Email is required",
                              validate: {
                              maxLength: (v) =>
                              v.length <= 50 || "The email should have at most 50 characters",
                              matchPattern: (v) =>
                              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                              "Email address must be a valid address",
                              },
                              })}/>

                              {errors.email?.message && (
                              <small>{errors.email.message}</small>
                              )}
                              </div>
                              <div className="form-group">
                                 <input type="text" className="email-bt" placeholder="Phone" name="phone" id="phone" {...register('phone')}/>
                              </div>
                              <div className="form-group">
                                 <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="comment" {...register('comment')}></textarea>
                              </div>
                              <div className="send_bt"><button type="submit">Submit</button></div>
                           </form>
                        </div>
                     </div>
                    
                  </div>
               </div>
               <div className="col-md-6 padding_0">
                  <div className="map-responsive">
                     <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width="600" height="450" frameborder="0" allowfullscreen></iframe>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </div>
      );
}

export default ContactUs;
     