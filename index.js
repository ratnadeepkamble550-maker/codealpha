async function translateText() {
  const text = document.getElementById("inputText").value;
  const from = document.getElementById("sourceLang").value;
  const to = document.getElementById("targetLang").value;

  if (!text) {
    alert("Please enter text to translate.");
    return;
  }

  const response = await fetch("https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=" 
    + from + "&to=" + to, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": "YOUR_API_KEY_HERE",
      "Ocp-Apim-Subscription-Region": "YOUR_REGION_HERE"
    },
    body: JSON.stringify([{ Text: text }])
  });

  const data = await response.json();
  const translatedText = data[0].translations[0].text;

  document.getElementById("output").innerText = translatedText;
}

function copyText() {
  const output = document.getElementById("output").innerText;
  navigator.clipboard.writeText(output);
  alert("Translated text copied!");
}
