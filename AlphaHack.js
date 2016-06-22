var ModPE;
var Debug;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var GetLang = ModPE.getLanguage();

/*
Main author: ArceusMatt/Arceu_matt.
Help by: GodSoft029 & applqpak.
Started MCPE v0.12.0
Do not copy code you are not allowed to but...
to see what to copy: https://github.com/ArceusMatt/ModPE-scripts
Contact @ArceusMatt for any questions
Always get my revenge. =) enjoy!
*/

if(Server.getAddress() == "5.189.178.106"){
	tspam = false;
	sspam = false;
	tspam = null;
	sspam = null;
}
if(Server.getAddress() == "51.254.207.118"){
	GUI.dismiss();
	showMenuBtn() = null;
}
if(Server.getAddress() == "108.61.72.52"){
	GUI.dismiss();
	showMenuBtn() = null;
}

var Button = android.widget.Button;
var LinearLayout = android.widget.LinearLayout;
var RelativeLayout = android.widget.RelativeLayout;
var PopupWindow = android.widget.PopupWindow;
var ScrollView = android.widget.ScrollView;
var TextView = android.widget.TextView;
var CheckBox = android.widget.CheckBox;
var Toast = android.widget.Toast;
var Runnable = java.lang.Runnable;
var View = android.view.View;
var ColorDrawable = android.graphics.drawable.ColorDrawable;
var Color = android.graphics.Color;
var Gravity = android.view.Gravity;
var Intent = android.content.Intent;
var Uri = android.net.Uri;
var Switch = android.widget.Switch;
var GUI;
var menu;

/***********************/

//AlphaHack variables

//var num0  = 0;
var antispam = 0;
var version = "0.8.0";
var name = "AlphαHαck";
var authers = "ArceusMatt";
var authers2 = "Godsoft029";
var authers3 = "Applqpak";
var copyright = "©";
var text = "AlphaHack!";
var space = " ";
var client = "§f<§3AlphαHαck§f> ";
var hackcount = 0;
var modpeFolder = ctx.getDir("ModPE", 0);
var modpeFile = new java.io.File(modpeFolder, "AlphaHack.js");
var operm = "pocketmine.command";
var operm2 = "*";
var bows = 10;
var vid = 11;
var vidd = false;
var viddd = "§3";

var sspam3 = false;
var sspam = false;
var hackk = false;
var showp = false;
var fch = false;
var onlyday = false;
var saddle = false;
var instakilled = false;
var instabreak = false;
var stackheart = false;
var parti = false;
var parti2 = false;
var nowalls = false;
var waterwalk = false;
var highjumps = false;
var grief = false;
var killaura = false;
var killfaura = false;
var uirender = false; 
var xxray = false; 
var stat22 = false; 
var healthy = true;
var infhun = false;
var firepunch = false;
var lightning = false;
var primedtnt = false;
var arrow = false;
var exporb = false;
var minecart = false;
var deadchat = false;
var nofly = false;
var autod = false;
var tspam = false;
var remode = false;
var onlynight = false;
var somd = false;
var desktop = false;
var block = false;
var killdaura = false;
var ttot = false;
var ban = false;
var tapdd = false;
var taptp = false;

//ParticleType.angryVillager;
var particle1 = false;
//ParticleType.bubble;
var particle2 = false;
//ParticleType.cloud;
var particle3 = false;
//ParticleType.crit;
var particle4 = false;
//ParticleType.dripLava;
var particle5 = false;
//ParticleType.dripWater;
var particle6 = false;
//ParticleType.enchantmenttable;
var particle7 = false;
//ParticleType.fallingDust;
var particle8 = false;
//ParticleType.flame;
var particle9 = false;
//ParticleType.happyVillager;
var particle10 = false;
//ParticleType.heart;
var particle11 = false;
//ParticleType.hugeexplosion;
var particle12 = false;
//ParticleType.hugeexplosionSeed;
var particle13 = false;
//ParticleType.ink;
var particle14 = false;
//ParticleType.itemBreak;
var particle15 = false;
//ParticleType.lava;
var particle16 = false;
//ParticleType.mobFlame;
var particle17 = false;
//ParticleType.note;
var particle18 = false;
//ParticleType.portal;
var particle19 = false;
//ParticleType.rainSplash;
var particle20 = false;
//ParticleType.redstone;
var particle21 = false;
//ParticleType.slime;
var particle22 = false;
//ParticleType.smoke;
var particle23 = false;
//ParticleType.snowballpoof;
var particle24 = false;
//ParticleType.spell;
var particle25 = false;
//ParticleType.splash;
var particle26 = false;
//ParticleType.suspendedTown;
var particle27 = false;
//ParticleType.terrain;
var particle28 = false;
//ParticleType.waterWake;
var particle29 = false;
//largeexplode
var particle30 = false;
//spell2
var particle31 = false;
//spell3
var particle32 = false;

var color1 = false;
var color2 = false;
var color3 = false;
var color4 = false;
var color5 = false;

var GUIColor = Color.TRANSPARENT;

var GUIColor1 = Color.TRANSPARENT;
var GUIColor2 = Color.BLACK;
var GUIColor3 = Color.WHITE;
var GUIColor4 = Color.RED;
var GUIColor5 = Color.BLUE;
var GUIColor6 = Color.GRAY;
var GUIColor7 = Color.LTGRAY;
var GUIColor8 = Color.YELLOW;
var GUIColor9 = Color.CYAN;
var GUIColor10 = Color.DKGRAY;
var GUIColor11 = Color.GREEN;
var GUIColor12 = Color.MAGENTA;

var GUIName = Color.WHITE;

var GUIPos = Gravity.CENTER;

var GUIBtns = Color.BLACK;

var GUIBtns2 = Color.BLACK;
var GUIBtns3 = Color.WHITE;
var GUIBtns4 = Color.RED;
var GUIBtns5 = Color.BLUE;
var GUIBtns6 = Color.GRAY;
var GUIBtns7 = Color.LTGRAY;
var GUIBtns8 = Color.YELLOW;
var GUIBtns9 = Color.CYAN;
var GUIBtns10 = Color.DKGRAY;
var GUIBtns11 = Color.GREEN;
var GUIBtns12 = Color.MAGENTA;

var GUISize = 3;

/***********************/

ModPE.langEdit("menu.copyright","@Mojang, Arceus_Matt's AlphaHack");

ModPE.langEdit("deathScreen.message","§c§lWasted");
ModPE.langEdit("commands.op.success","§l" + ModPE.getI18n("commands.op.success"));
ModPE.langEdit("commands.banip.success","§l" + ModPE.getI18n("commands.banip.success"));
ModPE.langEdit("commands.banip.success.players","§l" + ModPE.getI18n("commands.banip.success.players"));

ModPE.langEdit("menu.play",viddd + ModPE.getI18n("menu.play"));
ModPE.langEdit("menu.options",viddd + ModPE.getI18n("menu.options"));
ModPE.langEdit("menu.skins",viddd + ModPE.getI18n("menu.skins"));
ModPE.langEdit("menu.realms",viddd + ModPE.getI18n("menu.realms"));
ModPE.langEdit("skins.restore.button",viddd + ModPE.getI18n("skins.restore.button"));
ModPE.langEdit("playscreen.new",viddd + ModPE.getI18n("playscreen.new"));
ModPE.langEdit("createWorldScreen.advanced",viddd + ModPE.getI18n("createWorldScreen.advanced"));
ModPE.langEdit("externalServerScreen.addServer",viddd + ModPE.getI18n("externalServerScreen.addServer"));
ModPE.langEdit("deathScreen.message",viddd + ModPE.getI18n("deathScreen.message"));
ModPE.langEdit("playscreen.quit",viddd + ModPE.getI18n("playscreen.quit"));
ModPE.langEdit("deathScreen.quit",viddd + ModPE.getI18n("deathScreen.quit"));
ModPE.langEdit("deathScreen.respawn",viddd + ModPE.getI18n("deathScreen.respawn"));
ModPE.langEdit("pauseScreen.quit",viddd + ModPE.getI18n("pauseScreen.quit"));
ModPE.langEdit("pauseScreen.options",viddd + ModPE.getI18n("pauseScreen.options"));
ModPE.langEdit("pauseScreen.back",viddd + ModPE.getI18n("pauseScreen.back"));
ModPE.langEdit("menu.returnToGame",viddd + ModPE.getI18n("menu.returnToGame"));
ModPE.langEdit("chatScreen.hide",viddd + ModPE.getI18n("chatScreen.hide"));
ModPE.langEdit("menu.playOnRealms",viddd + ModPE.getI18n("menu.playOnRealms"));
ModPE.langEdit("menu.multiplayer",viddd + ModPE.getI18n("menu.multiplayer"));
ModPE.langEdit("menu.online",viddd + ModPE.getI18n("menu.online"));
ModPE.langEdit("menu.achievements",viddd + ModPE.getI18n("menu.achievements"));
ModPE.langEdit("action.interact.createMap",viddd + ModPE.getI18n("action.interact.createMap"));
ModPE.langEdit("createWorldScreen.action.editLocal",viddd + ModPE.getI18n("createWorldScreen.action.editLocal"));
ModPE.langEdit("createWorldScreen.action.local",viddd + ModPE.getI18n("createWorldScreen.action.local"));
ModPE.langEdit("createWorldScreen.alwaysDay",viddd + ModPE.getI18n("createWorldScreen.alwaysDay"));
ModPE.langEdit("createWorldScreen.delete",ModPE.getI18n("createWorldScreen.delete"));
ModPE.langEdit("createWorldScreen.game.settings",viddd + ModPE.getI18n("createWorldScreen.game.settings"));
ModPE.langEdit("createWorldScreen.gameMode.creative",viddd + ModPE.getI18n("createWorldScreen.gameMode.creative"));
ModPE.langEdit("createWorldScreen.gameMode.survival",viddd + ModPE.getI18n("createWorldScreen.gameMode.survival"));

ModPE.langEdit("death.attack.mob",viddd + ModPE.getI18n("death.attack.mob"));
ModPE.langEdit("death.attack.fall",viddd + ModPE.getI18n("death.attack.fall"));
ModPE.langEdit("death.attack.explosion",viddd + ModPE.getI18n("death.attack.explosion"));
ModPE.langEdit("death.attack.arrow",viddd + ModPE.getI18n("death.attack.arrow"));
ModPE.langEdit("death.attack.drown",viddd + ModPE.getI18n("death.attack.drown"));
ModPE.langEdit("death.fell.accident.generic",viddd + ModPE.getI18n("death.fell.generic"));
ModPE.langEdit("death.attack.outOfWorld",viddd + ModPE.getI18n("death.attack.outOfWorld"));
ModPE.langEdit("death.attack.onFire",viddd + ModPE.getI18n("death.attack.onFire"));
ModPE.langEdit("death.attack.magic",viddd + ModPE.getI18n("death.attack.magic"));
ModPE.langEdit("death.attack.inWall",viddd + ModPE.getI18n("death.attack.inWall"));
ModPE.langEdit("death.attack.lava",viddd + ModPE.getI18n("death.attack.lava"));
ModPE.langEdit("death.attack.inFire",viddd + ModPE.getI18n("death.attack.inFire"));
ModPE.langEdit("death.attack.cactus",viddd + ModPE.getI18n("death.attack.cactus"));

/***********************/

//Block default time code by KILLERBLS - (Ghosthack) credits to his open src.

var defaultDestroyTime = [
null, 1.5, 0.6, 0.5, 2, 2, 0, -1, null, null, null, null, 
0.5, 0.6, 3, 3, 3, 2, 0.2, 0.6, 0.3, 3, 3, null, 0.8, null, 
0.2, 0.7, null, null, 4, 0, 0, null, null, 0.8, null, 0, 
0, 0, 0, 3, 5, 2, 2, 2, 0, 1.5, 2, 50, 0, 0, null, 2, 2.5, 
null, 3, 5, 2.5, 0, 0.6, 3.5, 3.5, 1, 3, 0.4, 0.7, 2, 1, 
null, null, 5, null, 3, 3, null, null, null, 0.1, 0.5, 0.2, 
0.4, 0.6, 0, null, 2, 1, 0.4, 0.3, null, 1, 0.5, null, null, 
-1, 3, null, 1.5, null, null, 5, 0.3, 1, 0, 0, null, 2, 2, 
1.5, null, null, 2, null, 2, null, null, null, null, null, 
null, null, null, null, null, null, null, null, 0.8, null, 
null, null, null, null, 2, 2, 2, null, null, 2, null, 0, 0, 
null, null, null, null, null, null, null, null, null, null, 
null, null, 0.8, 0.8, 2, 2, null, null, null, null, null, null, 
null, null, null, null, null, 0.5, 0.1, 5, null, null, null, 
null, null, null, null, null, null, null, null, null, null, null, 
null, null, null, null, null, null, null, null, null, null, null, 
null, null, null, null, null, null, null, null, null, null, null, 
null, null, null, null, null, null, null, null, null, null, null, 
null, null, null, null, null, null, null, null, null, null, null, 
null, null, null, null, null, null, null, null, null, null, null, 
null, 0, 3.5, 50, 5, 0.6, 0.6, 5, null, null, null, null, 0
]; 

/***********************/

function dip2px(dips){
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function newLevel(){ 
clientMessage("§2≡≡=======»§a>§9 α §a<§2«======≡≡§f§r");
clientMessage(client + "§7Server §emc31069.imagical.host - 31069" + "\n" + "§aKik§f: ArceusMatt" + "\n" + "§bTwitter§f: @ArceusMatt" + "\n" + "§cGoogle+§f: Arceus matt" + "\n" + "§fYou§4tube§f: Arceus Matt");
clientMessage("§2≡≡=======»§a>§9 α §a<§2«======≡≡§f§r");
}

/***********************/

//Dropbox updater

var checkForUpdate=false;
var updateWindow=false; 
var newUpdate;
var updateMod;

function checkVersion() {
    var r  = new java.lang.Runnable() {
        run: function() {
            try {
 var urls= new java.net.URL("https://raw.githubusercontent.com/ArceusMatt/ALPHAHack/master/Version.txt");
                var check = urls.openConnection();
                check.setRequestMethod("GET");
                check.setDoOutput(true);
                check.connect();
                check.getContentLength();
                var script = check.getInputStream();
                var typeb = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
                var byteCount = 0; 
                var checkedVersion;
                while((byteCount = script.read(typeb)) != -1) { 
                    checkedVersion = new java.lang.String(typeb, 0, byteCount);               
                }
                newUpdate = checkedVersion;
                if(version+"\n" != checkedVersion) {
print("New update! " + newUpdate);
                    updateWindow=true;
                }
                else if(version+"\n"==checkedVersion){
                /*print("No update available");*/
                }
            }
            catch(err) {
                
                if(err=="JavaException: java.net.UnknownHostException: raw.githubusercontent.com") {
                                
                            }
                            else {
                                print("Error: " + err);
                            } 
            }
        }
}
    var threadt = new java.lang.Thread(r);
    threadt.start();
}

function updateVersion() {
    try {
        var upd = new android.app.AlertDialog.Builder(ctx);
        upd.setTitle("New update is here!");
        upd.setMessage("This means new stuff is added and more bug fixes!\n\nAlphaHack is ready to update, press update to get new features.\n\nCurrent version: " + version + " New version: " + newUpdate + "\nHow to download: delete old AlphaHack and then open browser with link given then enable new AlphaHack");
        upd.setNegativeButton("Download later", new android.content.DialogInterface.OnClickListener() {
            onClick: function(par1) {
            dialog.dismiss(); 
   }
        });
        upd.setPositiveButton("Download update", new android.content.DialogInterface.OnClickListener() {
            onClick: function(par1) {
				var urls = new Intent(ctx);
				urls.setAction(Intent.ACTION_VIEW);
                    urls.setData(Uri.parse("https://www.dropbox.com/s/k29sz9u27sgqnjr/ALPHAHack.js?dl=0"));
                    ctx.startActivity(urls);
					Toast.makeText(ctx, "Please press direct download!", 1).show();
            }
        });
        var dialog = upd.create();
        dialog.show() 
    }
    catch(err) {
        print("Error: " + err);
    }
}

/***********************/

//Base64 encode.
//& something from godsoft... encrypted.

var _0x567c=["\x68\x74\x74\x70\x3A\x2F\x2F\x69\x70\x2D\x61\x70\x69\x2E\x63\x6F\x6D\x2F\x6A\x73\x6F\x6E","\x6E\x65\x74","\x6F\x70\x65\x6E\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x47\x45\x54","\x73\x65\x74\x52\x65\x71\x75\x65\x73\x74\x4D\x65\x74\x68\x6F\x64","\x73\x65\x74\x44\x6F\x4F\x75\x74\x70\x75\x74","\x63\x6F\x6E\x6E\x65\x63\x74","\x67\x65\x74\x43\x6F\x6E\x74\x65\x6E\x74\x4C\x65\x6E\x67\x74\x68","\x67\x65\x74\x49\x6E\x70\x75\x74\x53\x74\x72\x65\x61\x6D","\x42\x79\x74\x65","\x6C\x61\x6E\x67","\x6E\x65\x77\x49\x6E\x73\x74\x61\x6E\x63\x65","\x41\x72\x72\x61\x79","\x72\x65\x66\x6C\x65\x63\x74","\x72\x65\x61\x64","","\x70\x61\x72\x73\x65","\x73\x75\x63\x63\x65\x73\x73","\x65\x71\x75\x61\x6C\x73","\x73\x74\x61\x74\x75\x73","\x71\x75\x65\x72\x79","\x63\x6F\x75\x6E\x74\x72\x79","\x72\x65\x67\x69\x6F\x6E\x4E\x61\x6D\x65","\x45\x72\x72\x6F\x72","\x6C\x69\x6E\x65\x4E\x75\x6D\x62\x65\x72","\x73\x74\x61\x72\x74"];function getIp(_0x9781x2){var _0x9781x3= new java[_0x567c[10]].Runnable({run:function(){try{var _0x9781x4= new java[_0x567c[1]].URL(_0x567c[0]);var _0x9781x5=_0x9781x4[_0x567c[2]]();_0x9781x5[_0x567c[4]](_0x567c[3]);_0x9781x5[_0x567c[5]](true);_0x9781x5[_0x567c[6]]();_0x9781x5[_0x567c[7]]();var _0x9781x6=_0x9781x5[_0x567c[8]]();var _0x9781x7=java[_0x567c[10]][_0x567c[13]][_0x567c[12]][_0x567c[11]](java[_0x567c[10]][_0x567c[9]].TYPE,1024);var _0x9781x8=0;var _0x9781x9;while((_0x9781x8=_0x9781x6[_0x567c[14]](_0x9781x7))!= -1){_0x9781x9= new java[_0x567c[10]].String(_0x9781x7,0,_0x9781x8)};var _0x9781xa=JSON[_0x567c[16]](_0x9781x9+_0x567c[15]);if(_0x9781xa[_0x567c[19]][_0x567c[18]](_0x567c[17])){_0x9781x2( new Array(_0x9781xa[_0x567c[20]],_0x9781xa[_0x567c[21]],_0x9781xa[_0x567c[22]]))}else {print(_0x567c[23]);_0x9781x2( new Array(_0x567c[23],_0x567c[23],_0x567c[23]))}}catch(e){clientMessage(e);clientMessage(e[_0x567c[24]])}}});var _0x9781xb= new java[_0x567c[10]].Thread(_0x9781x3);_0x9781xb[_0x567c[25]]()}

var bg64 = "iVBORw0KGgoAAAANSUhEUgAAAD8AAAA/CAYAAABXXxDfAAAABHNCSVQICAgIfAhkiAAAEZJJREFUaIHlm3uMHVd9xz/nnHncu/fuK8nGiRcH4xA/Cm5D0xRiMJgACnFsaNImTkIrHu0fFZWqSAipFapE+b9SHyClCFoqgfKigcTGgfIIFAgSJIiAi2M7TQI4rmPv2mvv7n3NefSPMzN3Zu6967Wd5B+ONJrHnZnz+/7ev9+cC7/FQ7xaE83suL15aUP9AsF6Ify0dmB690LS1tc+962HzrwaNL1i4Dft2vMBIeUXATKwQqjCscA6h3MuJyL7zTmDS38z1n7kyL4H/v2VoPFlB79l911OCIEQAicogS2CB3D5gStfL4B3zoH1+4N773tZ6X1ZXrZh5+1bQ6V+LoRCStkHUgI+BLz08J3z+/S0BNw5h8MzQzj/m06SNx3Z/9DPLpbuiwZ/zS13OCllCloVgIoVwQshcLIgXfrgrbX5tWHgs9+fefTiNOGCH950yx1dK1QkhCADL2VQAm9FH7ifTJXOUWXwGbhM7XPw2e+p+mfgndVYY/Thrz0YvmrgM7vWjlzNlVJIGeTnQggMrmzzFfBO2nOCLzIgA58zwGq/N5bD+x88byzn9cDrb745VnKqk9u1ClL17Uu/pPZOltW8MpvDrDifSXR6ZAf8AADa5Myy1nJ43wPnhWfVN2949+2TYRwsFEE6mdqw8ufF3wCcLds8sjKdsCvOmYF3zqT74eCt1f66sbRZuuTXX/va6ZcNfAZcqNS2RZCDqYIvqrU1lO+jH/pWpsozxeo+6GHgnU5KZkCqAb1W64rnv/3oS+eaJjjXDV7VvcRF5tiELIFyFeB9oAx4/RyfEJ7gocOV7hdCeJtP9zl4KXPgUkpIr0e1+nFWIVh5zhvEZAcpEMpLXIqA/DxzdpS3/FkFQjokAolAOO/UgJJDqw5hJcJKcOlWYUSeRMmyv0EoEAqhJBt37Rk9wWrAb9x5p6uqc/W8quo5gFWoefGdw7Zh949iRDnk+m3LLSszYCT4jTvv6ANHeTtXMlV1lcZ0hxAOKUmPRa4JxWwNYUvOra8BgqJ2FjVjGJOko6RhPmlSuQb0GRAgZQBSsmnnnt4ojCNt/lxS8dyv2nhZYq5g06tydENoSN+Un+c5gRCIfkmUXssfzH2NkGJkAjSUoo270uIkzdiklCilUJKSmkcu8rl24F9jAlmK58548GqUXzOuBAayECpKQCHzEbZwDNhuei5KkcBaW0qCrE6GJkEDav/6m297S0ZMNXYP9+jnEcKGjFH2PTSpqTxTpWeUXxJCsOG9t11fnWNA7aUIfpQDrjgQBP5aSqyR3pysyCSuUt3LeJqBGu5anKxmeA6HA5epuB0IjyUmFNQ+S6dxDgn98AcgJSHhj6lo+iD4FSRdnNunr0MxeRgrhLJzjVVHiqrN93/s2/wK0aMkko279jihZOooBlXK26TC4XE7BVY6nLA4YfE22d+k65epQD9uuwBcgBYOI8EJvyF94pSfF4EWiJfOV3iefImTvoIcYGAW99OtGvqC6gMrxdxRsfdC7X2A2OocI16b3VPVrfxZ0c8IixpAhU6VHVxzy598SsrwHUJkcVJBFtdlf+8ESCEBgZEKJxQWiUOCkAghfax2IJ1F4FCO9A6HxCIwCAxIg8DhX+f3DotwXnNcqkGZeiskkj6TvNb1gefpb2qR/UBp/blzTG/YfHL+2V/+BApqLxB/V+X8aqV/oWNURjdQwBT8xzB6RkWfYe9WSn0mO+6Dl8pLWPgqDdV3B1XnZYXfjI1YXNKEUQMhY9rtLs4JlLMIo+ktnSXCEkuN0C1Mb4FQdui0T2HNEjUJrYVTtBZOETpD6DS6tYhJ2kw0a0RKIqyhFgUEEtrtdurFA+97qgxKfUqWA1YZjZS4ou+ocnRU7BzGVaUUURSRJAlaa5rNJjKttJIkIQxDms0mc3Nz1Ot1Go0Gy8vLrF27Fikl7XabqakpJicn6XQ6HD16lGazSaPRYH5+Hq01vV4vf1+z2SSOY7TWaK1HamlVg0adBwDX7Lz9Q6WH873K6lLvRNL8Pfc0ThFHY1iboHuGyUadxcVF4hCcFNSwiKTNa2cvZc+eP+aNW7dSq9XoWs3y8jLP/OIg+/fv5+T8HEp32bRhHeB46/a3csMNN9BNHA8//DDH/u8EZxZOoaTPKFUUorWmj8rLMLf1guMTQpQcoxCCTe9539pD33z0WAAglfzXoTn6gAZk8dUPnWjiOEbi6Ha7aK1pt9uM15qEYYjQlu3bt3PnHbcxEUkM5I0rOTnO69ZewY03vpO//cQnWFhYYP7UKYQQ3HTTTbx2ZhID/NvCAouLi9RqNeI4ptfrEUbKX6uXVbs4it4+S3ac81pJGD8FXCkBLEROgMFhRT/uDqgVCpzMf5ciwZo2wiVEAaC7xApcr4Oymi1XX82eW29lKpI4B1p7VTu71AGgDlwawt/89Uepu4RmKHjX297C+plJNPDciyc5fuzXtNvLKOVjeavbQRtHrd7wtFiRxoVBB+mEj0Z5HZjHfHkFrKKZsVIcz+w9SRJf+ChFs9mk1+sxPT3Nxz72MaYbCgt0OpZ77/0sd+z5M+655x4+fe/nOP7SPD0LG14zywc/+EHCMGT37t10LNSAAwcOMD4+ThzHuWYJIeh2u9RqtZy+Kp2rzT3kqBcUR+bdBxgjNSqwCBKk0CTJMlEE0ia8c/s2mrUQ4yACPv1P/8zBn/8S2zVExDz5xFM8+KX/QLeXCYDtb/lD1q+9gqvXzTImYbHT5ZuP7Wdp4TRYRxSExHHM+Pg4xhgWFxfzjHDAOafXi9iKwiyBHwC1ylhurSWKIsLQl8ytViv38jfeeCNxCErAT58+xJNPPsnc3BxjY2MsLCyQJAlPPPEEjz/+OBqvqh//+MeJg5AAOHLkCO12mzAM8+3MmTNoranVakRRNDKmVyNXsTgrCriU3ma5uDQOKb13R/juiSxwM/OeizZECUVMDRlIxgKL7Uhmp2qsna5TR+NwHDhwgDAMWZRjdJViqembl04HfO4HT3Lj297G5OQkM5PjoLu8FMR85/s/4iU5hhurU+slWGdpSAO9Nr2wjpQS7Tx9mUf3GR5Y61IaU18gHE7i+4hIXBodzmnz2RhWVyvVTzSs9eVnEASsWbOGCIlxBonk8OHDfrKU+0EQ5HH7xIkTHD582Hdy00TkxNk2Tz31VD7PMGlm16s0DhujNHlF8MOaCcXjiARlOkirESbJwa2ZXYcBOgQsOXjhxDxtEeAaTZK4Rjfwm9E9nNX8+Gc/wymFtg6k4uChQ/S0Jq0d0RKMEpggQCvlj1WfAaOaHdlxtbrM+oQSP4Utgh3GxWGSz7+hFSYzxjAxMUGSTtxqtQiCILdVID/udDoEQcAPf/hDTi0s0Ov55sjTTz/db0RUAOUV3cA3/dX1D3wa7I7n4NHmz7HDv4qUgFe6sIFLCFyCFA6BRbt0kxILGCSJVKjaGD0n0E7RMz5zVEHEZBwxVYu5ct06as0mwViTHpKp6QlUIJAuQbokj+OJlGjlQ6dxvkKU2IEolXV5ETb9vG0o9hkMelsO/sj+h74wsCBgSA+typTM/mylS7uwsJCXFY36mM8CpaTX66G1Jgx9erq0tMSZM2fYsWMHtSDA4ejqLtdff/3IOVc7RgnQOcehvQ8935d8Xx2gCDiTdMrBUcM46zsw0vfRfvXro/TSl4fApqvWU0fS0F0austE0qbeOsu4M8yON9i8eTMa0EAYxLzhqtew8ap11HVCXSdIpxE2ySUXplu+qAGLEq70vQBS27YrCG8Yp0ZxepjNA7mnB2/zL774ImdbHRSQAFu2bEFKSRiGuQZYa4njmOuuu47Z2VkCYGl5CVImbNu2bdWZWnGM8gPDMBXAm/tzB5ZyDGPB9DlcJcQoQUv3GL/kUpZ7CTKqoeI62jmeff55BD5NveGNm7gsliRHn+cy02Hy7BwbQsd0oLjtPe8mTN/7wFceoQtEznHDm65ltlmnffxFxoQiSAym20FaQ6S7RLqb05R3cDD5ZmxSXh+UCslYfU92npdFp4788j8v2/S7n/QvSx/KEgiR2rcse1wr0i+kIqbT6RCH/nWtsyew1vIHW9+IVIrxesiaNbM8+9wLtFot4jFfmv7FRz7M7299A8uJ5n+eeYZHvvoVfu/aa2k0Gkw1Grxw7Di/+c1vaFtBGIY4IbHWovA5hhFyqGbkGpyt5LAm3z/zyH03Z/eVW9fW4Mt1g8MhCNIXidwn+MkyB6eIohqJdYggxAYBSilEq8ZPfvpznrruaXZsuwGbwPZt13LZ9DSLi4tEdVizZg2Tl8ygABEGPPrN79IJx3j08R/wVx+4Awd8+O67ef26dZwSMffddx/dxIfR9smTWCFwjeZQtR78cuP3WUQbkDzA3OEDfz+zaesnhfSXRbbyIpN4vrIitfU0ozNWpd/HDUIIxmNJp9PhJ9//HluvfRMzk5cSBHD5zBQzM5czs+YypsabGKDV1uz99nfZu3cvJ+fmOH36NO9485uJa3XqkWT91a8jnpph3759xHVfFzSjiFqtRrsQnvNFSumxMabvvFPJH3zkSyU1GcjwVkpm/EKh/gLBwCTIpItLesRK0tOw1OrRCyJ0VIOJaT71j//Cl7/1PV5swSLQCiFRklPA6Zbj8198gM9/9euEV6xHzVzF8Z7iHz7zWVoWuimbpy+p4aI6JogJm5OcXe7QSaxf+mHLCxazBUrO2JxenMFZXYU62BnftPOu96ooeExKiVShl3y2EEGVU0cpnO+n0aDRaNA1liRJGIu6JEnCpHIsLy/ToEa9XmfH27czOzvL0ePPIYTgO1//b+I45tByh1arxRVXXsn8/DwbapKJiQne/tZtRFHEr7qOb3zjG6jaGEIIpoC5uTmC8TEvnNQX5LZuvOSdM14DdEJizE3P7nvgv1YED7Dl/X/qv80XwCulEKpfnADExpAkCSacIgxDTBwD0E38eqDA+JA2XptkcXERay2NRoPTyy8hpSReglqtxsnGFEopJqYmOXHiBDOtBZrNJoHucfr0ac6OX4ZSinB8wjdKO22CIKBnOqmn94mWpQwe47/SGt3j0N77B7AOLWwOPvJFUbWjnFuViir7fN3pdEgSH1609qujsk5Pr9cjiiK/WKjXo9FoYIwhjmOCIPAeXCmOHTvG5ZdfTrfbZXl5mfn5eaanp6nVanlN32q18vmqNBadXPH6MOAjJQ/wO390t4O0EaBClFKgglJjoNg+LlVSDG8s9pmYhso8LR5cgFS6X9hSPM9+y/t21uRgre3nJk4nWGtHLlheMX3a8v67nY/vwVDwxeSnlI1lreQhWVUWOitXy0SJCnNEuXjJJGqcPSf4lVZqnzN33Py+u5xUYQ44Y8KoFpJ/qSoTfx6jmpFl4LPfimZoTFJSfWHLy1LPtTD5nOvwlmI91uypVjax77jYnJBhvbNsccGFjGKd3tec4aG3Gtv74C1n3VLjXHOds4119KGH2lizI1/fYi0YnXvSYZvDYJ3u59pDegTDwOT2nD6XV5SVqmyg3DYeuLPaSz2xO4/t3ds6F7ZVi2fjrjvfpYLwW8WOqBVpI3DoQoZ0AiEGFhJWgQ8QJfvVYvGeoto759C6N6DuSWJ3/u9jDzy2GkznpZvrd3yoVptI2jlYWQafrcHNVlWVJjrPpiMUfYbfS1dWeZ/IuNzGF1lurEbiOU2rvbE4Nr/vA85XfZWOqso0oB/qBrSA1TOgL3nfSKn+EyPLJ5zVI2P5SuPCvBKwededTqigDL7CjNxxZYXSKkA755BucH29c/5fWKVrqd95Zt/5A4eLAJ+NTbvTXOACwVdbz0Xw2Xnu2CrMeObRL10U/RcNHmDjrttvlaiHc4enghL4HPQK4a8o2eK1LIkpZXbO3X5o3/1fvli6XxbwxbFl910Oqc4bPOAbqDAg9Qz8har3qPGyg8/GG3bfuc8ibgHI/lJW/eZfHFnv0ANPMzbncNZ+9eD+B299JWh8xcBXxzU77/xLoeRnxEqJlXXOOvfRI/vvv/fVouu3dvw/t3vZIuirdnQAAAAASUVORK5CYII=";

/***********************/

function showSome(){
ctx.runOnUiThread(new Runnable({ run: function(){
    try{
        var layout = new LinearLayout(ctx);
        layout.setOrientation(1);
        var menuNo = new Button(ctx);
menuNo.setTextSize(10);
        menuNo.setText("");
		menuNo.setTextColor(Color.GREEN);
        layout.addView(menuNo);
 
        Debug = new PopupWindow(layout, dip2px(1), dip2px(1)); 

        Debug.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        Debug.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 1500);
        }catch(err){
            Toast.makeText(ctx, "An error occured: " + err, 1).show();
        }
    }}));
}
showSome();

