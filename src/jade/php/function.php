<?php
function getFileTime($path){
	$file = "/".trim(trim($path),"\t .&?\\/");
	$server = $_SERVER["DOCUMENT_ROOT"];
	if(is_file($server.$file)){
		$file = $path."?".filemtime($server.$file);
	}else{
		$file = $path."?".time();
	}
	return $file;
}
function getFileContent($path, $type="html"){
	$return = "";
	$file = "/".trim(trim($path),"\t .&?\\/");
	$server = $_SERVER["DOCUMENT_ROOT"];
	if(is_file($server.$file)){
		$return = file_get_contents($server.$file);
		switch($type){
			case "js":
				$return = "<script>\n".$return."\n</script>";
				break;
			case "css":
				$return = "<style>\n".$return."\n</style>";
				break;
		}
	}
	return $return;
}
?>
