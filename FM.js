/*********************FRESH FM CONTROL******************************************/
var StopButton = document.querySelector("#BtnStop")

var FreshBtn    = document.querySelector(".fresh");
var FreshURL = new Audio("https://stream.zenolive.com/u5enyd4c28quv ");
var Spinner = document.querySelector("#loadImage");
var StationDisplay =  document.querySelector("#notice");


function FreshPlay()
{
  $(Spinner).show();
  if(FreshURL.duration > 0 )
    {

      FreshURL.play()
      StationDisplay.innerHTML ="You're listening to Fresh FM 105.9MHz,Ibadan"
      $(Spinner).hide();
    }
  else
  {

      StationDisplay.innerHTML ="Station is currently off line "
  }

}

FreshBtn.onclick=()=>{

  FreshPlay()
  CityURL.pause()
  ClassicURL.pause();
  LageluURL.pause()
  FadURL.pause()
  ThirtyTwoURL.pause()
  NigeriaInfoURL.pause()
  EagleURL.pause()
  RootURL.pause()
  FreshTwoURL.pause()
  LagosTalksURL.pause()
  ArewaURL.pause()
  FreedomURL.pause()
  LibertyURL.pause()
  SplashURL.pause()
AgidigboURL.pause()
  InspirationalURL.pause()
  SMAURL.pause()
  TalkSport1URL.pause()
  TalkSport2URL.pause()

}
/*********************************CITY FM CONTROL******************************/

var CityBtn    = document.querySelector(".city");
var CityURL = new Audio("http://edge.mixlr.com/channel/hqpry");
var Spinner = document.querySelector("#loadImage");
var StationDisplay =  document.querySelector("#notice");

function CityPlay()
{
  $(Spinner).show();
  if(CityURL.duration > 0 )
    {

      CityURL.play()
      StationDisplay.innerHTML ="You're listening to City FM 105.1MHz,Lagos"
      $(Spinner).hide();
    }
  else
  {

      StationDisplay.innerHTML ="Station is currently off line "
  }

}

CityBtn.onclick=()=>{

  CityPlay()
  FreshURL.pause();
  ClassicURL.pause();
  LageluURL.pause()
  FadURL.pause()
  ThirtyTwoURL.pause()
  NigeriaInfoURL.pause()
  EagleURL.pause()
  RootURL.pause()
  FreshTwoURL.pause()
  LagosTalksURL.pause()
  ArewaURL.pause()
  FreedomURL.pause()
  LibertyURL.pause()
  SplashURL.pause()
AgidigboURL.pause()
  InspirationalURL.pause()
  SMAURL.pause()
  TalkSport1URL.pause()
  TalkSport2URL.pause()

}

/*********************************CLASSIC FM CONTROL****************************/

var ClassicBtn    = document.querySelector(".classic");
var ClassicURL = new Audio("https://classicfmlagos-atunwadigital.streamguys1.com/classicfmlagos");
var Spinner = document.querySelector("#loadImage");
var StationDisplay =  document.querySelector("#notice");

function ClassicPlay()
{
  $(Spinner).show();
  if(ClassicURL.duration > 0 )
    {

      ClassicURL.play()
      StationDisplay.innerHTML ="You're listening to Classic FM 97.3MHz,Lagos"
      $(Spinner).hide();
    }
  else
  {

      StationDisplay.innerHTML ="Station is currently off line "
  }

}

ClassicBtn.onclick=()=>{

  ClassicPlay()
  FreshURL.pause();
  CityURL.pause()
  LageluURL.pause()
  FadURL.pause()
  ThirtyTwoURL.pause()
  NigeriaInfoURL.pause()
  EagleURL.pause()
  RootURL.pause()
  FreshTwoURL.pause()
  LagosTalksURL.pause()
  ArewaURL.pause()
  FreedomURL.pause()
  LibertyURL.pause()
  SplashURL.pause()
AgidigboURL.pause()
  InspirationalURL.pause()
  SMAURL.pause()
  TalkSport1URL.pause()
  TalkSport2URL.pause()


}


/*********************************Lagelu FM CONTROL****************************/

var LageluBtn    = document.querySelector(".lagelu");
var LageluURL = new Audio( "https://edge.mixlr.com/channel/wupzh" );
var Spinner = document.querySelector("#loadImage");
var StationDisplay =  document.querySelector("#notice");

function LageluPlay()
{
  $(Spinner).show();
  if(LageluURL.duration > 0 )
    {

      LageluURL.play()
      StationDisplay.innerHTML ="You're listening to Lagelu FM 96.7MHz, Ibadan"
      $(Spinner).hide();
    }
  else
  {

      StationDisplay.innerHTML ="Station is currently off line "
  }

}

