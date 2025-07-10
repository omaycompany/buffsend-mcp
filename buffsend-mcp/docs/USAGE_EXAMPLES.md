# BuffSend MCP Usage Examples

Real-world examples of using BuffSend MCP with AI assistants for email marketing automation.

## 🎯 Complete Lead Generation Workflow

### Example 1: Finding and Contacting SaaS CTOs

```
Ask your AI assistant:

"Search for CTOs at SaaS companies in San Francisco with 50-200 employees. 
Create an email campaign introducing our new development tools, 
enrich the contacts to get verified emails, and launch the campaign."
```

**What happens behind the scenes:**

1. **Search for leads** using `search_leads()`:
   ```json
   {
     "person_titles": ["CTO", "Chief Technology Officer"],
     "organization_industries": ["Software", "SaaS"],
     "organization_locations": ["San Francisco"],
     "per_page": 25
   }
   ```

2. **Enrich contacts** using `enrich_lead_email()` for each lead
3. **Create campaign** using `create_campaign()`:
   ```json
   {
     "name": "SaaS CTO Outreach - Dev Tools",
     "subject": "Hi {{first_name}}, new tools for {{company_name}}",
     "content": "Hi {{first_name}},\n\nI noticed {{company_name}} is building innovative software...",
     "sender_id": 114
   }
   ```

4. **Add contacts** using `add_contact_to_campaign()`
5. **Launch campaign** using `launch_campaign()`

### Example 2: Account-Based Marketing Campaign

```
Ask your AI assistant:

"I want to target these specific companies: Stripe, Shopify, and Square. 
Find decision makers in engineering and product roles, 
create a personalized campaign about our API integration tools, 
and set up a 3-email sequence with 2-day delays."
```

**AI will execute:**

1. Search companies by name
2. Find contacts with relevant titles  
3. Create multi-step campaign sequence
4. Set appropriate delays between emails
5. Launch the campaign

## 📧 Email Campaign Examples

### Professional Introduction Email

```
Subject: Hi {{first_name}}, quick question about {{company_name}}'s tech stack

Hi {{first_name}},

I've been following {{company_name}}'s growth and I'm impressed with your recent product launches.

I'm reaching out because I think our API integration platform could help {{company_name}} ship features faster. We've helped similar companies like [social proof] reduce integration time by 60%.

Worth a 15-minute call to discuss?

Best regards,
[Your name]

P.S. I noticed you're hiring engineers - we could help streamline your onboarding process too.
```

### Follow-up Email (Step 2)

```
Subject: Re: Quick question about {{company_name}}'s tech stack

Hi {{first_name}},

I sent a note last week about helping {{company_name}} with API integrations.

I know you're busy, but I wanted to share a quick case study that might be relevant:

[Company similar to {{company_name}}] was spending 2-3 weeks on each new integration. After implementing our platform, they reduced that to 2-3 days.

The 5-minute demo might be worth your time: [calendar link]

Best,
[Your name]
```

## 🔍 Advanced Search Examples

### Finding E-commerce Decision Makers

```
"Search for VPs and Directors at e-commerce companies in New York 
that have raised Series A or B funding in the last 2 years"
```

**Search parameters:**
```json
{
  "person_titles": ["VP", "Director", "Head of"],
  "organization_industries": ["E-commerce", "Retail"],
  "organization_locations": ["New York"],
  "organization_keywords": ["Series A", "Series B", "funded"]
}
```

### Tech Startup Founders

```
"Find founders and co-founders at AI/ML startups in the Bay Area 
with 10-50 employees"
```

**Search parameters:**
```json
{
  "person_titles": ["Founder", "Co-founder", "CEO"],
  "organization_industries": ["Artificial Intelligence", "Machine Learning"],
  "organization_locations": ["San Francisco", "Palo Alto", "Mountain View"],
  "per_page": 50
}
```

## 📊 Analytics and Optimization

### Campaign Performance Review

```
Ask your AI assistant:

"Show me the performance metrics for my last 3 campaigns. 
Which one had the best open rates and click rates? 
What can we learn from the top performer?"
```

**AI will:**
1. Use `list_campaigns()` to get recent campaigns
2. Call `get_campaign_analytics()` for each campaign
3. Compare metrics and identify best performers
4. Analyze successful elements for future campaigns

### A/B Testing Email Subject Lines

```
"Create two versions of my outreach campaign - one with a direct subject line 
and one with a question-based subject line. Send each to 50% of my lead list."
```

**Workflow:**
1. Create Campaign A with direct subject
2. Create Campaign B with question subject  
3. Split lead list evenly between campaigns
4. Launch both campaigns simultaneously
5. Monitor performance after 48 hours

