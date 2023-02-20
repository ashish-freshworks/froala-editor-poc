import React, { useState } from "react";

// Require Editor JS files.
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/js/plugins.pkgd.min.js";

// Require Editor CSS files.
import "froala-editor/css/froala_editor.min.css";
import "froala-editor/css/froala_style.min.css";

// plugins
import "froala-editor/css/plugins/quick_insert.min.css";
import "froala-editor/css/plugins/char_counter.min.css";
import "froala-editor/css/plugins/code_view.min.css";
import "froala-editor/css/plugins/colors.min.css";
import "froala-editor/css/plugins/draggable.min.css";
import "froala-editor/css/plugins/emoticons.min.css";
import "froala-editor/css/plugins/file.min.css";
import "froala-editor/css/plugins/fullscreen.min.css";
import "froala-editor/css/plugins/help.min.css";
import "froala-editor/css/plugins/image_manager.min.css";
import "froala-editor/css/plugins/image.min.css";
import "froala-editor/css/plugins/line_breaker.min.css";
import "froala-editor/css/plugins/quick_insert.min.css";
import "froala-editor/css/plugins/special_characters.min.css";
import "froala-editor/css/plugins/table.min.css";
import "froala-editor/css/plugins/video.min.css";

import "froala-editor/css/themes/gray.min.css";
import Froala from 'froala-editor';
import FroalaEditor from "react-froala-wysiwyg";
import FontColor from "./font-color.svg";
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView'


const froalaEditorConfig = {
    attribution: false,
    height: 400,
    quickInsertEnabled: false,
    imageUploadURL: "p",
    imageDefaultWidth: 0,
    imageResizeWithPercent: true,
    imageMultipleStyles: false,
    imageUploadParams: { },
    imageUploadParam: 'image',
    imageUploadMethod: "POST",
    imageOutputSize: true,
    imageRoundPercent: true,
    imageMaxSize: 1024 * 1024 * 2.5,
    requestHeaders: {
        custom_header: "Asdasd" 
    },
    imageEditButtons: [
        "imageAlt",
      "imageReplace",
      "imageAlign",
      "imageRemove",
      "imageSize",
      "-",
      "imageLink",
      "linkOpen",
      "linkEdit",
      "linkRemove"
    ],
    imageAllowedTypes: ["jpeg", "jpg", "png", "gif"],
    imageInsertButtons: ["imageBack", "|", "imageUpload"],
    placeholderText: "Your content goes here!",
    colorsStep: 5,
    colorsText: [
      "#000000",
      "#2C2E2F",
      "#6C7378",
      "#FFFFFF",
      "#009CDE",
      "#003087",
      "#FF9600",
      "#00CF92",
      "#DE0063",
      "#640487",
      "REMOVE"
    ],
    colorsBackground: [
      "#000000",
      "#2C2E2F",
      "#6C7378",
      "#FFFFFF",
      "#009CDE",
      "#003087",
      "#FF9600",
      "#00CF92",
      "#DE0063",
      "#640487",
      "REMOVE"
    ],
    toolbarButtons: {
      moreText: {
        buttons: [
          "fontFamily",
          "fontSize",
          "textColor",
          "backgroundColor",
          "bold",
          "italic",
          "underline",
          "align",
          "formatUL",
          "formatOL",
          "indent",
          "outdent",
          "insertLink",
          "clearFormatting",
          "insertImage",
          "insertHR",
          "insertTable"
        ],
        buttonsVisible: 18
      },
    },
    tableEditButtons: [
      "tableHeader",
      "tableRemove",
      "tableRows",
      "tableColumns",
      "tableStyle",
      "-",
      "tableCells",
      "tableCellBackground",
      "tableCellVerticalAlign",
      "tableCellHorizontalAlign"
    ],
    tableStyles: {
      grayTableBorder: "Gray Table Border",
      blackTableBorder: "Black Table Border",
      noTableBorder: "No Table Border"
    },
    toolbarSticky: true,
    pluginsEnabled: [
    "fontFamily",
      "align",
      "lineHeight",
      "colors",
      "entities",
      "fontSize",
      "help",
      "image",
      "link",
      "lists",
      "paragraphFormat",
      "paragraphStyle",
      "save",
      "table",
      "wordPaste",
      "clearFormatting",
    ],
    fontFamily : {
        'Lato,sans-serif': "Lato",
        ' Montserrat,serif':   "Montserrat",
        ' Ubuntu,sans-serif':   "Ubuntu",
        ' Merriweather,sans-serif':   "Merriweather",
        "'Noto Serif',serif":   "Noto Serif",
        "'Share Tech Mono',sans-serif'":   "Share Tech Mono",
        ' Mali,sans-serif':   "Mali",
        ' Special Elite,sans-serif':   "Special Elite",
        ' Roboto,sans-serif':   "Roboto",
      },
    events: {
      "image.beforeUpload": function (files, arg1, arg2) {
        // var editor = this;
        // if (files.length) {
        //   if (files[0].size / 1000 > 255) {
        //     alert("Image file size exceeded the limit");
        //     return false;
        //   } else {
        //     // Create a File Reader.
        //     var reader = new FileReader();
        //     // Set the reader to insert images when they are loaded.
        //     reader.onload = (e) => {
        //       var result = e.target.result;
        //       editor.image.insert(result, null, null, editor.image.get());
        //     };
        //     // Read image as base64.
        //     reader.readAsDataURL(files[0]);
        //   }
        // }
        // editor.popups.hideAll();
        // // Stop default upload chain.
        // return true;
      }
    }
  };

