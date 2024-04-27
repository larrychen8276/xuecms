var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// Readability.js
var require_Readability = __commonJS({
  "Readability.js"(exports2, module2) {
    function Readability2(doc2, options) {
      if (options && options.documentElement) {
        doc2 = options;
        options = arguments[2];
      } else if (!doc2 || !doc2.documentElement) {
        throw new Error("First argument to Readability constructor should be a document object.");
      }
      options = options || {};
      this._doc = doc2;
      this._docJSDOMParser = this._doc.firstChild.__JSDOMParser__;
      this._articleTitle = null;
      this._articleByline = null;
      this._articleDir = null;
      this._articleSiteName = null;
      this._attempts = [];
      this._debug = !!options.debug;
      this._maxElemsToParse = options.maxElemsToParse || this.DEFAULT_MAX_ELEMS_TO_PARSE;
      this._nbTopCandidates = options.nbTopCandidates || this.DEFAULT_N_TOP_CANDIDATES;
      this._charThreshold = options.charThreshold || this.DEFAULT_CHAR_THRESHOLD;
      this._classesToPreserve = this.CLASSES_TO_PRESERVE.concat(options.classesToPreserve || []);
      this._keepClasses = !!options.keepClasses;
      this._serializer = options.serializer || function(el) {
        return el.innerHTML;
      };
      this._disableJSONLD = !!options.disableJSONLD;
      this._allowedVideoRegex = options.allowedVideoRegex || this.REGEXPS.videos;
      this._flags = this.FLAG_STRIP_UNLIKELYS | this.FLAG_WEIGHT_CLASSES | this.FLAG_CLEAN_CONDITIONALLY;
      if (this._debug) {
        let logNode = function(node) {
          if (node.nodeType == node.TEXT_NODE) {
            return `${node.nodeName} ("${node.textContent}")`;
          }
          let attrPairs = Array.from(node.attributes || [], function(attr) {
            return `${attr.name}="${attr.value}"`;
          }).join(" ");
          return `<${node.localName} ${attrPairs}>`;
        };
        this.log = function() {
          if (typeof console !== "undefined") {
            let args = Array.from(arguments, (arg) => {
              if (arg && arg.nodeType == this.ELEMENT_NODE) {
                return logNode(arg);
              }
              return arg;
            });
            args.unshift("Reader: (Readability)");
            console.log.apply(console, args);
          } else if (typeof dump !== "undefined") {
            var msg = Array.prototype.map.call(arguments, function(x) {
              return x && x.nodeName ? logNode(x) : x;
            }).join(" ");
            dump("Reader: (Readability) " + msg + "\n");
          }
        };
      } else {
        this.log = function() {
        };
      }
    }
    Readability2.prototype = {
      FLAG_STRIP_UNLIKELYS: 1,
      FLAG_WEIGHT_CLASSES: 2,
      FLAG_CLEAN_CONDITIONALLY: 4,
      // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
      ELEMENT_NODE: 1,
      TEXT_NODE: 3,
      // Max number of nodes supported by this parser. Default: 0 (no limit)
      DEFAULT_MAX_ELEMS_TO_PARSE: 0,
      // The number of top candidates to consider when analysing how
      // tight the competition is among candidates.
      DEFAULT_N_TOP_CANDIDATES: 5,
      // Element tags to score by default.
      DEFAULT_TAGS_TO_SCORE: "section,h2,h3,h4,h5,h6,p,td,pre".toUpperCase().split(","),
      // The default number of chars an article must have in order to return a result
      DEFAULT_CHAR_THRESHOLD: 500,
      // All of the regular expressions in use within readability.
      // Defined up here so we don't instantiate them repeatedly in loops.
      REGEXPS: {
        // NOTE: These two regular expressions are duplicated in
        // Readability-readerable.js. Please keep both copies in sync.
        unlikelyCandidates: /-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,
        okMaybeItsACandidate: /and|article|body|column|content|main|shadow/i,
        positive: /article|body|content|entry|hentry|h-entry|main|page|pagination|post|text|blog|story/i,
        negative: /-ad-|hidden|^hid$| hid$| hid |^hid |banner|combx|comment|com-|contact|foot|footer|footnote|gdpr|masthead|media|meta|outbrain|promo|related|scroll|share|shoutbox|sidebar|skyscraper|sponsor|shopping|tags|tool|widget/i,
        extraneous: /print|archive|comment|discuss|e[\-]?mail|share|reply|all|login|sign|single|utility/i,
        byline: /byline|author|dateline|writtenby|p-author/i,
        replaceFonts: /<(\/?)font[^>]*>/gi,
        normalize: /\s{2,}/g,
        videos: /\/\/(www\.)?((dailymotion|youtube|youtube-nocookie|player\.vimeo|v\.qq)\.com|(archive|upload\.wikimedia)\.org|player\.twitch\.tv)/i,
        shareElements: /(\b|_)(share|sharedaddy)(\b|_)/i,
        nextLink: /(next|weiter|continue|>([^\|]|$)|»([^\|]|$))/i,
        prevLink: /(prev|earl|old|new|<|«)/i,
        tokenize: /\W+/g,
        whitespace: /^\s*$/,
        hasContent: /\S$/,
        hashUrl: /^#.+/,
        srcsetUrl: /(\S+)(\s+[\d.]+[xw])?(\s*(?:,|$))/g,
        b64DataUrl: /^data:\s*([^\s;,]+)\s*;\s*base64\s*,/i,
        // Commas as used in Latin, Sindhi, Chinese and various other scripts.
        // see: https://en.wikipedia.org/wiki/Comma#Comma_variants
        commas: /\u002C|\u060C|\uFE50|\uFE10|\uFE11|\u2E41|\u2E34|\u2E32|\uFF0C/g,
        // See: https://schema.org/Article
        jsonLdArticleTypes: /^Article|AdvertiserContentArticle|NewsArticle|AnalysisNewsArticle|AskPublicNewsArticle|BackgroundNewsArticle|OpinionNewsArticle|ReportageNewsArticle|ReviewNewsArticle|Report|SatiricalArticle|ScholarlyArticle|MedicalScholarlyArticle|SocialMediaPosting|BlogPosting|LiveBlogPosting|DiscussionForumPosting|TechArticle|APIReference$/
      },
      UNLIKELY_ROLES: ["menu", "menubar", "complementary", "navigation", "alert", "alertdialog", "dialog"],
      DIV_TO_P_ELEMS: /* @__PURE__ */ new Set(["BLOCKQUOTE", "DL", "DIV", "IMG", "OL", "P", "PRE", "TABLE", "UL"]),
      ALTER_TO_DIV_EXCEPTIONS: ["DIV", "ARTICLE", "SECTION", "P"],
      PRESENTATIONAL_ATTRIBUTES: ["align", "background", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "hspace", "rules", "style", "valign", "vspace"],
      DEPRECATED_SIZE_ATTRIBUTE_ELEMS: ["TABLE", "TH", "TD", "HR", "PRE"],
      // The commented out elements qualify as phrasing content but tend to be
      // removed by readability when put into paragraphs, so we ignore them here.
      PHRASING_ELEMS: [
        // "CANVAS", "IFRAME", "SVG", "VIDEO",
        "ABBR",
        "AUDIO",
        "B",
        "BDO",
        "BR",
        "BUTTON",
        "CITE",
        "CODE",
        "DATA",
        "DATALIST",
        "DFN",
        "EM",
        "EMBED",
        "I",
        "IMG",
        "INPUT",
        "KBD",
        "LABEL",
        "MARK",
        "MATH",
        "METER",
        "NOSCRIPT",
        "OBJECT",
        "OUTPUT",
        "PROGRESS",
        "Q",
        "RUBY",
        "SAMP",
        "SCRIPT",
        "SELECT",
        "SMALL",
        "SPAN",
        "STRONG",
        "SUB",
        "SUP",
        "TEXTAREA",
        "TIME",
        "VAR",
        "WBR"
      ],
      // These are the classes that readability sets itself.
      CLASSES_TO_PRESERVE: ["page"],
      // These are the list of HTML entities that need to be escaped.
      HTML_ESCAPE_MAP: {
        "lt": "<",
        "gt": ">",
        "amp": "&",
        "quot": '"',
        "apos": "'"
      },
      /**
       * Run any post-process modifications to article content as necessary.
       *
       * @param Element
       * @return void
      **/
      _postProcessContent: function(articleContent) {
        this._fixRelativeUris(articleContent);
        this._simplifyNestedElements(articleContent);
        if (!this._keepClasses) {
          this._cleanClasses(articleContent);
        }
      },
      /**
       * Iterates over a NodeList, calls `filterFn` for each node and removes node
       * if function returned `true`.
       *
       * If function is not passed, removes all the nodes in node list.
       *
       * @param NodeList nodeList The nodes to operate on
       * @param Function filterFn the function to use as a filter
       * @return void
       */
      _removeNodes: function(nodeList, filterFn) {
        if (this._docJSDOMParser && nodeList._isLiveNodeList) {
          throw new Error("Do not pass live node lists to _removeNodes");
        }
        for (var i = nodeList.length - 1; i >= 0; i--) {
          var node = nodeList[i];
          var parentNode = node.parentNode;
          if (parentNode) {
            if (!filterFn || filterFn.call(this, node, i, nodeList)) {
              parentNode.removeChild(node);
            }
          }
        }
      },
      /**
       * Iterates over a NodeList, and calls _setNodeTag for each node.
       *
       * @param NodeList nodeList The nodes to operate on
       * @param String newTagName the new tag name to use
       * @return void
       */
      _replaceNodeTags: function(nodeList, newTagName) {
        if (this._docJSDOMParser && nodeList._isLiveNodeList) {
          throw new Error("Do not pass live node lists to _replaceNodeTags");
        }
        for (const node of nodeList) {
          this._setNodeTag(node, newTagName);
        }
      },
      /**
       * Iterate over a NodeList, which doesn't natively fully implement the Array
       * interface.
       *
       * For convenience, the current object context is applied to the provided
       * iterate function.
       *
       * @param  NodeList nodeList The NodeList.
       * @param  Function fn       The iterate function.
       * @return void
       */
      _forEachNode: function(nodeList, fn) {
        Array.prototype.forEach.call(nodeList, fn, this);
      },
      /**
       * Iterate over a NodeList, and return the first node that passes
       * the supplied test function
       *
       * For convenience, the current object context is applied to the provided
       * test function.
       *
       * @param  NodeList nodeList The NodeList.
       * @param  Function fn       The test function.
       * @return void
       */
      _findNode: function(nodeList, fn) {
        return Array.prototype.find.call(nodeList, fn, this);
      },
      /**
       * Iterate over a NodeList, return true if any of the provided iterate
       * function calls returns true, false otherwise.
       *
       * For convenience, the current object context is applied to the
       * provided iterate function.
       *
       * @param  NodeList nodeList The NodeList.
       * @param  Function fn       The iterate function.
       * @return Boolean
       */
      _someNode: function(nodeList, fn) {
        return Array.prototype.some.call(nodeList, fn, this);
      },
      /**
       * Iterate over a NodeList, return true if all of the provided iterate
       * function calls return true, false otherwise.
       *
       * For convenience, the current object context is applied to the
       * provided iterate function.
       *
       * @param  NodeList nodeList The NodeList.
       * @param  Function fn       The iterate function.
       * @return Boolean
       */
      _everyNode: function(nodeList, fn) {
        return Array.prototype.every.call(nodeList, fn, this);
      },
      /**
       * Concat all nodelists passed as arguments.
       *
       * @return ...NodeList
       * @return Array
       */
      _concatNodeLists: function() {
        var slice = Array.prototype.slice;
        var args = slice.call(arguments);
        var nodeLists = args.map(function(list) {
          return slice.call(list);
        });
        return Array.prototype.concat.apply([], nodeLists);
      },
      _getAllNodesWithTag: function(node, tagNames) {
        if (node.querySelectorAll) {
          return node.querySelectorAll(tagNames.join(","));
        }
        return [].concat.apply([], tagNames.map(function(tag) {
          var collection = node.getElementsByTagName(tag);
          return Array.isArray(collection) ? collection : Array.from(collection);
        }));
      },
      /**
       * Removes the class="" attribute from every element in the given
       * subtree, except those that match CLASSES_TO_PRESERVE and
       * the classesToPreserve array from the options object.
       *
       * @param Element
       * @return void
       */
      _cleanClasses: function(node) {
        var classesToPreserve = this._classesToPreserve;
        var className = (node.getAttribute("class") || "").split(/\s+/).filter(function(cls) {
          return classesToPreserve.indexOf(cls) != -1;
        }).join(" ");
        if (className) {
          node.setAttribute("class", className);
        } else {
          node.removeAttribute("class");
        }
        for (node = node.firstElementChild; node; node = node.nextElementSibling) {
          this._cleanClasses(node);
        }
      },
      /**
       * Converts each <a> and <img> uri in the given element to an absolute URI,
       * ignoring #ref URIs.
       *
       * @param Element
       * @return void
       */
      _fixRelativeUris: function(articleContent) {
        var baseURI = this._doc.baseURI;
        var documentURI = this._doc.documentURI;
        function toAbsoluteURI(uri) {
          if (baseURI == documentURI && uri.charAt(0) == "#") {
            return uri;
          }
          try {
            return new URL(uri, baseURI).href;
          } catch (ex) {
          }
          return uri;
        }
        var links = this._getAllNodesWithTag(articleContent, ["a"]);
        this._forEachNode(links, function(link) {
          var href = link.getAttribute("href");
          if (href) {
            if (href.indexOf("javascript:") === 0) {
              if (link.childNodes.length === 1 && link.childNodes[0].nodeType === this.TEXT_NODE) {
                var text = this._doc.createTextNode(link.textContent);
                link.parentNode.replaceChild(text, link);
              } else {
                var container = this._doc.createElement("span");
                while (link.firstChild) {
                  container.appendChild(link.firstChild);
                }
                link.parentNode.replaceChild(container, link);
              }
            } else {
              link.setAttribute("href", toAbsoluteURI(href));
            }
          }
        });
        var medias = this._getAllNodesWithTag(articleContent, [
          "img",
          "picture",
          "figure",
          "video",
          "audio",
          "source"
        ]);
        this._forEachNode(medias, function(media) {
          var src = media.getAttribute("src");
          var poster = media.getAttribute("poster");
          var srcset = media.getAttribute("srcset");
          if (src) {
            media.setAttribute("src", toAbsoluteURI(src));
          }
          if (poster) {
            media.setAttribute("poster", toAbsoluteURI(poster));
          }
          if (srcset) {
            var newSrcset = srcset.replace(this.REGEXPS.srcsetUrl, function(_, p1, p2, p3) {
              return toAbsoluteURI(p1) + (p2 || "") + p3;
            });
            media.setAttribute("srcset", newSrcset);
          }
        });
      },
      _simplifyNestedElements: function(articleContent) {
        var node = articleContent;
        while (node) {
          if (node.parentNode && ["DIV", "SECTION"].includes(node.tagName) && !(node.id && node.id.startsWith("readability"))) {
            if (this._isElementWithoutContent(node)) {
              node = this._removeAndGetNext(node);
              continue;
            } else if (this._hasSingleTagInsideElement(node, "DIV") || this._hasSingleTagInsideElement(node, "SECTION")) {
              var child = node.children[0];
              for (var i = 0; i < node.attributes.length; i++) {
                child.setAttribute(node.attributes[i].name, node.attributes[i].value);
              }
              node.parentNode.replaceChild(child, node);
              node = child;
              continue;
            }
          }
          node = this._getNextNode(node);
        }
      },
      /**
       * Get the article title as an H1.
       *
       * @return string
       **/
      _getArticleTitle: function() {
        var doc2 = this._doc;
        var curTitle = "";
        var origTitle = "";
        try {
          curTitle = origTitle = doc2.title.trim();
          if (typeof curTitle !== "string")
            curTitle = origTitle = this._getInnerText(doc2.getElementsByTagName("title")[0]);
        } catch (e) {
        }
        var titleHadHierarchicalSeparators = false;
        function wordCount(str) {
          return str.split(/\s+/).length;
        }
        if (/ [\|\-\\\/>»] /.test(curTitle)) {
          titleHadHierarchicalSeparators = / [\\\/>»] /.test(curTitle);
          curTitle = origTitle.replace(/(.*)[\|\-\\\/>»] .*/gi, "$1");
          if (wordCount(curTitle) < 3)
            curTitle = origTitle.replace(/[^\|\-\\\/>»]*[\|\-\\\/>»](.*)/gi, "$1");
        } else if (curTitle.indexOf(": ") !== -1) {
          var headings = this._concatNodeLists(
            doc2.getElementsByTagName("h1"),
            doc2.getElementsByTagName("h2")
          );
          var trimmedTitle = curTitle.trim();
          var match = this._someNode(headings, function(heading) {
            return heading.textContent.trim() === trimmedTitle;
          });
          if (!match) {
            curTitle = origTitle.substring(origTitle.lastIndexOf(":") + 1);
            if (wordCount(curTitle) < 3) {
              curTitle = origTitle.substring(origTitle.indexOf(":") + 1);
            } else if (wordCount(origTitle.substr(0, origTitle.indexOf(":"))) > 5) {
              curTitle = origTitle;
            }
          }
        } else if (curTitle.length > 150 || curTitle.length < 15) {
          var hOnes = doc2.getElementsByTagName("h1");
          if (hOnes.length === 1)
            curTitle = this._getInnerText(hOnes[0]);
        }
        curTitle = curTitle.trim().replace(this.REGEXPS.normalize, " ");
        var curTitleWordCount = wordCount(curTitle);
        if (curTitleWordCount <= 4 && (!titleHadHierarchicalSeparators || curTitleWordCount != wordCount(origTitle.replace(/[\|\-\\\/>»]+/g, "")) - 1)) {
          curTitle = origTitle;
        }
        return curTitle;
      },
      /**
       * Prepare the HTML document for readability to scrape it.
       * This includes things like stripping javascript, CSS, and handling terrible markup.
       *
       * @return void
       **/
      _prepDocument: function() {
        var doc2 = this._doc;
        this._removeNodes(this._getAllNodesWithTag(doc2, ["style"]));
        if (doc2.body) {
          this._replaceBrs(doc2.body);
        }
        this._replaceNodeTags(this._getAllNodesWithTag(doc2, ["font"]), "SPAN");
      },
      /**
       * Finds the next node, starting from the given node, and ignoring
       * whitespace in between. If the given node is an element, the same node is
       * returned.
       */
      _nextNode: function(node) {
        var next = node;
        while (next && next.nodeType != this.ELEMENT_NODE && this.REGEXPS.whitespace.test(next.textContent)) {
          next = next.nextSibling;
        }
        return next;
      },
      /**
       * Replaces 2 or more successive <br> elements with a single <p>.
       * Whitespace between <br> elements are ignored. For example:
       *   <div>foo<br>bar<br> <br><br>abc</div>
       * will become:
       *   <div>foo<br>bar<p>abc</p></div>
       */
      _replaceBrs: function(elem) {
        this._forEachNode(this._getAllNodesWithTag(elem, ["br"]), function(br) {
          var next = br.nextSibling;
          var replaced = false;
          while ((next = this._nextNode(next)) && next.tagName == "BR") {
            replaced = true;
            var brSibling = next.nextSibling;
            next.parentNode.removeChild(next);
            next = brSibling;
          }
          if (replaced) {
            var p = this._doc.createElement("p");
            br.parentNode.replaceChild(p, br);
            next = p.nextSibling;
            while (next) {
              if (next.tagName == "BR") {
                var nextElem = this._nextNode(next.nextSibling);
                if (nextElem && nextElem.tagName == "BR")
                  break;
              }
              if (!this._isPhrasingContent(next))
                break;
              var sibling = next.nextSibling;
              p.appendChild(next);
              next = sibling;
            }
            while (p.lastChild && this._isWhitespace(p.lastChild)) {
              p.removeChild(p.lastChild);
            }
            if (p.parentNode.tagName === "P")
              this._setNodeTag(p.parentNode, "DIV");
          }
        });
      },
      _setNodeTag: function(node, tag) {
        this.log("_setNodeTag", node, tag);
        if (this._docJSDOMParser) {
          node.localName = tag.toLowerCase();
          node.tagName = tag.toUpperCase();
          return node;
        }
        var replacement = node.ownerDocument.createElement(tag);
        while (node.firstChild) {
          replacement.appendChild(node.firstChild);
        }
        node.parentNode.replaceChild(replacement, node);
        if (node.readability)
          replacement.readability = node.readability;
        for (var i = 0; i < node.attributes.length; i++) {
          try {
            replacement.setAttribute(node.attributes[i].name, node.attributes[i].value);
          } catch (ex) {
          }
        }
        return replacement;
      },
      /**
       * Prepare the article node for display. Clean out any inline styles,
       * iframes, forms, strip extraneous <p> tags, etc.
       *
       * @param Element
       * @return void
       **/
      _prepArticle: function(articleContent) {
        this._cleanStyles(articleContent);
        this._markDataTables(articleContent);
        this._fixLazyImages(articleContent);
        this._cleanConditionally(articleContent, "form");
        this._cleanConditionally(articleContent, "fieldset");
        this._clean(articleContent, "object");
        this._clean(articleContent, "embed");
        this._clean(articleContent, "footer");
        this._clean(articleContent, "link");
        this._clean(articleContent, "aside");
        var shareElementThreshold = this.DEFAULT_CHAR_THRESHOLD;
        this._forEachNode(articleContent.children, function(topCandidate) {
          this._cleanMatchedNodes(topCandidate, function(node, matchString) {
            return this.REGEXPS.shareElements.test(matchString) && node.textContent.length < shareElementThreshold;
          });
        });
        this._clean(articleContent, "iframe");
        this._clean(articleContent, "input");
        this._clean(articleContent, "textarea");
        this._clean(articleContent, "select");
        this._clean(articleContent, "button");
        this._cleanHeaders(articleContent);
        this._cleanConditionally(articleContent, "table");
        this._cleanConditionally(articleContent, "ul");
        this._cleanConditionally(articleContent, "div");
        this._replaceNodeTags(this._getAllNodesWithTag(articleContent, ["h1"]), "h2");
        this._removeNodes(this._getAllNodesWithTag(articleContent, ["p"]), function(paragraph) {
          var imgCount = paragraph.getElementsByTagName("img").length;
          var embedCount = paragraph.getElementsByTagName("embed").length;
          var objectCount = paragraph.getElementsByTagName("object").length;
          var iframeCount = paragraph.getElementsByTagName("iframe").length;
          var totalCount = imgCount + embedCount + objectCount + iframeCount;
          return totalCount === 0 && !this._getInnerText(paragraph, false);
        });
        this._forEachNode(this._getAllNodesWithTag(articleContent, ["br"]), function(br) {
          var next = this._nextNode(br.nextSibling);
          if (next && next.tagName == "P")
            br.parentNode.removeChild(br);
        });
        this._forEachNode(this._getAllNodesWithTag(articleContent, ["table"]), function(table) {
          var tbody = this._hasSingleTagInsideElement(table, "TBODY") ? table.firstElementChild : table;
          if (this._hasSingleTagInsideElement(tbody, "TR")) {
            var row = tbody.firstElementChild;
            if (this._hasSingleTagInsideElement(row, "TD")) {
              var cell = row.firstElementChild;
              cell = this._setNodeTag(cell, this._everyNode(cell.childNodes, this._isPhrasingContent) ? "P" : "DIV");
              table.parentNode.replaceChild(cell, table);
            }
          }
        });
      },
      /**
       * Initialize a node with the readability object. Also checks the
       * className/id for special names to add to its score.
       *
       * @param Element
       * @return void
      **/
      _initializeNode: function(node) {
        node.readability = { "contentScore": 0 };
        switch (node.tagName) {
          case "DIV":
            node.readability.contentScore += 5;
            break;
          case "PRE":
          case "TD":
          case "BLOCKQUOTE":
            node.readability.contentScore += 3;
            break;
          case "ADDRESS":
          case "OL":
          case "UL":
          case "DL":
          case "DD":
          case "DT":
          case "LI":
          case "FORM":
            node.readability.contentScore -= 3;
            break;
          case "H1":
          case "H2":
          case "H3":
          case "H4":
          case "H5":
          case "H6":
          case "TH":
            node.readability.contentScore -= 5;
            break;
        }
        node.readability.contentScore += this._getClassWeight(node);
      },
      _removeAndGetNext: function(node) {
        var nextNode = this._getNextNode(node, true);
        node.parentNode.removeChild(node);
        return nextNode;
      },
      /**
       * Traverse the DOM from node to node, starting at the node passed in.
       * Pass true for the second parameter to indicate this node itself
       * (and its kids) are going away, and we want the next node over.
       *
       * Calling this in a loop will traverse the DOM depth-first.
       */
      _getNextNode: function(node, ignoreSelfAndKids) {
        if (!ignoreSelfAndKids && node.firstElementChild) {
          return node.firstElementChild;
        }
        if (node.nextElementSibling) {
          return node.nextElementSibling;
        }
        do {
          node = node.parentNode;
        } while (node && !node.nextElementSibling);
        return node && node.nextElementSibling;
      },
      // compares second text to first one
      // 1 = same text, 0 = completely different text
      // works the way that it splits both texts into words and then finds words that are unique in second text
      // the result is given by the lower length of unique parts
      _textSimilarity: function(textA, textB) {
        var tokensA = textA.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean);
        var tokensB = textB.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean);
        if (!tokensA.length || !tokensB.length) {
          return 0;
        }
        var uniqTokensB = tokensB.filter((token) => !tokensA.includes(token));
        var distanceB = uniqTokensB.join(" ").length / tokensB.join(" ").length;
        return 1 - distanceB;
      },
      _checkByline: function(node, matchString) {
        if (this._articleByline) {
          return false;
        }
        if (node.getAttribute !== void 0) {
          var rel = node.getAttribute("rel");
          var itemprop = node.getAttribute("itemprop");
        }
        if ((rel === "author" || itemprop && itemprop.indexOf("author") !== -1 || this.REGEXPS.byline.test(matchString)) && this._isValidByline(node.textContent)) {
          this._articleByline = node.textContent.trim();
          return true;
        }
        return false;
      },
      _getNodeAncestors: function(node, maxDepth) {
        maxDepth = maxDepth || 0;
        var i = 0, ancestors = [];
        while (node.parentNode) {
          ancestors.push(node.parentNode);
          if (maxDepth && ++i === maxDepth)
            break;
          node = node.parentNode;
        }
        return ancestors;
      },
      /***
       * grabArticle - Using a variety of metrics (content score, classname, element types), find the content that is
       *         most likely to be the stuff a user wants to read. Then return it wrapped up in a div.
       *
       * @param page a document to run upon. Needs to be a full document, complete with body.
       * @return Element
      **/
      _grabArticle: function(page) {
        this.log("**** grabArticle ****");
        var doc2 = this._doc;
        var isPaging = page !== null;
        page = page ? page : this._doc.body;
        if (!page) {
          this.log("No body found in document. Abort.");
          return null;
        }
        var pageCacheHtml = page.innerHTML;
        while (true) {
          this.log("Starting grabArticle loop");
          var stripUnlikelyCandidates = this._flagIsActive(this.FLAG_STRIP_UNLIKELYS);
          var elementsToScore = [];
          var node = this._doc.documentElement;
          let shouldRemoveTitleHeader = true;
          while (node) {
            if (node.tagName === "HTML") {
              this._articleLang = node.getAttribute("lang");
            }
            var matchString = node.className + " " + node.id;
            if (!this._isProbablyVisible(node)) {
              this.log("Removing hidden node - " + matchString);
              node = this._removeAndGetNext(node);
              continue;
            }
            if (node.getAttribute("aria-modal") == "true" && node.getAttribute("role") == "dialog") {
              node = this._removeAndGetNext(node);
              continue;
            }
            if (this._checkByline(node, matchString)) {
              node = this._removeAndGetNext(node);
              continue;
            }
            if (shouldRemoveTitleHeader && this._headerDuplicatesTitle(node)) {
              this.log("Removing header: ", node.textContent.trim(), this._articleTitle.trim());
              shouldRemoveTitleHeader = false;
              node = this._removeAndGetNext(node);
              continue;
            }
            if (stripUnlikelyCandidates) {
              if (this.REGEXPS.unlikelyCandidates.test(matchString) && !this.REGEXPS.okMaybeItsACandidate.test(matchString) && !this._hasAncestorTag(node, "table") && !this._hasAncestorTag(node, "code") && node.tagName !== "BODY" && node.tagName !== "A") {
                this.log("Removing unlikely candidate - " + matchString);
                node = this._removeAndGetNext(node);
                continue;
              }
              if (this.UNLIKELY_ROLES.includes(node.getAttribute("role"))) {
                this.log("Removing content with role " + node.getAttribute("role") + " - " + matchString);
                node = this._removeAndGetNext(node);
                continue;
              }
            }
            if ((node.tagName === "DIV" || node.tagName === "SECTION" || node.tagName === "HEADER" || node.tagName === "H1" || node.tagName === "H2" || node.tagName === "H3" || node.tagName === "H4" || node.tagName === "H5" || node.tagName === "H6") && this._isElementWithoutContent(node)) {
              node = this._removeAndGetNext(node);
              continue;
            }
            if (this.DEFAULT_TAGS_TO_SCORE.indexOf(node.tagName) !== -1) {
              elementsToScore.push(node);
            }
            if (node.tagName === "DIV") {
              var p = null;
              var childNode = node.firstChild;
              while (childNode) {
                var nextSibling = childNode.nextSibling;
                if (this._isPhrasingContent(childNode)) {
                  if (p !== null) {
                    p.appendChild(childNode);
                  } else if (!this._isWhitespace(childNode)) {
                    p = doc2.createElement("p");
                    node.replaceChild(p, childNode);
                    p.appendChild(childNode);
                  }
                } else if (p !== null) {
                  while (p.lastChild && this._isWhitespace(p.lastChild)) {
                    p.removeChild(p.lastChild);
                  }
                  p = null;
                }
                childNode = nextSibling;
              }
              if (this._hasSingleTagInsideElement(node, "P") && this._getLinkDensity(node) < 0.25) {
                var newNode = node.children[0];
                node.parentNode.replaceChild(newNode, node);
                node = newNode;
                elementsToScore.push(node);
              } else if (!this._hasChildBlockElement(node)) {
                node = this._setNodeTag(node, "P");
                elementsToScore.push(node);
              }
            }
            node = this._getNextNode(node);
          }
          var candidates = [];
          this._forEachNode(elementsToScore, function(elementToScore) {
            if (!elementToScore.parentNode || typeof elementToScore.parentNode.tagName === "undefined")
              return;
            var innerText = this._getInnerText(elementToScore);
            if (innerText.length < 25)
              return;
            var ancestors2 = this._getNodeAncestors(elementToScore, 5);
            if (ancestors2.length === 0)
              return;
            var contentScore = 0;
            contentScore += 1;
            contentScore += innerText.split(this.REGEXPS.commas).length;
            contentScore += Math.min(Math.floor(innerText.length / 100), 3);
            this._forEachNode(ancestors2, function(ancestor, level) {
              if (!ancestor.tagName || !ancestor.parentNode || typeof ancestor.parentNode.tagName === "undefined")
                return;
              if (typeof ancestor.readability === "undefined") {
                this._initializeNode(ancestor);
                candidates.push(ancestor);
              }
              if (level === 0)
                var scoreDivider = 1;
              else if (level === 1)
                scoreDivider = 2;
              else
                scoreDivider = level * 3;
              ancestor.readability.contentScore += contentScore / scoreDivider;
            });
          });
          var topCandidates = [];
          for (var c = 0, cl = candidates.length; c < cl; c += 1) {
            var candidate = candidates[c];
            var candidateScore = candidate.readability.contentScore * (1 - this._getLinkDensity(candidate));
            candidate.readability.contentScore = candidateScore;
            this.log("Candidate:", candidate, "with score " + candidateScore);
            for (var t = 0; t < this._nbTopCandidates; t++) {
              var aTopCandidate = topCandidates[t];
              if (!aTopCandidate || candidateScore > aTopCandidate.readability.contentScore) {
                topCandidates.splice(t, 0, candidate);
                if (topCandidates.length > this._nbTopCandidates)
                  topCandidates.pop();
                break;
              }
            }
          }
          var topCandidate = topCandidates[0] || null;
          var neededToCreateTopCandidate = false;
          var parentOfTopCandidate;
          if (topCandidate === null || topCandidate.tagName === "BODY") {
            topCandidate = doc2.createElement("DIV");
            neededToCreateTopCandidate = true;
            while (page.firstChild) {
              this.log("Moving child out:", page.firstChild);
              topCandidate.appendChild(page.firstChild);
            }
            page.appendChild(topCandidate);
            this._initializeNode(topCandidate);
          } else if (topCandidate) {
            var alternativeCandidateAncestors = [];
            for (var i = 1; i < topCandidates.length; i++) {
              if (topCandidates[i].readability.contentScore / topCandidate.readability.contentScore >= 0.75) {
                alternativeCandidateAncestors.push(this._getNodeAncestors(topCandidates[i]));
              }
            }
            var MINIMUM_TOPCANDIDATES = 3;
            if (alternativeCandidateAncestors.length >= MINIMUM_TOPCANDIDATES) {
              parentOfTopCandidate = topCandidate.parentNode;
              while (parentOfTopCandidate.tagName !== "BODY") {
                var listsContainingThisAncestor = 0;
                for (var ancestorIndex = 0; ancestorIndex < alternativeCandidateAncestors.length && listsContainingThisAncestor < MINIMUM_TOPCANDIDATES; ancestorIndex++) {
                  listsContainingThisAncestor += Number(alternativeCandidateAncestors[ancestorIndex].includes(parentOfTopCandidate));
                }
                if (listsContainingThisAncestor >= MINIMUM_TOPCANDIDATES) {
                  topCandidate = parentOfTopCandidate;
                  break;
                }
                parentOfTopCandidate = parentOfTopCandidate.parentNode;
              }
            }
            if (!topCandidate.readability) {
              this._initializeNode(topCandidate);
            }
            parentOfTopCandidate = topCandidate.parentNode;
            var lastScore = topCandidate.readability.contentScore;
            var scoreThreshold = lastScore / 3;
            while (parentOfTopCandidate.tagName !== "BODY") {
              if (!parentOfTopCandidate.readability) {
                parentOfTopCandidate = parentOfTopCandidate.parentNode;
                continue;
              }
              var parentScore = parentOfTopCandidate.readability.contentScore;
              if (parentScore < scoreThreshold)
                break;
              if (parentScore > lastScore) {
                topCandidate = parentOfTopCandidate;
                break;
              }
              lastScore = parentOfTopCandidate.readability.contentScore;
              parentOfTopCandidate = parentOfTopCandidate.parentNode;
            }
            parentOfTopCandidate = topCandidate.parentNode;
            while (parentOfTopCandidate.tagName != "BODY" && parentOfTopCandidate.children.length == 1) {
              topCandidate = parentOfTopCandidate;
              parentOfTopCandidate = topCandidate.parentNode;
            }
            if (!topCandidate.readability) {
              this._initializeNode(topCandidate);
            }
          }
          var articleContent = doc2.createElement("DIV");
          if (isPaging)
            articleContent.id = "readability-content";
          var siblingScoreThreshold = Math.max(10, topCandidate.readability.contentScore * 0.2);
          parentOfTopCandidate = topCandidate.parentNode;
          var siblings = parentOfTopCandidate.children;
          for (var s = 0, sl = siblings.length; s < sl; s++) {
            var sibling = siblings[s];
            var append = false;
            this.log("Looking at sibling node:", sibling, sibling.readability ? "with score " + sibling.readability.contentScore : "");
            this.log("Sibling has score", sibling.readability ? sibling.readability.contentScore : "Unknown");
            if (sibling === topCandidate) {
              append = true;
            } else {
              var contentBonus = 0;
              if (sibling.className === topCandidate.className && topCandidate.className !== "")
                contentBonus += topCandidate.readability.contentScore * 0.2;
              if (sibling.readability && sibling.readability.contentScore + contentBonus >= siblingScoreThreshold) {
                append = true;
              } else if (sibling.nodeName === "P") {
                var linkDensity = this._getLinkDensity(sibling);
                var nodeContent = this._getInnerText(sibling);
                var nodeLength = nodeContent.length;
                if (nodeLength > 80 && linkDensity < 0.25) {
                  append = true;
                } else if (nodeLength < 80 && nodeLength > 0 && linkDensity === 0 && nodeContent.search(/\.( |$)/) !== -1) {
                  append = true;
                }
              }
            }
            if (append) {
              this.log("Appending node:", sibling);
              if (this.ALTER_TO_DIV_EXCEPTIONS.indexOf(sibling.nodeName) === -1) {
                this.log("Altering sibling:", sibling, "to div.");
                sibling = this._setNodeTag(sibling, "DIV");
              }
              articleContent.appendChild(sibling);
              siblings = parentOfTopCandidate.children;
              s -= 1;
              sl -= 1;
            }
          }
          if (this._debug)
            this.log("Article content pre-prep: " + articleContent.innerHTML);
          this._prepArticle(articleContent);
          if (this._debug)
            this.log("Article content post-prep: " + articleContent.innerHTML);
          if (neededToCreateTopCandidate) {
            topCandidate.id = "readability-page-1";
            topCandidate.className = "page";
          } else {
            var div = doc2.createElement("DIV");
            div.id = "readability-page-1";
            div.className = "page";
            while (articleContent.firstChild) {
              div.appendChild(articleContent.firstChild);
            }
            articleContent.appendChild(div);
          }
          if (this._debug)
            this.log("Article content after paging: " + articleContent.innerHTML);
          var parseSuccessful = true;
          var textLength = this._getInnerText(articleContent, true).length;
          if (textLength < this._charThreshold) {
            parseSuccessful = false;
            page.innerHTML = pageCacheHtml;
            if (this._flagIsActive(this.FLAG_STRIP_UNLIKELYS)) {
              this._removeFlag(this.FLAG_STRIP_UNLIKELYS);
              this._attempts.push({ articleContent, textLength });
            } else if (this._flagIsActive(this.FLAG_WEIGHT_CLASSES)) {
              this._removeFlag(this.FLAG_WEIGHT_CLASSES);
              this._attempts.push({ articleContent, textLength });
            } else if (this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY)) {
              this._removeFlag(this.FLAG_CLEAN_CONDITIONALLY);
              this._attempts.push({ articleContent, textLength });
            } else {
              this._attempts.push({ articleContent, textLength });
              this._attempts.sort(function(a, b) {
                return b.textLength - a.textLength;
              });
              if (!this._attempts[0].textLength) {
                return null;
              }
              articleContent = this._attempts[0].articleContent;
              parseSuccessful = true;
            }
          }
          if (parseSuccessful) {
            var ancestors = [parentOfTopCandidate, topCandidate].concat(this._getNodeAncestors(parentOfTopCandidate));
            this._someNode(ancestors, function(ancestor) {
              if (!ancestor.tagName)
                return false;
              var articleDir = ancestor.getAttribute("dir");
              if (articleDir) {
                this._articleDir = articleDir;
                return true;
              }
              return false;
            });
            return articleContent;
          }
        }
      },
      /**
       * Check whether the input string could be a byline.
       * This verifies that the input is a string, and that the length
       * is less than 100 chars.
       *
       * @param possibleByline {string} - a string to check whether its a byline.
       * @return Boolean - whether the input string is a byline.
       */
      _isValidByline: function(byline) {
        if (typeof byline == "string" || byline instanceof String) {
          byline = byline.trim();
          return byline.length > 0 && byline.length < 100;
        }
        return false;
      },
      /**
       * Converts some of the common HTML entities in string to their corresponding characters.
       *
       * @param str {string} - a string to unescape.
       * @return string without HTML entity.
       */
      _unescapeHtmlEntities: function(str) {
        if (!str) {
          return str;
        }
        var htmlEscapeMap = this.HTML_ESCAPE_MAP;
        return str.replace(/&(quot|amp|apos|lt|gt);/g, function(_, tag) {
          return htmlEscapeMap[tag];
        }).replace(/&#(?:x([0-9a-z]{1,4})|([0-9]{1,4}));/gi, function(_, hex, numStr) {
          var num = parseInt(hex || numStr, hex ? 16 : 10);
          return String.fromCharCode(num);
        });
      },
      /**
       * Try to extract metadata from JSON-LD object.
       * For now, only Schema.org objects of type Article or its subtypes are supported.
       * @return Object with any metadata that could be extracted (possibly none)
       */
      _getJSONLD: function(doc2) {
        var scripts = this._getAllNodesWithTag(doc2, ["script"]);
        var metadata;
        this._forEachNode(scripts, function(jsonLdElement) {
          if (!metadata && jsonLdElement.getAttribute("type") === "application/ld+json") {
            try {
              var content = jsonLdElement.textContent.replace(/^\s*<!\[CDATA\[|\]\]>\s*$/g, "");
              var parsed = JSON.parse(content);
              if (!parsed["@context"] || !parsed["@context"].match(/^https?\:\/\/schema\.org\/?$/)) {
                return;
              }
              if (!parsed["@type"] && Array.isArray(parsed["@graph"])) {
                parsed = parsed["@graph"].find(function(it) {
                  return (it["@type"] || "").match(
                    this.REGEXPS.jsonLdArticleTypes
                  );
                });
              }
              if (!parsed || !parsed["@type"] || !parsed["@type"].match(this.REGEXPS.jsonLdArticleTypes)) {
                return;
              }
              metadata = {};
              if (typeof parsed.name === "string" && typeof parsed.headline === "string" && parsed.name !== parsed.headline) {
                var title = this._getArticleTitle();
                var nameMatches = this._textSimilarity(parsed.name, title) > 0.75;
                var headlineMatches = this._textSimilarity(parsed.headline, title) > 0.75;
                if (headlineMatches && !nameMatches) {
                  metadata.title = parsed.headline;
                } else {
                  metadata.title = parsed.name;
                }
              } else if (typeof parsed.name === "string") {
                metadata.title = parsed.name.trim();
              } else if (typeof parsed.headline === "string") {
                metadata.title = parsed.headline.trim();
              }
              if (parsed.author) {
                if (typeof parsed.author.name === "string") {
                  metadata.byline = parsed.author.name.trim();
                } else if (Array.isArray(parsed.author) && parsed.author[0] && typeof parsed.author[0].name === "string") {
                  metadata.byline = parsed.author.filter(function(author) {
                    return author && typeof author.name === "string";
                  }).map(function(author) {
                    return author.name.trim();
                  }).join(", ");
                }
              }
              if (typeof parsed.description === "string") {
                metadata.excerpt = parsed.description.trim();
              }
              if (parsed.publisher && typeof parsed.publisher.name === "string") {
                metadata.siteName = parsed.publisher.name.trim();
              }
              if (typeof parsed.datePublished === "string") {
                metadata.datePublished = parsed.datePublished.trim();
              }
              return;
            } catch (err) {
              this.log(err.message);
            }
          }
        });
        return metadata ? metadata : {};
      },
      /**
       * Attempts to get excerpt and byline metadata for the article.
       *
       * @param {Object} jsonld — object containing any metadata that
       * could be extracted from JSON-LD object.
       *
       * @return Object with optional "excerpt" and "byline" properties
       */
      _getArticleMetadata: function(jsonld) {
        var metadata = {};
        var values = {};
        var metaElements = this._doc.getElementsByTagName("meta");
        var propertyPattern = /\s*(article|dc|dcterm|og|twitter)\s*:\s*(author|creator|description|published_time|title|site_name)\s*/gi;
        var namePattern = /^\s*(?:(dc|dcterm|og|twitter|weibo:(article|webpage))\s*[\.:]\s*)?(author|creator|description|title|site_name)\s*$/i;
        this._forEachNode(metaElements, function(element) {
          var elementName = element.getAttribute("name");
          var elementProperty = element.getAttribute("property");
          var content = element.getAttribute("content");
          if (!content) {
            return;
          }
          var matches = null;
          var name = null;
          if (elementProperty) {
            matches = elementProperty.match(propertyPattern);
            if (matches) {
              name = matches[0].toLowerCase().replace(/\s/g, "");
              values[name] = content.trim();
            }
          }
          if (!matches && elementName && namePattern.test(elementName)) {
            name = elementName;
            if (content) {
              name = name.toLowerCase().replace(/\s/g, "").replace(/\./g, ":");
              values[name] = content.trim();
            }
          }
        });
        metadata.title = jsonld.title || values["dc:title"] || values["dcterm:title"] || values["og:title"] || values["weibo:article:title"] || values["weibo:webpage:title"] || values["title"] || values["twitter:title"];
        if (!metadata.title) {
          metadata.title = this._getArticleTitle();
        }
        metadata.byline = jsonld.byline || values["dc:creator"] || values["dcterm:creator"] || values["author"];
        metadata.excerpt = jsonld.excerpt || values["dc:description"] || values["dcterm:description"] || values["og:description"] || values["weibo:article:description"] || values["weibo:webpage:description"] || values["description"] || values["twitter:description"];
        metadata.siteName = jsonld.siteName || values["og:site_name"];
        metadata.publishedTime = jsonld.datePublished || values["article:published_time"] || null;
        metadata.title = this._unescapeHtmlEntities(metadata.title);
        metadata.byline = this._unescapeHtmlEntities(metadata.byline);
        metadata.excerpt = this._unescapeHtmlEntities(metadata.excerpt);
        metadata.siteName = this._unescapeHtmlEntities(metadata.siteName);
        metadata.publishedTime = this._unescapeHtmlEntities(metadata.publishedTime);
        return metadata;
      },
      /**
       * Check if node is image, or if node contains exactly only one image
       * whether as a direct child or as its descendants.
       *
       * @param Element
      **/
      _isSingleImage: function(node) {
        if (node.tagName === "IMG") {
          return true;
        }
        if (node.children.length !== 1 || node.textContent.trim() !== "") {
          return false;
        }
        return this._isSingleImage(node.children[0]);
      },
      /**
       * Find all <noscript> that are located after <img> nodes, and which contain only one
       * <img> element. Replace the first image with the image from inside the <noscript> tag,
       * and remove the <noscript> tag. This improves the quality of the images we use on
       * some sites (e.g. Medium).
       *
       * @param Element
      **/
      _unwrapNoscriptImages: function(doc2) {
        var imgs = Array.from(doc2.getElementsByTagName("img"));
        this._forEachNode(imgs, function(img) {
          for (var i = 0; i < img.attributes.length; i++) {
            var attr = img.attributes[i];
            switch (attr.name) {
              case "src":
              case "srcset":
              case "data-src":
              case "data-srcset":
                return;
            }
            if (/\.(jpg|jpeg|png|webp)/i.test(attr.value)) {
              return;
            }
          }
          img.parentNode.removeChild(img);
        });
        var noscripts = Array.from(doc2.getElementsByTagName("noscript"));
        this._forEachNode(noscripts, function(noscript) {
          var tmp = doc2.createElement("div");
          tmp.innerHTML = noscript.innerHTML;
          if (!this._isSingleImage(tmp)) {
            return;
          }
          var prevElement = noscript.previousElementSibling;
          if (prevElement && this._isSingleImage(prevElement)) {
            var prevImg = prevElement;
            if (prevImg.tagName !== "IMG") {
              prevImg = prevElement.getElementsByTagName("img")[0];
            }
            var newImg = tmp.getElementsByTagName("img")[0];
            for (var i = 0; i < prevImg.attributes.length; i++) {
              var attr = prevImg.attributes[i];
              if (attr.value === "") {
                continue;
              }
              if (attr.name === "src" || attr.name === "srcset" || /\.(jpg|jpeg|png|webp)/i.test(attr.value)) {
                if (newImg.getAttribute(attr.name) === attr.value) {
                  continue;
                }
                var attrName = attr.name;
                if (newImg.hasAttribute(attrName)) {
                  attrName = "data-old-" + attrName;
                }
                newImg.setAttribute(attrName, attr.value);
              }
            }
            noscript.parentNode.replaceChild(tmp.firstElementChild, prevElement);
          }
        });
      },
      /**
       * Removes script tags from the document.
       *
       * @param Element
      **/
      _removeScripts: function(doc2) {
        this._removeNodes(this._getAllNodesWithTag(doc2, ["script", "noscript"]));
      },
      /**
       * Check if this node has only whitespace and a single element with given tag
       * Returns false if the DIV node contains non-empty text nodes
       * or if it contains no element with given tag or more than 1 element.
       *
       * @param Element
       * @param string tag of child element
      **/
      _hasSingleTagInsideElement: function(element, tag) {
        if (element.children.length != 1 || element.children[0].tagName !== tag) {
          return false;
        }
        return !this._someNode(element.childNodes, function(node) {
          return node.nodeType === this.TEXT_NODE && this.REGEXPS.hasContent.test(node.textContent);
        });
      },
      _isElementWithoutContent: function(node) {
        return node.nodeType === this.ELEMENT_NODE && node.textContent.trim().length == 0 && (node.children.length == 0 || node.children.length == node.getElementsByTagName("br").length + node.getElementsByTagName("hr").length);
      },
      /**
       * Determine whether element has any children block level elements.
       *
       * @param Element
       */
      _hasChildBlockElement: function(element) {
        return this._someNode(element.childNodes, function(node) {
          return this.DIV_TO_P_ELEMS.has(node.tagName) || this._hasChildBlockElement(node);
        });
      },
      /***
       * Determine if a node qualifies as phrasing content.
       * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content
      **/
      _isPhrasingContent: function(node) {
        return node.nodeType === this.TEXT_NODE || this.PHRASING_ELEMS.indexOf(node.tagName) !== -1 || (node.tagName === "A" || node.tagName === "DEL" || node.tagName === "INS") && this._everyNode(node.childNodes, this._isPhrasingContent);
      },
      _isWhitespace: function(node) {
        return node.nodeType === this.TEXT_NODE && node.textContent.trim().length === 0 || node.nodeType === this.ELEMENT_NODE && node.tagName === "BR";
      },
      /**
       * Get the inner text of a node - cross browser compatibly.
       * This also strips out any excess whitespace to be found.
       *
       * @param Element
       * @param Boolean normalizeSpaces (default: true)
       * @return string
      **/
      _getInnerText: function(e, normalizeSpaces) {
        normalizeSpaces = typeof normalizeSpaces === "undefined" ? true : normalizeSpaces;
        var textContent = e.textContent.trim();
        if (normalizeSpaces) {
          return textContent.replace(this.REGEXPS.normalize, " ");
        }
        return textContent;
      },
      /**
       * Get the number of times a string s appears in the node e.
       *
       * @param Element
       * @param string - what to split on. Default is ","
       * @return number (integer)
      **/
      _getCharCount: function(e, s) {
        s = s || ",";
        return this._getInnerText(e).split(s).length - 1;
      },
      /**
       * Remove the style attribute on every e and under.
       * TODO: Test if getElementsByTagName(*) is faster.
       *
       * @param Element
       * @return void
      **/
      _cleanStyles: function(e) {
        if (!e || e.tagName.toLowerCase() === "svg")
          return;
        for (var i = 0; i < this.PRESENTATIONAL_ATTRIBUTES.length; i++) {
          e.removeAttribute(this.PRESENTATIONAL_ATTRIBUTES[i]);
        }
        if (this.DEPRECATED_SIZE_ATTRIBUTE_ELEMS.indexOf(e.tagName) !== -1) {
          e.removeAttribute("width");
          e.removeAttribute("height");
        }
        var cur = e.firstElementChild;
        while (cur !== null) {
          this._cleanStyles(cur);
          cur = cur.nextElementSibling;
        }
      },
      /**
       * Get the density of links as a percentage of the content
       * This is the amount of text that is inside a link divided by the total text in the node.
       *
       * @param Element
       * @return number (float)
      **/
      _getLinkDensity: function(element) {
        var textLength = this._getInnerText(element).length;
        if (textLength === 0)
          return 0;
        var linkLength = 0;
        this._forEachNode(element.getElementsByTagName("a"), function(linkNode) {
          var href = linkNode.getAttribute("href");
          var coefficient = href && this.REGEXPS.hashUrl.test(href) ? 0.3 : 1;
          linkLength += this._getInnerText(linkNode).length * coefficient;
        });
        return linkLength / textLength;
      },
      /**
       * Get an elements class/id weight. Uses regular expressions to tell if this
       * element looks good or bad.
       *
       * @param Element
       * @return number (Integer)
      **/
      _getClassWeight: function(e) {
        if (!this._flagIsActive(this.FLAG_WEIGHT_CLASSES))
          return 0;
        var weight = 0;
        if (typeof e.className === "string" && e.className !== "") {
          if (this.REGEXPS.negative.test(e.className))
            weight -= 25;
          if (this.REGEXPS.positive.test(e.className))
            weight += 25;
        }
        if (typeof e.id === "string" && e.id !== "") {
          if (this.REGEXPS.negative.test(e.id))
            weight -= 25;
          if (this.REGEXPS.positive.test(e.id))
            weight += 25;
        }
        return weight;
      },
      /**
       * Clean a node of all elements of type "tag".
       * (Unless it's a youtube/vimeo video. People love movies.)
       *
       * @param Element
       * @param string tag to clean
       * @return void
       **/
      _clean: function(e, tag) {
        var isEmbed = ["object", "embed", "iframe"].indexOf(tag) !== -1;
        this._removeNodes(this._getAllNodesWithTag(e, [tag]), function(element) {
          if (isEmbed) {
            for (var i = 0; i < element.attributes.length; i++) {
              if (this._allowedVideoRegex.test(element.attributes[i].value)) {
                return false;
              }
            }
            if (element.tagName === "object" && this._allowedVideoRegex.test(element.innerHTML)) {
              return false;
            }
          }
          return true;
        });
      },
      /**
       * Check if a given node has one of its ancestor tag name matching the
       * provided one.
       * @param  HTMLElement node
       * @param  String      tagName
       * @param  Number      maxDepth
       * @param  Function    filterFn a filter to invoke to determine whether this node 'counts'
       * @return Boolean
       */
      _hasAncestorTag: function(node, tagName, maxDepth, filterFn) {
        maxDepth = maxDepth || 3;
        tagName = tagName.toUpperCase();
        var depth = 0;
        while (node.parentNode) {
          if (maxDepth > 0 && depth > maxDepth)
            return false;
          if (node.parentNode.tagName === tagName && (!filterFn || filterFn(node.parentNode)))
            return true;
          node = node.parentNode;
          depth++;
        }
        return false;
      },
      /**
       * Return an object indicating how many rows and columns this table has.
       */
      _getRowAndColumnCount: function(table) {
        var rows = 0;
        var columns = 0;
        var trs = table.getElementsByTagName("tr");
        for (var i = 0; i < trs.length; i++) {
          var rowspan = trs[i].getAttribute("rowspan") || 0;
          if (rowspan) {
            rowspan = parseInt(rowspan, 10);
          }
          rows += rowspan || 1;
          var columnsInThisRow = 0;
          var cells = trs[i].getElementsByTagName("td");
          for (var j = 0; j < cells.length; j++) {
            var colspan = cells[j].getAttribute("colspan") || 0;
            if (colspan) {
              colspan = parseInt(colspan, 10);
            }
            columnsInThisRow += colspan || 1;
          }
          columns = Math.max(columns, columnsInThisRow);
        }
        return { rows, columns };
      },
      /**
       * Look for 'data' (as opposed to 'layout') tables, for which we use
       * similar checks as
       * https://searchfox.org/mozilla-central/rev/f82d5c549f046cb64ce5602bfd894b7ae807c8f8/accessible/generic/TableAccessible.cpp#19
       */
      _markDataTables: function(root) {
        var tables = root.getElementsByTagName("table");
        for (var i = 0; i < tables.length; i++) {
          var table = tables[i];
          var role = table.getAttribute("role");
          if (role == "presentation") {
            table._readabilityDataTable = false;
            continue;
          }
          var datatable = table.getAttribute("datatable");
          if (datatable == "0") {
            table._readabilityDataTable = false;
            continue;
          }
          var summary = table.getAttribute("summary");
          if (summary) {
            table._readabilityDataTable = true;
            continue;
          }
          var caption = table.getElementsByTagName("caption")[0];
          if (caption && caption.childNodes.length > 0) {
            table._readabilityDataTable = true;
            continue;
          }
          var dataTableDescendants = ["col", "colgroup", "tfoot", "thead", "th"];
          var descendantExists = function(tag) {
            return !!table.getElementsByTagName(tag)[0];
          };
          if (dataTableDescendants.some(descendantExists)) {
            this.log("Data table because found data-y descendant");
            table._readabilityDataTable = true;
            continue;
          }
          if (table.getElementsByTagName("table")[0]) {
            table._readabilityDataTable = false;
            continue;
          }
          var sizeInfo = this._getRowAndColumnCount(table);
          if (sizeInfo.rows >= 10 || sizeInfo.columns > 4) {
            table._readabilityDataTable = true;
            continue;
          }
          table._readabilityDataTable = sizeInfo.rows * sizeInfo.columns > 10;
        }
      },
      /* convert images and figures that have properties like data-src into images that can be loaded without JS */
      _fixLazyImages: function(root) {
        this._forEachNode(this._getAllNodesWithTag(root, ["img", "picture", "figure"]), function(elem) {
          if (elem.src && this.REGEXPS.b64DataUrl.test(elem.src)) {
            var parts = this.REGEXPS.b64DataUrl.exec(elem.src);
            if (parts[1] === "image/svg+xml") {
              return;
            }
            var srcCouldBeRemoved = false;
            for (var i = 0; i < elem.attributes.length; i++) {
              var attr = elem.attributes[i];
              if (attr.name === "src") {
                continue;
              }
              if (/\.(jpg|jpeg|png|webp)/i.test(attr.value)) {
                srcCouldBeRemoved = true;
                break;
              }
            }
            if (srcCouldBeRemoved) {
              var b64starts = elem.src.search(/base64\s*/i) + 7;
              var b64length = elem.src.length - b64starts;
              if (b64length < 133) {
                elem.removeAttribute("src");
              }
            }
          }
          if ((elem.src || elem.srcset && elem.srcset != "null") && elem.className.toLowerCase().indexOf("lazy") === -1) {
            return;
          }
          for (var j = 0; j < elem.attributes.length; j++) {
            attr = elem.attributes[j];
            if (attr.name === "src" || attr.name === "srcset" || attr.name === "alt") {
              continue;
            }
            var copyTo = null;
            if (/\.(jpg|jpeg|png|webp)\s+\d/.test(attr.value)) {
              copyTo = "srcset";
            } else if (/^\s*\S+\.(jpg|jpeg|png|webp)\S*\s*$/.test(attr.value)) {
              copyTo = "src";
            }
            if (copyTo) {
              if (elem.tagName === "IMG" || elem.tagName === "PICTURE") {
                elem.setAttribute(copyTo, attr.value);
              } else if (elem.tagName === "FIGURE" && !this._getAllNodesWithTag(elem, ["img", "picture"]).length) {
                var img = this._doc.createElement("img");
                img.setAttribute(copyTo, attr.value);
                elem.appendChild(img);
              }
            }
          }
        });
      },
      _getTextDensity: function(e, tags) {
        var textLength = this._getInnerText(e, true).length;
        if (textLength === 0) {
          return 0;
        }
        var childrenLength = 0;
        var children = this._getAllNodesWithTag(e, tags);
        this._forEachNode(children, (child) => childrenLength += this._getInnerText(child, true).length);
        return childrenLength / textLength;
      },
      /**
       * Clean an element of all tags of type "tag" if they look fishy.
       * "Fishy" is an algorithm based on content length, classnames, link density, number of images & embeds, etc.
       *
       * @return void
       **/
      _cleanConditionally: function(e, tag) {
        if (!this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY))
          return;
        this._removeNodes(this._getAllNodesWithTag(e, [tag]), function(node) {
          var isDataTable = function(t) {
            return t._readabilityDataTable;
          };
          var isList = tag === "ul" || tag === "ol";
          if (!isList) {
            var listLength = 0;
            var listNodes = this._getAllNodesWithTag(node, ["ul", "ol"]);
            this._forEachNode(listNodes, (list) => listLength += this._getInnerText(list).length);
            isList = listLength / this._getInnerText(node).length > 0.9;
          }
          if (tag === "table" && isDataTable(node)) {
            return false;
          }
          if (this._hasAncestorTag(node, "table", -1, isDataTable)) {
            return false;
          }
          if (this._hasAncestorTag(node, "code")) {
            return false;
          }
          var weight = this._getClassWeight(node);
          this.log("Cleaning Conditionally", node);
          var contentScore = 0;
          if (weight + contentScore < 0) {
            return true;
          }
          if (this._getCharCount(node, ",") < 10) {
            var p = node.getElementsByTagName("p").length;
            var img = node.getElementsByTagName("img").length;
            var li = node.getElementsByTagName("li").length - 100;
            var input = node.getElementsByTagName("input").length;
            var headingDensity = this._getTextDensity(node, ["h1", "h2", "h3", "h4", "h5", "h6"]);
            var embedCount = 0;
            var embeds = this._getAllNodesWithTag(node, ["object", "embed", "iframe"]);
            for (var i = 0; i < embeds.length; i++) {
              for (var j = 0; j < embeds[i].attributes.length; j++) {
                if (this._allowedVideoRegex.test(embeds[i].attributes[j].value)) {
                  return false;
                }
              }
              if (embeds[i].tagName === "object" && this._allowedVideoRegex.test(embeds[i].innerHTML)) {
                return false;
              }
              embedCount++;
            }
            var linkDensity = this._getLinkDensity(node);
            var contentLength = this._getInnerText(node).length;
            var haveToRemove = img > 1 && p / img < 0.5 && !this._hasAncestorTag(node, "figure") || !isList && li > p || input > Math.floor(p / 3) || !isList && headingDensity < 0.9 && contentLength < 25 && (img === 0 || img > 2) && !this._hasAncestorTag(node, "figure") || !isList && weight < 25 && linkDensity > 0.2 || weight >= 25 && linkDensity > 0.5 || (embedCount === 1 && contentLength < 75 || embedCount > 1);
            if (isList && haveToRemove) {
              for (var x = 0; x < node.children.length; x++) {
                let child = node.children[x];
                if (child.children.length > 1) {
                  return haveToRemove;
                }
              }
              let li_count = node.getElementsByTagName("li").length;
              if (img == li_count) {
                return false;
              }
            }
            return haveToRemove;
          }
          return false;
        });
      },
      /**
       * Clean out elements that match the specified conditions
       *
       * @param Element
       * @param Function determines whether a node should be removed
       * @return void
       **/
      _cleanMatchedNodes: function(e, filter) {
        var endOfSearchMarkerNode = this._getNextNode(e, true);
        var next = this._getNextNode(e);
        while (next && next != endOfSearchMarkerNode) {
          if (filter.call(this, next, next.className + " " + next.id)) {
            next = this._removeAndGetNext(next);
          } else {
            next = this._getNextNode(next);
          }
        }
      },
      /**
       * Clean out spurious headers from an Element.
       *
       * @param Element
       * @return void
      **/
      _cleanHeaders: function(e) {
        let headingNodes = this._getAllNodesWithTag(e, ["h1", "h2"]);
        this._removeNodes(headingNodes, function(node) {
          let shouldRemove = this._getClassWeight(node) < 0;
          if (shouldRemove) {
            this.log("Removing header with low class weight:", node);
          }
          return shouldRemove;
        });
      },
      /**
       * Check if this node is an H1 or H2 element whose content is mostly
       * the same as the article title.
       *
       * @param Element  the node to check.
       * @return boolean indicating whether this is a title-like header.
       */
      _headerDuplicatesTitle: function(node) {
        if (node.tagName != "H1" && node.tagName != "H2") {
          return false;
        }
        var heading = this._getInnerText(node, false);
        this.log("Evaluating similarity of header:", heading, this._articleTitle);
        return this._textSimilarity(this._articleTitle, heading) > 0.75;
      },
      _flagIsActive: function(flag) {
        return (this._flags & flag) > 0;
      },
      _removeFlag: function(flag) {
        this._flags = this._flags & ~flag;
      },
      _isProbablyVisible: function(node) {
        return (!node.style || node.style.display != "none") && (!node.style || node.style.visibility != "hidden") && !node.hasAttribute("hidden") && (!node.hasAttribute("aria-hidden") || node.getAttribute("aria-hidden") != "true" || node.className && node.className.indexOf && node.className.indexOf("fallback-image") !== -1);
      },
      /**
       * Runs readability.
       *
       * Workflow:
       *  1. Prep the document by removing script tags, css, etc.
       *  2. Build readability's DOM tree.
       *  3. Grab the article content from the current dom tree.
       *  4. Replace the current DOM tree with the new one.
       *  5. Read peacefully.
       *
       * @return void
       **/
      parse: function() {
        if (this._maxElemsToParse > 0) {
          var numTags = this._doc.getElementsByTagName("*").length;
          if (numTags > this._maxElemsToParse) {
            throw new Error("Aborting parsing document; " + numTags + " elements found");
          }
        }
        this._unwrapNoscriptImages(this._doc);
        var jsonLd = this._disableJSONLD ? {} : this._getJSONLD(this._doc);
        this._removeScripts(this._doc);
        this._prepDocument();
        var metadata = this._getArticleMetadata(jsonLd);
        this._articleTitle = metadata.title;
        var articleContent = this._grabArticle();
        if (!articleContent)
          return null;
        this.log("Grabbed: " + articleContent.innerHTML);
        this._postProcessContent(articleContent);
        if (!metadata.excerpt) {
          var paragraphs = articleContent.getElementsByTagName("p");
          if (paragraphs.length > 0) {
            metadata.excerpt = paragraphs[0].textContent.trim();
          }
        }
        var textContent = articleContent.textContent;
        return {
          title: this._articleTitle,
          byline: metadata.byline || this._articleByline,
          dir: this._articleDir,
          lang: this._articleLang,
          content: this._serializer(articleContent),
          textContent,
          length: textContent.length,
          excerpt: metadata.excerpt,
          siteName: metadata.siteName || this._articleSiteName,
          publishedTime: metadata.publishedTime
        };
      }
    };
    if (typeof module2 === "object") {
      module2.exports = Readability2;
    }
  }
});

