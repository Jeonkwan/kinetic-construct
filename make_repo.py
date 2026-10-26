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
    "reference/agents/openai.yaml",
    "reference/guide.md",
    "reference/architecture-spec.md",
    "reference/diagram-guide.md",
    "reference/diagram-style.md",
    "starter/diagram.html",
    "sync_reference.py",
    "docs/research/2026-10-26-information-design-review.md",
    "docs/validation/2026-10-26-diagram-pilot.md",
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

    # Fail instead of packaging stale mirrored examples or agent guidance.
    import subprocess
    import sys
    subprocess.run([sys.executable, str(REPO_DIR / "sync_reference.py"), "--check"], check=True)

    output = REPO_DIR / ZIP_NAME
    with zipfile.ZipFile(output, "w", zipfile.ZIP_DEFLATED) as archive:
        for name in REPO_FILES:
            archive.write(REPO_DIR / name, arcname=f"kinetic-construct/{name}")
    print(f"Packaged {len(REPO_FILES)} files into {output}")


if __name__ == "__main__":
    main()
