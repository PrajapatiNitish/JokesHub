import homeStyle from './Home.module.scss'

export default function Home() {
  return (
    <>
      <div className={homeStyle.global_homepage}>
        {/* Write a beautiful quotes. */}
        <div className="quotes">Laugh as you can</div>

        {/* Choose languages for jokes */}
        <div className="jokes-language">Jokes-Language</div>

        {/* Jokes */}
        <div className="Jokes-div">
          <div className="Jokes">
            Jokes 😂😂😂 | and Some funny aimated emojy
          </div>

          <div className="buttons">
            <div className="new-joke-btn">New Jokes Button</div>
            <div className="copy-btn">Copy Button</div>
          </div>
        </div>

        {/* Choose category of jokes */}
        <div className="category-div">
          <div className="search-category">Search Category</div>
          <div className="search-btn">Search Button</div>
          {/* Suggest some category */}
          <div className="category-suggestion">
            <h1>Category</h1>
            <div className="cate-1">Category-1</div>
            <div className="cate-2">Category-2</div>
            <div className="cate-3">Category-3</div>
            <div className="cate-4">Category-4</div>
          </div>
        </div>
      </div>
    </>
  );
}
