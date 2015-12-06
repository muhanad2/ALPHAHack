//Excuse me but i don't think you should be looking at this coding but yolo
//Made by arceus_matt
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
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
 
var GUI;
var menu;
var exitUI;
 
var VERSION = "0.13.x";
var NAME = "MCPE Alpha Hack";
var DEVELOPERS = "Arceus_Matt";
 
var MARK = " ";
var split = " ";
 
var defaultDestroyTime = [
null, 1.5, 0.6, 0.5, 2, 2, 0, -1, null, null, null, null, 0.5, 0.6, 3, 3, 3, 2, 
0.2, 0.6, 0.3, 3, 3, null, 0.8, null, 0.2, 0.7, null, null, 4, 0, 0, null, null, 
0.8, null, 0, 0, 0, 0, 3, 5, 2, 2, 2, 0, 1.5, 2, 50, 0, 0, null, 2, 2.5, null, 
3, 5, 2.5, 0, 0.6, 3.5, 3.5, 1, 3, 0.4, 0.7, 2, 1, null, null, 5, null, 3, 3, 
null, null, null, 0.1, 0.5, 0.2, 0.4, 0.6, 0, null, 2, 1, 0.4, 0.3, null, 1, 0.5, 
null, null, -1, 3, null, 1.5, null, null, 5, 0.3, 1, 0, 0, null, 2, 2, 1.5, null, 
null, 2, null, 2, null, null, null, null, null, null, null, null, null, null, null, 
null, null, 0.8, null, null, null, null, null, 2, 2, 2, null, null, 2, null, 0, 0, 
null, null, null, null, null, null, null, null, null, null, null, null, 0.8, 0.8, 
2, 2, null, null, null, null, null, null, null, null, null, null, null, 0.5, 0.1, 
5, null, null, null, null, null, null, null, null, null, null, null, null, null, 
null, null, null, null, null, null, null, null, null, null, null, null, null, null,
null, null, null, null, null, null, null, null, null, null, null, null, null, null,
null, null, null, null, null, null, null, null, null, null, null, null, null, null,
null, null, null, null, null, null, null, null, null, null, null, null, null, null,
null, 0, 3.5, 50, 5, 0.6, 0.6, 5, null, null, null, null, 0
];
 
var playerDir = [0, 0, 0];
var DEG_TO_RAD = Math.PI / 180;
var playerFlySpeed = 1;
var falling = 0;
var next = 0;
var px, py, pz, lx, ly, lz, vel, saver;
var cd = 0;
var s = 0;
var Xdiff;
var Zdiff;
var Xpos;
var Zpos;
var can = 1;
var canGetHP = 1;
var HP;
var gravity = -0.07840000092983246;
var Entities = [];
var counter = 0
 
var setspawnch = false;
var setspawn;

var coordch = false;
var coord;
 
var gmspeedch = false;
var gmspeed;
 
var effectch = false;
var effect;
var effects = false;
 
var passwordch = false;
var password;
 
var starterch = false;
var starter;
 
var starter2ch = false;
var starter2;
 
var starter3ch = false;
var starter3;
 
var starter4ch = false;
var starter4;
 
var starter5ch = false;
var starter5;
 
var opch = false;
var op;
 
var spawn10ch = false;
var spawn10;

var spawn11ch = false;
var spawn11;
 
var spawn12ch = false;
var spawn12;
 
var spawn13ch = false;
var spawn13;

var spawn14ch = false;
var spawn14;

var spawn15ch = false;
var spawn15;

var spawn16ch = false;
var spawn16;

var spawn17ch = false;
var spawn17;

var spawn18ch = false;
var spawn18;

var spawn19ch = false;
var spawn19;

var spawn20ch = false;
var spawn20;

var spawn21ch = false;
var spawn21;

var spawn22ch = false;
var spawn22;

var canFlych = false;
var canFly;

var expch = false;
var exp;

var spamch = false;
var spam;
 
