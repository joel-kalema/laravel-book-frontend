export default function FooterWithSitemap() {
  return (
    <footer className="site-footer bg-[#33353d] text-[#b2b3dd]">
      <div className="flex">
        <div className="flex p-20 justify-between">
          <div className="w-2/5">
            <h6 className="mb-4 font-extrabold">About</h6>
            <p className="text-justify">The Amazon.com Books homepage helps you explore Earth's Biggest Bookstore without ever leaving the comfort of your couch. Here you'll find current best sellers in books, new releases in books, deals in books, Kindle eBooks, Audible audiobooks, and so much more.</p>
          </div>

          <div className="w-1/5">
            <h6 className="mb-4 font-extrabold">Categories</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div>

          <div className="w-1/5">
            <h6 className="mb-4 font-extrabold">Quick Links</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="text-center border-t-[1px] border-sky-500 py-10">

        <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by
          <a href="#">Scanfcode</a>.
        </p>

      </div>
    </footer>
  );
}