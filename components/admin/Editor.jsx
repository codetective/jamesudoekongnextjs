import React from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useEffect } from "react";

function EditorContainer({ editorState, setEditorState, setPostBody }) {
  const setConvertedToPostBody = () => {
    if (editorState === "") return;
    let convertedData = convertToRaw(editorState.getCurrentContent());
    setPostBody((prev) => convertedData);
  };

  const onEditorStateChange = (editorS) => {
    setEditorState(editorS);
    setConvertedToPostBody();
  };
  useEffect(() => {
    setEditorState(EditorState.createEmpty());

    //eslint-disable-next-line
  }, []);
  return (
    <>
      <Editor
        editorState={editorState}
        stripPastedStyles={true}
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          options: ["inline", "list", "textAlign", "link", "history"],
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
        }}
      />
    </>
  );
}
export default EditorContainer;
