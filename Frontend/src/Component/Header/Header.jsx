import headerStyle from "./Header.module.scss";

export default function Header() {
  return (
    <>
      <div className={headerStyle.golbal_header}>
        <div className="global-header-name">JokesHub</div>
        <div className="sign-up">Sign Up</div>
      </div>
    </>
  );
}