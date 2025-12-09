# Deployment Instructions

To make your site live without any errors, please follow these steps:

1.  **File Checklist**: Ensure you upload **ALL** of the following files to your web server (or drag and drop them into Netlify/Vercel/GitHub Pages):
    *   `main.html` (This is your homepage)
    *   `style.css`
    *   `script.js`
    *   `new_image_1.jpg`
    *   `new_image_2.jpg`
    *   `new_image_3.jpg`
    *   `new_image_4.jpg`
    *   `new_image_5.jpg`

2.  **Do Not Rename**: Keep the file names exactly as they are. Changing `style.css` to `Style.css` or `new_image_1.jpg` to `image1.jpg` will break the site.

3.  **Folder Structure**: Keep all these files in the **same folder**. Do not put images in a subfolder unless you update the code in `main.html`.

4.  **Testing**:
    *   Open `main.html` in your browser before uploading to double-check everything works locally.
    *   If you see a "broken image" icon, it means an image file is missing or named incorrectly.

## Troubleshooting
*   **Images not showing?** Check if the file names on your server match exactly (case-sensitive).
*   **Styles missing?** Ensure `style.css` is in the same folder as `main.html`.