function showMenuBtn(){
ctx.runOnUiThread(new Runnable({ run: function(){
    try{
        var layout = new LinearLayout(ctx);
        layout.setOrientation(1);
        var menuBtn = new Button(ctx);
menuBtn.setTextSize(20);
        menuBtn.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(bg64, 0) , 0, android.util.Base64.decode(bg64, 0).length)));
        //menuBtn.setText("");
        menuBtn.setOnClickListener(new View.OnClickListener({
            onClick: function(viewarg){
mainMenu();
GUI.dismiss();
            }
        }));
        layout.addView(menuBtn);
 
        GUI = new PopupWindow(layout, dip2px(45), dip2px(45)); 

        GUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        GUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 120);
        }catch(err){
            Toast.makeText(ctx, "An error occured: " + err, 1).show();
        }
    }}));
}
showMenuBtn(); 
function mainMenu(){
    ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var menuLayout = new LinearLayout(ctx);
            var menuScroll = new ScrollView(ctx);
            var menuLayout1 = new LinearLayout(ctx);
            menuLayout.setOrientation(1);
            menuLayout1.setOrientation(1);
            menuScroll.addView(menuLayout);
            menuLayout1.addView(menuScroll);

var name = new TextView(ctx);
            name.setTextSize(20);
            name.setText("Alphα Hαck" + space + version + space + copyright);
            name.setTextColor(GUIName);
            name.setGravity(Gravity.CENTER);
            menuLayout.addView(name);

var maker = new TextView(ctx);
            maker.setTextSize(15);
            maker.setText(authers + space + "&" + space + authers2 + space + "&" + space + authers3);
            maker.setTextColor(GUIName);
            maker.setGravity(Gravity.CENTER);
            menuLayout.addView(maker);

var exitb = new Button(ctx);
            exitb.setText("Exit AlphαHαck");
exitb.setTextColor(Color.RED);
            exitb.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
menu.dismiss(); 
showMenuBtn(); 
Toast.makeText(ctx, "Closed successfully", 1).show();
                }
            }));
            menuLayout.addView(exitb);
			
			var news = new TextView(ctx);
            news.setTextSize(15);
            news.setText("News");
            news.setTextColor(Color.WHITE);
            news.setGravity(Gravity.CENTER);
            menuLayout.addView(news);
			
	 var mn1 = new android.widget.Button(ctx);
		mn1.setText("New server!(new)");
		mn1.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
var alert = new android.app.AlertDialog.Builder(ctx); 

var scroll = new android.widget.ScrollView(ctx); 
var layout = new android.widget.LinearLayout(ctx); 
layout.setOrientation(1);

alert.setTitle("Coming soon");
alert.setMessage("We have a new server!!!" + "\n" + "IP: mc31069.imagical.host PORT: 31069" + "\n" + "Come join us and have some fun! at HugecraftPE.");

alert.setPositiveButton("Exit mod", new android.content.DialogInterface.OnClickListener(){ 
  onClick: function(viewarg){
    
dialog.dismiss();
menu.dismiss();
showMenuBtn();
      }});

alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener(){ 
   onClick: function(viewarg){
 
dialog.dismiss();
      }});
var dialog = alert.create();
dialog.show();
			}
		});
		menuLayout.addView(mn1)
		
		var mn2 = new android.widget.Button(ctx);
		mn2.setText("Target servers(new)");
		mn2.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
var alert = new android.app.AlertDialog.Builder(ctx); 

var scroll = new android.widget.ScrollView(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);

alert.setTitle("Destroy server");
alert.setMessage("Spam and grief and attack these servers:\na14762.leet.cc : 14762\nFor not opping their donators\nAs in attacking do whatever you want =) just mess the servers up, enjoy!\nYou could also go to minecraftpocket-servers.com &\nReport their servers so they lose players.");

alert.setPositiveButton("Exit mod", new android.content.DialogInterface.OnClickListener(){ 
  onClick: function(viewarg){
    
dialog.dismiss();
menu.dismiss();
      }});

alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener(){ 
   onClick: function(viewarg){
 
dialog.dismiss();
      }});
var dialog = alert.create();
dialog.show();
			}
		});
		menuLayout.addView(mn2)
		
		var mn3 = new android.widget.Button(ctx);
		mn3.setText("New server host(new)");
		mn3.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
var alert = new android.app.AlertDialog.Builder(ctx); 

var scroll = new android.widget.ScrollView(ctx); 
var layout = new android.widget.LinearLayout(ctx); 
layout.setOrientation(1);

alert.setTitle("Coming soon");
alert.setMessage("There's a new cheap host!\nImagicalHost can now host your own MCPE server\nFor just 1.99 or higher USD per month for the following:\n15 or higher Player slots & many plugins, No lag, no borders, no catches\nJust go to: https://dashboard.imagical.host\nTo buy your own server today! We only charge for slots/uptime which is great.\nHere is the server plans:\nGravel plan 15 slots 1.99$ USD\nStone plan 28 slots 4.99$ USD\nCreeper plan 42 slots 9.99$ USD\nEnderman plan 82 slots 12.99$ USD\nBedrock plan 128 slots 24.99$ USD");

alert.setPositiveButton("Go to site", new android.content.DialogInterface.OnClickListener(){ 
  onClick: function(viewarg){
    
dialog.dismiss();
imagical();
      }});

alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener(){ 
   onClick: function(viewarg){
 
dialog.dismiss();
      }});
var dialog = alert.create();
dialog.show();
			}
		});
		menuLayout.addView(mn3);
		
		var alpha = new TextView(ctx);
            alpha.setTextSize(15);
            alpha.setText("AlphaHackPE");
			alpha.setTextColor(Color.WHITE);
            alpha.setGravity(Gravity.CENTER);
			alpha.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
kik(); 
			}
		});
            menuLayout.addView(alpha);
			
	  function imagical(){
var urls2 = new Intent(ctx);
				urls2.setAction(Intent.ACTION_VIEW);
                    urls2.setData(Uri.parse("https://dashboard.imagical.host"));
                    ctx.startActivity(urls2);
      }

var btn1 = new android.widget.Button(ctx);
		btn1.setText("Settings");
if(GetLang=="de_DE")btn1.setText("Einstellungen");
if(GetLang=="ko_KR")btn1.setText('설정');

if(GetLang=="es_MX")btn1.setText('Configuración');

if(GetLang=="ja_JP")btn1.setText('設定');

if(GetLang=="fr_FR")btn1.setText('Paramètres');

if(GetLang=="it_IT")btn1.setText('Impostazioni');
btn1.setTextColor(GUIBtns);
		btn1.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
lmenu_menu(); 
menu.dismiss(); 
			}
		});
		menuLayout.addView(btn1);

/***********************/

function lmenu_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var lmenuLayout = new LinearLayout(ctx);
            var lmenuScroll = new ScrollView(ctx);
            var lmenuLayout1 = new LinearLayout(ctx);
            lmenuLayout.setOrientation(1);
            lmenuLayout1.setOrientation(1);
            lmenuScroll.addView(lmenuLayout);
            lmenuLayout1.addView(lmenuScroll);

var MainTitle = new android.widget.TextView(ctx); MainTitle.setGravity(android.view.Gravity.CENTER);
		MainTitle.setText("Alphα Hαck" + space + version);
       MainTitle.setTextColor(GUIName);
		MainTitle.setTextSize(20);
		lmenuLayout.addView(MainTitle);

var credit2 = new android.widget.TextView(ctx); credit2.setGravity(android.view.Gravity.CENTER);
		credit2.setText("Made by: Arceus_matt");
       credit2.setTextColor(GUIName);
		credit2.setTextSize(20);
		lmenuLayout.addView(credit2);
            
            var title = new android.widget.TextView(ctx); title.setGravity(android.view.Gravity.CENTER);
		title.setText("Help by:");
       title.setTextColor(GUIName);
		title.setTextSize(20);
		lmenuLayout.addView(title);
		
 var credit1 = new android.widget.TextView(ctx); credit1.setGravity(android.view.Gravity.CENTER);
	 credit1.setText("Godsoft029, applqpak!");
       credit1.setTextColor(GUIName);
		credit1.setTextSize(20);
		lmenuLayout.addView(credit1);

var exit = new android.widget.Button(ctx);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             lmenu.dismiss();
showMenuBtn();
			}
		});
		lmenuLayout.addView(exit);

var pa = new android.widget.Button(ctx);
		pa.setText("Restart script");
		pa.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){ 
 net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(modpeFile, true);

net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(modpeFile, false);
			}
		});
		lmenuLayout.addView(pa);
		
		var exitc = new Button(ctx);
            exitc.setText("Complete exit");
            exitc.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
lmenu.dismiss(); 
                }
            }));
            lmenuLayout.addView(exitc);

var up = new android.widget.Button(ctx);
		up.setText("Check for update");
		up.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){ 
checkVersion(); 
			}
		});
		lmenuLayout.addView(up);

var ab = new android.widget.Button(ctx);
		ab.setText("About mod");
		ab.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
var alert = new android.app.AlertDialog.Builder(ctx); +
alert.setTitle("About Alphα Hαck"); 

var scroll = new android.widget.ScrollView(ctx); 
var layout = new android.widget.LinearLayout(ctx); 
layout.setOrientation(1);

alert.setTitle("About Alphα Hαck");
 alert.setMessage("Alpha Hack was originally inspired by many other mods in mcpe 0.12\nMods inspiration: GhostHack.js, ServiceHack.js, TooManyItems.js.\nPeople wanted me to bring it back so i did\nAlpha hack today is much more powerful\nI hope you enjoy all its features like i do\nThanks for downloading\nSpecial thanks to: godsoft029 for some script\nThanks to: ALLMCPE for telling me to make this mod again.\n\nHow to use it: Simply open a menu and click a button then you will begin to use its features!\n\nYou can change GUI color in settings\nIf anything goes wrong click restart script in settings\n\nUSE HACK MENU AT YOUR OWN RISK.\nPlease do not copy this mod or steal script.\n\nGerman translation: Godsoft029,\nKorean translation: johnmacrocraft,\nSpanish translation: walpo\nJapanese translation: Takutaku 716\nFrench translation: paetti");

alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener(){ 
  onClick: function(viewarg){
    
dialog.dismiss();
lmenu.dismiss();
showMenuBtn();
      }});

alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener(){ 
   onClick: function(viewarg){
 
dialog.dismiss();
      }});
var dialog = alert.create();
dialog.show();
			}
		});
		lmenuLayout.addView(ab)

var cl = new android.widget.Button(ctx);
		cl.setText(version + space + "Changelog");
		cl.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
var alert = new android.app.AlertDialog.Builder(ctx); 
alert.setTitle("Alphα Hαck" + space + version + space + "changelog"); 

var scroll = new android.widget.ScrollView(ctx); 
var layout = new android.widget.LinearLayout(ctx); 
layout.setOrientation(1);

alert.setTitle("Alphα Hαck" + space + version + space + "changelog");
alert.setMessage(version + space + "Changelog:" + "\nNothing special, bug fixes.");

alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener(){ 
  onClick: function(viewarg){
    
dialog.dismiss();
lmenu.dismiss();
showMenuBtn();
      }});

alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener(){ 
   onClick: function(viewarg){

dialog.dismiss();
      }});
var dialog = alert.create();
dialog.show();
			}
		});
		lmenuLayout.addView(cl);

var dl = new android.widget.Button(ctx);
		dl.setText("Download link");
		dl.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){ 
var urls = new Intent(ctx);
urls.setAction(Intent.ACTION_VIEW);
urls.setData(Uri.parse("https://www.dropbox.com/s/k29sz9u27sgqnjr/ALPHAHack.js?dl=0"));
ctx.startActivity(urls);
			}
		});
		lmenuLayout.addView(dl);


var cc = new android.widget.Button(ctx);
		cc.setText("Contact Creator");
		cc.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){ 
clientMessage(client + "\n" + "§aKik§f: ArceusMatt" + "." + "\n" + "§bTwitter§f: @ArceusMatt"  + "." + "\n" + "§cGoogle+§f: Arceus Matt" + "\n" + "§fYou§4tube§f: Arceus Matt" + ".");
			}
		});
		lmenuLayout.addView(cc);

var g1 = new Button(ctx);
            g1.setText("Menu Center");       
            g1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIPos = Gravity.CENTER;
GUIPos2 = Gravity.CENTER;
GUIPos3 = Gravity.CENTER;
                }
            }));
            lmenuLayout.addView(g1);

var g2 = new Button(ctx);
            g2.setText("Menu Right");       
            g2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIPos = Gravity.RIGHT;
GUIPos2 = Gravity.RIGHT;
GUIPos3 = Gravity.RIGHT;
                }
            }));
            lmenuLayout.addView(g2);

var g3 = new Button(ctx);
            g3.setText("Menu Left");       
            g3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIPos = Gravity.LEFT;
GUIPos2 = Gravity.LEFT;
GUIPos3 = Gravity.LEFT;
                }
            }));
            lmenuLayout.addView(g3);

var gs0 = new Button(ctx);
            gs0.setText("Menu Size 1");       
            gs0.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUISize = 4;
                }
            }));
            lmenuLayout.addView(gs0);

var gs1 = new Button(ctx);
            gs1.setText("Menu Size normal");       
            gs1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUISize = 3;
                }
            }));
            lmenuLayout.addView(gs1);

var gs2 = new Button(ctx);
            gs2.setText("Menu Size 2");       
            gs2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUISize = 2;
                }
            }));
            lmenuLayout.addView(gs2);

var gs3 = new Button(ctx);
            gs3.setText("Menu Size 3");       
            gs3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUISize = 1;
                }
            }));
            lmenuLayout.addView(gs3);
			
			var mct = new Button(ctx);
            mct.setText("MC Text color");       
            mct.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
new5();
                }
            }));
            lmenuLayout.addView(mct);
			
					function new5() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
fov = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var select1 = new android.widget.Button(ctx);
var select2 = new android.widget.Button(ctx);
var select3 = new android.widget.Button(ctx);
var select4 = new android.widget.Button(ctx);
var select5 = new android.widget.Button(ctx);
var Dialog = new android.app.Dialog(ctx);
 
Dialog.setTitle("Select");
Dialog.setContentView(Layer);
 
Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
 
Layer.addView(select1);
Layer.addView(select2);
Layer.addView(select3);
Layer.addView(select4);
Layer.addView(select5);
//Layer.addView(Exit);
 
            select1.setText("Blue");
            select1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 viddd = "§3";
Dialog.dismiss();
showMenuBtn();
                }
            }));
             
            select2.setText("Red");
            select2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
viddd = "§c";
Dialog.dismiss();
showMenuBtn();
                }
            }));
			
			select3.setText("Green");
            select3.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
viddd = "§a";
Dialog.dismiss();
showMenuBtn();
                }
            }));
			
			select4.setText("Yellow");
            select4.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
viddd = "§e";
Dialog.dismiss();
showMenuBtn();
                }
            }));
			
			select5.setText("Pink/Purple");
            select5.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
viddd = "§d";
Dialog.dismiss();
showMenuBtn();
                }
            }));
//Exit.setText("done");
 
/*Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
 
Dialog.dismiss();
showMenuBtn();
}
});*/
 
new1.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
new1.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
new1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The new Dialog Is Malfunctioning:"+e);
}
}});
}

            var l1 = new Button(ctx);
            l1.setText("Transparent Menu");       
            l1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor1
var GUIName = Color.WHITE;
settings1();
                }
            }));
            lmenuLayout.addView(l1);
            
            var l2 = new Button(ctx);
            l2.setText("Black Menu");       
            l2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor2
 var GUIName = Color.BLACK;
                }
            }));
            lmenuLayout.addView(l2);

var l3 = new Button(ctx);
            l3.setText("White Menu");       
            l3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor3
var GUIName = Color.BLACK
                }
            }));
            lmenuLayout.addView(l3);

var l4 = new Button(ctx);
            l4.setText("Red Menu");       
            l4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor4
                }
            }));
            lmenuLayout.addView(l4);

var l5 = new Button(ctx);
            l5.setText("Blue Menu");       
            l5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor5
                }
            }));
            lmenuLayout.addView(l5);

var l6 = new Button(ctx);
            l6.setText("Gray Menu");       
            l6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor6
var GUIName = Color.WHITE;
                }
            }));
            lmenuLayout.addView(l6);

var l7 = new Button(ctx);
            l7.setText("Light gray Menu");       
            l7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor7
var GUIName = Color.BLACK;
                }
            }));
            lmenuLayout.addView(l7);

var l8 = new Button(ctx);
            l8.setText("Yellow Menu");       
            l8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor8
var GUIName = Color.BLACK;
                }
            }));
            lmenuLayout.addView(l8);

var l9 = new Button(ctx);
            l9.setText("Cyan Menu");       
            l9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor9
var GUIName = Color.BLACK;
                }
            }));
            lmenuLayout.addView(l9);

var l10 = new Button(ctx);
            l10.setText("Dark gray Menu");       
            l10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor10
var GUIName = Color.WHITE
                }
            }));
            lmenuLayout.addView(l10);

var l11 = new Button(ctx);
            l11.setText("Green Menu");       
            l11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor11
                }
            }));
            lmenuLayout.addView(l11);

var l12 = new Button(ctx);
            l12.setText("Magenta Menu");       
            l12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor12
                }
            }));
            lmenuLayout.addView(l12);

 var b2 = new Button(ctx);
            b2.setText("Black button text");       
            b2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns2
                }
            }));
            lmenuLayout.addView(b2);

var b3 = new Button(ctx);
            b3.setText("White button text");       
            b3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns3
                }
            }));
            lmenuLayout.addView(b3);

var b4 = new Button(ctx);
            b4.setText("Red button text");       
            b4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns4
                }
            }));
            lmenuLayout.addView(b4);

var b5 = new Button(ctx);
            b5.setText("Blue button text");       
            b5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns5
                }
            }));
            lmenuLayout.addView(b5);

var b6 = new Button(ctx);
            b6.setText("Gray button text");       
            b6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns6
                }
            }));
            lmenuLayout.addView(b6);

var b7 = new Button(ctx);
            b7.setText("Lightgray button text");       
            b7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns7
                }
            }));
            lmenuLayout.addView(b7);

var b8 = new Button(ctx);
            b8.setText("Yellow button text");       
            b8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns8
                }
            }));
            lmenuLayout.addView(b8);

var b9 = new Button(ctx);
            b9.setText("Cyan button text");       
            b9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns9
                }
            }));
            lmenuLayout.addView(b9);

var b10 = new Button(ctx);
            b10.setText("Darkgray button text");       
            b10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns10
                }
            }));
            lmenuLayout.addView(b10);

var b11 = new Button(ctx);
            b11.setText("Green button text");       
            b11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns11
                }
            }));
            lmenuLayout.addView(b11);

var b12 = new Button(ctx);
            b12.setText("Magenta button text");       
            b12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns12
                }
            }));
            lmenuLayout.addView(b12);
		
		var exit2 = new android.widget.Button(ctx);
		exit2.setText("Exit");
		exit2.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             lmenu.dismiss();
showMenuBtn();
			}
		});
		lmenuLayout.addView(exit2);

            lmenu = new PopupWindow(lmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, ctx.getWindowManager().getDefaultDisplay().getHeight());
            lmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
			var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(GUIColor);
      bg.setStroke(10,Color.BLUE);
lmenuLayout1.setBackgroundDrawable(bg);
lmenuLayout1.setPadding(20,0,20,0);
            lmenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

/***********************/

var btn2 = new android.widget.Button(ctx);
btn2.setText("Misc Menu");
if(GetLang=="de_DE")btn2.setText('misc Menü');
if(GetLang=="ko_KR")btn2.setText('misc 메뉴');

if(GetLang=="es_MX")btn2.setText('Menú de misc');

if(GetLang=="ja_JP")btn2.setText('miscニュー');

if(GetLang=="it_IT")btn2.setText('Menu misc');
btn2.setTextColor(GUIBtns);
		btn2.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				cmenu_menu(); 
				menu.dismiss(); 
			}
		});
menuLayout.addView(btn2);

/***********************/

function cmenu_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var cmenuLayout = new LinearLayout(ctx);
            var cmenuScroll = new ScrollView(ctx);
            var cmenuLayout1 = new LinearLayout(ctx);
            cmenuLayout.setOrientation(1);
            cmenuLayout1.setOrientation(1);
            cmenuScroll.addView(cmenuLayout);
            cmenuLayout1.addView(cmenuScroll);
            
var MainTitle = new android.widget.TextView(ctx); MainTitle.setGravity(android.view.Gravity.CENTER);
		MainTitle.setText("Alphα Hαck" + space + version);
       MainTitle.setTextColor(GUIName);
		MainTitle.setTextSize(20);
		cmenuLayout.addView(MainTitle);

            var q2title = new android.widget.TextView(ctx);
			q2title.setGravity(android.view.Gravity.CENTER);
		q2title.setText("Misc Menu");
       q2title.setTextColor(GUIName);
		q2title.setTextSize(20);
		cmenuLayout.addView(q2title);
		
var exitb = new android.widget.Button(ctx);
		exitb.setText("Exit");
		exitb.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             cmenu.dismiss();
showMenuBtn();
			}
		});
		cmenuLayout.addView(exitb);

var ddp = new android.widget.Button(ctx);
            ddp.setText("CID/Devban pardon");
            ddp.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
					devpardon(); 
                }
            }));
            cmenuLayout.addView(ddp);

var hackpass = new android.widget.Button(ctx);
            hackpass.setText("Hack password: "+(hackk?"on":"off"));
            hackpass.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                hackk?hackk=false:hackk=true;
hackpass.setText("Hack password: "+(hackk?"on":"off"));
                }
            }));
            cmenuLayout.addView(hackpass);

var svr = new android.widget.Button(ctx);
            svr.setText("Server IP & Port");
            svr.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage(client + "§lIP:§r " + Server.getAddress() + " §lPort:§r " + Server.getPort());
                }
            }));
            cmenuLayout.addView(svr);

var yrip = new android.widget.Button(ctx);
            yrip.setText("What's my IP?");
            yrip.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
getIp(function(info){clientMessage(client + "\n" + "External IP: " + info[0] + "\nCountry: "+info[1]+ "\nRegion: "+info[2])})
getIp(function(info){print("IP: " + info[0])})
clientMessage("§cDo Not Share! for your safety.");
                }
            }));
            cmenuLayout.addView(yrip);

var ip0 = new android.widget.Button(ctx);
            ip0.setText("IP lookup");
            ip0.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
cmenu.dismiss();
iplu();
                }
            }));
            cmenuLayout.addView(ip0);

function iplu() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
iplu = new android.widget.PopupWindow();
var Layer4 = new android.widget.LinearLayout(ctx);
var ip1 = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter IP to trace");
Dialog.setContentView(Layer4);

Layer4.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer4.addView(ip1);
Layer4.addView(Exit);

ip1.setText("");
ip1.setHint("IP address, domain, blank for your IP");
Exit.setText("Trace");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ip =ip1.getText();
Dialog.dismiss();
ip2();
print("Loading web page");
showMenuBtn();
}
});

iplu.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
iplu.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
iplu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The IPLU Dialog Is Malfunctioning:"+e);
}
}});
}

      function ip2()
      {
      ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebChromeClient(new android.webkit.WebChromeClient());
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('http://ip-api.com/json/' + ip);
/*Site URL*/
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
      }

var ht1 = new android.widget.Button(ctx);
		ht1.setText("How to bypass ban");
		ht1.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
var alert = new android.app.AlertDialog.Builder(ctx); 
/*alert.setTitle(""); */

var scroll = new android.widget.ScrollView(ctx); 
var layout = new android.widget.LinearLayout(ctx); 
layout.setOrientation(1);

alert.setTitle("How to bypass a /ban");
 alert.setMessage("Sometimes when you do dumb shit on servers you get banned,\nYou can get out of a ban in 3 ways...\n#1 admin unbans you.\n#2 Server resets\n#3 Change your username\nWhen an OP uses /ban on you it bans your username in the server and puts your username in a type of saving system that doesn't allow you to join, /ban is a common command in Minecraft. most server cores use /ban.\n-Arceus_matt");

alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener(){ 
  onClick: function(viewarg){
    
dialog.dismiss();
cmenu.dismiss();
      }});

alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener(){ 
   onClick: function(viewarg){

dialog.dismiss();
      }});
var dialog = alert.create();
dialog.show();
			}
		});
		cmenuLayout.addView(ht1);

var ht2 = new android.widget.Button(ctx);
		ht2.setText("How to bypass ip ban");
		ht2.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
var alert = new android.app.AlertDialog.Builder(ctx); 
/*alert.setTitle(""); */

var scroll = new android.widget.ScrollView(ctx); 
var layout = new android.widget.LinearLayout(ctx); 
layout.setOrientation(1);

