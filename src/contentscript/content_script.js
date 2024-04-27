(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: !0 });
  };
  var __accessCheck = (obj, member, msg) => {
    if (!member.has(obj))
      throw TypeError("Cannot " + msg);
  };
  var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj)), __privateAdd = (obj, member, value) => {
    if (member.has(obj))
      throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  }, __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);

  // <define:process.env>

  // https://esm.sh/v116/webextension-polyfill@0.10.0/deno/webextension-polyfill.development.mjs
  var __create = Object.create, __defProp2 = Object.defineProperty, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropNames = Object.getOwnPropertyNames, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __commonJS = (cb, mod) => function() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  }, __export2 = (target, all) => {
    for (var name in all)
      __defProp2(target, name, { get: all[name], enumerable: !0 });
  }, __copyProps = (to, from, except, desc) => {
    if (from && typeof from == "object" || typeof from == "function")
      for (let key of __getOwnPropNames(from))
        !__hasOwnProp.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    return to;
  }, __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default")), __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: !0 }) : target,
    mod
  )), require_browser_polyfill = __commonJS({
    "../etc/esmd/npm/webextension-polyfill@0.10.0/node_modules/webextension-polyfill/dist/browser-polyfill.js"(exports2, module2) {
      (function(global2, factory) {
        if (typeof define == "function" && define.amd)
          define("webextension-polyfill", ["module"], factory);
        else if (typeof exports2 < "u")
          factory(module2);
        else {
          var mod = {
            exports: {}
          };
          factory(mod), global2.browser = mod.exports;
        }
      })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : exports2, function(module22) {
        "use strict";
        if (!globalThis.chrome?.runtime?.id)
          throw new Error("This script should only be loaded in a browser extension.");
        if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
          let CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.", wrapAPIs = (extensionAPIs) => {
            let apiMetadata = {
              alarms: {
                clear: {
                  minArgs: 0,
                  maxArgs: 1
                },
                clearAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              bookmarks: {
                create: {
                  minArgs: 1,
                  maxArgs: 1
                },
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getChildren: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getRecent: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getSubTree: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getTree: {
                  minArgs: 0,
                  maxArgs: 0
                },
                move: {
                  minArgs: 2,
                  maxArgs: 2
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeTree: {
                  minArgs: 1,
                  maxArgs: 1
                },
                search: {
                  minArgs: 1,
                  maxArgs: 1
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              },
              browserAction: {
                disable: {
                  minArgs: 0,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                enable: {
                  minArgs: 0,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                getBadgeBackgroundColor: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getBadgeText: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getPopup: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getTitle: {
                  minArgs: 1,
                  maxArgs: 1
                },
                openPopup: {
                  minArgs: 0,
                  maxArgs: 0
                },
                setBadgeBackgroundColor: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                setBadgeText: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                setIcon: {
                  minArgs: 1,
                  maxArgs: 1
                },
                setPopup: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                setTitle: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                }
              },
              browsingData: {
                remove: {
                  minArgs: 2,
                  maxArgs: 2
                },
                removeCache: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeCookies: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeDownloads: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeFormData: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeHistory: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeLocalStorage: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removePasswords: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removePluginData: {
                  minArgs: 1,
                  maxArgs: 1
                },
                settings: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              commands: {
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              contextMenus: {
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              },
              cookies: {
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAllCookieStores: {
                  minArgs: 0,
                  maxArgs: 0
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              devtools: {
                inspectedWindow: {
                  eval: {
                    minArgs: 1,
                    maxArgs: 2,
                    singleCallbackArg: !1
                  }
                },
                panels: {
                  create: {
                    minArgs: 3,
                    maxArgs: 3,
                    singleCallbackArg: !0
                  },
                  elements: {
                    createSidebarPane: {
                      minArgs: 1,
                      maxArgs: 1
                    }
                  }
                }
              },
              downloads: {
                cancel: {
                  minArgs: 1,
                  maxArgs: 1
                },
                download: {
                  minArgs: 1,
                  maxArgs: 1
                },
                erase: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getFileIcon: {
                  minArgs: 1,
                  maxArgs: 2
                },
                open: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                pause: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeFile: {
                  minArgs: 1,
                  maxArgs: 1
                },
                resume: {
                  minArgs: 1,
                  maxArgs: 1
                },
                search: {
                  minArgs: 1,
                  maxArgs: 1
                },
                show: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                }
              },
              extension: {
                isAllowedFileSchemeAccess: {
                  minArgs: 0,
                  maxArgs: 0
                },
                isAllowedIncognitoAccess: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              history: {
                addUrl: {
                  minArgs: 1,
                  maxArgs: 1
                },
                deleteAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                deleteRange: {
                  minArgs: 1,
                  maxArgs: 1
                },
                deleteUrl: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getVisits: {
                  minArgs: 1,
                  maxArgs: 1
                },
                search: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              i18n: {
                detectLanguage: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAcceptLanguages: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              identity: {
                launchWebAuthFlow: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              idle: {
                queryState: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              management: {
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getSelf: {
                  minArgs: 0,
                  maxArgs: 0
                },
                setEnabled: {
                  minArgs: 2,
                  maxArgs: 2
                },
                uninstallSelf: {
                  minArgs: 0,
                  maxArgs: 1
                }
              },
              notifications: {
                clear: {
                  minArgs: 1,
                  maxArgs: 1
                },
                create: {
                  minArgs: 1,
                  maxArgs: 2
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getPermissionLevel: {
                  minArgs: 0,
                  maxArgs: 0
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              },
              pageAction: {
                getPopup: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getTitle: {
                  minArgs: 1,
                  maxArgs: 1
                },
                hide: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                setIcon: {
                  minArgs: 1,
                  maxArgs: 1
                },
                setPopup: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                setTitle: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                show: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                }
              },
              permissions: {
                contains: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                request: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              runtime: {
                getBackgroundPage: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getPlatformInfo: {
                  minArgs: 0,
                  maxArgs: 0
                },
                openOptionsPage: {
                  minArgs: 0,
                  maxArgs: 0
                },
                requestUpdateCheck: {
                  minArgs: 0,
                  maxArgs: 0
                },
                sendMessage: {
                  minArgs: 1,
                  maxArgs: 3
                },
                sendNativeMessage: {
                  minArgs: 2,
                  maxArgs: 2
                },
                setUninstallURL: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              sessions: {
                getDevices: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getRecentlyClosed: {
                  minArgs: 0,
                  maxArgs: 1
                },
                restore: {
                  minArgs: 0,
                  maxArgs: 1
                }
              },
              storage: {
                local: {
                  clear: {
                    minArgs: 0,
                    maxArgs: 0
                  },
                  get: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  getBytesInUse: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  remove: {
                    minArgs: 1,
                    maxArgs: 1
                  },
                  set: {
                    minArgs: 1,
                    maxArgs: 1
                  }
                },
                managed: {
                  get: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  getBytesInUse: {
                    minArgs: 0,
                    maxArgs: 1
                  }
                },
                sync: {
                  clear: {
                    minArgs: 0,
                    maxArgs: 0
                  },
                  get: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  getBytesInUse: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  remove: {
                    minArgs: 1,
                    maxArgs: 1
                  },
                  set: {
                    minArgs: 1,
                    maxArgs: 1
                  }
                }
              },
              tabs: {
                captureVisibleTab: {
                  minArgs: 0,
                  maxArgs: 2
                },
                create: {
                  minArgs: 1,
                  maxArgs: 1
                },
                detectLanguage: {
                  minArgs: 0,
                  maxArgs: 1
                },
                discard: {
                  minArgs: 0,
                  maxArgs: 1
                },
                duplicate: {
                  minArgs: 1,
                  maxArgs: 1
                },
                executeScript: {
                  minArgs: 1,
                  maxArgs: 2
                },
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getCurrent: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getZoom: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getZoomSettings: {
                  minArgs: 0,
                  maxArgs: 1
                },
                goBack: {
                  minArgs: 0,
                  maxArgs: 1
                },
                goForward: {
                  minArgs: 0,
                  maxArgs: 1
                },
                highlight: {
                  minArgs: 1,
                  maxArgs: 1
                },
                insertCSS: {
                  minArgs: 1,
                  maxArgs: 2
                },
                move: {
                  minArgs: 2,
                  maxArgs: 2
                },
                query: {
                  minArgs: 1,
                  maxArgs: 1
                },
                reload: {
                  minArgs: 0,
                  maxArgs: 2
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeCSS: {
                  minArgs: 1,
                  maxArgs: 2
                },
                sendMessage: {
                  minArgs: 2,
                  maxArgs: 3
                },
                setZoom: {
                  minArgs: 1,
                  maxArgs: 2
                },
                setZoomSettings: {
                  minArgs: 1,
                  maxArgs: 2
                },
                update: {
                  minArgs: 1,
                  maxArgs: 2
                }
              },
              topSites: {
                get: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              webNavigation: {
                getAllFrames: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getFrame: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              webRequest: {
                handlerBehaviorChanged: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              windows: {
                create: {
                  minArgs: 0,
                  maxArgs: 1
                },
                get: {
                  minArgs: 1,
                  maxArgs: 2
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getCurrent: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getLastFocused: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              }
            };
            if (Object.keys(apiMetadata).length === 0)
              throw new Error("api-metadata.json has not been included in browser-polyfill");
            class DefaultWeakMap extends WeakMap {
              constructor(createItem, items = void 0) {
                super(items), this.createItem = createItem;
              }
              get(key) {
                return this.has(key) || this.set(key, this.createItem(key)), super.get(key);
              }
            }
            let isThenable = (value) => value && typeof value == "object" && typeof value.then == "function", makeCallback = (promise, metadata) => (...callbackArgs) => {
              extensionAPIs.runtime.lastError ? promise.reject(new Error(extensionAPIs.runtime.lastError.message)) : metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== !1 ? promise.resolve(callbackArgs[0]) : promise.resolve(callbackArgs);
            }, pluralizeArguments = (numArgs) => numArgs == 1 ? "argument" : "arguments", wrapAsyncFunction = (name, metadata) => function(target, ...args) {
              if (args.length < metadata.minArgs)
                throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
              if (args.length > metadata.maxArgs)
                throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
              return new Promise((resolve, reject) => {
                if (metadata.fallbackToNoCallback)
                  try {
                    target[name](...args, makeCallback({
                      resolve,
                      reject
                    }, metadata));
                  } catch (cbError) {
                    console.warn(`${name} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, cbError), target[name](...args), metadata.fallbackToNoCallback = !1, metadata.noCallback = !0, resolve();
                  }
                else
                  metadata.noCallback ? (target[name](...args), resolve()) : target[name](...args, makeCallback({
                    resolve,
                    reject
                  }, metadata));
              });
            }, wrapMethod = (target, method, wrapper) => new Proxy(method, {
              apply(targetMethod, thisObj, args) {
                return wrapper.call(thisObj, target, ...args);
              }
            }), hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty), wrapObject = (target, wrappers = {}, metadata = {}) => {
              let cache2 = /* @__PURE__ */ Object.create(null), handlers = {
                has(proxyTarget2, prop) {
                  return prop in target || prop in cache2;
                },
                get(proxyTarget2, prop, receiver) {
                  if (prop in cache2)
                    return cache2[prop];
                  if (!(prop in target))
                    return;
                  let value = target[prop];
                  if (typeof value == "function")
                    if (typeof wrappers[prop] == "function")
                      value = wrapMethod(target, target[prop], wrappers[prop]);
                    else if (hasOwnProperty(metadata, prop)) {
                      let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                      value = wrapMethod(target, target[prop], wrapper);
                    } else
                      value = value.bind(target);
                  else if (typeof value == "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop)))
                    value = wrapObject(value, wrappers[prop], metadata[prop]);
                  else if (hasOwnProperty(metadata, "*"))
                    value = wrapObject(value, wrappers[prop], metadata["*"]);
                  else
                    return Object.defineProperty(cache2, prop, {
                      configurable: !0,
                      enumerable: !0,
                      get() {
                        return target[prop];
                      },
                      set(value2) {
                        target[prop] = value2;
                      }
                    }), value;
                  return cache2[prop] = value, value;
                },
                set(proxyTarget2, prop, value, receiver) {
                  return prop in cache2 ? cache2[prop] = value : target[prop] = value, !0;
                },
                defineProperty(proxyTarget2, prop, desc) {
                  return Reflect.defineProperty(cache2, prop, desc);
                },
                deleteProperty(proxyTarget2, prop) {
                  return Reflect.deleteProperty(cache2, prop);
                }
              }, proxyTarget = Object.create(target);
              return new Proxy(proxyTarget, handlers);
            }, wrapEvent = (wrapperMap) => ({
              addListener(target, listener, ...args) {
                target.addListener(wrapperMap.get(listener), ...args);
              },
              hasListener(target, listener) {
                return target.hasListener(wrapperMap.get(listener));
              },
              removeListener(target, listener) {
                target.removeListener(wrapperMap.get(listener));
              }
            }), onRequestFinishedWrappers = new DefaultWeakMap((listener) => typeof listener != "function" ? listener : function(req) {
              let wrappedReq = wrapObject(
                req,
                {},
                {
                  getContent: {
                    minArgs: 0,
                    maxArgs: 0
                  }
                }
              );
              listener(wrappedReq);
            }), onMessageWrappers = new DefaultWeakMap((listener) => typeof listener != "function" ? listener : function(message, sender, sendResponse) {
              let didCallSendResponse = !1, wrappedSendResponse, sendResponsePromise = new Promise((resolve) => {
                wrappedSendResponse = function(response) {
                  didCallSendResponse = !0, resolve(response);
                };
              }), result;
              try {
                result = listener(message, sender, wrappedSendResponse);
              } catch (err) {
                result = Promise.reject(err);
              }
              let isResultThenable = result !== !0 && isThenable(result);
              if (result !== !0 && !isResultThenable && !didCallSendResponse)
                return !1;
              let sendPromisedResult = (promise) => {
                promise.then((msg) => {
                  sendResponse(msg);
                }, (error) => {
                  let message2;
                  error && (error instanceof Error || typeof error.message == "string") ? message2 = error.message : message2 = "An unexpected error occurred", sendResponse({
                    __mozWebExtensionPolyfillReject__: !0,
                    message: message2
                  });
                }).catch((err) => {
                  console.error("Failed to send onMessage rejected reply", err);
                });
              };
              return sendPromisedResult(isResultThenable ? result : sendResponsePromise), !0;
            }), wrappedSendMessageCallback = ({
              reject,
              resolve
            }, reply) => {
              extensionAPIs.runtime.lastError ? extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE ? resolve() : reject(new Error(extensionAPIs.runtime.lastError.message)) : reply && reply.__mozWebExtensionPolyfillReject__ ? reject(new Error(reply.message)) : resolve(reply);
            }, wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
              if (args.length < metadata.minArgs)
                throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
              if (args.length > metadata.maxArgs)
                throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
              return new Promise((resolve, reject) => {
                let wrappedCb = wrappedSendMessageCallback.bind(null, {
                  resolve,
                  reject
                });
                args.push(wrappedCb), apiNamespaceObj.sendMessage(...args);
              });
            }, staticWrappers = {
              devtools: {
                network: {
                  onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                }
              },
              runtime: {
                onMessage: wrapEvent(onMessageWrappers),
                onMessageExternal: wrapEvent(onMessageWrappers),
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 1,
                  maxArgs: 3
                })
              },
              tabs: {
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 2,
                  maxArgs: 3
                })
              }
            }, settingMetadata = {
              clear: {
                minArgs: 1,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            };
            return apiMetadata.privacy = {
              network: {
                "*": settingMetadata
              },
              services: {
                "*": settingMetadata
              },
              websites: {
                "*": settingMetadata
              }
            }, wrapObject(extensionAPIs, staticWrappers, apiMetadata);
          };
          module22.exports = wrapAPIs(chrome);
        } else
          module22.exports = globalThis.browser;
      });
    }
  }), webextension_polyfill_0_10_exports = {};
  __export2(webextension_polyfill_0_10_exports, {
    default: () => webextension_polyfill_0_10_default
  });
  var __module = __toESM(require_browser_polyfill());
  __reExport(webextension_polyfill_0_10_exports, __toESM(require_browser_polyfill()));
  var { default: __default, ...__rest } = __module, webextension_polyfill_0_10_default = __default !== void 0 ? __default : __rest;

  // browser/import_browser_polyfill.ts
  globalThis.immersiveTranslateBrowserAPI = webextension_polyfill_0_10_default;


  // https://deno.land/std@0.171.0/async/deferred.ts
  function deferred() {
    let methods, state = "pending", promise = new Promise((resolve, reject) => {
      methods = {
        async resolve(value) {
          await value, state = "fulfilled", resolve(value);
        },
        // deno-lint-ignore no-explicit-any
        reject(reason) {
          state = "rejected", reject(reason);
        }
      };
    });
    return Object.defineProperty(promise, "state", { get: () => state }), Object.assign(promise, methods);
  }

  // https://deno.land/std@0.171.0/async/deadline.ts
  var DeadlineError = class extends Error {
    constructor() {
      super("Deadline"), this.name = "DeadlineError";
    }
  };
  function deadline(p5, delay2) {
    let d5 = deferred(), t3 = setTimeout(() => d5.reject(new DeadlineError()), delay2);
    return Promise.race([p5, d5]).finally(() => clearTimeout(t3));
  }

  // https://deno.land/std@0.171.0/async/delay.ts
  function delay(ms, options2 = {}) {
    let { signal, persistent } = options2;
    return signal?.aborted ? Promise.reject(new DOMException("Delay was aborted.", "AbortError")) : new Promise((resolve, reject) => {
      let abort = () => {
        clearTimeout(i2), reject(new DOMException("Delay was aborted.", "AbortError"));
      }, i2 = setTimeout(() => {
        signal?.removeEventListener("abort", abort), resolve();
      }, ms);
      if (signal?.addEventListener("abort", abort, { once: !0 }), persistent === !1)
        try {
          Deno.unrefTimer(i2);
        } catch (error) {
          if (!(error instanceof ReferenceError))
            throw error;
          console.error("`persistent` option is only available in Deno");
        }
    });
  }

  // https://deno.land/std@0.171.0/async/mux_async_iterator.ts
  var MuxAsyncIterator = class {
    #iteratorCount = 0;
    #yields = [];
    // deno-lint-ignore no-explicit-any
    #throws = [];
    #signal = deferred();
    add(iterable) {
      ++this.#iteratorCount, this.#callIteratorNext(iterable[Symbol.asyncIterator]());
    }
    async #callIteratorNext(iterator) {
      try {
        let { value, done } = await iterator.next();
        done ? --this.#iteratorCount : this.#yields.push({ iterator, value });
      } catch (e) {
        this.#throws.push(e);
      }
      this.#signal.resolve();
    }
    async *iterate() {
      for (; this.#iteratorCount > 0; ) {
        await this.#signal;
        for (let i2 = 0; i2 < this.#yields.length; i2++) {
          let { iterator, value } = this.#yields[i2];
          yield value, this.#callIteratorNext(iterator);
        }
        if (this.#throws.length) {
          for (let e of this.#throws)
            throw e;
          this.#throws.length = 0;
        }
        this.#yields.length = 0, this.#signal = deferred();
      }
    }
    [Symbol.asyncIterator]() {
      return this.iterate();
    }
  };


  // https://deno.land/std@0.167.0/async/debounce.ts
  function debounce(fn, wait) {
    let timeout = null, flush = null, debounced = (...args) => {
      debounced.clear(), flush = () => {
        debounced.clear(), fn.call(debounced, ...args);
      }, timeout = setTimeout(flush, wait);
    };
    return debounced.clear = () => {
      typeof timeout == "number" && (clearTimeout(timeout), timeout = null, flush = null);
    }, debounced.flush = () => {
      flush?.();
    }, Object.defineProperty(debounced, "pending", {
      get: () => typeof timeout == "number"
    }), debounced;
  }

  // https://deno.land/std@0.170.0/async/retry.ts
  var RetryError = class extends Error {
    constructor(cause, count2) {
      super(`Exceeded max retry count (${count2})`), this.name = "RetryError", this.cause = cause;
    }
  }, defaultRetryOptions = {
    multiplier: 2,
    maxTimeout: 6e4,
    maxAttempts: 5,
    minTimeout: 1e3
  };
  async function retry(fn, opts) {
    let options2 = {
      ...defaultRetryOptions,
      ...opts
    };
    if (options2.maxTimeout >= 0 && options2.minTimeout > options2.maxTimeout)
      throw new RangeError("minTimeout is greater than maxTimeout");
    let timeout = options2.minTimeout, error;
    for (let i2 = 0; i2 < options2.maxAttempts; i2++)
      try {
        return await fn();
      } catch (err) {
        await new Promise((r) => setTimeout(r, timeout)), timeout *= options2.multiplier, timeout = Math.max(timeout, options2.minTimeout), options2.maxTimeout >= 0 && (timeout = Math.min(timeout, options2.maxTimeout)), error = err;
      }
    throw new RetryError(error, options2.maxAttempts);
  }

  // https://esm.sh/v116/memoize-one@6.0.0/deno/memoize-one.mjs
  var s = Number.isNaN || function(r) {
    return typeof r == "number" && r !== r;
  };

  // https://esm.sh/v116/lodash.throttle@4.1.1/deno/lodash.throttle.mjs
  var __global$ = globalThis || (typeof window < "u" ? window : self), P = Object.create, I = Object.defineProperty, D = Object.getOwnPropertyDescriptor, G = Object.getOwnPropertyNames, H = Object.getPrototypeOf, U = Object.prototype.hasOwnProperty, X = (e, t3) => () => (t3 || e((t3 = { exports: {} }).exports, t3), t3.exports), q = (e, t3) => {
    for (var n2 in t3)
      I(e, n2, { get: t3[n2], enumerable: !0 });
  }, v = (e, t3, n2, f3) => {
    if (t3 && typeof t3 == "object" || typeof t3 == "function")
      for (let i2 of G(t3))
        !U.call(e, i2) && i2 !== n2 && I(e, i2, { get: () => t3[i2], enumerable: !(f3 = D(t3, i2)) || f3.enumerable });
    return e;
  }, s2 = (e, t3, n2) => (v(e, t3, "default"), n2 && v(n2, t3, "default")), L = (e, t3, n2) => (n2 = e != null ? P(H(e)) : {}, v(t3 || !e || !e.__esModule ? I(n2, "default", { value: e, enumerable: !0 }) : n2, e)), h = X((ge, N6) => {
    var M5 = "Expected a function", W4 = NaN, z5 = "[object Symbol]", J4 = /^\s+|\s+$/g, K4 = /^[-+]0x[0-9a-f]+$/i, Q4 = /^0b[01]+$/i, V5 = /^0o[0-7]+$/i, Y3 = parseInt, Z3 = typeof __global$ == "object" && __global$ && __global$.Object === Object && __global$, w5 = typeof self == "object" && self && self.Object === Object && self, ee2 = Z3 || w5 || Function("return this")(), te = Object.prototype, ne2 = te.toString, re2 = Math.max, ie = Math.min, O5 = function() {
      return ee2.Date.now();
    };
    function fe(e, t3, n2) {
      var f3, i2, b5, l3, a4, u2, d5 = 0, S7 = !1, g5 = !1, T4 = !0;
      if (typeof e != "function")
        throw new TypeError(M5);
      t3 = C5(t3) || 0, p5(n2) && (S7 = !!n2.leading, g5 = "maxWait" in n2, b5 = g5 ? re2(C5(n2.maxWait) || 0, t3) : b5, T4 = "trailing" in n2 ? !!n2.trailing : T4);
      function j5(r) {
        var o3 = f3, m4 = i2;
        return f3 = i2 = void 0, d5 = r, l3 = e.apply(m4, o3), l3;
      }
      function A4(r) {
        return d5 = r, a4 = setTimeout(y3, t3), S7 ? j5(r) : l3;
      }
      function B8(r) {
        var o3 = r - u2, m4 = r - d5, k4 = t3 - o3;
        return g5 ? ie(k4, b5 - m4) : k4;
      }
      function E3(r) {
        var o3 = r - u2, m4 = r - d5;
        return u2 === void 0 || o3 >= t3 || o3 < 0 || g5 && m4 >= b5;
      }
      function y3() {
        var r = O5();
        if (E3(r))
          return _3(r);
        a4 = setTimeout(y3, B8(r));
      }
      function _3(r) {
        return a4 = void 0, T4 && f3 ? j5(r) : (f3 = i2 = void 0, l3);
      }
      function F6() {
        a4 !== void 0 && clearTimeout(a4), d5 = 0, f3 = u2 = i2 = a4 = void 0;
      }
      function R5() {
        return a4 === void 0 ? l3 : _3(O5());
      }
      function x4() {
        var r = O5(), o3 = E3(r);
        if (f3 = arguments, i2 = this, u2 = r, o3) {
          if (a4 === void 0)
            return A4(u2);
          if (g5)
            return a4 = setTimeout(y3, t3), j5(u2);
        }
        return a4 === void 0 && (a4 = setTimeout(y3, t3)), l3;
      }
      return x4.cancel = F6, x4.flush = R5, x4;
    }
    function ae(e, t3, n2) {
      var f3 = !0, i2 = !0;
      if (typeof e != "function")
        throw new TypeError(M5);
      return p5(n2) && (f3 = "leading" in n2 ? !!n2.leading : f3, i2 = "trailing" in n2 ? !!n2.trailing : i2), fe(e, t3, { leading: f3, maxWait: t3, trailing: i2 });
    }
    function p5(e) {
      var t3 = typeof e;
      return !!e && (t3 == "object" || t3 == "function");
    }
    function oe2(e) {
      return !!e && typeof e == "object";
    }
    function ue(e) {
      return typeof e == "symbol" || oe2(e) && ne2.call(e) == z5;
    }
    function C5(e) {
      if (typeof e == "number")
        return e;
      if (ue(e))
        return W4;
      if (p5(e)) {
        var t3 = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = p5(t3) ? t3 + "" : t3;
      }
      if (typeof e != "string")
        return e === 0 ? e : +e;
      e = e.replace(J4, "");
      var n2 = Q4.test(e);
      return n2 || V5.test(e) ? Y3(e.slice(2), n2 ? 2 : 8) : K4.test(e) ? W4 : +e;
    }
    N6.exports = ae;
  }), c = {};
  q(c, { default: () => se });
  var ce = L(h());
  s2(c, L(h()));
  var { default: $, ...le } = ce, se = $ !== void 0 ? $ : le;

  // https://esm.sh/v116/notie@4.3.1/deno/notie.mjs
  var Oe = Object.create, ve = Object.defineProperty, Ae = Object.getOwnPropertyDescriptor, De = Object.getOwnPropertyNames, Ie = Object.getPrototypeOf, je = Object.prototype.hasOwnProperty, Ne = (v5, i2) => () => (i2 || v5((i2 = { exports: {} }).exports, i2), i2.exports), Pe = (v5, i2) => {
    for (var l3 in i2)
      ve(v5, l3, { get: i2[l3], enumerable: !0 });
  }, me = (v5, i2, l3, x4) => {
    if (i2 && typeof i2 == "object" || typeof i2 == "function")
      for (let b5 of De(i2))
        !je.call(v5, b5) && b5 !== l3 && ve(v5, b5, { get: () => i2[b5], enumerable: !(x4 = Ae(i2, b5)) || x4.enumerable });
    return v5;
  }, X2 = (v5, i2, l3) => (me(v5, i2, "default"), l3 && me(l3, i2, "default")), ke = (v5, i2, l3) => (l3 = v5 != null ? Oe(Ie(v5)) : {}, me(i2 || !v5 || !v5.__esModule ? ve(l3, "default", { value: v5, enumerable: !0 }) : l3, v5)), xe = Ne((oe2, be) => {
    (function(v5, i2) {
      typeof oe2 == "object" && typeof be == "object" ? be.exports = i2() : typeof define == "function" && define.amd ? define([], i2) : typeof oe2 == "object" ? oe2.notie = i2() : v5.notie = i2();
    })(oe2, function() {
      return function(v5) {
        function i2(x4) {
          if (l3[x4])
            return l3[x4].exports;
          var b5 = l3[x4] = { i: x4, l: !1, exports: {} };
          return v5[x4].call(b5.exports, b5, b5.exports, i2), b5.l = !0, b5.exports;
        }
        var l3 = {};
        return i2.m = v5, i2.c = l3, i2.i = function(x4) {
          return x4;
        }, i2.d = function(x4, b5, re2) {
          i2.o(x4, b5) || Object.defineProperty(x4, b5, { configurable: !1, enumerable: !0, get: re2 });
        }, i2.n = function(x4) {
          var b5 = x4 && x4.__esModule ? function() {
            return x4.default;
          } : function() {
            return x4;
          };
          return i2.d(b5, "a", b5), b5;
        }, i2.o = function(x4, b5) {
          return Object.prototype.hasOwnProperty.call(x4, b5);
        }, i2.p = "", i2(i2.s = 1);
      }([function(v5, i2) {
        v5.exports = function(l3) {
          return l3.webpackPolyfill || (l3.deprecate = function() {
          }, l3.paths = [], l3.children || (l3.children = []), Object.defineProperty(l3, "loaded", { enumerable: !0, get: function() {
            return l3.l;
          } }), Object.defineProperty(l3, "id", { enumerable: !0, get: function() {
            return l3.i;
          } }), l3.webpackPolyfill = 1), l3;
        };
      }, function(v5, i2, l3) {
        "use strict";
        (function(x4) {
          var b5, re2, de, $5 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(A4) {
            return typeof A4;
          } : function(A4) {
            return A4 && typeof Symbol == "function" && A4.constructor === Symbol && A4 !== Symbol.prototype ? "symbol" : typeof A4;
          };
          (function(A4, p5) {
            $5(i2) === "object" && $5(x4) === "object" ? x4.exports = p5() : (re2 = [], b5 = p5, de = typeof b5 == "function" ? b5.apply(i2, re2) : b5, de !== void 0 && (x4.exports = de));
          })(void 0, function() {
            return function(A4) {
              function p5(g5) {
                if (ee2[g5])
                  return ee2[g5].exports;
                var T4 = ee2[g5] = { i: g5, l: !1, exports: {} };
                return A4[g5].call(T4.exports, T4, T4.exports, p5), T4.l = !0, T4.exports;
              }
              var ee2 = {};
              return p5.m = A4, p5.c = ee2, p5.i = function(g5) {
                return g5;
              }, p5.d = function(g5, T4, J4) {
                p5.o(g5, T4) || Object.defineProperty(g5, T4, { configurable: !1, enumerable: !0, get: J4 });
              }, p5.n = function(g5) {
                var T4 = g5 && g5.__esModule ? function() {
                  return g5.default;
                } : function() {
                  return g5;
                };
                return p5.d(T4, "a", T4), T4;
              }, p5.o = function(g5, T4) {
                return Object.prototype.hasOwnProperty.call(g5, T4);
              }, p5.p = "", p5(p5.s = 0);
            }([function(A4, p5, ee2) {
              function g5(t3, o3) {
                var s5 = {};
                for (var u2 in t3)
                  o3.indexOf(u2) >= 0 || Object.prototype.hasOwnProperty.call(t3, u2) && (s5[u2] = t3[u2]);
                return s5;
              }
              Object.defineProperty(p5, "__esModule", { value: !0 });
              var T4 = typeof Symbol == "function" && $5(Symbol.iterator) === "symbol" ? function(t3) {
                return typeof t3 > "u" ? "undefined" : $5(t3);
              } : function(t3) {
                return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3 > "u" ? "undefined" : $5(t3);
              }, J4 = Object.assign || function(t3) {
                for (var o3 = 1; o3 < arguments.length; o3++) {
                  var s5 = arguments[o3];
                  for (var u2 in s5)
                    Object.prototype.hasOwnProperty.call(s5, u2) && (t3[u2] = s5[u2]);
                }
                return t3;
              }, R5 = { top: "top", bottom: "bottom" }, e = { alertTime: 3, dateMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], overlayClickDismiss: !0, overlayOpacity: 0.75, transitionCurve: "ease", transitionDuration: 0.3, transitionSelector: "all", classes: { container: "notie-container", textbox: "notie-textbox", textboxInner: "notie-textbox-inner", button: "notie-button", element: "notie-element", elementHalf: "notie-element-half", elementThird: "notie-element-third", overlay: "notie-overlay", backgroundSuccess: "notie-background-success", backgroundWarning: "notie-background-warning", backgroundError: "notie-background-error", backgroundInfo: "notie-background-info", backgroundNeutral: "notie-background-neutral", backgroundOverlay: "notie-background-overlay", alert: "notie-alert", inputField: "notie-input-field", selectChoiceRepeated: "notie-select-choice-repeated", dateSelectorInner: "notie-date-selector-inner", dateSelectorUp: "notie-date-selector-up" }, ids: { overlay: "notie-overlay" }, positions: { alert: R5.top, force: R5.top, confirm: R5.top, input: R5.top, select: R5.bottom, date: R5.top } }, Ee = p5.setOptions = function(t3) {
                e = J4({}, e, t3, { classes: J4({}, e.classes, t3.classes), ids: J4({}, e.ids, t3.ids), positions: J4({}, e.positions, t3.positions) });
              }, ye = function() {
                return new Promise(function(t3) {
                  return setTimeout(t3, 0);
                });
              }, le2 = function(t3) {
                return new Promise(function(o3) {
                  return setTimeout(o3, 1e3 * t3);
                });
              }, W4 = function() {
                document.activeElement && document.activeElement.blur();
              }, K4 = function() {
                var t3 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(o3) {
                  var s5 = 16 * Math.random() | 0, u2 = o3 === "x" ? s5 : 3 & s5 | 8;
                  return u2.toString(16);
                });
                return "notie-" + t3;
              }, ue = { 1: e.classes.backgroundSuccess, success: e.classes.backgroundSuccess, 2: e.classes.backgroundWarning, warning: e.classes.backgroundWarning, 3: e.classes.backgroundError, error: e.classes.backgroundError, 4: e.classes.backgroundInfo, info: e.classes.backgroundInfo, 5: e.classes.backgroundNeutral, neutral: e.classes.backgroundNeutral }, Le = function() {
                return e.transitionSelector + " " + e.transitionDuration + "s " + e.transitionCurve;
              }, te = function(t3) {
                return t3.keyCode === 13;
              }, ne2 = function(t3) {
                return t3.keyCode === 27;
              }, Z3 = function(t3, o3) {
                t3.classList.add(e.classes.container), t3.style[o3] = "-10000px", document.body.appendChild(t3), t3.style[o3] = "-" + t3.offsetHeight + "px", t3.listener && window.addEventListener("keydown", t3.listener), ye().then(function() {
                  t3.style.transition = Le(), t3.style[o3] = 0;
                });
              }, O5 = function(t3, o3) {
                var s5 = document.getElementById(t3);
                s5 && (s5.style[o3] = "-" + s5.offsetHeight + "px", s5.listener && window.removeEventListener("keydown", s5.listener), le2(e.transitionDuration).then(function() {
                  s5.parentNode && s5.parentNode.removeChild(s5);
                }));
              }, se2 = function(t3, o3) {
                var s5 = document.createElement("div");
                s5.id = e.ids.overlay, s5.classList.add(e.classes.overlay), s5.classList.add(e.classes.backgroundOverlay), s5.style.opacity = 0, t3 && e.overlayClickDismiss && (s5.onclick = function() {
                  O5(t3.id, o3), j5();
                }), document.body.appendChild(s5), ye().then(function() {
                  s5.style.transition = Le(), s5.style.opacity = e.overlayOpacity;
                });
              }, j5 = function() {
                var t3 = document.getElementById(e.ids.overlay);
                t3.style.opacity = 0, le2(e.transitionDuration).then(function() {
                  t3.parentNode && t3.parentNode.removeChild(t3);
                });
              }, F6 = p5.hideAlerts = function(t3) {
                var o3 = document.getElementsByClassName(e.classes.alert);
                if (o3.length) {
                  for (var s5 = 0; s5 < o3.length; s5++) {
                    var u2 = o3[s5];
                    O5(u2.id, u2.position);
                  }
                  t3 && le2(e.transitionDuration).then(function() {
                    return t3();
                  });
                }
              }, Te = p5.alert = function(t3) {
                var o3 = t3.type, s5 = o3 === void 0 ? 4 : o3, u2 = t3.text, c3 = t3.time, k4 = c3 === void 0 ? e.alertTime : c3, H5 = t3.stay, S7 = H5 !== void 0 && H5, h3 = t3.position, f3 = h3 === void 0 ? e.positions.alert || f3.top : h3;
                W4(), F6();
                var d5 = document.createElement("div"), m4 = K4();
                d5.id = m4, d5.position = f3, d5.classList.add(e.classes.textbox), d5.classList.add(ue[s5]), d5.classList.add(e.classes.alert), d5.innerHTML = '<div class="' + e.classes.textboxInner + '">' + u2 + "</div>", d5.onclick = function() {
                  return O5(m4, f3);
                }, d5.listener = function(n2) {
                  (te(n2) || ne2(n2)) && F6();
                }, Z3(d5, f3), k4 && k4 < 1 && (k4 = 1), !S7 && k4 && le2(k4).then(function() {
                  return O5(m4, f3);
                });
              }, Me = p5.force = function(t3, o3) {
                var s5 = t3.type, u2 = s5 === void 0 ? 5 : s5, c3 = t3.text, k4 = t3.buttonText, H5 = k4 === void 0 ? "OK" : k4, S7 = t3.callback, h3 = t3.position, f3 = h3 === void 0 ? e.positions.force || f3.top : h3;
                W4(), F6();
                var d5 = document.createElement("div"), m4 = K4();
                d5.id = m4;
                var n2 = document.createElement("div");
                n2.classList.add(e.classes.textbox), n2.classList.add(e.classes.backgroundInfo), n2.innerHTML = '<div class="' + e.classes.textboxInner + '">' + c3 + "</div>";
                var r = document.createElement("div");
                r.classList.add(e.classes.button), r.classList.add(ue[u2]), r.innerHTML = H5, r.onclick = function() {
                  O5(m4, f3), j5(), S7 ? S7() : o3 && o3();
                }, d5.appendChild(n2), d5.appendChild(r), d5.listener = function(C5) {
                  te(C5) && r.click();
                }, Z3(d5, f3), se2();
              }, He = p5.confirm = function(t3, o3, s5) {
                var u2 = t3.text, c3 = t3.submitText, k4 = c3 === void 0 ? "Yes" : c3, H5 = t3.cancelText, S7 = H5 === void 0 ? "Cancel" : H5, h3 = t3.submitCallback, f3 = t3.cancelCallback, d5 = t3.position, m4 = d5 === void 0 ? e.positions.confirm || m4.top : d5;
                W4(), F6();
                var n2 = document.createElement("div"), r = K4();
                n2.id = r;
                var C5 = document.createElement("div");
                C5.classList.add(e.classes.textbox), C5.classList.add(e.classes.backgroundInfo), C5.innerHTML = '<div class="' + e.classes.textboxInner + '">' + u2 + "</div>";
                var y3 = document.createElement("div");
                y3.classList.add(e.classes.button), y3.classList.add(e.classes.elementHalf), y3.classList.add(e.classes.backgroundSuccess), y3.innerHTML = k4, y3.onclick = function() {
                  O5(r, m4), j5(), h3 ? h3() : o3 && o3();
                };
                var a4 = document.createElement("div");
                a4.classList.add(e.classes.button), a4.classList.add(e.classes.elementHalf), a4.classList.add(e.classes.backgroundError), a4.innerHTML = S7, a4.onclick = function() {
                  O5(r, m4), j5(), f3 ? f3() : s5 && s5();
                }, n2.appendChild(C5), n2.appendChild(y3), n2.appendChild(a4), n2.listener = function(E3) {
                  te(E3) ? y3.click() : ne2(E3) && a4.click();
                }, Z3(n2, m4), se2(n2, m4);
              }, ge = function(t3, o3, s5) {
                var u2 = t3.text, c3 = t3.submitText, k4 = c3 === void 0 ? "Submit" : c3, H5 = t3.cancelText, S7 = H5 === void 0 ? "Cancel" : H5, h3 = t3.submitCallback, f3 = t3.cancelCallback, d5 = t3.position, m4 = d5 === void 0 ? e.positions.input || m4.top : d5, n2 = g5(t3, ["text", "submitText", "cancelText", "submitCallback", "cancelCallback", "position"]);
                W4(), F6();
                var r = document.createElement("div"), C5 = K4();
                r.id = C5;
                var y3 = document.createElement("div");
                y3.classList.add(e.classes.textbox), y3.classList.add(e.classes.backgroundInfo), y3.innerHTML = '<div class="' + e.classes.textboxInner + '">' + u2 + "</div>";
                var a4 = document.createElement("input");
                a4.classList.add(e.classes.inputField), a4.setAttribute("autocapitalize", n2.autocapitalize || "none"), a4.setAttribute("autocomplete", n2.autocomplete || "off"), a4.setAttribute("autocorrect", n2.autocorrect || "off"), a4.setAttribute("autofocus", n2.autofocus || "true"), a4.setAttribute("inputmode", n2.inputmode || "verbatim"), a4.setAttribute("max", n2.max || ""), a4.setAttribute("maxlength", n2.maxlength || ""), a4.setAttribute("min", n2.min || ""), a4.setAttribute("minlength", n2.minlength || ""), a4.setAttribute("placeholder", n2.placeholder || ""), a4.setAttribute("spellcheck", n2.spellcheck || "default"), a4.setAttribute("step", n2.step || "any"), a4.setAttribute("type", n2.type || "text"), a4.value = n2.value || "", n2.allowed && (a4.oninput = function() {
                  var M5 = void 0;
                  if (Array.isArray(n2.allowed)) {
                    for (var w5 = "", _3 = n2.allowed, P6 = 0; P6 < _3.length; P6++)
                      _3[P6] === "an" ? w5 += "0-9a-zA-Z" : _3[P6] === "a" ? w5 += "a-zA-Z" : _3[P6] === "n" && (w5 += "0-9"), _3[P6] === "s" && (w5 += " ");
                    M5 = new RegExp("[^" + w5 + "]", "g");
                  } else
                    T4(n2.allowed) === "object" && (M5 = n2.allowed);
                  a4.value = a4.value.replace(M5, "");
                });
                var E3 = document.createElement("div");
                E3.classList.add(e.classes.button), E3.classList.add(e.classes.elementHalf), E3.classList.add(e.classes.backgroundSuccess), E3.innerHTML = k4, E3.onclick = function() {
                  O5(C5, m4), j5(), h3 ? h3(a4.value) : o3 && o3(a4.value);
                };
                var D7 = document.createElement("div");
                D7.classList.add(e.classes.button), D7.classList.add(e.classes.elementHalf), D7.classList.add(e.classes.backgroundError), D7.innerHTML = S7, D7.onclick = function() {
                  O5(C5, m4), j5(), f3 ? f3(a4.value) : s5 && s5(a4.value);
                }, r.appendChild(y3), r.appendChild(a4), r.appendChild(E3), r.appendChild(D7), r.listener = function(M5) {
                  te(M5) ? E3.click() : ne2(M5) && D7.click();
                }, Z3(r, m4), a4.focus(), se2(r, m4);
              };
              p5.input = ge;
              var Se = p5.select = function(t3, o3) {
                var s5 = t3.text, u2 = t3.cancelText, c3 = u2 === void 0 ? "Cancel" : u2, k4 = t3.cancelCallback, H5 = t3.choices, S7 = t3.position, h3 = S7 === void 0 ? e.positions.select || h3.top : S7;
                W4(), F6();
                var f3 = document.createElement("div"), d5 = K4();
                f3.id = d5;
                var m4 = document.createElement("div");
                m4.classList.add(e.classes.textbox), m4.classList.add(e.classes.backgroundInfo), m4.innerHTML = '<div class="' + e.classes.textboxInner + '">' + s5 + "</div>", f3.appendChild(m4), H5.forEach(function(r, C5) {
                  var y3 = r.type, a4 = y3 === void 0 ? 1 : y3, E3 = r.text, D7 = r.handler, M5 = document.createElement("div");
                  M5.classList.add(ue[a4]), M5.classList.add(e.classes.button), M5.classList.add(e.classes.selectChoice);
                  var w5 = H5[C5 + 1];
                  w5 && !w5.type && (w5.type = 1), w5 && w5.type === a4 && M5.classList.add(e.classes.selectChoiceRepeated), M5.innerHTML = E3, M5.onclick = function() {
                    O5(d5, h3), j5(), D7();
                  }, f3.appendChild(M5);
                });
                var n2 = document.createElement("div");
                n2.classList.add(e.classes.backgroundNeutral), n2.classList.add(e.classes.button), n2.innerHTML = c3, n2.onclick = function() {
                  O5(d5, h3), j5(), k4 ? k4() : o3 && o3();
                }, f3.appendChild(n2), f3.listener = function(r) {
                  ne2(r) && n2.click();
                }, Z3(f3, h3), se2(f3, h3);
              }, we = p5.date = function(t3, o3, s5) {
                var u2 = t3.value, c3 = u2 === void 0 ? /* @__PURE__ */ new Date() : u2, k4 = t3.submitText, H5 = k4 === void 0 ? "OK" : k4, S7 = t3.cancelText, h3 = S7 === void 0 ? "Cancel" : S7, f3 = t3.submitCallback, d5 = t3.cancelCallback, m4 = t3.position, n2 = m4 === void 0 ? e.positions.date || n2.top : m4;
                W4(), F6();
                var r = "&#9662", C5 = document.createElement("div"), y3 = document.createElement("div"), a4 = document.createElement("div"), E3 = function(L6) {
                  C5.innerHTML = e.dateMonths[L6.getMonth()], y3.innerHTML = L6.getDate(), a4.innerHTML = L6.getFullYear();
                }, D7 = function(L6) {
                  var N6 = new Date(c3.getFullYear(), c3.getMonth() + 1, 0).getDate(), V5 = L6.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 2);
                  Number(V5) > N6 && (V5 = N6.toString()), L6.target.textContent = V5, Number(V5) < 1 && (V5 = "1"), c3.setDate(Number(V5));
                }, M5 = function(L6) {
                  var N6 = L6.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 4);
                  L6.target.textContent = N6, c3.setFullYear(Number(N6));
                }, w5 = function(L6) {
                  E3(c3);
                }, _3 = function(L6) {
                  var N6 = new Date(c3.getFullYear(), c3.getMonth() + L6 + 1, 0).getDate();
                  c3.getDate() > N6 && c3.setDate(N6), c3.setMonth(c3.getMonth() + L6), E3(c3);
                }, P6 = function(L6) {
                  c3.setDate(c3.getDate() + L6), E3(c3);
                }, he = function(L6) {
                  var N6 = c3.getFullYear() + L6;
                  N6 < 0 ? c3.setFullYear(0) : c3.setFullYear(c3.getFullYear() + L6), E3(c3);
                }, Y3 = document.createElement("div"), pe = K4();
                Y3.id = pe;
                var fe = document.createElement("div");
                fe.classList.add(e.classes.backgroundInfo);
                var I4 = document.createElement("div");
                I4.classList.add(e.classes.dateSelectorInner);
                var q6 = document.createElement("div");
                q6.classList.add(e.classes.button), q6.classList.add(e.classes.elementThird), q6.classList.add(e.classes.dateSelectorUp), q6.innerHTML = r;
                var G5 = document.createElement("div");
                G5.classList.add(e.classes.button), G5.classList.add(e.classes.elementThird), G5.classList.add(e.classes.dateSelectorUp), G5.innerHTML = r;
                var Q4 = document.createElement("div");
                Q4.classList.add(e.classes.button), Q4.classList.add(e.classes.elementThird), Q4.classList.add(e.classes.dateSelectorUp), Q4.innerHTML = r, C5.classList.add(e.classes.element), C5.classList.add(e.classes.elementThird), C5.innerHTML = e.dateMonths[c3.getMonth()], y3.classList.add(e.classes.element), y3.classList.add(e.classes.elementThird), y3.setAttribute("contentEditable", !0), y3.addEventListener("input", D7), y3.addEventListener("blur", w5), y3.innerHTML = c3.getDate(), a4.classList.add(e.classes.element), a4.classList.add(e.classes.elementThird), a4.setAttribute("contentEditable", !0), a4.addEventListener("input", M5), a4.addEventListener("blur", w5), a4.innerHTML = c3.getFullYear();
                var ae = document.createElement("div");
                ae.classList.add(e.classes.button), ae.classList.add(e.classes.elementThird), ae.innerHTML = r;
                var ie = document.createElement("div");
                ie.classList.add(e.classes.button), ie.classList.add(e.classes.elementThird), ie.innerHTML = r;
                var ce3 = document.createElement("div");
                ce3.classList.add(e.classes.button), ce3.classList.add(e.classes.elementThird), ce3.innerHTML = r, q6.onclick = function() {
                  return _3(1);
                }, G5.onclick = function() {
                  return P6(1);
                }, Q4.onclick = function() {
                  return he(1);
                }, ae.onclick = function() {
                  return _3(-1);
                }, ie.onclick = function() {
                  return P6(-1);
                }, ce3.onclick = function() {
                  return he(-1);
                };
                var z5 = document.createElement("div");
                z5.classList.add(e.classes.button), z5.classList.add(e.classes.elementHalf), z5.classList.add(e.classes.backgroundSuccess), z5.innerHTML = H5, z5.onclick = function() {
                  O5(pe, n2), j5(), f3 ? f3(c3) : o3 && o3(c3);
                };
                var U6 = document.createElement("div");
                U6.classList.add(e.classes.button), U6.classList.add(e.classes.elementHalf), U6.classList.add(e.classes.backgroundError), U6.innerHTML = h3, U6.onclick = function() {
                  O5(pe, n2), j5(), d5 ? d5(c3) : s5 && s5(c3);
                }, I4.appendChild(q6), I4.appendChild(G5), I4.appendChild(Q4), I4.appendChild(C5), I4.appendChild(y3), I4.appendChild(a4), I4.appendChild(ae), I4.appendChild(ie), I4.appendChild(ce3), fe.appendChild(I4), Y3.appendChild(fe), Y3.appendChild(z5), Y3.appendChild(U6), Y3.listener = function(L6) {
                  te(L6) ? z5.click() : ne2(L6) && U6.click();
                }, Z3(Y3, n2), se2(Y3, n2);
              };
              p5.default = { alert: Te, force: Me, confirm: He, input: ge, select: Se, date: we, setOptions: Ee, hideAlerts: F6 };
            }]);
          });
        }).call(i2, l3(0)(v5));
      }]);
    });
  }), B = {};
  Pe(B, { default: () => Ye });
  var Fe = ke(xe());
  X2(B, ke(xe()));
  var { default: Ce, ..._e } = Fe, Ye = Ce !== void 0 ? Ce : _e;

  // https://esm.sh/v116/nanostores@0.7.4/deno/nanostores.mjs
  var S = Symbol("clean");
  var m = Symbol();

  // https://esm.sh/v116/@nanostores/i18n@0.7.1/deno/i18n.mjs
  function g(r, n2) {
    if (typeof r == "string")
      return n2(r);
    {
      let e = {};
      for (let t3 in r)
        e[t3] = g(r[t3], n2);
      return e;
    }
  }
  function p(r) {
    return (n2) => {
      if (n2.transform) {
        let e = n2.transform;
        return n2 = n2.input, { input: n2, transform(t3, o3, s5) {
          let f3 = r(t3, o3, ...s5);
          return (...l3) => e(t3, f3, l3);
        } };
      } else
        return { input: n2, transform(e, t3, o3) {
          return r(e, t3, ...o3);
        } };
    };
  }
  var N = p((r, n2, e) => g(n2, (t3) => {
    for (let o3 in e)
      t3 = t3.replace(new RegExp(`{${o3}}`, "g"), e[o3]);
    return t3;
  })), R = p((r, n2, e) => {
    let t3 = new Intl.PluralRules(r).select(e);
    return t3 in n2 || (t3 = "many"), g(n2[t3], (o3) => o3.replace(/{count}/g, e));
  });

  // https://esm.sh/v116/hotkeys-js@3.10.1/deno/hotkeys-js.mjs
  var M = typeof navigator < "u" ? navigator.userAgent.toLowerCase().indexOf("firefox") > 0 : !1;
  function P2(e, t3, i2, r) {
    e.addEventListener ? e.addEventListener(t3, i2, r) : e.attachEvent && e.attachEvent("on".concat(t3), function() {
      i2(window.event);
    });
  }
  function T(e, t3) {
    for (var i2 = t3.slice(0, t3.length - 1), r = 0; r < i2.length; r++)
      i2[r] = e[i2[r].toLowerCase()];
    return i2;
  }
  function U2(e) {
    typeof e != "string" && (e = ""), e = e.replace(/\s/g, "");
    for (var t3 = e.split(","), i2 = t3.lastIndexOf(""); i2 >= 0; )
      t3[i2 - 1] += ",", t3.splice(i2, 1), i2 = t3.lastIndexOf("");
    return t3;
  }
  function G2(e, t3) {
    for (var i2 = e.length >= t3.length ? e : t3, r = e.length >= t3.length ? t3 : e, n2 = !0, a4 = 0; a4 < i2.length; a4++)
      r.indexOf(i2[a4]) === -1 && (n2 = !1);
    return n2;
  }
  var b = { backspace: 8, "\u232B": 8, tab: 9, clear: 12, enter: 13, "\u21A9": 13, return: 13, esc: 27, escape: 27, space: 32, left: 37, up: 38, right: 39, down: 40, del: 46, delete: 46, ins: 45, insert: 45, home: 36, end: 35, pageup: 33, pagedown: 34, capslock: 20, num_0: 96, num_1: 97, num_2: 98, num_3: 99, num_4: 100, num_5: 101, num_6: 102, num_7: 103, num_8: 104, num_9: 105, num_multiply: 106, num_add: 107, num_enter: 108, num_subtract: 109, num_decimal: 110, num_divide: 111, "\u21EA": 20, ",": 188, ".": 190, "/": 191, "`": 192, "-": M ? 173 : 189, "=": M ? 61 : 187, ";": M ? 59 : 186, "'": 222, "[": 219, "]": 221, "\\": 220 }, g2 = { "\u21E7": 16, shift: 16, "\u2325": 18, alt: 18, option: 18, "\u2303": 17, ctrl: 17, control: 17, "\u2318": 91, cmd: 91, command: 91 }, L2 = { 16: "shiftKey", 18: "altKey", 17: "ctrlKey", 91: "metaKey", shiftKey: 16, ctrlKey: 17, altKey: 18, metaKey: 91 }, u = { 16: !1, 18: !1, 17: !1, 91: !1 }, s3 = {};
  for (O = 1; O < 20; O++)
    b["f".concat(O)] = 111 + O;
  var O, f = [], A = !1, D2 = "all", H2 = [], C = function(t3) {
    return b[t3.toLowerCase()] || g2[t3.toLowerCase()] || t3.toUpperCase().charCodeAt(0);
  }, R2 = function(t3) {
    return Object.keys(b).find(function(i2) {
      return b[i2] === t3;
    });
  }, V = function(t3) {
    return Object.keys(g2).find(function(i2) {
      return g2[i2] === t3;
    });
  };
  function F(e) {
    D2 = e || "all";
  }
  function E() {
    return D2 || "all";
  }
  function X3() {
    return f.slice(0);
  }
  function $2() {
    return f.map(function(e) {
      return R2(e) || V(e) || String.fromCharCode(e);
    });
  }
  function q2(e) {
    var t3 = e.target || e.srcElement, i2 = t3.tagName, r = !0;
    return (t3.isContentEditable || (i2 === "INPUT" || i2 === "TEXTAREA" || i2 === "SELECT") && !t3.readOnly) && (r = !1), r;
  }
  function z2(e) {
    return typeof e == "string" && (e = C(e)), f.indexOf(e) !== -1;
  }
  function J(e, t3) {
    var i2, r;
    e || (e = E());
    for (var n2 in s3)
      if (Object.prototype.hasOwnProperty.call(s3, n2))
        for (i2 = s3[n2], r = 0; r < i2.length; )
          i2[r].scope === e ? i2.splice(r, 1) : r++;
    E() === e && F(t3 || "all");
  }
  function N2(e) {
    var t3 = e.keyCode || e.which || e.charCode, i2 = f.indexOf(t3);
    if (i2 >= 0 && f.splice(i2, 1), e.key && e.key.toLowerCase() === "meta" && f.splice(0, f.length), (t3 === 93 || t3 === 224) && (t3 = 91), t3 in u) {
      u[t3] = !1;
      for (var r in g2)
        g2[r] === t3 && (v2[r] = !1);
    }
  }
  function Q(e) {
    if (typeof e > "u")
      Object.keys(s3).forEach(function(o3) {
        return delete s3[o3];
      });
    else if (Array.isArray(e))
      e.forEach(function(o3) {
        o3.key && S2(o3);
      });
    else if (typeof e == "object")
      e.key && S2(e);
    else if (typeof e == "string") {
      for (var t3 = arguments.length, i2 = new Array(t3 > 1 ? t3 - 1 : 0), r = 1; r < t3; r++)
        i2[r - 1] = arguments[r];
      var n2 = i2[0], a4 = i2[1];
      typeof n2 == "function" && (a4 = n2, n2 = ""), S2({ key: e, scope: n2, method: a4, splitKey: "+" });
    }
  }
  var S2 = function(t3) {
    var i2 = t3.key, r = t3.scope, n2 = t3.method, a4 = t3.splitKey, o3 = a4 === void 0 ? "+" : a4, l3 = U2(i2);
    l3.forEach(function(c3) {
      var p5 = c3.split(o3), m4 = p5.length, y3 = p5[m4 - 1], d5 = y3 === "*" ? "*" : C(y3);
      if (s3[d5]) {
        r || (r = E());
        var K4 = m4 > 1 ? T(g2, p5) : [];
        s3[d5] = s3[d5].filter(function(h3) {
          var w5 = n2 ? h3.method === n2 : !0;
          return !(w5 && h3.scope === r && G2(h3.mods, K4));
        });
      }
    });
  };
  function _(e, t3, i2, r) {
    if (t3.element === r) {
      var n2;
      if (t3.scope === i2 || t3.scope === "all") {
        n2 = t3.mods.length > 0;
        for (var a4 in u)
          Object.prototype.hasOwnProperty.call(u, a4) && (!u[a4] && t3.mods.indexOf(+a4) > -1 || u[a4] && t3.mods.indexOf(+a4) === -1) && (n2 = !1);
        (t3.mods.length === 0 && !u[16] && !u[18] && !u[17] && !u[91] || n2 || t3.shortcut === "*") && t3.method(e, t3) === !1 && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), e.cancelBubble && (e.cancelBubble = !0));
      }
    }
  }
  function k(e, t3) {
    var i2 = s3["*"], r = e.keyCode || e.which || e.charCode;
    if (v2.filter.call(this, e)) {
      if ((r === 93 || r === 224) && (r = 91), f.indexOf(r) === -1 && r !== 229 && f.push(r), ["ctrlKey", "altKey", "shiftKey", "metaKey"].forEach(function(h3) {
        var w5 = L2[h3];
        e[h3] && f.indexOf(w5) === -1 ? f.push(w5) : !e[h3] && f.indexOf(w5) > -1 ? f.splice(f.indexOf(w5), 1) : h3 === "metaKey" && e[h3] && f.length === 3 && (e.ctrlKey || e.shiftKey || e.altKey || (f = f.slice(f.indexOf(w5))));
      }), r in u) {
        u[r] = !0;
        for (var n2 in g2)
          g2[n2] === r && (v2[n2] = !0);
        if (!i2)
          return;
      }
      for (var a4 in u)
        Object.prototype.hasOwnProperty.call(u, a4) && (u[a4] = e[L2[a4]]);
      e.getModifierState && !(e.altKey && !e.ctrlKey) && e.getModifierState("AltGraph") && (f.indexOf(17) === -1 && f.push(17), f.indexOf(18) === -1 && f.push(18), u[17] = !0, u[18] = !0);
      var o3 = E();
      if (i2)
        for (var l3 = 0; l3 < i2.length; l3++)
          i2[l3].scope === o3 && (e.type === "keydown" && i2[l3].keydown || e.type === "keyup" && i2[l3].keyup) && _(e, i2[l3], o3, t3);
      if (r in s3) {
        for (var c3 = 0; c3 < s3[r].length; c3++)
          if ((e.type === "keydown" && s3[r][c3].keydown || e.type === "keyup" && s3[r][c3].keyup) && s3[r][c3].key) {
            for (var p5 = s3[r][c3], m4 = p5.splitKey, y3 = p5.key.split(m4), d5 = [], K4 = 0; K4 < y3.length; K4++)
              d5.push(C(y3[K4]));
            d5.sort().join("") === f.sort().join("") && _(e, p5, o3, t3);
          }
      }
    }
  }
  function W(e) {
    return H2.indexOf(e) > -1;
  }
  function v2(e, t3, i2) {
    f = [];
    var r = U2(e), n2 = [], a4 = "all", o3 = document, l3 = 0, c3 = !1, p5 = !0, m4 = "+", y3 = !1;
    for (i2 === void 0 && typeof t3 == "function" && (i2 = t3), Object.prototype.toString.call(t3) === "[object Object]" && (t3.scope && (a4 = t3.scope), t3.element && (o3 = t3.element), t3.keyup && (c3 = t3.keyup), t3.keydown !== void 0 && (p5 = t3.keydown), t3.capture !== void 0 && (y3 = t3.capture), typeof t3.splitKey == "string" && (m4 = t3.splitKey)), typeof t3 == "string" && (a4 = t3); l3 < r.length; l3++)
      e = r[l3].split(m4), n2 = [], e.length > 1 && (n2 = T(g2, e)), e = e[e.length - 1], e = e === "*" ? "*" : C(e), e in s3 || (s3[e] = []), s3[e].push({ keyup: c3, keydown: p5, scope: a4, mods: n2, shortcut: r[l3], method: i2, key: r[l3], splitKey: m4, element: o3 });
    typeof o3 < "u" && !W(o3) && window && (H2.push(o3), P2(o3, "keydown", function(d5) {
      k(d5, o3);
    }, y3), A || (A = !0, P2(window, "focus", function() {
      f = [];
    }, y3)), P2(o3, "keyup", function(d5) {
      k(d5, o3), N2(d5);
    }, y3));
  }
  function Y(e) {
    var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "all";
    Object.keys(s3).forEach(function(i2) {
      var r = s3[i2].filter(function(n2) {
        return n2.scope === t3 && n2.shortcut === e;
      });
      r.forEach(function(n2) {
        n2 && n2.method && n2.method();
      });
    });
  }
  var j = { getPressedKeyString: $2, setScope: F, getScope: E, deleteScope: J, getPressedKeyCodes: X3, isPressed: z2, filter: q2, trigger: Y, unbind: Q, keyMap: b, modifier: g2, modifierMap: L2 };
  for (x in j)
    Object.prototype.hasOwnProperty.call(j, x) && (v2[x] = j[x]);
  var x;
  typeof document < "u" && (B3 = window.hotkeys, v2.noConflict = function(e) {
    return e && window.hotkeys === v2 && (window.hotkeys = B3), v2;
  }, window.hotkeys = v2);
  var B3;

  // https://esm.sh/v116/immersive-translate@1.0.9/deno/immersive-translate.mjs
  var d2 = "Immersive Translate", v3 = class {
    #e = performance.now();
    reset() {
      this.#e = performance.now();
    }
    stop(e) {
      let t3 = performance.now(), n2 = Math.round(t3 - this.#e);
      console.debug(d2 + " TIMING:", e, "in", n2 + "ms"), this.#e = t3;
    }
  }, D3 = class {
    #e = 1;
    get level() {
      return this.#e;
    }
    setLevel(e) {
      switch (e) {
        case "debug":
          this.#e = 0;
          break;
        case "info":
          this.#e = 1;
          break;
        case "warn":
          this.#e = 2;
          break;
        case "error":
          this.#e = 3;
          break;
        case "fatal":
          this.#e = 4;
          break;
      }
    }
    debug(...e) {
      this.#e <= 0 && console.log(d2 + " DEBUG:", ...e);
    }
    v(...e) {
      this.#e <= 0 && console.log(d2 + " VERBOSE:", ...e);
    }
    info(...e) {
      this.#e <= 1 && console.log(d2 + " INFO:", ...e);
    }
    l(...e) {
      this.#e <= 1 && console.log(d2 + " TEMP INFO:", ...e);
    }
    warn(...e) {
      this.#e <= 2 && console.warn(d2 + " WARN:", ...e);
    }
    error(...e) {
      this.#e <= 3 && console.error(d2 + " ERROR:", ...e);
    }
    fatal(...e) {
      this.#e <= 4 && console.error(d2 + " FATAL:", ...e);
    }
    timing() {
      return this.level === 0 ? new v3() : { reset: () => {
      }, stop: () => {
      } };
    }
  }, E2 = new D3(), L3 = "poegempjloogba", I2 = "ension://", N3 = "me-";
  function T2(e) {
    if (!e)
      return [!1, !0];
    let t3 = new Date(e).getTime(), n2 = (/* @__PURE__ */ new Date()).getTime(), o3 = t3 - n2 < 15e3;
    return [t3 - n2 > 3e3, o3];
  }
  function b2(e) {
    return e ? e.PROD === "1" : !0;
  }
  function F2(e) {
    return e ? e.MOCK === "1" : !1;
  }
  function O2(e) {
    return new Promise((t3, n2) => {
      setTimeout(() => {
        t3();
      }, e);
    });
  }
  var U3 = "rome-ext";
  function $3(e, t3) {
    return t3 ? e + (t3 - e % t3) : e;
  }
  function j2(e, t3) {
    return e.split(t3).length - 1;
  }
  function P3(e) {
    let t3 = Date.now(), n2 = 1;
    for (let o3 of e)
      n2 += j2(o3, "i");
    return $3(t3, n2);
  }
  function K(e, t3) {
    return Math.floor(Math.random() * (t3 - e + 1)) + e;
  }
  var M2 = "extension", z3 = "chro";
  function B4() {
    return K(1e6, 1e8);
  }
  var S3 = "BrowserExt";
  function J2(e) {
    return JSON.stringify(e).replace('"method":"', () => {
      let t3 = e;
      return (t3.id + 3) % 13 === 0 || (t3.id + 5) % 29 === 0 ? '"method" : "' : '"method": "';
    });
  }
  var y = "DeepL", x2 = "ension", V2 = "ch" + U3 + I2 + "cofdb" + L3 + "gkncekinflcnj";
  function C2(e) {
    let { contentType: t3, userAgent: n2, url: o3, authorization: r, clientVersion: s5 } = e, i2 = new URL(o3), a4 = new Headers();
    if (a4.append("authority", i2.hostname), a4.append("accept", "*/*"), a4.append("accept-language", "ja"), r && a4.append("authorization", `Bearer ${r}`), a4.append("cache-control", "no-cache"), t3 ? a4.append("content-type", t3) : a4.append("content-type", "application/json; charset=utf-8"), a4.append("origin", V2), a4.append("pragma", "no-cache"), a4.append("referer", "https://www.deepl.com/"), a4.append("sec-fetch-dest", "empty"), a4.append("sec-fetch-mode", "cors"), a4.append("sec-fetch-site", "none"), n2)
      a4.append("user-agent", n2);
    else if (globalThis && globalThis.navigator && globalThis.navigator.userAgent) {
      let p5 = globalThis.navigator.userAgent;
      a4.append("user-agent", `${y}${S3}${x2}/${s5 || "1.1.1"} ${p5}`);
    } else
      a4.append("user-agent", `${y}${S3}${x2}/${s5 || "1.1.1"} Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.78`);
    let c3 = {};
    for (let [p5, f3] of a4.entries())
      c3[p5] = f3;
    return c3;
  }
  function q3(e) {
    let t3 = "1.1.1", { texts: n2, target_lang: o3, source_lang: r } = e, s5 = { jsonrpc: "2.0", method: "LMT_handle_texts", params: { texts: n2.map((a4) => ({ text: a4 })), splitting: "newlines", lang: { target_lang: o3, source_lang_user_selected: r || "auto", preference: { weight: { BG: 119e-5, CS: 0.04360000000000001, DA: 0.007090000000000001, DE: 0.02142, EL: 287e-5, EN: 4.79277, ES: 0.029710000000000004, ET: 0.007300000000000001, FI: 0.013850000000000001, FR: 0.04227, HU: 0.019000000000000003, ID: 423e-5, IT: 0.03592, JA: 453e-5, LT: 0.031700000000000006, LV: 27e-4, NL: 0.02375, PL: 0.044520000000000004, PT: 0.017320000000000002, RO: 0.009040000000000001, RU: 234e-5, SK: 0.04977, SL: 691e-5, SV: 0.0049700000000000005, TR: 0.01076, UK: 201e-5, ZH: 0.004880000000000001 } } }, timestamp: P3(n2) }, id: B4() }, i2 = C2({ url: "https://api.deepl.com/jsonrpc", clientVersion: t3, authorization: e.authorization });
    return { url: `https://api.deepl.com/jsonrpc?client=${z3 + N3 + M2},${t3}`, headers: i2, body: J2(s5), method: "POST" };
  }
  function G3(e) {
    let t3 = e.split(".");
    if (t3.length <= 1)
      throw new Error("invlaid token");
    let n2 = t3[1];
    if (!n2)
      throw new Error("invalid base64 url token");
    let o3 = n2.replace(/-/g, "+").replace(/_/g, "/"), r = decodeURIComponent(globalThis.atob(o3).split("").map(function(a4) {
      return "%" + ("00" + a4.charCodeAt(0).toString(16)).slice(-2);
    }).join("")), s5 = JSON.parse(r), i2 = new Date(s5.exp * 1e3);
    return { accessToken: e, accessTokenExpiresAt: i2.toISOString() };
  }
  var g3 = {}, w = {};
  async function _2(e, t3) {
    if (!e)
      throw new Error("auth key is required");
    let { state: n2 } = t3, { refreshToken: o3, refreshTokenExpiresAt: r, refreshTokenChecksAt: s5 } = n2, [i2, a4] = T2(r);
    a4 || (a4 = T2(s5)[1]);
    let c3 = { refreshToken: o3, refreshTokenExpiresAt: r, refreshTokenChecksAt: s5 || (/* @__PURE__ */ new Date()).toISOString() };
    i2 || (c3 = await m2(e, t3));
    let [p5, f3] = T2(c3.refreshTokenExpiresAt);
    a4 = f3, a4 || (a4 = T2(c3.refreshTokenChecksAt)[1]);
    let h3 = c3.refreshToken;
    if (g3[h3])
      return new Promise((u2, l3) => {
        g3[h3].push((k4, R5) => {
          k4 ? l3(k4) : u2(R5);
        });
      });
    g3[h3] = [];
    try {
      let u2 = await H3(h3, t3.onFetch), l3 = { state: { ...n2, ...c3, ...u2 }, shouldUpdateRefreshToken: a4 };
      return g3[h3].forEach((k4) => {
        k4(null, l3);
      }), delete g3[h3], l3;
    } catch (u2) {
      throw g3[h3].forEach((l3) => {
        l3(u2);
      }), delete g3[h3], u2;
    }
  }
  async function m2(e, t3) {
    if (!e)
      throw new Error("auth key is required");
    let { refreshTokenEndpoint: n2, onFetch: o3 } = t3;
    if (w[e])
      return new Promise((r, s5) => {
        w[e].push((i2, a4) => {
          i2 ? s5(i2) : r(a4);
        });
      });
    try {
      w[e] = [];
      let r = new URLSearchParams({ grant_type: "auth_key", auth_key: e }), s5 = new URL("/refresh_token?" + r.toString(), n2), i2 = await o3(s5.toString()), a4 = (/* @__PURE__ */ new Date()).getTime(), c3 = a4 + i2.refresh_token_expires_in * 1e3, p5 = a4 + i2.refresh_token_checks_in * 1e3, f3 = { refreshToken: i2.refresh_token, refreshTokenExpiresAt: new Date(c3).toISOString(), refreshTokenChecksAt: new Date(p5).toISOString() };
      return w[e].forEach((h3) => {
        h3(null, f3);
      }), delete w[e], f3;
    } catch (r) {
      throw w[e].forEach((s5) => {
        s5(r);
      }), delete w[e], r;
    }
  }
  async function H3(e, t3) {
    if (!e)
      throw new Error("refreshToken is required");
    let n2 = b2(), o3 = F2();
    if (!n2 && !o3) {
      await O2(400);
      let a4 = /* @__PURE__ */ new Date();
      return { accessToken: "test", accessTokenExpiresAt: new Date(a4.getTime() + 1e3 * 5).toISOString() };
    }
    let r = "https://w.deepl.com/oidc/token", s5 = await t3(r, { headers: C2({ url: r, contentType: "application/x-www-form-urlencoded" }), body: `grant_type=refresh_token&refresh_token=${e}`, method: "POST" }), i2 = G3(s5.access_token);
    if (s5.expires_in) {
      let a4 = /* @__PURE__ */ new Date(), c3 = new Date(a4.getTime() + s5.expires_in * 1e3);
      i2.accessTokenExpiresAt = c3.toISOString();
    }
    return i2;
  }
  async function A2(e, t3, n2) {
    if (!t3)
      throw new Error("body is required");
    let o3 = new URLSearchParams(t3), r = o3.getAll("text");
    if (r.length < 1)
      throw new Error("No text to translate");
    if (W2(r) > 5e3)
      throw new Error("text too long, the max length is 5000 characters.");
    let s5 = o3.get("target_lang");
    if (!s5)
      throw new Error("No target language");
    let i2 = o3.get("source_lang"), a4 = { ...q3({ texts: r, authorization: e, target_lang: s5, source_lang: i2 }), responseType: "raw" }, c3 = b2(), p5 = F2();
    if (!c3 && !p5)
      return await O2(50), { translations: r.map((l3) => ({ text: "mock: " + l3, detected_source_language: "EN" })) };
    let f3 = await n2(a4.url, a4), h3 = JSON.parse(f3.body), u2 = [];
    if (h3.result && h3.result.texts)
      u2 = h3.result.texts.map((l3) => ({ text: l3.text, detected_source_language: h3.result.lang }));
    else
      throw new Error("No response from deepl api");
    return { translations: u2 };
  }
  function W2(e) {
    let t3 = 0;
    for (let n2 of e)
      t3 += n2.length;
    return t3;
  }
  async function X4(e) {
    e.body;
    let { url: t3, responseType: n2, ...o3 } = e;
    n2 || (n2 = "json"), o3 = { redirect: "follow", ...o3 };
    let r = await Z(t3, o3);
    if (r.ok && r.status >= 200 && r.status < 400)
      if (n2 === "json") {
        let s5 = await r.json();
        return E2.debug("response", JSON.stringify(s5, null, 2)), s5;
      } else {
        if (n2 === "text")
          return await r.text();
        if (n2 === "raw") {
          let s5 = await r.text(), i2 = Object.fromEntries([...r.headers.entries()]), a4 = r.url;
          return { body: s5, headers: i2, status: r.status, statusText: r.statusText, url: a4 };
        }
      }
    else {
      let s5;
      try {
        s5 = await r.text();
      } catch (i2) {
        E2.error("parse response failed", i2);
      }
      throw new Error(r.status + ": " + r.statusText || " " + s5 || "");
    }
  }
  async function Z(e, t3) {
    let n2 = 15e3;
    t3 && t3.timeout && (n2 = t3.timeout);
    let o3 = new AbortController(), r = setTimeout(() => o3.abort(), n2), s5 = await fetch(e, { ...t3, signal: o3.signal });
    return clearTimeout(r), s5;
  }
  var Q2 = class {
    constructor(e, t3) {
      this.state = {}, this.isStateChanged = !1, this.onFetch = (n2, o3) => X4({ url: n2, ...o3 }), this.refreshTokenEndpoint = "https://api.immersivetranslate.com", this.authKey = e, t3 = t3 || {}, t3.state && (this.state = t3.state), t3.onFetch && (this.onFetch = t3.onFetch), t3.refreshTokenEndpoint && (this.refreshTokenEndpoint = t3.refreshTokenEndpoint), t3.onStateChange && (this.onStateChange = t3.onStateChange);
    }
    getState() {
      return this.state;
    }
    getIsStateChanged() {
      let e = this.isStateChanged;
      return this.isStateChanged = !1, e;
    }
    setState(e) {
      this.state = e, this.isStateChanged = !0, this.onStateChange && this.onStateChange(e);
    }
    async translateText(e, t3, n2) {
      await this.updateToken();
      let o3 = new URLSearchParams();
      (Array.isArray(e) ? e : [e]).forEach((s5, i2) => {
        o3.append("text", s5);
      }), t3 && o3.append("source_lang", t3), n2 && o3.append("target_lang", n2);
      let r = await A2(this.state.accessToken, o3.toString(), this.onFetch);
      if (r && r.translations && r.translations.length > 0)
        return Array.isArray(e) ? r.translations.map((s5) => ({ text: s5.text, detectedSourceLanguage: s5.detected_source_language })) : { text: r.translations[0].text, detectedSourceLanguage: r.translations[0].detected_source_language };
      throw new Error("No translation result");
    }
    async translateApi(e) {
      return await this.updateToken(), await A2(this.state.accessToken, e, this.onFetch);
    }
    async forceUpdateRefreshToken() {
      await m2(this.authKey, { state: this.state, onFetch: this.onFetch, refreshTokenEndpoint: this.refreshTokenEndpoint }).then((e) => {
        this.setState({ ...this.state, ...e });
      });
    }
    onFetchTokenError(e) {
      throw E2.error("onFetchTokenError", e), e && e.message && (e.message.indexOf("401") > -1 || e.message.indexOf("400") > -1) && this.setState({}), e;
    }
    async updateToken() {
      let { accessTokenExpiresAt: e } = this.state, [t3, n2] = T2(e);
      if (t3)
        n2 && _2(this.authKey, { state: this.state, onFetch: this.onFetch, refreshTokenEndpoint: this.refreshTokenEndpoint }).then(({ state: o3, shouldUpdateRefreshToken: r }) => {
          this.setState({ ...this.state, ...o3 }), r && m2(this.authKey, { state: this.state, onFetch: this.onFetch, refreshTokenEndpoint: this.refreshTokenEndpoint }).then((s5) => {
            this.setState({ ...this.state, ...s5 });
          });
        }).catch((o3) => {
          this.onFetchTokenError(o3);
        });
      else
        try {
          let { state: o3, shouldUpdateRefreshToken: r } = await _2(this.authKey, { state: this.state, onFetch: this.onFetch, refreshTokenEndpoint: this.refreshTokenEndpoint });
          this.setState(o3), r && m2(this.authKey, { state: this.state, onFetch: this.onFetch, refreshTokenEndpoint: this.refreshTokenEndpoint }).then((s5) => {
            this.setState({ ...this.state, ...s5 });
          }).catch((s5) => {
            console.warn("fetch refresh token error", s5);
          });
        } catch (o3) {
          this.onFetchTokenError(o3);
        }
    }
  };

  // https://esm.sh/v116/bowser@2.11.0/deno/bowser.mjs
  var S4 = { "Amazon Silk": "amazon_silk", "Android Browser": "android", Bada: "bada", BlackBerry: "blackberry", Chrome: "chrome", Chromium: "chromium", Electron: "electron", Epiphany: "epiphany", Firefox: "firefox", Focus: "focus", Generic: "generic", "Google Search": "google_search", Googlebot: "googlebot", "Internet Explorer": "ie", "K-Meleon": "k_meleon", Maxthon: "maxthon", "Microsoft Edge": "edge", "MZ Browser": "mz", "NAVER Whale Browser": "naver", Opera: "opera", "Opera Coast": "opera_coast", PhantomJS: "phantomjs", Puffin: "puffin", QupZilla: "qupzilla", QQ: "qq", QQLite: "qqlite", Safari: "safari", Sailfish: "sailfish", "Samsung Internet for Android": "samsung_internet", SeaMonkey: "seamonkey", Sleipnir: "sleipnir", Swing: "swing", Tizen: "tizen", "UC Browser": "uc", Vivaldi: "vivaldi", "WebOS Browser": "webos", WeChat: "wechat", "Yandex Browser": "yandex", Roku: "roku" }, p2 = { amazon_silk: "Amazon Silk", android: "Android Browser", bada: "Bada", blackberry: "BlackBerry", chrome: "Chrome", chromium: "Chromium", electron: "Electron", epiphany: "Epiphany", firefox: "Firefox", focus: "Focus", generic: "Generic", googlebot: "Googlebot", google_search: "Google Search", ie: "Internet Explorer", k_meleon: "K-Meleon", maxthon: "Maxthon", edge: "Microsoft Edge", mz: "MZ Browser", naver: "NAVER Whale Browser", opera: "Opera", opera_coast: "Opera Coast", phantomjs: "PhantomJS", puffin: "Puffin", qupzilla: "QupZilla", qq: "QQ Browser", qqlite: "QQ Browser Lite", safari: "Safari", sailfish: "Sailfish", samsung_internet: "Samsung Internet for Android", seamonkey: "SeaMonkey", sleipnir: "Sleipnir", swing: "Swing", tizen: "Tizen", uc: "UC Browser", vivaldi: "Vivaldi", webos: "WebOS Browser", wechat: "WeChat", yandex: "Yandex Browser" }, a = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" }, l = { WindowsPhone: "Windows Phone", Windows: "Windows", MacOS: "macOS", iOS: "iOS", Android: "Android", WebOS: "WebOS", BlackBerry: "BlackBerry", Bada: "Bada", Tizen: "Tizen", Linux: "Linux", ChromeOS: "Chrome OS", PlayStation4: "PlayStation 4", Roku: "Roku" }, h2 = { EdgeHTML: "EdgeHTML", Blink: "Blink", Trident: "Trident", Presto: "Presto", Gecko: "Gecko", WebKit: "WebKit" }, s4 = class {
    static getFirstMatch(e, t3) {
      let i2 = t3.match(e);
      return i2 && i2.length > 0 && i2[1] || "";
    }
    static getSecondMatch(e, t3) {
      let i2 = t3.match(e);
      return i2 && i2.length > 1 && i2[2] || "";
    }
    static matchAndReturnConst(e, t3, i2) {
      if (e.test(t3))
        return i2;
    }
    static getWindowsVersionName(e) {
      switch (e) {
        case "NT":
          return "NT";
        case "XP":
          return "XP";
        case "NT 5.0":
          return "2000";
        case "NT 5.1":
          return "XP";
        case "NT 5.2":
          return "2003";
        case "NT 6.0":
          return "Vista";
        case "NT 6.1":
          return "7";
        case "NT 6.2":
          return "8";
        case "NT 6.3":
          return "8.1";
        case "NT 10.0":
          return "10";
        default:
          return;
      }
    }
    static getMacOSVersionName(e) {
      let t3 = e.split(".").splice(0, 2).map((i2) => parseInt(i2, 10) || 0);
      if (t3.push(0), t3[0] === 10)
        switch (t3[1]) {
          case 5:
            return "Leopard";
          case 6:
            return "Snow Leopard";
          case 7:
            return "Lion";
          case 8:
            return "Mountain Lion";
          case 9:
            return "Mavericks";
          case 10:
            return "Yosemite";
          case 11:
            return "El Capitan";
          case 12:
            return "Sierra";
          case 13:
            return "High Sierra";
          case 14:
            return "Mojave";
          case 15:
            return "Catalina";
          default:
            return;
        }
    }
    static getAndroidVersionName(e) {
      let t3 = e.split(".").splice(0, 2).map((i2) => parseInt(i2, 10) || 0);
      if (t3.push(0), !(t3[0] === 1 && t3[1] < 5)) {
        if (t3[0] === 1 && t3[1] < 6)
          return "Cupcake";
        if (t3[0] === 1 && t3[1] >= 6)
          return "Donut";
        if (t3[0] === 2 && t3[1] < 2)
          return "Eclair";
        if (t3[0] === 2 && t3[1] === 2)
          return "Froyo";
        if (t3[0] === 2 && t3[1] > 2)
          return "Gingerbread";
        if (t3[0] === 3)
          return "Honeycomb";
        if (t3[0] === 4 && t3[1] < 1)
          return "Ice Cream Sandwich";
        if (t3[0] === 4 && t3[1] < 4)
          return "Jelly Bean";
        if (t3[0] === 4 && t3[1] >= 4)
          return "KitKat";
        if (t3[0] === 5)
          return "Lollipop";
        if (t3[0] === 6)
          return "Marshmallow";
        if (t3[0] === 7)
          return "Nougat";
        if (t3[0] === 8)
          return "Oreo";
        if (t3[0] === 9)
          return "Pie";
      }
    }
    static getVersionPrecision(e) {
      return e.split(".").length;
    }
    static compareVersions(e, t3, i2 = !1) {
      let n2 = s4.getVersionPrecision(e), u2 = s4.getVersionPrecision(t3), d5 = Math.max(n2, u2), m4 = 0, c3 = s4.map([e, t3], (g5) => {
        let f3 = d5 - s4.getVersionPrecision(g5), A4 = g5 + new Array(f3 + 1).join(".0");
        return s4.map(A4.split("."), (M5) => new Array(20 - M5.length).join("0") + M5).reverse();
      });
      for (i2 && (m4 = d5 - Math.min(n2, u2)), d5 -= 1; d5 >= m4; ) {
        if (c3[0][d5] > c3[1][d5])
          return 1;
        if (c3[0][d5] === c3[1][d5]) {
          if (d5 === m4)
            return 0;
          d5 -= 1;
        } else if (c3[0][d5] < c3[1][d5])
          return -1;
      }
    }
    static map(e, t3) {
      let i2 = [], n2;
      if (Array.prototype.map)
        return Array.prototype.map.call(e, t3);
      for (n2 = 0; n2 < e.length; n2 += 1)
        i2.push(t3(e[n2]));
      return i2;
    }
    static find(e, t3) {
      let i2, n2;
      if (Array.prototype.find)
        return Array.prototype.find.call(e, t3);
      for (i2 = 0, n2 = e.length; i2 < n2; i2 += 1) {
        let u2 = e[i2];
        if (t3(u2, i2))
          return u2;
      }
    }
    static assign(e, ...t3) {
      let i2 = e, n2, u2;
      if (Object.assign)
        return Object.assign(e, ...t3);
      for (n2 = 0, u2 = t3.length; n2 < u2; n2 += 1) {
        let d5 = t3[n2];
        typeof d5 == "object" && d5 !== null && Object.keys(d5).forEach((c3) => {
          i2[c3] = d5[c3];
        });
      }
      return e;
    }
    static getBrowserAlias(e) {
      return S4[e];
    }
    static getBrowserTypeByAlias(e) {
      return p2[e] || "";
    }
  }, o2 = /version\/(\d+(\.?_?\d+)+)/i, O3 = [{ test: [/googlebot/i], describe(r) {
    let e = { name: "Googlebot" }, t3 = s4.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, r) || s4.getFirstMatch(o2, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/opera/i], describe(r) {
    let e = { name: "Opera" }, t3 = s4.getFirstMatch(o2, r) || s4.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/opr\/|opios/i], describe(r) {
    let e = { name: "Opera" }, t3 = s4.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, r) || s4.getFirstMatch(o2, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/SamsungBrowser/i], describe(r) {
    let e = { name: "Samsung Internet for Android" }, t3 = s4.getFirstMatch(o2, r) || s4.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/Whale/i], describe(r) {
    let e = { name: "NAVER Whale Browser" }, t3 = s4.getFirstMatch(o2, r) || s4.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/MZBrowser/i], describe(r) {
    let e = { name: "MZ Browser" }, t3 = s4.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, r) || s4.getFirstMatch(o2, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/focus/i], describe(r) {
    let e = { name: "Focus" }, t3 = s4.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, r) || s4.getFirstMatch(o2, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/swing/i], describe(r) {
    let e = { name: "Swing" }, t3 = s4.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, r) || s4.getFirstMatch(o2, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/coast/i], describe(r) {
    let e = { name: "Opera Coast" }, t3 = s4.getFirstMatch(o2, r) || s4.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/opt\/\d+(?:.?_?\d+)+/i], describe(r) {
    let e = { name: "Opera Touch" }, t3 = s4.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, r) || s4.getFirstMatch(o2, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/yabrowser/i], describe(r) {
    let e = { name: "Yandex Browser" }, t3 = s4.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, r) || s4.getFirstMatch(o2, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/ucbrowser/i], describe(r) {
    let e = { name: "UC Browser" }, t3 = s4.getFirstMatch(o2, r) || s4.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/Maxthon|mxios/i], describe(r) {
    let e = { name: "Maxthon" }, t3 = s4.getFirstMatch(o2, r) || s4.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/epiphany/i], describe(r) {
    let e = { name: "Epiphany" }, t3 = s4.getFirstMatch(o2, r) || s4.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/puffin/i], describe(r) {
    let e = { name: "Puffin" }, t3 = s4.getFirstMatch(o2, r) || s4.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/sleipnir/i], describe(r) {
    let e = { name: "Sleipnir" }, t3 = s4.getFirstMatch(o2, r) || s4.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/k-meleon/i], describe(r) {
    let e = { name: "K-Meleon" }, t3 = s4.getFirstMatch(o2, r) || s4.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/micromessenger/i], describe(r) {
    let e = { name: "WeChat" }, t3 = s4.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, r) || s4.getFirstMatch(o2, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/qqbrowser/i], describe(r) {
    let e = { name: /qqbrowserlite/i.test(r) ? "QQ Browser Lite" : "QQ Browser" }, t3 = s4.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, r) || s4.getFirstMatch(o2, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/msie|trident/i], describe(r) {
    let e = { name: "Internet Explorer" }, t3 = s4.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/\sedg\//i], describe(r) {
    let e = { name: "Microsoft Edge" }, t3 = s4.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/edg([ea]|ios)/i], describe(r) {
    let e = { name: "Microsoft Edge" }, t3 = s4.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/vivaldi/i], describe(r) {
    let e = { name: "Vivaldi" }, t3 = s4.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/seamonkey/i], describe(r) {
    let e = { name: "SeaMonkey" }, t3 = s4.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/sailfish/i], describe(r) {
    let e = { name: "Sailfish" }, t3 = s4.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/silk/i], describe(r) {
    let e = { name: "Amazon Silk" }, t3 = s4.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/phantom/i], describe(r) {
    let e = { name: "PhantomJS" }, t3 = s4.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/slimerjs/i], describe(r) {
    let e = { name: "SlimerJS" }, t3 = s4.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe(r) {
    let e = { name: "BlackBerry" }, t3 = s4.getFirstMatch(o2, r) || s4.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/(web|hpw)[o0]s/i], describe(r) {
    let e = { name: "WebOS Browser" }, t3 = s4.getFirstMatch(o2, r) || s4.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/bada/i], describe(r) {
    let e = { name: "Bada" }, t3 = s4.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/tizen/i], describe(r) {
    let e = { name: "Tizen" }, t3 = s4.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, r) || s4.getFirstMatch(o2, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/qupzilla/i], describe(r) {
    let e = { name: "QupZilla" }, t3 = s4.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, r) || s4.getFirstMatch(o2, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/firefox|iceweasel|fxios/i], describe(r) {
    let e = { name: "Firefox" }, t3 = s4.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/electron/i], describe(r) {
    let e = { name: "Electron" }, t3 = s4.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/MiuiBrowser/i], describe(r) {
    let e = { name: "Miui" }, t3 = s4.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/chromium/i], describe(r) {
    let e = { name: "Chromium" }, t3 = s4.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, r) || s4.getFirstMatch(o2, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/chrome|crios|crmo/i], describe(r) {
    let e = { name: "Chrome" }, t3 = s4.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/GSA/i], describe(r) {
    let e = { name: "Google Search" }, t3 = s4.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, r);
    return t3 && (e.version = t3), e;
  } }, { test(r) {
    let e = !r.test(/like android/i), t3 = r.test(/android/i);
    return e && t3;
  }, describe(r) {
    let e = { name: "Android Browser" }, t3 = s4.getFirstMatch(o2, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/playstation 4/i], describe(r) {
    let e = { name: "PlayStation 4" }, t3 = s4.getFirstMatch(o2, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/safari|applewebkit/i], describe(r) {
    let e = { name: "Safari" }, t3 = s4.getFirstMatch(o2, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/.*/i], describe(r) {
    let e = /^(.*)\/(.*) /, t3 = /^(.*)\/(.*)[ \t]\((.*)/, n2 = r.search("\\(") !== -1 ? t3 : e;
    return { name: s4.getFirstMatch(n2, r), version: s4.getSecondMatch(n2, r) };
  } }], F3 = O3, y2 = [{ test: [/Roku\/DVP/], describe(r) {
    let e = s4.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, r);
    return { name: l.Roku, version: e };
  } }, { test: [/windows phone/i], describe(r) {
    let e = s4.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, r);
    return { name: l.WindowsPhone, version: e };
  } }, { test: [/windows /i], describe(r) {
    let e = s4.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, r), t3 = s4.getWindowsVersionName(e);
    return { name: l.Windows, version: e, versionName: t3 };
  } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe(r) {
    let e = { name: l.iOS }, t3 = s4.getSecondMatch(/(Version\/)(\d[\d.]+)/, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/macintosh/i], describe(r) {
    let e = s4.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, r).replace(/[_\s]/g, "."), t3 = s4.getMacOSVersionName(e), i2 = { name: l.MacOS, version: e };
    return t3 && (i2.versionName = t3), i2;
  } }, { test: [/(ipod|iphone|ipad)/i], describe(r) {
    let e = s4.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, r).replace(/[_\s]/g, ".");
    return { name: l.iOS, version: e };
  } }, { test(r) {
    let e = !r.test(/like android/i), t3 = r.test(/android/i);
    return e && t3;
  }, describe(r) {
    let e = s4.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, r), t3 = s4.getAndroidVersionName(e), i2 = { name: l.Android, version: e };
    return t3 && (i2.versionName = t3), i2;
  } }, { test: [/(web|hpw)[o0]s/i], describe(r) {
    let e = s4.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, r), t3 = { name: l.WebOS };
    return e && e.length && (t3.version = e), t3;
  } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe(r) {
    let e = s4.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, r) || s4.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, r) || s4.getFirstMatch(/\bbb(\d+)/i, r);
    return { name: l.BlackBerry, version: e };
  } }, { test: [/bada/i], describe(r) {
    let e = s4.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, r);
    return { name: l.Bada, version: e };
  } }, { test: [/tizen/i], describe(r) {
    let e = s4.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, r);
    return { name: l.Tizen, version: e };
  } }, { test: [/linux/i], describe() {
    return { name: l.Linux };
  } }, { test: [/CrOS/], describe() {
    return { name: l.ChromeOS };
  } }, { test: [/PlayStation 4/], describe(r) {
    let e = s4.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, r);
    return { name: l.PlayStation4, version: e };
  } }], B5 = [{ test: [/googlebot/i], describe() {
    return { type: "bot", vendor: "Google" };
  } }, { test: [/huawei/i], describe(r) {
    let e = s4.getFirstMatch(/(can-l01)/i, r) && "Nova", t3 = { type: a.mobile, vendor: "Huawei" };
    return e && (t3.model = e), t3;
  } }, { test: [/nexus\s*(?:7|8|9|10).*/i], describe() {
    return { type: a.tablet, vendor: "Nexus" };
  } }, { test: [/ipad/i], describe() {
    return { type: a.tablet, vendor: "Apple", model: "iPad" };
  } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe() {
    return { type: a.tablet, vendor: "Apple", model: "iPad" };
  } }, { test: [/kftt build/i], describe() {
    return { type: a.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" };
  } }, { test: [/silk/i], describe() {
    return { type: a.tablet, vendor: "Amazon" };
  } }, { test: [/tablet(?! pc)/i], describe() {
    return { type: a.tablet };
  } }, { test(r) {
    let e = r.test(/ipod|iphone/i), t3 = r.test(/like (ipod|iphone)/i);
    return e && !t3;
  }, describe(r) {
    let e = s4.getFirstMatch(/(ipod|iphone)/i, r);
    return { type: a.mobile, vendor: "Apple", model: e };
  } }, { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe() {
    return { type: a.mobile, vendor: "Nexus" };
  } }, { test: [/[^-]mobi/i], describe() {
    return { type: a.mobile };
  } }, { test(r) {
    return r.getBrowserName(!0) === "blackberry";
  }, describe() {
    return { type: a.mobile, vendor: "BlackBerry" };
  } }, { test(r) {
    return r.getBrowserName(!0) === "bada";
  }, describe() {
    return { type: a.mobile };
  } }, { test(r) {
    return r.getBrowserName() === "windows phone";
  }, describe() {
    return { type: a.mobile, vendor: "Microsoft" };
  } }, { test(r) {
    let e = Number(String(r.getOSVersion()).split(".")[0]);
    return r.getOSName(!0) === "android" && e >= 3;
  }, describe() {
    return { type: a.tablet };
  } }, { test(r) {
    return r.getOSName(!0) === "android";
  }, describe() {
    return { type: a.mobile };
  } }, { test(r) {
    return r.getOSName(!0) === "macos";
  }, describe() {
    return { type: a.desktop, vendor: "Apple" };
  } }, { test(r) {
    return r.getOSName(!0) === "windows";
  }, describe() {
    return { type: a.desktop };
  } }, { test(r) {
    return r.getOSName(!0) === "linux";
  }, describe() {
    return { type: a.desktop };
  } }, { test(r) {
    return r.getOSName(!0) === "playstation 4";
  }, describe() {
    return { type: a.tv };
  } }, { test(r) {
    return r.getOSName(!0) === "roku";
  }, describe() {
    return { type: a.tv };
  } }], k2 = [{ test(r) {
    return r.getBrowserName(!0) === "microsoft edge";
  }, describe(r) {
    if (/\sedg\//i.test(r))
      return { name: h2.Blink };
    let t3 = s4.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, r);
    return { name: h2.EdgeHTML, version: t3 };
  } }, { test: [/trident/i], describe(r) {
    let e = { name: h2.Trident }, t3 = s4.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, r);
    return t3 && (e.version = t3), e;
  } }, { test(r) {
    return r.test(/presto/i);
  }, describe(r) {
    let e = { name: h2.Presto }, t3 = s4.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, r);
    return t3 && (e.version = t3), e;
  } }, { test(r) {
    let e = r.test(/gecko/i), t3 = r.test(/like gecko/i);
    return e && !t3;
  }, describe(r) {
    let e = { name: h2.Gecko }, t3 = s4.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, r);
    return t3 && (e.version = t3), e;
  } }, { test: [/(apple)?webkit\/537\.36/i], describe() {
    return { name: h2.Blink };
  } }, { test: [/(apple)?webkit/i], describe(r) {
    let e = { name: h2.WebKit }, t3 = s4.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, r);
    return t3 && (e.version = t3), e;
  } }], b3 = class {
    constructor(e, t3 = !1) {
      if (e == null || e === "")
        throw new Error("UserAgent parameter can't be empty");
      this._ua = e, this.parsedResult = {}, t3 !== !0 && this.parse();
    }
    getUA() {
      return this._ua;
    }
    test(e) {
      return e.test(this._ua);
    }
    parseBrowser() {
      this.parsedResult.browser = {};
      let e = s4.find(F3, (t3) => {
        if (typeof t3.test == "function")
          return t3.test(this);
        if (t3.test instanceof Array)
          return t3.test.some((i2) => this.test(i2));
        throw new Error("Browser's test function is not valid");
      });
      return e && (this.parsedResult.browser = e.describe(this.getUA())), this.parsedResult.browser;
    }
    getBrowser() {
      return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
    }
    getBrowserName(e) {
      return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
    }
    getBrowserVersion() {
      return this.getBrowser().version;
    }
    getOS() {
      return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
    }
    parseOS() {
      this.parsedResult.os = {};
      let e = s4.find(y2, (t3) => {
        if (typeof t3.test == "function")
          return t3.test(this);
        if (t3.test instanceof Array)
          return t3.test.some((i2) => this.test(i2));
        throw new Error("Browser's test function is not valid");
      });
      return e && (this.parsedResult.os = e.describe(this.getUA())), this.parsedResult.os;
    }
    getOSName(e) {
      let { name: t3 } = this.getOS();
      return e ? String(t3).toLowerCase() || "" : t3 || "";
    }
    getOSVersion() {
      return this.getOS().version;
    }
    getPlatform() {
      return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
    }
    getPlatformType(e = !1) {
      let { type: t3 } = this.getPlatform();
      return e ? String(t3).toLowerCase() || "" : t3 || "";
    }
    parsePlatform() {
      this.parsedResult.platform = {};
      let e = s4.find(B5, (t3) => {
        if (typeof t3.test == "function")
          return t3.test(this);
        if (t3.test instanceof Array)
          return t3.test.some((i2) => this.test(i2));
        throw new Error("Browser's test function is not valid");
      });
      return e && (this.parsedResult.platform = e.describe(this.getUA())), this.parsedResult.platform;
    }
    getEngine() {
      return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
    }
    getEngineName(e) {
      return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
    }
    parseEngine() {
      this.parsedResult.engine = {};
      let e = s4.find(k2, (t3) => {
        if (typeof t3.test == "function")
          return t3.test(this);
        if (t3.test instanceof Array)
          return t3.test.some((i2) => this.test(i2));
        throw new Error("Browser's test function is not valid");
      });
      return e && (this.parsedResult.engine = e.describe(this.getUA())), this.parsedResult.engine;
    }
    parse() {
      return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
    }
    getResult() {
      return s4.assign({}, this.parsedResult);
    }
    satisfies(e) {
      let t3 = {}, i2 = 0, n2 = {}, u2 = 0;
      if (Object.keys(e).forEach((m4) => {
        let c3 = e[m4];
        typeof c3 == "string" ? (n2[m4] = c3, u2 += 1) : typeof c3 == "object" && (t3[m4] = c3, i2 += 1);
      }), i2 > 0) {
        let m4 = Object.keys(t3), c3 = s4.find(m4, (f3) => this.isOS(f3));
        if (c3) {
          let f3 = this.satisfies(t3[c3]);
          if (f3 !== void 0)
            return f3;
        }
        let g5 = s4.find(m4, (f3) => this.isPlatform(f3));
        if (g5) {
          let f3 = this.satisfies(t3[g5]);
          if (f3 !== void 0)
            return f3;
        }
      }
      if (u2 > 0) {
        let m4 = Object.keys(n2), c3 = s4.find(m4, (g5) => this.isBrowser(g5, !0));
        if (c3 !== void 0)
          return this.compareVersion(n2[c3]);
      }
    }
    isBrowser(e, t3 = !1) {
      let i2 = this.getBrowserName().toLowerCase(), n2 = e.toLowerCase(), u2 = s4.getBrowserTypeByAlias(n2);
      return t3 && u2 && (n2 = u2.toLowerCase()), n2 === i2;
    }
    compareVersion(e) {
      let t3 = [0], i2 = e, n2 = !1, u2 = this.getBrowserVersion();
      if (typeof u2 == "string")
        return e[0] === ">" || e[0] === "<" ? (i2 = e.substr(1), e[1] === "=" ? (n2 = !0, i2 = e.substr(2)) : t3 = [], e[0] === ">" ? t3.push(1) : t3.push(-1)) : e[0] === "=" ? i2 = e.substr(1) : e[0] === "~" && (n2 = !0, i2 = e.substr(1)), t3.indexOf(s4.compareVersions(u2, i2, n2)) > -1;
    }
    isOS(e) {
      return this.getOSName(!0) === String(e).toLowerCase();
    }
    isPlatform(e) {
      return this.getPlatformType(!0) === String(e).toLowerCase();
    }
    isEngine(e) {
      return this.getEngineName(!0) === String(e).toLowerCase();
    }
    is(e, t3 = !1) {
      return this.isBrowser(e, t3) || this.isOS(e) || this.isPlatform(e);
    }
    some(e = []) {
      return e.some((t3) => this.is(t3));
    }
  }, w2 = b3, v4 = class {
    static getParser(e, t3 = !1) {
      if (typeof e != "string")
        throw new Error("UserAgent should be a string");
      return new w2(e, t3);
    }
    static parse(e) {
      return new w2(e).getResult();
    }
    static get BROWSER_MAP() {
      return p2;
    }
    static get ENGINE_MAP() {
      return h2;
    }
    static get OS_MAP() {
      return l;
    }
    static get PLATFORMS_MAP() {
      return a;
    }
  }, U4 = v4;

  // env.ts
  function getEnv() {
    return typeof process > "u" && typeof Deno < "u" ? Deno.env.toObject() : define_process_env_default;
  }
  var env = getEnv();
  function isMonkey() {
    return env.IMMERSIVE_TRANSLATE_USERSCRIPT === "1";
  }
  function isSafari() {
    return env.IMMERSIVE_TRANSLATE_SAFARI === "1";
  }
  function isDeno() {
    return typeof Deno < "u";
  }
  function isWebOptionsPage() {
    return (
      // @ts-ignore: ok
      typeof globalThis.__IS_IMMERSIVE_TRANSLATE_WEB_OPTIONS_PAGE__ < "u"
    );
  }


  // dom/util.ts
  var env2 = getEnv(), isProd = env2.PROD === "1", isInUserscript = isMonkey();
  function duplicatedElements(root2, array, rule) {
    let allHeaders = root2.querySelectorAll("header"), main3 = root2.querySelectorAll("main"), headers3 = [];
    for (let header of allHeaders)
      main3.length > 0 && main3[0].contains(header) || headers3.push(header);
    for (let i2 = 0; i2 < array.length; i2++) {
      let a4 = array[i2].element;
      for (let j5 = i2 + 1; j5 < array.length; j5++) {
        let b5 = array[j5].element;
        if (a4.contains(b5))
          array.splice(j5, 1), j5--;
        else if (b5.contains(a4)) {
          array.splice(i2, 1), i2--;
          break;
        } else
          a4 === b5 && (array.splice(j5, 1), j5--);
      }
    }
    return array.filter((container) => {
      let element = container.element;
      if (container.reserve)
        return !0;
      let isHeader = !1;
      for (let header of headers3) {
        if (isMatchTags(element.nodeName, ["H1"]))
          continue;
        let h1Container = header.querySelector("h1");
        if (!(h1Container && isValidTextByCount(
          h1Container.textContent || "",
          rule.paragraphMinTextCount,
          rule.paragraphMinWordCount
        )) && (element === header || header.contains(element))) {
          isHeader = !0;
          break;
        }
      }
      return !isHeader;
    }).map((container) => container.element);
  }
  function getLastHTMLElement(elements) {
    for (let i2 = elements.length - 1; i2 >= 0; i2--) {
      let element = elements[i2].element || elements[i2];
      if (typeof element != "string")
        return element;
    }
    return null;
  }
  function getHTMLElements(elements) {
    let result = [];
    for (let i2 = elements.length - 1; i2 >= 0; i2--) {
      let element = elements[i2].element || elements[i2];
      (typeof element != "string" || element !== " ") && result.push(element);
    }
    return result;
  }
  function getFirstHTMLElement(elements) {
    for (let i2 = 0; i2 < elements.length; i2++) {
      let element = elements[i2];
      if (typeof element != "string")
        return element;
    }
    return null;
  }
  function getWhitespace(nextNode, isPreWhitespace) {
    return nextNode && nextNode.nodeType === Node.TEXT_NODE && nextNode.textContent && nextNode.textContent?.length > 0 ? isPreWhitespace ? nextNode.textContent : " " : null;
  }
  function customTrim(str) {
    if (!str)
      return "";
    let nbspChar = String.fromCharCode(160);
    if (str.includes(nbspChar)) {
      let trimedStr = str.trim(), leftPosition = str.indexOf(trimedStr), rightPosition = leftPosition + trimedStr.length, leftStr = str.substring(0, leftPosition), rightStr = str.substring(rightPosition), leftNbspCount = leftStr.split(nbspChar).length - 1, rightNbspCount = rightStr.split(nbspChar).length - 1, finalLeftStr = leftNbspCount > 0 ? " ".repeat(leftNbspCount) : "", finalRightStr = rightNbspCount > 0 ? " ".repeat(rightNbspCount) : "";
      return finalLeftStr + trimedStr + finalRightStr;
    } else
      str = str.trim();
    return str;
  }
  function getElementsBySelectors(root2, selectors) {
    let elements = [];
    for (let selector of selectors) {
      let nodes = root2.querySelectorAll(selector);
      for (let node of nodes)
        elements.push(node);
    }
    return elements;
  }
  function isInlineElementByTreeWalker(element, rule) {
    let filterInlineElement = function(node) {
      return node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE ? node.nodeType === Node.ELEMENT_NODE && isExcludeElement(node, rule, !0) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }, treeWalker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_ELEMENT,
      filterInlineElement
    ), isInline = !0;
    for (; treeWalker.nextNode(); ) {
      let node = treeWalker.currentNode;
      if (node.nodeType === Node.ELEMENT_NODE) {
        if (isMarked(
          node,
          sourceInlineElementMarkAttributeName
        )) {
          if (isInline === !0)
            return !0;
          continue;
        }
        if (isMatchTags(node.nodeName, rule.inlineTags))
          return !0;
        if (!isUnknowTag(node, rule))
          return !1;
      }
    }
    return !0;
  }
  function isInlineElement(element, rule) {
    let inlineTags = rule.inlineTags;
    if (element.nodeType === Node.ELEMENT_NODE)
      if (isMatchTags(element.nodeName, inlineTags) || isUnknowTag(element, rule)) {
        if (isMarked(
          element,
          sourceBlockElementMarkAttributeName
        ) || isMatchTags(element.nodeName, ["BR"]))
          return !1;
        if (isMarked(element, sourceInlineElementMarkAttributeName))
          return !0;
        if (isUnknowTag(element, rule)) {
          let style = globalThis.getComputedStyle(element);
          if (style.display === "block" || style.display === "flex")
            return !1;
        }
        return isInlineElementByTreeWalker(element, rule);
      } else
        return isMarked(
          element,
          sourceInlineElementMarkAttributeName
        );
    return !1;
  }
  function isDuplicateElement(element, elements) {
    for (let e of elements)
      if (e === element)
        return !0;
    return !1;
  }
  function isMetaElement(element, rule) {
    return !!isMatchTags(element.nodeName, rule.metaTags);
  }
  function isExcludeElement(element, rule, includeStayElements) {
    if (!(element.nodeType === Node.ELEMENT_NODE || element.nodeType === Node.TEXT_NODE) || element.nodeType === Node.ELEMENT_NODE && isMarked(element, sourceElementExcludeAttributeName, !0))
      return !0;
    if (element.nodeType === Node.ELEMENT_NODE && isMarked(
      element,
      specifiedTargetContainerElementAttributeName
    ))
      return !1;
    let { stayOriginalTags, excludeTags } = rule, finalExcludeTags = [];
    return includeStayElements && excludeTags && excludeTags.length > 0 ? finalExcludeTags = excludeTags || [] : finalExcludeTags = excludeTags.filter((tag) => !stayOriginalTags.includes(tag)), !!(element.nodeType === Node.ELEMENT_NODE && element.isContentEditable || element.nodeType === Node.ELEMENT_NODE && (element.getAttribute("translate") === "no" || element.classList.contains("notranslate")) || isMatchTags(element.nodeName, finalExcludeTags));
  }
  function isNeedToTranslate(item, minTextCount, minWordCount, ctx) {
    let delimiters = getPlaceholderDelimiters(ctx), stayInOriginalRegex = new RegExp(
      `${delimiters[0]}(\\d+)${delimiters[1]}`,
      "gi"
    ), text = item.text, trimedText = text.trim();
    return trimedText = trimedText.replace(stayInOriginalRegex, ""), trimedText = trimedText.trim(), trimedText === "" || trimedText.length === 1 && trimedText.charCodeAt(0) === 8203 || /^\d+(,\d+)*(\.\d+)?$/.test(text) || trimedText.includes("</style>") || trimedText.includes("< styles>") || isAtTag(trimedText) || isUrl(trimedText) || isHashTag(trimedText) || stayInOriginalRegex.test(trimedText) ? !1 : isValidTextByCount(text, minTextCount, minWordCount);
  }
  function isValidTextByCount(rawText, minTextCount, minWordCount) {
    let text = rawText.trim();
    return text.length >= minTextCount || text.split(" ").length >= minWordCount || !isAllAscii(text) && text.length >= minWordCount;
  }
  function isAllAscii(text) {
    for (let i2 = 0; i2 < text.length; i2++)
      if (text.charCodeAt(i2) > 127)
        return !1;
    return !0;
  }
  function isUrl(text) {
    if (text && text.includes("://"))
      try {
        return new URL(text), !0;
      } catch {
        return !1;
      }
    else
      return !1;
  }
  function isHashTag(text) {
    return !!(text && text.startsWith("#") && text.indexOf(" ") === -1);
  }
  function isAtTag(text) {
    return !!(text && text.startsWith("@") && text.indexOf(" ") === -1);
  }
  function isStockTag(text) {
    return !!(text && text.startsWith("$") && text.indexOf(" ") === -1);
  }
  function isMarked(element, markedAttribute, explicit = !1) {
    return isMarkedWith(element, markedAttribute, "1", explicit);
  }
  function isMarkedWith(element, markedAttribute, value, explicit = !1) {
    return isProd && !explicit ? element[elementMarkRootKey] ? (
      // @ts-ignore: it's ok
      !!(element[elementMarkRootKey] && // @ts-ignore: it's ok
      element[elementMarkRootKey][markedAttribute] === value)
    ) : !1 : element.dataset[markedAttribute] === value;
  }
  function hasMark(element, markedAttribute, explicit = !1) {
    return isProd && !explicit ? element[elementMarkRootKey] ? (
      // @ts-ignore: it's ok
      !!(element[elementMarkRootKey] && // @ts-ignore: it's ok
      element[elementMarkRootKey][markedAttribute])
    ) : !1 : element.dataset[markedAttribute] !== void 0;
  }
  function getMainText(root2) {
    return (root2.innerText || root2.textContent || "").trim();
  }
  function getAllIframeMainText(root2) {
    let iframes = root2.querySelectorAll("iframe"), text = "";
    for (let i2 = 0; i2 < iframes.length; i2++) {
      let doc = iframes[i2].contentDocument;
      if (doc && (text += getMainText(doc.body), text.length > 2e3))
        break;
    }
    return text;
  }
  function getPairsSourceText(root2, pairs) {
    let keys = Object.keys(pairs), text = "";
    for (let i2 = 0; i2 < keys.length; i2++) {
      let sourceSelector = keys[i2], elements = root2.querySelectorAll(sourceSelector);
      for (let j5 = 0; j5 < elements.length; j5++) {
        let element = elements[j5];
        if (text += (element.innerText || element.textContent || "") + `
`, text.length > 2e3)
          break;
      }
    }
    return text;
  }
  function isMatchSelectors(selectors) {
    return selectors ? typeof selectors == "string" ? document.querySelector(selectors) !== null : selectors.some((selector) => document.querySelector(selector)) : !1;
  }
  function setAttribute(element, name, value, explicit = !1) {
    element.isContentEditable || (isProd && !explicit ? (element.dataset[sourceElementEffectAttributeNameForJs] || (element.dataset[sourceElementEffectAttributeNameForJs] = "1"), element[elementMarkRootKey] || (element[elementMarkRootKey] = {}), element[elementMarkRootKey][name] || (element[elementMarkRootKey][name] = value)) : (element.dataset[sourceElementEffectAttributeNameForJs] || (element.dataset[sourceElementEffectAttributeNameForJs] = "1"), element.dataset[name] !== value && (element.dataset[name] = value)));
  }
  function removeAttribute(element, name, explicit = !1) {
    if (isProd && !explicit) {
      if (!element[elementMarkRootKey] || !element[elementMarkRootKey][name])
        return;
      delete element[elementMarkRootKey][name];
    } else
      delete element.dataset[name];
  }
  function getAttribute(element, name, explicit = !1) {
    return isProd && !explicit ? !element[elementMarkRootKey] || !element[elementMarkRootKey][name] ? void 0 : element[elementMarkRootKey][name] : element.dataset[name];
  }
  function isStayOriginalElement(element, rule) {
    let isStayOriginal = !1, allTags = [
      ...rule.stayOriginalTags,
      ...rule.additionalStayOriginalTags
    ];
    return (isMatchTags(element.nodeName, allTags) || isMarked(element, sourceElementStayOriginalAttributeName)) && (isStayOriginal = !0), isStayOriginal;
  }
  function isContainsStayOriginalElement(element, rule) {
    let isStayOriginal = !1, allTags = [
      ...rule.stayOriginalTags,
      ...rule.additionalStayOriginalTags
    ];
    if ((isMatchTags(element.nodeName, allTags) || isMarked(element, sourceElementStayOriginalAttributeName)) && (isStayOriginal = !0), isStayOriginal)
      return !0;
    let allSelectors = allTags.map((tag) => tag.toLowerCase());
    return rule.stayOriginalSelectors && allSelectors.push(...rule.stayOriginalSelectors), rule.additionalStayOriginalSelectors && allSelectors.push(...rule.additionalStayOriginalSelectors), isContainsSelectors(element, allSelectors);
  }
  function isUnknowTag(element, rule) {
    let allKnowTags = rule.allBlockTags.concat(rule.inlineTags).concat(
      rule.excludeTags
    );
    return !isMatchTags(element.nodeName, allKnowTags);
  }
  function getPlaceholderDelimiters(ctx) {
    let { config } = ctx, delimiters = defaultPlaceholderDelimiters;
    return config.translationServices[ctx.translationService] && config.translationServices[ctx.translationService].placeholderDelimiters && (delimiters = config.translationServices[ctx.translationService].placeholderDelimiters), delimiters;
  }
  function isContainsSelectors(element, selectors) {
    if (!selectors)
      return !1;
    Array.isArray(selectors) || (selectors = [selectors]);
    for (let selector of selectors)
      if (element.querySelector(selector))
        return !0;
    return !1;
  }
  function getTheLastTextNodeParentElement(element) {
    let treeWalker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      (node) => node.textContent && node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
    ), lastTextNode = null;
    for (; treeWalker.nextNode(); )
      lastTextNode = treeWalker.currentNode;
    return lastTextNode ? lastTextNode.parentElement : null;
  }




  // dom/mark_containers.ts
  function markContainers(container, rule, rootFrame, isDynamic) {
    let {
      excludeSelectors,
      additionalExcludeSelectors,
      extraInlineSelectors,
      additionalInlineSelectors,
      extraBlockSelectors,
      atomicBlockSelectors,
      atomicBlockTags,
      globalStyles,
      stayOriginalTags,
      stayOriginalSelectors,
      additionalStayOriginalSelectors,
      globalAttributes,
      additionalSelectors
    } = rule, globalStyleSelectors = Object.keys(globalStyles);
    if (globalStyleSelectors.length > 0)
      for (let selector of globalStyleSelectors) {
        let elements = getElementsBySelectors(
          isDynamic ? rootFrame : container,
          [selector]
        );
        for (let element of elements)
          if (!isMarked(element, sourceElementWithGlobalStyleMarkAttributeName)) {
            setAttribute(
              element,
              sourceElementWithGlobalStyleMarkAttributeName,
              "1"
            );
            let cssText = globalStyles[selector];
            element.style.cssText += cssText;
          }
      }
    let globalAttributesSelectors = Object.keys(globalAttributes);
    if (globalAttributesSelectors.length > 0)
      for (let selector of globalAttributesSelectors) {
        let attributes = globalAttributes[selector], attributesKeys = Object.keys(attributes), elements = getElementsBySelectors(
          isDynamic ? rootFrame : container,
          [selector]
        );
        for (let element of elements)
          for (let key of attributesKeys) {
            let value = attributes[key];
            element.getAttribute(key) !== value && (value === null ? element.removeAttribute(key) : element.setAttribute(key, value));
          }
      }
    let allExcludeSelectors = [
      ...excludeSelectors,
      ...additionalExcludeSelectors
    ], allInlineSelectors = [
      ...extraInlineSelectors,
      ...additionalInlineSelectors
    ], allAtomicBlockSelectors = [...atomicBlockSelectors], allAtomicBlockTagsSelectors = atomicBlockTags.map(
      (item) => item.toLowerCase()
    ), allBlockSelectos = extraBlockSelectors;
    getElementsBySelectors(
      isDynamic ? rootFrame : container,
      additionalSelectors
    ).forEach((element) => {
      isMarked(element, specifiedTargetContainerElementAttributeName) || setAttribute(
        element,
        specifiedTargetContainerElementAttributeName,
        "1"
      );
    }), getElementsBySelectors(
      isDynamic ? rootFrame : container,
      allExcludeSelectors
    ).forEach((element) => {
      isMarked(element, sourceElementExcludeAttributeName, !0) || setAttribute(element, sourceElementExcludeAttributeName, "1", !0);
    });
    let atomicBlockElements = [];
    if (allAtomicBlockSelectors.length > 0 && (atomicBlockElements = getElementsBySelectors(
      isDynamic ? rootFrame : container,
      allAtomicBlockSelectors
    ).filter((element) => !isMarked(element, sourceAtomicBlockElementMarkAttributeName))), allAtomicBlockTagsSelectors.length > 0) {
      let stayOriginalTagsHTMLStringArr = stayOriginalTags.reduce(
        (arr, item) => {
          let tagLower = item.toLowerCase();
          return arr.push(`<${tagLower}>`, `</${tagLower}>`, `<${tagLower} />`), arr;
        },
        []
      ), httpLinkTags = [">http://", ">https://"];
      stayOriginalTagsHTMLStringArr.push(...httpLinkTags);
      let atomicBlockTagsElements = getElementsBySelectors(
        isDynamic ? rootFrame : container,
        allAtomicBlockTagsSelectors
      ).filter((element) => {
        if (isMarked(
          element,
          sourceAtomicBlockElementMarkAttributeName
        ))
          return !1;
        {
          let htmlString = element.innerHTML;
          return !stayOriginalTagsHTMLStringArr.some(
            (item) => htmlString.includes(item)
          );
        }
      });
      atomicBlockElements.push(...atomicBlockTagsElements);
    }
    atomicBlockElements.forEach((element) => {
      isMarked(element, sourceAtomicBlockElementMarkAttributeName) || setAttribute(element, sourceAtomicBlockElementMarkAttributeName, "1");
    });
    let extraInlineElements = [];
    allInlineSelectors.length > 0 && extraInlineElements.push(
      ...getElementsBySelectors(
        isDynamic ? rootFrame : container,
        allInlineSelectors
      )
    ), extraInlineElements.forEach((element) => {
      setAttribute(element, sourceInlineElementMarkAttributeName, "1");
    });
    let extraBlockElements = [];
    allBlockSelectos.length > 0 && extraBlockElements.push(
      ...getElementsBySelectors(
        isDynamic ? rootFrame : container,
        allBlockSelectos
      )
    ), extraBlockElements.forEach((element) => {
      setAttribute(element, sourceBlockElementMarkAttributeName, "1");
    });
    let stayOriginalElements = [], allStayOriginalSelectors = [
      ...stayOriginalSelectors,
      ...additionalStayOriginalSelectors
    ];
    allStayOriginalSelectors.length > 0 && stayOriginalElements.push(
      ...getElementsBySelectors(
        isDynamic ? rootFrame : container,
        allStayOriginalSelectors
      )
    ), stayOriginalElements.forEach((element) => {
      setAttribute(element, sourceElementStayOriginalAttributeName, "1");
    });
  }

  // utils/array.ts
  function arrayOrGenericToArray(arrayOrGeneric) {
    return Array.isArray(arrayOrGeneric) ? arrayOrGeneric : arrayOrGeneric ? [arrayOrGeneric] : [];
  }
  function addToUniqueArray(item, array) {
    return array ? (Array.isArray(array) || (array = [array]), Array.from(/* @__PURE__ */ new Set([...array, item]))) : [item];
  }
  function removeFromArray(item, array) {
    return array ? (Array.isArray(item) || (item = [item]), Array.isArray(array) || (array = [array]), array.filter((i2) => !item.includes(i2))) : [];
  }

  // utils/merge_rule.ts
  function mergeRule(generalRule, rule) {
    let arrayKeys = [], allRuleKeys = Object.keys(
      generalRule
    );
    for (let key of allRuleKeys) {
      let value = generalRule[key];
      Array.isArray(value) && arrayKeys.push(key);
    }
    let finalRule = {
      ...generalRule
    };
    return Object.keys(rule).forEach((key) => {
      let value = rule[key];
      if (value !== void 0)
        if (!arrayKeys.includes(key))
          finalRule[key] = value;
        else if (key.startsWith("additional")) {
          let userValue = arrayOrGenericToArray(value);
          finalRule[key] = Array.from(
            // @ts-ignore: ignore type error
            /* @__PURE__ */ new Set([...finalRule[key], ...userValue])
          );
        } else
          finalRule[key] = arrayOrGenericToArray(value);
    }), finalRule;
  }


  // errors.ts
  var CommonError = class extends Error {
    constructor(name, message, details) {
      super(message);
      this.name = name, details && (this.details = details);
    }
  };

  // browser/request.ts
  var ports = /* @__PURE__ */ new Map();
  isMonkey() || browserAPI.runtime.onConnect.addListener((port) => {
    log_default.debug(port.name), ports.set(port.name, port), port.onDisconnect.addListener((port2) => {
      log_default.debug("chatgpt port disconnected"), ports.delete(port2.name);
    });
  });



  // dom/get_containers.ts
  function getContainers(root2, ctx) {
    if (!(root2 && root2.textContent && root2.textContent.trim()))
      return [];
    let { rule, state: { translationArea } } = ctx, contentContainers = [];
    if (translationArea === "body")
      return [root2];
    let pairsKeys = Object.keys(rule.pairs);
    if (rule && rule.selectors.length > 0) {
      let containers = rule.selectors.map((selector) => {
        let isMatch = root2.matches(selector), elements = [];
        isMatch ? elements = [root2] : elements = root2.querySelectorAll(
          selector
        );
        for (let element of elements)
          isMarked(element, specifiedTargetContainerElementAttributeName) || setAttribute(
            element,
            specifiedTargetContainerElementAttributeName,
            "1"
          );
        return Array.from(elements);
      }).flat();
      contentContainers.push(
        ...containers.map((container) => ({
          element: container,
          reserve: !0
        }))
      );
    } else {
      if (rule && rule.additionalSelectors.length > 0) {
        let additionalElements = getElementsBySelectors(
          root2,
          rule.additionalSelectors
        );
        for (let element of additionalElements)
          isMarked(element, specifiedTargetContainerElementAttributeName) || setAttribute(
            element,
            specifiedTargetContainerElementAttributeName,
            "1"
          );
        contentContainers.push(
          ...additionalElements.map((element) => ({
            element,
            reserve: !0
          }))
        );
      }
      let articleElements = getElementsBySelectors(root2, ["article"]);
      contentContainers.push(
        ...articleElements.map((element) => ({
          element,
          reserve: !0
        }))
      );
      let mains;
      if (contentContainers.length === 0 && (mains = root2.querySelectorAll("[role=main]"), mains.length === 0 && (mains = root2.querySelectorAll("main")), mains.length === 0 && (mains = root2.querySelectorAll(".main")), mains.length > 0)) {
        let mainsArray = Array.from(mains);
        contentContainers = contentContainers.concat(
          mainsArray.map((main3) => ({
            element: main3,
            reserve: !0
          }))
        );
      }
      let detectedContainers = [], treeFilter = (node) => {
        if (node.nodeType === Node.ELEMENT_NODE && isExcludeElement(node, ctx.rule, !0))
          return NodeFilter.FILTER_REJECT;
        if (node.nodeType === Node.TEXT_NODE) {
          let trimedText = node.textContent ? node.textContent.trim() : "";
          if (isValidTextByCount(
            trimedText,
            ctx.rule.containerMinTextCount,
            ctx.rule.containerMinWordCount
          )) {
            let parentNode = node.parentNode;
            parentNode && parentNode.parentNode && (parentNode = parentNode.parentNode), parentNode && parentNode.nodeType === Node.ELEMENT_NODE && (detectedContainers.includes(parentNode) || detectedContainers.push(parentNode));
          }
        }
        return NodeFilter.FILTER_ACCEPT;
      }, walk = document.createTreeWalker(
        root2,
        NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
        treeFilter
      );
      for (; walk.nextNode(); )
        ;
      contentContainers.push(
        ...detectedContainers.map((element) => ({
          element,
          reserve: !1
        }))
      );
    }
    let finalContainers = duplicatedElements(root2, contentContainers, rule);
    return finalContainers.sort(function(a4, b5) {
      return a4.compareDocumentPosition(b5) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    }), finalContainers;
  }

  // dom/unmount.ts
  var cleanQueue = [];
  function addToUnmountQueue(fn) {
    cleanQueue.push(fn);
  }
  function clean() {
    cleanQueue.forEach((fn) => fn()), cleanQueue = [];
  }


  // dom/elements_to_paragraph.ts
  function elementsToParagraph(elements, isPreWhitespace, rootFrame, ctx) {
    let { rule } = ctx, delimiters = getPlaceholderDelimiters(ctx);
    if (elements.length === 0)
      return null;
    elements = elements.map(
      (element) => element.element ? element : {
        element
      }
    );
    let isForceTranslate = elements.some(
      (element) => element.forceTranslate
    ), text = "", variables = [], currentVariableIndex = 0;
    elements && elements.length > 0 && elements[0].currentVariableIndex && (currentVariableIndex = elements[0].currentVariableIndex);
    let isHasMeaningfulText = isForceTranslate;
    for (let i2 = 0; i2 < elements.length; i2++) {
      let elementState = elements[i2], element = elementState.element;
      if (elementState.text) {
        text += elementState.text, elementState.variables && elementState.variables.length > 0 && variables.push(...elementState.variables), isHasMeaningfulText = !0;
        continue;
      }
      if (typeof element == "string") {
        text += element;
        continue;
      }
      let rawText = "";
      isContainsSelectors(
        element,
        `[${sourceElementExcludeAttributeNameForSelector}]`
      ) ? rawText = getTextWithExcludeElement(element) || "" : rawText = element.innerText || "";
      let isStartWithSpace = rawText.startsWith(" "), isEndWithSpace = rawText.endsWith(" ");
      element.tagName === "A" && (isStartWithSpace = !0, isEndWithSpace = !0);
      let isStayOriginal = isStayOriginalElement(element, rule);
      if (rawText === "" || isStayOriginal) {
        if (element && isMatchTags(element.nodeName, ["IMG"])) {
          let style = globalThis.getComputedStyle(element), width = parseInt(style.width, 10), height = parseInt(style.height, 10);
          if (width > 36 || height > 36)
            continue;
        }
        isStayOriginal && (isMatchTags(element.nodeName, ["SUP", "SUB"]) || (isStartWithSpace = !0, isEndWithSpace = !0));
        let variableElement = element;
        if (isStayOriginal && element.tagName === "IMG") {
          let clonedElement = element.cloneNode(!0), originalStyle = clonedElement.getAttribute("style") || "", rect = element.getBoundingClientRect();
          clonedElement.setAttribute(
            "style",
            `${originalStyle} width: ${rect.width}px; height: ${rect.height}px;`
          ), variableElement = clonedElement;
        }
        let variable = {
          type: "element",
          value: variableElement
        };
        variables.push(variable);
        let index = variables.length - 1 + currentVariableIndex, delimiter = `${delimiters[0]}${index}${delimiters[1]}`;
        text += (isStartWithSpace ? " " : "") + delimiter + (isEndWithSpace ? " " : "");
        continue;
      }
      if (!isExcludeElement(element, rule, !0)) {
        {
          let finalText = isPreWhitespace ? rawText : customTrim(rawText).replace(/\n/g, " ");
          if (isUrl(finalText) || isHashTag(finalText) || isAtTag(finalText) || isStockTag(finalText)) {
            let variable = {
              type: "element",
              value: element
            };
            variables.push(variable);
            let index = variables.length - 1, delimiter = `${delimiters[0]}${index}${delimiters[1]}`;
            text += (isStartWithSpace ? " " : "") + delimiter + (isEndWithSpace ? " " : "");
          } else
            isHasMeaningfulText = !0, text += (isStartWithSpace ? " " : "") + finalText + (isEndWithSpace ? " " : "");
        }
        if (typeof element != "string") {
          let whitespace = getWhitespace(
            element.nextSibling,
            isPreWhitespace
          );
          whitespace && (text += whitespace);
        }
      }
    }
    if (!isHasMeaningfulText)
      return null;
    let inline = !1, wordCount = text.split(" ").length, lineCount = text.split(`
`).length;
    wordCount <= rule.blockMinWordCount && text.length <= rule.blockMinTextCount && lineCount < 2 && (inline = !0);
    let finalElements = elements.map(
      (element) => element.element
    ), lastElement = getLastHTMLElement(elements), isVertical = !1;
    if (lastElement) {
      let writtingMode = globalThis.getComputedStyle(lastElement).writingMode;
      isVertical = writtingMode ? writtingMode.includes("vertical") : !1;
    }
    let paragraph = {
      rootFrame,
      isVertical,
      elements: finalElements,
      text,
      variables,
      inline,
      preWhitespace: isPreWhitespace
    };
    return isForceTranslate || isNeedToTranslate(
      paragraph,
      ctx.state.translationArea === "body" ? 2 : rule.paragraphMinTextCount,
      ctx.state.translationArea === "body" ? 1 : rule.paragraphMinWordCount,
      ctx
    ) ? paragraph : null;
  }
  function getTextWithExcludeElement(element) {
    let finalText = "", filterExcludeElement = (node) => node.nodeType === Node.ELEMENT_NODE ? isMarked(node, sourceElementExcludeAttributeName, !0) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT : node.nodeType === Node.TEXT_NODE ? (node.textContent && node.textContent.trim() !== "" && (finalText += node.textContent.replace(/\s+/g, " ")), NodeFilter.FILTER_REJECT) : NodeFilter.FILTER_ACCEPT, treeWalker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
      filterExcludeElement
    );
    for (; treeWalker.nextNode(); )
      ;
    return finalText;
  }

  // dom/get_paragraphs.ts
  var paragraphAutoIncreaceId = 1, paragraphEntities = /* @__PURE__ */ new Map();
  function getParagraphEntities() {
    return paragraphEntities;
  }
  function getParagraph(id) {
    return paragraphEntities.get(id);
  }
  function setParagraph(id, paragraph) {
    paragraphEntities.set(id, paragraph);
  }
  function cleanParagraphs() {
    paragraphEntities.clear();
  }
  function isMarkedByParagraph(targetElement) {
    if (!isMarked(targetElement, sourceElementMarkAttributeName))
      return !1;
    if (isMarked(targetElement, sourceElementTranslatedMarkAttributeName))
      return !0;
    let markId = getAttribute(
      targetElement,
      sourceElementParagraphAttributeName
    );
    if (!markId)
      return !1;
    let paragraphId = parseInt(markId), isExist = paragraphEntities.has(paragraphId);
    if (!isExist) {
      let maybeTargetElement = document.getElementById(
        `${translationTargetElementWrapperClass}-${paragraphId}`
      );
      maybeTargetElement && maybeTargetElement.remove();
    }
    return isExist;
  }
  function addToParagraphs(paragraph, allParagraphs) {
    let newParagraph = {
      ...paragraph,
      id: paragraphAutoIncreaceId++,
      languageByClient: "auto",
      languageByLocal: "auto"
    };
    newParagraph.elements.forEach((element) => {
      element instanceof HTMLElement && (setAttribute(element, sourceElementMarkAttributeName, "1"), setAttribute(
        element,
        sourceElementParagraphAttributeName,
        `${newParagraph.id}`
      ));
    }), allParagraphs.push(newParagraph), paragraphEntities.set(newParagraph.id, {
      ...newParagraph,
      state: "Original",
      observers: []
    });
  }
  async function getParagraphs(rootFrame, containers, ctx) {
    let allParagraphs = [], { targetLanguage, rule } = ctx;
    for (let container of containers) {
      if (isExcludeElement(container, rule, !1))
        continue;
      let isPreWhitespaceContainer = isMarked(
        container,
        sourcePreWhitespaceMarkAttributeName
      ), inlineElementGroups = [];
      if (isMarked(container, sourceAtomicBlockElementMarkAttributeName)) {
        if (!isMarkedByParagraph(container)) {
          let paragraph = elementsToParagraph(
            [container],
            !0,
            rootFrame,
            ctx
          );
          paragraph && addToParagraphs(paragraph, allParagraphs);
        }
        continue;
      }
      let currentVariableIndex = 0, filter = (node2) => {
        if (!(node2.nodeType === Node.TEXT_NODE || node2.nodeType === Node.ELEMENT_NODE))
          return NodeFilter.FILTER_REJECT;
        if (node2.nodeType === Node.ELEMENT_NODE) {
          let element = node2;
          if (element.isContentEditable || isMarkedByParagraph(
            node2
          ))
            return NodeFilter.FILTER_REJECT;
          if (setAttribute(element, sourceElementMarkAttributeName, "1"), isMarked(element, sourceAtomicBlockElementMarkAttributeName)) {
            if (inlineElementGroups.length > 0) {
              let paragraph2 = elementsToParagraph(
                [...inlineElementGroups],
                isPreWhitespaceContainer,
                rootFrame,
                ctx
              );
              currentVariableIndex = 0, paragraph2 && addToParagraphs(paragraph2, allParagraphs), inlineElementGroups.length = 0;
            }
            inlineElementGroups.push(element);
            let paragraph = elementsToParagraph(
              [...inlineElementGroups],
              isPreWhitespaceContainer,
              rootFrame,
              ctx
            );
            return currentVariableIndex = 0, paragraph && addToParagraphs(paragraph, allParagraphs), inlineElementGroups.length = 0, NodeFilter.FILTER_REJECT;
          }
        }
        if (isExcludeElement(node2, rule, !0)) {
          if (isMatchTags(node2.nodeName, ["CODE", "TT"]) && isMatchTags(node2.parentNode?.nodeName, ["PRE"]))
            return NodeFilter.FILTER_REJECT;
          if (isInlineElement(
            node2,
            rule
          ))
            return currentVariableIndex = handleInlineElement(
              node2,
              inlineElementGroups,
              allParagraphs,
              isPreWhitespaceContainer,
              rootFrame,
              ctx,
              currentVariableIndex
            ).currentVariableIndex, NodeFilter.FILTER_REJECT;
          if (inlineElementGroups.length > 0) {
            let paragraph = elementsToParagraph(
              [...inlineElementGroups],
              isPreWhitespaceContainer,
              rootFrame,
              ctx
            );
            currentVariableIndex = 0, paragraph && addToParagraphs(paragraph, allParagraphs), inlineElementGroups.length = 0;
          }
          return NodeFilter.FILTER_REJECT;
        }
        return isMatchTags(node2.nodeName, ["PRE"]) && node2.classList.contains("code") ? NodeFilter.FILTER_REJECT : isInlineElement(
          node2,
          rule
        ) ? (currentVariableIndex = handleInlineElement(
          node2,
          inlineElementGroups,
          allParagraphs,
          isPreWhitespaceContainer,
          rootFrame,
          ctx,
          currentVariableIndex
        ).currentVariableIndex, NodeFilter.FILTER_REJECT) : NodeFilter.FILTER_ACCEPT;
      }, elementIter = document.createTreeWalker(
        container,
        NodeFilter.SHOW_ELEMENT,
        filter
      ), node = elementIter.nextNode();
      for (; node; ) {
        if (inlineElementGroups.length > 0) {
          let paragraph = elementsToParagraph(
            [...inlineElementGroups],
            isPreWhitespaceContainer,
            rootFrame,
            ctx
          );
          currentVariableIndex = 0, paragraph && addToParagraphs(paragraph, allParagraphs), inlineElementGroups.length = 0;
        }
        node = elementIter.nextNode();
      }
      if (inlineElementGroups.length > 0) {
        let paragraph = elementsToParagraph(
          [...inlineElementGroups],
          isPreWhitespaceContainer,
          rootFrame,
          ctx
        );
        currentVariableIndex = 0, paragraph && addToParagraphs(paragraph, allParagraphs), inlineElementGroups.length = 0;
      }
    }
    let promises = allParagraphs.map((paragraph) => {
      let { text } = paragraph;
      return detectLanguage({
        text,
        minLength: 10
      });
    }), results = await Promise.all(promises), filterdParagraphs = [], excludeLanguages = ctx?.config?.translationLanguagePattern?.excludeMatches || [], currentPageLanguageByClient2 = "auto";
    ctx.state.isDetectParagraphLanguage || (currentPageLanguageByClient2 = getCurrentPageLanguageByClient());
    let currentPageLanguageByLocal = getCurrentPageLanguage();
    return results.forEach((result, index) => {
      let currentLanguageByLocal = result;
      currentLanguageByLocal === "auto" && (currentLanguageByLocal = currentPageLanguageByLocal);
      let newParagraph = {
        ...allParagraphs[index],
        languageByLocal: currentLanguageByLocal,
        languageByClient: currentPageLanguageByClient2 || "auto"
      };
      if (newParagraph.text.length < ctx.rule.languageDetectMinTextCount && (newParagraph.languageByLocal = "auto"), paragraphEntities.set(newParagraph.id, {
        ...newParagraph,
        state: "Original",
        observers: []
      }), isSameTargetLanguage(result, targetLanguage))
        paragraphEntities.delete(newParagraph.id);
      else {
        if (excludeLanguages.length > 0 && excludeLanguages.some((language) => isSameTargetLanguage(result, language))) {
          paragraphEntities.delete(newParagraph.id);
          return;
        }
        filterdParagraphs.push(newParagraph);
      }
    }), filterdParagraphs;
  }
  function getInlineElementsOfInlineElement(root2, isPreWhitespaceContainer, rootFrame, ctx, currentVariableIndex) {
    let elementState = {
      element: root2
    }, node = null, isWhiteSpaceNodeOfLastElement = !1, fullText = "", variables = [], elements = [], filter = (node2) => {
      if (node2.nodeType === Node.TEXT_NODE)
        return NodeFilter.FILTER_ACCEPT;
      if (node2.nodeType === Node.ELEMENT_NODE && isStayOriginalElement(node2, ctx.rule)) {
        let parentElementParagraph = elementsToParagraph(
          [{
            element: node2,
            forceTranslate: !0,
            currentVariableIndex
          }],
          isPreWhitespaceContainer,
          rootFrame,
          ctx
        );
        return currentVariableIndex += parentElementParagraph?.variables?.length || 0, parentElementParagraph && (fullText += parentElementParagraph.text, parentElementParagraph && parentElementParagraph.variables && (variables = variables.concat(parentElementParagraph.variables))), NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    }, treeWalker = document.createTreeWalker(
      root2,
      NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
      filter
    );
    for (; node = treeWalker.nextNode(); ) {
      if (node.nodeType !== Node.TEXT_NODE)
        continue;
      let rawText = node.textContent || "", textContent = rawText.trim();
      if (!isWhiteSpaceNodeOfLastElement && rawText.length > 0 && textContent.length === 0) {
        isWhiteSpaceNodeOfLastElement = !0, fullText += " ", elements.push(" ");
        continue;
      }
      if (textContent.length > 0) {
        let parent = node.parentElement;
        if (parent === root2) {
          let text = textContent.replace(/\s+/g, " ");
          fullText += text, elements.push(text);
        } else {
          elements.push(parent);
          let parentElementParagraph = elementsToParagraph(
            [{
              element: parent,
              forceTranslate: !0,
              currentVariableIndex
            }],
            isPreWhitespaceContainer,
            rootFrame,
            ctx
          );
          currentVariableIndex += parentElementParagraph?.variables?.length || 0, parentElementParagraph && (fullText += parentElementParagraph.text, parentElementParagraph && parentElementParagraph.variables && (variables = variables.concat(parentElementParagraph.variables)));
        }
        isWhiteSpaceNodeOfLastElement = !1;
      }
    }
    let lastElement = elements[elements.length - 1];
    if (lastElement && typeof lastElement != "string") {
      let whitespace = getWhitespace(
        lastElement.nextSibling,
        isPreWhitespaceContainer
      );
      whitespace && (elements.push(whitespace), fullText += " ");
    }
    if (typeof elements[elements.length - 1] != "string") {
      let whitespace = getWhitespace(
        root2.nextSibling,
        isPreWhitespaceContainer
      );
      whitespace && (elements.push(whitespace), fullText += " ");
    }
    return elementState.text = fullText, elementState.variables = variables, elementState;
  }
  function handleInlineElement(node, inlineElementGroups, allParagraphs, isPreWhitespaceContainer, rootFrame, ctx, currentVariableIndex) {
    let previouseElement = node.previousElementSibling;
    if (previouseElement && !isInlineElement(
      previouseElement,
      ctx.rule
    ) && inlineElementGroups.length > 0) {
      let paragraph = elementsToParagraph(
        [...inlineElementGroups],
        isPreWhitespaceContainer,
        rootFrame,
        ctx
      );
      paragraph && addToParagraphs(paragraph, allParagraphs), inlineElementGroups.length = 0;
    }
    if (isExcludeElement(
      node,
      ctx.rule,
      !1
    ))
      isMetaElement(node, ctx.rule) || (isStayOriginalElement(node, ctx.rule) && (currentVariableIndex += 1), inlineElementGroups.push(node));
    else if (isStayOriginalElement(node, ctx.rule))
      inlineElementGroups.push(node), currentVariableIndex += 1;
    else if (isContainsStayOriginalElement(node, ctx.rule)) {
      let inlineGroupElementState = getInlineElementsOfInlineElement(
        node,
        isPreWhitespaceContainer,
        rootFrame,
        ctx,
        currentVariableIndex
      );
      inlineGroupElementState && inlineGroupElementState.text && (inlineGroupElementState.variables && (currentVariableIndex += inlineGroupElementState.variables.length), inlineElementGroups.push(
        inlineGroupElementState
      ));
    } else
      inlineElementGroups.push(node);
    return {
      currentVariableIndex
    };
  }

  // dom/get_pairs_paragraphs.ts
  function getParagraphs2(rootFrame, ctx) {
    let pariKeys = Object.keys(ctx.rule.pairs), allParagraphs = [], id = 1, currentPageLanguageByClient2 = "auto", currentPageLanguage2 = getCurrentPageLanguage();
    ctx.state.isDetectParagraphLanguage || (currentPageLanguageByClient2 = getCurrentPageLanguageByClient());
    for (let pairKey of pariKeys) {
      let targetPair = ctx.rule.pairs[pairKey], sourceElements = rootFrame.querySelectorAll(
        pairKey
      ), targetElements = rootFrame.querySelectorAll(
        targetPair
      );
      for (let i2 = 0; i2 < sourceElements.length; i2++) {
        let sourceElement = sourceElements[i2], targetElement = targetElements[i2];
        if (sourceElement && targetElement) {
          let paragraph = {
            elements: [sourceElement],
            isVertical: !1,
            rootFrame,
            text: sourceElement.textContent || "",
            variables: [],
            inline: !1,
            preWhitespace: !0,
            isPdf: !1,
            targetContainer: targetElement,
            id: id++,
            languageByClient: currentPageLanguageByClient2,
            languageByLocal: currentPageLanguage2
          };
          addToParagraphs(paragraph, allParagraphs);
        }
      }
    }
    return allParagraphs;
  }

  // dom/get_pdf_paragraphs.ts
  async function getParagraphs3(rootFrame, containers, ctx, targetContainers) {
    let allParagraphs = [], { rule } = ctx;
    for (let i2 = 0; i2 < containers.length; i2++) {
      let container = containers[i2], targetContainer = targetContainers[i2];
      if (!targetContainer)
        throw new Error("targetContainer is null");
      let inlineElementGroups = [], isFirstElementOfParagraph = !0, lastLineFirstElementInfo = null, pdfContainerFilter = function(node2) {
        let element = node2;
        if (isMatchTags(element.nodeName, ["DIV", "BR"]))
          return isFirstElementOfParagraph = !0, NodeFilter.FILTER_REJECT;
        if (element.classList.contains("markedContent"))
          return NodeFilter.FILTER_ACCEPT;
        if (isMarkedByParagraph2(
          node2
        ))
          return NodeFilter.FILTER_REJECT;
        if (setAttribute(element, sourceElementMarkAttributeName, "1"), isInlineElement(element, rule)) {
          let lastElement = getLastHTMLElement(inlineElementGroups), currentElementStyle = globalThis.getComputedStyle(element);
          if (!lastElement)
            inlineElementGroups.push(formatElement(element, currentElementStyle));
          else {
            let lastElementStyle = globalThis.getComputedStyle(lastElement), lastElementInfo = getElementInfoByComputedStyle(
              lastElementStyle
            ), currentElementInfo = getElementInfoByComputedStyle(
              currentElementStyle
            ), distanceInfo = getDistance(currentElementInfo, lastElementInfo), isNewParagraph = !1;
            if (isFirstElementOfParagraph && lastLineFirstElementInfo && getDistance(currentElementInfo, lastLineFirstElementInfo).left >= 1.5 && lastLineFirstElementInfo.left > -3 && (isNewParagraph = !0), !isNewParagraph && isFirstElementOfParagraph) {
              let trimedText = (element.innerText || element.textContent || "").trim();
              (trimedText.startsWith("\u2022") || trimedText.charCodeAt(0) === 61623 || /^\d+\./.test(trimedText)) && (isNewParagraph = !0);
            }
            !isNewParagraph && isFirstElementOfParagraph && getLastHTMLElement(inlineElementGroups) && getHTMLElements(inlineElementGroups).reduce(
              (max, element2) => {
                let elementInfo = getElementInfoByComputedStyle(
                  globalThis.getComputedStyle(element2)
                );
                return Math.max(max, elementInfo.right);
              },
              0
            ) - lastElementInfo.right > rule.pdfNewParagraphIndentRightIndentPx && (isNewParagraph = !0), isFirstElementOfParagraph && (lastLineFirstElementInfo = currentElementInfo, isFirstElementOfParagraph = !1), isNewParagraph || (isNewParagraph = getIsNewParagraph(distanceInfo, rule)), isNewParagraph && tryToAddToParagraph(
              inlineElementGroups,
              allParagraphs,
              rootFrame,
              ctx,
              targetContainer
            ), inlineElementGroups.push(formatElement(element, currentElementStyle)), inlineElementGroups.push(" ");
          }
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }, elementIter = document.createTreeWalker(
        container,
        NodeFilter.SHOW_ELEMENT,
        pdfContainerFilter
      ), node = elementIter.nextNode();
      for (; node; )
        node = elementIter.nextNode();
      tryToAddToParagraph(
        inlineElementGroups,
        allParagraphs,
        rootFrame,
        ctx,
        targetContainer
      );
    }
    return allParagraphs;
  }
  function tryToAddToParagraph(inlineElementGroups, allParagraphs, rootFrame, ctx, targetContainer) {
    if (inlineElementGroups.length > 0) {
      let paragraph = elementsToParagraph(
        [...inlineElementGroups],
        !1,
        rootFrame,
        ctx
      );
      paragraph && (paragraph.isPdf = !0, paragraph.targetContainer = targetContainer, paragraph.inline = !1, addToParagraphs(paragraph, allParagraphs)), inlineElementGroups.length = 0;
    }
  }
  function getElementInfoByComputedStyle(style) {
    return {
      top: parseFloat(style.top.slice(0, -2)),
      left: parseFloat(style.left.slice(0, -2)),
      right: parseFloat(style.left.slice(0, -2)) + parseFloat(style.width.slice(0, -2)),
      fontSize: parseFloat(style.fontSize.slice(0, -2))
    };
  }
  function getIsNewParagraph(distance, rule) {
    return distance.fontSize > 2 || distance.fontSize < -2 || distance.top >= rule.pdfNewParagraphLineHeight || distance.top <= rule.pdfNewParagraphLineHeight * -1;
  }
  function getDistance(elementInfo1, elementInfo2) {
    let elementBasedFontSize = elementInfo2.fontSize, currentElementFontSize = elementInfo1.fontSize;
    return {
      top: (elementInfo1.top - elementInfo2.top) / elementBasedFontSize,
      left: (elementInfo1.left - elementInfo2.left) / elementBasedFontSize,
      fontSize: currentElementFontSize - elementBasedFontSize
    };
  }
  function formatElement(element, style) {
    return style.fontFamily === "monospace" ? {
      element,
      isStayOriginal: !0,
      targetTagName: "code"
    } : element;
  }
  function isMarkedByParagraph2(targetElement) {
    if (!isMarked(targetElement, sourceElementMarkAttributeName))
      return !1;
    if (isMarked(targetElement, sourceElementTranslatedMarkAttributeName))
      return !0;
    let markId = getAttribute(
      targetElement,
      sourceElementParagraphAttributeName
    );
    if (!markId)
      return !1;
    let paragraphId = parseInt(markId), isExist = getParagraphEntities().has(paragraphId);
    if (!isExist) {
      let maybeTargetElement = document.getElementById(
        `${translationTargetElementWrapperClass}-${paragraphId}`
      );
      maybeTargetElement && maybeTargetElement.remove();
    }
    return isExist;
  }

  // utils/escape_html.ts
  function escapeHTML(htmlStr) {
    return htmlStr.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  // dom/normalize_container.ts
  function normalizeContainer(containers, rule) {
    let hiddenElements = [];
    for (let container of containers) {
      if (isMarked(container, sourceAtomicBlockElementMarkAttributeName))
        continue;
      if (setAttribute(container, targetContainerElementAttributeName, "1"), container.normalize(), rule.lineBreakMaxTextCount > 0) {
        let treeFilter = (node) => node.nodeType === Node.ELEMENT_NODE && isExcludeElement(node, rule, !0) ? NodeFilter.FILTER_REJECT : (node.nodeType === Node.TEXT_NODE && (node.textContent ? node.textContent.trim() : "").length >= rule.lineBreakMaxTextCount && addLineBreakToText(node, rule.lineBreakMaxTextCount), NodeFilter.FILTER_ACCEPT), walk = document.createTreeWalker(
          container,
          NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
          treeFilter
        );
        for (; walk.nextNode(); )
          ;
      }
      if (!(rule.excludeTags.includes("PRE") || rule.additionalExcludeTags.includes("PRE")) && rule.isTransformPreTagNewLine) {
        let preTags = container.querySelectorAll("pre");
        for (let preTag of preTags)
          formatPreHtml(preTag);
      }
      rule.preWhitespaceDetectedTags.includes(container.tagName) && (hasMark(container, sourcePreWhitespaceMarkAttributeName) || (isPreElementByStyle(container) ? (setAttribute(container, sourcePreWhitespaceMarkAttributeName, "1"), rule.isTransformPreTagNewLine && formatPreHtml(container)) : setAttribute(container, sourcePreWhitespaceMarkAttributeName, "0"))), wrapTextNode(
        0,
        container,
        rule,
        hiddenElements
      );
    }
    return {
      hiddenElements
    };
  }
  function wrapTextNode(depth, root2, rule, displayNoneElements = []) {
    if (isMarked(root2, sourceAtomicBlockElementMarkAttributeName))
      return;
    let isSingleInlineElement = !1;
    if (depth === 0) {
      let isStayOriginal = isStayOriginalElement(root2, rule);
      root2.childNodes && root2.childNodes.length === 1 && root2.nodeType === Node.ELEMENT_NODE && isInlineElement(
        root2,
        rule
      ) && !isStayOriginal && (isSingleInlineElement = !0);
    }
    if (root2 && root2.childNodes && root2.childNodes.length > 0) {
      for (let node of root2.childNodes)
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (isExcludeElement(node, rule, !1))
            continue;
          {
            let computedStyle = globalThis.getComputedStyle(
              node
            ), tempIsExcludeElement = !1;
            if (computedStyle.display === "none" && (displayNoneElements.push(node), tempIsExcludeElement = !0), !tempIsExcludeElement) {
              let clip = computedStyle.clip, zIndex = computedStyle.zIndex, height = computedStyle.height, width = computedStyle.width, formatedZIndex = 0;
              if (zIndex.startsWith("-")) {
                let zIndexNumber = parseInt(zIndex);
                isNaN(zIndexNumber) || (formatedZIndex = zIndexNumber);
              }
              if (clip === "rect(1px, 1px, 1px, 1px)" && (tempIsExcludeElement = !0), formatedZIndex < rule.minZIndex && (tempIsExcludeElement = !0), !tempIsExcludeElement && node.nodeName !== "BR") {
                let heightNumber = parseInt(height), widthNumber = parseInt(width);
                !isNaN(heightNumber) && !isNaN(widthNumber) && (heightNumber > 0 && heightNumber < 8 || widthNumber > 0 && widthNumber <= 8) && (tempIsExcludeElement = !0);
              }
            }
            if (tempIsExcludeElement) {
              setAttribute(
                node,
                sourceElementExcludeAttributeName,
                "1",
                !0
              );
              continue;
            } else {
              if (isMatchTags(node.nodeName, ["DIV"])) {
                let nodeElement = node;
                if (node && nodeElement.style && nodeElement.style.display && nodeElement.style.display === "initial")
                  continue;
                if (computedStyle.display === "inline" && !isMarked(
                  node,
                  sourceBlockElementMarkAttributeName
                )) {
                  setAttribute(
                    node,
                    sourceInlineElementMarkAttributeName,
                    "1"
                  );
                  continue;
                }
              } else if (isMatchTags(node.nodeName, ["SPAN", "A"])) {
                if (!computedStyle.display.startsWith("inline")) {
                  isMarked(
                    node,
                    sourceInlineElementMarkAttributeName
                  ) || (setAttribute(
                    node,
                    sourceBlockElementMarkAttributeName,
                    "1"
                  ), wrapTextNode(
                    depth + 1,
                    node,
                    rule,
                    displayNoneElements
                  ));
                  continue;
                }
              } else if (isUnknowTag(node, rule))
                if (isInlineElement(
                  node,
                  rule
                )) {
                  if (!isMarked(
                    node,
                    sourceBlockElementMarkAttributeName
                  ) && !isMarked(
                    node,
                    sourceInlineElementMarkAttributeName
                  )) {
                    setAttribute(
                      node,
                      sourceInlineElementMarkAttributeName,
                      "1"
                    );
                    continue;
                  }
                } else {
                  !isMarked(
                    node,
                    sourceBlockElementMarkAttributeName
                  ) && !isMarked(
                    node,
                    sourceInlineElementMarkAttributeName
                  ) && setAttribute(
                    node,
                    sourceBlockElementMarkAttributeName,
                    "1"
                  ), wrapTextNode(
                    depth + 1,
                    node,
                    rule,
                    displayNoneElements
                  );
                  continue;
                }
              if (isInlineElement(node, rule) && !isSingleInlineElement)
                continue;
              wrapTextNode(
                depth + 1,
                node,
                rule,
                displayNoneElements
              );
            }
          }
        } else if (node.nodeType === Node.TEXT_NODE) {
          let text = node.textContent;
          if (text && text.trim().length > 0) {
            let span = document.createElement(rule.targetWrapperTag);
            node.after(span), span.appendChild(node);
          }
        }
    }
  }
  function isPreElementByStyle(element) {
    let style = window.getComputedStyle(element);
    return style.whiteSpace.startsWith("pre") || style.whiteSpace === "break-spaces";
  }
  function formatPreHtml(preElement) {
    let newHtml = preElement.innerHTML.replace(/\n/g, "<br />");
    preElement.innerHTML = newHtml;
  }
  function addLineBreakToText(textNode, maxLength) {
    let text = textNode.textContent || "";
    if (text.trim().length <= maxLength)
      return;
    let boundaryIndex = [". ", "? ", "! ", "\u3002", "\uFF1F", "\uFF01"].reduce((acc, boundary) => {
      let index = text.lastIndexOf(boundary, maxLength);
      return index > acc ? index : acc;
    }, -1);
    if (boundaryIndex > 1) {
      let prevChar = text[boundaryIndex - 1] || "", prevPrevChar = text[boundaryIndex - 2] || "", nextChar = text[boundaryIndex + 1] || "";
      prevChar === "." || nextChar === "." || nextChar === ")" || prevPrevChar === "." && prevChar === "S" || prevPrevChar.toUpperCase() === "M" && (prevChar.toUpperCase() === "R" || prevChar.toUpperCase() === "S") ? boundaryIndex = -1 : isNaN(Number(prevChar)) || (boundaryIndex = -1);
    }
    if (boundaryIndex === -1)
      text.length > maxLength + 20 && addLineBreakToText(textNode, maxLength + 20);
    else {
      let theText = text.slice(boundaryIndex + 1);
      boundaryIndex++, theText.startsWith(" ") && boundaryIndex++;
      let theLastTextNode = textNode.splitText(boundaryIndex), br = document.createElement("br");
      theLastTextNode.parentNode?.insertBefore(br, theLastTextNode), boundaryIndex + 1 < text.length && addLineBreakToText(theLastTextNode, maxLength);
    }
  }

  // dom/normalize_pdf_container.ts
  function normalizeContainer2(containers, _rule) {
    let targetContainers = [];
    for (let container of containers) {
      let maxRight = 0, minLeft = 1e5, rightContainer = document.createElement("div"), treeFilter = (node) => {
        let element = node;
        if (isMatchTags(element.nodeName, ["DIV", "BR"]))
          return NodeFilter.FILTER_REJECT;
        if (element.classList.contains("markedContent"))
          return NodeFilter.FILTER_ACCEPT;
        if (isMatchTags(element.nodeName, ["SPAN"])) {
          let rect = element.getBoundingClientRect(), style = globalThis.getComputedStyle(element), right = rect.right, left = rect.left, top = style.top.slice(0, -2), fontsize = style.fontSize.slice(0, -2);
          return right > maxRight && (maxRight = right), left < minLeft && (minLeft = left), setAttribute(element, sourceElementLeft, `${left}`), setAttribute(element, sourceElementRight, `${right}`), setAttribute(element, sourceElementTop, top), setAttribute(element, sourceElementFontSize, fontsize), NodeFilter.FILTER_ACCEPT;
        } else
          return NodeFilter.FILTER_ACCEPT;
      }, walk = document.createTreeWalker(
        container,
        NodeFilter.SHOW_ELEMENT,
        treeFilter
      );
      for (; walk.nextNode(); )
        ;
      let realWidth = maxRight - minLeft;
      realWidth < 600 && (realWidth = 600), targetContainers.push(rightContainer), rightContainer.style.left = maxRight + "px", rightContainer.style.width = maxRight + "px", rightContainer.classList.add(translationPdfTargetContainerClass), container.childNodes.length > 0 && container.insertBefore(rightContainer, container.childNodes[0]);
    }
    return { targetContainers };
  }


  // rate_limiter_bus.ts
  var defaultLimiter = new RateLimiter({ limit: 7, interval: 1250 }), limiterMap = {
    tencent: new RateLimiter({ limit: 3, interval: 1350 }),
    baidu: new RateLimiter({ limit: 1, interval: 1550 }),
    strict: new RateLimiter({ limit: 1, interval: 1050 }),
    d: new RateLimiter({ limit: 1, interval: 1050 }),
    youdao: new RateLimiter({ limit: 5, interval: 1050 }),
    you: new RateLimiter({ limit: 5, interval: 1050 }),
    cai: new RateLimiter({ limit: 5, interval: 1050 }),
    google: new RateLimiter({ limit: 10, interval: 1050 }),
    deepl: new RateLimiter({ limit: 10, interval: 1050 }),
    transmart: new RateLimiter({ limit: 30, interval: 1050 }),
    papago: new RateLimiter({ limit: 3, interval: 1150 }),
    openai: new RateLimiter({ limit: 10, interval: 65e3 }),
    chatgpt: new RateLimiter({ limit: 1, interval: 1350 })
  };
  function getLimiter(key) {
    return limiterMap[key] || defaultLimiter;
  }
  async function getRateLimiterDelay(key) {
    if (getIsInIframe()) {
      let channel = getIframeMessageChannel();
      if (channel)
        try {
          return (await channel.ask("getRateLimitDelay", {
            key
          })).value;
        } catch (e) {
          return log_default.error("can not comunicate with root frame, use strict limiter", e), getLimiter("strict").getDelay();
        }
      else
        return getLimiter("strict").getDelay();
    } else
      return getLimiter(key).getDelay();
  }
  async function setRateLimiter(key, options2) {
    if (!getIsInIframe()) {
      let limiter = getLimiter(key);
      options2 && limiter.setOptions(options2);
    }
  }
  async function onRateLimiterDelayRequest(body) {
    let key = body.key;
    return { value: getLimiter(key).getDelay() };
  }
;



  // utils/sha256.ts
  var sha256Fn = sha256_default.sha256;
  function sha256(message) {
    return Promise.resolve(sha256Fn(message));
  }
  function hex(hashBuffer) {
    return Array.from(new Uint8Array(hashBuffer)).map((b5) => b5.toString(16).padStart(2, "0")).join(
      ""
    );
  }
  function hmacSha256(str, keyString) {
    let hash = sha256Fn.hmac.create(keyString);
    return hash.update(str), Promise.resolve(hash.array());
  }
  async function hmacSha256ByString(str, keyString) {
    let sig = await hmacSha256(str, keyString);
    return hex(sig);
  }
  async function hmacSha256ByArrayBuffer(str, keyString) {
    let buffer = decodeHex(keyString), sig = await hmacSha256(str, buffer);
    return hex(sig);
  }
  function decodeHex(string) {
    let bytes = [];
    return string.replace(/../g, function(pair) {
      return bytes.push(parseInt(pair, 16)), "";
    }), new Uint8Array(bytes).buffer;
  }



  // throttle_request_bus.ts
  var throttleRequestMap = /* @__PURE__ */ new Map();
  async function rawThrottleRequest(options2) {
    let key = options2.url;
    if (options2.method && (key += options2.method), options2.body && (key += md5(options2.body)), throttleRequestMap.has(key))
      return throttleRequestMap.get(key);
    let promise = request2(options2);
    throttleRequestMap.set(key, promise);
    try {
      return await promise;
    } catch (e) {
      throw e;
    } finally {
      setTimeout(() => {
        throttleRequestMap.delete(key);
      }, 3e4);
    }
  }
  async function onThrottleRequest(options2) {
    return rawThrottleRequest(options2);
  }
  async function throttleRequest(options2) {
    if (getIsInIframe()) {
      let channel = getIframeMessageChannel();
      if (channel)
        try {
          return await channel.ask("throttleRequest", options2);
        } catch (e) {
          throw log_default.error("can not comunicate with root frame, use strict limiter", e), e;
        }
      else
        return rawThrottleRequest(options2);
    } else
      return rawThrottleRequest(options2);
  }


  // services/chatgpt.ts
  var rawLangMap7 = [
    ["auto", "auto"],
    ["zh-CN", "zh-Hans"],
    ["zh-TW", "zh-Hant"],
    ["en", "en"],
    ["yue", "\u7CA4\u8BED"],
    ["wyw", "\u53E4\u6587"],
    ["en", "en"],
    ["ja", "ja"],
    ["ko", "ko"],
    ["fr", "fr"],
    ["de", "de"],
    ["es", "es"],
    ["it", "it"],
    ["ru", "ru"],
    ["pt", "pt"],
    ["nl", "nl"],
    ["pl", "pl"],
    ["ar", "ar"],
    ["af", "af"],
    ["am", "am"],
    ["az", "az"],
    ["be", "be"],
    ["bg", "bg"],
    ["bn", "bn"],
    ["bs", "bs"],
    ["ca", "ca"],
    ["ceb", "ceb"],
    ["co", "co"],
    ["cs", "cs"],
    ["cy", "cy"],
    ["da", "da"],
    ["el", "el"],
    ["eo", "eo"],
    ["et", "et"],
    ["eu", "eu"],
    ["fa", "fa"],
    ["fi", "fi"],
    ["fj", "fj"],
    ["fy", "fy"],
    ["ga", "ga"],
    ["gd", "gd"],
    ["gl", "gl"],
    ["gu", "gu"],
    ["ha", "ha"],
    ["haw", "haw"],
    ["he", "he"],
    ["hi", "hi"],
    ["hmn", "hmn"],
    ["hr", "hr"],
    ["ht", "ht"],
    ["hu", "hu"],
    ["hy", "hy"],
    ["id", "id"],
    ["ig", "ig"],
    ["is", "is"],
    ["jw", "jw"],
    ["ka", "ka"],
    ["kk", "kk"],
    ["km", "km"],
    ["kn", "kn"],
    ["ku", "ku"],
    ["ky", "ky"],
    ["la", "lo"],
    ["lb", "lb"],
    ["lo", "lo"],
    ["lt", "lt"],
    ["lv", "lv"],
    ["mg", "mg"],
    ["mi", "mi"],
    ["mk", "mk"],
    ["ml", "ml"],
    ["mn", "mn"],
    ["mr", "mr"],
    ["ms", "ms"],
    ["mt", "mt"],
    ["my", "my"],
    ["ne", "ne"],
    ["no", "no"],
    ["ny", "ny"],
    ["pa", "pa"],
    ["ps", "ps"],
    ["ro", "ro"],
    ["si", "si"],
    ["sk", "sk"],
    ["sl", "sl"],
    ["sm", "sm"],
    ["sn", "sn"],
    ["so", "so"],
    ["sq", "sq"],
    ["sr", "sr"],
    ["sr-Cyrl", "sr"],
    ["sr-Latn", "sr"],
    ["st", "st"],
    ["su", "su"],
    ["sv", "sv"],
    ["sw", "sw"],
    ["ta", "ta"],
    ["te", "te"],
    ["tg", "tg"],
    ["th", "th"],
    ["tr", "tr"],
    ["ug", "ug"],
    ["uk", "uk"],
    ["ur", "ur"],
    ["uz", "uz"],
    ["vi", "vi"],
    ["xh", "xh"],
    ["yi", "yi"],
    ["yo", "yo"],
    ["zu", "zu"]
  ], langMap13 = new Map(rawLangMap7), KEY_ACCESS_TOKEN = "accessToken";
  async function getChatGptAccessToken() {
    let cachedValue = await getExpired(KEY_ACCESS_TOKEN);
    if (cachedValue)
      return cachedValue;
    let data = await request2({
      url: "https://chat.openai.com/api/auth/session",
      method: "get",
      responseType: "json"
    });
    if (!data.accessToken)
      throw new Error("UNAUTHORIZED");
    return await setExpired(KEY_ACCESS_TOKEN, data.accessToken, 10 * 60 * 1e3), data.accessToken;
  }
  var _taskQueue, _TranslationManager = class {
    constructor() {
      __privateAdd(this, _taskQueue, Promise.resolve());
      return _TranslationManager.instance || (_TranslationManager.instance = this), this;
    }
    enqueue(task) {
      return __privateSet(this, _taskQueue, __privateGet(this, _taskQueue).then(() => task())), __privateGet(this, _taskQueue);
    }
  }, TranslationManager = _TranslationManager;
  _taskQueue = new WeakMap();
  var translationManager = new TranslationManager();
  Object.freeze(translationManager);
  var ChatGPT = class extends Translation {
    // model = "gpt-3.5-turbo";
    constructor(serviceConfig, generalConfig, options2) {
      super(serviceConfig, generalConfig, options2);
      this.accessToken = "";
      this.customChatGptWebApiUrl = "https://chat.openai.com";
      this.customChatGptWebApiPath = "/backend-api/conversation";
      this.maxTextGroupLength = 1;
      this.maxTextLength = 1200;
      this.isStream = !1;
      this.isSupportList = !1;
      this.prompt = `You are a translation engine, you can only translate text and cannot interpret it, and do not explain.Translate the text below to {{to}}:

{{text}}`;
    }
    // deno-lint-ignore ban-types
    throttleDebounce(func, throttleDelay, debounceDelay) {
      let lastCall = 0, debounceTimeout;
      return (...args) => {
        let now = Date.now(), context = this, executeFunc = () => {
          lastCall = now, func.apply(context, args);
        };
        now - lastCall >= throttleDelay ? (clearTimeout(debounceTimeout), executeFunc()) : (clearTimeout(debounceTimeout), debounceTimeout = setTimeout(() => {
          executeFunc();
        }, debounceDelay));
      };
    }
    async deleteConversation(conversationId) {
      if (conversationId) {
        let resp = await request2({
          url: `${this.customChatGptWebApiUrl}${this.customChatGptWebApiPath}/${conversationId}`,
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.accessToken}`
          },
          body: JSON.stringify({ is_visible: !1 })
        });
        return log_default.debug("delete conversation res:", resp), resp;
      }
    }
    async translate(payload) {
      return await translationManager.enqueue(async () => {
        let { text, from, to } = payload;
        if (text.length === 0)
          return Promise.resolve({
            from,
            to,
            text: ""
          });
        let remoteFrom = langMap13.get(from) || from, remoteTo = langMap13.get(to) || to;
        if (this.accessToken = await getChatGptAccessToken(), !this.accessToken || this.accessToken === "")
          throw new Error("token error");
        let selectedModel = "text-davinci-002-render-sha";
        if (!selectedModel)
          throw new Error("No available model");
        let prompt = this.prompt.replace(/{{to}}/g, remoteTo).replace(
          /{{text}}/g,
          text
        ).replace(/{{from}}/g, remoteFrom), data = await request2({
          url: `${this.customChatGptWebApiUrl}${this.customChatGptWebApiPath}`,
          method: "POST",
          responseType: "stream",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.accessToken}`
          },
          body: JSON.stringify({
            action: "next",
            // conversation_id: session!.conversationId,
            messages: [
              {
                id: uuidv4(),
                role: "user",
                content: {
                  content_type: "text",
                  parts: [prompt]
                }
              }
            ],
            model: selectedModel,
            parent_message_id: uuidv4()
          })
        });
        return log_default.debug("get chatgpt res:", data), await this.deleteConversation(data?.conversation_id), Promise.resolve({
          from,
          to,
          text: data?.message?.content?.parts?.[0]
        });
      });
    }
    async translateStream(payload, callback) {
      let { text, from, to } = payload;
      if (text.length === 0) {
        callback(null, {
          from,
          to,
          text: ""
        });
        return;
      }
      let throttleDebounceCallback = this.throttleDebounce(
        // deno-lint-ignore no-explicit-any
        function(x4) {
          let { from: from2, to: to2, text: text2 } = x4;
          callback(null, {
            from: from2,
            to: to2,
            text: text2
          });
        },
        300,
        // 节流延迟
        200
        // 防抖延迟
      );
      await translationManager.enqueue(async () => {
        let portName = "chatgpt" + uuidv4(), port = browserAPI.runtime.connect({ name: portName }), conversionId, data;
        port.onMessage.addListener((message) => {
          if (!(!message || message === "")) {
            if (message === "[DONE]") {
              port.disconnect(), this.deleteConversation(conversionId);
              return;
            }
            try {
              data = JSON.parse(message);
            } catch (error) {
              log_default.debug("chatgpt json error", error, message);
              return;
            }
            conversionId = data?.conversation_id, data?.message?.author?.role === "assistant" && throttleDebounceCallback({
              from,
              to,
              text: data?.message?.content?.parts?.[0]
            });
          }
        });
        let remoteFrom = langMap13.get(from) || from, remoteTo = langMap13.get(to) || to;
        if (this.accessToken = await getChatGptAccessToken(), !this.accessToken || this.accessToken === "")
          throw new Error("token error");
        let selectedModel = "text-davinci-002-render-sha";
        if (!selectedModel)
          throw new Error("No available model");
        let prompt = this.prompt.replace(/{{to}}/g, remoteTo).replace(
          /{{text}}/g,
          text
        ).replace(/{{from}}/g, remoteFrom);
        request2({
          url: `${this.customChatGptWebApiUrl}${this.customChatGptWebApiPath}`,
          method: "POST",
          responseType: "realStream",
          extra: { portName },
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.accessToken}`
          },
          body: JSON.stringify({
            action: "next",
            // conversation_id: session!.conversationId,
            messages: [
              {
                id: uuidv4(),
                role: "user",
                content: {
                  content_type: "text",
                  parts: [prompt]
                }
              }
            ],
            model: selectedModel,
            parent_message_id: uuidv4()
          })
        }).catch((e) => {
          log_default.debug("chatgpt error", e), port.disconnect(), this.deleteConversation(conversionId), callback(e, {
            from,
            to,
            text: ""
          });
        });
      });
    }
  };



  // services/bing/mod.ts
  var Bing = class extends Translation {
    constructor() {
      super(...arguments);
      this.isSupportList = !1;
      this.maxTextLength = 800;
    }
    async translate(payload) {
      let { text, from, to } = payload;
      return text ? await translate2(text, from, to) : { ...payload };
    }
  };



  // dom/translate_page.ts
  var pageStatus = "Original", currentParagraphIds = [], waitToTranslateParagraphIds = /* @__PURE__ */ new Set(), allNewDynamicElements = [], allIntersectionObserver = [], allResizebleObserver = [], currentNewDynamicElements = [], oldUrl = getRealUrl().split("#")[0], currentTranslatedTextLength = 0, globalContext, initialTranslationTheme, isSetupForOnce = !1, throttleMap = {
    300: se(
      translateCurrentQueue,
      300
    ),
    1e3: se(
      translateCurrentQueue,
      1e3
    ),
    3e3: se(
      translateCurrentQueue,
      3e3
    )
  }, debounceMap = {
    300: debounce(
      translateNewDynamicNodes,
      300
    ),
    1e3: debounce(
      translateNewDynamicNodes,
      1e3
    ),
    3e3: debounce(
      translateNewDynamicNodes,
      3e3
    )
  }, env3 = getEnv(), isProd2 = env3.PROD === "1", translationServiceInitmap = {}, titleMutationObserver, mutationObserverMap = /* @__PURE__ */ new Map(), mainMutaionObserver, originalPageTitle = "";
  async function toggleTranslatePage() {
    if (getPageStatus() === "Original") {
      let ctx = await getGlobalContext(getRealUrl(), {});
      initialTranslationTheme ? ctx = await getGlobalContext(getRealUrl(), {
        translationTheme: initialTranslationTheme
      }) : initialTranslationTheme = ctx.state.translationTheme, await translatePage(globalContext);
    } else
      (getPageStatus() === "Translated" || getPageStatus() === "Error") && restorePage();
  }
  async function toggleTranslationMask() {
    if (getPageStatus() === "Original")
      globalContext = await getGlobalContext(getRealUrl(), {}), initialTranslationTheme || (initialTranslationTheme = globalContext.state.translationTheme), globalContext = await getGlobalContext(getRealUrl(), {
        translationTheme: "mask"
      }), await translatePage(globalContext);
    else if (getPageStatus() === "Translated") {
      let allFrames = [
        globalContext.mainFrame,
        ...mutationObserverMap.keys()
      ], currentTranslationTheme = globalContext?.state.translationTheme;
      for (let frame of allFrames) {
        let currentRootTheme = getAttribute(
          frame,
          translationFrameRootThemeAttributeNameForJs,
          !0
        );
        currentTranslationTheme === "mask" ? currentRootTheme !== "none" ? setAttribute(
          frame,
          translationFrameRootThemeAttributeNameForJs,
          "none",
          !0
        ) : setAttribute(
          frame,
          translationFrameRootThemeAttributeNameForJs,
          "mask",
          !0
        ) : currentRootTheme !== "mask" ? setAttribute(
          frame,
          translationFrameRootThemeAttributeNameForJs,
          "mask",
          !0
        ) : setAttribute(
          frame,
          translationFrameRootThemeAttributeNameForJs,
          "none",
          !0
        );
      }
    }
  }
  function restorePage() {
    if (document.dispatchEvent(
      new CustomEvent(documentMessageTypeIdentifierForTellThirdParty, {
        detail: JSON.stringify({
          type: "restorePage",
          payload: {}
        })
      })
    ), clean(), !globalContext || !globalContext.mainFrame)
      return;
    let allFrames = [
      globalContext.mainFrame,
      ...mutationObserverMap.keys()
    ];
    for (let rootFrame of allFrames)
      disableMutatinObserver(rootFrame), rootFrame.querySelectorAll(
        "." + translationTargetElementWrapperClass
      ).forEach((element) => {
        element.remove();
      }), rootFrame.querySelectorAll(
        "." + translationPdfTargetContainerClass
      ).forEach((element) => {
        element.remove();
      }), rootFrame.querySelectorAll(
        "[" + sourceElementEffectAttributeName + "]"
      ).forEach((element) => {
        if (isProd2) {
          delete element[elementMarkRootKey];
          let keys = Object.keys(element.dataset).filter((key) => key.startsWith(brandIdForJs));
          for (let key of keys)
            delete element.dataset[key];
        } else {
          let keys = Object.keys(element.dataset).filter((key) => key.startsWith(brandIdForJs));
          for (let key of keys)
            delete element.dataset[key];
        }
        element.removeAttribute(sourceElementEffectAttributeName);
      });
    disableTitleMutationObserver(), setPageTranslatedStatus("Translating"), originalPageTitle && (document.title = originalPageTitle), setPageTranslatedStatus("Original");
  }
  function onElementVisible(paragraph, callback) {
    let isCalled = !1, firstElement = getFirstHTMLElement(paragraph.elements), lastElement = getLastHTMLElement(paragraph.elements);
    waitToTranslateParagraphIds.add(paragraph.id);
    let observers = [];
    if (firstElement) {
      let observe = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          entry.intersectionRatio > 0 && (observer.disconnect(), isCalled || (isCalled = !0, callback(paragraph)));
        });
      });
      allIntersectionObserver.push(observe), observers.push(observe), observe.observe(firstElement);
    }
    if (lastElement && lastElement !== firstElement) {
      let observe = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          entry.intersectionRatio > 0 && (observer.disconnect(), isCalled || (isCalled = !0, callback(paragraph)));
        });
      });
      allIntersectionObserver.push(observe), observers.push(observe), observe.observe(lastElement);
    }
    let paragraphEntiry = getParagraph(paragraph.id);
    paragraphEntiry && (paragraphEntiry.observers = observers, setParagraph(paragraph.id, paragraphEntiry));
  }
  function onHiddenElementVisible(element, callback) {
    if (element) {
      let resizewatcher = new ResizeObserver((entries, observer) => {
        for (let entry of entries)
          entry.contentRect.width > 10 && (observer.disconnect(), callback(entry.target));
      });
      resizewatcher.observe(element), allResizebleObserver.push(resizewatcher);
    }
  }
  async function translateNewDynamicNodes(ctx) {
    let currentNewDynamicNodes = [...currentNewDynamicElements];
    currentNewDynamicElements = [];
    let frameMap = /* @__PURE__ */ new Map();
    currentNewDynamicNodes.forEach((node) => {
      frameMap.has(node.rootFrame) || frameMap.set(node.rootFrame, []), frameMap.get(node.rootFrame)?.push(node.element);
    });
    for (let [rootFrame, elements] of frameMap)
      try {
        let allContainers = [];
        for (let element of elements) {
          let rawContainers = getContainers(
            element,
            ctx
          );
          if (rawContainers.length === 0)
            continue;
          let containers = rawContainers;
          allContainers.push(...containers);
        }
        await translateContainers(allContainers, rootFrame, ctx, !0);
      } catch (e) {
        log_default.error(`translateNewDynamicNodes error: ${e.message}`);
      }
  }
  function translationParagraph(visibleParagraph, ctx) {
    waitToTranslateParagraphIds.delete(visibleParagraph.id);
    let pairKeys = Object.keys(ctx.rule.pairs), paragraphWithState = getParagraph(visibleParagraph.id);
    paragraphWithState && (paragraphWithState.observers && paragraphWithState.observers.length > 0 && paragraphWithState.observers.forEach((observer) => {
      observer.disconnect();
    }), paragraphWithState.observers = [], paragraphWithState.state = "Translating", setParagraph(visibleParagraph.id, paragraphWithState));
    let id = visibleParagraph.id;
    currentTranslatedTextLength += visibleParagraph.text.length;
    let realElements = getHTMLElements(visibleParagraph.elements);
    if (pairKeys.length > 0) {
      let targetTranslationContainer = visibleParagraph.targetContainer, targetTranslationWrapper = document.createElement(
        ctx.rule.targetWrapperTag
      );
      targetTranslationContainer.appendChild(targetTranslationWrapper), targetTranslationWrapper.classList.add(
        "notranslate",
        translationTargetElementWrapperClass
      ), targetTranslationWrapper.id = `${translationTargetElementWrapperClass}-${id}`, targetTranslationWrapper.setAttribute("lang", ctx.targetLanguage);
      let loadingHtml = getLoadingHTML(
        ctx.config.loadingTheme,
        ctx.rule
      );
      targetTranslationWrapper.innerHTML = loadingHtml;
    } else if (visibleParagraph.isPdf) {
      let firstElement = getFirstHTMLElement(visibleParagraph.elements), elementStyle = globalThis.getComputedStyle(firstElement), top = elementStyle.top, fontSize = elementStyle.fontSize, fontSizeNumber = parseFloat(fontSize.slice(0, -2));
      isNaN(fontSizeNumber) || fontSizeNumber > 20 && (fontSize = "20px");
      let targetContainer = visibleParagraph.targetContainer, paragraphTarget = document.createElement(ctx.rule.targetWrapperTag);
      realElements.length === 1 && (paragraphTarget.style.fontSize = fontSize), paragraphTarget.id = `${translationTargetElementWrapperClass}-${id}`, paragraphTarget.style.top = top;
      let firstElementLeft = getAttribute(firstElement, sourceElementLeft), minLeft = realElements.reduce((prev, current) => {
        let left = getAttribute(current, sourceElementLeft);
        return left && left < prev ? left : prev;
      }, 1e3), width = realElements.reduce((prev, current) => {
        let right = getAttribute(current, sourceElementRight);
        return right && right > prev ? right : prev;
      }, 0) - minLeft;
      width < 30, width > 600 && (width = 600), firstElementLeft < 200 && (firstElementLeft = 10), firstElementLeft && firstElementLeft < 0 && (firstElementLeft = 0), paragraphTarget.style.left = `${minLeft || 10}px`, minLeft < 400 ? paragraphTarget.style.width = width + "px" : paragraphTarget.style.width = `calc(100% - ${minLeft}px)`, paragraphTarget.classList.add(
        "notranslate",
        `${translationTargetElementWrapperClass}`
      ), targetContainer.appendChild(paragraphTarget);
    } else {
      let lastElement = getLastHTMLElement(visibleParagraph.elements), position = "afterend";
      visibleParagraph.elements.length > 0 && lastElement && (realElements.length === 1 ? position = "beforeend" : isInlineElement(
        visibleParagraph.elements[0],
        ctx.rule
      ) || (position = "beforeend")), ctx.rule.insertPosition && (position = ctx.rule.insertPosition);
      let { rule } = ctx, targetTranslationWrapper = document.createElement(
        rule.targetWrapperTag
      );
      targetTranslationWrapper.classList.add(
        "notranslate",
        translationTargetElementWrapperClass
      ), targetTranslationWrapper.id = `${translationTargetElementWrapperClass}-${id}`, targetTranslationWrapper.setAttribute("lang", ctx.targetLanguage);
      let loadingHtml = getLoadingHTML(
        ctx.config.loadingTheme,
        ctx.rule
      );
      if (targetTranslationWrapper.innerHTML = loadingHtml, position === "beforeend") {
        let innerElement = getTheLastTextNodeParentElement(lastElement);
        innerElement ? innerElement.appendChild(targetTranslationWrapper) : lastElement.appendChild(targetTranslationWrapper);
      } else if (position === "afterend")
        lastElement.insertAdjacentElement(position, targetTranslationWrapper);
      else
        throw new Error("not support position");
    }
    currentParagraphIds.push(id), throttleMap[ctx.state.translationDebounce](ctx);
  }
  function addParagraphToQueue(paragraph, ctx) {
    ctx.state.translationStartMode === "dynamic" && !ctx.rule.isEbookBuilder && !ctx.rule.isSubtitleBuilder && currentTranslatedTextLength > ctx.state.immediateTranslationTextCount ? onElementVisible(paragraph, (visibleParagraph) => {
      ctx.rule.visibleDelay > 0 ? setTimeout(() => {
        translationParagraph(visibleParagraph, ctx);
      }, ctx.rule.visibleDelay) : translationParagraph(visibleParagraph, ctx);
    }) : translationParagraph(paragraph, ctx);
  }
  async function translatePage(ctx) {
    if (pageStatus === "Translating")
      return;
    let isInIframe = getIsInIframe();
    if (setPageTranslatedStatus("Translating"), ctx || (ctx = await getGlobalContext(getRealUrl(), {})), report("translage_page_daily", [
      {
        name: "translage_page_daily"
      }
    ], ctx), report("translate_page", [
      {
        name: "translate_page"
      }
    ], {
      ...ctx,
      sourceLanguage: getCurrentPageLanguage()
    }), ctx.state.isNeedClean ? restorePage() : globalContext.state.isNeedClean = !0, document.dispatchEvent(
      new CustomEvent(documentMessageTypeIdentifierForTellThirdParty, {
        detail: JSON.stringify({
          type: "translateStart",
          payload: {}
        })
      })
    ), document.dispatchEvent(
      new CustomEvent(documentMessageTypeIdentifierForTellThirdParty, {
        detail: JSON.stringify({
          type: "targetLanguage",
          payload: {
            targetLanguage: ctx.targetLanguage
          }
        })
      })
    ), ctx.rule.normalizeBody && document.querySelector(ctx.rule.normalizeBody)) {
      let boydHtml = document.body.innerHTML;
      document.body.innerHTML = "", document.body.innerHTML = boydHtml;
    }
    if (await setupOnceForInitPage(globalContext), document.querySelectorAll("iframe").forEach((frame) => {
      isInlineIframe(frame) && injectCssToFrame(frame.contentDocument, ctx);
    }), !ctx.state.isAutoTranslate && ctx.config.tempTranslateDomainMinutes > 0) {
      let now = Date.now(), currentDomain = new URL(ctx.url).hostname, currentTempTranslationDomains = ctx.localConfig.tempTranslationUrlMatches || [], index = currentTempTranslationDomains.findIndex(
        (item) => item.match === currentDomain && item.expiredAt > now
      ), isChanged = !1;
      index > -1 || (currentTempTranslationDomains.push({
        match: currentDomain,
        expiredAt: now + ctx.config.tempTranslateDomainMinutes * 60 * 1e3
      }), isChanged = !0), isChanged && await setLocalConfig({
        ...ctx.localConfig,
        tempTranslationUrlMatches: [
          ...currentTempTranslationDomains
        ]
      });
    }
    ctx.state.isAutoTranslate = !0;
    let currentScrollOffset = globalThis.scrollY, currentWindowHeight = globalThis.innerHeight;
    if (currentScrollOffset >= currentWindowHeight && (ctx.state.immediateTranslationTextCount = 0), translationServiceInitmap[ctx.translationService] || (translationServiceInitmap[ctx.translationService] = !0, isInIframe || initTranslationEngine(ctx).catch((e) => {
      log_default.warn("init translation engine error", e);
    })), log_default.debug("ctx", ctx), Object.keys(ctx.rule.pairs).length > 0) {
      let paragraphs = getParagraphs2(ctx.mainFrame, ctx);
      document.dispatchEvent(
        new CustomEvent(documentMessageTypeIdentifierForTellThirdParty, {
          detail: JSON.stringify({
            type: "totalParagraphsCount",
            payload: {
              totalParagraphsCount: paragraphs.length
            }
          })
        })
      );
      for (let paragraph of paragraphs)
        addParagraphToQueue(paragraph, ctx);
      return;
    }
    addToUnmountQueue(() => {
      currentTranslatedTextLength = 0, cleanParagraphs(), allIntersectionObserver.forEach((observer) => {
        observer.disconnect();
      }), allResizebleObserver.forEach((observer) => {
        observer.disconnect();
      }), allIntersectionObserver = [], waitToTranslateParagraphIds.clear();
    }), setPageTranslatedStatus("Translating");
    try {
      let allFrames = [ctx.mainFrame];
      document.querySelectorAll("iframe").forEach((frame) => {
        isInlineIframe(frame) && allFrames.push(frame.contentDocument.body);
      }), ctx.rule.shadowRootSelectors && ctx.rule.shadowRootSelectors.length > 0 && getElementsBySelectors(
        ctx.mainFrame,
        ctx.rule.shadowRootSelectors
      ).forEach((host) => {
        host.shadowRoot && host.shadowRoot.mode === "open" && allFrames.push(host.shadowRoot);
      });
      let containersCount = 0;
      setPageTranslatedStatus("Translating"), log_default.debug("allFrames", allFrames);
      for (let rootFrame of allFrames) {
        let containerCount = await translateFrame(rootFrame, ctx);
        containersCount += containerCount;
      }
      containersCount === 0 && setPageTranslatedStatus("Translated"), ctx.rule.isTranslateTitle && !isInIframe && (translateTitle(ctx).catch((e) => {
        log_default.error(
          "translateTitle error:",
          e.name,
          e.message,
          e.details || ""
        );
      }), enableTitleMutationObserver(ctx));
      let paragraphEntities2 = getParagraphEntities();
      document.dispatchEvent(
        new CustomEvent(documentMessageTypeIdentifierForTellThirdParty, {
          detail: JSON.stringify({
            type: "totalParagraphsCount",
            payload: {
              totalParagraphsCount: paragraphEntities2.size
            }
          })
        })
      );
    } catch (e) {
      setPageTranslatedStatus("Error"), log_default.error(e);
    }
  }
  async function translateFrame(rootFrame, ctx) {
    markContainers(rootFrame, ctx.rule, rootFrame, !1);
    let containers = getContainers(rootFrame, ctx);
    log_default.debug("detect containers", containers);
    let { rule } = ctx;
    containers.length > 0 && await translateContainers(containers, rootFrame, ctx, !1);
    let observer = enableMutatinObserver(rootFrame, rule, ctx);
    return rootFrame === ctx.mainFrame ? mainMutaionObserver = observer : mutationObserverMap.set(rootFrame, observer), containers.length;
  }
  async function getGlobalContext(url, state) {
    let config = await getConfig2(), stateKeys = Object.keys(state);
    if (globalContext) {
      let options2 = {
        url,
        config,
        state: { ...globalContext.state, ...state }
      };
      globalContext = await getContext(options2);
    } else {
      let realState = state;
      stateKeys.length === 0 && (realState = void 0), globalContext = await getContext({
        url,
        config,
        state: realState
      });
    }
    return globalContext;
  }
  async function toggleTranslateTheMainPage() {
    getPageStatus() === "Original" ? await translateTheMainPage() : (getPageStatus() === "Translated" || getPageStatus() === "Error") && (globalContext = await getGlobalContext(getRealUrl(), {}), globalContext.state.translationArea !== "main" ? await translateTheMainPage() : restorePage());
  }
  async function translateTheMainPage() {
    globalContext = await getGlobalContext(getRealUrl(), {
      translationArea: "main"
    }), await translatePage(globalContext);
  }
  async function translateTheWholePage() {
    globalContext = await getGlobalContext(getRealUrl(), {
      translationArea: "body"
    }), await translatePage(globalContext);
  }
  async function toggleTranslateTheWholePage() {
    getPageStatus() === "Original" ? await translateTheWholePage() : (getPageStatus() === "Translated" || getPageStatus() === "Error") && (globalContext = await getGlobalContext(getRealUrl(), {}), globalContext.state.translationArea !== "body" ? (globalContext.state.translationArea = "body", globalContext = await getGlobalContext(getRealUrl(), {}), await translatePage(globalContext)) : restorePage());
  }
  async function translateToThePageEndImmediately() {
    globalContext = await getGlobalContext(getRealUrl(), {
      translationStartMode: "immediate"
    }), await translatePage(globalContext), await translateNewDynamicNodes(globalContext);
  }
  async function translateTitle(ctx) {
    let pageTitle = document.title;
    if (!pageTitle || pageTitle.includes(titleDelimiters))
      return;
    originalPageTitle !== pageTitle && (originalPageTitle = pageTitle);
    let currentLang = "auto";
    if (ctx.state.isDetectParagraphLanguage || (currentLang = getCurrentPageLanguageByClient()), currentLang === "auto") {
      let detectedLang = await detectLanguage({
        text: pageTitle,
        minLength: 10
      });
      if (isSameTargetLanguage(detectedLang, ctx.targetLanguage))
        return;
    }
    try {
      let result = await translateSingleSentence({
        id: 0,
        url: ctx.url,
        text: pageTitle,
        from: currentLang,
        to: ctx.targetLanguage,
        fromByClient: currentLang
      }, ctx);
      result && result.text && (document.title = originalPageTitle + titleDelimiters + result.text);
    } catch (e) {
      throw e;
    }
  }
  function setLoadingToParagraph(rootFrame, id, ctx) {
    let element = rootFrame.querySelector(
      "#" + translationTargetElementWrapperClass + "-" + id
    );
    element && (element.innerHTML = getLoadingHTML(
      ctx.config.loadingTheme,
      ctx.rule
    ));
  }
  function getLoadingHTML(theme, rule) {
    return `&#160;<${rule.targetWrapperTag} class="${brandId}-loading-${theme} notranslate"></${rule.targetWrapperTag}>`;
  }
  async function translateContainers(containers, rootFrame, ctx, isDynamic) {
    let { rule } = ctx;
    for (let container of containers)
      markContainers(container, rule, rootFrame, isDynamic);
    let targetContainers = [];
    if (ctx.rule.isPdf)
      containers.length > 0 && (setPageTranslatedStatus("Translating"), targetContainers = normalizeContainer2(
        containers,
        rule
      ).targetContainers);
    else {
      setPageTranslatedStatus("Translating");
      let normalizeResult = normalizeContainer(
        containers,
        rule
      ), { hiddenElements } = normalizeResult;
      for (let element of hiddenElements)
        onHiddenElementVisible(element, () => {
          removeAttribute(element, sourceElementExcludeAttributeName, !0), translateContainers([element], rootFrame, ctx, !0);
        });
      setPageTranslatedStatus("Translating");
    }
    let paragraphs = [];
    if (ctx.rule.isPdf ? paragraphs = await getParagraphs3(
      rootFrame,
      containers,
      ctx,
      targetContainers
    ) : (containers = containers.filter((container) => !isExcludeElement(container, rule, !1)), paragraphs = await getParagraphs(
      rootFrame,
      containers,
      ctx
    )), setPageTranslatedStatus("Translating"), paragraphs.length === 0) {
      setPageTranslatedStatus("Translated");
      return;
    }
    log_default.debug("detect paragraphs", paragraphs);
    for (let paragraph of paragraphs)
      addParagraphToQueue(paragraph, ctx);
    setPageTranslatedStatus("Translated");
  }
  async function retryFailedParagraphs() {
    document.dispatchEvent(
      new CustomEvent(documentMessageTypeIdentifierForTellThirdParty, {
        detail: JSON.stringify({
          type: "retryFailedParagraphsStart",
          payload: {}
        })
      })
    );
    let allParagraphEntities = getParagraphEntities(), ids = [];
    for (let [id, paragraph] of allParagraphEntities)
      paragraph.state === "Error" && ids.push(id);
    let currentParagraphLang = "auto", ctx = await getGlobalContext(getRealUrl(), {});
    ctx.state.isDetectParagraphLanguage || (currentParagraphLang = getCurrentPageLanguage());
    let payload = {
      sentences: ids.filter((id) => getParagraph(id)).map((id) => {
        let paragraph = getParagraph(id), from = paragraph.languageByLocal;
        return from === "auto" && (from = currentParagraphLang), setLoadingToParagraph(paragraph.rootFrame, id, ctx), {
          id: paragraph.id,
          url: ctx.encryptedUrl,
          text: paragraph.text,
          from,
          fromByClient: paragraph.languageByClient,
          to: ctx.targetLanguage
        };
      })
    };
    if (payload.sentences.length > 0) {
      setPageTranslatedStatus("Translating");
      try {
        await translateMultipleSentences(
          payload,
          ctx,
          (err, translatedSentence, sentenceRequest) => {
            onParagraphTranslated(err, translatedSentence, sentenceRequest, ctx);
          }
        );
      } catch (e) {
        setPageTranslatedStatus("Error"), log_default.error(
          "translateCurrentQueue error",
          e.name,
          e.message,
          e.details || " "
        );
        return;
      }
    }
  }
  function onParagraphTranslated(err, translatedSentence, sentenceRequest, ctx) {
    let translatedOk = !1, paragraphWithState = getParagraph(sentenceRequest.id);
    if (paragraphWithState && (err || !translatedSentence)) {
      err || (log_default.error("translate error", sentenceRequest, err, translatedSentence), err = new Error("no response from server"));
      let { rule } = ctx, wrapperId = sentenceRequest.id, wrapper = paragraphWithState.rootFrame.querySelector(
        `#${translationTargetElementWrapperClass}-${wrapperId}`
      ), errorMessage = err.message.replaceAll(`
`, "");
      errorMessage = errorMessage.replaceAll('"', "&quot;"), paragraphWithState && (paragraphWithState.state = "Error", setParagraph(paragraphWithState.id, paragraphWithState));
      let errorHtml = `<${rule.targetWrapperTag} class="${brandId}-error notranslate"> <${rule.targetWrapperTag} class="immersive-translate-tooltip" data-immersive-translate-tooltip-text="${errorMessage}"><button class="${brandId}-clickable-button notranslate" title="${errorMessage}">\u2757</button></${rule.targetWrapperTag}> <button class="${brandId}-clickable-button notranslate" data-${brandId}-paragraph-id="${wrapperId}" data-${brandId}-action="retry">\u{1F504}</button></${rule.targetWrapperTag}>`;
      wrapper && (wrapper.innerHTML = errorHtml);
    } else {
      let paragraph = getParagraph(sentenceRequest.id);
      if (paragraph) {
        paragraph.state = "Translated", setParagraph(paragraph.id, paragraph);
        let wrapperId = translatedSentence.id, wrapper = paragraph.rootFrame.querySelector(
          `#${translationTargetElementWrapperClass}-${wrapperId}`
        );
        if (wrapper) {
          if (paragraph.text === translatedSentence.text)
            wrapper.innerHTML = "";
          else {
            let targetItem = paragraphToHtml(
              paragraph,
              translatedSentence,
              ctx
            );
            wrapper.innerHTML = "", wrapper.insertAdjacentHTML("afterbegin", targetItem.html);
          }
          paragraph.rootFrame.querySelectorAll(
            `[${sourceElementParagraphAttributeName}="${wrapperId}"]`
          ).forEach((element) => {
            setAttribute(
              element,
              sourceElementTranslatedMarkAttributeName,
              "1"
            );
          }), translatedOk = !0;
        }
      } else
        log_default.error("paragraph not found", sentenceRequest.id);
    }
    document.dispatchEvent(
      new CustomEvent(documentMessageTypeIdentifierForTellThirdParty, {
        detail: JSON.stringify({
          type: "paragraphTranslated",
          payload: {
            ok: translatedOk
          }
        })
      })
    );
  }
  async function translateCurrentQueue(ctx) {
    if (currentParagraphIds.length === 0)
      return Promise.resolve();
    let ids = [...currentParagraphIds];
    currentParagraphIds = [];
    let currentParagraphLang = "auto";
    ctx.state.isDetectParagraphLanguage || (currentParagraphLang = getCurrentPageLanguage());
    let payload = {
      sentences: ids.filter((id) => getParagraph(id)).map((id) => {
        let paragraph = getParagraph(id), from = paragraph.languageByLocal;
        return from === "auto" && (from = currentParagraphLang), {
          id: paragraph.id,
          url: ctx.encryptedUrl,
          text: paragraph.text,
          from,
          fromByClient: paragraph.languageByClient,
          to: ctx.targetLanguage
        };
      })
    };
    if (payload.sentences.length > 0) {
      setPageTranslatedStatus("Translating");
      try {
        await translateMultipleSentences(
          payload,
          ctx,
          (err, translatedSentence, sentenceRequest) => {
            onParagraphTranslated(err, translatedSentence, sentenceRequest, ctx);
          }
        );
      } catch (e) {
        setPageTranslatedStatus("Error"), log_default.error(
          "translateCurrentQueue error",
          e.name,
          e.message,
          e.details || " "
        );
        return;
      }
    }
    setPageTranslatedStatus("Translated");
  }
  function setPageTranslatedStatus(_pageStatus) {
    pageStatus = _pageStatus, sendPageTranslatedStatus(pageStatus);
  }
  function enableMutatinObserver(rootFrame, rule, ctx) {
    log_default.debug("enableMutatinObserver for ", rootFrame), disableMutatinObserver(rootFrame), allNewDynamicElements = [], currentNewDynamicElements = [];
    let inlineAndIgnoreAndTextTags = rule.inlineTags.concat(rule.excludeTags).concat("#text", "BR"), mutationObserver = new MutationObserver(function(mutations) {
      mutations.forEach((mutation) => {
        if (rootFrame === ctx.mainFrame) {
          let currentUrl = getRealUrl();
          if (currentUrl.split("#")[0] !== oldUrl && rule.observeUrlChange) {
            oldUrl = currentUrl.split("#")[0], clean(), disableMutatinObserver(rootFrame), disableTitleMutationObserver(), initPage();
            let event = new Event(pageUrlChangedEventName);
            document.dispatchEvent(event);
            return;
          }
        }
        mutation.addedNodes.forEach((addedNode) => {
          if (addedNode.nodeType === Node.ELEMENT_NODE) {
            let element = addedNode;
            if (element.nodeName === "IFRAME")
              isInlineIframe(element) && setTimeout(() => {
                injectCssToFrame(
                  element.contentDocument,
                  ctx
                ), translateFrame(
                  element.contentDocument.body,
                  ctx
                ).catch((e) => {
                  log_default.error(
                    "translateFrame error",
                    e.details || " ",
                    e
                  );
                });
              }, ctx.rule.urlChangeDelay);
            else if (mutationElementIsBlock(rule, element) || !inlineAndIgnoreAndTextTags.includes(
              element.nodeName
            )) {
              if (element.classList.contains("notranslate") || element.getAttribute("translate") === "no")
                return;
              isDuplicateElement(element, allNewDynamicElements) || (allNewDynamicElements.push(element), setTimeout(() => {
                currentNewDynamicElements.push({
                  element,
                  rootFrame
                }), debounceMap[ctx.state.translationDebounce](ctx);
              }, rule.mutationChangeDelay || 0)), element && element.querySelectorAll && element.querySelectorAll("iframe").forEach((inlineIframe) => {
                isInlineIframe(inlineIframe) && setTimeout(() => {
                  injectCssToFrame(
                    inlineIframe.contentDocument,
                    ctx
                  ), translateFrame(
                    inlineIframe.contentDocument.body,
                    ctx
                  ).catch((e) => {
                    log_default.error(
                      "translateFrame error",
                      e.details || " ",
                      e
                    );
                  });
                }, ctx.rule.urlChangeDelay);
              });
            }
          }
        });
      });
    });
    return mutationObserver.observe(rootFrame, {
      childList: !0,
      subtree: !0
    }), mutationObserver;
  }
  function enableTitleMutationObserver(ctx) {
    let titleElement = document.querySelector("title");
    titleElement && (titleMutationObserver = new MutationObserver(function(mutations) {
      mutations.length > 0 && (mutations[0].target.text.includes(titleDelimiters) || translateTitle(ctx).catch((e) => {
        log_default.error(
          "translateTitle error:",
          e.name,
          e.message,
          e.details || ""
        );
      }));
    }), titleMutationObserver.observe(titleElement, {
      subtree: !0,
      characterData: !0,
      childList: !0
    }));
  }
  function mutationElementIsBlock(rule, element) {
    if (rule.extraBlockSelectors) {
      for (let match of rule.extraBlockSelectors)
        if (element.matches(match))
          return !0;
    }
    return !1;
  }
  async function initPage() {
    let isInIframe = getIsInIframe(), ctx = await getGlobalContext(getRealUrl(), {});
    ctx.rule.urlChangeDelay && await delay(ctx.rule.urlChangeDelay), ctx.rule.waitForSelectors && ctx.rule.waitForSelectors.length > 0 && await waitForSelectors(
      ctx.rule.waitForSelectors,
      ctx.rule.waitForSelectorsTimeout
    ), ctx.rule.globalMeta && Object.keys(ctx.rule.globalMeta).forEach((key) => {
      let meta = document.createElement("meta");
      meta.name = key, meta.content = ctx.rule.globalMeta[key], document.head.appendChild(meta);
    });
    let lang = ctx.sourceLanguage;
    lang === "auto" ? lang = await detectCurrentPageLanguage(ctx) : setCurrentPageLanguageByClient(lang);
    let isAutoTranslate = ctx.state.isAutoTranslate || ctx.isTranslateUrl || ctx.rule.isPdf;
    if (!isAutoTranslate && !ctx.isTranslateExcludeUrl && (log_default.debug(`detect page language: ${ctx.url} ${lang}`), isSameTargetLanguage(lang, ctx.targetLanguage) || lang === "auto" || isMatchLanguage(lang, ctx.config.translationLanguagePattern) && (isAutoTranslate = !0, log_default.debug(`match language pattern ${lang}, auto translate`))), ctx.rule.isEbookBuilder && (isAutoTranslate = !1), isAutoTranslate)
      globalContext.state.isAutoTranslate = !0, await translatePage(globalContext);
    else if (log_default.debug("do not auto translate", ctx), ctx.rule.initTranslationServiceAsSoonAsPossible && ctx.translationService === "deepl") {
      if (isSameTargetLanguage(lang, ctx.targetLanguage) || lang === "auto")
        return;
      ctx.config && ctx.config.translationServices && ctx.config.translationServices.deepl && ctx.config.translationServices.deepl.authKey && typeof ctx.config.translationServices.deepl.authKey == "string" && ctx.config.translationServices.deepl.authKey.startsWith("immersive_") && (translationServiceInitmap[ctx.translationService] || (translationServiceInitmap[ctx.translationService] = !0, isInIframe || initTranslationEngine(ctx).catch((e) => {
        log_default.warn("init translation engine error", e);
      })));
    }
  }
  async function setupOnceForInitPage(ctx) {
    isSetupForOnce || (isSetupForOnce = !0, globalThis.top !== globalThis.self && ctx.rule.useIframePostMessage && await setupChildIframeChannel(), injectCssToFrame(document, ctx), document.querySelectorAll("iframe").forEach((frame) => {
      isInlineIframe(frame) ? injectCssToFrame(frame.contentDocument, ctx) : ctx.rule.isEbook && injectCssToFrame(frame.contentDocument, ctx);
    }));
  }
  function disableMutatinObserver(rootFrame) {
    if (mutationObserverMap.has(rootFrame)) {
      let mutationObserver = mutationObserverMap.get(rootFrame);
      mutationObserver.disconnect(), mutationObserver.takeRecords(), mutationObserverMap.delete(rootFrame);
    } else if (globalContext && rootFrame === globalContext.mainFrame || rootFrame === document.body) {
      let mutationObserver = mainMutaionObserver;
      mutationObserver && (mutationObserver.disconnect(), mutationObserver.takeRecords());
    }
  }
  function disableTitleMutationObserver() {
    titleMutationObserver && (titleMutationObserver.disconnect(), titleMutationObserver.takeRecords(), titleMutationObserver = void 0);
  }
  function getPageStatus() {
    return pageStatus;
  }
  async function detectCurrentPageLanguage(ctx) {
    ctx || (globalContext = await getGlobalContext(getRealUrl(), {}), ctx = globalContext);
    let isInIframe = getIsInIframe(), lang = "auto", pairKeys = Object.keys(ctx.rule.pairs);
    if (isMonkey()) {
      let mainText = "";
      ctx.rule.isEbook || ctx.rule.isEbookBuilder ? mainText = getAllIframeMainText(ctx.mainFrame) : pairKeys.length > 0 ? mainText = getPairsSourceText(ctx.mainFrame, ctx.rule.pairs) : mainText = getMainText(ctx.mainFrame).slice(0, 1e3), lang = await detectLanguage({
        text: mainText
      });
    } else if (isInIframe)
      lang = await detectLanguage({
        text: getMainText(ctx.mainFrame).slice(0, 1e3)
      });
    else if (ctx.rule.isEbook || ctx.rule.isEbookBuilder) {
      let mainText = "";
      mainText = getAllIframeMainText(ctx.mainFrame), lang = await detectLanguage({
        text: mainText
      });
    } else if (pairKeys.length > 0) {
      let mainText = getPairsSourceText(ctx.mainFrame, ctx.rule.pairs);
      lang = await detectLanguage({
        text: mainText
      });
    } else
      lang = await detectTabLanguage();
    return lang === "auto" && (lang = await detectPageLanguage()), setCurrentPageLanguage(lang), lang;
  }
  function waitForSelectors(selectors, timeout = 3e3) {
    return new Promise((resolve, _reject) => {
      let timer2 = timeout ? setTimeout(() => {
        resolve(new Error("timeout"));
      }, timeout) : void 0, interval = setInterval(() => {
        selectors.every((selector) => document.querySelector(selector) !== null) && (clearInterval(interval), timer2 && clearTimeout(timer2), resolve(null));
      }, 50);
    });
  }


  // utils/click-multiple-times.ts
  function onClickMultipleTimes(requiredClicks, timeLimit = 2e3) {
    return (cb) => {
      let timer2, clicked = 0;
      return (e) => {
        ++clicked == requiredClicks && (cb(e), clicked = 0), clearTimeout(timer2), timer2 = setTimeout(
          () => clicked = 0,
          // reset the number of clicks after a traditional 300ms duration
          timeLimit
        );
      };
    };
  }

  // utils/is_valid_html_url.ts
  function isValidHtmlUrl(url) {
    let urlObj;
    try {
      urlObj = new URL(url);
    } catch {
      return !1;
    }
    let pathname = urlObj.pathname;
    return pathname.endsWith(".html") || pathname.endsWith(".htm") ? !0 : !(urlObj.protocol !== "http:" && urlObj.protocol !== "https:" && urlObj.protocol !== "file:" && urlObj.protocol !== "data:");
  }

  // utils/hostname_to_wild_hostname.ts
  function hostnameToWildHostname(hostname2) {
    let parts = hostname2.split(".");
    return parts.length > 2 ? (parts[0] = "*", parts.join(".")) : null;
  }


  // hooks/use_i18n.ts
  function useI18n() {
    return M4(TranslateContext);
  }

  // components/popup_field.tsx
  function PopupField(props) {
    let { field, onChange, value } = props;
    value = value || field.default || "";
    let { t: t3 } = useI18n(), finalLabel = field.name;
    return field.label && (finalLabel = field.label), field.labelKey && (finalLabel = t3(field.labelKey)), field.type === "select" ? /* @__PURE__ */ p4("div", { class: "flex justify-between mb-2", children: [
      /* @__PURE__ */ p4("label", { class: "inline-block", children: [
        finalLabel,
        "\uFF1A"
      ] }),
      /* @__PURE__ */ p4(
        SelectLink,
        {
          items: field.options.map(
            (fieldOption) => ({
              label: `${fieldOption.label ? t3(fieldOption.label) : fieldOption.value}`,
              value: fieldOption.value,
              selected: value === fieldOption.value,
              onSelected: () => {
                onChange(fieldOption.value);
              }
            })
          )
        }
      )
    ] }) : null;
  }


  // components/popup.tsx
  function Popup(props) {
    let version = getVersion(), {
      onTranslateTheMainPage,
      onUserConfigChange,
      request: request3,
      onTranslateLocalHtmlFile,
      onTranslateLocalSubtitleFile,
      onSetBuildinConfig,
      pageStatus: pageStatus2,
      openEbookBuilderPage: openEbookBuilderPage2,
      openEbookViewerPage: openEbookViewerPage2,
      config,
      openAboutPage: openAboutPage2,
      onTranslateTheWholePage,
      onToggleEnabled,
      openOptionsPage: openOptionsPage2,
      ontranslateToThePageEndImmediately,
      onSetPageLanguage,
      onToggleTranslate,
      onTranslateLocalPdfFile,
      onTranslatePdf,
      onRestorePage,
      ctx,
      currentUrl,
      currentLang,
      onClose,
      onTranslatePage,
      onSetLocalConfig
    } = props, setSettings = onUserConfigChange, [message, setMessage] = P5(""), [errorMessage, _setErrorMessage] = P5(""), { t: t3 } = useI18n(), isAlwaysTranslateDomain = null, isAlwaysTranslateWildDomain = null, isNeverTranslaateDomain = null, isNeverTranslateWildDomain = null, isAlwaysTranslateLang = null, isAlwaysTranslateUrl = null, isNeverTranslateUrl = null, curentTranslationServiceItem = null, currentUrlObj = null, currentWildHostname = null, currentUrlWithoutHash = null, currentTranslationServiceConfig = null;
    if (config) {
      let { translationService, translationServices, translationUrlPattern } = config;
      if (PureTranslationServices[translationService] && (curentTranslationServiceItem = formatTranslationService(
        translationService,
        ctx
      )), translationServices && translationServices[translationService] ? currentTranslationServiceConfig = translationServices[translationService] || {} : currentTranslationServiceConfig = {}, currentUrl && isValidHtmlUrl(currentUrl)) {
        currentUrlObj = new URL(currentUrl), currentWildHostname = hostnameToWildHostname(currentUrlObj.hostname), currentUrlWithoutHash = getUrlWithoutHash(currentUrl);
        let { matches, excludeMatches } = translationUrlPattern;
        isAlwaysTranslateWildDomain = matches.includes(currentWildHostname), isAlwaysTranslateDomain = matches.includes(currentUrlObj.hostname), isNeverTranslateWildDomain = excludeMatches.includes(
          currentWildHostname
        ), isNeverTranslaateDomain = excludeMatches.includes(
          currentUrlObj.hostname
        ), isAlwaysTranslateUrl = matches.includes(currentUrlWithoutHash), isNeverTranslateUrl = excludeMatches.includes(currentUrlWithoutHash);
      }
    }
    if (config && currentLang && currentLang !== "auto") {
      let { translationLanguagePattern } = config, { matches } = translationLanguagePattern;
      matches.includes(currentLang) ? isAlwaysTranslateLang = !0 : isAlwaysTranslateLang = !1;
    }
    let handleOpenOptions = (e) => {
      e.preventDefault(), openOptionsPage2();
    }, handleToggleAlpha = (_e3) => {
      setSettings((settings) => (settings.alpha ? setMessage("Success disable alpha!") : setMessage("Success enable alpha!"), {
        ...settings,
        alpha: !settings.alpha
      }));
    }, handleChangeToTranslateTheWholePage = () => {
      setSettings((state) => ({
        ...state,
        translationArea: "body"
      })), onTranslateTheWholePage();
    }, handleChangeToTranslateTheMainPage = () => {
      setSettings((state) => ({
        ...state,
        translationArea: "main"
      })), onTranslateTheMainPage();
    }, handleTranslationUrlPatternSelected = (value, matchString, reverseRemoveStrings, removeStrings) => {
      if (value === "default") {
        setSettings((state) => {
          let translationUrlPattern = { ...state.translationUrlPattern };
          return {
            ...state,
            translationUrlPattern: {
              ...state.translationUrlPattern,
              matches: removeFromArray(
                [currentUrlObj?.hostname, currentWildHostname, currentUrl],
                translationUrlPattern.matches
              ),
              excludeMatches: removeFromArray(
                [currentUrlObj?.hostname, currentWildHostname, currentUrl],
                translationUrlPattern.excludeMatches
              )
            }
          };
        });
        return;
      }
      let name = value, reverseName = name === "matches" ? "excludeMatches" : "matches";
      currentUrlObj && setSettings((state) => {
        let translationUrlPattern = { ...state.translationUrlPattern };
        return translationUrlPattern[name] = addToUniqueArray(
          matchString,
          translationUrlPattern[name]
        ), removeStrings.length > 0 && (translationUrlPattern[name] = removeFromArray(
          removeStrings,
          translationUrlPattern[name]
        )), translationUrlPattern[reverseName] = removeFromArray(
          reverseRemoveStrings,
          translationUrlPattern[reverseName]
        ), {
          ...state,
          translationUrlPattern: {
            ...state.translationUrlPattern,
            ...translationUrlPattern
          }
        };
      }), name === "matches" && pageStatus2 === "Original" ? setTimeout(() => {
        onTranslatePage(), onClose();
      }, 100) : name === "excludeMatches" && pageStatus2 === "Translated" && setTimeout(() => {
        onRestorePage(), onClose();
      }, 100);
    }, handleTranslationLanguagePatternSelected = (value) => {
      if (!value) {
        setSettings((state) => {
          let translationLanguagePattern = {
            ...state.translationLanguagePattern
          };
          return {
            ...state,
            translationLanguagePattern: {
              ...state.translationLanguagePattern,
              matches: removeFromArray(
                currentLang,
                translationLanguagePattern.matches
              ),
              excludeMatches: removeFromArray(
                currentLang,
                translationLanguagePattern.excludeMatches
              )
            }
          };
        });
        return;
      }
      let name = value, reverseName = name === "matches" ? "excludeMatches" : "matches";
      currentLang && setSettings((state) => {
        let translationLanguagePattern = {
          ...state.translationLanguagePattern
        };
        return translationLanguagePattern[name] = addToUniqueArray(
          currentLang,
          translationLanguagePattern[name]
        ), translationLanguagePattern[reverseName] = removeFromArray(
          currentLang,
          translationLanguagePattern[reverseName]
        ), {
          ...state,
          translationLanguagePattern: {
            ...state.translationLanguagePattern,
            ...translationLanguagePattern
          }
        };
      }), name === "matches" && pageStatus2 === "Original" && setTimeout(() => {
        onTranslatePage(), onClose();
      }, 100);
    }, isPdfUrl = currentUrlObj?.pathname.toLowerCase().endsWith(".pdf"), buttonLabel = t3("translate");
    pageStatus2 === "Translated" || pageStatus2 === "Error" ? buttonLabel = t3("show-original") : pageStatus2 === "Original" ? isPdfUrl ? isFirefox() && currentUrlObj.protocol === "file:" ? buttonLabel = t3("translate-firefox-local-pdf") : isMonkey() ? buttonLabel = t3("noSupportTranslate-pdf") : buttonLabel = t3("translate-pdf") : buttonLabel = t3("translate") : buttonLabel = t3(pageStatus2);
    let translateToThePageEndImmediatelyLabel = t3(
      "translateToThePageEndImmediately"
    );
    (pageStatus2 === "Original" || pageStatus2 === "Translated") && (config.shortcuts.toggleTranslatePage && (isTouchDevice() && ctx.rule.fingerCountToToggleTranslagePageWhenTouching >= 2 ? buttonLabel += ` (${t3(
      `fingers.${ctx.rule.fingerCountToToggleTranslagePageWhenTouching}`
    )})` : buttonLabel += ` (${config.shortcuts.toggleTranslatePage})`), config.shortcuts.toggleTranslateToThePageEndImmediately && (translateToThePageEndImmediatelyLabel += ` (${config.shortcuts.toggleTranslateToThePageEndImmediately})`));
    let translationServiceItems = [];
    ctx && (translationServiceItems = getTranslationServices(ctx));
    let handleClosePopup = (e) => {
      e.preventDefault(), onClose();
    };
    return /* @__PURE__ */ p4("div", { class: "p-3", children: [
      /* @__PURE__ */ p4("div", { class: "text-sm", children: [
        /* @__PURE__ */ p4("div", { class: "flex justify-between mb-2", children: [
          /* @__PURE__ */ p4("label", { class: "inline-block", children: [
            t3("popupSourceLanguage"),
            "\uFF1A"
          ] }),
          /* @__PURE__ */ p4(
            SelectLink,
            {
              items: languages.map((code2) => ({
                label: getLanguageName(code2, config.interfaceLanguage),
                value: code2,
                selected: code2 === currentLang,
                onSelected: (item) => {
                  onSetPageLanguage(item.value);
                }
              }))
            }
          )
        ] }),
        config && config.targetLanguage && /* @__PURE__ */ p4("div", { class: "flex justify-between mb-2", children: [
          /* @__PURE__ */ p4("label", { class: "inline-block", children: [
            t3("popupTarget"),
            "\uFF1A"
          ] }),
          /* @__PURE__ */ p4(
            SelectLink,
            {
              items: languages.filter((code2) => code2 !== "auto").map((code2) => ({
                label: getLanguageName(code2, config.interfaceLanguage),
                value: code2,
                selected: code2 === config.targetLanguage,
                onSelected: (item) => {
                  setSettings((state) => ({
                    ...state,
                    targetLanguage: item.value
                  }));
                }
              }))
            }
          )
        ] }),
        curentTranslationServiceItem && translationServiceItems.length > 0 && /* @__PURE__ */ p4(L4, { children: [
          /* @__PURE__ */ p4("div", { class: "flex justify-between mb-2", children: [
            /* @__PURE__ */ p4("label", { class: "inline-block", children: [
              t3("popupService"),
              "\uFF1A"
            ] }),
            /* @__PURE__ */ p4(
              SelectLink,
              {
                items: translationServiceItems.map((translationServiceItem) => ({
                  label: `${t3(
                    "translationServices." + translationServiceItem.id
                  )}${translationServiceItem.ok ? "" : " " + t3("needAction")}`,
                  value: translationServiceItem.id,
                  selected: translationServiceItem.selected,
                  onSelected: (option) => {
                    let selectedItem = translationServiceItems.find(
                      (item) => item.id === option.value
                    );
                    selectedItem.ok ? (setSettings((state) => ({
                      ...state,
                      translationService: selectedItem.id
                    })), selectedItem.props.length === 0 ? setTimeout(() => {
                      onTranslatePage();
                    }, 1) : setTimeout(() => {
                      onRestorePage();
                    }, 1)) : (setSettings((state) => ({
                      ...state,
                      translationService: selectedItem.id
                    })), setTimeout(() => {
                      openOptionsPage2();
                    }, 100));
                  }
                }))
              }
            )
          ] }),
          currentTranslationServiceConfig && curentTranslationServiceItem.props.length > 0 && curentTranslationServiceItem.props.map((prop, index) => /* @__PURE__ */ p4("div", { class: "pl-4 text-sm", children: /* @__PURE__ */ p4(
            PopupField,
            {
              field: prop,
              value: currentTranslationServiceConfig[prop.name],
              onChange: (value) => {
                setSettings((state) => {
                  let currentServices = state.translationServices || {}, currentServiceConfig = currentServices[curentTranslationServiceItem.id] || {};
                  return setTimeout(() => {
                    onRestorePage();
                  }, 1), {
                    ...state,
                    translationServices: {
                      ...currentServices,
                      [curentTranslationServiceItem.id]: {
                        ...currentServiceConfig,
                        [prop.name]: value
                      }
                    }
                  };
                });
              }
            },
            "field-" + index
          ) }, "service" + index))
        ] }),
        currentUrlObj && /* @__PURE__ */ p4("div", { class: "flex justify-between mb-2", children: [
          /* @__PURE__ */ p4("label", { class: "inline-block", children: t3("forThisSite") }),
          /* @__PURE__ */ p4(
            SelectLink,
            {
              items: [
                {
                  label: t3("default"),
                  value: "default",
                  selected: isAlwaysTranslateDomain === !1 && isNeverTranslaateDomain === !1 && !isAlwaysTranslateWildDomain && !isNeverTranslateWildDomain && !isAlwaysTranslateUrl && !isNeverTranslateUrl,
                  onSelected: () => {
                    handleTranslationUrlPatternSelected(
                      "default",
                      currentUrlObj.hostname,
                      [],
                      []
                    );
                    let currentDomain = currentUrlObj.hostname, currentTempTranslationDomains = ctx.localConfig.tempTranslationUrlMatches || [], filteredDomains = currentTempTranslationDomains.filter(
                      (item) => item.match !== currentDomain
                    ), isChanged = !1;
                    filteredDomains.length !== currentTempTranslationDomains.length && (isChanged = !0), isChanged && onSetLocalConfig({
                      ...ctx.localConfig,
                      tempTranslationUrlMatches: [...filteredDomains]
                    });
                  }
                },
                currentUrlWithoutHash && {
                  label: t3("alwaysTranslateSomeSite", {
                    hostname: t3("currentUrl")
                  }),
                  value: "matchesUrl",
                  selected: isAlwaysTranslateUrl,
                  onSelected: () => {
                    handleTranslationUrlPatternSelected(
                      "matches",
                      currentUrlWithoutHash,
                      [currentUrlWithoutHash],
                      []
                    );
                  }
                },
                {
                  label: t3("alwaysTranslateSomeSite", {
                    hostname: currentUrlObj.hostname
                  }),
                  value: "matches",
                  selected: isAlwaysTranslateDomain,
                  onSelected: (item) => {
                    handleTranslationUrlPatternSelected(
                      item.value,
                      currentUrlObj.hostname,
                      [
                        currentUrlObj.hostname,
                        currentWildHostname,
                        currentUrlWithoutHash
                      ],
                      [currentWildHostname]
                    );
                  }
                },
                currentWildHostname && {
                  label: t3("alwaysTranslateSomeSite", {
                    hostname: currentWildHostname
                  }),
                  value: "matchesWild",
                  selected: isAlwaysTranslateWildDomain,
                  onSelected: () => {
                    handleTranslationUrlPatternSelected(
                      "matches",
                      currentWildHostname,
                      [
                        currentUrlWithoutHash,
                        currentUrlObj.hostname,
                        currentWildHostname
                      ],
                      [currentUrlObj.hostname]
                    );
                  }
                },
                currentUrlWithoutHash && {
                  label: t3("neverTranslateSomeSite", {
                    hostname: t3("currentUrl")
                  }),
                  value: "excludeMatchesUrl",
                  selected: isNeverTranslateUrl,
                  onSelected: () => {
                    handleTranslationUrlPatternSelected(
                      "excludeMatches",
                      currentUrlWithoutHash,
                      [currentUrlWithoutHash],
                      []
                    );
                  }
                },
                {
                  label: t3("neverTranslateSomeSite", {
                    hostname: currentUrlObj.hostname
                  }),
                  value: "excludeMatches",
                  selected: isNeverTranslaateDomain,
                  onSelected: (item) => {
                    handleTranslationUrlPatternSelected(
                      item.value,
                      currentUrlObj.hostname,
                      [
                        currentUrlObj.hostname,
                        currentWildHostname,
                        currentUrlWithoutHash
                      ],
                      [currentWildHostname]
                    );
                  }
                },
                currentWildHostname && {
                  label: t3("neverTranslateSomeSite", {
                    hostname: currentWildHostname
                  }),
                  value: "excludeMatchesWild",
                  selected: isNeverTranslateWildDomain,
                  onSelected: () => {
                    handleTranslationUrlPatternSelected(
                      "excludeMatches",
                      currentWildHostname,
                      [
                        currentUrlObj.hostname,
                        currentUrlWithoutHash,
                        currentWildHostname
                      ],
                      [currentUrlObj.hostname]
                    );
                  }
                }
              ].filter(Boolean)
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ p4("div", { class: "", children: /* @__PURE__ */ p4(
        "button",
        {
          class: "py-2 mt-1 mb-2 main-button ",
          onClick: () => {
            isPdfUrl ? onTranslatePdf && onTranslatePdf() : onToggleTranslate();
          },
          "aria-busy": pageStatus2 === "Translating",
          disabled: pageStatus2 === "Translating",
          children: buttonLabel
        }
      ) }),
      /* @__PURE__ */ p4("div", { class: "flex justify-between", children: [
        currentLang && currentLang !== "auto" ? /* @__PURE__ */ p4("label", { for: "alwaysTranslateThisLanugage", class: "text-sm", children: [
          /* @__PURE__ */ p4(
            "input",
            {
              type: "checkbox",
              id: "alwaysTranslateThisLanugage",
              name: "alwaysTranslateThisLanugage",
              checked: !!isAlwaysTranslateLang,
              onChange: (e) => {
                let checked = e.target.checked;
                handleTranslationLanguagePatternSelected(
                  checked ? "matches" : void 0
                );
              }
            }
          ),
          t3("alwaysTranslateSomeLanguage", {
            language: getLanguageName(
              currentLang,
              config.interfaceLanguage
            )
          })
        ] }) : /* @__PURE__ */ p4("span", {}),
        /* @__PURE__ */ p4(
          SelectDropDown,
          {
            label: t3("more"),
            showArrow: !0,
            onSelected: (item) => {
              item.value === "translateTheWholePage" ? onTranslateTheWholePage() : item.value === "translateToThePageEndImmediately" ? ontranslateToThePageEndImmediately() : item.value === "translateTheMainPage" ? onTranslateTheMainPage() : item.value === "showTranslationOnly" || (item.value === "translateLocalPdfFile" ? onTranslateLocalPdfFile && onTranslateLocalPdfFile() : item.value === "translateLocalHtmlFile" ? onTranslateLocalHtmlFile && onTranslateLocalHtmlFile() : item.value === "translateLocalSubtitleFile" ? onTranslateLocalSubtitleFile && onTranslateLocalSubtitleFile() : item.value === "donate" ? (globalThis.open(config.donateUrl), onClose()) : item.value === "feedback" ? (globalThis.open(config.feedbackUrl), onClose()) : item.value === "options" ? (openOptionsPage2(), onClose()) : item.value === "changeToTranslateTheWholePage" ? handleChangeToTranslateTheWholePage() : item.value === "changeToTranslateTheMainPage" ? handleChangeToTranslateTheMainPage() : item.value === "about" ? openAboutPage2() : item.value === "toggleEnabled" ? onToggleEnabled() : item.value === "openEbookViewer" ? openEbookViewerPage2() : item.value === "openEbookBuilder" && openEbookBuilderPage2());
            },
            menus: [
              config.translationArea === "main" && {
                label: "\u{1F480} " + t3("changeToTranslateTheWholePage"),
                value: "changeToTranslateTheWholePage"
              },
              config.translationArea === "body" && {
                label: "\u{1F4D6} " + t3("changeToTranslateTheMainPage"),
                value: "changeToTranslateTheMainPage"
              },
              {
                label: "\u26A1 " + translateToThePageEndImmediatelyLabel,
                value: "translateToThePageEndImmediately"
              },
              {
                label: "\u{1F4D8} " + t3("browser.openEbookViewer"),
                value: "openEbookViewer"
              },
              {
                label: "\u{1F4DA} " + t3("browser.openEbookBuilder"),
                value: "openEbookBuilder"
              },
              !isMonkey() && {
                label: "\u{1F4C1} " + t3("browser.translateLocalPdfFile"),
                value: "translateLocalPdfFile"
              },
              !isMonkey() && {
                label: "\u{1F310} " + t3("browser.translateLocalHtmlFile"),
                value: "translateLocalHtmlFile"
              },
              {
                label: "\u{1F4FA} " + t3("browser.translateLocalSubtitleFile"),
                value: "translateLocalSubtitleFile"
              },
              {
                label: (config.enabled ? "\u{1F6AB} " : "\u{1F44B} ") + (config.enabled ? t3("clickToDisableExtension") : t3("clickToEnableExtension")),
                value: "toggleEnabled"
              },
              {
                label: "\u2764\uFE0F " + t3("aboutLabel"),
                value: "about"
              }
            ].filter(Boolean)
          }
        )
      ] }),
      /* @__PURE__ */ p4("div", { class: "text-sm", children: message }),
      /* @__PURE__ */ p4("div", { class: "text-sm", children: errorMessage }),
      /* @__PURE__ */ p4("footer", { children: [
        /* @__PURE__ */ p4(
          SyncLatest,
          {
            request: request3,
            setStorageBuildinConfig: onSetBuildinConfig
          }
        ),
        /* @__PURE__ */ p4("div", { class: "mt-3 text-sm flex justify-between", children: [
          /* @__PURE__ */ p4("a", { href: "#", class: "secondary", onClick: handleOpenOptions, children: t3("options") }),
          isMonkey() && /* @__PURE__ */ p4("a", { href: "#", class: "secondary", onClick: handleClosePopup, children: t3("close") }),
          /* @__PURE__ */ p4(
            "span",
            {
              class: "immersive-translate-no-select muted",
              onClick: onClickMultipleTimes(7)(handleToggleAlpha),
              children: [
                "V",
                version,
                config.enabled ? null : /* @__PURE__ */ p4("a", { href: "#", onClick: onToggleEnabled, children: [
                  " ",
                  "(",
                  t3("hasBeenDisabled"),
                  ")"
                ] })
              ]
            }
          )
        ] })
      ] })
    ] });
  }


  // userscript/popup_entry.tsx
  function addCSSLegacy(root2, csses) {
    for (let css of csses)
      root2.appendChild(document.createElement("style")).textContent = css;
  }
  var currentPagePopupConfig = {
    position: "right",
    right: 0,
    top: 335
  }, positionChanged = !1, rootRef = null, btnRef = null, mountPointRef = null, shadowRef = null, timer = null, localConfig = null, delta = 6, startX, startY, lastBtnStyle = null, lastRootStyle = null;
  async function initPopup() {
    let env4 = getEnv();
    localConfig = await getLocalConfig2(), currentPagePopupConfig = localConfig.pagePopupConfig || currentPagePopupConfig;
    let popup = document.createElement("div");
    popup.id = "immersive-translate-popup", popup.setAttribute("style", "all: initial"), document.documentElement.appendChild(popup);
    let shadow = popup.attachShadow({ mode: "open" });
    shadowRef = shadow;
    let csses = [
      env4.IMMERSIVE_TRANSLATE_PICO_CSS,
      env4.IMMERSIVE_TRANSLATE_COMMON_CSS,
      env4.IMMERSIVE_TRANSLATE_POPUP_CSS
    ];
    addCSSLegacy(shadow, csses);
    let mountRoot = document.createElement("div");
    mountRoot.innerHTML = env4.IMMERSIVE_TRANSLATE_POPUP_HTML, shadow.appendChild(mountRoot), rootRef = shadow.querySelector(
      "#immersive-translate-popup-container"
    );
    let btn = shadow.querySelector(
      "#immersive-translate-popup-btn"
    );
    btnRef = btn, mountPointRef = shadow.querySelector("#mount"), rootRef.setAttribute(
      "style",
      objToStyle(currentPagePopupConfig)
    ), setBtnTransform(), btn.addEventListener("mousedown", onMouseDown), btn.addEventListener("touchstart", onTouchStart), globalThis.addEventListener("resize", (_e3) => {
      rootRef.setAttribute(
        "style",
        objToStyle(currentPagePopupConfig)
      );
    });
  }
  function showButton() {
    re(null, mountPointRef), mountPointRef.style.display = "none", btnRef.style.display = "block", timer = setTimeout(() => {
      setBtnTransform(!0);
    }, 2e3);
  }
  function renderPopup(shadow) {
    let mountPoint = shadow.querySelector("#mount"), handleOnClose = () => {
      showButton();
    }, handleClickOverLay = (e) => {
      e && e.target && e.target.id === "immersive-translate-popup-overlay" && handleOnClose();
    };
    (async () => {
      let config = await getConfig2();
      re(
        /* @__PURE__ */ p4(
          TranslateProvider,
          {
            lang: config.interfaceLanguage,
            fallbackLang: "zh-CN",
            translations: locales_default,
            children: /* @__PURE__ */ p4(
              "div",
              {
                onClick: handleClickOverLay,
                id: "immersive-translate-popup-overlay",
                class: "immersive-translate-popup-overlay",
                children: /* @__PURE__ */ p4(
                  "div",
                  {
                    class: "immersive-translate-popup-wrapper",
                    style: calculateMountPointPosition(),
                    children: /* @__PURE__ */ p4(PopupApp, { onClose: handleOnClose })
                  }
                )
              }
            )
          }
        ),
        mountPoint
      );
    })().then(() => {
      btnRef.style.display = "none", mountPointRef.style.display = "block";
    });
  }
  function calculateMountPointPosition() {
    let screenSize = getScreenSize(), windowHeight = screenSize.height, { position, top, left } = currentPagePopupConfig, style = {
      position: "fixed"
    }, popupHeight = 300, popupWidth = 300, offset = 100;
    return position === "right" || position === "left" ? (style.top = top - offset, style.top + popupHeight >= windowHeight ? (style.bottom = 30, delete style.top) : style.top <= 10 && (style.top = 10), position === "right" ? style.right = 0 : position === "left" && (style.left = 0)) : (position === "top" || position === "bottom") && (style.left = left - offset, style.left + popupWidth >= screenSize.width ? (style.right = 0, delete style.left) : style.left <= 10 && (style.left = 0), position === "top" ? style.top = 0 : position === "bottom" && (style.bottom = 0)), style;
  }
  function getScreenSize() {
    return {
      width: Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      ),
      height: Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      )
    };
  }
  function onMouseDown(e) {
    lastRootStyle = rootRef.getAttribute("style"), startX = e.pageX, startY = e.pageY, timer && clearTimeout(timer), positionChanged = !1, btnRef.style.opacity = "1", btnRef.style.transform = "none", lastBtnStyle = btnRef.getAttribute("style"), globalThis.addEventListener("mousemove", onMouseMove), globalThis.addEventListener("mouseup", onMouseUp), globalThis.addEventListener("touchmove", onTouchMove), globalThis.addEventListener("touchend", onTouchEnd), globalThis.addEventListener("touchcancel", onTouchEnd);
  }
  function onTouchStart(e) {
    e.preventDefault && e.preventDefault(), onMouseDown(e.changedTouches[0]);
  }
  function onTouchMove(e) {
    onMouseMove(e.changedTouches[0]);
  }
  function onTouchEnd(e) {
    e.preventDefault && e.preventDefault(), onMouseUp(e.changedTouches[0]);
  }
  function onMouseMove(e) {
    e.preventDefault && e.preventDefault(), positionChanged = !0, rootRef.setAttribute(
      "style",
      `left:${e.clientX}px;top:${e.clientY}px;transform:scale(1.6);`
    );
  }
  function onMouseUp(e) {
    e.preventDefault && e.preventDefault(), removeListeners(), timer && clearTimeout(timer), startX = startX || 0, startY = startY || 0;
    let diffX = Math.abs(e.pageX - startX), diffY = Math.abs(e.pageY - startY);
    diffX < delta && diffY < delta ? (rootRef.setAttribute("style", lastRootStyle), btnRef.setAttribute("style", lastBtnStyle), renderPopup(shadowRef)) : positionChanged ? snapToSide(e) : renderPopup(shadowRef), positionChanged = !1;
  }
  function snapToSide(e) {
    let screenSize = getScreenSize(), left = e.clientX, top = e.clientY, toTop = top, toBottom = screenSize.height - top, toLeft = left, toRight = screenSize.width - left;
    toTop < toBottom && toTop < toLeft && toTop < toRight ? currentPagePopupConfig = {
      position: "top",
      left,
      top: 0
    } : toBottom < toTop && toBottom < toLeft && toBottom < toRight ? currentPagePopupConfig = {
      position: "bottom",
      bottom: 0,
      left: e.clientX
    } : toLeft < toTop && toLeft < toBottom && toLeft < toRight ? currentPagePopupConfig = {
      position: "left",
      left: 0,
      top: e.clientY
    } : toRight < toTop && toRight < toBottom && toRight < toLeft && (currentPagePopupConfig = {
      position: "right",
      right: 0,
      top: e.clientY
    });
    let finalStyle = objToStyle(currentPagePopupConfig);
    rootRef.setAttribute(
      "style",
      finalStyle
    ), setLocalConfig2({
      ...localConfig,
      pagePopupConfig: currentPagePopupConfig
    }), timer = setTimeout(() => {
      setBtnTransform(!0);
    }, 2e3);
  }
  function setBtnTransform(transition = !1) {
    btnRef.style.opacity = "0.4";
    let transform = "";
    currentPagePopupConfig.position === "left" ? transform = "translateX(-40%)" : currentPagePopupConfig.position === "right" ? transform = "translateX(40%)" : currentPagePopupConfig.position === "top" ? transform = "translateY(-40%)" : currentPagePopupConfig.position === "bottom" && (transform = "translateY(40%)"), btnRef.style.transform = transform, transition && (btnRef.style.transition = "transform 0.2s ease-in-out, opacity 0.2s ease-in-out");
  }
  function removeListeners() {
    globalThis.removeEventListener("mousemove", onMouseMove), globalThis.removeEventListener("mouseup", onMouseUp), globalThis.removeEventListener("touchmove", onTouchMove), globalThis.removeEventListener("touchend", onTouchEnd), globalThis.removeEventListener("touchcancel", onTouchEnd);
  }
  function objToStyle(rawObj) {
    let obj = getValidStyleObj(rawObj);
    return Object.keys(obj).map((key) => typeof obj[key] == "number" ? `${key}:${obj[key]}px;` : "").join("");
  }
  function getValidStyleObj(positionConfig) {
    let { position, ...rest } = positionConfig, screenSize = getScreenSize(), styleObj = {};
    return position === "left" ? (styleObj.left = 0, rest.top > screenSize.height ? styleObj.top = screenSize.height - 100 : styleObj.top = rest.top) : position === "right" ? (styleObj.right = 0, rest.top > screenSize.height ? styleObj.top = screenSize.height - 100 : styleObj.top = rest.top) : position === "top" ? (styleObj.top = 0, rest.left > screenSize.width ? styleObj.left = screenSize.width - 100 : styleObj.left = rest.left) : position === "bottom" && (styleObj.bottom = 0, rest.left > screenSize.width ? styleObj.left = screenSize.width - 100 : styleObj.left = rest.left), styleObj;
  }


  // dom/main.ts
  var hardCodeBlackDomains = ["oapi.dingtalk.com", "login.dingtalk.com"];
  async function main2(ctx) {
    if (!ctx) {
      let config = await getConfig2();
      ctx = await getContext({
        config,
        url: getRealUrl()
      });
    }
    let realUrlObj = new URL(ctx.url);
    if (hardCodeBlackDomains.includes(realUrlObj.hostname) || !ctx.config.enabled)
      return;
    if (ctx.config.debug ? log_default.setLevel("debug") : log_default.setLevel("info"), globalThis.top != globalThis.self || await main().catch((e) => {
      log_default.error(`init popup page error: ${e}`);
    }), !ctx.isTranslateExcludeUrl) {
      if (report("init_page_daily", [
        {
          name: "init_page_daily"
        }
      ], ctx), ctx.rule.isPdf) {
        let isFirstTextRendered = !1;
        globalThis.PDFViewerApplication && globalThis.PDFViewerApplication.initializedPromise.then(() => {
          let pdfViewer = globalThis.PDFViewerApplication;
          pdfViewer.eventBus.on("pagesdestroy", () => {
            restorePage();
          }), pdfViewer.eventBus.on("textlayerrendered", async () => {
            isFirstTextRendered || (isFirstTextRendered = !0, await initPage());
          }), pdfViewer.eventBus.on("fileinputchange", () => {
            isFirstTextRendered = !1;
          });
        });
      } else
        ctx.rule.isEbook || ctx.rule.isEbookBuilder || ctx.rule.isSubtitleBuilder || await initPage();
      checkCronAndRunOnce();
    }
  }



  // content_dom_listeners.ts
  var debounceOpenOptionsPage = se(async () => {
    await openOptionsPage();
  }, 50), debounceOpenAboutPage = se(async () => {
    await openAboutPage();
  }, 50), deboundOpenEbookBuilder = se(async () => {
    await openEbookBuilderPage();
  }, 50), deboundOpenEbookViewer = se(async () => {
    await openEbookViewerPage();
  }, 50), debounceToggleTranslatePage = se((id) => {
    sendMessageToContent({
      method: id
    });
  }, 50), throttleToggleTranslatePage = se(() => {
    toggleTranslatePage();
    let event = new CustomEvent(userscriptCommandEventName, {
      detail: {
        method: "toggleTranslatePage"
      }
    });
    globalThis.document.dispatchEvent(event);
  }, 200), throttleToggleTranslationMask = se(() => {
    toggleTranslationMask();
    let event = new CustomEvent(userscriptCommandEventName, {
      detail: {
        method: "toggleTranslationMask"
      }
    });
    globalThis.document.dispatchEvent(event);
  }, 200);
  function setupDomListenersForAll(ctx) {
    if (isMonkey() || setupMessageListeners(), document.addEventListener("immersiveTranslateEbookLoaded", () => {
      setTimeout(() => {
        initPage();
      }, 10);
    }), document.addEventListener(
      documentMessageTypeIdentifierForThirdPartyTell,
      (e) => {
        let event = e;
        if (log_default.debug("receive third party message", event), event && event.detail)
          try {
            let detailObj = JSON.parse(event.detail);
            detailObj && detailObj.type && detailObj.type === "retryFailedParagraphs" && sendMessageToContent2({
              method: "retryFailedParagraphs"
            });
          } catch (e2) {
            log_default.warn("parse message error", e2);
          }
      }
    ), document.addEventListener("click", (e) => {
      let target = e.target;
      if (!target || !target.getAttribute)
        return;
      let action = target.getAttribute("data-immersive-translate-action");
      action && action === "retry" && (e.preventDefault(), typeof e.stopPropagation == "function" && e.stopPropagation(), retryFailedParagraphs());
    }), ctx.rule.fingerCountToToggleTranslagePageWhenTouching >= 2 && document.addEventListener("touchstart", (e) => {
      e.touches.length == ctx.rule.fingerCountToToggleTranslagePageWhenTouching ? throttleToggleTranslatePage() : e.touches.length === ctx.rule.fingerCountToToggleTranslationMaskWhenTouching && throttleToggleTranslationMask();
    }), isMonkey() && (globalThis.top != globalThis.self ? globalThis.addEventListener("message", (event) => {
      event && event.data && event.data.payload && event.data.author === iframeMessageIdentifier && asyncMessageHandler(event.data.payload, {
        // @ts-ignore: it's ok
        tab: {
          id: 1,
          url: "https://www.fake-iframe.com",
          active: !0
        }
      });
    }, !1) : (setupCommandListeners(ctx.config), registerCommands(ctx.config), globalThis.document.addEventListener(
      userscriptCommandEventName,
      // @ts-ignore: hard to type
      (_e3) => {
        ensurePopupInit();
      }
    ))), globalThis.top === globalThis.self) {
      let channel = ProtoframePubsub.rootIframe(
        childFrameToRootFrameIdentifier
      );
      channel.handleAsk("getRateLimitDelay", onRateLimiterDelayRequest), channel.handleAsk("throttleRequest", onThrottleRequest);
    }
  }




  // web-options/setup_web_options_page.ts

  // content_main.ts
  ready_state_default.domready.then(async () => {
    let config = await getConfig(), realUrl = getRealUrl(), ctx = await getContext({
      config,
      url: realUrl
    });
    setupDomListenersForAll(ctx), ctx.isTranslateExcludeUrl && isWebOptionsPage2() ? (log_default.debug("detect web options page"), setupWebOptionsPage()) : waitForDomElementReady(ctx).then(() => {
      main2(ctx).catch((e) => {
        e && log_default.error(
          "translate page error",
          e.name,
          e.message,
          e.details || "",
          e
        );
      });
    }).catch((e) => {
      log_default.debug("can not detect a valid body: ", e);
    });
  }).catch((e) => {
    e && log_default.error(
      "translate dom ready detect error",
      e
    );
  });
})();
/*! Bundled license information:

bowser/src/bowser.js:
  (*!
   * Bowser - a browser detector
   * https://github.com/lancedikson/bowser
   * MIT License | (c) Dustin Diaz 2012-2015
   * MIT License | (c) Denis Demchenko 2015-2019
   *)
*/
