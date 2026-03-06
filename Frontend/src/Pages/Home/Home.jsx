import homeStyle from "./Home.module.scss";
import Button from "../../Component/Button/Button";
import Category from "../../Component/Category/Category";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Home() {
  return (
    <>
      {/* Entery point of homepage */}
      <div className={homeStyle.global_homepage}>
        {/* Write a beautiful quotes. */}
        <h2 className={homeStyle.quotes}>Laugh without any reason</h2>

        <div className={homeStyle.jokes}>
          <div className={homeStyle.anim_emoji}>
            <DotLottieReact
              src="https://lottie.host/ff574a87-20e5-4249-9299-7af39f070d81/8cQLfwXSwR.lottie"
              loop
              autoplay
              className={homeStyle.anim}
            />
          </div>

          {/* Choose languages for jokes */}
          <div className={homeStyle.jokes_part}>
            <div className={homeStyle.jokes_language}>
              <h3 className={homeStyle.language_heading}>Jokes Language : </h3>

              <div className={homeStyle.languages}>
                <Category CategoryType={"Hindi"}/>
                <Category CategoryType={"English"}/>
              </div>
            </div>

            {/* Jokes */}
            <div className={homeStyle.jokes_container}>
              <textarea name="Jokes" id={homeStyle.jokes_line}></textarea>

              {/* Buttons */}
              <div className={homeStyle.buttons}>
                <Button buttonName={"New Jokes"} />

                <Button buttonName={"Copy Jokes"} />
              </div>
            </div>

            <div className={homeStyle.catogery_container}>
              {/* Choose category of jokes */}
              <div className={homeStyle.category_div}>
                <input
                  className={homeStyle.search_category}
                  type="text"
                  name="Search"
                  value={"Search Categories"}
                  minLength={1}
                  required
                />
                <Button buttonName={"Search"} />
              </div>

              {/* Suggest some category */}
              <div className={homeStyle.category_suggestion}>
                <h3 className={homeStyle.category_heading}>Categories : </h3>
                <div className={homeStyle.categories}>
                  <Category CategoryType={"Category-1"} />

                  <Category CategoryType={"Category-2"} />

                  <Category CategoryType={"Category-3"} />

                  <Category CategoryType={"Category-4"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
