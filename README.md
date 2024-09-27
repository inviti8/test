### Requirements

1\. Node Js

2\. NPM

3\. Fork https://github.com/inviti8/proprium_dev a private repo you will be given access to.

4\. cd into the repo, and link for use.

```sh
npm link
```

* * *

### Installation

1\. Download this repo

2\. Open a terminal and cd into it.

3\. Link the local proprium-dev package:

```sh
npm link proprium-dev
```

4\. Run the project with:

```sh
npx vite
```

* * *

### Tasks: BaseText Class

1\. Implement cursor text insertion at character index.

2\. Implement cursor movement on arrow key presses.

3\. Implement optional ability to paste from clipboard into the text field.

&nbsp;   a. A flag should be added, so this ability can be set on instantiation.

4\. Implement Caps Lock functionality.

* * *

### General Info

&nbsp;

All text creation is done in the **BaseText** class.  Currently text can be edited by double clicking.  You will notice, upon double clicking a cursor object will appear, but if you begin typing.  All text is deleted, and the you're able to type new text.  This text field need to function more like a regular text field.  Needed functionality is described in the Tasks section.

&nbsp;

The two main classes that will need to be updated are: **BaseText** and **HVYM\_DefaultScene & HVYM\_Scene.**

**BaseText,** handles text creation.  While **HVYM\_Scene** handles interaction from the keyboard and mouse.

a method: \_onHandleTypingText, sets the manipulated text on the object, and then \_onHandleTextGeometry, handles text creation through dispatching an event.

&nbsp;

&nbsp;

Typing interactions are handled at lines 1839-1866.

&nbsp;

