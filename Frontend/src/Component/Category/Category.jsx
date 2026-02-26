import CategoryStyle from "./Category.module.scss";

export default function Category({CategoryType}) {
  return (
    <>
      <span className={CategoryStyle.category_container}>
        {CategoryType}
      </span>
    </>
  )
}