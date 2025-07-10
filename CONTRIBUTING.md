# Contributing to BuffSend MCP

Thank you for your interest in contributing to the BuffSend MCP integration! We welcome contributions from the community.

## 🚀 Getting Started

### Prerequisites

- Node.js 14+ for testing client tools
- A BuffSend account with MCP API access
- Familiarity with Model Context Protocol (MCP)

### Development Setup

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/buffsend-mcp.git
   cd buffsend-mcp
   ```

2. **Set up your environment**
   ```bash
   export MCP_API_KEY="your_buffsend_api_key"
   ```

3. **Test the connection**
   ```bash
   cd client
   node test-connection.js
   ```

## 📝 Types of Contributions

### Documentation Improvements

- **Configuration examples** for new AI assistants
- **Usage examples** for specific industries or use cases
- **Troubleshooting guides** for common issues
- **Translation** of documentation to other languages

### Code Contributions

- **Client utilities** for testing and debugging
- **Integration examples** with different MCP clients
- **Helper scripts** for common workflows
- **Bug fixes** in existing code

### Community Support

- **Answer questions** in GitHub issues
- **Share success stories** and use cases
- **Report bugs** and suggest improvements
- **Test new features** and provide feedback

## 🔧 Development Guidelines

### Code Style

- Use **clear, descriptive variable names**
- Add **comments for complex logic**
- Follow **JavaScript/Node.js best practices**
- Include **error handling** where appropriate

### Documentation Standards

- Use **clear headings and structure**
- Include **working code examples**
- Add **step-by-step instructions**
- Test all **configuration examples**

### Testing

- **Test all code changes** before submitting
- **Verify examples work** with real BuffSend accounts
- **Check cross-platform compatibility** (Windows/Mac/Linux)
- **Validate configuration files** are syntactically correct

## 📋 Contribution Process

### 1. Report Issues

Before contributing, check if there's already an issue for your concern:

- **Bug reports**: Include steps to reproduce, expected vs actual behavior
- **Feature requests**: Describe the use case and expected functionality  
- **Documentation issues**: Specify what's unclear or missing

### 2. Discuss Changes

For significant changes:

- **Open an issue first** to discuss the approach
- **Get feedback** from maintainers before starting work
- **Consider the scope** - smaller PRs are easier to review

### 3. Make Changes

- **Create a branch** from `main` for your changes
- **Make focused commits** with clear messages
- **Test thoroughly** before submitting
- **Update documentation** as needed

### 4. Submit Pull Request

- **Use a clear title** describing the change
- **Include a description** of what changed and why
- **Reference related issues** using `#issue-number`
- **Add testing instructions** for reviewers

## 🎯 Specific Contribution Areas

### New AI Assistant Support

Adding support for a new AI assistant:

1. **Create configuration example** in `examples/[assistant-name]/`
2. **Add setup instructions** to main README
3. **Test the integration** thoroughly
4. **Document any special considerations**

### Usage Examples

Adding new usage examples:

1. **Focus on real-world scenarios**
2. **Include complete workflows**
3. **Test with actual BuffSend account**
4. **Add to `docs/USAGE_EXAMPLES.md`**

### Bug Fixes

When fixing bugs:

1. **Reproduce the issue** first
2. **Create a test case** if possible
3. **Fix the root cause**, not just symptoms
4. **Verify the fix works** in different environments

## ✅ Review Process

### What We Look For

- **Functionality**: Does it work as expected?
- **Quality**: Is the code clean and well-documented?
- **Compatibility**: Works across different platforms/assistants?
- **Security**: No API keys or sensitive data exposed?

### Review Timeline

- **Initial response**: Within 48 hours
- **Full review**: Within 1 week for most PRs
- **Large changes**: May take longer, will communicate timeline

### Approval Process

1. **Automated checks** must pass
2. **Manual testing** by maintainers
3. **Code review** and feedback
4. **Final approval** and merge

## 🎉 Recognition

Contributors will be:

- **Listed in CONTRIBUTORS.md**
- **Mentioned in release notes** for significant contributions
- **Invited to join** the BuffSend community discord
- **Considered for** beta access to new features

## 📞 Getting Help

Need help contributing?

- **GitHub Issues**: For public discussion
- **Email**: [developers@buffsend.com](mailto:developers@buffsend.com)
- **Documentation**: [buffsend.com/docs](https://www.buffsend.com/docs)

## 📜 Code of Conduct

### Our Standards

- **Be respectful** and inclusive
- **Focus on constructive feedback**
- **Help others learn and grow**
- **Keep discussions professional**

### Enforcement

Violations will be addressed by project maintainers. Serious or repeated violations may result in temporary or permanent bans from the project.

---

Thank you for contributing to BuffSend MCP! Your efforts help make AI-powered email marketing more accessible to everyone. 