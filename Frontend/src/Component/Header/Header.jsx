import headerStyle from './Header.module.scss';

export default function Header() {
  return (
    <>
      {/* Entery point of Header */}
      <div className={headerStyle.global_header}>
        <div className={headerStyle.global_header_name}>JokesHub</div>

        {/* Navbar */}
        <div className={headerStyle.sign_up}>Sign Up</div>
      </div>
    </>
  );
}