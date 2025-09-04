const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Summit Immigration</h3>
            <p className="text-gray-400">
              Your trusted partner for Canadian immigration services.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Work Permits</li>
              <li>Study Permits</li>
              <li>Family Sponsorship</li>
              <li>Express Entry</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Success Stories</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>Toronto, Canada</p>
              <p>+1 (416) 123-4567</p>
              <p>info@summitimmigration.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Summit Immigration Consulting Group. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
