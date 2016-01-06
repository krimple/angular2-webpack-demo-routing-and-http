///<reference path="../../../typings/browser/ambient/marked/marked.d.ts"/>
import {Injectable} from 'angular2/core';

// todo - use module form of Markdown Converter library

@Injectable()
export class MarkdownService {
    // markdown object is not typescript

    toHtml(text: string) {
        return marked.parse(text);
    }
}
