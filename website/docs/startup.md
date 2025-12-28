# INVESTMENT MEMORANDUM: AGENT SKILLS

### 1. The Vision: The Executable Knowledge Layer for AI

We are building the standard format and autonomous platform for turning human knowledge into reusable, executable components for AI.

Today, the knowledge that makes agents useful—the SOPs, the decision frameworks, the domain heuristics—lives in scattered prompts, tribal knowledge, and the heads of senior engineers. Every team reinvents this from scratch.

We are developing the **Context Engineering Engine** to autonomously research, evaluate, and compile "Skills"—standardized instruction sets—that allow any agent (Claude, Cursor, AutoGen) to perform complex tasks with production-grade reliability.

The bottleneck for AI adoption is no longer model capability; it is **context management**. Most agents fail because they lack the specific, nuanced context required for professional work. We are automating the creation and distribution of these instructions.

Our long-term vision is to give executable skills to every knowledge worker, but we begin by solving the most acute pain point in the market today: context engineering for AI agents.

---

### 2. The Problem: Infrastructure Fatigue

The AI agent ecosystem is in active chaos. As validated by our founder's recent viral post on the topic (viewed by millions and validated by top AI leaders), teams are caught in a hype cycle of constant churn—switching frameworks, architectures, and prompting techniques weekly based on the latest blog posts.

* **Fragmentation:** Anthropic, Manus, and LangChain publish extensive context engineering documentation, but it is scattered across blogs, papers, and GitHub repos. Developers must manually synthesize these insights.
* **Manual Effort:** Every developer is hand-crafting monolithic, un-versioned, and un-shareable prompts. This process is slow, expensive, and unscalable.
* **The "Context Gap":** General-purpose tools like *Deep Research* can aggregate information, but they lack the expert-defined **evaluation criteria** required for reliable agent performance. They deliver raw data, not executable instructions.

The core issue is that an agent's "knowledge"—its instructions, its ability to perform tasks—is currently treated as a disposable script, not as durable infrastructure.

---

### 3. Our Solution: The Prescriptive Layer

We are building the first **Context Registry** that decouples "Behavior" from "Infrastructure."

By creating a standard, versioned, and universal format for executable knowledge, we abstract away the underlying chaos. A team can switch from LangChain to CrewAI, or from RAG to Text-to-SQL, and their library of Skills remains constant and reusable.

We are not another player in the framework wars; we are the stability layer on which reliable agents are built.

#### The Core Architecture

We are engineering an autonomous foundry that forges raw information into production-ready components:

| Component | Description |
| :--- | :--- |
| **1. The "Skill" Primitive** | A Skill is a self-contained, version-agnostic component of executable knowledge (the AI equivalent of a software library). It defines *what* an agent should know and *how* it should perform a task. It is universal—used as input for Claude, Cursor, or any framework.<br>*(Example: `context-compression` — 400 lines of token budgeting strategies and decision trees.)* |
| **2. The "Rubric" Differentiator** | A Rubric is a set of expert-defined criteria and validation rules. **This is our core IP.** Rubrics teach our autonomous agents *how to think* like an expert. They are the quality filter that general AI lacks.<br>*(Example: A rubric that rejects any engineering skill that lacks failure mode coverage.)* |
| **3. The Autonomous Engine** | We are developing the engine that uses these Rubrics to scan ArXiv, technical blogs, and docs. It doesn't just list links; it synthesizes them into a new, versioned **Skill**.<br>*(Example: Ingesting a new Anthropic paper and auto-updating the `multi-agent-handoff` skill.)* |

---

### 4. The Product

We are architecting a two-sided platform that serves both the creators and consumers of AI knowledge.

#### 4.1. The Skills Hub
We are building the "GitHub for AI Skills"—a central, version-controlled repository where developers can:
* **Discover:** Find pre-built Skills for widespread tasks (e.g., `react-refactoring`, `legal-compliance`).
* **Manage:** Host private Skills for their own teams.
* **Analyze:** Track skill performance and token usage.

When a developer activates a skill in Claude Code, the agent loads the `SKILL.md` instructions. The skill is self-contained, tested, and versioned.

#### 4.2. The Skill Studio (BYOK)
We are developing the **Bring Your Own Knowledge** studio as the self-serve entry point to our Autonomous Foundry. Users will be able to upload proprietary documents (internal APIs, brand guidelines), and our system will use Rubric-driven processes to generate private Skills.

