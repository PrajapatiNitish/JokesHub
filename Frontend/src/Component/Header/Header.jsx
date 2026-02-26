import headerStyle from "./Header.module.scss";

export default function Header() {
  return (
    <>
      {/* Entery point of Header */}
      <div className={headerStyle.global_header}>
        <h1 id={headerStyle.global_header_name}>JokesHub</h1>

        {/* Navbar */}
        <span className={headerStyle.sign_up}>Sign Up</span>
      </div>
    </>
  );
}
