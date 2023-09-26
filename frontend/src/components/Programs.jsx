import Program from './Program';
import { FaUserAlt, FaUsers} from "react-icons/fa";
import { AiOutlineLaptop } from "react-icons/ai";
import { IconContext } from 'react-icons';

const Programs = () => {
  return (
    <div className='programs' id='programs-section'>
        <span id='programs-title'>MORE THAN JUST A GYM</span>
        <div className="program-container">
            <Program icon={
                <IconContext.Provider value={{size: "25px"}}>
                    <div>
                        <AiOutlineLaptop />
                    </div>
                </IconContext.Provider>
            } title={"Online Training"} text={"Customized programming and nutritional guidance for motivated individuals. With 24/7 access to our coaches and weekly check-ins all done on an app; we offer a premium coaching experience."}/>
            <Program icon={
                <IconContext.Provider value={{size: "25px"}}>
                    <div>
                        <FaUserAlt />
                    </div>
                </IconContext.Provider>
            } title={"Personal Training"} text={"One on one individualized training focused on helping our clients achieve their fitness goals. With undivided attention to our clients we help program, teach, and coach our clients so they leave with more than just a workout."}/>
            <Program icon={
                <IconContext.Provider value={{size: "25px"}}>
                    <div>
                        <FaUsers />
                    </div>
                </IconContext.Provider>
            } title={"Group Training"} text={"Our small group classes are focused on delivering heart pumping and fat shedding results. In our Strength & Conditioning based HIIT classes we will generate POWERFUL movements to get you moving."}/>
        </div>
    </div>
  );
};

export default Programs;