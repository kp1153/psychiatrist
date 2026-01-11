"use client";
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Brain, Zap, Eye, Clock, Pill, Activity, Heart, AlertTriangle, Sun, Wind, Utensils } from 'lucide-react';

export default function MigraineOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain className="w-12 h-12 text-rose-600" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              माइग्रेन (Migraine)
            </h1>
            <Zap className="w-12 h-12 text-purple-600" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            न्यूरोलॉजिकल विकार की संपूर्ण जानकारी - लक्षण, चरण, ट्रिगर्स और उपचार
          </p>
        </header>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8 bg-white/50 backdrop-blur-sm">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              अवलोकन
            </TabsTrigger>
            <TabsTrigger value="phases" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              चरण
            </TabsTrigger>
            <TabsTrigger value="types" className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              प्रकार
            </TabsTrigger>
            <TabsTrigger value="triggers" className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              ट्रिगर्स
            </TabsTrigger>
            <TabsTrigger value="treatment" className="flex items-center gap-2">
              <Pill className="w-4 h-4" />
              उपचार
            </TabsTrigger>
            <TabsTrigger value="management" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              प्रबंधन
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-rose-50 to-pink-50">
                <CardTitle className="text-2xl">माइग्रेन क्या है?</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 leading-relaxed">
                  माइग्रेन एक जटिल न्यूरोलॉजिकल विकार है जो मध्यम से गंभीर सिरदर्द के साथ आता है। यह मस्तिष्क की तंत्रिका तंत्र, रक्त वाहिकाओं और न्यूरोकेमिकल्स को प्रभावित करती है। विश्व स्तर पर लगभग 15% जनसंख्या माइग्रेन से प्रभावित है, और महिलाओं में यह पुरुषों की तुलना में 3 गुना अधिक आम है।
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-rose-500" />
                    मुख्य लक्षण
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 mt-1">•</span>
                      <span>मध्यम से तीव्र, धड़कता हुआ सिरदर्द</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 mt-1">•</span>
                      <span>मतली और उल्टी</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 mt-1">•</span>
                      <span>रोशनी के प्रति संवेदनशीलता</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 mt-1">•</span>
                      <span>आवाज़ के प्रति संवेदनशीलता</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-500" />
                    अवधि
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>4 से 72 घंटे तक</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Episodic: महीने में 15 दिन से कम</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Chronic: महीने में 15+ दिन</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-pink-500" />
                    प्रभाव
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600 mt-1">•</span>
                      <span>काम में अनुपस्थिति</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600 mt-1">•</span>
                      <span>सामाजिक जीवन प्रभावित</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600 mt-1">•</span>
                      <span>अवसाद और चिंता</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Alert className="bg-rose-50 border-rose-200">
              <Brain className="h-4 w-4 text-rose-600" />
              <AlertTitle>आनुवांशिक संबंध</AlertTitle>
              <AlertDescription>
                माइग्रेन में मजबूत आनुवांशिक घटक है। यदि परिवार में किसी को माइग्रेन है तो आपका जोखिम 3 गुना बढ़ जाता है।
              </AlertDescription>
            </Alert>
          </TabsContent>

          {/* Phases Tab */}
          <TabsContent value="phases" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-600" />
                    1. Prodrome (चेतावनी)
                  </CardTitle>
                  <CardDescription>सिरदर्द से 24-48 घंटे पहले</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3">80% मरीजों में</Badge>
                  <ul className="space-y-2 text-sm">
                    <li>• मूड में बदलाव</li>
                    <li>• गर्दन में अकड़न</li>
                    <li>• बार-बार जम्हाई</li>
                    <li>• खाद्य पदार्थों की लालसा</li>
                    <li>• थकान</li>
                    <li>• प्रकाश/ध्वनि संवेदनशीलता</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-blue-600" />
                    2. Aura (संवेदी परिवर्तन)
                  </CardTitle>
                  <CardDescription>5-60 मिनट तक</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3">25-33% मरीजों में</Badge>
                  <ul className="space-y-2 text-sm">
                    <li>• टिमटिमाती रोशनी</li>
                    <li>• ज़िगज़ैग लाइनें</li>
                    <li>• अंधे धब्बे</li>
                    <li>• सुन्नता या झुनझुनी</li>
                    <li>• बोलने में कठिनाई</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-red-50 to-rose-50">
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-red-600" />
                    3. Headache (दर्द चरण)
                  </CardTitle>
                  <CardDescription>4-72 घंटे तक</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3">मुख्य चरण</Badge>
                  <ul className="space-y-2 text-sm">
                    <li>• एकतरफा धड़कता दर्द</li>
                    <li>• मतली/उल्टी</li>
                    <li>• Photophobia</li>
                    <li>• Phonophobia</li>
                    <li>• गतिविधि से बदतर</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-purple-600" />
                    4. Postdrome (हैंगओवर)
                  </CardTitle>
                  <CardDescription>24-48 घंटे तक</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3">80% मरीजों में</Badge>
                  <ul className="space-y-2 text-sm">
                    <li>• थकान और कमजोरी</li>
                    <li>• मूड में बदलाव</li>
                    <li>• ध्यान केंद्रित करने में कठिनाई</li>
                    <li>• पेट की समस्याएं</li>
                    <li>• हल्का सिरदर्द</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Types Tab */}
          <TabsContent value="types" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                  <CardTitle>Migraine without Aura</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-blue-500">सबसे आम - 75%</Badge>
                  <p className="text-sm text-gray-700 mb-3">पहले "Common Migraine" कहा जाता था</p>
                  <ul className="space-y-2 text-sm">
                    <li>• कोई aura लक्षण नहीं</li>
                    <li>• सीधे headache phase में प्रवेश</li>
                    <li>• सभी अन्य माइग्रेन लक्षण मौजूद</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle>Migraine with Aura</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-purple-500">25-33% मामले</Badge>
                  <p className="text-sm text-gray-700 mb-3">पहले "Classical Migraine" कहा जाता था</p>
                  <ul className="space-y-2 text-sm">
                    <li>• सिरदर्द से पहले या साथ में aura</li>
                    <li>• दृश्य लक्षण सबसे आम</li>
                    <li>• 5-60 मिनट तक रहता है</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                  <CardTitle>Chronic Migraine</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-orange-500">गंभीर रूप</Badge>
                  <ul className="space-y-2 text-sm">
                    <li>• महीने में 15+ दिन सिरदर्द</li>
                    <li>• कम से कम 3 महीने तक</li>
                    <li>• 8+ दिन माइग्रेन के लक्षण</li>
                    <li>• विशेष उपचार की आवश्यकता</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                  <CardTitle>Hemiplegic Migraine</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-green-500">दुर्लभ प्रकार</Badge>
                  <ul className="space-y-2 text-sm">
                    <li>• एक तरफ का अस्थायी पक्षाघात</li>
                    <li>• motor aura के साथ</li>
                    <li>• आनुवांशिक या sporadic</li>
                    <li>• Stroke जैसे लक्षण</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-rose-50 to-pink-50">
                  <CardTitle>Menstrual Migraine</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-rose-500">महिलाओं में</Badge>
                  <ul className="space-y-2 text-sm">
                    <li>• मासिक धर्म से जुड़ा</li>
                    <li>• हार्मोनल परिवर्तन के कारण</li>
                    <li>• Estrogen में गिरावट trigger</li>
                    <li>• अधिक गंभीर और लंबा</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
                  <CardTitle>Vestibular Migraine</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-indigo-500">संतुलन प्रभावित</Badge>
                  <ul className="space-y-2 text-sm">
                    <li>• चक्कर आना (Vertigo)</li>
                    <li>• संतुलन की समस्या</li>
                    <li>• कान बजना (Tinnitus)</li>
                    <li>• सिरदर्द हो या न हो</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Triggers Tab */}
          <TabsContent value="triggers" className="space-y-6">
            <Alert className="bg-amber-50 border-amber-200">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <AlertTitle>ट्रिगर्स को पहचानें</AlertTitle>
              <AlertDescription>
                हर व्यक्ति के ट्रिगर्स अलग होते हैं। एक माइग्रेन डायरी रखने से आपके विशिष्ट ट्रिगर्स की पहचान करने में मदद मिलती है।
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50">
                  <CardTitle className="flex items-center gap-2">
                    <Utensils className="w-5 h-5 text-red-600" />
                    आहार संबंधी
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>शराब</strong> (विशेष रूप से रेड वाइन)</li>
                    <li>• <strong>कैफीन</strong> (अधिक या अचानक कम)</li>
                    <li>• <strong>Aged cheeses</strong> (टायरामाइन युक्त)</li>
                    <li>• <strong>Processed meats</strong> (नाइट्रेट युक्त)</li>
                    <li>• <strong>MSG</strong> (मोनोसोडियम ग्लूटामेट)</li>
                    <li>• <strong>Artificial sweeteners</strong> (Aspartame)</li>
                    <li>• <strong>चॉकलेट</strong></li>
                    <li>• भोजन छोड़ना या उपवास</li>
                    <li>• निर्जलीकरण (पानी की कमी)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-purple-600" />
                    हार्मोनल
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>मासिक धर्म चक्र</strong> (Estrogen में उतार-चढ़ाव)</li>
                    <li>• <strong>गर्भनिरोधक गोलियां</strong></li>
                    <li>• <strong>Hormone replacement therapy</strong></li>
                    <li>• <strong>गर्भावस्था</strong> (पहली तिमाही में बदतर, बाद में बेहतर)</li>
                    <li>• <strong>Perimenopause और Menopause</strong></li>
                    <li>• <strong>Ovulation</strong> (डिंबोत्सर्जन)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                  <CardTitle className="flex items-center gap-2">
                    <Sun className="w-5 h-5 text-blue-600" />
                    पर्यावरणीय
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>तेज रोशनी</strong> (Bright or flickering lights)</li>
                    <li>• <strong>धूप की चमक</strong></li>
                    <li>• <strong>तेज़ आवाज़</strong> (Loud noises)</li>
                    <li>• <strong>तेज़ गंध</strong> (Perfumes, paints, smoke)</li>
                    <li>• <strong>मौसम में बदलाव</strong> (Barometric pressure)</li>
                    <li>• <strong>तापमान बदलाव</strong> (गर्मी या ठंड)</li>
                    <li>• <strong>उच्च ऊंचाई</strong></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-green-600" />
                    जीवनशैली
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>नींद की कमी या अधिक नींद</strong></li>
                    <li>• <strong>अनियमित नींद पैटर्न</strong></li>
                    <li>• <strong>तनाव</strong> (और तनाव के बाद विश्राम)</li>
                    <li>• <strong>शारीरिक परिश्रम</strong> (अत्यधिक व्यायाम)</li>
                    <li>• <strong>यात्रा</strong> (Time zone changes)</li>
                    <li>• <strong>धूम्रपान</strong></li>
                    <li>• <strong>खराब मुद्रा</strong></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-amber-50 to-yellow-50">
                  <CardTitle className="flex items-center gap-2">
                    <Pill className="w-5 h-5 text-amber-600" />
                    दवाएं
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Vasodilators</strong> (रक्त वाहिका फैलाने वाली)</li>
                    <li>• <strong>Nitroglycerin</strong></li>
                    <li>• <strong>कुछ हृदय दवाएं</strong></li>
                    <li>• <strong>Overuse of pain medications</strong> (Medication-overuse headache)</li>
                    <li>• <strong>कुछ hormonal medications</strong></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-rose-50 to-red-50">
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-rose-600" />
                    अन्य कारक
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>भावनात्मक तनाव</strong> (चिंता, अवसाद)</li>
                    <li>• <strong>Screen time</strong> (Computer, phone)</li>
                    <li>• <strong>खाली पेट</strong></li>
                    <li>• <strong>Weekend migraine</strong> (नियमित बदलाव)</li>
                    <li>• <strong>Temporomandibular joint (TMJ) disorders</strong></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Treatment Tab */}
          <TabsContent value="treatment" className="space-y-6">
            <Alert className="bg-red-50 border-red-200">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertTitle>महत्वपूर्ण चेतावनी</AlertTitle>
              <AlertDescription>
                सभी दवाएं केवल डॉक्टर के परामर्श से लें। यह जानकारी शैक्षिक उद्देश्य के लिए है, उपचार की सलाह नहीं।
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardTitle>Acute Treatment (तीव्र उपचार)</CardTitle>
                  <CardDescription>दर्द शुरू होने पर</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-4">
                    <div>
                      <Badge className="mb-2">Triptans (पहली पंक्ति)</Badge>
                      <p className="text-sm text-gray-600 mb-2">सेरोटोनिन रिसेप्टर agonists</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Sumatriptan</li>
                        <li>• Rizatriptan</li>
                        <li>• Zolmitriptan</li>
                        <li>• Eletriptan</li>
                      </ul>
                    </div>
                    <div>
                      <Badge className="mb-2">NSAIDs</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Ibuprofen</li>
                        <li>• Naproxen</li>
                        <li>• Diclofenac</li>
                        <li>• Aspirin</li>
                      </ul>
                    </div>
                    <div>
                      <Badge className="mb-2">Antiemetics (मतली के लिए)</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Metoclopramide</li>
                        <li>• Ondansetron</li>
                        <li>• Prochlorperazine</li>
                      </ul>
                    </div>
                    <div>
                      <Badge className="mb-2">CGRP Antagonists (नई दवाएं)</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Ubrogepant</li>
                        <li>• Rimegepant</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                <CardTitle>Preventive Treatment (निवारक उपचार)</CardTitle>
                <CardDescription>बार-बार होने वाले माइग्रेन के लिए</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-4">
                  <div>
                    <Badge className="mb-2">Beta-Blockers</Badge>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Propranolol</li>
                      <li>• Metoprolol</li>
                      <li>• Timolol</li>
                    </ul>
                  </div>
                  <div>
                    <Badge className="mb-2">Antidepressants</Badge>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Amitriptyline</li>
                      <li>• Venlafaxine</li>
                    </ul>
                  </div>
                  <div>
                    <Badge className="mb-2">Anticonvulsants</Badge>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Topiramate</li>
                      <li>• Valproate</li>
                    </ul>
                  </div>
                  <div>
                    <Badge className="mb-2">CGRP mAbs (मासिक इंजेक्शन)</Badge>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Erenumab</li>
                      <li>• Fremanezumab</li>
                      <li>• Galcanezumab</li>
                    </ul>
                  </div>
                  <div>
                    <Badge className="mb-2">Botox</Badge>
                    <p className="text-sm text-gray-700">Chronic migraine के लिए (हर 3 महीने)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                <CardTitle>Natural & Alternative</CardTitle>
                <CardDescription>गैर-दवा विकल्प</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm mb-1">सप्लीमेंट्स</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Magnesium (400-500 mg)</li>
                      <li>• Riboflavin (Vitamin B2) - 400 mg</li>
                      <li>• Coenzyme Q10 - 100-300 mg</li>
                      <li>• Feverfew (पुदीना)</li>
                      <li>• Butterbur</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">अन्य थेरेपी</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Acupuncture (सुई चिकित्सा)</li>
                      <li>• Biofeedback</li>
                      <li>• Massage therapy</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
                <CardTitle>Emergency Treatment</CardTitle>
                <CardDescription>गंभीर मामलों के लिए</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <Alert className="mb-3 bg-red-50 border-red-200">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription className="text-sm">
                    अगर सामान्य दवाएं काम न करें या लक्षण बहुत गंभीर हों तो तुरंत डॉक्टर से संपर्क करें
                  </AlertDescription>
                </Alert>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>• <strong>IV DHE</strong> (Dihydroergotamine)</li>
                  <li>• <strong>IV Corticosteroids</strong></li>
                  <li>• <strong>IV Fluids</strong> (निर्जलीकरण के लिए)</li>
                  <li>• <strong>Nerve blocks</strong></li>
                  <li>• <strong>Neuromodulation devices</strong></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Management Tab */}
        <TabsContent value="management" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-blue-600" />
                  जीवनशैली में बदलाव
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm mb-1">नींद की स्वच्छता</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• हर दिन एक ही समय पर सोएं और जागें</li>
                      <li>• 7-9 घंटे की नींद लें</li>
                      <li>• सोने से पहले screen time कम करें</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">नियमित भोजन</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• भोजन न छोड़ें</li>
                      <li>• हाइड्रेटेड रहें (8-10 गिलास पानी)</li>
                      <li>• ट्रिगर फूड्स से बचें</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">व्यायाम</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• नियमित moderate exercise</li>
                      <li>• Yoga और stretching</li>
                      <li>• अत्यधिक परिश्रम से बचें</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-purple-600" />
                  तनाव प्रबंधन
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Meditation</strong> (ध्यान) - दैनिक 10-20 मिनट</li>
                  <li>• <strong>Deep breathing exercises</strong></li>
                  <li>• <strong>Progressive muscle relaxation</strong></li>
                  <li>• <strong>Cognitive behavioral therapy (CBT)</strong></li>
                  <li>• <strong>Mindfulness practices</strong></li>
                  <li>• <strong>Time management</strong></li>
                  <li>• <strong>Social support</strong> - परिवार और दोस्तों से जुड़े रहें</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-green-600" />
                  माइग्रेन डायरी
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-gray-700 mb-3">निम्नलिखित जानकारी रिकॉर्ड करें:</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• दर्द की तारीख और समय</li>
                  <li>• तीव्रता (1-10 scale)</li>
                  <li>• अवधि</li>
                  <li>• लक्षण</li>
                  <li>• संभावित ट्रिगर्स</li>
                  <li>• ली गई दवाएं और प्रभाव</li>
                  <li>• मासिक धर्म चक्र (महिलाओं के लिए)</li>
                  <li>• नींद पैटर्न</li>
                  <li>• तनाव स्तर</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-rose-50 to-red-50">
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-rose-600" />
                  डॉक्टर से कब मिलें
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <Alert className="mb-3 bg-red-100 border-red-300">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>तुरंत आपातकालीन सहायता लें अगर:</AlertTitle>
                </Alert>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• अचानक, गंभीर "thunderclap" headache</li>
                  <li>• बुखार, गर्दन में अकड़न के साथ सिरदर्द</li>
                  <li>• दृष्टि में परिवर्तन, बोलने या चलने में कठिनाई</li>
                  <li>• सिर की चोट के बाद सिरदर्द</li>
                  <li>• 50 साल की उम्र के बाद पहली बार सिरदर्द</li>
                  <li>• सामान्य पैटर्न में बदलाव</li>
                  <li>• Aura 1 घंटे से अधिक समय तक</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg md:col-span-2">
              <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-indigo-600" />
                  Acute Attack के दौरान क्या करें
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-sm mb-2 text-green-700">✓ करें:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• जल्दी दवा लें (पहले 30-60 मिनट में)</li>
                      <li>• अंधेरे, शांत कमरे में आराम करें</li>
                      <li>• ठंडी या गर्म पट्टी लगाएं</li>
                      <li>• पानी पिएं</li>
                      <li>• गहरी सांसें लें</li>
                      <li>• हल्का खाना खाएं</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-2 text-red-700">✗ न करें:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• तेज रोशनी या शोर के संपर्क में न आएं</li>
                      <li>• Screen time न बढ़ाएं</li>
                      <li>• शराब न पिएं</li>
                      <li>• भारी भोजन न करें</li>
                      <li>• तनावपूर्ण गतिविधियां न करें</li>
                      <li>• दवा का अधिक सेवन न करें</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Alert className="bg-blue-50 border-blue-200">
            <Heart className="h-4 w-4 text-blue-600" />
            <AlertTitle>याद रखें</AlertTitle>
            <AlertDescription>
              माइग्रेन एक प्रबंधनीय स्थिति है। सही उपचार, जीवनशैली में बदलाव, और ट्रिगर्स की पहचान से अधिकांश लोग अपने माइग्रेन को नियंत्रित कर सकते हैं। धैर्य रखें और अपने डॉक्टर के साथ मिलकर काम करें।
            </AlertDescription>
          </Alert>
        </TabsContent>
      </Tabs>
    </div>
  </div>
);
}