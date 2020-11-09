// 爬取
package main

import (
	"net/http"
	"log"
)

func BaiduHotSearch() {
	// http 把网页请求
	// dom 内存第三方分析
	// find
	res, err := http.Get("http://www.baid.com/yedashi")
	if err != nil {
		log.Fatal(err)
	}
	defer res.Body.Close()
	if res.StatusCode != 200 {
		log.Fatalf("status code error: %d %s",res.StatusCode, res.Status)
	}
}

func main() {
	BaiduHotSearch() 	//模块化
}