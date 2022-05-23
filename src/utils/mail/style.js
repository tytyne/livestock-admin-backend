const style = `
      .container {
        background-color: #f1f1f1; 
        width: 720px;
        padding:60px 0;
        margin:0 auto;
        font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 13px; 
        line-height: 16px
      }
      .content {
        background: #fff;
        border-radius: 3px; 
        margin: 0 auto; 
        width: 560px;
        height: 560px;
        padding: 20px;
      }
      .link-button{
        display: inline-block;
        color: white;
        text-decoration: none;
        min-width: 300px;
        margin: 15px auto 20px;
        padding: 20px 35px;
        border-radius: 3px;
        background-color:#31B0D5;
        font-size: 16px;
        line-height: 17px;
        font-weight: 700;
        text-align: center;
        }
      .welcome {
        position: relative;
        text-align: center;
        top: -20px;
        bottom: auto;
        margin-left: 50px;
        color: #31B0D5;
        font-size: 26px;
        font-weight: 700;
      }
      ol {
        list-style: none;
      }
      ul {
        list-style: none;
        position: relative;
        top: 0px;
        font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }
      ul li{
        font-size: 14px;
        left: -40px;
        font-weight: 400;
        padding: 6px;
        line-height:20px; 
        float: left;
      }
      ul li.copy{
        position: relative;
        font-size: 14px;
        top: -65px;
        margin-left: 0px;
      }
      ul li a{
        position: relative;
        top: -55px;
        color:#31B0D5;
        margin-bottom: 20px;
       font-size: 14px;
      }
      .linktobrowser {
        font-size: 12px;
        color: #111;
        line-height: 157%;
        padding: 20px 0px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
      }
      .regard{
        margin-left: 0; 
        float: left;
        padding: 20px 0px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
      }
      .regard ul{
        list-style: none;
      }
      .regard ul li{
        position: relative;
        top: -80px;
        float: left; 
        padding: 0px 0px; 
      }
        .social-media, .social-media ol{
          position: relative;
          top: -35px;
        }
        .social-media, .social-media ul, .social-media li {
          margin: 0;
          padding: 5px;
          
        }
        .social-media li {
          position: relative;
          top: 35px;
          list-style: none outside none;
          display: inline-block;
        }
        .social-media img {
          width: 40px;
          height: 28px;
          margin: 0 auto;
          color: rgb(250, 252, 253);
          background-color: transparent;
          border: 1px solid rgb(240, 243, 245);
          padding-top: 8px;
        }
        .social-media img:hover {
          color: #ffffff;
          background-color: #eee;
          transition: 5s ease;
        }
        .footer_text {
          display: block;
          position: relative;
          top: -50px;
          margin: 0 auto;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
        }`;

export default style;