import React, { useState } from 'react';
import { 
  Play, BookOpen, CheckCircle, Clock, FileText, Users, Shield, Award, 
  ChevronLeft, Home, MessageCircle, Heart, Eye, User, Zap, Globe, 
  FileQuestion, Calendar, FolderOpen, Lightbulb, ScrollText, ExternalLink,
  LogIn, Mail, Lock, UserPlus, Download, Phone
} from 'lucide-react';

const App = () => {
  const [currentView, setCurrentView] = useState('auth');
  const [authMode, setAuthMode] = useState('login');
  const [completedModules, setCompletedModules] = useState(new Set());
  const [currentModule, setCurrentModule] = useState(null);
  const [answers, setAnswers] = useState({});

  const COGNITIO_LOGO = "https://avatars.githubusercontent.com/u/132303904?v=4";
  const REFERRAL_IMAGE = "https://cognitioplus.aiwaapp.live/cache/media_cache/83abb1e8ae64c447b2df129428c28255.jpeg";
  const CONTACT_URL = "https://cognitiioplus.aiwaapp.live/contact";

  // Helper component for responsive YouTube embeds
  const YouTubeEmbed = ({ videoId, title }) => (
    <div className="relative pt-[56.25%] w-full">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );

  // Helper component for Canva embeds (with hidden controls)
  const CanvaEmbed = ({ src }) => (
    <div className="relative w-full pt-[56.25%] shadow-md rounded-lg overflow-hidden my-4">
      <iframe
        src={`${src}&hideControls=true`}
        className="absolute top-0 left-0 w-full h-full border-none"
        allowFullScreen
        title="Course Presentation"
        loading="lazy"
      ></iframe>
    </div>
  );

  const modules = [
    {
      id: 0,
      title: "Introduction and Orientation",
      duration: "1 hour",
      icon: <User className="h-5 w-5" />,
      color: "from-blue-500 to-cyan-500",
      objectives: [
        "Describe the purpose, structure, and expectations of the certification course.",
        "Explain how their work fits within the broader mental health ecosystem in the Philippines.",
        "Commit to ethical, trauma-informed, and rights-based support practices."
      ],
      content: [
        {
          type: 'canva',
          src: "https://www.canva.com/design/DAG4fnBymhQ/g3wtSGZXCES-feVrNOoE8w/view?embed"
        },
        {
          type: 'video',
          title: 'Welcome to Cognitio+',
          videoId: '7feUjsAv5is'
        },
        {
          type: 'video',
          title: 'Message from Chief Training Officer',
          videoId: 'PtN2YMdU1WY'
        },
        {
          type: 'canva',
          src: "https://www.canva.com/design/DAG4fzYXTSE/DnwXtDcHeA8rR3Gg3DNrnA/view?embed"
        },
        {
          type: 'text',
          title: 'Why This Course Matters',
          text: "This course matters because it directly addresses the **critical gap in mental health services** by creating a certified, non-specialized workforce grounded in ethical and standardized practices.\n\nIt fulfills the following essential roles:\n\n1.  **Expands Reach and Access (mhGAP):** It scales up mental health support by training individuals to operate safely within their communities, aligning with the **WHO Mental Health Gap Action Programme (mhGAP)**. This ensures that basic psychosocial support is accessible where specialists are scarce.\n2.  **Ensures Ethical and Rights-Based Care (QualityRights):** By integrating **WHO QualityRights** principles and the **Philippine Data Privacy Act (RA 10173)**, the course ensures that all support is delivered with dignity, respect for autonomy, and strict confidentiality, thereby professionalizing peer-based support.\n3.  **Provides Standardized Crisis Response (PFA):** It equips you with the crucial, evidence-based skills of **Psychological First Aid (PFA—Look, Listen, Link)**, allowing you to provide immediate, calming support and make safe, informed referrals within the **Philippine Council for Mental Health (PCMH)** system.\n\nIn short, the course certifies you as a vital, safe, and ethical bridge between a person in distress and the formal healthcare system."
        },
        {
          type: 'pledge',
          title: 'Digital Pledge',
          text: "I commit to providing respectful, ethical, and compassionate support within my scope as a paraprofessional. I will not diagnose, treat, or promise secrecy in crisis situations. I will seek help when needed—for others and for myself."
        }
      ],
      references: [
        {
          title: "Comprehensive Guidebook to Mental Health and Well-being Paraprofessionals",
          description: "Complete guide covering all aspects of the paraprofessional role, responsibilities, and best practices",
          url: "https://cognitioplus.aiwaapp.live/guidebook"
        },
        {
          title: "Cognitio+ Course Handbook",
          description: "Complete overview of course structure, expectations, and certification requirements",
          url: "https://cognitioplus.com/resources/course-handbook.pdf"
        }
      ],
      quiz: [
        {
          question: "The full certification process for this course includes a Practicum component. What is the required duration for this supervised practicum?",
          options: [
            "24 hours of online modules.",
            "16 hours of guided online or community support sessions.",
            "A minimum of 6 hours of refresher training.",
            "One full week (40 hours) of full-time volunteer work."
          ],
          correct: 1
        },
        {
          question: "According to the Learner Pledge in this course, what is the clear limit of a paraprofessional’s scope, particularly in crisis situations?",
          options: [
            "They must refuse to discuss any topic related to depression or anxiety.",
            "They are allowed to diagnose but not to recommend medication.",
            "They cannot diagnose, treat, or promise secrecy in life-threatening situations.",
            "They are limited to working only with minors, not adults."
          ],
          correct: 2
        },
        {
          question: "Which of the following frameworks guides the course's emphasis on human dignity, recovery, and rights-based support practices?",
          options: [
            "The Philippine Data Privacy Act (RA 10173).",
            "The WHO QualityRights Initiative.",
            "The Philippine Council for Mental Health (PCMH) Pillar 4.",
            "The WHO Active Listening Rubric."
          ],
          correct: 1
        }
      ],
      reflection: "What does ‘holding space’ mean to you? Write about a time someone truly listened to you—how did it feel?"
    },
    {
      id: 1,
      title: "Foundations of Mental Health and Well-Being",
      duration: "3 hours",
      icon: <Heart className="h-5 w-5" />,
      color: "from-emerald-500 to-teal-500",
      objectives: [
        "Define mental health using WHO and Philippine frameworks.",
        "Explain biopsychosocial determinants of mental well-being.",
        "Describe key provisions of RA 11036 (Mental Health Act).",
        "Identify how stigma affects help-seeking.",
        "Position paraprofessional work within the national mental health system.",
        "Define the role, responsibilities, and boundaries of a mental health paraprofessional."
      ],
      content: [
        {
          type: 'canva',
          src: "https://www.canva.com/design/DAG4fnVLh98/CVt0kP-Grox9BbCo3BKwdA/view?embed"
        },
        {
          type: 'video',
          title: 'Mental Health in the Philippines',
          videoId: 'aHAuxdBfDzA'
        },
        {
          type: 'info',
          title: 'WHO Definition of Mental Health',
          text: "“Mental health is a state of well-being in which an individual realizes their own abilities, can cope with the normal stresses of life, can work productively, and is able to make a contribution to their community.”"
        },
        {
          type: 'table',
          title: 'Biopsychosocial Determinants',
          headers: ['Level', 'Examples'],
          rows: [
            ['Biological', 'Genetics, brain chemistry, chronic illness'],
            ['Psychological', 'Coping skills, self-esteem, trauma history'],
            ['Social', 'Poverty, discrimination, family support, access to education']
          ]
        },
        {
          type: 'text',
          title: 'The Paraprofessional Role: Scope and Limits',
          text: "You are not a therapist. You are a compassionate listener and a bridge to care.\n\n• What a Paraprofessional Does:\n• Provides peer-based psychosocial support\n• Listens without judgment\n• Recognizes signs of distress\n• Links individuals to appropriate resources\n\n• What a Paraprofessional Does Not Do:\n• Diagnose mental health conditions\n• Provide clinical treatment or medication advice\n• Guarantee confidentiality in life-threatening situations\n• Take on emotional burdens beyond their capacity\n\n• Stepped Care Model (WHO mhGAP):\n• Level 1: Community & peer support → Your role\n• Level 2: Non-specialist health workers\n• Level 3: Mental health specialists"
        }
      ],
      references: [
        {
          title: "Republic Act No. 11036: The Mental Health Act",
          description: "Key provisions, definition of mental health, rights of service users, and community integration mandate",
          url: "https://legacy.senate.gov.ph/republic_acts/ra%2011036.pdf"
        },
        {
          title: "WHO mhGAP Guideline (2023 Update)",
          description: "Rationale for training non-specialized health workers to provide evidence-based care in low-resource settings",
          url: "https://www.who.int/publications/i/item/9789240084278"
        },
        {
          title: "PCMH Strategic Framework 2024–2028",
          description: "Government's multi-sectoral strategy for implementing the Mental Health Act, including four pillars",
          url: "https://www.who.int/philippines/news/detail/12-10-2023-doh---who-launch-philippine-council-for-mental-health-strategic-framework-2024-2028"
        }
      ],
      quiz: [
        {
          question: "Which Philippine law mandates the integration of mental health services into primary care and establishes anti-stigma campaigns?",
          options: [
            "Republic Act 10173 (Data Privacy Act)",
            "Republic Act 11036 (The Mental Health Act)",
            "The WHO QualityRights Initiative",
            "The PCMH Strategic Framework 2024–2028"
          ],
          correct: 1
        },
        {
          question: "According to the WHO definition adopted by the course, mental health is a state of well-being where an individual can do all the following, EXCEPT:",
          options: [
            "Cope with the normal stresses of life",
            "Work productively and fruitfully",
            "Realize their own abilities",
            "Diagnose mental illnesses in others."
          ],
          correct: 3
        },
        {
          question: "The concept of Stigma in mental health refers to:",
          options: [
            "A person's chronic physical illness (biological determinant)",
            "The negative beliefs and attitudes that discourage help-seeking",
            "The formal policies laid out in the PCMH Strategic Framework",
            "An individual’s self-esteem and coping skills (psychological determinant)"
          ],
          correct: 1
        },
        {
          question: "Which of the four pillars of the PCMH Strategic Framework 2024–2028 is most closely aligned with the paraprofessional's training and placement in the workforce?",
          options: [
            "Pillar 2: Mental Health Promotion and Prevention",
            "Pillar 3: Governance, Data, and Research",
            "Pillar 4: Cross-Sectoral Collaboration",
            "Pillar 1: Service Delivery and Workforce Development"
          ],
          correct: 3
        },
        {
          question: "What is the primary role of a certified Mental Health and Well-Being Paraprofessional, as defined in this course?",
          options: [
            "To provide clinical diagnosis and treatment plans for mild to moderate mental illnesses.",
            "To offer compassionate peer-based psychosocial support and link individuals to appropriate resources.",
            "To counsel individuals using therapeutic modalities like Cognitive Behavioral Therapy (CBT).",
            "To guarantee complete, unqualified secrecy for all information shared by a service user."
          ],
          correct: 1
        },
        {
          question: "The scope of practice for a paraprofessional in the Philippines is situated at the first level of the WHO Stepped Care Model. What does this level primarily involve?",
          options: [
            "Non-specialist health workers in primary care.",
            "Community and peer support.",
            "Mental health specialists and psychiatrists.",
            "Emergency room response and hospitalization."
          ],
          correct: 1
        }
      ],
      reflection: "Describe a time when you or someone struggled emotionally. What helped? What barriers existed?"
    },
    {
      id: 2,
      title: "Ethics, Boundaries, and Digital Confidentiality",
      duration: "2 hours",
      icon: <Shield className="h-5 w-5" />,
      color: "from-purple-500 to-indigo-500",
      objectives: [
        "Explain core ethical principles (autonomy, beneficence, non-maleficence, justice).",
        "Apply RA 10173 (Data Privacy Act) to digital conversations.",
        "Obtain informed consent.",
        "Identify and manage boundary violations.",
        "Use a Digital Confidentiality Checklist."
      ],
      content: [
        {
          type: 'canva',
          src: "https://www.canva.com/design/DAG4fzYXTSE/DnwXtDcHeA8rR3Gg3DNrnA/view?embed"
        },
        {
          type: 'script',
          title: 'Informed Consent Script',
          text: "Hi, I’m [Name], a trained peer supporter. Our conversation is private, but I can’t keep it secret if you’re in danger. Do you feel okay talking with me today?"
        },
        {
          type: 'checklist',
          title: 'Digital Confidentiality Checklist',
          items: [
            "✅ Secure platform (e.g., Signal)",
            "✅ Consent obtained",
            "✅ Data anonymized/deleted",
            "✅ No public discussion of cases"
          ]
        }
      ],
      references: [
        {
          title: "Republic Act No. 10173: Data Privacy Act IRR",
          description: "Implementing Rules and Regulations for protecting personal information in digital conversations",
          url: "https://privacy.gov.ph/wp-content/uploads/2016/07/updated-draft-July-12-2016.pdf"
        },
        {
          title: "WHO QualityRights Handbook",
          description: "Foundational document for ensuring dignified, human rights-compliant care",
          url: "https://www.who.int/publications/i/item/9789240058224"
        }
      ],
      quiz: [
        {
          question: "When a service user discloses personal emotional information via chat, which Philippine law requires the paraprofessional to obtain consent and use secure platforms for handling this data?",
          options: [
            "RA 11036 (Mental Health Act)",
            "RA 10173 (Data Privacy Act)",
            "WHO QualityRights Initiative",
            "PCMH Workforce Pillar"
          ],
          correct: 1
        },
        {
          question: "The ethical principle of Non-maleficence means the paraprofessional must:",
          options: [
            "Respect the person's right to choose (Autonomy)",
            "Offer fair, non-discriminatory support (Justice)",
            "Act in the person's best interest (Beneficence)",
            "Uphold the principle of \"Do no harm\""
          ],
          correct: 3
        },
        {
          question: "In the context of digital support, which action represents a boundary violation for a paraprofessional?",
          options: [
            "Seeking supervision when uncertain about a case",
            "Asking for informed consent at the start of the conversation",
            "Accepting a service user's friend request on social media",
            "Documenting the interaction in a secure, anonymized journal"
          ],
          correct: 2
        },
        {
          question: "The most appropriate way for a paraprofessional to introduce a conversation, ensuring Informed Consent, is to state:",
          options: [
            "I'll always be here for you, no matter what.",
            "I can guarantee everything you say will be totally confidential.",
            "Our conversation is private, but I can’t keep it secret if you’re in danger. Do you feel okay talking with me today?",
            "I am a mental health professional, what brings you to therapy?"
          ],
          correct: 2
        }
      ],
      reflection: "Describe a time you faced a boundary challenge."
    },
    {
      id: 3,
      title: "Psychological First Aid (Look–Listen–Link)",
      duration: "3 hours",
      icon: <Eye className="h-5 w-5" />,
      color: "from-orange-500 to-red-500",
      objectives: [
        "Explain PFA principles and limits.",
        "Apply Look–Listen–Link in distress scenarios.",
        "Recognize common stress reactions.",
        "Respond to suicidal ideation with calm communication.",
        "Make safe referrals within the Philippine system."
      ],
      content: [
        {
          type: 'video',
          title: 'Basics of Psychological First Aid',
          videoId: 'sGooy-cS9G4'
        },
        {
          type: 'canva',
          src: "https://www.canva.com/design/DAG4fzboQ34/ME67xdgJdgksumYOCIPszw/view?embed"
        },
        {
          type: 'framework',
          title: 'Look–Listen–Link',
          steps: [
            { step: "LOOK", desc: "Assess safety and distress cues" },
            { step: "LISTEN", desc: "Offer nonjudgmental attention" },
            { step: "LINK", desc: "Connect to emotional, practical, and professional support" }
          ]
        },
        {
          type: 'image',
          title: 'Philippine Referral Pathways',
          imageUrl: REFERRAL_IMAGE
        },
        {
          type: 'contact',
          title: 'Need Support?',
          contactUrl: CONTACT_URL
        }
      ],
      references: [
        {
          title: "WHO/UNHCR mhGAP Humanitarian Intervention Guide (2015)",
          description: "Adaptation of mhGAP for emergencies, highly practical for PFA, acute stress, and grief management",
          url: "https://www.who.int/publications/i/item/9789241548922"
        },
        {
          title: "WHO QualityRights Handbook",
          description: "Foundational document for ensuring dignified, human rights-compliant care during crisis",
          url: "https://www.who.int/publications/i/item/9789240058224"
        }
      ],
      quiz: [
        {
          question: "Psychological First Aid (PFA) is a practical and compassionate first response to crisis. Which of the following is NOT a part of PFA?",
          options: [
            "Listening without judgment",
            "Connecting to practical and professional support (Link)",
            "Assessing for safety and basic needs (Look)",
            "Conducting formal psychological debriefing"
          ],
          correct: 3
        },
        {
          question: "In the PFA \"Look\" step, the paraprofessional's immediate action is to:",
          options: [
            "Immediately offer advice on coping mechanisms.",
            "Assess for immediate safety risks and basic physical/emotional needs.",
            "Conduct a detailed mental health history assessment.",
            "Directly contact the user's family or friends without consent."
          ],
          correct: 1
        },
        {
          question: "When a paraprofessional uses the \"Link\" principle, what is the core goal?",
          options: [
            "To diagnose the individual's condition.",
            "To share personal stories of resilience.",
            "To connect the individual to practical, professional, or community supports.",
            "To set a firm time boundary for the conversation."
          ],
          correct: 2
        },
        {
          question: "Which resource is a Philippine-specific professional mental health support pathway mentioned in the course?",
          options: [
            "The US National Suicide Prevention Lifeline.",
            "Hopeline PH",
            "The International Red Cross.",
            "The WHO mhGAP guide only."
          ],
          correct: 1
        }
      ],
      reflection: "When did someone’s presence help you through pain?"
    },
    {
      id: 4,
      title: "Core Support Skills",
      duration: "6 hours",
      icon: <MessageCircle className="h-5 w-5" />,
      color: "from-pink-500 to-rose-500",
      objectives: [
        "Demonstrate eight core support skills.",
        "Apply active listening in simulations.",
        "Use culturally appropriate validation.",
        "Practice limited self-disclosure.",
        "Integrate feedback using WHO rubric."
      ],
      content: [
        {
          type: 'skills',
          title: 'Eight Core Support Skills',
          items: [
            "1. Building Rapport",
            "2. Showing Empathy",
            "3. Reflecting",
            "4. Labeling Emotions",
            "5. Asking Open Questions",
            "6. Sharing Limited Personal Experience",
            "7. Identifying Strengths",
            "8. Responding When Asked for Advice"
          ]
        },
        {
          type: 'videos',
          title: 'Watch the videos below:',
          videos: [
            { title: 'Core Skill 1: Building Rapport', videoId: 'TpPGddb93Kg' },
            { title: 'Core Skill 2: Showing Empathy', videoId: 'Jkg-1kLhTT4' },
            { title: 'Core Skill 3: Reflecting', videoId: 'ZhRTvXN_tJ8' },
            { title: 'Core Skill 4: Labeling Emotions', videoId: 'WCWtnChOdqI' },
            { title: 'Core Skill 5: Asking the Right Questions', videoId: '8Ow64RjY5zc' },
            { title: 'Core Skill 6: Giving No Advice', videoId: '7OReldWvjds' },
            { title: 'Core Skill 7: Identifying Strengths', videoId: 'znVeC6cdAVE' },
            { title: 'Core Skill 8: Generative Listening', videoId: 'lxuYFw85hvw' }
          ]
        },
        {
          type: 'example',
          title: 'Sample Scripts in Filipino Context',
          examples: [
            { skill: "Empathy", phrase: "Ang bigat pala ng nararamdaman mo." },
            { skill: "Strengths", phrase: "Kahit gaano kahirap, nagawa mong kausapin ako—yan ay lakas." },
            { skill: "Advice", phrase: "Some people find journaling helpful—would that interest you?" }
          ]
        }
      ],
      references: [
        {
          title: "WHO mhGAP Intervention Guide - Version 2.0",
          description: "Full clinical guide with diagnostic flowcharts and management protocols that inform referral criteria",
          url: "https://www.who.int/publications/i/item/9789241549790"
        },
        {
          title: "The Self-Help Plus (SH+) Training Manual",
          description: "Based on Acceptance and Commitment Therapy (ACT) for stress management and coping",
          url: "https://www.who.int/publications/b/74335"
        }
      ],
      quiz: [
        {
          question: "When a service user says, \"I know what I should do, but I just can't seem to start,\" the skill of Identifying Strengths would involve the paraprofessional responding with:",
          options: [
            "Advice on time management.",
            "An explanation of procrastination (Labeling Emotions).",
            "\"It sounds like even though it’s hard, you’ve thought through a path forward—that shows great effort and capability.\"",
            "\"That reminds me of a time I felt the same way...\" (Sharing Limited Personal Experience)"
          ],
          correct: 2
        },
        {
          question: "A paraprofessional is using the skill of Reflecting when they:",
          options: [
            "Share a limited personal experience",
            "Paraphrase the user's feelings and main points back to them",
            "Directly tell the user what they should do next (Responding When Asked for Advice)",
            "Ask a question that requires a \"yes\" or \"no\" answer"
          ],
          correct: 1
        },
        {
          question: "Which of the following is an example of an appropriate response when a paraprofessional is Asked for Advice?",
          options: [
            "You need to see a doctor and start medication right away.",
            "If I were you, I would just leave that relationship.",
            "I can’t tell you what to do, but some people find journaling helpful—would that interest you?",
            "I can't answer that because I'm not a therapist."
          ],
          correct: 2
        },
        {
          question: "The core skill of Empathy in the Filipino context can be demonstrated by saying:",
          options: [
            "You need to pray more.",
            "Ganyan talaga ang buhay.",
            "\"Ang bigat pala ng nararamdaman mo (Your feelings seem very heavy).\"",
            "You're overthinking it."
          ],
          correct: 2
        }
      ],
      reflection: "Which skill felt most natural? Hardest?"
    },
    {
      id: 5,
      title: "Recognizing and Responding to Crisis",
      duration: "4 hours",
      icon: <Zap className="h-5 w-5" />,
      color: "from-yellow-500 to-amber-500",
      objectives: [
        "Identify warning signs of suicide and self-harm.",
        "Apply 4-step crisis protocol.",
        "Use direct, nonjudgmental language.",
        "Navigate Philippine referral systems.",
        "Document and escalate using Crisis Escalation Matrix."
      ],
      content: [
        {
          type: 'warning',
          title: 'Warning Signs',
          signs: [
            "Verbal: “I want to disappear”",
            "Behavioral: Giving away possessions",
            "Emotional: Sudden calm after distress"
          ]
        },
        {
          type: 'protocol',
          title: '4-Step Crisis Response',
          steps: [
            "1. Stay calm & ensure safety",
            "2. Listen without judgment",
            "3. Remove access to means (if possible)",
            "4. Connect to help (Hopeline, 911, barangay desk)"
          ]
        },
        {
          type: 'matrix',
          title: 'Crisis Escalation Matrix',
          levels: [
            "Self → Supervisor → DOH/Professional"
          ]
        }
      ],
      references: [
        {
          title: "WHO mhGAP Intervention Guide - Version 2.0",
          description: "Clinical protocols for suicide prevention and crisis management",
          url: "https://www.who.int/publications/i/item/9789241549790"
        },
        {
          title: "Philippine Mental Health Directory (MentalHealthPH)",
          description: "Essential directory for fulfilling the 'Link' role in the Philippines",
          url: "https://mentalhealthph.org/directory/"
        }
      ],
      quiz: [
        {
          question: "In the 4-Step Crisis Response protocol, the step that immediately follows \"Stay calm & ensure safety\" and \"Listen without judgment\" is:",
          options: [
            "Document the entire conversation for the supervisor.",
            "Immediately call 911.",
            "Remove access to means (if possible) and connect to help",
            "Tell the person not to worry and cheer up."
          ],
          correct: 2
        },
        {
          question: "A significant Warning Sign of potential acute distress or suicide risk that paraprofessionals must recognize is:",
          options: [
            "The user starts asking many open-ended questions.",
            "The user shows slight concern over their job (economic determinant)",
            "The user asks for a simple self-care tip.",
            "A sudden, unexplained calm after a period of intense distress"
          ],
          correct: 3
        },
        {
          question: "The Crisis Escalation Matrix dictates that a paraprofessional's final point of referral for high-risk individuals should be to:",
          options: [
            "The barangay captain only.",
            "A relative of the service user.",
            "The national police (911).",
            "Supervisor, or DOH-accredited professional/network"
          ],
          correct: 3
        },
        {
          question: "A core message to emphasize during a crisis response, in line with ethical and safety standards, is the Trainer Note regarding:",
          options: [
            "The need to offer a positive diagnosis.",
            "The principle of \"no promise of secrecy\" and safe referral documentation",
            "The requirement to immediately share personal stories of overcoming crisis.",
            "The importance of using complex clinical jargon."
          ],
          correct: 1
        }
      ],
      reflection: "What fears come up about crisis response?"
    },
    {
      id: 6,
      title: "Cultural Sensitivity and Community Context",
      duration: "2 hours",
      icon: <Globe className="h-5 w-5" />,
      color: "from-green-500 to-lime-500",
      objectives: [
        "Explain how Filipino values affect help-seeking.",
        "Adapt to regional, religious, and identity diversity.",
        "Honor indigenous and faith-based healing.",
        "Challenge bias and microaggressions.",
        "Apply PCMH Pillar 2."
      ],
      content: [
        {
          type: 'values',
          title: 'Filipino Values',
          items: [
            "Hiya (shame)",
            "Utang na Loob (gratitude)",
            "Pakikisama (harmony)"
          ]
        },
        {
          type: 'diversity',
          title: 'Diversity in PH',
          facts: [
            "175+ languages",
            "Catholic, Muslim, Indigenous, LGBTQIA+, PWD perspectives"
          ]
        }
      ],
      references: [
        {
          title: "PCMH Strategic Framework 2024–2028",
          description: "Pillar 2 on Mental Health Promotion and Prevention, including cultural approaches",
          url: "https://www.who.int/philippines/news/detail/12-10-2023-doh---who-launch-philippine-council-for-mental-health-strategic-framework-2024-2028"
        },
        {
          title: "WHO QualityRights Handbook",
          description: "Guidance on cultural sensitivity and inclusive practices",
          url: "https://www.who.int/publications/i/item/9789240058224"
        }
      ],
      quiz: [
        {
          question: "When a paraprofessional adapts their communication and support to account for the service user's religious background or language, they are adhering to which core competency domain?",
          options: [
            "Ethics and Confidentiality",
            "Crisis Response and Referral",
            "Personal and Peer Resilience",
            "Cultural and Community Sensitivity"
          ],
          correct: 3
        },
        {
          question: "Which Philippine value, often characterized as a sense of shame or inhibition, is cited in the module as potentially affecting an individual's help-seeking behavior?",
          options: [
            "Pakikisama (harmony)",
            "Utang na Loob (gratitude)",
            "Hiya (shame)",
            "Bayanihan (community spirit)"
          ],
          correct: 2
        },
        {
          question: "According to the PCMH Strategic Framework, the recognition of indigenous, faith-based, and family-centered approaches is primarily covered under:",
          options: [
            "PCMH Pillar 1: Service Delivery",
            "PCMH Pillar 2: Mental Health Promotion and Prevention",
            "PCMH Pillar 3: Governance",
            "The WHO mhGAP guide"
          ],
          correct: 1
        },
        {
          question: "To demonstrate cultural humility when supporting a diverse Filipino service user, the paraprofessional must:",
          options: [
            "Only refer them to Western, evidence-based therapy.",
            "Immediately share their own cultural background.",
            "Assume all Filipinos share the same exact values (e.g., Hiya).",
            "Honor the use of local, faith-based, or family-centered methods of healing when appropriate"
          ],
          correct: 3
        }
      ],
      reflection: "What messages did you receive about mental health growing up?"
    },
    {
      id: 7,
      title: "Self-Care and Peer Supervision",
      duration: "3 hours",
      icon: <Heart className="h-5 w-5" />,
      color: "from-indigo-500 to-purple-500",
      objectives: [
        "Differentiate stress, burnout, compassion fatigue.",
        "Recognize personal warning signs.",
        "Practice mindfulness and grounding.",
        "Develop a self-care plan.",
        "Participate in peer supervision."
      ],
      content: [
        {
          type: 'video',
          title: 'Self-Care Practices for Paraprofessionals',
          videoId: 'bMh8MSV9qLU'
        },
        {
          type: 'selfcare',
          title: 'Four Dimensions of Self-Care',
          dimensions: [
            "Physical: Sleep, nutrition, movement",
            "Emotional: Journaling, crying, therapy",
            "Social: Time with friends, peer circles",
            "Spiritual: Prayer, nature, gratitude"
          ]
        },
        {
          type: 'supervision',
          title: 'Peer Supervision Structure',
          steps: [
            "Check-in → Case share → Reflection → Resource exchange"
          ]
        }
      ],
      references: [
        {
          title: "The Self-Help Plus (SH+) Training Manual",
          description: "Based on Acceptance and Commitment Therapy (ACT) for self-help and mindfulness routines",
          url: "https://www.who.int/publications/b/74335"
        },
        {
          title: "Doing What Matters in Times of Stress",
          description: "Practical guide for developing resilience and mindfulness practices",
          url: "https://www.who.int/publications/i/item/9789240082540"
        }
      ],
      quiz: [
        {
          question: "Developing a personalized Self-Care Plan and practicing mindfulness routines are core learning outcomes for this module, aiming to sustain:",
          options: [
            "Ethical commitment (Module 2)",
            "Referral documentation (Module 5)",
            "Cultural humility (Module 6)",
            "Personal resilience and prevent burnout/compassion fatigue"
          ],
          correct: 3
        },
        {
          question: "Which of the following activities falls under the Social dimension of the Four Dimensions of Self-Care?",
          options: [
            "Journaling or therapy",
            "Prayer or practicing gratitude",
            "Ensuring adequate sleep and movement",
            "Spending time with friends or participating in peer circles"
          ],
          correct: 3
        },
        {
          question: "The WHO resources Self-Help Plus and Doing What Matters in Times of Stress are introduced in this module to help paraprofessionals with:",
          options: [
            "Advanced crisis intervention.",
            "Diagnosing depression.",
            "Developing a self-help and mindfulness routine",
            "Documenting client interactions"
          ],
          correct: 2
        },
        {
          question: "The standard structure of a Peer Supervision circle typically includes which key steps?",
          options: [
            "Diagnosis → Treatment Plan → Prescriptive Advice",
            "Check-in → Case share → Reflection → Resource exchange",
            "Post-test → Mentor endorsement → Certification",
            "Look → Listen → Link (PFA model)"
          ],
          correct: 1
        }
      ],
      reflection: "Describe a time you ignored your needs to care for others."
    },
    {
      id: 8,
      title: "Practicum and Mentorship",
      duration: "16 hours",
      icon: <Users className="h-5 w-5" />,
      color: "from-cyan-500 to-blue-500",
      objectives: [
        "Deliver 10 ethical peer support sessions.",
        "Apply all core skills in real interactions.",
        "Maintain boundaries and confidentiality.",
        "Reflect critically on practice.",
        "Identify growth areas."
      ],
      content: [
        {
          type: 'requirements',
          title: 'Practicum Requirements',
          items: [
            "10 sessions (20–45 mins each)",
            "Online or in-community",
            "Voluntary participants only",
            "Informed consent for every session"
          ]
        },
        {
          type: 'assessment',
          title: 'Mentorship & Assessment',
          items: [
            "3 sessions observed/recorded (with consent)",
            "Reflection Journal (10 entries)",
            "Mentor completes Observation Rubric and Final Evaluation"
          ]
        }
      ],
      references: [
        {
          title: "WHO mhGAP Intervention Guide - Version 2.0",
          description: "Complete reference for clinical protocols and observation rubrics",
          url: "https://www.who.int/publications/i/item/9789241549790"
        },
        {
          title: "PCMH Strategic Framework 2024–2028",
          description: "Guidelines for workforce development and practicum requirements",
          url: "https://www.who.int/philippines/news/detail/12-10-2023-doh---who-launch-philippine-council-for-mental-health-strategic-framework-2024-2028"
        },
        {
          title: "Philippine Mental Health Directory (MentalHealthPH)",
          description: "Essential resource for identifying appropriate referral pathways during practicum",
          url: "https://mentalhealthph.org/directory/"
        }
      ],
      quiz: [],
      reflection: "What did you learn about yourself through practicum?"
    },
    {
      id: 9,
      title: "Integration and Certification",
      duration: "1 hour",
      icon: <Award className="h-5 w-5" />,
      color: "from-amber-500 to-orange-500",
      objectives: [
        "Demonstrate mastery of course content through a final knowledge assessment.",
        "Reflect on personal and professional growth throughout the training.",
        "Articulate their role in the national mental health ecosystem.",
        "Commit to ongoing learning and ethical practice.",
        "Receive official certification."
      ],
      content: [
        {
          type: 'exam',
          title: 'Final Post-Test',
          details: "30 MCQs, 80% to pass, 2 attempts allowed"
        },
        {
          type: 'pledge',
          title: 'Paraprofessional Pledge',
          text: "I pledge to listen with empathy, act with integrity, and uphold the dignity of every person I support. I will know my limits, seek supervision when needed, and care for myself so I can serve others. I stand with the people of the Philippines in building a future where mental health is a shared responsibility and a universal right."
        }
      ],
      references: [
        {
          title: "Complete Reference Collection",
          description: "All essential documents compiled for ongoing professional development",
          url: "https://cognitioplus.com/resources/complete-reference-collection.pdf"
        }
      ],
      quiz: [
        {
          question: "What is the primary role of a paraprofessional in the mental health ecosystem, as emphasized in Module 0?",
          options: [
            "To provide clinical diagnosis and medication advice.",
            "To offer peer-based psychosocial support and act as a bridge to care.",
            "To counsel individuals using therapeutic models like CBT.",
            "To guarantee absolute confidentiality for all disclosures."
          ],
          correct: 1
        },
        {
          question: "A paraprofessional is permitted to offer professional treatment or medication advice to a service user as long as they disclose they are not a licensed clinician.",
          type: "true_false",
          options: ["True", "False"],
          correct: 1
        },
        {
          question: "Which of the following is a violation of professional boundaries?",
          options: [
            "Seeking supervision when uncertain about a case.",
            "Accepting a service user's friend request or direct message on a personal social media account.",
            "Referring a user to Hopeline PH during a crisis.",
            "Asking a user for informed consent at the start of an online session."
          ],
          correct: 1
        },
        {
          question: "The ethical principle of Non-maleficence means the paraprofessional must actively work in the client's best interest (beneficence).",
          type: "true_false",
          options: ["True", "False"],
          correct: 1
        },
        {
          question: "Which Philippine law requires the paraprofessional to obtain consent and use secure platforms when handling a user's sensitive chat logs or emotional disclosures?",
          options: [
            "The Mental Health Act (RA 11036)",
            "The WHO QualityRights Initiative",
            "The Data Privacy Act (RA 10173)",
            "The PCMH Strategic Framework"
          ],
          correct: 2
        },
        {
          question: "When providing informed consent, the paraprofessional must inform the user about which crucial exception to confidentiality?",
          options: [
            "The need to share the story in peer supervision.",
            "The possibility of discussing the case in public.",
            "The requirement to report all disclosures to the police.",
            "Exceptions such as imminent risk of harm or abuse of a minor."
          ],
          correct: 3
        },
        {
          question: "Psychological First Aid (PFA) is a formal, in-depth form of psychological debriefing that requires specialized clinical training.",
          type: "true_false",
          options: ["True", "False"],
          correct: 1
        },
        {
          question: "What is the most important step in the PFA \"Look\" principle?",
          options: [
            "Labeling the user's emotions (e.g., \"You sound angry\").",
            "Identifying the user's long-term strengths.",
            "Assessing for immediate safety risks and basic physical/emotional needs.",
            "Sharing a personal story of how you overcame a crisis."
          ],
          correct: 2
        },
        {
          question: "If a service user discloses suicidal thoughts, which of the following is the most appropriate and safe response for a paraprofessional to use?",
          options: [
            "\"You have so much to live for—don’t say that!\"",
            "\"I'm not qualified to help with this.\"",
            "\"Are you thinking about hurting yourself? Do you have a plan?\"",
            "\"I will post a prayer request for you on Facebook.\""
          ],
          correct: 2
        },
        {
          question: "Which resource represents a professional Link in the Philippine context that a paraprofessional can safely refer to during a crisis?",
          options: [
            "The user's employer.",
            "Hopeline PH or DOH Mental Health Program via RHUs.",
            "A friend who is also interested in mental health.",
            "A therapist who practices outside the Philippines."
          ],
          correct: 1
        },
        {
          question: "A sudden, unexplained calmness after a period of extreme distress or talk of suicide can be a serious warning sign that the paraprofessional should not ignore.",
          type: "true_false",
          options: ["True", "False"],
          correct: 0
        },
        {
          question: "What action is taken in the final step of the 4-Step Crisis Response protocol?",
          options: [
            "Telling the user that everything will be fine.",
            "Immediately diagnosing the user with a mental disorder.",
            "Removing access to means (if possible) and connecting the user to professional help.",
            "Promising the user that the conversation will remain secret."
          ],
          correct: 2
        },
        {
          question: "The Crisis Escalation Matrix suggests that if a paraprofessional assesses a high risk of harm, their immediate next step should be to bypass their supervisor and go straight to calling 911/professional help.",
          type: "true_false",
          options: ["True", "False"],
          correct: 1
        },
        {
          question: "When a paraprofessional uses the phrase, \"Ang bigat pala ng nararamdaman mo (Your feelings seem very heavy),\" they are primarily demonstrating which core support skill?",
          options: [
            "Sharing Limited Personal Experience.",
            "Asking Open Questions.",
            "Identifying Strengths.",
            "Showing Empathy."
          ],
          correct: 3
        },
        {
          question: "Which skill involves paraphrasing the service user’s words and feelings back to them to check for understanding and show they were heard?",
          options: [
            "Labeling Emotions.",
            "Reflecting",
            "Responding When Asked for Advice.",
            "Building Rapport."
          ],
          correct: 1
        },
        {
          question: "When a service user asks for advice, a paraprofessional should respond by offering their own opinion on what the user should do, since they are a trained supporter.",
          type: "true_false",
          options: ["True", "False"],
          correct: 1
        },
        {
          question: "A paraprofessional is using the skill of Identifying Strengths when they tell a user:",
          options: [
            "\"You sound very depressed.\"",
            "\"Have you tried exercising?\"",
            "\"Kahit gaano kahirap, nagawa mong kausapin ako—yan ay lakas (Even though it was difficult, you were able to talk to me—that is strength).\"",
            "\"That reminds me of a time...\""
          ],
          correct: 2
        },
        {
          question: "The Practicum component (Part 2) of the certification requires trainees to complete a minimum of:",
          options: [
            "24 hours of knowledge quizzes.",
            "10 guided support sessions under mentor supervision.",
            "3 new case reflections for certification renewal.",
            "4 hours of crisis simulation."
          ],
          correct: 1
        },
        {
          question: "The Philippine Mental Health Act (RA 11036) affirms that mental health is integral to overall health and that every Filipino has the right to mental health care.",
          type: "true_false",
          options: ["True", "False"],
          correct: 0
        },
        {
          question: "Which category of mental well-being determinants includes Genetics, brain chemistry, and chronic illness?",
          options: [
            "Social",
            "Biological",
            "Psychological",
            "Cultural"
          ],
          correct: 1
        },
        {
          question: "The value of Hiya (shame) in the Filipino context can serve as a significant barrier to seeking professional mental health support.",
          type: "true_false",
          options: ["True", "False"],
          correct: 0
        },
        {
          question: "When adapting support to the Filipino context, the paraprofessional must recognize that healing often incorporates which approaches?",
          options: [
            "Only Western, evidence-based psychotherapy.",
            "The WHO mhGAP guide protocols exclusively.",
            "Faith-based support, Babaylan rituals, and Family-centered care.",
            "Political advocacy and governance reform."
          ],
          correct: 2
        },
        {
          question: "Recognizing signs of burnout and compassion fatigue is a core objective of which module?",
          options: [
            "Module 4: Core Support Skills",
            "Module 5: Crisis Response",
            "Module 7: Self-Care and Peer Supervision",
            "Module 8: Practicum"
          ],
          correct: 2
        },
        {
          question: "Peer Supervision is primarily a space for paraprofessionals to receive a formal diagnosis from their colleagues.",
          type: "true_false",
          options: ["True", "False"],
          correct: 1
        },
        {
          question: "Which of the following is an example of Emotional self-care?",
          options: [
            "Going for a 30-minute walk (Physical).",
            "Attending a prayer service (Spiritual).",
            "Journaling about feelings or seeking personal therapy.",
            "Joining a social peer circle (Social)."
          ],
          correct: 2
        },
        {
          question: "Which of the four PCMH Strategic Framework 2024–2028 pillars covers the evaluation of the training program and use of data?",
          options: [
            "Pillar 1: Service Delivery and Workforce Development",
            "Pillar 2: Mental Health Promotion and Prevention",
            "Pillar 3: Governance, Data, and Research",
            "Pillar 4: Cross-Sectoral Collaboration"
          ],
          correct: 2
        },
        {
          question: "The total required hours for the Certification Course (Foundational Training + Practicum) is 40 hours.",
          type: "true_false",
          options: ["True", "False"],
          correct: 0
        },
        {
          question: "What is the required Passing Grade for the overall certification, including knowledge, skills, and practicum?",
          options: [
            "50% overall",
            "60% overall",
            "75% overall",
            "80% overall"
          ],
          correct: 3
        },
        {
          question: "Certification is valid for two years, and renewal requires only the completion of a final exam.",
          type: "true_false",
          options: ["True", "False"],
          correct: 1
        },
        {
          question: "The course's philosophy applies the principles of Psychological First Aid (PFA) and builds foundational competencies in:",
          options: [
            "Diagnosis, treatment planning, and medication advice.",
            "Empathy, communication, and referral.",
            "Clinical research and data governance.",
            "Advocacy and policy-making."
          ],
          correct: 1
        }
      ],
      reflection: "Compare your confidence and knowledge at the start of this course to now. What skill are you most proud of developing?"
    }
  ];

  const progress = Math.round((completedModules.size / modules.length) * 100);

  const startModule = (module) => {
    setCurrentModule(module);
    setCurrentView('module');
    window.scrollTo(0, 0);
  };

  const goBack = () => {
    setCurrentView('dashboard');
    setCurrentModule(null);
  };

  const handleAnswer = (moduleId, questionIndex, optionIndex) => {
    setAnswers(prev => ({
      ...prev,
      [moduleId]: {
        ...prev[moduleId],
        [questionIndex]: optionIndex
      }
    }));
  };

  const submitQuiz = (moduleId) => {
    const module = modules.find(m => m.id === moduleId);
    let score = 0;
    const userAnswers = answers[moduleId] || {};
    
    module.quiz.forEach((q, idx) => {
      if (userAnswers[idx] === q.correct) {
        score++;
      }
    });

    const percentage = module.quiz.length > 0 ? (score / module.quiz.length) * 100 : 100;
    
    if (moduleId === 9) {
      if (percentage >= 80) {
        setCompletedModules(prev => new Set(prev).add(moduleId));
        alert(`🎉 Congratulations! You passed the Final Assessment!\nScore: ${score}/${module.quiz.length} (${Math.round(percentage)}%)\n\nYou have successfully completed the Cognitio+ Certification Course!`);
      } else {
        alert(`Final Assessment Score: ${score}/${module.quiz.length} (${Math.round(percentage)}%)\n\nYou need 80% or higher to pass. Please review the material and try again.`);
      }
    } else {
      if (percentage >= 80 || module.quiz.length === 0) {
        setCompletedModules(prev => new Set(prev).add(moduleId));
      }
      alert(`Quiz submitted! Score: ${score}/${module.quiz.length} (${Math.round(percentage)}%)`);
    }
  };

  // Auth Page Component
  if (currentView === 'auth') {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#b425aa' }}>
        <div className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-center">
            <img 
              src={COGNITIO_LOGO} 
              alt="Cognitio+ Logo" 
              className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-white/30"
            />
            <h2 className="text-2xl font-bold text-white">
              {authMode === 'login' ? 'Sign In' : 'Create Account'}
            </h2>
            <p className="text-purple-100 mt-2">
              {authMode === 'login' 
                ? 'Access your certification course' 
                : 'Join the paraprofessional training program'}
            </p>
          </div>
          
          <div className="p-8">
            {authMode === 'login' ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="email"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="password"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                <button
                  onClick={() => setCurrentView('dashboard')}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all"
                >
                  Sign In
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Juan Dela Cruz"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="email"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="password"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="password"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                <button
                  onClick={() => setCurrentView('dashboard')}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all"
                >
                  Create Account
                </button>
              </div>
            )}
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {authMode === 'login' ? "Don't have an account?" : "Already have an account?"}
                <button
                  onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
                  className="text-purple-600 font-medium ml-1 hover:text-purple-800"
                >
                  {authMode === 'login' ? 'Sign up' : 'Sign in'}
                </button>
              </p>
              
              <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-sm text-purple-800">
                    <span className="font-medium">For enrollment inquiries:</span> Contact us at 
                    <a 
                      href="mailto:hello@cognitioplus.com" 
                      className="font-medium underline ml-1"
                    >
                      hello@cognitioplus.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="mt-4 text-xs text-gray-500">
                By signing in or creating an account, you agree to our 
                <a href="https://cognitioplus.aiwaapp.live/privacy-policy" className="text-blue-600 underline ml-1">Privacy Policy</a> 
                and 
                <a href="https://cognitioplus.aiwaapp.live/terms-of-service" className="text-blue-600 underline ml-1">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'module' && currentModule) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center">
            <button 
              onClick={goBack}
              className="flex items-center text-indigo-600 hover:text-indigo-800 mr-4"
            >
              <ChevronLeft className="h-5 w-5" />
              Back to Dashboard
            </button>
            <button
              onClick={() => {
                const hasQuiz = currentModule.quiz.length > 0;
                const wasCompleted = completedModules.has(currentModule.id);
                if (!hasQuiz || wasCompleted) {
                  setCompletedModules(prev => new Set(prev).add(currentModule.id));
                }
                goBack();
              }}
              className="ml-2 px-4 py-2 bg-[#b425aa] text-white rounded-lg font-medium hover:bg-[#9a1e8f]"
            >
              Mark as Complete
            </button>
            <div className="flex items-center ml-auto">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${currentModule.color} flex items-center justify-center text-white`}>
                {currentModule.icon}
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-gray-900">{currentModule.title}</h1>
                <p className="text-sm text-gray-600">{currentModule.duration}</p>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-8">
          {/* Objectives */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <Lightbulb className="h-5 w-5 text-indigo-600 mr-2" />
              Learning Objectives
            </h2>
            <ul className="space-y-2">
              {currentModule.objectives.map((obj, idx) => (
                <li key={idx} className="text-gray-700 flex">
                  <span className="text-indigo-500 mr-2">•</span>
                  {obj}
                </li>
              ))}
            </ul>
          </div>

          {/* Downloadable References Section */}
          {currentModule.references && currentModule.references.length > 0 && (
            <div className="bg-blue-50 rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FolderOpen className="h-5 w-5 text-blue-600 mr-2" />
                Downloadable References
              </h3>
              <div className="space-y-3">
                {currentModule.references.map((ref, idx) => (
                  <a
                    key={idx}
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start p-3 bg-white rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors"
                  >
                    <Download className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">{ref.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{ref.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Lesson Content */}
          <div className="space-y-8 mb-10">
            {currentModule.content.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{item.title}</h3>
                
                {item.type === 'canva' && (
                  <CanvaEmbed src={item.src} />
                )}

                {item.type === 'video' && (
                  <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                    <h4 className="font-medium text-gray-900 mb-3">{item.title}</h4>
                    <YouTubeEmbed videoId={item.videoId} title={item.title} />
                  </div>
                )}

                {item.type === 'videos' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {item.videos.map((vid, i) => (
                      <div key={i} className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-3">{vid.title}</h4>
                        <YouTubeEmbed videoId={vid.videoId} title={vid.title} />
                      </div>
                    ))}
                  </div>
                )}

                {item.type === 'slides' && (
                  <ul className="space-y-2">
                    {item.items.map((slide, i) => (
                      <li key={i} className="p-3 bg-blue-50 rounded-lg text-gray-800">{slide}</li>
                    ))}
                  </ul>
                )}

                {item.type === 'info' && (
                  <div className="p-4 bg-emerald-50 border-l-4 border-emerald-500 text-gray-800 italic">
                    "{item.text}"
                  </div>
                )}

                {item.type === 'table' && (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          {item.headers.map((header, i) => (
                            <th key={i} className="px-4 py-2 text-left text-sm font-medium text-gray-900">{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {item.rows.map((row, i) => (
                          <tr key={i}>
                            <td className="px-4 py-2 text-sm text-gray-900">{row[0]}</td>
                            <td className="px-4 py-2 text-sm text-gray-600">{row[1]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {item.type === 'script' && (
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="font-mono text-gray-800">{item.text}</p>
                  </div>
                )}

                {item.type === 'checklist' && (
                  <ul className="space-y-1">
                    {item.items.map((check, i) => (
                      <li key={i} className="text-gray-700">{check}</li>
                    ))}
                  </ul>
                )}

                {item.type === 'framework' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {item.steps.map((step, i) => (
                      <div key={i} className="border border-gray-200 rounded-lg p-4 text-center">
                        <div className="text-lg font-bold text-indigo-600">{step.step}</div>
                        <p className="text-gray-700 mt-2">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {item.type === 'image' && (
                  <div className="flex justify-center">
                    <img 
                      src={item.imageUrl} 
                      alt="Philippine Referral Pathways" 
                      className="max-w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                )}

                {item.type === 'contact' && (
                  <div className="text-center mt-4">
                    <a
                      href={item.contactUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      Contact Cognitio+ Support
                    </a>
                  </div>
                )}

                {item.type === 'text' && (
                  <div className="prose prose-lg max-w-none">
                    {item.text.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line.startsWith('•') ? (
                          <div className="mb-1">• {line.substring(1).trim()}</div>
                        ) : (
                          <div className="mb-1">{line}</div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}

                {item.type === 'warning' && (
                  <ul className="space-y-2">
                    {item.signs.map((sign, i) => (
                      <li key={i} className="p-3 bg-red-50 rounded-lg text-gray-800">{sign}</li>
                    ))}
                  </ul>
                )}

                {item.type === 'protocol' && (
                  <ol className="space-y-2 list-decimal pl-5">
                    {item.steps.map((step, i) => (
                      <li key={i} className="p-2 bg-amber-50 rounded">{step}</li>
                    ))}
                  </ol>
                )}

                {item.type === 'matrix' && (
                  <div className="p-4 bg-yellow-50 rounded-lg text-center">
                    <p className="text-gray-800 font-medium">{item.levels[0]}</p>
                  </div>
                )}

                {item.type === 'values' && (
                  <ul className="space-y-2">
                    {item.items.map((val, i) => (
                      <li key={i} className="p-3 bg-lime-50 rounded-lg text-gray-800">{val}</li>
                    ))}
                  </ul>
                )}

                {item.type === 'diversity' && (
                  <div className="space-y-3">
                    {item.facts.map((fact, i) => (
                      <div key={i} className="p-3 bg-green-50 rounded-lg">
                        {fact}
                      </div>
                    ))}
                  </div>
                )}

                {item.type === 'selfcare' && (
                  <ul className="space-y-2">
                    {item.dimensions.map((dim, i) => (
                      <li key={i} className="p-3 bg-purple-50 rounded-lg text-gray-800">{dim}</li>
                    ))}
                  </ul>
                )}

                {item.type === 'supervision' && (
                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <p className="text-gray-800">{item.steps[0]}</p>
                  </div>
                )}

                {item.type === 'requirements' && (
                  <ul className="space-y-2">
                    {item.items.map((req, i) => (
                      <li key={i} className="p-3 bg-cyan-50 rounded-lg text-gray-800">{req}</li>
                    ))}
                  </ul>
                )}

                {item.type === 'assessment' && (
                  <ul className="space-y-2">
                    {item.items.map((assess, i) => (
                      <li key={i} className="p-3 bg-blue-50 rounded-lg text-gray-800">{assess}</li>
                    ))}
                  </ul>
                )}

                {item.type === 'exam' && (
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <p className="text-gray-800">{item.details}</p>
                  </div>
                )}

                {item.type === 'pledge' && (
                  <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg">
                    <p className="text-gray-800 italic">"{item.text}"</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Reflection */}
          {currentModule.reflection && (
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <ScrollText className="h-5 w-5 text-indigo-600 mr-2" />
                Reflection Prompt
              </h3>
              <p className="text-gray-700 mb-4">{currentModule.reflection}</p>
              <textarea 
                className="w-full p-3 border border-gray-300 rounded-lg min-h-[120px]"
                placeholder="Write your reflection here..."
              />
              <button className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">
                Save Reflection
              </button>
            </div>
          )}

          {/* Quiz */}
          {currentModule.quiz.length > 0 && (
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FileQuestion className="h-5 w-5 text-indigo-600 mr-2" />
                {currentModule.id === 9 ? 'Final Knowledge Assessment (Post-Test)' : 'Knowledge Check'}
              </h3>
              <div className="space-y-6">
                {currentModule.quiz.map((q, idx) => (
                  <div key={idx}>
                    <p className="font-medium text-gray-900 mb-3">
                      {idx + 1}. {q.question}
                      {q.type === "true_false" && " (True/False)"}
                    </p>
                    <div className="space-y-2">
                      {q.options.map((option, optIdx) => (
                        <label key={optIdx} className="flex items-start space-x-3">
                          <input
                            type="radio"
                            name={`quiz-${currentModule.id}-${idx}`}
                            className="mt-1"
                            onChange={() => handleAnswer(currentModule.id, idx, optIdx)}
                          />
                          <span className="text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => submitQuiz(currentModule.id)}
                className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700"
              >
                {currentModule.id === 9 ? 'Submit Final Assessment' : 'Submit Quiz'}
              </button>
              {currentModule.id === 9 && (
                <p className="mt-2 text-sm text-gray-600">
                  Passing score: 80% or higher (24/30 correct). 2 attempts allowed.
                </p>
              )}
            </div>
          )}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src={COGNITIO_LOGO} 
                alt="Cognitio+ Logo" 
                className="w-10 h-10 rounded-lg"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Cognitio+</h1>
                <p className="text-sm text-gray-600">Mental Health Paraprofessional Certification</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Your Progress</p>
                <p className="text-sm text-gray-600">{progress}% Complete</p>
              </div>
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <Award className="h-5 w-5 text-indigo-600" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Course Overview */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Certification Course for Mental Health and Well-Being Paraprofessionals
              </h2>
              <p className="text-gray-600 max-w-3xl">
                Aligned with WHO mhGAP, WHO QualityRights, and PCMH 2024–2028 Framework
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <div className="bg-blue-50 px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">40 Hours Total</span>
                </div>
              </div>
              <div className="bg-green-50 px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700">80% to Pass</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-lg">
              <Users className="h-6 w-6 mb-2" />
              <h3 className="font-semibold">Part 1: Foundational Training</h3>
              <p className="text-sm opacity-90">24 hours of online modules</p>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-4 rounded-lg">
              <BookOpen className="h-6 w-6 mb-2" />
              <h3 className="font-semibold">Part 2: Practicum</h3>
              <p className="text-sm opacity-90">16 hours supervised practice</p>
            </div>
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-4 rounded-lg">
              <FileText className="h-6 w-6 mb-2" />
              <h3 className="font-semibold">Assessment</h3>
              <p className="text-sm opacity-90">Quizzes, role-plays, journal</p>
            </div>
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-4 rounded-lg">
              <Award className="h-6 w-6 mb-2" />
              <h3 className="font-semibold">Certification</h3>
              <p className="text-sm opacity-90">Valid for 2 years</p>
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full transition-all duration-500" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <div 
              key={module.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => startModule(module)}
            >
              <div className={`h-2 bg-gradient-to-r ${module.color}`}></div>
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center mb-2">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${module.color} flex items-center justify-center text-white mr-3`}>
                        {module.icon}
                      </div>
                      <span className="text-xs font-medium text-gray-500">Module {module.id}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{module.title}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {module.duration}
                    </div>
                  </div>
                  {completedModules.has(module.id) && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  {module.objectives.length} learning objectives
                </p>
                <button className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-800 flex items-center">
                  Start Lesson <ChevronLeft className="h-4 w-4 rotate-180 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Info */}
        <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
          <div className="flex items-start">
            <Award className="h-8 w-8 text-green-600 mt-1 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready for Certification?</h3>
              <p className="text-gray-700 mb-3">
                Complete all modules with ≥80% overall score to earn your certification as a 
                <span className="font-medium"> Basic Mental Health and Wellness Paraprofessional</span>.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white text-green-700 rounded-full text-sm font-medium">
                  Valid for 2 years
                </span>
                <span className="px-3 py-1 bg-white text-green-700 rounded-full text-sm font-medium">
                  Renewable via refresher
                </span>
                <span className="px-3 py-1 bg-white text-green-700 rounded-full text-sm font-medium">
                  DOH-recognized
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200 text-center">
          <p className="text-sm text-blue-800">
            <span className="font-medium">Questions about enrollment?</span> Contact us at 
            <a 
              href="mailto:hello@cognitioplus.com" 
              className="font-medium underline ml-1"
            >
              hello@cognitioplus.com
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
