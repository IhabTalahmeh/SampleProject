import { Platform, StyleSheet } from 'react-native';
import theme from './theme';
import { I18nManager } from 'react-native';

const itemWidth = '100%';
export const screenWidth = 350;

const isRTL: boolean = I18nManager.isRTL;
export const headerHeight = Platform.OS == 'ios' ? 90 : 60;
export const fixedHeaderHeight = 70;


export const GlobalStyles = StyleSheet.create({
    authTItle: {
        fontSize: 28,
        fontWeight: '700',
        color: theme.colors.black,
    },
    authDesc: {
        fontSize: 18,
        fontWeight: '400',
        color: theme.colors.dark,
    },
    headerIcons3: {
        width: 80,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    // Padding all sides
    p5: { padding: 5 },
    p10: { padding: 10 },
    p15: { padding: 15 },
    p20: { padding: 20 },

    // Padding Vertical
    pv5: { paddingVertical: 5 },
    pv10: { paddingVertical: 10 },
    pv15: { paddingVertical: 15 },
    pv20: { paddingVertical: 20 },

    // Padding Horizontal
    ph5: { paddingHorizontal: 5 },
    ph10: { paddingHorizontal: 10 },
    ph15: { paddingHorizontal: 15 },
    ph20: { paddingHorizontal: 20 },

    // Padding Top
    pt5: { paddingTop: 5 },
    pt10: { paddingTop: 10 },
    pt15: { paddingTop: 15 },
    pt20: { paddingTop: 20 },

    // Padding Bottom
    pb5: { paddingBottom: 5 },
    pb10: { paddingBottom: 10 },
    pb15: { paddingBottom: 15 },
    pb20: { paddingBottom: 20 },

    // Padding Right
    pr5: { paddingRight: 5 },
    pr10: { paddingRight: 10 },
    pr15: { paddingRight: 15 },
    pr20: { paddingRight: 20 },

    // Padding Left
    pl5: { paddingLeft: 5 },
    pl10: { paddingLeft: 10 },
    pl15: { paddingLeft: 15 },
    pl20: { paddingLeft: 20 },

    // Margin all sides
    m5: { margin: 5 },
    m10: { margin: 10 },
    m15: { margin: 15 },
    m20: { margin: 20 },

    // Margin Vertical
    mv5: { marginVertical: 5 },
    mv10: { marginVertical: 10 },
    mv15: { marginVertical: 15 },
    mv20: { marginVertical: 20 },

    // Margin Horizontal
    mh5: { marginHorizontal: 5 },
    mh10: { marginHorizontal: 10 },
    mh15: { marginHorizontal: 15 },
    mh20: { marginHorizontal: 20 },

    // Margin Top
    mt5: { marginTop: 5 },
    mt10: { marginTop: 10 },
    mt15: { marginTop: 15 },
    mt20: { marginTop: 20 },

    // Margin Bottom
    mb5: { marginBottom: 5 },
    mb10: { marginBottom: 10 },
    mb15: { marginBottom: 15 },
    mb20: { marginBottom: 20 },

    // Margin Right
    mr5: { marginRight: 5 },
    mr10: { marginRight: 10 },
    mr15: { marginRight: 15 },
    mr20: { marginRight: 20 },

    // Margin Left
    ml5: { marginLeft: 5 },
    ml10: { marginLeft: 10 },
    ml15: { marginLeft: 15 },
    ml20: { marginLeft: 20 },

    linkText: {
        color: theme.colors.link,
        fontFamily: theme.fonts.roboto.medium,
        fontSize: 16
    },

    settingsNoteText: {
        color: theme.colors.black,
        fontSize: 13,
        fontFamily: theme.fonts.roboto.regular,
        lineHeight: 18,
    },

    full: {
        width: '100%',
        height: '100%',
    },
    
    hashtag: {
        color: theme.colors.hashtag,
        backgroundColor: theme.colors.extraLightPrimary,
    },

    postContent: {
        fontFamily: theme.fonts.roboto.regular,
        fontSize: 16
    },

    inputLabel: {
        fontSize: 16,
        fontFamily: theme.fonts.roboto.regular,
        color: theme.colors.gray,
    },


    primaryButton: {
        backgroundColor: theme.colors.primary,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    primaryButtonText: {
        fontSize: 18,
        color: theme.colors.white,
        fontWeight: '500'
    },
    headerTitle: {
        fontSize: 20,
        color: theme.colors.black,
        fontFamily: theme.fonts.roboto.medium
    },
    asc: {
        alignSelf: 'center',
    },
    ass: {
        alignSelf: 'flex-start',
    },
    ase: {
        alignSelf: 'flex-end',
    },
    followButton: {
        backgroundColor: theme.colors.primary,
        height: 30,
        width: '100%',
        borderRadius: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    followButtonText: {
        color: theme.colors.white,
        fontSize: 14,
        fontFamily: theme.fonts.roboto.medium
    },
    profileMessageButton: {
        backgroundColor: theme.colors.mediumGray,
        height: 30,
        width: '100%',
        borderRadius: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileMessageButtonText: {
        fontSize: 14,
        fontFamily: theme.fonts.roboto.medium,
        color: theme.colors.black
    },







    container: {
        flex: 1,
        fontSize: 50,
    },
    main: {
        width: '90%',
        height: '100%',
    },
    px1: {
        paddingHorizontal: 10,
    },
    flex1: {
        flex: 1,
    },
    itemWidth: {
        width: 320,
    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        fontWeight: '400',
        color: theme.colors.black,
        paddingHorizontal: 18,
        fontSize: 16,
        textAlign: isRTL ? 'right' : 'left',
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: theme.colors.gray,
        height: 60,
    },
    textarea: {
        fontSize: 16,
        textAlignVertical: 'top',
        flex: 1,
        textAlign: isRTL ? 'right' : 'left',
        height: '100%',
    },
    textareaContainer: {
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: theme.colors.gray,
        height: 150,
        padding: 10
    },
    mobileInputContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    countryCodeButtonContainer: {
        height: 50,
        padding: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 2
    },
    countryCodeButtonText: {
        fontWeight: '500',
        fontSize: 18,
        color: theme.colors.black,
    },
    mobileNumberInputContainer: {
        height: 50,
        padding: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    mobileNumberInput: {
        fontWeight: '500',
        fontSize: 18,
        flex: 1,
    },
    inputWithIcon: {
        display: 'flex',
        flexDirection: 'row',
    },
    inputIcon: {
        position: 'absolute',
        right: 10
    },
    textLogo: {
        fontFamily: 'Lobster',
        fontSize: 26,
        color: theme.colors.black,
        marginTop: 12
    },
    textCenter: {
        textAlign: 'center',
    },
    button: {
        width: itemWidth,
        backgroundColor: theme.colors.primary,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    buttonText: {
        color: theme.colors.white,
        fontWeight: '600',
        fontSize: 18,
    },
    outlineButton: {
        width: itemWidth,
        backgroundColor: theme.colors.transparent,
        borderWidth: 1,
        borderColor: theme.colors.lightGray,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    selectedOutlineButton: {
        width: itemWidth,
        backgroundColor: theme.colors.primary,
        borderWidth: 0,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    outlineButtonText: {
        color: theme.colors.darkGray,
        fontSize: 18,
        fontWeight: '600'
    },
    selectedOutlineButtonText: {
        color: theme.colors.white,
        fontSize: 16,
        fontFamily: theme.fonts.roboto.medium,
    },
    regularOutlineButtonText: {
        color: theme.colors.darkGray,
        fontSize: 16,
        fontFamily: theme.fonts.roboto.regular,
    },
    authIconBox: {
        backgroundColor: theme.colors.extraLightGray,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 100,
        width: 50,
        height: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 100,
        ...Platform.select({
            android: {
                elevation: 10,
            },
        }),
    },

    googleIcon: {
        color: 'white',
    },
    facebookIcon: {
        color: 'white',
    },
    socialLoginBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    primaryOutlineButton: {
        borderWidth: 1,
        borderColor: theme.colors.primary,
        borderRadius: 100,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondaryOutlineButton: {
        borderWidth: 1,
        borderColor: theme.colors.secondary,
        borderRadius: 100,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    darkOutlineButton: {
        borderWidth: 1,
        borderColor: theme.colors.dark,
        borderRadius: 100,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondaryButtonText: {
        color: theme.colors.secondary,
        fontSize: 18,
        fontWeight: '500'
    },
    roundPrimaryButton: {
        backgroundColor: theme.colors.primary,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
    },
    roundPrimaryButtonText: {
        fontSize: 18,
        color: 'black',
        fontWeight: '500'
    },
    darkButtonText: {
        color: theme.colors.dark,
        fontSize: 18,
        fontWeight: '400'
    },
    my10: {
        marginVertical: 10,
    },
    mx10: {
        marginHorizontal: 10,
    },
    me2: {
        marginEnd: 10,
    },
    me3: {
        marginEnd: 15,
    },
    me4: {
        marginEnd: 20,
    },
    centerY: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalButton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
    },
    aic: {
        alignItems: 'center'
    },
    jcs: {
        justifyContent: 'flex-start',
    },
    jcc: {
        justifyContent: 'center',
    },
    jcb: {
        justifyContent: 'space-between'
    },
    jca: {
        justifyContent: 'space-around'
    },
    w90: {
        width: '90%'
    },
    w100: {
        width: '100%'
    },
    header: {
        height: 50
    },
    headerText: {
        fontSize: 18,
        color: 'black',
        fontWeight: '500'
    },
    bottomSheetButton: {
        backgroundColor: theme.colors.white,
        height: 45,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    bottomSheetButtonText: {
        fontSize: 18,
        fontFamily: theme.fonts.roboto.regular,
        color: theme.colors.black
    },
    bottomSheetIcon: {
        marginEnd: 8,
    },
    danger: {
        color: theme.colors.danger,
    },
    disabled: {
        opacity: 0.5
    },
    noBorder: {
        borderWidth: 0
    },
    opacity0: {
        opacity: 0
    },
    blackText: {
        color: theme.colors.black,
    },
    scaleDirection: {
        transform: [{ scaleX: isRTL ? -1 : 1 }]
    },
    h50: {
        height: 50
    },
    h100: {
        height: '100%',
    },
    bold16: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    listDirection: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row'
    },
    roundTextInputContainer: {
        borderWidth: 1,
        borderColor: theme.colors.border,
        borderRadius: 100,
        flex: 1,
        height: 50
    },
    roundTextInput: {
        fontSize: 18,
        fontWeight: '500'
    },
});
