import React, { useState } from 'react';
import { TextareaAutosize, Box, Typography, IconButton } from '@mui/material';
import { marked } from 'marked';
import MinimizeIcon from '@mui/icons-material/Minimize';
import MaximizeIcon from '@mui/icons-material/Maximize';
import './App.css';

marked.setOptions({
  breaks: true,
  gfm: true,
});

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine === '\\n' && lastLine === '\\n') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

| Wild Header | Crazy Header | Another Header? |
| ----------- | ------------ | --------------- |
| Your content can | be here, and it | can be here.... |
| And here. | Okay. | I think we get it. |

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const [showEditor, setShowEditor] = useState(true);
  const [showPreview, setShowPreview] = useState(true);

  const toggleEditor = () => setShowEditor(!showEditor);
  const togglePreview = () => setShowPreview(!showPreview);

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <Box sx={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      {/* Editor */}
      <Box sx={{ marginBottom: '20px' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Editor</Typography>
          <IconButton onClick={toggleEditor}>
            {showEditor ? <MinimizeIcon /> : <MaximizeIcon />}
          </IconButton>
        </Box>
        {showEditor && (
          <TextareaAutosize
            id="editor"
            minRows={10}
            value={markdown}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              backgroundColor: '#f9f9f9',
              border: '1px solid #ddd',
              borderRadius: '4px',
              color: '#000', // Change text color to black for better contrast
            }}
          />
        )}
      </Box>

      {/* Preview */}
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Preview</Typography>
          <IconButton onClick={togglePreview}>
            {showPreview ? <MinimizeIcon /> : <MaximizeIcon />}
          </IconButton>
        </Box>
        {showPreview && (
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
            style={{
              padding: '20px',
              fontSize: '16px',
              backgroundColor: '#333',
              color: '#f5f5f5',
              border: '1px solid #ddd',
              borderRadius: '4px',
              minHeight: '200px',
            }}
          />
        )}
      </Box>
    </Box>
  );
}

export default App;
