import React from 'react';
import ReactDOM from 'react-dom';
import {TextInputs, Patterns, Switch, Checkbox, Radio } from "../src/fd-inputs";
import styled, { css } from 'styled-components';
import 'date-input-polyfill';

const GlobalStyles = css`
    body {
        background-color: #ffeadb;
    }
    section > div {
        margin-top: 1rem;
        margin-bottom: 1rem;
        display: flex;
    }
    p {
        font-size: 12px;
        font-family: 'ProximaNovaRegular', sans-serif;
    }
`;

const StyledInputMarginRight = styled(TextInputs)`
    margin-right: 1rem;
`;

const StyledInput = styled(StyledInputMarginRight)`
    width: 50vw;
    float: left;
    margin-right: 1rem;
`;

const StyledInputNoCheckMark = styled(StyledInputMarginRight)`
    i {
        display: none;
    }
`;

ReactDOM.render(<section>
        <style>{GlobalStyles}</style>

        <div><Switch id="switch" label="Do you want to toggle this?"/></div>

        <div><Checkbox id="checkbox" label="Check this out"/></div>

        <div><Checkbox id="checkbox2" label="Default checked" defaultChecked={true}/></div>

        <div>
            <Radio id="radio1" label="Radio 1" name="radio-group-1"/>
            <Radio id="radio2" label="Radio 2" name="radio-group-1"/>
        </div>

        <div>
            <TextInputs id="email1" type="email" label="E-mailadres" required={true} pattern={Patterns.EMAIL} errorMessage="Enter correct e-mail address"/>
        </div>
        <div><TextInputs id="default" required={true}/></div>
        <div>
            <StyledInputMarginRight id="default2" description="Not mandatory" />
        </div>
        <div>
            <StyledInputNoCheckMark id="default3" description="Not mandatory and no check icon"/>
        </div>
        <div>
            <TextInputs id="default4" placeholder="Enter a value" description="With placeholder text" required={true}/>
        </div>
        <div><TextInputs id="date1" type="date" label="Date" required={true} description="Mandatory field" errorMessage="Please pick a date"/></div>
        <div><TextInputs id="date2" type="date" label="Date" description="Not mandatory"/></div>
        <div><TextInputs id="mobile1" type="tel" label="Mobile" minLength={10} maxLength={10} required={true} pattern={Patterns.MOBILE} errorMessage="Enter valid mobile number (NL)"/></div>
        <div>
            <StyledInput id="mobile2" type="tel" label="Mobile" minLength={10} maxLength={10} required={true} pattern={Patterns.MOBILE} errorMessage="Enter valid mobile number (NL)" description="This field is wide"/>
        </div>
        <div>
            <StyledInputMarginRight id="mobile3" type="tel" label="Mobile" minLength={10} maxLength={10} required={true} localStorage={true} pattern={Patterns.MOBILE} errorMessage="Enter valid mobile number (NL)" description="This value is stored in the localStorage"/>
        </div>
        <div>
            <StyledInputMarginRight id="mobile4" value="0612345678" type="tel" label="Mobile" minLength={10} maxLength={10} required={true} pattern={Patterns.MOBILE} errorMessage="Enter valid mobile number (NL)" description="This input has a default value"/>
        </div>
        <div><button type="submit">Submit</button></div>
    </section>,
    document.getElementById('root'));
