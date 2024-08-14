<?php
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

require_once(dirname(__FILE__) . '/../../config.php');
require_login();

global $OUTPUT, $PAGE;

$PAGE->set_context(context_system::instance());
$PAGE->set_url('/local/test/loadjs.php');
$PAGE->requires->js_call_amd('local_test/testmodule', 'init',
        [optional_param('clone', false, PARAM_BOOL)]);

echo $OUTPUT->header();
echo html_writer::div('Test content', '', ['id' => 'test']);
echo $OUTPUT->footer();