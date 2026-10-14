# fixmylinux.dev website

The website at https://fixmylinux.dev. Plain HTML, no build step, no trackers, no cookies, no third-party scripts.

The script itself lives in [fixmylinux-dev/fixmylinux](https://github.com/fixmylinux-dev/fixmylinux).

## Files

| File | Purpose |
|---|---|
| `index.html` | The homepage |
| `css/style.css` | All the styling |
| `js/site.js` | Copy buttons and remembering your desktop choice. The page works without it. |
| `favicon.svg` | The logo, used for the browser tab and the page header |
| `_redirects` | Sends `fixmylinux.dev/setup.sh` to the latest GitHub release of the script. This is the only redirect; no redirect rules are set anywhere outside this file. |
| `_headers` | Security headers. The Content-Security-Policy blocks the page from loading anything from other websites, so no trackers or third-party scripts can run. |
| `wrangler.jsonc` | Cloudflare deploy config |
| `.assetsignore` | Keeps config files from being published |

Every push to `main` deploys automatically to Cloudflare.

## Contributing

Issues and pull requests are welcome.

## Licence

MIT. The "fixmylinux" name and logo are not covered by this licence and may not be used to imply endorsement or for forks without permission.
Issues and pull requests are welcome.
