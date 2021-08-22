# git相关

## git基本操作
```bash
# #后面是注释
# 克隆项目
git clone http地址或者ssh地址
```

```bash
# 创建并且切换到新分支
git checkout -b 新分支名(用英文)
# 切换到以有分支 比如切换到master分支
git checkout master
```

```bash
# 提交代码的时候，连续执行下面三个命令
git add. 
# 提交内容随便写 注意中文不用加""英文需要加""
git commit -m 提交内容
# 最后推送到gitee上
git push
```
## gitee配置密钥

### 生成并且查找密钥

右键，打开git bash，输入命令

```bash
cat ~/.ssh/id_rsa.pub  
```

然后敲回车，不出意外的话，会出现

![](https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/20210823021848.png)

红色圈出的这块，就是你电脑的密钥，然后复制，注意不要把你刚才的 cat。。。命令也给复制进去，从ssh-xxx开始到最后。

注意，如果出意外的话，会找不到这个密钥文件，那就是你的电脑没有生成过密钥，如果出现了这个问题，可以查一下怎么生成ssh密钥，或者在群里说一下。

### 配置gitee公钥

然后进入gitee，图图所示，打开ssh公钥页面，标题随便设置，然后把刚才复制的密钥复制的下面的文本框点击确定。

![](https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%5B%7DEQE%5BZ6MSF9RFS9W%7D$3$~L.png)

### 验证gitee密钥是否配置成功

到此位置就设置好了，然后需要验证一下是否成功

输入命令

```bash
ssh -T git@gitee.com 
```

![image-20210823022331419](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20210823022331419.png)

如果出现successfully，说明你的密钥就配好了。

### 解释配置公钥的作用&http与ssh的区别

配置密钥有什么用呢，没配置密钥的时候，本地与gitee远程链接只能通过http建立，

![](https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/20210823022527.png)

如图，http会导致每次提交代码都需要重复去提交账号密码，非常不方便，所以配好ssh密钥之后，就可以使用ssh建立连接，复制ssh下的这堆路径，通过git clone 就可以克隆下来代码，然后提交的时候也不需要再去填写账号密码。