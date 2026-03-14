# GitHub Copilot Instructions

## Browser Verification After Every Change

After making any code change or completing any task:

1. **Open Chrome DevTools MCP** and navigate to the relevant page (which is https://placely-three.vercel.app).
2. **Verify the change visually and functionally** — check that the UI renders correctly, no console errors appear, and the affected feature works as expected.
3. **If something is broken**, fix it immediately before reporting back. Do not report completion until the app is working correctly in the browser.
4. **Only send the final result message** once the change has been verified in Chrome and everything looks good.
5. **Push the code to GitHub** after confirming it works in the browser.

> Never report a task as done without first confirming it works in the browser via Chrome DevTools.
