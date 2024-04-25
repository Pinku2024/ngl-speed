import Link from "next/link";

const Sidebar = ({ openClass }) => {
  
  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}
      >
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-content-area">
            <div className="mobile-logo">
              <Link className="d-flex" href="/">
                <img
                  alt="IORI"
                  src="assets/imgs/template/logo.svg"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <div>
                  <div className="tab-pane">
                    <nav className="mt-15">
                      <ul className="mobile-menu font-heading">
                        <li>
                          <Link className="active" href="/">
                            Home
                          </Link>
                        </li>

                        <li>
                          <Link href="/seo">SEO</Link>
                        </li>
                        <li>
                          <Link href="#">Tools</Link>
                        </li>
                        <li>
                          <Link href="/aso">Get Free ASO Analysis</Link>
                        </li>
                        <li>
                          <Link href="#">Blog</Link>
                        </li>
                        <li>
                          <Link href="#">Career</Link>
                        </li>
                        <li>
                          <Link href="/contact">Contact Us</Link>
                        </li>
                        <li>
                          <Link href="#">Terms</Link>
                        </li>
                        <li>
                          <Link href="#">Privacy</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;