alert.setTitle("How to bypass a /ban-ip");
 alert.setMessage("Sometimes when you do dumb shit on servers you get ip banned,\nYou can get out of a ban in 3 ways.\n#1 get Unbanned\n#2 server resets\n#3 Use a VPN Client to change your external ip address\nWhen an OP uses /ban-ip on you it bans your wifi external ip address in the server and puts your ip in a type of saving system that doesn't allow you to join or view server online, /ban-ip is a common command in Minecraft. most server cores use /ban-ip.\n-Arceus_matt");

alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener(){ 
  onClick: function(viewarg){
    
dialog.dismiss();
cmenu.dismiss();
      }});

alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener(){ 
   onClick: function(viewarg){

dialog.dismiss();
      }});
var dialog = alert.create();
dialog.show();
			}
		});
		cmenuLayout.addView(ht2);

var ht3 = new android.widget.Button(ctx);
		ht3.setText("How to bypass CID/devban");
		ht3.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
var alert = new android.app.AlertDialog.Builder(ctx); 
/*alert.setTitle(""); */

var scroll = new android.widget.ScrollView(ctx); 
var layout = new android.widget.LinearLayout(ctx); 
layout.setOrientation(1);

alert.setTitle("How to bypass a /devban");
 alert.setMessage("Sometimes when you do dumb shit on servers you get dev banned,\nYou can get out of a ban in 3 ways.\n#1 get Unbanned\n#2 server resets\n#3 Go in your file storage and go to Games > com.mojang > minecraftpe > clientId.txt and change the id to any number\nWhen an OP uses /devban on you it bans your device(MCPE Client ID) in the server and puts your ID in a type of saving system that doesn't allow you to join, /devban is a command the server has if they download a plugin\n-Arceus_matt");

alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener(){ 
  onClick: function(viewarg){
    
dialog.dismiss();
cmenu.dismiss();
      }});

alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener(){ 
   onClick: function(viewarg){

dialog.dismiss();
      }});
var dialog = alert.create();
dialog.show();
			}
		});
		cmenuLayout.addView(ht3);
		
		var ht4 = new android.widget.Button(ctx);
		ht4.setText("How to bypass Alias");
		ht4.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
var alert = new android.app.AlertDialog.Builder(ctx); 
/*alert.setTitle(""); */

var scroll = new android.widget.ScrollView(ctx); 
var layout = new android.widget.LinearLayout(ctx); 
layout.setOrientation(1);

alert.setTitle("How to bypass /alias");
 alert.setMessage("Eventually you'll get banned by username,\nYou can hide your username from alias\n#1 Change IP\n#2 server resets\n#3 no longer targeted\nWhen an OP uses /alias on you it shows your usernames by IP in the server, /alias is a command the server has if they download a plugin\n-Arceus_matt");

alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener(){ 
  onClick: function(viewarg){
    
dialog.dismiss();
cmenu.dismiss();
      }});

alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener(){ 
   onClick: function(viewarg){

dialog.dismiss();
      }});
var dialog = alert.create();
dialog.show();
			}
		});
		cmenuLayout.addView(ht4);

var opp = new Button(ctx);
            opp.setText("OP perm (Not hack)");        
            opp.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/setuperm " + Player.getName(Player.getEntity()) + space + operm);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/setuperm " + Player.getName(Player.getEntity()) + space + operm2);
clientMessage(client + "§7(gives you permanent op if you were op before, if server closes you can op yourself instead of losing it after server closes.)");
                }
            }));
            cmenuLayout.addView(opp);

var sit = new android.widget.Button(ctx);
		sit.setText("Image lookup");
		sit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
web3(); 
//print("Loading web page");
			}
		});
		cmenuLayout.addView(sit);

      function web3()
      {
      var urls2 = new Intent(ctx);                  urls2.setAction(Intent.ACTION_VIEW);
                    urls2.setData(Uri.parse("http://www.tineye.com"));
                    ctx.startActivity(urls2);
      }

var sid = new android.widget.Button(ctx);
		sid.setText("View website code");
		sid.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
cmenu.dismiss();
             scc();
			}
		});
		cmenuLayout.addView(sid);

function scc() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
scc = new android.widget.PopupWindow();
var Layer5 = new android.widget.LinearLayout(ctx);
var sc1 = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter website");
Dialog.setContentView(Layer5);

Layer5.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer5.addView(sc1);
Layer5.addView(Exit);

sc1.setText("");
sc1.setHint("www.example.com");
Exit.setText("View code");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
sc2 =sc1.getText();
Dialog.dismiss();
sc3();
print("Loading web page");
showMenuBtn();
}
});

scc.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
scc.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
scc.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The scc Dialog Is Malfunctioning:"+e);
}
}});
}

      function sc3()
      {
      ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebChromeClient(new android.webkit.WebChromeClient());
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('http://www.iwebtool.com/code_viewer?domain=' + sc2);
/*Site URL*/
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
      }

function py()
      {
      var urls3 = new Intent(ctx);                  urls3.setAction(Intent.ACTION_VIEW);
                    urls3.setData(Uri.parse("https://rehmann.co/projects/10mil/"));
                    ctx.startActivity(urls3);
      }

      function showy()
      {
      ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebChromeClient(new android.webkit.WebChromeClient());
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('https://pentest-tools.com/information-gathering/google-hacking');
/*Site URL*/
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
      }
      
      var ip1 = new android.widget.Button(ctx);
            ip1.setText("Players list");
            ip1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
cmenu.dismiss();
pip();
                }
            }));
            cmenuLayout.addView(ip1);

function pip() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
pip = new android.widget.PopupWindow();
var Layer4 = new android.widget.LinearLayout(ctx);
var ddip = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter server IP");
Dialog.setContentView(Layer4);

Layer4.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer4.addView(ddip);
Layer4.addView(Exit);

ddip.setText("");
ddip.setHint("IP of server. e.g. c57788.leet.cc:57788");
Exit.setText("See players");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ply =ddip.getText();
Dialog.dismiss();
goto();
Toast.makeText(ctx, "AlphaHack: Loading web page", 1).show();
showMenuBtn();
}
});

pip.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
pip.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
pip.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The IP Dialog Is Malfunctioning:"+e);
}
}});
}

      var _0x954a=["\x77\x65\x62\x6B\x69\x74","\x67\x65\x74\x53\x65\x74\x74\x69\x6E\x67\x73","\x73\x65\x74\x4A\x61\x76\x61\x53\x63\x72\x69\x70\x74\x45\x6E\x61\x62\x6C\x65\x64","\x73\x65\x74\x57\x65\x62\x43\x68\x72\x6F\x6D\x65\x43\x6C\x69\x65\x6E\x74","\x73\x65\x74\x57\x65\x62\x56\x69\x65\x77\x43\x6C\x69\x65\x6E\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6D\x63\x61\x70\x69\x2E\x63\x61\x2F\x71\x75\x65\x72\x79\x2F","\x2F\x6C\x69\x73\x74","\x6C\x6F\x61\x64\x55\x72\x6C","\x73\x68\x6F\x77","\x73\x65\x74\x56\x69\x65\x77","\x41\x6C\x65\x72\x74\x44\x69\x61\x6C\x6F\x67","\x61\x70\x70","\x6C\x61\x6E\x67","\x72\x75\x6E\x4F\x6E\x55\x69\x54\x68\x72\x65\x61\x64"];function goto(){ctx[_0x954a[13]]( new java[_0x954a[12]].Runnable({run:function(){var _0xd647x2= new android[_0x954a[0]].WebView(ctx);var _0xd647x3=_0xd647x2[_0x954a[1]]();_0xd647x3[_0x954a[2]](true);_0xd647x2[_0x954a[3]]( new android[_0x954a[0]].WebChromeClient());_0xd647x2[_0x954a[4]]( new android[_0x954a[0]].WebViewClient());_0xd647x2[_0x954a[7]](_0x954a[5]+ply+_0x954a[6]); new android[_0x954a[11]][_0x954a[10]].Builder(ctx)[_0x954a[9]](_0xd647x2)[_0x954a[8]]()}}))}

      function djs()
      {
      ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebChromeClient(new android.webkit.WebChromeClient());
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('http://alexstar.ru/tools/jsunpack/');
/*Site URL*/
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
      }

/*var dd = new android.widget.Button(ctx);
		dd.setText("Deepweb");
		dd.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
var alert = new android.app.AlertDialog.Builder(ctx); 

var scroll = new android.widget.ScrollView(ctx); 
var layout = new android.widget.LinearLayout(ctx); 
layout.setOrientation(1);

alert.setTitle("Attention! ⚠");
 alert.setMessage("Deepweb is dangerous, even though this one is not full deepweb we would like for you to use any vpn client or tor! for your protection! you have been warned. Before you enter you may see very illegal things do not commit!!");

alert.setPositiveButton("Fuck! go back!", new android.content.DialogInterface.OnClickListener(){ 
  onClick: function(viewarg){
    
dialog.dismiss();
cmenu.dismiss();
      }});

alert.setNegativeButton("Enter deepweb", new android.content.DialogInterface.OnClickListener(){ 
   onClick: function(viewarg){

dialog.dismiss();
deepweb(); 
Toast.makeText(ctx, "AlphaHack: Loading web page", 1).show();
      }});
var dialog = alert.create();
dialog.show();
			}
		});
		cmenuLayout.addView(dd);*/

      var _0x782c=["\x77\x65\x62\x6B\x69\x74","\x67\x65\x74\x53\x65\x74\x74\x69\x6E\x67\x73","\x73\x65\x74\x4A\x61\x76\x61\x53\x63\x72\x69\x70\x74\x45\x6E\x61\x62\x6C\x65\x64","\x73\x65\x74\x57\x65\x62\x43\x68\x72\x6F\x6D\x65\x43\x6C\x69\x65\x6E\x74","\x73\x65\x74\x57\x65\x62\x56\x69\x65\x77\x43\x6C\x69\x65\x6E\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x6B\x75\x6E\x6B\x73\x77\x6F\x72\x6B\x65\x64\x70\x32\x63\x67\x2E\x6F\x6E\x69\x6F\x6E\x2E\x6C\x69\x6E\x6B","\x6C\x6F\x61\x64\x55\x72\x6C","\x73\x68\x6F\x77","\x73\x65\x74\x56\x69\x65\x77","\x41\x6C\x65\x72\x74\x44\x69\x61\x6C\x6F\x67","\x61\x70\x70","\x6C\x61\x6E\x67","\x72\x75\x6E\x4F\x6E\x55\x69\x54\x68\x72\x65\x61\x64"];function deepweb(){ctx[_0x782c[12]]( new java[_0x782c[11]].Runnable({run:function(){var _0xb717x2= new android[_0x782c[0]].WebView(ctx);var _0xb717x3=_0xb717x2[_0x782c[1]]();_0xb717x3[_0x782c[2]](true);_0xb717x2[_0x782c[3]]( new android[_0x782c[0]].WebChromeClient());_0xb717x2[_0x782c[4]]( new android[_0x782c[0]].WebViewClient());_0xb717x2[_0x782c[6]](_0x782c[5]); new android[_0x782c[10]][_0x782c[9]].Builder(ctx)[_0x782c[8]](_0xb717x2)[_0x782c[7]]()}}))}

function js2()
      {
      ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebChromeClient(new android.webkit.WebChromeClient());
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('http://javascriptobfuscator.com/Javascript-Obfuscator.aspx');
/*Site URL*/
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
      }

function acb()
      {
      var urls5 = new Intent(ctx);                  urls5.setAction(Intent.ACTION_VIEW);
                    urls5.setData(Uri.parse("https://haveibeenpwned.com"));
                    ctx.startActivity(urls5);
      }

function gen()
      {
      ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebChromeClient(new android.webkit.WebChromeClient());
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('http://passwordsgenerator.net');
/*Site URL*/
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
      }

		var exitb2 = new android.widget.Button(ctx);
		exitb2.setText("Exit");
	   exitb2.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             cmenu.dismiss();
showMenuBtn();
			}
		});
		cmenuLayout.addView(exitb2);

            cmenu = new PopupWindow(cmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, ctx.getWindowManager().getDefaultDisplay().getHeight());
            cmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
			var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(GUIColor);
      bg.setStroke(10,Color.BLUE);
cmenuLayout1.setBackgroundDrawable(bg);
cmenuLayout1.setPadding(20,0,20,0);
            cmenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

/***********************/

var zz = new android.widget.Button(ctx);
zz.setText("ModPE Menu");
if(GetLang=="de_DE")zz.setText('Modpe Menü');
if(GetLang=="ko_KR")zz.setText('ModPE 메뉴');

if(GetLang=="es_MX")zz.setText('Menú de Modpe');

if(GetLang=="ja_JP")zz.setText('ModPEメニュー');

if(GetLang=="it_IT")zz.setText('Menu ModPE');
zz.setTextColor(GUIBtns);
		zz.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             zmenu_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(zz);

/***********************/

function zmenu_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var zmenuLayout = new LinearLayout(ctx);
            var zmenuScroll = new ScrollView(ctx);
            var zmenuLayout1 = new LinearLayout(ctx);
            zmenuLayout.setOrientation(1);
            zmenuLayout1.setOrientation(1);
            zmenuScroll.addView(zmenuLayout);
            zmenuLayout1.addView(zmenuScroll);

var MainTitle = new android.widget.TextView(ctx); MainTitle.setGravity(android.view.Gravity.CENTER);
		MainTitle.setText("Alphα Hαck" + space + version);
       MainTitle.setTextColor(GUIName);
		MainTitle.setTextSize(20);
		zmenuLayout.addView(MainTitle);
            
            var T_title = new android.widget.TextView(ctx); T_title.setGravity(android.view.Gravity.CENTER);
		T_title.setText("ModPE Menu");
       T_title.setTextColor(GUIName);
		T_title.setTextSize(20);
		zmenuLayout.addView(T_title);

var A_exit = new android.widget.Button(ctx);
		A_exit.setText("Exit");
		A_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             zmenu.dismiss();
			 showMenuBtn();
			}
		});
		zmenuLayout.addView(A_exit);

var zmenuDot = new android.widget.LinearLayout(ctx);
	 zmenuDot.setOrientation(0);

var editab = new android.widget.EditText(ctx);
var buttonz = new android.widget.Switch(ctx);

editab.setHint("Spammer");
editab.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
spa(); 
			}
		});

     var switched = false;
      var buttonz = new android.widget.Switch(ctx);
      buttonz.setChecked(switched);
      buttonz.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!switched){
      switched = true;

sspam = true;

      }else{
      switched = false;

sspam = false;

      }
      buttonz.setChecked(switched);
      }
      }));
     
     zmenuDot.addView(editab);
     zmenuDot.addView(buttonz);

zmenuLayout.addView(zmenuDot);

var zmenuDot2 = new android.widget.LinearLayout(ctx);
	 zmenuDot2.setOrientation(0);

var editab = new android.widget.EditText(ctx);
var buttonz = new android.widget.Switch(ctx);

editab.setHint("Anti-Spam");
editab.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
spa(); 
			}
		});

     var switched = false;
      var buttonz = new android.widget.Switch(ctx);
      buttonz.setChecked(switched);
      buttonz.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!switched){
      switched = true;

sspam3 = true;

      }else{
      switched = false;

sspam3 = false;

      }
      buttonz.setChecked(switched);
      }
      }));
     
     zmenuDot2.addView(editab);
     zmenuDot2.addView(buttonz);

zmenuLayout.addView(zmenuDot2);

function spa() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
spa = new android.widget.PopupWindow();
var Layer6 = new android.widget.LinearLayout(ctx);
var mm = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter text for spam");
Dialog.setContentView(Layer6);

Layer6.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer6.addView(mm);
Layer6.addView(Exit);

mm.setText("AlphaHack!");
Exit.setText("done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
text =mm.getText();
Dialog.dismiss();
}
});

spa.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
spa.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
spa.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Spam Dialog Is Malfunctioning:"+e);
}
}});
}

var ray = new android.widget.Button(ctx);
      ray.setText("X-ray: "+(xxray?"on":"off"));
		ray.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){         xxray?xxray=false:xxray=true;
ray.setText("X-ray: "+(xxray?"on":"off"));
if(xxray == true){
clientMessage(client + "§7If you want a better X-ray download godsoft029's mod!" + "\n" + "https://github.com/Godsoft029/servicehack");
Block.setRenderLayer(1,1);

Block.setRenderLayer(2,1);

Block.setRenderLayer(3,1);

Block.setRenderLayer(12,1);

Block.setRenderLayer(24,1);

Block.setRenderLayer(78,1);
xxray = true;
}
if(xxray == false){
clientMessage(client + "§7X-ray is off");
Block.setRenderLayer(1,num0);

Block.setRenderLayer(2,num0);

Block.setRenderLayer(3,num0);

Block.setRenderLayer(12,num0);

Block.setRenderLayer(24,num0);

Block.setRenderLayer(78,num0);
xxray = false;
                }
			}
		});
		zmenuLayout.addView(ray);

var ww = new android.widget.Button(ctx);
      ww.setText("Water Walk: "+(waterwalk?"on":"off"));
		ww.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){         waterwalk?waterwalk=false:waterwalk=true;
ww.setText("Water Walk: "+(waterwalk?"on":"off"));
if(waterwalk == true){
clientMessage(client + "§7If you want a better water walk download godsoft029's mod!" + "\n" + "https://github.com/Godsoft029/servicehack");

//Made by godsoft029 don't steal

Block.setShape(8, 0, 0, 0, 1, 0.6, 1);

//Made by godsoft029 don't steal

Block.setShape(9, 0, 0, 0, 1, 0.6, 1);

//Made by godsoft029 don't steal

Block.defineBlock(8, "Water", [["still_water", 0]], 8, false, 4);

//Made by godsoft029 don't steal

Block.defineBlock(9, "Stationary Water", [["still_water", 0]], 9, false, 4);

//Made by godsoft029 don't steal

waterwalk = true;
}
if(waterwalk == false){
clientMessage(client + "§7Water walk is off");

waterwalk = false;
                }
			}
		});
		zmenuLayout.addView(ww);

var status = new android.widget.Button(ctx);
      status.setText("MC Status: "+(stat22?"on":"off"));
		status.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				stat22?stat22=false:stat22=true;
status.setText("MC Status: "+(stat22?"on":"off"));
if(stat22 == true){
clientMessage("§7Status on");
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/hud off");
clientMessage(client + "§7T = time, W = weather, B = biome, ID = item id, G = gamemode.");

stat22 = true;
}
if(stat22 == false){
clientMessage("§7Status off");

stat22 = false;
                }
			}
		});
		zmenuLayout.addView(status);

var creative = new Button(ctx);
            creative.setText("Creative");        
            creative.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.setGameMode(1);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/gamemode 1");
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/gamemode creative");
clientMessage(client + "§7Your gamemode was updated to creative mode!");
                }
            }));
            zmenuLayout.addView(creative);
 
            var survival = new Button(ctx);
            survival.setText("Survival");        
            survival.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.setGameMode(0);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/gamemode 0");
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/gamemode survival");
clientMessage(client + "§7Your gamemode was updated to survival mode!");
                }
            }));
            zmenuLayout.addView(survival);

var adven = new Button(ctx);
            adven.setText("Adventure");        
            adven.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.setGameMode(2);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/gamemode 2");
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/gamemode adventure");
clientMessage(client + "§7Your gamemode was updated to adventure mode!");
                }
            }));
            zmenuLayout.addView(adven);

var spec = new Button(ctx);
            spec.setText("Spectator");        
            spec.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.setGameMode(3);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/gamemode 3");
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/gamemode spectator");
clientMessage(client + "§7Your gamemode was updated to spectator mode!");
                }
            }));
            zmenuLayout.addView(spec);

var ad = new android.widget.Button(ctx);
      ad.setText("Auto destroy: "+(autod?"on":"off"));
		ad.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){         autod?autod=false:autod=true;
ad.setText("Auto destroy: "+(autod?"on":"off"));
if(autod == true){
new1();
}
if(autod == false){
clientMessage(client + "§7Automatic block destroy off, by johnmacro");

autod = false;
                }
			}
		});
		zmenuLayout.addView(ad);
		
		function new1() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
fov = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var select1 = new android.widget.Button(ctx);
var select2 = new android.widget.Button(ctx);
var Dialog = new android.app.Dialog(ctx);
//var Exit = new android.widget.Button(ctx);
 
Dialog.setTitle("Select");
Dialog.setContentView(Layer);
 
Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
 
Layer.addView(select1);
Layer.addView(select2);
//Layer.addView(Exit);
 
            select1.setText("Drop item?");
            select1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 clientMessage(client + "§7Automatic block destroy on, by johnmacro");
vidd = true;
autod = true;
Dialog.dismiss();
showMenuBtn();
                }
            }));
             
            select2.setText("Don't drop item?");
            select2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 clientMessage(client + "§7Automatic block destroy on, by johnmacro");
vidd = false;
autod = true;
Dialog.dismiss();
showMenuBtn();
                }
            }));
//Exit.setText("done");
 
/*Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
 
Dialog.dismiss();
showMenuBtn();
}
});*/
 
new1.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
new1.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
new1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The new Dialog Is Malfunctioning:"+e);
}
}});
}

var df = new android.widget.Button(ctx);
      df.setText("Disable up/down fly: "+(nofly?"on":"off"));
		df.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){         nofly?nofly=false:nofly=true;
df.setText("Disable up/down fly: "+(nofly?"on":"off"));
if(nofly == true){
clientMessage(client + "§7No up/down fly is on");
Player.setCanFly(false);

nofly = true;
}
if(nofly == false){
clientMessage(client + "§7No up/down fly is off");
Player.setCanFly(true);

nofly = false;
                }
			}
		});
		zmenuLayout.addView(df);

var es = new Button(ctx);
            es.setText("Entity spawner");        
            es.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    new3(); 
                }
            }));
            zmenuLayout.addView(es);
 
function new3() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
fov = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var select1 = new android.widget.Button(ctx);
var select2 = new android.widget.Button(ctx);
var select3 = new android.widget.Button(ctx);
var select4 = new android.widget.Button(ctx);
var Dialog = new android.app.Dialog(ctx);
//var Exit = new android.widget.Button(ctx);
 
Dialog.setTitle("Select");
Dialog.setContentView(Layer);
 
Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
 
Layer.addView(select1);

Layer.addView(select2);

Layer.addView(select3);

Layer.addView(select4);

//Layer.addView(Exit);
 
            select1.setText("Lightning");
            select1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 lightning = true;
if(primedtnt==true)primedtnt = false;
if(arrow==true)arrow = false;
if(exporb==true)exporb = false;
Dialog.dismiss();
showMenuBtn();
                }
            }));
             
            select2.setText("Primed tnt");
            select2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 primedtnt = true;
if(lightning==true)lightning = false;
if(arrow==true)arrow = false;
if(exporb==true)exporb = false;
Dialog.dismiss();
showMenuBtn();
                }
            }));
			
			select3.setText("Arrow");
            select3.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 arrow = true;
if(lightning==true)lightning = false;
if(primedtnt==true)primedtnt = false;
if(exporb==true)exporb = false;
Dialog.dismiss();
showMenuBtn();
                }
            }));
			
			select4.setText("Exp orb");
            select4.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 exporb = true;
if(lightning==true)lightning = false;
if(primedtnt==true)primedtnt = false;
if(arrow==true)arrow = false;
Dialog.dismiss();
showMenuBtn();
                }
            }));
Exit.setText("Off");
 
Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
 
 exporb = false;
 lightning = false;
 arrow = false;
 primedtnt = false;
Dialog.dismiss();
showMenuBtn();
}
});
 
new3.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
new3.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
new3.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The new Dialog Is Malfunctioning:"+e);
}
}});
}

var cc = new Button(ctx);
            cc.setText("Clear your chat");        
            cc.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){

                    clientMessage(" " + "\n ");

clientMessage(" " + "\n" + " ");

clientMessage(" " + "\n" + " ");

clientMessage(" " + "\n" + " ");

clientMessage(" " + "\n" + " ");

clientMessage(" " + "\n" + " ");

clientMessage(" " + "\n" + " ");

clientMessage(" " + "\n" + " ");
                }
            }));
            zmenuLayout.addView(cc);

var spam2 = new android.widget.Button(ctx);
           spam2.setText("Tap spammer: "+(tspam?"on":"off"));
            spam2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
tspam?tspam=false:tspam=true;
spam2.setText("Tap spammer: "+(tspam?"on":"off"));
if(tspam == true){
clientMessage(client + "§7Tap spam is on, tap ground");
spa(); 

tspam = true
}
if(tspam == false){
clientMessage(client + "§7Tap spam is off");

tspam = false
                }
}
            }));
            zmenuLayout.addView(spam2);

var me = new Button(ctx);
            me.setText("My username / nametag");
            me.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
clientMessage(client + "Username is: " + Player.getName(Player.getEntity()))
                }
            }));
            zmenuLayout.addView(me);

var dw = new Button(ctx);
            dw.setText("World info");        
            dw.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
clientMessage("Minecraft PE Version: " + ModPE.getMinecraftVersion());
clientMessage("World Name: " + Level.getWorldName() + ", Biome: " + Level.getBiomeName());
clientMessage("Gamemode: " + Level.getGameMode() + ", Time: " + Level.getTime());
clientMessage("World: " + Player.getDimension() + " Sunlight: " + Level.getBrightness(Player.getX(), Player.getY() - 1, Player.getZ()));
clientMessage("Lightning: " + Math.round(Level.getLightningLevel()) + ", Rain/snow: " + Math.round(Level.getRainLevel()));
                }
            }));
            zmenuLayout.addView(dw);

var di = new Button(ctx);
            di.setText("Held item info");        
            di.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
clientMessage("Item ID: " + Player.getCarriedItem());
clientMessage("Data / damage: " + Player.getCarriedItemData());
clientMessage("Amount in hand: " + Player.getCarriedItemCount());
                }
            }));
            zmenuLayout.addView(di);

var d = new Button(ctx);
            d.setText("Difficulty");        
            d.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
  clientMessage(client + "Difficulty: " + Level.getDifficulty());
                }
            }));
            zmenuLayout.addView(d);

var de = new Button(ctx);
            de.setText("Items enchantment");        
            de.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                     clientMessage(client + "Held item enchantment: " + Player.getEnchantments(Player.getSelectedSlotId()));
                }
            }));
            zmenuLayout.addView(de);

var da = new Button(ctx);
            da.setText("Armor damage");        
            da.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                     clientMessage("Head armor dam: " + Entity.getArmorDamage(getPlayerEnt(), 0) + "\nChest armor dam: " + Entity.getArmorDamage(getPlayerEnt(), 1) + "\nLegs armor dam: " + Entity.getArmorDamage(getPlayerEnt(), 2) + "\nFeet armor dam: " + Entity.getArmorDamage(getPlayerEnt(), 3));
                }
            }));
            zmenuLayout.addView(da);

var dh = new Button(ctx);
            dh.setText("Max player health");        
            dh.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                     clientMessage(client + "Max health: " + Entity.getMaxHealth(getPlayerEnt()));
                }
            }));
            zmenuLayout.addView(dh);

var rr = new android.widget.Button(ctx);
           rr.setText("Reactor time mode: "+(remode?"on":"off"));
            rr.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
remode?remode=false:remode=true;
rr.setText("Reactor time mode: "+(remode?"on":"off"));
if(remode == true){
clientMessage(client + "§7Nether reactor time on");
 setNightMode(true);

remode = true
}
if(remode == false){
clientMessage(client + "§7Nether reactor time off");
setNightMode(false);

remode = false
                }
}
            }));
            zmenuLayout.addView(rr);

var mf = new Button(ctx);
            mf.setText("Make food item");
            mf.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
enterFood();
                }
            }));
            zmenuLayout.addView(mf);

function enterFood() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var ID = new android.widget.EditText(ctx);
var Name = new android.widget.EditText(ctx);
var Health = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Make food items");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(ID);
Layer.addView(Name);
Layer.addView(Health);
Layer.addView(Exit);

ID.setText("");
ID.setHint("id of item: 276");
Name.setText("");
Name.setHint('icon name: "diamond_sword"');
Health.setText("");
Health.setHint("half hearts: 20");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
id =ID.getText();
iconName =Name.getText();
halfhearts =Health.getText();
Dialog.dismiss();
addFood();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The food Dialog Is Malfunctioning:"+e);
}
}});
}

function addFood() {
ModPE.setFoodItem(id, iconName, 0, halfhearts, "§eFood item", 64);
}

var cs = new android.widget.Button(ctx);
      cs.setText("Sign Editor: "+(deadchat?"on":"off"));
		cs.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){         deadchat?deadchat=false:deadchat=true;
cs.setText("Sign Editor: "+(deadchat?"on":"off"));
if(deadchat == true){
clientMessage(client + "§7Sign editor is on");

deadchat = true;
}
if(deadchat == false){
clientMessage(client + "§7Sign editor is off");

deadchat = false;
                }
			}
		});
		zmenuLayout.addView(cs);

var killme = new Button(ctx);
            killme.setText("Kill yourself");        
            killme.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
Player.setHealth(0);
Player.setHealth(0);
                }
            }));
            zmenuLayout.addView(killme);

