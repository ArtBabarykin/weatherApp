class Weather {
  constructor(city, country) {
    this.apiKey = "1cdbc79cafd63083e9ef2627ff48ae90"; //The API Key hardcoded for educational purpose. Not for production usage.
    this.city = city;
    this.country = country;
  }
  //Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`
    );
    const responseData = await response.json();
    return responseData;
  }
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
