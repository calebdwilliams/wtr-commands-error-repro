import { fixture, html, expect, fixtureCleanup } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands/plugins';

describe('The bug', () => {
    it('works in Chromium and Firefox, but not Webkit', async () => {
        const el = await fixture(html`<div>
            <button id="button1">One</button>
            <button id="button2">Two</button>
        </div>`);
        const button1 = el.querySelector('#button1');
        const button2 = el.querySelector('#button2');

        button1.focus();
        expect(document.activeElement).to.equal(button1);

        await sendKeys({ press: 'Tab' });
        expect(document.activeElement).to.equal(button2);
    }); 
});