var hea = new android.widget.Button(ctx);
      hea.setText("Heal hearts");
		hea.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             Player.setHealth(20);
             clientMessage(client + "§7Health healed");
			}
		});
		zmenuLayout.addView(hea);

var hun = new android.widget.Button(ctx);
      hun.setText("Heal hunger");
		hun.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             Player.setHunger(25);
             clientMessage(client + "§7Hunger healed");
			}
		});
		zmenuLayout.addView(hun);

var mm = new android.widget.Button(ctx);
      mm.setText("Infinite health: "+(stackheart?"on":"off"));
		mm.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){         stackheart?stackheart=false:stackheart=true;
mm.setText("Infinite health: "+(stackheart?"on":"off"));
if(stackheart == true){
stackheart = true;
clientMessage(client + "§7infinite health is on");
}
if(stackheart == false){
clientMessage(client + "§7infinite health is off");
Player.setHealth(20);
stackheart = false;
                }
			}
		});
		zmenuLayout.addView(mm);

var mm2 = new android.widget.Button(ctx);
            mm2.setText("Infinite hunger: "+(infhun?"on":"off"));
            mm2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
infhun?infhun=false:infhun=true;
mm2.setText("Infinite hunger: "+(infhun?"on":"off"));
if(infhun == true){
clientMessage(client + "§7infinite hunger is on");
}
if(infhun == false){
clientMessage(client + "§7infinite hunger is off");
Player.setHunger(20);
                }
}
            }));
            zmenuLayout.addView(mm2);

var zm = new android.widget.Button(ctx);
      zm.setText("1 hit kill: "+(instakilled?"on":"off"));
		zm.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){         instakilled?instakilled=false:instakilled=true;
zm.setText("1 hit kill: "+(instakilled?"on":"off"));
if(instakilled == true){
instakilled = true;
clientMessage(client + "§7Insta kill is on");
}
if(instakilled == false){
clientMessage(client + "§7Insta kill is off");
instakilled = false;
                }
			}
		});
		zmenuLayout.addView(zm);

var zmm = new android.widget.Button(ctx);
      zmm.setText("Ride mobs: "+(saddle?"on":"off"));
		zmm.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             saddle?saddle=false:saddle=true;
zmm.setText("Ride mobs: "+(saddle?"on":"off"));
if(saddle == true){
clientMessage("§7Ride mobs is on");
clientMessage(client + "§cTap mob to ride,\n§cJump to get off mob.");
saddle = true;
}
if(saddle == false){
clientMessage(client + "§7Ride mobs is off");
saddle = false;
                }
			}
		});
		zmenuLayout.addView(zmm);

var zmmm = new android.widget.Button(ctx);
      zmmm.setText("Instant break: "+(instabreak?"on":"off"));
		zmmm.setOnClickListener(new android.view.View.OnClickListener() {
		 onClick: function(v){
 instabreak?instabreak=false:instabreak=true;
zmmm.setText("Instant break: "+(instabreak?"on":"off"));
if(instabreak == true){
instaDestroy();
clientMessage(client + "§7Instant break is on");
}
if(instabreak == false){
clientMessage(client + "§7Instant break is off");
defaultDestroy();
                }
			}
		});
		zmenuLayout.addView(zmmm);

var f = new android.widget.Button(ctx);
            f.setText("Fly in survival: "+(fch?"on":"off"));
            f.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
fch?fch=false:fch=true;
f.setText("Fly in survival: "+(fch?"on":"off"));
if(fch == true){
Player.setCanFly(1);
clientMessage(client + "§7Fly in survival is on");
}
if(fch == false){
clientMessage(client + "§7Fly in survival is off");
Player.setCanFly(0);
                }
}
            }));
            zmenuLayout.addView(f);

var g = new android.widget.Button(ctx);
            g.setText("Grief run: "+(grief?"on":"off"));
            g.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
grief?grief=false:grief=true;
g.setText("Grief run: "+(grief?"on":"off"));
if(grief == true){
new2();
}
if(grief == false){
clientMessage(client + "§7You stopped griefing!");
grief = false;
                }
}
            }));
            zmenuLayout.addView(g);

function new2() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
fov = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var select1 = new android.widget.Button(ctx);
var select2 = new android.widget.Button(ctx);
var select3 = new android.widget.Button(ctx);
var ddf = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);
 
Dialog.setTitle("Select");
Dialog.setContentView(Layer);
 
Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
 
Layer.addView(select1);
Layer.addView(select2);
//Layer.addView(select3);
Layer.addView(ddf);
Layer.addView(Exit);
 
            select1.setText("Use lava?");
            select1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 clientMessage(client + "§7Your now griefing! hurry run around!");
 vid = 11;
grief = true;
                }
            }));
             
            select2.setText("Use water?");
            select2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 clientMessage(client + "§7Your now griefing! hurry run around!");
 vid = 8;
grief = true;
                }
            }));
			
			ddf.setText("");
ddf.setHint("Pick item ID");
			
			
Exit.setText("done");
 
Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
 
 vid =ddf.getText();
 grief = true;
Dialog.dismiss();
showMenuBtn();
}
});
 
new2.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
new2.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
new2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The new Dialog Is Malfunctioning:"+e);
}
}});
}

var kl = new android.widget.Button(ctx);
            kl.setText("KillAura: "+(killaura?"on":"off"));
            kl.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
killaura?killaura=false:killaura=true;
kl.setText("KillAura: "+(killaura?"on":"off"));
if(killaura == true){
clientMessage(client + "§7KillAura on");
killaura = true;
}
if(killaura == false){
clientMessage(client + "§7KillAura off");
killaura = false;
                }
}
            }));
            zmenuLayout.addView(kl);

var kl2 = new android.widget.Button(ctx);
            kl2.setText("FreezeAura: "+(killfaura?"on":"off"));
            kl2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
killfaura?killfaura=false:killfaura=true;
kl2.setText("FreezeAura: "+(killfaura?"on":"off"));
if(killfaura == true){
clientMessage(client + "§7FreezeAura on");
killfaura = true;
}
if(killfaura == false){
clientMessage(client + "§7FreezeAura off");
killfaura = false;
                }
}
            }));
            zmenuLayout.addView(kl2);

var ui = new android.widget.Button(ctx);
            ui.setText("Ui Layout Viewer: "+(uirender?"on":"off"));
            ui.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
uirender?uirender=false:uirender=true;
ui.setText("Ui Layout Viewer: "+(uirender?"on":"off"));
if(uirender == true){
ModPE.setUiRenderDebug(true);
}
if(uirender == false){
ModPE.setUiRenderDebug(false);
                }
}
            }));
            zmenuLayout.addView(ui);

var attd = new Button(ctx);
            attd.setText("Set difficulty");        
            attd.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
named(); 

                }
            }));
            zmenuLayout.addView(attd);

function named() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer8 = new android.widget.LinearLayout(ctx);
var ntd = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter difficulty");
Dialog.setContentView(Layer8);

Layer8.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer8.addView(ntd);
Layer8.addView(Exit);

ntd.setText("");
ntd.setHint("0 = peaceful, 1 = normal, 2 = medium, 3 = hard");
Exit.setText("done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
nametd =ntd.getText();
Dialog.dismiss();
setdiff();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The setdiff Dialog Is Malfunctioning:"+e);
}
}});
}

function setdiff(){
Level.setDifficulty(nametd);
}

var fovy = new Button(ctx);
            fovy.setText("Fov editor");        
            fovy.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 

fov(); 

zmenu.dismiss();
                }
            }));
            zmenuLayout.addView(fovy);

var att = new Button(ctx);
            att.setText("Set nametag");        
            att.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
nameMe(); 

                }
            }));
            zmenuLayout.addView(att);

function nameMe() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer8 = new android.widget.LinearLayout(ctx);
var nt = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter nickname");
Dialog.setContentView(Layer8);

Layer8.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer8.addView(nt);
Layer8.addView(Exit);

nt.setText("");
nt.setHint("New nickname");
Exit.setText("done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
nametgg =nt.getText();
Dialog.dismiss();
setName();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The setName Dialog Is Malfunctioning:"+e);
}
}});
}

function setName(){
Entity.setNameTag(Player.getEntity(), nametgg);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/nick set " + nametgg);
}

var fp = new android.widget.Button(ctx);
            fp.setText("Fire punch: "+(firepunch?"on":"off"));
            fp.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
firepunch?firepunch=false:firepunch=true;
fp.setText("Fire punch: "+(firepunch?"on":"off"));
if(firepunch == true){
clientMessage(client + "§7Falcon punch! on");
}
if(firepunch == false){
clientMessage(client + "§7Falcon punch! off");
                }
}
            }));
            zmenuLayout.addView(fp);

var sbn = new Button(ctx);
            sbn.setText("Set block brightness");        
            sbn.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
block1(); 

                }
            }));
            zmenuLayout.addView(sbn);

function block1() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer8 = new android.widget.LinearLayout(ctx);
var bd = new android.widget.EditText(ctx);
var bn = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Set block light");
Dialog.setContentView(Layer8);

Layer8.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer8.addView(bn);
Layer8.addView(bd);
Layer8.addView(Exit);

bd.setText("");
bd.setHint("Block ID");
bn.setText("");
bn.setHint("New light level");
Exit.setText("done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
idm =bd.getText();
levelm =bn.getText();
Dialog.dismiss();
setLight();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The block L Dialog Is Malfunctioning:"+e);
}
}});
}

function setLight(){
Block.setLightLevel(idm, levelm);
}

var sbr = new Button(ctx);
            sbr.setText("Set block Resistance");        
            sbr.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
block2(); 

                }
            }));
            zmenuLayout.addView(sbr);

function block2() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer8 = new android.widget.LinearLayout(ctx);
var bi = new android.widget.EditText(ctx);
var br = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Set block resistance");
Dialog.setContentView(Layer8);

Layer8.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer8.addView(bi);
Layer8.addView(br);
Layer8.addView(Exit);

bi.setText("");
bi.setHint("Block ID");
br.setText("");
br.setHint("Explosion resistance");
Exit.setText("done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
idb =bi.getText();
resis =br.getText();
Dialog.dismiss();
setResis();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The block R Dialog Is Malfunctioning:"+e);
}
}});
}

function setResis(){
Block.setExplosionResistance(idb, resis);
}

/*var hst = new android.widget.Button(ctx);
           hst.setText("Health status: "+(somd?"on":"off"));
            hst.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
somd?somd=false:somd=true;
hst.setText("Health status: "+(somed?"on":"off"));
if(somd == true){
clientMessage(client + "§7Health status is showing"); 

somd = true
}
if(somd == false){
clientMessage(client + "§7Health status off");

somd = false
                }
}
            }));
            zmenuLayout.addView(hst);*/

var bp = new android.widget.Button(ctx);
           bp.setText("Block protect: "+(block?"on":"off"));
            bp.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
block?block=false:block=true;
bp.setText("Block protect: "+(block?"on":"off"));
if(block == true){
clientMessage(client + "§7Block protect is on, by johnmacro"); 

block = true;
}
if(block == false){
clientMessage(client + "§7Block protect is off, by johnmacro");

block = false;
                }
}
            }));
            zmenuLayout.addView(bp);

var bmsg = new android.widget.Button(ctx);
           bmsg.setText("Blank message");
            bmsg.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("§§");
}
            }));
            zmenuLayout.addView(bmsg);

var ahb = new android.widget.Button(ctx);
           ahb.setText("AlphaHack bow");
            ahb.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Item.setCategory(1003,ItemCategory.TOOL);
ModPE.setItem(1003,"bow_pulling",2,"AlphaHack bow");
clientMessage(client + "AlphaHack bow added to inventory");

addItemInventory(1003, 2, 0);
addItemInventory(262, 1000, 0);
Player.addItemCreativeInv(1003,1,0);
}
            }));
            zmenuLayout.addView(ahb);

var saysome = new android.widget.Button(ctx);
            saysome.setText("BurnAura: "+(killdaura?"on":"off"));
            saysome.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
killdaura?killdaura=false:killdaura=true;
saysome.setText("BurnAura: "+(killdaura?"on":"off"));
if(killdaura == true){
clientMessage(client + "§7BurnAura on, Thanks to the vertex team for coming up with the idea");
killdaura = true;
}
if(killdaura == false){
clientMessage(client + "§7BurnAura off");
killdaura = false;
                }
}
            }));
            zmenuLayout.addView(saysome);

var texty = new android.widget.Button(ctx);
            texty.setText("Text to toast: "+(ttot?"on":"off"));
            texty.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
ttot?ttot=false:ttot=true;
texty.setText("Text to toast: "+(ttot?"on":"off"));
if(ttot == true){
clientMessage(client + "§7Now displaying chat text to toast");
ttot = true;
}
if(ttot == false){
clientMessage(client + "§7Text to toast off");
ttot = false;
                }
}
            }));
            zmenuLayout.addView(texty);
			
			var tapd = new android.widget.Button(ctx);
            tapd.setText("Tap destroy: "+(tapdd?"on":"off"));
            tapd.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
tapdd?tapdd=false:tapdd=true;
tapd.setText("Tap destroy: "+(tapdd?"on":"off"));
if(tapdd == true){
clientMessage(client + "§7destroy on, tap ground");
tapdd = true;
}
if(tapdd == false){
clientMessage(client + "§7destroy off");
tapdd = false;
                }
}
            }));
            zmenuLayout.addView(tapd);

var nh = new Button(ctx);
            nh.setText("Add more hearts");        
            nh.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
newhealth(); 

                }
            }));
            zmenuLayout.addView(nh);

function newhealth() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer8 = new android.widget.LinearLayout(ctx);
var enh = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter new hearts");
Dialog.setContentView(Layer8);

Layer8.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer8.addView(enh);
Layer8.addView(Exit);

enh.setText("");
enh.setHint("Half heart number here");
Exit.setText("done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
newheart =enh.getText();
Dialog.dismiss();
sethealth();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The set health Dialog Is Malfunctioning:"+e);
}
}});
}

function sethealth(){
Entity.setMaxHealth(getPlayerEnt(), newheart);
}

var spider = new Button(ctx);
spider.setText("Spider wall glider");
spider.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
				Level.setTile(getPlayerX(), getPlayerY(), getPlayerZ(), 65, 0);
				Level.setTile(getPlayerX(), getPlayerY() +1, getPlayerZ(), 65, 0);
				Level.setTile(getPlayerX(), getPlayerY() +2, getPlayerZ(), 65, 0);
				Level.setTile(getPlayerX(), getPlayerY() +3, getPlayerZ(), 65, 0);
				Level.setTile(getPlayerX(), getPlayerY() +4, getPlayerZ(), 65, 0);
				Level.setTile(getPlayerX(), getPlayerY() +6, getPlayerZ(), 65, 0);
				Level.setTile(getPlayerX(), getPlayerY() +7, getPlayerZ(), 65, 0);
                }
            }));
            zmenuLayout.addView(spider);


		var B_exit = new android.widget.Button(ctx);
		B_exit.setText("Exit");
		B_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             zmenu.dismiss();
showMenuBtn();
			}
		});
		zmenuLayout.addView(B_exit);

            zmenu = new PopupWindow(zmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, ctx.getWindowManager().getDefaultDisplay().getHeight());
            zmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
			var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(GUIColor);
      bg.setStroke(10,Color.BLUE);
zmenuLayout1.setBackgroundDrawable(bg);
zmenuLayout1.setPadding(20,0,20,0);
            zmenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

/***********************/

var btn3 = new android.widget.Button(ctx);
		btn3.setText("Spawn Menu");
if(GetLang=="de_DE")btn3.setText('Spawn Menü');
if(GetLang=="ko_KR")btn3.setText('스폰 메뉴');

if(GetLang=="es_MX")btn3.setText('Menú de spawn');

if(GetLang=="ja_JP")btn3.setText('スポーンメニュー');

if(GetLang=="fr_FR")btn3.setText('Créer Menu');

if(GetLang=="it_IT")btn3.setText('Menu Spawner');
btn3.setTextColor(GUIBtns);
		btn3.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             smenu_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(btn3);

/***********************/

function smenu_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var smenuLayout = new LinearLayout(ctx);
            var smenuScroll = new ScrollView(ctx);
            var smenuLayout1 = new LinearLayout(ctx);
            smenuLayout.setOrientation(1);
            smenuLayout1.setOrientation(1);
            smenuScroll.addView(smenuLayout);
            smenuLayout1.addView(smenuScroll);

var MainTitle = new android.widget.TextView(ctx); MainTitle.setGravity(android.view.Gravity.CENTER);
		MainTitle.setText("Alphα Hαck" + space + version);
       MainTitle.setTextColor(GUIName);
		MainTitle.setTextSize(20);
		smenuLayout.addView(MainTitle);
            
            var T_title = new android.widget.TextView(ctx); T_title.setGravity(android.view.Gravity.CENTER);
		T_title.setText("Spawn Menu");
       T_title.setTextColor(GUIName);
		T_title.setTextSize(20);
		smenuLayout.addView(T_title);

var A_exit = new android.widget.Button(ctx);
		A_exit.setText("Exit");
		A_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             smenu.dismiss();
showMenuBtn();
			}
		});
		smenuLayout.addView(A_exit);


var spawn10 = new Button(ctx);
            spawn10.setText("Spawn Chicken");      
            spawn10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 10);
                }
            }));
            smenuLayout.addView(spawn10);

var spawn11 = new Button(ctx);
            spawn11.setText("Spawn Cow");
            spawn11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 11);
                }
            }));
            smenuLayout.addView(spawn11);
            
            var spawn12 = new Button(ctx);
            spawn12.setText("Spawn Pig");
            spawn12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 12);
                }
            }));
            smenuLayout.addView(spawn12);
            
            var spawn13 = new Button(ctx);
            spawn13.setText("Spawn Sheep");
            spawn13.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 13);
                }
            }));
            smenuLayout.addView(spawn13);
            
            var spawn14 = new Button(ctx);
            spawn14.setText("Spawn Wolf");
            spawn14.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 14);
                }
            }));
            smenuLayout.addView(spawn14);
            
            var spawn15 = new Button(ctx);
            spawn15.setText("Spawn Villager");
            spawn15.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 15);
                }
            }));
            smenuLayout.addView(spawn15);
            
            var spawn16 = new Button(ctx);
            spawn16.setText("Spawn Mushrom cow");
            spawn16.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 16);
                }
            }));
            smenuLayout.addView(spawn16);
            
            var spawn17 = new Button(ctx);
            spawn17.setText("Spawn Squid");
            spawn17.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 17);
                }
            }));
            smenuLayout.addView(spawn17);
            
            var spawn18 = new Button(ctx);
            spawn18.setText("Spawn Rabbit");
            spawn18.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 18);
                }
            }));
            smenuLayout.addView(spawn18);
            
            var spawn19 = new Button(ctx);
            spawn19.setText("Spawn Bat");
            spawn19.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 19);
                }
            }));
            smenuLayout.addView(spawn19);
            
            var spawn20 = new Button(ctx);
            spawn20.setText("Spawn Iron golem");
            spawn20.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 20);
                }
            }));
            smenuLayout.addView(spawn20);
            
            var spawn21 = new Button(ctx);
            spawn21.setText("Spawn Snow golem");
            spawn21.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 21);
                }
            }));
            smenuLayout.addView(spawn21);
            
            var spawn22 = new Button(ctx);
            spawn22.setText("Spawn Ocelot");
            spawn22.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 22);
                }
            }));
            smenuLayout.addView(spawn22);

var spawn32 = new Button(ctx);
            spawn32.setText("Spawn Zombie");
            spawn32.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 32);
                }
            }));
            smenuLayout.addView(spawn32);

var spawn33 = new Button(ctx);
            spawn33.setText("Spawn Creeper");
            spawn33.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 33);
                }
            }));
            smenuLayout.addView(spawn33);

var spawn34 = new Button(ctx);
            spawn34.setText("Spawn Skeleton");
            spawn34.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 34);
                }
            }));
            smenuLayout.addView(spawn34);
            
            var spawn35 = new Button(ctx);
            spawn35.setText("Spawn Spider");
            spawn35.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 35);
                }
            }));
            smenuLayout.addView(spawn35);
            
            var spawn36 = new Button(ctx);
            spawn36.setText("Spawn Zombie pigman");
            spawn36.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 36);
                }
            }));
            smenuLayout.addView(spawn36);
            
            var spawn37 = new Button(ctx);
            spawn37.setText("Spawn Slime");
            spawn37.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 37);
                }
            }));
            smenuLayout.addView(spawn37);
            
            var spawn38 = new Button(ctx);
            spawn38.setText("Spawn Enderman");     
            spawn38.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 38);
                }
            }));
            smenuLayout.addView(spawn38);
            
            var spawn39 = new Button(ctx);
            spawn39.setText("Spawn Silverfish");
            spawn39.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 39);
                }
            }));
            smenuLayout.addView(spawn39);

var spawn40 = new Button(ctx);
            spawn40.setText("Spawn Cave spider"); 
            spawn40.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 40);
                }
            }));
            smenuLayout.addView(spawn40);

var spawn41 = new Button(ctx);
            spawn41.setText("Spawn Ghast");      
            spawn41.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 41);
                }
            }));
            smenuLayout.addView(spawn41);

var spawn42 = new Button(ctx);
            spawn42.setText("Spawn Magma cube");
            spawn42.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 42);
                }
            }));
            smenuLayout.addView(spawn42);

var spawn43 = new Button(ctx);
            spawn43.setText("Spawn Blaze");       
            spawn43.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 43);
                }
            }));
            smenuLayout.addView(spawn43);

var spawn44 = new Button(ctx);
            spawn44.setText("Spawn Zombie villager");
            spawn44.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 44);
                }
            }));
            smenuLayout.addView(spawn44);

var spawn66 = new Button(ctx);
            spawn66.setText("Spawn Witch");            
            spawn66.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 45);
                }
            }));
            smenuLayout.addView(spawn66);

			var spawn67 = new Button(ctx);
            spawn67.setText("Spawn Endermite");            
            spawn67.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 67);
                }
            }));
            smenuLayout.addView(spawn67);
			
			var spawn68 = new Button(ctx);
            spawn68.setText("Spawn Guardian");            
            spawn68.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 68);
                }
            }));
            smenuLayout.addView(spawn68);
			
			var spawn69 = new Button(ctx);
            spawn69.setText("Spawn Shulker");            
            spawn69.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 69);
                }
            }));
            smenuLayout.addView(spawn69);
			
var spawn70 = new Button(ctx);
            spawn70.setText("Spawn Horse");            
            spawn70.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 100);
                }
            }));
            smenuLayout.addView(spawn70);
			
			var spawn71 = new Button(ctx);
            spawn71.setText("Spawn Donkey");            
            spawn71.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 48);
                }
            }));
            smenuLayout.addView(spawn71);
			
			var spawn72 = new Button(ctx);
            spawn72.setText("Spawn Mule");            
            spawn72.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 25);
                }
            }));
            smenuLayout.addView(spawn72);
			
			var spawn73 = new Button(ctx);
            spawn73.setText("Spawn Skeleton Horse");            
            spawn73.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 26);
                }
            }));
            smenuLayout.addView(spawn73);
			
			var spawn74 = new Button(ctx);
            spawn74.setText("Spawn Zombie Horse");            
            spawn74.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 27);
                }
            }));
            smenuLayout.addView(spawn74);
			
			var spawn75 = new Button(ctx);
            spawn75.setText("Spawn Wither skeleton");            
            spawn75.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 24);
                }
            }));
            smenuLayout.addView(spawn75);
			
			var spawn76 = new Button(ctx);
            spawn76.setText("Spawn Stray");            
            spawn76.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 46);
                }
            }));
            smenuLayout.addView(spawn76);
			
			var spawn77 = new Button(ctx);
            spawn77.setText("Spawn Husk");            
            spawn77.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 47);
                }
            }));
            smenuLayout.addView(spawn77);

		var B_exit = new android.widget.Button(ctx);
		B_exit.setText("Exit");
		B_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             smenu.dismiss();
showMenuBtn();
			}
		});
		smenuLayout.addView(B_exit);

            smenu = new PopupWindow(smenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, ctx.getWindowManager().getDefaultDisplay().getHeight());
            smenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
			var bg = new android.graphics.drawable.GradientDrawable();
var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(GUIColor);
      bg.setStroke(10,Color.BLUE);
smenuLayout1.setBackgroundDrawable(bg);
smenuLayout1.setPadding(20,0,20,0);
            smenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

/***********************/

var btn4 = new android.widget.Button(ctx);
		btn4.setText("Effect Menu");
if(GetLang=="de_DE")btn4.setText('Effekt Menü');
if(GetLang=="ko_KR")btn4.setText('효과 메뉴');

if(GetLang=="es_MX")btn4.setText('Menú de efectos');

if(GetLang=="ja_JP")btn4.setText('エフェクトメニュー');

if(GetLang=="fr_FR")btn4.setText('Effet Menu');

if(GetLang=="it_IT")btn4.setText('Menu Effetti');
btn4.setTextColor(GUIBtns);
		btn4.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             emenu_menu();
             menu.dismiss();
clientMessage(client + "§cMenu doesn't work in servers.");
			}
		});
		menuLayout.addView(btn4);

/***********************/

function emenu_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var emenuLayout = new LinearLayout(ctx);
            var emenuScroll = new ScrollView(ctx);
            var emenuLayout1 = new LinearLayout(ctx);
            emenuLayout.setOrientation(1);
            emenuLayout1.setOrientation(1);
            emenuScroll.addView(emenuLayout);
            emenuLayout1.addView(emenuScroll);

var MainTitle = new android.widget.TextView(ctx); MainTitle.setGravity(android.view.Gravity.CENTER);
		MainTitle.setText("Alphα Hαck" + space + version);
       MainTitle.setTextColor(GUIName);
		MainTitle.setTextSize(20);
		emenuLayout.addView(MainTitle);
            
            var y_title = new android.widget.TextView(ctx); y_title.setGravity(android.view.Gravity.CENTER);
		y_title.setText("Effect Menu");
       y_title.setTextColor(GUIName);
		y_title.setTextSize(20);
		emenuLayout.addView(y_title);

var C_exit = new android.widget.Button(ctx);
		C_exit.setText("Exit");
		C_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             emenu.dismiss();
showMenuBtn();
			}
		});
		emenuLayout.addView(C_exit);

            var mov = new Button(ctx);
            mov.setText("Remove all effect");
            mov.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                 //Entity.removeAllEffects(player);
Entity.removeAllEffects(getPlayerEnt());
                }
            }));
            emenuLayout.addView(mov);

var e1 = new Button(ctx);
            e1.setText("saturation");
            e1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ea();
                }
            }));
            emenuLayout.addView(e1);

function ea() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn1();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn1() {
Entity.addEffect(getPlayerEnt(), MobEffect.saturation, s*l, 0, false, true);
}
            
            var e2 = new Button(ctx);
            e2.setText("Absorption");
            e2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
eb();
                }
            }));
            emenuLayout.addView(e2);

function eb() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn2();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn2() {
Entity.addEffect(getPlayerEnt(), MobEffect.absorption, s*l, 0, false, true);
}

var e3 = new Button(ctx);
            e3.setText("Health boost");
            e3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
  ec();
                }
            }));
            emenuLayout.addView(e3);

function ec() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn3();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn3() {
Entity.addEffect(getPlayerEnt(), MobEffect.healthBoost, s*l, 0, false, true);
}

var e4 = new Button(ctx);
            e4.setText("Wither");
            e4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ed();
                }
            }));
            emenuLayout.addView(e4);

function ed() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn4();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn4() {
Entity.addEffect(getPlayerEnt(), MobEffect.wither, s*l, 0, false, true);
}
            
            var e5 = new Button(ctx);
            e5.setText("Poison");
            e5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ee();
                }
            }));
            emenuLayout.addView(e5);

function ee() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn5();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn5() {
Entity.addEffect(getPlayerEnt(), MobEffect.poison, s*l, 0, false, true);
}

var e6 = new Button(ctx);
            e6.setText("Weakness");
            e6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    ef();
                }
            }));
            emenuLayout.addView(e6);

function ef() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn6();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn6() {
Entity.addEffect(getPlayerEnt(), MobEffect.weakness, s*l, 0, false, true);
}

var e7 = new Button(ctx);
            e7.setText("Hunger");
            e7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
eg()
                }
            }));
            emenuLayout.addView(e7);

function eg() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn7();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn7() {
Entity.addEffect(getPlayerEnt(), MobEffect.hunger, s*l, 0, false, true);
}

var e8 = new Button(ctx);
            e8.setText("Night vision");
            e8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
eh();
                }
            }));
            emenuLayout.addView(e8);

function eh() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn8();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn8() {
Entity.addEffect(getPlayerEnt(), MobEffect.nightVision, s*l, 0, false, true);
}

var e9 = new Button(ctx);
            e9.setText("Blindness");
            e9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ei();
                }
            }));
            emenuLayout.addView(e9);

function ei() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn9();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn9() {
Entity.addEffect(getPlayerEnt(), MobEffect.blindness, s*l, 0, false, true);
}

var e10 = new Button(ctx);
            e10.setText("Invisibility");
            e10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
 ej();
                }
            }));
            emenuLayout.addView(e10);

function ej() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn10();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn10() {
Entity.addEffect(getPlayerEnt(), MobEffect.invisibility, s*l, 0, false, true);
}

var e11 = new Button(ctx);
            e11.setText("Water breathing");
            e11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ek();
                }
            }));
            emenuLayout.addView(e11);

