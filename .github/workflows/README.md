# GitHub Workflows for MathsBalance Neutralino App

This project includes automated GitHub Actions workflows to build OS-specific Neutralino applications for Windows, macOS, and Linux.

## Available Workflows

### 1. **build-windows.yml** - Windows Build
- Builds executable (.exe) for Windows
- Runs on: `windows-latest`
- Triggered on: Tags (v*) or manual dispatch

### 2. **build-macos.yml** - macOS Build
- Builds DMG installer for macOS
- Runs on: `macos-latest`
- Triggered on: Tags (v*) or manual dispatch

### 3. **build-linux.yml** - Linux Build
- Builds AppImage for Linux
- Runs on: `ubuntu-latest`
- Triggered on: Tags (v*) or manual dispatch

### 4. **build-all.yml** - Build All Platforms
- Builds for all three platforms simultaneously
- Creates a unified GitHub Release with all binaries
- Runs on: All platforms (parallel jobs)
- Triggered on: Tags (v*) or manual dispatch

## How to Use

### Automatic Build (Recommended)
1. Commit your changes
2. Create a new tag:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```
3. GitHub Actions will automatically:
   - Build the app for all platforms
   - Create a GitHub Release
   - Upload binaries as release assets

### Manual Build
1. Go to: **GitHub Repository → Actions**
2. Select the desired workflow (e.g., "Build All Platforms")
3. Click **"Run workflow"**
4. The workflow will execute and create artifacts

## Build Outputs

### Windows
- Output: `MathsBalance-v1.0.0-windows.exe`
- Format: Executable installer
- Platform: Windows x64

### macOS
- Output: `MathsBalance-v1.0.0-macos.dmg`
- Format: Disk Image
- Platform: Intel & Apple Silicon (universal)

### Linux
- Output: `MathsBalance-v1.0.0-linux.AppImage`
- Format: AppImage (portable)
- Platform: Linux x64

## Prerequisites

### Local Development
```bash
# Install Node.js 18+
# Install Neutralino CLI
npm install -g @neutralinojs/neu

# Initialize if needed
neu init MyApp

# Update Neutralino
neu update
```

### GitHub Secrets
No secrets required! The workflows use the default `GITHUB_TOKEN` for releases.

## Workflow Details

### Resource Copying
All workflows automatically copy:
- `index.html`, `style.css`, `game.js`, `data.js`
- `resources/` directory
- `images/` directory
- `sounds/` directory

### Build Process
1. Checkout code
2. Setup Node.js environment
3. Install Neutralino CLI
4. Update Neutralino binary
5. Copy resources to distribution
6. Build for target platform
7. Upload as artifact/release

### Release Workflow (build-all.yml)
1. Windows, macOS, and Linux build in parallel
2. All jobs must succeed
3. Create a unified GitHub Release
4. Upload all binaries to the release

## Customization

### Change Build Trigger
Edit the `on:` section in any workflow:
```yaml
on:
  push:
    branches:
      - main
      - develop
  workflow_dispatch:
```

### Change Output Format
For Neutralino output formats, modify the `--output-format`:
- Windows: `exe`, `portable`
- macOS: `dmg`, `zip`
- Linux: `appimage`, `deb`

Example:
```bash
neu build --release --output-format portable
```

### Add Signing/Notarization
For code signing, add your certificate setup in the workflow:
```yaml
- name: Sign and Notarize
  env:
    APPLE_CERTIFICATE: ${{ secrets.APPLE_CERTIFICATE }}
  run: |
    # Your signing commands here
```

## Troubleshooting

### Build Fails on Windows
- Ensure Node.js and npm are installed
- Clear npm cache: `npm cache clean --force`

### Build Fails on macOS
- Install Xcode Command Line Tools: `xcode-select --install`
- Check macOS version compatibility

### Build Fails on Linux
- Install required dependencies
- Ensure GTK 3 and WebKit2 are installed

## Downloading Builds

### From GitHub Releases
1. Go to **Releases** tab
2. Download the binary for your OS
3. Run the application

### From Artifacts (Workflow Runs)
1. Go to **Actions** tab
2. Click on completed workflow
3. Download artifact from the summary

## Next Steps

1. **Push this configuration to GitHub**
   ```bash
   git add .github/workflows/
   git commit -m "Add CI/CD workflows for cross-platform builds"
   git push origin main
   ```

2. **Create your first release tag**
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

3. **Monitor the workflow**
   - Go to Actions tab
   - Watch the build progress
   - Download from Releases when complete

## Resources

- [Neutralino Documentation](https://neutralino.js.org/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Building Neutralino Apps](https://neutralino.js.org/docs/distribution/overview)

---

For issues or questions, check the GitHub Actions logs in the Actions tab!
