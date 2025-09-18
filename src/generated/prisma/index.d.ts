
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
 * Model AppUser
 * 
 */
export type AppUser = $Result.DefaultSelection<Prisma.$AppUserPayload>
/**
 * Model GdrSession
 * 
 */
export type GdrSession = $Result.DefaultSelection<Prisma.$GdrSessionPayload>
/**
 * Model GdrSessionRegistration
 * 
 */
export type GdrSessionRegistration = $Result.DefaultSelection<Prisma.$GdrSessionRegistrationPayload>
/**
 * Model MainEvent
 * 
 */
export type MainEvent = $Result.DefaultSelection<Prisma.$MainEventPayload>
/**
 * Model MainEventRegistration
 * 
 */
export type MainEventRegistration = $Result.DefaultSelection<Prisma.$MainEventRegistrationPayload>
/**
 * Model LoggerIDML
 * 
 */
export type LoggerIDML = $Result.DefaultSelection<Prisma.$LoggerIDMLPayload>
/**
 * Model NewsArticle
 * 
 */
export type NewsArticle = $Result.DefaultSelection<Prisma.$NewsArticlePayload>
/**
 * Model NewsLike
 * 
 */
export type NewsLike = $Result.DefaultSelection<Prisma.$NewsLikePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AppUsers
 * const appUsers = await prisma.appUser.findMany()
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
   * // Fetch zero or more AppUsers
   * const appUsers = await prisma.appUser.findMany()
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
   * `prisma.appUser`: Exposes CRUD operations for the **AppUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppUsers
    * const appUsers = await prisma.appUser.findMany()
    * ```
    */
  get appUser(): Prisma.AppUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gdrSession`: Exposes CRUD operations for the **GdrSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GdrSessions
    * const gdrSessions = await prisma.gdrSession.findMany()
    * ```
    */
  get gdrSession(): Prisma.GdrSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gdrSessionRegistration`: Exposes CRUD operations for the **GdrSessionRegistration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GdrSessionRegistrations
    * const gdrSessionRegistrations = await prisma.gdrSessionRegistration.findMany()
    * ```
    */
  get gdrSessionRegistration(): Prisma.GdrSessionRegistrationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mainEvent`: Exposes CRUD operations for the **MainEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MainEvents
    * const mainEvents = await prisma.mainEvent.findMany()
    * ```
    */
  get mainEvent(): Prisma.MainEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mainEventRegistration`: Exposes CRUD operations for the **MainEventRegistration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MainEventRegistrations
    * const mainEventRegistrations = await prisma.mainEventRegistration.findMany()
    * ```
    */
  get mainEventRegistration(): Prisma.MainEventRegistrationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loggerIDML`: Exposes CRUD operations for the **LoggerIDML** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoggerIDMLS
    * const loggerIDMLS = await prisma.loggerIDML.findMany()
    * ```
    */
  get loggerIDML(): Prisma.LoggerIDMLDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsArticle`: Exposes CRUD operations for the **NewsArticle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsArticles
    * const newsArticles = await prisma.newsArticle.findMany()
    * ```
    */
  get newsArticle(): Prisma.NewsArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsLike`: Exposes CRUD operations for the **NewsLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsLikes
    * const newsLikes = await prisma.newsLike.findMany()
    * ```
    */
  get newsLike(): Prisma.NewsLikeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    AppUser: 'AppUser',
    GdrSession: 'GdrSession',
    GdrSessionRegistration: 'GdrSessionRegistration',
    MainEvent: 'MainEvent',
    MainEventRegistration: 'MainEventRegistration',
    LoggerIDML: 'LoggerIDML',
    NewsArticle: 'NewsArticle',
    NewsLike: 'NewsLike'
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
      modelProps: "appUser" | "gdrSession" | "gdrSessionRegistration" | "mainEvent" | "mainEventRegistration" | "loggerIDML" | "newsArticle" | "newsLike"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AppUser: {
        payload: Prisma.$AppUserPayload<ExtArgs>
        fields: Prisma.AppUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          findFirst: {
            args: Prisma.AppUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          findMany: {
            args: Prisma.AppUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>[]
          }
          create: {
            args: Prisma.AppUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          createMany: {
            args: Prisma.AppUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>[]
          }
          delete: {
            args: Prisma.AppUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          update: {
            args: Prisma.AppUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          deleteMany: {
            args: Prisma.AppUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>[]
          }
          upsert: {
            args: Prisma.AppUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          aggregate: {
            args: Prisma.AppUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppUser>
          }
          groupBy: {
            args: Prisma.AppUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppUserCountArgs<ExtArgs>
            result: $Utils.Optional<AppUserCountAggregateOutputType> | number
          }
        }
      }
      GdrSession: {
        payload: Prisma.$GdrSessionPayload<ExtArgs>
        fields: Prisma.GdrSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GdrSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GdrSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GdrSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GdrSessionPayload>
          }
          findFirst: {
            args: Prisma.GdrSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GdrSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GdrSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GdrSessionPayload>
          }
          findMany: {
            args: Prisma.GdrSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GdrSessionPayload>[]
          }
          create: {
            args: Prisma.GdrSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GdrSessionPayload>
          }
          createMany: {
            args: Prisma.GdrSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GdrSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GdrSessionPayload>[]
          }
          delete: {
            args: Prisma.GdrSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GdrSessionPayload>
          }
          update: {
            args: Prisma.GdrSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GdrSessionPayload>
          }
          deleteMany: {
            args: Prisma.GdrSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GdrSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GdrSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GdrSessionPayload>[]
          }
          upsert: {
            args: Prisma.GdrSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GdrSessionPayload>
          }
          aggregate: {
            args: Prisma.GdrSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGdrSession>
          }
          groupBy: {
            args: Prisma.GdrSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<GdrSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.GdrSessionCountArgs<ExtArgs>
            result: $Utils.Optional<GdrSessionCountAggregateOutputType> | number
          }
        }
      }
      GdrSessionRegistration: {
        payload: Prisma.$GdrSessionRegistrationPayload<ExtArgs>
        fields: Prisma.GdrSessionRegistrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GdrSessionRegistrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GdrSessionRegistrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GdrSessionRegistrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GdrSessionRegistrationPayload>
          }
          findFirst: {
            args: Prisma.GdrSessionRegistrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GdrSessionRegistrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GdrSessionRegistrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GdrSessionRegistrationPayload>
          }
          findMany: {
            args: Prisma.GdrSessionRegistrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GdrSessionRegistrationPayload>[]
          }
          create: {
            args: Prisma.GdrSessionRegistrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GdrSessionRegistrationPayload>
          }
          createMany: {
            args: Prisma.GdrSessionRegistrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GdrSessionRegistrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GdrSessionRegistrationPayload>[]
          }
          delete: {
            args: Prisma.GdrSessionRegistrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GdrSessionRegistrationPayload>
          }
          update: {
            args: Prisma.GdrSessionRegistrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GdrSessionRegistrationPayload>
          }
          deleteMany: {
            args: Prisma.GdrSessionRegistrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GdrSessionRegistrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GdrSessionRegistrationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GdrSessionRegistrationPayload>[]
          }
          upsert: {
            args: Prisma.GdrSessionRegistrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GdrSessionRegistrationPayload>
          }
          aggregate: {
            args: Prisma.GdrSessionRegistrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGdrSessionRegistration>
          }
          groupBy: {
            args: Prisma.GdrSessionRegistrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<GdrSessionRegistrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.GdrSessionRegistrationCountArgs<ExtArgs>
            result: $Utils.Optional<GdrSessionRegistrationCountAggregateOutputType> | number
          }
        }
      }
      MainEvent: {
        payload: Prisma.$MainEventPayload<ExtArgs>
        fields: Prisma.MainEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MainEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MainEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainEventPayload>
          }
          findFirst: {
            args: Prisma.MainEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MainEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainEventPayload>
          }
          findMany: {
            args: Prisma.MainEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainEventPayload>[]
          }
          create: {
            args: Prisma.MainEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainEventPayload>
          }
          createMany: {
            args: Prisma.MainEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MainEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainEventPayload>[]
          }
          delete: {
            args: Prisma.MainEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainEventPayload>
          }
          update: {
            args: Prisma.MainEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainEventPayload>
          }
          deleteMany: {
            args: Prisma.MainEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MainEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MainEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainEventPayload>[]
          }
          upsert: {
            args: Prisma.MainEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainEventPayload>
          }
          aggregate: {
            args: Prisma.MainEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMainEvent>
          }
          groupBy: {
            args: Prisma.MainEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<MainEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.MainEventCountArgs<ExtArgs>
            result: $Utils.Optional<MainEventCountAggregateOutputType> | number
          }
        }
      }
      MainEventRegistration: {
        payload: Prisma.$MainEventRegistrationPayload<ExtArgs>
        fields: Prisma.MainEventRegistrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MainEventRegistrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainEventRegistrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MainEventRegistrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainEventRegistrationPayload>
          }
          findFirst: {
            args: Prisma.MainEventRegistrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainEventRegistrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MainEventRegistrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainEventRegistrationPayload>
          }
          findMany: {
            args: Prisma.MainEventRegistrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainEventRegistrationPayload>[]
          }
          create: {
            args: Prisma.MainEventRegistrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainEventRegistrationPayload>
          }
          createMany: {
            args: Prisma.MainEventRegistrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MainEventRegistrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainEventRegistrationPayload>[]
          }
          delete: {
            args: Prisma.MainEventRegistrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainEventRegistrationPayload>
          }
          update: {
            args: Prisma.MainEventRegistrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainEventRegistrationPayload>
          }
          deleteMany: {
            args: Prisma.MainEventRegistrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MainEventRegistrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MainEventRegistrationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainEventRegistrationPayload>[]
          }
          upsert: {
            args: Prisma.MainEventRegistrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainEventRegistrationPayload>
          }
          aggregate: {
            args: Prisma.MainEventRegistrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMainEventRegistration>
          }
          groupBy: {
            args: Prisma.MainEventRegistrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MainEventRegistrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MainEventRegistrationCountArgs<ExtArgs>
            result: $Utils.Optional<MainEventRegistrationCountAggregateOutputType> | number
          }
        }
      }
      LoggerIDML: {
        payload: Prisma.$LoggerIDMLPayload<ExtArgs>
        fields: Prisma.LoggerIDMLFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoggerIDMLFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggerIDMLPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoggerIDMLFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggerIDMLPayload>
          }
          findFirst: {
            args: Prisma.LoggerIDMLFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggerIDMLPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoggerIDMLFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggerIDMLPayload>
          }
          findMany: {
            args: Prisma.LoggerIDMLFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggerIDMLPayload>[]
          }
          create: {
            args: Prisma.LoggerIDMLCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggerIDMLPayload>
          }
          createMany: {
            args: Prisma.LoggerIDMLCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoggerIDMLCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggerIDMLPayload>[]
          }
          delete: {
            args: Prisma.LoggerIDMLDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggerIDMLPayload>
          }
          update: {
            args: Prisma.LoggerIDMLUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggerIDMLPayload>
          }
          deleteMany: {
            args: Prisma.LoggerIDMLDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoggerIDMLUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoggerIDMLUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggerIDMLPayload>[]
          }
          upsert: {
            args: Prisma.LoggerIDMLUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggerIDMLPayload>
          }
          aggregate: {
            args: Prisma.LoggerIDMLAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoggerIDML>
          }
          groupBy: {
            args: Prisma.LoggerIDMLGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoggerIDMLGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoggerIDMLCountArgs<ExtArgs>
            result: $Utils.Optional<LoggerIDMLCountAggregateOutputType> | number
          }
        }
      }
      NewsArticle: {
        payload: Prisma.$NewsArticlePayload<ExtArgs>
        fields: Prisma.NewsArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          findFirst: {
            args: Prisma.NewsArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          findMany: {
            args: Prisma.NewsArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>[]
          }
          create: {
            args: Prisma.NewsArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          createMany: {
            args: Prisma.NewsArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>[]
          }
          delete: {
            args: Prisma.NewsArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          update: {
            args: Prisma.NewsArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          deleteMany: {
            args: Prisma.NewsArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>[]
          }
          upsert: {
            args: Prisma.NewsArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          aggregate: {
            args: Prisma.NewsArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsArticle>
          }
          groupBy: {
            args: Prisma.NewsArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsArticleCountArgs<ExtArgs>
            result: $Utils.Optional<NewsArticleCountAggregateOutputType> | number
          }
        }
      }
      NewsLike: {
        payload: Prisma.$NewsLikePayload<ExtArgs>
        fields: Prisma.NewsLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLikePayload>
          }
          findFirst: {
            args: Prisma.NewsLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLikePayload>
          }
          findMany: {
            args: Prisma.NewsLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLikePayload>[]
          }
          create: {
            args: Prisma.NewsLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLikePayload>
          }
          createMany: {
            args: Prisma.NewsLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsLikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLikePayload>[]
          }
          delete: {
            args: Prisma.NewsLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLikePayload>
          }
          update: {
            args: Prisma.NewsLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLikePayload>
          }
          deleteMany: {
            args: Prisma.NewsLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsLikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLikePayload>[]
          }
          upsert: {
            args: Prisma.NewsLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLikePayload>
          }
          aggregate: {
            args: Prisma.NewsLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsLike>
          }
          groupBy: {
            args: Prisma.NewsLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsLikeCountArgs<ExtArgs>
            result: $Utils.Optional<NewsLikeCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    appUser?: AppUserOmit
    gdrSession?: GdrSessionOmit
    gdrSessionRegistration?: GdrSessionRegistrationOmit
    mainEvent?: MainEventOmit
    mainEventRegistration?: MainEventRegistrationOmit
    loggerIDML?: LoggerIDMLOmit
    newsArticle?: NewsArticleOmit
    newsLike?: NewsLikeOmit
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
   * Count Type AppUserCountOutputType
   */

  export type AppUserCountOutputType = {
    newsArticles: number
    GdrSessionRegistrations: number
    mainEventRegistrations: number
  }

  export type AppUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    newsArticles?: boolean | AppUserCountOutputTypeCountNewsArticlesArgs
    GdrSessionRegistrations?: boolean | AppUserCountOutputTypeCountGdrSessionRegistrationsArgs
    mainEventRegistrations?: boolean | AppUserCountOutputTypeCountMainEventRegistrationsArgs
  }

  // Custom InputTypes
  /**
   * AppUserCountOutputType without action
   */
  export type AppUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUserCountOutputType
     */
    select?: AppUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppUserCountOutputType without action
   */
  export type AppUserCountOutputTypeCountNewsArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsArticleWhereInput
  }

  /**
   * AppUserCountOutputType without action
   */
  export type AppUserCountOutputTypeCountGdrSessionRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GdrSessionRegistrationWhereInput
  }

  /**
   * AppUserCountOutputType without action
   */
  export type AppUserCountOutputTypeCountMainEventRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MainEventRegistrationWhereInput
  }


  /**
   * Count Type GdrSessionCountOutputType
   */

  export type GdrSessionCountOutputType = {
    gdrSessionRegistrations: number
  }

  export type GdrSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gdrSessionRegistrations?: boolean | GdrSessionCountOutputTypeCountGdrSessionRegistrationsArgs
  }

  // Custom InputTypes
  /**
   * GdrSessionCountOutputType without action
   */
  export type GdrSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GdrSessionCountOutputType
     */
    select?: GdrSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GdrSessionCountOutputType without action
   */
  export type GdrSessionCountOutputTypeCountGdrSessionRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GdrSessionRegistrationWhereInput
  }


  /**
   * Count Type MainEventCountOutputType
   */

  export type MainEventCountOutputType = {
    mainEventRegistrations: number
  }

  export type MainEventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mainEventRegistrations?: boolean | MainEventCountOutputTypeCountMainEventRegistrationsArgs
  }

  // Custom InputTypes
  /**
   * MainEventCountOutputType without action
   */
  export type MainEventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainEventCountOutputType
     */
    select?: MainEventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MainEventCountOutputType without action
   */
  export type MainEventCountOutputTypeCountMainEventRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MainEventRegistrationWhereInput
  }


  /**
   * Count Type NewsArticleCountOutputType
   */

  export type NewsArticleCountOutputType = {
    likes: number
  }

  export type NewsArticleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | NewsArticleCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * NewsArticleCountOutputType without action
   */
  export type NewsArticleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleCountOutputType
     */
    select?: NewsArticleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsArticleCountOutputType without action
   */
  export type NewsArticleCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsLikeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AppUser
   */

  export type AggregateAppUser = {
    _count: AppUserCountAggregateOutputType | null
    _min: AppUserMinAggregateOutputType | null
    _max: AppUserMaxAggregateOutputType | null
  }

  export type AppUserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    name: string | null
    surname: string | null
    birthdate: Date | null
    email: string | null
    role: string | null
    phone_number: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AppUserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    name: string | null
    surname: string | null
    birthdate: Date | null
    email: string | null
    role: string | null
    phone_number: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AppUserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    name: number
    surname: number
    birthdate: number
    email: number
    role: number
    phone_number: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AppUserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    surname?: true
    birthdate?: true
    email?: true
    role?: true
    phone_number?: true
    created_at?: true
    updated_at?: true
  }

  export type AppUserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    surname?: true
    birthdate?: true
    email?: true
    role?: true
    phone_number?: true
    created_at?: true
    updated_at?: true
  }

  export type AppUserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    surname?: true
    birthdate?: true
    email?: true
    role?: true
    phone_number?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AppUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppUser to aggregate.
     */
    where?: AppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppUsers
    **/
    _count?: true | AppUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppUserMaxAggregateInputType
  }

  export type GetAppUserAggregateType<T extends AppUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAppUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppUser[P]>
      : GetScalarType<T[P], AggregateAppUser[P]>
  }




  export type AppUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppUserWhereInput
    orderBy?: AppUserOrderByWithAggregationInput | AppUserOrderByWithAggregationInput[]
    by: AppUserScalarFieldEnum[] | AppUserScalarFieldEnum
    having?: AppUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppUserCountAggregateInputType | true
    _min?: AppUserMinAggregateInputType
    _max?: AppUserMaxAggregateInputType
  }

  export type AppUserGroupByOutputType = {
    id: string
    username: string
    password: string
    name: string
    surname: string
    birthdate: Date
    email: string
    role: string | null
    phone_number: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: AppUserCountAggregateOutputType | null
    _min: AppUserMinAggregateOutputType | null
    _max: AppUserMaxAggregateOutputType | null
  }

  type GetAppUserGroupByPayload<T extends AppUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppUserGroupByOutputType[P]>
            : GetScalarType<T[P], AppUserGroupByOutputType[P]>
        }
      >
    >


  export type AppUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    surname?: boolean
    birthdate?: boolean
    email?: boolean
    role?: boolean
    phone_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    newsArticles?: boolean | AppUser$newsArticlesArgs<ExtArgs>
    GdrSessionRegistrations?: boolean | AppUser$GdrSessionRegistrationsArgs<ExtArgs>
    mainEventRegistrations?: boolean | AppUser$mainEventRegistrationsArgs<ExtArgs>
    _count?: boolean | AppUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appUser"]>

  export type AppUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    surname?: boolean
    birthdate?: boolean
    email?: boolean
    role?: boolean
    phone_number?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["appUser"]>

  export type AppUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    surname?: boolean
    birthdate?: boolean
    email?: boolean
    role?: boolean
    phone_number?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["appUser"]>

  export type AppUserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    surname?: boolean
    birthdate?: boolean
    email?: boolean
    role?: boolean
    phone_number?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AppUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "name" | "surname" | "birthdate" | "email" | "role" | "phone_number" | "created_at" | "updated_at", ExtArgs["result"]["appUser"]>
  export type AppUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    newsArticles?: boolean | AppUser$newsArticlesArgs<ExtArgs>
    GdrSessionRegistrations?: boolean | AppUser$GdrSessionRegistrationsArgs<ExtArgs>
    mainEventRegistrations?: boolean | AppUser$mainEventRegistrationsArgs<ExtArgs>
    _count?: boolean | AppUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AppUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AppUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AppUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppUser"
    objects: {
      newsArticles: Prisma.$NewsArticlePayload<ExtArgs>[]
      GdrSessionRegistrations: Prisma.$GdrSessionRegistrationPayload<ExtArgs>[]
      mainEventRegistrations: Prisma.$MainEventRegistrationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      name: string
      surname: string
      birthdate: Date
      email: string
      role: string | null
      phone_number: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["appUser"]>
    composites: {}
  }

  type AppUserGetPayload<S extends boolean | null | undefined | AppUserDefaultArgs> = $Result.GetResult<Prisma.$AppUserPayload, S>

  type AppUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppUserCountAggregateInputType | true
    }

  export interface AppUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppUser'], meta: { name: 'AppUser' } }
    /**
     * Find zero or one AppUser that matches the filter.
     * @param {AppUserFindUniqueArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppUserFindUniqueArgs>(args: SelectSubset<T, AppUserFindUniqueArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppUserFindUniqueOrThrowArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AppUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserFindFirstArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppUserFindFirstArgs>(args?: SelectSubset<T, AppUserFindFirstArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserFindFirstOrThrowArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AppUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppUsers
     * const appUsers = await prisma.appUser.findMany()
     * 
     * // Get first 10 AppUsers
     * const appUsers = await prisma.appUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appUserWithIdOnly = await prisma.appUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppUserFindManyArgs>(args?: SelectSubset<T, AppUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppUser.
     * @param {AppUserCreateArgs} args - Arguments to create a AppUser.
     * @example
     * // Create one AppUser
     * const AppUser = await prisma.appUser.create({
     *   data: {
     *     // ... data to create a AppUser
     *   }
     * })
     * 
     */
    create<T extends AppUserCreateArgs>(args: SelectSubset<T, AppUserCreateArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppUsers.
     * @param {AppUserCreateManyArgs} args - Arguments to create many AppUsers.
     * @example
     * // Create many AppUsers
     * const appUser = await prisma.appUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppUserCreateManyArgs>(args?: SelectSubset<T, AppUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppUsers and returns the data saved in the database.
     * @param {AppUserCreateManyAndReturnArgs} args - Arguments to create many AppUsers.
     * @example
     * // Create many AppUsers
     * const appUser = await prisma.appUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppUsers and only return the `id`
     * const appUserWithIdOnly = await prisma.appUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AppUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AppUser.
     * @param {AppUserDeleteArgs} args - Arguments to delete one AppUser.
     * @example
     * // Delete one AppUser
     * const AppUser = await prisma.appUser.delete({
     *   where: {
     *     // ... filter to delete one AppUser
     *   }
     * })
     * 
     */
    delete<T extends AppUserDeleteArgs>(args: SelectSubset<T, AppUserDeleteArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppUser.
     * @param {AppUserUpdateArgs} args - Arguments to update one AppUser.
     * @example
     * // Update one AppUser
     * const appUser = await prisma.appUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppUserUpdateArgs>(args: SelectSubset<T, AppUserUpdateArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppUsers.
     * @param {AppUserDeleteManyArgs} args - Arguments to filter AppUsers to delete.
     * @example
     * // Delete a few AppUsers
     * const { count } = await prisma.appUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppUserDeleteManyArgs>(args?: SelectSubset<T, AppUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppUsers
     * const appUser = await prisma.appUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppUserUpdateManyArgs>(args: SelectSubset<T, AppUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppUsers and returns the data updated in the database.
     * @param {AppUserUpdateManyAndReturnArgs} args - Arguments to update many AppUsers.
     * @example
     * // Update many AppUsers
     * const appUser = await prisma.appUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AppUsers and only return the `id`
     * const appUserWithIdOnly = await prisma.appUser.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppUserUpdateManyAndReturnArgs>(args: SelectSubset<T, AppUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AppUser.
     * @param {AppUserUpsertArgs} args - Arguments to update or create a AppUser.
     * @example
     * // Update or create a AppUser
     * const appUser = await prisma.appUser.upsert({
     *   create: {
     *     // ... data to create a AppUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppUser we want to update
     *   }
     * })
     */
    upsert<T extends AppUserUpsertArgs>(args: SelectSubset<T, AppUserUpsertArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserCountArgs} args - Arguments to filter AppUsers to count.
     * @example
     * // Count the number of AppUsers
     * const count = await prisma.appUser.count({
     *   where: {
     *     // ... the filter for the AppUsers we want to count
     *   }
     * })
    **/
    count<T extends AppUserCountArgs>(
      args?: Subset<T, AppUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppUserAggregateArgs>(args: Subset<T, AppUserAggregateArgs>): Prisma.PrismaPromise<GetAppUserAggregateType<T>>

    /**
     * Group by AppUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserGroupByArgs} args - Group by arguments.
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
      T extends AppUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppUserGroupByArgs['orderBy'] }
        : { orderBy?: AppUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppUser model
   */
  readonly fields: AppUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    newsArticles<T extends AppUser$newsArticlesArgs<ExtArgs> = {}>(args?: Subset<T, AppUser$newsArticlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    GdrSessionRegistrations<T extends AppUser$GdrSessionRegistrationsArgs<ExtArgs> = {}>(args?: Subset<T, AppUser$GdrSessionRegistrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GdrSessionRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mainEventRegistrations<T extends AppUser$mainEventRegistrationsArgs<ExtArgs> = {}>(args?: Subset<T, AppUser$mainEventRegistrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MainEventRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AppUser model
   */
  interface AppUserFieldRefs {
    readonly id: FieldRef<"AppUser", 'String'>
    readonly username: FieldRef<"AppUser", 'String'>
    readonly password: FieldRef<"AppUser", 'String'>
    readonly name: FieldRef<"AppUser", 'String'>
    readonly surname: FieldRef<"AppUser", 'String'>
    readonly birthdate: FieldRef<"AppUser", 'DateTime'>
    readonly email: FieldRef<"AppUser", 'String'>
    readonly role: FieldRef<"AppUser", 'String'>
    readonly phone_number: FieldRef<"AppUser", 'String'>
    readonly created_at: FieldRef<"AppUser", 'DateTime'>
    readonly updated_at: FieldRef<"AppUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppUser findUnique
   */
  export type AppUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter, which AppUser to fetch.
     */
    where: AppUserWhereUniqueInput
  }

  /**
   * AppUser findUniqueOrThrow
   */
  export type AppUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter, which AppUser to fetch.
     */
    where: AppUserWhereUniqueInput
  }

  /**
   * AppUser findFirst
   */
  export type AppUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter, which AppUser to fetch.
     */
    where?: AppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppUsers.
     */
    cursor?: AppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppUsers.
     */
    distinct?: AppUserScalarFieldEnum | AppUserScalarFieldEnum[]
  }

  /**
   * AppUser findFirstOrThrow
   */
  export type AppUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter, which AppUser to fetch.
     */
    where?: AppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppUsers.
     */
    cursor?: AppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppUsers.
     */
    distinct?: AppUserScalarFieldEnum | AppUserScalarFieldEnum[]
  }

  /**
   * AppUser findMany
   */
  export type AppUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter, which AppUsers to fetch.
     */
    where?: AppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppUsers.
     */
    cursor?: AppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    distinct?: AppUserScalarFieldEnum | AppUserScalarFieldEnum[]
  }

  /**
   * AppUser create
   */
  export type AppUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * The data needed to create a AppUser.
     */
    data: XOR<AppUserCreateInput, AppUserUncheckedCreateInput>
  }

  /**
   * AppUser createMany
   */
  export type AppUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppUsers.
     */
    data: AppUserCreateManyInput | AppUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppUser createManyAndReturn
   */
  export type AppUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * The data used to create many AppUsers.
     */
    data: AppUserCreateManyInput | AppUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppUser update
   */
  export type AppUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * The data needed to update a AppUser.
     */
    data: XOR<AppUserUpdateInput, AppUserUncheckedUpdateInput>
    /**
     * Choose, which AppUser to update.
     */
    where: AppUserWhereUniqueInput
  }

  /**
   * AppUser updateMany
   */
  export type AppUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppUsers.
     */
    data: XOR<AppUserUpdateManyMutationInput, AppUserUncheckedUpdateManyInput>
    /**
     * Filter which AppUsers to update
     */
    where?: AppUserWhereInput
    /**
     * Limit how many AppUsers to update.
     */
    limit?: number
  }

  /**
   * AppUser updateManyAndReturn
   */
  export type AppUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * The data used to update AppUsers.
     */
    data: XOR<AppUserUpdateManyMutationInput, AppUserUncheckedUpdateManyInput>
    /**
     * Filter which AppUsers to update
     */
    where?: AppUserWhereInput
    /**
     * Limit how many AppUsers to update.
     */
    limit?: number
  }

  /**
   * AppUser upsert
   */
  export type AppUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * The filter to search for the AppUser to update in case it exists.
     */
    where: AppUserWhereUniqueInput
    /**
     * In case the AppUser found by the `where` argument doesn't exist, create a new AppUser with this data.
     */
    create: XOR<AppUserCreateInput, AppUserUncheckedCreateInput>
    /**
     * In case the AppUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppUserUpdateInput, AppUserUncheckedUpdateInput>
  }

  /**
   * AppUser delete
   */
  export type AppUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter which AppUser to delete.
     */
    where: AppUserWhereUniqueInput
  }

  /**
   * AppUser deleteMany
   */
  export type AppUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppUsers to delete
     */
    where?: AppUserWhereInput
    /**
     * Limit how many AppUsers to delete.
     */
    limit?: number
  }

  /**
   * AppUser.newsArticles
   */
  export type AppUser$newsArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    where?: NewsArticleWhereInput
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    cursor?: NewsArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * AppUser.GdrSessionRegistrations
   */
  export type AppUser$GdrSessionRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GdrSessionRegistration
     */
    select?: GdrSessionRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GdrSessionRegistration
     */
    omit?: GdrSessionRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GdrSessionRegistrationInclude<ExtArgs> | null
    where?: GdrSessionRegistrationWhereInput
    orderBy?: GdrSessionRegistrationOrderByWithRelationInput | GdrSessionRegistrationOrderByWithRelationInput[]
    cursor?: GdrSessionRegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GdrSessionRegistrationScalarFieldEnum | GdrSessionRegistrationScalarFieldEnum[]
  }

  /**
   * AppUser.mainEventRegistrations
   */
  export type AppUser$mainEventRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainEventRegistration
     */
    select?: MainEventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainEventRegistration
     */
    omit?: MainEventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainEventRegistrationInclude<ExtArgs> | null
    where?: MainEventRegistrationWhereInput
    orderBy?: MainEventRegistrationOrderByWithRelationInput | MainEventRegistrationOrderByWithRelationInput[]
    cursor?: MainEventRegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MainEventRegistrationScalarFieldEnum | MainEventRegistrationScalarFieldEnum[]
  }

  /**
   * AppUser without action
   */
  export type AppUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
  }


  /**
   * Model GdrSession
   */

  export type AggregateGdrSession = {
    _count: GdrSessionCountAggregateOutputType | null
    _avg: GdrSessionAvgAggregateOutputType | null
    _sum: GdrSessionSumAggregateOutputType | null
    _min: GdrSessionMinAggregateOutputType | null
    _max: GdrSessionMaxAggregateOutputType | null
  }

  export type GdrSessionAvgAggregateOutputType = {
    availableSeats: number | null
  }

  export type GdrSessionSumAggregateOutputType = {
    availableSeats: number | null
  }

  export type GdrSessionMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    urlImg: string | null
    start: Date | null
    end: Date | null
    master: string | null
    availableSeats: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type GdrSessionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    urlImg: string | null
    start: Date | null
    end: Date | null
    master: string | null
    availableSeats: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type GdrSessionCountAggregateOutputType = {
    id: number
    title: number
    description: number
    urlImg: number
    start: number
    end: number
    master: number
    availableSeats: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type GdrSessionAvgAggregateInputType = {
    availableSeats?: true
  }

  export type GdrSessionSumAggregateInputType = {
    availableSeats?: true
  }

  export type GdrSessionMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    urlImg?: true
    start?: true
    end?: true
    master?: true
    availableSeats?: true
    created_at?: true
    updated_at?: true
  }

  export type GdrSessionMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    urlImg?: true
    start?: true
    end?: true
    master?: true
    availableSeats?: true
    created_at?: true
    updated_at?: true
  }

  export type GdrSessionCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    urlImg?: true
    start?: true
    end?: true
    master?: true
    availableSeats?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type GdrSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GdrSession to aggregate.
     */
    where?: GdrSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GdrSessions to fetch.
     */
    orderBy?: GdrSessionOrderByWithRelationInput | GdrSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GdrSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GdrSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GdrSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GdrSessions
    **/
    _count?: true | GdrSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GdrSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GdrSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GdrSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GdrSessionMaxAggregateInputType
  }

  export type GetGdrSessionAggregateType<T extends GdrSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateGdrSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGdrSession[P]>
      : GetScalarType<T[P], AggregateGdrSession[P]>
  }




  export type GdrSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GdrSessionWhereInput
    orderBy?: GdrSessionOrderByWithAggregationInput | GdrSessionOrderByWithAggregationInput[]
    by: GdrSessionScalarFieldEnum[] | GdrSessionScalarFieldEnum
    having?: GdrSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GdrSessionCountAggregateInputType | true
    _avg?: GdrSessionAvgAggregateInputType
    _sum?: GdrSessionSumAggregateInputType
    _min?: GdrSessionMinAggregateInputType
    _max?: GdrSessionMaxAggregateInputType
  }

  export type GdrSessionGroupByOutputType = {
    id: string
    title: string
    description: string
    urlImg: string | null
    start: Date
    end: Date
    master: string
    availableSeats: number
    created_at: Date | null
    updated_at: Date | null
    _count: GdrSessionCountAggregateOutputType | null
    _avg: GdrSessionAvgAggregateOutputType | null
    _sum: GdrSessionSumAggregateOutputType | null
    _min: GdrSessionMinAggregateOutputType | null
    _max: GdrSessionMaxAggregateOutputType | null
  }

  type GetGdrSessionGroupByPayload<T extends GdrSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GdrSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GdrSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GdrSessionGroupByOutputType[P]>
            : GetScalarType<T[P], GdrSessionGroupByOutputType[P]>
        }
      >
    >


  export type GdrSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    urlImg?: boolean
    start?: boolean
    end?: boolean
    master?: boolean
    availableSeats?: boolean
    created_at?: boolean
    updated_at?: boolean
    gdrSessionRegistrations?: boolean | GdrSession$gdrSessionRegistrationsArgs<ExtArgs>
    _count?: boolean | GdrSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gdrSession"]>

  export type GdrSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    urlImg?: boolean
    start?: boolean
    end?: boolean
    master?: boolean
    availableSeats?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["gdrSession"]>

  export type GdrSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    urlImg?: boolean
    start?: boolean
    end?: boolean
    master?: boolean
    availableSeats?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["gdrSession"]>

  export type GdrSessionSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    urlImg?: boolean
    start?: boolean
    end?: boolean
    master?: boolean
    availableSeats?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type GdrSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "urlImg" | "start" | "end" | "master" | "availableSeats" | "created_at" | "updated_at", ExtArgs["result"]["gdrSession"]>
  export type GdrSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gdrSessionRegistrations?: boolean | GdrSession$gdrSessionRegistrationsArgs<ExtArgs>
    _count?: boolean | GdrSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GdrSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GdrSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GdrSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GdrSession"
    objects: {
      gdrSessionRegistrations: Prisma.$GdrSessionRegistrationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      urlImg: string | null
      start: Date
      end: Date
      master: string
      availableSeats: number
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["gdrSession"]>
    composites: {}
  }

  type GdrSessionGetPayload<S extends boolean | null | undefined | GdrSessionDefaultArgs> = $Result.GetResult<Prisma.$GdrSessionPayload, S>

  type GdrSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GdrSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GdrSessionCountAggregateInputType | true
    }

  export interface GdrSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GdrSession'], meta: { name: 'GdrSession' } }
    /**
     * Find zero or one GdrSession that matches the filter.
     * @param {GdrSessionFindUniqueArgs} args - Arguments to find a GdrSession
     * @example
     * // Get one GdrSession
     * const gdrSession = await prisma.gdrSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GdrSessionFindUniqueArgs>(args: SelectSubset<T, GdrSessionFindUniqueArgs<ExtArgs>>): Prisma__GdrSessionClient<$Result.GetResult<Prisma.$GdrSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GdrSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GdrSessionFindUniqueOrThrowArgs} args - Arguments to find a GdrSession
     * @example
     * // Get one GdrSession
     * const gdrSession = await prisma.gdrSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GdrSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, GdrSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GdrSessionClient<$Result.GetResult<Prisma.$GdrSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GdrSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GdrSessionFindFirstArgs} args - Arguments to find a GdrSession
     * @example
     * // Get one GdrSession
     * const gdrSession = await prisma.gdrSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GdrSessionFindFirstArgs>(args?: SelectSubset<T, GdrSessionFindFirstArgs<ExtArgs>>): Prisma__GdrSessionClient<$Result.GetResult<Prisma.$GdrSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GdrSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GdrSessionFindFirstOrThrowArgs} args - Arguments to find a GdrSession
     * @example
     * // Get one GdrSession
     * const gdrSession = await prisma.gdrSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GdrSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, GdrSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__GdrSessionClient<$Result.GetResult<Prisma.$GdrSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GdrSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GdrSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GdrSessions
     * const gdrSessions = await prisma.gdrSession.findMany()
     * 
     * // Get first 10 GdrSessions
     * const gdrSessions = await prisma.gdrSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gdrSessionWithIdOnly = await prisma.gdrSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GdrSessionFindManyArgs>(args?: SelectSubset<T, GdrSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GdrSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GdrSession.
     * @param {GdrSessionCreateArgs} args - Arguments to create a GdrSession.
     * @example
     * // Create one GdrSession
     * const GdrSession = await prisma.gdrSession.create({
     *   data: {
     *     // ... data to create a GdrSession
     *   }
     * })
     * 
     */
    create<T extends GdrSessionCreateArgs>(args: SelectSubset<T, GdrSessionCreateArgs<ExtArgs>>): Prisma__GdrSessionClient<$Result.GetResult<Prisma.$GdrSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GdrSessions.
     * @param {GdrSessionCreateManyArgs} args - Arguments to create many GdrSessions.
     * @example
     * // Create many GdrSessions
     * const gdrSession = await prisma.gdrSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GdrSessionCreateManyArgs>(args?: SelectSubset<T, GdrSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GdrSessions and returns the data saved in the database.
     * @param {GdrSessionCreateManyAndReturnArgs} args - Arguments to create many GdrSessions.
     * @example
     * // Create many GdrSessions
     * const gdrSession = await prisma.gdrSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GdrSessions and only return the `id`
     * const gdrSessionWithIdOnly = await prisma.gdrSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GdrSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, GdrSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GdrSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GdrSession.
     * @param {GdrSessionDeleteArgs} args - Arguments to delete one GdrSession.
     * @example
     * // Delete one GdrSession
     * const GdrSession = await prisma.gdrSession.delete({
     *   where: {
     *     // ... filter to delete one GdrSession
     *   }
     * })
     * 
     */
    delete<T extends GdrSessionDeleteArgs>(args: SelectSubset<T, GdrSessionDeleteArgs<ExtArgs>>): Prisma__GdrSessionClient<$Result.GetResult<Prisma.$GdrSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GdrSession.
     * @param {GdrSessionUpdateArgs} args - Arguments to update one GdrSession.
     * @example
     * // Update one GdrSession
     * const gdrSession = await prisma.gdrSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GdrSessionUpdateArgs>(args: SelectSubset<T, GdrSessionUpdateArgs<ExtArgs>>): Prisma__GdrSessionClient<$Result.GetResult<Prisma.$GdrSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GdrSessions.
     * @param {GdrSessionDeleteManyArgs} args - Arguments to filter GdrSessions to delete.
     * @example
     * // Delete a few GdrSessions
     * const { count } = await prisma.gdrSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GdrSessionDeleteManyArgs>(args?: SelectSubset<T, GdrSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GdrSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GdrSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GdrSessions
     * const gdrSession = await prisma.gdrSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GdrSessionUpdateManyArgs>(args: SelectSubset<T, GdrSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GdrSessions and returns the data updated in the database.
     * @param {GdrSessionUpdateManyAndReturnArgs} args - Arguments to update many GdrSessions.
     * @example
     * // Update many GdrSessions
     * const gdrSession = await prisma.gdrSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GdrSessions and only return the `id`
     * const gdrSessionWithIdOnly = await prisma.gdrSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends GdrSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, GdrSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GdrSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GdrSession.
     * @param {GdrSessionUpsertArgs} args - Arguments to update or create a GdrSession.
     * @example
     * // Update or create a GdrSession
     * const gdrSession = await prisma.gdrSession.upsert({
     *   create: {
     *     // ... data to create a GdrSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GdrSession we want to update
     *   }
     * })
     */
    upsert<T extends GdrSessionUpsertArgs>(args: SelectSubset<T, GdrSessionUpsertArgs<ExtArgs>>): Prisma__GdrSessionClient<$Result.GetResult<Prisma.$GdrSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GdrSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GdrSessionCountArgs} args - Arguments to filter GdrSessions to count.
     * @example
     * // Count the number of GdrSessions
     * const count = await prisma.gdrSession.count({
     *   where: {
     *     // ... the filter for the GdrSessions we want to count
     *   }
     * })
    **/
    count<T extends GdrSessionCountArgs>(
      args?: Subset<T, GdrSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GdrSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GdrSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GdrSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GdrSessionAggregateArgs>(args: Subset<T, GdrSessionAggregateArgs>): Prisma.PrismaPromise<GetGdrSessionAggregateType<T>>

    /**
     * Group by GdrSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GdrSessionGroupByArgs} args - Group by arguments.
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
      T extends GdrSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GdrSessionGroupByArgs['orderBy'] }
        : { orderBy?: GdrSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GdrSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGdrSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GdrSession model
   */
  readonly fields: GdrSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GdrSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GdrSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gdrSessionRegistrations<T extends GdrSession$gdrSessionRegistrationsArgs<ExtArgs> = {}>(args?: Subset<T, GdrSession$gdrSessionRegistrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GdrSessionRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GdrSession model
   */
  interface GdrSessionFieldRefs {
    readonly id: FieldRef<"GdrSession", 'String'>
    readonly title: FieldRef<"GdrSession", 'String'>
    readonly description: FieldRef<"GdrSession", 'String'>
    readonly urlImg: FieldRef<"GdrSession", 'String'>
    readonly start: FieldRef<"GdrSession", 'DateTime'>
    readonly end: FieldRef<"GdrSession", 'DateTime'>
    readonly master: FieldRef<"GdrSession", 'String'>
    readonly availableSeats: FieldRef<"GdrSession", 'Int'>
    readonly created_at: FieldRef<"GdrSession", 'DateTime'>
    readonly updated_at: FieldRef<"GdrSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GdrSession findUnique
   */
  export type GdrSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GdrSession
     */
    select?: GdrSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GdrSession
     */
    omit?: GdrSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GdrSessionInclude<ExtArgs> | null
    /**
     * Filter, which GdrSession to fetch.
     */
    where: GdrSessionWhereUniqueInput
  }

  /**
   * GdrSession findUniqueOrThrow
   */
  export type GdrSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GdrSession
     */
    select?: GdrSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GdrSession
     */
    omit?: GdrSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GdrSessionInclude<ExtArgs> | null
    /**
     * Filter, which GdrSession to fetch.
     */
    where: GdrSessionWhereUniqueInput
  }

  /**
   * GdrSession findFirst
   */
  export type GdrSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GdrSession
     */
    select?: GdrSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GdrSession
     */
    omit?: GdrSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GdrSessionInclude<ExtArgs> | null
    /**
     * Filter, which GdrSession to fetch.
     */
    where?: GdrSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GdrSessions to fetch.
     */
    orderBy?: GdrSessionOrderByWithRelationInput | GdrSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GdrSessions.
     */
    cursor?: GdrSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GdrSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GdrSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GdrSessions.
     */
    distinct?: GdrSessionScalarFieldEnum | GdrSessionScalarFieldEnum[]
  }

  /**
   * GdrSession findFirstOrThrow
   */
  export type GdrSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GdrSession
     */
    select?: GdrSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GdrSession
     */
    omit?: GdrSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GdrSessionInclude<ExtArgs> | null
    /**
     * Filter, which GdrSession to fetch.
     */
    where?: GdrSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GdrSessions to fetch.
     */
    orderBy?: GdrSessionOrderByWithRelationInput | GdrSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GdrSessions.
     */
    cursor?: GdrSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GdrSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GdrSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GdrSessions.
     */
    distinct?: GdrSessionScalarFieldEnum | GdrSessionScalarFieldEnum[]
  }

  /**
   * GdrSession findMany
   */
  export type GdrSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GdrSession
     */
    select?: GdrSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GdrSession
     */
    omit?: GdrSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GdrSessionInclude<ExtArgs> | null
    /**
     * Filter, which GdrSessions to fetch.
     */
    where?: GdrSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GdrSessions to fetch.
     */
    orderBy?: GdrSessionOrderByWithRelationInput | GdrSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GdrSessions.
     */
    cursor?: GdrSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GdrSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GdrSessions.
     */
    skip?: number
    distinct?: GdrSessionScalarFieldEnum | GdrSessionScalarFieldEnum[]
  }

  /**
   * GdrSession create
   */
  export type GdrSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GdrSession
     */
    select?: GdrSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GdrSession
     */
    omit?: GdrSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GdrSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a GdrSession.
     */
    data: XOR<GdrSessionCreateInput, GdrSessionUncheckedCreateInput>
  }

  /**
   * GdrSession createMany
   */
  export type GdrSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GdrSessions.
     */
    data: GdrSessionCreateManyInput | GdrSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GdrSession createManyAndReturn
   */
  export type GdrSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GdrSession
     */
    select?: GdrSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GdrSession
     */
    omit?: GdrSessionOmit<ExtArgs> | null
    /**
     * The data used to create many GdrSessions.
     */
    data: GdrSessionCreateManyInput | GdrSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GdrSession update
   */
  export type GdrSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GdrSession
     */
    select?: GdrSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GdrSession
     */
    omit?: GdrSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GdrSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a GdrSession.
     */
    data: XOR<GdrSessionUpdateInput, GdrSessionUncheckedUpdateInput>
    /**
     * Choose, which GdrSession to update.
     */
    where: GdrSessionWhereUniqueInput
  }

  /**
   * GdrSession updateMany
   */
  export type GdrSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GdrSessions.
     */
    data: XOR<GdrSessionUpdateManyMutationInput, GdrSessionUncheckedUpdateManyInput>
    /**
     * Filter which GdrSessions to update
     */
    where?: GdrSessionWhereInput
    /**
     * Limit how many GdrSessions to update.
     */
    limit?: number
  }

  /**
   * GdrSession updateManyAndReturn
   */
  export type GdrSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GdrSession
     */
    select?: GdrSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GdrSession
     */
    omit?: GdrSessionOmit<ExtArgs> | null
    /**
     * The data used to update GdrSessions.
     */
    data: XOR<GdrSessionUpdateManyMutationInput, GdrSessionUncheckedUpdateManyInput>
    /**
     * Filter which GdrSessions to update
     */
    where?: GdrSessionWhereInput
    /**
     * Limit how many GdrSessions to update.
     */
    limit?: number
  }

  /**
   * GdrSession upsert
   */
  export type GdrSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GdrSession
     */
    select?: GdrSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GdrSession
     */
    omit?: GdrSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GdrSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the GdrSession to update in case it exists.
     */
    where: GdrSessionWhereUniqueInput
    /**
     * In case the GdrSession found by the `where` argument doesn't exist, create a new GdrSession with this data.
     */
    create: XOR<GdrSessionCreateInput, GdrSessionUncheckedCreateInput>
    /**
     * In case the GdrSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GdrSessionUpdateInput, GdrSessionUncheckedUpdateInput>
  }

  /**
   * GdrSession delete
   */
  export type GdrSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GdrSession
     */
    select?: GdrSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GdrSession
     */
    omit?: GdrSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GdrSessionInclude<ExtArgs> | null
    /**
     * Filter which GdrSession to delete.
     */
    where: GdrSessionWhereUniqueInput
  }

  /**
   * GdrSession deleteMany
   */
  export type GdrSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GdrSessions to delete
     */
    where?: GdrSessionWhereInput
    /**
     * Limit how many GdrSessions to delete.
     */
    limit?: number
  }

  /**
   * GdrSession.gdrSessionRegistrations
   */
  export type GdrSession$gdrSessionRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GdrSessionRegistration
     */
    select?: GdrSessionRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GdrSessionRegistration
     */
    omit?: GdrSessionRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GdrSessionRegistrationInclude<ExtArgs> | null
    where?: GdrSessionRegistrationWhereInput
    orderBy?: GdrSessionRegistrationOrderByWithRelationInput | GdrSessionRegistrationOrderByWithRelationInput[]
    cursor?: GdrSessionRegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GdrSessionRegistrationScalarFieldEnum | GdrSessionRegistrationScalarFieldEnum[]
  }

  /**
   * GdrSession without action
   */
  export type GdrSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GdrSession
     */
    select?: GdrSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GdrSession
     */
    omit?: GdrSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GdrSessionInclude<ExtArgs> | null
  }


  /**
   * Model GdrSessionRegistration
   */

  export type AggregateGdrSessionRegistration = {
    _count: GdrSessionRegistrationCountAggregateOutputType | null
    _min: GdrSessionRegistrationMinAggregateOutputType | null
    _max: GdrSessionRegistrationMaxAggregateOutputType | null
  }

  export type GdrSessionRegistrationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    sessionId: string | null
    createdAt: Date | null
  }

  export type GdrSessionRegistrationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    sessionId: string | null
    createdAt: Date | null
  }

  export type GdrSessionRegistrationCountAggregateOutputType = {
    id: number
    userId: number
    sessionId: number
    createdAt: number
    _all: number
  }


  export type GdrSessionRegistrationMinAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    createdAt?: true
  }

  export type GdrSessionRegistrationMaxAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    createdAt?: true
  }

  export type GdrSessionRegistrationCountAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    createdAt?: true
    _all?: true
  }

  export type GdrSessionRegistrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GdrSessionRegistration to aggregate.
     */
    where?: GdrSessionRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GdrSessionRegistrations to fetch.
     */
    orderBy?: GdrSessionRegistrationOrderByWithRelationInput | GdrSessionRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GdrSessionRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GdrSessionRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GdrSessionRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GdrSessionRegistrations
    **/
    _count?: true | GdrSessionRegistrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GdrSessionRegistrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GdrSessionRegistrationMaxAggregateInputType
  }

  export type GetGdrSessionRegistrationAggregateType<T extends GdrSessionRegistrationAggregateArgs> = {
        [P in keyof T & keyof AggregateGdrSessionRegistration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGdrSessionRegistration[P]>
      : GetScalarType<T[P], AggregateGdrSessionRegistration[P]>
  }




  export type GdrSessionRegistrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GdrSessionRegistrationWhereInput
    orderBy?: GdrSessionRegistrationOrderByWithAggregationInput | GdrSessionRegistrationOrderByWithAggregationInput[]
    by: GdrSessionRegistrationScalarFieldEnum[] | GdrSessionRegistrationScalarFieldEnum
    having?: GdrSessionRegistrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GdrSessionRegistrationCountAggregateInputType | true
    _min?: GdrSessionRegistrationMinAggregateInputType
    _max?: GdrSessionRegistrationMaxAggregateInputType
  }

  export type GdrSessionRegistrationGroupByOutputType = {
    id: string
    userId: string
    sessionId: string
    createdAt: Date
    _count: GdrSessionRegistrationCountAggregateOutputType | null
    _min: GdrSessionRegistrationMinAggregateOutputType | null
    _max: GdrSessionRegistrationMaxAggregateOutputType | null
  }

  type GetGdrSessionRegistrationGroupByPayload<T extends GdrSessionRegistrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GdrSessionRegistrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GdrSessionRegistrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GdrSessionRegistrationGroupByOutputType[P]>
            : GetScalarType<T[P], GdrSessionRegistrationGroupByOutputType[P]>
        }
      >
    >


  export type GdrSessionRegistrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    createdAt?: boolean
    user?: boolean | AppUserDefaultArgs<ExtArgs>
    session?: boolean | GdrSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gdrSessionRegistration"]>

  export type GdrSessionRegistrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    createdAt?: boolean
    user?: boolean | AppUserDefaultArgs<ExtArgs>
    session?: boolean | GdrSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gdrSessionRegistration"]>

  export type GdrSessionRegistrationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    createdAt?: boolean
    user?: boolean | AppUserDefaultArgs<ExtArgs>
    session?: boolean | GdrSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gdrSessionRegistration"]>

  export type GdrSessionRegistrationSelectScalar = {
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    createdAt?: boolean
  }

  export type GdrSessionRegistrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "sessionId" | "createdAt", ExtArgs["result"]["gdrSessionRegistration"]>
  export type GdrSessionRegistrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AppUserDefaultArgs<ExtArgs>
    session?: boolean | GdrSessionDefaultArgs<ExtArgs>
  }
  export type GdrSessionRegistrationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AppUserDefaultArgs<ExtArgs>
    session?: boolean | GdrSessionDefaultArgs<ExtArgs>
  }
  export type GdrSessionRegistrationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AppUserDefaultArgs<ExtArgs>
    session?: boolean | GdrSessionDefaultArgs<ExtArgs>
  }

  export type $GdrSessionRegistrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GdrSessionRegistration"
    objects: {
      user: Prisma.$AppUserPayload<ExtArgs>
      session: Prisma.$GdrSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      sessionId: string
      createdAt: Date
    }, ExtArgs["result"]["gdrSessionRegistration"]>
    composites: {}
  }

  type GdrSessionRegistrationGetPayload<S extends boolean | null | undefined | GdrSessionRegistrationDefaultArgs> = $Result.GetResult<Prisma.$GdrSessionRegistrationPayload, S>

  type GdrSessionRegistrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GdrSessionRegistrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GdrSessionRegistrationCountAggregateInputType | true
    }

  export interface GdrSessionRegistrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GdrSessionRegistration'], meta: { name: 'GdrSessionRegistration' } }
    /**
     * Find zero or one GdrSessionRegistration that matches the filter.
     * @param {GdrSessionRegistrationFindUniqueArgs} args - Arguments to find a GdrSessionRegistration
     * @example
     * // Get one GdrSessionRegistration
     * const gdrSessionRegistration = await prisma.gdrSessionRegistration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GdrSessionRegistrationFindUniqueArgs>(args: SelectSubset<T, GdrSessionRegistrationFindUniqueArgs<ExtArgs>>): Prisma__GdrSessionRegistrationClient<$Result.GetResult<Prisma.$GdrSessionRegistrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GdrSessionRegistration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GdrSessionRegistrationFindUniqueOrThrowArgs} args - Arguments to find a GdrSessionRegistration
     * @example
     * // Get one GdrSessionRegistration
     * const gdrSessionRegistration = await prisma.gdrSessionRegistration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GdrSessionRegistrationFindUniqueOrThrowArgs>(args: SelectSubset<T, GdrSessionRegistrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GdrSessionRegistrationClient<$Result.GetResult<Prisma.$GdrSessionRegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GdrSessionRegistration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GdrSessionRegistrationFindFirstArgs} args - Arguments to find a GdrSessionRegistration
     * @example
     * // Get one GdrSessionRegistration
     * const gdrSessionRegistration = await prisma.gdrSessionRegistration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GdrSessionRegistrationFindFirstArgs>(args?: SelectSubset<T, GdrSessionRegistrationFindFirstArgs<ExtArgs>>): Prisma__GdrSessionRegistrationClient<$Result.GetResult<Prisma.$GdrSessionRegistrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GdrSessionRegistration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GdrSessionRegistrationFindFirstOrThrowArgs} args - Arguments to find a GdrSessionRegistration
     * @example
     * // Get one GdrSessionRegistration
     * const gdrSessionRegistration = await prisma.gdrSessionRegistration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GdrSessionRegistrationFindFirstOrThrowArgs>(args?: SelectSubset<T, GdrSessionRegistrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__GdrSessionRegistrationClient<$Result.GetResult<Prisma.$GdrSessionRegistrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GdrSessionRegistrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GdrSessionRegistrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GdrSessionRegistrations
     * const gdrSessionRegistrations = await prisma.gdrSessionRegistration.findMany()
     * 
     * // Get first 10 GdrSessionRegistrations
     * const gdrSessionRegistrations = await prisma.gdrSessionRegistration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gdrSessionRegistrationWithIdOnly = await prisma.gdrSessionRegistration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GdrSessionRegistrationFindManyArgs>(args?: SelectSubset<T, GdrSessionRegistrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GdrSessionRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GdrSessionRegistration.
     * @param {GdrSessionRegistrationCreateArgs} args - Arguments to create a GdrSessionRegistration.
     * @example
     * // Create one GdrSessionRegistration
     * const GdrSessionRegistration = await prisma.gdrSessionRegistration.create({
     *   data: {
     *     // ... data to create a GdrSessionRegistration
     *   }
     * })
     * 
     */
    create<T extends GdrSessionRegistrationCreateArgs>(args: SelectSubset<T, GdrSessionRegistrationCreateArgs<ExtArgs>>): Prisma__GdrSessionRegistrationClient<$Result.GetResult<Prisma.$GdrSessionRegistrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GdrSessionRegistrations.
     * @param {GdrSessionRegistrationCreateManyArgs} args - Arguments to create many GdrSessionRegistrations.
     * @example
     * // Create many GdrSessionRegistrations
     * const gdrSessionRegistration = await prisma.gdrSessionRegistration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GdrSessionRegistrationCreateManyArgs>(args?: SelectSubset<T, GdrSessionRegistrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GdrSessionRegistrations and returns the data saved in the database.
     * @param {GdrSessionRegistrationCreateManyAndReturnArgs} args - Arguments to create many GdrSessionRegistrations.
     * @example
     * // Create many GdrSessionRegistrations
     * const gdrSessionRegistration = await prisma.gdrSessionRegistration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GdrSessionRegistrations and only return the `id`
     * const gdrSessionRegistrationWithIdOnly = await prisma.gdrSessionRegistration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GdrSessionRegistrationCreateManyAndReturnArgs>(args?: SelectSubset<T, GdrSessionRegistrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GdrSessionRegistrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GdrSessionRegistration.
     * @param {GdrSessionRegistrationDeleteArgs} args - Arguments to delete one GdrSessionRegistration.
     * @example
     * // Delete one GdrSessionRegistration
     * const GdrSessionRegistration = await prisma.gdrSessionRegistration.delete({
     *   where: {
     *     // ... filter to delete one GdrSessionRegistration
     *   }
     * })
     * 
     */
    delete<T extends GdrSessionRegistrationDeleteArgs>(args: SelectSubset<T, GdrSessionRegistrationDeleteArgs<ExtArgs>>): Prisma__GdrSessionRegistrationClient<$Result.GetResult<Prisma.$GdrSessionRegistrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GdrSessionRegistration.
     * @param {GdrSessionRegistrationUpdateArgs} args - Arguments to update one GdrSessionRegistration.
     * @example
     * // Update one GdrSessionRegistration
     * const gdrSessionRegistration = await prisma.gdrSessionRegistration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GdrSessionRegistrationUpdateArgs>(args: SelectSubset<T, GdrSessionRegistrationUpdateArgs<ExtArgs>>): Prisma__GdrSessionRegistrationClient<$Result.GetResult<Prisma.$GdrSessionRegistrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GdrSessionRegistrations.
     * @param {GdrSessionRegistrationDeleteManyArgs} args - Arguments to filter GdrSessionRegistrations to delete.
     * @example
     * // Delete a few GdrSessionRegistrations
     * const { count } = await prisma.gdrSessionRegistration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GdrSessionRegistrationDeleteManyArgs>(args?: SelectSubset<T, GdrSessionRegistrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GdrSessionRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GdrSessionRegistrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GdrSessionRegistrations
     * const gdrSessionRegistration = await prisma.gdrSessionRegistration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GdrSessionRegistrationUpdateManyArgs>(args: SelectSubset<T, GdrSessionRegistrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GdrSessionRegistrations and returns the data updated in the database.
     * @param {GdrSessionRegistrationUpdateManyAndReturnArgs} args - Arguments to update many GdrSessionRegistrations.
     * @example
     * // Update many GdrSessionRegistrations
     * const gdrSessionRegistration = await prisma.gdrSessionRegistration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GdrSessionRegistrations and only return the `id`
     * const gdrSessionRegistrationWithIdOnly = await prisma.gdrSessionRegistration.updateManyAndReturn({
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
    updateManyAndReturn<T extends GdrSessionRegistrationUpdateManyAndReturnArgs>(args: SelectSubset<T, GdrSessionRegistrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GdrSessionRegistrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GdrSessionRegistration.
     * @param {GdrSessionRegistrationUpsertArgs} args - Arguments to update or create a GdrSessionRegistration.
     * @example
     * // Update or create a GdrSessionRegistration
     * const gdrSessionRegistration = await prisma.gdrSessionRegistration.upsert({
     *   create: {
     *     // ... data to create a GdrSessionRegistration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GdrSessionRegistration we want to update
     *   }
     * })
     */
    upsert<T extends GdrSessionRegistrationUpsertArgs>(args: SelectSubset<T, GdrSessionRegistrationUpsertArgs<ExtArgs>>): Prisma__GdrSessionRegistrationClient<$Result.GetResult<Prisma.$GdrSessionRegistrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GdrSessionRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GdrSessionRegistrationCountArgs} args - Arguments to filter GdrSessionRegistrations to count.
     * @example
     * // Count the number of GdrSessionRegistrations
     * const count = await prisma.gdrSessionRegistration.count({
     *   where: {
     *     // ... the filter for the GdrSessionRegistrations we want to count
     *   }
     * })
    **/
    count<T extends GdrSessionRegistrationCountArgs>(
      args?: Subset<T, GdrSessionRegistrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GdrSessionRegistrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GdrSessionRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GdrSessionRegistrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GdrSessionRegistrationAggregateArgs>(args: Subset<T, GdrSessionRegistrationAggregateArgs>): Prisma.PrismaPromise<GetGdrSessionRegistrationAggregateType<T>>

    /**
     * Group by GdrSessionRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GdrSessionRegistrationGroupByArgs} args - Group by arguments.
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
      T extends GdrSessionRegistrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GdrSessionRegistrationGroupByArgs['orderBy'] }
        : { orderBy?: GdrSessionRegistrationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GdrSessionRegistrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGdrSessionRegistrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GdrSessionRegistration model
   */
  readonly fields: GdrSessionRegistrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GdrSessionRegistration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GdrSessionRegistrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AppUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppUserDefaultArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    session<T extends GdrSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GdrSessionDefaultArgs<ExtArgs>>): Prisma__GdrSessionClient<$Result.GetResult<Prisma.$GdrSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GdrSessionRegistration model
   */
  interface GdrSessionRegistrationFieldRefs {
    readonly id: FieldRef<"GdrSessionRegistration", 'String'>
    readonly userId: FieldRef<"GdrSessionRegistration", 'String'>
    readonly sessionId: FieldRef<"GdrSessionRegistration", 'String'>
    readonly createdAt: FieldRef<"GdrSessionRegistration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GdrSessionRegistration findUnique
   */
  export type GdrSessionRegistrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GdrSessionRegistration
     */
    select?: GdrSessionRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GdrSessionRegistration
     */
    omit?: GdrSessionRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GdrSessionRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which GdrSessionRegistration to fetch.
     */
    where: GdrSessionRegistrationWhereUniqueInput
  }

  /**
   * GdrSessionRegistration findUniqueOrThrow
   */
  export type GdrSessionRegistrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GdrSessionRegistration
     */
    select?: GdrSessionRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GdrSessionRegistration
     */
    omit?: GdrSessionRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GdrSessionRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which GdrSessionRegistration to fetch.
     */
    where: GdrSessionRegistrationWhereUniqueInput
  }

  /**
   * GdrSessionRegistration findFirst
   */
  export type GdrSessionRegistrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GdrSessionRegistration
     */
    select?: GdrSessionRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GdrSessionRegistration
     */
    omit?: GdrSessionRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GdrSessionRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which GdrSessionRegistration to fetch.
     */
    where?: GdrSessionRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GdrSessionRegistrations to fetch.
     */
    orderBy?: GdrSessionRegistrationOrderByWithRelationInput | GdrSessionRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GdrSessionRegistrations.
     */
    cursor?: GdrSessionRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GdrSessionRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GdrSessionRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GdrSessionRegistrations.
     */
    distinct?: GdrSessionRegistrationScalarFieldEnum | GdrSessionRegistrationScalarFieldEnum[]
  }

  /**
   * GdrSessionRegistration findFirstOrThrow
   */
  export type GdrSessionRegistrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GdrSessionRegistration
     */
    select?: GdrSessionRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GdrSessionRegistration
     */
    omit?: GdrSessionRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GdrSessionRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which GdrSessionRegistration to fetch.
     */
    where?: GdrSessionRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GdrSessionRegistrations to fetch.
     */
    orderBy?: GdrSessionRegistrationOrderByWithRelationInput | GdrSessionRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GdrSessionRegistrations.
     */
    cursor?: GdrSessionRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GdrSessionRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GdrSessionRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GdrSessionRegistrations.
     */
    distinct?: GdrSessionRegistrationScalarFieldEnum | GdrSessionRegistrationScalarFieldEnum[]
  }

  /**
   * GdrSessionRegistration findMany
   */
  export type GdrSessionRegistrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GdrSessionRegistration
     */
    select?: GdrSessionRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GdrSessionRegistration
     */
    omit?: GdrSessionRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GdrSessionRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which GdrSessionRegistrations to fetch.
     */
    where?: GdrSessionRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GdrSessionRegistrations to fetch.
     */
    orderBy?: GdrSessionRegistrationOrderByWithRelationInput | GdrSessionRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GdrSessionRegistrations.
     */
    cursor?: GdrSessionRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GdrSessionRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GdrSessionRegistrations.
     */
    skip?: number
    distinct?: GdrSessionRegistrationScalarFieldEnum | GdrSessionRegistrationScalarFieldEnum[]
  }

  /**
   * GdrSessionRegistration create
   */
  export type GdrSessionRegistrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GdrSessionRegistration
     */
    select?: GdrSessionRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GdrSessionRegistration
     */
    omit?: GdrSessionRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GdrSessionRegistrationInclude<ExtArgs> | null
    /**
     * The data needed to create a GdrSessionRegistration.
     */
    data: XOR<GdrSessionRegistrationCreateInput, GdrSessionRegistrationUncheckedCreateInput>
  }

  /**
   * GdrSessionRegistration createMany
   */
  export type GdrSessionRegistrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GdrSessionRegistrations.
     */
    data: GdrSessionRegistrationCreateManyInput | GdrSessionRegistrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GdrSessionRegistration createManyAndReturn
   */
  export type GdrSessionRegistrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GdrSessionRegistration
     */
    select?: GdrSessionRegistrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GdrSessionRegistration
     */
    omit?: GdrSessionRegistrationOmit<ExtArgs> | null
    /**
     * The data used to create many GdrSessionRegistrations.
     */
    data: GdrSessionRegistrationCreateManyInput | GdrSessionRegistrationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GdrSessionRegistrationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GdrSessionRegistration update
   */
  export type GdrSessionRegistrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GdrSessionRegistration
     */
    select?: GdrSessionRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GdrSessionRegistration
     */
    omit?: GdrSessionRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GdrSessionRegistrationInclude<ExtArgs> | null
    /**
     * The data needed to update a GdrSessionRegistration.
     */
    data: XOR<GdrSessionRegistrationUpdateInput, GdrSessionRegistrationUncheckedUpdateInput>
    /**
     * Choose, which GdrSessionRegistration to update.
     */
    where: GdrSessionRegistrationWhereUniqueInput
  }

  /**
   * GdrSessionRegistration updateMany
   */
  export type GdrSessionRegistrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GdrSessionRegistrations.
     */
    data: XOR<GdrSessionRegistrationUpdateManyMutationInput, GdrSessionRegistrationUncheckedUpdateManyInput>
    /**
     * Filter which GdrSessionRegistrations to update
     */
    where?: GdrSessionRegistrationWhereInput
    /**
     * Limit how many GdrSessionRegistrations to update.
     */
    limit?: number
  }

  /**
   * GdrSessionRegistration updateManyAndReturn
   */
  export type GdrSessionRegistrationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GdrSessionRegistration
     */
    select?: GdrSessionRegistrationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GdrSessionRegistration
     */
    omit?: GdrSessionRegistrationOmit<ExtArgs> | null
    /**
     * The data used to update GdrSessionRegistrations.
     */
    data: XOR<GdrSessionRegistrationUpdateManyMutationInput, GdrSessionRegistrationUncheckedUpdateManyInput>
    /**
     * Filter which GdrSessionRegistrations to update
     */
    where?: GdrSessionRegistrationWhereInput
    /**
     * Limit how many GdrSessionRegistrations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GdrSessionRegistrationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GdrSessionRegistration upsert
   */
  export type GdrSessionRegistrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GdrSessionRegistration
     */
    select?: GdrSessionRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GdrSessionRegistration
     */
    omit?: GdrSessionRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GdrSessionRegistrationInclude<ExtArgs> | null
    /**
     * The filter to search for the GdrSessionRegistration to update in case it exists.
     */
    where: GdrSessionRegistrationWhereUniqueInput
    /**
     * In case the GdrSessionRegistration found by the `where` argument doesn't exist, create a new GdrSessionRegistration with this data.
     */
    create: XOR<GdrSessionRegistrationCreateInput, GdrSessionRegistrationUncheckedCreateInput>
    /**
     * In case the GdrSessionRegistration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GdrSessionRegistrationUpdateInput, GdrSessionRegistrationUncheckedUpdateInput>
  }

  /**
   * GdrSessionRegistration delete
   */
  export type GdrSessionRegistrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GdrSessionRegistration
     */
    select?: GdrSessionRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GdrSessionRegistration
     */
    omit?: GdrSessionRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GdrSessionRegistrationInclude<ExtArgs> | null
    /**
     * Filter which GdrSessionRegistration to delete.
     */
    where: GdrSessionRegistrationWhereUniqueInput
  }

  /**
   * GdrSessionRegistration deleteMany
   */
  export type GdrSessionRegistrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GdrSessionRegistrations to delete
     */
    where?: GdrSessionRegistrationWhereInput
    /**
     * Limit how many GdrSessionRegistrations to delete.
     */
    limit?: number
  }

  /**
   * GdrSessionRegistration without action
   */
  export type GdrSessionRegistrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GdrSessionRegistration
     */
    select?: GdrSessionRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GdrSessionRegistration
     */
    omit?: GdrSessionRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GdrSessionRegistrationInclude<ExtArgs> | null
  }


  /**
   * Model MainEvent
   */

  export type AggregateMainEvent = {
    _count: MainEventCountAggregateOutputType | null
    _avg: MainEventAvgAggregateOutputType | null
    _sum: MainEventSumAggregateOutputType | null
    _min: MainEventMinAggregateOutputType | null
    _max: MainEventMaxAggregateOutputType | null
  }

  export type MainEventAvgAggregateOutputType = {
    price: number | null
    maxSeats: number | null
  }

  export type MainEventSumAggregateOutputType = {
    price: number | null
    maxSeats: number | null
  }

  export type MainEventMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    urlImg: string | null
    start: Date | null
    end: Date | null
    location: string | null
    price: number | null
    maxSeats: number | null
    created_at: Date | null
    updated_at: Date | null
    note: string | null
  }

  export type MainEventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    urlImg: string | null
    start: Date | null
    end: Date | null
    location: string | null
    price: number | null
    maxSeats: number | null
    created_at: Date | null
    updated_at: Date | null
    note: string | null
  }

  export type MainEventCountAggregateOutputType = {
    id: number
    title: number
    description: number
    urlImg: number
    start: number
    end: number
    location: number
    price: number
    maxSeats: number
    created_at: number
    updated_at: number
    note: number
    _all: number
  }


  export type MainEventAvgAggregateInputType = {
    price?: true
    maxSeats?: true
  }

  export type MainEventSumAggregateInputType = {
    price?: true
    maxSeats?: true
  }

  export type MainEventMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    urlImg?: true
    start?: true
    end?: true
    location?: true
    price?: true
    maxSeats?: true
    created_at?: true
    updated_at?: true
    note?: true
  }

  export type MainEventMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    urlImg?: true
    start?: true
    end?: true
    location?: true
    price?: true
    maxSeats?: true
    created_at?: true
    updated_at?: true
    note?: true
  }

  export type MainEventCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    urlImg?: true
    start?: true
    end?: true
    location?: true
    price?: true
    maxSeats?: true
    created_at?: true
    updated_at?: true
    note?: true
    _all?: true
  }

  export type MainEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MainEvent to aggregate.
     */
    where?: MainEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainEvents to fetch.
     */
    orderBy?: MainEventOrderByWithRelationInput | MainEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MainEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MainEvents
    **/
    _count?: true | MainEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MainEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MainEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MainEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MainEventMaxAggregateInputType
  }

  export type GetMainEventAggregateType<T extends MainEventAggregateArgs> = {
        [P in keyof T & keyof AggregateMainEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMainEvent[P]>
      : GetScalarType<T[P], AggregateMainEvent[P]>
  }




  export type MainEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MainEventWhereInput
    orderBy?: MainEventOrderByWithAggregationInput | MainEventOrderByWithAggregationInput[]
    by: MainEventScalarFieldEnum[] | MainEventScalarFieldEnum
    having?: MainEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MainEventCountAggregateInputType | true
    _avg?: MainEventAvgAggregateInputType
    _sum?: MainEventSumAggregateInputType
    _min?: MainEventMinAggregateInputType
    _max?: MainEventMaxAggregateInputType
  }

  export type MainEventGroupByOutputType = {
    id: string
    title: string
    description: string
    urlImg: string | null
    start: Date
    end: Date
    location: string
    price: number
    maxSeats: number
    created_at: Date | null
    updated_at: Date | null
    note: string
    _count: MainEventCountAggregateOutputType | null
    _avg: MainEventAvgAggregateOutputType | null
    _sum: MainEventSumAggregateOutputType | null
    _min: MainEventMinAggregateOutputType | null
    _max: MainEventMaxAggregateOutputType | null
  }

  type GetMainEventGroupByPayload<T extends MainEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MainEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MainEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MainEventGroupByOutputType[P]>
            : GetScalarType<T[P], MainEventGroupByOutputType[P]>
        }
      >
    >


  export type MainEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    urlImg?: boolean
    start?: boolean
    end?: boolean
    location?: boolean
    price?: boolean
    maxSeats?: boolean
    created_at?: boolean
    updated_at?: boolean
    note?: boolean
    mainEventRegistrations?: boolean | MainEvent$mainEventRegistrationsArgs<ExtArgs>
    _count?: boolean | MainEventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mainEvent"]>

  export type MainEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    urlImg?: boolean
    start?: boolean
    end?: boolean
    location?: boolean
    price?: boolean
    maxSeats?: boolean
    created_at?: boolean
    updated_at?: boolean
    note?: boolean
  }, ExtArgs["result"]["mainEvent"]>

  export type MainEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    urlImg?: boolean
    start?: boolean
    end?: boolean
    location?: boolean
    price?: boolean
    maxSeats?: boolean
    created_at?: boolean
    updated_at?: boolean
    note?: boolean
  }, ExtArgs["result"]["mainEvent"]>

  export type MainEventSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    urlImg?: boolean
    start?: boolean
    end?: boolean
    location?: boolean
    price?: boolean
    maxSeats?: boolean
    created_at?: boolean
    updated_at?: boolean
    note?: boolean
  }

  export type MainEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "urlImg" | "start" | "end" | "location" | "price" | "maxSeats" | "created_at" | "updated_at" | "note", ExtArgs["result"]["mainEvent"]>
  export type MainEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mainEventRegistrations?: boolean | MainEvent$mainEventRegistrationsArgs<ExtArgs>
    _count?: boolean | MainEventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MainEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MainEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MainEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MainEvent"
    objects: {
      mainEventRegistrations: Prisma.$MainEventRegistrationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      urlImg: string | null
      start: Date
      end: Date
      location: string
      price: number
      maxSeats: number
      created_at: Date | null
      updated_at: Date | null
      note: string
    }, ExtArgs["result"]["mainEvent"]>
    composites: {}
  }

  type MainEventGetPayload<S extends boolean | null | undefined | MainEventDefaultArgs> = $Result.GetResult<Prisma.$MainEventPayload, S>

  type MainEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MainEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MainEventCountAggregateInputType | true
    }

  export interface MainEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MainEvent'], meta: { name: 'MainEvent' } }
    /**
     * Find zero or one MainEvent that matches the filter.
     * @param {MainEventFindUniqueArgs} args - Arguments to find a MainEvent
     * @example
     * // Get one MainEvent
     * const mainEvent = await prisma.mainEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MainEventFindUniqueArgs>(args: SelectSubset<T, MainEventFindUniqueArgs<ExtArgs>>): Prisma__MainEventClient<$Result.GetResult<Prisma.$MainEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MainEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MainEventFindUniqueOrThrowArgs} args - Arguments to find a MainEvent
     * @example
     * // Get one MainEvent
     * const mainEvent = await prisma.mainEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MainEventFindUniqueOrThrowArgs>(args: SelectSubset<T, MainEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MainEventClient<$Result.GetResult<Prisma.$MainEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MainEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainEventFindFirstArgs} args - Arguments to find a MainEvent
     * @example
     * // Get one MainEvent
     * const mainEvent = await prisma.mainEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MainEventFindFirstArgs>(args?: SelectSubset<T, MainEventFindFirstArgs<ExtArgs>>): Prisma__MainEventClient<$Result.GetResult<Prisma.$MainEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MainEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainEventFindFirstOrThrowArgs} args - Arguments to find a MainEvent
     * @example
     * // Get one MainEvent
     * const mainEvent = await prisma.mainEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MainEventFindFirstOrThrowArgs>(args?: SelectSubset<T, MainEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__MainEventClient<$Result.GetResult<Prisma.$MainEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MainEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MainEvents
     * const mainEvents = await prisma.mainEvent.findMany()
     * 
     * // Get first 10 MainEvents
     * const mainEvents = await prisma.mainEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mainEventWithIdOnly = await prisma.mainEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MainEventFindManyArgs>(args?: SelectSubset<T, MainEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MainEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MainEvent.
     * @param {MainEventCreateArgs} args - Arguments to create a MainEvent.
     * @example
     * // Create one MainEvent
     * const MainEvent = await prisma.mainEvent.create({
     *   data: {
     *     // ... data to create a MainEvent
     *   }
     * })
     * 
     */
    create<T extends MainEventCreateArgs>(args: SelectSubset<T, MainEventCreateArgs<ExtArgs>>): Prisma__MainEventClient<$Result.GetResult<Prisma.$MainEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MainEvents.
     * @param {MainEventCreateManyArgs} args - Arguments to create many MainEvents.
     * @example
     * // Create many MainEvents
     * const mainEvent = await prisma.mainEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MainEventCreateManyArgs>(args?: SelectSubset<T, MainEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MainEvents and returns the data saved in the database.
     * @param {MainEventCreateManyAndReturnArgs} args - Arguments to create many MainEvents.
     * @example
     * // Create many MainEvents
     * const mainEvent = await prisma.mainEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MainEvents and only return the `id`
     * const mainEventWithIdOnly = await prisma.mainEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MainEventCreateManyAndReturnArgs>(args?: SelectSubset<T, MainEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MainEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MainEvent.
     * @param {MainEventDeleteArgs} args - Arguments to delete one MainEvent.
     * @example
     * // Delete one MainEvent
     * const MainEvent = await prisma.mainEvent.delete({
     *   where: {
     *     // ... filter to delete one MainEvent
     *   }
     * })
     * 
     */
    delete<T extends MainEventDeleteArgs>(args: SelectSubset<T, MainEventDeleteArgs<ExtArgs>>): Prisma__MainEventClient<$Result.GetResult<Prisma.$MainEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MainEvent.
     * @param {MainEventUpdateArgs} args - Arguments to update one MainEvent.
     * @example
     * // Update one MainEvent
     * const mainEvent = await prisma.mainEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MainEventUpdateArgs>(args: SelectSubset<T, MainEventUpdateArgs<ExtArgs>>): Prisma__MainEventClient<$Result.GetResult<Prisma.$MainEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MainEvents.
     * @param {MainEventDeleteManyArgs} args - Arguments to filter MainEvents to delete.
     * @example
     * // Delete a few MainEvents
     * const { count } = await prisma.mainEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MainEventDeleteManyArgs>(args?: SelectSubset<T, MainEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MainEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MainEvents
     * const mainEvent = await prisma.mainEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MainEventUpdateManyArgs>(args: SelectSubset<T, MainEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MainEvents and returns the data updated in the database.
     * @param {MainEventUpdateManyAndReturnArgs} args - Arguments to update many MainEvents.
     * @example
     * // Update many MainEvents
     * const mainEvent = await prisma.mainEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MainEvents and only return the `id`
     * const mainEventWithIdOnly = await prisma.mainEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends MainEventUpdateManyAndReturnArgs>(args: SelectSubset<T, MainEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MainEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MainEvent.
     * @param {MainEventUpsertArgs} args - Arguments to update or create a MainEvent.
     * @example
     * // Update or create a MainEvent
     * const mainEvent = await prisma.mainEvent.upsert({
     *   create: {
     *     // ... data to create a MainEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MainEvent we want to update
     *   }
     * })
     */
    upsert<T extends MainEventUpsertArgs>(args: SelectSubset<T, MainEventUpsertArgs<ExtArgs>>): Prisma__MainEventClient<$Result.GetResult<Prisma.$MainEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MainEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainEventCountArgs} args - Arguments to filter MainEvents to count.
     * @example
     * // Count the number of MainEvents
     * const count = await prisma.mainEvent.count({
     *   where: {
     *     // ... the filter for the MainEvents we want to count
     *   }
     * })
    **/
    count<T extends MainEventCountArgs>(
      args?: Subset<T, MainEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MainEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MainEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MainEventAggregateArgs>(args: Subset<T, MainEventAggregateArgs>): Prisma.PrismaPromise<GetMainEventAggregateType<T>>

    /**
     * Group by MainEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainEventGroupByArgs} args - Group by arguments.
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
      T extends MainEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MainEventGroupByArgs['orderBy'] }
        : { orderBy?: MainEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MainEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMainEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MainEvent model
   */
  readonly fields: MainEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MainEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MainEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mainEventRegistrations<T extends MainEvent$mainEventRegistrationsArgs<ExtArgs> = {}>(args?: Subset<T, MainEvent$mainEventRegistrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MainEventRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MainEvent model
   */
  interface MainEventFieldRefs {
    readonly id: FieldRef<"MainEvent", 'String'>
    readonly title: FieldRef<"MainEvent", 'String'>
    readonly description: FieldRef<"MainEvent", 'String'>
    readonly urlImg: FieldRef<"MainEvent", 'String'>
    readonly start: FieldRef<"MainEvent", 'DateTime'>
    readonly end: FieldRef<"MainEvent", 'DateTime'>
    readonly location: FieldRef<"MainEvent", 'String'>
    readonly price: FieldRef<"MainEvent", 'Float'>
    readonly maxSeats: FieldRef<"MainEvent", 'Int'>
    readonly created_at: FieldRef<"MainEvent", 'DateTime'>
    readonly updated_at: FieldRef<"MainEvent", 'DateTime'>
    readonly note: FieldRef<"MainEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MainEvent findUnique
   */
  export type MainEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainEvent
     */
    select?: MainEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainEvent
     */
    omit?: MainEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainEventInclude<ExtArgs> | null
    /**
     * Filter, which MainEvent to fetch.
     */
    where: MainEventWhereUniqueInput
  }

  /**
   * MainEvent findUniqueOrThrow
   */
  export type MainEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainEvent
     */
    select?: MainEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainEvent
     */
    omit?: MainEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainEventInclude<ExtArgs> | null
    /**
     * Filter, which MainEvent to fetch.
     */
    where: MainEventWhereUniqueInput
  }

  /**
   * MainEvent findFirst
   */
  export type MainEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainEvent
     */
    select?: MainEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainEvent
     */
    omit?: MainEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainEventInclude<ExtArgs> | null
    /**
     * Filter, which MainEvent to fetch.
     */
    where?: MainEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainEvents to fetch.
     */
    orderBy?: MainEventOrderByWithRelationInput | MainEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MainEvents.
     */
    cursor?: MainEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MainEvents.
     */
    distinct?: MainEventScalarFieldEnum | MainEventScalarFieldEnum[]
  }

  /**
   * MainEvent findFirstOrThrow
   */
  export type MainEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainEvent
     */
    select?: MainEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainEvent
     */
    omit?: MainEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainEventInclude<ExtArgs> | null
    /**
     * Filter, which MainEvent to fetch.
     */
    where?: MainEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainEvents to fetch.
     */
    orderBy?: MainEventOrderByWithRelationInput | MainEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MainEvents.
     */
    cursor?: MainEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MainEvents.
     */
    distinct?: MainEventScalarFieldEnum | MainEventScalarFieldEnum[]
  }

  /**
   * MainEvent findMany
   */
  export type MainEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainEvent
     */
    select?: MainEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainEvent
     */
    omit?: MainEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainEventInclude<ExtArgs> | null
    /**
     * Filter, which MainEvents to fetch.
     */
    where?: MainEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainEvents to fetch.
     */
    orderBy?: MainEventOrderByWithRelationInput | MainEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MainEvents.
     */
    cursor?: MainEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainEvents.
     */
    skip?: number
    distinct?: MainEventScalarFieldEnum | MainEventScalarFieldEnum[]
  }

  /**
   * MainEvent create
   */
  export type MainEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainEvent
     */
    select?: MainEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainEvent
     */
    omit?: MainEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainEventInclude<ExtArgs> | null
    /**
     * The data needed to create a MainEvent.
     */
    data: XOR<MainEventCreateInput, MainEventUncheckedCreateInput>
  }

  /**
   * MainEvent createMany
   */
  export type MainEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MainEvents.
     */
    data: MainEventCreateManyInput | MainEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MainEvent createManyAndReturn
   */
  export type MainEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainEvent
     */
    select?: MainEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MainEvent
     */
    omit?: MainEventOmit<ExtArgs> | null
    /**
     * The data used to create many MainEvents.
     */
    data: MainEventCreateManyInput | MainEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MainEvent update
   */
  export type MainEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainEvent
     */
    select?: MainEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainEvent
     */
    omit?: MainEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainEventInclude<ExtArgs> | null
    /**
     * The data needed to update a MainEvent.
     */
    data: XOR<MainEventUpdateInput, MainEventUncheckedUpdateInput>
    /**
     * Choose, which MainEvent to update.
     */
    where: MainEventWhereUniqueInput
  }

  /**
   * MainEvent updateMany
   */
  export type MainEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MainEvents.
     */
    data: XOR<MainEventUpdateManyMutationInput, MainEventUncheckedUpdateManyInput>
    /**
     * Filter which MainEvents to update
     */
    where?: MainEventWhereInput
    /**
     * Limit how many MainEvents to update.
     */
    limit?: number
  }

  /**
   * MainEvent updateManyAndReturn
   */
  export type MainEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainEvent
     */
    select?: MainEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MainEvent
     */
    omit?: MainEventOmit<ExtArgs> | null
    /**
     * The data used to update MainEvents.
     */
    data: XOR<MainEventUpdateManyMutationInput, MainEventUncheckedUpdateManyInput>
    /**
     * Filter which MainEvents to update
     */
    where?: MainEventWhereInput
    /**
     * Limit how many MainEvents to update.
     */
    limit?: number
  }

  /**
   * MainEvent upsert
   */
  export type MainEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainEvent
     */
    select?: MainEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainEvent
     */
    omit?: MainEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainEventInclude<ExtArgs> | null
    /**
     * The filter to search for the MainEvent to update in case it exists.
     */
    where: MainEventWhereUniqueInput
    /**
     * In case the MainEvent found by the `where` argument doesn't exist, create a new MainEvent with this data.
     */
    create: XOR<MainEventCreateInput, MainEventUncheckedCreateInput>
    /**
     * In case the MainEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MainEventUpdateInput, MainEventUncheckedUpdateInput>
  }

  /**
   * MainEvent delete
   */
  export type MainEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainEvent
     */
    select?: MainEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainEvent
     */
    omit?: MainEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainEventInclude<ExtArgs> | null
    /**
     * Filter which MainEvent to delete.
     */
    where: MainEventWhereUniqueInput
  }

  /**
   * MainEvent deleteMany
   */
  export type MainEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MainEvents to delete
     */
    where?: MainEventWhereInput
    /**
     * Limit how many MainEvents to delete.
     */
    limit?: number
  }

  /**
   * MainEvent.mainEventRegistrations
   */
  export type MainEvent$mainEventRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainEventRegistration
     */
    select?: MainEventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainEventRegistration
     */
    omit?: MainEventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainEventRegistrationInclude<ExtArgs> | null
    where?: MainEventRegistrationWhereInput
    orderBy?: MainEventRegistrationOrderByWithRelationInput | MainEventRegistrationOrderByWithRelationInput[]
    cursor?: MainEventRegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MainEventRegistrationScalarFieldEnum | MainEventRegistrationScalarFieldEnum[]
  }

  /**
   * MainEvent without action
   */
  export type MainEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainEvent
     */
    select?: MainEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainEvent
     */
    omit?: MainEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainEventInclude<ExtArgs> | null
  }


  /**
   * Model MainEventRegistration
   */

  export type AggregateMainEventRegistration = {
    _count: MainEventRegistrationCountAggregateOutputType | null
    _min: MainEventRegistrationMinAggregateOutputType | null
    _max: MainEventRegistrationMaxAggregateOutputType | null
  }

  export type MainEventRegistrationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    eventId: string | null
    createdAt: Date | null
  }

  export type MainEventRegistrationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    eventId: string | null
    createdAt: Date | null
  }

  export type MainEventRegistrationCountAggregateOutputType = {
    id: number
    userId: number
    eventId: number
    createdAt: number
    _all: number
  }


  export type MainEventRegistrationMinAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    createdAt?: true
  }

  export type MainEventRegistrationMaxAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    createdAt?: true
  }

  export type MainEventRegistrationCountAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    createdAt?: true
    _all?: true
  }

  export type MainEventRegistrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MainEventRegistration to aggregate.
     */
    where?: MainEventRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainEventRegistrations to fetch.
     */
    orderBy?: MainEventRegistrationOrderByWithRelationInput | MainEventRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MainEventRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainEventRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainEventRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MainEventRegistrations
    **/
    _count?: true | MainEventRegistrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MainEventRegistrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MainEventRegistrationMaxAggregateInputType
  }

  export type GetMainEventRegistrationAggregateType<T extends MainEventRegistrationAggregateArgs> = {
        [P in keyof T & keyof AggregateMainEventRegistration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMainEventRegistration[P]>
      : GetScalarType<T[P], AggregateMainEventRegistration[P]>
  }




  export type MainEventRegistrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MainEventRegistrationWhereInput
    orderBy?: MainEventRegistrationOrderByWithAggregationInput | MainEventRegistrationOrderByWithAggregationInput[]
    by: MainEventRegistrationScalarFieldEnum[] | MainEventRegistrationScalarFieldEnum
    having?: MainEventRegistrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MainEventRegistrationCountAggregateInputType | true
    _min?: MainEventRegistrationMinAggregateInputType
    _max?: MainEventRegistrationMaxAggregateInputType
  }

  export type MainEventRegistrationGroupByOutputType = {
    id: string
    userId: string
    eventId: string
    createdAt: Date
    _count: MainEventRegistrationCountAggregateOutputType | null
    _min: MainEventRegistrationMinAggregateOutputType | null
    _max: MainEventRegistrationMaxAggregateOutputType | null
  }

  type GetMainEventRegistrationGroupByPayload<T extends MainEventRegistrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MainEventRegistrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MainEventRegistrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MainEventRegistrationGroupByOutputType[P]>
            : GetScalarType<T[P], MainEventRegistrationGroupByOutputType[P]>
        }
      >
    >


  export type MainEventRegistrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    createdAt?: boolean
    user?: boolean | AppUserDefaultArgs<ExtArgs>
    event?: boolean | MainEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mainEventRegistration"]>

  export type MainEventRegistrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    createdAt?: boolean
    user?: boolean | AppUserDefaultArgs<ExtArgs>
    event?: boolean | MainEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mainEventRegistration"]>

  export type MainEventRegistrationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    createdAt?: boolean
    user?: boolean | AppUserDefaultArgs<ExtArgs>
    event?: boolean | MainEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mainEventRegistration"]>

  export type MainEventRegistrationSelectScalar = {
    id?: boolean
    userId?: boolean
    eventId?: boolean
    createdAt?: boolean
  }

  export type MainEventRegistrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "eventId" | "createdAt", ExtArgs["result"]["mainEventRegistration"]>
  export type MainEventRegistrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AppUserDefaultArgs<ExtArgs>
    event?: boolean | MainEventDefaultArgs<ExtArgs>
  }
  export type MainEventRegistrationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AppUserDefaultArgs<ExtArgs>
    event?: boolean | MainEventDefaultArgs<ExtArgs>
  }
  export type MainEventRegistrationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AppUserDefaultArgs<ExtArgs>
    event?: boolean | MainEventDefaultArgs<ExtArgs>
  }

  export type $MainEventRegistrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MainEventRegistration"
    objects: {
      user: Prisma.$AppUserPayload<ExtArgs>
      event: Prisma.$MainEventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      eventId: string
      createdAt: Date
    }, ExtArgs["result"]["mainEventRegistration"]>
    composites: {}
  }

  type MainEventRegistrationGetPayload<S extends boolean | null | undefined | MainEventRegistrationDefaultArgs> = $Result.GetResult<Prisma.$MainEventRegistrationPayload, S>

  type MainEventRegistrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MainEventRegistrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MainEventRegistrationCountAggregateInputType | true
    }

  export interface MainEventRegistrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MainEventRegistration'], meta: { name: 'MainEventRegistration' } }
    /**
     * Find zero or one MainEventRegistration that matches the filter.
     * @param {MainEventRegistrationFindUniqueArgs} args - Arguments to find a MainEventRegistration
     * @example
     * // Get one MainEventRegistration
     * const mainEventRegistration = await prisma.mainEventRegistration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MainEventRegistrationFindUniqueArgs>(args: SelectSubset<T, MainEventRegistrationFindUniqueArgs<ExtArgs>>): Prisma__MainEventRegistrationClient<$Result.GetResult<Prisma.$MainEventRegistrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MainEventRegistration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MainEventRegistrationFindUniqueOrThrowArgs} args - Arguments to find a MainEventRegistration
     * @example
     * // Get one MainEventRegistration
     * const mainEventRegistration = await prisma.mainEventRegistration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MainEventRegistrationFindUniqueOrThrowArgs>(args: SelectSubset<T, MainEventRegistrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MainEventRegistrationClient<$Result.GetResult<Prisma.$MainEventRegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MainEventRegistration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainEventRegistrationFindFirstArgs} args - Arguments to find a MainEventRegistration
     * @example
     * // Get one MainEventRegistration
     * const mainEventRegistration = await prisma.mainEventRegistration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MainEventRegistrationFindFirstArgs>(args?: SelectSubset<T, MainEventRegistrationFindFirstArgs<ExtArgs>>): Prisma__MainEventRegistrationClient<$Result.GetResult<Prisma.$MainEventRegistrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MainEventRegistration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainEventRegistrationFindFirstOrThrowArgs} args - Arguments to find a MainEventRegistration
     * @example
     * // Get one MainEventRegistration
     * const mainEventRegistration = await prisma.mainEventRegistration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MainEventRegistrationFindFirstOrThrowArgs>(args?: SelectSubset<T, MainEventRegistrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MainEventRegistrationClient<$Result.GetResult<Prisma.$MainEventRegistrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MainEventRegistrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainEventRegistrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MainEventRegistrations
     * const mainEventRegistrations = await prisma.mainEventRegistration.findMany()
     * 
     * // Get first 10 MainEventRegistrations
     * const mainEventRegistrations = await prisma.mainEventRegistration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mainEventRegistrationWithIdOnly = await prisma.mainEventRegistration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MainEventRegistrationFindManyArgs>(args?: SelectSubset<T, MainEventRegistrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MainEventRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MainEventRegistration.
     * @param {MainEventRegistrationCreateArgs} args - Arguments to create a MainEventRegistration.
     * @example
     * // Create one MainEventRegistration
     * const MainEventRegistration = await prisma.mainEventRegistration.create({
     *   data: {
     *     // ... data to create a MainEventRegistration
     *   }
     * })
     * 
     */
    create<T extends MainEventRegistrationCreateArgs>(args: SelectSubset<T, MainEventRegistrationCreateArgs<ExtArgs>>): Prisma__MainEventRegistrationClient<$Result.GetResult<Prisma.$MainEventRegistrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MainEventRegistrations.
     * @param {MainEventRegistrationCreateManyArgs} args - Arguments to create many MainEventRegistrations.
     * @example
     * // Create many MainEventRegistrations
     * const mainEventRegistration = await prisma.mainEventRegistration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MainEventRegistrationCreateManyArgs>(args?: SelectSubset<T, MainEventRegistrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MainEventRegistrations and returns the data saved in the database.
     * @param {MainEventRegistrationCreateManyAndReturnArgs} args - Arguments to create many MainEventRegistrations.
     * @example
     * // Create many MainEventRegistrations
     * const mainEventRegistration = await prisma.mainEventRegistration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MainEventRegistrations and only return the `id`
     * const mainEventRegistrationWithIdOnly = await prisma.mainEventRegistration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MainEventRegistrationCreateManyAndReturnArgs>(args?: SelectSubset<T, MainEventRegistrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MainEventRegistrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MainEventRegistration.
     * @param {MainEventRegistrationDeleteArgs} args - Arguments to delete one MainEventRegistration.
     * @example
     * // Delete one MainEventRegistration
     * const MainEventRegistration = await prisma.mainEventRegistration.delete({
     *   where: {
     *     // ... filter to delete one MainEventRegistration
     *   }
     * })
     * 
     */
    delete<T extends MainEventRegistrationDeleteArgs>(args: SelectSubset<T, MainEventRegistrationDeleteArgs<ExtArgs>>): Prisma__MainEventRegistrationClient<$Result.GetResult<Prisma.$MainEventRegistrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MainEventRegistration.
     * @param {MainEventRegistrationUpdateArgs} args - Arguments to update one MainEventRegistration.
     * @example
     * // Update one MainEventRegistration
     * const mainEventRegistration = await prisma.mainEventRegistration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MainEventRegistrationUpdateArgs>(args: SelectSubset<T, MainEventRegistrationUpdateArgs<ExtArgs>>): Prisma__MainEventRegistrationClient<$Result.GetResult<Prisma.$MainEventRegistrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MainEventRegistrations.
     * @param {MainEventRegistrationDeleteManyArgs} args - Arguments to filter MainEventRegistrations to delete.
     * @example
     * // Delete a few MainEventRegistrations
     * const { count } = await prisma.mainEventRegistration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MainEventRegistrationDeleteManyArgs>(args?: SelectSubset<T, MainEventRegistrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MainEventRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainEventRegistrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MainEventRegistrations
     * const mainEventRegistration = await prisma.mainEventRegistration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MainEventRegistrationUpdateManyArgs>(args: SelectSubset<T, MainEventRegistrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MainEventRegistrations and returns the data updated in the database.
     * @param {MainEventRegistrationUpdateManyAndReturnArgs} args - Arguments to update many MainEventRegistrations.
     * @example
     * // Update many MainEventRegistrations
     * const mainEventRegistration = await prisma.mainEventRegistration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MainEventRegistrations and only return the `id`
     * const mainEventRegistrationWithIdOnly = await prisma.mainEventRegistration.updateManyAndReturn({
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
    updateManyAndReturn<T extends MainEventRegistrationUpdateManyAndReturnArgs>(args: SelectSubset<T, MainEventRegistrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MainEventRegistrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MainEventRegistration.
     * @param {MainEventRegistrationUpsertArgs} args - Arguments to update or create a MainEventRegistration.
     * @example
     * // Update or create a MainEventRegistration
     * const mainEventRegistration = await prisma.mainEventRegistration.upsert({
     *   create: {
     *     // ... data to create a MainEventRegistration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MainEventRegistration we want to update
     *   }
     * })
     */
    upsert<T extends MainEventRegistrationUpsertArgs>(args: SelectSubset<T, MainEventRegistrationUpsertArgs<ExtArgs>>): Prisma__MainEventRegistrationClient<$Result.GetResult<Prisma.$MainEventRegistrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MainEventRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainEventRegistrationCountArgs} args - Arguments to filter MainEventRegistrations to count.
     * @example
     * // Count the number of MainEventRegistrations
     * const count = await prisma.mainEventRegistration.count({
     *   where: {
     *     // ... the filter for the MainEventRegistrations we want to count
     *   }
     * })
    **/
    count<T extends MainEventRegistrationCountArgs>(
      args?: Subset<T, MainEventRegistrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MainEventRegistrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MainEventRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainEventRegistrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MainEventRegistrationAggregateArgs>(args: Subset<T, MainEventRegistrationAggregateArgs>): Prisma.PrismaPromise<GetMainEventRegistrationAggregateType<T>>

    /**
     * Group by MainEventRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainEventRegistrationGroupByArgs} args - Group by arguments.
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
      T extends MainEventRegistrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MainEventRegistrationGroupByArgs['orderBy'] }
        : { orderBy?: MainEventRegistrationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MainEventRegistrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMainEventRegistrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MainEventRegistration model
   */
  readonly fields: MainEventRegistrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MainEventRegistration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MainEventRegistrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AppUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppUserDefaultArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    event<T extends MainEventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MainEventDefaultArgs<ExtArgs>>): Prisma__MainEventClient<$Result.GetResult<Prisma.$MainEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MainEventRegistration model
   */
  interface MainEventRegistrationFieldRefs {
    readonly id: FieldRef<"MainEventRegistration", 'String'>
    readonly userId: FieldRef<"MainEventRegistration", 'String'>
    readonly eventId: FieldRef<"MainEventRegistration", 'String'>
    readonly createdAt: FieldRef<"MainEventRegistration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MainEventRegistration findUnique
   */
  export type MainEventRegistrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainEventRegistration
     */
    select?: MainEventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainEventRegistration
     */
    omit?: MainEventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainEventRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which MainEventRegistration to fetch.
     */
    where: MainEventRegistrationWhereUniqueInput
  }

  /**
   * MainEventRegistration findUniqueOrThrow
   */
  export type MainEventRegistrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainEventRegistration
     */
    select?: MainEventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainEventRegistration
     */
    omit?: MainEventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainEventRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which MainEventRegistration to fetch.
     */
    where: MainEventRegistrationWhereUniqueInput
  }

  /**
   * MainEventRegistration findFirst
   */
  export type MainEventRegistrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainEventRegistration
     */
    select?: MainEventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainEventRegistration
     */
    omit?: MainEventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainEventRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which MainEventRegistration to fetch.
     */
    where?: MainEventRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainEventRegistrations to fetch.
     */
    orderBy?: MainEventRegistrationOrderByWithRelationInput | MainEventRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MainEventRegistrations.
     */
    cursor?: MainEventRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainEventRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainEventRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MainEventRegistrations.
     */
    distinct?: MainEventRegistrationScalarFieldEnum | MainEventRegistrationScalarFieldEnum[]
  }

  /**
   * MainEventRegistration findFirstOrThrow
   */
  export type MainEventRegistrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainEventRegistration
     */
    select?: MainEventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainEventRegistration
     */
    omit?: MainEventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainEventRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which MainEventRegistration to fetch.
     */
    where?: MainEventRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainEventRegistrations to fetch.
     */
    orderBy?: MainEventRegistrationOrderByWithRelationInput | MainEventRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MainEventRegistrations.
     */
    cursor?: MainEventRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainEventRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainEventRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MainEventRegistrations.
     */
    distinct?: MainEventRegistrationScalarFieldEnum | MainEventRegistrationScalarFieldEnum[]
  }

  /**
   * MainEventRegistration findMany
   */
  export type MainEventRegistrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainEventRegistration
     */
    select?: MainEventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainEventRegistration
     */
    omit?: MainEventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainEventRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which MainEventRegistrations to fetch.
     */
    where?: MainEventRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainEventRegistrations to fetch.
     */
    orderBy?: MainEventRegistrationOrderByWithRelationInput | MainEventRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MainEventRegistrations.
     */
    cursor?: MainEventRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainEventRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainEventRegistrations.
     */
    skip?: number
    distinct?: MainEventRegistrationScalarFieldEnum | MainEventRegistrationScalarFieldEnum[]
  }

  /**
   * MainEventRegistration create
   */
  export type MainEventRegistrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainEventRegistration
     */
    select?: MainEventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainEventRegistration
     */
    omit?: MainEventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainEventRegistrationInclude<ExtArgs> | null
    /**
     * The data needed to create a MainEventRegistration.
     */
    data: XOR<MainEventRegistrationCreateInput, MainEventRegistrationUncheckedCreateInput>
  }

  /**
   * MainEventRegistration createMany
   */
  export type MainEventRegistrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MainEventRegistrations.
     */
    data: MainEventRegistrationCreateManyInput | MainEventRegistrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MainEventRegistration createManyAndReturn
   */
  export type MainEventRegistrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainEventRegistration
     */
    select?: MainEventRegistrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MainEventRegistration
     */
    omit?: MainEventRegistrationOmit<ExtArgs> | null
    /**
     * The data used to create many MainEventRegistrations.
     */
    data: MainEventRegistrationCreateManyInput | MainEventRegistrationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainEventRegistrationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MainEventRegistration update
   */
  export type MainEventRegistrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainEventRegistration
     */
    select?: MainEventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainEventRegistration
     */
    omit?: MainEventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainEventRegistrationInclude<ExtArgs> | null
    /**
     * The data needed to update a MainEventRegistration.
     */
    data: XOR<MainEventRegistrationUpdateInput, MainEventRegistrationUncheckedUpdateInput>
    /**
     * Choose, which MainEventRegistration to update.
     */
    where: MainEventRegistrationWhereUniqueInput
  }

  /**
   * MainEventRegistration updateMany
   */
  export type MainEventRegistrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MainEventRegistrations.
     */
    data: XOR<MainEventRegistrationUpdateManyMutationInput, MainEventRegistrationUncheckedUpdateManyInput>
    /**
     * Filter which MainEventRegistrations to update
     */
    where?: MainEventRegistrationWhereInput
    /**
     * Limit how many MainEventRegistrations to update.
     */
    limit?: number
  }

  /**
   * MainEventRegistration updateManyAndReturn
   */
  export type MainEventRegistrationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainEventRegistration
     */
    select?: MainEventRegistrationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MainEventRegistration
     */
    omit?: MainEventRegistrationOmit<ExtArgs> | null
    /**
     * The data used to update MainEventRegistrations.
     */
    data: XOR<MainEventRegistrationUpdateManyMutationInput, MainEventRegistrationUncheckedUpdateManyInput>
    /**
     * Filter which MainEventRegistrations to update
     */
    where?: MainEventRegistrationWhereInput
    /**
     * Limit how many MainEventRegistrations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainEventRegistrationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MainEventRegistration upsert
   */
  export type MainEventRegistrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainEventRegistration
     */
    select?: MainEventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainEventRegistration
     */
    omit?: MainEventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainEventRegistrationInclude<ExtArgs> | null
    /**
     * The filter to search for the MainEventRegistration to update in case it exists.
     */
    where: MainEventRegistrationWhereUniqueInput
    /**
     * In case the MainEventRegistration found by the `where` argument doesn't exist, create a new MainEventRegistration with this data.
     */
    create: XOR<MainEventRegistrationCreateInput, MainEventRegistrationUncheckedCreateInput>
    /**
     * In case the MainEventRegistration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MainEventRegistrationUpdateInput, MainEventRegistrationUncheckedUpdateInput>
  }

  /**
   * MainEventRegistration delete
   */
  export type MainEventRegistrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainEventRegistration
     */
    select?: MainEventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainEventRegistration
     */
    omit?: MainEventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainEventRegistrationInclude<ExtArgs> | null
    /**
     * Filter which MainEventRegistration to delete.
     */
    where: MainEventRegistrationWhereUniqueInput
  }

  /**
   * MainEventRegistration deleteMany
   */
  export type MainEventRegistrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MainEventRegistrations to delete
     */
    where?: MainEventRegistrationWhereInput
    /**
     * Limit how many MainEventRegistrations to delete.
     */
    limit?: number
  }

  /**
   * MainEventRegistration without action
   */
  export type MainEventRegistrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainEventRegistration
     */
    select?: MainEventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainEventRegistration
     */
    omit?: MainEventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainEventRegistrationInclude<ExtArgs> | null
  }


  /**
   * Model LoggerIDML
   */

  export type AggregateLoggerIDML = {
    _count: LoggerIDMLCountAggregateOutputType | null
    _min: LoggerIDMLMinAggregateOutputType | null
    _max: LoggerIDMLMaxAggregateOutputType | null
  }

  export type LoggerIDMLMinAggregateOutputType = {
    id: string | null
    IDML: string | null
    description: string | null
    language: string | null
    created_at: Date | null
  }

  export type LoggerIDMLMaxAggregateOutputType = {
    id: string | null
    IDML: string | null
    description: string | null
    language: string | null
    created_at: Date | null
  }

  export type LoggerIDMLCountAggregateOutputType = {
    id: number
    IDML: number
    description: number
    language: number
    created_at: number
    _all: number
  }


  export type LoggerIDMLMinAggregateInputType = {
    id?: true
    IDML?: true
    description?: true
    language?: true
    created_at?: true
  }

  export type LoggerIDMLMaxAggregateInputType = {
    id?: true
    IDML?: true
    description?: true
    language?: true
    created_at?: true
  }

  export type LoggerIDMLCountAggregateInputType = {
    id?: true
    IDML?: true
    description?: true
    language?: true
    created_at?: true
    _all?: true
  }

  export type LoggerIDMLAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoggerIDML to aggregate.
     */
    where?: LoggerIDMLWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoggerIDMLS to fetch.
     */
    orderBy?: LoggerIDMLOrderByWithRelationInput | LoggerIDMLOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoggerIDMLWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoggerIDMLS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoggerIDMLS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoggerIDMLS
    **/
    _count?: true | LoggerIDMLCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoggerIDMLMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoggerIDMLMaxAggregateInputType
  }

  export type GetLoggerIDMLAggregateType<T extends LoggerIDMLAggregateArgs> = {
        [P in keyof T & keyof AggregateLoggerIDML]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoggerIDML[P]>
      : GetScalarType<T[P], AggregateLoggerIDML[P]>
  }




  export type LoggerIDMLGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoggerIDMLWhereInput
    orderBy?: LoggerIDMLOrderByWithAggregationInput | LoggerIDMLOrderByWithAggregationInput[]
    by: LoggerIDMLScalarFieldEnum[] | LoggerIDMLScalarFieldEnum
    having?: LoggerIDMLScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoggerIDMLCountAggregateInputType | true
    _min?: LoggerIDMLMinAggregateInputType
    _max?: LoggerIDMLMaxAggregateInputType
  }

  export type LoggerIDMLGroupByOutputType = {
    id: string
    IDML: string
    description: string
    language: string
    created_at: Date | null
    _count: LoggerIDMLCountAggregateOutputType | null
    _min: LoggerIDMLMinAggregateOutputType | null
    _max: LoggerIDMLMaxAggregateOutputType | null
  }

  type GetLoggerIDMLGroupByPayload<T extends LoggerIDMLGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoggerIDMLGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoggerIDMLGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoggerIDMLGroupByOutputType[P]>
            : GetScalarType<T[P], LoggerIDMLGroupByOutputType[P]>
        }
      >
    >


  export type LoggerIDMLSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    IDML?: boolean
    description?: boolean
    language?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["loggerIDML"]>

  export type LoggerIDMLSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    IDML?: boolean
    description?: boolean
    language?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["loggerIDML"]>

  export type LoggerIDMLSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    IDML?: boolean
    description?: boolean
    language?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["loggerIDML"]>

  export type LoggerIDMLSelectScalar = {
    id?: boolean
    IDML?: boolean
    description?: boolean
    language?: boolean
    created_at?: boolean
  }

  export type LoggerIDMLOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "IDML" | "description" | "language" | "created_at", ExtArgs["result"]["loggerIDML"]>

  export type $LoggerIDMLPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoggerIDML"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      IDML: string
      description: string
      language: string
      created_at: Date | null
    }, ExtArgs["result"]["loggerIDML"]>
    composites: {}
  }

  type LoggerIDMLGetPayload<S extends boolean | null | undefined | LoggerIDMLDefaultArgs> = $Result.GetResult<Prisma.$LoggerIDMLPayload, S>

  type LoggerIDMLCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoggerIDMLFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoggerIDMLCountAggregateInputType | true
    }

  export interface LoggerIDMLDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoggerIDML'], meta: { name: 'LoggerIDML' } }
    /**
     * Find zero or one LoggerIDML that matches the filter.
     * @param {LoggerIDMLFindUniqueArgs} args - Arguments to find a LoggerIDML
     * @example
     * // Get one LoggerIDML
     * const loggerIDML = await prisma.loggerIDML.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoggerIDMLFindUniqueArgs>(args: SelectSubset<T, LoggerIDMLFindUniqueArgs<ExtArgs>>): Prisma__LoggerIDMLClient<$Result.GetResult<Prisma.$LoggerIDMLPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LoggerIDML that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoggerIDMLFindUniqueOrThrowArgs} args - Arguments to find a LoggerIDML
     * @example
     * // Get one LoggerIDML
     * const loggerIDML = await prisma.loggerIDML.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoggerIDMLFindUniqueOrThrowArgs>(args: SelectSubset<T, LoggerIDMLFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoggerIDMLClient<$Result.GetResult<Prisma.$LoggerIDMLPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoggerIDML that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoggerIDMLFindFirstArgs} args - Arguments to find a LoggerIDML
     * @example
     * // Get one LoggerIDML
     * const loggerIDML = await prisma.loggerIDML.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoggerIDMLFindFirstArgs>(args?: SelectSubset<T, LoggerIDMLFindFirstArgs<ExtArgs>>): Prisma__LoggerIDMLClient<$Result.GetResult<Prisma.$LoggerIDMLPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoggerIDML that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoggerIDMLFindFirstOrThrowArgs} args - Arguments to find a LoggerIDML
     * @example
     * // Get one LoggerIDML
     * const loggerIDML = await prisma.loggerIDML.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoggerIDMLFindFirstOrThrowArgs>(args?: SelectSubset<T, LoggerIDMLFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoggerIDMLClient<$Result.GetResult<Prisma.$LoggerIDMLPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LoggerIDMLS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoggerIDMLFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoggerIDMLS
     * const loggerIDMLS = await prisma.loggerIDML.findMany()
     * 
     * // Get first 10 LoggerIDMLS
     * const loggerIDMLS = await prisma.loggerIDML.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loggerIDMLWithIdOnly = await prisma.loggerIDML.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoggerIDMLFindManyArgs>(args?: SelectSubset<T, LoggerIDMLFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoggerIDMLPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LoggerIDML.
     * @param {LoggerIDMLCreateArgs} args - Arguments to create a LoggerIDML.
     * @example
     * // Create one LoggerIDML
     * const LoggerIDML = await prisma.loggerIDML.create({
     *   data: {
     *     // ... data to create a LoggerIDML
     *   }
     * })
     * 
     */
    create<T extends LoggerIDMLCreateArgs>(args: SelectSubset<T, LoggerIDMLCreateArgs<ExtArgs>>): Prisma__LoggerIDMLClient<$Result.GetResult<Prisma.$LoggerIDMLPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LoggerIDMLS.
     * @param {LoggerIDMLCreateManyArgs} args - Arguments to create many LoggerIDMLS.
     * @example
     * // Create many LoggerIDMLS
     * const loggerIDML = await prisma.loggerIDML.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoggerIDMLCreateManyArgs>(args?: SelectSubset<T, LoggerIDMLCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LoggerIDMLS and returns the data saved in the database.
     * @param {LoggerIDMLCreateManyAndReturnArgs} args - Arguments to create many LoggerIDMLS.
     * @example
     * // Create many LoggerIDMLS
     * const loggerIDML = await prisma.loggerIDML.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LoggerIDMLS and only return the `id`
     * const loggerIDMLWithIdOnly = await prisma.loggerIDML.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoggerIDMLCreateManyAndReturnArgs>(args?: SelectSubset<T, LoggerIDMLCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoggerIDMLPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LoggerIDML.
     * @param {LoggerIDMLDeleteArgs} args - Arguments to delete one LoggerIDML.
     * @example
     * // Delete one LoggerIDML
     * const LoggerIDML = await prisma.loggerIDML.delete({
     *   where: {
     *     // ... filter to delete one LoggerIDML
     *   }
     * })
     * 
     */
    delete<T extends LoggerIDMLDeleteArgs>(args: SelectSubset<T, LoggerIDMLDeleteArgs<ExtArgs>>): Prisma__LoggerIDMLClient<$Result.GetResult<Prisma.$LoggerIDMLPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LoggerIDML.
     * @param {LoggerIDMLUpdateArgs} args - Arguments to update one LoggerIDML.
     * @example
     * // Update one LoggerIDML
     * const loggerIDML = await prisma.loggerIDML.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoggerIDMLUpdateArgs>(args: SelectSubset<T, LoggerIDMLUpdateArgs<ExtArgs>>): Prisma__LoggerIDMLClient<$Result.GetResult<Prisma.$LoggerIDMLPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LoggerIDMLS.
     * @param {LoggerIDMLDeleteManyArgs} args - Arguments to filter LoggerIDMLS to delete.
     * @example
     * // Delete a few LoggerIDMLS
     * const { count } = await prisma.loggerIDML.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoggerIDMLDeleteManyArgs>(args?: SelectSubset<T, LoggerIDMLDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoggerIDMLS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoggerIDMLUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoggerIDMLS
     * const loggerIDML = await prisma.loggerIDML.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoggerIDMLUpdateManyArgs>(args: SelectSubset<T, LoggerIDMLUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoggerIDMLS and returns the data updated in the database.
     * @param {LoggerIDMLUpdateManyAndReturnArgs} args - Arguments to update many LoggerIDMLS.
     * @example
     * // Update many LoggerIDMLS
     * const loggerIDML = await prisma.loggerIDML.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LoggerIDMLS and only return the `id`
     * const loggerIDMLWithIdOnly = await prisma.loggerIDML.updateManyAndReturn({
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
    updateManyAndReturn<T extends LoggerIDMLUpdateManyAndReturnArgs>(args: SelectSubset<T, LoggerIDMLUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoggerIDMLPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LoggerIDML.
     * @param {LoggerIDMLUpsertArgs} args - Arguments to update or create a LoggerIDML.
     * @example
     * // Update or create a LoggerIDML
     * const loggerIDML = await prisma.loggerIDML.upsert({
     *   create: {
     *     // ... data to create a LoggerIDML
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoggerIDML we want to update
     *   }
     * })
     */
    upsert<T extends LoggerIDMLUpsertArgs>(args: SelectSubset<T, LoggerIDMLUpsertArgs<ExtArgs>>): Prisma__LoggerIDMLClient<$Result.GetResult<Prisma.$LoggerIDMLPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LoggerIDMLS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoggerIDMLCountArgs} args - Arguments to filter LoggerIDMLS to count.
     * @example
     * // Count the number of LoggerIDMLS
     * const count = await prisma.loggerIDML.count({
     *   where: {
     *     // ... the filter for the LoggerIDMLS we want to count
     *   }
     * })
    **/
    count<T extends LoggerIDMLCountArgs>(
      args?: Subset<T, LoggerIDMLCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoggerIDMLCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoggerIDML.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoggerIDMLAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoggerIDMLAggregateArgs>(args: Subset<T, LoggerIDMLAggregateArgs>): Prisma.PrismaPromise<GetLoggerIDMLAggregateType<T>>

    /**
     * Group by LoggerIDML.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoggerIDMLGroupByArgs} args - Group by arguments.
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
      T extends LoggerIDMLGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoggerIDMLGroupByArgs['orderBy'] }
        : { orderBy?: LoggerIDMLGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LoggerIDMLGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoggerIDMLGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoggerIDML model
   */
  readonly fields: LoggerIDMLFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoggerIDML.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoggerIDMLClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the LoggerIDML model
   */
  interface LoggerIDMLFieldRefs {
    readonly id: FieldRef<"LoggerIDML", 'String'>
    readonly IDML: FieldRef<"LoggerIDML", 'String'>
    readonly description: FieldRef<"LoggerIDML", 'String'>
    readonly language: FieldRef<"LoggerIDML", 'String'>
    readonly created_at: FieldRef<"LoggerIDML", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LoggerIDML findUnique
   */
  export type LoggerIDMLFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoggerIDML
     */
    select?: LoggerIDMLSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoggerIDML
     */
    omit?: LoggerIDMLOmit<ExtArgs> | null
    /**
     * Filter, which LoggerIDML to fetch.
     */
    where: LoggerIDMLWhereUniqueInput
  }

  /**
   * LoggerIDML findUniqueOrThrow
   */
  export type LoggerIDMLFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoggerIDML
     */
    select?: LoggerIDMLSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoggerIDML
     */
    omit?: LoggerIDMLOmit<ExtArgs> | null
    /**
     * Filter, which LoggerIDML to fetch.
     */
    where: LoggerIDMLWhereUniqueInput
  }

  /**
   * LoggerIDML findFirst
   */
  export type LoggerIDMLFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoggerIDML
     */
    select?: LoggerIDMLSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoggerIDML
     */
    omit?: LoggerIDMLOmit<ExtArgs> | null
    /**
     * Filter, which LoggerIDML to fetch.
     */
    where?: LoggerIDMLWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoggerIDMLS to fetch.
     */
    orderBy?: LoggerIDMLOrderByWithRelationInput | LoggerIDMLOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoggerIDMLS.
     */
    cursor?: LoggerIDMLWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoggerIDMLS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoggerIDMLS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoggerIDMLS.
     */
    distinct?: LoggerIDMLScalarFieldEnum | LoggerIDMLScalarFieldEnum[]
  }

  /**
   * LoggerIDML findFirstOrThrow
   */
  export type LoggerIDMLFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoggerIDML
     */
    select?: LoggerIDMLSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoggerIDML
     */
    omit?: LoggerIDMLOmit<ExtArgs> | null
    /**
     * Filter, which LoggerIDML to fetch.
     */
    where?: LoggerIDMLWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoggerIDMLS to fetch.
     */
    orderBy?: LoggerIDMLOrderByWithRelationInput | LoggerIDMLOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoggerIDMLS.
     */
    cursor?: LoggerIDMLWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoggerIDMLS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoggerIDMLS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoggerIDMLS.
     */
    distinct?: LoggerIDMLScalarFieldEnum | LoggerIDMLScalarFieldEnum[]
  }

  /**
   * LoggerIDML findMany
   */
  export type LoggerIDMLFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoggerIDML
     */
    select?: LoggerIDMLSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoggerIDML
     */
    omit?: LoggerIDMLOmit<ExtArgs> | null
    /**
     * Filter, which LoggerIDMLS to fetch.
     */
    where?: LoggerIDMLWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoggerIDMLS to fetch.
     */
    orderBy?: LoggerIDMLOrderByWithRelationInput | LoggerIDMLOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoggerIDMLS.
     */
    cursor?: LoggerIDMLWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoggerIDMLS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoggerIDMLS.
     */
    skip?: number
    distinct?: LoggerIDMLScalarFieldEnum | LoggerIDMLScalarFieldEnum[]
  }

  /**
   * LoggerIDML create
   */
  export type LoggerIDMLCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoggerIDML
     */
    select?: LoggerIDMLSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoggerIDML
     */
    omit?: LoggerIDMLOmit<ExtArgs> | null
    /**
     * The data needed to create a LoggerIDML.
     */
    data: XOR<LoggerIDMLCreateInput, LoggerIDMLUncheckedCreateInput>
  }

  /**
   * LoggerIDML createMany
   */
  export type LoggerIDMLCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoggerIDMLS.
     */
    data: LoggerIDMLCreateManyInput | LoggerIDMLCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoggerIDML createManyAndReturn
   */
  export type LoggerIDMLCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoggerIDML
     */
    select?: LoggerIDMLSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoggerIDML
     */
    omit?: LoggerIDMLOmit<ExtArgs> | null
    /**
     * The data used to create many LoggerIDMLS.
     */
    data: LoggerIDMLCreateManyInput | LoggerIDMLCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoggerIDML update
   */
  export type LoggerIDMLUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoggerIDML
     */
    select?: LoggerIDMLSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoggerIDML
     */
    omit?: LoggerIDMLOmit<ExtArgs> | null
    /**
     * The data needed to update a LoggerIDML.
     */
    data: XOR<LoggerIDMLUpdateInput, LoggerIDMLUncheckedUpdateInput>
    /**
     * Choose, which LoggerIDML to update.
     */
    where: LoggerIDMLWhereUniqueInput
  }

  /**
   * LoggerIDML updateMany
   */
  export type LoggerIDMLUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoggerIDMLS.
     */
    data: XOR<LoggerIDMLUpdateManyMutationInput, LoggerIDMLUncheckedUpdateManyInput>
    /**
     * Filter which LoggerIDMLS to update
     */
    where?: LoggerIDMLWhereInput
    /**
     * Limit how many LoggerIDMLS to update.
     */
    limit?: number
  }

  /**
   * LoggerIDML updateManyAndReturn
   */
  export type LoggerIDMLUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoggerIDML
     */
    select?: LoggerIDMLSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoggerIDML
     */
    omit?: LoggerIDMLOmit<ExtArgs> | null
    /**
     * The data used to update LoggerIDMLS.
     */
    data: XOR<LoggerIDMLUpdateManyMutationInput, LoggerIDMLUncheckedUpdateManyInput>
    /**
     * Filter which LoggerIDMLS to update
     */
    where?: LoggerIDMLWhereInput
    /**
     * Limit how many LoggerIDMLS to update.
     */
    limit?: number
  }

  /**
   * LoggerIDML upsert
   */
  export type LoggerIDMLUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoggerIDML
     */
    select?: LoggerIDMLSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoggerIDML
     */
    omit?: LoggerIDMLOmit<ExtArgs> | null
    /**
     * The filter to search for the LoggerIDML to update in case it exists.
     */
    where: LoggerIDMLWhereUniqueInput
    /**
     * In case the LoggerIDML found by the `where` argument doesn't exist, create a new LoggerIDML with this data.
     */
    create: XOR<LoggerIDMLCreateInput, LoggerIDMLUncheckedCreateInput>
    /**
     * In case the LoggerIDML was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoggerIDMLUpdateInput, LoggerIDMLUncheckedUpdateInput>
  }

  /**
   * LoggerIDML delete
   */
  export type LoggerIDMLDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoggerIDML
     */
    select?: LoggerIDMLSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoggerIDML
     */
    omit?: LoggerIDMLOmit<ExtArgs> | null
    /**
     * Filter which LoggerIDML to delete.
     */
    where: LoggerIDMLWhereUniqueInput
  }

  /**
   * LoggerIDML deleteMany
   */
  export type LoggerIDMLDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoggerIDMLS to delete
     */
    where?: LoggerIDMLWhereInput
    /**
     * Limit how many LoggerIDMLS to delete.
     */
    limit?: number
  }

  /**
   * LoggerIDML without action
   */
  export type LoggerIDMLDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoggerIDML
     */
    select?: LoggerIDMLSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoggerIDML
     */
    omit?: LoggerIDMLOmit<ExtArgs> | null
  }


  /**
   * Model NewsArticle
   */

  export type AggregateNewsArticle = {
    _count: NewsArticleCountAggregateOutputType | null
    _avg: NewsArticleAvgAggregateOutputType | null
    _sum: NewsArticleSumAggregateOutputType | null
    _min: NewsArticleMinAggregateOutputType | null
    _max: NewsArticleMaxAggregateOutputType | null
  }

  export type NewsArticleAvgAggregateOutputType = {
    shares: number | null
  }

  export type NewsArticleSumAggregateOutputType = {
    shares: number | null
  }

  export type NewsArticleMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    imageUrl: string | null
    publishedAt: Date | null
    shares: number | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsArticleMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    imageUrl: string | null
    publishedAt: Date | null
    shares: number | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsArticleCountAggregateOutputType = {
    id: number
    title: number
    content: number
    imageUrl: number
    publishedAt: number
    shares: number
    authorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewsArticleAvgAggregateInputType = {
    shares?: true
  }

  export type NewsArticleSumAggregateInputType = {
    shares?: true
  }

  export type NewsArticleMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imageUrl?: true
    publishedAt?: true
    shares?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsArticleMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imageUrl?: true
    publishedAt?: true
    shares?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsArticleCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imageUrl?: true
    publishedAt?: true
    shares?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewsArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsArticle to aggregate.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsArticles
    **/
    _count?: true | NewsArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsArticleMaxAggregateInputType
  }

  export type GetNewsArticleAggregateType<T extends NewsArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsArticle[P]>
      : GetScalarType<T[P], AggregateNewsArticle[P]>
  }




  export type NewsArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsArticleWhereInput
    orderBy?: NewsArticleOrderByWithAggregationInput | NewsArticleOrderByWithAggregationInput[]
    by: NewsArticleScalarFieldEnum[] | NewsArticleScalarFieldEnum
    having?: NewsArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsArticleCountAggregateInputType | true
    _avg?: NewsArticleAvgAggregateInputType
    _sum?: NewsArticleSumAggregateInputType
    _min?: NewsArticleMinAggregateInputType
    _max?: NewsArticleMaxAggregateInputType
  }

  export type NewsArticleGroupByOutputType = {
    id: string
    title: string
    content: string
    imageUrl: string | null
    publishedAt: Date
    shares: number
    authorId: string
    createdAt: Date
    updatedAt: Date
    _count: NewsArticleCountAggregateOutputType | null
    _avg: NewsArticleAvgAggregateOutputType | null
    _sum: NewsArticleSumAggregateOutputType | null
    _min: NewsArticleMinAggregateOutputType | null
    _max: NewsArticleMaxAggregateOutputType | null
  }

  type GetNewsArticleGroupByPayload<T extends NewsArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsArticleGroupByOutputType[P]>
            : GetScalarType<T[P], NewsArticleGroupByOutputType[P]>
        }
      >
    >


  export type NewsArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    imageUrl?: boolean
    publishedAt?: boolean
    shares?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    likes?: boolean | NewsArticle$likesArgs<ExtArgs>
    author?: boolean | AppUserDefaultArgs<ExtArgs>
    _count?: boolean | NewsArticleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsArticle"]>

  export type NewsArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    imageUrl?: boolean
    publishedAt?: boolean
    shares?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | AppUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsArticle"]>

  export type NewsArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    imageUrl?: boolean
    publishedAt?: boolean
    shares?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | AppUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsArticle"]>

  export type NewsArticleSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    imageUrl?: boolean
    publishedAt?: boolean
    shares?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NewsArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "imageUrl" | "publishedAt" | "shares" | "authorId" | "createdAt" | "updatedAt", ExtArgs["result"]["newsArticle"]>
  export type NewsArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | NewsArticle$likesArgs<ExtArgs>
    author?: boolean | AppUserDefaultArgs<ExtArgs>
    _count?: boolean | NewsArticleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NewsArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AppUserDefaultArgs<ExtArgs>
  }
  export type NewsArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AppUserDefaultArgs<ExtArgs>
  }

  export type $NewsArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsArticle"
    objects: {
      likes: Prisma.$NewsLikePayload<ExtArgs>[]
      author: Prisma.$AppUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      imageUrl: string | null
      publishedAt: Date
      shares: number
      authorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["newsArticle"]>
    composites: {}
  }

  type NewsArticleGetPayload<S extends boolean | null | undefined | NewsArticleDefaultArgs> = $Result.GetResult<Prisma.$NewsArticlePayload, S>

  type NewsArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsArticleCountAggregateInputType | true
    }

  export interface NewsArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsArticle'], meta: { name: 'NewsArticle' } }
    /**
     * Find zero or one NewsArticle that matches the filter.
     * @param {NewsArticleFindUniqueArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsArticleFindUniqueArgs>(args: SelectSubset<T, NewsArticleFindUniqueArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsArticle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsArticleFindUniqueOrThrowArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsArticle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleFindFirstArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsArticleFindFirstArgs>(args?: SelectSubset<T, NewsArticleFindFirstArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsArticle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleFindFirstOrThrowArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsArticles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsArticles
     * const newsArticles = await prisma.newsArticle.findMany()
     * 
     * // Get first 10 NewsArticles
     * const newsArticles = await prisma.newsArticle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsArticleWithIdOnly = await prisma.newsArticle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsArticleFindManyArgs>(args?: SelectSubset<T, NewsArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsArticle.
     * @param {NewsArticleCreateArgs} args - Arguments to create a NewsArticle.
     * @example
     * // Create one NewsArticle
     * const NewsArticle = await prisma.newsArticle.create({
     *   data: {
     *     // ... data to create a NewsArticle
     *   }
     * })
     * 
     */
    create<T extends NewsArticleCreateArgs>(args: SelectSubset<T, NewsArticleCreateArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsArticles.
     * @param {NewsArticleCreateManyArgs} args - Arguments to create many NewsArticles.
     * @example
     * // Create many NewsArticles
     * const newsArticle = await prisma.newsArticle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsArticleCreateManyArgs>(args?: SelectSubset<T, NewsArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsArticles and returns the data saved in the database.
     * @param {NewsArticleCreateManyAndReturnArgs} args - Arguments to create many NewsArticles.
     * @example
     * // Create many NewsArticles
     * const newsArticle = await prisma.newsArticle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsArticles and only return the `id`
     * const newsArticleWithIdOnly = await prisma.newsArticle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsArticle.
     * @param {NewsArticleDeleteArgs} args - Arguments to delete one NewsArticle.
     * @example
     * // Delete one NewsArticle
     * const NewsArticle = await prisma.newsArticle.delete({
     *   where: {
     *     // ... filter to delete one NewsArticle
     *   }
     * })
     * 
     */
    delete<T extends NewsArticleDeleteArgs>(args: SelectSubset<T, NewsArticleDeleteArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsArticle.
     * @param {NewsArticleUpdateArgs} args - Arguments to update one NewsArticle.
     * @example
     * // Update one NewsArticle
     * const newsArticle = await prisma.newsArticle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsArticleUpdateArgs>(args: SelectSubset<T, NewsArticleUpdateArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsArticles.
     * @param {NewsArticleDeleteManyArgs} args - Arguments to filter NewsArticles to delete.
     * @example
     * // Delete a few NewsArticles
     * const { count } = await prisma.newsArticle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsArticleDeleteManyArgs>(args?: SelectSubset<T, NewsArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsArticles
     * const newsArticle = await prisma.newsArticle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsArticleUpdateManyArgs>(args: SelectSubset<T, NewsArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsArticles and returns the data updated in the database.
     * @param {NewsArticleUpdateManyAndReturnArgs} args - Arguments to update many NewsArticles.
     * @example
     * // Update many NewsArticles
     * const newsArticle = await prisma.newsArticle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsArticles and only return the `id`
     * const newsArticleWithIdOnly = await prisma.newsArticle.updateManyAndReturn({
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
    updateManyAndReturn<T extends NewsArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsArticle.
     * @param {NewsArticleUpsertArgs} args - Arguments to update or create a NewsArticle.
     * @example
     * // Update or create a NewsArticle
     * const newsArticle = await prisma.newsArticle.upsert({
     *   create: {
     *     // ... data to create a NewsArticle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsArticle we want to update
     *   }
     * })
     */
    upsert<T extends NewsArticleUpsertArgs>(args: SelectSubset<T, NewsArticleUpsertArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleCountArgs} args - Arguments to filter NewsArticles to count.
     * @example
     * // Count the number of NewsArticles
     * const count = await prisma.newsArticle.count({
     *   where: {
     *     // ... the filter for the NewsArticles we want to count
     *   }
     * })
    **/
    count<T extends NewsArticleCountArgs>(
      args?: Subset<T, NewsArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsArticleAggregateArgs>(args: Subset<T, NewsArticleAggregateArgs>): Prisma.PrismaPromise<GetNewsArticleAggregateType<T>>

    /**
     * Group by NewsArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleGroupByArgs} args - Group by arguments.
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
      T extends NewsArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsArticleGroupByArgs['orderBy'] }
        : { orderBy?: NewsArticleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsArticle model
   */
  readonly fields: NewsArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsArticle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    likes<T extends NewsArticle$likesArgs<ExtArgs> = {}>(args?: Subset<T, NewsArticle$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    author<T extends AppUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppUserDefaultArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NewsArticle model
   */
  interface NewsArticleFieldRefs {
    readonly id: FieldRef<"NewsArticle", 'String'>
    readonly title: FieldRef<"NewsArticle", 'String'>
    readonly content: FieldRef<"NewsArticle", 'String'>
    readonly imageUrl: FieldRef<"NewsArticle", 'String'>
    readonly publishedAt: FieldRef<"NewsArticle", 'DateTime'>
    readonly shares: FieldRef<"NewsArticle", 'Int'>
    readonly authorId: FieldRef<"NewsArticle", 'String'>
    readonly createdAt: FieldRef<"NewsArticle", 'DateTime'>
    readonly updatedAt: FieldRef<"NewsArticle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsArticle findUnique
   */
  export type NewsArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle findUniqueOrThrow
   */
  export type NewsArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle findFirst
   */
  export type NewsArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsArticles.
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsArticles.
     */
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * NewsArticle findFirstOrThrow
   */
  export type NewsArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsArticles.
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsArticles.
     */
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * NewsArticle findMany
   */
  export type NewsArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticles to fetch.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsArticles.
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * NewsArticle create
   */
  export type NewsArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsArticle.
     */
    data: XOR<NewsArticleCreateInput, NewsArticleUncheckedCreateInput>
  }

  /**
   * NewsArticle createMany
   */
  export type NewsArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsArticles.
     */
    data: NewsArticleCreateManyInput | NewsArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsArticle createManyAndReturn
   */
  export type NewsArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * The data used to create many NewsArticles.
     */
    data: NewsArticleCreateManyInput | NewsArticleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsArticle update
   */
  export type NewsArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsArticle.
     */
    data: XOR<NewsArticleUpdateInput, NewsArticleUncheckedUpdateInput>
    /**
     * Choose, which NewsArticle to update.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle updateMany
   */
  export type NewsArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsArticles.
     */
    data: XOR<NewsArticleUpdateManyMutationInput, NewsArticleUncheckedUpdateManyInput>
    /**
     * Filter which NewsArticles to update
     */
    where?: NewsArticleWhereInput
    /**
     * Limit how many NewsArticles to update.
     */
    limit?: number
  }

  /**
   * NewsArticle updateManyAndReturn
   */
  export type NewsArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * The data used to update NewsArticles.
     */
    data: XOR<NewsArticleUpdateManyMutationInput, NewsArticleUncheckedUpdateManyInput>
    /**
     * Filter which NewsArticles to update
     */
    where?: NewsArticleWhereInput
    /**
     * Limit how many NewsArticles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsArticle upsert
   */
  export type NewsArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsArticle to update in case it exists.
     */
    where: NewsArticleWhereUniqueInput
    /**
     * In case the NewsArticle found by the `where` argument doesn't exist, create a new NewsArticle with this data.
     */
    create: XOR<NewsArticleCreateInput, NewsArticleUncheckedCreateInput>
    /**
     * In case the NewsArticle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsArticleUpdateInput, NewsArticleUncheckedUpdateInput>
  }

  /**
   * NewsArticle delete
   */
  export type NewsArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter which NewsArticle to delete.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle deleteMany
   */
  export type NewsArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsArticles to delete
     */
    where?: NewsArticleWhereInput
    /**
     * Limit how many NewsArticles to delete.
     */
    limit?: number
  }

  /**
   * NewsArticle.likes
   */
  export type NewsArticle$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLike
     */
    select?: NewsLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLike
     */
    omit?: NewsLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsLikeInclude<ExtArgs> | null
    where?: NewsLikeWhereInput
    orderBy?: NewsLikeOrderByWithRelationInput | NewsLikeOrderByWithRelationInput[]
    cursor?: NewsLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsLikeScalarFieldEnum | NewsLikeScalarFieldEnum[]
  }

  /**
   * NewsArticle without action
   */
  export type NewsArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
  }


  /**
   * Model NewsLike
   */

  export type AggregateNewsLike = {
    _count: NewsLikeCountAggregateOutputType | null
    _min: NewsLikeMinAggregateOutputType | null
    _max: NewsLikeMaxAggregateOutputType | null
  }

  export type NewsLikeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    articleId: string | null
    createdAt: Date | null
  }

  export type NewsLikeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    articleId: string | null
    createdAt: Date | null
  }

  export type NewsLikeCountAggregateOutputType = {
    id: number
    userId: number
    articleId: number
    createdAt: number
    _all: number
  }


  export type NewsLikeMinAggregateInputType = {
    id?: true
    userId?: true
    articleId?: true
    createdAt?: true
  }

  export type NewsLikeMaxAggregateInputType = {
    id?: true
    userId?: true
    articleId?: true
    createdAt?: true
  }

  export type NewsLikeCountAggregateInputType = {
    id?: true
    userId?: true
    articleId?: true
    createdAt?: true
    _all?: true
  }

  export type NewsLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsLike to aggregate.
     */
    where?: NewsLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsLikes to fetch.
     */
    orderBy?: NewsLikeOrderByWithRelationInput | NewsLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsLikes
    **/
    _count?: true | NewsLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsLikeMaxAggregateInputType
  }

  export type GetNewsLikeAggregateType<T extends NewsLikeAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsLike[P]>
      : GetScalarType<T[P], AggregateNewsLike[P]>
  }




  export type NewsLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsLikeWhereInput
    orderBy?: NewsLikeOrderByWithAggregationInput | NewsLikeOrderByWithAggregationInput[]
    by: NewsLikeScalarFieldEnum[] | NewsLikeScalarFieldEnum
    having?: NewsLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsLikeCountAggregateInputType | true
    _min?: NewsLikeMinAggregateInputType
    _max?: NewsLikeMaxAggregateInputType
  }

  export type NewsLikeGroupByOutputType = {
    id: string
    userId: string
    articleId: string
    createdAt: Date
    _count: NewsLikeCountAggregateOutputType | null
    _min: NewsLikeMinAggregateOutputType | null
    _max: NewsLikeMaxAggregateOutputType | null
  }

  type GetNewsLikeGroupByPayload<T extends NewsLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsLikeGroupByOutputType[P]>
            : GetScalarType<T[P], NewsLikeGroupByOutputType[P]>
        }
      >
    >


  export type NewsLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    articleId?: boolean
    createdAt?: boolean
    article?: boolean | NewsArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsLike"]>

  export type NewsLikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    articleId?: boolean
    createdAt?: boolean
    article?: boolean | NewsArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsLike"]>

  export type NewsLikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    articleId?: boolean
    createdAt?: boolean
    article?: boolean | NewsArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsLike"]>

  export type NewsLikeSelectScalar = {
    id?: boolean
    userId?: boolean
    articleId?: boolean
    createdAt?: boolean
  }

  export type NewsLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "articleId" | "createdAt", ExtArgs["result"]["newsLike"]>
  export type NewsLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | NewsArticleDefaultArgs<ExtArgs>
  }
  export type NewsLikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | NewsArticleDefaultArgs<ExtArgs>
  }
  export type NewsLikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | NewsArticleDefaultArgs<ExtArgs>
  }

  export type $NewsLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsLike"
    objects: {
      article: Prisma.$NewsArticlePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      articleId: string
      createdAt: Date
    }, ExtArgs["result"]["newsLike"]>
    composites: {}
  }

  type NewsLikeGetPayload<S extends boolean | null | undefined | NewsLikeDefaultArgs> = $Result.GetResult<Prisma.$NewsLikePayload, S>

  type NewsLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsLikeCountAggregateInputType | true
    }

  export interface NewsLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsLike'], meta: { name: 'NewsLike' } }
    /**
     * Find zero or one NewsLike that matches the filter.
     * @param {NewsLikeFindUniqueArgs} args - Arguments to find a NewsLike
     * @example
     * // Get one NewsLike
     * const newsLike = await prisma.newsLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsLikeFindUniqueArgs>(args: SelectSubset<T, NewsLikeFindUniqueArgs<ExtArgs>>): Prisma__NewsLikeClient<$Result.GetResult<Prisma.$NewsLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsLikeFindUniqueOrThrowArgs} args - Arguments to find a NewsLike
     * @example
     * // Get one NewsLike
     * const newsLike = await prisma.newsLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsLikeClient<$Result.GetResult<Prisma.$NewsLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLikeFindFirstArgs} args - Arguments to find a NewsLike
     * @example
     * // Get one NewsLike
     * const newsLike = await prisma.newsLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsLikeFindFirstArgs>(args?: SelectSubset<T, NewsLikeFindFirstArgs<ExtArgs>>): Prisma__NewsLikeClient<$Result.GetResult<Prisma.$NewsLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLikeFindFirstOrThrowArgs} args - Arguments to find a NewsLike
     * @example
     * // Get one NewsLike
     * const newsLike = await prisma.newsLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsLikeClient<$Result.GetResult<Prisma.$NewsLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsLikes
     * const newsLikes = await prisma.newsLike.findMany()
     * 
     * // Get first 10 NewsLikes
     * const newsLikes = await prisma.newsLike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsLikeWithIdOnly = await prisma.newsLike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsLikeFindManyArgs>(args?: SelectSubset<T, NewsLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsLike.
     * @param {NewsLikeCreateArgs} args - Arguments to create a NewsLike.
     * @example
     * // Create one NewsLike
     * const NewsLike = await prisma.newsLike.create({
     *   data: {
     *     // ... data to create a NewsLike
     *   }
     * })
     * 
     */
    create<T extends NewsLikeCreateArgs>(args: SelectSubset<T, NewsLikeCreateArgs<ExtArgs>>): Prisma__NewsLikeClient<$Result.GetResult<Prisma.$NewsLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsLikes.
     * @param {NewsLikeCreateManyArgs} args - Arguments to create many NewsLikes.
     * @example
     * // Create many NewsLikes
     * const newsLike = await prisma.newsLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsLikeCreateManyArgs>(args?: SelectSubset<T, NewsLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsLikes and returns the data saved in the database.
     * @param {NewsLikeCreateManyAndReturnArgs} args - Arguments to create many NewsLikes.
     * @example
     * // Create many NewsLikes
     * const newsLike = await prisma.newsLike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsLikes and only return the `id`
     * const newsLikeWithIdOnly = await prisma.newsLike.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsLikeCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsLikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsLikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsLike.
     * @param {NewsLikeDeleteArgs} args - Arguments to delete one NewsLike.
     * @example
     * // Delete one NewsLike
     * const NewsLike = await prisma.newsLike.delete({
     *   where: {
     *     // ... filter to delete one NewsLike
     *   }
     * })
     * 
     */
    delete<T extends NewsLikeDeleteArgs>(args: SelectSubset<T, NewsLikeDeleteArgs<ExtArgs>>): Prisma__NewsLikeClient<$Result.GetResult<Prisma.$NewsLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsLike.
     * @param {NewsLikeUpdateArgs} args - Arguments to update one NewsLike.
     * @example
     * // Update one NewsLike
     * const newsLike = await prisma.newsLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsLikeUpdateArgs>(args: SelectSubset<T, NewsLikeUpdateArgs<ExtArgs>>): Prisma__NewsLikeClient<$Result.GetResult<Prisma.$NewsLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsLikes.
     * @param {NewsLikeDeleteManyArgs} args - Arguments to filter NewsLikes to delete.
     * @example
     * // Delete a few NewsLikes
     * const { count } = await prisma.newsLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsLikeDeleteManyArgs>(args?: SelectSubset<T, NewsLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsLikes
     * const newsLike = await prisma.newsLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsLikeUpdateManyArgs>(args: SelectSubset<T, NewsLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsLikes and returns the data updated in the database.
     * @param {NewsLikeUpdateManyAndReturnArgs} args - Arguments to update many NewsLikes.
     * @example
     * // Update many NewsLikes
     * const newsLike = await prisma.newsLike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsLikes and only return the `id`
     * const newsLikeWithIdOnly = await prisma.newsLike.updateManyAndReturn({
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
    updateManyAndReturn<T extends NewsLikeUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsLikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsLikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsLike.
     * @param {NewsLikeUpsertArgs} args - Arguments to update or create a NewsLike.
     * @example
     * // Update or create a NewsLike
     * const newsLike = await prisma.newsLike.upsert({
     *   create: {
     *     // ... data to create a NewsLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsLike we want to update
     *   }
     * })
     */
    upsert<T extends NewsLikeUpsertArgs>(args: SelectSubset<T, NewsLikeUpsertArgs<ExtArgs>>): Prisma__NewsLikeClient<$Result.GetResult<Prisma.$NewsLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLikeCountArgs} args - Arguments to filter NewsLikes to count.
     * @example
     * // Count the number of NewsLikes
     * const count = await prisma.newsLike.count({
     *   where: {
     *     // ... the filter for the NewsLikes we want to count
     *   }
     * })
    **/
    count<T extends NewsLikeCountArgs>(
      args?: Subset<T, NewsLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsLikeAggregateArgs>(args: Subset<T, NewsLikeAggregateArgs>): Prisma.PrismaPromise<GetNewsLikeAggregateType<T>>

    /**
     * Group by NewsLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLikeGroupByArgs} args - Group by arguments.
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
      T extends NewsLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsLikeGroupByArgs['orderBy'] }
        : { orderBy?: NewsLikeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsLike model
   */
  readonly fields: NewsLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends NewsArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsArticleDefaultArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NewsLike model
   */
  interface NewsLikeFieldRefs {
    readonly id: FieldRef<"NewsLike", 'String'>
    readonly userId: FieldRef<"NewsLike", 'String'>
    readonly articleId: FieldRef<"NewsLike", 'String'>
    readonly createdAt: FieldRef<"NewsLike", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsLike findUnique
   */
  export type NewsLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLike
     */
    select?: NewsLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLike
     */
    omit?: NewsLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsLikeInclude<ExtArgs> | null
    /**
     * Filter, which NewsLike to fetch.
     */
    where: NewsLikeWhereUniqueInput
  }

  /**
   * NewsLike findUniqueOrThrow
   */
  export type NewsLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLike
     */
    select?: NewsLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLike
     */
    omit?: NewsLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsLikeInclude<ExtArgs> | null
    /**
     * Filter, which NewsLike to fetch.
     */
    where: NewsLikeWhereUniqueInput
  }

  /**
   * NewsLike findFirst
   */
  export type NewsLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLike
     */
    select?: NewsLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLike
     */
    omit?: NewsLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsLikeInclude<ExtArgs> | null
    /**
     * Filter, which NewsLike to fetch.
     */
    where?: NewsLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsLikes to fetch.
     */
    orderBy?: NewsLikeOrderByWithRelationInput | NewsLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsLikes.
     */
    cursor?: NewsLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsLikes.
     */
    distinct?: NewsLikeScalarFieldEnum | NewsLikeScalarFieldEnum[]
  }

  /**
   * NewsLike findFirstOrThrow
   */
  export type NewsLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLike
     */
    select?: NewsLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLike
     */
    omit?: NewsLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsLikeInclude<ExtArgs> | null
    /**
     * Filter, which NewsLike to fetch.
     */
    where?: NewsLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsLikes to fetch.
     */
    orderBy?: NewsLikeOrderByWithRelationInput | NewsLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsLikes.
     */
    cursor?: NewsLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsLikes.
     */
    distinct?: NewsLikeScalarFieldEnum | NewsLikeScalarFieldEnum[]
  }

  /**
   * NewsLike findMany
   */
  export type NewsLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLike
     */
    select?: NewsLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLike
     */
    omit?: NewsLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsLikeInclude<ExtArgs> | null
    /**
     * Filter, which NewsLikes to fetch.
     */
    where?: NewsLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsLikes to fetch.
     */
    orderBy?: NewsLikeOrderByWithRelationInput | NewsLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsLikes.
     */
    cursor?: NewsLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsLikes.
     */
    skip?: number
    distinct?: NewsLikeScalarFieldEnum | NewsLikeScalarFieldEnum[]
  }

  /**
   * NewsLike create
   */
  export type NewsLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLike
     */
    select?: NewsLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLike
     */
    omit?: NewsLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsLike.
     */
    data: XOR<NewsLikeCreateInput, NewsLikeUncheckedCreateInput>
  }

  /**
   * NewsLike createMany
   */
  export type NewsLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsLikes.
     */
    data: NewsLikeCreateManyInput | NewsLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsLike createManyAndReturn
   */
  export type NewsLikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLike
     */
    select?: NewsLikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLike
     */
    omit?: NewsLikeOmit<ExtArgs> | null
    /**
     * The data used to create many NewsLikes.
     */
    data: NewsLikeCreateManyInput | NewsLikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsLikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsLike update
   */
  export type NewsLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLike
     */
    select?: NewsLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLike
     */
    omit?: NewsLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsLike.
     */
    data: XOR<NewsLikeUpdateInput, NewsLikeUncheckedUpdateInput>
    /**
     * Choose, which NewsLike to update.
     */
    where: NewsLikeWhereUniqueInput
  }

  /**
   * NewsLike updateMany
   */
  export type NewsLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsLikes.
     */
    data: XOR<NewsLikeUpdateManyMutationInput, NewsLikeUncheckedUpdateManyInput>
    /**
     * Filter which NewsLikes to update
     */
    where?: NewsLikeWhereInput
    /**
     * Limit how many NewsLikes to update.
     */
    limit?: number
  }

  /**
   * NewsLike updateManyAndReturn
   */
  export type NewsLikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLike
     */
    select?: NewsLikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLike
     */
    omit?: NewsLikeOmit<ExtArgs> | null
    /**
     * The data used to update NewsLikes.
     */
    data: XOR<NewsLikeUpdateManyMutationInput, NewsLikeUncheckedUpdateManyInput>
    /**
     * Filter which NewsLikes to update
     */
    where?: NewsLikeWhereInput
    /**
     * Limit how many NewsLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsLikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsLike upsert
   */
  export type NewsLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLike
     */
    select?: NewsLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLike
     */
    omit?: NewsLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsLike to update in case it exists.
     */
    where: NewsLikeWhereUniqueInput
    /**
     * In case the NewsLike found by the `where` argument doesn't exist, create a new NewsLike with this data.
     */
    create: XOR<NewsLikeCreateInput, NewsLikeUncheckedCreateInput>
    /**
     * In case the NewsLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsLikeUpdateInput, NewsLikeUncheckedUpdateInput>
  }

  /**
   * NewsLike delete
   */
  export type NewsLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLike
     */
    select?: NewsLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLike
     */
    omit?: NewsLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsLikeInclude<ExtArgs> | null
    /**
     * Filter which NewsLike to delete.
     */
    where: NewsLikeWhereUniqueInput
  }

  /**
   * NewsLike deleteMany
   */
  export type NewsLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsLikes to delete
     */
    where?: NewsLikeWhereInput
    /**
     * Limit how many NewsLikes to delete.
     */
    limit?: number
  }

  /**
   * NewsLike without action
   */
  export type NewsLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLike
     */
    select?: NewsLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLike
     */
    omit?: NewsLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsLikeInclude<ExtArgs> | null
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


  export const AppUserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    name: 'name',
    surname: 'surname',
    birthdate: 'birthdate',
    email: 'email',
    role: 'role',
    phone_number: 'phone_number',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AppUserScalarFieldEnum = (typeof AppUserScalarFieldEnum)[keyof typeof AppUserScalarFieldEnum]


  export const GdrSessionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    urlImg: 'urlImg',
    start: 'start',
    end: 'end',
    master: 'master',
    availableSeats: 'availableSeats',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type GdrSessionScalarFieldEnum = (typeof GdrSessionScalarFieldEnum)[keyof typeof GdrSessionScalarFieldEnum]


  export const GdrSessionRegistrationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sessionId: 'sessionId',
    createdAt: 'createdAt'
  };

  export type GdrSessionRegistrationScalarFieldEnum = (typeof GdrSessionRegistrationScalarFieldEnum)[keyof typeof GdrSessionRegistrationScalarFieldEnum]


  export const MainEventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    urlImg: 'urlImg',
    start: 'start',
    end: 'end',
    location: 'location',
    price: 'price',
    maxSeats: 'maxSeats',
    created_at: 'created_at',
    updated_at: 'updated_at',
    note: 'note'
  };

  export type MainEventScalarFieldEnum = (typeof MainEventScalarFieldEnum)[keyof typeof MainEventScalarFieldEnum]


  export const MainEventRegistrationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    eventId: 'eventId',
    createdAt: 'createdAt'
  };

  export type MainEventRegistrationScalarFieldEnum = (typeof MainEventRegistrationScalarFieldEnum)[keyof typeof MainEventRegistrationScalarFieldEnum]


  export const LoggerIDMLScalarFieldEnum: {
    id: 'id',
    IDML: 'IDML',
    description: 'description',
    language: 'language',
    created_at: 'created_at'
  };

  export type LoggerIDMLScalarFieldEnum = (typeof LoggerIDMLScalarFieldEnum)[keyof typeof LoggerIDMLScalarFieldEnum]


  export const NewsArticleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    imageUrl: 'imageUrl',
    publishedAt: 'publishedAt',
    shares: 'shares',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewsArticleScalarFieldEnum = (typeof NewsArticleScalarFieldEnum)[keyof typeof NewsArticleScalarFieldEnum]


  export const NewsLikeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    articleId: 'articleId',
    createdAt: 'createdAt'
  };

  export type NewsLikeScalarFieldEnum = (typeof NewsLikeScalarFieldEnum)[keyof typeof NewsLikeScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AppUserWhereInput = {
    AND?: AppUserWhereInput | AppUserWhereInput[]
    OR?: AppUserWhereInput[]
    NOT?: AppUserWhereInput | AppUserWhereInput[]
    id?: UuidFilter<"AppUser"> | string
    username?: StringFilter<"AppUser"> | string
    password?: StringFilter<"AppUser"> | string
    name?: StringFilter<"AppUser"> | string
    surname?: StringFilter<"AppUser"> | string
    birthdate?: DateTimeFilter<"AppUser"> | Date | string
    email?: StringFilter<"AppUser"> | string
    role?: StringNullableFilter<"AppUser"> | string | null
    phone_number?: StringNullableFilter<"AppUser"> | string | null
    created_at?: DateTimeNullableFilter<"AppUser"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"AppUser"> | Date | string | null
    newsArticles?: NewsArticleListRelationFilter
    GdrSessionRegistrations?: GdrSessionRegistrationListRelationFilter
    mainEventRegistrations?: MainEventRegistrationListRelationFilter
  }

  export type AppUserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    birthdate?: SortOrder
    email?: SortOrder
    role?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    newsArticles?: NewsArticleOrderByRelationAggregateInput
    GdrSessionRegistrations?: GdrSessionRegistrationOrderByRelationAggregateInput
    mainEventRegistrations?: MainEventRegistrationOrderByRelationAggregateInput
  }

  export type AppUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: AppUserWhereInput | AppUserWhereInput[]
    OR?: AppUserWhereInput[]
    NOT?: AppUserWhereInput | AppUserWhereInput[]
    password?: StringFilter<"AppUser"> | string
    name?: StringFilter<"AppUser"> | string
    surname?: StringFilter<"AppUser"> | string
    birthdate?: DateTimeFilter<"AppUser"> | Date | string
    role?: StringNullableFilter<"AppUser"> | string | null
    phone_number?: StringNullableFilter<"AppUser"> | string | null
    created_at?: DateTimeNullableFilter<"AppUser"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"AppUser"> | Date | string | null
    newsArticles?: NewsArticleListRelationFilter
    GdrSessionRegistrations?: GdrSessionRegistrationListRelationFilter
    mainEventRegistrations?: MainEventRegistrationListRelationFilter
  }, "id" | "username" | "email">

  export type AppUserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    birthdate?: SortOrder
    email?: SortOrder
    role?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: AppUserCountOrderByAggregateInput
    _max?: AppUserMaxOrderByAggregateInput
    _min?: AppUserMinOrderByAggregateInput
  }

  export type AppUserScalarWhereWithAggregatesInput = {
    AND?: AppUserScalarWhereWithAggregatesInput | AppUserScalarWhereWithAggregatesInput[]
    OR?: AppUserScalarWhereWithAggregatesInput[]
    NOT?: AppUserScalarWhereWithAggregatesInput | AppUserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"AppUser"> | string
    username?: StringWithAggregatesFilter<"AppUser"> | string
    password?: StringWithAggregatesFilter<"AppUser"> | string
    name?: StringWithAggregatesFilter<"AppUser"> | string
    surname?: StringWithAggregatesFilter<"AppUser"> | string
    birthdate?: DateTimeWithAggregatesFilter<"AppUser"> | Date | string
    email?: StringWithAggregatesFilter<"AppUser"> | string
    role?: StringNullableWithAggregatesFilter<"AppUser"> | string | null
    phone_number?: StringNullableWithAggregatesFilter<"AppUser"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"AppUser"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"AppUser"> | Date | string | null
  }

  export type GdrSessionWhereInput = {
    AND?: GdrSessionWhereInput | GdrSessionWhereInput[]
    OR?: GdrSessionWhereInput[]
    NOT?: GdrSessionWhereInput | GdrSessionWhereInput[]
    id?: UuidFilter<"GdrSession"> | string
    title?: StringFilter<"GdrSession"> | string
    description?: StringFilter<"GdrSession"> | string
    urlImg?: StringNullableFilter<"GdrSession"> | string | null
    start?: DateTimeFilter<"GdrSession"> | Date | string
    end?: DateTimeFilter<"GdrSession"> | Date | string
    master?: StringFilter<"GdrSession"> | string
    availableSeats?: IntFilter<"GdrSession"> | number
    created_at?: DateTimeNullableFilter<"GdrSession"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"GdrSession"> | Date | string | null
    gdrSessionRegistrations?: GdrSessionRegistrationListRelationFilter
  }

  export type GdrSessionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    urlImg?: SortOrderInput | SortOrder
    start?: SortOrder
    end?: SortOrder
    master?: SortOrder
    availableSeats?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    gdrSessionRegistrations?: GdrSessionRegistrationOrderByRelationAggregateInput
  }

  export type GdrSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GdrSessionWhereInput | GdrSessionWhereInput[]
    OR?: GdrSessionWhereInput[]
    NOT?: GdrSessionWhereInput | GdrSessionWhereInput[]
    title?: StringFilter<"GdrSession"> | string
    description?: StringFilter<"GdrSession"> | string
    urlImg?: StringNullableFilter<"GdrSession"> | string | null
    start?: DateTimeFilter<"GdrSession"> | Date | string
    end?: DateTimeFilter<"GdrSession"> | Date | string
    master?: StringFilter<"GdrSession"> | string
    availableSeats?: IntFilter<"GdrSession"> | number
    created_at?: DateTimeNullableFilter<"GdrSession"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"GdrSession"> | Date | string | null
    gdrSessionRegistrations?: GdrSessionRegistrationListRelationFilter
  }, "id">

  export type GdrSessionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    urlImg?: SortOrderInput | SortOrder
    start?: SortOrder
    end?: SortOrder
    master?: SortOrder
    availableSeats?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: GdrSessionCountOrderByAggregateInput
    _avg?: GdrSessionAvgOrderByAggregateInput
    _max?: GdrSessionMaxOrderByAggregateInput
    _min?: GdrSessionMinOrderByAggregateInput
    _sum?: GdrSessionSumOrderByAggregateInput
  }

  export type GdrSessionScalarWhereWithAggregatesInput = {
    AND?: GdrSessionScalarWhereWithAggregatesInput | GdrSessionScalarWhereWithAggregatesInput[]
    OR?: GdrSessionScalarWhereWithAggregatesInput[]
    NOT?: GdrSessionScalarWhereWithAggregatesInput | GdrSessionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"GdrSession"> | string
    title?: StringWithAggregatesFilter<"GdrSession"> | string
    description?: StringWithAggregatesFilter<"GdrSession"> | string
    urlImg?: StringNullableWithAggregatesFilter<"GdrSession"> | string | null
    start?: DateTimeWithAggregatesFilter<"GdrSession"> | Date | string
    end?: DateTimeWithAggregatesFilter<"GdrSession"> | Date | string
    master?: StringWithAggregatesFilter<"GdrSession"> | string
    availableSeats?: IntWithAggregatesFilter<"GdrSession"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"GdrSession"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"GdrSession"> | Date | string | null
  }

  export type GdrSessionRegistrationWhereInput = {
    AND?: GdrSessionRegistrationWhereInput | GdrSessionRegistrationWhereInput[]
    OR?: GdrSessionRegistrationWhereInput[]
    NOT?: GdrSessionRegistrationWhereInput | GdrSessionRegistrationWhereInput[]
    id?: UuidFilter<"GdrSessionRegistration"> | string
    userId?: UuidFilter<"GdrSessionRegistration"> | string
    sessionId?: UuidFilter<"GdrSessionRegistration"> | string
    createdAt?: DateTimeFilter<"GdrSessionRegistration"> | Date | string
    user?: XOR<AppUserScalarRelationFilter, AppUserWhereInput>
    session?: XOR<GdrSessionScalarRelationFilter, GdrSessionWhereInput>
  }

  export type GdrSessionRegistrationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    createdAt?: SortOrder
    user?: AppUserOrderByWithRelationInput
    session?: GdrSessionOrderByWithRelationInput
  }

  export type GdrSessionRegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_sessionId?: GdrSessionRegistrationUserIdSessionIdCompoundUniqueInput
    AND?: GdrSessionRegistrationWhereInput | GdrSessionRegistrationWhereInput[]
    OR?: GdrSessionRegistrationWhereInput[]
    NOT?: GdrSessionRegistrationWhereInput | GdrSessionRegistrationWhereInput[]
    userId?: UuidFilter<"GdrSessionRegistration"> | string
    sessionId?: UuidFilter<"GdrSessionRegistration"> | string
    createdAt?: DateTimeFilter<"GdrSessionRegistration"> | Date | string
    user?: XOR<AppUserScalarRelationFilter, AppUserWhereInput>
    session?: XOR<GdrSessionScalarRelationFilter, GdrSessionWhereInput>
  }, "id" | "userId_sessionId">

  export type GdrSessionRegistrationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    createdAt?: SortOrder
    _count?: GdrSessionRegistrationCountOrderByAggregateInput
    _max?: GdrSessionRegistrationMaxOrderByAggregateInput
    _min?: GdrSessionRegistrationMinOrderByAggregateInput
  }

  export type GdrSessionRegistrationScalarWhereWithAggregatesInput = {
    AND?: GdrSessionRegistrationScalarWhereWithAggregatesInput | GdrSessionRegistrationScalarWhereWithAggregatesInput[]
    OR?: GdrSessionRegistrationScalarWhereWithAggregatesInput[]
    NOT?: GdrSessionRegistrationScalarWhereWithAggregatesInput | GdrSessionRegistrationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"GdrSessionRegistration"> | string
    userId?: UuidWithAggregatesFilter<"GdrSessionRegistration"> | string
    sessionId?: UuidWithAggregatesFilter<"GdrSessionRegistration"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GdrSessionRegistration"> | Date | string
  }

  export type MainEventWhereInput = {
    AND?: MainEventWhereInput | MainEventWhereInput[]
    OR?: MainEventWhereInput[]
    NOT?: MainEventWhereInput | MainEventWhereInput[]
    id?: UuidFilter<"MainEvent"> | string
    title?: StringFilter<"MainEvent"> | string
    description?: StringFilter<"MainEvent"> | string
    urlImg?: StringNullableFilter<"MainEvent"> | string | null
    start?: DateTimeFilter<"MainEvent"> | Date | string
    end?: DateTimeFilter<"MainEvent"> | Date | string
    location?: StringFilter<"MainEvent"> | string
    price?: FloatFilter<"MainEvent"> | number
    maxSeats?: IntFilter<"MainEvent"> | number
    created_at?: DateTimeNullableFilter<"MainEvent"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"MainEvent"> | Date | string | null
    note?: StringFilter<"MainEvent"> | string
    mainEventRegistrations?: MainEventRegistrationListRelationFilter
  }

  export type MainEventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    urlImg?: SortOrderInput | SortOrder
    start?: SortOrder
    end?: SortOrder
    location?: SortOrder
    price?: SortOrder
    maxSeats?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    note?: SortOrder
    mainEventRegistrations?: MainEventRegistrationOrderByRelationAggregateInput
  }

  export type MainEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MainEventWhereInput | MainEventWhereInput[]
    OR?: MainEventWhereInput[]
    NOT?: MainEventWhereInput | MainEventWhereInput[]
    title?: StringFilter<"MainEvent"> | string
    description?: StringFilter<"MainEvent"> | string
    urlImg?: StringNullableFilter<"MainEvent"> | string | null
    start?: DateTimeFilter<"MainEvent"> | Date | string
    end?: DateTimeFilter<"MainEvent"> | Date | string
    location?: StringFilter<"MainEvent"> | string
    price?: FloatFilter<"MainEvent"> | number
    maxSeats?: IntFilter<"MainEvent"> | number
    created_at?: DateTimeNullableFilter<"MainEvent"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"MainEvent"> | Date | string | null
    note?: StringFilter<"MainEvent"> | string
    mainEventRegistrations?: MainEventRegistrationListRelationFilter
  }, "id">

  export type MainEventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    urlImg?: SortOrderInput | SortOrder
    start?: SortOrder
    end?: SortOrder
    location?: SortOrder
    price?: SortOrder
    maxSeats?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    note?: SortOrder
    _count?: MainEventCountOrderByAggregateInput
    _avg?: MainEventAvgOrderByAggregateInput
    _max?: MainEventMaxOrderByAggregateInput
    _min?: MainEventMinOrderByAggregateInput
    _sum?: MainEventSumOrderByAggregateInput
  }

  export type MainEventScalarWhereWithAggregatesInput = {
    AND?: MainEventScalarWhereWithAggregatesInput | MainEventScalarWhereWithAggregatesInput[]
    OR?: MainEventScalarWhereWithAggregatesInput[]
    NOT?: MainEventScalarWhereWithAggregatesInput | MainEventScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"MainEvent"> | string
    title?: StringWithAggregatesFilter<"MainEvent"> | string
    description?: StringWithAggregatesFilter<"MainEvent"> | string
    urlImg?: StringNullableWithAggregatesFilter<"MainEvent"> | string | null
    start?: DateTimeWithAggregatesFilter<"MainEvent"> | Date | string
    end?: DateTimeWithAggregatesFilter<"MainEvent"> | Date | string
    location?: StringWithAggregatesFilter<"MainEvent"> | string
    price?: FloatWithAggregatesFilter<"MainEvent"> | number
    maxSeats?: IntWithAggregatesFilter<"MainEvent"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"MainEvent"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"MainEvent"> | Date | string | null
    note?: StringWithAggregatesFilter<"MainEvent"> | string
  }

  export type MainEventRegistrationWhereInput = {
    AND?: MainEventRegistrationWhereInput | MainEventRegistrationWhereInput[]
    OR?: MainEventRegistrationWhereInput[]
    NOT?: MainEventRegistrationWhereInput | MainEventRegistrationWhereInput[]
    id?: UuidFilter<"MainEventRegistration"> | string
    userId?: UuidFilter<"MainEventRegistration"> | string
    eventId?: UuidFilter<"MainEventRegistration"> | string
    createdAt?: DateTimeFilter<"MainEventRegistration"> | Date | string
    user?: XOR<AppUserScalarRelationFilter, AppUserWhereInput>
    event?: XOR<MainEventScalarRelationFilter, MainEventWhereInput>
  }

  export type MainEventRegistrationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    user?: AppUserOrderByWithRelationInput
    event?: MainEventOrderByWithRelationInput
  }

  export type MainEventRegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_eventId?: MainEventRegistrationUserIdEventIdCompoundUniqueInput
    AND?: MainEventRegistrationWhereInput | MainEventRegistrationWhereInput[]
    OR?: MainEventRegistrationWhereInput[]
    NOT?: MainEventRegistrationWhereInput | MainEventRegistrationWhereInput[]
    userId?: UuidFilter<"MainEventRegistration"> | string
    eventId?: UuidFilter<"MainEventRegistration"> | string
    createdAt?: DateTimeFilter<"MainEventRegistration"> | Date | string
    user?: XOR<AppUserScalarRelationFilter, AppUserWhereInput>
    event?: XOR<MainEventScalarRelationFilter, MainEventWhereInput>
  }, "id" | "userId_eventId">

  export type MainEventRegistrationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    _count?: MainEventRegistrationCountOrderByAggregateInput
    _max?: MainEventRegistrationMaxOrderByAggregateInput
    _min?: MainEventRegistrationMinOrderByAggregateInput
  }

  export type MainEventRegistrationScalarWhereWithAggregatesInput = {
    AND?: MainEventRegistrationScalarWhereWithAggregatesInput | MainEventRegistrationScalarWhereWithAggregatesInput[]
    OR?: MainEventRegistrationScalarWhereWithAggregatesInput[]
    NOT?: MainEventRegistrationScalarWhereWithAggregatesInput | MainEventRegistrationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"MainEventRegistration"> | string
    userId?: UuidWithAggregatesFilter<"MainEventRegistration"> | string
    eventId?: UuidWithAggregatesFilter<"MainEventRegistration"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MainEventRegistration"> | Date | string
  }

  export type LoggerIDMLWhereInput = {
    AND?: LoggerIDMLWhereInput | LoggerIDMLWhereInput[]
    OR?: LoggerIDMLWhereInput[]
    NOT?: LoggerIDMLWhereInput | LoggerIDMLWhereInput[]
    id?: StringFilter<"LoggerIDML"> | string
    IDML?: StringFilter<"LoggerIDML"> | string
    description?: StringFilter<"LoggerIDML"> | string
    language?: StringFilter<"LoggerIDML"> | string
    created_at?: DateTimeNullableFilter<"LoggerIDML"> | Date | string | null
  }

  export type LoggerIDMLOrderByWithRelationInput = {
    id?: SortOrder
    IDML?: SortOrder
    description?: SortOrder
    language?: SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type LoggerIDMLWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    IDML_language?: LoggerIDMLIDMLLanguageCompoundUniqueInput
    AND?: LoggerIDMLWhereInput | LoggerIDMLWhereInput[]
    OR?: LoggerIDMLWhereInput[]
    NOT?: LoggerIDMLWhereInput | LoggerIDMLWhereInput[]
    IDML?: StringFilter<"LoggerIDML"> | string
    description?: StringFilter<"LoggerIDML"> | string
    language?: StringFilter<"LoggerIDML"> | string
    created_at?: DateTimeNullableFilter<"LoggerIDML"> | Date | string | null
  }, "id" | "IDML_language">

  export type LoggerIDMLOrderByWithAggregationInput = {
    id?: SortOrder
    IDML?: SortOrder
    description?: SortOrder
    language?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: LoggerIDMLCountOrderByAggregateInput
    _max?: LoggerIDMLMaxOrderByAggregateInput
    _min?: LoggerIDMLMinOrderByAggregateInput
  }

  export type LoggerIDMLScalarWhereWithAggregatesInput = {
    AND?: LoggerIDMLScalarWhereWithAggregatesInput | LoggerIDMLScalarWhereWithAggregatesInput[]
    OR?: LoggerIDMLScalarWhereWithAggregatesInput[]
    NOT?: LoggerIDMLScalarWhereWithAggregatesInput | LoggerIDMLScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LoggerIDML"> | string
    IDML?: StringWithAggregatesFilter<"LoggerIDML"> | string
    description?: StringWithAggregatesFilter<"LoggerIDML"> | string
    language?: StringWithAggregatesFilter<"LoggerIDML"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"LoggerIDML"> | Date | string | null
  }

  export type NewsArticleWhereInput = {
    AND?: NewsArticleWhereInput | NewsArticleWhereInput[]
    OR?: NewsArticleWhereInput[]
    NOT?: NewsArticleWhereInput | NewsArticleWhereInput[]
    id?: UuidFilter<"NewsArticle"> | string
    title?: StringFilter<"NewsArticle"> | string
    content?: StringFilter<"NewsArticle"> | string
    imageUrl?: StringNullableFilter<"NewsArticle"> | string | null
    publishedAt?: DateTimeFilter<"NewsArticle"> | Date | string
    shares?: IntFilter<"NewsArticle"> | number
    authorId?: UuidFilter<"NewsArticle"> | string
    createdAt?: DateTimeFilter<"NewsArticle"> | Date | string
    updatedAt?: DateTimeFilter<"NewsArticle"> | Date | string
    likes?: NewsLikeListRelationFilter
    author?: XOR<AppUserScalarRelationFilter, AppUserWhereInput>
  }

  export type NewsArticleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    publishedAt?: SortOrder
    shares?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    likes?: NewsLikeOrderByRelationAggregateInput
    author?: AppUserOrderByWithRelationInput
  }

  export type NewsArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NewsArticleWhereInput | NewsArticleWhereInput[]
    OR?: NewsArticleWhereInput[]
    NOT?: NewsArticleWhereInput | NewsArticleWhereInput[]
    title?: StringFilter<"NewsArticle"> | string
    content?: StringFilter<"NewsArticle"> | string
    imageUrl?: StringNullableFilter<"NewsArticle"> | string | null
    publishedAt?: DateTimeFilter<"NewsArticle"> | Date | string
    shares?: IntFilter<"NewsArticle"> | number
    authorId?: UuidFilter<"NewsArticle"> | string
    createdAt?: DateTimeFilter<"NewsArticle"> | Date | string
    updatedAt?: DateTimeFilter<"NewsArticle"> | Date | string
    likes?: NewsLikeListRelationFilter
    author?: XOR<AppUserScalarRelationFilter, AppUserWhereInput>
  }, "id">

  export type NewsArticleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    publishedAt?: SortOrder
    shares?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NewsArticleCountOrderByAggregateInput
    _avg?: NewsArticleAvgOrderByAggregateInput
    _max?: NewsArticleMaxOrderByAggregateInput
    _min?: NewsArticleMinOrderByAggregateInput
    _sum?: NewsArticleSumOrderByAggregateInput
  }

  export type NewsArticleScalarWhereWithAggregatesInput = {
    AND?: NewsArticleScalarWhereWithAggregatesInput | NewsArticleScalarWhereWithAggregatesInput[]
    OR?: NewsArticleScalarWhereWithAggregatesInput[]
    NOT?: NewsArticleScalarWhereWithAggregatesInput | NewsArticleScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"NewsArticle"> | string
    title?: StringWithAggregatesFilter<"NewsArticle"> | string
    content?: StringWithAggregatesFilter<"NewsArticle"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"NewsArticle"> | string | null
    publishedAt?: DateTimeWithAggregatesFilter<"NewsArticle"> | Date | string
    shares?: IntWithAggregatesFilter<"NewsArticle"> | number
    authorId?: UuidWithAggregatesFilter<"NewsArticle"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NewsArticle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NewsArticle"> | Date | string
  }

  export type NewsLikeWhereInput = {
    AND?: NewsLikeWhereInput | NewsLikeWhereInput[]
    OR?: NewsLikeWhereInput[]
    NOT?: NewsLikeWhereInput | NewsLikeWhereInput[]
    id?: UuidFilter<"NewsLike"> | string
    userId?: UuidFilter<"NewsLike"> | string
    articleId?: UuidFilter<"NewsLike"> | string
    createdAt?: DateTimeFilter<"NewsLike"> | Date | string
    article?: XOR<NewsArticleScalarRelationFilter, NewsArticleWhereInput>
  }

  export type NewsLikeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
    article?: NewsArticleOrderByWithRelationInput
  }

  export type NewsLikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_articleId?: NewsLikeUserIdArticleIdCompoundUniqueInput
    AND?: NewsLikeWhereInput | NewsLikeWhereInput[]
    OR?: NewsLikeWhereInput[]
    NOT?: NewsLikeWhereInput | NewsLikeWhereInput[]
    userId?: UuidFilter<"NewsLike"> | string
    articleId?: UuidFilter<"NewsLike"> | string
    createdAt?: DateTimeFilter<"NewsLike"> | Date | string
    article?: XOR<NewsArticleScalarRelationFilter, NewsArticleWhereInput>
  }, "id" | "userId_articleId">

  export type NewsLikeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
    _count?: NewsLikeCountOrderByAggregateInput
    _max?: NewsLikeMaxOrderByAggregateInput
    _min?: NewsLikeMinOrderByAggregateInput
  }

  export type NewsLikeScalarWhereWithAggregatesInput = {
    AND?: NewsLikeScalarWhereWithAggregatesInput | NewsLikeScalarWhereWithAggregatesInput[]
    OR?: NewsLikeScalarWhereWithAggregatesInput[]
    NOT?: NewsLikeScalarWhereWithAggregatesInput | NewsLikeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"NewsLike"> | string
    userId?: UuidWithAggregatesFilter<"NewsLike"> | string
    articleId?: UuidWithAggregatesFilter<"NewsLike"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NewsLike"> | Date | string
  }

  export type AppUserCreateInput = {
    id?: string
    username: string
    password: string
    name: string
    surname: string
    birthdate: Date | string
    email: string
    role?: string | null
    phone_number?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    newsArticles?: NewsArticleCreateNestedManyWithoutAuthorInput
    GdrSessionRegistrations?: GdrSessionRegistrationCreateNestedManyWithoutUserInput
    mainEventRegistrations?: MainEventRegistrationCreateNestedManyWithoutUserInput
  }

  export type AppUserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    name: string
    surname: string
    birthdate: Date | string
    email: string
    role?: string | null
    phone_number?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    newsArticles?: NewsArticleUncheckedCreateNestedManyWithoutAuthorInput
    GdrSessionRegistrations?: GdrSessionRegistrationUncheckedCreateNestedManyWithoutUserInput
    mainEventRegistrations?: MainEventRegistrationUncheckedCreateNestedManyWithoutUserInput
  }

  export type AppUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    newsArticles?: NewsArticleUpdateManyWithoutAuthorNestedInput
    GdrSessionRegistrations?: GdrSessionRegistrationUpdateManyWithoutUserNestedInput
    mainEventRegistrations?: MainEventRegistrationUpdateManyWithoutUserNestedInput
  }

  export type AppUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    newsArticles?: NewsArticleUncheckedUpdateManyWithoutAuthorNestedInput
    GdrSessionRegistrations?: GdrSessionRegistrationUncheckedUpdateManyWithoutUserNestedInput
    mainEventRegistrations?: MainEventRegistrationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AppUserCreateManyInput = {
    id?: string
    username: string
    password: string
    name: string
    surname: string
    birthdate: Date | string
    email: string
    role?: string | null
    phone_number?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type AppUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GdrSessionCreateInput = {
    id?: string
    title: string
    description: string
    urlImg?: string | null
    start: Date | string
    end: Date | string
    master: string
    availableSeats: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gdrSessionRegistrations?: GdrSessionRegistrationCreateNestedManyWithoutSessionInput
  }

  export type GdrSessionUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    urlImg?: string | null
    start: Date | string
    end: Date | string
    master: string
    availableSeats: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gdrSessionRegistrations?: GdrSessionRegistrationUncheckedCreateNestedManyWithoutSessionInput
  }

  export type GdrSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    urlImg?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    master?: StringFieldUpdateOperationsInput | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gdrSessionRegistrations?: GdrSessionRegistrationUpdateManyWithoutSessionNestedInput
  }

  export type GdrSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    urlImg?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    master?: StringFieldUpdateOperationsInput | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gdrSessionRegistrations?: GdrSessionRegistrationUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type GdrSessionCreateManyInput = {
    id?: string
    title: string
    description: string
    urlImg?: string | null
    start: Date | string
    end: Date | string
    master: string
    availableSeats: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type GdrSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    urlImg?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    master?: StringFieldUpdateOperationsInput | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GdrSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    urlImg?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    master?: StringFieldUpdateOperationsInput | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GdrSessionRegistrationCreateInput = {
    id?: string
    createdAt?: Date | string
    user: AppUserCreateNestedOneWithoutGdrSessionRegistrationsInput
    session: GdrSessionCreateNestedOneWithoutGdrSessionRegistrationsInput
  }

  export type GdrSessionRegistrationUncheckedCreateInput = {
    id?: string
    userId: string
    sessionId: string
    createdAt?: Date | string
  }

  export type GdrSessionRegistrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: AppUserUpdateOneRequiredWithoutGdrSessionRegistrationsNestedInput
    session?: GdrSessionUpdateOneRequiredWithoutGdrSessionRegistrationsNestedInput
  }

  export type GdrSessionRegistrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GdrSessionRegistrationCreateManyInput = {
    id?: string
    userId: string
    sessionId: string
    createdAt?: Date | string
  }

  export type GdrSessionRegistrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GdrSessionRegistrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MainEventCreateInput = {
    id?: string
    title: string
    description: string
    urlImg?: string | null
    start: Date | string
    end: Date | string
    location: string
    price?: number
    maxSeats: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    note: string
    mainEventRegistrations?: MainEventRegistrationCreateNestedManyWithoutEventInput
  }

  export type MainEventUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    urlImg?: string | null
    start: Date | string
    end: Date | string
    location: string
    price?: number
    maxSeats: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    note: string
    mainEventRegistrations?: MainEventRegistrationUncheckedCreateNestedManyWithoutEventInput
  }

  export type MainEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    urlImg?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    maxSeats?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: StringFieldUpdateOperationsInput | string
    mainEventRegistrations?: MainEventRegistrationUpdateManyWithoutEventNestedInput
  }

  export type MainEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    urlImg?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    maxSeats?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: StringFieldUpdateOperationsInput | string
    mainEventRegistrations?: MainEventRegistrationUncheckedUpdateManyWithoutEventNestedInput
  }

  export type MainEventCreateManyInput = {
    id?: string
    title: string
    description: string
    urlImg?: string | null
    start: Date | string
    end: Date | string
    location: string
    price?: number
    maxSeats: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    note: string
  }

  export type MainEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    urlImg?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    maxSeats?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: StringFieldUpdateOperationsInput | string
  }

  export type MainEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    urlImg?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    maxSeats?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: StringFieldUpdateOperationsInput | string
  }

  export type MainEventRegistrationCreateInput = {
    id?: string
    createdAt?: Date | string
    user: AppUserCreateNestedOneWithoutMainEventRegistrationsInput
    event: MainEventCreateNestedOneWithoutMainEventRegistrationsInput
  }

  export type MainEventRegistrationUncheckedCreateInput = {
    id?: string
    userId: string
    eventId: string
    createdAt?: Date | string
  }

  export type MainEventRegistrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: AppUserUpdateOneRequiredWithoutMainEventRegistrationsNestedInput
    event?: MainEventUpdateOneRequiredWithoutMainEventRegistrationsNestedInput
  }

  export type MainEventRegistrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MainEventRegistrationCreateManyInput = {
    id?: string
    userId: string
    eventId: string
    createdAt?: Date | string
  }

  export type MainEventRegistrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MainEventRegistrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoggerIDMLCreateInput = {
    id?: string
    IDML: string
    description: string
    language: string
    created_at?: Date | string | null
  }

  export type LoggerIDMLUncheckedCreateInput = {
    id?: string
    IDML: string
    description: string
    language: string
    created_at?: Date | string | null
  }

  export type LoggerIDMLUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    IDML?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LoggerIDMLUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    IDML?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LoggerIDMLCreateManyInput = {
    id?: string
    IDML: string
    description: string
    language: string
    created_at?: Date | string | null
  }

  export type LoggerIDMLUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    IDML?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LoggerIDMLUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    IDML?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NewsArticleCreateInput = {
    id?: string
    title: string
    content: string
    imageUrl?: string | null
    publishedAt?: Date | string
    shares?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: NewsLikeCreateNestedManyWithoutArticleInput
    author: AppUserCreateNestedOneWithoutNewsArticlesInput
  }

  export type NewsArticleUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    imageUrl?: string | null
    publishedAt?: Date | string
    shares?: number
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: NewsLikeUncheckedCreateNestedManyWithoutArticleInput
  }

  export type NewsArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shares?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: NewsLikeUpdateManyWithoutArticleNestedInput
    author?: AppUserUpdateOneRequiredWithoutNewsArticlesNestedInput
  }

  export type NewsArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shares?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: NewsLikeUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type NewsArticleCreateManyInput = {
    id?: string
    title: string
    content: string
    imageUrl?: string | null
    publishedAt?: Date | string
    shares?: number
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shares?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shares?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsLikeCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    article: NewsArticleCreateNestedOneWithoutLikesInput
  }

  export type NewsLikeUncheckedCreateInput = {
    id?: string
    userId: string
    articleId: string
    createdAt?: Date | string
  }

  export type NewsLikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: NewsArticleUpdateOneRequiredWithoutLikesNestedInput
  }

  export type NewsLikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsLikeCreateManyInput = {
    id?: string
    userId: string
    articleId: string
    createdAt?: Date | string
  }

  export type NewsLikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsLikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NewsArticleListRelationFilter = {
    every?: NewsArticleWhereInput
    some?: NewsArticleWhereInput
    none?: NewsArticleWhereInput
  }

  export type GdrSessionRegistrationListRelationFilter = {
    every?: GdrSessionRegistrationWhereInput
    some?: GdrSessionRegistrationWhereInput
    none?: GdrSessionRegistrationWhereInput
  }

  export type MainEventRegistrationListRelationFilter = {
    every?: MainEventRegistrationWhereInput
    some?: MainEventRegistrationWhereInput
    none?: MainEventRegistrationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NewsArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GdrSessionRegistrationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MainEventRegistrationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppUserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    birthdate?: SortOrder
    email?: SortOrder
    role?: SortOrder
    phone_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AppUserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    birthdate?: SortOrder
    email?: SortOrder
    role?: SortOrder
    phone_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AppUserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    birthdate?: SortOrder
    email?: SortOrder
    role?: SortOrder
    phone_number?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type GdrSessionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    urlImg?: SortOrder
    start?: SortOrder
    end?: SortOrder
    master?: SortOrder
    availableSeats?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type GdrSessionAvgOrderByAggregateInput = {
    availableSeats?: SortOrder
  }

  export type GdrSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    urlImg?: SortOrder
    start?: SortOrder
    end?: SortOrder
    master?: SortOrder
    availableSeats?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type GdrSessionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    urlImg?: SortOrder
    start?: SortOrder
    end?: SortOrder
    master?: SortOrder
    availableSeats?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type GdrSessionSumOrderByAggregateInput = {
    availableSeats?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type AppUserScalarRelationFilter = {
    is?: AppUserWhereInput
    isNot?: AppUserWhereInput
  }

  export type GdrSessionScalarRelationFilter = {
    is?: GdrSessionWhereInput
    isNot?: GdrSessionWhereInput
  }

  export type GdrSessionRegistrationUserIdSessionIdCompoundUniqueInput = {
    userId: string
    sessionId: string
  }

  export type GdrSessionRegistrationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    createdAt?: SortOrder
  }

  export type GdrSessionRegistrationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    createdAt?: SortOrder
  }

  export type GdrSessionRegistrationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    createdAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MainEventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    urlImg?: SortOrder
    start?: SortOrder
    end?: SortOrder
    location?: SortOrder
    price?: SortOrder
    maxSeats?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    note?: SortOrder
  }

  export type MainEventAvgOrderByAggregateInput = {
    price?: SortOrder
    maxSeats?: SortOrder
  }

  export type MainEventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    urlImg?: SortOrder
    start?: SortOrder
    end?: SortOrder
    location?: SortOrder
    price?: SortOrder
    maxSeats?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    note?: SortOrder
  }

  export type MainEventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    urlImg?: SortOrder
    start?: SortOrder
    end?: SortOrder
    location?: SortOrder
    price?: SortOrder
    maxSeats?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    note?: SortOrder
  }

  export type MainEventSumOrderByAggregateInput = {
    price?: SortOrder
    maxSeats?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type MainEventScalarRelationFilter = {
    is?: MainEventWhereInput
    isNot?: MainEventWhereInput
  }

  export type MainEventRegistrationUserIdEventIdCompoundUniqueInput = {
    userId: string
    eventId: string
  }

  export type MainEventRegistrationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
  }

  export type MainEventRegistrationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
  }

  export type MainEventRegistrationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
  }

  export type LoggerIDMLIDMLLanguageCompoundUniqueInput = {
    IDML: string
    language: string
  }

  export type LoggerIDMLCountOrderByAggregateInput = {
    id?: SortOrder
    IDML?: SortOrder
    description?: SortOrder
    language?: SortOrder
    created_at?: SortOrder
  }

  export type LoggerIDMLMaxOrderByAggregateInput = {
    id?: SortOrder
    IDML?: SortOrder
    description?: SortOrder
    language?: SortOrder
    created_at?: SortOrder
  }

  export type LoggerIDMLMinOrderByAggregateInput = {
    id?: SortOrder
    IDML?: SortOrder
    description?: SortOrder
    language?: SortOrder
    created_at?: SortOrder
  }

  export type NewsLikeListRelationFilter = {
    every?: NewsLikeWhereInput
    some?: NewsLikeWhereInput
    none?: NewsLikeWhereInput
  }

  export type NewsLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsArticleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    publishedAt?: SortOrder
    shares?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsArticleAvgOrderByAggregateInput = {
    shares?: SortOrder
  }

  export type NewsArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    publishedAt?: SortOrder
    shares?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsArticleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    publishedAt?: SortOrder
    shares?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsArticleSumOrderByAggregateInput = {
    shares?: SortOrder
  }

  export type NewsArticleScalarRelationFilter = {
    is?: NewsArticleWhereInput
    isNot?: NewsArticleWhereInput
  }

  export type NewsLikeUserIdArticleIdCompoundUniqueInput = {
    userId: string
    articleId: string
  }

  export type NewsLikeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsLikeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsLikeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsArticleCreateNestedManyWithoutAuthorInput = {
    create?: XOR<NewsArticleCreateWithoutAuthorInput, NewsArticleUncheckedCreateWithoutAuthorInput> | NewsArticleCreateWithoutAuthorInput[] | NewsArticleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsArticleCreateOrConnectWithoutAuthorInput | NewsArticleCreateOrConnectWithoutAuthorInput[]
    createMany?: NewsArticleCreateManyAuthorInputEnvelope
    connect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
  }

  export type GdrSessionRegistrationCreateNestedManyWithoutUserInput = {
    create?: XOR<GdrSessionRegistrationCreateWithoutUserInput, GdrSessionRegistrationUncheckedCreateWithoutUserInput> | GdrSessionRegistrationCreateWithoutUserInput[] | GdrSessionRegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GdrSessionRegistrationCreateOrConnectWithoutUserInput | GdrSessionRegistrationCreateOrConnectWithoutUserInput[]
    createMany?: GdrSessionRegistrationCreateManyUserInputEnvelope
    connect?: GdrSessionRegistrationWhereUniqueInput | GdrSessionRegistrationWhereUniqueInput[]
  }

  export type MainEventRegistrationCreateNestedManyWithoutUserInput = {
    create?: XOR<MainEventRegistrationCreateWithoutUserInput, MainEventRegistrationUncheckedCreateWithoutUserInput> | MainEventRegistrationCreateWithoutUserInput[] | MainEventRegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MainEventRegistrationCreateOrConnectWithoutUserInput | MainEventRegistrationCreateOrConnectWithoutUserInput[]
    createMany?: MainEventRegistrationCreateManyUserInputEnvelope
    connect?: MainEventRegistrationWhereUniqueInput | MainEventRegistrationWhereUniqueInput[]
  }

  export type NewsArticleUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<NewsArticleCreateWithoutAuthorInput, NewsArticleUncheckedCreateWithoutAuthorInput> | NewsArticleCreateWithoutAuthorInput[] | NewsArticleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsArticleCreateOrConnectWithoutAuthorInput | NewsArticleCreateOrConnectWithoutAuthorInput[]
    createMany?: NewsArticleCreateManyAuthorInputEnvelope
    connect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
  }

  export type GdrSessionRegistrationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GdrSessionRegistrationCreateWithoutUserInput, GdrSessionRegistrationUncheckedCreateWithoutUserInput> | GdrSessionRegistrationCreateWithoutUserInput[] | GdrSessionRegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GdrSessionRegistrationCreateOrConnectWithoutUserInput | GdrSessionRegistrationCreateOrConnectWithoutUserInput[]
    createMany?: GdrSessionRegistrationCreateManyUserInputEnvelope
    connect?: GdrSessionRegistrationWhereUniqueInput | GdrSessionRegistrationWhereUniqueInput[]
  }

  export type MainEventRegistrationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MainEventRegistrationCreateWithoutUserInput, MainEventRegistrationUncheckedCreateWithoutUserInput> | MainEventRegistrationCreateWithoutUserInput[] | MainEventRegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MainEventRegistrationCreateOrConnectWithoutUserInput | MainEventRegistrationCreateOrConnectWithoutUserInput[]
    createMany?: MainEventRegistrationCreateManyUserInputEnvelope
    connect?: MainEventRegistrationWhereUniqueInput | MainEventRegistrationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NewsArticleUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<NewsArticleCreateWithoutAuthorInput, NewsArticleUncheckedCreateWithoutAuthorInput> | NewsArticleCreateWithoutAuthorInput[] | NewsArticleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsArticleCreateOrConnectWithoutAuthorInput | NewsArticleCreateOrConnectWithoutAuthorInput[]
    upsert?: NewsArticleUpsertWithWhereUniqueWithoutAuthorInput | NewsArticleUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: NewsArticleCreateManyAuthorInputEnvelope
    set?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    disconnect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    delete?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    connect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    update?: NewsArticleUpdateWithWhereUniqueWithoutAuthorInput | NewsArticleUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: NewsArticleUpdateManyWithWhereWithoutAuthorInput | NewsArticleUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: NewsArticleScalarWhereInput | NewsArticleScalarWhereInput[]
  }

  export type GdrSessionRegistrationUpdateManyWithoutUserNestedInput = {
    create?: XOR<GdrSessionRegistrationCreateWithoutUserInput, GdrSessionRegistrationUncheckedCreateWithoutUserInput> | GdrSessionRegistrationCreateWithoutUserInput[] | GdrSessionRegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GdrSessionRegistrationCreateOrConnectWithoutUserInput | GdrSessionRegistrationCreateOrConnectWithoutUserInput[]
    upsert?: GdrSessionRegistrationUpsertWithWhereUniqueWithoutUserInput | GdrSessionRegistrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GdrSessionRegistrationCreateManyUserInputEnvelope
    set?: GdrSessionRegistrationWhereUniqueInput | GdrSessionRegistrationWhereUniqueInput[]
    disconnect?: GdrSessionRegistrationWhereUniqueInput | GdrSessionRegistrationWhereUniqueInput[]
    delete?: GdrSessionRegistrationWhereUniqueInput | GdrSessionRegistrationWhereUniqueInput[]
    connect?: GdrSessionRegistrationWhereUniqueInput | GdrSessionRegistrationWhereUniqueInput[]
    update?: GdrSessionRegistrationUpdateWithWhereUniqueWithoutUserInput | GdrSessionRegistrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GdrSessionRegistrationUpdateManyWithWhereWithoutUserInput | GdrSessionRegistrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GdrSessionRegistrationScalarWhereInput | GdrSessionRegistrationScalarWhereInput[]
  }

  export type MainEventRegistrationUpdateManyWithoutUserNestedInput = {
    create?: XOR<MainEventRegistrationCreateWithoutUserInput, MainEventRegistrationUncheckedCreateWithoutUserInput> | MainEventRegistrationCreateWithoutUserInput[] | MainEventRegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MainEventRegistrationCreateOrConnectWithoutUserInput | MainEventRegistrationCreateOrConnectWithoutUserInput[]
    upsert?: MainEventRegistrationUpsertWithWhereUniqueWithoutUserInput | MainEventRegistrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MainEventRegistrationCreateManyUserInputEnvelope
    set?: MainEventRegistrationWhereUniqueInput | MainEventRegistrationWhereUniqueInput[]
    disconnect?: MainEventRegistrationWhereUniqueInput | MainEventRegistrationWhereUniqueInput[]
    delete?: MainEventRegistrationWhereUniqueInput | MainEventRegistrationWhereUniqueInput[]
    connect?: MainEventRegistrationWhereUniqueInput | MainEventRegistrationWhereUniqueInput[]
    update?: MainEventRegistrationUpdateWithWhereUniqueWithoutUserInput | MainEventRegistrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MainEventRegistrationUpdateManyWithWhereWithoutUserInput | MainEventRegistrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MainEventRegistrationScalarWhereInput | MainEventRegistrationScalarWhereInput[]
  }

  export type NewsArticleUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<NewsArticleCreateWithoutAuthorInput, NewsArticleUncheckedCreateWithoutAuthorInput> | NewsArticleCreateWithoutAuthorInput[] | NewsArticleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsArticleCreateOrConnectWithoutAuthorInput | NewsArticleCreateOrConnectWithoutAuthorInput[]
    upsert?: NewsArticleUpsertWithWhereUniqueWithoutAuthorInput | NewsArticleUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: NewsArticleCreateManyAuthorInputEnvelope
    set?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    disconnect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    delete?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    connect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    update?: NewsArticleUpdateWithWhereUniqueWithoutAuthorInput | NewsArticleUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: NewsArticleUpdateManyWithWhereWithoutAuthorInput | NewsArticleUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: NewsArticleScalarWhereInput | NewsArticleScalarWhereInput[]
  }

  export type GdrSessionRegistrationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GdrSessionRegistrationCreateWithoutUserInput, GdrSessionRegistrationUncheckedCreateWithoutUserInput> | GdrSessionRegistrationCreateWithoutUserInput[] | GdrSessionRegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GdrSessionRegistrationCreateOrConnectWithoutUserInput | GdrSessionRegistrationCreateOrConnectWithoutUserInput[]
    upsert?: GdrSessionRegistrationUpsertWithWhereUniqueWithoutUserInput | GdrSessionRegistrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GdrSessionRegistrationCreateManyUserInputEnvelope
    set?: GdrSessionRegistrationWhereUniqueInput | GdrSessionRegistrationWhereUniqueInput[]
    disconnect?: GdrSessionRegistrationWhereUniqueInput | GdrSessionRegistrationWhereUniqueInput[]
    delete?: GdrSessionRegistrationWhereUniqueInput | GdrSessionRegistrationWhereUniqueInput[]
    connect?: GdrSessionRegistrationWhereUniqueInput | GdrSessionRegistrationWhereUniqueInput[]
    update?: GdrSessionRegistrationUpdateWithWhereUniqueWithoutUserInput | GdrSessionRegistrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GdrSessionRegistrationUpdateManyWithWhereWithoutUserInput | GdrSessionRegistrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GdrSessionRegistrationScalarWhereInput | GdrSessionRegistrationScalarWhereInput[]
  }

  export type MainEventRegistrationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MainEventRegistrationCreateWithoutUserInput, MainEventRegistrationUncheckedCreateWithoutUserInput> | MainEventRegistrationCreateWithoutUserInput[] | MainEventRegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MainEventRegistrationCreateOrConnectWithoutUserInput | MainEventRegistrationCreateOrConnectWithoutUserInput[]
    upsert?: MainEventRegistrationUpsertWithWhereUniqueWithoutUserInput | MainEventRegistrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MainEventRegistrationCreateManyUserInputEnvelope
    set?: MainEventRegistrationWhereUniqueInput | MainEventRegistrationWhereUniqueInput[]
    disconnect?: MainEventRegistrationWhereUniqueInput | MainEventRegistrationWhereUniqueInput[]
    delete?: MainEventRegistrationWhereUniqueInput | MainEventRegistrationWhereUniqueInput[]
    connect?: MainEventRegistrationWhereUniqueInput | MainEventRegistrationWhereUniqueInput[]
    update?: MainEventRegistrationUpdateWithWhereUniqueWithoutUserInput | MainEventRegistrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MainEventRegistrationUpdateManyWithWhereWithoutUserInput | MainEventRegistrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MainEventRegistrationScalarWhereInput | MainEventRegistrationScalarWhereInput[]
  }

  export type GdrSessionRegistrationCreateNestedManyWithoutSessionInput = {
    create?: XOR<GdrSessionRegistrationCreateWithoutSessionInput, GdrSessionRegistrationUncheckedCreateWithoutSessionInput> | GdrSessionRegistrationCreateWithoutSessionInput[] | GdrSessionRegistrationUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: GdrSessionRegistrationCreateOrConnectWithoutSessionInput | GdrSessionRegistrationCreateOrConnectWithoutSessionInput[]
    createMany?: GdrSessionRegistrationCreateManySessionInputEnvelope
    connect?: GdrSessionRegistrationWhereUniqueInput | GdrSessionRegistrationWhereUniqueInput[]
  }

  export type GdrSessionRegistrationUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<GdrSessionRegistrationCreateWithoutSessionInput, GdrSessionRegistrationUncheckedCreateWithoutSessionInput> | GdrSessionRegistrationCreateWithoutSessionInput[] | GdrSessionRegistrationUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: GdrSessionRegistrationCreateOrConnectWithoutSessionInput | GdrSessionRegistrationCreateOrConnectWithoutSessionInput[]
    createMany?: GdrSessionRegistrationCreateManySessionInputEnvelope
    connect?: GdrSessionRegistrationWhereUniqueInput | GdrSessionRegistrationWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GdrSessionRegistrationUpdateManyWithoutSessionNestedInput = {
    create?: XOR<GdrSessionRegistrationCreateWithoutSessionInput, GdrSessionRegistrationUncheckedCreateWithoutSessionInput> | GdrSessionRegistrationCreateWithoutSessionInput[] | GdrSessionRegistrationUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: GdrSessionRegistrationCreateOrConnectWithoutSessionInput | GdrSessionRegistrationCreateOrConnectWithoutSessionInput[]
    upsert?: GdrSessionRegistrationUpsertWithWhereUniqueWithoutSessionInput | GdrSessionRegistrationUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: GdrSessionRegistrationCreateManySessionInputEnvelope
    set?: GdrSessionRegistrationWhereUniqueInput | GdrSessionRegistrationWhereUniqueInput[]
    disconnect?: GdrSessionRegistrationWhereUniqueInput | GdrSessionRegistrationWhereUniqueInput[]
    delete?: GdrSessionRegistrationWhereUniqueInput | GdrSessionRegistrationWhereUniqueInput[]
    connect?: GdrSessionRegistrationWhereUniqueInput | GdrSessionRegistrationWhereUniqueInput[]
    update?: GdrSessionRegistrationUpdateWithWhereUniqueWithoutSessionInput | GdrSessionRegistrationUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: GdrSessionRegistrationUpdateManyWithWhereWithoutSessionInput | GdrSessionRegistrationUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: GdrSessionRegistrationScalarWhereInput | GdrSessionRegistrationScalarWhereInput[]
  }

  export type GdrSessionRegistrationUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<GdrSessionRegistrationCreateWithoutSessionInput, GdrSessionRegistrationUncheckedCreateWithoutSessionInput> | GdrSessionRegistrationCreateWithoutSessionInput[] | GdrSessionRegistrationUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: GdrSessionRegistrationCreateOrConnectWithoutSessionInput | GdrSessionRegistrationCreateOrConnectWithoutSessionInput[]
    upsert?: GdrSessionRegistrationUpsertWithWhereUniqueWithoutSessionInput | GdrSessionRegistrationUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: GdrSessionRegistrationCreateManySessionInputEnvelope
    set?: GdrSessionRegistrationWhereUniqueInput | GdrSessionRegistrationWhereUniqueInput[]
    disconnect?: GdrSessionRegistrationWhereUniqueInput | GdrSessionRegistrationWhereUniqueInput[]
    delete?: GdrSessionRegistrationWhereUniqueInput | GdrSessionRegistrationWhereUniqueInput[]
    connect?: GdrSessionRegistrationWhereUniqueInput | GdrSessionRegistrationWhereUniqueInput[]
    update?: GdrSessionRegistrationUpdateWithWhereUniqueWithoutSessionInput | GdrSessionRegistrationUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: GdrSessionRegistrationUpdateManyWithWhereWithoutSessionInput | GdrSessionRegistrationUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: GdrSessionRegistrationScalarWhereInput | GdrSessionRegistrationScalarWhereInput[]
  }

  export type AppUserCreateNestedOneWithoutGdrSessionRegistrationsInput = {
    create?: XOR<AppUserCreateWithoutGdrSessionRegistrationsInput, AppUserUncheckedCreateWithoutGdrSessionRegistrationsInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutGdrSessionRegistrationsInput
    connect?: AppUserWhereUniqueInput
  }

  export type GdrSessionCreateNestedOneWithoutGdrSessionRegistrationsInput = {
    create?: XOR<GdrSessionCreateWithoutGdrSessionRegistrationsInput, GdrSessionUncheckedCreateWithoutGdrSessionRegistrationsInput>
    connectOrCreate?: GdrSessionCreateOrConnectWithoutGdrSessionRegistrationsInput
    connect?: GdrSessionWhereUniqueInput
  }

  export type AppUserUpdateOneRequiredWithoutGdrSessionRegistrationsNestedInput = {
    create?: XOR<AppUserCreateWithoutGdrSessionRegistrationsInput, AppUserUncheckedCreateWithoutGdrSessionRegistrationsInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutGdrSessionRegistrationsInput
    upsert?: AppUserUpsertWithoutGdrSessionRegistrationsInput
    connect?: AppUserWhereUniqueInput
    update?: XOR<XOR<AppUserUpdateToOneWithWhereWithoutGdrSessionRegistrationsInput, AppUserUpdateWithoutGdrSessionRegistrationsInput>, AppUserUncheckedUpdateWithoutGdrSessionRegistrationsInput>
  }

  export type GdrSessionUpdateOneRequiredWithoutGdrSessionRegistrationsNestedInput = {
    create?: XOR<GdrSessionCreateWithoutGdrSessionRegistrationsInput, GdrSessionUncheckedCreateWithoutGdrSessionRegistrationsInput>
    connectOrCreate?: GdrSessionCreateOrConnectWithoutGdrSessionRegistrationsInput
    upsert?: GdrSessionUpsertWithoutGdrSessionRegistrationsInput
    connect?: GdrSessionWhereUniqueInput
    update?: XOR<XOR<GdrSessionUpdateToOneWithWhereWithoutGdrSessionRegistrationsInput, GdrSessionUpdateWithoutGdrSessionRegistrationsInput>, GdrSessionUncheckedUpdateWithoutGdrSessionRegistrationsInput>
  }

  export type MainEventRegistrationCreateNestedManyWithoutEventInput = {
    create?: XOR<MainEventRegistrationCreateWithoutEventInput, MainEventRegistrationUncheckedCreateWithoutEventInput> | MainEventRegistrationCreateWithoutEventInput[] | MainEventRegistrationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MainEventRegistrationCreateOrConnectWithoutEventInput | MainEventRegistrationCreateOrConnectWithoutEventInput[]
    createMany?: MainEventRegistrationCreateManyEventInputEnvelope
    connect?: MainEventRegistrationWhereUniqueInput | MainEventRegistrationWhereUniqueInput[]
  }

  export type MainEventRegistrationUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<MainEventRegistrationCreateWithoutEventInput, MainEventRegistrationUncheckedCreateWithoutEventInput> | MainEventRegistrationCreateWithoutEventInput[] | MainEventRegistrationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MainEventRegistrationCreateOrConnectWithoutEventInput | MainEventRegistrationCreateOrConnectWithoutEventInput[]
    createMany?: MainEventRegistrationCreateManyEventInputEnvelope
    connect?: MainEventRegistrationWhereUniqueInput | MainEventRegistrationWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MainEventRegistrationUpdateManyWithoutEventNestedInput = {
    create?: XOR<MainEventRegistrationCreateWithoutEventInput, MainEventRegistrationUncheckedCreateWithoutEventInput> | MainEventRegistrationCreateWithoutEventInput[] | MainEventRegistrationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MainEventRegistrationCreateOrConnectWithoutEventInput | MainEventRegistrationCreateOrConnectWithoutEventInput[]
    upsert?: MainEventRegistrationUpsertWithWhereUniqueWithoutEventInput | MainEventRegistrationUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: MainEventRegistrationCreateManyEventInputEnvelope
    set?: MainEventRegistrationWhereUniqueInput | MainEventRegistrationWhereUniqueInput[]
    disconnect?: MainEventRegistrationWhereUniqueInput | MainEventRegistrationWhereUniqueInput[]
    delete?: MainEventRegistrationWhereUniqueInput | MainEventRegistrationWhereUniqueInput[]
    connect?: MainEventRegistrationWhereUniqueInput | MainEventRegistrationWhereUniqueInput[]
    update?: MainEventRegistrationUpdateWithWhereUniqueWithoutEventInput | MainEventRegistrationUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: MainEventRegistrationUpdateManyWithWhereWithoutEventInput | MainEventRegistrationUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: MainEventRegistrationScalarWhereInput | MainEventRegistrationScalarWhereInput[]
  }

  export type MainEventRegistrationUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<MainEventRegistrationCreateWithoutEventInput, MainEventRegistrationUncheckedCreateWithoutEventInput> | MainEventRegistrationCreateWithoutEventInput[] | MainEventRegistrationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MainEventRegistrationCreateOrConnectWithoutEventInput | MainEventRegistrationCreateOrConnectWithoutEventInput[]
    upsert?: MainEventRegistrationUpsertWithWhereUniqueWithoutEventInput | MainEventRegistrationUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: MainEventRegistrationCreateManyEventInputEnvelope
    set?: MainEventRegistrationWhereUniqueInput | MainEventRegistrationWhereUniqueInput[]
    disconnect?: MainEventRegistrationWhereUniqueInput | MainEventRegistrationWhereUniqueInput[]
    delete?: MainEventRegistrationWhereUniqueInput | MainEventRegistrationWhereUniqueInput[]
    connect?: MainEventRegistrationWhereUniqueInput | MainEventRegistrationWhereUniqueInput[]
    update?: MainEventRegistrationUpdateWithWhereUniqueWithoutEventInput | MainEventRegistrationUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: MainEventRegistrationUpdateManyWithWhereWithoutEventInput | MainEventRegistrationUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: MainEventRegistrationScalarWhereInput | MainEventRegistrationScalarWhereInput[]
  }

  export type AppUserCreateNestedOneWithoutMainEventRegistrationsInput = {
    create?: XOR<AppUserCreateWithoutMainEventRegistrationsInput, AppUserUncheckedCreateWithoutMainEventRegistrationsInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutMainEventRegistrationsInput
    connect?: AppUserWhereUniqueInput
  }

  export type MainEventCreateNestedOneWithoutMainEventRegistrationsInput = {
    create?: XOR<MainEventCreateWithoutMainEventRegistrationsInput, MainEventUncheckedCreateWithoutMainEventRegistrationsInput>
    connectOrCreate?: MainEventCreateOrConnectWithoutMainEventRegistrationsInput
    connect?: MainEventWhereUniqueInput
  }

  export type AppUserUpdateOneRequiredWithoutMainEventRegistrationsNestedInput = {
    create?: XOR<AppUserCreateWithoutMainEventRegistrationsInput, AppUserUncheckedCreateWithoutMainEventRegistrationsInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutMainEventRegistrationsInput
    upsert?: AppUserUpsertWithoutMainEventRegistrationsInput
    connect?: AppUserWhereUniqueInput
    update?: XOR<XOR<AppUserUpdateToOneWithWhereWithoutMainEventRegistrationsInput, AppUserUpdateWithoutMainEventRegistrationsInput>, AppUserUncheckedUpdateWithoutMainEventRegistrationsInput>
  }

  export type MainEventUpdateOneRequiredWithoutMainEventRegistrationsNestedInput = {
    create?: XOR<MainEventCreateWithoutMainEventRegistrationsInput, MainEventUncheckedCreateWithoutMainEventRegistrationsInput>
    connectOrCreate?: MainEventCreateOrConnectWithoutMainEventRegistrationsInput
    upsert?: MainEventUpsertWithoutMainEventRegistrationsInput
    connect?: MainEventWhereUniqueInput
    update?: XOR<XOR<MainEventUpdateToOneWithWhereWithoutMainEventRegistrationsInput, MainEventUpdateWithoutMainEventRegistrationsInput>, MainEventUncheckedUpdateWithoutMainEventRegistrationsInput>
  }

  export type NewsLikeCreateNestedManyWithoutArticleInput = {
    create?: XOR<NewsLikeCreateWithoutArticleInput, NewsLikeUncheckedCreateWithoutArticleInput> | NewsLikeCreateWithoutArticleInput[] | NewsLikeUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: NewsLikeCreateOrConnectWithoutArticleInput | NewsLikeCreateOrConnectWithoutArticleInput[]
    createMany?: NewsLikeCreateManyArticleInputEnvelope
    connect?: NewsLikeWhereUniqueInput | NewsLikeWhereUniqueInput[]
  }

  export type AppUserCreateNestedOneWithoutNewsArticlesInput = {
    create?: XOR<AppUserCreateWithoutNewsArticlesInput, AppUserUncheckedCreateWithoutNewsArticlesInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutNewsArticlesInput
    connect?: AppUserWhereUniqueInput
  }

  export type NewsLikeUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<NewsLikeCreateWithoutArticleInput, NewsLikeUncheckedCreateWithoutArticleInput> | NewsLikeCreateWithoutArticleInput[] | NewsLikeUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: NewsLikeCreateOrConnectWithoutArticleInput | NewsLikeCreateOrConnectWithoutArticleInput[]
    createMany?: NewsLikeCreateManyArticleInputEnvelope
    connect?: NewsLikeWhereUniqueInput | NewsLikeWhereUniqueInput[]
  }

  export type NewsLikeUpdateManyWithoutArticleNestedInput = {
    create?: XOR<NewsLikeCreateWithoutArticleInput, NewsLikeUncheckedCreateWithoutArticleInput> | NewsLikeCreateWithoutArticleInput[] | NewsLikeUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: NewsLikeCreateOrConnectWithoutArticleInput | NewsLikeCreateOrConnectWithoutArticleInput[]
    upsert?: NewsLikeUpsertWithWhereUniqueWithoutArticleInput | NewsLikeUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: NewsLikeCreateManyArticleInputEnvelope
    set?: NewsLikeWhereUniqueInput | NewsLikeWhereUniqueInput[]
    disconnect?: NewsLikeWhereUniqueInput | NewsLikeWhereUniqueInput[]
    delete?: NewsLikeWhereUniqueInput | NewsLikeWhereUniqueInput[]
    connect?: NewsLikeWhereUniqueInput | NewsLikeWhereUniqueInput[]
    update?: NewsLikeUpdateWithWhereUniqueWithoutArticleInput | NewsLikeUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: NewsLikeUpdateManyWithWhereWithoutArticleInput | NewsLikeUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: NewsLikeScalarWhereInput | NewsLikeScalarWhereInput[]
  }

  export type AppUserUpdateOneRequiredWithoutNewsArticlesNestedInput = {
    create?: XOR<AppUserCreateWithoutNewsArticlesInput, AppUserUncheckedCreateWithoutNewsArticlesInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutNewsArticlesInput
    upsert?: AppUserUpsertWithoutNewsArticlesInput
    connect?: AppUserWhereUniqueInput
    update?: XOR<XOR<AppUserUpdateToOneWithWhereWithoutNewsArticlesInput, AppUserUpdateWithoutNewsArticlesInput>, AppUserUncheckedUpdateWithoutNewsArticlesInput>
  }

  export type NewsLikeUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<NewsLikeCreateWithoutArticleInput, NewsLikeUncheckedCreateWithoutArticleInput> | NewsLikeCreateWithoutArticleInput[] | NewsLikeUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: NewsLikeCreateOrConnectWithoutArticleInput | NewsLikeCreateOrConnectWithoutArticleInput[]
    upsert?: NewsLikeUpsertWithWhereUniqueWithoutArticleInput | NewsLikeUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: NewsLikeCreateManyArticleInputEnvelope
    set?: NewsLikeWhereUniqueInput | NewsLikeWhereUniqueInput[]
    disconnect?: NewsLikeWhereUniqueInput | NewsLikeWhereUniqueInput[]
    delete?: NewsLikeWhereUniqueInput | NewsLikeWhereUniqueInput[]
    connect?: NewsLikeWhereUniqueInput | NewsLikeWhereUniqueInput[]
    update?: NewsLikeUpdateWithWhereUniqueWithoutArticleInput | NewsLikeUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: NewsLikeUpdateManyWithWhereWithoutArticleInput | NewsLikeUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: NewsLikeScalarWhereInput | NewsLikeScalarWhereInput[]
  }

  export type NewsArticleCreateNestedOneWithoutLikesInput = {
    create?: XOR<NewsArticleCreateWithoutLikesInput, NewsArticleUncheckedCreateWithoutLikesInput>
    connectOrCreate?: NewsArticleCreateOrConnectWithoutLikesInput
    connect?: NewsArticleWhereUniqueInput
  }

  export type NewsArticleUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<NewsArticleCreateWithoutLikesInput, NewsArticleUncheckedCreateWithoutLikesInput>
    connectOrCreate?: NewsArticleCreateOrConnectWithoutLikesInput
    upsert?: NewsArticleUpsertWithoutLikesInput
    connect?: NewsArticleWhereUniqueInput
    update?: XOR<XOR<NewsArticleUpdateToOneWithWhereWithoutLikesInput, NewsArticleUpdateWithoutLikesInput>, NewsArticleUncheckedUpdateWithoutLikesInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NewsArticleCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: string
    imageUrl?: string | null
    publishedAt?: Date | string
    shares?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: NewsLikeCreateNestedManyWithoutArticleInput
  }

  export type NewsArticleUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: string
    imageUrl?: string | null
    publishedAt?: Date | string
    shares?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: NewsLikeUncheckedCreateNestedManyWithoutArticleInput
  }

  export type NewsArticleCreateOrConnectWithoutAuthorInput = {
    where: NewsArticleWhereUniqueInput
    create: XOR<NewsArticleCreateWithoutAuthorInput, NewsArticleUncheckedCreateWithoutAuthorInput>
  }

  export type NewsArticleCreateManyAuthorInputEnvelope = {
    data: NewsArticleCreateManyAuthorInput | NewsArticleCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type GdrSessionRegistrationCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    session: GdrSessionCreateNestedOneWithoutGdrSessionRegistrationsInput
  }

  export type GdrSessionRegistrationUncheckedCreateWithoutUserInput = {
    id?: string
    sessionId: string
    createdAt?: Date | string
  }

  export type GdrSessionRegistrationCreateOrConnectWithoutUserInput = {
    where: GdrSessionRegistrationWhereUniqueInput
    create: XOR<GdrSessionRegistrationCreateWithoutUserInput, GdrSessionRegistrationUncheckedCreateWithoutUserInput>
  }

  export type GdrSessionRegistrationCreateManyUserInputEnvelope = {
    data: GdrSessionRegistrationCreateManyUserInput | GdrSessionRegistrationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MainEventRegistrationCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    event: MainEventCreateNestedOneWithoutMainEventRegistrationsInput
  }

  export type MainEventRegistrationUncheckedCreateWithoutUserInput = {
    id?: string
    eventId: string
    createdAt?: Date | string
  }

  export type MainEventRegistrationCreateOrConnectWithoutUserInput = {
    where: MainEventRegistrationWhereUniqueInput
    create: XOR<MainEventRegistrationCreateWithoutUserInput, MainEventRegistrationUncheckedCreateWithoutUserInput>
  }

  export type MainEventRegistrationCreateManyUserInputEnvelope = {
    data: MainEventRegistrationCreateManyUserInput | MainEventRegistrationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NewsArticleUpsertWithWhereUniqueWithoutAuthorInput = {
    where: NewsArticleWhereUniqueInput
    update: XOR<NewsArticleUpdateWithoutAuthorInput, NewsArticleUncheckedUpdateWithoutAuthorInput>
    create: XOR<NewsArticleCreateWithoutAuthorInput, NewsArticleUncheckedCreateWithoutAuthorInput>
  }

  export type NewsArticleUpdateWithWhereUniqueWithoutAuthorInput = {
    where: NewsArticleWhereUniqueInput
    data: XOR<NewsArticleUpdateWithoutAuthorInput, NewsArticleUncheckedUpdateWithoutAuthorInput>
  }

  export type NewsArticleUpdateManyWithWhereWithoutAuthorInput = {
    where: NewsArticleScalarWhereInput
    data: XOR<NewsArticleUpdateManyMutationInput, NewsArticleUncheckedUpdateManyWithoutAuthorInput>
  }

  export type NewsArticleScalarWhereInput = {
    AND?: NewsArticleScalarWhereInput | NewsArticleScalarWhereInput[]
    OR?: NewsArticleScalarWhereInput[]
    NOT?: NewsArticleScalarWhereInput | NewsArticleScalarWhereInput[]
    id?: UuidFilter<"NewsArticle"> | string
    title?: StringFilter<"NewsArticle"> | string
    content?: StringFilter<"NewsArticle"> | string
    imageUrl?: StringNullableFilter<"NewsArticle"> | string | null
    publishedAt?: DateTimeFilter<"NewsArticle"> | Date | string
    shares?: IntFilter<"NewsArticle"> | number
    authorId?: UuidFilter<"NewsArticle"> | string
    createdAt?: DateTimeFilter<"NewsArticle"> | Date | string
    updatedAt?: DateTimeFilter<"NewsArticle"> | Date | string
  }

  export type GdrSessionRegistrationUpsertWithWhereUniqueWithoutUserInput = {
    where: GdrSessionRegistrationWhereUniqueInput
    update: XOR<GdrSessionRegistrationUpdateWithoutUserInput, GdrSessionRegistrationUncheckedUpdateWithoutUserInput>
    create: XOR<GdrSessionRegistrationCreateWithoutUserInput, GdrSessionRegistrationUncheckedCreateWithoutUserInput>
  }

  export type GdrSessionRegistrationUpdateWithWhereUniqueWithoutUserInput = {
    where: GdrSessionRegistrationWhereUniqueInput
    data: XOR<GdrSessionRegistrationUpdateWithoutUserInput, GdrSessionRegistrationUncheckedUpdateWithoutUserInput>
  }

  export type GdrSessionRegistrationUpdateManyWithWhereWithoutUserInput = {
    where: GdrSessionRegistrationScalarWhereInput
    data: XOR<GdrSessionRegistrationUpdateManyMutationInput, GdrSessionRegistrationUncheckedUpdateManyWithoutUserInput>
  }

  export type GdrSessionRegistrationScalarWhereInput = {
    AND?: GdrSessionRegistrationScalarWhereInput | GdrSessionRegistrationScalarWhereInput[]
    OR?: GdrSessionRegistrationScalarWhereInput[]
    NOT?: GdrSessionRegistrationScalarWhereInput | GdrSessionRegistrationScalarWhereInput[]
    id?: UuidFilter<"GdrSessionRegistration"> | string
    userId?: UuidFilter<"GdrSessionRegistration"> | string
    sessionId?: UuidFilter<"GdrSessionRegistration"> | string
    createdAt?: DateTimeFilter<"GdrSessionRegistration"> | Date | string
  }

  export type MainEventRegistrationUpsertWithWhereUniqueWithoutUserInput = {
    where: MainEventRegistrationWhereUniqueInput
    update: XOR<MainEventRegistrationUpdateWithoutUserInput, MainEventRegistrationUncheckedUpdateWithoutUserInput>
    create: XOR<MainEventRegistrationCreateWithoutUserInput, MainEventRegistrationUncheckedCreateWithoutUserInput>
  }

  export type MainEventRegistrationUpdateWithWhereUniqueWithoutUserInput = {
    where: MainEventRegistrationWhereUniqueInput
    data: XOR<MainEventRegistrationUpdateWithoutUserInput, MainEventRegistrationUncheckedUpdateWithoutUserInput>
  }

  export type MainEventRegistrationUpdateManyWithWhereWithoutUserInput = {
    where: MainEventRegistrationScalarWhereInput
    data: XOR<MainEventRegistrationUpdateManyMutationInput, MainEventRegistrationUncheckedUpdateManyWithoutUserInput>
  }

  export type MainEventRegistrationScalarWhereInput = {
    AND?: MainEventRegistrationScalarWhereInput | MainEventRegistrationScalarWhereInput[]
    OR?: MainEventRegistrationScalarWhereInput[]
    NOT?: MainEventRegistrationScalarWhereInput | MainEventRegistrationScalarWhereInput[]
    id?: UuidFilter<"MainEventRegistration"> | string
    userId?: UuidFilter<"MainEventRegistration"> | string
    eventId?: UuidFilter<"MainEventRegistration"> | string
    createdAt?: DateTimeFilter<"MainEventRegistration"> | Date | string
  }

  export type GdrSessionRegistrationCreateWithoutSessionInput = {
    id?: string
    createdAt?: Date | string
    user: AppUserCreateNestedOneWithoutGdrSessionRegistrationsInput
  }

  export type GdrSessionRegistrationUncheckedCreateWithoutSessionInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type GdrSessionRegistrationCreateOrConnectWithoutSessionInput = {
    where: GdrSessionRegistrationWhereUniqueInput
    create: XOR<GdrSessionRegistrationCreateWithoutSessionInput, GdrSessionRegistrationUncheckedCreateWithoutSessionInput>
  }

  export type GdrSessionRegistrationCreateManySessionInputEnvelope = {
    data: GdrSessionRegistrationCreateManySessionInput | GdrSessionRegistrationCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type GdrSessionRegistrationUpsertWithWhereUniqueWithoutSessionInput = {
    where: GdrSessionRegistrationWhereUniqueInput
    update: XOR<GdrSessionRegistrationUpdateWithoutSessionInput, GdrSessionRegistrationUncheckedUpdateWithoutSessionInput>
    create: XOR<GdrSessionRegistrationCreateWithoutSessionInput, GdrSessionRegistrationUncheckedCreateWithoutSessionInput>
  }

  export type GdrSessionRegistrationUpdateWithWhereUniqueWithoutSessionInput = {
    where: GdrSessionRegistrationWhereUniqueInput
    data: XOR<GdrSessionRegistrationUpdateWithoutSessionInput, GdrSessionRegistrationUncheckedUpdateWithoutSessionInput>
  }

  export type GdrSessionRegistrationUpdateManyWithWhereWithoutSessionInput = {
    where: GdrSessionRegistrationScalarWhereInput
    data: XOR<GdrSessionRegistrationUpdateManyMutationInput, GdrSessionRegistrationUncheckedUpdateManyWithoutSessionInput>
  }

  export type AppUserCreateWithoutGdrSessionRegistrationsInput = {
    id?: string
    username: string
    password: string
    name: string
    surname: string
    birthdate: Date | string
    email: string
    role?: string | null
    phone_number?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    newsArticles?: NewsArticleCreateNestedManyWithoutAuthorInput
    mainEventRegistrations?: MainEventRegistrationCreateNestedManyWithoutUserInput
  }

  export type AppUserUncheckedCreateWithoutGdrSessionRegistrationsInput = {
    id?: string
    username: string
    password: string
    name: string
    surname: string
    birthdate: Date | string
    email: string
    role?: string | null
    phone_number?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    newsArticles?: NewsArticleUncheckedCreateNestedManyWithoutAuthorInput
    mainEventRegistrations?: MainEventRegistrationUncheckedCreateNestedManyWithoutUserInput
  }

  export type AppUserCreateOrConnectWithoutGdrSessionRegistrationsInput = {
    where: AppUserWhereUniqueInput
    create: XOR<AppUserCreateWithoutGdrSessionRegistrationsInput, AppUserUncheckedCreateWithoutGdrSessionRegistrationsInput>
  }

  export type GdrSessionCreateWithoutGdrSessionRegistrationsInput = {
    id?: string
    title: string
    description: string
    urlImg?: string | null
    start: Date | string
    end: Date | string
    master: string
    availableSeats: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type GdrSessionUncheckedCreateWithoutGdrSessionRegistrationsInput = {
    id?: string
    title: string
    description: string
    urlImg?: string | null
    start: Date | string
    end: Date | string
    master: string
    availableSeats: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type GdrSessionCreateOrConnectWithoutGdrSessionRegistrationsInput = {
    where: GdrSessionWhereUniqueInput
    create: XOR<GdrSessionCreateWithoutGdrSessionRegistrationsInput, GdrSessionUncheckedCreateWithoutGdrSessionRegistrationsInput>
  }

  export type AppUserUpsertWithoutGdrSessionRegistrationsInput = {
    update: XOR<AppUserUpdateWithoutGdrSessionRegistrationsInput, AppUserUncheckedUpdateWithoutGdrSessionRegistrationsInput>
    create: XOR<AppUserCreateWithoutGdrSessionRegistrationsInput, AppUserUncheckedCreateWithoutGdrSessionRegistrationsInput>
    where?: AppUserWhereInput
  }

  export type AppUserUpdateToOneWithWhereWithoutGdrSessionRegistrationsInput = {
    where?: AppUserWhereInput
    data: XOR<AppUserUpdateWithoutGdrSessionRegistrationsInput, AppUserUncheckedUpdateWithoutGdrSessionRegistrationsInput>
  }

  export type AppUserUpdateWithoutGdrSessionRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    newsArticles?: NewsArticleUpdateManyWithoutAuthorNestedInput
    mainEventRegistrations?: MainEventRegistrationUpdateManyWithoutUserNestedInput
  }

  export type AppUserUncheckedUpdateWithoutGdrSessionRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    newsArticles?: NewsArticleUncheckedUpdateManyWithoutAuthorNestedInput
    mainEventRegistrations?: MainEventRegistrationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GdrSessionUpsertWithoutGdrSessionRegistrationsInput = {
    update: XOR<GdrSessionUpdateWithoutGdrSessionRegistrationsInput, GdrSessionUncheckedUpdateWithoutGdrSessionRegistrationsInput>
    create: XOR<GdrSessionCreateWithoutGdrSessionRegistrationsInput, GdrSessionUncheckedCreateWithoutGdrSessionRegistrationsInput>
    where?: GdrSessionWhereInput
  }

  export type GdrSessionUpdateToOneWithWhereWithoutGdrSessionRegistrationsInput = {
    where?: GdrSessionWhereInput
    data: XOR<GdrSessionUpdateWithoutGdrSessionRegistrationsInput, GdrSessionUncheckedUpdateWithoutGdrSessionRegistrationsInput>
  }

  export type GdrSessionUpdateWithoutGdrSessionRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    urlImg?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    master?: StringFieldUpdateOperationsInput | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GdrSessionUncheckedUpdateWithoutGdrSessionRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    urlImg?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    master?: StringFieldUpdateOperationsInput | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MainEventRegistrationCreateWithoutEventInput = {
    id?: string
    createdAt?: Date | string
    user: AppUserCreateNestedOneWithoutMainEventRegistrationsInput
  }

  export type MainEventRegistrationUncheckedCreateWithoutEventInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type MainEventRegistrationCreateOrConnectWithoutEventInput = {
    where: MainEventRegistrationWhereUniqueInput
    create: XOR<MainEventRegistrationCreateWithoutEventInput, MainEventRegistrationUncheckedCreateWithoutEventInput>
  }

  export type MainEventRegistrationCreateManyEventInputEnvelope = {
    data: MainEventRegistrationCreateManyEventInput | MainEventRegistrationCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type MainEventRegistrationUpsertWithWhereUniqueWithoutEventInput = {
    where: MainEventRegistrationWhereUniqueInput
    update: XOR<MainEventRegistrationUpdateWithoutEventInput, MainEventRegistrationUncheckedUpdateWithoutEventInput>
    create: XOR<MainEventRegistrationCreateWithoutEventInput, MainEventRegistrationUncheckedCreateWithoutEventInput>
  }

  export type MainEventRegistrationUpdateWithWhereUniqueWithoutEventInput = {
    where: MainEventRegistrationWhereUniqueInput
    data: XOR<MainEventRegistrationUpdateWithoutEventInput, MainEventRegistrationUncheckedUpdateWithoutEventInput>
  }

  export type MainEventRegistrationUpdateManyWithWhereWithoutEventInput = {
    where: MainEventRegistrationScalarWhereInput
    data: XOR<MainEventRegistrationUpdateManyMutationInput, MainEventRegistrationUncheckedUpdateManyWithoutEventInput>
  }

  export type AppUserCreateWithoutMainEventRegistrationsInput = {
    id?: string
    username: string
    password: string
    name: string
    surname: string
    birthdate: Date | string
    email: string
    role?: string | null
    phone_number?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    newsArticles?: NewsArticleCreateNestedManyWithoutAuthorInput
    GdrSessionRegistrations?: GdrSessionRegistrationCreateNestedManyWithoutUserInput
  }

  export type AppUserUncheckedCreateWithoutMainEventRegistrationsInput = {
    id?: string
    username: string
    password: string
    name: string
    surname: string
    birthdate: Date | string
    email: string
    role?: string | null
    phone_number?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    newsArticles?: NewsArticleUncheckedCreateNestedManyWithoutAuthorInput
    GdrSessionRegistrations?: GdrSessionRegistrationUncheckedCreateNestedManyWithoutUserInput
  }

  export type AppUserCreateOrConnectWithoutMainEventRegistrationsInput = {
    where: AppUserWhereUniqueInput
    create: XOR<AppUserCreateWithoutMainEventRegistrationsInput, AppUserUncheckedCreateWithoutMainEventRegistrationsInput>
  }

  export type MainEventCreateWithoutMainEventRegistrationsInput = {
    id?: string
    title: string
    description: string
    urlImg?: string | null
    start: Date | string
    end: Date | string
    location: string
    price?: number
    maxSeats: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    note: string
  }

  export type MainEventUncheckedCreateWithoutMainEventRegistrationsInput = {
    id?: string
    title: string
    description: string
    urlImg?: string | null
    start: Date | string
    end: Date | string
    location: string
    price?: number
    maxSeats: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    note: string
  }

  export type MainEventCreateOrConnectWithoutMainEventRegistrationsInput = {
    where: MainEventWhereUniqueInput
    create: XOR<MainEventCreateWithoutMainEventRegistrationsInput, MainEventUncheckedCreateWithoutMainEventRegistrationsInput>
  }

  export type AppUserUpsertWithoutMainEventRegistrationsInput = {
    update: XOR<AppUserUpdateWithoutMainEventRegistrationsInput, AppUserUncheckedUpdateWithoutMainEventRegistrationsInput>
    create: XOR<AppUserCreateWithoutMainEventRegistrationsInput, AppUserUncheckedCreateWithoutMainEventRegistrationsInput>
    where?: AppUserWhereInput
  }

  export type AppUserUpdateToOneWithWhereWithoutMainEventRegistrationsInput = {
    where?: AppUserWhereInput
    data: XOR<AppUserUpdateWithoutMainEventRegistrationsInput, AppUserUncheckedUpdateWithoutMainEventRegistrationsInput>
  }

  export type AppUserUpdateWithoutMainEventRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    newsArticles?: NewsArticleUpdateManyWithoutAuthorNestedInput
    GdrSessionRegistrations?: GdrSessionRegistrationUpdateManyWithoutUserNestedInput
  }

  export type AppUserUncheckedUpdateWithoutMainEventRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    newsArticles?: NewsArticleUncheckedUpdateManyWithoutAuthorNestedInput
    GdrSessionRegistrations?: GdrSessionRegistrationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MainEventUpsertWithoutMainEventRegistrationsInput = {
    update: XOR<MainEventUpdateWithoutMainEventRegistrationsInput, MainEventUncheckedUpdateWithoutMainEventRegistrationsInput>
    create: XOR<MainEventCreateWithoutMainEventRegistrationsInput, MainEventUncheckedCreateWithoutMainEventRegistrationsInput>
    where?: MainEventWhereInput
  }

  export type MainEventUpdateToOneWithWhereWithoutMainEventRegistrationsInput = {
    where?: MainEventWhereInput
    data: XOR<MainEventUpdateWithoutMainEventRegistrationsInput, MainEventUncheckedUpdateWithoutMainEventRegistrationsInput>
  }

  export type MainEventUpdateWithoutMainEventRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    urlImg?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    maxSeats?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: StringFieldUpdateOperationsInput | string
  }

  export type MainEventUncheckedUpdateWithoutMainEventRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    urlImg?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    maxSeats?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: StringFieldUpdateOperationsInput | string
  }

  export type NewsLikeCreateWithoutArticleInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type NewsLikeUncheckedCreateWithoutArticleInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type NewsLikeCreateOrConnectWithoutArticleInput = {
    where: NewsLikeWhereUniqueInput
    create: XOR<NewsLikeCreateWithoutArticleInput, NewsLikeUncheckedCreateWithoutArticleInput>
  }

  export type NewsLikeCreateManyArticleInputEnvelope = {
    data: NewsLikeCreateManyArticleInput | NewsLikeCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type AppUserCreateWithoutNewsArticlesInput = {
    id?: string
    username: string
    password: string
    name: string
    surname: string
    birthdate: Date | string
    email: string
    role?: string | null
    phone_number?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    GdrSessionRegistrations?: GdrSessionRegistrationCreateNestedManyWithoutUserInput
    mainEventRegistrations?: MainEventRegistrationCreateNestedManyWithoutUserInput
  }

  export type AppUserUncheckedCreateWithoutNewsArticlesInput = {
    id?: string
    username: string
    password: string
    name: string
    surname: string
    birthdate: Date | string
    email: string
    role?: string | null
    phone_number?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    GdrSessionRegistrations?: GdrSessionRegistrationUncheckedCreateNestedManyWithoutUserInput
    mainEventRegistrations?: MainEventRegistrationUncheckedCreateNestedManyWithoutUserInput
  }

  export type AppUserCreateOrConnectWithoutNewsArticlesInput = {
    where: AppUserWhereUniqueInput
    create: XOR<AppUserCreateWithoutNewsArticlesInput, AppUserUncheckedCreateWithoutNewsArticlesInput>
  }

  export type NewsLikeUpsertWithWhereUniqueWithoutArticleInput = {
    where: NewsLikeWhereUniqueInput
    update: XOR<NewsLikeUpdateWithoutArticleInput, NewsLikeUncheckedUpdateWithoutArticleInput>
    create: XOR<NewsLikeCreateWithoutArticleInput, NewsLikeUncheckedCreateWithoutArticleInput>
  }

  export type NewsLikeUpdateWithWhereUniqueWithoutArticleInput = {
    where: NewsLikeWhereUniqueInput
    data: XOR<NewsLikeUpdateWithoutArticleInput, NewsLikeUncheckedUpdateWithoutArticleInput>
  }

  export type NewsLikeUpdateManyWithWhereWithoutArticleInput = {
    where: NewsLikeScalarWhereInput
    data: XOR<NewsLikeUpdateManyMutationInput, NewsLikeUncheckedUpdateManyWithoutArticleInput>
  }

  export type NewsLikeScalarWhereInput = {
    AND?: NewsLikeScalarWhereInput | NewsLikeScalarWhereInput[]
    OR?: NewsLikeScalarWhereInput[]
    NOT?: NewsLikeScalarWhereInput | NewsLikeScalarWhereInput[]
    id?: UuidFilter<"NewsLike"> | string
    userId?: UuidFilter<"NewsLike"> | string
    articleId?: UuidFilter<"NewsLike"> | string
    createdAt?: DateTimeFilter<"NewsLike"> | Date | string
  }

  export type AppUserUpsertWithoutNewsArticlesInput = {
    update: XOR<AppUserUpdateWithoutNewsArticlesInput, AppUserUncheckedUpdateWithoutNewsArticlesInput>
    create: XOR<AppUserCreateWithoutNewsArticlesInput, AppUserUncheckedCreateWithoutNewsArticlesInput>
    where?: AppUserWhereInput
  }

  export type AppUserUpdateToOneWithWhereWithoutNewsArticlesInput = {
    where?: AppUserWhereInput
    data: XOR<AppUserUpdateWithoutNewsArticlesInput, AppUserUncheckedUpdateWithoutNewsArticlesInput>
  }

  export type AppUserUpdateWithoutNewsArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GdrSessionRegistrations?: GdrSessionRegistrationUpdateManyWithoutUserNestedInput
    mainEventRegistrations?: MainEventRegistrationUpdateManyWithoutUserNestedInput
  }

  export type AppUserUncheckedUpdateWithoutNewsArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GdrSessionRegistrations?: GdrSessionRegistrationUncheckedUpdateManyWithoutUserNestedInput
    mainEventRegistrations?: MainEventRegistrationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NewsArticleCreateWithoutLikesInput = {
    id?: string
    title: string
    content: string
    imageUrl?: string | null
    publishedAt?: Date | string
    shares?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: AppUserCreateNestedOneWithoutNewsArticlesInput
  }

  export type NewsArticleUncheckedCreateWithoutLikesInput = {
    id?: string
    title: string
    content: string
    imageUrl?: string | null
    publishedAt?: Date | string
    shares?: number
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsArticleCreateOrConnectWithoutLikesInput = {
    where: NewsArticleWhereUniqueInput
    create: XOR<NewsArticleCreateWithoutLikesInput, NewsArticleUncheckedCreateWithoutLikesInput>
  }

  export type NewsArticleUpsertWithoutLikesInput = {
    update: XOR<NewsArticleUpdateWithoutLikesInput, NewsArticleUncheckedUpdateWithoutLikesInput>
    create: XOR<NewsArticleCreateWithoutLikesInput, NewsArticleUncheckedCreateWithoutLikesInput>
    where?: NewsArticleWhereInput
  }

  export type NewsArticleUpdateToOneWithWhereWithoutLikesInput = {
    where?: NewsArticleWhereInput
    data: XOR<NewsArticleUpdateWithoutLikesInput, NewsArticleUncheckedUpdateWithoutLikesInput>
  }

  export type NewsArticleUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shares?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AppUserUpdateOneRequiredWithoutNewsArticlesNestedInput
  }

  export type NewsArticleUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shares?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleCreateManyAuthorInput = {
    id?: string
    title: string
    content: string
    imageUrl?: string | null
    publishedAt?: Date | string
    shares?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GdrSessionRegistrationCreateManyUserInput = {
    id?: string
    sessionId: string
    createdAt?: Date | string
  }

  export type MainEventRegistrationCreateManyUserInput = {
    id?: string
    eventId: string
    createdAt?: Date | string
  }

  export type NewsArticleUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shares?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: NewsLikeUpdateManyWithoutArticleNestedInput
  }

  export type NewsArticleUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shares?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: NewsLikeUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type NewsArticleUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shares?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GdrSessionRegistrationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: GdrSessionUpdateOneRequiredWithoutGdrSessionRegistrationsNestedInput
  }

  export type GdrSessionRegistrationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GdrSessionRegistrationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MainEventRegistrationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: MainEventUpdateOneRequiredWithoutMainEventRegistrationsNestedInput
  }

  export type MainEventRegistrationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MainEventRegistrationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GdrSessionRegistrationCreateManySessionInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type GdrSessionRegistrationUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: AppUserUpdateOneRequiredWithoutGdrSessionRegistrationsNestedInput
  }

  export type GdrSessionRegistrationUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GdrSessionRegistrationUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MainEventRegistrationCreateManyEventInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type MainEventRegistrationUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: AppUserUpdateOneRequiredWithoutMainEventRegistrationsNestedInput
  }

  export type MainEventRegistrationUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MainEventRegistrationUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsLikeCreateManyArticleInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type NewsLikeUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsLikeUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsLikeUncheckedUpdateManyWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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