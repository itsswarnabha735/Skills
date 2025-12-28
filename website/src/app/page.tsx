'use client'

import { useState } from 'react'
import { ArrowRight, Github, ExternalLink, Zap, Users, TrendingUp, Code, X } from 'lucide-react'
import Image from 'next/image'
import { TwitterEmbed } from '@/components/TwitterEmbed'

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-base/80 backdrop-blur-sm border-b border-stroke-subtle">
        <div className="container-main flex items-center justify-between h-24">
          <div className="flex items-center gap-2">
            <Image 
              src="/butterpath_logo.png" 
              alt="ButterPath"
              width={240}
              height={56}
              className="h-14 w-auto"
            />
          </div>
          <a 
            href="mailto:muratcan@butterpath.com" 
            className="text-base text-ink-muted hover:text-ink-primary transition-colors flex items-center gap-2"
          >
            Talk to Founder <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-36 pb-14 md:pt-44 md:pb-20">
        <div className="container-main">
          <div className="reveal">
            <div className="tag mb-6 text-sm">
              <span className="w-2 h-2 rounded-full bg-butter animate-pulse-subtle"></span>
              3,500+ GitHub stars
            </div>
          </div>
          
          <h1 className="font-display text-display-lg md:text-[5.5rem] text-ink-primary leading-[1.02] reveal reveal-delay-1">
            The Executable Knowledge Layer<br />
            <span className="text-ink-muted">for AI Agents</span>
          </h1>
          
          <p className="mt-8 text-xl md:text-2xl text-ink-secondary max-w-2xl leading-relaxed reveal reveal-delay-2">
          We&apos;re building an engine that autonomously researches, evaluates, and compiles Skills - 
          standardized instruction sets that allow any agent to perform complex context engineering tasks.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-10 reveal reveal-delay-3">
            <a href="https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering" className="btn-primary">
              View on GitHub <Github className="w-5 h-5" />
            </a>
            <a href="mailto:muratcan@butterpath.com" className="btn-secondary">
              Request Deck
            </a>
          </div>
        </div>
      </section>

      {/* Traction Bar - Key metrics upfront for investors */}
      <section className="py-10 bg-surface-sunken border-y border-stroke-subtle">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-mono text-3xl md:text-4xl font-medium text-ink-primary">3,500+</div>
              <div className="text-sm text-ink-muted mt-2">GitHub Stars (Week 1)</div>
            </div>
            <div>
              <div className="font-mono text-3xl md:text-4xl font-medium text-ink-primary">~$5K</div>
              <div className="text-sm text-ink-muted mt-2">MRR (Consulting)</div>
            </div>
            <div>
              <div className="font-mono text-3xl md:text-4xl font-medium text-ink-primary">12K+</div>
              <div className="text-sm text-ink-muted mt-2">X Followers</div>
            </div>
            <div>
              <div className="font-mono text-3xl md:text-4xl font-medium text-ink-primary">YC Client</div>
              <div className="text-sm text-ink-muted mt-2">AI Healthcare ($MM Rev)</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is ButterPath? */}
      <section className="section-sm">
        <div className="container-main">
          <h2 className="font-display text-display text-ink-primary mb-6">
            What is ButterPath?
          </h2>
          
          <div className="space-y-5 text-ink-secondary text-lg leading-relaxed">
            <p>
              <strong className="text-ink-primary">The AI agent ecosystem is in active chaos. Our founder&apos;s recent viral post on the topic (viewed by millions) resonated because teams are caught in a hype cycle of constant churn - switching frameworks, architectures, and prompting techniques weekly based on the latest blog posts.</strong>
            </p>
            
            <p>
            By creating a standard, versioned, and universal format for executable knowledge, we abstract away the underlying chaos.
            </p>
            <p>
              A Skill is a self-contained set of instructions that teaches AI agents how to perform specific tasks - 
              like compressing context, building data pipelines, or evaluating outputs. 
              Think of Skills like software libraries, but for AI behavior.
            </p>
            
            <p>
              Skills work with any AI tool: Claude Code, Codex, Cursor, LangChain, or your own agent framework. 
              When you load a Skill, your agent immediately knows how to perform that task.
            </p>
          </div>
        </div>
      </section>

      <div className="container-main"><div className="divider"></div></div>

      {/* What can you do with Skills? */}
      <section className="section-sm">
        <div className="container-main">
          <h2 className="font-display text-display text-ink-primary mb-8">
            What can you do with Skills?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="panel p-5">
              <h3 className="text-ink-primary font-medium mb-2">Compress context intelligently</h3>
              <p className="text-ink-secondary text-base leading-relaxed">
                Load the <code className="text-sm bg-surface-sunken px-1.5 py-0.5 rounded">context-compression</code> skill 
                → your agent learns 400+ lines of token budgeting strategies and knows when to summarize vs. truncate.
              </p>
            </div>
            
            <div className="panel p-5">
              <h3 className="text-ink-primary font-medium mb-2">Build data pipelines from research</h3>
              <p className="text-ink-secondary text-base leading-relaxed">
                Load <code className="text-sm bg-surface-sunken px-1.5 py-0.5 rounded">book-sft-pipeline</code> 
                → give it a book URL, get a complete fine-tuning dataset in under a minute.
              </p>
            </div>
            
            <div className="panel p-5">
              <h3 className="text-ink-primary font-medium mb-2">Evaluate agent outputs</h3>
              <p className="text-ink-secondary text-base leading-relaxed">
                Load the <code className="text-sm bg-surface-sunken px-1.5 py-0.5 rounded">evaluation</code> skill 
                → your agent knows how to score responses, detect hallucinations, and compare outputs.
              </p>
            </div>
            
            <div className="panel p-5">
              <h3 className="text-ink-primary font-medium mb-2">Coordinate multi-agent systems</h3>
              <p className="text-ink-secondary text-base leading-relaxed">
                Load <code className="text-sm bg-surface-sunken px-1.5 py-0.5 rounded">multi-agent-patterns</code> 
                → your agent understands handoff protocols, state management, and failure recovery.
              </p>
            </div>
            
            <div className="panel p-5">
              <h3 className="text-ink-primary font-medium mb-2">Design better tools</h3>
              <p className="text-ink-secondary text-base leading-relaxed">
                Load <code className="text-sm bg-surface-sunken px-1.5 py-0.5 rounded">tool-design</code> 
                → your agent follows best practices for tool descriptions, parameter schemas, and error handling.
              </p>
            </div>
            
            <div className="panel p-5">
              <h3 className="text-ink-primary font-medium mb-2">And much more...</h3>
              <p className="text-ink-secondary text-base leading-relaxed">
                Memory systems, project scaffolding, code review patterns. 
                We add new Skills weekly based on the latest research and community needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-main"><div className="divider"></div></div>

      {/* The Product */}
      <section className="section-sm">
        <div className="container-main">
          <h2 className="font-display text-display text-ink-primary mb-4">
            What We&apos;re Building
          </h2>
          <p className="text-ink-secondary text-lg leading-relaxed mb-8">
            A hosted platform to manage Skills and an autonomous engine that creates them. Here&apos;s what it looks like:
          </p>
          
          <div className="space-y-10">
            {/* Skills Dashboard */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-ink-primary font-medium text-lg">Skills Dashboard</h3>
                  <p className="text-ink-secondary text-base">
                    Toggle skills on/off. Track context usage and token budget. Monitor latency and session activity.
                  </p>
                </div>
              </div>
              <div 
                className="bg-surface-sunken border border-stroke-subtle rounded-lg overflow-hidden cursor-pointer hover:opacity-95 transition-opacity shadow-soft"
                onClick={() => setSelectedImage('/butter1.png')}
              >
                <Image 
                  src="/butter1.png" 
                  alt="Skills Dashboard - Manage and configure active skills"
                  width={1400}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            {/* Skill Discovery */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-ink-primary font-medium text-lg">
                    Skill Discovery <span className="text-butter-dark font-mono text-sm ml-2">BETA</span>
                  </h3>
                  <p className="text-ink-secondary text-base">
                    We&apos;re building agents that crawl arxiv, AI lab docs, and research. Sources that pass rubrics will suggest new Skills or updates.
                  </p>
                </div>
              </div>
              <div 
                className="bg-surface-sunken border border-stroke-subtle rounded-lg overflow-hidden cursor-pointer hover:opacity-95 transition-opacity shadow-soft"
                onClick={() => setSelectedImage('/butter2.png')}
              >
                <Image 
                  src="/butter2.png" 
                  alt="Skill Discovery - Autonomous research agent"
                  width={1400}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Image Modal */}
          {selectedImage && (
            <div 
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(null)
                  }}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-surface-base/90 hover:bg-surface-base rounded-full flex items-center justify-center text-ink-primary transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                <div 
                  className="relative w-full h-full max-w-full max-h-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image 
                    src={selectedImage}
                    alt={selectedImage === '/butter1.png' ? 'Skills Dashboard - Manage and configure active skills' : 'Research Dashboard - Skill discovery and evaluation'}
                    width={1920}
                    height={1080}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="container-main"><div className="divider"></div></div>

      {/* The Problem */}
      <section className="section-sm">
        <div className="container-main">
          <h2 className="font-display text-display text-ink-primary mb-6">
            Why Skills?
          </h2>
          
          <div className="space-y-5 text-ink-secondary text-lg leading-relaxed">
            <p>
              <strong className="text-ink-primary">Every developer is reinventing the wheel.</strong> The knowledge that makes 
              AI agents useful - context compression strategies, evaluation methods, multi-agent coordination - 
              lives in scattered prompts that are un-versioned and un-shareable.
            </p>
            
            <p>
              We spent months building agent systems and noticed the same patterns repeating. 
              The bottleneck isn&apos;t model capability anymore - it&apos;s having the right instructions.
            </p>
            
            <p>
              Skills solve this by packaging expert knowledge into reusable components. 
              Instead of every team figuring out context compression from scratch, 
              they load a Skill and immediately get production-grade behavior.
            </p>
          </div>
        </div>
      </section>

      <div className="container-main"><div className="divider"></div></div>

      {/* What makes Skills different */}
      <section className="section-sm">
        <div className="container-main">
          <h2 className="font-display text-display text-ink-primary mb-6">
            What makes Skills different?
          </h2>
          
          <p className="text-ink-secondary text-lg leading-relaxed mb-10">
            Skills aren&apos;t just prompts. They&apos;re versioned, tested, and framework-agnostic. 
            Switch from Claude Code to OpenAI Codex - your Skills still work.
          </p>
          
          <div className="space-y-6">
            <div className="panel p-6">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-butter/20 rounded-lg flex items-center justify-center shrink-0">
                  <Code className="w-6 h-6 text-butter-dark" />
                </div>
                <div>
                  <h3 className="text-ink-primary font-medium text-lg mb-2">Versioned & portable</h3>
                  <p className="text-ink-secondary text-base leading-relaxed">
                    Skills have semantic versions and work across tools. 
                    <code className="text-sm bg-surface-sunken px-2 py-1 rounded mx-1">context-compression@2.1.0</code> 
                    behaves the same in Claude Code, Cursor, or your custom agent.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="panel p-6">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-butter/20 rounded-lg flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-butter-dark" />
                </div>
                <div>
                  <h3 className="text-ink-primary font-medium text-lg mb-2">Expert-validated</h3>
                  <p className="text-ink-secondary text-base leading-relaxed">
                    Every Skill passes quality rubrics before publishing. 
                    We reject Skills that lack failure mode coverage, edge case handling, or clear decision trees.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="panel p-6">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-butter/20 rounded-lg flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6 text-butter-dark" />
                </div>
                <div>
                  <h3 className="text-ink-primary font-medium text-lg mb-2">Auto-updating <span className="text-ink-muted font-mono text-sm ml-2">BUILDING</span></h3>
                  <p className="text-ink-secondary text-base leading-relaxed">
                    When Anthropic publishes new context engineering research, the engine will update relevant Skills. 
                    You&apos;ll get the latest best practices without rewriting your prompts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skill in Action - Case Study */}
      <section className="section-sm bg-surface-sunken border-y border-stroke-subtle">
        <div className="container-main">
          <p className="text-ink-faint font-mono text-sm uppercase tracking-widest mb-4 text-center">Case Study</p>
          <h2 className="font-display text-display text-ink-primary mb-4 text-center">
            Skill in Action
          </h2>
          <p className="text-ink-secondary text-lg leading-relaxed mb-10 text-center max-w-3xl mx-auto">
            Most &quot;agentic&quot; failures happen because the model lacks specific domain knowledge. 
            Here&apos;s how we turned a research paper into a production-ready pipeline in minutes.
          </p>
          
          {/* Workflow Steps */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* Step 1 */}
            <div className="panel p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-butter/20 rounded-full flex items-center justify-center shrink-0">
                  <span className="font-mono text-base text-butter-dark font-medium">1</span>
                </div>
                <h3 className="text-ink-primary font-medium text-lg">Read Research</h3>
              </div>
              <p className="text-ink-secondary text-base leading-relaxed">
                Found a paper showing fine-tuned GPT-4o was <strong className="text-ink-primary">8x more likely</strong> to be chosen as &quot;authentic&quot; 
                than expert writers. Pangram flagged only 3% of SFT outputs vs 97% of in-context prompting.
              </p>
              <a 
                href="https://x.com/koylanai/status/2004760715421241543" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm text-butter-dark hover:text-accent-hover transition-colors"
              >
                View research breakdown <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            
            {/* Step 2 */}
            <div className="panel p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-butter/20 rounded-full flex items-center justify-center shrink-0">
                  <span className="font-mono text-base text-butter-dark font-medium">2</span>
                </div>
                <h3 className="text-ink-primary font-medium text-lg">Create Skill</h3>
              </div>
              <p className="text-ink-secondary text-base leading-relaxed">
                Uploaded the research paper, asked Butterpath to build the same pipeline as the researchers. 
                Created <code className="text-sm bg-surface-base px-1.5 py-0.5 rounded">book-sft-pipeline</code> - 
                a complete ePub to Tinker SFT pipeline.
              </p>
              <a 
                href="https://x.com/koylanai/status/2004877190911950881" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm text-butter-dark hover:text-accent-hover transition-colors"
              >
                See the process <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            
            {/* Step 3 */}
            <div className="panel p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-butter/20 rounded-full flex items-center justify-center shrink-0">
                  <span className="font-mono text-base text-butter-dark font-medium">3</span>
                </div>
                <h3 className="text-ink-primary font-medium text-lg">Train Model</h3>
              </div>
              <p className="text-ink-secondary text-base leading-relaxed">
                Trained Qwen3-8B-Base on Gertrude Stein&apos;s &quot;Three Lives&quot; (1909). 
                The model now writes in Stein&apos;s voice and gets <strong className="text-ink-primary">Human Written</strong> label from AI detectors.
              </p>
              <a 
                href="https://x.com/koylanai/status/2005082048973905938" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm text-butter-dark hover:text-accent-hover transition-colors"
              >
                See results <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
          
          {/* Result Highlight */}
          <div className="panel p-6 md:p-8">
            <div className="md:flex md:items-start md:gap-8">
              <div className="md:flex-1 mb-6 md:mb-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-status-live animate-pulse"></div>
                  <span className="font-mono text-sm text-status-live uppercase tracking-wider">Production Result</span>
                </div>
                <h3 className="text-ink-primary font-display text-heading mb-3">
                  5 Skills Working Together
                </h3>
                <p className="text-ink-secondary text-base leading-relaxed mb-4">
                  This project integrated five reusable Skills. It's a good example of how Butterpath can help you build scalable production-ready context engineering pipelines by only using Skill.md files. - 
                  your agent will have all the instructions for creating datasets, training the model, and evaluating it.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <code className="text-xs bg-surface-base px-2 py-1 rounded text-butter-dark">book-sft-pipeline</code>
                  <code className="text-xs bg-surface-base px-2 py-1 rounded text-ink-muted">project-development</code>
                  <code className="text-xs bg-surface-base px-2 py-1 rounded text-ink-muted">context-compression</code>
                  <code className="text-xs bg-surface-base px-2 py-1 rounded text-ink-muted">context-fundamentals</code>
                  <code className="text-xs bg-surface-base px-2 py-1 rounded text-ink-muted">evaluation</code>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-butter-dark">&lt;1 min</span>
                    <span className="text-ink-muted">dataset generation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-butter-dark">3%</span>
                    <span className="text-ink-muted">AI detection rate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-butter-dark">8x</span>
                    <span className="text-ink-muted">more authentic</span>
                  </div>
                </div>
              </div>
              
              {/* Embedded Tweet */}
              <div className="md:w-96 shrink-0">
                <TwitterEmbed tweetId="2005082048973905938" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-sm">
        <div className="container-main">
          <h2 className="font-display text-display text-ink-primary mb-4">
            What you get today
          </h2>
          <p className="text-ink-secondary text-lg leading-relaxed mb-8">
            We&apos;re early. Here&apos;s what exists right now:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="panel p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-status-live"></div>
                <span className="font-mono text-sm text-status-live uppercase tracking-wider">Live</span>
              </div>
              <h3 className="text-ink-primary font-medium text-lg mb-2">Open Source Skills</h3>
              <p className="text-ink-secondary text-base leading-relaxed mb-4">
                10 production-ready Skills on GitHub. Fork them, modify them, use them with any AI tool. 
                4,000+ stars in the first week.
              </p>
              <a 
                href="https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering" 
                className="text-butter-dark hover:text-accent-hover text-sm flex items-center gap-2"
              >
                View on GitHub <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            
            <div className="panel p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-butter"></div>
                <span className="font-mono text-sm text-butter-dark uppercase tracking-wider">Building</span>
              </div>
              <h3 className="text-ink-primary font-medium text-lg mb-2">Hosted Platform</h3>
              <p className="text-ink-secondary text-base leading-relaxed mb-4">
                Dashboard to manage skills, track usage, and autonomous engine to discover new skills from research. 
                This is what we&apos;re raising to build.
              </p>
              <a 
                href="mailto:muratcan@butterpath.com" 
                className="text-butter-dark hover:text-accent-hover text-sm flex items-center gap-2"
              >
                Talk to us <ArrowRight className="w-3 h-3" />
              </a>
            </div>
            
            <div className="panel p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-ink-muted"></div>
                <span className="font-mono text-sm text-ink-muted uppercase tracking-wider">Available</span>
              </div>
              <h3 className="text-ink-primary font-medium text-lg mb-2">Consulting</h3>
              <p className="text-ink-secondary text-base leading-relaxed mb-4">
                We help teams build custom Skills for their specific workflows. 
                Currently working with a YC-backed AI healthcare company.
              </p>
              <a 
                href="mailto:muratcan@butterpath.com" 
                className="text-butter-dark hover:text-accent-hover text-sm flex items-center gap-2"
              >
                Talk to us <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
          
          {/* Terminal preview */}
          <div className="mt-10 panel p-5 font-mono text-base overflow-x-auto">
            <div className="text-ink-muted"># Install the plugin (Claude Code)</div>
            <div className="text-ink-primary mt-2">
              /plugin marketplace add muratcankoylan/Agent-Skills-for-Context-Engineering
            </div>
            <div className="text-ink-primary mt-1">
              /plugin install context-engineering@context-engineering-marketplace
            </div>
            <div className="text-status-live mt-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-status-live"></span>
              Smooth as butter. 10 skills loaded.
            </div>
          </div>
        </div>
      </section>

      <div className="container-main"><div className="divider"></div></div>

      {/* Business Model */}
      <section className="section-sm">
        <div className="container-main">
          <p className="text-ink-faint font-mono text-sm uppercase tracking-widest mb-4">Business Model</p>
          <h2 className="font-display text-display text-ink-primary mb-8">
            Land and Expand
          </h2>
          
          <div className="grid md:grid-cols-2 gap-5">
            <div className="panel p-6">
              <div className="text-sm font-mono text-ink-muted mb-2">CORE</div>
              <h3 className="text-ink-primary font-medium text-lg mb-2">Public Skills Hub</h3>
              <p className="text-ink-secondary text-base leading-relaxed">
                Free for individual developers. Public Skills Hub, community Skills, basic analytics.
              </p>
            </div>
            
            <div className="panel p-6">
              <div className="text-sm font-mono text-butter-dark mb-2">$49/SEAT</div>
              <h3 className="text-ink-primary font-medium text-lg mb-2">Team</h3>
              <p className="text-ink-secondary text-base leading-relaxed">
                Private Skills, team collaboration, versioning, priority support.
              </p>
            </div>
            
            <div className="panel p-6">
              <div className="text-sm font-mono text-butter-dark mb-2">CUSTOM</div>
              <h3 className="text-ink-primary font-medium text-lg mb-2">Enterprise</h3>
              <p className="text-ink-secondary text-base leading-relaxed">
                Skill Studio (BYOK), SSO, audit logs, custom Rubrics for AI-native companies.
              </p>
            </div>
            
            <div className="panel p-6">
              <div className="text-sm font-mono text-status-live mb-2">ACTIVE NOW</div>
              <h3 className="text-ink-primary font-medium text-lg mb-2">Services</h3>
              <p className="text-ink-secondary text-base leading-relaxed">
                Custom Skill development and Context Engineering consulting. 
                <span className="text-ink-muted"> Paid R&D and customer discovery.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-main"><div className="divider"></div></div>

      {/* Why Now */}
      <section className="section-sm">
        <div className="container-main">
          <p className="text-ink-faint font-mono text-sm uppercase tracking-widest mb-4">Timing</p>
          <h2 className="font-display text-display text-ink-primary mb-8">
            Why Now
          </h2>
          
          <div className="space-y-6">
            <div className="flex gap-5">
              <div className="w-10 h-10 bg-butter/20 rounded-lg flex items-center justify-center shrink-0 text-base font-mono text-butter-dark">1</div>
              <div>
                <h3 className="text-ink-primary font-medium text-lg mb-2">Model Threshold</h3>
                <p className="text-ink-secondary text-base leading-relaxed">
                  Models are finally smart enough to follow complex instructions reliably. 
                  The bottleneck shifted from &quot;can the model do this?&quot; to &quot;do we have the right instructions?&quot;
                </p>
              </div>
            </div>
            
            <div className="flex gap-5">
              <div className="w-10 h-10 bg-butter/20 rounded-lg flex items-center justify-center shrink-0 text-base font-mono text-butter-dark">2</div>
              <div>
                <h3 className="text-ink-primary font-medium text-lg mb-2">Infrastructure Churn</h3>
                <p className="text-ink-secondary text-base leading-relaxed">
                  The fragmentation of the agent stack (MCP, A2A, Swarm) creates a desperate need 
                  for a stable abstraction layer. We are that layer.
                </p>
              </div>
            </div>
            
            <div className="flex gap-5">
              <div className="w-10 h-10 bg-butter/20 rounded-lg flex items-center justify-center shrink-0 text-base font-mono text-butter-dark">3</div>
              <div>
                <h3 className="text-ink-primary font-medium text-lg mb-2">Discipline Maturity</h3>
                <p className="text-ink-secondary text-base leading-relaxed">
                  Context Engineering is moving from &quot;art&quot; to &quot;engineering.&quot; 
                  We are codifying the best practices just as the market is demanding them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-main"><div className="divider"></div></div>

      {/* Moat */}
      <section className="section-sm">
        <div className="container-main">
          <p className="text-ink-faint font-mono text-sm uppercase tracking-widest mb-4">Defensibility</p>
          <h2 className="font-display text-display text-ink-primary mb-4">
            The Moat We&apos;re Building
          </h2>
          <p className="text-ink-secondary text-lg leading-relaxed mb-8">
            We&apos;re raising to build the combination of <strong className="text-ink-primary">Proprietary Rubrics</strong> + <strong className="text-ink-primary">The Autonomous Engine</strong>.
          </p>
          
          <div className="grid md:grid-cols-3 gap-5">
            <div className="p-5 border-l-2 border-butter">
              <h3 className="text-ink-primary font-medium text-lg mb-3">Data Advantage</h3>
              <p className="text-ink-secondary text-base leading-relaxed">
                We&apos;ll build a unique dataset of &quot;Instruction vs. Outcome&quot; - 
                learning which rubrics reduce hallucinations in specific domains.
              </p>
            </div>
            
            <div className="p-5 border-l-2 border-butter">
              <h3 className="text-ink-primary font-medium text-lg mb-3">Network Effects</h3>
              <p className="text-ink-secondary text-base leading-relaxed">
                The Skills Hub will create a flywheel. More users contribute and validate skills, 
                the platform becomes more valuable, attracts more users.
              </p>
            </div>
            
            <div className="p-5 border-l-2 border-butter">
              <h3 className="text-ink-primary font-medium text-lg mb-3">First Mover</h3>
              <p className="text-ink-secondary text-base leading-relaxed">
                The first platform to standardize the Skill format will become 
                the de facto dependency for the industry. We&apos;re moving fast to be that platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - X Posts */}
      <section className="section-sm bg-surface-sunken border-y border-stroke-subtle">
        <div className="container-main">
          <p className="text-ink-faint font-mono text-sm uppercase tracking-widest mb-4 text-center">Community</p>
          <h2 className="font-display text-display text-ink-primary mb-10 text-center">
            What People Are Saying
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <TwitterEmbed tweetId="2002797649842331919" />
            <TwitterEmbed tweetId="2004645108830928913" />
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-sm">
        <div className="container-main">
          <p className="text-ink-faint font-mono text-sm uppercase tracking-widest mb-4">Team</p>
          
          <div className="md:flex md:items-start md:gap-10">
            <div className="shrink-0 mb-6 md:mb-0">
              <div className="w-36 h-36 rounded-lg overflow-hidden border border-stroke-subtle">
                <Image 
                  src="/founder.jpg" 
                  alt="Muratcan Koylan"
                  width={144}
                  height={144}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h2 className="font-display text-heading text-ink-primary mb-4">
                Muratcan Koylan
              </h2>
              
              <div className="space-y-4 text-ink-secondary text-base leading-relaxed">
                <p>
                  <strong className="text-ink-primary">AI Agent Systems Manager at 99Ravens AI.</strong> Built 
                  multi-agent platform handling 10,000+ weekly interactions. Led persona embodiment, 
                  evaluation frameworks, and prompt research.
                </p>
                
                <p>
                  <strong className="text-ink-primary">5 years B2B at Insider</strong> (Sequoia-backed unicorn) 
                  Tmob, and Jonas Software. Uniquely combines technical engineering with GTM strategy.
                </p>
                
                <p>
                  <strong className="text-ink-primary">Built in public to 12K followers.</strong> MiniMax 
                  Developer Ambassador. 2nd place Google Cloud Hackathon. Featured by LangChain. Built AI SDR for Rootly and myPockerCFO.
                </p>
              </div>
              
              <div className="flex gap-5 mt-5">
                <a 
                  href="https://x.com/koylanai" 
                  className="text-ink-muted hover:text-butter-dark transition-colors text-base flex items-center gap-2"
                >
                  @koylanai <ExternalLink className="w-4 h-4" />
                </a>
                <a 
                  href="https://muratcankoylan.com" 
                  className="text-ink-muted hover:text-butter-dark transition-colors text-base flex items-center gap-2"
                >
                  muratcankoylan.com <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-10 panel p-6">
            <h3 className="text-ink-primary font-medium text-lg mb-3 flex items-center gap-2">
              <Users className="w-5 h-5" /> Hiring Plan (Seed)
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-base">
              <div className="text-ink-secondary">
                <strong className="text-ink-primary">Founding Engineer (Backend)</strong> - Autonomous ingestion pipeline architecture
              </div>
              <div className="text-ink-secondary">
                <strong className="text-ink-primary">SME Contractors</strong> - Define initial rubrics for high-value domains
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-main"><div className="divider"></div></div>

      {/* CTA */}
      <section className="section">
        <div className="container-main text-center">
          <h2 className="font-display text-display text-ink-primary mb-5">
            Raising Seed
          </h2>
          
          <p className="text-ink-secondary text-lg mb-8 max-w-xl mx-auto">
            Our long-term vision is to give executable skills to every knowledge worker, but we begin by solving the most acute pain point in the market today: context engineering for AI agents;
            we make models and frameworks better by providing higher-quality instructions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:muratcan@butterpath.com" className="btn-primary">
              Request Full Deck <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering" 
              className="btn-secondary"
            >
              Star on GitHub <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-stroke-subtle">
        <div className="container-main flex flex-col md:flex-row items-center justify-between gap-6 text-ink-muted text-base">
          <div className="flex items-center gap-2">
            <Image 
              src="/butterpath_logo.png" 
              alt="ButterPath"
              width={140}
              height={32}
              className="h-8 w-auto"
            />
          </div>
          
          <div className="flex gap-8">
            <a href="https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering" className="hover:text-butter-dark transition-colors">
              GitHub
            </a>
            <a href="https://x.com/koylanai" className="hover:text-butter-dark transition-colors">
              X / Twitter
            </a>
            <a href="mailto:muratcan@butterpath.com" className="hover:text-butter-dark transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