LageluBtn.onclick=()=>{

  LageluPlay()
  FreshURL.pause();
  CityURL.pause()
  ClassicURL.pause()
  FadURL.pause()
  ThirtyTwoURL.pause()
  NigeriaInfoURL.pause()
  EagleURL.pause()
  RootURL.pause()
  FreshTwoURL.pause()
  LagosTalksURL.pause()
  ArewaURL.pause()
  FreedomURL.pause()
  LibertyURL.pause()
  SplashURL.pause()
AgidigboURL.pause()
  InspirationalURL.pause()
  SMAURL.pause()
  TalkSport1URL.pause()
  TalkSport2URL.pause()


}
/*********************************FAD FM CONTROL****************************/
var FadBtn    = document.querySelector(".fad");
var FadURL = new Audio( "https://radio.gotright.net/radio/8030/radio.mp3/ " );
var Spinner = document.querySelector("#loadImage");
var StationDisplay =  document.querySelector("#notice");

function FadPlay()
{
  $(Spinner).show();
  if(FadURL.duration > 0 )
    {

      FadURL.play()
      StationDisplay.innerHTML ="You're listening to FAD FM 93.1MHz,Calabar"
      $(Spinner).hide();
    }
  else
  {

      StationDisplay.innerHTML ="Station is currently off line "
  }

}

FadBtn.onclick=()=>{
  FadPlay()
  LageluURL.pause();
  FreshURL.pause();
  CityURL.pause()
  ClassicURL.pause()
  ThirtyTwoURL.pause()
  NigeriaInfoURL.pause()
  EagleURL.pause()
  RootURL.pause()
  FreshTwoURL.pause()
  LagosTalksURL.pause()
  ArewaURL.pause()
  FreedomURL.pause()
  LibertyURL.pause()
  SplashURL.pause()
AgidigboURL.pause()
  InspirationalURL.pause()
  SMAURL.pause()
  TalkSport1URL.pause()
  TalkSport2URL.pause()


}

/*********************************Thirty-Two FM CONTROL*************************/

var ThirtyTwoBtn    = document.querySelector(".ThirtyTwo");
var ThirtyTwoURL = new Audio( "http://edge.mixlr.com/channel/zbfuy" );
var Spinner = document.querySelector("#loadImage");
var StationDisplay =  document.querySelector("#notice");

function ThirtyTwoPlay()
{
  $(Spinner).show();
  if(ThirtyTwoURL.duration > 0 )
    {

      ThirtyTwoURL.play()
      StationDisplay.innerHTML ="You're listening to Thirty-Two FM 94.9MHz,Ibadan"
      $(Spinner).hide();
    }
  else
  {

      StationDisplay.innerHTML ="Station is currently off line "
  }

}

ThirtyTwoBtn.onclick=()=>{
  ThirtyTwoPlay()
  FadURL.pause()
  LageluURL.pause();
  FreshURL.pause();
  CityURL.pause()
  ClassicURL.pause()
  NigeriaInfoURL.pause()
  EagleURL.pause()
  RootURL.pause()
  FreshTwoURL.pause()
  LagosTalksURL.pause()
  ArewaURL.pause()
  FreedomURL.pause()
  LibertyURL.pause()
  SplashURL.pause()
AgidigboURL.pause()
  InspirationalURL.pause()
  SMAURL.pause()
  TalkSport1URL.pause()
  TalkSport2URL.pause()


}


/*********************************Nigeria Info FM CONTROL*************************/

var NigeriaInfoBtn    = document.querySelector(".NigeriaInfo");
var NigeriaInfoURL = new Audio("https://stream.coolwazobiainfo.com/niginf_lag");
var Spinner = document.querySelector("#loadImage");
var StationDisplay =  document.querySelector("#notice");

function NigeriaInfoPlay()
{  $(Spinner).show();

  if(ThirtyTwoURL.duration > 0 )
    {

      NigeriaInfoURL.play()
      StationDisplay.innerHTML ="You're listening to Nigeria Info FM 99.3MHz,Lagos"
      $(Spinner).hide();
    }
  else
  {

      StationDisplay.innerHTML ="Station is currently off line "
  }

}

NigeriaInfoBtn.onclick=()=>{
  NigeriaInfoPlay()
  FreshURL.pause();
  CityURL.pause()
  ClassicURL.pause()
  LageluURL.pause();
  FadURL.pause()
  ThirtyTwoURL.pause()
  EagleURL.pause()
  RootURL.pause()
  FreshTwoURL.pause()
  LagosTalksURL.pause()
  ArewaURL.pause()
  FreedomURL.pause()
  LibertyURL.pause()
  SplashURL.pause()
AgidigboURL.pause()
  InspirationalURL.pause()
  SMAURL.pause()
  TalkSport1URL.pause()
  TalkSport2URL.pause()
}


