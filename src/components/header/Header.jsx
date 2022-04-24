import "./header.css";
import backgroundImg from "../imgs/backgroundImg.jpg";
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">My Programming</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={backgroundImg} alt="rain" />
    </div>
  );
}
