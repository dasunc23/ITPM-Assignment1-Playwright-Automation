const { test, expect } = require('@playwright/test');

const testCases = [
    { 
        id: 'Pos_Fun_0001', 
        input: 'mama dhaen vaeda karanavaa ', 
        expected: 'මම දැන් වැඩ කරනවා' 
    },
    { 
        id: 'Pos_Fun_0002', 
        input: 'oyaata adha dhavasa kohomadha? ', 
        expected: 'ඔයාට අද දවස කොහොමද?' 
    },
    { 
        id: 'Pos_Fun_0003', 
        input: 'machan, adha traffic vaedi nisaa mama gedhara innavaa.', 
        expected: 'මචන්, අද traffic වැඩි නිසා මම ගෙදර ඉන්නවා.' 
    },
    { 
        id: 'Pos_Fun_0004', 
        input: 'vahaama pitavenna', 
        expected: 'වහාම පිටවෙන්න' 
    },
    { 
        id: 'Pos_Fun_0005', 
        input: 'mama gedhara yanavaa,saha passe api kaeema kanavaa', 
        expected: 'මම ගෙදර යනවා,සහ පස්සෙ අපි කෑම කනවා' 
    },
    { 
        id: 'Pos_Fun_0006', 
        input: 'mama kohomadha eheama karanne?', 
        expected: 'මම කොහොමද එහේම කරන්නේ?' 
    },
    { 
        id: 'Pos_Fun_0007', 
        input: 'mama iiyee gamanak giyaa', 
        expected: 'මම ඊයේ ගමනක් ගියා' 
    },
    { 
        id: 'Pos_Fun_0008', 
        input: 'mata peennee naehae othanin move venna', 
        expected: 'මට පේන්නේ නැහැ ඔතනින් move වෙන්න' 
    },
    { 
        id: 'Pos_Fun_0009', 
        input: 'mata documents tika email karanna', 
        expected: 'මට documents ටික email කරන්න' 
    },
    { 
        id: 'Pos_Fun_0010', 
        input: 'eeyi mokakdha oya karannee?', 
        expected: 'ඒයි මොකක්ද ඔය කරන්නේ?' 
    },
    { 
        id: 'Pos_Fun_0011', 
        input: 'heta nivaadu vunath mata office yanna venavaa', 
        expected: 'හෙට නිවාඩු වුනත් මට office යන්න වෙනවා' 
    },
    { 
        id: 'Pos_Fun_0012', 
        input: 'adha udhaesana idhala vaessa godak vaedi nisaa mama hithuvaa adha gedhara idhalaa office vaeda karanna, eeth magee wifi ivara velaa hindhaa zoom meeting ekata inna vidhiyak thibunee naehae. ee nisaa parakku velaa mata vaedata yanna sidhu vunee. namuth manager situation eka theerum gaththa nisaa mata kivuvaa ikmanin reports tika dhenna kiyalaa', 
        expected: 'අද උදැසන ඉදල වැස්ස ගොඩක් වැඩි නිසා මම හිතුවා අද ගෙදර ඉදලා office වැඩ කරන්න, ඒත් මගේ wifi ඉවර වෙලා හින්දා zoom meeting එකට ඉන්න විදියක් තිබුනේ නැහැ. ඒ නිසා පරක්කු වෙලා මට වැඩට යන්න සිදු වුනේ. නමුත් manager situation එක තේරුම් ගත්ත නිසා මට කිවුවා ඉක්මනින් reports ටික දෙන්න කියලා' 
    },
    { 
        id: 'Pos_Fun_0013', 
        input: 'aayuboovan! obathumaa udhaeesanama paemiNiyaata bohoma sthuuthiyi. madha veelavak raedhiisitinna.', 
        expected: 'ආයුබෝවන්!  ඔබතුමා උදෑසනම පැමිණියාට බොහොම ස්තූතියි. මද වේලවක් රැදීසිටින්න.' 
    },
    { 
        id: 'Pos_Fun_0014', 
        input: 'mata assignment eka submit karanna unee naeththee current kaepuva nisaa. mama hithanavaa eekata saaDhaaraNa visadhumak mata laebeyi kiyalaa', 
        expected: 'මට assignment එක submit කරන්න උනේ නැත්තේ current කැපුව නිසා. මම හිතනවා ඒකට සාධාරණ විසදුමක් මට ලැබෙයි කියලා' 
    },
    { 
        id: 'Pos_Fun_0015', 
        input: 'iiLaGa sathiyedhi api aluth project eka patan ganna hadhanavaa, eeka hodhatama karanna api team ekath ekka plan karala inne.', 
        expected: 'ඊළඟ සතියෙදි අපි අලුත් project එක පටන් ගන්න හදනවා, ඒක හොදටම කරන්න අපි team එකත් එක්ක plan කරල ඉන්නේ.' 
    },
    { 
        id: 'Pos_Fun_0016', 
        input: 'pasugiya kaalayedhii mama godak stress vunaa, mokadha vaeda saha igena ganna dheval velaavata manage karanna mata amaru vunaa. ehema vunath magee yaluvoo saha family eka mata support kala nisaa dhaen hodhata hithalaa, saelasum karalaa, avashYA decisions ganna mata puluvan. ', 
        expected: 'පසුගිය කාලයෙදී මම ගොඩක් stress වුනා, මොකද වැඩ සහ ඉගෙන ගන්න දෙවල් වෙලාවට manage කරන්න මට අමරු වුනා. එහෙම වුනත් මගේ යලුවෝ සහ family එක මට support කල නිසා දැන් හොදට හිතලා, සැලසුම් කරලා, අවශ්‍ය decisions ගන්න මට පුලුවන්. ' 
    },
    { 
        id: 'Pos_Fun_0017', 
        input: 'kaalaya madhi vuna nisaa mata adha ee vaedee hariyata karaganna puluvan unee naehae.', 
        expected: 'කාලය මදි වුන නිසා මට අද ඒ වැඩේ හරියට කරගන්න පුලුවන් උනේ නැහැ.' 
    },
    { 
        id: 'Pos_Fun_0018', 
        input: 'api adha shopping karanna gihin aedhum godak gaththaa, bill eka 20000k vunaa.', 
        expected: 'අපි අද shopping කරන්න ගිහින් ඇදුම් ගොඩක් ගත්තා, bill එක 20000ක් වුනා.' 
    },
    { 
        id: 'Pos_Fun_0019', 
        input: 'machan, mee sathi anthayee ground ekee api cricket match ekak gahanna plan karalaa thiyennee. yaaluvoth ekkan anivaaren udhee 8 vedhdhii enna. dhavalta kaeema ekak saha kriidaa upakaraNath aragenama enna.', 
        expected: 'මචන්, මේ සති අන්තයේ ground එකේ අපි cricket match එකක් ගහන්න plan කරලා තියෙන්නේ. යාලුවොත් එක්කන් අනිවාරෙන් උදේ 8 වෙද්දී එන්න. දවල්ට කෑම එකක් සහ ක්‍රීඩා උපකරණත් අරගෙනම එන්න.' 
    },
    { 
        id: 'Pos_Fun_0020', 
        input: 'api ikmanata yamu, naeththam flight eka miss veyi', 
        expected: 'අපි ඉක්මනට යමු, නැත්තම් flight එක miss වෙයි' 
    },
    { 
        id: 'Pos_Fun_0021', 
        input: 'eyaala class ivara velaa film ekak balanna yanavaa kivuvaa', 
        expected: 'එයාල class ඉවර වෙලා film එකක් බලන්න යනවා කිවුවා' 
    },
    { 
        id: 'Pos_Fun_0022', 
        input: 'eyalaa heta enavaa kiyalaa kivvaa', 
        expected: 'එයලා හෙට එනවා කියලා කිව්වා' 
    },
    { 
        id: 'Pos_Fun_0023', 
        input: 'mata match ekata enna vunee naeththee una haedhilaa hitiya nisaa. eeth coach mata text ekak dhaalaa iilaga tharaga valin maava ayin karanavaa kiyalaa', 
        expected: 'මට match එකට එන්න වුනේ නැත්තේ උන හැදිලා හිටිය නිසා. ඒත් coach මට text එකක් දාලා ඊලග තරග වලින් මාව අයින් කරනවා කියලා' 
    },
    { 
        id: 'Pos_Fun_0024', 
        input: 'api mee maasayee anthimata family eka saha yaaluvoth ekka trip ekak plan karalaa thiyennee. namuth adha idhalaa vaessa godak vaedi nisaa api weather report eka balanavaa. ehema vunoth api trip eka postpone karanna thamayi thiiraNaya karannee.  trip eka enjoy karanna nam hodha weather ekak avashYA nisaa hodhama kaalayeedhii trip eka yanna api balaaporoththu venavaa.', 
        expected: 'අපි මේ මාසයේ අන්තිමට family එක සහ යාලුවොත් එක්ක trip එකක් plan කරලා තියෙන්නේ. නමුත් අද ඉදලා වැස්ස ගොඩක් වැඩි නිසා අපි weather report එක බලනවා. එහෙම වුනොත් අපි trip එක postpone කරන්න තමයි තීරණය කරන්නේ.  trip එක enjoy කරන්න නම් හොද weather එකක් අවශ්‍ය නිසා හොදම කාලයේදී trip එක යන්න අපි බලාපොරොත්තු වෙනවා.' 
    },
];

test.describe('SwiftTranslator Positive Functional Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
    });
for (const scenario of testCases) {
        test(`${scenario.id}`, async ({ page }) => {
            const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
            
            await inputArea.click();
            
            // Fix 1: Speed up typing and increase action timeout to 60 seconds
            await inputArea.pressSequentially(scenario.input, { 
                delay: 30, 
                timeout: 60000 
            });

            // Fix 2: Use exact: false to handle invisible character differences
            // Fix 3: Standardize timeout to 30s (more than enough once typed)
            await expect(page.getByText(scenario.expected, { exact: false }))
                .toBeVisible({ timeout: 30000 });
            
            console.log(`PASSED: ${scenario.id}`);
        });
    }
});