/*********************************Eagle FM CONTROL******************************/

var EagleBtn    = document.querySelector(".Eagle");
var EagleURL = new Audio("http://s3.radio.co/s66a59f7f1/listen");
var Spinner = document.querySelector("#loadImage");
var StationDisplay =  document.querySelector("#notice");

function EaglePlay()
{  $(Spinner).show();

  if(EagleURL.duration > 0 )
    {

      EagleURL.play()
      StationDisplay.innerHTML ="You're listening to Eagle FM 103.7MHz, Abeokuta"
      $(Spinner).hide();
    }
  else
  {

      StationDisplay.innerHTML ="Station is currently off line "
  }

}

EagleBtn.onclick=()=>{
  EaglePlay()
  FreshURL.pause();
  CityURL.pause()
  ClassicURL.pause()
  LageluURL.pause();
  FadURL.pause()
  ThirtyTwoURL.pause()
  NigeriaInfoURL.pause()
  RootURL.pause()
  FreshTwoURL.pause()
  LagosTalksURL.pause()
  ArewaURL.pause()
  FreedomURL.pause()
  LibertyURL.pause()
  SplashURL.pause()
AgidigboURL.pause()
  InspirationalURL.pause()
    SMAURL.pause()
  TalkSport1URL.pause()
  TalkSport2URL.pause()
}


/*********************************Root FM CONTROL******************************/

var RootBtn    = document.querySelector(".Root");
var RootURL = new Audio("http://node-33.zeno.fm/kawvqfp7khruv?zs=AbAkYw3OQce9hRClLvoQGg&rj-tok=AAABgY2LTowA4zf4xmLSmua_Fw&rj-ttl=5 ");
var Spinner = document.querySelector("#loadImage");
var StationDisplay =  document.querySelector("#notice");

function RootPlay()
{  $(Spinner).show();

  if(RootURL.duration > 0 )
    {

      RootURL.play()
      StationDisplay.innerHTML ="You're listening to Root FM 97.1MHz, Abeokuta"
      $(Spinner).hide();
    }
  else
  {

      StationDisplay.innerHTML ="Station is currently off line "
  }

}

RootBtn.onclick=()=>{
  RootPlay()
  FreshURL.pause();
  CityURL.pause()
  ClassicURL.pause()
  LageluURL.pause();
  FadURL.pause()
  ThirtyTwoURL.pause()
  NigeriaInfoURL.pause()
  EagleURL.pause()
  FreshTwoURL.pause()
  LagosTalksURL.pause()
  ArewaURL.pause()
  FreedomURL.pause()
  LibertyURL.pause()
  SplashURL.pause()
AgidigboURL.pause()
  InspirationalURL.pause()
    SMAURL.pause()
    TalkSport1URL.pause()
    TalkSport2URL.pause()
}



/*********************************Fresh FM Lagos CONTROL******************************/

var FreshTwoBtn    = document.querySelector(".FreshTwo");
var FreshTwoURL = new Audio("https://stream.zeno.fm/fgcaapesa78uv");
var Spinner = document.querySelector("#loadImage");
var StationDisplay =  document.querySelector("#notice");

function FreshTwoPlay()
{  $(Spinner).show();

  if(FreshTwoURL.duration > 0 )
    {

      FreshTwoURL.play()
      StationDisplay.innerHTML ="You're listening to Fresh FM 105.3MHz, Lagos"
      $(Spinner).hide();
    }
  else
  {

      StationDisplay.innerHTML ="Station is currently off line "
  }

}

FreshTwoBtn.onclick=()=>{
  FreshTwoPlay();
  FreshURL.pause();
  CityURL.pause()
  ClassicURL.pause()
  LageluURL.pause();
  FadURL.pause()
  ThirtyTwoURL.pause()
  NigeriaInfoURL.pause()
  EagleURL.pause()
  RootURL.pause()
  LagosTalksURL.pause()
  ArewaURL.pause()
  FreedomURL.pause()
  LibertyURL.pause()
  SplashURL.pause()
AgidigboURL.pause()
  InspirationalURL.pause()
    SMAURL.pause()
  TalkSport1URL.pause()
  TalkSport2URL.pause()
}



/*********************************Lagos Talks FM Lagos CONTROL******************/

var LagosTalksBtn    = document.querySelector(".LagosTalks");
var LagosTalksURL = new Audio("https://stream-160.zeno.fm/s32my50ywd0uv?zs=LZgGUlNTQSSDj31yrvyi5g ");
var Spinner = document.querySelector("#loadImage");
var StationDisplay =  document.querySelector("#notice");

