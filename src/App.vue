<template>
    <div class="app">
        <header class="app-header">
            <h1>CSS to Vuetify Classes</h1>
        </header>
        <main class="app-main">
            <div class="panel">
                <div class="panel-label">CSS Input</div>
                <div ref="inputEditorEl" class="editor"></div>
            </div>
            <div class="panel">
                <div class="panel-label">HTML Output</div>
                <div ref="outputEditorEl" class="editor"></div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { EditorView, basicSetup } from 'codemirror';
import { EditorState, Prec } from '@codemirror/state';
import { keymap } from '@codemirror/view';
import { indentWithTab } from '@codemirror/commands';
import { indentUnit } from '@codemirror/language';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { oneDark } from '@codemirror/theme-one-dark';
import { convert } from './converter.js';

const inputEditorEl = ref(null);
const outputEditorEl = ref(null);

const DEFAULT_CSS = `p.foo {
    font-weight: bold;
    color: #FAFAFA;
}`;

onMounted(() => {
    // outputView is declared before inputView so the inputView update listener
    // can reference it. The listener only fires after both editors are mounted,
    // so outputView will always be defined when it is first accessed.
    let outputView;

    const inputView = new EditorView({
        doc: DEFAULT_CSS,
        extensions: [
            basicSetup,
            css(),
            oneDark,
            indentUnit.of('    '),
            Prec.high(keymap.of([indentWithTab])),
            EditorView.updateListener.of(update => {
                if (update.docChanged) {
                    const htmlText = convert(update.state.doc.toString());
                    outputView.dispatch({
                        changes: {
                            from: 0,
                            to: outputView.state.doc.length,
                            insert: htmlText,
                        },
                    });
                }
            }),
        ],
        parent: inputEditorEl.value,
    });

    outputView = new EditorView({
        doc: convert(DEFAULT_CSS),
        extensions: [
            basicSetup,
            html(),
            oneDark,
            EditorState.readOnly.of(true),
        ],
        parent: outputEditorEl.value,
    });
});
</script>

<style>
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html,
body,
#app {
    height: 100%;
    font-family: sans-serif;
}

.app {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: #1a1a2e;
    color: #e0e0e0;
}

.app-header {
    padding: 12px 24px;
    background: #16213e;
    border-bottom: 1px solid #0f3460;
    flex-shrink: 0;
}

.app-header h1 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #e0e0ff;
}

.app-main {
    display: flex;
    flex: 1;
    overflow: hidden;
    gap: 1px;
    background: #0f3460;
}

.panel {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
    background: #1e1e2e;
}

.panel-label {
    padding: 6px 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #888;
    background: #16213e;
    flex-shrink: 0;
}

.editor {
    flex: 1;
    overflow: auto;
}

.editor .cm-editor {
    height: 100%;
}

.editor .cm-scroller {
    overflow: auto;
}
</style>
