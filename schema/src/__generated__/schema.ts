/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type CoreSchemaMetaSchema =
  | {
      $id?: string;
      $schema?: string;
      $ref?: string;
      $comment?: string;
      title?: string;
      description?: string;
      default?: true;
      readOnly?: boolean;
      writeOnly?: boolean;
      examples?: true[];
      multipleOf?: number;
      maximum?: number;
      exclusiveMaximum?: number;
      minimum?: number;
      exclusiveMinimum?: number;
      maxLength?: number;
      minLength?: number;
      pattern?: string;
      additionalItems?: CoreSchemaMetaSchema;
      items?: CoreSchemaMetaSchema | [CoreSchemaMetaSchema, ...CoreSchemaMetaSchema[]];
      maxItems?: number;
      minItems?: number;
      uniqueItems?: boolean;
      contains?: CoreSchemaMetaSchema;
      maxProperties?: number;
      minProperties?: number;
      required?: string[];
      additionalProperties?: CoreSchemaMetaSchema;
      definitions?: {
        [k: string]: CoreSchemaMetaSchema;
      };
      properties?: {
        [k: string]: CoreSchemaMetaSchema;
      };
      patternProperties?: {
        [k: string]: CoreSchemaMetaSchema;
      };
      dependencies?: {
        [k: string]: CoreSchemaMetaSchema | string[];
      };
      propertyNames?: CoreSchemaMetaSchema;
      const?: true;
      enum?: [true, ...unknown[]];
      type?:
        | ("array" | "boolean" | "integer" | "null" | "number" | "object" | "string")
        | [
            "array" | "boolean" | "integer" | "null" | "number" | "object" | "string",
            ...("array" | "boolean" | "integer" | "null" | "number" | "object" | "string")[]
          ];
      format?: string;
      contentMediaType?: string;
      contentEncoding?: string;
      if?: CoreSchemaMetaSchema;
      then?: CoreSchemaMetaSchema;
      else?: CoreSchemaMetaSchema;
      allOf?: [CoreSchemaMetaSchema, ...CoreSchemaMetaSchema[]];
      anyOf?: [CoreSchemaMetaSchema, ...CoreSchemaMetaSchema[]];
      oneOf?: [CoreSchemaMetaSchema, ...CoreSchemaMetaSchema[]];
      not?: CoreSchemaMetaSchema;
      [k: string]: unknown;
    }
  | boolean;

export interface Schema {
  $schema: string;
  appName: string;
  queries: {
    [k: string]: {
      operationId: string;
      description: string;
      requestBody: CoreSchemaMetaSchema;
      response: CoreSchemaMetaSchema;
    };
  };
  $defs?: {
    [k: string]: CoreSchemaMetaSchema;
  };
}