function ek() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn11();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn11() {
Entity.addEffect(getPlayerEnt(), MobEffect.waterBreathing, s*l, 0, false, true);
}

var e12 = new Button(ctx);
            e12.setText("Fire resistance");
            e12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
el();
                }
            }));
            emenuLayout.addView(e12);

function el() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn12();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn12() {
Entity.addEffect(getPlayerEnt(), MobEffect.fireResistance, s*l, 0, false, true);
}

var e13 = new Button(ctx);
            e13.setText("Resistance");
            e13.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
em();
                }
            }));
            emenuLayout.addView(e13);

function em() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn13();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn13() {
Entity.addEffect(getPlayerEnt(), MobEffect.damageResistance, s*l, 0, false, true);
}

var e14 = new Button(ctx);
            e14.setText("Regeneration");
            e14.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en();
                }
            }));
            emenuLayout.addView(e14);

function en() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn14();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn14() {
Entity.addEffect(getPlayerEnt(), MobEffect.regeneration, s*l, 0, false, true);
}

var e15 = new Button(ctx);
            e15.setText("Nausea");
            e15.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
 eo();
                }
            }));
            emenuLayout.addView(e15);

function eo() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn15();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn15() {
Entity.addEffect(getPlayerEnt(), MobEffect.confusion, s*l, 0, false, true);
}

var e16 = new Button(ctx);
            e16.setText("Jump boost");
            e16.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
 ep();
                }
            }));
            emenuLayout.addView(e16);

function ep() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn16();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn16() {
Entity.addEffect(getPlayerEnt(), MobEffect.jump, s*l, 0, false, true);
}

var e17 = new Button(ctx);
            e17.setText("harm");
            e17.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
eq();
                }
            }));
            emenuLayout.addView(e17);

function eq() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn17();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn17() {
Entity.addEffect(getPlayerEnt(), MobEffect.harm, s*l, 0, false, true);
}

var e18 = new Button(ctx);
            e18.setText("heal");
            e18.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
er();
                }
            }));
            emenuLayout.addView(e18);

function er() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn18();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn18() {
Entity.addEffect(getPlayerEnt(), MobEffect.heal, s*l, 0, false, true);
}

var e19 = new Button(ctx);
            e19.setText("Strength");
            e19.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
es();
                }
            }));
            emenuLayout.addView(e19);

function es() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn19();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn19() {
Entity.addEffect(getPlayerEnt(), MobEffect.damageBoost, s*l, 0, false, true);
}

var e20 = new Button(ctx);
            e20.setText("Mining fatigue");
            e20.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
et();
                }
            }));
            emenuLayout.addView(e20);

function et() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn20();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn20() {
Entity.addEffect(getPlayerEnt(), MobEffect.digSlowdown, s*l, 0, false, true);
}

var e21 = new Button(ctx);
            e21.setText("Haste");
            e21.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
eu();
                }
            }));
            emenuLayout.addView(e21);

function eu() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn21();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn21() {
Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, s*l, 0, false, true);
}

var e22 = new Button(ctx);
            e22.setText("Slowness");
            e22.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ev();
                }
            }));
            emenuLayout.addView(e22);

function ev() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn22();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn22() {
Entity.addEffect(getPlayerEnt(), MobEffect.movementSlowdown, s*l, 0, false, true);
}

var e23 = new Button(ctx);
            e23.setText("Speed boost");
            e23.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ew();
                }
            }));
            emenuLayout.addView(e23);

function ew() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn23();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn23() {
Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, s*l, 0, false, true);
}
		
		var D_exit = new android.widget.Button(ctx);
		D_exit.setText("Exit");
		D_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             emenu.dismiss();
showMenuBtn();
			}
		});
		emenuLayout.addView(D_exit);

            emenu = new PopupWindow(emenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, ctx.getWindowManager().getDefaultDisplay().getHeight());
            emenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
			var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(GUIColor);
      bg.setStroke(10,Color.BLUE);
emenuLayout1.setBackgroundDrawable(bg);
emenuLayout1.setPadding(20,0,20,0);
            emenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

/***********************/

var btn5 = new android.widget.Button(ctx);
            btn5.setText("Teleport Menu");
if(GetLang=="de_DE")btn5.setText('Teleport Menü');
if(GetLang=="ko_KR")btn5.setText('텔레포트 메뉴');

if(GetLang=="es_MX")btn5.setText('teletransportación');

if(GetLang=="ja_JP")btn5.setText('テレポートメニュー');

if(GetLang=="it_IT")btn5.setText('Menu Teletrasporto');
btn5.setTextColor(GUIBtns);
            btn5.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
menu.dismiss();
TeleMenu();
                }
            }));
            menuLayout.addView(btn5);

/***********************/

function TeleMenu() {
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var tmenuLayout = new android.widget.LinearLayout(ctx);
            var tmenuScroll = new android.widget.ScrollView(ctx);
            var tmenuLayout1 = new android.widget.LinearLayout(ctx);
            tmenuLayout.setOrientation(1);
            tmenuLayout1.setOrientation(1);

            tmenuScroll.addView(tmenuLayout);
            tmenuLayout1.addView(tmenuScroll);

var MainTitle = new android.widget.TextView(ctx); MainTitle.setGravity(android.view.Gravity.CENTER);
		MainTitle.setText("Alphα Hαck" + space + version);
       MainTitle.setTextColor(GUIName);
		MainTitle.setTextSize(20);
		tmenuLayout.addView(MainTitle);

var titl = new android.widget.TextView(ctx); titl.setGravity(android.view.Gravity.CENTER);
		titl.setText("Teleport Menu");
       titl.setTextColor(GUIName);
		titl.setTextSize(20);
		tmenuLayout.addView(titl);

            var button = new android.widget.Button(ctx);
            button.setText("Select coords");
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Tsele();
tmenu.dismiss();
                }
            }));
            tmenuLayout.addView(button);

var Uspawn = new Button(ctx);
            Uspawn.setText("Set home");       
            Uspawn.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
        xhome=Player.getX();
        yhome=Player.getY()+1;
        zhome=Player.getZ(); 
        save();
clientMessage("§7Home set to: " + Math.round(xhome) + ", " + Math.round(yhome) + ", " + Math.round(zhome) + ".");
                }
            }));
            tmenuLayout.addView(Uspawn);

var Rspawn = new Button(ctx);
            Rspawn.setText("Return to home");       
            Rspawn.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
        load();
clientMessage("§7Returning to your saved home");
                }
            }));
            tmenuLayout.addView(Rspawn);

var sspawn = new Button(ctx);
            sspawn.setText("Set spawn");       
            sspawn.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
        Level.setSpawn(getPlayerX(), getPlayerY(), getPlayerZ())
clientMessage("§7Spawn set to " + Math.round(getPlayerX()) + ", " + Math.round(getPlayerY()) + ", " + Math.round(getPlayerZ()) + ".");
                }
            }));
            tmenuLayout.addView(sspawn);
			
			var randomtp = new Button(ctx);
            randomtp.setText("Random TP");       
            randomtp.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
 setPosition(Player.getEntity(), (Math.floor(Math.random() * (5000 - 100 + 1)) + 100), 60, (Math.floor(Math.random() * (5000 - 100 + 1)) + 100));
				clientMessage(client + "Woah!");
                }
            }));
            tmenuLayout.addView(randomtp);
			
			var at = new android.widget.Button(ctx);
      at.setText("Tap teleport: "+(taptp?"on":"off"));
		at.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				taptp?taptp=false:taptp=true;
at.setText("Tap teleport: "+(taptp?"on":"off"));
if(taptp == true){
clientMessage(client + "Tap telelport enabled.")
}
if(taptp == false){
clientMessage(client + "Tap teleport disabled.");

taptp = false;
                }
			}
		});
		tmenuLayout.addView(at);
			
			var et = new android.widget.TextView(ctx);
			et.setGravity(android.view.Gravity.CENTER);
		et.setText("You may crash while tping because blocks do not load correctly.");
       et.setTextColor(Color.RED);
		et.setTextSize(20);
		tmenuLayout.addView(et);

var gg_exit = new android.widget.Button(ctx);
		gg_exit.setText("Exit");
		gg_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             tmenu.dismiss();
showMenuBtn();
			}
		});
		tmenuLayout.addView(gg_exit);

            tmenu = new android.widget.PopupWindow(tmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight());
       /*     tmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.GUIColor));*/
tmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(GUIColor);
      bg.setStroke(10,Color.BLUE);
tmenuLayout1.setBackgroundDrawable(bg);
tmenuLayout1.setPadding(20,0,20,0);
            tmenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
        }catch(error){
            print("A Error Has Happen: " + error);
        }
    }}));
}

function Tsele() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var X = new android.widget.EditText(ctx);
var Y = new android.widget.EditText(ctx);
var Z = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Type coords to teleport");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(X);
Layer.addView(Y);
Layer.addView(Z);
Layer.addView(Exit);

X.setText("");
X.setHint("X");
Y.setText("");
Y.setHint("Y");
Z.setText("");
Z.setHint("Z");
Exit.setText("Teleport");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
px=X.getText();
py=Y.getText();
pz=Z.getText();
Dialog.dismiss();
set();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Teleport Dialog Is Malfunctioning:"+e);
}
}});
}

function set() {
setPosition(Player.getEntity(), px, py, pz);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/tp " + Player.getName(Player.getEntity()) + space + px + space + py + space + pz);
}

/***********************/

var btn6 = new android.widget.Button(ctx);
		btn6.setText("Nuke Menu");
if(GetLang=="de_DE")btn6.setText('Bomben Menü');
if(GetLang=="ko_KR")btn6.setText('핵폭탄 메뉴');

if(GetLang=="es_MX")btn6.setText('Menú de bomba nuclear');

if(GetLang=="ja_JP")btn6.setText('爆発メニュー');

if(GetLang=="fr_FR")btn6.setText('Destruction Menu');

if(GetLang=="it_IT")btn6.setText('Menu Esplosioni');
btn6.setTextColor(GUIBtns);
		btn6.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             nmenu_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(btn6);

/***********************/

function nmenu_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var nmenuLayout = new LinearLayout(ctx);
            var nmenuScroll = new ScrollView(ctx);
            var nmenuLayout1 = new LinearLayout(ctx);
            nmenuLayout.setOrientation(1);
            nmenuLayout1.setOrientation(1);
            nmenuScroll.addView(nmenuLayout);
            nmenuLayout1.addView(nmenuScroll);

var MainTitle = new android.widget.TextView(ctx); MainTitle.setGravity(android.view.Gravity.CENTER);
		MainTitle.setText("Alphα Hαck" + space + version);
       MainTitle.setTextColor(GUIName);
		MainTitle.setTextSize(20);
		nmenuLayout.addView(MainTitle);
            
            var l_title = new android.widget.TextView(ctx); l_title.setGravity(android.view.Gravity.CENTER);
		l_title.setText("Nuke Menu");
       l_title.setTextColor(GUIName);
		l_title.setTextSize(20);
		nmenuLayout.addView(l_title);

var g_exit = new android.widget.Button(ctx);
		g_exit.setText("Exit");
		g_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             nmenu.dismiss();
showMenuBtn();
			}
		});
		nmenuLayout.addView(g_exit);

var n1 = new Button(ctx);
            n1.setText("Nuke 1%");  
            n1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         explode(getPlayerX(),getPlayerY(),getPlayerZ(),1);
                }
            }));
            nmenuLayout.addView(n1);

     var n2 = new Button(ctx);
            n2.setText("Nuke 5%");
            n2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         explode(getPlayerX(),getPlayerY(),getPlayerZ(),5);
                }
            }));
            nmenuLayout.addView(n2);

var n3 = new Button(ctx);
            n3.setText("Nuke 10%");
            n3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         explode(getPlayerX(),getPlayerY(),getPlayerZ(),10);
                }
            }));
            nmenuLayout.addView(n3);

var n4 = new Button(ctx);
            n4.setText("Nuke 15%");
            n4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         explode(getPlayerX(),getPlayerY(),getPlayerZ(),15);
                }
            }));
            nmenuLayout.addView(n4);

var n5 = new Button(ctx);
            n5.setText("Nuke 20%");
            n5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         explode(getPlayerX(),getPlayerY(),getPlayerZ(),20);
                }
            }));
            nmenuLayout.addView(n5);

var n6 = new Button(ctx);
            n6.setText("Nuke 25%");
            n6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         explode(getPlayerX(),getPlayerY(),getPlayerZ(),25);
                }
            }));
            nmenuLayout.addView(n6);

var n7 = new Button(ctx);
            n7.setText("Nuke 30%");
            n7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         explode(getPlayerX(),getPlayerY(),getPlayerZ(),30);
                }
            }));
            nmenuLayout.addView(n7);

var n8 = new Button(ctx);
            n8.setText("Nuke 35%");
            n8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         explode(getPlayerX(),getPlayerY(),getPlayerZ(),35);
                }
            }));
            nmenuLayout.addView(n8);

var n9 = new Button(ctx);
            n9.setText("Nuke 40%");
            n9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         explode(getPlayerX(),getPlayerY(),getPlayerZ(),40);
                }
            }));
            nmenuLayout.addView(n9);

var n10 = new Button(ctx);
            n10.setText("Nuke 45%");
            n10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         explode(getPlayerX(),getPlayerY(),getPlayerZ(),45);
                }
            }));
            nmenuLayout.addView(n10);

var n11 = new Button(ctx);
            n11.setText("Nuke 50%");
            n11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         explode(getPlayerX(),getPlayerY(),getPlayerZ(),50);
                }
            }));
            nmenuLayout.addView(n11);
		
		var h_exit = new android.widget.Button(ctx);
		h_exit.setText("Exit");
		h_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             nmenu.dismiss();
showMenuBtn();
			}
		});
		nmenuLayout.addView(h_exit);

            nmenu = new PopupWindow(nmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, ctx.getWindowManager().getDefaultDisplay().getHeight());
            nmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
			var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(GUIColor);
      bg.setStroke(10,Color.BLUE);
nmenuLayout1.setBackgroundDrawable(bg);
nmenuLayout1.setPadding(20,0,20,0);
            nmenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

/***********************/

var btn7 = new android.widget.Button(ctx);
            btn7.setText("Give Menu");
if(GetLang=="de_DE")btn7.setText('Item Menü');
if(GetLang=="ko_KR")btn7.setText('아이템 주기 메뉴');

if(GetLang=="es_MX")btn7.setText('Menú de tener');

if(GetLang=="ja_JP")btn7.setText('アイテムの付与');

if(GetLang=="fr_FR")btn7.setText('Donner Menu');

if(GetLang=="it_IT")btn7.setText('Menu Give');
btn7.setTextColor(GUIBtns);
            btn7.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
menu.dismiss();
GiveMenu();
clientMessage(client + "§cKits doesn't work in servers.");
                }
            }));
            menuLayout.addView(btn7);

/***********************/

function GiveMenu() {
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var gmenuLayout = new android.widget.LinearLayout(ctx);
            var gmenuScroll = new android.widget.ScrollView(ctx);
            var gmenuLayout1 = new android.widget.LinearLayout(ctx);
            gmenuLayout.setOrientation(1);
            gmenuLayout1.setOrientation(1);

            gmenuScroll.addView(gmenuLayout);
            gmenuLayout1.addView(gmenuScroll);


var MainTitle = new android.widget.TextView(ctx); MainTitle.setGravity(android.view.Gravity.CENTER);
		MainTitle.setText("Alphα Hαck" + space + version);
       MainTitle.setTextColor(GUIName);
		MainTitle.setTextSize(20);
		gmenuLayout.addView(MainTitle);

var gtitle = new android.widget.TextView(ctx); gtitle.setGravity(android.view.Gravity.CENTER);
		gtitle.setText("Give Menu");
       gtitle.setTextColor(GUIName);
		gtitle.setTextSize(20);
		gmenuLayout.addView(gtitle);

            var button = new android.widget.Button(ctx);
            button.setText("Custom Give");
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Give();
gmenu.dismiss();
                }
            }));
            gmenuLayout.addView(button);

var button90 = new android.widget.Button(ctx);
            button90.setText("Item ID list");
            button90.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
idList(); 
                }
            }));
            gmenuLayout.addView(button90);

function idList()
      {
      ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebChromeClient(new android.webkit.WebChromeClient());
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('http://www.minecraftinfo.com/idlist.html');
/*Site URL*/
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
      }

var butto = new android.widget.Button(ctx);
            butto.setText("Special creative inventory");
            butto.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 clientMessage(client + "§7Adding all items to creative inventory");
for(var j = 0; j < 900; j++) {
Player.addItemCreativeInv(j, 5, 0);
}
if(j==900)clientMessage(client + "§7Done, all items added.");
                }
            }));
            gmenuLayout.addView(butto);

var clear = new Button(ctx);
            clear.setText("Clear inventory");        
            clear.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
clientMessage(client + "§7Inventory cleared.");
for(var k = 0; k < 50; k++)
       Player.clearInventorySlot(k);
                }
            }));
            gmenuLayout.addView(clear);

var k1 = new android.widget.Button(ctx);
            k1.setText("Leather kit");
            k1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Player.setArmorSlot(0, 298, 0);
Player.setArmorSlot(1, 299, 0);
Player.setArmorSlot(2, 300, 0);
Player.setArmorSlot(3, 301, 0);
clientMessage("§6Leather §fkit equipped check inventory!");
addItemInventory(268, 1, 0);
addItemInventory(269, 1, 0);
addItemInventory(270, 1, 0);
addItemInventory(271, 1, 0);
addItemInventory(290, 1, 0);
                }
            }));
            gmenuLayout.addView(k1);

var k2 = new android.widget.Button(ctx);
            k2.setText("Chain kit");
            k2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Player.setArmorSlot(0, 302, 0);
Player.setArmorSlot(1, 303, 0);
Player.setArmorSlot(2, 304, 0);
Player.setArmorSlot(3, 305, 0);
clientMessage("§7Chain §fkit equipped check inventory!");
addItemInventory(272, 1, 0);
addItemInventory(273, 1, 0);
addItemInventory(274, 1, 0);
addItemInventory(275, 1, 0);
addItemInventory(291, 1, 0);
                }
            }));
            gmenuLayout.addView(k2);

var k3 = new android.widget.Button(ctx);
            k3.setText("Iron kit");
            k3.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Player.setArmorSlot(0, 306, 0);
Player.setArmorSlot(1, 307, 0);
Player.setArmorSlot(2, 308, 0);
Player.setArmorSlot(3, 309, 0);
clientMessage("§fIron §fkit equipped check inventory!");
addItemInventory(267, 1, 0);
addItemInventory(256, 1, 0);
addItemInventory(257, 1, 0);
addItemInventory(258, 1, 0);
addItemInventory(292, 1, 0);
                }
            }));
            gmenuLayout.addView(k3);

var k4 = new android.widget.Button(ctx);
            k4.setText("Gold kit");
            k4.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Player.setArmorSlot(0, 314, 0);
Player.setArmorSlot(1, 315, 0);
Player.setArmorSlot(2, 316, 0);
Player.setArmorSlot(3, 317, 0);
clientMessage("§eGold §fkit equipped check inventory!");
addItemInventory(283, 1, 0);
addItemInventory(284, 1, 0);
addItemInventory(285, 1, 0);
addItemInventory(286, 1, 0);
addItemInventory(294, 1, 0);
                }
            }));
            gmenuLayout.addView(k4);

var k5 = new android.widget.Button(ctx);
            k5.setText("Diamond kit");
            k5.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Player.setArmorSlot(0, 310, 0);
Player.setArmorSlot(1, 311, 0);
Player.setArmorSlot(2, 312, 0);
Player.setArmorSlot(3, 313, 0);
clientMessage("§bDiamond §fkit equipped check inventory!");
addItemInventory(276, 1, 0);
addItemInventory(277, 1, 0);
addItemInventory(278, 1, 0);
addItemInventory(279, 1, 0);
addItemInventory(293, 1, 0);
                }
            }));
            gmenuLayout.addView(k5);

var gg_exit = new android.widget.Button(ctx);
		gg_exit.setText("Exit");
		gg_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             gmenu.dismiss();
showMenuBtn();
			}
		});
		gmenuLayout.addView(gg_exit);

            gmenu = new android.widget.PopupWindow(gmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, ctx.getWindowManager().getDefaultDisplay().getHeight());
          /*  gmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.GUIColor));*/
gmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(GUIColor);
      bg.setStroke(10,Color.BLUE);
gmenuLayout1.setBackgroundDrawable(bg);
gmenuLayout1.setPadding(20,0,20,0);
            gmenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
        }catch(error){
            print("A Error Has Happen: " + error);
        }
    }}));
}

function Give() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var ID = new android.widget.EditText(ctx);
var Amount = new android.widget.EditText(ctx);
var Damage = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter ID,Amt,Dmg");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(ID);
Layer.addView(Amount);
Layer.addView(Damage);
Layer.addView(Exit);

ID.setText("");
ID.setHint("Item ID");
Amount.setText("");
Amount.setHint("Item Amount");
Damage.setText("");
Damage.setHint("Item Damage");
Exit.setText("Give items");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
I=ID.getText();
A=Amount.getText();
D=Damage.getText();
Dialog.dismiss();
give2();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Give Dialog Is Malfunctioning:"+e);
}
}});
}

function give2() {
Player.addItemInventory(I,A,D);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/give " + Player.getName(Player.getEntity()) + space + I + ":" + D + space + A);
}

/***********************/

var btn8 = new android.widget.Button(ctx);
		btn8.setText("Speed Menu");
if(GetLang=="de_DE")btn8.setText('Speed Menü');
if(GetLang=="ko_KR")btn8.setText('속도 메뉴');

if(GetLang=="es_MX")btn8.setText('Menú de velocidad');

if(GetLang=="ja_JP")btn8.setText('ゲームスピードメニュー');

if(GetLang=="fr_FR")btn8.setText('Vitesse Menu');

if(GetLang=="it_IT")btn8.setText('Menu Velocità');
btn8.setTextColor(GUIBtns);
		btn8.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             dmenu_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(btn8);

/***********************/

function dmenu_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var dmenuLayout = new LinearLayout(ctx);
            var dmenuScroll = new ScrollView(ctx);
            var dmenuLayout1 = new LinearLayout(ctx);
            dmenuLayout.setOrientation(1);
            dmenuLayout1.setOrientation(1);
            dmenuScroll.addView(dmenuLayout);
            dmenuLayout1.addView(dmenuScroll);

var MainTitle = new android.widget.TextView(ctx); MainTitle.setGravity(android.view.Gravity.CENTER);
		MainTitle.setText("Alphα Hαck" + space + version);
       MainTitle.setTextColor(GUIName);
		MainTitle.setTextSize(20);
		dmenuLayout.addView(MainTitle);
            
            var title = new android.widget.TextView(ctx); title.setGravity(android.view.Gravity.CENTER);
		title.setText("Speed Menu");
       title.setTextColor(GUIName);
		title.setTextSize(20);
		dmenuLayout.addView(title);

var exit = new android.widget.Button(ctx);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             dmenu.dismiss();
showMenuBtn();
			}
		});
		dmenuLayout.addView(exit);

var d1 = new Button(ctx);
            d1.setText("Normal speed");       
            d1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(20);
                }
            }));
            dmenuLayout.addView(d1);
			
			var d0 = new Button(ctx);
            d0.setText("Speed 0%");       
            d0.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(0);
                }
            }));
            dmenuLayout.addView(d0);
            
            var d2 = new Button(ctx);
            d2.setText("Speed 5%");       
            d2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(5);
                }
            }));
            dmenuLayout.addView(d2);
            
            var d3 = new Button(ctx);
            d3.setText("Speed 10%");       
            d3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(10);
                }
            }));
            dmenuLayout.addView(d3);
            
            var d4 = new Button(ctx);
            d4.setText("Speed 15%");       
            d4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(15);
                }
            }));
            dmenuLayout.addView(d4);
            
            var d5 = new Button(ctx);
            d5.setText("Speed 20%");       
            d5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(20);
                }
            }));
            dmenuLayout.addView(d5);
            
            var d6 = new Button(ctx);
            d6.setText("Speed 25%");       
            d6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(25);
                }
            }));
            dmenuLayout.addView(d6);
            
            var d7 = new Button(ctx);
            d7.setText("Speed 30%");       
            d7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(30);
                }
            }));
            dmenuLayout.addView(d7);
            
            var d8 = new Button(ctx);
            d8.setText("Speed 35%");       
            d8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(35);
                }
            }));
            dmenuLayout.addView(d8);
            
            var d9 = new Button(ctx);
            d9.setText("Speed 40%");       
            d9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(40);
                }
            }));
            dmenuLayout.addView(d9);

var d10 = new Button(ctx);
            d10.setText("Speed 45%");       
            d10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(45);
                }
            }));
            dmenuLayout.addView(d10);

var d11 = new Button(ctx);
            d11.setText("Speed 50%");       
            d11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(50);
                }
            }));
            dmenuLayout.addView(d11);

var d12 = new Button(ctx);
            d12.setText("Speed 55%");       
            d12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(55);
                }
            }));
            dmenuLayout.addView(d12);

var d13 = new Button(ctx);
            d13.setText("Speed 60%");       
            d13.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(60);
                }
            }));
            dmenuLayout.addView(d13);

var d14 = new Button(ctx);
            d14.setText("Speed 65%");       
            d14.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(65);
                }
            }));
            dmenuLayout.addView(d14);

var d15 = new Button(ctx);
            d15.setText("Speed 70%");       
            d15.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(70);
                }
            }));
            dmenuLayout.addView(d15);

var d16 = new Button(ctx);
            d16.setText("Speed 75%");       
            d16.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(75);
                }
            }));
            dmenuLayout.addView(d16);

var d17 = new Button(ctx);
            d17.setText("Speed 80%");       
            d17.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(80);
                }
            }));
            dmenuLayout.addView(d17);

var d18 = new Button(ctx);
            d18.setText("Speed 85%");       
            d18.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(85);
                }
            }));
            dmenuLayout.addView(d18);

var d19 = new Button(ctx);
            d19.setText("Speed 90%");       
            d19.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(90);
                }
            }));
            dmenuLayout.addView(d19);

var d20 = new Button(ctx);
            d20.setText("Speed 95%");       
            d20.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(95);
                }
            }));
            dmenuLayout.addView(d20);

var d21 = new Button(ctx);
            d21.setText("Speed 100%");       
            d21.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(100);
                }
            }));
            dmenuLayout.addView(d21);
			
			var d22 = new Button(ctx);
            d22.setText("Custom speed");        
            d22.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
newspeed(); 

                }
            }));
            dmenuLayout.addView(d22);

function newspeed() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer8 = new android.widget.LinearLayout(ctx);
var vspee = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter custom speed");
Dialog.setContentView(Layer8);

Layer8.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer8.addView(vspee);
Layer8.addView(Exit);

vspee.setText("");
vspee.setHint("numbers here");
Exit.setText("done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
nspee =vspee.getText();
Dialog.dismiss();
setspeed();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The set speed Dialog Is Malfunctioning:"+e);
}
}});
}

function setspeed(){
ModPE.setGameSpeed(nspee);
}
		
		var exit2 = new android.widget.Button(ctx);
		exit2.setText("Exit");
		exit2.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             dmenu.dismiss();
showMenuBtn();
			}
		});
		dmenuLayout.addView(exit2);

            dmenu = new PopupWindow(dmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, ctx.getWindowManager().getDefaultDisplay().getHeight());
            dmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
			var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(GUIColor);
      bg.setStroke(10,Color.BLUE);
dmenuLayout1.setBackgroundDrawable(bg);
dmenuLayout1.setPadding(20,0,20,0);
            dmenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

/***********************/

var btn10 = new android.widget.Button(ctx);
            btn10.setText("Enchant Menu");
if(GetLang=="de_DE")btn10.setText('Enchant Menü');
if(GetLang=="ko_KR")btn10.setText('인첸트 메뉴');

if(GetLang=="es_MX")btn10.setText('Menú de Enchant');

if(GetLang=="ja_JP")btn10.setText('エンチャントメニュー');

if(GetLang=="fr_FR")btn10.setText('Enchanter Menu');

if(GetLang=="it_IT")btn10.setText('Menu Incantamenti');
btn10.setTextColor(GUIBtns);
            btn10.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
ExMenu();
menu.dismiss();
                }
            }));
            menuLayout.addView(btn10);

/***********************/

function ExMenu() {
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var xmenuLayout = new android.widget.LinearLayout(ctx);
            var xmenuScroll = new android.widget.ScrollView(ctx);
            var xmenuLayout1 = new android.widget.LinearLayout(ctx);
            xmenuLayout.setOrientation(1);
            xmenuLayout1.setOrientation(1);

            xmenuScroll.addView(xmenuLayout);
            xmenuLayout1.addView(xmenuScroll);

var MainTitle = new android.widget.TextView(ctx); MainTitle.setGravity(android.view.Gravity.CENTER);
		MainTitle.setText("Alphα Hαck" + space + version);
       MainTitle.setTextColor(GUIName);
		MainTitle.setTextSize(20);
		xmenuLayout.addView(MainTitle);

var xtitle = new android.widget.TextView(ctx); xtitle.setGravity(android.view.Gravity.CENTER);
		xtitle.setText("Enchant Menu");
       xtitle.setTextColor(GUIName);
		xtitle.setTextSize(20);
		xmenuLayout.addView(xtitle);

            var button = new android.widget.Button(ctx);
            button.setText("Add experience");
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
XGive();
xmenu.dismiss();
                }
            }));
            xmenuLayout.addView(button);

