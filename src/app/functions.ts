export function newtab(href: string): void {
	const a: HTMLAnchorElement = document.createElement("a");
	a.href = href;
	a.setAttribute("target", "_blank");
	a.click();
	a.remove();
}
