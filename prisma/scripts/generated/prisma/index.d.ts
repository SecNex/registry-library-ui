
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model file
 * 
 */
export type file = $Result.DefaultSelection<Prisma.$filePayload>
/**
 * Model repository
 * 
 */
export type repository = $Result.DefaultSelection<Prisma.$repositoryPayload>
/**
 * Model webhook
 * 
 */
export type webhook = $Result.DefaultSelection<Prisma.$webhookPayload>
/**
 * Model webhook_event
 * 
 */
export type webhook_event = $Result.DefaultSelection<Prisma.$webhook_eventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const webhook_event_status: {
  pending: 'pending',
  success: 'success',
  failed: 'failed',
  cancelled: 'cancelled'
};

export type webhook_event_status = (typeof webhook_event_status)[keyof typeof webhook_event_status]


export const repository_visibility: {
  public: 'public',
  private: 'private'
};

export type repository_visibility = (typeof repository_visibility)[keyof typeof repository_visibility]

}

export type webhook_event_status = $Enums.webhook_event_status

export const webhook_event_status: typeof $Enums.webhook_event_status

export type repository_visibility = $Enums.repository_visibility

export const repository_visibility: typeof $Enums.repository_visibility

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Files
 * const files = await prisma.file.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Files
   * const files = await prisma.file.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.file`: Exposes CRUD operations for the **file** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.fileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repository`: Exposes CRUD operations for the **repository** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Repositories
    * const repositories = await prisma.repository.findMany()
    * ```
    */
  get repository(): Prisma.repositoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webhook`: Exposes CRUD operations for the **webhook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Webhooks
    * const webhooks = await prisma.webhook.findMany()
    * ```
    */
  get webhook(): Prisma.webhookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webhook_event`: Exposes CRUD operations for the **webhook_event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Webhook_events
    * const webhook_events = await prisma.webhook_event.findMany()
    * ```
    */
  get webhook_event(): Prisma.webhook_eventDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    file: 'file',
    repository: 'repository',
    webhook: 'webhook',
    webhook_event: 'webhook_event'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "file" | "repository" | "webhook" | "webhook_event"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      file: {
        payload: Prisma.$filePayload<ExtArgs>
        fields: Prisma.fileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload>
          }
          findFirst: {
            args: Prisma.fileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload>
          }
          findMany: {
            args: Prisma.fileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload>[]
          }
          create: {
            args: Prisma.fileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload>
          }
          createMany: {
            args: Prisma.fileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.fileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload>[]
          }
          delete: {
            args: Prisma.fileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload>
          }
          update: {
            args: Prisma.fileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload>
          }
          deleteMany: {
            args: Prisma.fileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.fileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.fileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload>[]
          }
          upsert: {
            args: Prisma.fileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload>
          }
          aggregate: {
            args: Prisma.FileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFile>
          }
          groupBy: {
            args: Prisma.fileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileGroupByOutputType>[]
          }
          count: {
            args: Prisma.fileCountArgs<ExtArgs>
            result: $Utils.Optional<FileCountAggregateOutputType> | number
          }
        }
      }
      repository: {
        payload: Prisma.$repositoryPayload<ExtArgs>
        fields: Prisma.repositoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.repositoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repositoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.repositoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repositoryPayload>
          }
          findFirst: {
            args: Prisma.repositoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repositoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.repositoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repositoryPayload>
          }
          findMany: {
            args: Prisma.repositoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repositoryPayload>[]
          }
          create: {
            args: Prisma.repositoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repositoryPayload>
          }
          createMany: {
            args: Prisma.repositoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.repositoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repositoryPayload>[]
          }
          delete: {
            args: Prisma.repositoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repositoryPayload>
          }
          update: {
            args: Prisma.repositoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repositoryPayload>
          }
          deleteMany: {
            args: Prisma.repositoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.repositoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.repositoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repositoryPayload>[]
          }
          upsert: {
            args: Prisma.repositoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repositoryPayload>
          }
          aggregate: {
            args: Prisma.RepositoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepository>
          }
          groupBy: {
            args: Prisma.repositoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepositoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.repositoryCountArgs<ExtArgs>
            result: $Utils.Optional<RepositoryCountAggregateOutputType> | number
          }
        }
      }
      webhook: {
        payload: Prisma.$webhookPayload<ExtArgs>
        fields: Prisma.webhookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.webhookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.webhookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhookPayload>
          }
          findFirst: {
            args: Prisma.webhookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.webhookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhookPayload>
          }
          findMany: {
            args: Prisma.webhookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhookPayload>[]
          }
          create: {
            args: Prisma.webhookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhookPayload>
          }
          createMany: {
            args: Prisma.webhookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.webhookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhookPayload>[]
          }
          delete: {
            args: Prisma.webhookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhookPayload>
          }
          update: {
            args: Prisma.webhookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhookPayload>
          }
          deleteMany: {
            args: Prisma.webhookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.webhookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.webhookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhookPayload>[]
          }
          upsert: {
            args: Prisma.webhookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhookPayload>
          }
          aggregate: {
            args: Prisma.WebhookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhook>
          }
          groupBy: {
            args: Prisma.webhookGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebhookGroupByOutputType>[]
          }
          count: {
            args: Prisma.webhookCountArgs<ExtArgs>
            result: $Utils.Optional<WebhookCountAggregateOutputType> | number
          }
        }
      }
      webhook_event: {
        payload: Prisma.$webhook_eventPayload<ExtArgs>
        fields: Prisma.webhook_eventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.webhook_eventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhook_eventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.webhook_eventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhook_eventPayload>
          }
          findFirst: {
            args: Prisma.webhook_eventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhook_eventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.webhook_eventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhook_eventPayload>
          }
          findMany: {
            args: Prisma.webhook_eventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhook_eventPayload>[]
          }
          create: {
            args: Prisma.webhook_eventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhook_eventPayload>
          }
          createMany: {
            args: Prisma.webhook_eventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.webhook_eventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhook_eventPayload>[]
          }
          delete: {
            args: Prisma.webhook_eventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhook_eventPayload>
          }
          update: {
            args: Prisma.webhook_eventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhook_eventPayload>
          }
          deleteMany: {
            args: Prisma.webhook_eventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.webhook_eventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.webhook_eventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhook_eventPayload>[]
          }
          upsert: {
            args: Prisma.webhook_eventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhook_eventPayload>
          }
          aggregate: {
            args: Prisma.Webhook_eventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhook_event>
          }
          groupBy: {
            args: Prisma.webhook_eventGroupByArgs<ExtArgs>
            result: $Utils.Optional<Webhook_eventGroupByOutputType>[]
          }
          count: {
            args: Prisma.webhook_eventCountArgs<ExtArgs>
            result: $Utils.Optional<Webhook_eventCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    file?: fileOmit
    repository?: repositoryOmit
    webhook?: webhookOmit
    webhook_event?: webhook_eventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RepositoryCountOutputType
   */

  export type RepositoryCountOutputType = {
    file: number
  }

  export type RepositoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | RepositoryCountOutputTypeCountFileArgs
  }

  // Custom InputTypes
  /**
   * RepositoryCountOutputType without action
   */
  export type RepositoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepositoryCountOutputType
     */
    select?: RepositoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RepositoryCountOutputType without action
   */
  export type RepositoryCountOutputTypeCountFileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fileWhereInput
  }


  /**
   * Count Type WebhookCountOutputType
   */

  export type WebhookCountOutputType = {
    webhook_event: number
  }

  export type WebhookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    webhook_event?: boolean | WebhookCountOutputTypeCountWebhook_eventArgs
  }

  // Custom InputTypes
  /**
   * WebhookCountOutputType without action
   */
  export type WebhookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookCountOutputType
     */
    select?: WebhookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WebhookCountOutputType without action
   */
  export type WebhookCountOutputTypeCountWebhook_eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: webhook_eventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model file
   */

  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileMinAggregateOutputType = {
    id: string | null
    slug: string | null
    repository_id: string | null
    file_extension: string | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FileMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    repository_id: string | null
    file_extension: string | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FileCountAggregateOutputType = {
    id: number
    slug: number
    repository_id: number
    file_extension: number
    content: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type FileMinAggregateInputType = {
    id?: true
    slug?: true
    repository_id?: true
    file_extension?: true
    content?: true
    created_at?: true
    updated_at?: true
  }

  export type FileMaxAggregateInputType = {
    id?: true
    slug?: true
    repository_id?: true
    file_extension?: true
    content?: true
    created_at?: true
    updated_at?: true
  }

  export type FileCountAggregateInputType = {
    id?: true
    slug?: true
    repository_id?: true
    file_extension?: true
    content?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type FileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which file to aggregate.
     */
    where?: fileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: fileOrderByWithRelationInput | fileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type fileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fileWhereInput
    orderBy?: fileOrderByWithAggregationInput | fileOrderByWithAggregationInput[]
    by: FileScalarFieldEnum[] | FileScalarFieldEnum
    having?: fileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }

  export type FileGroupByOutputType = {
    id: string
    slug: string
    repository_id: string
    file_extension: string
    content: string
    created_at: Date
    updated_at: Date
    _count: FileCountAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends fileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type fileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    repository_id?: boolean
    file_extension?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    repository?: boolean | repositoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type fileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    repository_id?: boolean
    file_extension?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    repository?: boolean | repositoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type fileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    repository_id?: boolean
    file_extension?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    repository?: boolean | repositoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type fileSelectScalar = {
    id?: boolean
    slug?: boolean
    repository_id?: boolean
    file_extension?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type fileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "repository_id" | "file_extension" | "content" | "created_at" | "updated_at", ExtArgs["result"]["file"]>
  export type fileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repository?: boolean | repositoryDefaultArgs<ExtArgs>
  }
  export type fileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repository?: boolean | repositoryDefaultArgs<ExtArgs>
  }
  export type fileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repository?: boolean | repositoryDefaultArgs<ExtArgs>
  }

  export type $filePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "file"
    objects: {
      repository: Prisma.$repositoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      repository_id: string
      file_extension: string
      content: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["file"]>
    composites: {}
  }

  type fileGetPayload<S extends boolean | null | undefined | fileDefaultArgs> = $Result.GetResult<Prisma.$filePayload, S>

  type fileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<fileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface fileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['file'], meta: { name: 'file' } }
    /**
     * Find zero or one File that matches the filter.
     * @param {fileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends fileFindUniqueArgs>(args: SelectSubset<T, fileFindUniqueArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one File that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {fileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends fileFindUniqueOrThrowArgs>(args: SelectSubset<T, fileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends fileFindFirstArgs>(args?: SelectSubset<T, fileFindFirstArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends fileFindFirstOrThrowArgs>(args?: SelectSubset<T, fileFindFirstOrThrowArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends fileFindManyArgs>(args?: SelectSubset<T, fileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a File.
     * @param {fileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
     */
    create<T extends fileCreateArgs>(args: SelectSubset<T, fileCreateArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Files.
     * @param {fileCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends fileCreateManyArgs>(args?: SelectSubset<T, fileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Files and returns the data saved in the database.
     * @param {fileCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends fileCreateManyAndReturnArgs>(args?: SelectSubset<T, fileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a File.
     * @param {fileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
     */
    delete<T extends fileDeleteArgs>(args: SelectSubset<T, fileDeleteArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one File.
     * @param {fileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends fileUpdateArgs>(args: SelectSubset<T, fileUpdateArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Files.
     * @param {fileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends fileDeleteManyArgs>(args?: SelectSubset<T, fileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends fileUpdateManyArgs>(args: SelectSubset<T, fileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files and returns the data updated in the database.
     * @param {fileUpdateManyAndReturnArgs} args - Arguments to update many Files.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends fileUpdateManyAndReturnArgs>(args: SelectSubset<T, fileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one File.
     * @param {fileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
     */
    upsert<T extends fileUpsertArgs>(args: SelectSubset<T, fileUpsertArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends fileCountArgs>(
      args?: Subset<T, fileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends fileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fileGroupByArgs['orderBy'] }
        : { orderBy?: fileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, fileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the file model
   */
  readonly fields: fileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for file.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    repository<T extends repositoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, repositoryDefaultArgs<ExtArgs>>): Prisma__repositoryClient<$Result.GetResult<Prisma.$repositoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the file model
   */
  interface fileFieldRefs {
    readonly id: FieldRef<"file", 'String'>
    readonly slug: FieldRef<"file", 'String'>
    readonly repository_id: FieldRef<"file", 'String'>
    readonly file_extension: FieldRef<"file", 'String'>
    readonly content: FieldRef<"file", 'String'>
    readonly created_at: FieldRef<"file", 'DateTime'>
    readonly updated_at: FieldRef<"file", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * file findUnique
   */
  export type fileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
    /**
     * Filter, which file to fetch.
     */
    where: fileWhereUniqueInput
  }

  /**
   * file findUniqueOrThrow
   */
  export type fileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
    /**
     * Filter, which file to fetch.
     */
    where: fileWhereUniqueInput
  }

  /**
   * file findFirst
   */
  export type fileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
    /**
     * Filter, which file to fetch.
     */
    where?: fileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: fileOrderByWithRelationInput | fileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for files.
     */
    cursor?: fileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * file findFirstOrThrow
   */
  export type fileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
    /**
     * Filter, which file to fetch.
     */
    where?: fileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: fileOrderByWithRelationInput | fileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for files.
     */
    cursor?: fileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * file findMany
   */
  export type fileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
    /**
     * Filter, which files to fetch.
     */
    where?: fileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: fileOrderByWithRelationInput | fileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing files.
     */
    cursor?: fileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * file create
   */
  export type fileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
    /**
     * The data needed to create a file.
     */
    data: XOR<fileCreateInput, fileUncheckedCreateInput>
  }

  /**
   * file createMany
   */
  export type fileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many files.
     */
    data: fileCreateManyInput | fileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * file createManyAndReturn
   */
  export type fileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * The data used to create many files.
     */
    data: fileCreateManyInput | fileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * file update
   */
  export type fileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
    /**
     * The data needed to update a file.
     */
    data: XOR<fileUpdateInput, fileUncheckedUpdateInput>
    /**
     * Choose, which file to update.
     */
    where: fileWhereUniqueInput
  }

  /**
   * file updateMany
   */
  export type fileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update files.
     */
    data: XOR<fileUpdateManyMutationInput, fileUncheckedUpdateManyInput>
    /**
     * Filter which files to update
     */
    where?: fileWhereInput
    /**
     * Limit how many files to update.
     */
    limit?: number
  }

  /**
   * file updateManyAndReturn
   */
  export type fileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * The data used to update files.
     */
    data: XOR<fileUpdateManyMutationInput, fileUncheckedUpdateManyInput>
    /**
     * Filter which files to update
     */
    where?: fileWhereInput
    /**
     * Limit how many files to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * file upsert
   */
  export type fileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
    /**
     * The filter to search for the file to update in case it exists.
     */
    where: fileWhereUniqueInput
    /**
     * In case the file found by the `where` argument doesn't exist, create a new file with this data.
     */
    create: XOR<fileCreateInput, fileUncheckedCreateInput>
    /**
     * In case the file was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fileUpdateInput, fileUncheckedUpdateInput>
  }

  /**
   * file delete
   */
  export type fileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
    /**
     * Filter which file to delete.
     */
    where: fileWhereUniqueInput
  }

  /**
   * file deleteMany
   */
  export type fileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which files to delete
     */
    where?: fileWhereInput
    /**
     * Limit how many files to delete.
     */
    limit?: number
  }

  /**
   * file without action
   */
  export type fileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
  }


  /**
   * Model repository
   */

  export type AggregateRepository = {
    _count: RepositoryCountAggregateOutputType | null
    _min: RepositoryMinAggregateOutputType | null
    _max: RepositoryMaxAggregateOutputType | null
  }

  export type RepositoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    url: string | null
    visibility: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RepositoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    url: string | null
    visibility: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RepositoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    url: number
    visibility: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RepositoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    url?: true
    visibility?: true
    created_at?: true
    updated_at?: true
  }

  export type RepositoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    url?: true
    visibility?: true
    created_at?: true
    updated_at?: true
  }

  export type RepositoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    url?: true
    visibility?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RepositoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which repository to aggregate.
     */
    where?: repositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of repositories to fetch.
     */
    orderBy?: repositoryOrderByWithRelationInput | repositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: repositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned repositories
    **/
    _count?: true | RepositoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepositoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepositoryMaxAggregateInputType
  }

  export type GetRepositoryAggregateType<T extends RepositoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRepository]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepository[P]>
      : GetScalarType<T[P], AggregateRepository[P]>
  }




  export type repositoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: repositoryWhereInput
    orderBy?: repositoryOrderByWithAggregationInput | repositoryOrderByWithAggregationInput[]
    by: RepositoryScalarFieldEnum[] | RepositoryScalarFieldEnum
    having?: repositoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepositoryCountAggregateInputType | true
    _min?: RepositoryMinAggregateInputType
    _max?: RepositoryMaxAggregateInputType
  }

  export type RepositoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    url: string
    visibility: string
    created_at: Date
    updated_at: Date
    _count: RepositoryCountAggregateOutputType | null
    _min: RepositoryMinAggregateOutputType | null
    _max: RepositoryMaxAggregateOutputType | null
  }

  type GetRepositoryGroupByPayload<T extends repositoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepositoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepositoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepositoryGroupByOutputType[P]>
            : GetScalarType<T[P], RepositoryGroupByOutputType[P]>
        }
      >
    >


  export type repositorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    url?: boolean
    visibility?: boolean
    created_at?: boolean
    updated_at?: boolean
    file?: boolean | repository$fileArgs<ExtArgs>
    _count?: boolean | RepositoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repository"]>

  export type repositorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    url?: boolean
    visibility?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["repository"]>

  export type repositorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    url?: boolean
    visibility?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["repository"]>

  export type repositorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    url?: boolean
    visibility?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type repositoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "url" | "visibility" | "created_at" | "updated_at", ExtArgs["result"]["repository"]>
  export type repositoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | repository$fileArgs<ExtArgs>
    _count?: boolean | RepositoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type repositoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type repositoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $repositoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "repository"
    objects: {
      file: Prisma.$filePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      url: string
      visibility: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["repository"]>
    composites: {}
  }

  type repositoryGetPayload<S extends boolean | null | undefined | repositoryDefaultArgs> = $Result.GetResult<Prisma.$repositoryPayload, S>

  type repositoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<repositoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepositoryCountAggregateInputType | true
    }

  export interface repositoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['repository'], meta: { name: 'repository' } }
    /**
     * Find zero or one Repository that matches the filter.
     * @param {repositoryFindUniqueArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends repositoryFindUniqueArgs>(args: SelectSubset<T, repositoryFindUniqueArgs<ExtArgs>>): Prisma__repositoryClient<$Result.GetResult<Prisma.$repositoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Repository that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {repositoryFindUniqueOrThrowArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends repositoryFindUniqueOrThrowArgs>(args: SelectSubset<T, repositoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__repositoryClient<$Result.GetResult<Prisma.$repositoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repository that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repositoryFindFirstArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends repositoryFindFirstArgs>(args?: SelectSubset<T, repositoryFindFirstArgs<ExtArgs>>): Prisma__repositoryClient<$Result.GetResult<Prisma.$repositoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repository that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repositoryFindFirstOrThrowArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends repositoryFindFirstOrThrowArgs>(args?: SelectSubset<T, repositoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__repositoryClient<$Result.GetResult<Prisma.$repositoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Repositories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repositoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Repositories
     * const repositories = await prisma.repository.findMany()
     * 
     * // Get first 10 Repositories
     * const repositories = await prisma.repository.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repositoryWithIdOnly = await prisma.repository.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends repositoryFindManyArgs>(args?: SelectSubset<T, repositoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$repositoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Repository.
     * @param {repositoryCreateArgs} args - Arguments to create a Repository.
     * @example
     * // Create one Repository
     * const Repository = await prisma.repository.create({
     *   data: {
     *     // ... data to create a Repository
     *   }
     * })
     * 
     */
    create<T extends repositoryCreateArgs>(args: SelectSubset<T, repositoryCreateArgs<ExtArgs>>): Prisma__repositoryClient<$Result.GetResult<Prisma.$repositoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Repositories.
     * @param {repositoryCreateManyArgs} args - Arguments to create many Repositories.
     * @example
     * // Create many Repositories
     * const repository = await prisma.repository.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends repositoryCreateManyArgs>(args?: SelectSubset<T, repositoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Repositories and returns the data saved in the database.
     * @param {repositoryCreateManyAndReturnArgs} args - Arguments to create many Repositories.
     * @example
     * // Create many Repositories
     * const repository = await prisma.repository.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Repositories and only return the `id`
     * const repositoryWithIdOnly = await prisma.repository.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends repositoryCreateManyAndReturnArgs>(args?: SelectSubset<T, repositoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$repositoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Repository.
     * @param {repositoryDeleteArgs} args - Arguments to delete one Repository.
     * @example
     * // Delete one Repository
     * const Repository = await prisma.repository.delete({
     *   where: {
     *     // ... filter to delete one Repository
     *   }
     * })
     * 
     */
    delete<T extends repositoryDeleteArgs>(args: SelectSubset<T, repositoryDeleteArgs<ExtArgs>>): Prisma__repositoryClient<$Result.GetResult<Prisma.$repositoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Repository.
     * @param {repositoryUpdateArgs} args - Arguments to update one Repository.
     * @example
     * // Update one Repository
     * const repository = await prisma.repository.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends repositoryUpdateArgs>(args: SelectSubset<T, repositoryUpdateArgs<ExtArgs>>): Prisma__repositoryClient<$Result.GetResult<Prisma.$repositoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Repositories.
     * @param {repositoryDeleteManyArgs} args - Arguments to filter Repositories to delete.
     * @example
     * // Delete a few Repositories
     * const { count } = await prisma.repository.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends repositoryDeleteManyArgs>(args?: SelectSubset<T, repositoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repositories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repositoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Repositories
     * const repository = await prisma.repository.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends repositoryUpdateManyArgs>(args: SelectSubset<T, repositoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repositories and returns the data updated in the database.
     * @param {repositoryUpdateManyAndReturnArgs} args - Arguments to update many Repositories.
     * @example
     * // Update many Repositories
     * const repository = await prisma.repository.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Repositories and only return the `id`
     * const repositoryWithIdOnly = await prisma.repository.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends repositoryUpdateManyAndReturnArgs>(args: SelectSubset<T, repositoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$repositoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Repository.
     * @param {repositoryUpsertArgs} args - Arguments to update or create a Repository.
     * @example
     * // Update or create a Repository
     * const repository = await prisma.repository.upsert({
     *   create: {
     *     // ... data to create a Repository
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Repository we want to update
     *   }
     * })
     */
    upsert<T extends repositoryUpsertArgs>(args: SelectSubset<T, repositoryUpsertArgs<ExtArgs>>): Prisma__repositoryClient<$Result.GetResult<Prisma.$repositoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Repositories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repositoryCountArgs} args - Arguments to filter Repositories to count.
     * @example
     * // Count the number of Repositories
     * const count = await prisma.repository.count({
     *   where: {
     *     // ... the filter for the Repositories we want to count
     *   }
     * })
    **/
    count<T extends repositoryCountArgs>(
      args?: Subset<T, repositoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepositoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Repository.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RepositoryAggregateArgs>(args: Subset<T, RepositoryAggregateArgs>): Prisma.PrismaPromise<GetRepositoryAggregateType<T>>

    /**
     * Group by Repository.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repositoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends repositoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: repositoryGroupByArgs['orderBy'] }
        : { orderBy?: repositoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, repositoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepositoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the repository model
   */
  readonly fields: repositoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for repository.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__repositoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    file<T extends repository$fileArgs<ExtArgs> = {}>(args?: Subset<T, repository$fileArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the repository model
   */
  interface repositoryFieldRefs {
    readonly id: FieldRef<"repository", 'String'>
    readonly name: FieldRef<"repository", 'String'>
    readonly slug: FieldRef<"repository", 'String'>
    readonly url: FieldRef<"repository", 'String'>
    readonly visibility: FieldRef<"repository", 'String'>
    readonly created_at: FieldRef<"repository", 'DateTime'>
    readonly updated_at: FieldRef<"repository", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * repository findUnique
   */
  export type repositoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repository
     */
    select?: repositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the repository
     */
    omit?: repositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repositoryInclude<ExtArgs> | null
    /**
     * Filter, which repository to fetch.
     */
    where: repositoryWhereUniqueInput
  }

  /**
   * repository findUniqueOrThrow
   */
  export type repositoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repository
     */
    select?: repositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the repository
     */
    omit?: repositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repositoryInclude<ExtArgs> | null
    /**
     * Filter, which repository to fetch.
     */
    where: repositoryWhereUniqueInput
  }

  /**
   * repository findFirst
   */
  export type repositoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repository
     */
    select?: repositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the repository
     */
    omit?: repositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repositoryInclude<ExtArgs> | null
    /**
     * Filter, which repository to fetch.
     */
    where?: repositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of repositories to fetch.
     */
    orderBy?: repositoryOrderByWithRelationInput | repositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for repositories.
     */
    cursor?: repositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of repositories.
     */
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * repository findFirstOrThrow
   */
  export type repositoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repository
     */
    select?: repositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the repository
     */
    omit?: repositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repositoryInclude<ExtArgs> | null
    /**
     * Filter, which repository to fetch.
     */
    where?: repositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of repositories to fetch.
     */
    orderBy?: repositoryOrderByWithRelationInput | repositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for repositories.
     */
    cursor?: repositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of repositories.
     */
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * repository findMany
   */
  export type repositoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repository
     */
    select?: repositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the repository
     */
    omit?: repositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repositoryInclude<ExtArgs> | null
    /**
     * Filter, which repositories to fetch.
     */
    where?: repositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of repositories to fetch.
     */
    orderBy?: repositoryOrderByWithRelationInput | repositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing repositories.
     */
    cursor?: repositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` repositories.
     */
    skip?: number
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * repository create
   */
  export type repositoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repository
     */
    select?: repositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the repository
     */
    omit?: repositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repositoryInclude<ExtArgs> | null
    /**
     * The data needed to create a repository.
     */
    data: XOR<repositoryCreateInput, repositoryUncheckedCreateInput>
  }

  /**
   * repository createMany
   */
  export type repositoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many repositories.
     */
    data: repositoryCreateManyInput | repositoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * repository createManyAndReturn
   */
  export type repositoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repository
     */
    select?: repositorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the repository
     */
    omit?: repositoryOmit<ExtArgs> | null
    /**
     * The data used to create many repositories.
     */
    data: repositoryCreateManyInput | repositoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * repository update
   */
  export type repositoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repository
     */
    select?: repositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the repository
     */
    omit?: repositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repositoryInclude<ExtArgs> | null
    /**
     * The data needed to update a repository.
     */
    data: XOR<repositoryUpdateInput, repositoryUncheckedUpdateInput>
    /**
     * Choose, which repository to update.
     */
    where: repositoryWhereUniqueInput
  }

  /**
   * repository updateMany
   */
  export type repositoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update repositories.
     */
    data: XOR<repositoryUpdateManyMutationInput, repositoryUncheckedUpdateManyInput>
    /**
     * Filter which repositories to update
     */
    where?: repositoryWhereInput
    /**
     * Limit how many repositories to update.
     */
    limit?: number
  }

  /**
   * repository updateManyAndReturn
   */
  export type repositoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repository
     */
    select?: repositorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the repository
     */
    omit?: repositoryOmit<ExtArgs> | null
    /**
     * The data used to update repositories.
     */
    data: XOR<repositoryUpdateManyMutationInput, repositoryUncheckedUpdateManyInput>
    /**
     * Filter which repositories to update
     */
    where?: repositoryWhereInput
    /**
     * Limit how many repositories to update.
     */
    limit?: number
  }

  /**
   * repository upsert
   */
  export type repositoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repository
     */
    select?: repositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the repository
     */
    omit?: repositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repositoryInclude<ExtArgs> | null
    /**
     * The filter to search for the repository to update in case it exists.
     */
    where: repositoryWhereUniqueInput
    /**
     * In case the repository found by the `where` argument doesn't exist, create a new repository with this data.
     */
    create: XOR<repositoryCreateInput, repositoryUncheckedCreateInput>
    /**
     * In case the repository was found with the provided `where` argument, update it with this data.
     */
    update: XOR<repositoryUpdateInput, repositoryUncheckedUpdateInput>
  }

  /**
   * repository delete
   */
  export type repositoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repository
     */
    select?: repositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the repository
     */
    omit?: repositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repositoryInclude<ExtArgs> | null
    /**
     * Filter which repository to delete.
     */
    where: repositoryWhereUniqueInput
  }

  /**
   * repository deleteMany
   */
  export type repositoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which repositories to delete
     */
    where?: repositoryWhereInput
    /**
     * Limit how many repositories to delete.
     */
    limit?: number
  }

  /**
   * repository.file
   */
  export type repository$fileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
    where?: fileWhereInput
    orderBy?: fileOrderByWithRelationInput | fileOrderByWithRelationInput[]
    cursor?: fileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * repository without action
   */
  export type repositoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repository
     */
    select?: repositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the repository
     */
    omit?: repositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repositoryInclude<ExtArgs> | null
  }


  /**
   * Model webhook
   */

  export type AggregateWebhook = {
    _count: WebhookCountAggregateOutputType | null
    _min: WebhookMinAggregateOutputType | null
    _max: WebhookMaxAggregateOutputType | null
  }

  export type WebhookMinAggregateOutputType = {
    id: string | null
    repository_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WebhookMaxAggregateOutputType = {
    id: string | null
    repository_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WebhookCountAggregateOutputType = {
    id: number
    repository_url: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type WebhookMinAggregateInputType = {
    id?: true
    repository_url?: true
    created_at?: true
    updated_at?: true
  }

  export type WebhookMaxAggregateInputType = {
    id?: true
    repository_url?: true
    created_at?: true
    updated_at?: true
  }

  export type WebhookCountAggregateInputType = {
    id?: true
    repository_url?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type WebhookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which webhook to aggregate.
     */
    where?: webhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webhooks to fetch.
     */
    orderBy?: webhookOrderByWithRelationInput | webhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: webhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned webhooks
    **/
    _count?: true | WebhookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebhookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebhookMaxAggregateInputType
  }

  export type GetWebhookAggregateType<T extends WebhookAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhook[P]>
      : GetScalarType<T[P], AggregateWebhook[P]>
  }




  export type webhookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: webhookWhereInput
    orderBy?: webhookOrderByWithAggregationInput | webhookOrderByWithAggregationInput[]
    by: WebhookScalarFieldEnum[] | WebhookScalarFieldEnum
    having?: webhookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebhookCountAggregateInputType | true
    _min?: WebhookMinAggregateInputType
    _max?: WebhookMaxAggregateInputType
  }

  export type WebhookGroupByOutputType = {
    id: string
    repository_url: string
    created_at: Date
    updated_at: Date
    _count: WebhookCountAggregateOutputType | null
    _min: WebhookMinAggregateOutputType | null
    _max: WebhookMaxAggregateOutputType | null
  }

  type GetWebhookGroupByPayload<T extends webhookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebhookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebhookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebhookGroupByOutputType[P]>
            : GetScalarType<T[P], WebhookGroupByOutputType[P]>
        }
      >
    >


  export type webhookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repository_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    webhook_event?: boolean | webhook$webhook_eventArgs<ExtArgs>
    _count?: boolean | WebhookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhook"]>

  export type webhookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repository_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["webhook"]>

  export type webhookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repository_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["webhook"]>

  export type webhookSelectScalar = {
    id?: boolean
    repository_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type webhookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "repository_url" | "created_at" | "updated_at", ExtArgs["result"]["webhook"]>
  export type webhookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    webhook_event?: boolean | webhook$webhook_eventArgs<ExtArgs>
    _count?: boolean | WebhookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type webhookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type webhookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $webhookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "webhook"
    objects: {
      webhook_event: Prisma.$webhook_eventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      repository_url: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["webhook"]>
    composites: {}
  }

  type webhookGetPayload<S extends boolean | null | undefined | webhookDefaultArgs> = $Result.GetResult<Prisma.$webhookPayload, S>

  type webhookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<webhookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebhookCountAggregateInputType | true
    }

  export interface webhookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['webhook'], meta: { name: 'webhook' } }
    /**
     * Find zero or one Webhook that matches the filter.
     * @param {webhookFindUniqueArgs} args - Arguments to find a Webhook
     * @example
     * // Get one Webhook
     * const webhook = await prisma.webhook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends webhookFindUniqueArgs>(args: SelectSubset<T, webhookFindUniqueArgs<ExtArgs>>): Prisma__webhookClient<$Result.GetResult<Prisma.$webhookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Webhook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {webhookFindUniqueOrThrowArgs} args - Arguments to find a Webhook
     * @example
     * // Get one Webhook
     * const webhook = await prisma.webhook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends webhookFindUniqueOrThrowArgs>(args: SelectSubset<T, webhookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__webhookClient<$Result.GetResult<Prisma.$webhookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Webhook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webhookFindFirstArgs} args - Arguments to find a Webhook
     * @example
     * // Get one Webhook
     * const webhook = await prisma.webhook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends webhookFindFirstArgs>(args?: SelectSubset<T, webhookFindFirstArgs<ExtArgs>>): Prisma__webhookClient<$Result.GetResult<Prisma.$webhookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Webhook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webhookFindFirstOrThrowArgs} args - Arguments to find a Webhook
     * @example
     * // Get one Webhook
     * const webhook = await prisma.webhook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends webhookFindFirstOrThrowArgs>(args?: SelectSubset<T, webhookFindFirstOrThrowArgs<ExtArgs>>): Prisma__webhookClient<$Result.GetResult<Prisma.$webhookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Webhooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webhookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Webhooks
     * const webhooks = await prisma.webhook.findMany()
     * 
     * // Get first 10 Webhooks
     * const webhooks = await prisma.webhook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhookWithIdOnly = await prisma.webhook.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends webhookFindManyArgs>(args?: SelectSubset<T, webhookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$webhookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Webhook.
     * @param {webhookCreateArgs} args - Arguments to create a Webhook.
     * @example
     * // Create one Webhook
     * const Webhook = await prisma.webhook.create({
     *   data: {
     *     // ... data to create a Webhook
     *   }
     * })
     * 
     */
    create<T extends webhookCreateArgs>(args: SelectSubset<T, webhookCreateArgs<ExtArgs>>): Prisma__webhookClient<$Result.GetResult<Prisma.$webhookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Webhooks.
     * @param {webhookCreateManyArgs} args - Arguments to create many Webhooks.
     * @example
     * // Create many Webhooks
     * const webhook = await prisma.webhook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends webhookCreateManyArgs>(args?: SelectSubset<T, webhookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Webhooks and returns the data saved in the database.
     * @param {webhookCreateManyAndReturnArgs} args - Arguments to create many Webhooks.
     * @example
     * // Create many Webhooks
     * const webhook = await prisma.webhook.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Webhooks and only return the `id`
     * const webhookWithIdOnly = await prisma.webhook.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends webhookCreateManyAndReturnArgs>(args?: SelectSubset<T, webhookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$webhookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Webhook.
     * @param {webhookDeleteArgs} args - Arguments to delete one Webhook.
     * @example
     * // Delete one Webhook
     * const Webhook = await prisma.webhook.delete({
     *   where: {
     *     // ... filter to delete one Webhook
     *   }
     * })
     * 
     */
    delete<T extends webhookDeleteArgs>(args: SelectSubset<T, webhookDeleteArgs<ExtArgs>>): Prisma__webhookClient<$Result.GetResult<Prisma.$webhookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Webhook.
     * @param {webhookUpdateArgs} args - Arguments to update one Webhook.
     * @example
     * // Update one Webhook
     * const webhook = await prisma.webhook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends webhookUpdateArgs>(args: SelectSubset<T, webhookUpdateArgs<ExtArgs>>): Prisma__webhookClient<$Result.GetResult<Prisma.$webhookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Webhooks.
     * @param {webhookDeleteManyArgs} args - Arguments to filter Webhooks to delete.
     * @example
     * // Delete a few Webhooks
     * const { count } = await prisma.webhook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends webhookDeleteManyArgs>(args?: SelectSubset<T, webhookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Webhooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webhookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Webhooks
     * const webhook = await prisma.webhook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends webhookUpdateManyArgs>(args: SelectSubset<T, webhookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Webhooks and returns the data updated in the database.
     * @param {webhookUpdateManyAndReturnArgs} args - Arguments to update many Webhooks.
     * @example
     * // Update many Webhooks
     * const webhook = await prisma.webhook.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Webhooks and only return the `id`
     * const webhookWithIdOnly = await prisma.webhook.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends webhookUpdateManyAndReturnArgs>(args: SelectSubset<T, webhookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$webhookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Webhook.
     * @param {webhookUpsertArgs} args - Arguments to update or create a Webhook.
     * @example
     * // Update or create a Webhook
     * const webhook = await prisma.webhook.upsert({
     *   create: {
     *     // ... data to create a Webhook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Webhook we want to update
     *   }
     * })
     */
    upsert<T extends webhookUpsertArgs>(args: SelectSubset<T, webhookUpsertArgs<ExtArgs>>): Prisma__webhookClient<$Result.GetResult<Prisma.$webhookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Webhooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webhookCountArgs} args - Arguments to filter Webhooks to count.
     * @example
     * // Count the number of Webhooks
     * const count = await prisma.webhook.count({
     *   where: {
     *     // ... the filter for the Webhooks we want to count
     *   }
     * })
    **/
    count<T extends webhookCountArgs>(
      args?: Subset<T, webhookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebhookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Webhook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WebhookAggregateArgs>(args: Subset<T, WebhookAggregateArgs>): Prisma.PrismaPromise<GetWebhookAggregateType<T>>

    /**
     * Group by Webhook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webhookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends webhookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: webhookGroupByArgs['orderBy'] }
        : { orderBy?: webhookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, webhookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the webhook model
   */
  readonly fields: webhookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for webhook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__webhookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    webhook_event<T extends webhook$webhook_eventArgs<ExtArgs> = {}>(args?: Subset<T, webhook$webhook_eventArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$webhook_eventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the webhook model
   */
  interface webhookFieldRefs {
    readonly id: FieldRef<"webhook", 'String'>
    readonly repository_url: FieldRef<"webhook", 'String'>
    readonly created_at: FieldRef<"webhook", 'DateTime'>
    readonly updated_at: FieldRef<"webhook", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * webhook findUnique
   */
  export type webhookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook
     */
    select?: webhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook
     */
    omit?: webhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhookInclude<ExtArgs> | null
    /**
     * Filter, which webhook to fetch.
     */
    where: webhookWhereUniqueInput
  }

  /**
   * webhook findUniqueOrThrow
   */
  export type webhookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook
     */
    select?: webhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook
     */
    omit?: webhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhookInclude<ExtArgs> | null
    /**
     * Filter, which webhook to fetch.
     */
    where: webhookWhereUniqueInput
  }

  /**
   * webhook findFirst
   */
  export type webhookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook
     */
    select?: webhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook
     */
    omit?: webhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhookInclude<ExtArgs> | null
    /**
     * Filter, which webhook to fetch.
     */
    where?: webhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webhooks to fetch.
     */
    orderBy?: webhookOrderByWithRelationInput | webhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for webhooks.
     */
    cursor?: webhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of webhooks.
     */
    distinct?: WebhookScalarFieldEnum | WebhookScalarFieldEnum[]
  }

  /**
   * webhook findFirstOrThrow
   */
  export type webhookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook
     */
    select?: webhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook
     */
    omit?: webhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhookInclude<ExtArgs> | null
    /**
     * Filter, which webhook to fetch.
     */
    where?: webhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webhooks to fetch.
     */
    orderBy?: webhookOrderByWithRelationInput | webhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for webhooks.
     */
    cursor?: webhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of webhooks.
     */
    distinct?: WebhookScalarFieldEnum | WebhookScalarFieldEnum[]
  }

  /**
   * webhook findMany
   */
  export type webhookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook
     */
    select?: webhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook
     */
    omit?: webhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhookInclude<ExtArgs> | null
    /**
     * Filter, which webhooks to fetch.
     */
    where?: webhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webhooks to fetch.
     */
    orderBy?: webhookOrderByWithRelationInput | webhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing webhooks.
     */
    cursor?: webhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webhooks.
     */
    skip?: number
    distinct?: WebhookScalarFieldEnum | WebhookScalarFieldEnum[]
  }

  /**
   * webhook create
   */
  export type webhookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook
     */
    select?: webhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook
     */
    omit?: webhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhookInclude<ExtArgs> | null
    /**
     * The data needed to create a webhook.
     */
    data: XOR<webhookCreateInput, webhookUncheckedCreateInput>
  }

  /**
   * webhook createMany
   */
  export type webhookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many webhooks.
     */
    data: webhookCreateManyInput | webhookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * webhook createManyAndReturn
   */
  export type webhookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook
     */
    select?: webhookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the webhook
     */
    omit?: webhookOmit<ExtArgs> | null
    /**
     * The data used to create many webhooks.
     */
    data: webhookCreateManyInput | webhookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * webhook update
   */
  export type webhookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook
     */
    select?: webhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook
     */
    omit?: webhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhookInclude<ExtArgs> | null
    /**
     * The data needed to update a webhook.
     */
    data: XOR<webhookUpdateInput, webhookUncheckedUpdateInput>
    /**
     * Choose, which webhook to update.
     */
    where: webhookWhereUniqueInput
  }

  /**
   * webhook updateMany
   */
  export type webhookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update webhooks.
     */
    data: XOR<webhookUpdateManyMutationInput, webhookUncheckedUpdateManyInput>
    /**
     * Filter which webhooks to update
     */
    where?: webhookWhereInput
    /**
     * Limit how many webhooks to update.
     */
    limit?: number
  }

  /**
   * webhook updateManyAndReturn
   */
  export type webhookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook
     */
    select?: webhookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the webhook
     */
    omit?: webhookOmit<ExtArgs> | null
    /**
     * The data used to update webhooks.
     */
    data: XOR<webhookUpdateManyMutationInput, webhookUncheckedUpdateManyInput>
    /**
     * Filter which webhooks to update
     */
    where?: webhookWhereInput
    /**
     * Limit how many webhooks to update.
     */
    limit?: number
  }

  /**
   * webhook upsert
   */
  export type webhookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook
     */
    select?: webhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook
     */
    omit?: webhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhookInclude<ExtArgs> | null
    /**
     * The filter to search for the webhook to update in case it exists.
     */
    where: webhookWhereUniqueInput
    /**
     * In case the webhook found by the `where` argument doesn't exist, create a new webhook with this data.
     */
    create: XOR<webhookCreateInput, webhookUncheckedCreateInput>
    /**
     * In case the webhook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<webhookUpdateInput, webhookUncheckedUpdateInput>
  }

  /**
   * webhook delete
   */
  export type webhookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook
     */
    select?: webhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook
     */
    omit?: webhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhookInclude<ExtArgs> | null
    /**
     * Filter which webhook to delete.
     */
    where: webhookWhereUniqueInput
  }

  /**
   * webhook deleteMany
   */
  export type webhookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which webhooks to delete
     */
    where?: webhookWhereInput
    /**
     * Limit how many webhooks to delete.
     */
    limit?: number
  }

  /**
   * webhook.webhook_event
   */
  export type webhook$webhook_eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook_event
     */
    select?: webhook_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook_event
     */
    omit?: webhook_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhook_eventInclude<ExtArgs> | null
    where?: webhook_eventWhereInput
    orderBy?: webhook_eventOrderByWithRelationInput | webhook_eventOrderByWithRelationInput[]
    cursor?: webhook_eventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Webhook_eventScalarFieldEnum | Webhook_eventScalarFieldEnum[]
  }

  /**
   * webhook without action
   */
  export type webhookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook
     */
    select?: webhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook
     */
    omit?: webhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhookInclude<ExtArgs> | null
  }


  /**
   * Model webhook_event
   */

  export type AggregateWebhook_event = {
    _count: Webhook_eventCountAggregateOutputType | null
    _min: Webhook_eventMinAggregateOutputType | null
    _max: Webhook_eventMaxAggregateOutputType | null
  }

  export type Webhook_eventMinAggregateOutputType = {
    id: string | null
    webhook_id: string | null
    status: $Enums.webhook_event_status | null
    payload: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Webhook_eventMaxAggregateOutputType = {
    id: string | null
    webhook_id: string | null
    status: $Enums.webhook_event_status | null
    payload: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Webhook_eventCountAggregateOutputType = {
    id: number
    webhook_id: number
    status: number
    payload: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Webhook_eventMinAggregateInputType = {
    id?: true
    webhook_id?: true
    status?: true
    payload?: true
    created_at?: true
    updated_at?: true
  }

  export type Webhook_eventMaxAggregateInputType = {
    id?: true
    webhook_id?: true
    status?: true
    payload?: true
    created_at?: true
    updated_at?: true
  }

  export type Webhook_eventCountAggregateInputType = {
    id?: true
    webhook_id?: true
    status?: true
    payload?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Webhook_eventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which webhook_event to aggregate.
     */
    where?: webhook_eventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webhook_events to fetch.
     */
    orderBy?: webhook_eventOrderByWithRelationInput | webhook_eventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: webhook_eventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webhook_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webhook_events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned webhook_events
    **/
    _count?: true | Webhook_eventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Webhook_eventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Webhook_eventMaxAggregateInputType
  }

  export type GetWebhook_eventAggregateType<T extends Webhook_eventAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhook_event]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhook_event[P]>
      : GetScalarType<T[P], AggregateWebhook_event[P]>
  }




  export type webhook_eventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: webhook_eventWhereInput
    orderBy?: webhook_eventOrderByWithAggregationInput | webhook_eventOrderByWithAggregationInput[]
    by: Webhook_eventScalarFieldEnum[] | Webhook_eventScalarFieldEnum
    having?: webhook_eventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Webhook_eventCountAggregateInputType | true
    _min?: Webhook_eventMinAggregateInputType
    _max?: Webhook_eventMaxAggregateInputType
  }

  export type Webhook_eventGroupByOutputType = {
    id: string
    webhook_id: string
    status: $Enums.webhook_event_status
    payload: string
    created_at: Date
    updated_at: Date
    _count: Webhook_eventCountAggregateOutputType | null
    _min: Webhook_eventMinAggregateOutputType | null
    _max: Webhook_eventMaxAggregateOutputType | null
  }

  type GetWebhook_eventGroupByPayload<T extends webhook_eventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Webhook_eventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Webhook_eventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Webhook_eventGroupByOutputType[P]>
            : GetScalarType<T[P], Webhook_eventGroupByOutputType[P]>
        }
      >
    >


  export type webhook_eventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    webhook_id?: boolean
    status?: boolean
    payload?: boolean
    created_at?: boolean
    updated_at?: boolean
    webhook?: boolean | webhookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhook_event"]>

  export type webhook_eventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    webhook_id?: boolean
    status?: boolean
    payload?: boolean
    created_at?: boolean
    updated_at?: boolean
    webhook?: boolean | webhookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhook_event"]>

  export type webhook_eventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    webhook_id?: boolean
    status?: boolean
    payload?: boolean
    created_at?: boolean
    updated_at?: boolean
    webhook?: boolean | webhookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhook_event"]>

  export type webhook_eventSelectScalar = {
    id?: boolean
    webhook_id?: boolean
    status?: boolean
    payload?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type webhook_eventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "webhook_id" | "status" | "payload" | "created_at" | "updated_at", ExtArgs["result"]["webhook_event"]>
  export type webhook_eventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    webhook?: boolean | webhookDefaultArgs<ExtArgs>
  }
  export type webhook_eventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    webhook?: boolean | webhookDefaultArgs<ExtArgs>
  }
  export type webhook_eventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    webhook?: boolean | webhookDefaultArgs<ExtArgs>
  }

  export type $webhook_eventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "webhook_event"
    objects: {
      webhook: Prisma.$webhookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      webhook_id: string
      status: $Enums.webhook_event_status
      payload: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["webhook_event"]>
    composites: {}
  }

  type webhook_eventGetPayload<S extends boolean | null | undefined | webhook_eventDefaultArgs> = $Result.GetResult<Prisma.$webhook_eventPayload, S>

  type webhook_eventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<webhook_eventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Webhook_eventCountAggregateInputType | true
    }

  export interface webhook_eventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['webhook_event'], meta: { name: 'webhook_event' } }
    /**
     * Find zero or one Webhook_event that matches the filter.
     * @param {webhook_eventFindUniqueArgs} args - Arguments to find a Webhook_event
     * @example
     * // Get one Webhook_event
     * const webhook_event = await prisma.webhook_event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends webhook_eventFindUniqueArgs>(args: SelectSubset<T, webhook_eventFindUniqueArgs<ExtArgs>>): Prisma__webhook_eventClient<$Result.GetResult<Prisma.$webhook_eventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Webhook_event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {webhook_eventFindUniqueOrThrowArgs} args - Arguments to find a Webhook_event
     * @example
     * // Get one Webhook_event
     * const webhook_event = await prisma.webhook_event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends webhook_eventFindUniqueOrThrowArgs>(args: SelectSubset<T, webhook_eventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__webhook_eventClient<$Result.GetResult<Prisma.$webhook_eventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Webhook_event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webhook_eventFindFirstArgs} args - Arguments to find a Webhook_event
     * @example
     * // Get one Webhook_event
     * const webhook_event = await prisma.webhook_event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends webhook_eventFindFirstArgs>(args?: SelectSubset<T, webhook_eventFindFirstArgs<ExtArgs>>): Prisma__webhook_eventClient<$Result.GetResult<Prisma.$webhook_eventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Webhook_event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webhook_eventFindFirstOrThrowArgs} args - Arguments to find a Webhook_event
     * @example
     * // Get one Webhook_event
     * const webhook_event = await prisma.webhook_event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends webhook_eventFindFirstOrThrowArgs>(args?: SelectSubset<T, webhook_eventFindFirstOrThrowArgs<ExtArgs>>): Prisma__webhook_eventClient<$Result.GetResult<Prisma.$webhook_eventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Webhook_events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webhook_eventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Webhook_events
     * const webhook_events = await prisma.webhook_event.findMany()
     * 
     * // Get first 10 Webhook_events
     * const webhook_events = await prisma.webhook_event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhook_eventWithIdOnly = await prisma.webhook_event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends webhook_eventFindManyArgs>(args?: SelectSubset<T, webhook_eventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$webhook_eventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Webhook_event.
     * @param {webhook_eventCreateArgs} args - Arguments to create a Webhook_event.
     * @example
     * // Create one Webhook_event
     * const Webhook_event = await prisma.webhook_event.create({
     *   data: {
     *     // ... data to create a Webhook_event
     *   }
     * })
     * 
     */
    create<T extends webhook_eventCreateArgs>(args: SelectSubset<T, webhook_eventCreateArgs<ExtArgs>>): Prisma__webhook_eventClient<$Result.GetResult<Prisma.$webhook_eventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Webhook_events.
     * @param {webhook_eventCreateManyArgs} args - Arguments to create many Webhook_events.
     * @example
     * // Create many Webhook_events
     * const webhook_event = await prisma.webhook_event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends webhook_eventCreateManyArgs>(args?: SelectSubset<T, webhook_eventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Webhook_events and returns the data saved in the database.
     * @param {webhook_eventCreateManyAndReturnArgs} args - Arguments to create many Webhook_events.
     * @example
     * // Create many Webhook_events
     * const webhook_event = await prisma.webhook_event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Webhook_events and only return the `id`
     * const webhook_eventWithIdOnly = await prisma.webhook_event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends webhook_eventCreateManyAndReturnArgs>(args?: SelectSubset<T, webhook_eventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$webhook_eventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Webhook_event.
     * @param {webhook_eventDeleteArgs} args - Arguments to delete one Webhook_event.
     * @example
     * // Delete one Webhook_event
     * const Webhook_event = await prisma.webhook_event.delete({
     *   where: {
     *     // ... filter to delete one Webhook_event
     *   }
     * })
     * 
     */
    delete<T extends webhook_eventDeleteArgs>(args: SelectSubset<T, webhook_eventDeleteArgs<ExtArgs>>): Prisma__webhook_eventClient<$Result.GetResult<Prisma.$webhook_eventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Webhook_event.
     * @param {webhook_eventUpdateArgs} args - Arguments to update one Webhook_event.
     * @example
     * // Update one Webhook_event
     * const webhook_event = await prisma.webhook_event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends webhook_eventUpdateArgs>(args: SelectSubset<T, webhook_eventUpdateArgs<ExtArgs>>): Prisma__webhook_eventClient<$Result.GetResult<Prisma.$webhook_eventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Webhook_events.
     * @param {webhook_eventDeleteManyArgs} args - Arguments to filter Webhook_events to delete.
     * @example
     * // Delete a few Webhook_events
     * const { count } = await prisma.webhook_event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends webhook_eventDeleteManyArgs>(args?: SelectSubset<T, webhook_eventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Webhook_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webhook_eventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Webhook_events
     * const webhook_event = await prisma.webhook_event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends webhook_eventUpdateManyArgs>(args: SelectSubset<T, webhook_eventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Webhook_events and returns the data updated in the database.
     * @param {webhook_eventUpdateManyAndReturnArgs} args - Arguments to update many Webhook_events.
     * @example
     * // Update many Webhook_events
     * const webhook_event = await prisma.webhook_event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Webhook_events and only return the `id`
     * const webhook_eventWithIdOnly = await prisma.webhook_event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends webhook_eventUpdateManyAndReturnArgs>(args: SelectSubset<T, webhook_eventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$webhook_eventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Webhook_event.
     * @param {webhook_eventUpsertArgs} args - Arguments to update or create a Webhook_event.
     * @example
     * // Update or create a Webhook_event
     * const webhook_event = await prisma.webhook_event.upsert({
     *   create: {
     *     // ... data to create a Webhook_event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Webhook_event we want to update
     *   }
     * })
     */
    upsert<T extends webhook_eventUpsertArgs>(args: SelectSubset<T, webhook_eventUpsertArgs<ExtArgs>>): Prisma__webhook_eventClient<$Result.GetResult<Prisma.$webhook_eventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Webhook_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webhook_eventCountArgs} args - Arguments to filter Webhook_events to count.
     * @example
     * // Count the number of Webhook_events
     * const count = await prisma.webhook_event.count({
     *   where: {
     *     // ... the filter for the Webhook_events we want to count
     *   }
     * })
    **/
    count<T extends webhook_eventCountArgs>(
      args?: Subset<T, webhook_eventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Webhook_eventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Webhook_event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Webhook_eventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Webhook_eventAggregateArgs>(args: Subset<T, Webhook_eventAggregateArgs>): Prisma.PrismaPromise<GetWebhook_eventAggregateType<T>>

    /**
     * Group by Webhook_event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webhook_eventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends webhook_eventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: webhook_eventGroupByArgs['orderBy'] }
        : { orderBy?: webhook_eventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, webhook_eventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhook_eventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the webhook_event model
   */
  readonly fields: webhook_eventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for webhook_event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__webhook_eventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    webhook<T extends webhookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, webhookDefaultArgs<ExtArgs>>): Prisma__webhookClient<$Result.GetResult<Prisma.$webhookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the webhook_event model
   */
  interface webhook_eventFieldRefs {
    readonly id: FieldRef<"webhook_event", 'String'>
    readonly webhook_id: FieldRef<"webhook_event", 'String'>
    readonly status: FieldRef<"webhook_event", 'webhook_event_status'>
    readonly payload: FieldRef<"webhook_event", 'String'>
    readonly created_at: FieldRef<"webhook_event", 'DateTime'>
    readonly updated_at: FieldRef<"webhook_event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * webhook_event findUnique
   */
  export type webhook_eventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook_event
     */
    select?: webhook_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook_event
     */
    omit?: webhook_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhook_eventInclude<ExtArgs> | null
    /**
     * Filter, which webhook_event to fetch.
     */
    where: webhook_eventWhereUniqueInput
  }

  /**
   * webhook_event findUniqueOrThrow
   */
  export type webhook_eventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook_event
     */
    select?: webhook_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook_event
     */
    omit?: webhook_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhook_eventInclude<ExtArgs> | null
    /**
     * Filter, which webhook_event to fetch.
     */
    where: webhook_eventWhereUniqueInput
  }

  /**
   * webhook_event findFirst
   */
  export type webhook_eventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook_event
     */
    select?: webhook_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook_event
     */
    omit?: webhook_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhook_eventInclude<ExtArgs> | null
    /**
     * Filter, which webhook_event to fetch.
     */
    where?: webhook_eventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webhook_events to fetch.
     */
    orderBy?: webhook_eventOrderByWithRelationInput | webhook_eventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for webhook_events.
     */
    cursor?: webhook_eventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webhook_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webhook_events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of webhook_events.
     */
    distinct?: Webhook_eventScalarFieldEnum | Webhook_eventScalarFieldEnum[]
  }

  /**
   * webhook_event findFirstOrThrow
   */
  export type webhook_eventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook_event
     */
    select?: webhook_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook_event
     */
    omit?: webhook_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhook_eventInclude<ExtArgs> | null
    /**
     * Filter, which webhook_event to fetch.
     */
    where?: webhook_eventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webhook_events to fetch.
     */
    orderBy?: webhook_eventOrderByWithRelationInput | webhook_eventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for webhook_events.
     */
    cursor?: webhook_eventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webhook_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webhook_events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of webhook_events.
     */
    distinct?: Webhook_eventScalarFieldEnum | Webhook_eventScalarFieldEnum[]
  }

  /**
   * webhook_event findMany
   */
  export type webhook_eventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook_event
     */
    select?: webhook_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook_event
     */
    omit?: webhook_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhook_eventInclude<ExtArgs> | null
    /**
     * Filter, which webhook_events to fetch.
     */
    where?: webhook_eventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webhook_events to fetch.
     */
    orderBy?: webhook_eventOrderByWithRelationInput | webhook_eventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing webhook_events.
     */
    cursor?: webhook_eventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webhook_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webhook_events.
     */
    skip?: number
    distinct?: Webhook_eventScalarFieldEnum | Webhook_eventScalarFieldEnum[]
  }

  /**
   * webhook_event create
   */
  export type webhook_eventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook_event
     */
    select?: webhook_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook_event
     */
    omit?: webhook_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhook_eventInclude<ExtArgs> | null
    /**
     * The data needed to create a webhook_event.
     */
    data: XOR<webhook_eventCreateInput, webhook_eventUncheckedCreateInput>
  }

  /**
   * webhook_event createMany
   */
  export type webhook_eventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many webhook_events.
     */
    data: webhook_eventCreateManyInput | webhook_eventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * webhook_event createManyAndReturn
   */
  export type webhook_eventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook_event
     */
    select?: webhook_eventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the webhook_event
     */
    omit?: webhook_eventOmit<ExtArgs> | null
    /**
     * The data used to create many webhook_events.
     */
    data: webhook_eventCreateManyInput | webhook_eventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhook_eventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * webhook_event update
   */
  export type webhook_eventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook_event
     */
    select?: webhook_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook_event
     */
    omit?: webhook_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhook_eventInclude<ExtArgs> | null
    /**
     * The data needed to update a webhook_event.
     */
    data: XOR<webhook_eventUpdateInput, webhook_eventUncheckedUpdateInput>
    /**
     * Choose, which webhook_event to update.
     */
    where: webhook_eventWhereUniqueInput
  }

  /**
   * webhook_event updateMany
   */
  export type webhook_eventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update webhook_events.
     */
    data: XOR<webhook_eventUpdateManyMutationInput, webhook_eventUncheckedUpdateManyInput>
    /**
     * Filter which webhook_events to update
     */
    where?: webhook_eventWhereInput
    /**
     * Limit how many webhook_events to update.
     */
    limit?: number
  }

  /**
   * webhook_event updateManyAndReturn
   */
  export type webhook_eventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook_event
     */
    select?: webhook_eventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the webhook_event
     */
    omit?: webhook_eventOmit<ExtArgs> | null
    /**
     * The data used to update webhook_events.
     */
    data: XOR<webhook_eventUpdateManyMutationInput, webhook_eventUncheckedUpdateManyInput>
    /**
     * Filter which webhook_events to update
     */
    where?: webhook_eventWhereInput
    /**
     * Limit how many webhook_events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhook_eventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * webhook_event upsert
   */
  export type webhook_eventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook_event
     */
    select?: webhook_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook_event
     */
    omit?: webhook_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhook_eventInclude<ExtArgs> | null
    /**
     * The filter to search for the webhook_event to update in case it exists.
     */
    where: webhook_eventWhereUniqueInput
    /**
     * In case the webhook_event found by the `where` argument doesn't exist, create a new webhook_event with this data.
     */
    create: XOR<webhook_eventCreateInput, webhook_eventUncheckedCreateInput>
    /**
     * In case the webhook_event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<webhook_eventUpdateInput, webhook_eventUncheckedUpdateInput>
  }

  /**
   * webhook_event delete
   */
  export type webhook_eventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook_event
     */
    select?: webhook_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook_event
     */
    omit?: webhook_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhook_eventInclude<ExtArgs> | null
    /**
     * Filter which webhook_event to delete.
     */
    where: webhook_eventWhereUniqueInput
  }

  /**
   * webhook_event deleteMany
   */
  export type webhook_eventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which webhook_events to delete
     */
    where?: webhook_eventWhereInput
    /**
     * Limit how many webhook_events to delete.
     */
    limit?: number
  }

  /**
   * webhook_event without action
   */
  export type webhook_eventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook_event
     */
    select?: webhook_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook_event
     */
    omit?: webhook_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhook_eventInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FileScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    repository_id: 'repository_id',
    file_extension: 'file_extension',
    content: 'content',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const RepositoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    url: 'url',
    visibility: 'visibility',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RepositoryScalarFieldEnum = (typeof RepositoryScalarFieldEnum)[keyof typeof RepositoryScalarFieldEnum]


  export const WebhookScalarFieldEnum: {
    id: 'id',
    repository_url: 'repository_url',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type WebhookScalarFieldEnum = (typeof WebhookScalarFieldEnum)[keyof typeof WebhookScalarFieldEnum]


  export const Webhook_eventScalarFieldEnum: {
    id: 'id',
    webhook_id: 'webhook_id',
    status: 'status',
    payload: 'payload',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Webhook_eventScalarFieldEnum = (typeof Webhook_eventScalarFieldEnum)[keyof typeof Webhook_eventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'webhook_event_status'
   */
  export type Enumwebhook_event_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'webhook_event_status'>
    


  /**
   * Reference to a field of type 'webhook_event_status[]'
   */
  export type ListEnumwebhook_event_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'webhook_event_status[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type fileWhereInput = {
    AND?: fileWhereInput | fileWhereInput[]
    OR?: fileWhereInput[]
    NOT?: fileWhereInput | fileWhereInput[]
    id?: UuidFilter<"file"> | string
    slug?: StringFilter<"file"> | string
    repository_id?: UuidFilter<"file"> | string
    file_extension?: StringFilter<"file"> | string
    content?: StringFilter<"file"> | string
    created_at?: DateTimeFilter<"file"> | Date | string
    updated_at?: DateTimeFilter<"file"> | Date | string
    repository?: XOR<RepositoryScalarRelationFilter, repositoryWhereInput>
  }

  export type fileOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    repository_id?: SortOrder
    file_extension?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    repository?: repositoryOrderByWithRelationInput
  }

  export type fileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: fileWhereInput | fileWhereInput[]
    OR?: fileWhereInput[]
    NOT?: fileWhereInput | fileWhereInput[]
    repository_id?: UuidFilter<"file"> | string
    file_extension?: StringFilter<"file"> | string
    content?: StringFilter<"file"> | string
    created_at?: DateTimeFilter<"file"> | Date | string
    updated_at?: DateTimeFilter<"file"> | Date | string
    repository?: XOR<RepositoryScalarRelationFilter, repositoryWhereInput>
  }, "id" | "slug">

  export type fileOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    repository_id?: SortOrder
    file_extension?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: fileCountOrderByAggregateInput
    _max?: fileMaxOrderByAggregateInput
    _min?: fileMinOrderByAggregateInput
  }

  export type fileScalarWhereWithAggregatesInput = {
    AND?: fileScalarWhereWithAggregatesInput | fileScalarWhereWithAggregatesInput[]
    OR?: fileScalarWhereWithAggregatesInput[]
    NOT?: fileScalarWhereWithAggregatesInput | fileScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"file"> | string
    slug?: StringWithAggregatesFilter<"file"> | string
    repository_id?: UuidWithAggregatesFilter<"file"> | string
    file_extension?: StringWithAggregatesFilter<"file"> | string
    content?: StringWithAggregatesFilter<"file"> | string
    created_at?: DateTimeWithAggregatesFilter<"file"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"file"> | Date | string
  }

  export type repositoryWhereInput = {
    AND?: repositoryWhereInput | repositoryWhereInput[]
    OR?: repositoryWhereInput[]
    NOT?: repositoryWhereInput | repositoryWhereInput[]
    id?: UuidFilter<"repository"> | string
    name?: StringFilter<"repository"> | string
    slug?: StringFilter<"repository"> | string
    url?: StringFilter<"repository"> | string
    visibility?: StringFilter<"repository"> | string
    created_at?: DateTimeFilter<"repository"> | Date | string
    updated_at?: DateTimeFilter<"repository"> | Date | string
    file?: FileListRelationFilter
  }

  export type repositoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    url?: SortOrder
    visibility?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    file?: fileOrderByRelationAggregateInput
  }

  export type repositoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: repositoryWhereInput | repositoryWhereInput[]
    OR?: repositoryWhereInput[]
    NOT?: repositoryWhereInput | repositoryWhereInput[]
    url?: StringFilter<"repository"> | string
    visibility?: StringFilter<"repository"> | string
    created_at?: DateTimeFilter<"repository"> | Date | string
    updated_at?: DateTimeFilter<"repository"> | Date | string
    file?: FileListRelationFilter
  }, "id" | "name" | "slug">

  export type repositoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    url?: SortOrder
    visibility?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: repositoryCountOrderByAggregateInput
    _max?: repositoryMaxOrderByAggregateInput
    _min?: repositoryMinOrderByAggregateInput
  }

  export type repositoryScalarWhereWithAggregatesInput = {
    AND?: repositoryScalarWhereWithAggregatesInput | repositoryScalarWhereWithAggregatesInput[]
    OR?: repositoryScalarWhereWithAggregatesInput[]
    NOT?: repositoryScalarWhereWithAggregatesInput | repositoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"repository"> | string
    name?: StringWithAggregatesFilter<"repository"> | string
    slug?: StringWithAggregatesFilter<"repository"> | string
    url?: StringWithAggregatesFilter<"repository"> | string
    visibility?: StringWithAggregatesFilter<"repository"> | string
    created_at?: DateTimeWithAggregatesFilter<"repository"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"repository"> | Date | string
  }

  export type webhookWhereInput = {
    AND?: webhookWhereInput | webhookWhereInput[]
    OR?: webhookWhereInput[]
    NOT?: webhookWhereInput | webhookWhereInput[]
    id?: UuidFilter<"webhook"> | string
    repository_url?: StringFilter<"webhook"> | string
    created_at?: DateTimeFilter<"webhook"> | Date | string
    updated_at?: DateTimeFilter<"webhook"> | Date | string
    webhook_event?: Webhook_eventListRelationFilter
  }

  export type webhookOrderByWithRelationInput = {
    id?: SortOrder
    repository_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    webhook_event?: webhook_eventOrderByRelationAggregateInput
  }

  export type webhookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: webhookWhereInput | webhookWhereInput[]
    OR?: webhookWhereInput[]
    NOT?: webhookWhereInput | webhookWhereInput[]
    repository_url?: StringFilter<"webhook"> | string
    created_at?: DateTimeFilter<"webhook"> | Date | string
    updated_at?: DateTimeFilter<"webhook"> | Date | string
    webhook_event?: Webhook_eventListRelationFilter
  }, "id">

  export type webhookOrderByWithAggregationInput = {
    id?: SortOrder
    repository_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: webhookCountOrderByAggregateInput
    _max?: webhookMaxOrderByAggregateInput
    _min?: webhookMinOrderByAggregateInput
  }

  export type webhookScalarWhereWithAggregatesInput = {
    AND?: webhookScalarWhereWithAggregatesInput | webhookScalarWhereWithAggregatesInput[]
    OR?: webhookScalarWhereWithAggregatesInput[]
    NOT?: webhookScalarWhereWithAggregatesInput | webhookScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"webhook"> | string
    repository_url?: StringWithAggregatesFilter<"webhook"> | string
    created_at?: DateTimeWithAggregatesFilter<"webhook"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"webhook"> | Date | string
  }

  export type webhook_eventWhereInput = {
    AND?: webhook_eventWhereInput | webhook_eventWhereInput[]
    OR?: webhook_eventWhereInput[]
    NOT?: webhook_eventWhereInput | webhook_eventWhereInput[]
    id?: UuidFilter<"webhook_event"> | string
    webhook_id?: UuidFilter<"webhook_event"> | string
    status?: Enumwebhook_event_statusFilter<"webhook_event"> | $Enums.webhook_event_status
    payload?: StringFilter<"webhook_event"> | string
    created_at?: DateTimeFilter<"webhook_event"> | Date | string
    updated_at?: DateTimeFilter<"webhook_event"> | Date | string
    webhook?: XOR<WebhookScalarRelationFilter, webhookWhereInput>
  }

  export type webhook_eventOrderByWithRelationInput = {
    id?: SortOrder
    webhook_id?: SortOrder
    status?: SortOrder
    payload?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    webhook?: webhookOrderByWithRelationInput
  }

  export type webhook_eventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: webhook_eventWhereInput | webhook_eventWhereInput[]
    OR?: webhook_eventWhereInput[]
    NOT?: webhook_eventWhereInput | webhook_eventWhereInput[]
    webhook_id?: UuidFilter<"webhook_event"> | string
    status?: Enumwebhook_event_statusFilter<"webhook_event"> | $Enums.webhook_event_status
    payload?: StringFilter<"webhook_event"> | string
    created_at?: DateTimeFilter<"webhook_event"> | Date | string
    updated_at?: DateTimeFilter<"webhook_event"> | Date | string
    webhook?: XOR<WebhookScalarRelationFilter, webhookWhereInput>
  }, "id">

  export type webhook_eventOrderByWithAggregationInput = {
    id?: SortOrder
    webhook_id?: SortOrder
    status?: SortOrder
    payload?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: webhook_eventCountOrderByAggregateInput
    _max?: webhook_eventMaxOrderByAggregateInput
    _min?: webhook_eventMinOrderByAggregateInput
  }

  export type webhook_eventScalarWhereWithAggregatesInput = {
    AND?: webhook_eventScalarWhereWithAggregatesInput | webhook_eventScalarWhereWithAggregatesInput[]
    OR?: webhook_eventScalarWhereWithAggregatesInput[]
    NOT?: webhook_eventScalarWhereWithAggregatesInput | webhook_eventScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"webhook_event"> | string
    webhook_id?: UuidWithAggregatesFilter<"webhook_event"> | string
    status?: Enumwebhook_event_statusWithAggregatesFilter<"webhook_event"> | $Enums.webhook_event_status
    payload?: StringWithAggregatesFilter<"webhook_event"> | string
    created_at?: DateTimeWithAggregatesFilter<"webhook_event"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"webhook_event"> | Date | string
  }

  export type fileCreateInput = {
    id?: string
    slug: string
    file_extension: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    repository: repositoryCreateNestedOneWithoutFileInput
  }

  export type fileUncheckedCreateInput = {
    id?: string
    slug: string
    repository_id: string
    file_extension: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type fileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    file_extension?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    repository?: repositoryUpdateOneRequiredWithoutFileNestedInput
  }

  export type fileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    repository_id?: StringFieldUpdateOperationsInput | string
    file_extension?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fileCreateManyInput = {
    id?: string
    slug: string
    repository_id: string
    file_extension: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type fileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    file_extension?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    repository_id?: StringFieldUpdateOperationsInput | string
    file_extension?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type repositoryCreateInput = {
    id?: string
    name: string
    slug: string
    url: string
    visibility?: string
    created_at?: Date | string
    updated_at?: Date | string
    file?: fileCreateNestedManyWithoutRepositoryInput
  }

  export type repositoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    url: string
    visibility?: string
    created_at?: Date | string
    updated_at?: Date | string
    file?: fileUncheckedCreateNestedManyWithoutRepositoryInput
  }

  export type repositoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    file?: fileUpdateManyWithoutRepositoryNestedInput
  }

  export type repositoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    file?: fileUncheckedUpdateManyWithoutRepositoryNestedInput
  }

  export type repositoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    url: string
    visibility?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type repositoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type repositoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type webhookCreateInput = {
    id?: string
    repository_url: string
    created_at?: Date | string
    updated_at?: Date | string
    webhook_event?: webhook_eventCreateNestedManyWithoutWebhookInput
  }

  export type webhookUncheckedCreateInput = {
    id?: string
    repository_url: string
    created_at?: Date | string
    updated_at?: Date | string
    webhook_event?: webhook_eventUncheckedCreateNestedManyWithoutWebhookInput
  }

  export type webhookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    repository_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    webhook_event?: webhook_eventUpdateManyWithoutWebhookNestedInput
  }

  export type webhookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    repository_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    webhook_event?: webhook_eventUncheckedUpdateManyWithoutWebhookNestedInput
  }

  export type webhookCreateManyInput = {
    id?: string
    repository_url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type webhookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    repository_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type webhookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    repository_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type webhook_eventCreateInput = {
    id?: string
    status?: $Enums.webhook_event_status
    payload: string
    created_at?: Date | string
    updated_at?: Date | string
    webhook: webhookCreateNestedOneWithoutWebhook_eventInput
  }

  export type webhook_eventUncheckedCreateInput = {
    id?: string
    webhook_id: string
    status?: $Enums.webhook_event_status
    payload: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type webhook_eventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: Enumwebhook_event_statusFieldUpdateOperationsInput | $Enums.webhook_event_status
    payload?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    webhook?: webhookUpdateOneRequiredWithoutWebhook_eventNestedInput
  }

  export type webhook_eventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    webhook_id?: StringFieldUpdateOperationsInput | string
    status?: Enumwebhook_event_statusFieldUpdateOperationsInput | $Enums.webhook_event_status
    payload?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type webhook_eventCreateManyInput = {
    id?: string
    webhook_id: string
    status?: $Enums.webhook_event_status
    payload: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type webhook_eventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: Enumwebhook_event_statusFieldUpdateOperationsInput | $Enums.webhook_event_status
    payload?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type webhook_eventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    webhook_id?: StringFieldUpdateOperationsInput | string
    status?: Enumwebhook_event_statusFieldUpdateOperationsInput | $Enums.webhook_event_status
    payload?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RepositoryScalarRelationFilter = {
    is?: repositoryWhereInput
    isNot?: repositoryWhereInput
  }

  export type fileCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    repository_id?: SortOrder
    file_extension?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type fileMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    repository_id?: SortOrder
    file_extension?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type fileMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    repository_id?: SortOrder
    file_extension?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FileListRelationFilter = {
    every?: fileWhereInput
    some?: fileWhereInput
    none?: fileWhereInput
  }

  export type fileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type repositoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    url?: SortOrder
    visibility?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type repositoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    url?: SortOrder
    visibility?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type repositoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    url?: SortOrder
    visibility?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Webhook_eventListRelationFilter = {
    every?: webhook_eventWhereInput
    some?: webhook_eventWhereInput
    none?: webhook_eventWhereInput
  }

  export type webhook_eventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type webhookCountOrderByAggregateInput = {
    id?: SortOrder
    repository_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type webhookMaxOrderByAggregateInput = {
    id?: SortOrder
    repository_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type webhookMinOrderByAggregateInput = {
    id?: SortOrder
    repository_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Enumwebhook_event_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.webhook_event_status | Enumwebhook_event_statusFieldRefInput<$PrismaModel>
    in?: $Enums.webhook_event_status[] | ListEnumwebhook_event_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.webhook_event_status[] | ListEnumwebhook_event_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumwebhook_event_statusFilter<$PrismaModel> | $Enums.webhook_event_status
  }

  export type WebhookScalarRelationFilter = {
    is?: webhookWhereInput
    isNot?: webhookWhereInput
  }

  export type webhook_eventCountOrderByAggregateInput = {
    id?: SortOrder
    webhook_id?: SortOrder
    status?: SortOrder
    payload?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type webhook_eventMaxOrderByAggregateInput = {
    id?: SortOrder
    webhook_id?: SortOrder
    status?: SortOrder
    payload?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type webhook_eventMinOrderByAggregateInput = {
    id?: SortOrder
    webhook_id?: SortOrder
    status?: SortOrder
    payload?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Enumwebhook_event_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.webhook_event_status | Enumwebhook_event_statusFieldRefInput<$PrismaModel>
    in?: $Enums.webhook_event_status[] | ListEnumwebhook_event_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.webhook_event_status[] | ListEnumwebhook_event_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumwebhook_event_statusWithAggregatesFilter<$PrismaModel> | $Enums.webhook_event_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumwebhook_event_statusFilter<$PrismaModel>
    _max?: NestedEnumwebhook_event_statusFilter<$PrismaModel>
  }

  export type repositoryCreateNestedOneWithoutFileInput = {
    create?: XOR<repositoryCreateWithoutFileInput, repositoryUncheckedCreateWithoutFileInput>
    connectOrCreate?: repositoryCreateOrConnectWithoutFileInput
    connect?: repositoryWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type repositoryUpdateOneRequiredWithoutFileNestedInput = {
    create?: XOR<repositoryCreateWithoutFileInput, repositoryUncheckedCreateWithoutFileInput>
    connectOrCreate?: repositoryCreateOrConnectWithoutFileInput
    upsert?: repositoryUpsertWithoutFileInput
    connect?: repositoryWhereUniqueInput
    update?: XOR<XOR<repositoryUpdateToOneWithWhereWithoutFileInput, repositoryUpdateWithoutFileInput>, repositoryUncheckedUpdateWithoutFileInput>
  }

  export type fileCreateNestedManyWithoutRepositoryInput = {
    create?: XOR<fileCreateWithoutRepositoryInput, fileUncheckedCreateWithoutRepositoryInput> | fileCreateWithoutRepositoryInput[] | fileUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: fileCreateOrConnectWithoutRepositoryInput | fileCreateOrConnectWithoutRepositoryInput[]
    createMany?: fileCreateManyRepositoryInputEnvelope
    connect?: fileWhereUniqueInput | fileWhereUniqueInput[]
  }

  export type fileUncheckedCreateNestedManyWithoutRepositoryInput = {
    create?: XOR<fileCreateWithoutRepositoryInput, fileUncheckedCreateWithoutRepositoryInput> | fileCreateWithoutRepositoryInput[] | fileUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: fileCreateOrConnectWithoutRepositoryInput | fileCreateOrConnectWithoutRepositoryInput[]
    createMany?: fileCreateManyRepositoryInputEnvelope
    connect?: fileWhereUniqueInput | fileWhereUniqueInput[]
  }

  export type fileUpdateManyWithoutRepositoryNestedInput = {
    create?: XOR<fileCreateWithoutRepositoryInput, fileUncheckedCreateWithoutRepositoryInput> | fileCreateWithoutRepositoryInput[] | fileUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: fileCreateOrConnectWithoutRepositoryInput | fileCreateOrConnectWithoutRepositoryInput[]
    upsert?: fileUpsertWithWhereUniqueWithoutRepositoryInput | fileUpsertWithWhereUniqueWithoutRepositoryInput[]
    createMany?: fileCreateManyRepositoryInputEnvelope
    set?: fileWhereUniqueInput | fileWhereUniqueInput[]
    disconnect?: fileWhereUniqueInput | fileWhereUniqueInput[]
    delete?: fileWhereUniqueInput | fileWhereUniqueInput[]
    connect?: fileWhereUniqueInput | fileWhereUniqueInput[]
    update?: fileUpdateWithWhereUniqueWithoutRepositoryInput | fileUpdateWithWhereUniqueWithoutRepositoryInput[]
    updateMany?: fileUpdateManyWithWhereWithoutRepositoryInput | fileUpdateManyWithWhereWithoutRepositoryInput[]
    deleteMany?: fileScalarWhereInput | fileScalarWhereInput[]
  }

  export type fileUncheckedUpdateManyWithoutRepositoryNestedInput = {
    create?: XOR<fileCreateWithoutRepositoryInput, fileUncheckedCreateWithoutRepositoryInput> | fileCreateWithoutRepositoryInput[] | fileUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: fileCreateOrConnectWithoutRepositoryInput | fileCreateOrConnectWithoutRepositoryInput[]
    upsert?: fileUpsertWithWhereUniqueWithoutRepositoryInput | fileUpsertWithWhereUniqueWithoutRepositoryInput[]
    createMany?: fileCreateManyRepositoryInputEnvelope
    set?: fileWhereUniqueInput | fileWhereUniqueInput[]
    disconnect?: fileWhereUniqueInput | fileWhereUniqueInput[]
    delete?: fileWhereUniqueInput | fileWhereUniqueInput[]
    connect?: fileWhereUniqueInput | fileWhereUniqueInput[]
    update?: fileUpdateWithWhereUniqueWithoutRepositoryInput | fileUpdateWithWhereUniqueWithoutRepositoryInput[]
    updateMany?: fileUpdateManyWithWhereWithoutRepositoryInput | fileUpdateManyWithWhereWithoutRepositoryInput[]
    deleteMany?: fileScalarWhereInput | fileScalarWhereInput[]
  }

  export type webhook_eventCreateNestedManyWithoutWebhookInput = {
    create?: XOR<webhook_eventCreateWithoutWebhookInput, webhook_eventUncheckedCreateWithoutWebhookInput> | webhook_eventCreateWithoutWebhookInput[] | webhook_eventUncheckedCreateWithoutWebhookInput[]
    connectOrCreate?: webhook_eventCreateOrConnectWithoutWebhookInput | webhook_eventCreateOrConnectWithoutWebhookInput[]
    createMany?: webhook_eventCreateManyWebhookInputEnvelope
    connect?: webhook_eventWhereUniqueInput | webhook_eventWhereUniqueInput[]
  }

  export type webhook_eventUncheckedCreateNestedManyWithoutWebhookInput = {
    create?: XOR<webhook_eventCreateWithoutWebhookInput, webhook_eventUncheckedCreateWithoutWebhookInput> | webhook_eventCreateWithoutWebhookInput[] | webhook_eventUncheckedCreateWithoutWebhookInput[]
    connectOrCreate?: webhook_eventCreateOrConnectWithoutWebhookInput | webhook_eventCreateOrConnectWithoutWebhookInput[]
    createMany?: webhook_eventCreateManyWebhookInputEnvelope
    connect?: webhook_eventWhereUniqueInput | webhook_eventWhereUniqueInput[]
  }

  export type webhook_eventUpdateManyWithoutWebhookNestedInput = {
    create?: XOR<webhook_eventCreateWithoutWebhookInput, webhook_eventUncheckedCreateWithoutWebhookInput> | webhook_eventCreateWithoutWebhookInput[] | webhook_eventUncheckedCreateWithoutWebhookInput[]
    connectOrCreate?: webhook_eventCreateOrConnectWithoutWebhookInput | webhook_eventCreateOrConnectWithoutWebhookInput[]
    upsert?: webhook_eventUpsertWithWhereUniqueWithoutWebhookInput | webhook_eventUpsertWithWhereUniqueWithoutWebhookInput[]
    createMany?: webhook_eventCreateManyWebhookInputEnvelope
    set?: webhook_eventWhereUniqueInput | webhook_eventWhereUniqueInput[]
    disconnect?: webhook_eventWhereUniqueInput | webhook_eventWhereUniqueInput[]
    delete?: webhook_eventWhereUniqueInput | webhook_eventWhereUniqueInput[]
    connect?: webhook_eventWhereUniqueInput | webhook_eventWhereUniqueInput[]
    update?: webhook_eventUpdateWithWhereUniqueWithoutWebhookInput | webhook_eventUpdateWithWhereUniqueWithoutWebhookInput[]
    updateMany?: webhook_eventUpdateManyWithWhereWithoutWebhookInput | webhook_eventUpdateManyWithWhereWithoutWebhookInput[]
    deleteMany?: webhook_eventScalarWhereInput | webhook_eventScalarWhereInput[]
  }

  export type webhook_eventUncheckedUpdateManyWithoutWebhookNestedInput = {
    create?: XOR<webhook_eventCreateWithoutWebhookInput, webhook_eventUncheckedCreateWithoutWebhookInput> | webhook_eventCreateWithoutWebhookInput[] | webhook_eventUncheckedCreateWithoutWebhookInput[]
    connectOrCreate?: webhook_eventCreateOrConnectWithoutWebhookInput | webhook_eventCreateOrConnectWithoutWebhookInput[]
    upsert?: webhook_eventUpsertWithWhereUniqueWithoutWebhookInput | webhook_eventUpsertWithWhereUniqueWithoutWebhookInput[]
    createMany?: webhook_eventCreateManyWebhookInputEnvelope
    set?: webhook_eventWhereUniqueInput | webhook_eventWhereUniqueInput[]
    disconnect?: webhook_eventWhereUniqueInput | webhook_eventWhereUniqueInput[]
    delete?: webhook_eventWhereUniqueInput | webhook_eventWhereUniqueInput[]
    connect?: webhook_eventWhereUniqueInput | webhook_eventWhereUniqueInput[]
    update?: webhook_eventUpdateWithWhereUniqueWithoutWebhookInput | webhook_eventUpdateWithWhereUniqueWithoutWebhookInput[]
    updateMany?: webhook_eventUpdateManyWithWhereWithoutWebhookInput | webhook_eventUpdateManyWithWhereWithoutWebhookInput[]
    deleteMany?: webhook_eventScalarWhereInput | webhook_eventScalarWhereInput[]
  }

  export type webhookCreateNestedOneWithoutWebhook_eventInput = {
    create?: XOR<webhookCreateWithoutWebhook_eventInput, webhookUncheckedCreateWithoutWebhook_eventInput>
    connectOrCreate?: webhookCreateOrConnectWithoutWebhook_eventInput
    connect?: webhookWhereUniqueInput
  }

  export type Enumwebhook_event_statusFieldUpdateOperationsInput = {
    set?: $Enums.webhook_event_status
  }

  export type webhookUpdateOneRequiredWithoutWebhook_eventNestedInput = {
    create?: XOR<webhookCreateWithoutWebhook_eventInput, webhookUncheckedCreateWithoutWebhook_eventInput>
    connectOrCreate?: webhookCreateOrConnectWithoutWebhook_eventInput
    upsert?: webhookUpsertWithoutWebhook_eventInput
    connect?: webhookWhereUniqueInput
    update?: XOR<XOR<webhookUpdateToOneWithWhereWithoutWebhook_eventInput, webhookUpdateWithoutWebhook_eventInput>, webhookUncheckedUpdateWithoutWebhook_eventInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumwebhook_event_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.webhook_event_status | Enumwebhook_event_statusFieldRefInput<$PrismaModel>
    in?: $Enums.webhook_event_status[] | ListEnumwebhook_event_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.webhook_event_status[] | ListEnumwebhook_event_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumwebhook_event_statusFilter<$PrismaModel> | $Enums.webhook_event_status
  }

  export type NestedEnumwebhook_event_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.webhook_event_status | Enumwebhook_event_statusFieldRefInput<$PrismaModel>
    in?: $Enums.webhook_event_status[] | ListEnumwebhook_event_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.webhook_event_status[] | ListEnumwebhook_event_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumwebhook_event_statusWithAggregatesFilter<$PrismaModel> | $Enums.webhook_event_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumwebhook_event_statusFilter<$PrismaModel>
    _max?: NestedEnumwebhook_event_statusFilter<$PrismaModel>
  }

  export type repositoryCreateWithoutFileInput = {
    id?: string
    name: string
    slug: string
    url: string
    visibility?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type repositoryUncheckedCreateWithoutFileInput = {
    id?: string
    name: string
    slug: string
    url: string
    visibility?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type repositoryCreateOrConnectWithoutFileInput = {
    where: repositoryWhereUniqueInput
    create: XOR<repositoryCreateWithoutFileInput, repositoryUncheckedCreateWithoutFileInput>
  }

  export type repositoryUpsertWithoutFileInput = {
    update: XOR<repositoryUpdateWithoutFileInput, repositoryUncheckedUpdateWithoutFileInput>
    create: XOR<repositoryCreateWithoutFileInput, repositoryUncheckedCreateWithoutFileInput>
    where?: repositoryWhereInput
  }

  export type repositoryUpdateToOneWithWhereWithoutFileInput = {
    where?: repositoryWhereInput
    data: XOR<repositoryUpdateWithoutFileInput, repositoryUncheckedUpdateWithoutFileInput>
  }

  export type repositoryUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type repositoryUncheckedUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fileCreateWithoutRepositoryInput = {
    id?: string
    slug: string
    file_extension: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type fileUncheckedCreateWithoutRepositoryInput = {
    id?: string
    slug: string
    file_extension: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type fileCreateOrConnectWithoutRepositoryInput = {
    where: fileWhereUniqueInput
    create: XOR<fileCreateWithoutRepositoryInput, fileUncheckedCreateWithoutRepositoryInput>
  }

  export type fileCreateManyRepositoryInputEnvelope = {
    data: fileCreateManyRepositoryInput | fileCreateManyRepositoryInput[]
    skipDuplicates?: boolean
  }

  export type fileUpsertWithWhereUniqueWithoutRepositoryInput = {
    where: fileWhereUniqueInput
    update: XOR<fileUpdateWithoutRepositoryInput, fileUncheckedUpdateWithoutRepositoryInput>
    create: XOR<fileCreateWithoutRepositoryInput, fileUncheckedCreateWithoutRepositoryInput>
  }

  export type fileUpdateWithWhereUniqueWithoutRepositoryInput = {
    where: fileWhereUniqueInput
    data: XOR<fileUpdateWithoutRepositoryInput, fileUncheckedUpdateWithoutRepositoryInput>
  }

  export type fileUpdateManyWithWhereWithoutRepositoryInput = {
    where: fileScalarWhereInput
    data: XOR<fileUpdateManyMutationInput, fileUncheckedUpdateManyWithoutRepositoryInput>
  }

  export type fileScalarWhereInput = {
    AND?: fileScalarWhereInput | fileScalarWhereInput[]
    OR?: fileScalarWhereInput[]
    NOT?: fileScalarWhereInput | fileScalarWhereInput[]
    id?: UuidFilter<"file"> | string
    slug?: StringFilter<"file"> | string
    repository_id?: UuidFilter<"file"> | string
    file_extension?: StringFilter<"file"> | string
    content?: StringFilter<"file"> | string
    created_at?: DateTimeFilter<"file"> | Date | string
    updated_at?: DateTimeFilter<"file"> | Date | string
  }

  export type webhook_eventCreateWithoutWebhookInput = {
    id?: string
    status?: $Enums.webhook_event_status
    payload: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type webhook_eventUncheckedCreateWithoutWebhookInput = {
    id?: string
    status?: $Enums.webhook_event_status
    payload: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type webhook_eventCreateOrConnectWithoutWebhookInput = {
    where: webhook_eventWhereUniqueInput
    create: XOR<webhook_eventCreateWithoutWebhookInput, webhook_eventUncheckedCreateWithoutWebhookInput>
  }

  export type webhook_eventCreateManyWebhookInputEnvelope = {
    data: webhook_eventCreateManyWebhookInput | webhook_eventCreateManyWebhookInput[]
    skipDuplicates?: boolean
  }

  export type webhook_eventUpsertWithWhereUniqueWithoutWebhookInput = {
    where: webhook_eventWhereUniqueInput
    update: XOR<webhook_eventUpdateWithoutWebhookInput, webhook_eventUncheckedUpdateWithoutWebhookInput>
    create: XOR<webhook_eventCreateWithoutWebhookInput, webhook_eventUncheckedCreateWithoutWebhookInput>
  }

  export type webhook_eventUpdateWithWhereUniqueWithoutWebhookInput = {
    where: webhook_eventWhereUniqueInput
    data: XOR<webhook_eventUpdateWithoutWebhookInput, webhook_eventUncheckedUpdateWithoutWebhookInput>
  }

  export type webhook_eventUpdateManyWithWhereWithoutWebhookInput = {
    where: webhook_eventScalarWhereInput
    data: XOR<webhook_eventUpdateManyMutationInput, webhook_eventUncheckedUpdateManyWithoutWebhookInput>
  }

  export type webhook_eventScalarWhereInput = {
    AND?: webhook_eventScalarWhereInput | webhook_eventScalarWhereInput[]
    OR?: webhook_eventScalarWhereInput[]
    NOT?: webhook_eventScalarWhereInput | webhook_eventScalarWhereInput[]
    id?: UuidFilter<"webhook_event"> | string
    webhook_id?: UuidFilter<"webhook_event"> | string
    status?: Enumwebhook_event_statusFilter<"webhook_event"> | $Enums.webhook_event_status
    payload?: StringFilter<"webhook_event"> | string
    created_at?: DateTimeFilter<"webhook_event"> | Date | string
    updated_at?: DateTimeFilter<"webhook_event"> | Date | string
  }

  export type webhookCreateWithoutWebhook_eventInput = {
    id?: string
    repository_url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type webhookUncheckedCreateWithoutWebhook_eventInput = {
    id?: string
    repository_url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type webhookCreateOrConnectWithoutWebhook_eventInput = {
    where: webhookWhereUniqueInput
    create: XOR<webhookCreateWithoutWebhook_eventInput, webhookUncheckedCreateWithoutWebhook_eventInput>
  }

  export type webhookUpsertWithoutWebhook_eventInput = {
    update: XOR<webhookUpdateWithoutWebhook_eventInput, webhookUncheckedUpdateWithoutWebhook_eventInput>
    create: XOR<webhookCreateWithoutWebhook_eventInput, webhookUncheckedCreateWithoutWebhook_eventInput>
    where?: webhookWhereInput
  }

  export type webhookUpdateToOneWithWhereWithoutWebhook_eventInput = {
    where?: webhookWhereInput
    data: XOR<webhookUpdateWithoutWebhook_eventInput, webhookUncheckedUpdateWithoutWebhook_eventInput>
  }

  export type webhookUpdateWithoutWebhook_eventInput = {
    id?: StringFieldUpdateOperationsInput | string
    repository_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type webhookUncheckedUpdateWithoutWebhook_eventInput = {
    id?: StringFieldUpdateOperationsInput | string
    repository_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fileCreateManyRepositoryInput = {
    id?: string
    slug: string
    file_extension: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type fileUpdateWithoutRepositoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    file_extension?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fileUncheckedUpdateWithoutRepositoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    file_extension?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fileUncheckedUpdateManyWithoutRepositoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    file_extension?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type webhook_eventCreateManyWebhookInput = {
    id?: string
    status?: $Enums.webhook_event_status
    payload: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type webhook_eventUpdateWithoutWebhookInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: Enumwebhook_event_statusFieldUpdateOperationsInput | $Enums.webhook_event_status
    payload?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type webhook_eventUncheckedUpdateWithoutWebhookInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: Enumwebhook_event_statusFieldUpdateOperationsInput | $Enums.webhook_event_status
    payload?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type webhook_eventUncheckedUpdateManyWithoutWebhookInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: Enumwebhook_event_statusFieldUpdateOperationsInput | $Enums.webhook_event_status
    payload?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}