function LagosTalksPlay()
{  $(Spinner).show();

  if(LagosTalksURL.duration > 0 )
    {

      LagosTalksURL.play()
      StationDisplay.innerHTML ="You're listening to Lagos Talks FM 91.3MHz, Lagos"
      $(Spinner).hide();
    }
  else
  {

      StationDisplay.innerHTML ="Station is currently off line "
  }

}

LagosTalksBtn.onclick=()=>{
  LagosTalksPlay();
  FreshURL.pause();
  CityURL.pause()
  ClassicURL.pause()
  LageluURL.pause();
  FadURL.pause()
  ThirtyTwoURL.pause()
  NigeriaInfoURL.pause()
  EagleURL.pause()
  RootURL.pause()
  FreshTwoURL.pause()
  ArewaURL.pause()
  FreedomURL.pause()
  LibertyURL.pause()
  SplashURL.pause()
AgidigboURL.pause()
  InspirationalURL.pause()
    SMAURL.pause()
    TalkSport1URL.pause()
    TalkSport2URL.pause()
}


/*********************************Arewa FM Lagos CONTROL************************/

var ArewaBtn    = document.querySelector(".Arewa");
var ArewaURL = new Audio("https://stream.zeno.fm/egqx0us8tc9uv ");
var Spinner = document.querySelector("#loadImage");
var StationDisplay =  document.querySelector("#notice");

function ArewaPlay()
{  $(Spinner).show();

  if(ArewaURL.duration > 0 )
    {

      ArewaURL.play()
      StationDisplay.innerHTML ="You're listening to Arewa FM 91.3MHz, Kano"
      $(Spinner).hide();
    }
  else
  {

      StationDisplay.innerHTML ="Station is currently off line "
  }

}

ArewaBtn.onclick=()=>{
  ArewaPlay()
  FreshURL.pause();
  CityURL.pause()
  ClassicURL.pause()
  LageluURL.pause();
  FadURL.pause()
  ThirtyTwoURL.pause()
  NigeriaInfoURL.pause()
  EagleURL.pause()
  RootURL.pause()
  FreshTwoURL.pause()
  LagosTalksURL.pause()
  FreedomURL.pause()
  LibertyURL.pause()
  SplashURL.pause()
AgidigboURL.pause()
  InspirationalURL.pause()
    SMAURL.pause()
    TalkSport1URL.pause()
    TalkSport2URL.pause()
}


/*********************************Freedom FM Lagos CONTROL************************/


var FreedomBtn    = document.querySelector(".Freedom");
var FreedomURL = new Audio("https://node-34.zeno.fm/21fg173qduhvv?zs=bD9gINtvQgCg5tmPtvD1Pg&zs=mnuEpW4RRIiWTkoJVg2A6A&rj-tok=AAABgaYSHKUAGq_Cd3Da8mQXuA&rj-ttl=5  ");
var Spinner = document.querySelector("#loadImage");
var StationDisplay =  document.querySelector("#notice");

function FreedomPlay()
{  $(Spinner).show();

  if(FreedomURL.duration > 0 )
    {

      FreedomURL.play()
      StationDisplay.innerHTML ="You're listening to Freedom FM 99.5MHz, Kano"
      $(Spinner).hide();
    }
  else
  {

      StationDisplay.innerHTML ="Station is currently off line "
  }

}

FreedomBtn.onclick=()=>{
  FreedomPlay()
  FreshURL.pause();
  CityURL.pause()
  ClassicURL.pause()
  LageluURL.pause();
  FadURL.pause()
  ThirtyTwoURL.pause()
  NigeriaInfoURL.pause()
  EagleURL.pause()
  RootURL.pause()
  FreshTwoURL.pause()
  LagosTalksURL.pause()
  ArewaURL.pause()
  LibertyURL.pause()
  SplashURL.pause()
AgidigboURL.pause()
  InspirationalURL.pause()
  SMAURL.pause()
  TalkSport1URL.pause()
  TalkSport2URL.pause()
}



/*********************************Liberty FM Lagos CONTROL************************/

var LibertyBtn    = document.querySelector(".Liberty");
var LibertyURL = new Audio("https://stream.zeno.fm/6adwuq9pxs8uv ");
var Spinner = document.querySelector("#loadImage");
var StationDisplay =  document.querySelector("#notice");

function LibertyPlay()
{  $(Spinner).show();

  if(LibertyURL.duration > 0 )
    {

      LibertyURL.play()
      StationDisplay.innerHTML ="You're listening to Liberty FM 103.3MHz, Kano"
      $(Spinner).hide();
    }
  else
  {

      StationDisplay.innerHTML ="Station is currently off line "
  }

}

