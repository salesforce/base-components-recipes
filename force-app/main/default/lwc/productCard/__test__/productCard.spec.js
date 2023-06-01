import {
    createElement
} from 'lwc';
import {registerLdsTestWireAdapter} from '@salesforce/sfdx-lwc-jest';
import ProductCard from '../productCard'; // updated - grabbing locally instead of c/productCard - not extensible
import {getRecord} from 'lightning/uiRecordApi'; //<-- problem  - THIS is not extensible



// Import mock data to send through the wire adapter.
const mockGetRecord = require('./getRecord.json');

// Register a test wire adapter. - 2.0 way!
const getRecordWireAdapter = registerLdsTestWireAdapter(getRecord);

describe('@wire demonstration test', () => {
// Disconnect the component to reset the adapter. It is also
// a best practice to clean up after each test.
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('displays product name field', () => {
        const element = createElement('c-product_filter', {
            is: ProductCard
        });
        document.body.appendChild(element);
        getRecordWireAdapter.emit(mockGetRecord);

// Resolve a promise to wait for a rerender of the new content.
        return Promise.resolve().then(() => {
            const content = element.shadowRoot.querySelector('.content');
            const nameField = mockGetRecord.fields.Name.value;
            expect(content.textContent).toBe(`Name:${nameField}`); // both not null

        });
    });
});
