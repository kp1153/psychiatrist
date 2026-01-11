"use client";
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Wine, Cigarette, Pill, Brain, Heart, AlertTriangle, Shield, Users, Zap, Activity, Phone, BookOpen } from 'lucide-react';

export default function AddictionRecoveryOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-12 h-12 text-orange-600" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              नशामुक्ति (Addiction Recovery)
            </h1>
            <Heart className="w-12 h-12 text-amber-600" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            नशे की लत से मुक्ति की संपूर्ण जानकारी - प्रकार, उपचार, और पुनर्वास
          </p>
        </header>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-white/50 backdrop-blur-sm">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              अवलोकन
            </TabsTrigger>
            <TabsTrigger value="types" className="flex items-center gap-2">
              <Pill className="w-4 h-4" />
              प्रकार
            </TabsTrigger>
            <TabsTrigger value="signs" className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              संकेत
            </TabsTrigger>
            <TabsTrigger value="treatment" className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              उपचार
            </TabsTrigger>
            <TabsTrigger value="recovery" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              पुनर्वास
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
                <CardTitle className="text-2xl">नशे की लत क्या है?</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  नशे की लत (Addiction) एक जटिल मस्तिष्क विकार है जो किसी पदार्थ या व्यवहार के अनियंत्रित उपयोग से चिह्नित होता है, हानिकारक परिणामों के बावजूद। यह मस्तिष्क के इनाम, प्रेरणा और स्मृति सर्किट को प्रभावित करता है।
                </p>
                <p className="text-gray-700 leading-relaxed">
                  लत एक चिकित्सा बीमारी है, नैतिक विफलता नहीं। उचित उपचार और समर्थन के साथ, रिकवरी संभव है।
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-orange-500" />
                    प्रसार
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• भारत में 5-7 करोड़ शराब उपयोगकर्ता</li>
                    <li>• 3-4 करोड़ मादक द्रव्य उपयोगकर्ता</li>
                    <li>• युवाओं में बढ़ती समस्या</li>
                    <li>• परिवार भी प्रभावित होते हैं</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-amber-500" />
                    मुख्य कारण
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• आनुवंशिक प्रवृत्ति (40-60%)</li>
                    <li>• पर्यावरणीय कारक</li>
                    <li>• मानसिक स्वास्थ्य विकार</li>
                    <li>• सामाजिक दबाव</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-yellow-500" />
                    आशा
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• रिकवरी संभव है</li>
                    <li>• कई उपचार विकल्प उपलब्ध</li>
                    <li>• समर्थन समूह मदद करते हैं</li>
                    <li>• नया जीवन शुरू कर सकते हैं</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Alert className="bg-orange-50 border-orange-200">
              <Heart className="h-4 w-4 text-orange-600" />
              <AlertTitle>याद रखें</AlertTitle>
              <AlertDescription>
                नशे की लत एक बीमारी है, कमजोरी नहीं। मदद मांगना साहस का संकेत है। आप अकेले नहीं हैं।
              </AlertDescription>
            </Alert>
          </TabsContent>

          {/* Types Tab */}
          <TabsContent value="types" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50">
                  <CardTitle className="flex items-center gap-2">
                    <Wine className="w-5 h-5 text-red-600" />
                    शराब (Alcohol)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-red-500">सबसे आम</Badge>
                  <p className="text-sm text-gray-700 mb-3">भारत में सबसे व्यापक नशा</p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>प्रभाव:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• लीवर को नुकसान (Cirrhosis)</li>
                      <li>• हृदय रोग</li>
                      <li>• मस्तिष्क क्षति</li>
                      <li>• कैंसर का खतरा</li>
                      <li>• सामाजिक और पारिवारिक समस्याएं</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-gray-50 to-slate-50">
                  <CardTitle className="flex items-center gap-2">
                    <Cigarette className="w-5 h-5 text-gray-600" />
                    तंबाकू (Tobacco)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-gray-500">सबसे घातक</Badge>
                  <p className="text-sm text-gray-700 mb-3">सिगरेट, बीड़ी, गुटखा, पान मसाला</p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>प्रभाव:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• फेफड़ों का कैंसर</li>
                      <li>• मुंह का कैंसर</li>
                      <li>• हृदय रोग और स्ट्रोक</li>
                      <li>• COPD (सांस की बीमारी)</li>
                      <li>• प्रतिवर्ष लाखों मौतें</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle className="flex items-center gap-2">
                    <Pill className="w-5 h-5 text-purple-600" />
                    अवैध नशीले पदार्थ
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-purple-500">खतरनाक</Badge>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div>
                      <p className="font-semibold mb-1">Opioids (अफीम):</p>
                      <ul className="space-y-1 ml-4">
                        <li>• हेरोइन, अफीम, स्मैक</li>
                        <li>• अत्यधिक नशीला</li>
                        <li>• Overdose से मृत्यु</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Cannabis (भांग/गांजा):</p>
                      <ul className="space-y-1 ml-4">
                        <li>• मारिजुआना, चरस, भांग</li>
                        <li>• स्मृति और एकाग्रता प्रभावित</li>
                        <li>• युवाओं में लोकप्रिय</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Cocaine/Stimulants:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Cocaine, Methamphetamine</li>
                        <li>• हृदय पर भारी प्रभाव</li>
                        <li>• मनोविकृति</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-blue-600" />
                    प्रिस्क्रिप्शन दवाएं
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-blue-500">बढ़ती समस्या</Badge>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>आम दुरुपयोग:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• <strong>Painkillers</strong> (Opioid दर्द निवारक)</li>
                      <li>• <strong>Benzodiazepines</strong> (नींद/चिंता की दवाएं)</li>
                      <li>• <strong>Stimulants</strong> (ADHD की दवाएं)</li>
                      <li>• <strong>Cough syrups</strong> (Codeine युक्त)</li>
                    </ul>
                    <p className="mt-2 text-amber-700 font-semibold">चेतावनी: डॉक्टर के निर्देश के बिना न लें</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Signs Tab */}
          <TabsContent value="signs" className="space-y-6">
            <Alert className="bg-red-50 border-red-200">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertTitle>चेतावनी संकेत</AlertTitle>
              <AlertDescription>
                अगर ये संकेत दिखाई दें, तो तुरंत पेशेवर मदद लें। जल्दी हस्तक्षेप बेहतर परिणाम देता है।
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50">
                  <CardTitle>शारीरिक संकेत</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• नशे के बिना शारीरिक तकलीफ (Withdrawal)</li>
                    <li>• सहनशीलता में वृद्धि (अधिक मात्रा की जरूरत)</li>
                    <li>• लाल आंखें, पुतलियों का बदलना</li>
                    <li>• वजन में अचानक बदलाव</li>
                    <li>• नींद के पैटर्न में बदलाव</li>
                    <li>• स्वच्छता में कमी</li>
                    <li>• कांपना, पसीना आना</li>
                    <li>• चोट के निशान (इंजेक्शन के निशान)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle>व्यवहारिक संकेत</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• नशा छोड़ने में असमर्थता</li>
                    <li>• गुप्तता और झूठ बोलना</li>
                    <li>• जिम्मेदारियों की उपेक्षा</li>
                    <li>• नए "दोस्त" या संगत बदलना</li>
                    <li>• वित्तीय समस्याएं, चोरी</li>
                    <li>• काम/स्कूल से अनुपस्थिति</li>
                    <li>• कानूनी समस्याएं</li>
                    <li>• पहले के शौक छोड़ देना</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                  <CardTitle>मनोवैज्ञानिक संकेत</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• मूड में तेज बदलाव</li>
                    <li>• चिड़चिड़ापन, आक्रामकता</li>
                    <li>• अवसाद और चिंता</li>
                    <li>• प्रेरणा की कमी</li>
                    <li>• व्यामोह (Paranoia)</li>
                    <li>• ध्यान केंद्रित करने में कठिनाई</li>
                    <li>• असामान्य ऊर्जा स्तर</li>
                    <li>• भ्रम या मतिभ्रम</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-amber-50 to-yellow-50">
                  <CardTitle>सामाजिक संकेत</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• परिवार और दोस्तों से दूरी</li>
                    <li>• रिश्तों में संघर्ष</li>
                    <li>• सामाजिक गतिविधियों से बचना</li>
                    <li>• विश्वास की कमी</li>
                    <li>• घर पर हिंसा</li>
                    <li>• बच्चों की उपेक्षा (अगर माता-पिता हैं)</li>
                    <li>• सामाजिक समर्थन का नुकसान</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Treatment Tab */}
          <TabsContent value="treatment" className="space-y-6">
            <Alert className="bg-green-50 border-green-200">
              <Shield className="h-4 w-4 text-green-600" />
              <AlertTitle>उपचार उपलब्ध है</AlertTitle>
              <AlertDescription>
                नशे की लत का इलाज संभव है। सही उपचार योजना व्यक्तिगत जरूरतों पर आधारित होती है।
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardTitle>Detoxification (विषहरण)</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-blue-500">पहला कदम</Badge>
                  <p className="text-sm text-gray-700 mb-3">शरीर से नशीले पदार्थों को सुरक्षित रूप से निकालना</p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>प्रक्रिया:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• चिकित्सा पर्यवेक्षण में</li>
                      <li>• Withdrawal लक्षणों का प्रबंधन</li>
                      <li>• 3-7 दिन (पदार्थ पर निर्भर)</li>
                      <li>• दवाओं से सहायता</li>
                    </ul>
                    <Alert className="mt-3 bg-red-50 border-red-200">
                      <AlertDescription className="text-xs">
                        <strong>चेतावनी:</strong> अचानक नशा छोड़ना खतरनाक हो सकता है। हमेशा चिकित्सा देखरेख में करें।
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle>दवा-सहायक उपचार (MAT)</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-purple-500">प्रभावी</Badge>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div>
                      <p className="font-semibold mb-1">Opioid लत के लिए:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Buprenorphine (Suboxone)</li>
                        <li>• Methadone</li>
                        <li>• Naltrexone</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">शराब लत के लिए:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Disulfiram (Antabuse)</li>
                        <li>• Naltrexone</li>
                        <li>• Acamprosate</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">धूम्रपान के लिए:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Nicotine replacement</li>
                        <li>• Bupropion (Zyban)</li>
                        <li>• Varenicline (Champix)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                  <CardTitle>व्यवहार थेरेपी</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-green-500">आवश्यक</Badge>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>CBT (Cognitive Behavioral Therapy)</strong> - विचार और व्यवहार बदलना</li>
                    <li>• <strong>Motivational Interviewing</strong> - बदलाव के लिए प्रेरित करना</li>
                    <li>• <strong>Contingency Management</strong> - पुरस्कार-आधारित</li>
                    <li>• <strong>Family Therapy</strong> - परिवार की भागीदारी</li>
                    <li>• <strong>Group Therapy</strong> - साथियों का समर्थन</li>
                    <li>• <strong>12-Step Programs</strong> (AA, NA)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
                  <CardTitle>पुनर्वास कार्यक्रम</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-amber-500">गहन उपचार</Badge>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div>
                      <p className="font-semibold mb-1">Inpatient (आवासीय):</p>
                      <ul className="space-y-1 ml-4">
                        <li>• 30-90 दिन या अधिक</li>
                        <li>• 24/7 चिकित्सा देखभाल</li>
                        <li>• संरचित वातावरण</li>
                        <li>• गंभीर लत के लिए सर्वोत्तम</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Outpatient (बाह्य रोगी):</p>
                      <ul className="space-y-1 ml-4">
                        <li>• सप्ताह में कुछ घंटे</li>
                        <li>• घर पर रहते हुए</li>
                        <li>• हल्की से मध्यम लत के लिए</li>
                        <li>• लचीला</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Recovery Tab */}
          <TabsContent value="recovery" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-blue-600" />
                    रिकवरी के चरण
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3 text-sm text-gray-700">
                    <div>
                      <Badge className="mb-1">1. निर्णय</Badge>
                      <p>बदलाव के लिए प्रतिबद्धता</p>
                    </div>
                    <div>
                      <Badge className="mb-1">2. Detox</Badge>
                      <p>शारीरिक निर्भरता से मुक्ति</p>
                    </div>
                    <div>
                      <Badge className="mb-1">3. सक्रिय उपचार</Badge>
                      <p>थेरेपी और कौशल विकास</p>
                    </div>
                    <div>
                      <Badge className="mb-1">4. रखरखाव</Badge>
                      <p>संयम बनाए रखना</p>
                    </div>
                    <div>
                      <Badge className="mb-1">5. उन्नत रिकवरी</Badge>
                      <p>नया जीवन बनाना</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-purple-600" />
                    Relapse रोकथाम
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm text-gray-700 mb-3">Relapse आम है लेकिन रोका जा सकता है:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>ट्रिगर्स पहचानें</strong> (लोग, स्थान, भावनाएं)</li>
                    <li>• <strong>मुकाबला कौशल</strong> विकसित करें</li>
                    <li>• <strong>समर्थन नेटवर्क</strong> बनाए रखें</li>
                    <li>• <strong>तनाव प्रबंधन</strong> तकनीकें</li>
                    <li>• <strong>नियमित फॉलो-अप</strong></li>
                    <li>• <strong>दवाएं जारी रखें</strong> (यदि निर्धारित)</li>
                    <li>• <strong>स्वस्थ जीवनशैली</strong></li>
                  </ul>
                </CardContent>
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-green-600" />
                    समर्थन समूह
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-green-500">सहायक</Badge>
                  <p className="text-sm text-gray-700 mb-3">साथियों का समर्थन रिकवरी में महत्वपूर्ण भूमिका निभाता है</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>AA (Alcoholics Anonymous)</strong> - शराबियों के लिए</li>
                    <li>• <strong>NA (Narcotics Anonymous)</strong> - नशीली दवाओं के लिए</li>
                    <li>• <strong>SMART Recovery</strong> - विज्ञान-आधारित</li>
                    <li>• <strong>Al-Anon</strong> - परिवार के सदस्यों के लिए</li>
                    <li>• <strong>ऑनलाइन समर्थन समूह</strong></li>
                    <li>• <strong>धार्मिक/आध्यात्मिक समूह</strong></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50">
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-600" />
                    आत्म-देखभाल रणनीतियां
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-yellow-500">दैनिक अभ्यास</Badge>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>नियमित व्यायाम</strong> - हर दिन 30 मिनट</li>
                    <li>• <strong>पौष्टिक आहार</strong> - संतुलित भोजन</li>
                    <li>• <strong>पर्याप्त नींद</strong> - 7-9 घंटे</li>
                    <li>• <strong>ध्यान और योग</strong> - तनाव कम करें</li>
                    <li>• <strong>शौक और रुचियां</strong> - नए कौशल सीखें</li>
                    <li>• <strong>सामाजिक संबंध</strong> - सकारात्मक लोग</li>
                    <li>• <strong>दैनिक दिनचर्या</strong> - संरचना बनाएं</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50">
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    चेतावनी संकेत
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-red-500">सतर्क रहें</Badge>
                  <p className="text-sm text-gray-700 mb-3">Relapse के संकेतों पर ध्यान दें:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• पुराने दोस्तों/जगहों के बारे में सोचना</li>
                    <li>• नशे की तीव्र इच्छा (Cravings)</li>
                    <li>• थेरेपी या मीटिंग्स छोड़ना</li>
                    <li>• तनाव या चिंता में वृद्धि</li>
                    <li>• अकेलापन या अलगाव</li>
                    <li>• "सिर्फ एक बार" की सोच</li>
                    <li>• आत्म-देखभाल में कमी</li>
                  </ul>
                  <Alert className="mt-3 bg-red-50 border-red-200">
                    <AlertDescription className="text-xs">
                      <strong>याद रखें:</strong> Relapse रिकवरी का हिस्सा हो सकता है। अगर होता है, तुरंत मदद लें और हार न मानें।
                    </AlertDescription>
                  </Alert>
          </CardContent>
              </Card>

              <Card className="shadow-lg"></Card>
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50">
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                    दीर्घकालिक सफलता
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-indigo-500">जीवनभर की यात्रा</Badge>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p className="font-semibold">सफल रिकवरी के लिए:</p>
                    <ul className="space-y-2 ml-4">
                      <li>• <strong>धैर्य रखें</strong> - रिकवरी में समय लगता है</li>
                      <li>• <strong>छोटे लक्ष्य</strong> - एक दिन में एक कदम</li>
                      <li>• <strong>खुद को माफ करें</strong> - गलतियां हो सकती हैं</li>
                      <li>• <strong>प्रगति मनाएं</strong> - छोटी जीत भी महत्वपूर्ण हैं</li>
                      <li>• <strong>आभारी रहें</strong> - सकारात्मक पर ध्यान दें</li>
                      <li>• <strong>नए सपने</strong> - भविष्य के लिए योजना बनाएं</li>
                      <li>• <strong>दूसरों की मदद करें</strong> - अनुभव साझा करें</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Alert className="bg-green-50 border-green-200">
              <Heart className="h-4 w-4 text-green-600" />
              <AlertTitle>आशा का संदेश</AlertTitle>
              <AlertDescription>
                रिकवरी संभव है! हजारों लोग नशे से मुक्त होकर खुशहाल जीवन जी रहे हैं। आपकी यात्रा अनोखी है, लेकिन आप अकेले नहीं हैं।
              </AlertDescription>
            </Alert>
          </TabsContent>
        </Tabs>

        {/* Emergency and Support Section */}
        <div className="mt-12 space-y-6">
          <Card className="shadow-xl bg-gradient-to-r from-red-500 to-orange-500 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-white">
                <Phone className="w-8 h-8" />
                आपातकालीन हेल्पलाइन
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">राष्ट्रीय हेल्पलाइन (भारत)</h3>
                  <p className="text-sm mb-1">• <strong>National Drug Helpline:</strong> 1800-11-0031</p>
                  <p className="text-sm mb-1">• <strong>NIMHANS:</strong> 080-26995000</p>
                  <p className="text-sm mb-1">• <strong>Vandrevala Foundation:</strong> 1860-2662-345</p>
                  <p className="text-sm">• <strong>आपातकाल:</strong> 108 / 112</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">अंतर्राष्ट्रीय हेल्पलाइन</h3>
                  <p className="text-sm mb-1">• <strong>SAMHSA (USA):</strong> 1-800-662-4357</p>
                  <p className="text-sm mb-1">• <strong>Lifeline (Australia):</strong> 13 11 14</p>
                  <p className="text-sm mb-1">• <strong>NHS (UK):</strong> 111</p>
                  <p className="text-sm">• <strong>24/7 उपलब्ध</strong></p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
              <CardTitle className="text-xl">भारत में उपचार केंद्र</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2 text-blue-600">सरकारी केंद्र</h4>
                  <ul className="space-y-1">
                    <li>• NIMHANS, बेंगलुरु</li>
                    <li>• AIIMS, नई दिल्ली</li>
                    <li>• PGI, चंडीगढ़</li>
                    <li>• Regional De-addiction Centers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-purple-600">NGO केंद्र</h4>
                  <ul className="space-y-1">
                    <li>• T.T. Ranganathan Centre, Chennai</li>
                    <li>• Muktangan Rehabilitation Centre</li>
                    <li>• Sharan Foundation</li>
                    <li>• Kripa Foundation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-green-600">निजी केंद्र</h4>
                  <ul className="space-y-1">
                    <li>• Cadabam's Hospitals</li>
                    <li>• Vimhans Hospital</li>
                    <li>• Hope Trust, Hyderabad</li>
                    <li>• Alpha Healing Center</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-gradient-to-r from-amber-50 to-yellow-50">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Heart className="w-6 h-6 text-amber-600" />
                परिवार के लिए मार्गदर्शन
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-gray-700">
                <p className="font-semibold">अगर आपका कोई प्रियजन नशे से जूझ रहा है:</p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>शिक्षित हों</strong> - नशे की लत के बारे में जानें</li>
                  <li>• <strong>सहानुभूति दिखाएं</strong> - निंदा या शर्मिंदगी से बचें</li>
                  <li>• <strong>सीमाएं तय करें</strong> - नशीली हरकतों को सक्षम न करें</li>
                  <li>• <strong>प्रोत्साहित करें</strong> - पेशेवर मदद लेने के लिए</li>
                  <li>• <strong>खुद का ख्याल रखें</strong> - अपने मानसिक स्वास्थ्य पर ध्यान दें</li>
                  <li>• <strong>समर्थन समूह में शामिल हों</strong> - Al-Anon या परिवार समूह</li>
                  <li>• <strong>धैर्य रखें</strong> - रिकवरी एक प्रक्रिया है</li>
                  <li>• <strong>सुरक्षित रहें</strong> - हिंसा या खतरे की स्थिति में मदद लें</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Alert className="bg-blue-50 border-blue-200">
            <Shield className="h-4 w-4 text-blue-600" />
            <AlertTitle>गोपनीयता का आश्वासन</AlertTitle>
            <AlertDescription>
              सभी उपचार सेवाएं गोपनीय हैं। आपकी जानकारी सुरक्षित रहती है। मदद मांगना साहस का काम है, कमजोरी का नहीं।
            </AlertDescription>
          </Alert>
        </div>

        <footer className="mt-12 text-center text-gray-600 text-sm">
          <p className="mb-2">यह जानकारी केवल शैक्षिक उद्देश्यों के लिए है। चिकित्सा सलाह के लिए हमेशा योग्य स्वास्थ्य पेशेवर से परामर्श लें।</p>
          <p className="text-xs">© 2026 नशामुक्ति जागरूकता कार्यक्रम | सभी अधिकार सुरक्षित</p>
        </footer>
      </div>
    </div>
  );
}