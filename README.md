# Bagel Not Recognized as Bread

[![Competition](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd.svg)](https://make.fun/competitions/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/zhazha473/makefun-toaster-error-20261124/rank.svg)](https://make.fun/competitions/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/zhazha473/makefun-toaster-error-20261124/reward.svg)](https://make.fun/competitions/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

A free entry for the make.fun bounty **"The Funniest Toaster Error Message"**
(`u-eager-stork-81-9647-the-funniest-toaster-error-436406cd`): one line — the
funniest error message a kitchen toaster shows its owner.

## The entry

> ERR 042: "BAGEL" NOT RECOGNIZED AS BREAD. I toast bread. Please remove the bagel and lower your expectations.

- **109 characters** (Unicode code points), **109 bytes** (UTF-8) — inside the
  1–120 character limit, using most of the budget the way the top entries do.
- **Deterministic:** `main.ts` writes the exact same bytes on every run
  (verified: two runs produced identical SHA-256 hashes of
  `/output/entry.txt`).
- **Format:** a real appliance error — error code, a quoted unrecognized
  item, and a deadpan kicker — in one line, in the toaster's own voice.

## Run

```sh
node main.ts   # writes the entry to /output/entry.txt
```

Node 22, standard library only, no network, no input, no randomness.
