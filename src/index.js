import _ from 'lodash';
import numRef from './ref.json';

export function numToWord(num) {
    return _.reduce(
        numRef,
        (prev, curr) => {
            return curr.num === num ? ref.word : prev;
        },
        ''
    );
}

export function wordToNum(word) {
    return _.reduce(
        numRef,
        (prev, curr) => {
            return curr.word === word && word.toLowerCase() ? curr.num : prev;
        },
        -1
    );
}