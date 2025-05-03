
#!/bin/bash

# Build the project
npm run build

# Copy .htaccess to the dist folder
cp .htaccess dist/

# Copy composer files for Hostinger compatibility
cp composer.json dist/
cp composer.lock dist/

echo "Build completed. The site is ready to be deployed to Hostinger."
echo "Upload the contents of the 'dist' folder to your Hostinger hosting."
