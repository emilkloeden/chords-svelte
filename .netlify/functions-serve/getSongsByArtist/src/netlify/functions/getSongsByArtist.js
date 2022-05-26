var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// netlify/functions/getSongsByArtist.js
var getSongsByArtist_exports = {};
__export(getSongsByArtist_exports, {
  handler: () => handler
});
var import_fs = __toESM(require("fs"), 1);
var handler = async (event) => {
  let { artist } = event.queryStringParameters;
  if (!artist) {
    return {
      status: 404
    };
  }
  artist = artist.replace(".", "_");
  const artistDirectory = `./netlify/functions/chords/${artist}`;
  const fileNames = import_fs.default.readdirSync(artistDirectory);
  const songs = fileNames.map((fileName) => {
    const title = fileName.slice(0, -3);
    const path = `/${artist}/${title}`;
    return {
      title,
      path
    };
  });
  return {
    statusCode: 200,
    body: JSON.stringify({
      artist,
      songs
    }),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  };
};
module.exports = __toCommonJS(getSongsByArtist_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=getSongsByArtist.js.map
