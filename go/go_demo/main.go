// 爬取
package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/PuerkitoBio/goquery"
)

func BaiduHotSearch() {
	// http 把网页请求
	// DOM内存第三方分析
	// find
	res, err := http.Get("http://www.baidu.com")
	if err != nil {
		log.Fatal(err)
	}
	defer res.Body.Close() // ?
	if res.StatusCode != 200 {
		log.Fatalf("status code error:%d %s", res.StatusCode, res.Status)
	}
	doc, err := goquery.NewDocumentFromReader(res.Body)
	if err != nil {
		log.Fatal(err)
	}
	doc.Find(".s-news-rank-content .news-meta-item").Each(func(i int, s *goquery.Selection) {
		content := s.Find(".title-content").Text()
		fmt.Printf("%d: %s\n", i, content)
	})
}
func main() {
	BaiduHotSearch() // 函数模块化
}
