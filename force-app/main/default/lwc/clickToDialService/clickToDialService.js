import { EventEmitter } from 'c/utilsPrivate';
let isClickToDialEnabled = false;
const emitter = new EventEmitter();

export function isEnabled() {
  return isClickToDialEnabled;
}

export function addStateChangeListener(listener) {
  emitter.on('setClickToDial', listener);
}

export function removeStateChangeListener(listener) {
  emitter.removeListener('setClickToDial', listener);
}

export function addDialListener(listener) {
  emitter.on('clickToDial', listener);
}

export function removeDialListener(listener) {
  emitter.removeListener('clickToDial', listener);
}

export function dial(payload) {
  emitter.emit('clickToDial', payload);
}

export function enable() {
  isClickToDialEnabled = true;
  emitter.emit('setClickToDial');
}

export function disable() {
  isClickToDialEnabled = false;
  emitter.emit('setClickToDial');
}
