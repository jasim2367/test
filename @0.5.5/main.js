const jo = {};
!function JetThemeScript() {
    var M = window
      , aQ = document
      , a = setTimeout
      , b9 = clearTimeout
      , cb = Date
      , b0 = Math
      , q = parseInt
      , t = btoa
      , K = escape
      , d = unescape
      , bP = encodeURIComponent
      , j = decodeURIComponent
      , ad = RegExp
      , bX = XMLHttpRequest
      , bm = alert
      , bC = localStorage
      , ax = JSON
      , a3 = Image
      , a5 = setInterval
      , cG = clearInterval
      , aE = "forEach"
      , be = "innerHTML"
      , bM = "tagName"
      , w = "getElementById"
      , o = "getElementsByClassName"
      , bv = "querySelector"
      , cw = "querySelectorAll"
      , bt = "documentElement"
      , ch = "childNodes"
      , bJ = "createElement"
      , B = "className"
      , D = "replace"
      , bW = "indexOf"
      , m = "lastIndexOf"
      , a4 = "EventListener"
      , cc = "add"
      , aM = "remove"
      , ci = "id"
      , bs = "key"
      , aL = "type"
      , af = "parse"
      , cx = "length"
      , W = "call"
      , bF = "slice"
      , C = "reset"
      , az = "scroller"
      , aq = "push"
      , b4 = "Time"
      , aa = "Date"
      , a9 = "Month"
      , a7 = "FullYear"
      , ap = "clientX"
      , ao = "clientY"
      , h = "pageX"
      , g = "pageY"
      , aN = "scrollLeft"
      , bN = "scrollTop"
      , ac = "onreadystatechange"
      , cf = "readyState"
      , a2 = "Attribute"
      , bk = "set"
      , bB = "get"
      , av = "post"
      , a1 = "has"
      , F = "checked"
      , ar = "focus"
      , b1 = "height"
      , cd = "offsetWidth"
      , ck = "offsetHeight"
      , ay = "toFixed"
      , aF = "pageYOffset"
      , cy = "appendChild"
      , bA = "firstChild"
      , cj = "insert"
      , bO = "Before"
      , aC = "value"
      , R = "safe"
      , aI = "match"
      , X = "href"
      , bj = "src"
      , U = "onload"
      , al = "onerror"
      , L = "target"
      , bU = "closest"
      , bf = "location"
      , bb = "split"
      , a8 = "trim"
      , bY = "open"
      , bh = "send"
      , bl = "random"
      , cF = "status"
      , bp = "toString"
      , aW = "parentElement"
      , am = "activeElement"
      , ca = "preventDefault"
      , bc = "substr"
      , cr = "setRequestHeader"
      , aD = "responseText"
      , cl = "response"
      , ba = "body"
      , aT = "title"
      , ai = "test"
      , aB = "container"
      , aU = "ceil"
      , aj = "floor"
      , bu = "round"
      , ag = "min"
      , cu = "map"
      , cm = "cookie"
      , V = "contains"
      , bg = "toUTCString"
      , bR = "textContent"
      , aw = "elementFromPoint"
      , aS = "Item"
      , bG = "nextSibling"
      , cD = "load"
      , bo = "true"
      , x = "false"
      , aY = "valid"
      , bV = "scroll"
      , G = "click"
      , aX = "submit"
      , bD = "blur"
      , bL = "mousemove"
      , p = "mouseup"
      , Y = "touchstart"
      , aV = "mousedown"
      , a0 = "change"
      , l = "complete"
      , cE = "undefined"
      , bq = "function"
      , bx = "Content-Type"
      , P = "text/html"
      , b8 = "application/x-www-form-urlencoded"
      , e = "pagination"
      , ct = "loadCustomPosts"
      , k = "custom_posts"
      , O = "config"
      , cC = "adsbygoogle"
      , bE = "analytics"
      , s = "jet"
      , ce = "https://"
      , Z = "www.blogger.com/"
      , au = "-rw"
      , bQ = "devicePixelRatio"
      , b = "mount"
      , cA = typeof isPreview !== cE ? isPreview : false
      , b2 = typeof siteUrl !== cE ? siteUrl[bc](0, siteUrl[cx] - 1)[D](/(^\w+:|^)\/\//, "") : ""
      , aG = ce + b2
      , aO = typeof currentUrl !== cE ? currentUrl : ""
      , r = typeof blogId !== cE ? blogId : ""
      , cn = typeof blogTitle !== cE ? blogTitle : ""
      , br = typeof titleSeparator !== cE ? titleSeparator : " - "
      , b6 = typeof pageTitle !== cE ? pageTitle : "Page"
      , v = typeof analyticId !== cE ? analyticId : false
      , u = typeof caPubAdsense !== cE ? caPubAdsense[D](/^\D+/g, "") : false
      , aR = u ? "ca-pub-" + u : false
      , bK = typeof innerAdsDelimiter !== cE ? innerAdsDelimiter : "p,br,div"
      , bI = typeof ignoreAdsDelimiter !== cE ? ignoreAdsDelimiter : "pre,ul,ol,table,blockquote"
      , bn = typeof autoTOC !== cE ? autoTOC : false
      , ak = typeof toc_temp === bq ? toc_temp : false
      , n = typeof positionTOC !== cE ? positionTOC : false
      , bd = typeof jtCallback === bq ? jtCallback : false;
    function J(cH, i) {
        return -1 < (" " + cH[B] + " ")[bW](" " + i + " ")
    }
    function I(cI, cH) {
        var i;
        J(cI, cH) || ("" != (i = cI[B]) && (cH = " " + cH),
        cI[B] = i + cH)
    }
    function bz(cH, i) {
        cH[B] = cH[B][D](new ad("(?:^|\\s)" + i + "(?!\\S)"), "")[a8]()
    }
      function A(cI, cH) {
        for (var i = 0; i < cI[cx]; i++) {
            if (cI[i] === cH) {
                return !0
            }
        }
        return !1
    }
    function aH() {
        return (b0[bl]() + 1)[bp](36)[bc](7)
    }
    function co(cH, i) {
        return !!(cH = new ad("[?&]" + cH + "=([^&#=]*)"))[ai](i) && i[aI](cH)[1]
    }
    function S(cK, cO, cM, cN) {
        cK = q(cK),
        cO = q(cO),
        cM = q(cM),
        cN = q(cN);
        var i, cI, cJ = b0[aU](cK / cM);
        cO < 1 ? cO = 1 : cJ < cO && (cO = cJ),
        cI = cJ <= cN ? (i = 1,
        cJ) : (cK = b0[aj](cN / 2),
        cM = b0[aU](cN / 2) - 1,
        cO <= cK ? (i = 1,
        cN) : cJ <= cO + cM ? (i = cJ - cN + 1,
        cJ) : (i = cO - cK,
        cO + cM));
        for (var cH = (cO - 1) * cM, cN = b0[ag](cH + cM - 1, cK - 1), cP = [], cL = 0; cL < cI + 1 - i; cL++) {
            cP[aq](cL)
        }
        return cP = cP[cu](function(cQ) {
            return i + cQ
        }),
        {
            totalItems: cK,
            currentPage: cO,
            pageSize: cM,
            totalPages: cJ,
            startPage: i,
            endPage: cI,
            startIndex: cH,
            endIndex: cN,
            pages: cP
        }
    }
    function cs(cK) {
        for (var cI = cK.slice(), i = cI[cx] - 1; 0 < i; i--) {
            var cH = b0[aj](b0[bl]() * (i + 1))
              , cJ = cI[i];
            cI[i] = cI[cH],
            cI[cH] = cJ
        }
        return cI
    }
      !function(cH) {
        var i = new a3;
        i[U] = i[al] = function() {
            cH(2 == i[b1])
        }
        ,
        i[bj] = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
    }(function(i) {
        i || (au = "")
    });
    var cv = aQ[w]("header")
      , bT = aQ[w]("search-toggle")
      , T = aQ[w]("search-header")
      , f = aQ[w]("navbar-toggle")
      , a6 = aQ[w]("navbar")
      , at = aQ[w]("back-to-top")
      , cz = aQ[w]("dark-toggler")
      , aZ = aQ[bv]("html")
      , bS = aQ[w]("comment-button")
      , ab = aQ[w]("threaded-comment-form")
      , cq = aQ[w]("comment-editor")
      , cp = aQ[w]("comment-editor-src")
      , N = aQ[w]("comment-script")
      , by = aQ[cw](".comment-reply")
      , H = aQ[cw](".entry-text noscript")
      , bZ = aQ[cw](".contact-form-blogger")
      , aA = aQ[w]("ads-post")
      , cg = aQ[w]("post-body")
      , aJ = aQ[bv](".related-posts")
      , aP = aQ[bv](".related-inline")
      , ae = co("page", aO)
      , b5 = null !== bC && 1 == bC[bB + aS]("lazy");
    !function(i) {
        M[cc + a4](bV, function() {
                  }, !1)
    }(0);
    var E = function(cK) {
        var cN, cL, cM, i, cI, cJ, cH, cO;
        "IMG" == cK[bM] && ((cO = cK[bB + a2]("data-src"))[aI](/(bp.blogspot|googleusercontent)/) ? (cH = b5 ? M[bQ] && 1 < M[bQ] ? M[bQ] : 1.5 : 1,
        cN = (cK[cd] * cH)[ay](0),
        cL = (cK[aW][cd] * cH)[ay](0),
        cM = (cK[aW][aW][cd] * cH)[ay](0),
        i = (cK[ck] * cH)[ay](0),
        cI = cO[bb]("/"),
        cJ = cO[m]("=") + 1,
        cH = "",
        cH = J(cK[aW], "ratio") ? "w" + cN + "-h" + i + "-c" + au : "s" + (cH = cN < 30 ? cL < 30 ? cM : cL : cN) + au,
        cO = cO[aI](/(img\/a|proxy\/)/) ? cJ ? cO[bF](0, cJ) + cH : cO + "=" + cH : cO[D](cI[cI[cx] - 2], cH),
        cK[bk + a2]("data-src", cO)) : cO[aI](/(img.youtube|i.ytimg)/) && (cO = cO[bc](0, cO[m]("/")) + "/mqdefault.jpg",
        cK[bk + a2]("data-src", cO)))
    }
      , cB = function(cK) {
        var cH, cI, cQ, cN, cM, cP, cL, cO;
        function cJ(cU, cS, i) {
            var cR = aQ[bJ]("li")
              , cT = aQ[bJ]("span");
            return I(cT, "btn btn-sm rounded-pill jt-icon-center"),
            cT[be] = i || cU,
            cT[bk + a2]("data-page", cU),
            cU == cS ? I(cT, "jt-btn-primary") : (I(cT, "jt-btn-light hover-btn-primary"),
            cT[cc + a4](G, function(cW) {
                          })),
            cR[cy](cT),
            cR
        }
        cK[bB + a2]("data-pagination") != x ? (cH = cK[bB + a2]("data-posts"),
        cI = cK[bB + a2]("data-label"),
        cQ = (cI = bP(cI)) ? "-/" + cI + "/" : "",
        cN = cI ? "/label/" + cI : "",
        Defer.js(aG + "/feeds/posts/summary/" + cQ + "?alt=json&callback=jo." + e + "_" + bs + "&max-results=1"),
        cM = co("max-results", aO),
        cP = co("page", aO),
        cL = cM || cH,
        cO = cP || 1,
        jo[e + "_" + bs] = function(cU) {
                  ,
        jo[e + "_date"] = function(i) {
                  ) : bz(cK, "visually-hidden")
    };
              jo[ct] = function(cM) {
                    ;
    var y = function(cK) {
          };
                    bT && bT[cc + a4](a0, function() {
                          }),
    f && f[cc + a4](a0, function() {
          }),
    cz && cz[cc + a4](G, function(i) {
          }),
    M[cc + a4](bV, function() {
          }, !1),
    cq && cq[cc + a4](cD, function(i) {
          }),
    bS && bS[cc + a4](G, function(i) {
          });
    for (var bH = 0; bH < by[cx]; ++bH) {
              })
    }
    for (bH = 0; bH < bZ[cx]; ++bH) {
        var bi = bZ[bH];
        bi[cc + a4](aX, function(cJ) {
                  })
    }
    function c(cQ) {
        if (cQ && (aQ[aM + a4](bL, c),
        aQ[aM + a4](Y, c),
        aQ[aM + a4](bV, c)),
        Defer.dom(".custom-posts", 1, null, jo[ct], null, {
            rootMargin: "200%"
        }),
        0 < H[cx]) {
            for (var cW = 0; cW < H[cx]; ++cW) {
                var cT = H[cW]
                  , cU = cT[be]
                  , cH = aQ[bJ]("textarea");
                cH[be] = cU[D](/src="(.*?)"/g, 'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" loading="lazy" lazyload="true" data-src="$1"');
                cU = aQ[bJ]("div");
                cU[be] = cH.value,
                0 == cW && I(cU, "feature-image full-width"),
                cT[aW][cj + bO](cU, cT)
            }
            Defer.dom('[lazyload="true"]', 1, "loaded", E, null, {
                rootMargin: "200%"
            })
        }
        if (null !== cg) {
            if (null !== aJ && null !== aP && (aP[be] = aJ[be],
            aP[bk + a2]("data-no-item", aJ[bB + a2]("data-no-item"))),
            null !== aA) {
                for (var cJ = cg[cw](bK + "," + bI), cL = aA[ch], cI = cL[cx], cX = [], cW = 0; cW < cJ[cx]; cW++) {
                    var cR = cJ[cW][bU](bI);
                    cR && cJ[cW] != cR || cX[aq](cJ[cW])
                }
                for (var cM, cW = 0; cW < cI; cW++) {
                    cW == cI - 1 ? cg[cy](cL[0]) : (cM = cW == cI - 1 ? cX[cx] - 1 : b0[bu](cX[cx] / cI) * cW,
                    (cM = 0 == cW ? cX[0] : cX[cM][bG]) && cM[aW][cj + bO](cL[0], cM))
                }
            }
            if (bn && bn != x && ak && null !== cg[bA]) {
                for (var cS = cg[cw]("h2,h3,h4,h5,h6"), cK = aQ[bJ]("div"), cQ = cg[bv](n), cO = [], cW = 0; cW < cS[cx]; cW++) {
                    var cV = cS[cW]
                      , cP = cV[bR][D](/[^\w!?]/g, "_")[D](/__/g, "_")
                      , cN = q(cV[bM][D]("H", ""));
                    cV[ci] = cP,
                    cO[aq]({
                        level: cN,
                        title: cV[bR],
                        id: cP
                    })
                }
                null === cQ ? cQ = cg[bA] : cQ[bG] && (cQ = cQ[bG]),
                0 < cO[cx] && (cK[be] = ak(cO)[a8](),
                cQ && cQ[aW][cj + bO](cK, cQ))
            }
        }
        cA || (aR && (typeof adsbygoogle === cE && (adsbygoogle = []),
        Defer.js(ce + "pagead2.googlesyndication.com/pagead/js/" + cC + ".js?client=" + aR, cC, 100)),
        v && v != x && Defer.js(ce + "www.googletagmanager.com/gtag/js?id=" + v, bE, 100, function() {
        }),
        bd && bd()),
        r && Defer.css(ce + Z + "dyn-css/authorization.css?targetBlogID=" + r)
    }
    ae && (aQ[aT] = aQ[aT][D](br, br + b6 + " " + ae + br)),
    Defer.dom(".lazyload", 1, "loaded", E),
    Defer.dom("#post-pager", 1, null, y, null, {
        rootMargin: "200%"
    }),
    Defer.dom("#pagination", 1, null, cB, null, {
        rootMargin: "200%"
    }),
    b5 ? c(!1) : (null !== bC && bC[bk + aS]("lazy", 1),
    aQ[cc + a4](bL, c),
    aQ[cc + a4](Y, c),
    aQ[cc + a4](bV, c))
}();
