function AboutDoctor() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
            alt="Doctor"
            className="rounded-3xl shadow-xl"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            About Doctor
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Dr. Sugam is an experienced general physician dedicated to providing
            quality healthcare with compassion and professionalism.
          </p>

          <div className="space-y-3 text-gray-700 text-lg">
            <p>✔ MBBS</p>
            <p>✔ 10+ Years Experience</p>
            <p>✔ General Physician</p>
            <p>✔ Friendly Patient Care</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutDoctor;
