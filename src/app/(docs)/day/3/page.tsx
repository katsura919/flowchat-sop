import { PageHeader } from "@/components/docs/page-header";
import { Callout } from "@/components/docs/callout";
import { StageCard } from "@/components/docs/stage-card";

export default function Day3Page() {
  return (
    <div>
      <PageHeader
        day={3}
        title="Manual Messaging & Nurturing"
        description="Automation reduces workload. Conversion requires human skill. Day 3 covers everything that happens once a lead replies — from first response through booking a call."
      />

      <Callout type="info" title="The VA's Most Important Skill">
        Templates are a framework, not a script. Every reply must be
        personalized. The tone, pace, and direction of each conversation must be
        read and adjusted by the VA in real time.
      </Callout>

      <section className="mt-8 space-y-2">
        <h2 className="text-xl font-semibold tracking-tight mb-4">
          Stage-by-Stage Conversation Flow
        </h2>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          Once a lead replies to the opening message, the VA takes full manual
          control. Each stage has a clear goal. Do not skip stages — each one
          qualifies the lead further before investing more time.
        </p>

        <StageCard
          number={7}
          label="Message Received"
          systemAction="Lead has replied to the opening message. No further automation runs until the VA acts."
          vaTask="Reply manually within a reasonable time. Personalize the response — do not copy-paste. Move the lead to Stage 08 after responding."
          outcome="Goal: Build initial rapport. The lead should feel they are talking to a real person."
        />

        <StageCard
          number={8}
          label="Nurture Questions Sent"
          systemAction="VA has initiated the nurture sequence. System flags lead as active."
          vaTask="Ask 2–3 targeted qualifying questions. Identify the lead's pain points. Confirm their level of interest. Keep the conversation natural — this is not an interrogation."
          outcome="If interest is confirmed, move to Stage 09. If the lead goes cold, do not chase excessively."
        />

        <StageCard
          number={9}
          label="Transition Questions Sent"
          systemAction="Lead is in the business discussion phase."
          vaTask="Clarify the lead's core problem. Confirm their readiness to make a change. Briefly introduce the solution — do not oversell. Verify they are qualified before moving forward."
          outcome="Only move to Stage 10 if the lead is clearly qualified and shows genuine interest."
        />

        <StageCard
          number={10}
          label="Invite to Call Sent"
          systemAction="Booking link has been sent to the lead."
          vaTask="Send the booking link with a clear, low-pressure invitation. Confirm the call is on the calendar if they book."
        >
          <div className="mt-2 space-y-1.5 text-sm">
            <p className="font-medium text-foreground">Outcomes:</p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="font-bold text-emerald-600">Books</span>
              <span className="text-muted-foreground/50">—</span>
              <span>Success. Confirm and hand off to client.</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="font-bold text-muted-foreground">
                Not Interested
              </span>
              <span className="text-muted-foreground/50">—</span>
              <span>Mark as Not Qualified. Do not re-engage.</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="font-bold text-muted-foreground">
                Stops Replying
              </span>
              <span className="text-muted-foreground/50">—</span>
              <span>
                Leave the conversation. Do not send multiple follow-ups.
              </span>
            </div>
          </div>
        </StageCard>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">
          Conversation Standards
        </h2>

        <div className="rounded-lg border divide-y">
          {[
            {
              rule: "Always personalize",
              detail:
                "Reference something specific about the lead or their situation in every message.",
            },
            {
              rule: "One question at a time",
              detail:
                "Do not stack multiple questions in a single message. It overwhelms and reduces reply rate.",
            },
            {
              rule: "Match energy",
              detail:
                "If the lead is brief, be brief. If they are detailed, respond with detail.",
            },
            {
              rule: "No pressure",
              detail:
                "Never push for the call aggressively. The goal is a natural, low-resistance invitation.",
            },
            {
              rule: "Do not chase",
              detail:
                "If a lead goes silent after 2 follow-ups, stop. Move focus to active leads.",
            },
          ].map((item) => (
            <div key={item.rule} className="px-4 py-3.5 flex gap-4">
              <p className="w-44 shrink-0 text-sm font-semibold text-foreground">
                {item.rule}
              </p>
              <p className="text-sm text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <Callout type="tip" title="Core Conversion Principle">
        Automation fills the pipeline. Human conversation converts it. The
        VA&apos;s ability to build rapport and handle objections is the
        difference between a full calendar and an empty one.
      </Callout>
    </div>
  );
}
