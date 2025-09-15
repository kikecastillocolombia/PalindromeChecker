const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

function cleanText(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/gi, "");
}

button.addEventListener("click", () => {
  const originalText = input.value;
  if (!originalText) {
    alert("Please input a value");
    return;
  }

  const cleaned = cleanText(originalText);
  const reversed = cleaned.split("").reverse().join("");
  const isPalindrome = cleaned === reversed;

  result.textContent = isPalindrome
    ? `${originalText} is a palindrome`
    : `${originalText} is not a palindrome`;
});
