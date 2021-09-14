// import React from "react";
// import styled from "styled-components";
// import uploadIcon from "../../../assets/images/fancy_upload.png"
// const UploadWrapper = styled.div`
//   .ff_fileupload_hidden {
//     display: none;
//   }
//   .ff_fileupload_wrap .ff_fileupload_dropzone_wrap {
//     position: relative;
//   }
//   .ff_fileupload_wrap .ff_fileupload_dropzone {
//     display: block;
//     width: 100%;
//     height: 100px;
//     box-sizing: border-box;
//     border: 2px dashed #e0e6f0;
//     border-radius: 3px;
//     padding: 0;
//     background-color: transparent;
//     background-image: url(${uploadIcon});
//     background-repeat: no-repeat;
//     background-position: center center;
//     opacity: 0.85;
//     cursor: pointer;
//     outline: none;
//   }
//   .ff_fileupload_wrap .ff_fileupload_dropzone::-moz-focus-inner {
//     border: 0;
//   }
//   .ff_fileupload_wrap .ff_fileupload_dropzone:hover,
//   .ff_fileupload_wrap .ff_fileupload_dropzone:focus,
//   .ff_fileupload_wrap .ff_fileupload_dropzone:active {
//     opacity: 1;
//     background-color: #fff;
//     border-color: #e8ebf3;
//   }
//   .ff_fileupload_wrap .ff_fileupload_dropzone_tools {
//     position: absolute;
//     right: 10px;
//     top: 0;
//   }
//   .ff_fileupload_wrap .ff_fileupload_dropzone_tool {
//     display: block;
//     margin-top: 10px;
//     width: 40px;
//     height: 40px;
//     box-sizing: border-box;
//     border: 1px solid #efecec;
//     border-radius: 3px;
//     padding: 0;
//     background-color: #fdfdfd;
//     background-repeat: no-repeat;
//     background-position: center center;
//     opacity: 0.85;
//     cursor: pointer;
//     outline: none;
//   }
//   .ff_fileupload_wrap .ff_fileupload_dropzone_tool::-moz-focus-inner {
//     border: 0;
//   }
//   .ff_fileupload_wrap .ff_fileupload_dropzone_tool:hover,
//   .ff_fileupload_wrap .ff_fileupload_dropzone_tool:focus,
//   .ff_fileupload_wrap .ff_fileupload_dropzone_tool:active {
//     opacity: 1;
//     background-color: #ffffff;
//     border-color: #4e4c73;
//   }
//   .ff_fileupload_wrap .ff_fileupload_recordaudio {
//     background-image: url("fancy_microphone.png");
//   }
//   .ff_fileupload_wrap .ff_fileupload_recordvideo {
//     background-image: url("fancy_webcam.png");
//   }
//   .ff_fileupload_wrap .ff_fileupload_recordvideo_preview {
//     position: absolute;
//     display: block;
//     right: 60px;
//     top: 10px;
//     width: 320px;
//     max-width: calc(100% - 70px);
//     height: calc(100% - 20px);
//     background-color: #222222;
//   }
//   .ff_fileupload_wrap .ff_fileupload_recordvideo_preview.ff_fileupload_hidden {
//     display: none;
//   }
//   @keyframes ff_fileupload_recording_animate {
//     from {
//       border-color: #ef1f1f;
//     }
//     to {
//       border-color: #c9a1a1;
//     }
//   }
//   .ff_fileupload_wrap .ff_fileupload_recording {
//     animation: ff_fileupload_recording_animate 1.2s infinite alternate;
//   }
//   .ff_fileupload_wrap table.ff_fileupload_uploads {
//     width: 100%;
//     border-collapse: collapse !important;
//     border: 0 none;
//   }
//   .ff_fileupload_wrap table.ff_fileupload_uploads tr,
//   .ff_fileupload_wrap table.ff_fileupload_uploads td {
//     margin: 0;
//     border: 0 none;
//     padding: 0;
//   }
//   .ff_fileupload_wrap table.ff_fileupload_uploads td {
//     vertical-align: top;
//     padding: 1em 0;
//     white-space: nowrap;
//     line-height: normal;
//   }
//   @keyframes ff_fileupload_bounce_animate {
//     10%,
//     90% {
//       transform: translateY(-1px);
//     }
//     20%,
//     80% {
//       transform: translateY(2px);
//     }
//     30%,
//     50%,
//     70% {
//       transform: translateY(-3px);
//     }
//     40%,
//     60% {
//       transform: translateY(3px);
//     }
//   }
//   .ff_fileupload_wrap table.ff_fileupload_uploads tr.ff_fileupload_bounce {
//     animation: ff_fileupload_bounce_animate 0.82s
//       cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
//     transform: translateY(0);
//   }
//   .ff_fileupload_wrap table.ff_fileupload_uploads td.ff_fileupload_preview {
//     width: 1px;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_image {
//     display: block;
//     box-sizing: border-box;
//     border: 0 none;
//     padding: 0;
//     background-color: #dddddd;
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center center;
//     width: 50px;
//     height: 50px;
//     border-radius: 5px;
//     opacity: 0.75;
//     text-align: center;
//     font-size: 12px;
//     font-weight: bold;
//     color: #222222;
//     overflow: hidden;
//     outline: none;
//     cursor: default;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_image::-moz-focus-inner {
//     border: 0;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_image_has_preview {
//     cursor: pointer;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_image:hover,
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_image:focus,
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_image:active {
//     opacity: 1;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text {
//     display: block;
//     margin: 0 auto;
//     width: 70%;
//     overflow: hidden;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_actions
//     button {
//     display: inline-block;
//     vertical-align: top;
//     width: 26px;
//     height: 26px;
//     box-sizing: border-box;
//     border: 1px solid #efecec;
//     border-radius: 3px;
//     padding: 0;
//     background-color: #e8ebf3;
//     background-repeat: no-repeat;
//     background-position: center center;
//     opacity: 0.85;
//     cursor: pointer;
//     outline: none;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_actions
//     button::-moz-focus-inner {
//     border: 0;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_actions
//     button:hover,
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_actions
//     button:focus,
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_actions
//     button:active {
//     opacity: 1;
//     background-color: #fdfdfd;
//     border-color: #4e4c73;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_actions
//     button.ff_fileupload_start_upload {
//     margin-right: 0.5em;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_actions_mobile {
//     display: none;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_actions_mobile
//     button {
//     display: block;
//     margin-top: 0.3em;
//     width: 100%;
//     height: 28px;
//     box-sizing: border-box;
//     border: 1px solid #efecec;
//     border-radius: 3px;
//     padding: 0;
//     background-color: #f3f3f3;
//     background-repeat: no-repeat;
//     background-position: center center;
//     opacity: 0.85;
//     cursor: pointer;
//     outline: none;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_actions_mobile
//     button::-moz-focus-inner {
//     border: 0;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_actions_mobile
//     button:hover,
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_actions_mobile
//     button:focus,
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_actions_mobile
//     button:active {
//     opacity: 1;
//     background-color: #fdfdfd;
//     border-color: #4e4c73;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     button.ff_fileupload_start_upload {
//     background-image: url("fancy_okay.png");
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     button.ff_fileupload_remove_file {
//     background-image: url("fancy_remove.png");
//   }
//   /* Colored buttons based on file extension for non-images. */

//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_with_color {
//     color: #ffffff;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_a {
//     background-color: #f03c3c;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_b {
//     background-color: #f05a3c;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_c {
//     background-color: #f0783c;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_d {
//     background-color: #f0963c;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_e {
//     background-color: #e0862b;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_f {
//     background-color: #dca12b;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_g {
//     background-color: #c7ab1e;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_h {
//     background-color: #c7c71e;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_i {
//     background-color: #abc71e;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_j {
//     background-color: #8fc71e;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_k {
//     background-color: #72c71e;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_l {
//     background-color: #56c71e;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_m {
//     background-color: #3ac71e;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_n {
//     background-color: #1ec71e;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_o {
//     background-color: #1ec73a;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_p {
//     background-color: #1ec756;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_q {
//     background-color: #1ec78f;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_r {
//     background-color: #1ec7ab;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_s {
//     background-color: #1ec7c7;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_t {
//     background-color: #1eabc7;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_u {
//     background-color: #1e8fc7;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_v {
//     background-color: #1e72c7;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_w {
//     background-color: #3c78f0;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_x {
//     background-color: #3c5af0;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_y {
//     background-color: #3c3cf0;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_z {
//     background-color: #5a3cf0;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_0 {
//     background-color: #783cf0;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_1 {
//     background-color: #963cf0;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_2 {
//     background-color: #b43cf0;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_3 {
//     background-color: #d23cf0;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_4 {
//     background-color: #f03cf0;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_5 {
//     background-color: #f03cd2;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_6 {
//     background-color: #f03cb4;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_7 {
//     background-color: #f03c96;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_8 {
//     background-color: #f03c78;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_preview
//     .ff_fileupload_preview_text_9 {
//     background-color: #f03c5a;
//   }
//   .ff_fileupload_wrap table.ff_fileupload_uploads td.ff_fileupload_summary {
//     padding: 1em;
//     font-size: 0.9em;
//     white-space: normal;
//     color: #7a8082;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_summary
//     .ff_fileupload_filename {
//     width: 100%;
//     font-weight: bold;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_summary
//     .ff_fileupload_filename
//     input {
//     box-sizing: border-box;
//     width: 100%;
//     padding: 0.3em;
//     margin-bottom: 0.1em;
//     font-size: 1em;
//     font-weight: normal;
//     line-height: normal;
//     border: 0px solid #e8ebf3;
//     border-radius: 0;
//     box-shadow: none;
//     color: #080e1b;
//     font-weight: 600;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_summary
//     .ff_fileupload_filename
//     input:focus,
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_summary
//     .ff_fileupload_filename
//     input:hover {
//     border: 0px solid #e8ebf3;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_summary
//     .ff_fileupload_errors {
//     color: #a94442;
//     font-weight: bold;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_summary
//     .ff_fileupload_progress_background {
//     margin-top: 0.5em;
//     background-color: #cccccc;
//     height: 2px;
//   }
//   .ff_fileupload_wrap
//     table.ff_fileupload_uploads
//     td.ff_fileupload_summary
//     .ff_fileupload_progress_bar {
//     background-color: #4e4c73;
//     width: 0;
//     height: 2px;
//   }
//   .ff_fileupload_wrap table.ff_fileupload_uploads td.ff_fileupload_actions {
//     width: 1px;
//     text-align: right;
//   }
//   @media (max-width: 420px) {
//     .ff_fileupload_wrap
//       table.ff_fileupload_uploads
//       td.ff_fileupload_preview
//       .ff_fileupload_preview_image {
//       width: 36px;
//       height: 36px;
//       font-size: 11px;
//     }
//     .ff_fileupload_wrap table.ff_fileupload_uploads td.ff_fileupload_summary {
//       padding-right: 0;
//     }
//     .ff_fileupload_wrap table.ff_fileupload_uploads td.ff_fileupload_actions {
//       display: none;
//     }
//     .ff_fileupload_wrap
//       table.ff_fileupload_uploads
//       td.ff_fileupload_preview
//       .ff_fileupload_actions_mobile {
//       display: block;
//     }
//   }
//   .ff_fileupload_dialog_background {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.85);
//     z-index: 10000;
//   }
//   .ff_fileupload_dialog_main {
//     position: absolute;
//     top: 10%;
//     left: 10%;
//     width: 80%;
//     height: 80%;
//     text-align: center;
//   }
//   .ff_fileupload_dialog_main img {
//     position: relative;
//     top: 50%;
//     transform: perspective(1px) translateY(-50%);
//     max-width: 100%;
//     max-height: 100%;
//   }
//   .ff_fileupload_dialog_main audio {
//     position: relative;
//     top: 50%;
//     transform: perspective(1px) translateY(-50%);
//     width: 100%;
//   }
//   .ff_fileupload_dialog_main video {
//     position: relative;
//     top: 50%;
//     transform: perspective(1px) translateY(-50%);
//     max-width: 100%;
//     max-height: 100%;
//   }
// `;

// export default function UploadBlock() {
//   return (
//     <UploadWrapper>
//       <div className="p-2 border mb-4 form-group">
//         <form>
//           <label>Upload Images</label>
//           <input
//             id="demo"
//             type="file"
//             name="files"
//             multiple
//             className="ff_fileupload_hidden"
//           />
//           <div className="ff_fileupload_wrap">
//             <div className="ff_fileupload_dropzone_wrap">
//               <button
//                 className="ff_fileupload_dropzone"
//                 type="button"
//                 aria-label="Browse, drag-and-drop, or paste files to upload"
//               ></button>
//             </div>
//             <table className="ff_fileupload_uploads"></table>
//           </div>
//         </form>
//       </div>
//     </UploadWrapper>
//   );
// }
