-- Site-owned objects on the SMB staging Supabase project (ref umgkkmcfumadtqbfisiw).
-- Applied manually via psql; not part of the product migration chain.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text,
  business text,
  email text,
  locations text,
  industry text,
  revenue bigint,
  note text,
  source text not null default 'scaleterra.ai'
);

-- RLS on, no policies: only the service role (edge functions) can read/write.
alter table public.leads enable row level security;
