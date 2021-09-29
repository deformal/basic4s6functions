//this function only return a hyphenated string from a normal string
function urlSlug(title) {
  return title.trim().toLowerCase().split(/\s+/).join("-");
}
console.log(urlSlug("  Winter Is Coming"));
