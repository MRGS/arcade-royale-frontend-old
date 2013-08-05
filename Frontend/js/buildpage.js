// Generated by CoffeeScript 1.6.3
(function() {
  var basedirectory, directories;

  basedirectory = "../Games/";

  directories = ["poopdogs", "megagame", "cool hero 8"];

  $(function() {
    var dir, _i, _len;
    for (_i = 0, _len = directories.length; _i < _len; _i++) {
      dir = directories[_i];
      $.ajax({
        url: basedirectory + dir + '/data.json',
        async: false,
        dataType: "json",
        success: function(data) {
          return $("#mainContainer ol").append("<li>\n    <h2><span>" + data.title + "</span></h2>\n    <div class=\"slidecontent\">\n        <p>" + data.description + "</p>\n    </div>\n</li>");
        }
      }).fail(function(error) {
        console.log("Error parsing metadata for game '" + dir + "':");
        return console.log(error);
      });
    }
    return $("#mainContainer").liteAccordion({
      "easing": "easeOutCubic",
      "containerWidth": $(window).width(),
      "containerHeight": $(window).height(),
      "headerWidth": 80,
      "slideSpeed": 400
    });
  });

}).call(this);

/*
//@ sourceMappingURL=buildpage.map
*/