LibertyBtn.onclick=()=>{
   LibertyPlay()
  FreshURL.pause();
  CityURL.pause()
  ClassicURL.pause()
  LageluURL.pause();
  FadURL.pause()
  ThirtyTwoURL.pause()
  NigeriaInfoURL.pause()
  EagleURL.pause()
  RootURL.pause()
  FreshTwoURL.pause()
  LagosTalksURL.pause()
  ArewaURL.pause()
  FreedomURL.pause()
  SplashURL.pause()
  AgidigboURL.pause()
  InspirationalURL.pause()
  SMAURL.pause()
  TalkSport1URL.pause()
  TalkSport2URL.pause()
}

/********************************* Splash FM  CONTROL************************/

var SplashBtn    = document.querySelector(".Splash");
var SplashURL = new Audio("https://edge.mixlr.com/channel/cfeki");
var Spinner = document.querySelector("#loadImage");
var StationDisplay =  document.querySelector("#notice");

function SplashPlay()
{  $(Spinner).show();

  if(SplashURL.duration > 0 )
    {

      SplashURL.play()
      StationDisplay.innerHTML ="You're listening to Splash FM 105.5MHz, Ibadan"
      $(Spinner).hide();
    }
  else
  {

      StationDisplay.innerHTML ="Station is currently off line "
  }

}

SplashBtn.onclick=()=>{
   SplashPlay()
  FreshURL.pause();
  CityURL.pause()
  ClassicURL.pause()
  LageluURL.pause();
  FadURL.pause()
  ThirtyTwoURL.pause()
  NigeriaInfoURL.pause()
  EagleURL.pause()
  RootURL.pause()
  FreshTwoURL.pause()
  LagosTalksURL.pause()
  ArewaURL.pause()
  FreedomURL.pause()
  LibertyURL.pause()
  AgidigboURL.pause()
  InspirationalURL.pause()
  SMAURL.pause()
  TalkSport1URL.pause()
  TalkSport2URL.pause()

}


/********************************* Agidigbo FM  CONTROL************************/

var AgidigboBtn    = document.querySelector(".Agidigbo");
var AgidigboURL = new Audio("https://agidigbostream.com.ng/radio/8000/radio.mp3");
var Spinner = document.querySelector("#loadImage");
var StationDisplay =  document.querySelector("#notice");

function AgidigboPlay()
{  $(Spinner).show();

  if(AgidigboURL.duration > 0 )
    {

      AgidigboURL.play()
      StationDisplay.innerHTML ="You're listening to Agidigbo FM 88.7MHz, Ibadan"
      $(Spinner).hide();
    }
  else
  {

      StationDisplay.innerHTML ="Station is currently off line "
  }

}

AgidigboBtn.onclick=()=>{
   AgidigboPlay()
  FreshURL.pause();
  CityURL.pause()
  ClassicURL.pause()
  LageluURL.pause();
  FadURL.pause()
  ThirtyTwoURL.pause()
  NigeriaInfoURL.pause()
  EagleURL.pause()
  RootURL.pause()
  FreshTwoURL.pause()
  LagosTalksURL.pause()
  ArewaURL.pause()
  FreedomURL.pause()
  LibertyURL.pause()
  SplashURL.pause()
  InspirationalURL.pause()
  SMAURL.pause()
  TalkSport1URL.pause()
  TalkSport2URL.pause()

}



/********************************* Inspirational FM  CONTROL************************/

var InspirationalBtn    = document.querySelector(".Inspirational");
var InspirationalURL = new Audio("https://servoserver.com.ng/ifmlagoslive/live.mp3");
var Spinner = document.querySelector("#loadImage");
var StationDisplay =  document.querySelector("#notice");

function InspirationalPlay()
{  $(Spinner).show();

  if(InspirationalURL.duration > 0 )
    {

      InspirationalURL.play()
      StationDisplay.innerHTML ="You're listening to Inspirational FM 92.3MHz, Lagos"
      $(Spinner).hide();
    }
  else
  {

      StationDisplay.innerHTML ="Station is currently off line "
  }

}

InspirationalBtn.onclick=()=>{
  InspirationalPlay()
  FreshURL.pause();
  CityURL.pause()
  ClassicURL.pause()
  LageluURL.pause();
  FadURL.pause()
  ThirtyTwoURL.pause()
  NigeriaInfoURL.pause()
  EagleURL.pause()
  RootURL.pause()
  FreshTwoURL.pause()
  LagosTalksURL.pause()
  ArewaURL.pause()
  FreedomURL.pause()
  LibertyURL.pause()
  SplashURL.pause()
  AgidigboURL.pause()
  SMAURL.pause()
  TalkSport1URL.pause()
  TalkSport2URL.pause()
}


