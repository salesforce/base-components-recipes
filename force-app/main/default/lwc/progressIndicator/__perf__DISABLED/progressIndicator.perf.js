import { measure, main } from '../../../perf';
import { createElement } from 'lwc';
import Container from './container/container';

measure('progressIndicator', 25, benchmark, run, (tag, run) => {
  const elements = [];
  const updateToStep = '5';
  const progressIndicators = [
    {
      currentStep: '2',
      type: 'path'
    },

    {
      currentStep: '8',
      type: 'path'
    },

    {
      currentStep: '3',
      type: 'base'
    },

    {
      currentStep: '3',
      type: 'base',
      hasError: true
    },

    {
      currentStep: '9',
      type: 'base',
      variant: 'shaded'
    }
  ];

  run('create', i => {
    const container = createElement(tag, { is: Container });
    Object.assign(container, progressIndicators[i % progressIndicators.length]);

    elements[i] = container;
  });

  run('append', i => {
    main.appendChild(elements[i]);
  });

  run('update', i => {
    elements[i].currentStep = updateToStep;
    elements[i].hasError =
      elements[i].type === 'base' ? !elements[i].hasError : false;
  });

  run('remove', i => {
    main.removeChild(elements[i]);
  });
});
