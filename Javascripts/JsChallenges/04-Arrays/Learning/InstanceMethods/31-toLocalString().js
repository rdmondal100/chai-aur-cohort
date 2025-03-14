// array.toLocaleString(locales, options);



// locales (optional) → A string or array of locale codes (e.g., "en-US", "fr-FR", "de-DE").
// options (optional) → An object for formatting numbers, dates, or currencies.
// Returns → A localized string with elements formatted accordingly.


const array = [1000, new Date(), "Hello"];

console.log(array.toLocaleString());
// Output (depends on your system's locale):
// Example: "1,000, 3/13/2025, 12:00:00 AM, Hello"



const prices = [1000, 2500, 5000];

console.log(prices.toLocaleString("bn", { style: "currency", currency: "BDT" }));

// Output: "$1,000.00,$2,500.00,$5,000.00"




const dates = [new Date(2002, 1, 19)];

console.log(dates.toLocaleString("bn", { weekday: "long", year: "numeric", month: "long", day: "numeric" }));
// Output: "jeudi 13 mars 2025, jeudi 25 décembre 2025"