/********************************* SMA FM  CONTROL************************/
var SMABtn    = document.querySelector(".SMA");
var SMAURL = new Audio("http://192.99.170.8:5034/listen.mp3 ");
var Spinner = document.querySelector("#loadImage");
var StationDisplay =  document.querySelector("#notice");

function SMAPlay()
{  $(Spinner).show();

  if(SMAURL.duration > 0 )
    {

      SMAURL.play()
      StationDisplay.innerHTML ="You're listening to S.M.A FM 104.9MHz, Lagos"
      $(Spinner).hide();
    }
  else
  {

      StationDisplay.innerHTML ="Station is currently off line "
  }

}

SMABtn.onclick=()=>{
  SMAPlay()
  FreshURL.pause();
  CityURL.pause()
  ClassicURL.pause()
  LageluURL.pause();
  FadURL.pause()
  ThirtyTwoURL.pause()
  NigeriaInfoURL.pause()
  EagleURL.pause()
  RootURL.pause()
  FreshTwoURL.pause()
  LagosTalksURL.pause()
  ArewaURL.pause()
  FreedomURL.pause()
  LibertyURL.pause()
  SplashURL.pause()
  AgidigboURL.pause()
  InspirationalURL.pause()
  TalkSport1URL.pause()
  TalkSport2URL.pause()
}


/********************************* TALK SPORT -1 FM  CONTROL************************/
var TalkSport1Btn    = document.querySelector(".TalkSport1");
var TalkSport1URL = new Audio("https://radio.talksport.com/stream?aw_0_1st.playerId=radioplayer-web&aw_0_1st.platform=website&rp_source=1&listenerid=07f1d01cd100a484cb8aece7a8fe3cc6&awparams=companionAds%3Atrue&aw_0_1st.octave_covatic=%5B%22531000%22%2C%229999%22%5D&aw_0_req.userConsentV2=CPxurkAPxurkAAGABCENDUCgAP_AAH_AAATIIzNd_H_fbX9j-_594ft0eY1f8PqXruAzDheNk-8FyJ_W_LwHz2EyNF36pq4KmR4Eu1LBAQNlHEHUDQmQYIkFqTHsak2MpyNKJqJEklMZO2dYGF9PmxFD-YKY505-9vfx2Du5_dv-z5T3r8Xd0EAAACAEAIAAAAAAAAAAQAAAAAAAAIAAAAAAAAAAgAQAABBJEAswVJgCAoSykFpAwihBCBCAJSIBQEQUAgtAAgAQKChJWAQsggQAoBABSBASHEBCJAIAAIIAkCAAEALBAoIAIBAACAAAAAAARAAgIALAQAAAEAkAAAIAAQDCCIAACEMCAggIJAWAAAAAgkMAAAAAQAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBsJA1AAQABQADwALAAYAA1ACYAG0AN4AegA_ACGAGGANUAbIA7wB5QD7APyAf4CAAEUAIuARqAkoCTAE7AKCAUUApsBTwFQALmAXYAxQBtADcAIdASIAksBOwCjwFIgKXAU1AtgC2QFyALuAYMAw0Bk4DLgGcgM_AaQA0wCIYUAiAAoAFQAQgAjgBSAFaAMIAhABHACvgF-ANsAeIA9QCxAGEAMZCABwANgAkAJoAWcBTYC3AGBBoCQALAAjgBtAGWAPIAgABRQCngF2AOqAh0BFQCSwFswLkAuUBdwDOQGmBwAIBaQwAIBNgCmxEBUAFgAPgAjgBtAGWAPIAgABOwCigFPALsAagA6oCHQElgLZgXIBcoC7gGRgM5AaYJAAgLEEAAgASAJsFQCwAWABtAGWARwAooBdgFsgLkAXcAyMBnIsACAWkUABATYMgGAAsADaAMsAjgBRQCtgF2AWyAuQBdwDIwGcjQAICThgAEBNg6CIABQAFgALoAYABiADUAJgAbQA3gB6AD8AIYARYAwwBogDZAHeAPKAfYB-AD_AIoARcAjoBJgCXAE4AJ2AUEAooBTwC5gF2ALyAYoA2gBuADnAH2AQ6AioBF4CRAElgJUATsAo8BS4CmgFWQLYAtkBboC4AFyQLtAu4BgwDDQGJgMeAZGAycBlQDLgGZgM5AZ-A0QBpADTAHFjwCQACgAVAA-ACOAE0AKQAkwBWgEZAI4AV8AtIBfgDbAHiAPUAsQBjI4AKACQAToA0gFNgLcIQKQAKAAsABcADEAGoATAApgBiADaAG8APQAiwBSgDKAHeAP8AigBOACggFFAKeAXMAuwBigDaAHOASoApoBVgCygFogLZAXAAuQBdwDIwGTgM5AZ-A0QCKBEAaACoAJoAkwCMgEcAK-AWkAvwBnADxAJOATEAsQgABAGaSgPAAIAAoAB8AFkAMAAxACYAIYARYAowBqgDZAHeAPwAp4BcwC7AGKAQ6AioBF4CRAFHgLYAXcAyMBk4DOQGfgNIAigTAJgBCACOAE0AKQAbQA8ACTAFaARkAjgBTQCvgFpAL8AZwA2wB4gFiAMZJAAgBmgLcKQKQAKAAsgBgAGIANQAmAB-AEMAIsAaIA1QBsgDvAH4AR0AoIBWwC5gF2ALyAbQA3AB9gEOgIvASIAksBJwCdgFWAK_AWwAuABckC7QLuAYaAyMBk4DLgGcgM_AaQVAHgAqAB8AEIAI4ATQA2gB4AEmAK0AjgBXwDbAHiAWIAxkoAGABIAH8AToBBwFNgLcAAA.YAAAAAAAAAAA&aw_0_1st.octave_permutive=%5B%2282977%22%2C%2283482%22%2C%2283490%22%2C%2283685%22%2C%2283969%22%2C%2284218%22%2C%2284226%22%2C%2284435%22%2C%2285228%22%2C%2289906%22%5D&=&&___cb=415842110672965");
var Spinner = document.querySelector("#loadImage");
var StationDisplay =  document.querySelector("#notice");

