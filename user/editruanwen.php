﻿<?php
include ("checkuser.php");
include ("../include/config.php");
include("../include/function.php");

$VipUser=$_COOKIE["VipUser"];
$sql="select * from user where VipUser='".$VipUser."'";
$result=mysql_db_query($dbname,$sql);
$rs=mysql_fetch_array($result);
if($rs!=NULL)
{
    $yue=$rs["yue"];
}

$ID=$_REQUEST["ID"];
$sqlN="select * from ruanwen_info where ID=".$ID;
$resultN=mysql_db_query($dbname,$sqlN);
$rsN=mysql_fetch_array($resultN);
/*王庆路	根据content字段内容判断是三种类型的哪一种*/
$content = $rsN['content'];
$onLine = "";
$reprint = "";
$upload = "";

$is_url = substr($rsN["content"], 0, 5);
$is_also_url = substr($rsN["content"], 0, 6);

$is_upload = substr($rsN["content"], 0, 10);
if($is_url == "http:" || $is_also_url == "https:"){
	$reprint = $content;
}
else if ($is_upload == "huo15com->"){
	$upload = $content;
}
else{
	$onLine = $content;
}



/*王庆路	根据content字段内容判断是三种类型的哪一种 end*/
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=7" />
<title>后台管理中心</title>
<link href="../images/reset.css" rel="stylesheet" type="text/css" />
<link href="../images/zh-cn-system.css" rel="stylesheet" type="text/css" />
<script language="javascript" type="text/javascript" src="../images/jquery.min.js"></script>
<script language="javascript" type="text/javascript" src="../images/styleswitch.js"></script>
	<!--王庆路 用ueditor替换kindeditor-->
	<?php include("../ueditor.php")?>
	<!--王庆路 用ueditor替换kindeditor end-->
<script>
/*王庆路 用ueditor替换kindeditor
KE.show({
	id : 'neirong',
		afterCreate : function(id) {
			KE.event.ctrl(document, 13, function() {
				KE.util.setData(id);
				document.forms['example'].submit();
			});
			KE.event.ctrl(KE.g[id].iframeDoc, 13, function() {
				KE.util.setData(id);
				document.forms['example'].submit();
			});
	}
});
王庆路 用ueditor替换kindeditor end*/
/*王庆路	软文发布编辑三种方式切换*/
$(function() {
	$("#conurl").hide();
	$("#uploadComponent").hide();
	$("#upload").hide();
	$("#uploadLabel").hide();
	$("#file_upload").hide();
	$("#art_url_input").hide();
	$("#file_upload-button").hide();
	$("#download").hide();
	$("#judge").val(1);
	document.form1.fbmode[0].checked = true;
});
function docheck()
{
	if (document.form1.fbmode[0].checked)
	{
		$("#tid").text("内    容")
		$("#conurl").hide();
		$("#file_upload").hide();
		$("#art_url_input").hide();
		$("#file_upload-button").hide();
		$("#uploadLabel").hide();
		$("#uploadComponent").hide();
		$("#nr").removeClass("on");
		$("#download").hide();
		$("#judge").val(1);
	}
	else if (document.form1.fbmode[1].checked)
	{
		$("#tid").text("来源网址")
		$("#conurl").show();
		$("#file_upload").hide();
		$("#art_url_input").hide();
		$("#file_upload-button").hide();
		$("#uploadLabel").show();
		$("#nr").addClass("on");
		$("#download").hide();
		$("#uploadComponent").show();
		$("#judge").val(2);
	}
	else if (document.form1.fbmode[2].checked)
	{
		$("#tid").text("上传网址")
		$("#file_upload").show();
		$("#file_upload-button").show();
		$("#art_url_input").show();
		$("#uploadLabel").show();
		$("#conurl").hide();
		$("#nr").addClass("on");
		$("#download").show();
		$("#judge").val(3);
	}
	else{}
}

</script>
	<style>
		.on {
			display: none;
		}
	</style>
