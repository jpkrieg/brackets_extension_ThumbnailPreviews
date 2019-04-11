/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, brackets */

/** Simple extension that adds a "File > Hello World" menu item */
define(function () {
    "use strict";
    
    // add the modules this script depends on
    var DOMAgent       = brackets.getModule("LiveDevelopment/Agents/DOMAgent"),
        CodeHintList   = brackets.getModule("editor/CodeHintList");

    // create a div to hold the objects
    // eslint-disable-next-line
    var div = document.createElement("div");
    div.setAttribute("id", "preview_div")

    // create an image HTML object
    // eslint-disable-next-line
    var image = document.createElement("IMG");
    image.setAttribute("src", "");
    image.setAttribute("width", "200");
    image.setAttribute("height", "200");
    image.setAttribute("alt", "Image Preview");

    // create a paragraph HTML object
    // eslint-disable-next-line
    var paragraph = document.createElement("P");
    paragraph.innerText = "Dimensions go here."

    // add the image and paragraph to the DOM
    div.appendChild(image)
    div.appendChild(paragraph)

    // set the visibility to false initially
    div.setAttribute("style", "display:none")

    DOMAgent.addNode(div);
    
    console.log("poop")
    
    CodeHintList.
    
    // add callbacks for the onHighlight and onClose events
    function highlightHandler(filename) {
        // eslint-disable-next-line
        console.log("poop")
        // get the filename from the DOM
        //filename = CodeHintList.getAttribute("hint").HTMLtext
        //
        //fil

        var filename_split = filename.split(".")
        var file_extension = filename_split[filename_split.length - 1]
        if (file_extension === "jpg" || file_extension === "png") {
            var preview_node_object = DOMAgent.nodeWithId("preview_div")
            preview_node_object.setAttribute("style", "display:block")
        }
    }
    CodeHintList.onHighlight(highlightHandler)

    function closeHandler() {
        var preview_node_object = DOMAgent.nodeWithId("preview_div")
        preview_node_object.setAttribute("style", "display:none")
    }
    CodeHintList.onClose(closeHandler)

});