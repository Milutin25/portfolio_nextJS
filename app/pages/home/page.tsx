import Link from "next/link";
import Image from "next/image";
import TypeAnimation from "@/app/components/typeAnimation";
import milutinImage from "@/app/assets/images/unnamed.png";
import "../../components/styles.css"

export function LeftPart() {
  return (
    <div className="leftpart">
      <div className="leftpart_inner">
        <div className="logo" data-type="text">
          <Link href="/">
            <h3>MILUTIN</h3>
          </Link>
        </div>
        <div className="menu">
          <ul className="transition_link">
            <li className="active">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/pages/about">About</Link>
            </li>
            <li>
              <Link href="/pages/recentWork">Recent Work</Link>
            </li>
            <li>
              <Link href="/pages/blog">Blog</Link>
            </li>
            <li>
              <Link href="/pages/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p>
            &copy; 2024 <br />
            Created by Milutin Stefanovic
          </p>
        </div>
      </div>
    </div>
  );
}

export function RightPart() {
  return (
    <div className="rightpart">
      <div className="rightpart_in">
        <div id="home" className="kioto_tm_section animated">
          <div className="container">
            <div className="kioto_tm_home">
              <div className="left">
                <span className="name">// Milutin Stefanovic</span>
                <h3>Software Developer And</h3>
                <h3 className="job">
                  <span className="cd-headline clip">
                    <span className="cd-words-wrapper">
                      <b className="is-visible"> Web Nomad</b>
                      <b> Analyzer</b>
                      <b> Freelancer</b>
                    </span>
                  </span>
                </h3>
                <div className="kioto_tm_button transition_link">
                  <Link href="/pages/contact" className="tm_text_effect">
                    Get in Touch
                  </Link>
                </div>
              </div>
              <div className="right">
                <div className="abs_image">
                  <Image src={milutinImage} alt="" />
                  <div
                    className="main ripple"
                    data-img-url={"3-4.png"}
                    id="ripple"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="home-page">
      <LeftPart />
      <RightPart />
      <TypeAnimation />
    </div>
  );
}