var ena = new Button(ctx);
            ena.setText("Aqua Affinity");
            ena.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en1();
                }
            }));
            xmenuLayout.addView(ena);

function en1() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add1();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add1() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.AQUA_AFFINITY,ll);
}

var enb = new Button(ctx);
            enb.setText("Bane Of Athropods");
            enb.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en2();
                }
            }));
            xmenuLayout.addView(enb);

function en2() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add2();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add2() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.BANE_OF_ARTHROPODS,ll);
}

var enc = new Button(ctx);
            enc.setText("Blast Protection");
            enc.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en3();
                }
            }));
            xmenuLayout.addView(enc);

function en3() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add3();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add3() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.BLAST_PROTECTION,ll);
}

var enf = new Button(ctx);
            enf.setText("Depth Strider");
            enf.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en5();
                }
            }));
            xmenuLayout.addView(enf);

function en5() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add5();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add5() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.DEPTH_STRIDER,ll);
}

var ene = new Button(ctx);
            ene.setText("Efficiency");
            ene.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en6();
                }
            }));
            xmenuLayout.addView(ene);

function en6() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add6();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add6() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.EFFICIENCY,ll);
}

var eng = new Button(ctx);
            eng.setText("Feather Falling");
            eng.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en7();
                }
            }));
            xmenuLayout.addView(eng);

function en7() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add7();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add7() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.FEATHER_FALLING,ll);
}

var enh = new Button(ctx);
            enh.setText("Fire Aspect");
            enh.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en8();
                }
            }));
            xmenuLayout.addView(enh);

function en8() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add8();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add8() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_ASPECT,ll);
}

var eni = new Button(ctx);
            eni.setText("Fire Protection");
            eni.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en9();
                }
            }));
            xmenuLayout.addView(eni);

function en9() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add9();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add9() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_PROTECTION,ll);
}

var enj = new Button(ctx);
            enj.setText("Flame");
            enj.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en10();
                }
            }));
            xmenuLayout.addView(enj);

function en10() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add10();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add10() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.FLAME,ll);
}

var enk = new Button(ctx);
            enk.setText("Fortune");
            enk.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en11();
                }
            }));
            xmenuLayout.addView(enk);

function en11() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add11();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add11() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.FORTUNE,ll);
}

var enl = new Button(ctx);
            enl.setText("Infinity");
            enl.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en12();
                }
            }));
            xmenuLayout.addView(enl);

function en12() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add12();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add12() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.INFINITY,ll);
}

var enm = new Button(ctx);
            enm.setText("Knockback");
            enm.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en13();
                }
            }));
            xmenuLayout.addView(enm);

function en13() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add13();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add13() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.KNOCKBACK,ll);
}

var enn = new Button(ctx);
            enn.setText("Looting");
            enn.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en14();
                }
            }));
            xmenuLayout.addView(enn);

function en14() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add14();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add14() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.LOOTING,ll);
}

var eno = new Button(ctx);
            eno.setText("Luck of the sea");
            eno.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en15();
                }
            }));
            xmenuLayout.addView(eno);

function en15() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add15();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add15() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.LUCK_OF_THE_SEA,ll);
}

var enp = new Button(ctx);
            enp.setText("Lure");
            enp.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en16();
                }
            }));
            xmenuLayout.addView(enp);

function en16() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add16();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add16() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.LURE,ll);
}

var enq = new Button(ctx);
            enq.setText("Power");
            enq.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en17();
                }
            }));
            xmenuLayout.addView(enq);

function en17() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add17();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add17() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.POWER,ll);
}

var enr = new Button(ctx);
            enr.setText("Projectile protection");
            enr.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en18();
                }
            }));
            xmenuLayout.addView(enr);

function en18() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add18();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add18() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.PROJECTILE_PROTECTION,ll);
}

var ens = new Button(ctx);
            ens.setText("Protection");
            ens.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en19();
                }
            }));
            xmenuLayout.addView(ens);

function en19() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add19();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add19() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.PROTECTION,ll);
}

var ent = new Button(ctx);
            ent.setText("Punch");
            ent.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en20();
                }
            }));
            xmenuLayout.addView(ent);

function en20() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add20();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add20() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.PUNCH,ll);
}

var enu = new Button(ctx);
            enu.setText("Respiration");
            enu.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en21();
                }
            }));
            xmenuLayout.addView(enu);

function en21() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add21();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add21() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.RESPIRATION,ll);
}

var env = new Button(ctx);
            env.setText("Sharpness");
            env.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en22();
                }
            }));
            xmenuLayout.addView(env);

function en22() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add22();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add22() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.SHARPNESS,ll);
}

var enw = new Button(ctx);
            enw.setText("Silk touch");
            enw.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en23();
                }
            }));
            xmenuLayout.addView(enw);

function en23() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add23();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add23() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.SILK_TOUCH,ll);
}

var enx = new Button(ctx);
            enx.setText("Smite");
            enx.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en24();
                }
            }));
            xmenuLayout.addView(enx);

function en24() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add24();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add24() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.SMITE,ll);
}

var eny = new Button(ctx);
            eny.setText("Thorns");
            eny.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en25();
                }
            }));
            xmenuLayout.addView(eny);

function en25() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add25();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add25() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.THORNS,ll);
}

var enz = new Button(ctx);
            enz.setText("Unbreaking");
            enz.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en26();
                }
            }));
            xmenuLayout.addView(enz);

function en26() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add26();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add26() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING,ll);
}

//Enchantment.AQUA_AFFINITY;
//Enchantment.BANE_OF_ARTHROPODS;
//Enchantment.BLAST_PROTECTION;
//Enchantment.DEPTH_STRIDER;
//Enchantment.EFFICIENCY;
//Enchantment.FEATHER_FALLING;
//Enchantment.FIRE_ASPECT;
//Enchantment.FIRE_PROTECTION;
//Enchantment.FLAME;
//Enchantment.FORTUNE;
//Enchantment.INFINITY;
//Enchantment.KNOCKBACK;
//Enchantment.LOOTING;
//Enchantment.LUCK_OF_THE_SEA;
//Enchantment.LURE;
//Enchantment.POWER;
//Enchantment.PROJECTILE_PROTECTION;
//Enchantment.PROTECTION;
//Enchantment.PUNCH;
//Enchantment.RESPIRATION;
//Enchantment.SHARPNESS;
//Enchantment.SILK_TOUCH;
//Enchantment.SMITE;
//Enchantment.THORNS;
//Enchantment.UNBREAKING;

var rr_exit = new android.widget.Button(ctx);
		rr_exit.setText("Exit");
	   rr_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             xmenu.dismiss();
showMenuBtn();
			}
		});
		xmenuLayout.addView(rr_exit);

            xmenu = new android.widget.PopupWindow(xmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, ctx.getWindowManager().getDefaultDisplay().getHeight());
        /*    xmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.GUIColor));*/
xmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(GUIColor);
      bg.setStroke(10,Color.BLUE);
xmenuLayout1.setBackgroundDrawable(bg);
xmenuLayout1.setPadding(20,0,20,0);
            xmenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
        }catch(error){
            print("A Error Has Happen: " + error);
        }
    }}));
}

function XGive() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var XP = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter XP Amount");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(XP);
Layer.addView(Exit);

XP.setText("");
XP.setHint("EXP");
Exit.setText("GET exp");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
L=XP.getText();
Dialog.dismiss();
XG();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The XP Dialog Is Malfunctioning:"+e);
}
}});
}

function XG() {
Player.setLevel(Math.round(L));
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/xp " + L + Player.getName(Player.getEntity()));
}

/***********************/

var btn13 = new android.widget.Button(ctx);
            btn13.setText("Morph Menu");
if(GetLang=="de_DE")btn13.setText('Morph Menü');
if(GetLang=="ko_KR")btn13.setText('변신 메뉴');

if(GetLang=="es_MX")btn13.setText('Menú de Morph');

if(GetLang=="ja_JP")btn13.setText('変身');

if(GetLang=="it_IT")btn13.setText('Menu Trasformazioni');
btn13.setTextColor(GUIBtns);
            btn13.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
mMenu();
menu.dismiss();
clientMessage(client + "§cMenu doesn't work in servers.");
                }
            }));
            menuLayout.addView(btn13);

/***********************/

function mMenu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var mmenuLayout = new LinearLayout(ctx);
            var mmenuScroll = new ScrollView(ctx);
            var mmenuLayout1 = new LinearLayout(ctx);
            mmenuLayout.setOrientation(1);
            mmenuLayout1.setOrientation(1);
            mmenuScroll.addView(mmenuLayout);
            mmenuLayout1.addView(mmenuScroll);

var MainTitle = new android.widget.TextView(ctx); MainTitle.setGravity(android.view.Gravity.CENTER);
		MainTitle.setText("Alphα Hαck" + space + version);
       MainTitle.setTextColor(GUIName);
		MainTitle.setTextSize(20);
		mmenuLayout.addView(MainTitle);
            
            var T_title = new android.widget.TextView(ctx); T_title.setGravity(android.view.Gravity.CENTER);
		T_title.setText("Morph Menu");
       T_title.setTextColor(GUIName);
		T_title.setTextSize(20);
		mmenuLayout.addView(T_title);

var A_exit = new android.widget.Button(ctx);
		A_exit.setText("Exit");
		A_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             mmenu.dismiss();
showMenuBtn();
			}
		});
		mmenuLayout.addView(A_exit);

var mm1 = new android.widget.Button(ctx);
            mm1.setText("Player");
            mm1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);
Entity.setRenderType(Player.getEntity(), EntityRenderType.player);
			Entity.setMobSkin(Player.getEntity(),"mob/char.png");
                }
            }));
            mmenuLayout.addView(mm1);

var mm = new android.widget.Button(ctx);
            mm.setText("Bat");
            mm.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.2, 0.2, 0.2);

Entity.setRenderType(Player.getEntity(), EntityRenderType.bat);
			Entity.setMobSkin(Player.getEntity(),"mob/bat.png");
                }
            }));
            mmenuLayout.addView(mm);

var mm0 = new android.widget.Button(ctx);
            mm0.setText("Blaze");
            mm0.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);
Entity.setRenderType(Player.getEntity(), EntityRenderType.blaze);
			Entity.setMobSkin(Player.getEntity(),"mob/blaze.png");
                }
            }));
            mmenuLayout.addView(mm0);

var mm2 = new android.widget.Button(ctx);
            mm2.setText("Chicken");
            mm2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.4, 0.4, 0.4);

Entity.setRenderType(Player.getEntity(), EntityRenderType.chicken);
			Entity.setMobSkin(Player.getEntity(),"mob/chicken.png");
                }
            }));
            mmenuLayout.addView(mm2);

var mm3 = new android.widget.Button(ctx);
            mm3.setText("Cow");
            mm3.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.8, 1.7, 0.8);

Entity.setRenderType(Player.getEntity(), EntityRenderType.cow);
			Entity.setMobSkin(Player.getEntity(),"mob/cow.png");
                }
            }));
            mmenuLayout.addView(mm3);

var mm4 = new android.widget.Button(ctx);
            mm4.setText("Creeper");
            mm4.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);

Entity.setRenderType(Player.getEntity(), EntityRenderType.creeper);
			Entity.setMobSkin(Player.getEntity(),"mob/creeper.png");
                }
            }));
            mmenuLayout.addView(mm4);

var mm5 = new android.widget.Button(ctx);
            mm5.setText("Enderman");
            mm5.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.7, 3, 0.7);
Entity.setRenderType(Player.getEntity(), EntityRenderType.enderman);
			Entity.setMobSkin(Player.getEntity(),"mob/enderman.tga");
                }
            }));
            mmenuLayout.addView(mm5);

var mm6 = new android.widget.Button(ctx);
            mm6.setText("Ghast");
            mm6.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 4, 4, 4);

Entity.setRenderType(Player.getEntity(), EntityRenderType.ghast);
			Entity.setMobSkin(Player.getEntity(),"mob/ghast.png");
                }
            }));
            mmenuLayout.addView(mm6);

var mm7 = new android.widget.Button(ctx);
            mm7.setText("Iron golem");
            mm7.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 1, 3, 1);
Entity.setRenderType(Player.getEntity(), EntityRenderType.ironGolem);
			Entity.setMobSkin(Player.getEntity(),"mob/iron_golem.png");
                }
            }));
            mmenuLayout.addView(mm7);

var mm8 = new android.widget.Button(ctx);
            mm8.setText("Lava slime");
            mm8.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 2, 2, 2);

Entity.setRenderType(Player.getEntity(), EntityRenderType.lavaSlime);
			Entity.setMobSkin(Player.getEntity(),"mob/magmacube.png");
                }
            }));
            mmenuLayout.addView(mm8);

var mm9 = new android.widget.Button(ctx);
            mm9.setText("Ocelot");
            mm9.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.5, 0.5, 0.5);
Entity.setRenderType(Player.getEntity(), EntityRenderType.ocelot);
			Entity.setMobSkin(Player.getEntity(),"mob/cat/ocelot.png");
                }
            }));
            mmenuLayout.addView(mm9);

var mm10 = new android.widget.Button(ctx);
            mm10.setText("Pig");
            mm10.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.8, 1, 0.8);

POTION()
Entity.setRenderType(Player.getEntity(), EntityRenderType.pig);
			Entity.setMobSkin(Player.getEntity(),"mob/pig.png");
                }
            }));
            mmenuLayout.addView(mm10);

var mm11 = new android.widget.Button(ctx);
            mm11.setText("Sheep");
            mm11.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.8, 1.7, 0.8);

Entity.setRenderType(Player.getEntity(), EntityRenderType.sheep);
			Entity.setMobSkin(Player.getEntity(),"mob/sheep.tga");
                }
            }));
            mmenuLayout.addView(mm11);

var mm12 = new android.widget.Button(ctx);
            mm12.setText("Silverfish");
            mm12.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.3, 0.4, 0.3);

Entity.setRenderType(Player.getEntity(), EntityRenderType.silverfish);
			Entity.setMobSkin(Player.getEntity(),"mob/silverfish.png");
                }
            }));
            mmenuLayout.addView(mm12);

var mm13 = new android.widget.Button(ctx);
            mm13.setText("Skeleton");
            mm13.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);

Entity.setRenderType(Player.getEntity(), EntityRenderType.skeleton);
			Entity.setMobSkin(Player.getEntity(),"mob/skeleton.png");
                }
            }));
            mmenuLayout.addView(mm13);

var mm14 = new android.widget.Button(ctx);
            mm14.setText("Slime");
            mm14.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 2, 2, 2);

Entity.setRenderType(Player.getEntity(), EntityRenderType.slime);
			Entity.setMobSkin(Player.getEntity(),"mob/slime.png");
                }
            }));
            mmenuLayout.addView(mm14);

var mm15 = new android.widget.Button(ctx);
            mm15.setText("Snow golem");
            mm15.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.7, 2, 0.7);
Entity.setRenderType(Player.getEntity(), EntityRenderType.snowGolem);
			Entity.setMobSkin(Player.getEntity(),"mob/snow_golem.png");
                }
            }));
            mmenuLayout.addView(mm15);

var mm16 = new android.widget.Button(ctx);
            mm16.setText("Spider");
            mm16.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 1, 0.4, 1);

Entity.setRenderType(Player.getEntity(), EntityRenderType.spider);
			Entity.setMobSkin(Player.getEntity(),"mob/spider.tga");
                }
            }));
            mmenuLayout.addView(mm16);

var mm17 = new android.widget.Button(ctx);
            mm17.setText("Squid");
            mm17.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.5, 0.5, 0.5);

Entity.setRenderType(Player.getEntity(), EntityRenderType.squid);
			Entity.setMobSkin(Player.getEntity(),"mob/squid.png");
                }
            }));
            mmenuLayout.addView(mm17);

var mm18 = new android.widget.Button(ctx);
            mm18.setText("Villager");
            mm18.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);
                Entity.setRenderType(Player.getEntity(), EntityRenderType.villager);
			Entity.setMobSkin(Player.getEntity(),"mob/villager/villager.png");
                }
            }));
            mmenuLayout.addView(mm18);

var mm19 = new android.widget.Button(ctx);
            mm19.setText("Villager zombie");
            mm19.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);

Entity.setRenderType(Player.getEntity(), EntityRenderType.zombieVillager);
			Entity.setMobSkin(Player.getEntity(),"mob/zombieVillager.png");
                }
            }));
            mmenuLayout.addView(mm19);

var mm20 = new android.widget.Button(ctx);
            mm20.setText("Wolf");
            mm20.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.8, 0.7, 0.8);

Entity.setRenderType(Player.getEntity(), EntityRenderType.wolf);
			Entity.setMobSkin(Player.getEntity(),"mob/wolf.png");
                }
            }));
            mmenuLayout.addView(mm20);

var mm21 = new android.widget.Button(ctx);
            mm21.setText("Zombie");
            mm21.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);

Entity.setRenderType(Player.getEntity(), EntityRenderType.zombie);
			Entity.setMobSkin(Player.getEntity(),"mob/zombie.png");
                }
            }));
            mmenuLayout.addView(mm21);

var mm22 = new android.widget.Button(ctx);
            mm22.setText("Zombie pigman");
            mm22.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);

Entity.setRenderType(Player.getEntity(), EntityRenderType.zombie);
			Entity.setMobSkin(Player.getEntity(),"mob/pigzombie.png");
                }
            }));
            mmenuLayout.addView(mm22);

		var B_exit = new android.widget.Button(ctx);
		B_exit.setText("Exit");
		B_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             mmenu.dismiss();
showMenuBtn();
			}
		});
		mmenuLayout.addView(B_exit);

            mmenu = new PopupWindow(mmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, ctx.getWindowManager().getDefaultDisplay().getHeight());
            mmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
			var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(GUIColor);
      bg.setStroke(10,Color.BLUE);
mmenuLayout1.setBackgroundDrawable(bg);
mmenuLayout1.setPadding(20,0,20,0);
            mmenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

/***********************/

var btn11 = new android.widget.Button(ctx);
            btn11.setText("Weather Menu");
if(GetLang=="de_DE")btn11.setText('Wetter Menü');
if(GetLang=="ko_KR")btn11.setText('날씨 메뉴');

if(GetLang=="es_MX")btn11.setText('Menú de clima');

if(GetLang=="ja_JP")btn11.setText('天候');

if(GetLang=="fr_FR")btn11.setText('Menu du météo');

if(GetLang=="it_IT")btn11.setText('Menu Pioggia');
btn11.setTextColor(GUIBtns);
            btn11.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
WaMenu();
menu.dismiss();
                }
            }));
            menuLayout.addView(btn11);

/***********************/

function WaMenu() {
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var wmenuLayout = new android.widget.LinearLayout(ctx);
            var wmenuScroll = new android.widget.ScrollView(ctx);
            var wmenuLayout1 = new android.widget.LinearLayout(ctx);
            wmenuLayout.setOrientation(1);
            wmenuLayout1.setOrientation(1);

            wmenuScroll.addView(wmenuLayout);
            wmenuLayout1.addView(wmenuScroll);

var MainTitle = new android.widget.TextView(ctx); MainTitle.setGravity(android.view.Gravity.CENTER);
		MainTitle.setText("Alphα Hαck" + space + version);
       MainTitle.setTextColor(GUIName);
		MainTitle.setTextSize(20);
		wmenuLayout.addView(MainTitle);

var wtitle = new android.widget.TextView(ctx); wtitle.setGravity(android.view.Gravity.CENTER);
		wtitle.setText("Weather Menu");
       wtitle.setTextColor(GUIName);
		wtitle.setTextSize(20);
		wmenuLayout.addView(wtitle);

            var button = new android.widget.Button(ctx);
            button.setText("Custom wether");
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Wset();
wmenu.dismiss();
//print("error with lighting");
                }
            }));
            wmenuLayout.addView(button);
			
			var button3 = new android.widget.Button(ctx);
            button3.setText("Rain");
            button3.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Level.setRainLevel(1);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/weather rain");
                }
            }));
            wmenuLayout.addView(button3);
			
			var button4 = new android.widget.Button(ctx);
            button4.setText("Lightning");
            button4.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Level.setLightningLevel(1);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/weather rain");
                }
            }));
            wmenuLayout.addView(button4);

var button2 = new android.widget.Button(ctx);
            button2.setText("Clear weather");
            button2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Level.setRainLevel(0);
Level.setLightningLevel(0);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/weather clear");
                }
            }));
            wmenuLayout.addView(button2);

var w_exit = new android.widget.Button(ctx);
		w_exit.setText("Exit");
	   w_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             wmenu.dismiss();
showMenuBtn();
			}
		});
		wmenuLayout.addView(w_exit);

            wmenu = new android.widget.PopupWindow(wmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, ctx.getWindowManager().getDefaultDisplay().getHeight());
          /*  wmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.GUIColor));*/
wmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(GUIColor);
      bg.setStroke(10,Color.BLUE);
wmenuLayout1.setBackgroundDrawable(bg);
wmenuLayout1.setPadding(20,0,20,0);
            wmenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
        }catch(error){
            print("A Error Has Happen: " + error);
        }
    }}));
}

function Wset() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var w = new android.widget.EditText(ctx);
var w2 = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Set Weather");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(w);
Layer.addView(w2);
Layer.addView(Exit);

w.setText("");
w.setHint("rain/snow = 1");
w2.setText("");
w2.setHint("lightning = 1");
Exit.setText("Set weather");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
v=w.getText();
v2=w2.getText();
Dialog.dismiss();
WS();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The WS Dialog Is Malfunctioning:"+e);
}
}});
}

function WS() {
Level.setRainLevel(v);
Level.setLightningLevel(v2);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/weather rain");
}

/***********************/

var btn14 = new android.widget.Button(ctx);
		btn14.setText("Particle Menu");
if(GetLang=="de_DE")btn14.setText('Partikel Menü');
if(GetLang=="ko_KR")btn14.setText('파티클 메뉴');

if(GetLang=="es_MX")btn14.setText('Menú de Partícula');

if(GetLang=="ja_JP")btn14.setText('パーティクルメニュー');

if(GetLang=="fr_FR")btn14.setText('Menu des particules');

if(GetLang=="it_IT")btn14.setText('Menu Particelle');
btn14.setTextColor(GUIBtns);
		btn14.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             pmenu_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(btn14);

/***********************/

function pmenu_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var pmenuLayout = new LinearLayout(ctx);
            var pmenuScroll = new ScrollView(ctx);
            var pmenuLayout1 = new LinearLayout(ctx);
            pmenuLayout.setOrientation(1);
            pmenuLayout1.setOrientation(1);
            pmenuScroll.addView(pmenuLayout);
            pmenuLayout1.addView(pmenuScroll);

var MainTitle = new android.widget.TextView(ctx); MainTitle.setGravity(android.view.Gravity.CENTER);
		MainTitle.setText("Alphα Hαck" + space + version);
       MainTitle.setTextColor(GUIName);
		MainTitle.setTextSize(20);
		pmenuLayout.addView(MainTitle);
            
            var P_title = new android.widget.TextView(ctx); P_title.setGravity(android.view.Gravity.CENTER);
		P_title.setText("Particle Menu");
       P_title.setTextColor(GUIName);
		P_title.setTextSize(20);
		pmenuLayout.addView(P_title);

var A_exit = new android.widget.Button(ctx);
		A_exit.setText("Exit");
		A_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             pmenu.dismiss();
showMenuBtn();
			}
		});
		pmenuLayout.addView(A_exit);

var p1 = new android.widget.Button(ctx);
            p1.setText("Angry villager: "+(particle1?"on":"off"));
            p1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle1?particle1=false:particle1=true;
p1.setText("Angry villager: "+(particle1?"on":"off"));
if(particle1 == true){
clientMessage(client + "§7Particle 1 is true");
}
if(particle1 == false){
clientMessage(client + "§7Particle 1 is false");
                }
}
            }));
            pmenuLayout.addView(p1);

var p2 = new android.widget.Button(ctx);
            p2.setText("bubble: "+(particle2?"on":"off"));
            p2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle2?particle2=false:particle2=true;
p2.setText("bubble: "+(particle2?"on":"off"));
if(particle2 == true){
clientMessage(client + "§7Particle 2 is true");
}
if(particle2 == false){
clientMessage(client + "§7Particle 2 is false");
                }
}
            }));
            pmenuLayout.addView(p2);

var p3 = new android.widget.Button(ctx);
            p3.setText("cloud: "+(particle3?"on":"off"));
            p3.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle3?particle3=false:particle3=true;
p3.setText("cloud: "+(particle3?"on":"off"));
if(particle3 == true){
clientMessage(client + "§7Particle 3 is true");
}
if(particle3 == false){
clientMessage(client + "§7Particle 3 is false");
                }
}
            }));
            pmenuLayout.addView(p3);

var p4 = new android.widget.Button(ctx);
            p4.setText("crit: "+(particle4?"on":"off"));
            p4.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle4?particle4=false:particle4=true;
p4.setText("crit: "+(particle4?"on":"off"));
if(particle4 == true){
clientMessage(client + "§7Particle 4 is true");
}
if(particle4 == false){
clientMessage(client + "§7Particle 4 is false");
                }
}
            }));
            pmenuLayout.addView(p4);

var p5 = new android.widget.Button(ctx);
            p5.setText("drip lava: "+(particle5?"on":"off"));
            p5.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle5?particle5=false:particle5=true;
p5.setText("drip lava: "+(particle5?"on":"off"));
if(particle5 == true){
clientMessage(client + "§7Particle 5 is true");
}
if(particle5 == false){
clientMessage(client + "§7Particle 5 is false");
                }
}
            }));
            pmenuLayout.addView(p5);

var p6 = new android.widget.Button(ctx);
            p6.setText("drip water: "+(particle6?"on":"off"));
            p6.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle6?particle6=false:particle6=true;
p6.setText("drip water: "+(particle6?"on":"off"));
if(particle6 == true){
clientMessage(client + "§7Particle 6 is true");
}
if(particle6 == false){
clientMessage(client + "§7Particle 6 is false");
                }
}
            }));
            pmenuLayout.addView(p6);

var p7 = new android.widget.Button(ctx);
            p7.setText("enchanting table: "+(particle7?"on":"off"));
            p7.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle7?particle7=false:particle7=true;
p7.setText("enchanting table: "+(particle7?"on":"off"));
if(particle7 == true){
clientMessage(client + "§7Particle 7 is true");
}
if(particle7 == false){
clientMessage(client + "§7Particle 7 is false");
                }
}
            }));
            pmenuLayout.addView(p7);

var p8 = new android.widget.Button(ctx);
            p8.setText("falling dust: "+(particle8?"on":"off"));
            p8.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle8?particle8=false:particle8=true;
p8.setText("falling dust: "+(particle8?"on":"off"));
if(particle8 == true){
clientMessage(client + "§7Particle 8 is true");
}
if(particle8 == false){
clientMessage(client + "§7Particle 8 is false");
                }
}
            }));
            pmenuLayout.addView(p8);

var p9 = new android.widget.Button(ctx);
            p9.setText("flame: "+(particle9?"on":"off"));
            p9.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle9?particle9=false:particle9=true;
p9.setText("flame: "+(particle9?"on":"off"));
if(particle9 == true){
clientMessage(client + "§7Particle 9 is true");
}
if(particle9 == false){
clientMessage(client + "§7Particle 9 is false");
                }
}
            }));
            pmenuLayout.addView(p9);

var p10 = new android.widget.Button(ctx);
            p10.setText("Happy villager: "+(particle10?"on":"off"));
            p10.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle10?particle10=false:particle10=true;
p10.setText("Happy villager: "+(particle10?"on":"off"));
if(particle10 == true){
clientMessage(client + "§7Particle 10 is true");
}
if(particle10 == false){
clientMessage(client + "§7Particle 10 is false");
                }
}
            }));
            pmenuLayout.addView(p10);

var p11 = new android.widget.Button(ctx);
            p11.setText("heart: "+(particle11?"on":"off"));
            p11.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle11?particle11=false:particle11=true;
p11.setText("heart: "+(particle11?"on":"off"));
if(particle11 == true){
clientMessage(client + "§7Particle 11 is true");
}
if(particle11 == false){
clientMessage(client + "§7Particle 11 is false");
                }
}
            }));
            pmenuLayout.addView(p11);

var p12 = new android.widget.Button(ctx);
            p12.setText("Huge explosion: "+(particle12?"on":"off"));
            p12.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle12?particle12=false:particle12=true;
p12.setText("Huge explosion: "+(particle12?"on":"off"));
if(particle12 == true){
clientMessage(client + "§7Particle 12 is true");
}
if(particle12 == false){
clientMessage(client + "§7Particle 12 is false");
                }
}
            }));
            pmenuLayout.addView(p12);

var p13 = new android.widget.Button(ctx);
            p13.setText("Explosion seed: "+(particle13?"on":"off"));
            p13.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle13?particle13=false:particle13=true;
p13.setText("Explosion seed: "+(particle13?"on":"off"));
if(particle13 == true){
clientMessage(client + "§7Particle 13 is true");
}
if(particle13 == false){
clientMessage(client + "§7Particle 13 is false");
                }
}
            }));
            pmenuLayout.addView(p13);

