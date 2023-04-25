
export interface MyColor {
    names: [],
    value: string
}

//These are styles for the ProductCard based on the Shopify color option
//Format is a {names: [aliases], value: {css to be added to the style}}
export const colorStyles = [
    {names: ['White'], value: {
        backgroundColor: '#ffffff'}},
    {names: ['Yellow'], value: {
        backgroundColor: '#ffff00'}},
    {names: ['Black'], value: {
        backgroundColor: '#000000'}},
    {names: ['Light green'], value: {
        backgroundColor: '#90ee90'}},
    {names: ['Dark purple'], value: {
        backgroundColor: '#993399'}},
    {names: ['Sky blue'], value: {
        backgroundColor: '#87CEEB'}},
    {names: ['Big red'], value: {
        backgroundColor: '#ff0000'}},
    {names: ['Dark red'], value: {
        backgroundColor: '#cc0000'}},
    {names: ['Fluorescent red'], value: {
        background: 'linear-gradient(rgba(255, 0, 0, 1) 50%, rgba(255, 255, 255, 1) 100%)'}},
    {names: ['Rose red'], value: {
        backgroundColor: '#ff3300'}},
    {names: ['Orange'], value: {
        backgroundColor: '#ffa500'}},
    {names: ['Gold', 'Golden'], value: {
        background: 'linear-gradient(rgba(212,175,55,1) 0%, rgba(248,227,87,1) 100%)'}},
    {names: ['Light gray'], value: {
        backgroundColor: '#d3d3d3'}},
    {names: ['Dark gray'], value: {
        background: 'linear-gradient(rgba(64, 64, 64, 1) 0%, rgba(128, 128, 128, 1) 100%)'}},
    {names: ['Royal blue'], value: {
        backgroundColor: '#4169e1'}},
    {names: ['Fluorescent green'], value: {
        background: 'linear-gradient(rgba(0, 255, 0, 1) 50%, rgba(0, 255, 0, 0) 100%)'}},
    {names: ['Fluorescent yellow'], value: {
        background: 'linear-gradient(rgba(255, 255, 0, 1) 50%, rgba(255, 255, 255, 1) 100%)'}},
    {names: ['Coffee'], value: {
        backgroundColor: '#6F4E37'}},
    {names: ['Silver'], value: {
        background: 'linear-gradient(rgba(128, 128, 128, 1) 0%, rgba(192, 192, 192, 1) 100%)'}},
    {names: ['Navy blue'], value: {
        backgroundColor: '#000080'}},
    {names: ['Laser'], value: {
        background: 'linear-gradient(to right bottom, #430089, #82ffa1)'}},
    {names: ['Lake green'], value: {
        backgroundColor: '#2e8b57'}},
    {names: ['Pink'], value: {
        backgroundColor: '#FFC0CB'}},
    {names: ['Purple'], value: {
        backgroundColor: '#A020F0'}},
    {names: ['Red'], value: {
        backgroundColor: '#FF0000'}},
    {names: ['Light blue'], value: {
        backgroundColor: '#ADD8E6'}},
    {names: ['Army Green'], value: {
        backgroundColor: '#4b5320'}},
    {names: ['Brown'], value: {
        backgroundColor: '#795C32'}},
    {names: ['White black point'], value: {
        background: 'white',
        backgroundImage: 'radial-gradient(black 15%, transparent 16%)',
        backgroundSize: '16px 16px',
        backgroundPosition: '0 0',}},
    {names: ['Black white point'], value: {
        background: 'black',
        backgroundImage: 'radial-gradient(white 15%, transparent 16%)',
        backgroundSize: '16px 16px',
        backgroundPosition: '0 0',}}
]