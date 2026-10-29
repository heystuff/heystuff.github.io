    const scenarios = [
      {
        intro: "A friend opens up about school-related worry and isn't sure whether to talk to anyone.",
        friendMessage: "I've been worrying about school so much that I can't sleep. I'm not sure whether I should tell anyone.",
        choices: [
          {
            text: "Everyone gets stressed. You're overthinking it.",
            heading: "Consider how that might sound",
            explanation: "This response might make a friend feel that their concerns are being dismissed. Instead, try acknowledging what they said and asking how you can support them.",
            tone: "reflect"
          },
          {
            text: "That sounds really hard. Want to talk or find some support?",
            heading: "A supportive place to start",
            explanation: "This response acknowledges your friend's feelings and offers options without judging. Listening and involving a trusted adult when needed can help.",
            tone: "positive"
          },
          {
            text: "Just try not to think about it. You'll be fine.",
            heading: "Good intentions aren't always enough",
            explanation: "You may want to reassure your friend, but telling someone not to think about a worry can feel minimizing. Try listening first and asking what they need.",
            tone: "reflect"
          }
        ]
      },

      {
        intro: "A friend worries that asking the school counselor for help will make them look weak.",
        friendMessage: "I want to talk to the counselor, but I'm worried everyone will think I'm weak.",
        choices: [
          {
            text: "Yeah, maybe it's better not to tell anybody.",
            heading: "Silence can reinforce stigma",
            explanation: "Encouraging secrecy may make asking for help harder. You can validate the worry without agreeing with the idea that support is a weakness.",
            tone: "reflect"
          },
          {
            text: "Asking for support isn't weak. I can go with you if that helps.",
            heading: "Support without pressure",
            explanation: "This challenges stigma, gives reassurance, and offers a practical way to help without taking over the decision.",
            tone: "positive"
          },
          {
            text: "You have nothing to worry about. Nobody cares.",
            heading: "Reassurance can miss the concern",
            explanation: "You might mean well, but dismissing their fear doesn't help them feel heard. Ask what specifically worries them.",
            tone: "reflect"
          }
        ]
      },

      {
        intro: "A classmate is mocked after saying they sometimes feel anxious.",
        friendMessage: "Someone called me 'dramatic' after I told them I get anxious. Maybe I shouldn't have said anything.",
        choices: [
          {
            text: "They're probably just joking. Forget about it.",
            heading: "A joke can still hurt",
            explanation: "Describing an upsetting comment as 'just a joke' can minimize its impact. Acknowledge that the classmate was treated unfairly.",
            tone: "reflect"
          },
          {
            text: "That was unfair. I'm glad you told me. Want me to listen?",
            heading: "Empathy helps counter stigma",
            explanation: "You recognize the harm, thank them for trusting you, and offer support while letting them decide what to share.",
            tone: "positive"
          },
          {
            text: "I'll post about it online so everyone knows what happened.",
            heading: "Protect their privacy",
            explanation: "Posting someone's personal experience without permission may make things worse. Ask how they want to be supported instead.",
            tone: "reflect"
          }
        ]
      }
    ];

    let currentScenarioIndex = 0;
    const scenarioStatus = document.getElementById('scenario-status');
    const introElement = document.getElementById('scenario-copy');
    const messageElement = document.getElementById('friend-message-text');
    const choicesElement = document.getElementById('choices');
    const feedbackElement = document.getElementById('feedback');
    const previousButton = document.getElementById('previous-scenario');
    const nextButton = document.getElementById('next-scenario');
    const progressElement = document.getElementById('scenario-progress');

    function renderScenario() {
      const scenario = scenarios[currentScenarioIndex];
      const number = currentScenarioIndex + 1;
      scenarioStatus.textContent = `SCENARIO ${String(number).padStart(2, '0')} | ${number} OF ${scenarios.length}`;
      progressElement.textContent = `${number} / ${scenarios.length}`;
      introElement.textContent = scenario.intro;
      messageElement.textContent = `“${scenario.friendMessage}”`;

      choicesElement.replaceChildren();
      scenario.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'choice';
        button.setAttribute('aria-pressed', 'false');

        const letter = document.createElement('span');
        letter.className = 'choice-letter';
        letter.textContent = String.fromCharCode(65 + index);

        const choiceText = document.createElement('span');
        choiceText.className = 'choice-text';
        choiceText.textContent = `“${choice.text}”`;

        const arrow = document.createElement('span');
        arrow.className = 'choice-arrow';
        arrow.setAttribute('aria-hidden', 'true');
        arrow.textContent = '';

        button.append(letter, choiceText, arrow);
        button.addEventListener('click', () => {
          for (const item of choicesElement.querySelectorAll('.choice')) {
            item.setAttribute('aria-pressed', String(item === button));
          }
          feedbackElement.dataset.tone = choice.tone;
          feedbackElement.replaceChildren();
          const heading = document.createElement('div');
          heading.className = 'feedback-title';
          heading.textContent = choice.heading;
          const paragraph = document.createElement('p');
          paragraph.textContent = choice.explanation;
          feedbackElement.append(heading, paragraph);
        });
        choicesElement.append(button);
      });

      feedbackElement.removeAttribute('data-tone');
      feedbackElement.replaceChildren();
      const heading = document.createElement('div');
      heading.className = 'feedback-title';
      heading.textContent = 'Your turn';
      const paragraph = document.createElement('p');
      paragraph.textContent = 'Choose a response to see why it may or may not help.';
      feedbackElement.append(heading, paragraph);

      previousButton.disabled = currentScenarioIndex === 0;
      nextButton.textContent = currentScenarioIndex === scenarios.length - 1
        ? 'Start over' : 'Next scenario';
      nextButton.classList.toggle('is-restart', currentScenarioIndex === scenarios.length - 1);
    }

    previousButton.addEventListener('click', () => {
      if (currentScenarioIndex > 0) {
        currentScenarioIndex--;
        renderScenario();
      }
    });

    nextButton.addEventListener('click', () => {
      currentScenarioIndex = (currentScenarioIndex + 1) % scenarios.length;
      renderScenario();
    });

    renderScenario();
