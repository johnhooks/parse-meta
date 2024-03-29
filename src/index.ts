import { BaseNode, Program } from "estree";

import { metaBuilder } from "./meta-builder.js";
import { metaParser } from "./meta-parser.js";

export type { Metadata, WordMatch } from "./types.js";

/**
 * Parse Markdown code fence metadata.
 *
 * @public
 */
export function parse(input: string) {
	const estree = metaParser.parse(input, { ecmaVersion: "latest" }) as BaseNode as Program;
	const metadata = metaBuilder(estree);
	return metadata;
}
