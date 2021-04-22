import {
    createElement
} from 'lwc';
import {registerLdsTestWireAdapter} from '@salesforce/sfdx-lwc-jest';
// import ProductCard from '../productCard'; // updated - grabbing locally instead of c/productCard - not extensible
import ProductCard from 'c/productCard';
import {getRecord} from 'lightning/uiRecordApi'; // NOW importing MODERN mocks.  Maybe this needs to be real?



// Import mock data to send through the wire adapter.
const mockGetRecord = require('./getRecord.json');

// Register a test wire adapter. - 2.0 way!
const getRecordWireAdapter = registerLdsTestWireAdapter("getRecord");

describe('@wire demonstration test', () => {
// Disconnect the component to reset the adapter. It is also
// a best practice to clean up after each test.
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('displays product name field', () => {
        debugger;
        const element = createElement('c-product_filter', {
            is: ProductCard
        });
        document.body.appendChild(element);
        getRecordWireAdapter.emit(mockGetRecord);

// Resolve a promise to wait for a rerender of the new content.
        return Promise.resolve().then(() => {
            debugger;

            const content = element.shadowRoot.querySelector('.content');
            const name = content.shadowRoot.querySelector('.name');
            // console.warn(`content:`)
            // console.error(content)
            // console.error(content.shadowRoot);
            console.error(mockGetRecord);
            console.error(mockGetRecord.fields);
            console.error(mockGetRecord.fields.Name);

            const fields = mockGetRecord.fields;
            console.error(fields);

            const nameField = fields.Name.value;
            expect(name.textContent).toBe(`Name:${nameField}`); // both not null

        });
    });
});
