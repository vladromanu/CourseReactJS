## Homework 4 - Dropdown

Create a controlled Dropdown component that allows users to select multiple options, like in the image below. Being controlled means the parent is responsible for keeping track on the selected options, therefore it should pass these options and also handlers for selecting and removing one of the options. Also, multiple dropdowns could be used on a page, each with its own set of options. The Dropdown should close when clicking outside and only one single dropdown can be open at single time.

After creating a multiple selection dropdown, change the Dropdown component so that it supports
only a single option being selected at a time.

As a bonus, add keyboard support. Tab should focus the element, the enter key should open the dropdown, up and down arrow keys should highlight and cycle through the options, pressing enter again should select the option. For multiple selection dropdowns options are added or removed using the space key.

![](https://dev.azure.com/wantsome-frontend/00634567-5f81-401d-a661-c1a7795e76d8/_apis/git/repositories/7faba5bc-177a-435a-bd80-606d20efe93c/Items?path=%2F.attachments%2Fimage-05f3b22a-165d-42ec-9c98-8a93a8a22284.png&download=false&resolveLfs=true&%24format=octetStream&api-version=5.0-preview.1&sanitize=true&versionDescriptor.version=wikiMaster)

Obs:

    make use of hooks
    if you need to understand better how to manage state on a parent for multiple children and pass it down, read this: https://reactjs.org/docs/thinking-in-react.html