function dip2px(dips){
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
 
function newLevel(){
    clientMessage("\n" + ChatColor.YELLOW + "Mod by arceus_matt" + split + ChatColor.WHITE + NAME + " Version:" + split + VERSION);
    ModPE.showTipMessage(NAME + " Release " + VERSION);
}
 
ctx.runOnUiThread(new Runnable({ run: function(){
    try{
        var layout = new LinearLayout(ctx);
        layout.setOrientation(1);
        var menuBtn = new Button(ctx);
        menuBtn.setText('《HACK》');
        menuBtn.setTextColor(Color.WHITE);
        menuBtn.setOnClickListener(new View.OnClickListener({
            onClick: function(viewarg){
                mainMenu()
                exit();
            }
        }));
        layout.addView(menuBtn);
 
        GUI = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
        GUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        GUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 50, 0);
        }catch(err){
            Toast.makeText(ctx, "An error occured: " + err, 1).show();
        }
    }}));
  
 
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
            name.setTextSize(23);
            name.setText(NAME + split + VERSION + MARK);
            name.setTextColor(Color.RED);
            name.setGravity(Gravity.CENTER);
            menuLayout.addView(name);
 
            var creative = new Button(ctx);
            creative.setText("Creative");
            creative.setTextColor(Color.BLUE);
            creative.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.setGameMode(1);
Server.sendChat("/gamemode 1")
                }
            }));
            menuLayout.addView(creative);
 
            var survival = new Button(ctx);
            survival.setText("Survival");
            survival.setTextColor(Color.BLUE);
            survival.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.setGameMode(0);
Server.sendChat("/gamemode 0")
                }
            }));
            menuLayout.addView(survival);

 var spam = new Button(ctx);
            spam.setText("Spammer(request by ALLMC)");
            spam.setTextColor(Color.BLUE);
            spam.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
