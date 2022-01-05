# 瞎扯用的

计算机实验网
http://zy1.cslab.whut.edu.cn/
学校vpn
https://vpn.whut.edu.cn/



210.30.97.215:8088



[(1 封私信) 如何搭建个人独立博客？ - 知乎 (zhihu.com)](https://www.zhihu.com/question/20463581)







远程电脑密码：
147258

root密码是dutacewisdom



华为考试地址
https://ilearningx.huawei.com/portal/exam/101021/about

127.0.0.1等同于localhost

数据类型的转换：小类型不可以转化为大类型，大类型可以转化为小类型（大小类型区别在于占用字节数不一样）
//不是，是可以相互转化，不过要强转，这样在企业链表中可以把代码写的简单


①Vetur —— 语法高亮、智能感知、Emmet等
包含格式化功能， Alt+Shift+F （格式化全文），Ctrl+K Ctrl+F（格式化选中代码，两个Ctrl需要同时按着）
②EsLint —— 语法纠错
③open in browse——设置在网页中打开快捷键
④Live Server——一款可以在浏览器实时显示当前vscode代码的插件



查看git下来的源地址：
git remote -v


neo4j://localhost:7687
http://localhost:7474


conda用“=”，pip用“==”

Anaconda常用命令：
创建新环境：
conda create -n python36 python=3.6

conda activate python36
conda install XXX

conda查看下载版本:
conda list

查看有哪些环境：
conda info -e

# 查看当前下载源
conda config --show-sources

在安装所需包之前查看包的各个版本
anaconda search -t conda  ***(所需包名)
conda search tensorflow

标配！：
用指定库安装指定版本
conda install --channel https://conda.anaconda.org/anaconda tensorflow=2.0.0

tensorflow==2.0.0
bert4keras==0.6.2
keras==2.3.1
numpy==1.17.2

conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/msys2/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --set show_channel_urls yes


为了获得最好的体验，建议你使用Tensorflow 1.14 + Keras 2.3.1组合。

关于环境组合
支持tf+keras和tf+tf.keras，后者需要提前传入环境变量TF_KERAS=1。

当使用tf+keras时，建议2.2.4 <= keras <= 2.3.1，以及 1.14 <= tf <= 2.2，不能使用tf 2.3+。

keras 2.4+可以用，但事实上keras 2.4.x基本上已经完全等价于tf.keras了，因此如果你要用keras 2.4+，倒不如直接用tf.keras。

conda install git+https://www.github.com/bojone/bert4keras.git
https://github.com/bojone/bert4keras.git

pip install keras-bert=2.3.1

训练模型：
https://github.com/google-research/bert#pre-trained-models

https://storage.googleapis.com/bert_models/2018_11_03/chinese_L-12_H-768_A-12.zip


CREATE (gp1:GoogleProfile1 {Id: 201401, Name:"Apple"})

MERGE (gp2:GoogleProfile2{ Id: 201402,Name:"Nokia"})

13.229.188.59 github.com
#192.30.253.112 github.com

neo4j的db名称：graph.db


alter table author add column place varchar(10);
(<div class="small"><\/div>)|(<divclass="small"><\/div>)
select content from poem where content like'%div%' limit 100;



192.30.253.112 github.com
192.30.253.119 gist.github.com
151.101.100.133 assets-cdn.github.com
151.101.100.133 raw.githubusercontent.com
151.101.100.133 gist.githubusercontent.com
151.101.100.133 cloud.githubusercontent.com
151.101.100.133 camo.githubusercontent.com
151.101.100.133 avatars0.githubusercontent.com
151.101.100.133 avatars1.githubusercontent.com
151.101.100.133 avatars2.githubusercontent.com
151.101.100.133 avatars3.githubusercontent.com
151.101.100.133 avatars4.githubusercontent.com
151.101.100.133 avatars5.githubusercontent.com
151.101.100.133 avatars6.githubusercontent.com
151.101.100.133 avatars7.githubusercontent.com
151.101.100.133 avatars8.githubusercontent.com
192.168.137.1 windows10.microdone.cn

我的ip地址：
113.57.237.6


140.82.112.3


199.232.69.194 github.global.ssl.fastly.net

http://localhost:8080/igraph/example1.html
https://github.com/grapheco/InteractiveGraph-neo4j





from=../data/databases/graph.db.dump --database=graph.db --force3

./neo4j-admin  dump --database=graph.db --to=/home/robot/Neoj_data/graph.db


neo4j-admin dump --database=graph.db --to=../data/graph.db.dump








dbms.connector.https.listen_address=0.0.0.0:7473

dbms.connectors.default_listen_address=0.0.0.0

dbms.connector.http.listen_address=0.0.0.0:7470

dbms.connector.bolt.listen_address=0.0.0.0:7686

dbms.memory.pagecache.size=512M

wrapper.java.additional=-Dneo4j.ext.udc.source=docker
dbms.tx_log.rotation.retention_policy=100M size
dbms.directories.logs=/logs
HOME=/var/lib/neo4j
EDITION=community


数据转化为json格式
json.dumps(data)



本次机器学习用到了有监督性的二分类处理情感分析。涉及10万条训练数据，其中正面负面数据各占50%

统计词频，
特征选择：
有了提取特征的方法后，我们就可以提取特征来进行分类学习了。但一般来说，太多的特征会降低分类的准确度，所以需要使用一定的方法，来“选择”出信息量最丰富的特征，再使用这些特征来分类。
1.	计算出整个语料里面每个词的信息量
2.	根据信息量进行倒序排序，选择排名靠前的信息量的词
3.	把这些词作为特征


特征降维：
加快算法计算的速度，有效提高分类的准确率。

四、把语料文本变成使用特征表示。







问题理解模块主要涉及中文古诗词问题语料的构建和问题理解模型的训练。
首先需要构建中文古诗词问题语料库，作为意图识别和实体识别的训练数据，其
中每条训练语句需要标注中文古诗词实体以及问题意图。接着对数据进行预处理,
将数据分为训练集和测试集。
数据集构建好后,使用Rasa问答系统框架中的Rasa NLU模块训练中文古诗.
词问题模型，其中需要配置pipeline组件用于模型训练过程中的中文分词、实体
识别以及意图分类等，同时使用测试集进行模型评估。
最后将人机交互模块中接收到的中文古诗词问题进行处理,通过训练好的中
文古诗词问题理解模型可以对其进行实体抽取以及语义分析。同时构建
MongoDB数据库用于存储用户问题数据中的实体槽值。通常情况下，用户可能
不会一次性的把所有的需求表达出来,会通过交互式对话慢慢的表达出所有的意
图，本文研究的中文古诗词问答系统将结合历史对话信息和此轮对话信息来分析
用户的真正意图，使整个对话过程不偏离用户的需求。




其中中文古诗
词知识图谱模块主要涉及将存在于互联网上的半结构化以及结构化的中文古诗
词数据进行爬取并存储,同时按照中文古诗词知识图谱概念层设计将爬取的中文
古诗词数据按照三元组的形式存储在图数据库中。人机交互模块主要用于将用户
提出的中文古诗词问题传递给部署在服务器上的中文古诗词问答系统,以及接收
问答系统解答出的结果反馈给用户，完成用户与系统之间的交互。问题理解模块
主要负责将人机交互模块传递过来的中文古诗词问题进行理解,提取出问题中包
含的中文古诗词实体以及识别出问题意图。问题解答模块主要根据问题理解模块
提取出的问题实体以及意图将中文古诗词问题转化成逻辑表达式,通过数据库查
询语句连接Neo4j图数据库[42]进行问题解答,然后将问题答案传递给人机交互模
块。









情感分析的过程使用了keras，bert4keras，tensorflow等工具，涉及统计词频、特征选择、特征降维等步骤。
整个项目涉及训练过程和调用过程，
训练过程：通过对训练集进行数据清理、特征提取，调用谷歌预训练权重，通过bert4keras将预训练权重结合训练集转化为keras可识别的数据集，通过keras等机器学习数据包把每个字的情感比重存入best.weights中
在预测过程中调用best.weights存取的权重，分析诗词情感指数。


根据诗词情感变化界面的背景，通过机器学习训练出的权重，计算每首诗的情感。数值在0到1之间，越接近0诗词越偏向负面，越接近1诗词越偏向正面，将每首诗的情感数据存入数据库。设置4个区间，以0.25为跨度，分别为负面，偏负面，偏正面，正面四种情感类型，用不同颜色，不同植物展示。

在预测过程中调用best.weights存取的权重，分析诗词情感指数。
一般来说，太多的特征会降低分类的准确度，所以需要使用一定的方法，来“选择”出信息量最丰富的特征，再使用这些特征来分类。以加快算法计算的速度，有效提高分类的准确率。步骤具体为计算出整个语料里面每个词的信息量，再根据信息量进行倒序排序，选择排名靠前的信息量的词，把这些词作为特征。





