/* Answer checking for Nartes+ inline blanks.
   Whitespace, Turkish case, and a few equivalent writings are accepted.
   The official key must still match; a wrong value must not. */
(function (root) {
  "use strict";

  function trLower(value) {
    return String(value).replace(/İ/g, "i").replace(/I/g, "ı").toLowerCase();
  }

  function fold(value) {
    return value
      .replace(/ç/g, "c")
      .replace(/ğ/g, "g")
      .replace(/ı/g, "i")
      .replace(/ö/g, "o")
      .replace(/ş/g, "s")
      .replace(/ü/g, "u");
  }

  function prep(value) {
    var text = trLower(value).trim();
    text = text.replace(/[’'"]/g, "");
    text = text.replace(/²/g, "^2").replace(/³/g, "^3").replace(/⁴/g, "^4");
    text = text.replace(/⁵/g, "^5").replace(/⁶/g, "^6").replace(/⁷/g, "^7");
    text = text.replace(/⁸/g, "^8").replace(/⁹/g, "^9");
    text = text.replace(/\*\*/g, "^");
    text = text.replace(/[×·*]/g, "x");
    text = text.replace(/÷/g, "/");
    text = text.replace(/\s+/g, " ").trim();
    text = text.replace(/[.,;:!?…]+$/g, "");
    return text;
  }

  function tight(value) {
    return fold(prep(value).replace(/\s+/g, "").replace(/\*/g, "x"));
  }

  function squash(value) {
    return tight(value).replace(/[^a-z0-9^]/g, "");
  }

  function squashOk(given, expected) {
    if (!/[a-zçğıöşü]/i.test(prep(expected))) return false;
    var left = squash(given);
    var right = squash(expected);
    return left.length > 0 && left === right;
  }

  function loose(value) {
    var text = tight(value).replace(/(dir|dur|tir|tur)$/g, "");
    if (/[iu]$/.test(text) && text.length > 3) text = text.slice(0, -1);
    return text;
  }

  function synonym(value) {
    var groups = [
      ["evet", "dogru"],
      ["hayir", "yanlis", "degil"]
    ];
    function hit(text) {
      for (var i = 0; i < groups.length; i += 1) {
        if (groups[i].indexOf(text) !== -1) return groups[i][0];
      }
      return null;
    }
    return hit(tight(value)) || hit(loose(value)) || loose(value);
  }

  function numberList(value) {
    var text = prep(value).replace(/\s+ve\s+/g, ",").replace(/[;]/g, ",");
    text = text.replace(/\s+/g, ",");
    text = text.replace(/,+/g, ",").replace(/^,|,$/g, "");
    if (!/^\d+(,\d+)*$/.test(text)) return null;
    return text.split(",").map(function (part) {
      return String(Number(part));
    });
  }

  function sameMultiset(left, right) {
    if (left.length !== right.length) return false;
    var copy = right.slice().sort();
    return left.slice().sort().every(function (item, index) {
      return item === copy[index];
    });
  }

  function pairKey(part) {
    var match = part.match(/^(\d+)x(\d+)$/);
    if (!match) return null;
    var a = Number(match[1]);
    var b = Number(match[2]);
    return a <= b ? a + "x" + b : b + "x" + a;
  }

  function pairList(value) {
    var text = tight(value).replace(/ve/g, ",");
    if (!text || text.indexOf("x") === -1) return null;
    var parts = text.split(",").filter(Boolean);
    if (parts.length < 1) return null;
    var keys = [];
    for (var i = 0; i < parts.length; i += 1) {
      var key = pairKey(parts[i]);
      if (!key) return null;
      keys.push(key);
    }
    return keys.sort();
  }

  function pureResult(value) {
    var match = tight(value).match(/^[\d+x^*/()\-]+=(\d+)$/);
    return match ? match[1] : null;
  }

  function namedResult(value) {
    var match = tight(value).match(/^(ebob|ekok)=(\d+)$/);
    return match ? match[2] : null;
  }

  function wordsOf(value) {
    var folded = fold(prep(value));
    var words = folded.split(/[^a-z0-9^]+/).filter(function (word) {
      return word.length >= 3 && !/^\d+$/.test(word);
    });
    var stops = {
      ve: 1, ile: 1, icin: 1, bir: 1, bu: 1, olan: 1, olarak: 1,
      her: 1, cok: 1, yok: 1, var: 1, son: 1, ilk: 1, iki: 1, hem: 1,
      gibi: 1, kadar: 1, sonra: 1, once: 1, diye: 1, olanlar: 1
    };
    return words.filter(function (word) { return !stops[word]; });
  }

  function numbersOf(value) {
    var found = fold(prep(value)).match(/\d+/g) || [];
    return found.map(function (part) { return String(Number(part)); });
  }

  function sentenceClose(given, expected) {
    var expectedWords = wordsOf(expected);
    if (expectedWords.length < 3) return false;
    var givenWords = wordsOf(given);
    var givenSet = {};
    givenWords.forEach(function (word) { givenSet[word] = 1; });
    var hit = expectedWords.filter(function (word) { return givenSet[word]; }).length;
    var expectedNums = numbersOf(expected).slice().sort();
    var givenNums = numbersOf(given).slice().sort();
    if (expectedNums.join(",") !== givenNums.join(",")) return false;
    return hit / expectedWords.length >= 0.6;
  }

  function judgeBlank(given, expected, options) {
    var opts = options || {};
    if (!String(given || "").trim()) return { ok: false, reason: "empty" };
    if (tight(given) === tight(expected)) return { ok: true, reason: "ok" };
    if (synonym(given) === synonym(expected)) return { ok: true, reason: "ok" };
    if (squashOk(given, expected)) return { ok: true, reason: "ok" };

    var givenNumbers = numberList(given);
    var expectedNumbers = numberList(expected);
    if (givenNumbers && expectedNumbers) {
      if (sameMultiset(givenNumbers, expectedNumbers)) {
        if (opts.ordered && givenNumbers.join(",") !== expectedNumbers.join(",")) {
          return { ok: false, reason: "order" };
        }
        return { ok: true, reason: "ok" };
      }
      if (givenNumbers.length < expectedNumbers.length) return { ok: false, reason: "missing" };
      if (givenNumbers.length > expectedNumbers.length) return { ok: false, reason: "extra" };
      return { ok: false, reason: "mismatch" };
    }

    var givenPairs = pairList(given);
    var expectedPairs = pairList(expected);
    if (givenPairs && expectedPairs) {
      if (givenPairs.join(",") === expectedPairs.join(",")) return { ok: true, reason: "ok" };
      return { ok: false, reason: "mismatch" };
    }

    var result = pureResult(expected);
    if (result && tight(given) === result) return { ok: true, reason: "ok" };
    var named = namedResult(expected);
    if (named && (tight(given) === named || tight(given) === tight(expected))) {
      return { ok: true, reason: "ok" };
    }

    if (sentenceClose(given, expected)) return { ok: true, reason: "ok" };
    return { ok: false, reason: "mismatch" };
  }

  function judgeAll(givens, expecteds, options) {
    var results = [];
    var ok = true;
    for (var i = 0; i < expecteds.length; i += 1) {
      var result = judgeBlank(givens[i] || "", expecteds[i], options);
      results.push(result);
      if (!result.ok) ok = false;
    }
    return { ok: ok, blanks: results };
  }

  var api = {
    judgeBlank: judgeBlank,
    judgeAll: judgeAll,
    tight: tight
  };

  if (typeof module === "object" && module.exports) module.exports = api;
  else root.NartesCheck = api;
})(typeof globalThis !== "undefined" ? globalThis : this);
