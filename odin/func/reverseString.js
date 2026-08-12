import capitalize from "./capitalize.js";

export default function reverse(word){
    const capitalized = capitalize(word);
    return capitalized.split(" ").reverse().join(" ");
}