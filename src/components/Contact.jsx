function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Contact Us</h2>

        <div className="max-w-2xl mx-auto bg-blue-50 p-10 rounded-3xl shadow-lg">
          <p className="text-lg text-gray-700 mb-4">📍 Ambur, Tamil Nadu</p>

          <p className="text-lg text-gray-700 mb-4">📞 +91 9876543210</p>

          <p className="text-lg text-gray-700 mb-8">
            🕒 Mon - Sat : 9 AM - 9 PM
          </p>

          <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-xl shadow-lg transition-all">
            Call Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