function TalkSport1Play()
{  $(Spinner).show();

  if(TalkSport1URL.duration > 0 )
    {

      TalkSport1URL.play()
      StationDisplay.innerHTML ="You're listening to Talk Sport 1"
      $(Spinner).hide();
    }
  else
  {

      StationDisplay.innerHTML ="Station is currently off line "
  }

}

TalkSport1Btn.onclick=()=>{
  TalkSport1Play()
  FreshURL.pause();
  CityURL.pause()
  ClassicURL.pause()
  LageluURL.pause();
  FadURL.pause()
  ThirtyTwoURL.pause()
  NigeriaInfoURL.pause()
  EagleURL.pause()
  RootURL.pause()
  FreshTwoURL.pause()
  LagosTalksURL.pause()
  ArewaURL.pause()
  FreedomURL.pause()
  LibertyURL.pause()
  SplashURL.pause()
  AgidigboURL.pause()
  InspirationalURL.pause()
  SMAURL.pause()
  TalkSport2URL.pause()
}



/********************************* TALK SPORT -2 FM  CONTROL************************/

var TalkSport2Btn    = document.querySelector(".TalkSport2");
var TalkSport2URL = new Audio("https://radio.talksport.com/stream2");
var Spinner = document.querySelector("#loadImage");
var StationDisplay =  document.querySelector("#notice");

function TalkSport2Play()
{  $(Spinner).show();

  if(TalkSport2URL.duration > 0 )
    {

      TalkSport2URL.play()
      StationDisplay.innerHTML ="You're listening to Talk Sport-2 Radio"
      $(Spinner).hide();
    }
  else
  {

      StationDisplay.innerHTML ="Station is currently off line "
  }

}

TalkSport2Btn.onclick=()=>{
  TalkSport2Play()
  FreshURL.pause();
  CityURL.pause()
  ClassicURL.pause()
  LageluURL.pause();
  FadURL.pause()
  ThirtyTwoURL.pause()
  NigeriaInfoURL.pause()
  EagleURL.pause()
  RootURL.pause()
  FreshTwoURL.pause()
  LagosTalksURL.pause()
  ArewaURL.pause()
  FreedomURL.pause()
  LibertyURL.pause()
  SplashURL.pause()
  AgidigboURL.pause()
  InspirationalURL.pause()
  SMAURL.pause()
  TalkSport1URL.pause()
}


