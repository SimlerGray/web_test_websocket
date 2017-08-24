centos 环境配置过程

java 环境配置:

下载jdk源码,tar.gz 版本

一般放到  /usr/local/JAVA 文件夹
解压 jdk   tar -zxvf  jdk文件名

mv jdk文件夹名 (新名称)

cd ~  去最外部文件夹

vi .bash_profile 修改配置文件

复制下面的代码  PATH=xxx  下面
 
export JAVA_HOME=/usr/local/JAVA/jdk1.8 // java jdk文件夹位置和名称
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
export PATH=$JAVA_HOME/bin:$PATH  //启用

保存之后

source .bash_profile  重启配置文件  