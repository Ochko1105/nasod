import {
  Search,
  MapPin,
  Globe,
  ChevronRight,
  Calendar,
  CheckCircle2,
  Phone,
  Mail,
  Clock,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function StanfordUniversityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-cyan-500">
                <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-semibold text-gray-900">UniSearch</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Их сургуулиуд
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Мэргэжлүүд
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Тэтгэлэгүүд
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Зөвлөгөө
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Их сургууль хайх..."
                className="w-64 pl-9 bg-gray-50 border-gray-200"
              />
            </div>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
              Нэвтрэх
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-600 to-slate-700 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-sm">
              <svg viewBox="0 0 24 24" fill="#06b6d4" className="h-8 w-8">
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
              </svg>
            </div>
            <Badge
              variant="secondary"
              className="bg-gray-600/50 text-white border-gray-500"
            >
              #2 Үндэсний их сургуулиууд
            </Badge>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-5xl font-bold text-white mb-3">
                Stanford University
              </h1>
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="h-4 w-4" />
                <span>Стэнфорд, Калифорниа</span>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Globe className="h-4 w-4 mr-2" />
                Вэбсайт үзэх
              </Button>
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                Одоо өргөдөл гаргах
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b bg-white sticky top-0 z-10">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex gap-8 text-sm">
            <a
              href="#"
              className="border-b-2 border-cyan-500 py-4 text-cyan-500 font-medium"
            >
              Тойм
            </a>
            <a href="#" className="py-4 text-gray-600 hover:text-gray-900">
              Элсэлт
            </a>
            <a href="#" className="py-4 text-gray-600 hover:text-gray-900">
              Мэргэжлүүд & Хөтөлбөрүүд
            </a>
            <a href="#" className="py-4 text-gray-600 hover:text-gray-900">
              Кампусын амьдрал
            </a>
            <a href="#" className="py-4 text-gray-600 hover:text-gray-900">
              Оюутны үнэлгээ
            </a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Их сургуулийн тухай</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Стэнфордын их сургууль бол Силикон хөндийн зүрхэнд байрладаг
                  хувийн судалгааны их сургууль юм. 1885 онд байгуулагдсан
                  Стэнфорд нь 8,180 акр талбайтай кампустай бөгөөд Америкийн
                  Нэгдсэн Улсын хамгийн нэр хүндтэй боловсролын байгууллагуудын
                  нэг юм. Стэнфорд нь академик хүч чадал, баялаг, технологийн
                  салбартай ойр байдлаараа алдартай бөгөөд дэлхийн шилдэг их
                  сургуулиудын нэгээр тогтмол тооцогддог.
                </p>
                <p>
                  Их сургууль нь долоон сургуульд зохион байгуулагддаг: Дэлхий,
                  Эрчим хүч ба Байгаль орчны шинжлэх ухаан; Инженерчлэл;
                  Хүмүүнлэг ба шинжлэх ухаан; Хууль; Анагаах ухаан; Боловсрол;
                  болон Бизнес. Стэнфордын оюутнууд 36 үндсэн спортын төрөлд
                  оролцдог бөгөөд их сургууль нь Pac-12 конференцийн хоёр хувийн
                  байгууллагын нэг юм.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    Элсэлтийн хувь
                  </div>
                  <div className="text-3xl font-bold">3.9%</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    Дундаж ГПА
                  </div>
                  <div className="text-3xl font-bold">3.96</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    Бакалавр оюутнууд
                  </div>
                  <div className="text-3xl font-bold">7,645</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    Жилийн элсэлт
                  </div>
                  <div className="text-3xl font-bold">$56,169</div>
                </div>
              </div>
            </section>

            {/* Majors Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">
                  Мэргэжлүүд & Элсэлтийн оноо
                </h2>
                <select className="text-sm border border-gray-200 rounded-md px-3 py-2 bg-white">
                  <option>Бүх факультетүүд</option>
                </select>
              </div>

              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Тодорхой мэргэжил хайх (жнь: Компьютерийн шинжлэх ухаан)..."
                    className="pl-9"
                  />
                </div>
              </div>

              <div className="space-y-6">
                {/* Computer Science */}
                <Card className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold">
                          Компьютерийн шинжлэх ухаан
                        </h3>
                        <Badge className="bg-green-100 text-green-700 text-xs">
                          Бак.Ш
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        Инженерийн сургууль
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                        Хамгийн бага САТ оноо
                      </div>
                      <div className="text-2xl font-bold">1520</div>
                      <div className="text-xs text-gray-500">/ 1600</div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Өрсөлдөөн</span>
                      <span className="text-sm font-semibold text-red-600">
                        Маш өндөр
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-red-500 rounded-full"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                </Card>

                {/* Economics */}
                <Card className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold">Эдийн засаг</h3>
                        <Badge className="bg-blue-100 text-blue-700 text-xs">
                          Бак.У
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        Хүмүүнлэг ба шинжлэх ухааны сургууль
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                        Хамгийн бага САТ оноо
                      </div>
                      <div className="text-2xl font-bold">1480</div>
                      <div className="text-xs text-gray-500">/ 1600</div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Өрсөлдөөн</span>
                      <span className="text-sm font-semibold text-orange-600">
                        Өндөр
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-orange-500 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                </Card>

                {/* Mechanical Engineering */}
                <Card className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold">
                          Механик инженерчлэл
                        </h3>
                        <Badge className="bg-green-100 text-green-700 text-xs">
                          Бак.Ш
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        Инженерийн сургууль
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                        Хамгийн бага САТ оноо
                      </div>
                      <div className="text-2xl font-bold">1500</div>
                      <div className="text-xs text-gray-500">/ 1600</div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Өрсөлдөөн</span>
                      <span className="text-sm font-semibold text-orange-600">
                        Өндөр
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-orange-500 rounded-full"
                        style={{ width: "88%" }}
                      ></div>
                    </div>
                  </div>
                </Card>

                {/* Art History */}
                <Card className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold">Урлагийн түүх</h3>
                        <Badge className="bg-blue-100 text-blue-700 text-xs">
                          Бак.У
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        Хүмүүнлэг ба шинжлэх ухааны сургууль
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                        Хамгийн бага САТ оноо
                      </div>
                      <div className="text-2xl font-bold">1420</div>
                      <div className="text-xs text-gray-500">/ 1600</div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Өрсөлдөөн</span>
                      <span className="text-sm font-semibold text-yellow-600">
                        Дунд зэрэг
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-500 rounded-full"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                  </div>
                </Card>
              </div>

              <Button variant="outline" className="w-full mt-6 bg-transparent">
                Бүх 68 мэргэжлийг үзэх
              </Button>
            </section>

            {/* Campus Life */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Кампусын амьдрал</h2>
                <a
                  href="#"
                  className="text-cyan-500 text-sm font-medium hover:text-cyan-600"
                >
                  Галерей үзэх
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="overflow-hidden group cursor-pointer">
                  <div className="relative h-48 bg-gradient-to-br from-teal-300 to-teal-700">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-1">
                      Академик байгууламжууд
                    </h3>
                    <p className="text-sm text-gray-600">
                      Дэлхийн түвшний номын сан & лабораториуд
                    </p>
                  </div>
                </Card>
                <Card className="overflow-hidden group cursor-pointer">
                  <div className="relative h-48 bg-gradient-to-br from-orange-400 to-orange-700">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-1">Спорт</h3>
                    <p className="text-sm text-gray-600">Кардиналын эх орон</p>
                  </div>
                </Card>
                <Card className="overflow-hidden group cursor-pointer">
                  <div className="relative h-48 bg-gradient-to-br from-rose-400 to-rose-800">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-1">Оюутны орон сууц</h3>
                    <p className="text-sm text-gray-600">
                      Идэвхтэй оршин суух нийгэмлэг
                    </p>
                  </div>
                </Card>
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Admission Timeline */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-5 w-5 text-cyan-500" />
                <h3 className="font-semibold">Элсэлтийн хуваарь</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">8 САР 1, 2023</p>
                    <p className="text-sm text-gray-600">Өргөдөл эхэллээ</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100">
                    <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">11 САР 1, 2023</p>
                    <p className="text-sm text-gray-600">
                      Эрт хариулт өгөх хугацаа
                    </p>
                    <Badge variant="destructive" className="mt-1 text-xs">
                      5 хоногт хаагдах
                    </Badge>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100">
                    <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">1 САР 5, 2024</p>
                    <p className="text-sm text-gray-600">Энгийн шийдвэр</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100">
                    <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">4 САР 1, 2024</p>
                    <p className="text-sm text-gray-600">
                      Элсэлтийн шийдвэрүүд
                    </p>
                  </div>
                </div>
              </div>
              <Button variant="link" className="w-full mt-4 text-cyan-500 p-0">
                Миний хуанцаанд нэмэх
              </Button>
            </Card>

            {/* Requirements */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="h-5 w-5 text-cyan-500" />
                <h3 className="font-semibold">Шаардлага</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Нийтлэг өргөдөл</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm">$90 өргөдлийн хураамж</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Албан ёсны магадлан итгэмжлэл</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm">САТ эсвэл АКТ оноо</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm">2 багшийн үнэлгээ</span>
                </div>
              </div>
              <Button
                variant="link"
                className="w-full mt-4 text-cyan-500 p-0 justify-start"
              >
                Бүрэн жагсаалт үзэх
                <ExternalLink className="h-3 w-3 ml-1" />
              </Button>
            </Card>

            {/* Admissions Office */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">ЭЛСЭЛТИЙН АЛБА</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <a
                    href="tel:6507232091"
                    className="text-sm text-gray-700 hover:text-cyan-500"
                  >
                    (650) 723-2091
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <a
                    href="mailto:admission@stanford.edu"
                    className="text-sm text-gray-700 hover:text-cyan-500"
                  >
                    admission@stanford.edu
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    Даваа-Баасан, 8:00 - 17:00
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-gray-50 mt-20">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-cyan-500">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="font-semibold">UniSearch</span>
              </div>
              <p className="text-sm text-gray-600">
                Оюутнуудад тэдний мөрөөдлийн их сургуулиа олоход нарийвчлалтай
                өгөгдөл, хугацаа, шаардлагуудыг нэг дор олгож тусалж байна.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-gray-900">
                Платформ
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-cyan-500">
                    Их сургууль олох
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-500">
                    Мэргэжил харьцуулах
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-500">
                    Элсэлтийн тооцоолуур
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-500">
                    Тэтгэлэг хайгч
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-gray-900">
                Нөөц
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-cyan-500">
                    Оюутны гарын авлага
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-500">
                    Эцэг эхийн зөвлөгөө
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-500">
                    Блог
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-500">
                    Вэбинарууд
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-gray-900">
                Холбоо барих
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-cyan-500">
                    Тусламжийн төв
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-500">
                    Бидэнтэй хамтрах
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-500">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-500">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t text-sm text-gray-600">
            <p>© 2025 UniSearch Inc. Бүх эрх хуулиар хамгаалагдсан.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-cyan-500">
                Нууцлалын бодлого
              </a>
              <a href="#" className="hover:text-cyan-500">
                Үйлчилгээний нөхцөл
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
