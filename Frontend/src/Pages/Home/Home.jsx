import homeStyle from "./Home.module.scss";
import Button from "../../Component/Button/Button";
import Category from "../../Component/Category/Category";

export default function Home() {
  return (
    <>
      {/* Entery point of homepage */}
      <div className={homeStyle.global_homepage}>
        {/* Write a beautiful quotes. */}
        <h2 className={homeStyle.quotes}>Laugh without any reason</h2>

        <div className={homeStyle.jokes}>
          <div className={homeStyle.anim_emoji}>😁</div>

          {/* Choose languages for jokes */}
          <div className={homeStyle.jokes_part}>
            <div className={homeStyle.jokes_language}>
              Jokes-Language :
              <br />
              Hindi | English | Kannada | Telgue | Marathi
            </div>

            {/* Jokes */}
            <div className={homeStyle.jokes_container}>
              <div className={homeStyle.jokes_line}>Jokes 😂😂😂</div>

              {/* Buttons */}
              <div className={homeStyle.buttons}>
                <Button buttonName={"New Jokes"} />

                <Button buttonName={"Copy Jokes"} />
              </div>
            </div>

            <div className={homeStyle.catogery_container}>
              {/* Choose category of jokes */}
              <div className={homeStyle.category_div}>
                <input type="text" name="Search" className={homeStyle.search_category} />
                <Button buttonName={"Search"} />
              </div>

              {/* Suggest some category */}
              <div className={homeStyle.category_suggestion}>
                <h3 id={homeStyle.category_heading}>Categories : </h3>
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
