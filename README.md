# MCP Automation Tool

⚡ Ultra-fast AI-powered automation system using MCP (Model Context Protocol) and Groq AI.

## ✨ Features


- 🤖 AI-powered command execution
- 📸 Visual automation with screenshots
- 📄 Document parsing (Word/PDF)

## 🚀 Quick Start

### Prerequisites

- Python 3.8+
- Groq API Key ([Get one here](https://console.groq.com/))
- GitHub Token (optional, for GitHub features)
- Jira credentials (optional, for Jira features)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Configure environment variables in `.env`:
```env
GROQ_API_KEY=your_groq_api_key
GITHUB_TOKEN=your_github_token
JIRA_URL=https://your-domain.atlassian.net
JIRA_EMAIL=your_email@example.com
JIRA_API_TOKEN=your_jira_token
```

### Usage

Run the CLI application:
```bash
python app_cli.py
```

#### Example Commands

**Browser Automation:**
- `play music on youtube`
- `go to google.com`
- `take a screenshot`

**GitHub Automation:**
- `create github repo my-new-project`
- `build this project and push to github`
- `generate readme for this project`

**Jira Automation:**
- `complete jira assignment "documents/Assignment.docx"`
- `complete jira assignment with screenshots`

**Deployment:**
- `deploy this on vercel`

**File Operations:**
- `list files`
- `read file config.py`

## 🏗️ Project Structure

```
nextjs-2025-20251116_125424/
├── src/
│   ├── tools/
│   │   ├── browser_tool.py      # Browser automation
│   │   ├── github_tool.py       # GitHub operations
│   │   ├── vercel_tool.py       # Vercel deployment
│   │   ├── jira_tool.py         # Jira integration
│   │   └── document_parser.py   # Document parsing
│   ├── ai_client.py             # AI client (Groq)
│   ├── mcp_server.py            # MCP server
│   ├── config.py                # Configuration
│   └── database.py              # Task logging
├── app_cli.py                    # CLI entry point
├── documents/                    # Document storage
├── screenshots/                  # Screenshot output
└── .env                          # Environment config
```

## 🔧 Configuration

### Groq AI
Get your API key from [Groq Console](https://console.groq.com/)

### GitHub
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token with `repo` permissions
3. Add to `.env` as `GITHUB_TOKEN`

### Jira
1. Go to [Atlassian API tokens](https://id.atlassian.com/manage-profile/security/api-tokens)
2. Create API token
3. Add credentials to `.env`

## 📝 Available Tools

- **browser_navigate** - Navigate to URLs
- **youtube_play** - Search and play YouTube videos
- **browser_screenshot** - Capture screenshots
- **github_create_repo** - Create GitHub repositories
- **github_push_code** - Push local code to GitHub
- **vercel_deploy** - Deploy to Vercel
- **jira_create_assignment** - Create Jira tasks
- **file_read** / **file_write** - File operations
- **list_directory** - List directory contents

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License

## 🙏 Acknowledgments

- Powered by [Groq](https://groq.com/) - Ultra-fast AI inference
- Built with [MCP](https://modelcontextprotocol.io/) - Model Context Protocol
- Browser automation by [Playwright](https://playwright.dev/)

---

⚡ Built with MCP Automation Tool