Server.sendChat("**§lAlpha Hack spam§r**::        SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM.")
                }
            }));
            menuLayout.addView(spam);

            coord = new CheckBox(ctx);
            coord.setText("Coordinates");
            coord.setTextColor(Color.BLUE);
            coord.setChecked(coordch);
            coord.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    if(!coordch){
                        coordch = true;
                        coord.setTextColor(Color.GREEN);
                         var cX = getPlayerX();
var cY = getPlayerY();
var cZ = getPlayerZ();
clientMessage(ChatColor.BLUE + "X:" + Math.round(cX) + " Y:" + Math.round(cY) + " Z:" + Math.round(cZ));
                    }else{
                        coordch = false;
                        coord.setTextColor(Color.RED);
                        coords = false;
                    }
                    coord.setChecked(coordch);
                }
            }));
            menuLayout.addView(coord);
 
            if(coordch) {
                coord.setTextColor(Color.GREEN);
            }
 
            gmspeed = new CheckBox(ctx);
            gmspeed.setText("Game speed 60");
            gmspeed.setTextColor(Color.BLUE);
            gmspeed.setChecked(gmspeedch);
            gmspeed.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    if(!gmspeedch){
                        gmspeedch = true;
                        gmspeed.setTextColor(Color.GREEN);
                        ModPE.setGameSpeed(60);
                    }else{
                        gmspeedch = false;
                        gmspeed.setTextColor(Color.RED);
                        ModPE.setGameSpeed(20);
                    }
                    gmspeed.setChecked(gmspeedch);
                }
            }));
            menuLayout.addView(gmspeed);
 
            if(gmspeedch) {
                gmspeed.setTextColor(Color.GREEN);
            }
             effect = new CheckBox(ctx);
            effect.setText("Effects(crash in server)");
            effect.setTextColor(Color.BLUE);
            effect.setChecked(effectch);
            effect.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    if(!effectch){
                        effectch = true;
                        effect.setTextColor(Color.GREEN);
                        Entity.addEffect(getPlayerEnt(), MobEffect.jump, 999*999, 0, false, true);
                        Entity.addEffect(getPlayerEnt(), MobEffect.damageResistance, 999*999, 0, false, true);
                        Entity.addEffect(getPlayerEnt(), MobEffect.hunger, 999*999, 0, false, true);
                        Entity.addEffect(getPlayerEnt(), MobEffect.damageBoost, 999*999, 0, false, true);
                    }else{
                        effectch = false;
                        effect.setTextColor(Color.RED);
                        //spacer :p
                    }
                    effect.setChecked(effectch);
                }
            }));
            menuLayout.addView(effect);
 
            if(effectch) {
                effect.setTextColor(Color.GREEN);
            }
            password = new CheckBox(ctx);
            password.setText("Hack password");
            password.setTextColor(Color.BLUE);             
            password.setChecked(passwordch);
            password.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    if(!passwordch){
                        passwordch = true;
                        password.setTextColor(Color.GREEN);
                        Server.sendChat("/login password")
                    }else{
                        passwordch = false;
                        password.setTextColor(Color.RED);
                        Server.sendChat("/login")
                    }
                  password.setChecked(passwordch);
                }
            }));
            menuLayout.addView(password);
 
            if(passwordch) {
                password.setTextColor(Color.GREEN);
            }
			    op = new CheckBox(ctx);
            op.setText("/op your name here");
            op.setTextColor(Color.BLUE);             
            op.setChecked(opch);
            op.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    if(!opch){
                        opch = true;
                        op.setTextColor(Color.GREEN);
                        Server.sendChat("/op your_name_here")
                    }else{
                        opch = false;
                        op.setTextColor(Color.RED);
                        Server.sendChat(" ")
                    }
                  op.setChecked(opch);
                }
            }));
            menuLayout.addView(op);
 
            if(opch) {
                op.setTextColor(Color.GREEN);
            }
            		    canFly = new CheckBox(ctx);
            canFly.setText("Can fly in survival (request by Johnmacro)");
            canFly.setTextColor(Color.BLUE);             
            canFly.setChecked(canFlych);
            canFly.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    if(!canFlych){
                        canFlych = true;
                        canFly.setTextColor(Color.GREEN);
                        Player.canFly()
                        Player.isFlying()
                        Player.setCanFly(1)
                    }else{
                        canFlych = false;
                        canFly.setTextColor(Color.RED);
                        Player.canFly()
                        Player.setCanFly(0)
                    }
                  canFly.setChecked(canFlych);
                }
            }));
            menuLayout.addView(canFly);
 
            if(canFlych) {
                canFly.setTextColor(Color.GREEN);
            }
             starter = new CheckBox(ctx);
            starter.setText("Leather kit");
            starter.setTextColor(Color.BLUE);             
            starter.setChecked(starterch);
            starter.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    if(!starterch){
                        starterch = true;
                        starter.setTextColor(Color.GREEN);
                        Player.addItemInventory(298, 1, 0)
                        Player.addItemInventory(299, 1, 0)
                        Player.addItemInventory(300, 1, 0)
                        Player.addItemInventory(301, 1, 0)
                        Player.addItemInventory(268, 1, 0)
                        Player.addItemInventory(270, 1, 0)
                        Player.addItemInventory(262, 64, 0)
                        Player.addItemInventory(261, 1, 0)
                        Player.addItemInventory(297, 64, 0)
                    }else{
                        starterch = false;
                        starter.setTextColor(Color.RED);
                        Player.addItemInventory(0, 0, 0)
                        Player.addItemInventory(0, 0, 0)
                        Player.addItemInventory(0, 0, 0)
                        Player.addItemInventory(0, 0, 0)
                        Player.addItemInventory(0, 0, 0)
                        Player.addItemInventory(0, 0, 0)
                        Player.addItemInventory(0, 0, 0)
                        Player.addItemInventory(0, 0, 0)
                        Player.addItemInventory(0, 0, 0)
                    }
                  starter.setChecked(starterch);
                }
            }));
            menuLayout.addView(starter);
             
            if(starterch) {
                starter.setTextColor(Color.GREEN);
            }
            starter2 = new CheckBox(ctx);
            starter2.setText("Chain kit");
            starter2.setTextColor(Color.BLUE);             
            starter2.setChecked(starter2ch);
            starter2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    if(!starter2ch){
                        starter2ch = true;
                        starter2.setTextColor(Color.GREEN);
						Player.addItemInventory(302, 1, 0)
						Player.addItemInventory(303, 1, 0)
						Player.addItemInventory(304, 1, 0)
						Player.addItemInventory(305, 1, 0)
                        Player.addItemInventory(272, 1, 0)
                        Player.addItemInventory(274, 1, 0)
                        Player.addItemInventory(262, 64, 0)
                        Player.addItemInventory(261, 1, 0)
                        Player.addItemInventory(297, 64, 0)
                    }else{
                        starter2ch = false;
                        starter2.setTextColor(Color.RED);
                        Player.addItemInventory(0, 0, 0)
                    }
                  starter2.setChecked(starter2ch);
                }
            }));
            menuLayout.addView(starter2);
             
            if(starter2ch) {
                starter2.setTextColor(Color.GREEN);
            }
			starter3 = new CheckBox(ctx);
            starter3.setText("Iron kit");
            starter3.setTextColor(Color.BLUE);             
            starter3.setChecked(starter3ch);
            starter3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    if(!starter3ch){
                        starter3ch = true;
                        starter3.setTextColor(Color.GREEN);
						Player.addItemInventory(306, 1, 0)
						Player.addItemInventory(307, 1, 0)
						Player.addItemInventory(308, 1, 0)
						Player.addItemInventory(309, 1, 0)
                        Player.addItemInventory(267, 1, 0)
                        Player.addItemInventory(257, 1, 0)
                        Player.addItemInventory(262, 64, 0)
                        Player.addItemInventory(261, 1, 0)
                        Player.addItemInventory(364, 64, 0)
                    }else{
                        starter3ch = false;
                        starter3.setTextColor(Color.RED);
                        Player.addItemInventory(0, 0, 0)
                    }
                  starter3.setChecked(starter3ch);
                }
            }));
            menuLayout.addView(starter3);
             
            if(starter3ch) {
                starter3.setTextColor(Color.GREEN);
            }
            		starter4 = new CheckBox(ctx);
            starter4.setText("Gold kit");
            starter4.setTextColor(Color.BLUE);             
            starter4.setChecked(starter4ch);
            starter4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    if(!starter4ch){
                        starter4ch = true;
                        starter4.setTextColor(Color.GREEN);
						Player.addItemInventory(314, 1, 0)
						Player.addItemInventory(315, 1, 0)
						Player.addItemInventory(316, 1, 0)
						Player.addItemInventory(317, 1, 0)
                        Player.addItemInventory(283, 1, 0)
                        Player.addItemInventory(285, 1, 0)
                        Player.addItemInventory(262, 64, 0)
                        Player.addItemInventory(261, 1, 0)
                        Player.addItemInventory(396, 64, 0)
                        Player.addItemInventory(322, 64, 0)
                    }else{
                        starter4ch = false;
                        starter4.setTextColor(Color.RED);
                        Player.addItemInventory(0, 0, 0)
                    }
                  starter4.setChecked(starter4ch);
                }
            }));
            menuLayout.addView(starter4);
             
            if(starter4ch) {
                starter4.setTextColor(Color.GREEN);
            }
            		starter5 = new CheckBox(ctx);
            starter5.setText("Diamond kit");
            starter5.setTextColor(Color.BLUE);             
            starter5.setChecked(starter5ch);
            starter5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    if(!starter5ch){
                        starter5ch = true;
                        starter5.setTextColor(Color.GREEN);
						Player.addItemInventory(310, 1, 0)
						Player.addItemInventory(311, 1, 0)
						Player.addItemInventory(312, 1, 0)
						Player.addItemInventory(313, 1, 0)
                        Player.addItemInventory(276, 1, 0)
                        Player.addItemInventory(278, 1, 0)
                        Player.addItemInventory(262, 64, 0)
                        Player.addItemInventory(261, 1, 0)
                        Player.addItemInventory(116, 1, 0)
                        Player.addItemInventory(384, 255, 0)
                        Player,addItemInventory(364, 64, 0)
                    }else{
                        starter5ch = false;
                        starter5.setTextColor(Color.RED);
                        Player.addItemInventory(0, 0, 0)
                    }
                  starter5.setChecked(starter5ch);
                }
            }));
            menuLayout.addView(starter5);
             
            if(starter5ch) {
                starter5.setTextColor(Color.GREEN);
            }
