import os
import re
import base64
from rembg import remove
import io

def process_images(dir_path):
    # Process SVGs
    for filename in os.listdir(dir_path):
        if filename.startswith("erika") and filename.endswith(".svg"):
            input_path = os.path.join(dir_path, filename)
            with open(input_path, 'r', encoding='utf-8') as f:
                content = f.read()

            match = re.search(r'data:image/jpeg;base64,([^"]+)', content)
            if match:
                b64_data = match.group(1)
                img_data = base64.b64decode(b64_data)

                # Save original JPEG
                jpg_filename = filename.replace('.svg', '.jpeg')
                jpg_path = os.path.join(dir_path, jpg_filename)
                with open(jpg_path, 'wb') as f:
                    f.write(img_data)
                
                print(f"Extracted {jpg_filename} from {filename}")
                
                # Remove background
                nobg_data = remove(img_data)
                png_filename = filename.replace('.svg', '-nobg.png')
                png_path = os.path.join(dir_path, png_filename)
                with open(png_path, 'wb') as f:
                    f.write(nobg_data)
                print(f"Removed background and saved as {png_filename}")

dir_path = "public/professional"
process_images(dir_path)
