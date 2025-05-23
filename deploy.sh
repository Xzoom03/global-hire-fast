
#!/bin/bash

# Build the project with optimization
echo "Building optimized production build..."
VITE_ENV=production npm run build

# Copy .htaccess to the dist folder
cp .htaccess dist/

# Copy composer files for Hostinger compatibility
cp composer.json dist/
cp composer.lock dist/

# Create a verification file to ensure proper deployment
echo "<?php echo 'Deployment successful'; ?>" > dist/verify.php

echo "Build completed. The site is ready to be deployed to Hostinger."
echo "Upload the contents of the 'dist' folder to your Hostinger hosting."
echo "After deployment, visit yourdomain.com/verify.php to confirm successful deployment."
