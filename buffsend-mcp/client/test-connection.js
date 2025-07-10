#!/usr/bin/env node

/**
 * BuffSend MCP Connection Test
 * 
 * Simple test script to verify your BuffSend MCP integration is working correctly.
 * 
 * Usage:
 *   export MCP_API_KEY="your_api_key_here"
 *   node test-connection.js
 */

const https = require('https');

// Configuration
const API_KEY = process.env.MCP_API_KEY;
const API_URL = 'https://www.buffsend.com/api/v1/mcp';

if (!API_KEY) {
    console.error('❌ Error: MCP_API_KEY environment variable not set');
    console.error('Please set your BuffSend API key:');
    console.error('export MCP_API_KEY="your_api_key_here"');
    process.exit(1);
}

/**
 * Make HTTP request to BuffSend MCP API
 */
function makeRequest(endpoint, data = null) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'www.buffsend.com',
            port: 443,
            path: `/api/v1/mcp${endpoint}`,
            method: data ? 'POST' : 'GET',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
                'User-Agent': 'BuffSend-MCP-Test/1.0'
            }
        };

        const req = https.request(options, (res) => {
            let body = '';
            
            res.on('data', (chunk) => {
                body += chunk;
            });
            
            res.on('end', () => {
                try {
                    const response = JSON.parse(body);
                    resolve({
                        status: res.statusCode,
                        data: response
                    });
                } catch (error) {
                    reject(new Error(`Failed to parse response: ${error.message}`));
                }
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        if (data) {
            req.write(JSON.stringify(data));
        }
        
        req.end();
    });
}

/**
 * Test MCP connection and basic functionality
 */
async function testConnection() {
    console.log('🚀 Testing BuffSend MCP Connection...\n');

    try {
        // Test 1: Health check
        console.log('1️⃣ Testing API health...');
        const healthResponse = await makeRequest('/health');
        
        if (healthResponse.status === 200) {
            console.log('✅ API is healthy');
        } else {
            console.log(`❌ Health check failed: ${healthResponse.status}`);
            return;
        }

        // Test 2: Authentication test
        console.log('\n2️⃣ Testing authentication...');
        const authResponse = await makeRequest('/tools/call', {
            name: 'get_account_stats',
            arguments: {}
        });

        if (authResponse.status === 200) {
            console.log('✅ Authentication successful');
            console.log(`📊 Account: ${authResponse.data.result?.account_info?.email || 'N/A'}`);
        } else {
            console.log(`❌ Authentication failed: ${authResponse.status}`);
            if (authResponse.status === 401) {
                console.log('🔑 Check your API key and scopes');
            }
            return;
        }

        // Test 3: Credit balance
        console.log('\n3️⃣ Checking credit balance...');
        const creditResponse = await makeRequest('/tools/call', {
            name: 'get_credit_balance',
            arguments: {}
        });

        if (creditResponse.status === 200) {
            const credits = creditResponse.data.result?.credits || 0;
            console.log(`✅ Credit balance: ${credits} credits`);
        } else {
            console.log(`❌ Failed to get credit balance: ${creditResponse.status}`);
        }

        // Test 4: List senders
        console.log('\n4️⃣ Listing email senders...');
        const sendersResponse = await makeRequest('/tools/call', {
            name: 'list_senders',
            arguments: {}
        });

        if (sendersResponse.status === 200) {
            const senders = sendersResponse.data.result?.senders || [];
            console.log(`✅ Found ${senders.length} email sender(s)`);
            
            senders.forEach((sender, index) => {
                const status = sender.verified ? '✅ Verified' : '❌ Unverified';
                console.log(`   ${index + 1}. ${sender.email} (${status})`);
            });
        } else {
            console.log(`❌ Failed to list senders: ${sendersResponse.status}`);
        }

        console.log('\n🎉 BuffSend MCP connection test completed successfully!');
        console.log('\n📖 Next steps:');
        console.log('   • Configure your AI assistant with the MCP settings');
        console.log('   • Ask your AI: "Check my BuffSend account status"');
        console.log('   • Start searching for leads and creating campaigns!');

    } catch (error) {
        console.error(`❌ Connection test failed: ${error.message}`);
        console.error('\n🔧 Troubleshooting:');
        console.error('   • Verify your API key is correct');
        console.error('   • Check that all required scopes are enabled');
        console.error('   • Ensure you have a stable internet connection');
        console.error('   • Contact support@buffsend.com if issues persist');
    }
}

// Run the test
testConnection(); 