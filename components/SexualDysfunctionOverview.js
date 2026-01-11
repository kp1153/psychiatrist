"use client";
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Brain, Pill, Activity, AlertTriangle, Zap, Shield, Stethoscope, MessageCircle } from 'lucide-react';

export default function SexualDysfunctionOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-12 h-12 text-rose-600" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              यौन अक्षमता (Sexual Dysfunction)
            </h1>
            <Users className="w-12 h-12 text-pink-600" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            यौन स्वास्थ्य की संपूर्ण जानकारी - प्रकार, कारण, लक्षण और उपचार
          </p>
        </header>

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
            <TabsTrigger value="causes" className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              कारण
            </TabsTrigger>
            <TabsTrigger value="symptoms" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              लक्षण
            </TabsTrigger>
            <TabsTrigger value="treatment" className="flex items-center gap-2">
              <Pill className="w-4 h-4" />
              उपचार
            </TabsTrigger>
            <TabsTrigger value="support" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              सहायता
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-rose-50 to-pink-50">
                <CardTitle className="text-2xl">यौन अक्षमता क्या है?</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  यौन अक्षमता एक सामान्य समस्या है जो किसी भी उम्र के पुरुषों और महिलाओं को प्रभावित कर सकती है। यह यौन क्रिया के किसी भी चरण में कठिनाई को संदर्भित करता है - इच्छा, उत्तेजना, चरमोत्कर्ष (orgasm), या संतुष्टि में समस्या।
                </p>
                <p className="text-gray-700 leading-relaxed">
                  यौन अक्षमता शारीरिक, मनोवैज्ञानिक, या दोनों कारणों से हो सकती है। यह रिश्तों को प्रभावित कर सकती है और आत्म-सम्मान को कम कर सकती है, लेकिन अधिकांश मामलों में इसका सफल उपचार संभव है।
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-rose-500" />
                    प्रसार
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• पुरुषों में: 31% (विभिन्न प्रकार)</li>
                    <li>• महिलाओं में: 43% (विभिन्न प्रकार)</li>
                    <li>• उम्र के साथ बढ़ता है</li>
                    <li>• अधिकांश मामले इलाज योग्य हैं</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-pink-500" />
                    मुख्य कारण
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• शारीरिक स्वास्थ्य समस्याएं</li>
                    <li>• मनोवैज्ञानिक कारक</li>
                    <li>• दवाओं के दुष्प्रभाव</li>
                    <li>• हार्मोनल असंतुलन</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-red-500" />
                    महत्वपूर्ण तथ्य
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• शर्म न करें, डॉक्टर से बात करें</li>
                    <li>• अधिकांश मामले उपचार योग्य</li>
                    <li>• साथी का सहयोग महत्वपूर्ण</li>
                    <li>• जीवनशैली बदलाव मदद करते हैं</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Alert className="bg-rose-50 border-rose-200">
              <Heart className="h-4 w-4 text-rose-600" />
              <AlertTitle>याद रखें</AlertTitle>
              <AlertDescription>
                यौन स्वास्थ्य समग्र स्वास्थ्य का महत्वपूर्ण हिस्सा है। यौन समस्याओं के बारे में बात करना शर्मिंदगी की बात नहीं है। पेशेवर मदद लेने से स्थिति में सुधार हो सकता है।
              </AlertDescription>
            </Alert>
          </TabsContent>

          {/* Types Tab */}
          <TabsContent value="types" className="space-y-6">
            <Alert className="bg-blue-50 border-blue-200">
              <Brain className="h-4 w-4 text-blue-600" />
              <AlertTitle>यौन अक्षमता के मुख्य प्रकार</AlertTitle>
              <AlertDescription>
                यौन अक्षमता को चार मुख्य श्रेणियों में विभाजित किया जाता है, जो यौन प्रतिक्रिया चक्र के विभिन्न चरणों को प्रभावित करते हैं।
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle>1. यौन इच्छा विकार (Desire Disorders)</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-purple-500">सबसे आम</Badge>
                  <p className="text-sm text-gray-700 mb-3">यौन गतिविधि में रुचि की कमी या अनुपस्थिति</p>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-sm mb-1">महिलाओं में:</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Hypoactive Sexual Desire Disorder (HSDD)</li>
                        <li>• यौन विचारों या कल्पनाओं की कमी</li>
                        <li>• यौन गतिविधि शुरू करने में अनिच्छा</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">पुरुषों में:</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• कम libido (कामेच्छा)</li>
                        <li>• यौन गतिविधि में रुचि की कमी</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                  <CardTitle>2. उत्तेजना विकार (Arousal Disorders)</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-blue-500">शारीरिक प्रतिक्रिया</Badge>
                  <p className="text-sm text-gray-700 mb-3">यौन उत्तेजना प्राप्त करने या बनाए रखने में कठिनाई</p>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-sm mb-1">पुरुषों में:</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• <strong>Erectile Dysfunction (ED)</strong> - स्तंभन दोष</li>
                        <li>• इरेक्शन प्राप्त या बनाए रखने में असमर्थता</li>
                        <li>• 40+ उम्र में अधिक आम</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">महिलाओं में:</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• योनि में स्नेहन की कमी</li>
                        <li>• जननांग क्षेत्र में रक्त प्रवाह की समस्या</li>
                        <li>• शारीरिक उत्तेजना प्राप्त करने में कठिनाई</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-rose-50 to-red-50">
                  <CardTitle>3. चरमोत्कर्ष विकार (Orgasm Disorders)</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-rose-500">संतुष्टि में कठिनाई</Badge>
                  <p className="text-sm text-gray-700 mb-3">चरमोत्कर्ष (orgasm) तक पहुंचने में देरी या असमर्थता</p>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-sm mb-1">पुरुषों में:</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• <strong>Premature Ejaculation</strong> - शीघ्रपतन</li>
                        <li>• <strong>Delayed Ejaculation</strong> - विलंबित स्खलन</li>
                        <li>• <strong>Retrograde Ejaculation</strong></li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">महिलाओं में:</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Anorgasmia - चरमोत्कर्ष न होना</li>
                        <li>• पर्याप्त उत्तेजना के बाद भी orgasm में कठिनाई</li>
                        <li>• Orgasm तक पहुंचने में बहुत समय लगना</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
                  <CardTitle>4. दर्द विकार (Pain Disorders)</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-amber-500">यौन क्रिया के दौरान दर्द</Badge>
                  <p className="text-sm text-gray-700 mb-3">यौन गतिविधि से जुड़ा दर्द</p>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-sm mb-1">महिलाओं में (अधिक आम):</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• <strong>Dyspareunia</strong> - संभोग के दौरान दर्द</li>
                        <li>• <strong>Vaginismus</strong> - योनि की मांसपेशियों में ऐंठन</li>
                        <li>• प्रवेश के दौरान दर्द</li>
                        <li>• जलन या बेचैनी</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">पुरुषों में:</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• लिंग में दर्द</li>
                        <li>• स्खलन के दौरान दर्द</li>
                        <li>• Peyronie's disease (लिंग की वक्रता)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Causes Tab */}
          <TabsContent value="causes" className="space-y-6">
            <Alert className="bg-amber-50 border-amber-200">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <AlertTitle>बहुकारकीय समस्या</AlertTitle>
              <AlertDescription>
                यौन अक्षमता अक्सर शारीरिक और मनोवैज्ञानिक कारकों के संयोजन से होती है। कभी-कभी एक समस्या दूसरे को जन्म देती है।
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-red-50 to-rose-50">
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-red-600" />
                    शारीरिक कारण
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-sm mb-1">चिकित्सा स्थितियां:</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• <strong>मधुमेह (Diabetes)</strong> - नसों और रक्त वाहिकाओं को नुकसान</li>
                        <li>• <strong>हृदय रोग</strong> - रक्त प्रवाह में कमी</li>
                        <li>• <strong>उच्च रक्तचाप</strong></li>
                        <li>• <strong>न्यूरोलॉजिकल विकार</strong> (Parkinson's, MS)</li>
                        <li>• <strong>हार्मोनल असंतुलन</strong> (थायरॉयड, testosterone)</li>
                        <li>• <strong>गुर्दे या लीवर की बीमारी</strong></li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">अन्य शारीरिक कारक:</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• मोटापा</li>
                        <li>• धूम्रपान और शराब</li>
                        <li>• नशीली दवाओं का उपयोग</li>
                        <li>• सर्जरी या चोट</li>
                        <li>• रजोनिवृत्ति (Menopause)</li>
                        <li>• गर्भावस्था और प्रसव</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-purple-600" />
                    मनोवैज्ञानिक कारण
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-sm mb-1">मानसिक स्वास्थ्य:</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• <strong>अवसाद (Depression)</strong></li>
                        <li>• <strong>चिंता (Anxiety)</strong></li>
                        <li>• <strong>तनाव</strong> (काम, वित्तीय, पारिवारिक)</li>
                        <li>• <strong>आत्म-सम्मान की कमी</strong></li>
                        <li>• <strong>पिछला यौन आघात</strong></li>
                        <li>• <strong>अपराध बोध या शर्म</strong></li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">रिश्ते के मुद्दे:</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• साथी के साथ संघर्ष</li>
                        <li>• संचार की कमी</li>
                        <li>• विश्वास की कमी</li>
                        <li>• अलग-अलग यौन अपेक्षाएं</li>
                        <li>• रिश्ते में असंतोष</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">प्रदर्शन चिंता:</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• पिछली असफलताओं का डर</li>
                        <li>• साथी को संतुष्ट न कर पाने की चिंता</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                  <CardTitle className="flex items-center gap-2">
                    <Pill className="w-5 h-5 text-blue-600" />
                    दवाओं के दुष्प्रभाव
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm text-gray-700 mb-3">कई दवाएं यौन क्रिया को प्रभावित कर सकती हैं:</p>
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li>• <strong>Antidepressants</strong> (SSRI, SNRI)</li>
                    <li>• <strong>Blood pressure medications</strong></li>
                    <li>• <strong>Antihistamines</strong></li>
                    <li>• <strong>Antipsychotics</strong></li>
                    <li>• <strong>Chemotherapy drugs</strong></li>
                    <li>• <strong>Hormone medications</strong></li>
                    <li>• <strong>Pain medications</strong> (opioids)</li>
                  </ul>
                  <Alert className="mt-3 bg-yellow-50 border-yellow-200">
                    <AlertDescription className="text-xs">
                      अगर आपको लगता है कि दवा यौन समस्याओं का कारण बन रही है, तो डॉक्टर से बात करें। खुद से दवा बंद न करें।
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    जीवनशैली कारक
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li>• <strong>धूम्रपान</strong> - रक्त वाहिकाओं को नुकसान</li>
                    <li>• <strong>अत्यधिक शराब</strong> - यौन प्रतिक्रिया कम करती है</li>
                    <li>• <strong>नशीली दवाएं</strong> (मारिजुआना, cocaine, आदि)</li>
                    <li>• <strong>खराब आहार</strong></li>
                    <li>• <strong>व्यायाम की कमी</strong></li>
                    <li>• <strong>मोटापा</strong></li>
                    <li>• <strong>नींद की कमी</strong></li>
                    <li>• <strong>अत्यधिक तनाव</strong></li>
                    <li>• <strong>बहुत अधिक साइकिलिंग</strong> (पुरुषों में)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Symptoms Tab */}
          <TabsContent value="symptoms" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardTitle>पुरुषों में लक्षण</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <div>
                      <Badge className="mb-2">स्तंभन समस्याएं</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• इरेक्शन प्राप्त करने में असमर्थता</li>
                        <li>• इरेक्शन बनाए रखने में कठिनाई</li>
                        <li>• कम कठोर इरेक्शन</li>
                      </ul>
                    </div>
                    <div>
                      <Badge className="mb-2">स्खलन समस्याएं</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• शीघ्रपतन (1 मिनट से कम)</li>
                        <li>• विलंबित या कोई स्खलन नहीं</li>
                        <li>• Retrograde ejaculation</li>
                      </ul>
                    </div>
                    <div>
                      <Badge className="mb-2">इच्छा की कमी</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• यौन गतिविधि में रुचि न होना</li>
                        <li>• कम libido</li>
                        <li>• यौन कल्पनाओं की कमी</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-pink-50 to-rose-50">
                  <CardTitle>महिलाओं में लक्षण</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <div>
                      <Badge className="mb-2">उत्तेजना समस्याएं</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• योनि में पर्याप्त स्नेहन न होना</li>
                        <li>• जननांग क्षेत्र में सूजन की कमी</li>
                        <li>• शारीरिक उत्तेजना प्राप्त करने में कठिनाई</li>
                      </ul>
                    </div>
                    <div>
                      <Badge className="mb-2">चरमोत्कर्ष समस्याएं</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Orgasm तक पहुंचने में कठिनाई या असमर्थता</li>
                        <li>• कमजोर या विलंबित orgasm</li>
                        <li>• Orgasm की तीव्रता में कमी</li>
                      </ul>
                    </div>
                    <div>
                     <Badge className="mb-2">दर्द और बेचैनी</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• संभोग के दौरान दर्द (Dyspareunia)</li>
                        <li>• योनि की मांसपेशियों में ऐंठन (Vaginismus)</li>
                        <li>• जलन या खुजली</li>
                      </ul>
                    </div>
                    <div>
                      <Badge className="mb-2">इच्छा की कमी</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• यौन गतिविधि में रुचि न होना</li>
                        <li>• यौन विचारों की कमी</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Alert className="bg-red-50 border-red-200">
              <Stethoscope className="h-4 w-4 text-red-600" />
              <AlertTitle>डॉक्टर से कब मिलें</AlertTitle>
              <AlertDescription>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• अगर यौन समस्याएं लगातार या बार-बार हो रही हैं</li>
                  <li>• अगर यह आपके या आपके साथी के लिए चिंता का कारण है</li>
                  <li>• अगर यह आपके रिश्ते को प्रभावित कर रहा है</li>
                  <li>• अगर अन्य लक्षण भी हैं (दर्द, रक्तस्राव, असामान्य स्राव)</li>
                </ul>
              </AlertDescription>
            </Alert>
          </TabsContent>

          {/* Treatment Tab */}
          <TabsContent value="treatment" className="space-y-6">
            <Alert className="bg-green-50 border-green-200">
              <Shield className="h-4 w-4 text-green-600" />
              <AlertTitle>अच्छी खबर</AlertTitle>
              <AlertDescription>
                यौन अक्षमता के अधिकांश मामलों का सफलतापूर्वक इलाज किया जा सकता है। उपचार अंतर्निहित कारण पर निर्भर करता है।
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                  <CardTitle>चिकित्सा उपचार</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-4">
                    <div>
                      <Badge className="mb-2">पुरुषों के लिए दवाएं</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• <strong>PDE5 inhibitors</strong> (Viagra, Cialis, Levitra) - ED के लिए</li>
                        <li>• <strong>Testosterone replacement</strong> - कम testosterone के लिए</li>
                        <li>• <strong>Antidepressants</strong> - शीघ्रपतन के लिए (SSRI)</li>
                        <li>• <strong>Alprostadil injections</strong> - ED के लिए</li>
                      </ul>
                    </div>
                    <div>
                      <Badge className="mb-2">महिलाओं के लिए दवाएं</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• <strong>Hormone therapy</strong> (Estrogen, testosterone)</li>
                        <li>• <strong>Flibanserin (Addyi)</strong> - कम libido के लिए</li>
                        <li>• <strong>Bremelanotide (Vyleesi)</strong> - इच्छा के लिए</li>
                        <li>• <strong>Vaginal lubricants</strong> - सूखापन के लिए</li>
                      </ul>
                    </div>
                    <div>
                      <Badge className="mb-2">अन्य चिकित्सा विकल्प</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Vacuum devices (पुरुषों के लिए)</li>
                        <li>• Penile implants (गंभीर ED के लिए)</li>
                        <li>• Pelvic floor therapy</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle>मनोवैज्ञानिक उपचार</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-4">
                    <div>
                      <Badge className="mb-2">थेरेपी</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• <strong>Sex therapy</strong> - विशेष यौन परामर्श</li>
                        <li>• <strong>Cognitive Behavioral Therapy (CBT)</strong></li>
                        <li>• <strong>Couples counseling</strong> - साथी के साथ</li>
                        <li>• <strong>Psychotherapy</strong> - अंतर्निहित मुद्दों के लिए</li>
                      </ul>
                    </div>
                    <div>
                      <Badge className="mb-2">तकनीकें</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Sensate focus exercises</li>
                        <li>• Mindfulness और meditation</li>
                        <li>• Communication skills training</li>
                        <li>• Stress management</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                  <CardTitle>जीवनशैली में बदलाव</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li>• <strong>नियमित व्यायाम</strong> - रक्त प्रवाह और मनोदशा में सुधार</li>
                    <li>• <strong>स्वस्थ आहार</strong> - संतुलित पोषण</li>
                    <li>• <strong>धूम्रपान बंद करें</strong></li>
                    <li>• <strong>शराब सीमित करें</strong></li>
                    <li>• <strong>तनाव कम करें</strong> - योग, ध्यान</li>
                    <li>• <strong>पर्याप्त नींद</strong> - 7-9 घंटे</li>
                    <li>• <strong>वजन प्रबंधन</strong></li>
                    <li>• <strong>साथी के साथ संवाद</strong></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
                  <CardTitle>वैकल्पिक उपचार</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm text-gray-700 mb-3">कुछ प्राकृतिक विकल्प (डॉक्टर से पूछें):</p>
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li>• <strong>L-arginine</strong> - रक्त प्रवाह में सुधार</li>
                    <li>• <strong>Ginseng</strong> - पारंपरिक उपचार</li>
                    <li>• <strong>Yohimbine</strong> - ED के लिए</li>
                    <li>• <strong>Maca root</strong> - libido के लिए</li>
                    <li>• <strong>Acupuncture</strong></li>
                    <li>• <strong>Pelvic floor exercises</strong> (Kegels)</li>
                  </ul>
                  <Alert className="mt-3 bg-yellow-50 border-yellow-200">
                    <AlertDescription className="text-xs">
                      सप्लीमेंट्स लेने से पहले हमेशा डॉक्टर से परामर्श करें, खासकर अगर आप अन्य दवाएं ले रहे हैं।
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Support Tab */}
          <TabsContent value="support" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-blue-600" />
                    साथी के साथ संवाद
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm text-gray-700 mb-3">खुला और ईमानदार संवाद महत्वपूर्ण है:</p>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-sm mb-1 text-green-700">✓ करें:</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• अपनी भावनाओं को साझा करें</li>
                        <li>• सुनें और समझें</li>
                        <li>• एक साथ समाधान खोजें</li>
                        <li>• धैर्य रखें</li>
                        <li>• शारीरिक अंतरंगता के अन्य तरीके खोजें</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1 text-red-700">✗ न करें:</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• दोष न लगाएं</li>
                        <li>• आलोचना न करें</li>
                        <li>• मुद्दे से बचें नहीं</li>
                        <li>• अकेले इस समस्या से जूझें नहीं</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-purple-600" />
                    स्व-देखभाल
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li>• <strong>आत्म-करुणा</strong> - खुद के प्रति दयालु रहें</li>
                    <li>• <strong>यथार्थवादी अपेक्षाएं</strong> रखें</li>
                    <li>• <strong>तनाव प्रबंधन</strong> - विश्राम तकनीकें</li>
                    <li>• <strong>सकारात्मक body image</strong></li>
                    <li>• <strong>शौक और रुचियां</strong> बनाए रखें</li>
                    <li>• <strong>सामाजिक संपर्क</strong> बनाए रखें</li>
                    <li>• <strong>पेशेवर मदद</strong> लेने में संकोच न करें</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                  <CardTitle className="flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-green-600" />
                    पेशेवर सहायता
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm text-gray-700 mb-3">किससे परामर्श लें:</p>
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li>• <strong>Primary care doctor</strong> - प्रारंभिक मूल्यांकन</li>
                    <li>• <strong>Urologist</strong> - पुरुषों की समस्याओं के लिए</li>
                    <li>• <strong>Gynecologist</strong> - महिलाओं की समस्याओं के लिए</li>
                    <li>• <strong>Endocrinologist</strong> - हार्मोनल मुद्दों के लिए</li>
                    <li>• <strong>Sex therapist</strong> - विशेष परामर्श</li>
                    <li>• <strong>Psychologist/Psychiatrist</strong> - मानसिक स्वास्थ्य के लिए</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-rose-50 to-red-50">
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-rose-600" />
                    याद रखें
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li>• यौन स्वास्थ्य समग्र स्वास्थ्य का हिस्सा है</li>
                    <li>• यौन समस्याएं बहुत आम हैं</li>
                    <li>• इसमें शर्मिंदा होने की कोई बात नहीं</li>
                    <li>• अधिकांश मामले उपचार योग्य हैं</li>
                    <li>• समय और धैर्य की आवश्यकता हो सकती है</li>
                    <li>• आप अकेले नहीं हैं - मदद उपलब्ध है</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Alert className="bg-blue-50 border-blue-200">
              <Heart className="h-4 w-4 text-blue-600" />
              <AlertTitle>सकारात्मक दृष्टिकोण</AlertTitle>
              <AlertDescription>
                यौन अक्षमता एक चिकित्सा स्थिति है, व्यक्तिगत विफलता नहीं। सही उपचार और समर्थन के साथ, अधिकांश लोग संतोषजनक यौन जीवन वापस पा सकते हैं। पहला कदम मदद मांगना है।
              </AlertDescription>
            </Alert>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}