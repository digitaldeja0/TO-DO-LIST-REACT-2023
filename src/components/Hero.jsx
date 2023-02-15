function Hero() {
    let greeting = "Howdy Partner!"
    const date = new Date()
    const hour = date.getHours()
    if(hour < 12){
        greeting = "Good Morning ☀️"
    }else if (hour >=12 && hour <=16){
        greeting = "Good Afternoon 🌤️"
    }else if (hour >=17 && hour <=20){
        greeting = "Good Evening 🌃"

    }else{
        greeting = "Goodnight🌛"
    }

  return (
    <div
      className="hero h-1/4"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold">{greeting}</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