const TextEditor = () => {

    const [text, setText] = useState('<p>sd<strong>fsfs</strong><span style="color: rgb(255, 150, 0);"><strong>dfs</strong>df</span></p><ul><li>sfsdfsdfsdf</li><li>sdfs<em>sdfsdfsdfsdf</em></li></ul><table style="width: 100%;"><tbody><tr><td style="width: 33.3333%;">sdfsdf</td><td style="width: 33.3333%;">sdf</td><td style="width: 33.3333%;">sdf</td></tr><tr><td style="width: 33.3333%;">dfsdf</td><td style="width: 33.3333%;">sdf</td><td style="width: 33.3333%;">sdfsdf</td></tr></tbody></table>');
    Froala.DefineIcon('bold', {NAME: 'bug', PATH: 'M20.7854554,12.5746197 C20.9284063,12.7161269 21,12.8838001 21,13.0773263 C21,13.2708916 20.9283669,13.4384475 20.7859676,13.5797983 C20.6436865,13.7212664 20.4747695,13.7920591 20.2797683,13.7920591 L17.7598834,13.7920591 C17.7598834,15.0649595 17.5086947,16.1444509 17.0061205,17.030377 L19.3461347,19.3641514 C19.4882976,19.5055413 19.5597336,19.6730581 19.5597336,19.8666234 C19.5597336,20.0601887 19.4882582,20.2277837 19.3461347,20.3692518 C19.2109065,20.5107199 19.042226,20.5813953 18.8396596,20.5813953 C18.6371326,20.5813953 18.4687278,20.5107199 18.3334603,20.3692518 L16.1058998,18.1694751 C16.0684284,18.2065533 16.0123197,18.2548958 15.9371011,18.3145807 C15.8621582,18.3742656 15.7046678,18.4802983 15.46463,18.6328742 C15.224868,18.7854501 14.9807718,18.9211688 14.7335233,19.0404213 C14.4859597,19.1595565 14.1783472,19.2675448 13.8108041,19.3641905 C13.4433791,19.4611101 13.0797368,19.5095699 12.7198377,19.5095699 L12.7198377,9.50409233 L11.2798077,9.50409233 L11.2798077,19.5095699 C10.8973312,19.5095699 10.5167459,19.4592327 10.1379338,19.3585975 C9.7592792,19.2582361 9.4330295,19.1353462 9.15918464,18.9902406 C8.88553679,18.844744 8.63809136,18.6995211 8.41676955,18.5544155 C8.19540834,18.40931 8.03240169,18.2886494 7.9274344,18.1916907 L7.75859623,18.0350863 L5.69999212,20.3466842 C5.54990938,20.5032887 5.36995981,20.5811607 5.15994641,20.5811607 C4.97995745,20.5811607 4.8188027,20.5214758 4.67628517,20.4023797 C4.53376763,20.2682255 4.45689406,20.102547 4.44570385,19.9055398 C4.43439544,19.7083762 4.49251359,19.5353447 4.62005832,19.3863279 L6.89237963,16.8515178 C6.45745882,16.0030219 6.23988022,14.9828634 6.23988022,13.79202 L3.71999527,13.79202 C3.52499409,13.79202 3.35627413,13.7210708 3.213796,13.5796027 C3.07127847,13.4383693 3,13.270657 3,13.0770916 C3,12.8836827 3.07127847,12.7159705 3.213796,12.5746197 C3.35627413,12.4331515 3.52499409,12.3623588 3.71999527,12.3623588 L6.23988022,12.3623588 L6.23988022,9.07933592 L4.293651,7.14743737 C4.15113347,7.00604746 4.0799338,6.83853073 4.0799338,6.64484806 C4.0799338,6.45136096 4.15113347,6.28384423 4.293651,6.14237609 C4.43616854,6.00098618 4.60484909,5.93023256 4.79996848,5.93023256 C4.99496966,5.93023256 5.16365021,6.00094707 5.30616775,6.14237609 L7.25239696,8.07427464 L16.7469726,8.07427464 L18.6932806,6.14237609 C18.8356799,6.00098618 19.0044787,5.93023256 19.1994799,5.93023256 C19.3944811,5.93023256 19.5632798,6.00094707 19.7056792,6.14237609 C19.8481179,6.28388334 19.919554,6.45136096 19.919554,6.64484806 C19.919554,6.83853073 19.8480785,7.00604746 19.7056792,7.14743737 L17.7593711,9.07933592 L17.7593711,12.3623588 L20.2792561,12.3623588 C20.4742573,12.3623588 20.6433712,12.4331515 20.7854554,12.5746197 Z M14.5186384,4.10083544 C15.2117041,4.83471198 15.5581395,5.72375948 15.5581395,6.76744186 L8.44186047,6.76744186 C8.44186047,5.72359453 8.78833488,4.83471198 9.48140054,4.10083544 C10.174583,3.36704136 11.0139344,3 12.0000389,3 C12.9859877,3 13.8255727,3.36704136 14.5186384,4.10083544 Z'});
    Froala.DefineIcon('textColor', {NAME: 'textColor2', PATH: 'M9.82056 8H5.90056L5.07056 10.25H3.27056L7.09056 0.5H8.64056L12.4706 10.25H10.6406L9.82056 8ZM6.45056 6.64H9.37056L7.91056 2.58L6.45056 6.64ZM4.25056 11.34H11.8106C12.4506 11.34 12.9106 11.79 12.9106 12.42C12.9106 13.05 12.4706 13.5 11.8306 13.5H4.27056C3.63056 13.5 3.17056 13.05 3.17056 12.42C3.17056 11.79 3.63056 11.34 4.27056 11.34H4.25056Z'});
    
    // Froala.DefineIcon('textColor', { src: FontColor, template: 'image' });

    // Froala.DefineIcon('textIcon', {NAME: 'X', template: 'text'});
    // Froala.RegisterCommand('textButton', {
    //     title: 'Text',
    //     icon: 'textIcon'
    // });

    console.log('edirot', Froala.SVG);
    // console.log(text);
  return (
    <div className="main-editor-container">
      <FroalaEditor
        config={froalaEditorConfig}
        tag="textarea"
        model={text}
        onModelChange={htmlCode => {
            setText(htmlCode);
        }}
      />
      <FroalaEditorView config={froalaEditorConfig}
        model={text}/>
    </div>
  );
};

export default TextEditor;
