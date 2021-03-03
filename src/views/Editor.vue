<template>
  <div class="row">
    <div class="editor">
      <editor-content :editor="editor" class="editor__content" />
    </div>
    <div class="content" v-html="html"></div>
  </div>
</template>

<script>
import { Editor, EditorContent } from "tiptap";
import {
  Bold,
  Italic,
  HardBreak,
  Heading,
  ListItem,
  TodoItem,
  TodoList,
  Code,
  Link,
  History,
  CodeBlockHighlight
} from "tiptap-extensions";

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
          new Heading(),
          new ListItem(),
          new TodoItem(),
          new TodoList(),
          new Code(),
          new Link(),
          new History(),
          new CodeBlockHighlight()
        ],
        onUpdate: ({ getHTML }) => {
          this.html = getHTML();
        },
        content: "<p> Some boring paragraph </p>"
      }),
      html: ""
    };
  },
  beforeDestroy() {
    // Always destroy the editor instance when no longer needed
    this.editor.destroy();
  }
};
</script>

<style scoped>
.row {
  display: flex;
  justify-content: space-around;
}
.content {
  background: rgb(223, 223, 223);
}
</style>
