import { bgTile, bgTile2, bgTile3 } from "../assets/Assets"

export const colors = {
    white: '#f3f3f3',
    grey1: 'silver',
    grey2: '#ababab',
    grey3:'#333333',
    black:'#252525',
    dGreen: '#305442',
    lGreen: '#d7f3e6',
    dBrown: '#967252',
    lBrown: '#c7936d',
    lBlue: '#94caff',
    dBlue: '#0000ca',
    purple: '#360097',
    pink: '#ff0097',
    red: '#dc0000',
    orange: '#ff6500',
    ddBrown: '#392414',
}

export default {
    contentAreaAlternate: {
        padding:'0.5em', background: colors.grey2, border:'5px outset', borderColor:colors.grey1, borderBottomLeftRadius:'20px', borderTopRightRadius:'20px', marginBottom:'0.5em', marginTop:'0.5em'
    },
    buttonOuter: {
        color: colors.black, 
        cursor:'pointer',
        textAlign:'center' as 'center',
        border: '3px solid',
        borderRadius: '5px',
        background:'white',
        padding:'2px'
    },
    buttonInner: {
        color: colors.white, 
        backgroundImage:'url('+bgTile2+')',
        backgroundSize:'16px',
        cursor:'pointer',//'url('+down+'), auto',
        width: 'calc(100% - 32px)',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:'5px', paddingRight:'5px',
        height:'32px'
    },
    topBar: {
        background: 'white',
        display:'flex',
        justifyContent:'space-around',
        alignItems: 'center',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
        borderBottom: '1px solid'
    },
    hr: {
        margin:0,
        marginBottom:'1px'
    },
    modal: {
        position:'absolute' as 'absolute',
        height:'288px',
        display:'flex',
        zIndex:4,
        color:'white',
        top:'97px',
        left:'97px'
    },
    centered: {
        margin:'auto',
        top:0,left:0,bottom:0,right:0
    },
    bottomBarContent: {
        background:' rgb(90, 90, 90)',
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'flex-start',
        height: '100%',
        width:'75%'
    },
    bottomBarContentInner: {overflow:'hidden', padding:'0.5em', margin:'0.5em', background:'rgba(33, 3, 3, 0.3)', height:'100%', display:'flex', alignItems:'center', justifyContent:'space-around'},
    notifications: {
        position:'absolute' as 'absolute',
        left:0, bottom:0,
        maxWidth: '80vw',
        height: '5em',
        display:'flex',
        zIndex:2
    },
    bounce: {
        width:'2em',
        height:'1em',
        animation: 'shake 5s',
        animationIterationCount: 'infinite'
    },
    vr: {
        height:'1em',
        width:'2px',
        border:'1px solid white'
    }
}