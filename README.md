<div align="center">

# ✦ Editor Portfolio Template

A clean, dark, cinematic portfolio template built for video editors.  
**One file to configure. Everything else is handled.**

![Preview](https://img.shields.io/badge/status-ready_to_use-7c3aed?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-0ea5e9?style=flat-square)
![Vanilla](https://img.shields.io/badge/stack-HTML%20%2F%20CSS%20%2F%20JS-f472b6?style=flat-square)
![No Build](https://img.shields.io/badge/build-none_required-22c55e?style=flat-square)

</div>

---

## Features

- **Single config file** — edit `config.js` and you're done
- **Discord live status** via [Lanyard API](https://github.com/phineas/lanyard) — shows online/idle/dnd/offline + Spotify activity in real time
- **YouTube video modal** — click any project card to preview the video inline, no page reload
- **Auto YouTube thumbnails** — thumbnails are pulled automatically from the video ID
- **Custom accent colors** — change the entire color scheme from one place
- **Responsive** — sidebar collapses to a hamburger on mobile
- **No frameworks, no dependencies, no build step** — pure HTML/CSS/JS, works straight from a folder

---

## File Structure

```
your-portfolio/
├── index.html        ← main page (don't need to edit this)
├── config.js         ← ✏️  YOUR configuration file (edit this)
├── assets/
│   └── pfp.png       ← (optional) your profile picture
└── README.md
```

---

## Quick Start

1. **Fork or download** this repository
2. Open **`config.js`** in any text editor
3. Fill in your details (name, links, projects, skills)
4. Drop your profile picture at `assets/pfp.png` (optional)
5. Open `index.html` in a browser — or push to GitHub Pages

That's it. No npm install, no terminal, no build process.

---

## Configuration Reference

Everything lives in `config.js`. Here's what each section does:

---

### `meta` — Page title & SEO

```js
meta: {
  siteTitle:     "Your Name | Video Editor",
  description:   "Short description for Google & link previews.",
  ogTitle:       "Your Name — Video Editor",
  ogDescription: "What shows up when someone shares your link.",
  ogImage:       "",   // optional: absolute URL to a preview image
  author:        "Your Name",
},
```

---

### `identity` — Your name, bio, badges

```js
identity: {
  name:           "Your Name",
  handle:         "yourhandle",    // shown in the footer
  tagline:        "Video Editor",  // subtitle in the sidebar
  role:           "Professional Video Editor",
  bio:            "Write a short bio here. 1–2 sentences works best.",
  avatarFallback: "✦",             // emoji shown if no avatar loads
  localAvatar:    "assets/pfp.png",// path to your profile pic, or "" to skip
  badges:         ["Editor", "Creator", "Available"],
},
```

**Badges** are small tags shown on your profile card. Change them to whatever fits — `"Freelance"`, `"Open to Work"`, `"Full-Time"`, etc.

---

### `discord` — Live Discord status (Lanyard)

```js
discord: {
  userId:      "YOUR_DISCORD_USER_ID",
  profileUrl:  "https://discord.com/users/YOUR_DISCORD_USER_ID",
  serverUrl:   "https://discord.gg/your-invite",
  serverLabel: "Join Server",
},
```

**How to get your User ID:**
1. Open Discord → Settings → Advanced → enable **Developer Mode**
2. Right-click your own profile → **Copy User ID**
3. Paste it into `userId` above

**Required:** Join the [Lanyard Discord server](https://discord.gg/lanyard) — this allows the API to track your status.

> If you don't want live status, leave `userId` as `""` and it will silently fall back to "Available for projects".

---

### `socials` — Your social links

```js
socials: {
  youtube: {
    url:    "https://youtube.com/@yourhandle",
    handle: "@YourHandle",
  },
  instagram: {
    url:    "https://instagram.com/yourhandle",
    handle: "@YourHandle",
  },
},
```

These automatically appear in both the **sidebar footer icons** and the **profile card embed links**.

**Supported platforms:** `youtube`, `instagram`, `twitter`, `tiktok`

To **hide** a platform, set its `url` to `""`.  
To **add** a platform, copy an existing block and change the key — if it's one of the four above it'll use the right icon automatically.

---

### `hero` — Big heading & call-to-action buttons

```js
hero: {
  title:    "Creative video editor &amp; visual storyteller",
  subtitle: "Your one-liner about what you do and for who.",
  primaryCta:   { text: "View My Work", href: "#projects", icon: "ph-play-circle" },
  secondaryCta: { text: "Get in Touch",  href: "#contact",  icon: "ph-envelope"    },
},
```

Icons use [Phosphor Icons](https://phosphoricons.com) — search the site, copy the icon name, prefix it with `ph-`.

---

### `projects` — Your portfolio cards

Each card is an object in the `projects` array:

```js
{
  title:         "Project Title",
  description:   "Short description. Keep it under 2 sentences.",
  youtubeId:     "dQw4w9WgXcQ",   // the ID from the YouTube URL
  customThumb:   "",               // optional: path to local image to override YouTube thumb
  tags:          ["Cinematic", "4K"],
  linkUrl:       "https://youtube.com/watch?v=...",
  linkLabel:     "View on YouTube",
  linkIcon:      "ph-youtube-logo",
  thumbFallback: "▶",              // character shown while thumbnail loads
},
```

**Getting the YouTube ID:**  
From `https://youtube.com/watch?v=dQw4w9WgXcQ` → the ID is `dQw4w9WgXcQ`

The thumbnail is pulled automatically. You can add as many cards as you want — the grid handles it.

---

### `skills` — Tools & expertise

```js
skills: [
  { name: "Premiere Pro",  icon: "ph-film-strip" },
  { name: "After Effects", icon: "ph-sparkle"    },
  // add as many as you want
],
```

Browse available icons at [phosphoricons.com](https://phosphoricons.com).

---

### `contact` — Contact section

```js
contact: {
  sectionTitle: "Let's Create Something",
  sectionDesc:  "Have a project in mind? Reach out.",
  email:        "your@email.com",
  formAction:   "",   // optional: Formspree endpoint for working form submissions
},
```

**Setting up the contact form:**  
The form works visually out of the box. To make it actually send emails:
1. Go to [formspree.io](https://formspree.io), create a free account
2. Create a form and copy your endpoint URL (e.g. `https://formspree.io/f/abcdefgh`)
3. Paste it into `formAction`

---

### `footer`

```js
footer: {
  authorName: "Your Name",
  authorUrl:  "#",
  credit:     "Your Studio / Brand",
  year:       "2025",
},
```

---

### `theme` — Accent colors

```js
theme: {
  accentPrimary:   "#7c3aed",   // purple  — main accent (buttons, active states)
  accentSecondary: "#0ea5e9",   // sky     — gradient, links, role text
  accentTertiary:  "#f472b6",   // pink    — mute button indicator
},
```

Change these three hex values to completely retheme the portfolio.

---

## Adding a Profile Picture

Place your image at `assets/pfp.png`.

- Recommended size: **512×512** or larger, square crop
- Supported formats: `.png`, `.jpg`, `.webp`
- To use a different filename or path, update `identity.localAvatar` in `config.js`

If the file doesn't exist or fails to load, it falls back to your Discord avatar (via Lanyard), and if that also fails, it shows the `avatarFallback` emoji.

---

## Deploying to GitHub Pages

1. Push your project to a GitHub repository
2. Go to **Settings → Pages**
3. Under **Source**, select `Deploy from a branch` → `main` → `/ (root)`
4. Click Save — your site will be live at `https://yourusername.github.io/repo-name`

---

## License

MIT — free to use for personal and commercial projects. Attribution appreciated but not required.
```
Made with ❤️ by sae.py | SynthX Development · © 2026
```

This portfolio template is **free to use and modify** for personal and commercial use, provided:

- ✅ You may change your name, content, colours, and projects freely.
- ✅ You may deploy and publish this portfolio publicly.
- ❌ **You must not remove or modify the footer credit line** (`Made with ❤️ by sae.py | SynthX Development`).
- ❌ You must not claim authorship of the original template design.

The footer credit is small, unobtrusive, and the only thing asked in return for a free, well-crafted template. Please respect it.

---

<div align="center">

Built with <3 a Template by [Dark](https://github.com/DarkXD-7)

</div>
