var cagify = function(img) {
  // compose a CageMe query from the image's width, height, and color
  var query = ['http://cageme.herokuapp.com/', img.width,'/', img.height,'.jpg'];
  if (img.className == "cagify-grey") {
    query[0] = 'http://cageme.herokuapp.com/g/';
  }

  img.src = query.join("");
};

window.onload = function() {
  // get all placeholder images on the page and cagify them
  var plainImages = Array.prototype.slice.call(document.getElementsByClassName('cagify'));
  var greyImages = Array.prototype.slice.call(document.getElementsByClassName('cagify-grey'));
  var images = plainImages.concat(greyImages);

  for (i in images) {
    cagify(images[i]);
  }
}
