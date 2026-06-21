#!/usr/bin/env sh
#
# This script creates a new blog post in the blog directory.
# Usage: ./new-blog-post.sh <title>

# Check if the title argument is provided
if [ -z "$1" ]; then
    echo "Error: Title argument is required."
    exit 1
fi

# Create a new blog post file with the title as the filename
title=$(echo "$1" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
date=$(date +%Y-%m-%d)
filename="src/content/blogPosts/${date}-${title}.mdx"
touch "$filename"

# Add front matter to the blog post file
echo "---" > "$filename"
echo "title: $1" >> "$filename"
echo "publishDate: $date" >> "$filename"
echo "permalink: $title" >> "$filename"
echo "excerpt: " >> "$filename"
echo "tags: []" >> "$filename"
echo "published: false" >> "$filename"
echo "---" >> "$filename"

echo "✅ Post created at path $filename"
