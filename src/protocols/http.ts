import { parse, UrlWithParsedQuery } from "url";
import InvalidArgument from "../errors/http-error";

export default class UrlLogin {
  public static parseUrl = (url: string): UrlWithParsedQuery => {
    if (!url) {
      throw new InvalidArgument(url);
    }
    return parse(url, true);
  };
}