spawn10 = new CheckBox(ctx);
            spawn10.setText("Spawn chicken");
            spawn10.setTextColor(Color.BLUE);             
            spawn10.setChecked(spawn10ch);
            spawn10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    if(!spawn10ch){
                        spawn10ch = true;
                        spawn10.setTextColor(Color.GREEN);
                  Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 10);
                    }else{
                        spawn10ch = false;
                        spawn10.setTextColor(Color.RED);
                        Server.sendChat(" ")
                    }
                  spawn10.setChecked(spawn10ch);
                }
            }));
            menuLayout.addView(spawn10);
 
            if(spawn10ch) {
                spawn10.setTextColor(Color.GREEN);
            }
            spawn11 = new CheckBox(ctx);
            spawn11.setText("Spawn cow");
            spawn11.setTextColor(Color.BLUE);             
            spawn11.setChecked(spawn11ch);
            spawn11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    if(!spawn11ch){
                        spawn11ch = true;
                        spawn11.setTextColor(Color.GREEN);
                  Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 11);
                    }else{
                        spawn11ch = false;
                        spawn11.setTextColor(Color.RED);
                        Server.sendChat(" ")
                    }
                  spawn11.setChecked(spawn11ch);
                }
            }));
            menuLayout.addView(spawn11);
 
            if(spawn11ch) {
                spawn11.setTextColor(Color.GREEN);
            }
            spawn12 = new CheckBox(ctx);
            spawn12.setText("Spawn pig");
            spawn12.setTextColor(Color.BLUE);             
            spawn12.setChecked(spawn12ch);
            spawn12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    if(!spawn12ch){
                        spawn12ch = true;
                        spawn12.setTextColor(Color.GREEN);
                  Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 12);
                    }else{
                        spawn12ch = false;
                        spawn12.setTextColor(Color.RED);
                        Server.sendChat(" ")
                    }
                  spawn12.setChecked(spawn12ch);
                }
            }));
            menuLayout.addView(spawn12);
 
            if(spawn12ch) {
                spawn12.setTextColor(Color.GREEN);
            }
            spawn13 = new CheckBox(ctx);
            spawn13.setText("Spawn sheep");
            spawn13.setTextColor(Color.BLUE);             
            spawn13.setChecked(spawn13ch);
            spawn13.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    if(!spawn13ch){
                        spawn13ch = true;
                        spawn13.setTextColor(Color.GREEN);
                  Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 13);
                    }else{
                        spawn13ch = false;
                        spawn13.setTextColor(Color.RED);
                        Server.sendChat(" ")
                    }
                  spawn13.setChecked(spawn13ch);
                }
            }));
            menuLayout.addView(spawn13);
 
            if(spawn13ch) {
                spawn13.setTextColor(Color.GREEN);
            }
			spawn14 = new CheckBox(ctx);
            spawn14.setText("Spawn wolf");
            spawn14.setTextColor(Color.BLUE);             
            spawn14.setChecked(spawn14ch);
            spawn14.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    if(!spawn14ch){
                        spawn14ch = true;
                        spawn14.setTextColor(Color.GREEN);
                  Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 14);
                    }else{
                        spawn14ch = false;
                        spawn14.setTextColor(Color.RED);
                        Server.sendChat(" ")
                    }
                  spawn14.setChecked(spawn14ch);
                }
            }));
            menuLayout.addView(spawn14);
 
            if(spawn14ch) {
                spawn14.setTextColor(Color.GREEN);
            }
			spawn15 = new CheckBox(ctx);
            spawn15.setText("Spawn villager");
            spawn15.setTextColor(Color.BLUE);             
            spawn15.setChecked(spawn15ch);
            spawn15.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    if(!spawn15ch){
                        spawn15ch = true;
                        spawn15.setTextColor(Color.GREEN);
                  Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 15);
                    }else{
                        spawn15ch = false;
                        spawn15.setTextColor(Color.RED);
                        Server.sendChat(" ")
                    }
                  spawn15.setChecked(spawn15ch);
                }
            }));
            menuLayout.addView(spawn15);
 
            if(spawn15ch) {
                spawn15.setTextColor(Color.GREEN);
            }
			spawn16 = new CheckBox(ctx);
            spawn16.setText("Spawn Mushrom cow");
            spawn16.setTextColor(Color.BLUE);             
            spawn16.setChecked(spawn16ch);
            spawn16.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    if(!spawn16ch){
                        spawn16ch = true;
                        spawn16.setTextColor(Color.GREEN);
                  Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 16);
                    }else{
                        spawn16ch = false;
                        spawn16.setTextColor(Color.RED);
                        Server.sendChat(" ")
                    }
                  spawn16.setChecked(spawn16ch);
                }
            }));
            menuLayout.addView(spawn16);
 
            if(spawn16ch) {
                spawn16.setTextColor(Color.GREEN);
            }
                        spawn17 = new CheckBox(ctx);
            spawn17.setText("Spawn squid");
            spawn17.setTextColor(Color.BLUE);             
            spawn17.setChecked(spawn17ch);
            spawn17.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    if(!spawn17ch){
                        spawn17ch = true;
                        spawn17.setTextColor(Color.GREEN);
                  Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 17);
                    }else{
                        spawn17ch = false;
                        spawn17.setTextColor(Color.RED);
                        Server.sendChat(" ")
                    }
                  spawn17.setChecked(spawn17ch);
                }
            }));
            menuLayout.addView(spawn17);
 
            if(spawn17ch) {
                spawn17.setTextColor(Color.GREEN);
            }
                        spawn18 = new CheckBox(ctx);
            spawn18.setText("Spawn rabbit");
            spawn18.setTextColor(Color.BLUE);             
            spawn18.setChecked(spawn18ch);
            spawn18.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    if(!spawn18ch){
                        spawn18ch = true;
                        spawn18.setTextColor(Color.GREEN);
                  Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 18);
                    }else{
                        spawn18ch = false;
                        spawn18.setTextColor(Color.RED);
                        Server.sendChat(" ")
                    }
                  spawn18.setChecked(spawn18ch);
                }
            }));
            menuLayout.addView(spawn18);
 
            if(spawn18ch) {
                spawn18.setTextColor(Color.GREEN);
            }
            		spawn19 = new CheckBox(ctx);
            spawn19.setText("Spawn bat");
            spawn19.setTextColor(Color.BLUE);             
            spawn19.setChecked(spawn19ch);
            spawn19.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    if(!spawn19ch){
                        spawn19ch = true;
                        spawn19.setTextColor(Color.GREEN);
                  Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 19);
                    }else{
                        spawn19ch = false;
                        spawn19.setTextColor(Color.RED);
                        Server.sendChat(" ")
                    }
                  spawn19.setChecked(spawn19ch);
                }
            }));
            menuLayout.addView(spawn19);
 
            if(spawn19ch) {
                spawn19.setTextColor(Color.GREEN);
            }
