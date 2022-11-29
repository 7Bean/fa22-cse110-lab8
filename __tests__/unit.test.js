// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// testing isPhonenumber
test('checking if 123-098-7654 is valid phone number', () => {
    expect(functions.isPhoneNumber('123-098-7654')).toBe(true);
})

test('checking if (310)---558-7694 is valid phone number', () => {
    expect(functions.isPhoneNumber('(310)---558-7694')).toBe(true);
})

test('checking if 3105587694 is valid phone number', () => {
    expect(functions.isPhoneNumber('3105587694')).toBe(false);
})

test('checking if (!##)-$%^-&*() is valid phone number', () => {
    expect(functions.isPhoneNumber('(!##)-$%^-&*()')).toBe(false);
})

// testing isEmail
test('checking if bjk004@ucsd.edu is valid email', () => {
    expect(functions.isEmail('bjk004@ucsd.edu')).toBe(true);
})

test('checking if blahblah@totallyrealwebsite.com is valid email', () => {
    expect(functions.isEmail('blahblah@totallyrealwebsite.com')).toBe(true);
})

test('checking if false#$!@big.com is valid email', () => {
    expect(functions.isEmail('false#$!@big.com')).toBe(false);
})

test('checking if name123email.com is valid email', () => {
    expect(functions.isEmail('name123email.com')).toBe(false);
})

// testing isStrongPassword
test('checking if L9_s is a strong password', () => {
    expect(functions.isStrongPassword('L9_s')).toBe(true);
})

test('checking if ABCDEFGHIJKLMNO is a strong password', () => {
    expect(functions.isStrongPassword('ABCDEFGHIJKLMNO')).toBe(true);
})

test('checking if maxcharacterlimit is a strong password', () => {
    expect(functions.isStrongPassword('maxcharacterlimit')).toBe(false);
})

test('checking if 9_noletter is a strong password', () => {
    expect(functions.isStrongPassword('9_noletter')).toBe(false);
})

// testing isDate
test('checking if 11/15/2022 is a valid date', () => {
    expect(functions.isDate('11/15/2022')).toBe(true);
})

test('checking if 4/40/2099 is a valid date', () => {
    expect(functions.isDate('4/1/2099')).toBe(true);
})

test('checking if 4-1-2099 is a valid date', () => {
    expect(functions.isDate('4-1-2099')).toBe(false);
})

test('checking if September 30 2022 is a valid date', () => {
    expect(functions.isDate('September 30 2022')).toBe(false);
})

// testing isHexColor
test('checking if #b58 is a valid hex color', () => {
    expect(functions.isHexColor('#b58')).toBe(true);
})

test('checking if 49AE0E is a valid hex color', () => {
    expect(functions.isHexColor('#49AE0E')).toBe(true);
})

test('checking if #49A0E is a valid hex color', () => {
    expect(functions.isHexColor('#49A0E')).toBe(false);
})

test('checking if #50KLZ8 is a valid hex color', () => {
    expect(functions.isHexColor('#50KLZ8')).toBe(false);
})