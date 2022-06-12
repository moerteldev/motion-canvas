import {JoinYieldResult} from './join';
import {CancelYieldResult} from './cancel';

/**
 * The main generator type produced by all generator functions in Motion Canvas.
 *
 * Yielded values can be used to control the flow of animation:
 *
 * - Progress to the next frame:
 * ```ts
 * yield;
 * ```
 *
 * - Run another generator synchronously:
 * ```ts
 * yield* generatorFunction();
 * ```
 *
 * - Run another generator concurrently:
 * ```ts
 * const task = yield generatorFunction();
 * ```

 * - Await a [Promise][promise]:
 * ```ts
 * const result = yield asyncFunction();
 * ```
 *
 * [promise]: https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/promise
 */
export type ThreadGenerator = Generator<
  ThreadGenerator | JoinYieldResult | CancelYieldResult | Promise<any>,
  void,
  ThreadGenerator | any
>;

/**
 * Check if the given value is a {@link ThreadGenerator}.
 *
 * @param value A possible thread {@link ThreadGenerator}.
 */
export function isThreadGenerator(value: unknown): value is ThreadGenerator {
  return typeof value === 'object' && Symbol.iterator in value;
}
