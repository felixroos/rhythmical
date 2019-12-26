export class Editor {
  static init(div, ace, options) {
    const editor = ace.edit(div);
    const { theme, mode, value, change, raw } = options;
    editor.setTheme(`ace/theme/${theme}`);
    editor.session.setMode(`ace/mode/${mode}`);
    if (mode === 'json') {
      editor.setValue(Editor.prettyJson(value), -1);
    } else {
      editor.setValue(value, -1);
    }
    if (change) {
      editor.getSession().on('change', () => {
        change(editor.getValue(), editor);
      });
    }
    return editor;
  }

  static prettyJson(json) {
    return JSON.stringify(
      json,
      function(k, v) {
        if (
          Array.isArray(v) &&
          v.reduce(
            (allStrings, e) =>
              allStrings && ['string', 'number'].includes(typeof e),
            true
          )
        )
          return JSON.stringify(v);
        return v;
      },
      2
    )
      .replace(/\\/g, '')
      .replace(/\"\[/g, '[')
      .replace(/\]\"/g, ']')
      .replace(/\"\{/g, '{')
      .replace(/\}\"/g, '}');
  }
}
