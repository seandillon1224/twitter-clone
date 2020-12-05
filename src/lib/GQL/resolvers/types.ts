import { Context } from "lib/models";
type ResolverFn = (parent: any, args: any, ctx: Context) => any;
export default interface ResolverMap {
  [field: string]: ResolverFn;
}
