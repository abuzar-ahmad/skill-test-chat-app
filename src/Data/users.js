import user from '../reducers/user';
 
export const data = {
    profile: {
      id: 1,
      name: "Abuzar",
      image:user.image,
      contacts: [
        {
          id: 2,
          name: "Rony",
          image:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
          chatlog: [
            {
              text: "Hey there! How's it going?",
              timestamp: "11:21 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "Hi! I'm doing well, thanks. How about you?",
              timestamp: "11:22 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "Not too bad, just enjoying the weekend. Any exciting plans?",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Oh, nice! I'm just relaxing at home. No big plans, just catching up on some reading.",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Sounds peaceful. What are you reading?",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 3,
          name: " Amily",
          image:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
          chatlog: [
            {
              text: "Hey there! How's your day going?",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "Hi! It's been a good day so far. How about yours?",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "Not bad, thanks! Did anything exciting happen for you today?",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Well, I got a promotion at work! Pretty stoked about it.",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "That's fantastic news! Congratulations! 🎉",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 4,
          name: "Marks",
          image:
            "https://images.pexels.com/photos/14697557/pexels-photo-14697557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=279.825&fit=crop&h=453.05",
          chatlog: [
            {
              text: "Hey, how's it going?",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "Hi! Not bad, just getting through the morning routine. You?",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "Same here, just sipping on my morning coffee. Anything exciting happening today?",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Not really, just work and the usual stuff. How about you?",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "I have a meeting in the afternoon, but other than that, nothing too crazy. By the way, did you watch that new movie everyone's talking about?",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 5,
          name: "Italo Melo",
          image:
            "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
          chatlog: [
            {
              text: "Hey, where are you?",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            }
          ],
        },
        {
          id: 6,
          name: "Ali Pazani",
          image:
            "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=600",
          chatlog: [
            {
              text: "Hey, how's it going?",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "Hi! Not bad, just getting through the morning routine. You?",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "Same here, just sipping on my morning coffee. Anything exciting happening today?",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "I have a meeting in the afternoon, but other than that, nothing too crazy. By the way, did you watch that new movie everyone's talking about?",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 4,
            },
            {
              text: "Not really, just work and the usual stuff. How about you?",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 5,
            },
          ],
        },
        {
          id: 7,
          name: "Rohan",
          image:
            "https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg?auto=compress&cs=tinysrgb&w=400",
          chatlog: [
            {
              text: "Hey there! How's your day going?",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "Hi! It's been a good day so far. How about yours?",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "Well, I got a promotion at work! Pretty stoked about it.",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "That's fantastic news! Congratulations! 🎉",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 4,
            },
            {
              text: "Not bad, thanks! Did anything exciting happen for you today?",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 5,
            },
          ],
        },
        {
          id: 8,
          name: "Jean Alves",
          image:"https://images.pexels.com/photos/2123778/pexels-photo-2123778.jpeg?auto=compress&cs=tinysrgb&w=400",
          chatlog: [],
        },
        {
          id: 9,
          name: "Min An",
          image:
            "https://images.pexels.com/photos/732425/pexels-photo-732425.jpeg?auto=compress&cs=tinysrgb&w=400",
          chatlog: [],
        },
      ],
    },
  };