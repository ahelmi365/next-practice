const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Company Name</h3>
            <p className="text-slate-300">
              Making the world a better place through innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <div className="text-slate-300 space-y-2">
              <p>Email: info@company.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Address: 123 Business St, City, Country</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>
            © {new Date().getFullYear()} GET Group ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
