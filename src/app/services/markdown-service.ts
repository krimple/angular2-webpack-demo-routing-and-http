///<reference path="../../../typings/browser/ambient/marked/marked.d.ts"/>
// this declares an "ambiant" variable - one that comes from the outside
// environment and is not defined in Typescript. Since the marked markdown
// formatting library is an ES5 construct, this is the minimum we need to do
// beyond loading the script file.
declare var marked;

import {Injectable} from 'angular2/core';

// todo - use module form of Markdown Converter library

@Injectable()
export class MarkdownService {
    // markdown object is not typescript

    toHtml(text: string) {
        return marked.parse(text);
    }
}
