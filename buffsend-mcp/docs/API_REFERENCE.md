# BuffSend MCP API Reference

Complete reference for all 40+ tools available through the BuffSend Model Context Protocol (MCP) integration.

## 🚀 Getting Started Tools

### `start_here_first()`
**Description**: Essential startup protocol - provides orientation and safety guidelines  
**Credits**: Free  
**Parameters**: None  
**Usage**: Call this first to understand BuffSend MCP capabilities

### `get_account_stats()`
**Description**: View account overview including usage statistics  
**Credits**: Free  
**Parameters**: None  
**Returns**: Account info, usage metrics, subscription details

### `get_credit_balance()`
**Description**: Check available credits for paid operations  
**Credits**: Free  
**Parameters**: None  
**Returns**: Current credit balance and usage breakdown

### `get_mcp_help()`
**Description**: Complete MCP documentation and help guide  
**Credits**: Free  
**Parameters**: None  
**Returns**: Comprehensive tool documentation

## 🔍 Lead Generation & Search

### `search_leads()`
**Description**: Search 250M+ verified contacts with advanced filtering  
**Credits**: 1 credit per search  
**Parameters**:
- `person_titles` (array): Job titles to search for
- `person_locations` (array): Geographic locations  
- `organization_industries` (array): Industry filters
- `organization_locations` (array): Company locations
- `organization_keywords` (array): Company keywords
- `per_page` (integer): Results per page (max 100)

**Example**:
```json
{
  "person_titles": ["CEO", "CTO", "VP Engineering"],
  "person_locations": ["San Francisco", "New York"],
  "organization_industries": ["Software", "AI/ML"],
  "per_page": 25
}
```

### `search_companies()`
**Description**: Find company information using BuffSend's proprietary database  
**Credits**: 1 credit per search  
**Parameters**:
- `organization_names` (array): Specific company names
- `organization_domains` (array): Company domains
- `organization_industries` (array): Industry filters
- `organization_locations` (array): Company locations
- `per_page` (integer): Results per page (max 100)

### `search_qualified_leads()`
**Description**: Search for pre-qualified leads with quality scoring  
**Credits**: 1 credit per search  
**Parameters**:
- `person_titles` (array): Job titles
- `organization_industries` (array): Industries
- `organization_locations` (array): Locations
- `min_quality_score` (integer): Minimum quality score (1-100)
- `per_page` (integer): Results per page

### `enrich_lead_email()`
**Description**: Find email address for a specific person  
**Credits**: 1 credit per enrichment  
**Parameters**:
- `first_name` (string): Person's first name
- `last_name` (string): Person's last name
- `company_domain` (string): Company domain

**Example**:
```json
{
  "first_name": "John",
  "last_name": "Smith", 
  "company_domain": "company.com"
}
```

### `bulk_enrich_emails()`
**Description**: Enrich multiple contacts at once  
**Credits**: 1 credit per contact  
**Parameters**:
- `contacts` (array): Array of contact objects
- `max_contacts` (integer): Max contacts to process (50 max)

## ✅ Email Verification

### `verify_emails()`
**Description**: Validate email deliverability  
**Credits**: 1 credit per email  
**Parameters**:
- `emails` (array): Email addresses to verify
- `enable_smtp_verification` (boolean): Enable SMTP checking

**Returns**: Verification status, deliverability score, risk assessment

## 📧 Campaign Management

### `create_campaign()`
**Description**: Build email sequences and campaigns  
**Credits**: Free  
**Parameters**:
- `name` (string): Campaign name
- `sender_id` (integer): Sender ID from `list_senders()`
- `subject` (string): Email subject line
- `content` (string): Email content with personalization tokens
- `delay_value` (integer): Delay between emails
- `delay_unit` (string): "minutes", "hours", or "days"

**Example**:
```json
{
  "name": "Product Introduction Campaign",
  "sender_id": 114,
  "subject": "Hi {{first_name}}, quick question about {{company_name}}",
  "content": "Hi {{first_name}},\n\nI noticed {{company_name}} is growing quickly...",
  "delay_value": 0,
  "delay_unit": "minutes"
}
```

### `launch_campaign()`
**Description**: Start sending a campaign  
**Credits**: Free  
**Parameters**:
- `campaign_id` (integer): Campaign ID to launch

### `list_campaigns()`
**Description**: View all campaigns  
**Credits**: Free  
**Parameters**: None

### `get_campaign_analytics()`
**Description**: View campaign performance metrics  
**Credits**: Free  
**Parameters**:
- `campaign_id` (integer): Campaign ID
- `date_from` (string): Start date (YYYY-MM-DD)
- `date_to` (string): End date (YYYY-MM-DD)

**Returns**: Open rates, click rates, reply rates, bounce rates

### `get_campaign_steps()`
**Description**: Get all steps in a campaign sequence  
**Credits**: Free  
**Parameters**:
- `campaign_id` (integer): Campaign ID

### `add_campaign_step()`
**Description**: Add a new step to campaign sequence  
**Credits**: Free  
**Parameters**:
- `campaign_id` (integer): Campaign ID
- `subject` (string): Email subject
- `body` (string): Email content
- `step_number` (integer): Step position
- `delay_value` (integer): Delay before sending
- `delay_unit` (string): Time unit for delay

## 👥 Contact Management

### `add_contact()`
**Description**: Add a new contact to database  
**Credits**: Free  
**Parameters**:
- `email` (string): Contact email (required)
- `first_name` (string): First name
- `last_name` (string): Last name
- `company` (string): Company name
- `job_title` (string): Job title
- `location` (string): Location
- `phone` (string): Phone number

