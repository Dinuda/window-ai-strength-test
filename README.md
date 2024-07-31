# Chrome AI Strength Test

This project is a demo application that tests the capabilities of Chrome's built-in AI model using the `window.ai` API. It's designed to showcase the strength and limitations of the local AI model running directly in the Chrome browser.

## Features

- Tests various capabilities of the Chrome AI model
- Runs entirely in the browser without server-side processing
- Provides instant feedback on AI performance
- Demonstrates privacy-focused AI processing

## Prerequisites

- Google Chrome (version 127+) or compatible Chromium-based browser
- Chrome AI features enabled (see setup instructions below)

## Setup

1. Install Chrome Canary (version 127+)
2. Enable the Prompt API:
   - Navigate to `chrome://flags/#prompt-api-for-gemini-nano`
   - Set to "Enabled"
3. Enable the Optimization Guide:
   - Navigate to `chrome://flags/#optimization-guide-on-device-model`
   - Set to "Enabled BypassPerfRequirement"
4. Restart your browser
5. Download the model:
   - Go to `chrome://components/`
   - Find "Optimization Guide On Device Model"
   - Ensure it's fully downloaded (version should not be "0.0.0.0")
   - If necessary, click "Check for update"

## Installation

1. Clone the repository:

```
git clone https://github.com/yourusername/chrome-ai-strength-test.git
cd chrome-ai-strength-test
```

2. Install dependencies:

```
npm install
```

3. Start the development server:

```
npm run dev
```

4. Open `http://localhost:3000` in your Chrome browser

## Usage

The application presents a series of tests designed to evaluate different aspects of the Chrome AI model's capabilities. Simply interact with the interface to run tests and view results.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the window-ai-strength-test project by Dinuda
- Uses the `window.ai` API provided by Google Chrome

## Contact

For any questions or feedback, please contact Me.
