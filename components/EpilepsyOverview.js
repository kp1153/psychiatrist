import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Brain, Zap, Activity, AlertTriangle, Pill, Heart, Shield, Stethoscope, Clock, Users, BookOpen, Phone } from 'lucide-react';

export default function EpilepsyOverview() {
  const [selectedSeizureType, setSelectedSeizureType] = useState(null);

  const seizureTypes = [
    {
      id: 'focal',
      name: 'Focal Seizures',
      hindi: 'फोकल दौरे',
      color: 'bg-blue-500',
      description: 'मस्तिष्क के एक हिस्से से शुरू',
      percentage: 60
    },
    {
      id: 'generalized',
      name: 'Generalized Seizures',
      hindi: 'सामान्यीकृत दौरे',
      color: 'bg-purple-500',
      description: 'पूरे मस्तिष्क को प्रभावित',
      percentage: 40
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain className="w-16 h-16 text-blue-600 animate-pulse" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              मिर्गी (Epilepsy)
            </h1>
            <Zap className="w-16 h-16 text-purple-600 animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            न्यूरोलॉजिकल विकार की संपूर्ण जानकारी - प्रकार, लक्षण, उपचार और प्रबंधन
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Badge className="text-sm py-2 px-4 bg-blue-600">65 मिलियन+ लोग प्रभावित विश्वभर</Badge>
            <Badge className="text-sm py-2 px-4 bg-purple-600">70% मामले नियंत्रित हो सकते हैं</Badge>
          </div>
        </header>

        {/* Emergency Alert */}
        <Alert className="mb-8 bg-red-50 border-red-300 border-2">
          <AlertTriangle className="h-5 w-5 text-red-600" />
          <AlertTitle className="text-lg font-bold text-red-800">आपातकालीन स्थिति</AlertTitle>
          <AlertDescription className="text-red-700">
            अगर दौरा 5 मिनट से अधिक चले, या एक के बाद एक दौरे आएं, तुरंत <strong>108/102</strong> पर कॉल करें या नजदीकी अस्पताल जाएं।
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-7 mb-8 bg-white/70 backdrop-blur-sm shadow-lg">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              अवलोकन
            </TabsTrigger>
            <TabsTrigger value="types" className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              प्रकार
            </TabsTrigger>
            <TabsTrigger value="symptoms" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              लक्षण
            </TabsTrigger>
            <TabsTrigger value="causes" className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              कारण
            </TabsTrigger>
            <TabsTrigger value="diagnosis" className="flex items-center gap-2">
              <Stethoscope className="w-4 h-4" />
              निदान
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
            <Card className="shadow-xl border-2 border-blue-100">
              <CardHeader className="bg-gradient-to-r from-blue-100 to-purple-100">
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Brain className="w-8 h-8 text-blue-600" />
                  मिर्गी क्या है?
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  मिर्गी एक केंद्रीय तंत्रिका तंत्र (न्यूरोलॉजिकल) विकार है जिसमें मस्तिष्क की गतिविधि असामान्य हो जाती है, जिससे दौरे (seizures) या असामान्य व्यवहार, संवेदनाएं और कभी-कभी चेतना की हानि होती है।
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  मिर्गी किसी भी उम्र, लिंग या जातीय पृष्ठभूमि के लोगों को प्रभावित कर सकती है। भारत में लगभग <strong>1.2 करोड़ लोग</strong> मिर्गी से पीड़ित हैं।
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-700">
                    <Users className="w-6 h-6" />
                    प्रभावित जनसंख्या
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>विश्वभर</span>
                      <span className="font-bold text-blue-600">65 मिलियन+</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>भारत में</span>
                      <span className="font-bold text-purple-600">1.2 करोड़+</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <p className="text-xs text-gray-600 mt-3">हर 100 में से 1 व्यक्ति जीवनकाल में मिर्गी से प्रभावित</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-700">
                    <Activity className="w-6 h-6" />
                    दौरों की विशेषताएं
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">अचानक विद्युत गतिविधि में वृद्धि</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">अनियंत्रित शारीरिक गतिविधियां</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">चेतना में परिवर्तन या हानि</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">कुछ सेकंड से मिनटों तक</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-pink-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-pink-700">
                    <Heart className="w-6 h-6" />
                    उपचार सफलता दर
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>दवाओं से नियंत्रण</span>
                      <span className="font-bold text-green-600">70%</span>
                    </div>
                    <Progress value={70} className="h-2 bg-green-100" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>सर्जरी से मुक्त</span>
                      <span className="font-bold text-blue-600">60-70%</span>
                    </div>
                    <Progress value={65} className="h-2 bg-blue-100" />
                  </div>
                  <p className="text-xs text-gray-600 mt-3">सही उपचार से अधिकांश लोग सामान्य जीवन जी सकते हैं</p>
                </CardContent>
              </Card>
            </div>

            <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-300">
              <Shield className="h-5 w-5 text-green-600" />
              <AlertTitle className="text-green-800 font-bold">महत्वपूर्ण तथ्य</AlertTitle>
              <AlertDescription className="text-green-700">
                मिर्गी संक्रामक नहीं है और मानसिक बीमारी नहीं है। यह एक चिकित्सीय स्थिति है जिसका इलाज संभव है। सही उपचार और जीवनशैली में बदलाव से 70% से अधिक लोग दौरे-मुक्त जीवन जी सकते हैं।
              </AlertDescription>
            </Alert>

            <Card className="shadow-xl bg-gradient-to-br from-blue-50 to-purple-50">
              <CardHeader>
                <CardTitle className="text-2xl">मिथक vs सच्चाई</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <h3 className="font-bold text-red-700 mb-2">❌ मिथक</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• मिर्गी पागलपन या मानसिक बीमारी है</li>
                      <li>• मिर्गी संक्रामक होती है</li>
                      <li>• मिर्गी वाले लोग सामान्य जीवन नहीं जी सकते</li>
                      <li>• दौरे के दौरान मुंह में चम्मच डालना चाहिए</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <h3 className="font-bold text-green-700 mb-2">✅ सच्चाई</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• मिर्गी एक न्यूरोलॉजिकल विकार है</li>
                      <li>• मिर्गी बिल्कुल संक्रामक नहीं है</li>
                      <li>• उपचार से सामान्य जीवन संभव है</li>
                      <li>• मुंह में कुछ भी डालना खतरनाक है</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Types Tab */}
          <TabsContent value="types" className="space-y-6">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-100 to-purple-100">
                <CardTitle className="text-2xl">दौरों के मुख्य प्रकार</CardTitle>
                <CardDescription>दौरों को मस्तिष्क में शुरुआत के आधार पर वर्गीकृत किया जाता है</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {seizureTypes.map((type) => (
                    <div
                      key={type.id}
                      onClick={() => setSelectedSeizureType(type.id)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedSeizureType === type.id
                          ? 'border-blue-500 bg-blue-50 shadow-lg scale-105'
                          : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-lg">{type.name}</h3>
                        <Badge className={type.color}>{type.percentage}%</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{type.hindi}</p>
                      <p className="text-sm text-gray-700">{type.description}</p>
                      <Progress value={type.percentage} className="mt-3 h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-6 h-6 text-blue-600" />
                    Focal Seizures (फोकल दौरे)
                  </CardTitle>
                  <CardDescription>मस्तिष्क के एक हिस्से से शुरू होने वाले दौरे</CardDescription>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">1. Focal Aware Seizures (Simple Partial)</h4>
                    <Badge className="mb-2 bg-blue-500">चेतना बरकरार</Badge>
                    <ul className="space-y-1 text-sm text-gray-700 ml-4">
                      <li>• शरीर के एक हिस्से में झटके</li>
                      <li>• असामान्य संवेदनाएं (गंध, स्वाद, दृष्टि)</li>
                      <li>• भावनात्मक परिवर्तन (डर, चिंता)</li>
                      <li>• 1-2 मिनट तक</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">2. Focal Impaired Awareness (Complex Partial)</h4>
                    <Badge className="mb-2 bg-purple-500">चेतना प्रभावित</Badge>
                    <ul className="space-y-1 text-sm text-gray-700 ml-4">
                      <li>• भटकाव या असमंजस</li>
                      <li>• बार-बार एक ही गतिविधि (होंठ चाटना, हाथ रगड़ना)</li>
                      <li>• प्रतिक्रिया न देना</li>
                      <li>• 1-2 मिनट तक</li>
                    </ul>
                  </div>
                  <Alert className="bg-blue-50 border-blue-200">
                    <AlertDescription className="text-sm">
                      <strong>नोट:</strong> Focal seizures कभी-कभी Generalized seizures में बदल सकते हैं
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-6 h-6 text-purple-600" />
                    Generalized Seizures (सामान्यीकृत दौरे)
                  </CardTitle>
                  <CardDescription>पूरे मस्तिष्क को प्रभावित करने वाले दौरे</CardDescription>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div>
                    <h4 className="font-semibold text-purple-700 mb-2">1. Tonic-Clonic (Grand Mal)</h4>
                    <Badge className="mb-2 bg-red-500">सबसे गंभीर</Badge>
                    <ul className="space-y-1 text-sm text-gray-700 ml-4">
                      <li>• शरीर में अकड़न (Tonic phase)</li>
                      <li>• तेज़ झटके (Clonic phase)</li>
                      <li>• चेतना की पूर्ण हानि</li>
                      <li>• मूत्राशय नियंत्रण खोना</li>
                      <li>• 1-3 मिनट तक</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-700 mb-2">2. Absence Seizures (Petit Mal)</h4>
                    <Badge className="mb-2 bg-yellow-500">बच्चों में आम</Badge>
                    <ul className="space-y-1 text-sm text-gray-700 ml-4">
                      <li>• टकटकी लगाना (blank stare)</li>
                      <li>• आंखें झपकाना</li>
                      <li>• कुछ सेकंड के लिए</li>
                      <li>• दिन में कई बार हो सकता है</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-700 mb-2">3. Myoclonic Seizures</h4>
                    <ul className="space-y-1 text-sm text-gray-700 ml-4">
                      <li>• अचानक झटके (jerks)</li>
                      <li>• आमतौर पर बाहों और पैरों में</li>
                      <li>• बहुत छोटी अवधि</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-700 mb-2">4. Atonic Seizures (Drop Attacks)</h4>
                    <ul className="space-y-1 text-sm text-gray-700 ml-4">
                      <li>• मांसपेशियों का अचानक नियंत्रण खोना</li>
                      <li>• गिरना या ढहना</li>
                      <li>• चोट लगने का जोखिम</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-lg bg-gradient-to-r from-amber-50 to-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                  विशेष प्रकार की मिर्गी
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold text-orange-700 mb-2">Juvenile Myoclonic Epilepsy</h4>
                    <p className="text-sm text-gray-700">किशोरावस्था में शुरू, सुबह के झटके</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold text-orange-700 mb-2">Temporal Lobe Epilepsy</h4>
                    <p className="text-sm text-gray-700">सबसे आम फोकल मिर्गी, Aura के साथ</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold text-orange-700 mb-2">Lennox-Gastaut Syndrome</h4>
                    <p className="text-sm text-gray-700">बचपन में, कई प्रकार के दौरे, कठिन इलाज</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Symptoms Tab */}
          <TabsContent value="symptoms" className="space-y-6">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-rose-100 to-pink-100">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Zap className="w-7 h-7 text-rose-600" />
                  दौरे के लक्षण
                </CardTitle>
                <CardDescription>लक्षण दौरे के प्रकार पर निर्भर करते हैं</CardDescription>
              </CardHeader>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="shadow-lg border-t-4 border-yellow-500">
                <CardHeader className="bg-yellow-50">
                  <CardTitle className="flex items-center gap-2 text-yellow-700">
                    <Clock className="w-5 h-5" />
                    दौरे से पहले (Aura/Warning)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span>असामान्य गंध या स्वाद महसूस होना</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span>दृश्य परिवर्तन (रोशनी, रंग)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span>अचानक डर या चिंता</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span>पेट में अजीब सी अनुभूति</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span>Déjà vu की भावना</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-t-4 border-red-500">
                <CardHeader className="bg-red-50">
                  <CardTitle className="flex items-center gap-2 text-red-700">
                    <Zap className="w-5 h-5" />
                    दौरे के दौरान
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>अचानक गिरना या चेतना खोना</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>शरीर में अकड़न और झटके</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>असामान्य हलचल (चबाना, होंठ चाटना)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>भटकाव या घूरना</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>मूत्राशय या आंत्र नियंत्रण खोना</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>जीभ काटना</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-t-4 border-purple-500">
                <CardHeader className="bg-purple-50">
                  <CardTitle className="flex items-center gap-2 text-purple-700">
                    <Activity className="w-5 h-5" />
                    दौरे के बाद (Postictal)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>अत्यधिक थकान और नींद</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>सिरदर्द या मांसपेशियों में दर्द</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>कमजोरी (अस्थायी पक्षाघात हो सकता है)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>दौरे की कोई याद नहीं</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>मूड में बदलाव</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Alert className="bg-red-50 border-red-300 border-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <AlertTitle className="text-red-800 font-bold">तुरंत चिकित्सा सहायता लें अगर:</AlertTitle>
              <AlertDescription>
                <ul className="mt-2 space-y-1 text-red-700">
                  <li>• दौरा 5 मिनट से अधिक समय तक चले</li>
                  <li>• एक के बाद एक दौरे आएं (Status Epilepticus)</li>
                  <li>• दौरे के बाद सांस लेने में कठिनाई</li>
                  <li>• दौरे के दौरान चोट लगे</li>
                  <li>• गर्भवती महिला को दौरा पड़े</li>
                  <li>• मधुमेह या हृदय रोग वाले व्यक्ति को दौरा पड़े</li>
                  <li>• पहली बार दौरा पड़ा हो</li>
                </ul>
              </AlertDescription>
            </Alert>

            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                <CardTitle>अन्य संबंधित लक्षण</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-700 mb-2">संज्ञानात्मक लक्षण</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• याददाश्त की समस्याएं</li>
                      <li>• ध्यान केंद्रित करने में कठिनाई</li>
                      <li>• सीखने में समस्याएं</li>
                      <li>• भाषा की कठिनाइयां</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                    <h4 className="font-bold text-purple-700 mb-2">मनोवैज्ञानिक लक्षण</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• अवसाद और चिंता</li>
                      <li>• मूड स्विंग्स</li>
                      <li>• सामाजिक अलगाव</li>
                      <li>• आत्मसम्मान में कमी</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Causes Tab */}
          <TabsContent value="causes" className="space-y-6">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-orange-100 to-red-100">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <AlertTriangle className="w-7 h-7 text-orange-600" />
                  मिर्गी के कारण
                </CardTitle>
                <CardDescription>लगभग 50% मामलों में कारण अज्ञात रहता है</CardDescription>
              </CardHeader>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-6 h-6 text-blue-600" />
                    संरचनात्मक कारण
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Badge className="bg-blue-500 mt-1">1</Badge>
                      <div>
                        <h4 className="font-semibold">सिर की चोट (Head Trauma)</h4>
                        <p className="text-sm text-gray-600">दुर्घटना, गिरना, खेल की चोट</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge className="bg-blue-500 mt-1">2</Badge>
                      <div>
                        <h4 className="font-semibold">मस्तिष्क ट्यूमर (Brain Tumor)</h4>
                        <p className="text-sm text-gray-600">सौम्य या घातक वृद्धि</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge className="bg-blue-500 mt-1">3</Badge>
                      <div>
                        <h4 className="font-semibold">स्ट्रोक (Stroke)</h4>
                        <p className="text-sm text-gray-600">35+ उम्र में मिर्गी का प्रमुख कारण</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge className="bg-blue-500 mt-1">4</Badge>
                      <div>
                        <h4 className="font-semibold">मस्तिष्क संक्रमण</h4>
                        <p className="text-sm text-gray-600">मेनिनजाइटिस, एन्सेफलाइटिस, सिस्टीसर्कोसिस</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge className="bg-blue-500 mt-1">5</Badge>
                      <div>
                        <h4 className="font-semibold">मस्तिष्क विकास संबंधी विकार</h4>
                        <p className="text-sm text-gray-600">जन्म के समय से मौजूद असामान्यताएं</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-6 h-6 text-purple-600" />
                    आनुवंशिक और अन्य कारण
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Badge className="bg-purple-500 mt-1">1</Badge>
                      <div>
                        <h4 className="font-semibold">आनुवंशिक कारक</h4>
                        <p className="text-sm text-gray-600">परिवार में मिर्गी का इतिहास</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge className="bg-purple-500 mt-1">2</Badge>
                      <div>
                        <h4 className="font-semibold">जन्म से पहले की चोट</h4>
                        <p className="text-sm text-gray-600">मां को संक्रमण, कुपोषण, ऑक्सीजन की कमी</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge className="bg-purple-500 mt-1">3</Badge>
                      <div>
                        <h4 className="font-semibold">जन्म के समय जटिलताएं</h4>
                        <p className="text-sm text-gray-600">ऑक्सीजन की कमी, कठिन प्रसव</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge className="bg-purple-500 mt-1">4</Badge>
                      <div>
                        <h4 className="font-semibold">चयापचय संबंधी विकार</h4>
                        <p className="text-sm text-gray-600">सोडियम, ग्लूकोज का असंतुलन</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge className="bg-purple-500 mt-1">5</Badge>
                      <div>
                        <h4 className="font-semibold">अल्जाइमर रोग</h4>
                        <p className="text-sm text-gray-600">वृद्ध लोगों में</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-lg bg-gradient-to-r from-amber-50 to-yellow-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-amber-600" />
                  दौरे के ट्रिगर्स (Seizure Triggers)
                </CardTitle>
                <CardDescription>ये कारक मिर्गी पैदा नहीं करते, लेकिन दौरे को trigger कर सकते हैं</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow border-l-4 border-amber-500">
                    <h4 className="font-bold text-amber-700 mb-2">जीवनशैली</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• नींद की कमी</li>
                      <li>• तनाव</li>
                      <li>• शराब या नशीली दवाओं का उपयोग</li>
                      <li>• भोजन छोड़ना</li>
                      <li>• निर्जलीकरण</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow border-l-4 border-orange-500">
                    <h4 className="font-bold text-orange-700 mb-2">पर्यावरणीय</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• टिमटिमाती रोशनी</li>
                      <li>• तेज आवाज</li>
                      <li>• अधिक गर्मी</li>
                      <li>• बुखार</li>
                      <li>• हार्मोनल परिवर्तन</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow border-l-4 border-red-500">
                    <h4 className="font-bold text-red-700 mb-2">चिकित्सीय</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• दवा छोड़ना या बदलना</li>
                      <li>• बीमारी या संक्रमण</li>
                      <li>• कुछ दवाएं</li>
                      <li>• मासिक धर्म चक्र</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Alert className="bg-green-50 border-green-300">
              <Shield className="h-5 w-5 text-green-600" />
              <AlertTitle className="text-green-800">महत्वपूर्ण</AlertTitle>
              <AlertDescription className="text-green-700">
                अपने ट्रिगर्स को पहचानने और उनसे बचने के लिए एक <strong>Seizure Diary</strong> रखें। इससे डॉक्टर को भी उपचार में मदद मिलेगी।
              </AlertDescription>
            </Alert>
          </TabsContent>

          {/* Diagnosis Tab */}
          <TabsContent value="diagnosis" className="space-y-6">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-teal-100 to-cyan-100">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Stethoscope className="w-7 h-7 text-teal-600" />
                  निदान और परीक्षण
                </CardTitle>
                <CardDescription>मिर्गी का निदान कैसे किया जाता है</CardDescription>
              </CardHeader>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                    चिकित्सा इतिहास और परीक्षण
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">1. विस्तृत इतिहास</h4>
                    <ul className="space-y-1 text-sm text-gray-700 ml-4">
                      <li>• दौरों का विवरण (कब, कैसे, कितनी बार)</li>
                      <li>• परिवार में मिर्गी का इतिहास</li>
                      <li>• सिर की चोट, संक्रमण, जन्म संबंधी समस्याएं</li>
                      <li>• वर्तमान दवाएं और स्वास्थ्य स्थिति</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">2. न्यूरोलॉजिकल परीक्षण</h4>
                    <ul className="space-y-1 text-sm text-gray-700 ml-4">
                      <li>• प्रतिवर्त (Reflexes) की जांच</li>
                      <li>• मांसपेशियों की टोन और ताकत</li>
                      <li>• संवेदना और समन्वय</li>
                      <li>• मानसिक स्थिति और व्यवहार</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">3. रक्त परीक्षण</h4>
                    <ul className="space-y-1 text-sm text-gray-700 ml-4">
                      <li>• संक्रमण की जांच</li>
                      <li>• रक्त शर्करा और इलेक्ट्रोलाइट्स</li>
                      <li>• लीवर और किडनी फंक्शन</li>
                      <li>• आनुवंशिक परीक्षण (यदि आवश्यक हो)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-6 h-6 text-purple-600" />
                    उन्नत परीक्षण
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-800 mb-2 flex items-center gap-2">
                      <Activity className="w-5 h-5" />
                      EEG (Electroencephalogram)
                    </h4>
                    <Badge className="mb-2 bg-purple-600">सबसे महत्वपूर्ण परीक्षण</Badge>
                    <ul className="space-y-1 text-sm text-gray-700 mt-2">
                      <li>• मस्तिष्क की विद्युत गतिविधि रिकॉर्ड करता है</li>
                      <li>• असामान्य पैटर्न दिखाता है</li>
                      <li>• 20-40 मिनट का परीक्षण</li>
                      <li>• Video EEG monitoring (24-48 घंटे)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-700 mb-2">MRI (Magnetic Resonance Imaging)</h4>
                    <ul className="space-y-1 text-sm text-gray-700 ml-4">
                      <li>• मस्तिष्क की विस्तृत तस्वीरें</li>
                      <li>• ट्यूमर, स्कार, विकृतियां दिखाता है</li>
                      <li>• सबसे स्पष्ट इमेजिंग</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-700 mb-2">CT Scan (Computed Tomography)</h4>
                    <ul className="space-y-1 text-sm text-gray-700 ml-4">
                      <li>• तुरंत आपातकालीन स्थिति में</li>
                      <li>• रक्तस्राव, ट्यूमर दिखाता है</li>
                      <li>• तेज़ और आसानी से उपलब्ध</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-700 mb-2">PET Scan</h4>
                    <ul className="space-y-1 text-sm text-gray-700 ml-4">
                      <li>• मस्तिष्क की चयापचय गतिविधि</li>
                      <li>• सर्जरी से पहले उपयोगी</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-lg bg-gradient-to-r from-green-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-green-600" />
                  निदान के मानदंड
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-700 mb-4">मिर्गी का निदान आमतौर पर तब किया जाता है जब:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-bold text-green-700 mb-2">विकल्प 1</h4>
                    <p className="text-sm text-gray-700">
                      कम से कम <strong>दो unprovoked seizures</strong> हुए हों, जो 24 घंटे से अधिक समय के अंतराल पर हुए हों
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-bold text-green-700 mb-2">विकल्प 2</h4>
                    <p className="text-sm text-gray-700">
                      एक unprovoked seizure और अगले 10 वर्षों में दूसरे दौरे की संभावना <strong>60% से अधिक</strong> हो
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Treatment Tab */}
          <TabsContent value="treatment" className="space-y-6">
            <Alert className="bg-red-50 border-red-300 border-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <AlertTitle className="text-red-800 font-bold">महत्वपूर्ण चेतावनी</AlertTitle>
              <AlertDescription className="text-red-700">
                सभी दवाएं केवल डॉक्टर के परामर्श और निगरानी में लें। अपनी दवा कभी अचानक बंद न करें - इससे गंभीर दौरे पड़ सकते हैं।
              </AlertDescription>
            </Alert>

            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-100 to-purple-100">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Pill className="w-7 h-7 text-blue-600" />
                  उपचार के विकल्प
                </CardTitle>
                <CardDescription>70% लोगों में दवाओं से दौरे नियंत्रित हो जाते हैं</CardDescription>
              </CardHeader>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                  <CardTitle className="flex items-center gap-2">
                    <Pill className="w-6 h-6 text-blue-600" />
                    Anti-Epileptic Drugs (AEDs)
                  </CardTitle>
                  <CardDescription>मुख्य उपचार</CardDescription>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div>
                    <Badge className="mb-2 bg-blue-600">पुरानी दवाएं (First Generation)</Badge>
                    <ul className="space-y-1 text-sm text-gray-700 ml-4 mt-2">
                      <li>• <strong>Phenytoin (Eptoin)</strong> - Generalized & Focal</li>
                      <li>• <strong>Carbamazepine (Tegretol)</strong> - Focal seizures</li>
                      <li>• <strong>Valproate (Valprol)</strong> - सभी प्रकार के दौरे</li>
                      <li>• <strong>Phenobarbitone</strong> - पुरानी, सस्ती</li>
                    </ul>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-purple-600">नई दवाएं (Newer Generation)</Badge>
                    <ul className="space-y-1 text-sm text-gray-700 ml-4 mt-2">
                      <li>• <strong>Levetiracetam (Keppra)</strong> - कम side effects</li>
                      <li>• <strong>Lamotrigine (Lamictal)</strong> - सुरक्षित</li>
                      <li>• <strong>Topiramate (Topamax)</strong> - Migraine में भी</li>
                      <li>• <strong>Lacosamide (Vimpat)</strong> - Focal seizures</li>
                      <li>• <strong>Oxcarbazepine (Trileptal)</strong></li>
                      <li>• <strong>Zonisamide</strong></li>
                    </ul>
                  </div>
                  <Alert className="bg-yellow-50 border-yellow-300">
                    <AlertDescription className="text-sm text-yellow-800">
                      <strong>नोट:</strong> दवा का चुनाव seizure type, उम्र, लिंग, अन्य स्वास्थ्य स्थितियों पर निर्भर करता है
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-6 h-6 text-purple-600" />
                    दवाओं के साइड इफेक्ट्स
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div>
                    <h4 className="font-semibold text-purple-700 mb-2">सामान्य साइड इफेक्ट्स</h4>
                    <ul className="space-y-1 text-sm text-gray-700 ml-4">
                      <li>• थकान और चक्कर आना</li>
                      <li>• वजन बढ़ना या घटना</li>
                      <li>• त्वचा पर दाने (रैश)</li>
                      <li>• मतली और उल्टी</li>
                      <li>• सिरदर्द</li>
                      <li>• भटकाव या ध्यान केंद्रित करने में कठिनाई</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-700 mb-2">गंभीर साइड इफेक्ट्स (तुरंत डॉक्टर को बताएं)</h4>
                    <ul className="space-y-1 text-sm text-gray-700 ml-4">
                      <li>• गंभीर त्वचा प्रतिक्रिया (Stevens-Johnson syndrome)</li>
                      <li>• लीवर या किडनी की समस्याएं</li>
                      <li>• रक्त कोशिकाओं में कमी</li>
                      <li>• आत्मघाती विचार</li>
                      <li>• गंभीर एलर्जी प्रतिक्रिया</li>
                    </ul>
                  </div>
                 <Alert className="bg-red-50 border-red-300">
  <AlertTriangle className="h-4 w-4 text-red-600" />
  <AlertDescription className="text-sm text-red-700">
    <ul className="space-y-1">
      <li className="flex items-start gap-2">
        <span className="text-red-600 mt-1">•</span>
        <span>
          गर्भवती महिला में दवा का उपयोग विशेष सावधानी के साथ किया जाना चाहिए।
        </span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-red-600 mt-1">•</span>
        <span>
          अत्यधिक भ्रम और असमंजस, जो कई मिनटों से लेकर घंटों तक रह सकता है।
        </span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-red-600 mt-1">•</span>
        <span>
          अचानक व्यवहार में बदलाव या आत्मघाती विचार दिखाई दें।
        </span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-red-600 mt-1">•</span>
        <span>
          त्वचा पर गंभीर रैश, बुखार या चेहरे/होंठों में सूजन।
        </span>
      </li>
    </ul>
  </AlertDescription>
</Alert>