### `add_contact_to_campaign()`
**Description**: Add contact to existing campaign  
**Credits**: Free  
**Parameters**:
- `campaign_id` (integer): Campaign ID
- `email` (string): Contact email
- `first_name` (string): First name
- `last_name` (string): Last name
- `company` (string): Company name

### `list_contacts()`
**Description**: List contacts in database  
**Credits**: Free  
**Parameters**:
- `page` (integer): Page number
- `per_page` (integer): Results per page
- `search_query` (string): Search term

### `get_campaign_contacts()`
**Description**: Get contacts in specific campaign  
**Credits**: Free  
**Parameters**:
- `campaign_id` (integer): Campaign ID
- `page` (integer): Page number
- `per_page` (integer): Results per page
- `status` (string): Contact status filter

## 📧 Email Senders

### `list_senders()`
**Description**: List connected email accounts  
**Credits**: Free  
**Parameters**: None  
**Returns**: Available senders with verification status

### `add_gmail_sender()`
**Description**: Add Gmail account as sender  
**Credits**: Free  
**Parameters**:
- `email` (string): Gmail address
- `display_name` (string): Display name
- `is_default` (boolean): Set as default sender

## 📞 Voice & Communication

### `make_call()`
**Description**: Make phone calls via integrated calling service  
**Credits**: Variable by duration  
**Parameters**:
- `to_number` (string): Phone number to call
- `from_number` (string): Caller ID number
- `record_call` (boolean): Record the call

## 📊 Analytics & Monitoring

### `get_step_performance()`
**Description**: Analyze performance of campaign steps  
**Credits**: Free  
**Parameters**:
- `campaign_id` (integer): Campaign ID
- `step_number` (integer): Specific step to analyze

### `get_contact_journey()`
**Description**: Track individual contact progress  
**Credits**: Free  
**Parameters**:
- `campaign_id` (integer): Campaign ID
- `contact_email` (string): Contact email

### `monitor_deliverability()`
**Description**: Monitor email deliverability metrics  
**Credits**: Free  
**Parameters**:
- `sender_id` (integer): Sender to monitor

## 🛠️ Advanced Features

### `schedule_campaign_launch()`
**Description**: Schedule campaign for future launch  
**Credits**: Free  
**Parameters**:
- `campaign_id` (integer): Campaign ID
- `launch_at` (string): Launch date/time (ISO format)
- `timezone` (string): Timezone

### `pause_contact_campaign()`
**Description**: Pause specific contact in campaign  
**Credits**: Free  
**Parameters**:
- `campaign_id` (integer): Campaign ID
- `contact_email` (string): Contact email

### `resume_contact_campaign()`
**Description**: Resume paused contact  
**Credits**: Free  
**Parameters**:
- `campaign_id` (integer): Campaign ID
- `contact_email` (string): Contact email

## 🔧 Diagnostic Tools

### `diagnose_campaign_health()`
**Description**: Diagnose campaign performance issues  
**Credits**: Free  
**Parameters**:
- `campaign_id` (integer): Campaign ID

### `fix_stuck_campaign()`
**Description**: Fix stuck or stalled campaigns  
**Credits**: Free  
**Parameters**:
- `campaign_id` (integer): Campaign ID
- `fix_type` (string): "auto" or "manual"

### `diagnose_sender_health()`
**Description**: Check sender account health  
**Credits**: Free  
**Parameters**:
- `sender_id` (integer): Sender ID

### `check_sender_setup()`
**Description**: Verify sender configuration  
**Credits**: Free  
**Parameters**: None

## 📈 Quality & Scoring

### `score_lead_quality()`
**Description**: Score lead quality based on data completeness  
**Credits**: Free  
**Parameters**:
- `lead_data` (object): Lead information to score

### `validate_contact_import()`
**Description**: Validate contact import data  
**Credits**: Free  
**Parameters**:
- `import_data` (object): Contact data to validate

## 💳 Credit Management

### `get_user_schedules()`
**Description**: Get delivery schedules for timing preferences  
**Credits**: Free  
**Parameters**: None

## 🎓 Training & Help

### `get_ai_training_guide()`
**Description**: Complete AI training and usage guide  
**Credits**: Free  
**Parameters**: None

---

## 🏷️ Personalization Tokens

Use these tokens in email content for personalization:

| Token | Description | Example |
|-------|-------------|---------|
| `{{first_name}}` | Contact's first name | "Hi John" |
| `{{last_name}}` | Contact's last name | "Mr. Smith" |
| `{{company_name}}` | Company name | "Acme Corp" |
| `{{title}}` | Job title | "CEO" |
| `{{email}}` | Email address | "john@acme.com" |
| `{{phone}}` | Phone number | "+1-555-123-4567" |

## ⚠️ Important Notes

### Credit Usage
- Lead searches and email enrichment consume credits
- Campaign management and analytics are free
- Phone calls have variable costs based on duration

### Authentication
- All tools require valid MCP API key in Authorization header
- Keys should include required scopes for intended operations

### Rate Limits
- Search tools: 100 results maximum per request
- Bulk operations: 50 contacts maximum per request
- API calls are rate-limited to prevent abuse

### Best Practices
- Always use real contact data from search results
- Enrich contacts before adding to campaigns
- Use personalization tokens for better engagement
- Monitor deliverability metrics regularly
- Verify emails before sending campaigns 