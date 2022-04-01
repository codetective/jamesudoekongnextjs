import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useEffect } from "react";
import { Spinner } from "@chakra-ui/react";

function EditNewsEditor({ editorState, setEditorState, setPostBody }) {
  const [loading, setLoading] = useState(true);
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
    setConvertedToPostBody();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    //eslint-disable-next-line
  }, []);
  return (
    <>
      {loading ? (
        <Spinner size="lg" />
      ) : (
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
      )}
    </>
  );
}
export default EditNewsEditor;
