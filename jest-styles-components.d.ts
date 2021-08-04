/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Plugin, NewPlugin } from "pretty-format";

declare global {
    namespace jest {
        interface AsymmetricMatcher {
            $$typeof: symbol
            // eslint-disable-next-line @typescript-eslint/ban-types
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            sample?: string | RegExp | number | object | Array<any> | Function
        }

        type Value = string | RegExp | number | AsymmetricMatcher | undefined

        interface Options {
            media?: string
            modifier?: string
            supports?: string
        }

        interface Matchers<R, T> {
            toHaveStyleRule(property: string, value?: Value, options?: Options): R
        }
    }

}