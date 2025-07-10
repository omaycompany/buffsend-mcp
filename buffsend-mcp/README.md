# BuffSend MCP Integration

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![MCP Compatible](https://img.shields.io/badge/MCP-Compatible-blue.svg)](https://modelcontextprotocol.io/)

Connect your AI assistant to BuffSend's powerful email marketing platform using the Model Context Protocol (MCP). Access 250M+ verified contacts, advanced email sequencing, and comprehensive marketing automation tools directly from Claude Desktop, Cursor, Windsurf, or any MCP-compatible AI assistant.

## 🚀 Quick Start

### Prerequisites
- AI Assistant (Claude Desktop, Cursor, Windsurf, or any MCP-compatible tool)
- [BuffSend Account](https://www.buffsend.com/register) (free trial available)
- [BuffSend MCP API Key](https://www.buffsend.com/account/api-keys)

### 5-Minute Setup

1. **Get your BuffSend MCP API Key**
   - Sign up at [buffsend.com](https://www.buffsend.com/register)
   - Navigate to "MCP Keys" in the main sidebar
   - Generate a new API key with required scopes

2. **Configure your AI Assistant**
   - Choose your assistant: [Claude Desktop](#claude-desktop) | [Cursor](#cursor) | [Windsurf](#windsurf)
   - Copy the configuration file for your assistant
   - Replace `YOUR_API_KEY_HERE` with your actual API key
   - Restart your AI assistant

3. **Test the Connection**
   ```
   Ask your AI: "Check my BuffSend account status"
   ```

That's it! No Python dependencies or server setup required. BuffSend MCP uses a hosted HTTP API for instant access.

## 🎯 Key Features

- **🔍 Lead Generation**: Search 250M+ verified contacts with advanced filtering
- **📧 Email Campaigns**: Create and launch multi-step email sequences  
- **📞 Voice Calling**: Make phone calls to prospects via integrated calling
- **✅ Email Verification**: Validate email deliverability before sending
- **📊 Analytics**: Track campaign performance and engagement metrics
- **🏢 Company Database**: Search and enrich company information
- **🤖 AI-Friendly**: Built specifically for AI assistant integration

## 🛠️ Installation

### Claude Desktop

**macOS:**
```bash
# Edit configuration file
nano ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

**Windows:**
```bash
# Edit configuration file  
notepad %APPDATA%\Claude\claude_desktop_config.json
```

Add this configuration:
```json
{
  "mcpServers": {
    "buffsend": {
      "headers": {
        "Authorization": "Bearer YOUR_API_KEY_HERE"
      },
      "transport": "http",
      "url": "https://www.buffsend.com/api/v1/mcp"
    }
  }
}
```

### Cursor

**macOS/Linux:**
```bash
# Edit configuration file
nano ~/.cursor/mcp.json
```

**Windows:**
```bash
# Edit configuration file
notepad %USERPROFILE%\.cursor\mcp.json  
```

Add this configuration:
```json
{
  "mcpServers": {
    "buffsend": {
      "headers": {
        "Authorization": "Bearer YOUR_API_KEY_HERE"
      },
      "transport": "http", 
      "url": "https://www.buffsend.com/api/v1/mcp"
    }
  }
}
```

### Windsurf

1. Open Windsurf IDE
2. Go to Settings → Extensions → MCP
3. Add BuffSend MCP with the same configuration as above

## 📖 API Reference

### Core Tools

| Tool | Description | Credits |
|------|-------------|---------|
| `get_account_stats()` | View account overview and usage | Free |
| `get_credit_balance()` | Check available credits | Free |
| `list_senders()` | List connected email accounts | Free |

### Lead Generation

| Tool | Description | Credits |
|------|-------------|---------|
| `search_leads()` | Search 250M+ contact database | 1 per search |
| `search_companies()` | Find company information | 1 per search |
| `enrich_lead_email()` | Find email for specific person | 1 per enrichment |
| `verify_emails()` | Validate email deliverability | 1 per email |

### Campaign Management

| Tool | Description | Credits |
|------|-------------|---------|
| `create_campaign()` | Build email sequences | Free |
| `launch_campaign()` | Start sending campaigns | Free |
| `add_contact_to_campaign()` | Add contacts to campaigns | Free |
| `get_campaign_analytics()` | View performance metrics | Free |

### Advanced Features

| Tool | Description | Credits |
|------|-------------|---------|
| `make_call()` | Phone calls via integrated service | Variable by duration |
| `send_single_email()` | Send individual emails | Free |

## 💡 Usage Examples

### Search and Add Leads to Campaign

```javascript
// Ask your AI assistant:
"Search for CTOs at AI startups in San Francisco, 
create an email campaign introducing our new product, 
and launch it"
```

### Email Verification

```javascript
// Ask your AI assistant:  
"Verify these emails before adding to campaign:
john@company.com, jane@startup.co"
```

### Campaign Analytics

```javascript
// Ask your AI assistant:
"Show me performance metrics for my latest campaign 
including open rates and click rates"
```

## 🔐 Authentication & Security

### API Key Scopes

When generating your MCP API key, ensure these scopes are selected:

- ✅ `leads:search` - Search contact database
- ✅ `contacts:write` - Add and manage contacts  
- ✅ `campaigns:create` - Create email campaigns
- ✅ `campaigns:manage` - Launch and modify campaigns
- ✅ `analytics:read` - View performance metrics
- ✅ `calls:make` - Make phone calls

### Security Best Practices

- Keep your API key secure and never commit it to version control
- Use environment variables when possible
- Regenerate keys periodically from your BuffSend dashboard
- Monitor API usage from your account dashboard

## 🎯 Best Practices

### Professional Email Campaigns

1. **Always Use Real Contacts**: Never create fake email addresses
2. **Enrich Contact Data**: Use `enrich_lead_email()` for verified emails
3. **Personalize Messages**: Use tokens like `{{first_name}}` and `{{company_name}}`
4. **Verify Before Sending**: Check email deliverability with `verify_emails()`
5. **Monitor Performance**: Track metrics with `get_campaign_analytics()`

### Personalization Tokens

Use these tokens in your email content for personalization:

- `{{first_name}}` - Contact's first name
- `{{last_name}}` - Contact's last name  
- `{{company_name}}` - Company name
- `{{title}}` - Job title
- `{{email}}` - Email address
- `{{phone}}` - Phone number

## 🔧 Troubleshooting

### Common Issues

**Authentication Error**
```
Error: Unauthorized (401)
```
- Verify your API key is correct
- Check that all required scopes are enabled
- Ensure the key hasn't expired

**No Tools Available**
```
AI says: "I don't have access to BuffSend tools"
```
- Restart your AI assistant after configuration
- Verify configuration file location and syntax
- Check that the MCP server URL is correct

**Credit Balance Issues**
```
Error: Insufficient credits
```
- Check balance with `get_credit_balance()`
- Purchase credits from your BuffSend dashboard
- Some tools are free (account stats, campaign management)

### Getting Help

- 📧 Email: [support@buffsend.com](mailto:support@buffsend.com)
- 💬 Live Chat: Available on [buffsend.com](https://www.buffsend.com)
- 📖 Documentation: [buffsend.com/docs](https://www.buffsend.com/docs)

## 🚧 Development

### Local Testing

If you want to test the MCP integration locally:

```bash
# Clone this repository
git clone https://github.com/your-username/buffsend-mcp.git
cd buffsend-mcp

# Set your API key
export MCP_API_KEY="your_api_key_here"

# Test connection
node client/test-connection.js
```

### Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏢 About BuffSend

BuffSend is a modern email marketing platform designed for AI-first workflows. Learn more at [buffsend.com](https://www.buffsend.com).

---

**Ready to automate your email marketing with AI?** [Get started with BuffSend](https://www.buffsend.com/register) today! 