export const prismaFieldTypeScalarNumbers = [
  "Int",
  "BigInt",
  "Float",
  "Decimal",
] as const;
export const prismaFieldTypeScalars = [
  "String",
  "Boolean",
  "DateTime",
  "Json",
  "Bytes",
  "Unsupported",
  ...prismaFieldTypeScalarNumbers,
] as const;

export type PrismaSchemaName = string;
export type PrismaSchemaNameMany = `${PrismaSchemaName}[]`;
export type PrismaSchemaNameOptional = `${PrismaSchemaName}?`;
export type PrismaModelName = string;
export type PrismaActionName = string;

export type PrismaFieldTypeScalarNumber =
  (typeof prismaFieldTypeScalarNumbers)[number];

export type PrismaTypeEnum = {
  name: string;
  values: string[];
};

export type PrismaFieldTypeScalar = (typeof prismaFieldTypeScalars)[number];
export type PrismaFieldTypeScalarMany = `${PrismaFieldTypeScalar}[]`;
export type PrismaFieldTypeScalarOptional = `${PrismaFieldTypeScalar}?`;

export type PrismaFieldType =
  | PrismaFieldTypeScalar
  | PrismaFieldTypeScalarMany
  | PrismaFieldTypeScalarOptional
  | PrismaSchemaName
  | PrismaSchemaNameMany
  | PrismaSchemaNameOptional
  | PrismaTypeEnum;

export type PrismaAttributeArguments = {
  fields: string[];
  name?: string;
  map?: string;
  length?: number;
  sort?: "Asc" | "Desc";
  clustered?: boolean;
};
export type PrismaFieldAttributeRelation =
  | Omit<PrismaAttributeArguments, "sort" | "clustered" | "fields">
  | (Omit<PrismaAttributeArguments, "sort" | "clustered"> & {
      onUpdate?: PrismaFieldAttributeRelationTrigger;
      onDelete?: PrismaFieldAttributeRelationTrigger;
      references: string[];
    });
export type PrismaFieldAttributeRelationTrigger =
  | null
  | "Cascade"
  | "NoAction"
  | "Restrict"
  | "SetNull";

export type PrismaFieldAttributes = {
  "@id": null | boolean | Omit<PrismaAttributeArguments, "fields" | "name">;

  "@default": null | unknown;
  "@unique":
    | null
    | boolean
    | Omit<PrismaAttributeArguments, "fields" | "name" | "clustered">;
  "@relation": null | PrismaFieldAttributeRelation;
  "@map": null | string | { name: string };
  "@updatedAt": null | boolean;
  "@ignore": null | boolean;
};
export type PrismaFieldValidationMessage = {
  message: string;
  value: number | string | boolean;
};
export type PrismaFieldValidation = {
  max: null | PrismaFieldValidationMessage;
  min: null | PrismaFieldValidationMessage;
  length: null | PrismaFieldValidationMessage;
  email: null | PrismaFieldValidationMessage;
  url: null | PrismaFieldValidationMessage;
  emoji: null | PrismaFieldValidationMessage;
  uuid: null | PrismaFieldValidationMessage;
  cuid: null | PrismaFieldValidationMessage;
  cuid2: null | PrismaFieldValidationMessage;
  ulid: null | PrismaFieldValidationMessage;
  regex: null | PrismaFieldValidationMessage;
  includes: null | PrismaFieldValidationMessage;
  startsWith: null | PrismaFieldValidationMessage;
  endsWith: null | PrismaFieldValidationMessage;
  datetime: null | PrismaFieldValidationMessage;
  ip: null | PrismaFieldValidationMessage;

  toTrim: null | PrismaFieldValidationMessage;
  toLowerCase: null | PrismaFieldValidationMessage;
  toUpperCase: null | PrismaFieldValidationMessage;
  gt: null | PrismaFieldValidationMessage;
  gte: null | PrismaFieldValidationMessage;
  lt: null | PrismaFieldValidationMessage;
  lte: null | PrismaFieldValidationMessage;

  int: null | PrismaFieldValidationMessage;

  positive: null | PrismaFieldValidationMessage;
  nonnegative: null | PrismaFieldValidationMessage;
  negative: null | PrismaFieldValidationMessage;
  nonpositive: null | PrismaFieldValidationMessage;

  multipleOf: null | PrismaFieldValidationMessage;

  finite: null | PrismaFieldValidationMessage;
  safe: null | PrismaFieldValidationMessage;
};
export type PrismaFieldRelation = {
  isSelfRelation: boolean;
  relationRow: string;
  relationName: null | string;
  typeScalarUsed: null | PrismaFieldTypeScalar;
  relationType: null | "one-to-one" | "one-to-many" | "many-to-many";
  schemaSourceName: PrismaSchemaName;
  schemaCibleName: PrismaSchemaName;
  isUnique: boolean;

  sourceType: PrismaSchemaName;
  cibleType: PrismaSchemaName;
  sourceName: string;
  cibleName: null | string;

  modifierSource: null | "?" | "[]";
  modifierCible: null | "?" | "[]";

  fieldName: null | string;
  referenceName: null | string;

  fields: string[];
  references: string[];
  onDelete: PrismaFieldAttributeRelationTrigger;
  onUpdate: PrismaFieldAttributeRelationTrigger;
};

export type PrismaFieldStruct = PrismaFieldAttributes & {
  fieldRow: string;
  fieldName: string;
  fieldType: PrismaFieldType;

  originalType: PrismaFieldTypeScalar | PrismaTypeEnum | PrismaSchemaName;
  modifier: null | "?" | "[]";
  relation: null | PrismaFieldRelation;
  validation: null | PrismaFieldValidation;
  symbole: null | string;
  label: null | string;
  isUnique: boolean;
};

export type PrismaSchemaStruct = {
  schemaName: PrismaSchemaName;
  label: null | string;
  textValue: string;
  textFields: string;
  fields: Record<string, PrismaFieldStruct>;
  fieldsGroupe: PrismaFieldsGroup;
};
export type PrismaFieldsGroup = {
  scalarTypesRequired: string[];
  scalarTypesOptional: string[];
  scalarTypesList: string[];

  relationsOneToOne: string[];
  relationsOneToOneRequired: string[];
  relationsOneToOneOptional: string[];
  relationsOneToOneCible: string[];

  relationsOneToMany: string[];
  relationsOneToManyRequired: string[];
  relationsOneToManyOptional: string[];
  relationsOneToManyCible: string[];

  relationsManyToMany: string[];
};
export const prismaSchemaRegex =
  /(?<description>(?:\/\/+?[^\n]*?\n\s*)*)model +(?<name>\w+) +{\s+(?<fields>[^]+?)\n\s*?}/g;
export const prismaFieldRegex =
  /(?<description>(?:\/\/+?[^\n]*\n+\s*)*) *(?<field>\w[^\n]*?) *(?<symbole>\/\/+[^\n]*?)? *\n/g;
