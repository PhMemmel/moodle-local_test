// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Testmodule.
 *
 * @module     local_test/testmodule
 * @copyright  2024 ISB Bayern
 * @author     Philipp Memmel
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import Templates from 'core/templates';

export const init = async(clone) => {
    const baseElement = document.getElementById('test');

    const result = {
        "foo": "bar"
    };
    console.log(result);

    let context;
    if (clone) {
        context = {...result};
    } else {
        context = result;
    }

    const {html, js} = await Templates.renderForPromise('local_test/exampletemplate', context);
    Templates.replaceNodeContents(baseElement, html, js);
};

