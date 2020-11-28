// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// [START dialogflow_cx_detect_intent_text]
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
const projectId = 'zeiver';
const location = 'us';
const agentId = 'c7cb8806-ce62-4b90-94dc-9a5f3bbcc8fe';
const query = ['Hello my dear'];
const languageCode = 'en'

async function main(projectId, location, agentId, query, languageCode) {
    console.log(`begining`);
  // Imports the Google Cloud Some API library
  const {SessionsClient} = require('@google-cloud/dialogflow-cx');
  const client = new SessionsClient();

  async function detectIntentText() {
    const sessionId = Math.random().toString(36).substring(7);
    const sessionPath = client.projectLocationAgentSessionPath(
      projectId,
      location,
      agentId,
      sessionId
    );
    console.info(sessionPath);

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: query,
        },
        languageCode,
      },
    };
    console.log(`request: ${request}`);
    const [response] = await client.detectIntent(request);
    console.log(`User Query: ${query}`);
    for (const message of response.queryResult.responseMessages) {
      if (message.text) {
        console.log(`Agent Response: ${message.text.text}`);
      }
    }
    if (response.queryResult.match.intent) {
      console.log(
        `Matched Intent: ${response.queryResult.match.intent.displayName}`
      );
    }
    console.log(
      `Current Page: ${response.queryResult.currentPage.displayName}`
    );
  }

  detectIntentText();
  // [END dialogflow_cx_detect_intent_text]
}

main(projectId, location, agentId, query, languageCode);
process.on('unhandledRejection', err => {
    console.error(err.message);
    process.exitCode = 1;
  });