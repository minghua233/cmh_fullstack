package main // 包 主程序	module	模块化

import (
	"fmt"
	"os"
)

func main() {
	//
	if len(os.Args) > 1 {
		fmt.Println(os.Args[1])
	}
	 
	fmt.Println("Hello World!")

}

