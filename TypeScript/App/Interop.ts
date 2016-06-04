var globalScope = typeof window === 'undefined' ? this : window;

export function getGlobal(identifier: string) {
	return identifier.split('.').reduce((value, key) => value[key], globalScope);
}