<!--王庆路	软文发布编辑三种方式切换 end-->
<style type="text/css">
html{_overflow-y:scroll}.background{display:block;width:100%;height:100%;opacity:0.4;filter:alpha(opacity=40);background:while;position:absolute;top:0;left:0;z-index:2000;}.progressBar{border:solid 2px #86A5AD;background:white url(progressBar_m.gif) no-repeat 10px 10px;}.progressBar{display:block;width:148px;height:28px;position:fixed;top:50%;left:50%;margin-left:-74px;margin-top:-14px;padding:10px 10px 10px 50px;text-align:left;line-height:27px;font-weight:bold;position:absolute;z-index:2001;}.nextpage{background:#3E5F9B;color:#fff;bottom:0;margin:0px;left:0px;position:fixed;line-height:25px;width:100%;z-index:999;padding-left:10px;_bottom:auto;_width:100%;_position:absolute;font-size:14;padding-left:0px;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,20)||0)-(parseInt(this.currentStyle.marginBottom,20)||0)));}
</style>

</head>
<body topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0">
<div id="main_frameid" class="pad-10 display" style="_margin-right:-12px;_width:98.9%;">
  <div class="col-2  col-auto" >
    <h6>软文发布编辑
      <!-- <span  style="padding-left:15px;cursor:pointer" onclick="$('#form1').slideToggle();">切换发布框</span> <span id='meiturn' onclick='meiturn()' style="padding-left:15px;cursor:pointer">切换查找框</span>-->
    </h6>
	  <!--王庆路	judge三个值(1--在线录入稿件2--转载来源网址3--上传word稿件)-->
    <div class="content">
        <form id="form1" name="form1" method="post" action="saveruanwen.php?action=edit" onsubmit="return check()" style="display:" >
			<input type="hidden" name="judge" id="judge">
			<table width="100%" cellpadding="0" cellspacing="1" bgcolor="#e2e2e2" id='step2'>
				
				<tr>
				<td width="12%" height="30" bgcolor="#FFFFFF"><div align="center">选择方式</div></td>
				<td width="88%" align="left" bgcolor="#FFFFFF" style="padding:10px;">
					<p>
						<label><input type="radio" name="fbmode" value="0" checked="checked" id="fbmode0" onclick="docheck()">
							在线录入稿件</label>
						<label><input type="radio" name="fbmode" value="1" id="fbmode1" onclick="docheck()">
							转载来源网址</label>
						<label><input type="radio" name="fbmode" value="2" id="fbmode2" onclick="docheck()">
							上传word稿件</label>
					</p>
				</td>
			</tr>
          <tr>
			<INPUT id="userid" value="<?php echo $rsN["ID"];?>" type="hidden" name="userid">
            <td width="12%" height="30" bgcolor="#FFFFFF"><div align="center">标    题</div></td>
            <td width="88%" align="left" bgcolor="#FFFFFF" style="padding:10px;"><input name="biaoti" value="<?php echo $rsN["title"];?>" type="text" class="txt" id="biaoti" lang='require'  size="100" xml:lang="require" value=""/>
              <input type="hidden" name="dingdan" id="dingdan"  value=""/>
              （标题字数尽量控制在18个汉字内！） </td>
          </tr>
          <tr>
            <td height="30" bgcolor="#FFFFFF"><div id="tid"  align="center">内    容</div></td>
            <td align="left" bgcolor="#FFFFFF" style="padding:10px;">
				<div id="nr">
				<!--王庆路 初始去掉visibility:hidden-->
				<textarea name="neirong"  style="width:100%;height:330px;">
					<?php echo $onLine;?>
				</textarea>
				<!--王庆路 初始去掉visibility:hidden end-->
              	<input type="submit" name="button" id="buttonsave" value=" 提 交 "  style="width:60px; height:25px;display:none" />
				</div>
				<!--转载来源网址内容-->
			  	<input name="neturl" id="conurl" type="text" size="100/" style="display: inline-block; " value="<?php echo $reprint ?>">
				<label id="uploadLabel" class="uploadifyQueue" style="display: none;"></label>

				<!--上传组件-->
				<div id="uploadComponent">
					<div style="display: block; float: left">
						<input id="art_url_input" name="art_url_input" type="text" size="100" value="<?php echo substr($upload, 10); ?>">
						<input style=" float: left" id="file_upload" name="file_upload" type="file" multiple="true">
					</div>
					<!--上传word稿件文件路径-->
					<?php $filePath = substr($upload, 10);?>
					<!--稿件下载-->
					<div style="margin-left: 10px; display: block; float: left"><div id="download" style="width: 120px; height: 30px;"><a style=" width: 100%; line-height: 30px; float: left;text-decoration:none;" class="uploadify-button" href="/<?php echo $filePath; ?>" target="_blank"><span>稿件下载</span></a></div>
				</div>
				</div>
				<script src="../huo15template/uploadify/jquery.uploadify.min.js" type="text/javascript"></script>
				<link rel="stylesheet" type="text/css" href="../huo15template/uploadify/uploadify/uploadify.css">
				<script type="text/javascript">
					<?php $timestamp = time();?>
					$(function() {
						$('#file_upload').uploadify({
							'buttonText' : '文件上传',
							'formData'     : {
								'timestamp' : '<?php echo $timestamp;?>',
								'_token'     : "{{csrf_token()}}"
							},
							'swf'      : "../huo15template/uploadify/uploadify.swf",
							'uploader' : "upload.php",
							'onUploadSuccess' : function(file, data, response) {
								//$('input[name=user_avatar]').val(data);
								$('#art_url_input').val(data);
								var strOrg = $('#art_url_input').val();
								$('#art_url_input').val(strOrg.slice(31));
								//$('#art_url_input').attr('src','/'+data);
//
							}
						});
					});
				</script>
				<style>
					.uploadify{display:inline-block;}
					.uploadify-button{border:none; border-radius:5px; margin-top:8px;background: #0B96D9;color:#fff;text-align: center}
					table.add_tab tr td span.uploadify-button-text{color: #FFF; margin:0;}
				</style>
				<!--上传组件 end-->

			</td>
          </tr>
				<!--王庆路	judge三个值(1--在线录入稿件2--转载来源网址3--上传word稿件) end-->
	     <tr>
	        <td height="30" bgcolor="#FFFFFF"><div align="center">金    额</div></td>
	        <td align="left" bgcolor="#FFFFFF" style="padding-left:10px;"><font color="#FF0000"><b><?php echo $rsN[price];?></b></font>元
			<font color="blue"><!--第一步：填写标题、内容；点击下一步；第二步：选择要提交的网站，发布成功，等待回链。--></font>
            </td>
          </tr>
        </table>
		<div align="center"><input name="totalmoney" type="hidden" id="totalmoney" style="border:0px;" value="0" readonly="readonly"/> <input type="hidden" id='yixuanhidden' name='yixuanhidden'/>
			<!--input type="button" value="下一步 选择媒体" onclick="nextpage()" style="width:130px; height:30px;text-align:center;  margin-top:10px; "/><input type="button" value="上一步 选择媒体" onclick="perpage()" style="width:130px;height:30px; text-align:center;margin-top:3px;"/-->
			<input type="button" value=" 提 交 " onclick="$('#buttonsave').click()"  style="width:80px;height:30px; text-align:center;margin-top:3px;"/></div>
      </form>
      <br />
	    <style>
		    .attention .tipbox {
			    background: #e5f3ff;
			    border: 1px solid #c0dffa;
			    border-radius: 6px;
			    padding: 15px;
			    line-height: 26px;
			    font-size: 13px;
			    margin: 20px 60px;
			    margin-bottom: 0;
		    }
		    .tipbox .glyph {
			    float: left;
			    margin-right: 20px;
			    color: #1F7ED0;
		    }
		    .glyph .fs1 {
			    font-size: 2em;
		    }
		    [data-icon]:before {
			    font-family: 'ElegantIcons';
			    content: attr(data-icon);
			    speak: none;
			    font-weight: normal;
			    font-variant: normal;
			    text-transform: none;
			    line-height: 1;
			    -webkit-font-smoothing: antialiased;
			    -moz-osx-font-smoothing: grayscale;
		    }
		    .clearfix:after {
			    content: "";
			    display: block;
			    clear: both;
		    }
	    </style>
	    <div class="attention">
		    <div class="tipbox clearfix">
			    <div class="glyph">
				    <div class="fs1" aria-hidden="true" data-icon=""></div>
			    </div>
			    <h4 style="font-size:15px; margin-bottom:10px;"><strong>注 意 事 项</strong></h4>
			    <p>1、文章内容必须属于合法内容，如有负面、涉政、敏感等一律不予发布并停止账号使用。</p>
			    <p>2、文章提交发布后不可修改、取消或删除，请在提交之前确认好文章内容。</p>
			    <p>3、一篇文章的发布时间为1-36小时以内，平均大约花费6小时。</p>
			    <p>4、审稿时间为：周一至周五 09:00-18:00，下午16点后提交的文章在隔天发布。</p>
			    <p>5、所选媒体可能会因为审稿不达标，导致个别所选媒体不能发布，届时会建议您更换媒体或退款。</p>
			    <p>6、不能带网址的一律不能带电话、QQ、微信等信息，百度新闻源根据文章质量不保证100%收录。</p>
			    <p>7、文章标题22字以内，内容500~2500字内，图片0~3张内，图片宽度500像素内，媒体可能会对文章进行适当的调整。</p>
			    <p>8、文章中包含的网址、电话、图片过大、图片过多等，媒体会根据内容规范进行调整或者删减，属于正常情况。</p>
		    </div>
	    </div>



      <div id="flselect" style="display:none">
        <table width="100%" border="0" cellpadding="0" style="border:1px solid #ccc;padding-bottom:5px;">
          <tr>
            <td bgcolor="#FFFFFF" style="padding-left:5px;">
			<ul class='meitilist'>
                <li onclick="mt_search3()" style=' cursor:pointer;'>媒体类型-》</li>
                <li onclick="mt_search1(45)" style=' cursor:pointer;'>十元专区</li>
				<li onclick="mt_search1(44)" style=' cursor:pointer;'>最新秒杀</li>
				<li onclick="mt_search1(43)" style=' cursor:pointer;'>套餐系列</li>
				<li onclick="mt_search1(42)" style=' cursor:pointer;'>IT-科技</li>
				<li onclick="mt_search1(41)" style=' cursor:pointer;'>新闻资讯</li>
				<li onclick="mt_search1(40)" style=' cursor:pointer;'>财经商业</li>
				<li onclick="mt_search1(39)" style=' cursor:pointer;'>房产家居</li>
				<li onclick="mt_search1(38)" style=' cursor:pointer;'>健康医疗</li>
				<li onclick="mt_search1(37)" style=' cursor:pointer;'>酒店旅游</li>
				<li onclick="mt_search1(36)" style=' cursor:pointer;'>教育培训</li>
				<li onclick="mt_search1(35)" style=' cursor:pointer;'>汽车网站</li>
				<li onclick="mt_search1(34)" style=' cursor:pointer;'>游戏网站</li>
				<li onclick="mt_search1(33)" style=' cursor:pointer;'>娱乐休闲</li>
				<li onclick="mt_search1(32)" style=' cursor:pointer;'>女性时尚</li>
				<li onclick="mt_search1(31)" style=' cursor:pointer;'>生活消费</li>
				<li onclick="mt_search1(30)" style=' cursor:pointer;'>工业贸易</li></ul>
              <div style="clear:both;"></div>
              <ul class='meitilist'>
                <li  onclick="mt_search3()" style=' cursor:pointer;'>综合门户媒体-》</li>
                <li onclick="mt_search7('中国广播网')" style=' cursor:pointer;'>中国广播网</li>
				<li onclick="mt_search7('中国新闻网')" style=' cursor:pointer;'>中国新闻网</li>
				<li onclick="mt_search7('中国经济网')" style=' cursor:pointer;'>中国经济网</li>
				<li onclick="mt_search7('中国日报网')" style=' cursor:pointer;'>中国日报网</li>
				<li onclick="mt_search7('21CN网')" style=' cursor:pointer;'>21CN网</li>
				<li onclick="mt_search7('TOM网')" style=' cursor:pointer;'>TOM网</li>
				<li onclick="mt_search7('慧聪网')" style=' cursor:pointer;'>慧聪网</li>
				<li onclick="mt_search7('中国网')" style=' cursor:pointer;'>中国网</li>
				<li onclick="mt_search7('新华网')" style=' cursor:pointer;'>新华网</li>
				<li onclick="mt_search7('千龙网')" style=' cursor:pointer;'>千龙网</li>
				<li onclick="mt_search7('央视网')" style=' cursor:pointer;'>央视网</li>
				<li onclick="mt_search7('人民网')" style=' cursor:pointer;'>人民网</li>
				<li onclick="mt_search7('中华网')" style=' cursor:pointer;'>中华网</li>
				<li onclick="mt_search7('凤凰网')" style=' cursor:pointer;'>凤凰网</li>
				<li onclick="mt_search7('网易网')" style=' cursor:pointer;'>网易网</li>
				<li onclick="mt_search7('腾讯网')" style=' cursor:pointer;'>腾讯网</li>
				<li onclick="mt_search7('搜狐网')" style=' cursor:pointer;'>搜狐网</li>
				<li onclick="mt_search7('新浪网')" style=' cursor:pointer;'>新浪网</li></ul>
              <div style="clear:both;"></div>
              <ul class='meitilist'>
                <li  onclick="mt_search3()" style=' cursor:pointer;'>价格分类媒体-》</li>
                <li onclick="mt_search2(0)" style=' cursor:pointer;'>0-40元</li>
				<li onclick="mt_search2(1)" style=' cursor:pointer;'>40-70元</li>
				<li onclick="mt_search2(2)" style=' cursor:pointer;'>70-120元</li>
				<li onclick="mt_search2(3)" style=' cursor:pointer;'>120元以上</li></ul>
              <div style="clear:both;"></div>
              <ul class='meitilist'>
                <li  onclick="mt_search3()" style=' cursor:pointer;'>地区分类媒体-》</li>
                <li onclick="mt_search6('北京')" style=' cursor:pointer;'>北京</li>
				<li onclick="mt_search6('上海')" style=' cursor:pointer;'>上海</li>
				<li onclick="mt_search6('广东')" style=' cursor:pointer;'>广东</li>
				<li onclick="mt_search6('浙江')" style=' cursor:pointer;'>浙江</li>
				<li onclick="mt_search6('天津')" style=' cursor:pointer;'>天津</li>
				<li onclick="mt_search6('重庆')" style=' cursor:pointer;'>重庆</li>
				<li onclick="mt_search6('湖北')" style=' cursor:pointer;'>湖北</li>
				<li onclick="mt_search6('湖南')" style=' cursor:pointer;'>湖南</li>
				<li onclick="mt_search6('河北')" style=' cursor:pointer;'>河北</li>
				<li onclick="mt_search6('河南')" style=' cursor:pointer;'>河南</li>
				<li onclick="mt_search6('东北')" style=' cursor:pointer;'>东北</li>
				<li onclick="mt_search6('山西')" style=' cursor:pointer;'>山西</li>
				<li onclick="mt_search6('江苏')" style=' cursor:pointer;'>江苏</li>
				<li onclick="mt_search6('江西')" style=' cursor:pointer;'>江西</li>
				<li onclick="mt_search6('四川')" style=' cursor:pointer;'>四川</li>
				<li onclick="mt_search6('辽宁')" style=' cursor:pointer;'>辽宁</li>
				<li onclick="mt_search6('吉林')" style=' cursor:pointer;'>吉林</li>
				<li onclick="mt_search6('甘肃')" style=' cursor:pointer;'>甘肃</li>
				<li onclick="mt_search6('青海')" style=' cursor:pointer;'>青海</li>
				<li onclick="mt_search6('海南')" style=' cursor:pointer;'>海南</li>
				<li onclick="mt_search6('安徽')" style=' cursor:pointer;'>安徽</li>
				<li onclick="mt_search6('福建')" style=' cursor:pointer;'>福建</li>
				<li onclick="mt_search6('其他地区')" style=' cursor:pointer;'>其他地区</li></ul>
              <div style="clear:both;"></div>
              <ul class='meitilist'>
                <li  onclick="mt_search3()" style=' cursor:pointer;'>新闻源-》</li>
                <li onclick="mt_search4('百度新闻源')" style=' cursor:pointer;'>百度新闻源</li>
				<li onclick="mt_search4('无')" style=' cursor:pointer;'>非新闻源</li></ul>
              <div style="clear:both;"></div>
              <ul class='meitilist'>
                <li  onclick="mt_search3()" style=' cursor:pointer;'>链接-》</li>
                <li onclick="mt_search5('可带网址')" style=' cursor:pointer;'>可带网址</li>
				<li onclick="mt_search5('可超链接')" style=' cursor:pointer;'>可超链接</li>
				<li onclick="mt_search5('不能带网址')" style=' cursor:pointer;'>不能带网址</li></ul>
              <div style="clear:both;"></div></td>
          </tr>
        </table>
        <form name="form2" id='searchtrun' style="margin-bottom:20px;">
          <br />
          <table width="100%" cellpadding="0" cellspacing="0" bgcolor="#e2e2e2" >
            <tr>
              <td width="6%" height="28" bgcolor="#FFFFFF" style="border-top:1px solid #ccc; border-left:1px solid #ccc; border-right:1px solid #ccc;"><div align="center">媒体查找</div></td>
              <td width="94%" align="center" valign="middle" bgcolor="#FFFFFF"><table border="0" cellpadding="5" cellspacing="2">
                  <tr>
                    <td><div align="center">自定义搜索：媒体名称</div></td>
                   <td><input name="meiti_name" type="text" class="txt" id="meiti_name" onkeydown="if(event.keyCode == 13)event.returnValue = false;"/></td>
                    <td><input type="button" name="button2" id="button2" value="查找" onclick="mt_search();" style="border:1px solid #ccc; background:#e2e2e2;color:#000; width:80px; cursor:pointer;"/></td>
                    <td></td>
                  </tr>
                </table></td>
            </tr>
            <tr>
              <td height="23" colspan="2" bgcolor="#FFFFFF"><div id="s_meti"></div></td>
            </tr>
          </table>
        </form>
        <div id='yixuan' class="nextpage"> &nbsp;已选媒体: <span id="yixuantr"></span>总额：<b><span id='totalmoney2'>0</span></b>元（余额：<b><?php echo $yue;?></b>元）
          <!--<input type="button" value=" 清 空 " onclick="clearall()" style="width:80px;height:30px; text-align:center;margin-top:3px;"/>-->
		  <input type="button" value="下一步 编辑内容" onclick="nextpage()" style="width:130px; height:30px;text-align:center;  margin-top:10px; "/>
          <!--input type="button" value="上一步 编辑内容" onclick="perpage()" style="width:130px;height:30px; text-align:center;margin-top:3px;"/-->
          <!--input type="button" value=" 提 交 " onclick="$('#buttonsave').click()"  style="width:80px;height:30px; text-align:center;margin-top:3px;"/-->
        </div>
      </div>
    </div>
  </div>
  <div class="bk20 hr"></div>
</div>
<div id="background" class="background" style="display: none; "></div>
<div id="progressBar" class="progressBar" style="display: none; ">数据加载中，请稍等...</div>

<script type="text/javascript">
$(document).ready(function(){
	var ajaxbg = $("#background,#progressBar");
	ajaxbg.hide();
	$(document).ajaxStart(function () {
		ajaxbg.show();
	}).ajaxStop(function () {
		ajaxbg.hide();
	});
	mt_search();
})

function setprice(val){
	$("#jiage").val(val*15);
}

function mt_search(){
	$.get("search.php?a=mt_search",{
		"mc":$("#meiti_name").val(),"fl":$("#select").val(),"lj":$("#select2").val(),"xw":$("#select3").val()
	}
	,function(data){
		$("#s_meti").html(data);
	});
}

function mt_search1(id){
	$.get("search.php?a=mt_search",{
		"fl":id
	}
	,function(data){
		$("#s_meti").html(data);
	});
}

function mt_search2(id){
	$.get("search.php?a=mt_search",{
		"jg":id
	}
	,function(data){
		$("#s_meti").html(data);
	});
}

function mt_search3(id){
	$.get("search.php?a=mt_searchall",{
		"jg":"all"
	}
	,function(data){
		$("#s_meti").html(data);
	});
}

function mt_search4(id){
	$.get("search.php?a=mt_searchall",{
		"xw":id
	}
	,function(data){
		$("#s_meti").html(data);
	});
}

function mt_search5(id){
	$.get("search.php?a=mt_searchall",{
		"lj":id
	}
	,function(data){
		$("#s_meti").html(data);
	});
}

function mt_search6(id){
	$.get("search.php?a=mt_searchall",{
		"dq":id
	}
	,function(data){
		$("#s_meti").html(data);
	});
}

function mt_search7(id){
	$.get("search.php?a=mt_searchall",{
		"zhmh":id
	}
	,function(data){
		$("#s_meti").html(data);
	});
}

function meiturn(){
	$("#searchtrun").slideToggle();
}

function yixuan(s1,s2,s3,s4,s5,s6,tr,id){
	var ye=0.00;
	var s7=s3;

	if($("#xz_"+id).attr("checked")==false) {
		yixuansc(id,s7);
		return false;
	}
		if(ye >= ($("#totalmoney").val()*1 + s7*1)){
		var yx=$("#yixuanhidden").val();
		$("#yixuan").show();
		if( yx.indexOf(tr)==-1 ) {
			$("#yixuanhidden").val(tr+","+yx);
			$("#totalmoney").val($("#totalmoney").val()*1 + s7*1)
			$("#totalmoney2").html(	$("#totalmoney2").html()*1 + s7*1)
			$("#yixuantr").append("<span id='yixuantr2_"+id+"'>"+s2+s7+"元<a href='javascript:;' onclick=\"yixuansc('"+id+"',"+s7+")\" style='color:#FF0'>[X]</a></span>&nbsp;&nbsp;");
		}
	}
	else{
		$("#biaoti")[0].focus();
		alert('余额不足，请先充值');
		$("#xz_"+id).attr("checked",false);
		return false;
	}
	}

function yixuansc(tr,je){
	var yx=$("#yixuanhidden").val();
	yx=yx.replace("$"+tr+"$,","");
	$("#yixuanhidden").val(yx);
	$("#xz_"+tr).attr("checked",false);
	$("#yixuantr2_"+tr).remove();
	$("#totalmoney").val( $("#totalmoney").val()*1 - je*1 )
	$("#totalmoney2").html(	$("#totalmoney2").html()*1 - je*1 )
}

function check(){
	var flg = true;
	var flg1= true;
	$("input[lang='require']").each(function(){
		$(this).css("border-color","#ffffff");
		if($(this).val() == "") {
			flg = false;
			$(this).css("border-color","#FF0000");
		}
	})
		$("select[lang='require']").each(function(){
		$(this).css("background-color","#ffffff");
		if($(this).val() == "0") {
			flg1 = false;
			$(this).css("background-color","#FF0000");
		}
	})
	if(flg==false || flg1==false){
		alert('红色提示为关键信息,请填写完整,不能空!');
		return false;
	}
	var reg	= new RegExp(/^[^*$#\\~@!&%￥<>=|{}+-\/]+$/);
	if (! reg.test(document.form1.biaoti.value))
	{
		alert("不能输入特殊字符！");
		document.form1.biaoti.focus();
		return false;
	}
	var s7=$("#yixuanhidden").val();
	if(s7.replace("$","").replace(",","").replace(" ","")==""){
		//alert('未选择任何频道');
		//return false;
		return true;
	}
        return true;
}

/*
function perpage(){
	$("#flselect").show();
	$("#form1").hide();
}

function nextpage(){
	$("#flselect").hide();
	$("#form1").show();
}
*/

function nextpage(){
	if($("#biaoti").val()!=""){
		$("#flselect").show();
		$("#form1").hide();
	}
	else{
		alert('请先填写标题与内容!');
	}
}

function perpage(){
	$("#flselect").hide();
	$("#form1").show();
}

function clearall() {
	var checkboxs = $(":checkbox");
	for(var i=0;i<checkboxs.length;i++) {
		if(checkboxs[i].name=="xz") {
			if(checkboxs[i].checked) {
				checkboxs[i].click();
				checkboxs[i].checked = false;
			}
		}
	}
	$("#yixuantr").html("");
}

</script>


<script language="javascript"> 
var rows = document.getElementsByTagName('tr');//获取所有表格行
for (var i=0;i<rows.length;i++){//然后对其遍历
    rows[i].onmouseover = function(){      
        this.className += 'highlight';//鼠标经过时，显示样式altrow,注意，js中的样式是className而不是class，这个是新手容易犯的错误；
    }
    rows[i].onmouseout = function(){       
        this.className = this.className.replace('highlight','');//鼠标一走的时候，把样式也去掉
    }
}

</script>
</body>
</html>