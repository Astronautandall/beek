This app was created using the default configuration 'npx create-react-app'. In order to initiate it first build and then start.

### `npm build`

### `npm start`

## Code Design

The code is organized to allow the reuse of components and components sections:
The idea here is that a component is for example a card, and every section of that card let's say the title or content is a mini component.
Each section is designed to render without much aware of it's enviroment, so the container is the one in charge to describe furthermore how it's displayed.
Let's say for example a section beign a button. The button renders with a given color, height, and text. Then the parent component has the responsability of
positioning, alignment, etc. The reasoning for this is to allow these sections to be as flexible as posible as they have minimal initial configuration and design.

As the app is very minimal the utils and the constants are in a single file, but they can be a folder of it's own when the app grows.
The utils is a place meant to extract logic from components that can also be reused and tested more easily as it is dettached from design and app flow, for example
string transformations, mathematical operations, etc.

📦 src
┣ 📂 components
┃ ┣ 📂 sections
┃ ┣ ┣ 📂 audiobook_card
┃ ┃ ┃ ┣ Authors.js
┃ ┃ ┃ ┣ Narrators.js
┃ ┃ ┃ ┣ ...
┃ ┣ AudioBookCard.js
┃ ┣ Navbar.js
┣ 📂 data
┣ App.js
┣ index.js
┣ utils.js
┣ constants.js
