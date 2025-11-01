import { Quote, QuoteCategory } from '../types';

export const quotes: Record<QuoteCategory, Quote[]> = {
  [QuoteCategory.Focus]: [
    { text: "योगश्चित्तवृत्तिनिरोधः।", translation: "योग चित्त की वृत्तियों का निरोध है।", source: "Yoga Sutras 1.2", category: QuoteCategory.Focus },
    { text: "अभ्यासवैराग्याभ्यां तन्निरोधः।", translation: "अभ्यास और वैराग्य से उन वृत्तियों का निरोध होता है।", source: "Yoga Sutras 1.12", category: QuoteCategory.Focus },
    { text: "यदा संहरते चायं कूर्मोऽङ्गानीव सर्वशः। इन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता॥", translation: "जिस प्रकार कछुआ सब ओर से अपने अंगों को समेट लेता है, वैसे ही जब यह पुरुष इन्द्रियों के विषयों से इन्द्रियों को सब प्रकार से हटा लेता है, तब उसकी बुद्धि स्थिर है।", source: "Bhagavad Gita 2.58", category: QuoteCategory.Focus },
    { text: "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम्। ततस्ततो नियम्यैतदात्मन्येव वशं नयेत्॥", translation: "यह स्थिर न रहने वाला और चंचल मन जिन-जिन विषयों के निमित्त से संसार में विचरता है, उन-उन विषयों से रोककर इसे बार-बार परमात्मा में ही निरुद्ध करे।", source: "Bhagavad Gita 6.26", category: QuoteCategory.Focus },
    { text: "मनः प्रसादः सौम्यत्वं मौनमात्मविनिग्रहः। भावसंशुद्धिरित्येतत्तपो मानसमुच्यते॥", translation: "मन की प्रसन्नता, शान्त भाव, मन का निग्रह और भावों की शुद्धि, इस प्रकार यह मन-सम्बन्धी तप कहा जाता है।", source: "Bhagavad Gita 17.16", category: QuoteCategory.Focus },
    { text: "इन्द्रियाणां हि चरतां यन्मनोऽनुविधीयते। तदस्य हरति प्रज्ञां वायुर्नावमिवाम्भसि॥", translation: "विषयों में विचरती हुई इन्द्रियों में से मन जिस इन्द्रिय के साथ रहता है, वह एक ही इन्द्रिय इस पुरुष की बुद्धि को हर लेती है, जैसे वायु जल में नाव को हर लेती है।", source: "Bhagavad Gita 2.67", category: QuoteCategory.Focus },
  ],
  [QuoteCategory.Determination]: [
    { text: "उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः। न हि सुप्तस्य सिंहस्य प्रविशन्ति मुखे मृगाः॥", translation: "कार्य उद्यम से ही सिद्ध होते हैं, केवल मनोरथ करने से नहीं। सोये हुए सिंह के मुख में मृग स्वयं प्रवेश नहीं करते।", source: "Hitopadesha", category: QuoteCategory.Determination },
    { text: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥", translation: "कर्म करने में ही तेरा अधिकार है, उसके फलों में कभी नहीं। इसलिए तू कर्मों के फल का हेतु मत हो और कर्म न करने में भी तेरी आसक्ति न हो।", source: "Bhagavad Gita 2.47", category: QuoteCategory.Determination },
    { text: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्। आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥", translation: "अपने द्वारा अपना उद्धार करे, अपना पतन न करे, क्योंकि आप ही अपना मित्र है और आप ही अपना शत्रु है।", source: "Bhagavad Gita 6.5", category: QuoteCategory.Determination },
    { text: "निश्चित्य यः प्रक्रमते नान्तर्वसति कर्मणः। अवन्ध्यकालो वश्यात्मा स वै पण्डित उच्यते॥", translation: "जो किसी कार्य का निश्चय करके उसे आरम्भ करता है और बीच में नहीं रुकता, वही पण्डित कहलाता है।", source: "Vidura Niti", category: QuoteCategory.Determination },
    { text: "उत्साहसम्पन्नमदीर्घसूत्रं क्रियाविधिज्ञं व्यसनेष्वसक्तम्। शूरं कृतज्ञं दृढसौहृदं च लक्ष्मीः स्वयं याति निवासहेतोः॥", translation: "जो उत्साही हो, आलसी न हो, कार्य करने की विधि जानता हो, व्यसनों में आसक्त न हो, शूरवीर, कृतज्ञ और पक्का मित्र हो, लक्ष्मी स्वयं उसके पास निवास करने आती है।", source: "Chanakya Niti", category: QuoteCategory.Determination },
    { text: "दैवं दैवमिति कापुरुषा वदन्ति।", translation: "भाग्य, भाग्य ऐसा कायर पुरुष कहते हैं।", source: "Subhashita", category: QuoteCategory.Determination },
  ],
  [QuoteCategory.Buddhi]: [
    { text: "व्यवसायात्मिका बुद्धिरेकेह कुरुनन्दन। बहुशाखा ह्यनन्ताश्च बुद्धयोऽव्यवसायिनाम्॥", translation: "इस कर्मयोग में निश्चयात्मिका बुद्धि एक ही होती है, किन्तु अस्थिर विचार वाले विवेकहीन मनुष्यों की बुद्धियाँ निश्चय ही बहुत भेदों वाली और अनन्त होती हैं।", source: "Bhagavad Gita 2.41", category: QuoteCategory.Buddhi },
    { text: "बुद्धियुक्तो जहातीह उभे सुकृतदुष्कृते। तस्माद्योगाय युज्यस्व योगः कर्मसु कौशलम्॥", translation: "समबुद्धि पुरुष पुण्य और पाप दोनों को इसी लोक में त्याग देता है, इसलिए तू समत्वरूप योग में लग जा, यह योग ही कर्मों में कुशलता है।", source: "Bhagavad Gita 2.50", category: QuoteCategory.Buddhi },
    { text: "बुद्धिर्यस्य बलं तस्य निर्बुद्धेस्तु कुतो बलम्।", translation: "जिसके पास बुद्धि है, उसी के पास बल है। बुद्धिहीन के पास बल कहाँ?", source: "Panchatantra", category: QuoteCategory.Buddhi },
    { text: "यस्य नास्ति स्वयं प्रज्ञा शास्त्रं तस्य करोति किम्। लोचनाभ्यां विहीनस्य दर्पणः किं करिष्यति॥", translation: "जिसके पास स्वयं की बुद्धि नहीं है, शास्त्र उसका क्या करेगा? आँखों से हीन व्यक्ति के लिए दर्पण क्या कर सकता है?", source: "Subhashita", category: QuoteCategory.Buddhi },
    { text: "सुखदुःखे समे कृत्वा लाभालाभौ जयाजयौ। ततो युद्धाय युज्यस्व नैवं पापमवाप्स्यसि॥", translation: "सुख-दुःख, लाभ-हानि और जय-पराजय को समान समझकर, उसके बाद युद्ध के लिये तैयार हो जा, इस प्रकार युद्ध करने से तू पाप को नहीं प्राप्त होगा।", source: "Bhagavad Gita 2.38", category: QuoteCategory.Buddhi },
    { text: "मन एव मनुष्याणां कारणं बन्धमोक्षयोः।", translation: "मन ही मनुष्यों के बन्धन और मोक्ष का कारण है।", source: "Amrita Bindu Upanishad", category: QuoteCategory.Buddhi },
  ],
  [QuoteCategory.Vidya]: [
    { text: "विद्या ददाति विनयं विनयाद्याति पात्रताम्। पात्रत्वाद्धनमाप्नोति धनाद्धर्मं ततः सुखम्॥", translation: "विद्या विनय देती है, विनय से पात्रता आती है, पात्रता से धन, धन से धर्म और फिर सुख आता है।", source: "Hitopadesha", category: QuoteCategory.Vidya },
    { text: "अपूर्वः कोऽपि कोशोऽयं विद्यते तव भारति। व्ययतो वृद्धिमायाति क्षयमायाति सञ्चयात्॥", translation: "हे माँ सरस्वती! आपका यह विद्या का खजाना अपूर्व है, जो खर्च करने पर बढ़ता है और संचय करने पर घटता है।", source: "Subhashita", category: QuoteCategory.Vidya },
    { text: "विद्यां चाविद्यां च यस्तद्वेदोभयं सह। अविद्यया मृत्युं तीर्त्वा विद्ययामृतमश्नुते॥", translation: "जो विद्या और अविद्या, इन दोनों को साथ-साथ जानता है, वह अविद्या से मृत्यु को पार करके विद्या से अमरत्व को प्राप्त करता है।", source: "Isha Upanishad 11", category: QuoteCategory.Vidya },
    { text: "काकचेष्टा बकोध्यानं श्वाननिद्रा तथैव च। अल्पाहारी गृहत्यागी विद्यार्थी पञ्चलक्षणम्॥", translation: "कौवे जैसी चेष्टा, बगुले जैसा ध्यान, कुत्ते जैसी नींद, कम भोजन करने वाला और गृह-त्यागी, ये विद्यार्थी के पाँच लक्षण हैं।", source: "Chanakya Niti", category: QuoteCategory.Vidya },
    { text: "न चोरहार्यं न च राजहार्यं न भ्रातृभाज्यं न च भारकारि। व्यये कृते वर्धत एव नित्यं विद्याधनं सर्वधनप्रधानम्॥", translation: "न चोर चुरा सकता है, न राजा छीन सकता है, न भाई बाँट सकता है और न यह भारी है। खर्च करने पर यह नित्य बढ़ता है, इसलिए विद्या-धन सभी धनों में प्रधान है।", source: "Niti Shatakam", category: QuoteCategory.Vidya },
  ],
  [QuoteCategory.Gyan]: [
    { text: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते।", translation: "इस संसार में ज्ञान के समान पवित्र करने वाला निःसंदेह कुछ भी नहीं है।", source: "Bhagavad Gita 4.38", category: QuoteCategory.Gyan },
    { text: "तत्त्वमसि।", translation: "वह (ब्रह्म) तुम हो।", source: "Chandogya Upanishad", category: QuoteCategory.Gyan },
    { text: "अहं ब्रह्मास्मि।", translation: "मैं ब्रह्म हूँ।", source: "Brihadaranyaka Upanishad", category: QuoteCategory.Gyan },
    { text: "प्रज्ञानं ब्रह्म।", translation: "प्रज्ञान (शुद्ध चेतना) ही ब्रह्म है।", source: "Aitareya Upanishad", category: QuoteCategory.Gyan },
    { text: "अयमात्मा ब्रह्म।", translation: "यह आत्मा ब्रह्म है।", source: "Mandukya Upanishad", category: QuoteCategory.Gyan },
    { text: "अज्ञश्चाश्रद्दधानश्च संशयात्मा विनश्यति। नायं लोकोऽस्ति न परो न सुखं संशयात्मनः॥", translation: "विवेकहीन, श्रद्धारहित और संशययुक्त मनुष्य परमार्थ से अवश्य भ्रष्ट हो जाता है। ऐसे संशययुक्त मनुष्य के लिए न यह लोक है, न परलोक है और न सुख ही है।", source: "Bhagavad Gita 4.40", category: QuoteCategory.Gyan },
  ],
  [QuoteCategory.GyanForStudent]: [
    { text: "श्रद्धावान् लभते ज्ञानं तत्परः संयतेन्द्रियः। ज्ञानं लब्ध्वा परां शान्तिमचिरेणाधिगच्छति॥", translation: "जो श्रद्धावान, तत्पर और जितेन्द्रिय है, वही ज्ञान को प्राप्त करता है और ज्ञान को प्राप्त कर शीघ्र ही परम शान्ति को पाता है।", source: "Bhagavad Gita 4.39", category: QuoteCategory.GyanForStudent },
    { text: "सुखार्थिनः कुतो विद्या नास्ति विद्यार्थिनः सुखम्। सुखार्थी वा त्यजेद्विद्यां विद्यार्थी वा त्यजेत्सुखम्॥", translation: "सुख चाहने वाले को विद्या कहाँ? और विद्या चाहने वाले को सुख कहाँ? सुख चाहने वाले को विद्या छोड़ देनी चाहिए और विद्या चाहने वाले को सुख छोड़ देना चाहिए।", source: "Chanakya Niti", category: QuoteCategory.GyanForStudent },
    { text: "आचार्य देवो भव।", translation: "आचार्य को देवता के समान समझो।", source: "Taittiriya Upanishad", category: QuoteCategory.GyanForStudent },
    { text: "मातृ देवो भव, पितृ देवो भव।", translation: "माता को देवता समझो, पिता को देवता समझो।", source: "Taittiriya Upanishad", category: QuoteCategory.GyanForStudent },
    { text: "सत्यं वद, धर्मं चर। स्वाध्यायान्मा प्रमदः।", translation: "सत्य बोलो, धर्म का आचरण करो। स्वाध्याय (अध्ययन) में आलस्य मत करो।", source: "Taittiriya Upanishad", category: QuoteCategory.GyanForStudent },
    { text: "क्षणशः कणशश्चैव विद्यामर्थं च साधयेत्। क्षणे नष्टे कुतो विद्या कणे नष्टे कुतो धनम्॥", translation: "एक-एक क्षण और एक-एक कण का उपयोग करके विद्या और धन का संचय करना चाहिए। क्षण नष्ट होने पर विद्या कहाँ और कण नष्ट होने पर धन कहाँ?", source: "Rishi Kanad", category: QuoteCategory.GyanForStudent },
  ],
};

export const allQuotes: Quote[] = Object.values(quotes).flat();
