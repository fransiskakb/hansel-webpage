"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const schema = z.object({
  email: z.string().email("Please enter a valid email"),
  audience: z.enum(["individual", "organization"]),
});

type Values = z.infer<typeof schema>;

export function WaitlistForm({
  defaultAudience,
  onSuccess,
}: {
  defaultAudience?: "individual" | "organization";
  onSuccess?: () => void;
}) {
  const [status, setStatus] = React.useState<"idle" | "loading" | "ok" | "error">(
    "idle",
  );
  const [error, setError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { audience: defaultAudience ?? "individual", email: "" },
  });

  const audience = watch("audience");

  const onSubmit = async (values: Values) => {
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error || "Something went wrong");
      }
      setStatus("ok");
      onSuccess?.();
    } catch (e) {
      setStatus("error");
      setError(e instanceof Error ? e.message : "Something went wrong");
    }
  };

  if (status === "ok") {
    return (
      <div className="rounded-2xl bg-muted p-6 text-center">
        <p className="display-3 mb-1">You&rsquo;re on the list.</p>
        <p className="text-muted-foreground text-sm">
          We&rsquo;ll be in touch as we get closer to launch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <fieldset className="grid grid-cols-2 gap-2">
        <legend className="sr-only">I am a&hellip;</legend>
        {(["individual", "organization"] as const).map((value) => {
          const checked = audience === value;
          return (
            <label
              key={value}
              className={`cursor-pointer rounded-full border px-4 py-2.5 text-sm font-medium text-center transition-colors ${
                checked
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-card text-foreground hover:bg-muted"
              }`}
            >
              <input
                type="radio"
                value={value}
                className="sr-only"
                checked={checked}
                onChange={() => setValue("audience", value)}
              />
              {value === "individual" ? "I'm an individual" : "I lead a team"}
            </label>
          );
        })}
      </fieldset>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="waitlist-email">Email</Label>
        <Input
          id="waitlist-email"
          type="email"
          autoComplete="email"
          placeholder="you@work-email.com"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="md"
        disabled={status === "loading"}
        className="w-full"
      >
        {status === "loading" ? "Adding you…" : "Join the waitlist"}
      </Button>

      {error && <p className="text-xs text-destructive text-center">{error}</p>}
      <p className="text-xs text-muted-foreground text-center">
        No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}
