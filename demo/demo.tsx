import React from 'react';
import ReactDOM from 'react-dom';
import {TextInput, Patterns, Switch, Checkbox, Radio, TextArea } from "../src/fd-inputs";
import styled, { css } from 'styled-components';

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
    .fd-textarea {
        width: 100%;
    }
`;

const StyledInputMarginRight = styled(TextInput)`
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

        <div><Switch id="switch1" label="Do you want to toggle this?"/></div>

        <div><Switch id="switch2" label="This switch is turned on by default?" defaultChecked={true}/></div>

        <div><Checkbox id="checkbox" label="Check this out"/></div>

        <div><Checkbox id="checkbox2" label="Default checked" defaultChecked={true}/></div>

        <div>
            <Radio id="radio1" label="Radio 1" name="radio-group-1"/>
            <Radio id="radio2" label="Radio 2" name="radio-group-1"/>
        </div>

        <div>
            <TextInput id="email1" type="email" label="E-mailadres" required={true} pattern={Patterns.EMAIL} errorMessage="Enter correct e-mail address"/>
        </div>
        <div><TextInput id="default" required={true}/></div>
        <div>
            <StyledInputMarginRight id="default2" description="Not mandatory" />
        </div>
        <div>
            <StyledInputNoCheckMark id="default3" description="Not mandatory and no check icon"/>
        </div>
        <div>
            <TextInput id="default4" placeholder="Enter a value" description="With placeholder text" required={true}/>
        </div>
        <div><TextInput id="date1" type="date" label="Date" required={true} description="Mandatory field" errorMessage="Please pick a date"/></div>
        <div><TextInput id="date2" type="date" label="Date" description="Not mandatory"/></div>
        <div><TextInput id="mobile1" type="tel" label="Mobile" minLength={10} maxLength={10} required={true} pattern={Patterns.MOBILE} errorMessage="Enter valid mobile number (NL)"/></div>
        <div>
            <StyledInput id="mobile2" type="tel" label="Mobile" minLength={10} maxLength={10} required={true} pattern={Patterns.MOBILE} errorMessage="Enter valid mobile number (NL)" description="This field is wide"/>
        </div>
        <div>
            <StyledInputMarginRight id="mobile3" type="tel" label="Mobile" minLength={10} maxLength={10} required={true} localStorage={true} pattern={Patterns.MOBILE} errorMessage="Enter valid mobile number (NL)" description="This value is stored in the localStorage"/>
        </div>
        <div>
            <StyledInputMarginRight id="mobile4" value="0612345678" type="tel" label="Mobile" minLength={10} maxLength={10} required={true} pattern={Patterns.MOBILE} errorMessage="Enter valid mobile number (NL)" description="This input has a default value"/>
        </div>
        <div><TextArea id="textarea1" label="A text area" required={true}/></div>
        <div><TextArea id="textarea2" label="Another text area" description="Not mandatory textarea"/></div>
        <div><TextArea id="textarea3" label="A text area" placeholder="This is the placeholder text" required={true}/></div>
        <div><TextArea id="textarea4" label="A text area" value="This is the default value" description="Not mandatory textarea"/></div>
        <div><TextArea id="textarea5" label="A text area" value="This is the default value which is also required" required={true}/></div>
        <div><button type="submit">Submit</button></div>
    </section>,
    document.getElementById('root'));
