
#!/bin/bash

# Build the project
npm run build

# Copy .htaccess to the dist folder
cp .htaccess dist/

# Copy PHP scripts to the dist folder
cp public/send_email.php dist/

echo "Build completed. The site is ready to be deployed to Hostinger."
echo "Upload the contents of the 'dist' folder to your Hostinger hosting."
