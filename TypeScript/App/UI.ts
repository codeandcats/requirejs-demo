// This file is a TypeScript wrapper around the legacy js UI service.
// By wrapping it with an actual .ts file instead of just a typings file (.d.ts) we
// are able to import this file as a dependency in other typescript files.
// Eventually once all the legacy js service consumers are converted over to TypeScript 
// then one can start converting the services over to be fully implemented in TypeScript too.
import { getGlobal } from './Interop';

export type MessageType = 'info' | 'success' | 'warning' | 'danger'; 

var UI = getGlobal('UI');

export const showMessage = <(message: string, type: MessageType) => void>UI.showMessage;
