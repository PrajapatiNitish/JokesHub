import homeStyle from "./Home.module.scss";
import Button from "../../Component/Button/Button";

export default function Home() {

  return (
    <>
      {/* Entery point of homepage */}
      <div className={homeStyle.global_homepage}>
        {/* Write a beautiful quotes. */}
        <div className={homeStyle.quotes}>Keep Laughing...</div>

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
                
                <Button buttonName={"Copy Jokes"}/>
              </div>
            </div>

            <div className={homeStyle.catogery_container}>
              {/* Choose category of jokes */}
              <div className={homeStyle.category_div}>
                <div className={homeStyle.search_category}>Search Category</div>
                <Button buttonName={"Search"}/>
              </div>

              {/* Suggest some category */}
              <div className={homeStyle.category_suggestion}>
                <h1>Category</h1>
                <div className="cate-1">Category-1</div>
                <div className="cate-2">Category-2</div>
                <div className="cate-3">Category-3</div>
                <div className="cate-4">Category-4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
