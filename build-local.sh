#!/bin/bash
# Local build script for MathsBalance

set -e

echo "Building MathsBalance Neutralino App..."

# Install dependencies
echo "Installing Neutralino CLI..."
npm install -g @neutralinojs/neu 2>/dev/null || true

# Update Neutralino
echo "Updating Neutralino..."
neu update

# Detect OS and build accordingly
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" ]]; then
    echo "Building for Windows..."
    neu build --release --output-format exe
    echo "✓ Windows build complete: dist/MathsBalance/*.exe"
    
elif [[ "$OSTYPE" == "darwin"* ]]; then
    echo "Building for macOS..."
    neu build --release --output-format dmg
    echo "✓ macOS build complete: dist/MathsBalance/*.dmg"
    
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    echo "Building for Linux..."
    # Install dependencies if needed
    if ! command -v gtk-launch &> /dev/null; then
        echo "Installing Linux dependencies..."
        sudo apt-get update
        sudo apt-get install -y libgtk-3-dev libwebkit2gtk-4.0-dev
    fi
    neu build --release --output-format appimage
    echo "✓ Linux build complete: dist/MathsBalance/*.AppImage"
    
else
    echo "Unknown OS: $OSTYPE"
    exit 1
fi

echo ""
echo "✓ Build completed successfully!"
echo "The app is ready in: dist/MathsBalance/"
