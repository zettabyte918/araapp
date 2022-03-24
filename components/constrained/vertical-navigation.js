/* This example requires Tailwind CSS v2.0+ */
import {
  DocumentSearchIcon,
  VideoCameraIcon,
  DocumentTextIcon,
  LibraryIcon,
  DownloadIcon,
  PuzzleIcon,
  PrinterIcon,
  PhotographIcon,
  ViewGridAddIcon,
  HandIcon,
  AcademicCapIcon,
  BeakerIcon,
  DocumentDuplicateIcon,
  BookOpenIcon,
  SparklesIcon,
  CodeIcon,
  FilmIcon,
  MusicNoteIcon,
  UserGroupIcon,
  FingerPrintIcon,
} from "@heroicons/react/outline";

const navigation = [
  {
    name: "التحقيق في التريندات (الحقائقيون)",
    href: "#",
    icon: DocumentSearchIcon,
    current: true,
    count: "5",
  },
  {
    name: "الألغاز العلمية والتاريخية (الأراميناتي)",
    href: "#",
    icon: FingerPrintIcon,
    current: false,
  },
  {
    name: "الموسوعة العربية الكبرى (أرابيدي)",
    href: "#",
    icon: DocumentTextIcon,
    current: false,
    count: "19",
  },
  {
    name: "كتب وروايات للعرض على دور النشر (وكالة أرابوك للكتاب)",
    href: "#",
    icon: PrinterIcon,
    current: false,
    count: "20+",
  },
  {
    name: "كتب وروايات للتحميل المجاني (إصدارات أرابوك للنشر الالكتروني)",
    href: "#",
    icon: DownloadIcon,
    current: false,
  },
  {
    name: "المكتبة العربية الكبرى (أكبر مكتبة لتحميل الكتب مجانا)",
    href: "#",
    icon: LibraryIcon,
    current: false,
  },
  {
    name: "أراتيوب (مكتبة مقاطع الفيديو)",
    href: "#",
    icon: VideoCameraIcon,
    current: false,
  },
  {
    name: "أراجاليري (جاليري الرسومات العربي الأول)",
    href: "#",
    icon: ViewGridAddIcon,
    current: false,
  },
  {
    name: "أرافوتو (ستوديو الصور العربي)",
    href: "#",
    icon: PhotographIcon,
    current: false,
  },
  {
    name: "أراميد (سوق الهاندميد العربي)",
    href: "#",
    icon: HandIcon,
    current: false,
  },
  {
    name: "أراكورس (منصة الكورسات المجانية)",
    href: "#",
    icon: AcademicCapIcon,
    current: false,
  },
  {
    name: "أراساينس (مقاطع مدبلجة لفهم كافة العلوم)",
    href: "#",
    icon: BeakerIcon,
    current: false,
  },
  {
    name: "أرادوك (مكتبة الأفلام الوثائقية)",
    href: "#",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  {
    name: "خدمة القرآن الكريم (قراءات الأعضاء وخدمة المقرأة)",
    href: "#",
    icon: BookOpenIcon,
    current: false,
  },
  {
    name: "أراجيمز (الألعاب العربية)",
    href: "#",
    icon: PuzzleIcon,
    current: false,
  },
  {
    name: "أرااب (برامج بأيدي عربية)",
    href: "#",
    icon: CodeIcon,
    current: false,
  },
  {
    name: "أرافيلم (أفلام مستقلة من صنعنا)",
    href: "#",
    icon: FilmIcon,
    current: false,
  },
  {
    name: "أراساوند (أغاني وأناشيد ذات رسالة سامية)",
    href: "#",
    icon: MusicNoteIcon,
    current: false,
  },
  {
    name: "خدمة الحديث الشريف (موسوعة الأحاديث النبوية الصحيحة)",
    href: "#",
    icon: SparklesIcon,
    current: false,
  },
  {
    name: "جمعية قوت الخيرية (مشروع الإطعام بدون نقود)",
    href: "#",
    icon: UserGroupIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function VerticalNavigation() {
  return (
    <nav dir="rtl" aria-label="Sidebar">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
            item.current
              ? "bg-gray-300 text-gray-900"
              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
            "group flex items-center px-3 py-2 text-sm font-medium rounded-md"
          )}
          aria-current={item.current ? "page" : undefined}
        >
          <item.icon
            className={classNames(
              item.current
                ? "text-gray-500"
                : "text-gray-400 group-hover:text-gray-500",
              "flex-shrink-0 -mr-1 ml-3 h-6 w-6"
            )}
            aria-hidden="true"
          />
          <span className="truncate">{item.name}</span>
        </a>
      ))}
    </nav>
  );
}

export { VerticalNavigation };