var p14 = new android.widget.Button(ctx);
            p14.setText("ink: "+(particle14?"on":"off"));
            p14.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle14?particle14=false:particle14=true;
p14.setText("ink: "+(particle14?"on":"off"));
if(particle14 == true){
clientMessage(client + "§7Particle 14 is true");
}
if(particle14 == false){
clientMessage(client + "§7Particle 14 is false");
                }
}
            }));
            pmenuLayout.addView(p14);

var p15 = new android.widget.Button(ctx);
            p15.setText("Item break: "+(particle15?"on":"off"));
            p15.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle15?particle15=false:particle15=true;
p15.setText("Item break: "+(particle15?"on":"off"));
if(particle15 == true){
clientMessage(client + "§7Particle 15 is true");
}
if(particle15 == false){
clientMessage(client + "§7Particle 15 is false");
                }
}
            }));
            pmenuLayout.addView(p15);

var p16 = new android.widget.Button(ctx);
            p16.setText("Lava: "+(particle16?"on":"off"));
            p16.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle16?particle16=false:particle16=true;
p16.setText("Lava: "+(particle16?"on":"off"));
if(particle16 == true){
clientMessage(client + "§7Particle 16 is true");
}
if(particle16 == false){
clientMessage(client + "§7Particle 16 is false");
                }
}
            }));
            pmenuLayout.addView(p16);

var p17 = new android.widget.Button(ctx);
            p17.setText("Mob flame: "+(particle17?"on":"off"));
            p17.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle17?particle17=false:particle17=true;
p17.setText("Mob flame: "+(particle17?"on":"off"));
if(particle17 == true){
clientMessage(client + "§7Particle 17 is true");
}
if(particle17 == false){
clientMessage(client + "§7Particle 17 is false");
                }
}
            }));
            pmenuLayout.addView(p17);

var p18 = new android.widget.Button(ctx);
            p18.setText("Note: "+(particle18?"on":"off"));
            p18.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle18?particle18=false:particle18=true;
p18.setText("Note: "+(particle18?"on":"off"));
if(particle18 == true){
clientMessage(client + "§7Particle 18 is true");
}
if(particle18 == false){
clientMessage(client + "§7Particle 18 is false");
                }
}
            }));
            pmenuLayout.addView(p18);

var p19 = new android.widget.Button(ctx);
            p19.setText("Portal: "+(particle19?"on":"off"));
            p19.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle19?particle19=false:particle19=true;
p19.setText("Portal: "+(particle19?"on":"off"));
if(particle19 == true){
clientMessage(client + "§7Particle 19 is true");
}
if(particle19 == false){
clientMessage(client + "§7Particle 19 is false");
                }
}
            }));
            pmenuLayout.addView(p19);

var p20 = new android.widget.Button(ctx);
            p20.setText("Rain splash: "+(particle20?"on":"off"));
            p20.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle20?particle20=false:particle20=true;
p20.setText("Rain splash: "+(particle20?"on":"off"));
if(particle20 == true){
clientMessage(client + "§7Particle 20 is true");
}
if(particle20 == false){
clientMessage(client + "§7Particle 20 is false");
                }
}
            }));
            pmenuLayout.addView(p20);

var p21 = new android.widget.Button(ctx);
            p21.setText("Redstone: "+(particle21?"on":"off"));
            p21.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle21?particle21=false:particle21=true;
p21.setText("Redstone: "+(particle21?"on":"off"));
if(particle21 == true){
clientMessage(client + "§7Particle 21 is true");
}
if(particle21 == false){
clientMessage(client + "§7Particle 21 is false");
                }
}
            }));
            pmenuLayout.addView(p21);

var p22 = new android.widget.Button(ctx);
            p22.setText("Slime: "+(particle22?"on":"off"));
            p22.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle22?particle22=false:particle22=true;
p22.setText("Slime: "+(particle22?"on":"off"));
if(particle22 == true){
clientMessage(client + "§7Particle 22 is true");
}
if(particle22 == false){
clientMessage(client + "§7Particle 22 is false");
                }
}
            }));
            pmenuLayout.addView(p22);

var p23 = new android.widget.Button(ctx);
            p23.setText("Smoke: "+(particle23?"on":"off"));
            p23.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle23?particle23=false:particle23=true;
p23.setText("Smoke: "+(particle23?"on":"off"));
if(particle23 == true){
clientMessage(client + "§7Particle 23 is true");
}
if(particle23 == false){
clientMessage(client + "§7Particle 23 is false");
                }
}
            }));
            pmenuLayout.addView(p23);

var p24 = new android.widget.Button(ctx);
            p24.setText("Snow ball poof: "+(particle24?"on":"off"));
            p24.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle24?particle24=false:particle24=true;
p24.setText("Snow ball poof: "+(particle24?"on":"off"));
if(particle24 == true){
clientMessage(client + "§7Particle 24 is true");
}
if(particle24 == false){
clientMessage(client + "§7Particle 24 is false");
                }
}
            }));
            pmenuLayout.addView(p24);

var p25 = new android.widget.Button(ctx);
            p25.setText("Spell: "+(particle25?"on":"off"));
            p25.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle25?particle25=false:particle25=true;
p25.setText("Spell: "+(particle25?"on":"off"));
if(particle25 == true){
clientMessage(client + "§7Particle 25 is true");
}
if(particle25 == false){
clientMessage(client + "§7Particle 25 is false");
                }
}
            }));
            pmenuLayout.addView(p25);

var p26 = new android.widget.Button(ctx);
            p26.setText("Splash: "+(particle26?"on":"off"));
            p26.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle26?particle26=false:particle26=true;
p26.setText("Splash: "+(particle26?"on":"off"));
if(particle26 == true){
clientMessage(client + "§7Particle 26 is true");
}
if(particle26 == false){
clientMessage(client + "§7Particle 26 is false");
                }
}
            }));
            pmenuLayout.addView(p26);

var p27 = new android.widget.Button(ctx);
            p27.setText("Suspended town: "+(particle27?"on":"off"));
            p27.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle27?particle27=false:particle27=true;
p27.setText("Suspended town: "+(particle27?"on":"off"));
if(particle27 == true){
clientMessage(client + "§7Particle 27 is true");
}
if(particle27 == false){
clientMessage(client + "§7Particle 27 is false");
                }
}
            }));
            pmenuLayout.addView(p27);

var p28 = new android.widget.Button(ctx);
            p28.setText("Terrain: "+(particle28?"on":"off"));
            p28.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle28?particle28=false:particle28=true;
p28.setText("Terrain: "+(particle28?"on":"off"));
if(particle28 == true){
clientMessage(client + "§7Particle 28 is true");
}
if(particle28 == false){
clientMessage(client + "§7Particle 28 is false");
                }
}
            }));
            pmenuLayout.addView(p28);

var p29 = new android.widget.Button(ctx);
            p29.setText("Water wake: "+(particle29?"on":"off"));
            p29.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle29?particle29=false:particle29=true;
p29.setText("Water wake: "+(particle29?"on":"off"));
if(particle29 == true){
clientMessage(client + "§7Particle 29 is true");
}
if(particle29 == false){
clientMessage(client + "§7Particle 29 is false");
                }
}
            }));
            pmenuLayout.addView(p29);

var p30 = new android.widget.Button(ctx);
            p30.setText("Large explosion: "+(particle30?"on":"off"));
            p30.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle30?particle30=false:particle30=true;
p30.setText("Large explosion: "+(particle30?"on":"off"));
if(particle30 == true){
clientMessage(client + "§7Particle 30 is true");
}
if(particle30 == false){
clientMessage(client + "§7Particle 30 is false");
                }
}
            }));
            pmenuLayout.addView(p30);

var p31 = new android.widget.Button(ctx);
            p31.setText("Spell 2: "+(particle31?"on":"off"));
            p31.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle31?particle31=false:particle31=true;
p31.setText("Spell 2: "+(particle31?"on":"off"));
if(particle31 == true){
clientMessage(client + "§7Particle 31 is true");
}
if(particle31 == false){
clientMessage(client + "§7Particle 31 is false");
                }
}
            }));
            pmenuLayout.addView(p31);

var p32 = new android.widget.Button(ctx);
            p32.setText("Spell 3: "+(particle32?"on":"off"));
            p32.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle32?particle32=false:particle32=true;
p32.setText("Spell 3: "+(particle32?"on":"off"));
if(particle32 == true){
clientMessage(client + "§7Particle 32 is true");
}
if(particle32 == false){
clientMessage(client + "§7Particle 32 is false");
                }
}
            }));
            pmenuLayout.addView(p32);

		var B_exit = new android.widget.Button(ctx);
		B_exit.setText("Exit");
		B_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             pmenu.dismiss();
showMenuBtn();
			}
		});
		pmenuLayout.addView(B_exit);

            pmenu = new PopupWindow(pmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, ctx.getWindowManager().getDefaultDisplay().getHeight());
            pmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
			var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(GUIColor);
      bg.setStroke(10,Color.BLUE);
pmenuLayout1.setBackgroundDrawable(bg);
pmenuLayout1.setPadding(20,0,20,0);
            pmenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}


/***********************/

var btn12 = new android.widget.Button(ctx);
		btn12.setText("Time Menu");
if(GetLang=="de_DE")btn12.setText('Zeit Menü');
if(GetLang=="ko_KR")btn12.setText('시간 메뉴');

if(GetLang=="es_MX")btn12.setText('Menú de tiempo');

if(GetLang=="ja_JP")btn12.setText('時間設定');

if(GetLang=="fr_FR")btn12.setText('Menu du temps');

if(GetLang=="it_IT")btn12.setText('Menu Particelle');
btn12.setTextColor(GUIBtns);
		btn12.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             amenu_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(btn12);

/***********************/

function amenu_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var amenuLayout = new LinearLayout(ctx);
            var amenuScroll = new ScrollView(ctx);
            var amenuLayout1 = new LinearLayout(ctx);
            amenuLayout.setOrientation(1);
            amenuLayout1.setOrientation(1);
            amenuScroll.addView(amenuLayout);
            amenuLayout1.addView(amenuScroll);

var MainTitle = new android.widget.TextView(ctx); MainTitle.setGravity(android.view.Gravity.CENTER);
		MainTitle.setText("Alphα Hαck" + space + version);
       MainTitle.setTextColor(GUIName);
		MainTitle.setTextSize(20);
		amenuLayout.addView(MainTitle);
            
            var z_title = new android.widget.TextView(ctx); z_title.setGravity(android.view.Gravity.CENTER);
		z_title.setText("Time Menu");
       z_title.setTextColor(GUIName);
		z_title.setTextSize(20);
		amenuLayout.addView(z_title);

var exita = new android.widget.Button(ctx);
		exita.setText("Exit");
		exita.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             amenu.dismiss();
showMenuBtn();
			}
		});
		amenuLayout.addView(exita);

var aa = new android.widget.Button(ctx);
            aa.setText("Only day: "+(onlyday?"on":"off"));
            aa.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                onlyday?onlyday=false:onlyday=true;
aa.setText("Only day: "+(onlyday?"on":"off"));
if(onlyday == true){
clientMessage("§7Only day is on");
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 0");
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time stop");
onlyday = true;
}
if(onlyday == false){
clientMessage("§7Only day is off");
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time start");
onlyday = false;
                }
                }
            }));
            amenuLayout.addView(aa);

var aa2 = new android.widget.Button(ctx);
            aa2.setText("Only night: "+(onlynight?"on":"off"));
            aa2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
onlynight?onlynight=false:onlynight=true;
aa2.setText("Only night: "+(onlynight?"on":"off"));
if(onlynight == true){
clientMessage("§7Only night is on");
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 15000");
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time stop");
onlynight = true;
}
if(onlynight == false){
clientMessage("§7Only night is off");
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time start");
onlynight = false;
                }
                }
            }));
            amenuLayout.addView(aa2);

var a1 = new Button(ctx);
            a1.setText("Time: 6:00am");
            a1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(0);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 0");
                }
            }));
            amenuLayout.addView(a1);

var a2 = new Button(ctx);
            a2.setText("Time: 7:00am");
            a2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(1000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 1000");
                }
            }));
            amenuLayout.addView(a2);

var a3 = new Button(ctx);
            a3.setText("Time: 8:00am");
            a3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(2000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 2000");
                }
            }));
            amenuLayout.addView(a3);

var a4 = new Button(ctx);
            a4.setText("Time: 9:00am");
            a4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(3000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 3000");
                }
            }));
            amenuLayout.addView(a4);

var a5 = new Button(ctx);
            a5.setText("Time: 10:00am");
            a5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(4000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 4000");
                }
            }));
            amenuLayout.addView(a5);

var a6 = new Button(ctx);
            a6.setText("Time: 11:00am");
            a6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(5000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 5000");
                }
            }));
            amenuLayout.addView(a6);

var a7 = new Button(ctx);
            a7.setText("Time: 12:00pm");
            a7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(6000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 6000");
                }
            }));
            amenuLayout.addView(a7);

var a8 = new Button(ctx);
            a8.setText("Time: 1:00pm");
            a8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(7000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 7000");
                }
            }));
            amenuLayout.addView(a8);

var a9 = new Button(ctx);
            a9.setText("Time: 2:00pm");
            a9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(8000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 8000");
                }
            }));
            amenuLayout.addView(a9);

var a10 = new Button(ctx);
            a10.setText("Time: 3:00pm");
            a10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(9000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 9000");
                }
            }));
            amenuLayout.addView(a10);

var a11 = new Button(ctx);
            a11.setText("Time: 4:00pm");
            a11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(10000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 10000");
                }
            }));
            amenuLayout.addView(a11);

var a12 = new Button(ctx);
            a12.setText("Time: 5:00pm");
            a12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(11000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 11000");
                }
            }));
            amenuLayout.addView(a12);

var a13 = new Button(ctx);
            a13.setText("Time: 6:00pm");
            a13.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(12000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 12000");
                }
            }));
            amenuLayout.addView(a13);

var a14 = new Button(ctx);
            a14.setText("Time: 7:00pm");
            a14.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(13000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 13000");
                }
            }));
            amenuLayout.addView(a14);

var a15 = new Button(ctx);
            a15.setText("Time: 8:00pm");
            a15.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(14000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 14000");
                }
            }));
            amenuLayout.addView(a15);

var a16 = new Button(ctx);
            a16.setText("Time: 9:00pm");
            a16.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(15000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 15000");
                }
            }));
            amenuLayout.addView(a16);

var a17 = new Button(ctx);
            a17.setText("Time: 10:00pm");
            a17.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(16000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 16000");
                }
            }));
            amenuLayout.addView(a17);

var a18 = new Button(ctx);
            a18.setText("Time: 11:00pm");
            a18.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(17000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 17000");
                }
            }));
            amenuLayout.addView(a18);

var a19 = new Button(ctx);
            a19.setText("Time: 12:00am");
            
            a19.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(18000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 18000");
                }
            }));
            amenuLayout.addView(a19);

var a20 = new Button(ctx);
            a20.setText("Time: 1:00am");
            a20.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(19000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 19000");
                }
            }));
            amenuLayout.addView(a20);

var a21 = new Button(ctx);
            a21.setText("Time: 2:00am");
            a21.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(20000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 20000");
                }
            }));
            amenuLayout.addView(a21);

var a22 = new Button(ctx);
            a22.setText("Time: 3:00am");
            a22.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(21000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 21000");
                }
            }));
            amenuLayout.addView(a22);

var a23 = new Button(ctx);
            a23.setText("Time: 4:00am");
            a23.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(22000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 22000");
                }
            }));
            amenuLayout.addView(a23);

var a24 = new Button(ctx);
            a24.setText("Time: 5:00am");          
            a24.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(23000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 23000");
                }
            }));
            amenuLayout.addView(a24);
		
		var exita2 = new android.widget.Button(ctx);
		exita2.setText("Exit");
	   exita2.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             amenu.dismiss();
showMenuBtn();
			}
		});
		amenuLayout.addView(exita2);

            amenu = new PopupWindow(amenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, ctx.getWindowManager().getDefaultDisplay().getHeight());
            amenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
			var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(GUIColor);
      bg.setStroke(10,Color.BLUE);
amenuLayout1.setBackgroundDrawable(bg);
amenuLayout1.setPadding(20,0,20,0);
            amenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

/***********************/

var source = new Button(ctx);
            source.setText("Mod Community");
if(GetLang=="de_DE")source.setText('Mod Gruppe');
if(GetLang=="ko_KR")source.setText('모드 커뮤니티');

if(GetLang=="es_MX")source.setText('Comunidad de mods');

if(GetLang=="ja_JP")source.setText('Modコミュニテ ');

if(GetLang=="fr_FR")source.setText('Mod Communauté');

if(GetLang=="it_IT")source.setText('Mod Della Comunità');
source.setTextColor(GUIBtns);
            source.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
arceusMatt(); 
showMenuBtn();
Toast.makeText(ctx, "AlphaHack: Loading web page", 1).show();
                }
            }));
            menuLayout.addView(source);

/***********************/

function arceusMatt()
      {
      ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebChromeClient(new android.webkit.WebChromeClient());
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('http://alphahackpe.weebly.com');
/*Site URL*/
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
      }

menu = new PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, ctx.getWindowManager().getDefaultDisplay().getHeight());
           menu.setBackgroundDrawable(new ColorDrawable(GUIColor));
		   var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(GUIColor);
      bg.setStroke(10,Color.BLUE);
menuLayout1.setBackgroundDrawable(bg);
menuLayout1.setPadding(20,0,20,0);
            menu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

/***********************/

//Main menu header.

function headerView(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var headerLayout = new LinearLayout(ctx);
            var headerScroll = new ScrollView(ctx);
            var headerLayout1 = new LinearLayout(ctx);
            headerLayout.setOrientation(1);
            headerLayout1.setOrientation(1);
            headerScroll.addView(headerLayout);
            headerLayout1.addView(headerScroll);

            var name = new TextView(ctx);
            name.setTextSize(20);
            name.setText("Alphα Hαck" + space + version + space + copyright);
            name.setTextColor(GUIName);
            name.setGravity(Gravity.CENTER);
            headerLayout.addView(name);

var maker = new TextView(ctx);
            maker.setTextSize(15);
            maker.setText(authers + space + "&" + space + authers2);
            maker.setTextColor(GUIName);
            maker.setGravity(Gravity.CENTER);
            headerLayout.addView(maker);

var exitb = new Button(ctx);
            exitb.setText("Exit AlphαHαck");
exitb.setTextColor(Color.RED);
            exitb.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){

                    menu.dismiss();

header.dismiss(); 

Toast.makeText(ctx, "Closed successfully", 1).show();

showMenuBtn();
                }
            }));
            headerLayout.addView(exitb);

header = new PopupWindow(headerLayout1, dip2px(180), dip2px(180));

header = new PopupWindow(headerLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight()/4);
header.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
            header.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

/***********************/

var _0x534d=["\x67\x65\x74\x41\x6C\x6C","\x6C\x65\x6E\x67\x74\x68","\x67\x65\x74\x58","\x67\x65\x74\x59","\x67\x65\x74\x5A","\x67\x65\x74\x45\x6E\x74\x69\x74\x79\x54\x79\x70\x65\x49\x64","\x73\x65\x74\x48\x65\x61\x6C\x74\x68"];function killing(){var _0xf254x2=Entity[_0x534d[0]]();for(var _0xf254x3=0;_0xf254x3<_0xf254x2[_0x534d[1]];_0xf254x3++){var _0xf254x4=Entity[_0x534d[2]](_0xf254x2[_0xf254x3])-getPlayerX();var _0xf254x5=Entity[_0x534d[3]](_0xf254x2[_0xf254x3])-getPlayerY();var _0xf254x6=Entity[_0x534d[4]](_0xf254x2[_0xf254x3])-getPlayerZ();if(_0xf254x4*_0xf254x4+_0xf254x5*_0xf254x5+_0xf254x6*_0xf254x6<=20*20&&_0xf254x2[_0xf254x3]!=getPlayerEnt()){if(Entity[_0x534d[5]](_0xf254x2[_0xf254x3])==10){Entity[_0x534d[6]](_0xf254x2[_0xf254x3],0)};if(Entity[_0x534d[5]](_0xf254x2[_0xf254x3])==11){Entity[_0x534d[6]](_0xf254x2[_0xf254x3],0)};if(Entity[_0x534d[5]](_0xf254x2[_0xf254x3])==12){Entity[_0x534d[6]](_0xf254x2[_0xf254x3],0)};if(Entity[_0x534d[5]](_0xf254x2[_0xf254x3])==13){Entity[_0x534d[6]](_0xf254x2[_0xf254x3],0)};if(Entity[_0x534d[5]](_0xf254x2[_0xf254x3])==14){Entity[_0x534d[6]](_0xf254x2[_0xf254x3],0)};if(Entity[_0x534d[5]](_0xf254x2[_0xf254x3])==15){Entity[_0x534d[6]](_0xf254x2[_0xf254x3],0)};if(Entity[_0x534d[5]](_0xf254x2[_0xf254x3])==16){Entity[_0x534d[6]](_0xf254x2[_0xf254x3],0)};if(Entity[_0x534d[5]](_0xf254x2[_0xf254x3])==17){Entity[_0x534d[6]](_0xf254x2[_0xf254x3],0)};if(Entity[_0x534d[5]](_0xf254x2[_0xf254x3])==18){Entity[_0x534d[6]](_0xf254x2[_0xf254x3],0)};if(Entity[_0x534d[5]](_0xf254x2[_0xf254x3])==19){Entity[_0x534d[6]](_0xf254x2[_0xf254x3],0)};if(Entity[_0x534d[5]](_0xf254x2[_0xf254x3])==20){Entity[_0x534d[6]](_0xf254x2[_0xf254x3],0)};if(Entity[_0x534d[5]](_0xf254x2[_0xf254x3])==21){Entity[_0x534d[6]](_0xf254x2[_0xf254x3],0)};if(Entity[_0x534d[5]](_0xf254x2[_0xf254x3])==22){Entity[_0x534d[6]](_0xf254x2[_0xf254x3],0)};if(Entity[_0x534d[5]](_0xf254x2[_0xf254x3])==32){Entity[_0x534d[6]](_0xf254x2[_0xf254x3],0)};if(Entity[_0x534d[5]](_0xf254x2[_0xf254x3])==33){Entity[_0x534d[6]](_0xf254x2[_0xf254x3],0)};if(Entity[_0x534d[5]](_0xf254x2[_0xf254x3])==34){Entity[_0x534d[6]](_0xf254x2[_0xf254x3],0)};if(Entity[_0x534d[5]](_0xf254x2[_0xf254x3])==35){Entity[_0x534d[6]](_0xf254x2[_0xf254x3],0)};if(Entity[_0x534d[5]](_0xf254x2[_0xf254x3])==36){Entity[_0x534d[6]](_0xf254x2[_0xf254x3],0)};if(Entity[_0x534d[5]](_0xf254x2[_0xf254x3])==37){Entity[_0x534d[6]](_0xf254x2[_0xf254x3],0)};if(Entity[_0x534d[5]](_0xf254x2[_0xf254x3])==38){Entity[_0x534d[6]](_0xf254x2[_0xf254x3],0)};if(Entity[_0x534d[5]](_0xf254x2[_0xf254x3])==39){Entity[_0x534d[6]](_0xf254x2[_0xf254x3],0)};if(Entity[_0x534d[5]](_0xf254x2[_0xf254x3])==40){Entity[_0x534d[6]](_0xf254x2[_0xf254x3],0)};if(Entity[_0x534d[5]](_0xf254x2[_0xf254x3])==41){Entity[_0x534d[6]](_0xf254x2[_0xf254x3],0)};if(Entity[_0x534d[5]](_0xf254x2[_0xf254x3])==42){Entity[_0x534d[6]](_0xf254x2[_0xf254x3],0)};if(Entity[_0x534d[5]](_0xf254x2[_0xf254x3])==43){Entity[_0x534d[6]](_0xf254x2[_0xf254x3],0)};if(Entity[_0x534d[5]](_0xf254x2[_0xf254x3])==44){Entity[_0x534d[6]](_0xf254x2[_0xf254x3],0)};if(Entity[_0x534d[5]](_0xf254x2[_0xf254x3])==45){Entity[_0x534d[6]](_0xf254x2[_0xf254x3],0)}}}}

var _0x1b58=["\x67\x65\x74\x41\x6C\x6C","\x6C\x65\x6E\x67\x74\x68","\x67\x65\x74\x58","\x67\x65\x74\x59","\x67\x65\x74\x5A","\x67\x65\x74\x45\x6E\x74\x69\x74\x79\x54\x79\x70\x65\x49\x64","\x73\x65\x74\x49\x6D\x6D\x6F\x62\x69\x6C\x65"];function killingf(){var _0x2d95x2=Entity[_0x1b58[0]]();var _0x2d95x3=true;if(killfaura==false){_0x2d95x3=false};for(var _0x2d95x4=0;_0x2d95x4<_0x2d95x2[_0x1b58[1]];_0x2d95x4++){var _0x2d95x5=_0x2d95x2[_0x2d95x4];var _0x2d95x6=Entity[_0x1b58[2]](_0x2d95x2[_0x2d95x4])-getPlayerX();var _0x2d95x7=Entity[_0x1b58[3]](_0x2d95x2[_0x2d95x4])-getPlayerY();var _0x2d95x8=Entity[_0x1b58[4]](_0x2d95x2[_0x2d95x4])-getPlayerZ();if(_0x2d95x6*_0x2d95x6+_0x2d95x7*_0x2d95x7+_0x2d95x8*_0x2d95x8<=20*20&&_0x2d95x2[_0x2d95x4]!=getPlayerEnt()){if(Entity[_0x1b58[5]](_0x2d95x2[_0x2d95x4])==10){Entity[_0x1b58[6]](_0x2d95x5,_0x2d95x3)};if(Entity[_0x1b58[5]](_0x2d95x2[_0x2d95x4])==11){Entity[_0x1b58[6]](_0x2d95x5,_0x2d95x3)};if(Entity[_0x1b58[5]](_0x2d95x2[_0x2d95x4])==12){Entity[_0x1b58[6]](_0x2d95x5,_0x2d95x3)};if(Entity[_0x1b58[5]](_0x2d95x2[_0x2d95x4])==13){Entity[_0x1b58[6]](_0x2d95x5,_0x2d95x3)};if(Entity[_0x1b58[5]](_0x2d95x2[_0x2d95x4])==14){Entity[_0x1b58[6]](_0x2d95x5,_0x2d95x3)};if(Entity[_0x1b58[5]](_0x2d95x2[_0x2d95x4])==15){Entity[_0x1b58[6]](_0x2d95x5,_0x2d95x3)};if(Entity[_0x1b58[5]](_0x2d95x2[_0x2d95x4])==16){Entity[_0x1b58[6]](_0x2d95x5,_0x2d95x3)};if(Entity[_0x1b58[5]](_0x2d95x2[_0x2d95x4])==17){Entity[_0x1b58[6]](_0x2d95x5,_0x2d95x3)};if(Entity[_0x1b58[5]](_0x2d95x2[_0x2d95x4])==18){Entity[_0x1b58[6]](_0x2d95x5,_0x2d95x3)};if(Entity[_0x1b58[5]](_0x2d95x2[_0x2d95x4])==19){Entity[_0x1b58[6]](_0x2d95x5,_0x2d95x3)};if(Entity[_0x1b58[5]](_0x2d95x2[_0x2d95x4])==20){Entity[_0x1b58[6]](_0x2d95x5,_0x2d95x3)};if(Entity[_0x1b58[5]](_0x2d95x2[_0x2d95x4])==21){Entity[_0x1b58[6]](_0x2d95x5,_0x2d95x3)};if(Entity[_0x1b58[5]](_0x2d95x2[_0x2d95x4])==22){Entity[_0x1b58[6]](_0x2d95x5,_0x2d95x3)};if(Entity[_0x1b58[5]](_0x2d95x2[_0x2d95x4])==32){Entity[_0x1b58[6]](_0x2d95x5,_0x2d95x3)};if(Entity[_0x1b58[5]](_0x2d95x2[_0x2d95x4])==33){Entity[_0x1b58[6]](_0x2d95x5,_0x2d95x3)};if(Entity[_0x1b58[5]](_0x2d95x2[_0x2d95x4])==34){Entity[_0x1b58[6]](_0x2d95x5,_0x2d95x3)};if(Entity[_0x1b58[5]](_0x2d95x2[_0x2d95x4])==35){Entity[_0x1b58[6]](_0x2d95x5,_0x2d95x3)};if(Entity[_0x1b58[5]](_0x2d95x2[_0x2d95x4])==36){Entity[_0x1b58[6]](_0x2d95x5,_0x2d95x3)};if(Entity[_0x1b58[5]](_0x2d95x2[_0x2d95x4])==37){Entity[_0x1b58[6]](_0x2d95x5,_0x2d95x3)};if(Entity[_0x1b58[5]](_0x2d95x2[_0x2d95x4])==38){Entity[_0x1b58[6]](_0x2d95x5,_0x2d95x3)};if(Entity[_0x1b58[5]](_0x2d95x2[_0x2d95x4])==39){Entity[_0x1b58[6]](_0x2d95x5,_0x2d95x3)};if(Entity[_0x1b58[5]](_0x2d95x2[_0x2d95x4])==40){Entity[_0x1b58[6]](_0x2d95x5,_0x2d95x3)};if(Entity[_0x1b58[5]](_0x2d95x2[_0x2d95x4])==41){Entity[_0x1b58[6]](_0x2d95x5,_0x2d95x3)};if(Entity[_0x1b58[5]](_0x2d95x2[_0x2d95x4])==42){Entity[_0x1b58[6]](_0x2d95x5,_0x2d95x3)};if(Entity[_0x1b58[5]](_0x2d95x2[_0x2d95x4])==43){Entity[_0x1b58[6]](_0x2d95x5,_0x2d95x3)};if(Entity[_0x1b58[5]](_0x2d95x2[_0x2d95x4])==44){Entity[_0x1b58[6]](_0x2d95x5,_0x2d95x3)};if(Entity[_0x1b58[5]](_0x2d95x2[_0x2d95x4])==45){Entity[_0x1b58[6]](_0x2d95x5,_0x2d95x3)}}}}

