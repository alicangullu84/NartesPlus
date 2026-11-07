/* Renders Nartes+ lesson diagrams to HTML strings. */
(function (root) {
  "use strict";

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function render(diagram, solved) {
    if (!diagram) return "";
    return renderKind(diagram, solved || 0);
  }

  function renderKind(diagram, solved) {
    switch (diagram.kind) {
      case "stack":
        return diagram.items.map(function (item) { return renderKind(item, solved); }).join("");
      case "dots":
        return renderDots(diagram);
      case "rods":
        return renderRods(diagram);
      case "bars":
        return renderBars(diagram);
      case "pairs":
        return renderPairs(diagram);
      case "cards":
        return renderCards(diagram);
      case "table":
        return renderTable(diagram);
      case "tree":
        return '<div class="trees">' + renderTree(diagram.tree) + "</div>" + treeLegend();
      case "trees":
        return '<div class="trees">' + diagram.trees.map(function (item) {
          return '<div class="tree-wrap"><p class="tree-title">' + esc(item.title) + "</p>" + renderTree(item.tree) + "</div>";
        }).join("") + "</div>" + treeLegend();
      case "division":
        return renderDivision(diagram, solved);
      case "piles":
        return renderPiles(diagram);
      case "ribbon":
        return renderRibbon(diagram);
      case "venn":
        return renderVenn(diagram);
      case "align":
        return renderAlign(diagram);
      case "lines":
        return renderLines(diagram);
      case "shared":
        return renderShared(diagram);
      case "flow":
        return renderFlow(diagram);
      case "panels":
        return renderPanels(diagram);
      case "filter":
        return renderFilter(diagram);
      case "bundles":
        return renderBundles(diagram);
      case "band":
        return renderBand(diagram);
      case "graph":
        return renderGraph(diagram);
      case "fraction":
        return renderFraction(diagram);
      default:
        return "";
    }
  }

  function renderDots(diagram) {
    return '<div class="dot-panels">' + diagram.panels.map(function (panel) {
      var groups = [];
      for (var start = 0; start < panel.total; start += panel.group) {
        var size = Math.min(panel.group, panel.total - start);
        var dots = "";
        for (var i = 0; i < size; i += 1) dots += '<i class="dot"></i>';
        groups.push('<span class="dot-group' + (size < panel.group ? " is-rem" : "") + '">' + dots + "</span>");
      }
      return '<div class="dot-panel"><p class="panel-title">' + esc(panel.title) + '</p><div class="dot-row">' + groups.join("") + '</div><p class="panel-note">' + esc(panel.note || "") + "</p></div>";
    }).join("") + "</div>";
  }

  function renderRods(diagram) {
    return '<div class="rod-list">' + diagram.counts.map(function (count) {
      var cells = "";
      for (var i = 0; i < count; i += 1) cells += '<span class="rod">' + diagram.unit + "</span>";
      return '<div class="rod-row"><div class="rods">' + cells + '</div><p class="panel-note">' + diagram.unit + " × " + count + " = " + (diagram.unit * count) + "</p></div>";
    }).join("") + "</div>";
  }

  function renderBars(diagram) {
    return '<div class="bar-list">' + diagram.rows.map(function (row) {
      var full = Math.floor(row.length / row.piece);
      var rem = row.length % row.piece;
      var cells = "";
      for (var i = 0; i < full; i += 1) {
        cells += '<span class="seg" style="flex:' + row.piece + '">' + row.piece + "</span>";
      }
      if (rem) cells += '<span class="seg rem" style="flex:' + rem + '">' + rem + " artık</span>";
      var status = rem ? "Artık var" : "Tam oturur";
      return '<div class="bar-row"><div class="bar" role="img" aria-label="' + esc(status + ", " + row.caption) + '">' + cells + '</div><p class="bar-caption"><strong>' + status + "</strong> · " + esc(row.caption) + "</p></div>";
    }).join("") + "</div>";
  }

  function renderPairs(diagram) {
    return '<div class="pair-list">' + diagram.groups.map(function (group) {
      var pairs = (group.pairs || []).map(function (pair) {
        return '<div class="pair"><span>' + esc(pair[0]) + '</span><span class="arrow" aria-hidden="true">↔</span><span>' + esc(pair[1]) + "</span></div>";
      }).join("");
      var center = group.center ? '<div class="center-card">' + esc(group.center) + "<small>tek kutu</small></div>" : "";
      var note = group.note ? '<p class="panel-note">' + esc(group.note) + "</p>" : "";
      return '<div class="pair-group"><p class="panel-title">' + esc(group.title) + "</p>" + pairs + center + note + "</div>";
    }).join("") + "</div>";
  }

  function renderCards(diagram) {
    return '<div class="card-groups">' + diagram.groups.map(function (group) {
      var chips = group.chips.map(function (chip) {
        return '<span class="chip">' + esc(chip) + "</span>";
      }).join("");
      var note = group.note ? '<p class="panel-note">' + esc(group.note) + "</p>" : "";
      return '<div class="card-group tone-' + esc(group.tone || "plain") + '"><p class="panel-title">' + esc(group.title) + '</p><div class="chips">' + chips + "</div>" + note + "</div>";
    }).join("") + "</div>";
  }

  function renderTable(diagram) {
    var head = diagram.headers.map(function (cell) { return "<th>" + esc(cell) + "</th>"; }).join("");
    var body = diagram.rows.map(function (row) {
      return "<tr>" + row.map(function (cell) { return "<td>" + esc(cell) + "</td>"; }).join("") + "</tr>";
    }).join("");
    var caption = diagram.caption ? "<caption>" + esc(diagram.caption) + "</caption>" : "";
    return '<div class="table-wrap"><table class="model-table">' + caption + "<thead><tr>" + head + "</tr></thead><tbody>" + body + "</tbody></table></div>";
  }

  function treeLegend() {
    return '<p class="panel-note">Çift çerçeve ve “asal” yazısı asal yaprağı gösterir. Kesik çerçeve bileşik düğümdür.</p>';
  }

  function renderTree(node) {
    var tag = node.prime ? '<small>asal</small>' : "";
    var cls = node.prime ? "node prime" : "node comp";
    var kids = "";
    if (node.kids && node.kids.length) {
      kids = '<div class="stem" aria-hidden="true"></div><div class="kids">' + node.kids.map(function (kid) {
        return '<div class="branch">' + renderTree(kid) + "</div>";
      }).join("") + "</div>";
    }
    return '<div class="tree"><div class="' + cls + '">' + esc(node.label) + tag + "</div>" + kids + "</div>";
  }

  function renderDivision(diagram, solved) {
    var revealed = null;
    if (diagram.reveal) {
      revealed = {};
      for (var s = 0; s < solved && s < diagram.reveal.length; s += 1) {
        diagram.reveal[s].forEach(function (index) { revealed[index] = true; });
      }
    }
    var head = diagram.headers.map(function (cell) { return "<th>" + esc(cell) + "</th>"; }).join("");
    if (diagram.marks) head += "<th>Not</th>";
    var body = diagram.rows.map(function (row, index) {
      var hidden = revealed && row[1] && !revealed[index];
      var divisor = !row[1]
        ? '<td class="divisor quiet">—</td>'
        : hidden
          ? '<td class="divisor blank">□</td>'
          : '<td class="divisor">' + esc(row[1]) + "</td>";
      var mark = diagram.marks ? "<td>" + esc(diagram.marks[index] || "") + "</td>" : "";
      return "<tr><td>" + esc(row[0]) + "</td>" + divisor + mark + "</tr>";
    }).join("");
    var note = diagram.note ? '<p class="panel-note">' + esc(diagram.note) + "</p>" : "";
    return '<div class="table-wrap"><table class="model-table divstrip"><thead><tr>' + head + "</tr></thead><tbody>" + body + "</tbody></table></div>" + note;
  }

  function renderPiles(diagram) {
    var groups = diagram.groups.map(function (group) {
      var boxes = "";
      for (var i = 0; i < group.count; i += 1) boxes += '<span class="chip">' + esc(group.base) + "</span>";
      return '<div class="pile"><div class="chips">' + boxes + '</div><p class="panel-note">' + esc(group.power) + " · " + group.count + " tane</p></div>";
    }).join("");
    var result = diagram.result ? '<p class="ribbon-result">' + esc(diagram.result) + "</p>" : "";
    return '<div class="piles">' + groups + "</div>" + result;
  }

  function renderRibbon(diagram) {
    var items = diagram.items.map(function (item, index) {
      return (index ? '<span class="op">×</span>' : "") + '<span class="chip">' + esc(item) + "</span>";
    }).join("");
    return '<div class="ribbon">' + items + '</div><p class="ribbon-result">' + esc(diagram.result || "") + "</p>";
  }

  function renderVenn(diagram) {
    function col(side) {
      return '<div class="venn-col"><p class="panel-title">' + esc(side.title) + '</p><div class="chips">' + side.chips.map(function (chip) {
        return '<span class="chip">' + esc(chip) + "</span>";
      }).join("") + "</div></div>";
    }
    var common = diagram.common.map(function (chip) {
      var cls = String(chip) === String(diagram.focus) ? "chip focus" : "chip";
      var label = String(chip) === String(diagram.focus) ? esc(chip) + " <small>en büyük</small>" : esc(chip);
      return '<span class="' + cls + '">' + label + "</span>";
    }).join("");
    return '<div class="venn">' + col(diagram.left) + '<div class="venn-common"><p class="panel-title">Ortak</p><div class="chips">' + common + "</div></div>" + col(diagram.right) + "</div>";
  }

  function renderAlign(diagram) {
    return '<div class="align">' + diagram.rows.map(function (row) {
      var cells = row.cells.map(function (cell) {
        return '<span class="chip' + (row.ring ? " focus" : "") + '">' + esc(cell) + "</span>";
      }).join("");
      return '<div class="align-row"><p class="panel-title">' + esc(row.title) + '</p><div class="chips">' + cells + "</div></div>";
    }).join("") + "</div>";
  }

  function renderLines(diagram) {
    var min = diagram.min || 0;
    var span = diagram.max - min || 1;
    return '<div class="lines">' + diagram.series.map(function (series) {
      var ticks = series.points.map(function (point) {
        var left = 8 + ((point - min) / span) * 84;
        var cls = "tick";
        var tag = "";
        if (series.zeroGrey && point === 0) {
          cls += " is-zero";
          tag = "başlangıç";
        }
        if ((series.open || []).indexOf(point) !== -1) {
          cls += " is-open";
          tag = "hariç";
        }
        if ((series.common || []).indexOf(point) !== -1 && point !== 0) cls += " is-common";
        if (series.first === point) {
          cls += " is-first";
          tag = "ilk ortak";
        } else if (!tag && (series.common || []).indexOf(point) !== -1) {
          tag = "ortak";
        }
        return '<span class="' + cls + '" style="left:' + left + '%"><i></i><b>' + esc(point) + "</b>" + (tag ? "<small>" + tag + "</small>" : "") + "</span>";
      }).join("");
      var width = Math.max(280, (diagram.max - min) * 16);
      return '<div class="line"><p class="panel-title">' + esc(series.label) + '</p><div class="track" style="min-width:' + width + 'px">' + ticks + "</div></div>";
    }).join("") + "</div>";
  }

  function renderShared(diagram) {
    var body = diagram.rows.map(function (row) {
      return "<tr><td>" + row.nums.map(esc).join(" , ") + "</td><td>" + (row.div ? esc(row.div) : "—") + "</td><td>" + esc(row.tag) + "</td></tr>";
    }).join("");
    return '<div class="table-wrap"><table class="model-table"><thead><tr><th>Sayılar</th><th>Asal bölen</th><th>Ne işe yarar</th></tr></thead><tbody>' + body + "</tbody></table></div>";
  }

  function renderFlow(diagram) {
    return '<ol class="flow">' + diagram.steps.map(function (step, index) {
      return "<li><span>" + (index + 1) + "</span>" + esc(step) + "</li>";
    }).join("") + "</ol>";
  }

  function renderPanels(diagram) {
    return '<div class="info-panels">' + diagram.panels.map(function (panel) {
      return '<div class="info-panel"><p class="panel-title">' + esc(panel.title) + "</p>" + panel.lines.map(function (line) {
        return "<p>" + esc(line) + "</p>";
      }).join("") + "</div>";
    }).join("") + "</div>";
  }

  function renderFilter(diagram) {
    var chips = diagram.chips.map(function (chip) {
      var keep = Number(chip) <= diagram.max;
      return '<span class="chip ' + (keep ? "keep" : "drop") + '">' + esc(chip) + (keep ? "" : " elenir") + "</span>";
    }).join("");
    return '<p class="panel-title">' + esc(diagram.title) + '</p><div class="chips">' + chips + '</div><p class="panel-note">' + esc(diagram.note) + "</p>";
  }

  function renderBundles(diagram) {
    var rows = diagram.rows.map(function (row) {
      var packs = "";
      for (var i = 0; i < row.copies; i += 1) packs += '<span class="pack">' + esc(row.size) + "</span>";
      return '<div class="bundle"><p class="panel-title">' + esc(row.label) + '</p><div class="packs">' + packs + "</div></div>";
    }).join("");
    return rows + '<p class="ribbon-result">Eş toplam: ' + esc(diagram.meet) + "</p>";
  }

  function renderBand(diagram) {
    var chips = diagram.values.map(function (value) {
      var inside = value > diagram.low && value < diagram.high;
      return '<span class="chip ' + (inside ? "focus" : "") + '">' + value + (inside ? " aralıkta" : "") + "</span>";
    }).join("");
    return '<div class="chips">' + chips + '</div><p class="panel-note">' + esc(diagram.note) + "</p>";
  }

  function renderGraph(diagram) {
    var nodes = diagram.nodes.map(function (node) {
      return '<div class="graph-node"><b>' + esc(node.id) + "</b><span>" + esc(node.value) + "</span></div>";
    }).join("");
    var edges = diagram.edges.map(function (edge) {
      return "<li>" + esc(edge.a) + "–" + esc(edge.b) + " · " + esc(edge.label) + "</li>";
    }).join("");
    return '<div class="graph"><div class="graph-nodes">' + nodes + "</div><ul>" + edges + "</ul></div>";
  }

  function renderFraction(diagram) {
    function frac(pair) {
      return '<span class="frac"><b>' + esc(pair[0]) + "</b><b>" + esc(pair[1]) + "</b></span>";
    }
    return '<div class="frac-row">' + frac(diagram.from) + "<span>÷ " + esc(diagram.by) + "</span>" + frac(diagram.to) + '</div><p class="panel-note">' + esc(diagram.note) + "</p>";
  }

  var api = { render: render };
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.NartesVisual = api;
})(typeof globalThis !== "undefined" ? globalThis : this);
