import footerStyle from "./Footer.module.scss";

export default function Footer() {
  return (
    <>
      <div className={footerStyle.global_footer}>
        <div className="developer-name">Name</div>
        <div className="social-media">Attach social medias link</div>
        <div className="feedback">
          Give feedback page link | portfolio-website link
        </div>
        <div className="copyright">All copyright reserved 2026 </div>
      </div>
    </>
  );
}
