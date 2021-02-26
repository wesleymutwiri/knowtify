<template>
  <editor-content :editor="editor" />
</template>

<script>
import { Editor, EditorContent } from "tiptap";
import { Bold, Italic, Link, HardBreak, Heading } from "tiptap-extensions";

export default {
  name: "Editor",
  components: {
    EditorContent
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Bold(),
          new Italic(),
          new Link(),
          new HardBreak(),
          new Heading()
        ],
        onUpdate: ({ getHTML }) => {
          const newContent = getHTML();
        },
        content: "<p> Some boring paragraph </p>"
      })
    };
  },
  beforeDestroy() {
    // Always destroy the editor instance when no longer needed
    this.editor.destroy();
  }
};
</script>
