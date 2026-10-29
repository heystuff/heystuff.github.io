    const scenarios = [
      {
        intro: "A friend opens up about school-related worry and isn't sure whether to talk to anyone.",
        friendMessage: "I've been worrying about school so much that I can't sleep. I'm not sure whether I should tell anyone.",
        choices: [
          {
            text: "Everyone gets stressed. You're overthinking it.",
            heading: "Consider how that might sound",
            explanation: "This response could make a friend feel that their concerns are being dismissed. Instead, try recognizing what they said and asking how you can support them.",
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
            explanation: "This challenges stigma, gives reassurance, and offers a way to help without taking over the decision.",
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
      },

      {
        intro: "A friend is worried about being judged during a class presentation.",
        friendMessage: "Our presentation is tomorrow, and I keep thinking everyone will laugh if I make a mistake.",
        choices: [
          {
            text: "That sounds stressful. What part worries you most, and would practicing together help?",
            heading: "Ask before offering a solution",
            explanation: "You acknowledge the worry, ask an open-ended question, and offer help they can accept or decline. This gives your friend room to explain what they need.",
            tone: "positive"
          },
          {
            text: "It's just a presentation. There's no reason to be nervous.",
            heading: "Small to you can feel big to someone else",
            explanation: "Calling the situation unimportant may dismiss how your friend feels. Try asking what is worrying them instead of deciding whether their feelings are reasonable.",
            tone: "reflect"
          },
          {
            text: "I'll tell the teacher you're too anxious and take over your whole presentation.",
            heading: "Offer support without taking control",
            explanation: "Your friend has not asked you to speak for them or share their feelings with the teacher. Ask what kind of help they want before acting on their behalf.",
            tone: "reflect"
          }
        ]
      },

      {
        intro: "A friend seems upset but says they are not ready to talk about it.",
        friendMessage: "Thanks for checking in. I have a lot going on, but I don't really want to talk about it right now.",
        choices: [
          {
            text: "If you trusted me, you would tell me what's wrong.",
            heading: "Sharing should be their choice",
            explanation: "Making someone prove their trust puts pressure on them to share, partially defeating the purpose of helping them alleviate their stress. You can show care while respecting that they are not ready to talk.",
            tone: "reflect"
          },
          {
            text: "Fine. I won't ask how you're doing again.",
            heading: "Leave the door open",
            explanation: "Withdrawing support may make it harder for your friend to reach out later. Let them know that you care even when they do not want a conversation.",
            tone: "reflect"
          },
          {
            text: "That's okay. You don't have to explain. Would you like company, or should I check in another time?",
            heading: "Respect their pace",
            explanation: "You respect their boundary and give choices without asking for personal details. Being supportive can also mean spending time together or checking in later.",
            tone: "positive"
          }
        ]
      },

      {
        intro: "A class group chat includes jokes that make a friend uncomfortable talking about anxiety.",
        friendMessage: "People in our class chat keep making jokes about anxiety. Now I don't feel comfortable saying anything.",
        choices: [
          {
            text: "Those jokes aren't okay. Want to talk privately about what would help you feel supported?",
            heading: "Challenge the stigma and protect privacy",
            explanation: "You acknowledge the hurtful comments and invite your friend to decide what support they want. You can challenge disrespectful jokes without sharing your friend's personal experience.",
            tone: "positive"
          },
          {
            text: "Everyone jokes around. Try not to be so sensitive.",
            heading: "Intent does not erase the impact",
            explanation: "Even if the group intended to joke, your friend is telling you the comments hurt. Listening to that concern is more supportive than dismissing it.",
            tone: "reflect"
          },
          {
            text: "I'll screenshot your message and post it so they understand.",
            heading: "Ask before sharing someone's experience",
            explanation: "Sharing a private message without permission takes away your friend's choice about what others know. Ask how they would like you to help instead.",
            tone: "reflect"
          }
        ]
      },

      {
        intro: "A friend compares their worries with other people's problems and questions whether they deserve support.",
        friendMessage: "Other people have much bigger problems. I feel silly asking anyone for help with mine.",
        choices: [
          {
            text: "You're right. You should focus on how lucky you are.",
            heading: "Comparison can miss what they need",
            explanation: "Agreeing that their concerns are too small may discourage them from speaking up even more. Recognize what they are experiencing without comparing it with someone else's situation.",
            tone: "reflect"
          },
          {
            text: "Let me tell you about my week. Mine has been much worse.",
            heading: "Keep the focus on listening",
            explanation: "Sharing your own experience can sometimes help, but turning the conversation into a comparison may leave your friend feeling unheard, and shifting the conversation to you makes them feel left out. Give them space to finish first.",
            tone: "reflect"
          },
          {
            text: "You don't have to compare your problems to deserve support. Want to tell me what's been difficult?",
            heading: "Make room for their experience",
            explanation: "You let your friend know their feelings matter and invite them to share more. They do not have to prove that their situation is worse than someone else's to ask for help.",
            tone: "positive"
          }
        ]
      },

      {
        intro: "A friend feels overwhelmed by schoolwork and asks for practical help.",
        friendMessage: "I'm so behind on assignments that I don't know where to start. Can you help?",
        choices: [
          {
            text: "Send me everything. I'll do your assignments for you.",
            heading: "Help them take a step of their own",
            explanation: "Taking over their work does not give your friend a chance to choose what would help, and won't allow them to improve by themselves via practice. Offer to work alongside them or help them contact a teacher about the workload.",
            tone: "reflect"
          },
          {
            text: "Want to pick one small task together, or think about a teacher you could ask for help?",
            heading: "Offer a manageable next step",
            explanation: "You respond to their request with specific options while letting them decide. Practical support can mean helping them get started or think about who else they could ask.",
            tone: "positive"
          },
          {
            text: "Just make a schedule. It isn't that hard.",
            heading: "Advice needs understanding too",
            explanation: "A schedule might be useful, but saying it is easy can minimize the difficulty your friend described. They might have trouble following a schedule, and have already tried it out. Ask what is getting in the way before suggesting a plan.",
            tone: "reflect"
          }
        ]
      },

      {
        intro: "A friend asks you to be available all the time, and you need to set a caring boundary.",
        friendMessage: "Can I message you all night, every night? You're the only person I want to talk to.",
        choices: [
          {
            text: "I care about you, but I can't always be available. Could we think about another trusted person to include?",
            heading: "Care and boundaries can go together",
            explanation: "You are honest about what you can offer while showing that you still care. Encouraging a wider support network also avoids making one friend responsible for every conversation.",
            tone: "positive"
          },
          {
            text: "Yes. I promise you will never need to talk to anyone else.",
            heading: "Avoid promises you cannot keep",
            explanation: "Promising constant availability puts too much responsibility on one friendship. Offer support you can realistically give and encourage your friend to include other trusted people.",
            tone: "reflect"
          },
          {
            text: "I'll just ignore your messages whenever I'm busy.",
            heading: "Explain your limits with care",
            explanation: "A clear conversation about availability is kinder than leaving your friend to guess. Tell them when you can listen and help them consider other people they can reach out to.",
            tone: "reflect"
          }
        ]
      },

      {
        intro: "A friend has spoken with the school counselor but wants to keep the details private.",
        friendMessage: "I talked to the counselor yesterday. I'm not sure I want to share what we talked about.",
        choices: [
          {
            text: "Tell me everything. I need to know whether it helped.",
            heading: "Support does not require personal details",
            explanation: "Your friend gets to decide what to share about the conversation. Asking for a full report can feel intrusive, even when you are curious because you care.",
            tone: "reflect"
          },
          {
            text: "Great, so you won't feel anxious anymore.",
            heading: "Do not assume how they feel",
            explanation: "You cannot know how your friend feels after the visit. Ask how they would like to be supported instead of assuming that one conversation has resolved every concern.",
            tone: "reflect"
          },
          {
            text: "You don't have to share details. How would you like me to support you from here?",
            heading: "Check in without prying",
            explanation: "You respect their privacy and keep the conversation open. Asking what they want next lets your friend guide the support you offer.",
            tone: "positive"
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
