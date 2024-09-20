import Image from "next/image"
import { LeftPart } from "../home/page";
import bookImage from "@/app/assets/images/bookapp.png"
import fitnessImage from "@/app/assets/images/fitness.png"
import recipesImage from "@/app/assets/images/recipes.png"

export default function RecentWork() {
  return (
    <>
      <LeftPart />
      <div id="portfolio" className="kioto_tm_section">
        <div className="container">
          <div className="kioto_tm_portfolio">
            <div className="portfolio_title">
              <div className="kioto_tm_title">
                <span>// Recent Work</span>
              </div>
            </div>
            <div className="portfolio_list">
              <ul className="portfolio_item">

                <li className="vimeo">
                  <div className="list_inner">
                    <div className="abs_image">
                      <Image src={bookImage} alt="book" />
                      <a
                        className="kioto_tm_full_link"
                        href="https://mndraca.github.io/BookReview-/"
                      ></a>
                    </div>
                    <div className="details">
                      <h3 className="name">Book Club App</h3>
                      <span className="job">Discover your next great read with our book review app, where you can explore insightful reviews and ratings from fellow readers. Share your own opinions and find books that match your interests, all in one place!</span>
                    </div>
                  </div>
                </li>
                <li className="vimeo">
                  <div className="list_inner">
                    <div className="abs_image">
                      <Image src={fitnessImage} alt="fitness" />
                      <a
                        className="kioto_tm_full_link"
                        href="https://sdzika.github.io/workout-logging-form/"
                      ></a>
                    </div>
                    <div className="details">
                      <h3 className="name">Fitness App</h3>
                      <span className="job">
                        Stay ahead of your fitness goals with our intuitive fitness tracker app, designed to provide real-time insights and personalized workout plans. Track your progress effortlessly and achieve a healthier you, one step at a time!
                      </span>
                    </div>
                  </div>
                </li>
                <li className="vimeo">
                  <div className="list_inner">
                    <div className="abs_image">
                      <Image src={recipesImage} alt="recipe" />
                      <a
                        className="kioto_tm_full_link"
                        href="https://milutin25.github.io/Recipes-/"
                      ></a>
                    </div>
                    <div className="details">
                      <h3 className="name">Recipe Finder App</h3>
                      <span className="job">
                        Unlock a world of culinary possibilities with our recipe finder app, designed to help you discover new and delicious dishes with ease. From quick meals to gourmet creations, find recipes that suit your taste and cooking style effortlessly!
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

