#!/usr/bin/env python3
import os, re, sys, glob

def fix_file(path):
    with open(path, 'r', encoding='utf-8', errors='ignore') as fh:
        html = fh.read()
    new = html
    new = new.replace('href="assets/css/styles.css"', 'href="../assets/css/styles.css"')
    new = new.replace("href='assets/css/styles.css'", "href='../assets/css/styles.css'")
    new = new.replace('src="assets/js/main.js"', 'src="../assets/js/main.js"')
    new = new.replace("src='assets/js/main.js'", "src='../assets/js/main.js'")
    new = new.replace('src="assets/img/logo.svg"', 'src="../assets/img/logo.svg"')
    new = new.replace("src='assets/img/logo.svg'", "src='../assets/img/logo.svg'")
    new = new.replace('assets/img/../assets/new_img/', '../assets/new_img/')
    if new != html:
        with open(path, 'w', encoding='utf-8') as fh:
            fh.write(new)
        return True
    return False

def main(root):
    blog_dir = os.path.join(root, 'blog')
    changed = []
    for path in glob.glob(os.path.join(blog_dir, '*.html')):
        if fix_file(path):
            changed.append(os.path.relpath(path, root))
    print("Updated files:", changed if changed else "none")

if __name__ == "__main__":
    # Usage: python fix_ajmerican_paths.py /path/to/site-root
    root = sys.argv[1] if len(sys.argv) > 1 else '.'
    main(os.path.abspath(root))
