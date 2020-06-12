/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { register } from 'lwc';
import { registerMockedWireService } from 'force/wireServiceMocks';
registerMockedWireService({ register });

export default function empty() {}
