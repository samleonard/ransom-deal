// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';

// by default, this is set to 1000ms, which is greater than jest's 500 ms,
// leading to warnings about worker teardown
configure({ asyncUtilTimeout: 400 });
