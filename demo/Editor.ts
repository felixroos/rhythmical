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

  static prettyJson(json, compact = false) {
    const string = JSON.stringify(
      json,
      function (k, v) {
        if (compact &&
          Array.isArray(v) &&
          v.reduce(
            (d, e) => {
              const chars = d.chars + (e + '').length;
              const allStrings = d.allStrings && ['string', 'number'].includes(typeof e);
              return { valid: d.valid && chars < 60 && allStrings, allStrings, chars }
            },
            { allStrings: true, chars: 0, valid: true }
          ).valid
        ) {
          return JSON.stringify(v);
        }
        return v;
      },
      2
    )
    if (compact) {
      return string.replace(/\\/g, '')
        .replace(/\"\[/g, '[')
        .replace(/\]\"/g, ']')
        .replace(/\"\{/g, '{')
        .replace(/\}\"/g, '}');
    }
    return string;
  }
}