// Readability-readerable.js
var require_Readability_readerable = __commonJS({
  "Readability-readerable.js"(exports2, module2) {
    var REGEXPS = {
      // NOTE: These two regular expressions are duplicated in
      // Readability.js. Please keep both copies in sync.
      unlikelyCandidates: /-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,
      okMaybeItsACandidate: /and|article|body|column|content|main|shadow/i
    };
    function isNodeVisible(node) {
      return (!node.style || node.style.display != "none") && !node.hasAttribute("hidden") && (!node.hasAttribute("aria-hidden") || node.getAttribute("aria-hidden") != "true" || node.className && node.className.indexOf && node.className.indexOf("fallback-image") !== -1);
    }
    function isProbablyReaderable2(doc2, options = {}) {
      if (typeof options == "function") {
        options = { visibilityChecker: options };
      }
      var defaultOptions = { minScore: 20, minContentLength: 140, visibilityChecker: isNodeVisible };
      options = Object.assign(defaultOptions, options);
      var nodes = doc2.querySelectorAll("p, pre, article");
      var brNodes = doc2.querySelectorAll("div > br");
      if (brNodes.length) {
        var set = new Set(nodes);
        [].forEach.call(brNodes, function(node) {
          set.add(node.parentNode);
        });
        nodes = Array.from(set);
      }
      var score = 0;
      return [].some.call(nodes, function(node) {
        if (!options.visibilityChecker(node)) {
          return false;
        }
        var matchString = node.className + " " + node.id;
        if (REGEXPS.unlikelyCandidates.test(matchString) && !REGEXPS.okMaybeItsACandidate.test(matchString)) {
          return false;
        }
        if (node.matches("li p")) {
          return false;
        }
        var textContentLength = node.textContent.trim().length;
        if (textContentLength < options.minContentLength) {
          return false;
        }
        score += Math.sqrt(textContentLength - options.minContentLength);
        if (score > options.minScore) {
          return true;
        }
        return false;
      });
    }
    if (typeof module2 === "object") {
      module2.exports = isProbablyReaderable2;
    }
  }
});