//https://radio.talksport.com/stream2(talk sport2)
//https://radio.talksport.com/stream?aw_0_1st.playerId=radioplayer-web&aw_0_1st.platform=website&rp_source=1&listenerid=07f1d01cd100a484cb8aece7a8fe3cc6&awparams=companionAds%3Atrue&aw_0_1st.octave_covatic=%5B%22531000%22%2C%229999%22%5D&aw_0_req.userConsentV2=CPxurkAPxurkAAGABCENDUCgAP_AAH_AAATIIzNd_H_fbX9j-_594ft0eY1f8PqXruAzDheNk-8FyJ_W_LwHz2EyNF36pq4KmR4Eu1LBAQNlHEHUDQmQYIkFqTHsak2MpyNKJqJEklMZO2dYGF9PmxFD-YKY505-9vfx2Du5_dv-z5T3r8Xd0EAAACAEAIAAAAAAAAAAQAAAAAAAAIAAAAAAAAAAgAQAABBJEAswVJgCAoSykFpAwihBCBCAJSIBQEQUAgtAAgAQKChJWAQsggQAoBABSBASHEBCJAIAAIIAkCAAEALBAoIAIBAACAAAAAAARAAgIALAQAAAEAkAAAIAAQDCCIAACEMCAggIJAWAAAAAgkMAAAAAQAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBsJA1AAQABQADwALAAYAA1ACYAG0AN4AegA_ACGAGGANUAbIA7wB5QD7APyAf4CAAEUAIuARqAkoCTAE7AKCAUUApsBTwFQALmAXYAxQBtADcAIdASIAksBOwCjwFIgKXAU1AtgC2QFyALuAYMAw0Bk4DLgGcgM_AaQA0wCIYUAiAAoAFQAQgAjgBSAFaAMIAhABHACvgF-ANsAeIA9QCxAGEAMZCABwANgAkAJoAWcBTYC3AGBBoCQALAAjgBtAGWAPIAgABRQCngF2AOqAh0BFQCSwFswLkAuUBdwDOQGmBwAIBaQwAIBNgCmxEBUAFgAPgAjgBtAGWAPIAgABOwCigFPALsAagA6oCHQElgLZgXIBcoC7gGRgM5AaYJAAgLEEAAgASAJsFQCwAWABtAGWARwAooBdgFsgLkAXcAyMBnIsACAWkUABATYMgGAAsADaAMsAjgBRQCtgF2AWyAuQBdwDIwGcjQAICThgAEBNg6CIABQAFgALoAYABiADUAJgAbQA3gB6AD8AIYARYAwwBogDZAHeAPKAfYB-AD_AIoARcAjoBJgCXAE4AJ2AUEAooBTwC5gF2ALyAYoA2gBuADnAH2AQ6AioBF4CRAElgJUATsAo8BS4CmgFWQLYAtkBboC4AFyQLtAu4BgwDDQGJgMeAZGAycBlQDLgGZgM5AZ-A0QBpADTAHFjwCQACgAVAA-ACOAE0AKQAkwBWgEZAI4AV8AtIBfgDbAHiAPUAsQBjI4AKACQAToA0gFNgLcIQKQAKAAsABcADEAGoATAApgBiADaAG8APQAiwBSgDKAHeAP8AigBOACggFFAKeAXMAuwBigDaAHOASoApoBVgCygFogLZAXAAuQBdwDIwGTgM5AZ-A0QCKBEAaACoAJoAkwCMgEcAK-AWkAvwBnADxAJOATEAsQgABAGaSgPAAIAAoAB8AFkAMAAxACYAIYARYAowBqgDZAHeAPwAp4BcwC7AGKAQ6AioBF4CRAFHgLYAXcAyMBk4DOQGfgNIAigTAJgBCACOAE0AKQAbQA8ACTAFaARkAjgBTQCvgFpAL8AZwA2wB4gFiAMZJAAgBmgLcKQKQAKAAsgBgAGIANQAmAB-AEMAIsAaIA1QBsgDvAH4AR0AoIBWwC5gF2ALyAbQA3AB9gEOgIvASIAksBJwCdgFWAK_AWwAuABckC7QLuAYaAyMBk4DLgGcgM_AaQVAHgAqAB8AEIAI4ATQA2gB4AEmAK0AjgBXwDbAHiAWIAxkoAGABIAH8AToBBwFNgLcAAA.YAAAAAAAAAAA&aw_0_1st.octave_permutive=%5B%2282977%22%2C%2283482%22%2C%2283490%22%2C%2283685%22%2C%2283969%22%2C%2284218%22%2C%2284226%22%2C%2284435%22%2C%2285228%22%2C%2289906%22%5D&=&&___cb=415842110672965(Talk Sport)









StopButton.onclick=()=>{
  FreshURL.pause();
  CityURL.pause();
  ClassicURL.pause();
  LageluURL.pause();
  FadURL.pause();
  ThirtyTwoURL.pause()
  NigeriaInfoURL.pause()
  EagleURL.pause()
  RootURL.pause()
  FreshTwoURL.pause()
  LagosTalksURL.pause()
  ArewaURL.pause()
  FreedomURL.pause()
  LibertyURL.pause()
  SplashURL.pause()
  AgidigboURL.pause()
  InspirationalURL.pause()
  SMAURL.pause()
  TalkSport1URL.pause()
  TalkSport2URL.pause()

  StationDisplay.style.display = "none";

  window.location = "FM.html"
}
