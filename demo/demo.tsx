import React from 'react';
import ReactDOM from 'react-dom';
import Input, { Patterns } from "../src/fd-inputs";
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
        font-family: ProximaNovaRegular, sans-serif;
    }
`;

const StyledInputMarginRight = styled(Input)`
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

        <div>
            <Input id="email1" type="email" label="E-mailadres" required={true} pattern={Patterns.EMAIL} errorMessage="Voer een geldig e-mailadres in"/>
        </div>
        <div><Input id="default" required={true}/></div>
        <div>
            <StyledInputMarginRight id="default2" />
            <p>Niet verplicht invoerveld.</p>
        </div>
        <div>
            <StyledInputNoCheckMark id="default3" />
            <p>Niet verplicht invoerveld zonder vinkje.</p>
        </div>
        <div><Input id="mobile1" type="tel" label="Mobile" minLength={10} maxLength={10} required={true} pattern={Patterns.MOBILE} errorMessage="Voer een geldig mobiele nummer in"/></div>
        <div>
            <StyledInput id="mobile2" type="tel" label="Mobile" minLength={10} maxLength={10} required={true} pattern={Patterns.MOBILE} errorMessage="Voer een geldig mobiele nummer in"/>
            <p>Dit is een bredere invoerveld.</p>
        </div>
        <div>
            <StyledInputMarginRight id="mobile3" type="tel" label="Mobile" minLength={10} maxLength={10} required={true} localStorage={true} pattern={Patterns.MOBILE} errorMessage="Voer een geldig mobiele nummer in"/>
            <p>Dit nummer wordt in de localStorage bijgehouden.</p>
        </div>
        <div>
            <StyledInputMarginRight id="mobile4" value="0612345678" type="tel" label="Mobile" minLength={10} maxLength={10} required={true} pattern={Patterns.MOBILE} errorMessage="Voer een geldig mobiele nummer in"/>
            <p>Dit veld heeft een standaard waarde.</p>
        </div>
        <div><button type="submit">Submit</button></div>
    </section>,
    document.getElementById('root'));
