import { BiSolidQuoteLeft } from "react-icons/bi";
import { BsFillStarFill, BsStarHalf } from "react-icons/bs";
import { IconContext } from "react-icons";

const Testimonial = ({text, name, date, user, rating}) => {
  return (
    <div className="testimonial">
        <BiSolidQuoteLeft />
        <div className="testimonial-text">{text}</div>
        <div className="testimonial-user">
            <div className="user-info">
                <span className="user-name">{name}</span>
                <span className="testimonial-date">{date}</span>
            </div>
            <img src={user} alt="user-image" />
        </div>
    </div>
  );
};

export default Testimonial;