spawn20 = new CheckBox(ctx);
            spawn20.setText("Spawn iron golem");
            spawn20.setTextColor(Color.BLUE);             
            spawn20.setChecked(spawn20ch);
            spawn20.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    if(!spawn20ch){
                        spawn20ch = true;
                        spawn20.setTextColor(Color.GREEN);
                  Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 20);
                    }else{
                        spawn20ch = false;
                        spawn20.setTextColor(Color.RED);
                        Server.sendChat(" ")
                    }
                  spawn20.setChecked(spawn20ch);
                }
            }));
            menuLayout.addView(spawn20);
 
            if(spawn20ch) {
                spawn20.setTextColor(Color.GREEN);
            }
spawn21 = new CheckBox(ctx);
            spawn21.setText("Spawn snow golem");
            spawn21.setTextColor(Color.BLUE);             
            spawn21.setChecked(spawn21ch);
            spawn21.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    if(!spawn21ch){
                        spawn21ch = true;
                        spawn21.setTextColor(Color.GREEN);
                  Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 21);
                    }else{
                        spawn21ch = false;
                        spawn21.setTextColor(Color.RED);
                        Server.sendChat(" ")
                    }
                  spawn21.setChecked(spawn21ch);
                }
            }));
            menuLayout.addView(spawn21);
 
            if(spawn21ch) {
                spawn21.setTextColor(Color.GREEN);
            }
		spawn22 = new CheckBox(ctx);
            spawn22.setText("Spawn ocelot");
            spawn22.setTextColor(Color.BLUE);             
            spawn22.setChecked(spawn22ch);
            spawn22.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    if(!spawn22ch){
                        spawn22ch = true;
                        spawn22.setTextColor(Color.GREEN);
                  Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 22);
                    }else{
                        spawn22ch = false;
                        spawn22.setTextColor(Color.RED);
                        Server.sendChat(" ")
                    }
                  spawn22.setChecked(spawn22ch);
                }
            }));
            menuLayout.addView(spawn22);
 
            if(spawn22ch) {
                spawn22.setTextColor(Color.GREEN);
            }
            var day = new Button(ctx);
            day.setText("Day");
            day.setTextColor(Color.BLUE);
            day.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.setTime(200);
                    Server.sendChat("/time set 200")
                }
            }));
            menuLayout.addView(day);
 
            var night = new Button(ctx);
            night.setText("Night");
            night.setTextColor(Color.BLUE);
            night.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.setTime(14000);
                    Server.sendChat("/time set 14000")
                }
            }));
            menuLayout.addView(night);
 
            var source = new Button(ctx);
            source.setText("My Youtube");
            source.setTextColor(Color.BLUE);
            source.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    var intentURL = new Intent(ctx);
                    intentURL.setAction(Intent.ACTION_VIEW);
                    intentURL.setData(Uri.parse("https://www.youtube.com/user/Arceusmatt"));
                    ctx.startActivity(intentURL);
                }
            }));
            menuLayout.addView(source);
 
            var maker = new TextView(ctx);
            maker.setTextSize(17);
            maker.setText("Made by" + split + DEVELOPERS);
            maker.setTextColor(Color.BLUE);
            maker.setGravity(Gravity.CENTER);
            menuLayout.addView(maker);
 
            menu = new PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
            menu.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
            menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}
 
