/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { getDefaultConfig } from './defaultConfig';

let PROVIDED_IMPL;

export default function configProviderService(serviceAPI) {
    if (!serviceAPI) {
        PROVIDED_IMPL = undefined;
    }
    PROVIDED_IMPL = {
        getPathPrefix: serviceAPI.getPathPrefix,
        getToken: serviceAPI.getToken,
        getLocalizationService: serviceAPI.getLocalizationService,
        getOneConfig: serviceAPI.getOneConfig
    };

    return { name: 'lightning-config-provider' };
}

export function getPathPrefix() {
    return (
        (PROVIDED_IMPL &&
            PROVIDED_IMPL.getPathPrefix &&
            PROVIDED_IMPL.getPathPrefix()) ||
        ''
    );
}

export function getToken(name) {
    return (
        (PROVIDED_IMPL &&
            PROVIDED_IMPL.getToken &&
            PROVIDED_IMPL.getToken(name)) ||
        ''
    );
}

export function getLocalizationService() {
    const localizationService = getDefaultConfig().getLocalizationService();

    localizationService.WallTimeToUTC = (date, timezone, callback) =>
        callback(date);
    localizationService.UTCToWallTime = (date, timezone, callback) =>
        callback(date);

    return localizationService;
}

export function getOneConfig() {
    return (
        (PROVIDED_IMPL && PROVIDED_IMPL.getOneConfig) || {
            densitySetting: ''
        }
    );
}

export function getIconSvgTemplates() {
    return PROVIDED_IMPL && PROVIDED_IMPL.iconSvgTemplates;
}
