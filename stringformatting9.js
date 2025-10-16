// stringFormatter.js

// Capitalize the first letter of a string
export function capitalize(str) {
  if (typeof str !== "string" || !str) return "";
  const s = str.trim();
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

// Reverse a string
export function reverse(str) {
  if (typeof str !== "string") return "";
  return [...str].reverse().join(""); // handles emojis & special chars
}
