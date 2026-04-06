import fitz
import os

pdf_path = r"d:\downloads\ScropIDS-main\Chandan_Research_paper .pdf"
output_dir = r"d:\downloads\ScropIDS-main\extracted_images"
os.makedirs(output_dir, exist_ok=True)

try:
    doc = fitz.open(pdf_path)
    count = 0
    for i in range(len(doc)):
        for img in doc.get_page_images(i):
            xref = img[0]
            pix = fitz.Pixmap(doc, xref)
            if pix.n - pix.alpha > 3:
                pix = fitz.Pixmap(fitz.csRGB, pix)
            pix.save(f"{output_dir}/image_{count}.png")
            pix = None
            count += 1
    print(f"Extracted {count} images.")
except Exception as e:
    print(f"Failed with fitz: {e}")
