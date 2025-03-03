// You just need to implement the convertTemperature function
function convertTemperature(value, scale) {
    // Convert temperature based on the scale ("C" to "F" or "F" to "C")
    if (scale === "C") {
        const F = ((9 * value) / 5) + 32
        return F + "°F"
    } else {
        const C = ((value - 32) * 5) / 9
        return C + "°C"
    }
}