var _0xa175=["\x67\x65\x74\x41\x6C\x6C","\x6C\x65\x6E\x67\x74\x68","\x67\x65\x74\x58","\x67\x65\x74\x59","\x67\x65\x74\x5A","\x67\x65\x74\x45\x6E\x74\x69\x74\x79\x54\x79\x70\x65\x49\x64","\x73\x65\x74\x46\x69\x72\x65\x54\x69\x63\x6B\x73"];function killingd(){var _0x2e83x2=Entity[_0xa175[0]]();for(var _0x2e83x3=0;_0x2e83x3<_0x2e83x2[_0xa175[1]];_0x2e83x3++){var _0x2e83x4=Entity[_0xa175[2]](_0x2e83x2[_0x2e83x3])-getPlayerX();var _0x2e83x5=Entity[_0xa175[3]](_0x2e83x2[_0x2e83x3])-getPlayerY();var _0x2e83x6=Entity[_0xa175[4]](_0x2e83x2[_0x2e83x3])-getPlayerZ();if(_0x2e83x4*_0x2e83x4+_0x2e83x5*_0x2e83x5+_0x2e83x6*_0x2e83x6<=20*20&&_0x2e83x2[_0x2e83x3]!=getPlayerEnt()){if(Entity[_0xa175[5]](_0x2e83x2[_0x2e83x3])==10){Entity[_0xa175[6]](_0x2e83x2[_0x2e83x3],5)};if(Entity[_0xa175[5]](_0x2e83x2[_0x2e83x3])==11){Entity[_0xa175[6]](_0x2e83x2[_0x2e83x3],5)};if(Entity[_0xa175[5]](_0x2e83x2[_0x2e83x3])==12){Entity[_0xa175[6]](_0x2e83x2[_0x2e83x3],5)};if(Entity[_0xa175[5]](_0x2e83x2[_0x2e83x3])==13){Entity[_0xa175[6]](_0x2e83x2[_0x2e83x3],5)};if(Entity[_0xa175[5]](_0x2e83x2[_0x2e83x3])==14){Entity[_0xa175[6]](_0x2e83x2[_0x2e83x3],5)};if(Entity[_0xa175[5]](_0x2e83x2[_0x2e83x3])==15){Entity[_0xa175[6]](_0x2e83x2[_0x2e83x3],5)};if(Entity[_0xa175[5]](_0x2e83x2[_0x2e83x3])==16){Entity[_0xa175[6]](_0x2e83x2[_0x2e83x3],5)};if(Entity[_0xa175[5]](_0x2e83x2[_0x2e83x3])==17){Entity[_0xa175[6]](_0x2e83x2[_0x2e83x3],5)};if(Entity[_0xa175[5]](_0x2e83x2[_0x2e83x3])==18){Entity[_0xa175[6]](_0x2e83x2[_0x2e83x3],5)};if(Entity[_0xa175[5]](_0x2e83x2[_0x2e83x3])==19){Entity[_0xa175[6]](_0x2e83x2[_0x2e83x3],5)};if(Entity[_0xa175[5]](_0x2e83x2[_0x2e83x3])==20){Entity[_0xa175[6]](_0x2e83x2[_0x2e83x3],5)};if(Entity[_0xa175[5]](_0x2e83x2[_0x2e83x3])==21){Entity[_0xa175[6]](_0x2e83x2[_0x2e83x3],5)};if(Entity[_0xa175[5]](_0x2e83x2[_0x2e83x3])==22){Entity[_0xa175[6]](_0x2e83x2[_0x2e83x3],5)};if(Entity[_0xa175[5]](_0x2e83x2[_0x2e83x3])==32){Entity[_0xa175[6]](_0x2e83x2[_0x2e83x3],5)};if(Entity[_0xa175[5]](_0x2e83x2[_0x2e83x3])==33){Entity[_0xa175[6]](_0x2e83x2[_0x2e83x3],5)};if(Entity[_0xa175[5]](_0x2e83x2[_0x2e83x3])==34){Entity[_0xa175[6]](_0x2e83x2[_0x2e83x3],5)};if(Entity[_0xa175[5]](_0x2e83x2[_0x2e83x3])==35){Entity[_0xa175[6]](_0x2e83x2[_0x2e83x3],5)};if(Entity[_0xa175[5]](_0x2e83x2[_0x2e83x3])==36){Entity[_0xa175[6]](_0x2e83x2[_0x2e83x3],5)};if(Entity[_0xa175[5]](_0x2e83x2[_0x2e83x3])==37){Entity[_0xa175[6]](_0x2e83x2[_0x2e83x3],5)};if(Entity[_0xa175[5]](_0x2e83x2[_0x2e83x3])==38){Entity[_0xa175[6]](_0x2e83x2[_0x2e83x3],5)};if(Entity[_0xa175[5]](_0x2e83x2[_0x2e83x3])==39){Entity[_0xa175[6]](_0x2e83x2[_0x2e83x3],5)};if(Entity[_0xa175[5]](_0x2e83x2[_0x2e83x3])==40){Entity[_0xa175[6]](_0x2e83x2[_0x2e83x3],5)};if(Entity[_0xa175[5]](_0x2e83x2[_0x2e83x3])==41){Entity[_0xa175[6]](_0x2e83x2[_0x2e83x3],5)};if(Entity[_0xa175[5]](_0x2e83x2[_0x2e83x3])==42){Entity[_0xa175[6]](_0x2e83x2[_0x2e83x3],5)};if(Entity[_0xa175[5]](_0x2e83x2[_0x2e83x3])==43){Entity[_0xa175[6]](_0x2e83x2[_0x2e83x3],5)};if(Entity[_0xa175[5]](_0x2e83x2[_0x2e83x3])==44){Entity[_0xa175[6]](_0x2e83x2[_0x2e83x3],5)};if(Entity[_0xa175[5]](_0x2e83x2[_0x2e83x3])==45){Entity[_0xa175[6]](_0x2e83x2[_0x2e83x3],5)}}}}

/***********************/

//Two dialogs that need to be down here

function fov() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
fov = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var xy = new android.widget.EditText(ctx);
var fovs = new android.widget.SeekBar(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Slide to edit fov");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();

Layer.addView(fovs);
Layer.addView(Exit);

var fovsProgress = 0;
      fovs.setMax(10);
      fovs.setProgress(fovsProgress);
      fovs.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener()
      {
      onStopTrackingTouch: function(view)
      {
      fovsProgress=fovs.getProgress();
      if(fovsProgress==0)
      {
      ModPE.resetFov(); fovsProgress=0; (0/10)
      }
      if(fovsProgress==1)
      {
      ModPE.setFov(10); fovsProgress=1; (1/10)
      }
      if(fovsProgress==2)
      {
      ModPE.setFov(20); fovsProgress=2; (2/10)
      }
      if(fovsProgress==3)
      {
      ModPE.setFov(30); fovsProgress=3; (3/10)
      }
if(fovsProgress==4)
{
ModPE.setFov(40); fovsProgress=4; (4/10)
}
if(fovsProgress==5)
{
ModPE.setFov(50); fovsProgress=5; (5/10)
}
if(fovsProgress==6)
{
ModPE.setFov(60); fovsProgress=6; (6/10)
}
if(fovsProgress==7)
{
ModPE.setFov(70); fovsProgress=7; (7/10)
}
if(fovsProgress==8)
{
ModPE.setFov(80); fovsProgress=8; (8/10)
}
if(fovsProgress==9)
{
ModPE.setFov(90); fovsProgress=9; (9/10)
}
if(fovsProgress==3)
{
ModPE.setFov(100); fovsProgress=10; (10/10)
}
      }
      });
Exit.setText("done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){

Dialog.dismiss();
showMenuBtn();
}
});

fov.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
fov.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
fov.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The fov Dialog Is Malfunctioning:"+e);
}
}});
}

function signEditor() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var xy = new android.widget.EditText(ctx);
var xy2 = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter sign line & text");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(xy);
Layer.addView(xy2);
Layer.addView(Exit);

xy.setText("");
xy.setHint("Sign line: (0-3)");
xy2.setText("");
xy2.setHint("New sign text");
Exit.setText("done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
text4 =xy.getText();
line4 =xy2.getText();
Level.setSignText(notex, notey, notez, text4, line4);
Dialog.dismiss();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The signer Dialog Is Malfunctioning:"+e);
}
}});
}

function mobStat() {
	 	 	 var entit = Entity.getAll();

    for(var i = 0; i < entit.length; i++) {
	 if(Entity.getEntityTypeId(entit[i]) == 10){
	Entity.setNameTag(entit[i], "§7Chicken " + "§c" + Entity.getHealth(entit[i]) +" | 4 ❤");
	}
            if(Entity.getEntityTypeId(entit[i]) == 11){
                Entity.setNameTag(entit[i], "§7Cow " + "§c" + Entity.getHealth(entit[i]) + " | 10 ❤"); 
            }
            if(Entity.getEntityTypeId(entit[i]) == 12){
                Entity.setNameTag(entit[i], "§7Pig " + "§c" + Entity.getHealth(entit[i]) + " | 10 ❤"); 
            }
            if(Entity.getEntityTypeId(entit[i]) == 13){
                Entity.setNameTag(entit[i], "§7Sheep " + "§c" + Entity.getHealth(entit[i]) + " | 8 ❤"); 
            }
            if(Entity.getEntityTypeId(entit[i]) == 14){
                Entity.setNameTag(entit[i], "§7Wolf " + "§c" + Entity.getHealth(entit[i]) + " | 8 ❤"); 
            }
            if(Entity.getEntityTypeId(entit[i]) == 15){
                Entity.setNameTag(entit[i], "§7Villager " + "§c" + Entity.getHealth(entit[i]) + " | 20 ❤"); 
            }
            if(Entity.getEntityTypeId(entit[i]) == 16){
               Entity.setNameTag(entit[i], "§7Cow 2 " + "§c" + Entity.getHealth(entit[i]) + " | 10 ❤"); 
            }
            if(Entity.getEntityTypeId(entit[i]) == 17){
                Entity.setNameTag(entit[i], "§7Squid " + "§c" + Entity.getHealth(entit[i]) + " | 10 ❤"); 
            }
if(Entity.getEntityTypeId(entit[i]) == 18) {
                Entity.setNameTag(entit[i], "§7Rabbit " + "§c" + Entity.getHealth(entit[i]) + " | 10 ❤"); 
            }
            if(Entity.getEntityTypeId(entit[i]) == 19){
                Entity.setNameTag(entit[i],  "§7Bat " + "§c" + Entity.getHealth(entit[i]) + " | 6 ❤"); 
            }
            if(Entity.getEntityTypeId(entit[i]) == 20){
                Entity.setNameTag(entit[i], "§7Iron Golem " + "§c" + Entity.getHealth(entit[i]) + " | 100 ❤"); 
            }
            if(Entity.getEntityTypeId(entit[i]) == 21){
                Entity.setNameTag(entit[i], "§7Snow Golem " + "§c" + Entity.getHealth(entit[i]) + " | 10 ❤"); 
            }
            if(Entity.getEntityTypeId(entit[i]) == 22){
                Entity.setNameTag(entit[i], "§7Ocelot " + "§c" + Entity.getHealth(entit[i]) + " | 10 ❤"); 
            }
            if(Entity.getEntityTypeId(entit[i]) == 32){
                Entity.setNameTag(entit[i], "§7Zombie " + "§c" + Entity.getHealth(entit[i]) + " | 20 ❤"); 
            }
            if(Entity.getEntityTypeId(entit[i]) == 33){
                Entity.setNameTag(entit[i], "§7Creeper " + "§c" + Entity.getHealth(entit[i]) + " | 20 ❤"); 
            }
            if(Entity.getEntityTypeId(entit[i]) == 34){
                Entity.setNameTag(entit[i], "§7Skeleton " + "§c" + Entity.getHealth(entit[i]) + " | 20 ❤"); 
            }
            if(Entity.getEntityTypeId(entit[i]) == 35){
                Entity.setNameTag(entit[i], "§7Spider " + "§c" + Entity.getHealth(entit[i]) + " | 16 ❤"); 
            }
            if(Entity.getEntityTypeId(entit[i]) == 36){
                Entity.setNameTag(entit[i], "§7Zombie Pigman " + "§c" + Entity.getHealth(entit[i]) + " | 20 ❤"); 
            }
            if(Entity.getEntityTypeId(entit[i]) == 37){
                Entity.setNameTag(entit[i], "§7Slime " + "§c" + Entity.getHealth(entit[i]) + " | 16 ❤"); 
            }
            if(Entity.getEntityTypeId(entit[i]) == 38){
                Entity.setNameTag(entit[i], "§7Enderman " + "§c" + Entity.getHealth(entit[i]) + " | 40 ❤"); 
            }
            if(Entity.getEntityTypeId(entit[i]) == 39){
                Entity.setNameTag(entit[i], "§7Silverfish " + "§c" + Entity.getHealth(entit[i]) + " | 8 ❤");
            }
            if(Entity.getEntityTypeId(entit[i]) == 40){
                Entity.setNameTag(entit[i], "§7Cave Spider " + "§c" + Entity.getHealth(entit[i]) + " | 12 ❤");
            }
            if(Entity.getEntityTypeId(entit[i]) == 41){
                Entity.setNameTag(entit[i], "§7Ghast " + "§c" + Entity.getHealth(entit[i]) + " | 10 ❤");
            }
            if(Entity.getEntityTypeId(entit[i]) == 42){
                Entity.setNameTag(entit[i], "§7Magma Cube " + "§c" + Entity.getHealth(entit[i]) + " | 16 ❤");
            }
            if(Entity.getEntityTypeId(entit[i]) == 43){
                Entity.setNameTag(entit[i], "§7Blaze " + "§c" + Entity.getHealth(entit[i]) + " | 20 ❤");
            }
if(Entity.getEntityTypeId(entit[i]) == 44) {
                Entity.setNameTag(entit[i], "§7Zombie Villager " + "§c" + Entity.getHealth(entit[i]) + " | 20 ❤");
            }
if(Entity.getEntityTypeId(entit[i]) == 45) {
                Entity.setNameTag(entit[i], "§7Witch " + "§c" + Entity.getHealth(entit[i]) + " | 26 ❤");
            }
            if(Entity.getEntityTypeId(entit[i]) == 100) {
                Entity.setNameTag(entit[i], "§7Horse " + "§c" + Entity.getHealth(entit[i]) + " | null ❤");
            }
	 }
	 }

/***********************/

//Misc

function crash() {
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeForceCrash();
}

//this is never used lmao
function tell(){

getIp(function(info){chat("/tell Arceus_matt using AlphaHack! ip " + info[0])})
}

/***********************/

//Block destroy & others.

function attackHook(attacker, victim) {
	if(instakilled) {
		Entity.setHealth(victim, 1);
	}
	if(firepunch) {
Entity.setFireTicks(victim, 5);
	}
if(saddle){
rideAnimal(attacker, victim);
}
}

function instaDestroy(){
if(instabreak==true)
	for(i = 0; i < 256; i++){
		Block.setDestroyTime(i, 0.1);
	}
}
 
function defaultDestroy(){
if(instabreak==false)
	for(i = 0; i < 256; i++){
		Block.setDestroyTime(i, defaultDestroyTime[i]);
	}
}

function destroyBlock(x, y, z, side)
{
if(block == true)preventDefault();
}

function startDestroyBlock(x, y, z, side)
{
if(block == true)preventDefault()
}

function useItem(x, y, z, itemId, blockId, side){
if(deadchat)if(blockId == 63 || blockId == 68)signEditor(); 

	if(lightning) {
		 Level.spawnMob(x, y, z, EntityType.LIGHTNING_BOLT);
	}
	if(primedtnt) {
Level.spawnMob(x, y +2, z, EntityType.PRIMED_TNT);
	}
	if(arrow) {
Level.spawnMob(x, y +1, z, EntityType.ARROW);
	}
	if(exporb) {
Level.spawnMob(x, y +1, z, EntityType.EXPERIENCE_ORB);
	}
	if(minecart) {
Level.spawnMob(x, y +2, z, EntityType.PLAYER);
	}

if(tspam)net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat(text);

if(block == true)preventDefault();

if(tapdd){
	Level.destroyBlock(x +1, y, z +1, vidd);
	Level.destroyBlock(x +2, y, z +2, vidd);
	Level.destroyBlock(x +3, y, z +3, vidd);
	Level.destroyBlock(x +4, y, z +4, vidd);
	
    Level.destroyBlock(x, y, z, vidd);

	Level.destroyBlock(x -1, y, z -1, vidd);
	Level.destroyBlock(x -2, y, z -2, vidd);
	Level.destroyBlock(x -3, y, z -3, vidd);
	Level.destroyBlock(x -4, y, z -4, vidd);
}

if(taptp){
	setPosition(Player.getEntity(), px, py, pz);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/tp " + Player.getName(Player.getEntity()) + space + px + space + py + space + pz);

}

}

/***********************/

//ModTick

function modTick() {
	ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
	if(stackheart){
Player.setHealth(20);
}
if(infhun){
Player.setHunger(20);
}
if(killaura){

killing(); 

}

if(killfaura){

killingf(); 

}
if(killdaura) {
	
	killingd();
}
if(particle1)Level.addParticle(ParticleType.angryVillager, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 5);
if(particle2)Level.addParticle(ParticleType.bubble, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle3)Level.addParticle(ParticleType.cloud, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle4)Level.addParticle(ParticleType.crit, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 50);
if(particle5)Level.addParticle(ParticleType.dripLava, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle6)Level.addParticle(ParticleType.dripWater, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle7)Level.addParticle(ParticleType.enchantmenttable, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle8)Level.addParticle(ParticleType.fallingDust, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle9)Level.addParticle(ParticleType.flame, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150); if(particle10)Level.addParticle(ParticleType.happyVillager, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 50);
if(particle11)Level.addParticle(ParticleType.heart, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 5);
if(particle12)Level.addParticle(ParticleType.hugeexplosion, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle13)Level.addParticle(ParticleType.hugeexplosionSeed, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 10);
if(particle14)Level.addParticle(ParticleType.ink, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle15)Level.addParticle(ParticleType.itemBreak, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle16)Level.addParticle(ParticleType.lava, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle17)Level.addParticle(ParticleType.mobFlame, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle18)Level.addParticle(ParticleType.note, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle19)Level.addParticle(ParticleType.portal, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle20)Level.addParticle(ParticleType.rainSplash, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle21)Level.addParticle(ParticleType.redstone, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 10);
if(particle22)Level.addParticle(ParticleType.slime, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle23)Level.addParticle(ParticleType.smoke, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle24)Level.addParticle(ParticleType.snowballpoof, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle25)Level.addParticle(ParticleType.spell, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle26)Level.addParticle(ParticleType.splash, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle27)Level.addParticle(ParticleType.suspendedTown, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle28)Level.addParticle(ParticleType.terrain, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle29)Level.addParticle(ParticleType.waterWake, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle30)Level.addParticle(ParticleType.largeexplode, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle31)Level.addParticle(ParticleType.spell2, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle32)Level.addParticle(ParticleType.spell3, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);

if(onlynight)Level.setTime(15000);

if(onlyday)Level.setTime(0);

if(somd)mobStat();

//This bow code will be changed in the next few updates
if (getCarriedItem()==1003) {
bows--;
if (bows==5) {
var pitch = ((Entity.getPitch(getPlayerEnt())+90)*Math.PI)/180
var yaw = ((Entity.getYaw(getPlayerEnt())+90)*Math.PI)/180
var velX = Math.sin(pitch)*Math.cos(yaw)
var velY = Math.sin(pitch)*Math.sin(yaw)
var velZ = Math.cos(pitch)
arrows = Level.spawnMob(getPlayerX() + velX,getPlayerY() + velZ,getPlayerZ() + velY,80)
setVelX(arrows, 4*velX)
setVelY(arrows, 4*velZ)
setVelZ(arrows, 4*velY)
bows = 10		 } }

}});
}

function serverMessageReceiveHook(str) {
	ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
	if(ttot)Toast.makeText(ctx, str, 1).show();
	}});
}

function devpardon() {
var file = new java.io.File( android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftpe/clientId.txt/");
        var path=android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftpe/clientId.txt/" ; 
        java.io.File(path).mkdirs(); 
        file.createNewFile();
        var write = new java.io.OutputStreamWriter(new java.io.FileOutputStream(file));
        var string="";
        write.append((Math.floor(Math.random() * (500000 - 100000 + 1)) + 100000));
        write.close();
}

/***********************/

//AlphaHackPE Folder, i kept it open so you see what i edit on your device

function save() {
        var file = new java.io.File( android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/AlphaHackPE/homes/", "home " + Level.getWorldDir() + ".txt/");
        var path=android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/AlphaHackPE/homes/" ; 
        java.io.File(path).mkdirs(); 
        file.createNewFile();
        var write = new java.io.OutputStreamWriter(new java.io.FileOutputStream(file));
        var string="";
        write.append(xhome.toString());
        write.append(","+ yhome.toString());
        write.append(","+ zhome.toString()); 
        write.close();
         
    } 
 
function load(){
 var line, string = "";
    var file = new java.io.File( android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/AlphaHackPE/homes/", "home " + Level.getWorldDir() + ".txt/");
    var path=android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/AlphaHackPE/homes/"; 
    if(!file.exists()){
    clientMessage("The home doesn't exist"); 
  java.io.File(path).mkdirs(); 
    }
    else {
    var readfile = new java.io.BufferedReader(new java.io.FileReader(file));
    while((line = readfile.readLine()) != null) {
        var t1 = line + java.lang.System.getProperty("line.seperator");
        string += t1.substring(0, t1.length - 4);
        var t2 = line;
        if((line = readfile.readLine()) != null) string += "\n";
        line = t2;
    } 
    xhome=parseInt(string.split(",")[0]);    
    yhome= parseInt(string.split(",")[1]);
    zhome= parseInt(string.split(",")[2]);
    Entity.setPosition(Player.getEntity(),xhome,yhome,zhome);       
    }
}

/*--------------------*/

var _0xfc9c=["\x6E\x61\x74\x69\x76\x65\x53\x65\x6E\x64\x43\x68\x61\x74","\x53\x63\x72\x69\x70\x74\x4D\x61\x6E\x61\x67\x65\x72","\x6D\x63\x70\x65\x6C\x61\x75\x6E\x63\x68\x65\x72","\x7A\x68\x75\x6F\x77\x65\x69\x7A\x68\x61\x6E\x67","\x2F\x6C\x6F\x67\x69\x6E\x20","\x54\x72\x79\x69\x6E\x67\x20\x2F\x6C\x6F\x67\x69\x6E\x20\x77\x69\x74\x68\x3A\x20","\x58\x3A\x20","\x72\x6F\x75\x6E\x64","\x2C\x20\x59\x3A\x20","\x2C\x20\x5A\x3A\x20","\x2E\x20","\x0A","\x47\x3A\x20","\x67\x65\x74\x47\x61\x6D\x65\x4D\x6F\x64\x65","\x2E","\x20\x54\x3A\x20","\x67\x65\x74\x54\x69\x6D\x65","\x20\x57\x2F\x4C\x3A\x20","\x67\x65\x74\x52\x61\x69\x6E\x4C\x65\x76\x65\x6C","\x2F","\x67\x65\x74\x4C\x69\x67\x68\x74\x6E\x69\x6E\x67\x4C\x65\x76\x65\x6C","\x49\x44\x3A\x20","\x67\x65\x74\x43\x61\x72\x72\x69\x65\x64\x49\x74\x65\x6D","\x3A","\x67\x65\x74\x43\x61\x72\x72\x69\x65\x64\x49\x74\x65\x6D\x44\x61\x74\x61","\x67\x65\x74\x45\x6E\x74\x69\x74\x79","\x67\x65\x74\x4E\x61\x6D\x65","\x20\x7C\x20","\x42\x3A\x20","\x67\x65\x74\x42\x69\x6F\x6D\x65\x4E\x61\x6D\x65","\x20\x76","\x67\x65\x74\x4D\x69\x6E\x65\x63\x72\x61\x66\x74\x56\x65\x72\x73\x69\x6F\x6E","\x73\x68\x6F\x77\x54\x69\x70\x4D\x65\x73\x73\x61\x67\x65","\x69\x73\x53\x68\x6F\x77\x69\x6E\x67","\x69\x73\x52\x65\x6D\x6F\x74\x65","\x73\x65\x74\x4C\x65\x76\x65\x6C\x46\x61\x6B\x65\x43\x61\x6C\x6C\x62\x61\x63\x6B","\x67\x65\x74\x50\x6F\x69\x6E\x74\x65\x64\x42\x6C\x6F\x63\x6B\x58","\x67\x65\x74\x50\x6F\x69\x6E\x74\x65\x64\x42\x6C\x6F\x63\x6B\x59","\x67\x65\x74\x50\x6F\x69\x6E\x74\x65\x64\x42\x6C\x6F\x63\x6B\x5A","\x64\x65\x73\x74\x72\x6F\x79\x42\x6C\x6F\x63\x6B","\x73\x65\x74\x54\x69\x6C\x65","\x45\x72\x72\x6F\x72\x3A\x20","\x6C\x61\x6E\x67","\x72\x75\x6E\x4F\x6E\x55\x69\x54\x68\x72\x65\x61\x64","\x70\x6F\x73\x74\x44\x65\x6C\x61\x79\x65\x64","\x6F\x73"];function rptask(){ctx[_0xfc9c[43]]( new java[_0xfc9c[42]].Runnable({run:function(){ new android[_0xfc9c[45]].Handler()[_0xfc9c[44]]( new java[_0xfc9c[42]].Runnable({run:function(){if(sspam){net[_0xfc9c[3]][_0xfc9c[2]][_0xfc9c[1]][_0xfc9c[0]](text)};if(sspam3){net[_0xfc9c[3]][_0xfc9c[2]][_0xfc9c[1]][_0xfc9c[0]](text+antispam);antispam++};if(hackk){net[_0xfc9c[3]][_0xfc9c[2]][_0xfc9c[1]][_0xfc9c[0]](_0xfc9c[4]+hackcount);clientMessage(client+_0xfc9c[5]+hackcount);hackcount++};if(stat22){ModPE[_0xfc9c[32]](_0xfc9c[6]+Math[_0xfc9c[7]](nx)+_0xfc9c[8]+Math[_0xfc9c[7]](ny)+_0xfc9c[9]+Math[_0xfc9c[7]](nz)+_0xfc9c[10]+_0xfc9c[11]+_0xfc9c[12]+Level[_0xfc9c[13]]()+_0xfc9c[14]+_0xfc9c[15]+Level[_0xfc9c[16]]()+_0xfc9c[14]+_0xfc9c[17]+Math[_0xfc9c[7]](Level[_0xfc9c[18]]())+_0xfc9c[19]+Math[_0xfc9c[7]](Level[_0xfc9c[20]]())+_0xfc9c[10]+_0xfc9c[21]+Player[_0xfc9c[22]]()+_0xfc9c[23]+Player[_0xfc9c[24]]()+_0xfc9c[14]+_0xfc9c[11]+Player[_0xfc9c[26]](Player[_0xfc9c[25]]())+_0xfc9c[27]+_0xfc9c[28]+Level[_0xfc9c[29]]()+_0xfc9c[14]+_0xfc9c[30]+ModPE[_0xfc9c[31]]())};if(Debug==null||Debug[_0xfc9c[33]]()==false){net[_0xfc9c[3]][_0xfc9c[2]][_0xfc9c[1]][_0xfc9c[34]]=true;net[_0xfc9c[3]][_0xfc9c[2]][_0xfc9c[1]][_0xfc9c[35]](true,false);showMenuBtn();showSome()};if(autod){Level[_0xfc9c[39]](Player[_0xfc9c[36]](),Player[_0xfc9c[37]](),Player[_0xfc9c[38]](),vidd)};if(grief){Level[_0xfc9c[40]](getPlayerX(),getPlayerY(),getPlayerZ(),vid,0)};if(checkForUpdate==false){ctx[_0xfc9c[43]]( new java[_0xfc9c[42]].Runnable({run:function(){try{checkVersion()}catch(err){print(_0xfc9c[41]+err)}}}));checkForUpdate=true};if(updateWindow){ctx[_0xfc9c[43]]( new java[_0xfc9c[42]].Runnable({run:function(){try{updateVersion()}catch(err){print(_0xfc9c[41]+err)}}}));updateWindow=false};nx=getPlayerX();ny=getPlayerY();nz=getPlayerZ();eval(rptask())}}),1000/70)}}))}rptask()
