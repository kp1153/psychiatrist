import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Moon, Sun, Pill, Leaf, Brain, Heart, AlertCircle, Clock, Activity, Stethoscope } from 'lucide-react';

export default function InsomniaOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Moon className="w-12 h-12 text-indigo-600" />
            <h1 className="text-5xl font-bold text-gray-900">अनिद्रा (Insomnia)</h1>
            <Sun className="w-12 h-12 text-amber-500" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            नींद संबंधी विकारों की व्यापक जानकारी, उपचार और प्रबंधन
          </p>
        </header>

        {/* Main Content with Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8 bg-white/50 backdrop-blur-sm">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              अवलोकन
            </TabsTrigger>
            <TabsTrigger value="types" className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              प्रकार
            </TabsTrigger>
            <TabsTrigger value="diagnosis" className="flex items-center gap-2">
              <Stethoscope className="w-4 h-4" />
              निदान
            </TabsTrigger>
            <TabsTrigger value="medications" className="flex items-center gap-2">
              <Pill className="w-4 h-4" />
              दवाएं
            </TabsTrigger>
            <TabsTrigger value="herbal" className="flex items-center gap-2">
              <Leaf className="w-4 h-4" />
              हर्बल
            </TabsTrigger>
            <TabsTrigger value="lifestyle" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              जीवनशैली
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">प्रस्तावना</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  नींद हमारे शारीरिक और मानसिक स्वास्थ्य के लिए उतनी ही अनिवार्य है जितना कि भोजन और पानी। अनिद्रा या 'इंसोमनिया' वह स्थिति है जब किसी व्यक्ति को पर्याप्त नींद नहीं मिल पाती, जिससे उसका दैनिक जीवन प्रभावित होने लगता है। यह समस्या न केवल नींद की मात्रा, बल्कि उसकी गुणवत्ता से भी जुड़ी है।
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    प्रमुख लक्षण
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span>बिस्तर पर लेटने के बाद नींद आने में घंटों का समय लगना</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span>रात के दौरान बार-बार जागना और फिर दोबारा सो न पाना</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span>सुबह बहुत जल्दी जाग जाना और थकान महसूस करना</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span>दिन भर सुस्ती, एकाग्रता में कमी और चिड़चिड़ापन रहना</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-purple-500" />
                    कारण और जोखिम कारक
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span><strong>मानसिक स्वास्थ्य:</strong> चिंता, अवसाद और दीर्घकालिक तनाव</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span><strong>शारीरिक स्थितियाँ:</strong> पुराना दर्द, सांस संबंधी समस्याएँ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span><strong>जीवनशैली:</strong> शिफ्ट में काम करना, अनियमित दिनचर्या</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>कैफीन, निकोटीन और अल्कोहल का अधिक सेवन</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Alert className="bg-blue-50 border-blue-200">
              <Heart className="h-4 w-4 text-blue-600" />
              <AlertTitle>मानसिक स्वास्थ्य के साथ संबंध</AlertTitle>
              <AlertDescription>
                अनिद्रा और मानसिक स्वास्थ्य के बीच गहरा संबंध पाया जाता है। चिंता और अवसाद नींद को प्रभावित करते हैं, और लंबे समय तक नींद की कमी मानसिक समस्याओं के जोखिम को बढ़ा देती है। यह एक चक्र की तरह काम करता है।
              </AlertDescription>
            </Alert>
          </TabsContent>

          {/* Types Tab */}
          <TabsContent value="types" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-600" />
                    अवधि के आधार पर
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <Badge className="mb-2 bg-amber-500">Acute/Transient</Badge>
                      <p className="text-sm text-gray-600">कुछ दिनों से कुछ सप्ताह तक (< 3 महीने)</p>
                    </div>
                    <div>
                      <Badge className="mb-2 bg-orange-500">Chronic/Persistent</Badge>
                      <p className="text-sm text-gray-600">3 महीने या उससे अधिक समय तक, सप्ताह में कम से कम 3 रातें</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardTitle className="flex items-center gap-2">
                    <Moon className="w-5 h-5 text-blue-600" />
                    लक्षणों के आधार पर
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <Badge className="mb-2 bg-blue-500">Sleep-Onset</Badge>
                      <p className="text-sm text-gray-600">सोते समय नींद न आना (Initial Insomnia)</p>
                    </div>
                    <div>
                      <Badge className="mb-2 bg-indigo-500">Sleep-Maintenance</Badge>
                      <p className="text-sm text-gray-600">रात में बार-बार जागना (Middle Insomnia)</p>
                    </div>
                    <div>
                      <Badge className="mb-2 bg-purple-500">Early-Morning Awakening</Badge>
                      <p className="text-sm text-gray-600">सुबह बहुत जल्दी जाग जाना (Late Insomnia)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-green-600" />
                    कारणों के आधार पर
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <Badge className="mb-2 bg-green-500">Primary</Badge>
                      <p className="text-sm text-gray-600">स्वतंत्र विकार, किसी अन्य कारण से नहीं</p>
                    </div>
                    <div>
                      <Badge className="mb-2 bg-emerald-500">Secondary/Comorbid</Badge>
                      <p className="text-sm text-gray-600">अन्य बीमारियों या दवाओं के कारण (DSM-5 में यह भेद हटा दिया गया)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Alert className="bg-amber-50 border-amber-200">
              <AlertCircle className="h-4 w-4 text-amber-600" />
              <AlertTitle>DSM-5 में परिवर्तन</AlertTitle>
              <AlertDescription>
                DSM-5 में 'Primary' और 'Secondary' अनिद्रा के बीच का भेद हटा दिया गया है। अब सभी प्रकार की अनिद्रा को "Insomnia Disorder" के रूप में वर्गीकृत किया जाता है, चाहे कोई सह-रुग्णता हो या नहीं।
              </AlertDescription>
            </Alert>
          </TabsContent>

          {/* Diagnosis Tab */}
          <TabsContent value="diagnosis" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-violet-50 to-purple-50">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Stethoscope className="w-6 h-6 text-violet-600" />
                  DSM-5 निदान मानदंड
                </CardTitle>
                <CardDescription>अनिद्रा विकार के लिए आधिकारिक मानदंड</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-800">मुख्य मानदंड (कम से कम एक होना आवश्यक):</h3>
                    <div className="space-y-3 pl-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-violet-600 font-semibold">1</span>
                        </div>
                        <p className="text-gray-700">सोने में कठिनाई (Sleep-onset insomnia)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-violet-600 font-semibold">2</span>
                        </div>
                        <p className="text-gray-700">नींद बनाए रखने में कठिनाई - बार-बार जागना या दोबारा सो न पाना (Sleep-maintenance insomnia)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-violet-600 font-semibold">3</span>
                        </div>
                        <p className="text-gray-700">सुबह बहुत जल्दी जाग जाना और दोबारा सो न पाना (Early-morning awakening)</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3 text-gray-800">आवश्यक शर्तें:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">✓</span>
                        <span><strong>आवृत्ति:</strong> सप्ताह में कम से कम 3 रातें</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">✓</span>
                        <span><strong>अवधि:</strong> कम से कम 3 महीने (Chronic insomnia के लिए)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">✓</span>
                        <span><strong>अवसर:</strong> सोने का पर्याप्त अवसर और समय उपलब्ध होने के बावजूद</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">✓</span>
                        <span><strong>दिन का प्रभाव:</strong> दैनिक जीवन में महत्वपूर्ण कठिनाई (सामाजिक, व्यावसायिक, शैक्षिक, या अन्य क्षेत्रों में)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">✓</span>
                        <span><strong>अन्य कारण नहीं:</strong> कोई अन्य नींद विकार, पदार्थ, या मानसिक स्थिति बेहतर व्याख्या नहीं करती</span>
                      </li>
                    </ul>
                  </div>

                  <Alert className="bg-rose-50 border-rose-200">
                    <AlertCircle className="h-4 w-4 text-rose-600" />
                    <AlertTitle>3 महीने से कम अवधि के लिए</AlertTitle>
                    <AlertDescription>
                      यदि लक्षण 3 महीने से कम समय के लिए हैं लेकिन अन्य सभी मानदंड पूरे होते हैं, तो इसे "Acute/Short-term Insomnia" या "Other Specified Insomnia Disorder" के रूप में वर्गीकृत किया जाता है।
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>निदान प्रक्रिया</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>नैदानिक मूल्यांकन (Clinical Evaluation)</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-gray-700">
                        <li>• विस्तृत नींद का इतिहास (Sleep history)</li>
                        <li>• चिकित्सा और मानसिक स्वास्थ्य इतिहास</li>
                        <li>• वर्तमान दवाओं और पदार्थों का उपयोग</li>
                        <li>• नींद की डायरी (1-2 सप्ताह के लिए)</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>मूल्यांकन उपकरण (Assessment Tools)</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Insomnia Severity Index (ISI):</strong> आत्म-रिपोर्ट प्रश्नावली</li>
                        <li>• <strong>Pittsburgh Sleep Quality Index (PSQI):</strong> नींद की गुणवत्ता मापना</li>
                        <li>• <strong>Epworth Sleepiness Scale:</strong> दिन की नींद का मूल्यांकन</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>वैकल्पिक परीक्षण (Optional Tests)</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Polysomnography (PSG):</strong> जब अन्य नींद विकारों का संदेह हो</li>
                        <li>• <strong>Actigraphy:</strong> नींद-जागने के पैटर्न को ट्रैक करने के लिए</li>
                        <li>• <strong>रक्त परीक्षण:</strong> थायरॉइड या अन्य चिकित्सा स्थितियों को रद्द करने के लिए</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Medications Tab */}
          <TabsContent value="medications" className="space-y-6">
            <Alert className="bg-red-50 border-red-200">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <AlertTitle>महत्वपूर्ण चेतावनी</AlertTitle>
              <AlertDescription>
                ये दवाएं केवल डॉक्टर के परामर्श से ही लें। स्व-चिकित्सा खतरनाक हो सकती है। अधिकांश नींद की दवाओं का उपयोग केवल 2-4 सप्ताह के लिए ही किया जाना चाहिए।
              </AlertDescription>
            </Alert>

            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                  <CardTitle className="flex items-center gap-2">
                    <Pill className="w-5 h-5 text-blue-600" />
                    Benzodiazepines (बेंजोडायजेपाइन)
                  </CardTitle>
                  <CardDescription>GABA रिसेप्टर्स को सक्रिय करके मस्तिष्क को शांत करती हैं</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="temazepam">
                      <AccordionTrigger>Temazepam (टेमाज़ेपम)</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3">
                          <div>
                            <Badge className="mb-2">खुराक</Badge>
                            <p className="text-sm">7.5-30 mg सोने से पहले</p>
                          </div>
                          <div>
                            <Badge className="mb-2 bg-green-500">लाभ</Badge>
                            <p className="text-sm">नींद की शुरुआत और अवधि में सुधार</p>
                          </div>
                          <div>
                            <Badge className="mb-2 bg-amber-500">दुष्प्रभाव</Badge>
                            <p className="text-sm">दिन में नींद आना, चक्कर आना, निर्भरता का खतरा, स्मृति समस्याएं</p>
                          </div>
                          <div>
                            <Badge className="mb-2 bg-red-500">सावधानियाँ</Badge>
                            <p className="text-sm">लंबे समय तक उपयोग से बचें, गर्भावस्था में नहीं लेना चाहिए, शराब के साथ न लें</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="diazepam">
                      <AccordionTrigger>Diazepam (डायजेपाम)</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3">
                          <div>
                            <Badge className="mb-2">खुराक</Badge>
                            <p className="text-sm">2-10 mg सोने से पहले</p>
                          </div>
                          <div>
                            <Badge className="mb-2 bg-amber-500">दुष्प्रभाव</Badge>
                            <p className="text-sm">लंबी आधी-जीवन अवधि, अगले दिन नींद का अवशेष, निर्भरता</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle className="flex items-center gap-2">
                    <Pill className="w-5 h-5 text-purple-600" />
                    Non-Benzodiazepines / Z-Drugs
                  </CardTitle>
                  <CardDescription>GABA रिसेप्टर्स के विशिष्ट उपप्रकारों को लक्षित करती हैं</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="zolpidem">
                      <AccordionTrigger>Zolpidem (जोल्पिडेम)</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3">
                          <div>
                            <Badge className="mb-2">खुराक</Badge>
                            <p className="text-sm">5-10 mg सोने से पहले (महिलाओं के लिए 5 mg)</p>
                          </div>
                          <div>
                            <Badge className="mb-2 bg-green-500">लाभ</Badge>
                            <p className="text-sm">तेज़ कार्रवाई, कम आधी-जीवन (2-3 घंटे), अगले दिन कम प्रभाव</p>
                          </div>
                          <div>
                            <Badge className="mb-2 bg-amber-500">दुष्प्रभाव</Badge>
                            <p className="text-sm">नींद में चलना, नींद में खाना, सुबह सिरदर्द, चक्कर आना</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="zopiclone">
                      <AccordionTrigger>Zopiclone (जोपिक्लोन)</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3">
                          <div>
                            <Badge className="mb-2">खुराक</Badge>
                            <p className="text-sm">3.75-7.5 mg सोने से पहले</p>
                          </div>
                          <div>
                            <Badge className="mb-2 bg-green-500">लाभ</Badge>
                            <p className="text-sm">नींद की शुरुआत और रखरखाव में मदद</p>
                          </div>
                          <div>
                            <Badge className="mb-2 bg-amber-500">दुष्प्रभाव</Badge>
                            <p className="text-sm">मुंह में कड़वा स्वाद, शुष्क मुंह, दिन में नींद</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="eszopiclone">
                      <AccordionTrigger>Eszopiclone (एज़ोपिक्लोन)</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3">
                          <div>
                            <Badge className="mb-2">खुराक</Badge>
                            <p className="text-sm">1-3 mg सोने से पहले</p>
                          </div>
                          <div>
                            <Badge className="mb-2 bg-green-500">लाभ</Badge>
                            <p className="text-sm">लंबी अवधि के उपयोग के लिए FDA अनुमोदित</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                  <CardTitle className="flex items-center gap-2">
                    <Pill className="w-5 h-5 text-green-600" />
                    Orexin Receptor Antagonists
                  </CardTitle>
                  <CardDescription>जागृति को बढ़ावा देने वाले orexin सिस्टम को ब्लॉक करती हैं</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="suvorexant">
                      <AccordionTrigger>Suvorexant (सुवोरेक्सेंट)</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3">
                          <div>
                            <Badge className="mb-2">खुराक</Badge>
                            <p className="text-sm">5-20 mg सोने से पहले</p>
                          </div>
                          <div>
                            <Badge className="mb-2 bg-green-500">लाभ</Badge>
                            <p className="text-sm">निर्भरता का कम खतरा, स्वाभाविक नींद की संरचना बनाए रखता है</p>
                          </div>
                          <div>
                            <Badge className="mb-2 bg-amber-500">दुष्प्रभाव</Badge>
                            <p className="text-sm">दिन में नींद आना, असामान्य सपने, सिरदर्द</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="lemborexant">
                      <AccordionTrigger>Lemborexant (लेम्बोरेक्सेंट)</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3">
                          <div>
                            <Badge className="mb-2">खुराक</Badge>
                            <p className="text-sm">5-10 mg सोने से पहले</p>
                          </div>
                          <div>
                            <Badge className="mb-2 bg-green-500">लाभ</Badge>
                            <p className="text-sm">नई पीढ़ी की दवा, प्रभावी और सुरक्षित</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-amber-50 to-yellow-50">
                  <CardTitle className="flex items-center gap-2">
                    <Moon className="w-5 h-5 text-amber-600" />
                    Melatonin और Melatonin Receptor Agonists
                  </CardTitle>
                  <CardDescription>जैविक घड़ी (Circadian rhythm) को नियंत्रित करती हैं</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="melatonin">
                      <AccordionTrigger>Melatonin (मेलाटोनिन)</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3">
                          <div>
                            <Badge className="mb-2">खुराक</Badge>
                            <p className="text-sm">0.5-10 mg सोने से 30-60 मिनट पहले</p>
                          </div>
                          <div>
                            <Badge className="mb-2 bg-green-500">लाभ</Badge>
                            <p className="text-sm">प्राकृतिक हार्मोन, सुरक्षित, निर्भरता नहीं, जेट लैग और शिफ्ट वर्क के लिए उपयोगी</p>
                          </div>
                          <div>
                            <Badge className="mb-2 bg-amber-500">दुष्प्रभाव</Badge>
                            <p className="text-sm">सिरदर्द, चक्कर आना, दिन में नींद (आमतौर पर हल्के)</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="ramelteon">
                      <AccordionTrigger>Ramelteon (रामेल्टियॉन)</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3">
                          <div>
                            <Badge className="mb-2">खुराक</Badge>
                            <p className="text-sm">8 mg सोने से पहले</p>
                          </div>
                          <div>
                            <Badge className="mb-2 bg-green-500">लाभ</Badge>
                            <p className="text-sm">निर्भरता या दुरुपयोग का कोई खतरा नहीं, नियंत्रित पदार्थ नहीं</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-rose-50 to-red-50">
                  <CardTitle className="flex items-center gap-2">
                    <Pill className="w-5 h-5 text-rose-600" />
                    Sedating Antihistamines और Antidepressants
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="diphenhydramine">
                      <AccordionTrigger>Diphenhydramine / Doxylamine</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3">
                          <div>
                            <Badge className="mb-2">खुराक</Badge>
                            <p className="text-sm">25-50 mg सोने से पहले</p>
                          </div>
                          <div>
                            <Badge className="mb-2 bg-amber-500">सीमाएं</Badge>
                            <p className="text-sm">केवल अल्पकालिक उपयोग, सहनशीलता तेजी से विकसित होती है</p>
                          </div>
                          <div>
                            <Badge className="mb-2 bg-red-500">दुष्प्रभाव</Badge>
                            <p className="text-sm">अगले दिन नींद, शुष्क मुंह, कब्ज, मूत्र प्रतिधारण (विशेषकर बुजुर्गों में)</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="trazodone">
                      <AccordionTrigger>Trazodone (ट्राज़ोडोन)</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3">
                          <div>
                            <Badge className="mb-2">खुराक</Badge>
                            <p className="text-sm">25-100 mg सोने से पहले</p>
                          </div>
                          <div>
                            <Badge className="mb-2 bg-green-500">लाभ</Badge>
                            <p className="text-sm">अवसाद के साथ अनिद्रा के लिए उपयोगी</p>
                          </div>
                          <div>
                            <Badge className="mb-2 bg-amber-500">दुष्प्रभाव</Badge>
                            <p className="text-sm">चक्कर आना, सिरदर्द, हृदय संबंधी प्रभाव (दुर्लभ)</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="mirtazapine">
                      <AccordionTrigger>Mirtazapine (मिर्टाज़ापीन)</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3">
                          <div>
                            <Badge className="mb-2">खुराक</Badge>
                            <p className="text-sm">7.5-15 mg सोने से पहले (निम्न खुराक अधिक शामक)</p>
                          </div>
                          <div>
                            <Badge className="mb-2 bg-green-500">लाभ</Badge>
                            <p className="text-sm">अवसाद और चिंता के साथ अनिद्रा में प्रभावी</p>
                          </div>
                          <div>
                            <Badge className="mb-2 bg-amber-500">दुष्प्रभाव</Badge>
                            <p className="text-sm">वजन बढ़ना, भूख में वृद्धि, दिन में नींद</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Herbal Tab */}
          <TabsContent value="herbal" className="space-y-6">
            <Alert className="bg-green-50 border-green-200">
              <Leaf className="h-4 w-4 text-green-600" />
              <AlertTitle>प्राकृतिक उपचार</AlertTitle>
              <AlertDescription>
                हर्बल उपचार प्राकृतिक हैं लेकिन इसका मतलब यह नहीं कि वे पूरी तरह सुरक्षित हैं। गंभीर अनिद्रा के लिए या अन्य दवाओं के साथ लेने से पहले डॉक्टर से परामर्श लें।
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-violet-50">
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-purple-600" />
                    Valerian Root (वेलेरियन)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-3">
                  <div>
                    <Badge className="mb-2">खुराक</Badge>
                    <p className="text-sm">300-600 mg extract सोने से 1-2 घंटे पहले</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-green-500">कार्य विधि</Badge>
                    <p className="text-sm">GABA levels को बढ़ाता है, मस्तिष्क को शांत करता है</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-blue-500">लाभ</Badge>
                    <p className="text-sm">नींद की गुणवत्ता में सुधार, चिंता कम करने में मदद</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-amber-500">नोट</Badge>
                    <p className="text-sm">प्रभाव दिखने में 2-4 सप्ताह लग सकते हैं</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-yellow-50 to-amber-50">
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-yellow-600" />
                    Chamomile (कैमोमाइल)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-3">
                  <div>
                    <Badge className="mb-2">उपयोग</Badge>
                    <p className="text-sm">चाय के रूप में (1-2 कप सोने से पहले) या 400-1600 mg extract</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-green-500">कार्य विधि</Badge>
                    <p className="text-sm">Apigenin (antioxidant) brain receptors को बांधता है, नींद को बढ़ावा देता है</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-blue-500">लाभ</Badge>
                    <p className="text-sm">हल्का शामक प्रभाव, चिंता को कम करता है, सुरक्षित</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-red-500">सावधानी</Badge>
                    <p className="text-sm">रैगवीड एलर्जी वाले लोगों में एलर्जी संभव</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-blue-600" />
                    Lavender (लैवेंडर)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-3">
                  <div>
                    <Badge className="mb-2">उपयोग</Badge>
                    <p className="text-sm">Essential oil (अरोमाथेरेपी), oral capsules (80-160 mg), या चाय</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-green-500">कार्य विधि</Badge>
                    <p className="text-sm">Linalool और linalyl acetate शांति प्रदान करते हैं</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-blue-500">लाभ</Badge>
                    <p className="text-sm">नींद की गुणवत्ता सुधारता है, चिंता कम करता है, सुरक्षित और सुगंधित</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-purple-500">अनुसंधान</Badge>
                    <p className="text-sm">कई अध्ययनों में प्रभावशीलता सिद्ध</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-orange-600" />
                    Ashwagandha (अश्वगंधा)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-3">
                  <div>
                    <Badge className="mb-2">खुराक</Badge>
                    <p className="text-sm">300-600 mg extract प्रतिदिन (दिन में दो बार)</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-green-500">कार्य विधि</Badge>
                    <p className="text-sm">Adaptogen - तनाव हार्मोन (cortisol) को कम करता है</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-blue-500">लाभ</Badge>
                    <p className="text-sm">नींद की गुणवत्ता में सुधार, तनाव और चिंता कम करता है, ऊर्जा स्तर बढ़ाता है</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-amber-500">आयुर्वेद में</Badge>
                    <p className="text-sm">हजारों वर्षों से उपयोग, भारतीय चिकित्सा में महत्वपूर्ण</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50">
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-teal-600" />
                    Brahmi (ब्राह्मी / Bacopa)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-3">
                  <div>
                    <Badge className="mb-2">खुराक</Badge>
                    <p className="text-sm">300-450 mg extract प्रतिदिन</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-green-500">कार्य विधि</Badge>
                    <p className="text-sm">Neurotransmitters को संतुलित करता है, मस्तिष्क को शांत करता है</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-blue-500">लाभ</Badge>
                    <p className="text-sm">स्मृति सुधार, चिंता कम करना, नींद की गुणवत्ता में सुधार</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-amber-500">आयुर्वेद में</Badge>
                    <p className="text-sm">मेध्य रसायन (brain tonic), तंत्रिका तंत्र को मजबूत करता है</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-green-50 to-lime-50">
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-green-600" />
                    Jatamansi (जटामांसी)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-3">
                  <div>
                    <Badge className="mb-2">खुराक</Badge>
                    <p className="text-sm">500 mg powder या 1-2 gm रात में दूध के साथ</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-green-500">कार्य विधि</Badge>
                    <p className="text-sm">Nervous system को शांत करता है, natural sedative</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-blue-500">लाभ</Badge>
                    <p className="text-sm">गहरी नींद, मानसिक शांति, तनाव और चिंता में कमी</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-amber-500">आयुर्वेद में</Badge>
                    <p className="text-sm">प्राचीन समय से अनिद्रा के लिए उपयोग, Vata को संतुलित करता है</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-pink-50 to-rose-50">
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-pink-600" />
                    Passionflower (पैशनफ्लावर)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-3">
                  <div>
                    <Badge className="mb-2">खुराक</Badge>
                    <p className="text-sm">300-500 mg extract या चाय</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-green-500">कार्य विधि</Badge>
                    <p className="text-sm">GABA levels को बढ़ाता है</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-blue-500">लाभ</Badge>
                    <p className="text-sm">चिंता में कमी, नींद की गुणवत्ता में सुधार</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-amber-500">संयोजन</Badge>
                    <p className="text-sm">Valerian के साथ अधिक प्रभावी</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-indigo-600" />
                    Magnesium (मैग्नीशियम)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-3">
                  <div>
                    <Badge className="mb-2">खुराक</Badge>
                    <p className="text-sm">200-400 mg सोने से पहले (Magnesium Glycinate या Citrate)</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-green-500">कार्य विधि</Badge>
                    <p className="text-sm">Muscles को आराम देता है, GABA को सक्रिय करता है</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-blue-500">लाभ</Badge>
                    <p className="text-sm">नींद की गुणवत्ता सुधारता है, पैरों में ऐंठन कम करता है</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-amber-500">नोट</Badge>
                    <p className="text-sm">कई लोगों में Magnesium की कमी होती है</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-emerald-600" />
                    L-Theanine (एल-थीनीन)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-3">
                  <div>
                    <Badge className="mb-2">खुराक</Badge>
                    <p className="text-sm">200-400 mg सोने से पहले</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-green-500">स्रोत</Badge>
                    <p className="text-sm">हरी चाय और काली चाय में पाया जाता है</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-blue-500">लाभ</Badge>
                    <p className="text-sm">विश्राम प्रदान करता है बिना नींद लाए, Alpha brain waves बढ़ाता है, चिंता कम करता है</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-purple-500">अनूठा गुण</Badge>
                    <p className="text-sm">शांत लेकिन सतर्क अवस्था</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-amber-600" />
                    Lemon Balm (लेमन बाम)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-3">
                  <div>
                    <Badge className="mb-2">खुराक</Badge>
                    <p className="text-sm">300-600 mg extract या चाय</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-green-500">कार्य विधि</Badge>
                    <p className="text-sm">GABA receptors को सक्रिय करता है</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-blue-500">लाभ</Badge>
                    <p className="text-sm">चिंता और तनाव में कमी, नींद की गुणवत्ता में सुधार</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-amber-500">संयोजन</Badge>
                    <p className="text-sm">Valerian के साथ अधिक प्रभावी</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Alert className="bg-amber-50 border-amber-200">
              <AlertCircle className="h-4 w-4 text-amber-600" />
              <AlertTitle>संयोजन चिकित्सा</AlertTitle>
              <AlertDescription>
                कई हर्बल उपचार एक साथ लेने से बेहतर परिणाम मिल सकते हैं। उदाहरण: Valerian + Passionflower + Lemon Balm। लेकिन किसी भी संयोजन को शुरू करने से पहले स्वास्थ्य पेशेवर से परामर्श लें।
              </AlertDescription>
            </Alert>
          </TabsContent>

          {/* Lifestyle Tab */}
          <TabsContent value="lifestyle" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Heart className="w-6 h-6 text-blue-600" />
                  Cognitive Behavioral Therapy for Insomnia (CBT-I)
                </CardTitle>
                <CardDescription>अनिद्रा के लिए सबसे प्रभावी गैर-दवा उपचार</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    CBT-I एक संरचित कार्यक्रम है जो उन विचारों और व्यवहारों को पहचानने और बदलने में मदद करता है जो नींद की समस्याओं का कारण बनते हैं या उन्हें बदतर बनाते हैं। अध्ययनों से पता चला है कि CBT-I दवाओं से अधिक प्रभावी और लंबे समय तक चलने वाला है।
                  </p>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="components">
                      <AccordionTrigger>CBT-I के मुख्य घटक</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-3 text-gray-700">
                          <li><strong>Sleep Restriction:</strong> बिस्तर में बिताए गए समय को कम करना ताकि नींद की drive बढ़े</li>
                          <li><strong>Stimulus Control:</strong> बिस्तर और शयनकक्ष को केवल नींद के साथ जोड़ना</li>
                          <li><strong>Cognitive Therapy:</strong> नींद के बारे में गलत धारणाओं और चिंताओं को चुनौती देना</li>
                          <li><strong>Sleep Hygiene Education:</strong> नींद को प्रभावित करने वाली आदतों में सुधार</li>
                          <li><strong>Relaxation Techniques:</strong> मन और शरीर को शांत करने की तकनीक</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
                  <CardTitle className="flex items-center gap-2">
                    <Moon className="w-5 h-5 text-indigo-600" />
                    Sleep Hygiene (नींद की स्वच्छता)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1 font-bold">✓</span>
                      <span><strong>नियमित समय:</strong> रोज़ एक ही समय पर सोएं और जागें (सप्ताहांत पर भी)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1 font-bold">✓</span>
                      <span><strong>आरामदायक वातावरण:</strong> शांत, अंधेरा, ठंडा कमरा (18-20°C)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1 font-bold">✓</span>
                      <span><strong>आरामदायक बिस्तर:</strong> अच्छा गद्दा और तकिया</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1 font-bold">✓</span>
                      <span><strong>स्क्रीन टाइम:</strong> सोने से 1-2 घंटे पहले स्क्रीन बंद करें</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1 font-bold">✓</span>
                      <span><strong>दिन की नींद:</strong> 20-30 मिनट से अधिक नहीं, दोपहर 3 बजे के बाद नहीं</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-green-600" />
                    आहार और व्यायाम
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1 font-bold">✓</span>
                      <span><strong>कैफीन:</strong> दोपहर के बाद चाय, कॉफी, या कोला से बचें</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1 font-bold">✓</span>
                      <span><strong>शराब:</strong> सोने से 3-4 घंटे पहले शराब न पिएं</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1 font-bold">✓</span>
                      <span><strong>भोजन:</strong> सोने से 2-3 घंटे पहले भारी भोजन न करें</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1 font-bold">✓</span>
                      <span><strong>व्यायाम:</strong> नियमित व्यायाम करें लेकिन सोने से 3-4 घंटे पहले नहीं</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1 font-bold">✓</span>
                      <span><strong>हल्का स्नैक:</strong> दूध, केला, या बादाम सोने से पहले मदद कर सकते हैं</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-purple-600" />
                    विश्राम तकनीकें
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1 font-bold">•</span>
                      <span><strong>Deep Breathing:</strong> 4-7-8 तकनीक (4 सेकंड सांस लें, 7 सेकंड रोकें, 8 सेकंड छोड़ें)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1 font-bold">•</span>
                      <span><strong>Progressive Muscle Relaxation:</strong> शरीर के हर हिस्से को क्रमशः तनाव और आराम दें</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1 font-bold">•</span>
                      <span><strong>Meditation:</strong> माइंडफुलनेस या गाइडेड मेडिटेशन</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1 font-bold">•</span>
                      <span><strong>Imagery:</strong> शांतिपूर्ण दृश्य की कल्पना करें</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1 font-bold">•</span>
                      <span><strong>Yoga Nidra:</strong> योगिक नींद तकनीक</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                  <CardTitle className="flex items-center gap-2">
                    <Sun className="w-5 h-5 text-orange-600" />
                    प्रकाश और Circadian Rhythm
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1 font-bold">☀</span>
                      <span><strong>सुबह की रोशनी:</strong> जागने के बाद जल्द से जल्द तेज रोशनी में जाएं (प्राकृतिक धूप सबसे अच्छी)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1 font-bold">☀</span>
                      <span><strong>शाम को मंद रोशनी:</strong> शाम को रोशनी कम करें, विशेष रूप से नीली रोशनी</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1 font-bold">☀</span>
                      <span><strong>Blue Light Filters:</strong> स्क्रीन पर ब्लू लाइट फ़िल्टर का उपयोग करें या ब्लू लाइट ब्लॉकिंग चश्मे पहनें</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1 font-bold">☀</span>
                      <span><strong>नियमित समय:</strong> हर दिन एक ही समय पर सोने और जागने से शरीर की घड़ी स्थिर होती है</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50">
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-teal-600" />
                  योग आसन (Yoga Asanas) अनिद्रा के लिए
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-teal-100">
                    <h4 className="font-semibold text-teal-700 mb-2">1. Balasana (बालासन / Child's Pose)</h4>
                    <p className="text-sm text-gray-600">तनाव को दूर करता है, मन को शांत करता है</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-teal-100">
                    <h4 className="font-semibold text-teal-700 mb-2">2. Viparita Karani (विपरीत करणी / Legs-Up-the-Wall)</h4>
                    <p className="text-sm text-gray-600">रक्त संचार सुधारता है, तनाव कम करता है</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-teal-100">
                    <h4 className="font-semibold text-teal-700 mb-2">3. Uttanasana (उत्तानासन / Standing Forward Bend)</h4>
                    <p className="text-sm text-gray-600">चिंता कम करता है, मस्तिष्क को शांत करता है</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-teal-100">
                    <h4 className="font-semibold text-teal-700 mb-2">4. Supta Baddha Konasana (सुप्त बद्ध कोणासन)</h4>
                    <p className="text-sm text-gray-600">गहरा विश्राम, तनाव मुक्ति</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-teal-100">
                    <h4 className="font-semibold text-teal-700 mb-2">5. Shavasana (शवासन / Corpse Pose)</h4>
                    <p className="text-sm text-gray-600">संपूर्ण विश्राम, मन और शरीर को शांत करता है</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-teal-100">
                    <h4 className="font-semibold text-teal-700 mb-2">6. Pranayama (प्राणायाम)</h4>
                    <p className="text-sm text-gray-600">Anulom-Vilom और Bhramari विशेष रूप से प्रभावी</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Alert className="bg-blue-50 border-blue-200">
              <Clock className="h-4 w-4 text-blue-600" />
              <AlertTitle>20-Minute Rule</AlertTitle>
              <AlertDescription>
                यदि आप बिस्तर पर 20 मिनट से अधिक समय तक जागे रहते हैं (सोते समय या रात में जागने पर), तो बिस्तर छोड़ दें और कुछ शांत करें (हल्की रोशनी में पढ़ना, ध्यान)। तब तक वापस न आएं जब तक आपको नींद न आए।
              </AlertDescription>
            </Alert>
          </TabsContent>
        </Tabs>

        {/* Conclusion Section */}
        <Card className="mt-12 shadow-2xl bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
          <CardHeader>
            <CardTitle className="text-2xl text-center">निष्कर्ष</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              अनिद्रा केवल एक रात की समस्या नहीं है, बल्कि यह शारीरिक और मानसिक स्वास्थ्य के लिए गंभीर खतरा बन सकती है। यदि यह समस्या सप्ताह में तीन बार से अधिक और लगातार तीन महीनों तक बनी रहे, तो विशेषज्ञ से परामर्श लेना आवश्यक होता है। CBT-I को प्राथमिकता दी जानी चाहिए, और दवाओं का उपयोग केवल अल्पकालिक और विशेषज्ञ की देखरेख में ही किया जाना चाहिए। सही आदतों, प्राकृतिक उपचारों और समय पर उपचार से गुणवत्तापूर्ण नींद वापस पाई जा सकती है।
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Badge className="bg-blue-500 text-white px-4 py-2">CBT-I सबसे प्रभावी</Badge>
              <Badge className="bg-green-500 text-white px-4 py-2">हर्बल उपचार सुरक्षित</Badge>
              <Badge className="bg-purple-500 text-white px-4 py-2">नियमितता महत्वपूर्ण</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>यह जानकारी केवल शैक्षिक उद्देश्यों के लिए है। किसी भी उपचार को शुरू करने से पहले योग्य स्वास्थ्य पेशेवर से परामर्श लें।</p>
        </div>
      </div>
    </div>
  );
}