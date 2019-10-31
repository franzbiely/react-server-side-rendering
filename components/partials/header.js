import Head from 'next/head'
import React from 'react'
import "./header.scss"
import { Link } from '../../routes';
export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const Category_nav = props => {
            return <li className="dropdown category-nav-toggle">
                <Link href={`/${props.slug}/`} params={{slug: `${props.id}`}} ><a className="dropdown-toggle">{props.id}</a></Link>
                
                {props.children ? 
                <ul className={`category-item ${props.children ? 'dropdown-menu' : '' }`}>
                    {props.children}
                </ul>
                : 
                ''
                }
            </li>
        }
        return (
            <div>
                <Head>
                    <title> {this.props.title ? this.props.title : 'No title'}</title>
                    <meta name="description" content={this.props.meta_description ? this.props.meta_description : 'This is category page'} />
                    {/* CSS */}
                    <link rel="stylesheet" href="http://techlitic.com/static/css/bootstrap.min.css" ></link> 
                    <link rel="stylesheet" href="http://techlitic.com/static/css/font-awesome.min.css" />
                    <link rel="stylesheet" href="http://techlitic.com/static/css/icofont.css" />
                    <link rel="stylesheet" href="http://techlitic.com/static/css/owl.carousel.css" />  
                    <link rel="stylesheet" href="http://techlitic.com/static/css/slidr.css" />
                    <link rel="stylesheet" href="http://techlitic.com/static/css/main.css" />
                    <link id="preset" rel="stylesheet" href="http://techlitic.com/static/css/presets/preset1.css" />
                    <link rel="stylesheet" href="http://techlitic.com/static/css/responsive.css" />
                    <link rel="stylesheet" href="http://techlitic.com/static/css/custom.css" />
                    {/* Font */}
                    <link href='https://fonts.googleapis.com/css?family=Ubuntu:400,500,700,300' rel='stylesheet' type='text/css' />
	                <link href='https://fonts.googleapis.com/css?family=Signika+Negative:400,300,600,700' rel='stylesheet' type='text/css' />
                    {/* Icon */}
                    <link rel="icon" href="http://techlitic.com/static/images/ico/favicon.ico" />	
                    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="http://techlitic.com/static/images/ico/apple-touch-icon-144-precomposed.png" />
                    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="http://techlitic.com/static/images/ico/apple-touch-icon-114-precomposed.png" />
                    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="http://techlitic.com/static/images/ico/apple-touch-icon-72-precomposed.png" />
                    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="http://techlitic.com/static/images/ico/apple-touch-icon-57-precomposed.png" />
                    {/* JS */}
                    <script src="http://techlitic.com/static/js/jquery-3.2.1.slim.min.js"></script>
                    <script src="http://techlitic.com/static/js/bootstrap.min.js"></script>
                </Head>
                {/* header */}
                <header id="header" className="clearfix">
                    {/* nav */}
                    <nav className="navbar navbar-default navbar-expand-lg">
                        <div className="container">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#tr-mainmenu" aria-controls="tr-mainmenu" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"><i className="fa fa-align-justify"></i></span>
                            </button>
                            <a className="navbar-brand" href="/">
                                Techlitic
                            </a>  
                            <div className="collapse navbar-collapse" id="tr-mainmenu">
                                <ul className="nav navbar-nav">
                                    <li className="active"><a href="/">Home <span className="caret"></span></a>
                                    </li>
                                    {
                                        this.props.categories.map((value, index) =>{
                                            if(!value.parent_ID){
                                                let x = value.ID
                                                let y = value.slug
                                                return <Category_nav key={index} slug={value.slug} id={value.name}>
                                                        {   
                                                        this.props.categories.map((value, index) =>{
                                                            if(value.parent_ID){
                                                                if(x==value.parent_ID){
                                                                    return <li key={index}><Link href={`/${y}/${value.slug}/`} params={{slug: value.name}}><a>{value.name}</a></Link></li>
                                                                }
                                                            }else{
                                                                return null;
                                                            }
                                                        })
                                                        }
                                                    </Category_nav>
                                            } 
                                        })
                                    }
                                </ul>
                            </div>
                        </div> {/* container */}
                    </nav> {/* navbar */}
                </header> {/* header */}

            </div>
        )
    }
}
