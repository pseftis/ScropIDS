import sys
import os

try:
    import PyPDF2
except ImportError:
    os.system("pip install PyPDF2")
    import PyPDF2

pdf_path = r"d:\downloads\ScropIDS-main\Chandan_Research_paper .pdf"
with open(pdf_path, "rb") as f:
    reader = PyPDF2.PdfReader(f)
    print(f"Pages: {len(reader.pages)}")
    text = ""
    for page in reader.pages:
        extracted = page.extract_text()
        if extracted:
            text += extracted + "\n"
    words = len(text.split())
    print(f"Total Words: {words}")
    print("Preview snippet:")
    print(text[:1000])
