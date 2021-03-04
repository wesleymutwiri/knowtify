<template>
  <v-row no-gutters>
    <v-card>
      <div class="editor">
        <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
          <div class="menubar">
            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.bold() }"
              @click="commands.bold"
            >
              bold
            </button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.italic() }"
              @click="commands.italic"
            >
              italic
            </button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.code() }"
              @click="commands.code"
            >
              code
            </button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.todo_list() }"
              @click="commands.todo_list"
            >
              todo
            </button>
            <button class="menubar__button" @click="commands.undo">
              undo
            </button>

            <button class="menubar__button" @click="commands.redo">
              redo
            </button>
          </div>
        </editor-menu-bar>

        <editor-content :editor="editor" class="editor__content" />
      </div>
    </v-card>
  </v-row>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from "tiptap";

import Doc from "@/services/Doc";
import Title from "@/services/Title";

import {
  Bold,
  Italic,
  HardBreak,
  Heading,
  ListItem,
  TodoItem,
  TodoList,
  CodeBlock,
  Code,
  Link,
  History,
  CodeBlockHighlight,
  Placeholder
} from "tiptap-extensions";

export default {
  name: "Editor",
  components: {
    EditorContent,
    EditorMenuBar
  },
  data() {
    return {
      editor: new Editor({
        autoFocus: true,
        extensions: [
          new Doc(),
          new Title(),
          new CodeBlock(),
          new Bold(),
          new Italic(),
          new Link(),
          new HardBreak(),
          new Heading(),
          new ListItem(),
          new TodoItem({
            nested: true
          }),
          new TodoList(),
          new Code(),
          new Link(),
          new History(),
          new CodeBlockHighlight(),
          new Placeholder({
            showOnlyCurrent: false,

            emptyNodeText: node => {
              if (node.type.name === "title") {
                return "Give me a name";
              }
              return "Write something";
            }
          })
        ],
        onUpdate: ({ getHTML }) => {
          this.note.html = getHTML();
        }
      }),
      note: {
        html: null
      }
    };
  },
  beforeDestroy() {
    // Always destroy the editor instance when no longer needed
    this.editor.destroy();
  }
};
</script>

<style lang="scss" scoped>
.editor {
  min-width: 90vw;
  min-height: 100vh;
  border: none;
  outline: none;
  margin: 0 auto;
}

ul[data-type="todo_list"] {
  padding-left: 0;
}
li[data-type="todo_item"] {
  display: flex;
  flex-direction: row;
}
.todo-checkbox {
  border: 2px solid black;
  height: 0.9em;
  width: 0.9em;
  box-sizing: border-box;
  margin-right: 10px;
  margin-top: 0.3rem;
  user-select: none;
  -webkit-user-select: none;
  cursor: pointer;
  border-radius: 0.2em;
  background-color: transparent;
  transition: 0.4s background;
}
.todo-content {
  flex: 1;
  > p:last-of-type {
    margin-bottom: 0;
  }
  > ul[data-type="todo_list"] {
    margin: 0.5rem 0;
  }
}
li[data-done="true"] {
  > .todo-content {
    > p {
      text-decoration: line-through;
    }
  }
  > .todo-checkbox {
    background-color: black;
  }
}
li[data-done="false"] {
  text-decoration: none;
}
button {
  margin: 10px;
}
.editor *.is-empty:nth-child(1)::before,
.editor *.is-empty:nth-child(2)::before {
  content: attr(data-empty-text);
  float: left;
  color: #aaa;
  pointer-events: none;
  height: 0;
  font-style: italic;
}
</style>
