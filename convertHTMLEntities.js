function convertHTML(str) {
  // Using the replace method with regex for quick work
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
}

convertHTML("Dolce & Gabbana");

// convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
// convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
// convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
// convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
// convertHTML("Schindler's List") should return Schindler&​apos;s List.
// convertHTML("<>") should return &​lt;&​gt;.
// convertHTML("abc") should return abc.