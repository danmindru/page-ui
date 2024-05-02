# Page UI
## Landing page components & templates that you can copy & paste
[pageui.dev](https://pageui.dev)

![ogImg](https://github.com/danmindru/page-ui/assets/1515742/f750b862-360e-467d-b00b-f3435fcb1ef9)

A collection of templates, components and examples to create beautiful,
high-converting landing pages with React and Next.js. Open source & themeable
with Tailwind CSS, similar to [Shadcn UI](https://ui.shadcn.com/).

[Read more](https://pageui.dev/docs/introduction).

## Installation (Next.js)

1️⃣ Start by creating a new Next.js app. You can use the following command:

```bash
npx create-next-app@latest my-app --typescript --tailwind --eslint
```

2️⃣ Run the CLI

```bash
npx @page-ui/wizard@latest init
```

3️⃣ Add the required dependencies to your Next.js app:

```bash
npm install @tailwindcss/forms @tailwindcss/typography tailwindcss-animate class-variance-authority clsx tailwind-merge lucide-react @radix-ui/react-accordion
```

4️⃣ Add the below to your `global.css` file.

<details>
<summary><b>Show code ↕️</b></summary>

```css
@layer base {
  :root {
    /* If you use Shadcn UI already, you can skip this block. */
    --hard-shadow: 0px 29px 52px 0px rgba(0, 0, 0, 0.4),
      22px 25px 16px 0px rgba(0, 0, 0, 0.2);
    --hard-shadow-left: 0px 29px 52px 0px rgba(0, 0, 0, 0.4),
      -22px 25px 16px 0px rgba(0, 0, 0, 0.2);
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary-foreground: 355.7 100% 97.3%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --radius: 0.5rem;
  }

  .dark {
    /* If you use Shadcn UI already, you can skip this block. */
    --background: 20 14.3% 4.1%;
    --foreground: 0 0% 95%;
    --card: 24 9.8% 10%;
    --card-foreground: 0 0% 95%;
    --popover: 0 0% 9%;
    --popover-foreground: 0 0% 95%;
    --primary-foreground: 144.9 80.4% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 15%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 12 6.5% 15.1%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 85.7% 97.3%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
  }

  *,
  ::before,
  ::after {
    @apply border-gray-100 dark:border-neutral-800;
  }

  * {
    @apply font-sans;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-semibold font-display;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }

  /**
   * Container utilities
   */
  .container-narrow {
    @apply max-w-4xl;
  }

  .container-wide {
    @apply xl:max-w-6xl;
  }

  .container-ultrawide {
    @apply xl:max-w-7xl;
  }
}
```

</details>

<br/>

For other frameworks, check out the [installation guide](https://pageui.dev/docs/installation).

> ✨ Skip the setup by bootstrapping your app with [Shipixen](https://shipixen.com).

## 🎨 Templates
To copy and paste from the available templates, visit [landing page templates](https://shipixen.com/demo/landing-page-templates).

## 💿 Demos
To see the components in action, visit [landing page component examples](https://shipixen.com/demo/landing-page-component-examples).