## 🎯 Industry-Specific Examples

### SaaS Outreach

```
Subject: {{company_name}}'s customer onboarding - quick improvement idea

Hi {{first_name}},

I was researching {{company_name}} and noticed you focus heavily on user experience. 

I have an idea that could reduce your customer onboarding time by 40% - similar to what we did for [competitor].

Worth a brief call this week?

[Your name]
```

### E-commerce Outreach

```
Subject: {{first_name}}, increase {{company_name}}'s conversion rates by 25%

Hi {{first_name}},

E-commerce brands like {{company_name}} are always looking for that edge in conversions.

We just helped [similar brand] increase their checkout conversion by 25% using our optimization platform.

The strategy might work for {{company_name}} too. Want to see the case study?

Best,
[Your name]
```

### Enterprise Software

```
Subject: {{company_name}}'s enterprise security - compliance question

Hi {{first_name}},

Managing enterprise security at {{company_name}} must be challenging, especially with new compliance requirements.

We've helped companies like [Fortune 500 example] streamline their security audits and reduce compliance costs by 30%.

Is this something {{company_name}} is focused on this quarter?

[Your name]
```

## 🔧 Troubleshooting Common Scenarios

### Low Response Rates

```
"My last campaign only had a 2% response rate. 
Analyze the campaign performance and suggest improvements."
```

**AI will check:**
- Email deliverability scores
- Subject line effectiveness  
- Content personalization level
- Sender reputation
- Timing and frequency

### Email Verification Issues

```
"I have a list of 500 contacts but I'm not sure if all emails are valid. 
Verify them before adding to my campaign."
```

**Process:**
1. Use `verify_emails()` to check deliverability
2. Filter out invalid/risky emails
3. Only add verified contacts to campaign
4. Report verification results

### Campaign Stuck or Not Sending

```
"My campaign shows 'active' but no emails have been sent in 2 hours. 
Diagnose and fix the issue."
```

**Diagnostic steps:**
1. Use `diagnose_campaign_health()` 
2. Check sender verification status
3. Verify contact email addresses
4. Use `fix_stuck_campaign()` if needed

## 📞 Voice Integration Examples

### Follow-up Calls After Email

```
"For contacts who opened my email but didn't reply after 3 days, 
automatically call them with a brief introduction."
```

**Workflow:**
1. Monitor email engagement with analytics
2. Identify warm leads (opened but no reply)
3. Use `make_call()` for phone outreach
4. Record calls for follow-up notes

### Lead Qualification Calls

```
"Call the top 10 leads from my search and ask qualifying questions 
about their budget and timeline."
```

**Process:**
1. Search and score leads by quality
2. Select top prospects
3. Make calls using `make_call()`
4. Update contact records with call notes

## 🎪 Advanced Automation Workflows

### Multi-Channel Campaign

```
"Create a campaign that:
1. Sends an initial email
2. Waits 3 days for response  
3. If no response, send follow-up email
4. If still no response after 2 days, make a phone call
5. Send final email one week later"
```

### Event-Triggered Outreach

```
"Monitor for new funding announcements in the tech industry. 
When a company raises Series A funding, automatically:
1. Add their leadership team to my CRM
2. Send congratulatory email within 24 hours
3. Follow up with value proposition email after 1 week"
```

### Competitor Analysis Campaign

```
"Find companies using [competitor product] and create a campaign 
highlighting our advantages. Personalize based on their current 
pain points and industry challenges."
```

---

## 💡 Pro Tips

### Personalization Best Practices

1. **Use multiple data points**: Combine `{{first_name}}`, `{{company_name}}`, and industry-specific insights
2. **Research recent company news**: Mention funding, product launches, or hiring
3. **Reference mutual connections**: Use LinkedIn data when available
4. **Customize by role**: Different messaging for CEOs vs. CTOs vs. VPs

### Timing Optimization

1. **Test send times**: Try Tuesday-Thursday, 10am-11am and 2pm-3pm
2. **Respect time zones**: Use recipient's local time
3. **Follow-up cadence**: Space emails 2-3 days apart initially, then weekly
4. **Seasonal considerations**: Avoid major holidays and vacation periods

### Deliverability Optimization

1. **Warm up new senders**: Start with small volumes and gradually increase
2. **Monitor bounce rates**: Keep under 2% for good reputation
3. **Use verified domains**: Set up proper SPF, DKIM, and DMARC records
4. **Maintain list hygiene**: Regularly clean and verify email lists

---

**Ready to implement these workflows?** Configure your AI assistant with BuffSend MCP and start automating your email marketing today! 