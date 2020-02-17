/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../src/client/views/index.html'), 'utf8');

jest
    .dontMock('fs');

describe('button', function () {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    });

    afterEach(() => {
        // restore the original func after test
        jest.resetModules();
    });

    it('header loaded', function () {
        expect(document.getElementById('header')).toBeTruthy();
    });
});

