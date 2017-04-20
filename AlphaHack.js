var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

/*
Main author: ArceusMatt.
Help by: GodSoft029 & applqpak.
Started MCPE v0.12.0
contact @arceusmatt
*/

var url = new android.content.Intent(ctx);
url.setAction(android.content.Intent.ACTION_VIEW);
url.setData(android.net.Uri.parse("https://arceusmatt.github.io/alphahack"));
ctx.startActivity(url);
