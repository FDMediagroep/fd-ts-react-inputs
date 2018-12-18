[![Build Status](https://travis-ci.org/FDMediagroep/fd-ts-react-inputs.svg?branch=master)](https://travis-ci.org/FDMediagroep/fd-ts-react-inputs)
[![Coverage Status](https://coveralls.io/repos/github/FDMediagroep/fd-ts-react-inputs/badge.svg?branch=master)](https://coveralls.io/github/FDMediagroep/fd-ts-react-inputs?branch=master)
[![npm version](https://badge.fury.io/js/%40fdmg%2Ffd-inputs.svg)](https://badge.fury.io/js/%40fdmg%2Ffd-inputs)
[![Greenkeeper badge](https://badges.greenkeeper.io/FDMediagroep/fd-ts-react-inputs.svg)](https://greenkeeper.io/)

# fd-inputs
FD-themed inputs

# Installation
* Run `npm i -D @fdmg/fd-inputs`

# Demo
To run the demo, check-out this repository and run `npm run build-demo`.
After the build succeeded you can open `dist/demo.html` with your webbrowser.
* [Demo](http://static.fd.nl/react/inputs/demo.html)

# Props
When developing in TypeScript autocompletion and code documentation is shown in IDE's like Visual Studio Code.
```
export interface Props {
    /**
     * Mandatory id of the input element.
     */
    id: string;

    /**
     * Optional name of the input element. Id is used when name is unset.
     */
    name?: string;

    /**
     * Optional className is set as the className of the outmost container element.
     */
    className?: string;

    /**
     * Optional value of the input element.
     */
    value?: string;

    /**
     * Optional. When true the default input validation kicks in. Tip: use in combination with pattern.
     */
    required?: boolean;

    /**
     * Optional. The pattern to which the input value is validated. Only works when required is set to true.
     * Tip: the exported Patterns enum already contains some validation rules for common use-cases.
     */
    pattern?: Patterns | string;

    /**
     * Optional. The label shown in the input field.
     */
    label?: string;

    /**
     * Optional. The native browser tooltip text shown on hover. When omitted then the label is used.
     */
    title?: string;

    /**
     * Optional. Custom error message shown when the value does fit the pattern.
     */
    errorMessage?: string;

    /**
     * Optional. Type of the input field. Default is `text`.
     */
    type?: string;

    /**
     * Optional minimum length of the input field.
     */
    minLength?: number;

    /**
     * Optional maximum length of the input field.
     */
    maxLength?: number;

    /**
     * Optional callback hook triggered when a change event occured in the input field.
     */
    onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;

    onFocus?: (value: React.FocusEvent<HTMLInputElement>) => void;

    onBlur?: (value: React.FocusEvent<HTMLInputElement>) => void;

    /**
     * Optional. Store the value to localStorage which will be used as default value upon subsequent visits of the page.
     * Tip: `id` is used as suffix for the property name.
     */
    localStorage?: boolean;
}
```

# Usage
```
import Button from '@fdmg/fd-inputs';
...
<Input id="email1" type="email" label="E-mailadres" required={true} pattern={Patterns.EMAIL} errorMessage="Voer een geldig e-mailadres in"/>
```
