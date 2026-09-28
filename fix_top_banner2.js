const fs = require('fs');
const file = 'src/app/blog/[slug]/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

// I'll wrap the switch statement in a function or an IIFE so I can easily return the banner.
// Wait, I can just do:
/*
  const renderBlock = () => {
    switch(type) { ... }
  };
  return <React.Fragment key={block.id}>{renderBlock()}{banner}</React.Fragment>;
*/
// Let's replace the start of the switch.

const target = "switch (type) {";
const replacement = `
              const renderBlockContent = () => {
                switch (type) {`;

content = content.replace(target, replacement);

// Replace the end of the switch
// The switch ends with `default: return null; }`
const targetEnd = `                default:
                  return null;
              }`;

const replacementEnd = `                default:
                  return null;
              }
            };
            
            return (
              <div key={block.id} className="notion-block-wrapper">
                {renderBlockContent()}
                {banner}
              </div>
            );`;

content = content.replace(targetEnd, replacementEnd);

fs.writeFileSync(file, content, 'utf-8');
