#!/usr/bin/env python3
"""Build web/js/lesson-data.js from content/carpanlar lesson scenarios.

The generated file is what the static site loads. It works from file://
(no fetch). Re-run from the repo root:

    python3 tools/build_lesson_data.py
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "content" / "carpanlar"
OUT = ROOT / "web" / "js" / "lesson-data.js"

FILES = [
    "01-pozitif-carpanlar.md",
    "02-asal-carpanlar.md",
    "03-ebob-hesaplama.md",
    "04-ebob-problemleri.md",
    "05-ekok-hesaplama.md",
    "06-ekok-problemleri.md",
    "07-aralarinda-asal.md",
    "08-beceri-temelli.md",
]

TOPICS = [
    ("Çarpanlar ve Katlar", "M.8.1.1"),
    ("Üslü İfadeler", "M.8.1.2"),
    ("Kareköklü İfadeler", "M.8.1.3"),
    ("Veri Analizi", "M.8.4.1"),
    ("Basit Olayların Olma Olasılığı", "M.8.5.1"),
    ("Cebirsel İfadeler ve Özdeşlikler", "M.8.2.1"),
    ("Doğrusal Denklemler", "M.8.2.2"),
    ("Eşitsizlikler", "M.8.2.3"),
    ("Üçgenler", "M.8.3.1"),
    ("Eşlik ve Benzerlik", "M.8.3.3"),
    ("Dönüşüm Geometrisi", "M.8.3.2"),
    ("Geometrik Cisimler", "M.8.3.4"),
]

GROUPS = {
    "2": [
        ("2.1", "Asal sayılar"),
        ("2.2", "Asal çarpan ağacı"),
        ("2.3", "Asal çarpan algoritması"),
        ("2.4", "Üslü çarpım biçiminde yazma"),
    ],
    "4": [
        ("4.1", "EBOB problem türleri"),
        ("4.3", "Örnek problem dizisi"),
    ],
    "6": [
        ("6.1", "EKOK problem türleri"),
        ("6.3", "Örnek problem dizisi"),
    ],
    "8": [
        ("8.1", "Kitaptaki beceri ve soru türleri"),
        ("8.2", "Çok adımlı karma model kurma"),
        ("8.3", "Tablo, şekil ve metin okuma"),
    ],
}

QUOTE = re.compile(r"“([^”]+)”")
STEP_HEAD = re.compile(r"^\*\*Adım (\d+)", re.M)
ANSWER = re.compile(r"\*\*Doğru cevap \(sırayla\):\*\* `([^`]+)`")
LEAF_HEAD = re.compile(r"^### ((?:\d+\.)+\d+)\s+(.+)$", re.M)


def field(block: str, label: str) -> str:
    match = re.search(rf"\*\*{re.escape(label)}:\*\*\s*(.+)", block)
    return match.group(1).strip() if match else ""


def split_answers(raw: str) -> list[str]:
    return [part.strip() for part in raw.split(";")]


def fill_prompt(text: str, answers: list[str]) -> str:
    parts = text.split("□")
    if len(parts) != len(answers) + 1:
        return text
    out: list[str] = []
    for part, answer in zip(parts, answers):
        out.append(part)
        out.append(answer)
    out.append(parts[-1])
    return "".join(out)


def parse_steps(block: str) -> list[dict]:
    chunks = re.split(r"(?=^\*\*Adım \d+)", block, flags=re.M)
    steps = []
    for chunk in chunks:
        head = STEP_HEAD.search(chunk)
        if not head:
            continue
        prompts = QUOTE.findall(chunk)
        answer_match = ANSWER.search(chunk)
        if not prompts or not answer_match:
            raise SystemExit(f"Adım ayrıştırılamadı:\n{chunk[:240]}")
        prompt = prompts[0]
        hint = prompts[1] if len(prompts) > 1 else ""
        answers = split_answers(answer_match.group(1))
        blanks = prompt.count("□")
        if blanks != len(answers):
            raise SystemExit(
                f"Boşluk sayısı uyuşmuyor ({blanks} boşluk, {len(answers)} cevap): {prompt} :: {answers}"
            )
        ordered = bool(
            re.search(r"sıralı|küçükten büyüğe|küçük asal önce", prompt, re.I)
        )
        steps.append(
            {
                "n": int(head.group(1)),
                "prompt": prompt,
                "answers": answers,
                "hint": hint,
                "explain": f"{hint} Tamamlanmış cümle: {fill_prompt(prompt, answers)}",
                "ordered": ordered,
            }
        )
    if len(steps) != 3:
        raise SystemExit(f"Üç adım bekleniyordu, {len(steps)} bulundu.")
    return steps


def parse_examples(block: str) -> list[str]:
    section = block.split("#### İki özgün çalışılmış örnek", 1)[-1]
    section = section.split("#### Bağımsız alıştırmalar", 1)[0]
    found = re.findall(r"\*\*Örnek (\d+)\.\*\*\s*(.+)", section)
    examples = [text.strip() for _, text in found]
    if len(examples) < 2:
        raise SystemExit("İki çalışılmış örnek bulunamadı.")
    return examples


def parse_exercises(block: str) -> list[dict]:
    section = block.split("#### Bağımsız alıştırmalar ve cevap anahtarı", 1)[-1]
    section = section.split("**Yaygın öğrenci hataları:**", 1)[0]
    found = re.findall(
        r"^\d+\.\s+\*\*Soru:\*\*\s*(.+)\n\s+-\s+\*\*Cevap / kontrol:\*\*\s*(.+)$",
        section,
        flags=re.M,
    )
    if len(found) < 2:
        raise SystemExit(f"Alıştırma eksik:\n{section[:300]}")
    exercises = []
    for question, answer in found:
        parts = [part.strip() for part in answer.split(";")]
        exercises.append(
            {
                "question": question.strip(),
                "answers": parts,
                "answerText": answer.strip(),
            }
        )
    return exercises


def parse_leaf(block: str) -> dict:
    head = LEAF_HEAD.search(block)
    if not head:
        raise SystemExit(f"Yaprak başlığı yok:\n{block[:120]}")
    mistakes = field(block, "Yaygın öğrenci hataları")
    mistake_parts = [part.strip() for part in mistakes.split(";") if part.strip()]
    return {
        "id": head.group(1),
        "title": head.group(2).strip(),
        "kazanım": field(block, "Kazanım kodu"),
        "goal": field(block, "Öğrenilecek"),
        "prior": field(block, "Ön bilgi"),
        "visual": field(block, "Görsel / somut model"),
        "steps": parse_steps(block),
        "examples": parse_examples(block),
        "exercises": parse_exercises(block),
        "mistakes": mistake_parts,
    }


def parse_file(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    title_line = re.search(r"^# (.+)$", text, re.M)
    page = re.search(r"\*\*(s\.\d+)\*\*", text)
    kazanım = re.search(r"Kazanım:\s+\*\*([^*]+)\*\*", text)
    body = text.split("## Bölüm sonu", 1)[0]
    leaves = [parse_leaf(chunk) for chunk in re.split(r"\n(?=### )", body) if chunk.startswith("### ")]
    section_id = leaves[0]["id"].split(".")[0]
    return {
        "id": section_id,
        "title": re.sub(r"^\d+\.\s+", "", title_line.group(1).strip()) if title_line else path.stem,
        "page": page.group(1) if page else "",
        "kazanım": kazanım.group(1).strip() if kazanım else "",
        "leaves": leaves,
    }


def nest(section: dict) -> dict:
    groups = GROUPS.get(section["id"], [])
    items: list[dict] = []
    group_buckets: dict[str, dict] = {}
    for leaf in section["leaves"]:
        group = next((g for g in groups if leaf["id"].startswith(g[0] + ".")), None)
        if group is None:
            items.append({"type": "leaf", "id": leaf["id"]})
            continue
        bucket = group_buckets.get(group[0])
        if bucket is None:
            bucket = {"type": "group", "id": group[0], "title": group[1], "leaves": []}
            group_buckets[group[0]] = bucket
            items.append(bucket)
        bucket["leaves"].append(leaf["id"])
    return {
        "id": section["id"],
        "title": section["title"],
        "page": section["page"],
        "kazanım": section["kazanım"],
        "items": items,
        "leaves": section["leaves"],
    }


def main() -> None:
    sections = [nest(parse_file(SRC / name)) for name in FILES]
    leaves = [leaf for section in sections for leaf in section["leaves"]]
    topics = []
    for index, (title, code) in enumerate(TOPICS, start=1):
        topic = {
            "n": index,
            "title": title,
            "code": code,
            "ready": index == 1,
        }
        if index == 1:
            topic["sections"] = sections
        topics.append(topic)
    data = {
        "product": "Nartes+",
        "course": "LGS Matematik · 8. sınıf",
        "topicTitle": TOPICS[0][0],
        "topicCode": TOPICS[0][1],
        "topics": topics,
        "leafOrder": [leaf["id"] for leaf in leaves],
    }
    payload = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
    payload = payload.replace("\u2028", "\\u2028").replace("\u2029", "\\u2029")
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(
        "/* Generated by tools/build_lesson_data.py — do not edit by hand. */\n"
        "(function (root) {\n"
        f"  var data = {payload};\n"
        "  if (typeof module === 'object' && module.exports) module.exports = data;\n"
        "  else root.NARTES = data;\n"
        "})(typeof globalThis !== 'undefined' ? globalThis : this);\n",
        encoding="utf-8",
    )
    exercises = sum(len(leaf["exercises"]) for leaf in leaves)
    steps = sum(len(leaf["steps"]) for leaf in leaves)
    print(f"Yaprak: {len(leaves)}  Adım: {steps}  Alıştırma: {exercises}")
    print(f"Yazıldı: {OUT}")


if __name__ == "__main__":
    main()
