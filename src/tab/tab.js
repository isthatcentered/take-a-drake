// [ ] - @Todo: Drake head icon
// [ ] - @Todo: Offline mode
// [ ] - @Todo: Slow network loading bar

const PICTURES = [
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
const COLORS = [
	"#9933ff",
	"#fff35c",
	"#9933ff",
	"#01ff98",
	"#03ccff",
	"#ff6665",
]

class App
{
	constructor( pictures, colors )
	{
		this.__PICTURES = pictures
		this.__COLORS = colors
	}
	
	
	init( memeClassName )
	{
		this.__memeHolder = document.getElementById( memeClassName )
		
		this.__displayMeme()
	}
	
	
	__displayMeme()
	{
		this.__wrapImageWithPlaceholder(this.__memeHolder)
		
		this.__memeHolder.classList.add( "js-loading" )
		
		this.__tellLoading()
		
		this.__memeHolder.onload = _ => this.__tellDoneLoading()
		
		this.__memeHolder.src = this.__getRandomFromArr( this.__PICTURES )
	}
	
	__wrapImageWithPlaceholder(img)
	{
		const wrapper = document.createElement( "div" )
		
		wrapper.style.background = this.__getRandomFromArr( this.__COLORS )
		
		img.parentElement.insertBefore( wrapper, img )
		
		wrapper.appendChild( img )
	}
	
	__tellLoading()
	{
		this.__loading = true
		document.body.classList.add( "js-loading" )
	}
	
	__tellDoneLoading()
	{
		this.__loading = false
		
		document.body.classList.remove( "js-loading" )
		
		document.body.classList.add( "js-loaded" )
		
	}
	
	__getRandomFromArr( arr )
	{
		return arr[ Math.floor( Math.random() * arr.length ) ]
	}
}

const app = new App( PICTURES, COLORS )

app.init( "hero" )