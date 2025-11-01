import { Quote, QuoteCategory } from '../types';

export const quotes: Record<QuoteCategory, Quote[]> = {
  [QuoteCategory.Concentration]: [
    { text: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।", translation: "हे धनञ्जय! तू आसक्ति को त्यागकर तथा सिद्धि और असिद्धि में समान बुद्धिवाला होकर योग में स्थित हुआ कर्तव्यकर्मों को कर।", source: "Bhagavad Gita 2.48", category: QuoteCategory.Concentration },
    { text: "बुद्धियुक्तो जहातीह उभे सुकृतदुष्कृते।", translation: "समबुद्धि पुरुष पुण्य और पाप दोनों को इसी लोक में त्याग देता है अर्थात उनसे मुक्त हो जाता है।", source: "Bhagavad Gita 2.50", category: QuoteCategory.Concentration },
    { text: "यदा संहरते चायं कूर्मोऽङ्गानीव सर्वशः। इन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता॥", translation: "जिस प्रकार कछुआ सब ओर से अपने अंगों को समेट लेता है, वैसे ही जब यह पुरुष इन्द्रियों के विषयों से इन्द्रियों को सब प्रकार से हटा लेता है, तब उसकी बुद्धि स्थिर है (ऐसा समझना चाहिए)।", source: "Bhagavad Gita 2.58", category: QuoteCategory.Concentration },
  ],
  [QuoteCategory.Knowledge]: [
    { text: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते।", translation: "इस संसार में ज्ञान के समान पवित्र करने वाला निःसंदेह कुछ भी नहीं है।", source: "Bhagavad Gita 4.38", category: QuoteCategory.Knowledge },
    { text: "श्रद्धावान्ल्लभते ज्ञानं तत्परः संयतेन्द्रियः।", translation: "जो जितेन्द्रिय, साधनपरायण और শ্রদ্ধायुक्त है, वही ज्ञानको प्राप्त होता है।", source: "Bhagavad Gita 4.39", category: QuoteCategory.Knowledge },
    { text: "अज्ञश्चाश्रद्दधानश्च संशयात्मा विनश्यति।", translation: "विवेकहीन और श्रद्धारहित संशययुक्त मनुष्य परमार्थ से अवश्य भ्रष्ट हो जाता है।", source: "Bhagavad Gita 4.40", category: QuoteCategory.Knowledge },
  ],
  [QuoteCategory.Perseverance]: [
    { text: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।", translation: "अपने द्वारा अपना उद्धार करे, अपना पतन न करे।", source: "Bhagavad Gita 6.5", category: QuoteCategory.Perseverance },
    { text: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।", translation: "कर्म करने में ही तेरा अधिकार है, उसके फलों में कभी नहीं।", source: "Bhagavad Gita 2.47", category: QuoteCategory.Perseverance },
    { text: "असफलता सफलता की सीढ़ी है।", translation: "असफलता सफलता की सीढ़ी है।", source: "Vedic Wisdom", category: QuoteCategory.Perseverance },
  ],
  [QuoteCategory.MentalStrength]: [
    { text: "नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः।", translation: "इस आत्मा को शस्त्र नहीं काट सकते, इसको आग नहीं जला सकती।", source: "Bhagavad Gita 2.23", category: QuoteCategory.MentalStrength },
    { text: "सुखदुःखे समे कृत्वा लाभालाभौ जयाजयौ।", translation: "सुख-दुःख, लाभ-हानि और जय-पराजय को समान समझकर, उसके बाद युद्ध के लिये तैयार हो जा।", source: "Bhagavad Gita 2.38", category: QuoteCategory.MentalStrength },
    { text: "मन एव मनुष्याणां कारणं बन्धमोक्षयोः।", translation: "मन ही मनुष्यों के बन्धन और मोक्ष का कारण है।", source: "Amrita Bindu Upanishad", category: QuoteCategory.MentalStrength },
  ],
  [QuoteCategory.Dharma]: [
    { text: "यतो धर्मस्ततो जयः।", translation: "जहाँ धर्म है, वहाँ विजय है।", source: "Mahabharata", category: QuoteCategory.Dharma },
    { text: "स्वधर्मे निधनं श्रेयः परधर्मो भयावहः।", translation: "अपने धर्म में मरना भी कल्याणकारक है और दूसरे का धर्म भय को देने वाला है।", source: "Bhagavad Gita 3.35", category: QuoteCategory.Dharma },
    { text: "धर्मो रक्षति रक्षितः।", translation: "जो धर्म की रक्षा करता है, धर्म उसकी रक्षा करता है।", source: "Manu Smriti 8.15", category: QuoteCategory.Dharma },
  ],
  [QuoteCategory.SelfDiscipline]: [
    { text: "क्रोधाद्भवति संमोहः संमोहात्स्मृतिविभ्रमः।", translation: "क्रोध से अत्यन्त मूढ़ भाव उत्पन्न हो जाता है, मूढ़ भाव से स्मृति में भ्रम हो जाता है।", source: "Bhagavad Gita 2.63", category: QuoteCategory.SelfDiscipline },
    { text: "त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः। कामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत्॥", translation: "काम, क्रोध तथा लोभ- यह तीन प्रकार के नरक के द्वार आत्मा का नाश करने वाले हैं, इसलिए इन तीनों को त्याग देना चाहिए।", source: "Bhagavad Gita 16.21", category: QuoteCategory.SelfDiscipline },
    { text: "इन्द्रियाणां हि चरतां यन्मनोऽनुविधीयते।", translation: "क्योंकि जैसे जल में चलने वाली नाव को वायु हर लेती है, वैसे ही विषयों में विचरती हुई इन्द्रियों में से मन जिस इन्द्रिय के साथ रहता है, वह एक ही इन्द्रिय इस पुरुष की बुद्धि को हर लेती है।", source: "Bhagavad Gita 2.67", category: QuoteCategory.SelfDiscipline },
  ],
};

export const allQuotes: Quote[] = Object.values(quotes).flat();