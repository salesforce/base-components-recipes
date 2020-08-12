/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningResizeObserver } from 'c/resizeObserver';
import { APP_DENSIFICATION_BREAKPOINT, appDensityValues } from 'c/layoutUtils';
import { densityValues, labelAlignValues } from 'c/fieldUtils';
import { normalizeString } from 'c/utilsPrivate';
import { getOneConfig } from 'lightning/configProvider';

export function doNormalization(val, cmpInterface) {
    const normalized = normalizeString(val, {
        fallbackValue: densityValues.AUTO,
        validValues: [
            densityValues.AUTO,
            densityValues.COMPACT,
            densityValues.COMFY
        ]
    });

    cmpInterface.setDensityPrivate(normalized);
    setLabelAlignment(cmpInterface);
}

export function setLabelAlignment(cmpInterface) {
    const fieldLabelAlignment = cmpInterface.getLabelAlignmentPrivate();
    if (isDensityComfy(cmpInterface)) {
        if (fieldLabelAlignment !== labelAlignValues.STACKED) {
            cmpInterface.setLabelAlignmentPrivate(labelAlignValues.STACKED);
            wireLabelAlignment(cmpInterface);
        }
    } else if (isDensityCompact(cmpInterface)) {
        if (fieldLabelAlignment !== labelAlignValues.HORIZONTAL) {
            cmpInterface.setLabelAlignmentPrivate(labelAlignValues.HORIZONTAL);
            wireLabelAlignment(cmpInterface);
        }
    }
}

export function resetResizeObserver(cmp, cmpInterface, isInitialRender) {
    if (cmp._resizeObserver && !isWiredDensityAuto(cmpInterface)) {
        cmp._resizeObserver.disconnect();
        cmp._resizeObserver = undefined;
    } else if (isWiredDensityAuto(cmpInterface)) {
        if (isInitialRender) {
            resizeObserverCallback(cmpInterface);
        }

        cmp._resizeObserver = setupResizeObserver(cmpInterface);
    }
}

export function disconnectResizeObserver(cmp) {
    if (cmp._resizeObserver) {
        cmp._resizeObserver.disconnect();
        cmp._resizeObserver = undefined;
    }
}

function isWiredDensityAuto(cmpInterface) {
    const density = cmpInterface.getDensityPrivate();
    const wiredDensity = getOneConfig().densitySetting;
    return (
        density === densityValues.AUTO &&
        wiredDensity !== appDensityValues.COMFY
    );
}

function isDensityComfy(cmpInterface) {
    const density = cmpInterface.getDensityPrivate();
    return (
        (density === densityValues.AUTO &&
            getOneConfig().densitySetting === appDensityValues.COMFY) ||
        density === densityValues.COMFY
    );
}

function isDensityCompact(cmpInterface) {
    const density = cmpInterface.getDensityPrivate();
    return (
        isWiredDensityAuto(cmpInterface) || density === densityValues.COMPACT
    );
}

function setupResizeObserver(cmpInterface) {
    const containerEle = cmpInterface.getContainerElement();

    const resizeObserver = new LightningResizeObserver(
        cmpInterface.getResizeObserverCallback(resizeObserverCallback)
    );

    resizeObserver.observe(containerEle);
    return resizeObserver;
}

export function resizeObserverCallback(cmpInterface) {
    const containerEle = cmpInterface.getContainerElement();

    if (containerEle && containerEle.clientWidth) {
        const containerWidth = containerEle.getBoundingClientRect().width;
        const fieldLabelAlignment = cmpInterface.getLabelAlignmentPrivate();

        let alignmentChanged = false;
        if (
            containerWidth < APP_DENSIFICATION_BREAKPOINT &&
            fieldLabelAlignment !== labelAlignValues.STACKED
        ) {
            cmpInterface.setLabelAlignmentPrivate(labelAlignValues.STACKED);
            alignmentChanged = true;
        }
        if (
            containerWidth >= APP_DENSIFICATION_BREAKPOINT &&
            fieldLabelAlignment !== labelAlignValues.HORIZONTAL
        ) {
            cmpInterface.setLabelAlignmentPrivate(labelAlignValues.HORIZONTAL);
            alignmentChanged = true;
        }
        if (alignmentChanged) {
            wireLabelAlignment(cmpInterface);
        }
    }
}

function wireLabelAlignment(cmpInterface) {
    const recordUi = cmpInterface.getRecordUi();
    if (recordUi) {
        const fields = cmpInterface.getInputOutputFields();
        recordUi.labelAlignment = cmpInterface.getLabelAlignmentPrivate();
        for (let i = 0; i < fields.length; i += 1) {
            fields[i].wireRecordUi(recordUi);
        }
    }
}
