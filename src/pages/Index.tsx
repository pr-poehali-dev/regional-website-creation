import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Building" size={20} className="text-white" />
              </div>
              <h1 className="text-xl font-semibold text-gray-900">
                Правительство региона
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Исполнительные действия
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Развитие региона
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Глава региона
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Взаимодействие с федеральными органами власти и
                социально-экономическое развитие региона
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-blue-900 hover:bg-blue-50">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Исполнительные действия
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  <Icon name="TrendingUp" size={20} className="mr-2" />
                  Развитие региона
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="/img/91a36638-547c-4a4b-b46a-8d5f3c1164fe.jpg"
                  alt="Глава региона"
                  className="w-80 h-80 rounded-full object-cover border-4 border-white/20"
                />
                <div className="absolute -bottom-4 -right-4 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center">
                  <Icon name="Check" size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Actions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Исполнительные действия
            </h2>
            <p className="text-lg text-gray-600">
              Актуальные решения и распоряжения главы региона
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Icon name="Building2" size={24} className="text-blue-600" />
                  <Badge variant="secondary">Федеральные</Badge>
                </div>
                <CardTitle className="text-xl">
                  Взаимодействие с федеральными органами
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Координация с министерствами и ведомствами по реализации
                  федеральных программ
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Icon name="Calendar" size={16} className="mr-1" />
                  Последнее обновление: 8 июля 2025
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Icon name="Users" size={24} className="text-green-600" />
                  <Badge variant="secondary">Социальные</Badge>
                </div>
                <CardTitle className="text-xl">Социальная поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Меры поддержки граждан и развитие социальной инфраструктуры
                  региона
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Icon name="Calendar" size={16} className="mr-1" />
                  Последнее обновление: 7 июля 2025
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Icon
                    name="TrendingUp"
                    size={24}
                    className="text-purple-600"
                  />
                  <Badge variant="secondary">Экономические</Badge>
                </div>
                <CardTitle className="text-xl">
                  Экономическое развитие
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Привлечение инвестиций и создание новых рабочих мест в регионе
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Icon name="Calendar" size={16} className="mr-1" />
                  Последнее обновление: 6 июля 2025
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Regional Development Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Социально-экономические показатели
            </h2>
            <p className="text-lg text-gray-600">
              Ключевые индикаторы развития региона
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  +12.5%
                </div>
                <div className="text-sm text-gray-600">Рост ВРП</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  -0.8%
                </div>
                <div className="text-sm text-gray-600">Безработица</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  85.2%
                </div>
                <div className="text-sm text-gray-600">Исполнение бюджета</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  127
                </div>
                <div className="text-sm text-gray-600">Инвестпроекты</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="Target"
                    size={20}
                    className="mr-2 text-blue-600"
                  />
                  Реализация национальных проектов
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Здравоохранение</span>
                    <span className="text-sm text-gray-600">89%</span>
                  </div>
                  <Progress value={89} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Образование</span>
                    <span className="text-sm text-gray-600">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Демография</span>
                    <span className="text-sm text-gray-600">76%</span>
                  </div>
                  <Progress value={76} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Культура</span>
                    <span className="text-sm text-gray-600">84%</span>
                  </div>
                  <Progress value={84} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="MapPin"
                    size={20}
                    className="mr-2 text-green-600"
                  />
                  Федеральные программы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon
                        name="Building"
                        size={20}
                        className="text-blue-600"
                      />
                      <div>
                        <div className="font-medium">Инфраструктура</div>
                        <div className="text-sm text-gray-600">15 объектов</div>
                      </div>
                    </div>
                    <Badge variant="outline">Активна</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon name="Leaf" size={20} className="text-green-600" />
                      <div>
                        <div className="font-medium">Экология</div>
                        <div className="text-sm text-gray-600">8 проектов</div>
                      </div>
                    </div>
                    <Badge variant="outline">Активна</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon name="Zap" size={20} className="text-purple-600" />
                      <div>
                        <div className="font-medium">Цифровизация</div>
                        <div className="text-sm text-gray-600">
                          12 инициатив
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline">Активна</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* National Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Национальные проекты и цели
            </h2>
            <p className="text-lg text-gray-600">
              Реализация стратегических инициатив развития России в регионе
            </p>
          </div>

          {/* National Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Healthcare */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-red-500">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Icon name="Heart" size={24} className="text-red-500" />
                  <Badge className="bg-red-50 text-red-700">89%</Badge>
                </div>
                <CardTitle className="text-lg">Здравоохранение</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Модернизация медицинской помощи и цифровизация здравоохранения
                </p>
                <Progress value={89} className="h-2 mb-2" />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Выполнено: 89%</span>
                  <span>Цель: 95%</span>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Icon
                    name="GraduationCap"
                    size={24}
                    className="text-blue-500"
                  />
                  <Badge className="bg-blue-50 text-blue-700">92%</Badge>
                </div>
                <CardTitle className="text-lg">Образование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Развитие системы образования и повышение качества обучения
                </p>
                <Progress value={92} className="h-2 mb-2" />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Выполнено: 92%</span>
                  <span>Цель: 95%</span>
                </div>
              </CardContent>
            </Card>

            {/* Demographics */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Icon name="Users" size={24} className="text-green-500" />
                  <Badge className="bg-green-50 text-green-700">76%</Badge>
                </div>
                <CardTitle className="text-lg">Демография</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Поддержка семей и стимулирование рождаемости
                </p>
                <Progress value={76} className="h-2 mb-2" />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Выполнено: 76%</span>
                  <span>Цель: 80%</span>
                </div>
              </CardContent>
            </Card>

            {/* Culture */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Icon name="Palette" size={24} className="text-purple-500" />
                  <Badge className="bg-purple-50 text-purple-700">84%</Badge>
                </div>
                <CardTitle className="text-lg">Культура</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Развитие творческого потенциала и культурных индустрий
                </p>
                <Progress value={84} className="h-2 mb-2" />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Выполнено: 84%</span>
                  <span>Цель: 90%</span>
                </div>
              </CardContent>
            </Card>

            {/* Safe Roads */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Icon name="Car" size={24} className="text-orange-500" />
                  <Badge className="bg-orange-50 text-orange-700">78%</Badge>
                </div>
                <CardTitle className="text-lg">Безопасные дороги</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Снижение аварийности и развитие дорожной инфраструктуры
                </p>
                <Progress value={78} className="h-2 mb-2" />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Выполнено: 78%</span>
                  <span>Цель: 85%</span>
                </div>
              </CardContent>
            </Card>

            {/* Housing */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-teal-500">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Icon name="Home" size={24} className="text-teal-500" />
                  <Badge className="bg-teal-50 text-teal-700">82%</Badge>
                </div>
                <CardTitle className="text-lg">
                  Жилье и городская среда
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Повышение качества жизни в городах и поселках
                </p>
                <Progress value={82} className="h-2 mb-2" />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Выполнено: 82%</span>
                  <span>Цель: 88%</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* National Goals Dashboard */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Национальные цели до 2030 года
              </h3>
              <p className="text-gray-600">
                Ключевые показатели развития региона
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">78%</div>
                <div className="text-sm text-gray-600 mb-2">
                  Сохранение населения
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "78%" }}
                  ></div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  85%
                </div>
                <div className="text-sm text-gray-600 mb-2">Качество жизни</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  72%
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  Экономический рост
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: "72%" }}
                  ></div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  89%
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  Цифровая трансформация
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-orange-600 h-2 rounded-full"
                    style={{ width: "89%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional National Projects */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Дополнительные национальные проекты
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Leaf" size={20} className="text-green-600" />
                    <div>
                      <div className="font-medium text-sm">Экология</div>
                      <div className="text-xs text-gray-500">Прогресс: 81%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Zap" size={20} className="text-yellow-600" />
                    <div>
                      <div className="font-medium text-sm">
                        Цифровая экономика
                      </div>
                      <div className="text-xs text-gray-500">Прогресс: 87%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="Briefcase"
                      size={20}
                      className="text-indigo-600"
                    />
                    <div>
                      <div className="font-medium text-sm">Малый бизнес</div>
                      <div className="text-xs text-gray-500">Прогресс: 74%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Globe" size={20} className="text-cyan-600" />
                    <div>
                      <div className="font-medium text-sm">
                        Международная кооперация
                      </div>
                      <div className="text-xs text-gray-500">Прогресс: 69%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Government Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Правительство региона
            </h2>
            <p className="text-lg text-gray-600">
              Состав правительства и структура исполнительной власти
            </p>
          </div>

          {/* Government Leadership */}
          <div className="mb-12">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Руководство
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <Icon name="Crown" size={24} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          Глава региона
                        </div>
                        <div className="text-sm text-gray-600">
                          Высшее должностное лицо
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                        <Icon name="User" size={24} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          Заместитель главы
                        </div>
                        <div className="text-sm text-gray-600">
                          Координация деятельности
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                        <Icon
                          name="FileText"
                          size={24}
                          className="text-white"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          Руководитель аппарата
                        </div>
                        <div className="text-sm text-gray-600">
                          Административное управление
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <img
                    src="/img/93a0c4bf-a0db-4aed-bb37-25d178c8b782.jpg"
                    alt="Правительство региона"
                    className="rounded-lg shadow-lg max-w-md w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Government Structure */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Структура правительства
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Ministry Cards */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Icon name="Heart" size={24} className="text-red-500" />
                    <Badge variant="outline">Министерство</Badge>
                  </div>
                  <CardTitle className="text-lg">Здравоохранение</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Медицинская помощь, охрана здоровья населения
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Сотрудников: 15,420</span>
                    <span className="text-green-600 font-medium">Активно</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Icon
                      name="GraduationCap"
                      size={24}
                      className="text-blue-500"
                    />
                    <Badge variant="outline">Министерство</Badge>
                  </div>
                  <CardTitle className="text-lg">Образование</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Дошкольное, общее и профессиональное образование
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Сотрудников: 28,340</span>
                    <span className="text-green-600 font-medium">Активно</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Icon
                      name="TrendingUp"
                      size={24}
                      className="text-green-500"
                    />
                    <Badge variant="outline">Министерство</Badge>
                  </div>
                  <CardTitle className="text-lg">Экономика</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Экономическое развитие, инвестиции, бизнес
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Сотрудников: 890</span>
                    <span className="text-green-600 font-medium">Активно</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Icon
                      name="Building"
                      size={24}
                      className="text-purple-500"
                    />
                    <Badge variant="outline">Министерство</Badge>
                  </div>
                  <CardTitle className="text-lg">Строительство</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Жилищное строительство, архитектура, ЖКХ
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Сотрудников: 2,150</span>
                    <span className="text-green-600 font-medium">Активно</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Icon name="Leaf" size={24} className="text-green-600" />
                    <Badge variant="outline">Министерство</Badge>
                  </div>
                  <CardTitle className="text-lg">Экология</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Охрана окружающей среды, природные ресурсы
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Сотрудников: 560</span>
                    <span className="text-green-600 font-medium">Активно</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Icon name="Car" size={24} className="text-orange-500" />
                    <Badge variant="outline">Министерство</Badge>
                  </div>
                  <CardTitle className="text-lg">Транспорт</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Дорожное хозяйство, транспортная инфраструктура
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Сотрудников: 3,280</span>
                    <span className="text-green-600 font-medium">Активно</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Government Departments */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Департаменты и службы
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="Shield"
                      size={20}
                      className="mr-2 text-blue-600"
                    />
                    Департамент безопасности
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Служба охраны</span>
                      <Icon
                        name="CheckCircle"
                        size={16}
                        className="text-green-500"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Чрезвычайные ситуации</span>
                      <Icon
                        name="CheckCircle"
                        size={16}
                        className="text-green-500"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">
                        Антитеррористическая защита
                      </span>
                      <Icon
                        name="CheckCircle"
                        size={16}
                        className="text-green-500"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="Users"
                      size={20}
                      className="mr-2 text-purple-600"
                    />
                    Департамент кадров
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Государственная служба</span>
                      <Icon
                        name="CheckCircle"
                        size={16}
                        className="text-green-500"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Кадровый резерв</span>
                      <Icon
                        name="CheckCircle"
                        size={16}
                        className="text-green-500"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Профессиональное развитие</span>
                      <Icon
                        name="CheckCircle"
                        size={16}
                        className="text-green-500"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Government Stats */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Статистика правительства
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
                <div className="text-sm text-gray-600">Министерств</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">8</div>
                <div className="text-sm text-gray-600">Департаментов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  51,640
                </div>
                <div className="text-sm text-gray-600">
                  Государственных служащих
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  127
                </div>
                <div className="text-sm text-gray-600">
                  Подведомственных организаций
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building" size={24} />
                <span className="text-xl font-semibold">
                  Правительство региона
                </span>
              </div>
              <p className="text-gray-400">Официальный портал главы региона</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (XXX) XXX-XX-XX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@region.gov.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>г. Административный центр</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                Официальные ресурсы
              </h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Госуслуги
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Открытые данные
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Обращения граждан
                </a>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="text-center text-gray-400">
            <p>&copy; 2025 Правительство региона. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