function exit(){
    ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var xLayout = new LinearLayout(ctx);
            var xButton = new Button(ctx);
            xButton.setText('X');
            xButton.setTextColor(Color.RED);
            xButton.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    exitUI.dismiss();
                    menu.dismiss();
                }
            }));
            xLayout.addView(xButton);
 
            exitUI = new PopupWindow(xLayout, dip2px(40), dip2px(40));
            exitUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
            exitUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 0);
            }catch(exception){
                Toast.makeText(ctx, exception, 1).show();
            }
    }}));
}
 
function instaDestroy(){
    for(i = 0; i < 256; i++){
        Block.setDestroyTime(i, 0.1);
    }
}
  
function defaultDestroy(){
    for(i = 0; i < 256; i++){
        Block.setDestroyTime(i, defaultDestroyTime[i]);
    }
}
 
function modTick() {
    if(thisday) {
        Level.setTime(200);
    }
    if(speeded) {
        if(s==1) {
        Xpos = getPlayerX();
        Zpos = getPlayerZ();
        s = s + 1;
        }
        else if(s==3) {
        s = 1;
        Xdiff = getPlayerX()-Xpos;
        Zdiff = getPlayerZ()-Zpos;
        setVelX(getPlayerEnt(), Xdiff);
        setVelZ(getPlayerEnt(), Zdiff);
        Xdiff=0;
        Zdiff=0;
        }
        if(s!=1) {
            s = s + 1;
        }
    }
}
