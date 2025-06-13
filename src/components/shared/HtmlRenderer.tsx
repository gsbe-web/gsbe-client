import DomPurify from "dompurify";
import parse from "html-react-parser";

type Props = {
	html?: string;
	children?: string;
};

export function HtmlRenderer({ html, children }: Props) {
	const rawHtml = html || children || "";
	const safeHtml = DomPurify.sanitize(rawHtml);
	return <div className="prose lg:prose-lg">{parse(safeHtml)}</div>;
}
