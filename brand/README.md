# هوية محمد خليفة — دليل الاستخدام

> **ملاحظة:** هذا الدليل يوثّق قواعد الهوية والألوان فقط. الملفات الفعلية
> منقولة داخل مشروع Next.js إلى مكانها النهائي:
>
> - شعارات `logo/*.svg` → [`public/`](../public)
> - `logo/favicon.svg` → [`app/icon.svg`](../app/icon.svg) (فافيكون تلقائي)
> - `og-image.svg` → [`public/og-image.svg`](../public/og-image.svg)
> - `Logo.tsx` → [`components/Logo.tsx`](../components/Logo.tsx)

## الملفات (النسخة الأصلية لحزمة الهوية)

| الملف | الاستخدام | المكان الفعلي في المشروع |
| --- | --- | --- |
| `logo/logo-horizontal.svg` | النسخة الرئيسية بلونين — الهيدر، توقيع الإيميل، الترويسات | `public/logo-horizontal.svg` |
| `logo/logo-horizontal-mono.svg` | نسخة أحادية تتبع `currentColor` — الطباعة، الخلفيات الداكنة، الختم | `public/logo-horizontal-mono.svg` |
| `logo/logo-mark.svg` | المارك وحده — عندما يكون الاسم مذكوراً بجواره أصلاً | `public/logo-mark.svg` |
| `logo/logo-badge.svg` | الشارة — الأفاتار وحسابات التواصل | `public/logo-badge.svg` |
| `logo/favicon.svg` | الفافيكون | `app/icon.svg` |
| `og-image.svg` | صورة المشاركة 1200×630 | `public/og-image.svg` |
| `brand-tokens.css` | متغيّرات الألوان والخطوط بوضعَي فاتح وداكن | (مرجع فقط — الألوان مطبّقة في `app/globals.css`) |
| `Logo.tsx` | مكوّن React جاهز | `components/Logo.tsx` |
| `brand-preview.html` | افتحه في المتصفح لمعاينة كل شيء | يبقى هنا كمرجع تصميم |

## قواعد الاستخدام

**المساحة الآمنة:** اترك حول الشعار فراغاً لا يقلّ عن ارتفاع حرف M من كل جهة. لا تضع نصاً أو حدوداً داخل هذه المساحة.

**أصغر مقاس:** 120px عرضاً للنسخة الأفقية. تحت ذلك استخدم المارك أو الشارة.

**النقطة جزء من الشعار.** لا تحذفها ولا تغيّر لونها، فهي عنصر الربط في الهوية كلها.

**ممنوع:** تدوير الشعار، إضافة ظل أو تدرّج لوني، تغيير المسافة بين المارك والنص، وضع الشعار على صورة مزدحمة بلا طبقة تعتيم، أو استخدام الأخضر على خلفية خضراء.

## الخطوط

- **Inter Tight** للاتيني — الأوزان 400 و 500 فقط
- **IBM Plex Sans Arabic** للعربي — الأوزان 400 و 500 فقط
- **JetBrains Mono** للأكواد والأرقام التقنية

## ألوان Tailwind

أضف إلى `tailwind.config.ts`:

```ts
theme: {
  extend: {
    colors: {
      ink: "#0C1512",
      accent: {
        DEFAULT: "#1D9E75",
        hover: "#16805E",
        soft: "#E1F5EE",
      },
      paper: "#F1EFE8",
      muted: "#5F5E5A",
      hairline: "#DDDAD0",
    },
    fontFamily: {
      sans: ["var(--font-arabic)", "var(--font-latin)", "sans-serif"],
      latin: ["var(--font-latin)", "sans-serif"],
      mono: ["var(--font-mono)", "monospace"],
    },
  },
}
```

## الفافيكون في Next.js

ضع `favicon.svg` داخل مجلد `app/` وسيلتقطه Next.js تلقائياً. أضف في `app/layout.tsx`:

```tsx
export const metadata = {
  icons: { icon: "/favicon.svg" },
  openGraph: { images: ["/og-image.png"] },
};
```

## ملاحظة مهمة عن النص داخل SVG

ملفات SVG تستخدم عنصر `<text>`، وهذا يعني أن الشعار سيظهر بخط النظام إن لم يكن Inter Tight محمّلاً على جهاز القارئ. لذلك:

- **داخل الموقع:** استخدم `Logo.tsx` — يرسم المارك كـ SVG ويكتب النص كـ HTML، فيتبع خط الموقع دائماً.
- **خارج الموقع** (طباعة، ملف تعريفي، توقيع): افتح الملف في Figma أو Illustrator وحوّل النص إلى مسارات (Outline / Flatten) قبل التصدير.

## تحويل الصور إلى PNG

صورة OG يفضّل رفعها كـ PNG. أسرع طريقة من الطرفية:

```bash
npx svgexport og-image.svg og-image.png 1200:630
```
