import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { Linkedin } from "lucide-react";
import type { TeamMemberT } from "@/lib/types";

export function TeamCard({ member }: { member: TeamMemberT }) {
  return (
    <div className="rounded-3xl bg-card border border-border p-6">
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted mb-5">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="(min-width: 768px) 25vw, 90vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-primary/30 font-display text-5xl">
            {member.name.charAt(0)}
          </div>
        )}
      </div>
      <h3 className="text-lg font-display leading-tight">{member.name}</h3>
      <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
      {member.bio && (
        <div className="mt-3 text-sm text-foreground/80 leading-relaxed prose-body">
          <PortableText value={member.bio} />
        </div>
      )}
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} on LinkedIn`}
          className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary"
        >
          <Linkedin className="h-3.5 w-3.5" />
          LinkedIn
        </a>
      )}
    </div>
  );
}