// JSDOMParser.js
var require_JSDOMParser = __commonJS({
  "JSDOMParser.js"(exports2, module2) {
    (function(global) {
      var entityTable = {
        "lt": "<",
        "gt": ">",
        "amp": "&",
        "quot": '"',
        "apos": "'"
      };
      var reverseEntityTable = {
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&apos;"
      };
      function encodeTextContentHTML(s) {
        return s.replace(/[&<>]/g, function(x) {
          return reverseEntityTable[x];
        });
      }
      function encodeHTML(s) {
        return s.replace(/[&<>'"]/g, function(x) {
          return reverseEntityTable[x];
        });
      }
      function decodeHTML(str) {
        return str.replace(/&(quot|amp|apos|lt|gt);/g, function(match, tag) {
          return entityTable[tag];
        }).replace(/&#(?:x([0-9a-z]{1,4})|([0-9]{1,4}));/gi, function(match, hex, numStr) {
          var num = parseInt(hex || numStr, hex ? 16 : 10);
          return String.fromCharCode(num);
        });
      }
      var styleMap = {
        "alignmentBaseline": "alignment-baseline",
        "background": "background",
        "backgroundAttachment": "background-attachment",
        "backgroundClip": "background-clip",
        "backgroundColor": "background-color",
        "backgroundImage": "background-image",
        "backgroundOrigin": "background-origin",
        "backgroundPosition": "background-position",
        "backgroundPositionX": "background-position-x",
        "backgroundPositionY": "background-position-y",
        "backgroundRepeat": "background-repeat",
        "backgroundRepeatX": "background-repeat-x",
        "backgroundRepeatY": "background-repeat-y",
        "backgroundSize": "background-size",
        "baselineShift": "baseline-shift",
        "border": "border",
        "borderBottom": "border-bottom",
        "borderBottomColor": "border-bottom-color",
        "borderBottomLeftRadius": "border-bottom-left-radius",
        "borderBottomRightRadius": "border-bottom-right-radius",
        "borderBottomStyle": "border-bottom-style",
        "borderBottomWidth": "border-bottom-width",
        "borderCollapse": "border-collapse",
        "borderColor": "border-color",
        "borderImage": "border-image",
        "borderImageOutset": "border-image-outset",
        "borderImageRepeat": "border-image-repeat",
        "borderImageSlice": "border-image-slice",
        "borderImageSource": "border-image-source",
        "borderImageWidth": "border-image-width",
        "borderLeft": "border-left",
        "borderLeftColor": "border-left-color",
        "borderLeftStyle": "border-left-style",
        "borderLeftWidth": "border-left-width",
        "borderRadius": "border-radius",
        "borderRight": "border-right",
        "borderRightColor": "border-right-color",
        "borderRightStyle": "border-right-style",
        "borderRightWidth": "border-right-width",
        "borderSpacing": "border-spacing",
        "borderStyle": "border-style",
        "borderTop": "border-top",
        "borderTopColor": "border-top-color",
        "borderTopLeftRadius": "border-top-left-radius",
        "borderTopRightRadius": "border-top-right-radius",
        "borderTopStyle": "border-top-style",
        "borderTopWidth": "border-top-width",
        "borderWidth": "border-width",
        "bottom": "bottom",
        "boxShadow": "box-shadow",
        "boxSizing": "box-sizing",
        "captionSide": "caption-side",
        "clear": "clear",
        "clip": "clip",
        "clipPath": "clip-path",
        "clipRule": "clip-rule",
        "color": "color",
        "colorInterpolation": "color-interpolation",
        "colorInterpolationFilters": "color-interpolation-filters",
        "colorProfile": "color-profile",
        "colorRendering": "color-rendering",
        "content": "content",
        "counterIncrement": "counter-increment",
        "counterReset": "counter-reset",
        "cursor": "cursor",
        "direction": "direction",
        "display": "display",
        "dominantBaseline": "dominant-baseline",
        "emptyCells": "empty-cells",
        "enableBackground": "enable-background",
        "fill": "fill",
        "fillOpacity": "fill-opacity",
        "fillRule": "fill-rule",
        "filter": "filter",
        "cssFloat": "float",
        "floodColor": "flood-color",
        "floodOpacity": "flood-opacity",
        "font": "font",
        "fontFamily": "font-family",
        "fontSize": "font-size",
        "fontStretch": "font-stretch",
        "fontStyle": "font-style",
        "fontVariant": "font-variant",
        "fontWeight": "font-weight",
        "glyphOrientationHorizontal": "glyph-orientation-horizontal",
        "glyphOrientationVertical": "glyph-orientation-vertical",
        "height": "height",
        "imageRendering": "image-rendering",
        "kerning": "kerning",
        "left": "left",
        "letterSpacing": "letter-spacing",
        "lightingColor": "lighting-color",
        "lineHeight": "line-height",
        "listStyle": "list-style",
        "listStyleImage": "list-style-image",
        "listStylePosition": "list-style-position",
        "listStyleType": "list-style-type",
        "margin": "margin",
        "marginBottom": "margin-bottom",
        "marginLeft": "margin-left",
        "marginRight": "margin-right",
        "marginTop": "margin-top",
        "marker": "marker",
        "markerEnd": "marker-end",
        "markerMid": "marker-mid",
        "markerStart": "marker-start",
        "mask": "mask",
        "maxHeight": "max-height",
        "maxWidth": "max-width",
        "minHeight": "min-height",
        "minWidth": "min-width",
        "opacity": "opacity",
        "orphans": "orphans",
        "outline": "outline",
        "outlineColor": "outline-color",
        "outlineOffset": "outline-offset",
        "outlineStyle": "outline-style",
        "outlineWidth": "outline-width",
        "overflow": "overflow",
        "overflowX": "overflow-x",
        "overflowY": "overflow-y",
        "padding": "padding",
        "paddingBottom": "padding-bottom",
        "paddingLeft": "padding-left",
        "paddingRight": "padding-right",
        "paddingTop": "padding-top",
        "page": "page",
        "pageBreakAfter": "page-break-after",
        "pageBreakBefore": "page-break-before",
        "pageBreakInside": "page-break-inside",
        "pointerEvents": "pointer-events",
        "position": "position",
        "quotes": "quotes",
        "resize": "resize",
        "right": "right",
        "shapeRendering": "shape-rendering",
        "size": "size",
        "speak": "speak",
        "src": "src",
        "stopColor": "stop-color",
        "stopOpacity": "stop-opacity",
        "stroke": "stroke",
        "strokeDasharray": "stroke-dasharray",
        "strokeDashoffset": "stroke-dashoffset",
        "strokeLinecap": "stroke-linecap",
        "strokeLinejoin": "stroke-linejoin",
        "strokeMiterlimit": "stroke-miterlimit",
        "strokeOpacity": "stroke-opacity",
        "strokeWidth": "stroke-width",
        "tableLayout": "table-layout",
        "textAlign": "text-align",
        "textAnchor": "text-anchor",
        "textDecoration": "text-decoration",
        "textIndent": "text-indent",
        "textLineThrough": "text-line-through",
        "textLineThroughColor": "text-line-through-color",
        "textLineThroughMode": "text-line-through-mode",
        "textLineThroughStyle": "text-line-through-style",
        "textLineThroughWidth": "text-line-through-width",
        "textOverflow": "text-overflow",
        "textOverline": "text-overline",
        "textOverlineColor": "text-overline-color",
        "textOverlineMode": "text-overline-mode",
        "textOverlineStyle": "text-overline-style",
        "textOverlineWidth": "text-overline-width",
        "textRendering": "text-rendering",
        "textShadow": "text-shadow",
        "textTransform": "text-transform",
        "textUnderline": "text-underline",
        "textUnderlineColor": "text-underline-color",
        "textUnderlineMode": "text-underline-mode",
        "textUnderlineStyle": "text-underline-style",
        "textUnderlineWidth": "text-underline-width",
        "top": "top",
        "unicodeBidi": "unicode-bidi",
        "unicodeRange": "unicode-range",
        "vectorEffect": "vector-effect",
        "verticalAlign": "vertical-align",
        "visibility": "visibility",
        "whiteSpace": "white-space",
        "widows": "widows",
        "width": "width",
        "wordBreak": "word-break",
        "wordSpacing": "word-spacing",
        "wordWrap": "word-wrap",
        "writingMode": "writing-mode",
        "zIndex": "z-index",
        "zoom": "zoom"
      };
      var voidElems = {
        "area": true,
        "base": true,
        "br": true,
        "col": true,
        "command": true,
        "embed": true,
        "hr": true,
        "img": true,
        "input": true,
        "link": true,
        "meta": true,
        "param": true,
        "source": true,
        "wbr": true
      };
      var whitespace = [" ", "	", "\n", "\r"];
      var nodeTypes = {
        ELEMENT_NODE: 1,
        ATTRIBUTE_NODE: 2,
        TEXT_NODE: 3,
        CDATA_SECTION_NODE: 4,
        ENTITY_REFERENCE_NODE: 5,
        ENTITY_NODE: 6,
        PROCESSING_INSTRUCTION_NODE: 7,
        COMMENT_NODE: 8,
        DOCUMENT_NODE: 9,
        DOCUMENT_TYPE_NODE: 10,
        DOCUMENT_FRAGMENT_NODE: 11,
        NOTATION_NODE: 12
      };
      function getElementsByTagName(tag) {
        tag = tag.toUpperCase();
        var elems = [];
        var allTags = tag === "*";
        function getElems(node) {
          var length = node.children.length;
          for (var i = 0; i < length; i++) {
            var child = node.children[i];
            if (allTags || child.tagName === tag)
              elems.push(child);
            getElems(child);
          }
        }
        getElems(this);
        elems._isLiveNodeList = true;
        return elems;
      }
      var Node = function() {
      };
      Node.prototype = {
        attributes: null,
        childNodes: null,
        localName: null,
        nodeName: null,
        parentNode: null,
        textContent: null,
        nextSibling: null,
        previousSibling: null,
        get firstChild() {
          return this.childNodes[0] || null;
        },
        get firstElementChild() {
          return this.children[0] || null;
        },
        get lastChild() {
          return this.childNodes[this.childNodes.length - 1] || null;
        },
        get lastElementChild() {
          return this.children[this.children.length - 1] || null;
        },
        appendChild: function(child) {
          if (child.parentNode) {
            child.parentNode.removeChild(child);
          }
          var last = this.lastChild;
          if (last)
            last.nextSibling = child;
          child.previousSibling = last;
          if (child.nodeType === Node.ELEMENT_NODE) {
            child.previousElementSibling = this.children[this.children.length - 1] || null;
            this.children.push(child);
            child.previousElementSibling && (child.previousElementSibling.nextElementSibling = child);
          }
          this.childNodes.push(child);
          child.parentNode = this;
        },
        removeChild: function(child) {
          var childNodes = this.childNodes;
          var childIndex = childNodes.indexOf(child);
          if (childIndex === -1) {
            throw "removeChild: node not found";
          } else {
            child.parentNode = null;
            var prev = child.previousSibling;
            var next = child.nextSibling;
            if (prev)
              prev.nextSibling = next;
            if (next)
              next.previousSibling = prev;
            if (child.nodeType === Node.ELEMENT_NODE) {
              prev = child.previousElementSibling;
              next = child.nextElementSibling;
              if (prev)
                prev.nextElementSibling = next;
              if (next)
                next.previousElementSibling = prev;
              this.children.splice(this.children.indexOf(child), 1);
            }
            child.previousSibling = child.nextSibling = null;
            child.previousElementSibling = child.nextElementSibling = null;
            return childNodes.splice(childIndex, 1)[0];
          }
        },
        replaceChild: function(newNode, oldNode) {
          var childNodes = this.childNodes;
          var childIndex = childNodes.indexOf(oldNode);
          if (childIndex === -1) {
            throw "replaceChild: node not found";
          } else {
            if (newNode.parentNode)
              newNode.parentNode.removeChild(newNode);
            childNodes[childIndex] = newNode;
            newNode.nextSibling = oldNode.nextSibling;
            newNode.previousSibling = oldNode.previousSibling;
            if (newNode.nextSibling)
              newNode.nextSibling.previousSibling = newNode;
            if (newNode.previousSibling)
              newNode.previousSibling.nextSibling = newNode;
            newNode.parentNode = this;
            if (newNode.nodeType === Node.ELEMENT_NODE) {
              if (oldNode.nodeType === Node.ELEMENT_NODE) {
                newNode.previousElementSibling = oldNode.previousElementSibling;
                newNode.nextElementSibling = oldNode.nextElementSibling;
                if (newNode.previousElementSibling)
                  newNode.previousElementSibling.nextElementSibling = newNode;
                if (newNode.nextElementSibling)
                  newNode.nextElementSibling.previousElementSibling = newNode;
                this.children[this.children.indexOf(oldNode)] = newNode;
              } else {
                newNode.previousElementSibling = function() {
                  for (var i = childIndex - 1; i >= 0; i--) {
                    if (childNodes[i].nodeType === Node.ELEMENT_NODE)
                      return childNodes[i];
                  }
                  return null;
                }();
                if (newNode.previousElementSibling) {
                  newNode.nextElementSibling = newNode.previousElementSibling.nextElementSibling;
                } else {
                  newNode.nextElementSibling = function() {
                    for (var i = childIndex + 1; i < childNodes.length; i++) {
                      if (childNodes[i].nodeType === Node.ELEMENT_NODE)
                        return childNodes[i];
                    }
                    return null;
                  }();
                }
                if (newNode.previousElementSibling)
                  newNode.previousElementSibling.nextElementSibling = newNode;
                if (newNode.nextElementSibling)
                  newNode.nextElementSibling.previousElementSibling = newNode;
                if (newNode.nextElementSibling)
                  this.children.splice(this.children.indexOf(newNode.nextElementSibling), 0, newNode);
                else
                  this.children.push(newNode);
              }
            } else if (oldNode.nodeType === Node.ELEMENT_NODE) {
              if (oldNode.previousElementSibling)
                oldNode.previousElementSibling.nextElementSibling = oldNode.nextElementSibling;
              if (oldNode.nextElementSibling)
                oldNode.nextElementSibling.previousElementSibling = oldNode.previousElementSibling;
              this.children.splice(this.children.indexOf(oldNode), 1);
            }
            oldNode.parentNode = null;
            oldNode.previousSibling = null;
            oldNode.nextSibling = null;
            if (oldNode.nodeType === Node.ELEMENT_NODE) {
              oldNode.previousElementSibling = null;
              oldNode.nextElementSibling = null;
            }
            return oldNode;
          }
        },
        __JSDOMParser__: true
      };
      for (var nodeType in nodeTypes) {
        Node[nodeType] = Node.prototype[nodeType] = nodeTypes[nodeType];
      }
      var Attribute = function(name, value) {
        this.name = name;
        this._value = value;
      };
      Attribute.prototype = {
        get value() {
          return this._value;
        },
        setValue: function(newValue) {
          this._value = newValue;
        },
        getEncodedValue: function() {
          return encodeHTML(this._value);
        }
      };
      var Comment = function() {
        this.childNodes = [];
      };
      Comment.prototype = {
        __proto__: Node.prototype,
        nodeName: "#comment",
        nodeType: Node.COMMENT_NODE
      };
      var Text = function() {
        this.childNodes = [];
      };
      Text.prototype = {
        __proto__: Node.prototype,
        nodeName: "#text",
        nodeType: Node.TEXT_NODE,
        get textContent() {
          if (typeof this._textContent === "undefined") {
            this._textContent = decodeHTML(this._innerHTML || "");
          }
          return this._textContent;
        },
        get innerHTML() {
          if (typeof this._innerHTML === "undefined") {
            this._innerHTML = encodeTextContentHTML(this._textContent || "");
          }
          return this._innerHTML;
        },
        set innerHTML(newHTML) {
          this._innerHTML = newHTML;
          delete this._textContent;
        },
        set textContent(newText) {
          this._textContent = newText;
          delete this._innerHTML;
        }
      };
      var Document = function(url) {
        this.documentURI = url;
        this.styleSheets = [];
        this.childNodes = [];
        this.children = [];
      };
      Document.prototype = {
        __proto__: Node.prototype,
        nodeName: "#document",
        nodeType: Node.DOCUMENT_NODE,
        title: "",
        getElementsByTagName,
        getElementById: function(id) {
          function getElem(node) {
            var length = node.children.length;
            if (node.id === id)
              return node;
            for (var i = 0; i < length; i++) {
              var el = getElem(node.children[i]);
              if (el)
                return el;
            }
            return null;
          }
          return getElem(this);
        },
        createElement: function(tag) {
          var node = new Element(tag);
          return node;
        },
        createTextNode: function(text) {
          var node = new Text();
          node.textContent = text;
          return node;
        },
        get baseURI() {
          if (!this.hasOwnProperty("_baseURI")) {
            this._baseURI = this.documentURI;
            var baseElements = this.getElementsByTagName("base");
            var href = baseElements[0] && baseElements[0].getAttribute("href");
            if (href) {
              try {
                this._baseURI = new URL(href, this._baseURI).href;
              } catch (ex) {
              }
            }
          }
          return this._baseURI;
        }
      };
      var Element = function(tag) {
        this._matchingTag = tag;
        var lastColonIndex = tag.lastIndexOf(":");
        if (lastColonIndex != -1) {
          tag = tag.substring(lastColonIndex + 1);
        }
        this.attributes = [];
        this.childNodes = [];
        this.children = [];
        this.nextElementSibling = this.previousElementSibling = null;
        this.localName = tag.toLowerCase();
        this.tagName = tag.toUpperCase();
        this.style = new Style(this);
      };
      Element.prototype = {
        __proto__: Node.prototype,
        nodeType: Node.ELEMENT_NODE,
        getElementsByTagName,
        get className() {
          return this.getAttribute("class") || "";
        },
        set className(str) {
          this.setAttribute("class", str);
        },
        get id() {
          return this.getAttribute("id") || "";
        },
        set id(str) {
          this.setAttribute("id", str);
        },
        get href() {
          return this.getAttribute("href") || "";
        },
        set href(str) {
          this.setAttribute("href", str);
        },
        get src() {
          return this.getAttribute("src") || "";
        },
        set src(str) {
          this.setAttribute("src", str);
        },
        get srcset() {
          return this.getAttribute("srcset") || "";
        },
        set srcset(str) {
          this.setAttribute("srcset", str);
        },
        get nodeName() {
          return this.tagName;
        },
        get innerHTML() {
          function getHTML(node) {
            var i = 0;
            for (i = 0; i < node.childNodes.length; i++) {
              var child = node.childNodes[i];
              if (child.localName) {
                arr.push("<" + child.localName);
                for (var j = 0; j < child.attributes.length; j++) {
                  var attr = child.attributes[j];
                  var val = attr.getEncodedValue();
                  var quote = val.indexOf('"') === -1 ? '"' : "'";
                  arr.push(" " + attr.name + "=" + quote + val + quote);
                }
                if (child.localName in voidElems && !child.childNodes.length) {
                  arr.push("/>");
                } else {
                  arr.push(">");
                  getHTML(child);
                  arr.push("</" + child.localName + ">");
                }
              } else {
                arr.push(child.innerHTML);
              }
            }
          }
          var arr = [];
          getHTML(this);
          return arr.join("");
        },
        set innerHTML(html) {
          var parser = new JSDOMParser2();
          var node = parser.parse(html);
          var i;
          for (i = this.childNodes.length; --i >= 0; ) {
            this.childNodes[i].parentNode = null;
          }
          this.childNodes = node.childNodes;
          this.children = node.children;
          for (i = this.childNodes.length; --i >= 0; ) {
            this.childNodes[i].parentNode = this;
          }
        },
        set textContent(text) {
          for (var i = this.childNodes.length; --i >= 0; ) {
            this.childNodes[i].parentNode = null;
          }
          var node = new Text();
          this.childNodes = [node];
          this.children = [];
          node.textContent = text;
          node.parentNode = this;
        },
        get textContent() {
          function getText(node) {
            var nodes = node.childNodes;
            for (var i = 0; i < nodes.length; i++) {
              var child = nodes[i];
              if (child.nodeType === 3) {
                text.push(child.textContent);
              } else {
                getText(child);
              }
            }
          }
          var text = [];
          getText(this);
          return text.join("");
        },
        getAttribute: function(name) {
          for (var i = this.attributes.length; --i >= 0; ) {
            var attr = this.attributes[i];
            if (attr.name === name) {
              return attr.value;
            }
          }
          return void 0;
        },
        setAttribute: function(name, value) {
          for (var i = this.attributes.length; --i >= 0; ) {
            var attr = this.attributes[i];
            if (attr.name === name) {
              attr.setValue(value);
              return;
            }
          }
          this.attributes.push(new Attribute(name, value));
        },
        removeAttribute: function(name) {
          for (var i = this.attributes.length; --i >= 0; ) {
            var attr = this.attributes[i];
            if (attr.name === name) {
              this.attributes.splice(i, 1);
              break;
            }
          }
        },
        hasAttribute: function(name) {
          return this.attributes.some(function(attr) {
            return attr.name == name;
          });
        }
      };
      var Style = function(node) {
        this.node = node;
      };
      Style.prototype = {
        getStyle: function(styleName) {
          var attr = this.node.getAttribute("style");
          if (!attr)
            return void 0;
          var styles = attr.split(";");
          for (var i = 0; i < styles.length; i++) {
            var style = styles[i].split(":");
            var name = style[0].trim();
            if (name === styleName)
              return style[1].trim();
          }
          return void 0;
        },
        setStyle: function(styleName, styleValue) {
          var value = this.node.getAttribute("style") || "";
          var index = 0;
          do {
            var next = value.indexOf(";", index) + 1;
            var length = next - index - 1;
            var style = length > 0 ? value.substr(index, length) : value.substr(index);
            if (style.substr(0, style.indexOf(":")).trim() === styleName) {
              value = value.substr(0, index).trim() + (next ? " " + value.substr(next).trim() : "");
              break;
            }
            index = next;
          } while (index);
          value += " " + styleName + ": " + styleValue + ";";
          this.node.setAttribute("style", value.trim());
        }
      };
      for (var jsName in styleMap) {
        (function(cssName) {
          Style.prototype.__defineGetter__(jsName, function() {
            return this.getStyle(cssName);
          });
          Style.prototype.__defineSetter__(jsName, function(value) {
            this.setStyle(cssName, value);
          });
        })(styleMap[jsName]);
      }
      var JSDOMParser2 = function() {
        this.currentChar = 0;
        this.strBuf = [];
        this.retPair = [];
        this.errorState = "";
      };
      JSDOMParser2.prototype = {
        error: function(m) {
          if (typeof console !== "undefined") {
            console.log("JSDOMParser error: " + m + "\n");
          } else if (typeof dump !== "undefined") {
            dump("JSDOMParser error: " + m + "\n");
          }
          this.errorState += m + "\n";
        },
        /**
         * Look at the next character without advancing the index.
         */
        peekNext: function() {
          return this.html[this.currentChar];
        },
        /**
         * Get the next character and advance the index.
         */
        nextChar: function() {
          return this.html[this.currentChar++];
        },
        /**
         * Called after a quote character is read. This finds the next quote
         * character and returns the text string in between.
         */
        readString: function(quote) {
          var str;
          var n = this.html.indexOf(quote, this.currentChar);
          if (n === -1) {
            this.currentChar = this.html.length;
            str = null;
          } else {
            str = this.html.substring(this.currentChar, n);
            this.currentChar = n + 1;
          }
          return str;
        },
        /**
         * Called when parsing a node. This finds the next name/value attribute
         * pair and adds the result to the attributes list.
         */
        readAttribute: function(node) {
          var name = "";
          var n = this.html.indexOf("=", this.currentChar);
          if (n === -1) {
            this.currentChar = this.html.length;
          } else {
            name = this.html.substring(this.currentChar, n);
            this.currentChar = n + 1;
          }
          if (!name)
            return;
          var c = this.nextChar();
          if (c !== '"' && c !== "'") {
            this.error("Error reading attribute " + name + `, expecting '"'`);
            return;
          }
          var value = this.readString(c);
          node.attributes.push(new Attribute(name, decodeHTML(value)));
          return;
        },
        /**
         * Parses and returns an Element node. This is called after a '<' has been
         * read.
         *
         * @returns an array; the first index of the array is the parsed node;
         *          the second index is a boolean indicating whether this is a void
         *          Element
         */
        makeElementNode: function(retPair) {
          var c = this.nextChar();
          var strBuf = this.strBuf;
          strBuf.length = 0;
          while (whitespace.indexOf(c) == -1 && c !== ">" && c !== "/") {
            if (c === void 0)
              return false;
            strBuf.push(c);
            c = this.nextChar();
          }
          var tag = strBuf.join("");
          if (!tag)
            return false;
          var node = new Element(tag);
          while (c !== "/" && c !== ">") {
            if (c === void 0)
              return false;
            while (whitespace.indexOf(this.html[this.currentChar++]) != -1) {
            }
            this.currentChar--;
            c = this.nextChar();
            if (c !== "/" && c !== ">") {
              --this.currentChar;
              this.readAttribute(node);
            }
          }
          var closed = false;
          if (c === "/") {
            closed = true;
            c = this.nextChar();
            if (c !== ">") {
              this.error("expected '>' to close " + tag);
              return false;
            }
          }
          retPair[0] = node;
          retPair[1] = closed;
          return true;
        },
        /**
         * If the current input matches this string, advance the input index;
         * otherwise, do nothing.
         *
         * @returns whether input matched string
         */
        match: function(str) {
          var strlen = str.length;
          if (this.html.substr(this.currentChar, strlen).toLowerCase() === str.toLowerCase()) {
            this.currentChar += strlen;
            return true;
          }
          return false;
        },
        /**
         * Searches the input until a string is found and discards all input up to
         * and including the matched string.
         */
        discardTo: function(str) {
          var index = this.html.indexOf(str, this.currentChar) + str.length;
          if (index === -1)
            this.currentChar = this.html.length;
          this.currentChar = index;
        },
        /**
         * Reads child nodes for the given node.
         */
        readChildren: function(node) {
          var child;
          while (child = this.readNode()) {
            if (child.nodeType !== 8) {
              node.appendChild(child);
            }
          }
        },
        discardNextComment: function() {
          if (this.match("--")) {
            this.discardTo("-->");
          } else {
            var c = this.nextChar();
            while (c !== ">") {
              if (c === void 0)
                return null;
              if (c === '"' || c === "'")
                this.readString(c);
              c = this.nextChar();
            }
          }
          return new Comment();
        },
        /**
         * Reads the next child node from the input. If we're reading a closing
         * tag, or if we've reached the end of input, return null.
         *
         * @returns the node
         */
        readNode: function() {
          var c = this.nextChar();
          if (c === void 0)
            return null;
          var textNode;
          if (c !== "<") {
            --this.currentChar;
            textNode = new Text();
            var n = this.html.indexOf("<", this.currentChar);
            if (n === -1) {
              textNode.innerHTML = this.html.substring(this.currentChar, this.html.length);
              this.currentChar = this.html.length;
            } else {
              textNode.innerHTML = this.html.substring(this.currentChar, n);
              this.currentChar = n;
            }
            return textNode;
          }
          if (this.match("![CDATA[")) {
            var endChar = this.html.indexOf("]]>", this.currentChar);
            if (endChar === -1) {
              this.error("unclosed CDATA section");
              return null;
            }
            textNode = new Text();
            textNode.textContent = this.html.substring(this.currentChar, endChar);
            this.currentChar = endChar + "]]>".length;
            return textNode;
          }
          c = this.peekNext();
          if (c === "!" || c === "?") {
            this.currentChar++;
            return this.discardNextComment();
          }
          if (c === "/") {
            --this.currentChar;
            return null;
          }
          var result = this.makeElementNode(this.retPair);
          if (!result)
            return null;
          var node = this.retPair[0];
          var closed = this.retPair[1];
          var localName = node.localName;
          if (!closed) {
            this.readChildren(node);
            var closingTag = "</" + node._matchingTag + ">";
            if (!this.match(closingTag)) {
              this.error("expected '" + closingTag + "' and got " + this.html.substr(this.currentChar, closingTag.length));
              return null;
            }
          }
          if (localName === "title" && !this.doc.title) {
            this.doc.title = node.textContent.trim();
          } else if (localName === "head") {
            this.doc.head = node;
          } else if (localName === "body") {
            this.doc.body = node;
          } else if (localName === "html") {
            this.doc.documentElement = node;
          }
          return node;
        },
        /**
         * Parses an HTML string and returns a JS implementation of the Document.
         */
        parse: function(html, url) {
          this.html = html;
          var doc2 = this.doc = new Document(url);
          this.readChildren(doc2);
          if (doc2.documentElement) {
            for (var i = doc2.childNodes.length; --i >= 0; ) {
              var child = doc2.childNodes[i];
              if (child !== doc2.documentElement) {
                doc2.removeChild(child);
              }
            }
          }
          return doc2;
        }
      };
      global.Node = Node;
      global.Comment = Comment;
      global.Document = Document;
      global.Element = Element;
      global.Text = Text;
      global.JSDOMParser = JSDOMParser2;
    })(exports2);
    if (typeof module2 === "object") {
      module2.exports = exports2.JSDOMParser;
    }
  }
});

// ReadabilityTest.js
/*
var Readability = require_Readability();
var isProbablyReaderable = require_Readability_readerable();
var JSDOMParser = require_JSDOMParser();
var doc = new JSDOMParser().parse("<html><div>yo</div></html>");
var article = new Readability(doc);
*/
