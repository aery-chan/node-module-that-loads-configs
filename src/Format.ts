import { FormatReturnObject } from "./interfaces/FormatReturnObject";

/**
 * Abstract Format class to be extended in your custom formats.   
 * Transforms ConfigFile data after being read and content before being written
 * @example
 * import { FormatReturnObject } from "mtlc";
 * 
 * class MyFormat extends mtlc.Format {
 * 
 *      read(data: Buffer, default_content?: string, default_options?: null): FormatReturnObject {
 *          // Do something with data
 *          const content: string = data ? data.toString() : default_content;
 * 
 *          return <FormatReturnObject>{ content };
 *      }
 * 
 *      write(content: string): string {
 *          // Do something with content
 *          return content;
 *      }
 * 
 * }
 * 
 * @global
 * @abstract
 * @class
 */
export abstract class Format {

    abstract read(data: Buffer, default_content?: any, default_options?: any): FormatReturnObject | Promise<FormatReturnObject>

    abstract write(content: any): string | Promise<string>

}

/**
 * Transforms data before it's used
 * 
 * @memberOf Format
 * @instance
 * @abstract
 * @function read
 * @param { Buffer } data
 * @param default_content 
 * @param default_options
 * @returns { FormatReturnObject | Promise<FormatReturnObject> }
 */

/**
 * Transforms content before it's written
 * 
 * @memberOf Format
 * @instance
 * @abstract
 * @function write
 * @param content
 * @returns { string | Promise<string> }
 */