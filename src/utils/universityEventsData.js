const universityEventsData = {
    events: [
      {
        id: 1,
        name: "AI in Education Forum",
        startTime: "2024-10-09T10:00:00",
        endTime: "2024-10-09T12:00:00",
        departments: ["Computer Science", "Education"],
        guests: [
          "Dr. Andrew Ng - Co-founder of Coursera, AI Pioneer",
          "Prof. Karen Peterson - EdTech Researcher"
        ],
        videoUrl: "https://example.com/ai-education-forum",
        fallbackImage: "https://example.com/ai-education-forum-poster.jpg"
      },
      {
        id: 2,
        name: "Quantum Computing Symposium",
        startTime: "2024-10-09T23:00:00",
        endTime: "2024-10-09T23:50:00",
        departments: ["Physics", "Computer Science"],
        guests: [
          "Dr. John Preskill - Theoretical Physicist, Caltech",
          "Dr. Talia Gershon - Quantum Computing Expert, IBM"
        ],
        videoUrl: "https://example.com/quantum-computing-symposium",
        fallbackImage: "https://example.com/quantum-computing-poster.jpg"
      },
      {
        id: 3,
        name: "Climate Change Summit",
        startTime: "2024-10-12T09:00:00",
        endTime: "2024-10-12T15:00:00",
        departments: ["Environmental Science", "Geography"],
        guests: [
          "Dr. Katharine Hayhoe - Climate Scientist, Texas Tech University",
          "Prof. Tim Flannery - Environmentalist and Author"
        ],
        videoUrl: "https://example.com/climate-change-summit",
        fallbackImage: "https://example.com/climate-change-poster.jpg"
      },
      {
        id: 4,
        name: "Global Health and Pandemic Preparedness",
        startTime: "2024-10-13T13:00:00",
        endTime: "2024-10-13T16:00:00",
        departments: ["Health Sciences", "Public Health"],
        guests: [
          "Dr. Anthony Fauci - Director, NIAID",
          "Prof. Sarah Gilbert - Vaccine Development Lead, Oxford University"
        ],
        videoUrl: "https://example.com/global-health-summit",
        fallbackImage: "https://example.com/global-health-poster.jpg"
      },
      {
        id: 5,
        name: "Cybersecurity in the Modern World",
        startTime: "2024-10-14T10:30:00",
        endTime: "2024-10-14T12:30:00",
        departments: ["Computer Science", "Information Security"],
        guests: [
          "Kevin Mitnick - Former Hacker, Cybersecurity Consultant",
          "Prof. Marnie Wilkerson - Network Security Expert"
        ],
        videoUrl: "https://example.com/cybersecurity-conference",
        fallbackImage: "https://example.com/cybersecurity-poster.jpg"
      },
      {
        id: 6,
        name: "Business Innovation and Sustainability",
        startTime: "2024-10-15T14:00:00",
        endTime: "2024-10-15T17:00:00",
        departments: ["Business", "Economics"],
        guests: [
          "Elon Musk - CEO, Tesla and SpaceX",
          "Prof. Mariana Mazzucato - Economist and Author"
        ],
        videoUrl: "https://example.com/business-innovation-summit",
        fallbackImage: "https://example.com/business-innovation-poster.jpg"
      },
      {
        id: 7,
        name: "Digital Art and NFTs",
        startTime: "2024-10-16T11:00:00",
        endTime: "2024-10-16T13:30:00",
        departments: ["Fine Arts", "Digital Media"],
        guests: [
          "Beeple - Digital Artist",
          "Prof. Laura Anne White - Digital Culture Specialist"
        ],
        videoUrl: "https://example.com/digital-art-nft",
        fallbackImage: "https://example.com/digital-art-nft-poster.jpg"
      },
      {
        id: 8,
        name: "Ethics in AI",
        startTime: "2024-10-17T09:30:00",
        endTime: "2024-10-17T11:30:00",
        departments: ["Philosophy", "Computer Science"],
        guests: [
          "Dr. Timnit Gebru - AI Ethics Researcher",
          "Prof. Shannon Vallor - AI and Ethics Expert"
        ],
        videoUrl: "https://example.com/ethics-in-ai",
        fallbackImage: "https://example.com/ethics-ai-poster.jpg"
      },
      {
        id: 9,
        name: "Space Exploration and Mars Missions",
        startTime: "2024-10-18T15:00:00",
        endTime: "2024-10-18T17:30:00",
        departments: ["Astrophysics", "Aerospace Engineering"],
        guests: [
          "Dr. Robert Zubrin - Aerospace Engineer, Mars Society",
          "Prof. Sara Seager - Astrophysicist, MIT"
        ],
        videoUrl: "https://example.com/space-exploration-summit",
        fallbackImage: "https://example.com/space-exploration-poster.jpg"
      },
      {
        id: 10,
        name: "Future of Biotechnology",
        startTime: "2024-10-19T10:00:00",
        endTime: "2024-10-19T13:00:00",
        departments: ["Biotechnology", "Biomedical Engineering"],
        guests: [
          "Dr. Jennifer Doudna - CRISPR Pioneer",
          "Prof. George Church - Geneticist, Harvard"
        ],
        videoUrl: "https://example.com/biotech-future-summit",
        fallbackImage: "https://example.com/biotech-future-poster.jpg"
      },
      {
        id: 11,
        name: "Social Media and Its Impact",
        startTime: "2024-10-20T13:00:00",
        endTime: "2024-10-20T16:00:00",
        departments: ["Sociology", "Media Studies"],
        guests: [
          "Mark Zuckerberg - CEO, Meta",
          "Prof. Sherry Turkle - Social Psychologist, MIT"
        ],
        videoUrl: "https://example.com/social-media-impact",
        fallbackImage: "https://example.com/social-media-poster.jpg"
      },
      {
        id: 12,
        name: "Genomics and Personalized Medicine",
        startTime: "2024-10-21T10:30:00",
        endTime: "2024-10-21T12:30:00",
        departments: ["Genetics", "Health Sciences"],
        guests: [
          "Dr. Francis Collins - Former Director, NIH",
          "Prof. Eric Topol - Digital Medicine Researcher"
        ],
        videoUrl: "https://example.com/genomics-personalized-medicine",
        fallbackImage: "https://example.com/genomics-medicine-poster.jpg"
      },
      {
        id: 13,
        name: "Artificial Intelligence and Robotics",
        startTime: "2024-10-22T09:00:00",
        endTime: "2024-10-22T11:30:00",
        departments: ["Robotics", "Computer Science"],
        guests: [
          "Dr. Rodney Brooks - Robotics Pioneer",
          "Dr. Fei-Fei Li - AI Vision Expert, Stanford"
        ],
        videoUrl: "https://example.com/ai-robotics-conference",
        fallbackImage: "https://example.com/ai-robotics-poster.jpg"
      },
      {
        id: 14,
        name: "Mental Health Awareness Conference",
        startTime: "2024-10-23T10:00:00",
        endTime: "2024-10-23T14:00:00",
        departments: ["Psychology", "Public Health"],
        guests: [
          "Dr. Vikram Patel - Global Mental Health Expert",
          "Prof. Richard Bentall - Clinical Psychologist"
        ],
        videoUrl: "https://example.com/mental-health-awareness",
        fallbackImage: "https://example.com/mental-health-poster.jpg"
      },
      {
        id: 15,
        name: "Blockchain and Cryptocurrency Forum",
        startTime: "2024-10-24T13:00:00",
        endTime: "2024-10-24T16:00:00",
        departments: ["Economics", "Computer Science"],
        guests: [
          "Vitalik Buterin - Co-founder, Ethereum",
          "Prof. Angela Walch - Blockchain Legal Scholar"
        ],
        videoUrl: "https://example.com/blockchain-crypto-forum",
        fallbackImage: "https://example.com/blockchain-poster.jpg"
      },
      {
        id: 16,
        name: "Women in Leadership",
        startTime: "2024-10-25T11:00:00",
        endTime: "2024-10-25T13:30:00",
        departments: ["Business", "Sociology"],
        guests: [
          "Sheryl Sandberg - Former COO, Facebook",
          "Indra Nooyi - Former CEO, PepsiCo"
        ],
        videoUrl: "https://example.com/women-in-leadership",
        fallbackImage: "https://example.com/women-leadership-poster.jpg"
      },
      {
        id: 17,
        name: "Sustainable Energy Conference",
        startTime: "2024-10-26T09:30:00",
        endTime: "2024-10-26T12:00:00",
        departments: ["Environmental Engineering", "Energy Studies"],
        guests: [
          "Bill Gates - Co-founder, Breakthrough Energy",
          "Prof. Vaclav Smil - Energy Researcher"
        ],
        videoUrl: "https://example.com/sustainable-energy-conference",
        fallbackImage: "https://example.com/sustainable-energy-poster.jpg"
      },
      {
        id: 18,
        name: "Digital Transformation in Healthcare",
        startTime: "2024-10-27T10:30:00",
        endTime: "2024-10-27T13:30:00",
        departments: ["Health Informatics", "Computer Science"],
        guests: [
          "Dr. Eric Schmidt - Former CEO, Google",
          "Prof. Pamela Spence - Healthcare Digital Transformation Expert"
        ],
        videoUrl: "https://example.com/digital-healthcare-conference",
        fallbackImage: "https://example.com/digital-healthcare-poster.jpg"
      },
      {
        id: 19,
        name: "Virtual Reality and Immersive Technology",
        startTime: "2024-10-28T13:00:00",
        endTime: "2024-10-28T15:30:00",
        departments: ["Computer Science", "Media Arts"],
        guests: [
          "Prof. Jeremy Bailenson - VR Researcher, Stanford",
          "Palmer Luckey - Founder, Oculus VR"
        ],
        videoUrl: "https://example.com/vr-tech-conference",
        fallbackImage: "https://example.com/vr-tech-poster.jpg"
      },
      {
        id: 20,
        name: "Human-Computer Interaction Conference",
        startTime: "2024-10-29T09:00:00",
        endTime: "2024-10-29T12:00:00",
        departments: ["Human-Computer Interaction", "Computer Science"],
        guests: [
          "Dr. Donald Norman - Cognitive Scientist, UCSD",
          "Prof. Pattie Maes - MIT Media Lab"
        ],
        videoUrl: "https://example.com/hci-conference",
        fallbackImage: "https://example.com/hci-poster.jpg"
      }
    ]
  };
  
  export default universityEventsData;
  