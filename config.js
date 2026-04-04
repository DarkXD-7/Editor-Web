/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║          PORTFOLIO CONFIG — Edit everything here         ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 * This is the only file you need to touch.
 * All content, links, colors, projects, and skills live here.
 */

const CONFIG = {

  /* ──────────────────────────────────────────────────────────
     META — Browser tab, SEO & social previews
  ────────────────────────────────────────────────────────── */
  meta: {
    siteTitle:      "Sae | Professional Video Editor",
    description:    "Sae — Professional Video Editor specializing in cinematic edits and visual storytelling.",
    ogTitle:        "Sae — Professional Video Editor",
    ogDescription:  "Transforming raw footage into cinematic stories. Cinematic edits, motion graphics, visual content.",
    ogImage:        "",   // Optional: absolute URL to a preview image (e.g. "https://yoursite.com/og.png")
    author:         "Sae",
  },

  /* ──────────────────────────────────────────────────────────
     IDENTITY — Your name, role, bio, badges
  ────────────────────────────────────────────────────────── */
  identity: {
    name:              "Sae",
    handle:            "sae.py",        // shown in footer
    tagline:           "Video Editor",  // sidebar subtitle
    role:              "Professional Video Editor",
    bio:               "I craft visually stunning edits that tell your story — frame by frame. Specializing in cinematic edits, motion graphics, and premium visual content.",
    avatarFallback:    "✦",             // emoji shown if no avatar loads
    localAvatar:       "assets/pfp.png",// path to local avatar image (set to "" to skip)
    badges:            ["Editor", "Creator", "Available"],
  },

  /* ──────────────────────────────────────────────────────────
     DISCORD — Lanyard live status integration
     How to set up:
       1. Enable Developer Mode in Discord (Settings → Advanced)
       2. Right-click your profile → Copy User ID
       3. Join https://discord.gg/lanyard (required for the API to track you)
       4. Paste your User ID below
  ────────────────────────────────────────────────────────── */
  discord: {
    userId:      "1157369310411509770",     // your Discord user ID
    profileUrl:  "https://discord.com/users/1157369310411509770", // direct DM link
    serverUrl:   "https://discord.gg/yourserver",                 // invite link
    serverLabel: "Join Server",
  },

  /* ──────────────────────────────────────────────────────────
     SOCIALS — Shown in sidebar footer + profile card
     Set url to "" to hide a platform entirely
  ────────────────────────────────────────────────────────── */
  socials: {
    youtube: {
      url:    "https://youtube.com/@yourhandle",
      handle: "@YourHandle",
    },
    instagram: {
      url:    "https://instagram.com/yourhandle",
      handle: "@YourHandle",
    },
    // Add or remove platforms as needed
    // twitter: { url: "https://twitter.com/yourhandle", handle: "@YourHandle" },
    // tiktok:  { url: "https://tiktok.com/@yourhandle", handle: "@YourHandle" },
  },

  /* ──────────────────────────────────────────────────────────
     HERO — Big heading, subtitle, CTA buttons
  ────────────────────────────────────────────────────────── */
  hero: {
    title:    "Creative video editor &amp; visual storyteller",
    subtitle: "I craft visually stunning edits that tell your story — frame by frame. Specializing in cinematic edits, motion graphics, and premium visual content.",
    primaryCta: {
      text: "View My Work",
      href: "#projects",
      icon: "ph-play-circle",
    },
    secondaryCta: {
      text: "Get in Touch",
      href: "#contact",
      icon: "ph-envelope",
    },
  },

  /* ──────────────────────────────────────────────────────────
     PROJECTS — Portfolio cards
     Each card:
       title       — card title
       description — short description
       youtubeId   — YouTube video ID (e.g. "dQw4w9WgXcQ")
                     The thumbnail is auto-pulled from YouTube.
       customThumb — optional: path to a local image (overrides YouTube thumb)
       tags        — array of tag strings (max 3-4 looks best)
       linkUrl     — "View on YouTube / Instagram" link
       linkLabel   — text for the link
       linkIcon    — Phosphor icon class (ph-youtube-logo, ph-instagram-logo, etc.)
       thumbFallback — character shown while thumbnail loads
  ────────────────────────────────────────────────────────── */
  projects: [
    {
      title:        "Cinematic Reel",
      description:  "2-minute cinematic showcase with premium color grading and transitions.",
      youtubeId:    "dQw4w9WgXcQ",
      customThumb:  "",
      tags:         ["Cinematic", "4K"],
      linkUrl:      "https://youtube.com",
      linkLabel:    "View on YouTube",
      linkIcon:     "ph-youtube-logo",
      thumbFallback:"▶",
    },
    {
      title:        "Music Video",
      description:  "High-energy music video with dynamic transitions and cinematic color grading.",
      youtubeId:    "dQw4w9WgXcQ",
      customThumb:  "",
      tags:         ["Music", "Color Grade"],
      linkUrl:      "https://youtube.com",
      linkLabel:    "View on YouTube",
      linkIcon:     "ph-youtube-logo",
      thumbFallback:"♪",
    },
    {
      title:        "Social Media Reel",
      description:  "Trending short-form content optimized for Instagram and TikTok.",
      youtubeId:    "dQw4w9WgXcQ",
      customThumb:  "",
      tags:         ["Short-form", "Viral"],
      linkUrl:      "https://instagram.com",
      linkLabel:    "View on Instagram",
      linkIcon:     "ph-instagram-logo",
      thumbFallback:"⊕",
    },
    {
      title:        "Gaming Highlight",
      description:  "Fast-paced gameplay compilation with cinematic effects and transitions.",
      youtubeId:    "dQw4w9WgXcQ",
      customThumb:  "",
      tags:         ["Gaming", "VFX"],
      linkUrl:      "https://youtube.com",
      linkLabel:    "View on YouTube",
      linkIcon:     "ph-youtube-logo",
      thumbFallback:"◀▶",
    },
    {
      title:        "Commercial",
      description:  "30-second product commercial with motion graphics and animation.",
      youtubeId:    "dQw4w9WgXcQ",
      customThumb:  "",
      tags:         ["Commercial", "Motion"],
      linkUrl:      "https://youtube.com",
      linkLabel:    "View Project",
      linkIcon:     "ph-youtube-logo",
      thumbFallback:"◎",
    },
    {
      title:        "Brand Video",
      description:  "Professional brand showcase with storytelling and visual excellence.",
      youtubeId:    "dQw4w9WgXcQ",
      customThumb:  "",
      tags:         ["Brand", "Cinematic"],
      linkUrl:      "https://youtube.com",
      linkLabel:    "View Project",
      linkIcon:     "ph-youtube-logo",
      thumbFallback:"◆",
    },
  ],

  /* ──────────────────────────────────────────────────────────
     SKILLS — Tools & expertise cards
     icon: any Phosphor icon name (ph-film-strip, ph-sparkle, etc.)
     Browse icons at https://phosphoricons.com
  ────────────────────────────────────────────────────────── */
  skills: [
    { name: "Premiere Pro",   icon: "ph-film-strip"   },
    { name: "After Effects",  icon: "ph-sparkle"      },
    { name: "DaVinci Resolve",icon: "ph-palette"      },
    { name: "Motion Design",  icon: "ph-magic-wand"   },
    { name: "Color Grading",  icon: "ph-drop-half"    },
    { name: "Audio Design",   icon: "ph-waveform"     },
    { name: "Storytelling",   icon: "ph-books"        },
    { name: "Fast Turnaround",icon: "ph-lightning"    },
  ],

  /* ──────────────────────────────────────────────────────────
     CONTACT — Section copy + contact method buttons + form
     formAction: set to a Formspree URL (https://formspree.io/f/yourkey)
                 or any other form endpoint. Leave "" for demo-only.
  ────────────────────────────────────────────────────────── */
  contact: {
    sectionTitle: "Let's Create Something",
    sectionDesc:  "Have a project in mind? Let's discuss your vision and bring it to life.",
    email:        "your@email.com",   // used for the Email Me button (mailto:)
    formAction:   "",                 // Formspree or other endpoint (optional)
  },

  /* ──────────────────────────────────────────────────────────
     FOOTER
  ────────────────────────────────────────────────────────── */
  footer: {
    authorName:  "Sae.py",
    authorUrl:   "#",
    credit:      "SynthX Development",
    year:        "2025",
  },

  /* ──────────────────────────────────────────────────────────
     THEME — Accent colors (CSS hex values)
     a1 = primary accent  (purple by default)
     a2 = secondary accent (sky blue by default)
     a3 = tertiary accent  (pink by default — used for muted state)
  ────────────────────────────────────────────────────────── */
  theme: {
    accentPrimary:   "#7c3aed",
    accentSecondary: "#0ea5e9",
    accentTertiary:  "#f472b6",
  },

};
