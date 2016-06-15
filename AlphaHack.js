/*

Main author: Arceusmatt/Arceu_matt.
Help by: GodSoft029 & applqpak.
Started MCPE v0.12.0

Do not copy code you are not allowed to...
to see what to copy: https://github.com/ArceusMatt/ModPE-scripts

Contact @ArceusMatt for any questions
Always get my revenge. =) enjoy!

*/

var ModPE;
var Debug;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var GetLang = ModPE.getLanguage();

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
var tbox = false;

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

function checkcolor(){
 var line, string = "";
    var file = new java.io.File( android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/AlphaHackPE/menus/", "colors.txt/");
    var path=android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/AlphaHackPE/menus/"; 
    if(!file.exists()){
    clientMessage("Theres an error here"); 
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
    newcolor=parseInt(string.split(",")[0]);
    GUIColor = newcolor
    }
}
checkcolor();

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

function dip2px(dips){
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function newLevel(){ 
clientMessage("§2≡≡=======»§a>§9 α §a<§2«======≡≡§f§r");
clientMessage(client + "\n§7Server §emc31069.imagical.host - 31069" + "\n" + "§aKik§f: ArceusMatt" + "\n" + "§bTwitter§f: @ArceusMatt" + "\n" + "§cGoogle+§f: Arceus matt" + "\n" + "§fYou§4tube§f: Arceus Matt");
clientMessage("§2≡≡=======»§a>§9 α §a<§2«======≡≡§f§r");
}

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
showMenuBtn();
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
            menuLayout.addView(alpha);
			
	  function imagical()
      {
        var urla = new Intent(ctx);
				urla.setAction(Intent.ACTION_VIEW);
                    urla.setData(Uri.parse("https://dashboard.imagical.host"));
                    ctx.startActivity(urla);
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
new5 = new android.widget.PopupWindow();
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
if(GUIName = Color.WHITE){
	var file = new java.io.File( android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/AlphaHackPE/menus/", "color.txt/");
        var path=android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/AlphaHackPE/menus/" ; 
        java.io.File(path).mkdirs(); 
        file.createNewFile();
        var write = new java.io.OutputStreamWriter(new java.io.FileOutputStream(file));
        var string="";
        var newcolor = "Color.WHITE"
        write.append(newcolor.toString());
        write.close();
}
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
