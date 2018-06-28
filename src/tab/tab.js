console.log( "Wuuuut!" )


// [/] -  Have gifs
// [/] -  Display one gif
// [/] -  Display one random gif
// [ ] -  Always show a different gif
// [ ] -  Local/cached gifs
// [ ] -  tell source
// [ ] -  placeholder jpg / loader

const pictures = [
	"https://media.giphy.com/media/5xaOcLDE64VMF4LqqrK/giphy.gif",
	"https://media.giphy.com/media/l2RnB2zd7hxtNimxa/giphy.gif",
	"https://media.giphy.com/media/8zT0D36Myf9C0/giphy.gif",
	"https://media.giphy.com/media/2uIeU0iypgCEZmcSqB/giphy.gif",
	"https://media.giphy.com/media/3orif12YqOexuN3DZC/giphy.gif",
	"https://media.giphy.com/media/TRkCyFl4eolq0/giphy.gif",
	"https://media.giphy.com/media/y6uXLrxPyDJRK/giphy.gif",
	"https://media.giphy.com/media/lzQ8aBDa2gBCeaCYji/giphy.gif",
	"https://media.giphy.com/media/W9qIelYDVjiO4/giphy.gif",
	"https://media.giphy.com/media/MMQVILwO9Vv2/giphy.gif",
	"https://media.giphy.com/media/DjYYoUZJ8D4VW/giphy.gif",
	"https://media.giphy.com/media/fNHmjjfzJIrhC/giphy.gif",
	"https://media.giphy.com/media/5nddjnN2jUP5e/giphy.gif",
	"https://media.giphy.com/media/xT0xepOGU8SaCzc25O/giphy.gif",
	"https://media.giphy.com/media/Rspfpv1Rop50k/giphy.gif",
]

/**
 * @type {HTMLElement | null}
 */
const pictureHolder = document.getElementById( "hero" )

pictureHolder.setAttribute( "src", getRandom( pictures ) )


/**
 *
 * @param arr {Array}
 * @return {string}
 */
function getRandom( arr )
{
	return arr[ Math.floor( Math.random() * arr.length ) ]
}