* **Contribute:** Submit Skills via PR (Open Source) or private upload (Enterprise).
* **Fork & Customize:** Adapt a community Skill to a specific domain.
* **Dependency Management:** Enable Skills to declare dependencies on other Skills (composition).

---

### 5. Business Model

| Tier | Target | Pricing | Features |
| :--- | :--- | :--- | :--- |
| **Core** | Individual Developers | **Free** | Public Skills Hub, community Skills, basic analytics. |
| **Team** | Startups & Small Teams | **$49/seat** | Private Skills, team collaboration, versioning, priority support. |
| **Enterprise** | AI-Native Companies | **Custom** | Skill Studio (BYOK), SSO, audit logs, custom Rubrics. |
| **Services** | Strategic Accounts | **Project-Based** | Custom Skill development and Context Engineering consulting. |

**Revenue Drivers:**
* Skill Studio usage (compute + storage).
* Private Hub seats.
* Consulting (currently active—serves as paid R&D and customer discovery).

---

### 6. Positioning: The Context Layer

We are a **Context Company**.

Our position as the "Context Layer" makes us the "Switzerland" of the agent ecosystem. We are complementary to the entire stack, not competitive. We make models (OpenAI/Anthropic) and frameworks (LangChain/CrewAI) better by providing higher-quality instructions.

We are the only solution combining **autonomous research**, **expert-defined evaluation**, and a **universal output format** designed specifically for AI agents.

---

### 7. Market & Go-to-Market Strategy

**Phase 1: The Wedge (AI Developers)**
* **Focus:** Developers feeling the acute pain of context engineering.
* **Tactics:** Win with the open-source Skill format and the Public Hub.
* **Status:** **Active.** GitHub repo is trending; early adopters are contributing.

**Phase 2: The Expansion (AI-Native Teams)**
* **Focus:** Engineering teams needing to version-control agent knowledge.
* **Tactics:** Sell the Private Hub and Skill Studio for "Context Ops."

**Phase 3: The Ocean (The Knowledge Economy)**
* **Focus:** Any knowledge worker.
* **Tactics:** Expand the "Skill" primitive to non-technical domains.

---

### 8. The Moat

Our core IP is the combination of **Proprietary Rubrics** + **The Autonomous Engine**.

* **Data Advantage:** We are building a unique dataset of "Instruction vs. Outcome." We know which rubrics reduce hallucinations in specific domains.
* **Network Effects:** The Skills Hub creates a flywheel. More users contribute and validate skills -> the platform becomes more valuable -> attracts more users.
* **First Mover:** The first platform to standardize the "Skill" format will become the de facto dependency for the industry.

---

### 9. Traction

* **Community:** **4,000+ GitHub stars** in the first week (Organic growth).
* **Distribution:** **12,000+ X followers** in the AI engineering niche; posts regularly reach 100K+ views.
* **Validation:** Viral post on "Infrastructure Chaos" reached millions, liked and tested by top leaders at Vercel, OpenAI, and YC startups.
* **Revenue:** Active consulting engagements generating **~$5,500 MRR**. Clients include a YC-backed AI healthcare startup ($MM revenue).
* **Usage:** Our open-source Skills are currently being used in production by active engineering teams.

---

### 10. Team

**Muratcan Koylan (Founder)**
* **AI Agent Systems Manager at 99Ravens AI:** Built a multi-agent platform handling 10,000+ weekly interactions. Led persona embodiment, evaluation frameworks, and prompt research.
* **Background:** 5 years in B2B marketing at **Insider** (Sequoia-backed unicorn) and Jonas Software. Uniquely combines technical engineering with GTM strategy.
* **Builder:** Self-taught engineer who built in public to 10K+ followers. MiniMax Developer Ambassador; 2nd place Google Cloud Hackathon.

**Hiring Plan (Seed Stage):**
* **Founding Engineer (Backend):** To architect the autonomous ingestion pipeline.
* **AI Agent Systems Manager:** Writes the prompts, collaborates with subject-matter experts, and builds relationships with AI labs and companies.
* **SME Contractors:** To define the initial "Rubrics" for high-value domains.

---

### 11. Why Now?

1.  **Model Threshold:** Models (GPT-5.2, Opus 4.5, Gemini 3) are finally smart enough to follow complex instructions reliably. The bottleneck has shifted from "can the model do this?" to "do we have the right instructions?"
2.  **Infrastructure Churn:** The fragmentation of the agent stack (MCP, A2A, Swarm) creates a desperate need for a stable abstraction layer.
3.  **Discipline Maturity:** Context Engineering is moving from "art" to "engineering." We are codifying the best practices just as the market is demanding them.