//import { isInternalLink } from './main'
//import './prep.ts';
import './main';
///// <reference path="main.ts" />

console.log((global as any).ICM.Computation);

const isInternalLink = (global as any).ICM.Computation.isInternalLink;

test('should return false given external link', () => {
    expect(isInternalLink('https://google.com')).toBe(false)
})

test('should return true given internal link', () => {
    expect(isInternalLink('/some-page')).toBe(true)
})