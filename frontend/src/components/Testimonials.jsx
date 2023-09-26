import Testimonial from "./Testimonial";
import wai from "../assets/wai.jpg";
import lulu from "../assets/lulu.jpg";
import cindy from "../assets/cindy.jpg";
import donald from "../assets/donald.jpg"

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials-section">
        <span>TESTIMONIALS</span>
        <div className="testimonial-container">
            <Testimonial 
                text={"Kevin explained the workouts concisely and individualized his coaching style to everyone's fitness goals and levels. Throughout the class, Kevin continuously motivated us, which made it an overall fun and upbeat class. The studio is extremely clean and organized with a variety of cables, racks, dumbbells and kettlebells of varying weights as well as cardio equipment. I would highly recommend anyone of any fitness level to try out his various small group training options or to seek his expertise in advancing their fitness and nutritional goals."}
                name={"Wai W."}
                date={"Feb 22, 2023"}
                user={wai}
            />
            <Testimonial 
                text={"Kevin was a great instructor! He thoroughly explained all the warm-ups and the workouts. He encouraged us throughout the class and corrected our forms, when necessary. Not only was the class informative, but it was so much fun! All the equipment was well-cleaned and kept. It was a studio that felt intimate and not as intimidating. Did I mention how great the lighting was??! You can tell Kevin really cares about his clients the way he communicated with everyone there."}
                name={"Lulu W."}
                date={"Feb 19, 2023"}
                user={lulu}
            />
            <Testimonial 
                text={"The studio is clean, sleek, & spacious for small group training and/or classes. He has an inbody scale which measures your body weight against muscle & fat for those looking for more of an in depth analysis of where their body is today. The studio also provides sweat towels & water to keep hydrated + cool during your session. It’s an up and coming studio that I recommend everyone to try and see for themselves!"}
                name={"Cindy K."}
                date={"Feb 16, 2023"}
                user={cindy}
            />
            <Testimonial 
                text={"Instructor is very thorough. He is very articulate with explaining proper forms of exercises. Over super cool and genuine guy in general! Will be going back!"}
                name={"Donald N."}
                date={"Feb 22, 2023"}
                user={donald}
            />
        </div> 
    </div>
  )
}

export default Testimonials