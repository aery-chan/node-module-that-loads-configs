import * as path from "path";

import { Format } from "./interfaces/Format";
import { RawFormat } from "./formats/RawFormat.format";
import { JSONFormat } from "./formats/JSONFormat.format";

import { ConfigFile } from "./classes/ConfigFile";
import { ConfigDirectory } from "./classes/ConfigDirectory";

import * as formats from "./formats";

formats.register_format(JSONFormat, [ "json" ]);

formats.set_default_format(RawFormat);

/**
 * Creates a new ConfigFile relative to process.cwd()
 * 
```ts
import * as mlc from "@aery/mlc";

const file: mlc.ConfigFile = mlc.file("config.json");
```
 * 
 * @param { string } file_path - File path relative to process.cwd()
 * @param { ?Format } format - Format responsible for data and content transformation
 * @returns { ConfigFile }
 */
export function file(file_path: string, format?: Format): ConfigFile {
    return new ConfigFile(path.resolve(process.cwd(), file_path), format);
}

/**
 * Creates a new ConfigDirectory relative to process.cwd().   
 * When reading or writing, the ConfigDirectory's format will be used on it's ConfigFiles
 * 
```ts
import * as mlc from "@aery/mlc";

const directory: mlc.ConfigDirectory = mlc.directory("configs", new mlc.formats.JSONFormat());
```
 * 
 * @param { string } directory_path - Directory path relative to process.cwd() 
 * @param { ?Format } format - Format responsible for data and content transformation
 * @returns { ConfigDirectory }
 */
export function directory(directory_path: string, format?: Format): ConfigDirectory {
    return new ConfigDirectory(path.resolve(process.cwd(), directory_path), format);
}

export { ConfigFile } from "./classes/ConfigFile";
export { 
    ConfigDirectory,
    ConfigDirectoryReadOptions
} from "./classes/ConfigDirectory";

export { formats };
export { Format };
export { FormatReturnObject } from "./interfaces/Format";