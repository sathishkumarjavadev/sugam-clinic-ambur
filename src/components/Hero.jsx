function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-blue-50 flex items-center"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-5xl font-bold text-gray-800 leading-tight">
            Trusted Care For
            <span className="text-blue-700"> Your Family</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Professional and compassionate healthcare services for all ages.
            Your health is our priority.
          </p>

          <button className="mt-8 bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-xl shadow-lg transition-all">
            Book Appointment
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"
            alt="Doctor"
            className="rounded-3xl shadow-2xl w-full max-w-md"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero