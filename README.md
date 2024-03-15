# Ellty test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project consist of a simple React component called Selector, which receives as props an array of pages.
These pages have the following structure
```{id: number, title: string, checked: boolean}```

The Selector component makes use of another React component named ItemSelect
This item is the core functionality of the app: it has a title and a checkbox.

Each time a user checks one of the ItemSelect, the array of pages gets updated and the corresponding item changes the value of its checked property.

There's one ItemSelect with special behavior, the top one with the title "All pages". When the checkbox of this component is selected, it selects the checkboxes and updates the checked property of all the pages below.

There are comments inside the code with a more detailed explanation.
