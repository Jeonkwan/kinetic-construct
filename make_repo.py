#!/usr/bin/env python3
"""Package the existing Kinetic Construct sources without modifying them."""

from pathlib import Path
import zipfile

REPO_DIR = Path(__file__).resolve().parent
ZIP_NAME = "kinetic-construct-v1.2.3.zip"
REPO_FILES = (
    ".github/workflows/pages.yml",
    ".gitignore",
    "css/kinetic-serif.css",
    "js/kinetic-serif.js",
    "reference/kinetic-serif.json",
    "reference/SKILL.md",
    "reference/guide.md",
    "reference/architecture-spec.md",
    "starter/index.html",
    "index.html",
    "llms.txt",
    "llms-full.txt",
    "README.md",
    "LICENSE",
    "make_repo.py",
)


def main():
    missing = [name for name in REPO_FILES if not (REPO_DIR / name).is_file()]
    if missing:
        raise SystemExit("Missing repository files: " + ", ".join(missing))

    output = REPO_DIR / ZIP_NAME
    with zipfile.ZipFile(output, "w", zipfile.ZIP_DEFLATED) as archive:
        for name in REPO_FILES:
            archive.write(REPO_DIR / name, arcname=f"kinetic-construct/{name}")
    print(f"Packaged {len(REPO_FILES)} files into {output}")


if __name__ == "__main__":
    main()
