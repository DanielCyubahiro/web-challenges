// Change this value to test different "weather" conditions.
const weather = "snowy"

// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const temperature = -1;


switch (weather) {
    case "sunny":
        console.log("It's sunny" + (temperature > 20 ? " and warm" : ", but a bit chilly") + "!")
        break;
    case "rainy":
        console.log("It's raining, don't forget your umbrella!")
        break;
    case "snowy":
        console.log(temperature < 0 ? "Freezing snow!" : "It's snowing, stay warm!")
        break;
    default:
        console.log("I'm not sure what the weather is like.")
        break;
}