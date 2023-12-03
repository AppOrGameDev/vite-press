# Maven

CMD 编译命令

```cmd
# 指定settings，跳过doc，test，强制更新本地maven仓的jar包
mvn clean package -e -U -Dmaven.javadoc.skip=true -Dmaven.test.skip=true --settings F:\software\apache-maven-3.9.4\conf\settings_singcheer.xml

# 上传jar包到远程中心Maven仓库
mvn clean deploy -Dmaven.javadoc.skip=true -Dmaven.test.skip=true  --settings F:\software\apache-maven-3.9.4\conf\settings_singcheer.xml
```

git-bash 编译命令

```shell
# 指定settings，跳过doc，test，强制更新本地maven仓的jar包
# 打印命令
echo "mvn clean package -e -U -Dmaven.javadoc.skip=true -Dmaven.test.skip=true --settings /F/software/apache-maven-3.9.4/conf/settings_singcheer.xml"
mvn clean package -e -U -Dmaven.javadoc.skip=true -Dmaven.test.skip=true --settings /F/software/apache-maven-3.9.4/conf/settings_singcheer.xml
# 上传jar包到远程中心Maven仓库
# 打印命令
echo "mvn clean deploy -Dmaven.javadoc.skip=true -Dmaven.test.skip=true  --settings /F/software/apache-maven-3.9.4/conf/settings_singcheer.xml"
mvn clean deploy -Dmaven.javadoc.skip=true -Dmaven.test.skip=true  --settings /F/software/apache-maven-3.9.4/conf/settings_singcheer.xml
```

在Maven的bin目录下新建`xxmvn.bat` `xxmvn.shell`；

`CMD`中直接执行<strong style="color:red">xxmvn命令即可</strong>

`git bash`中直接执行<strong style="color:red">sh xxmvn.sh 命令即可</strong>



#### idea配置终端为git bash，并解决git bash中文乱码问题

设置IDEA Terminal窗口为Gitbash，非弹窗，并设置使用maven命令

[设置IDEA Terminal窗口为Gitbash，非弹窗，并设置使用maven命令_idea terminal固定_wangsun300的博客-CSDN博客](https://blog.csdn.net/wangsun300/article/details/105782778)

解决IDEA 2019.2.3在使用Terminal时，按ESC键切换至编辑窗口的问题

[解决IDEA 2019.2.3在使用Terminal时，按ESC键切换至编辑窗口的问题_idea terminal esc_tree先生的博客-CSDN博客](https://blog.csdn.net/ldjjbzh626/article/details/103009978)

## Maven提速

```xml
 <mirrors>
     <!--settings.xml添加阿里云镜像源-->
     <mirror>
      <id>alimaven</id>
      <mirrorOf>central</mirrorOf>
      <name>aliyun maven</name>
      <url>http://maven.aliyun.com/nexus/content/repositories/central/</url>
    </mirror>
  </mirrors>
```



# Git

## 设置git远程仓库别名

```shell
# 代码仓初始化模板 -b 既可以检出分支也可以检出tag标签
git clone http://ip:port/xux/fastboot.git -b dev
git remote rm origin
git remote add xux http://ip:port/xux/fastboot.git
git remote add singcheer http://ip:port/unified-platform/fastboot.git
```
```cmd
#  win下端口被占用,杀进程
netstat -aon|findstr "80"
taskkill -pid 14868 -f
```

# 本地环境
> mysql root 12345678
> Redis 没有密码

# 代码仓库分支管理
> 将master和release*设置为保护分支,禁止任何人推送代码,只能MR合入;
> releaase-0.0.1 为发布版本分支命名规范
> 所有开发都在develop分支上提交

# JDK8新特性

### Lambda表达式

> 优秀常用Lambda案例
>
> 

### 新增Stream类

> ```java
>         List<Employee> employeeList = Arrays.asList(new Employee("张三", 18, 1800.0), new Employee("李四", 19, 1900.0), new Employee("王五", 20, 2000.0), new Employee("赵六", 21, 2100.0));
>         // 集合自带排序
>         employeeList.sort((a, b) -> b.getAge() - a.getAge());
>         System.out.println(employeeList);
>         // 集合自带遍历
>         employeeList.forEach(item -> System.out.println(item));
>         System.out.println(employeeList.stream().filter(item -> item.getAge() >= 20).count());
>         // 使用stream流来过滤生成新的集合
>         List<Employee> employeeList1 = employeeList.stream().filter(item -> item.getAge() >= 20).collect(Collectors.toList());
>         Set<Employee> employeeSet = employeeList.stream().filter(item -> item.getAge() >= 20).collect(Collectors.toSet());
>         // 对象List中提取属性构成新的List
>         List<String> names = employeeList.stream().map(Employee::getName).collect(Collectors.toList());
>         // 名称去重
>         List<String> names01 = employeeList.stream().map(Employee::getName).distinct().collect(Collectors.toList());
>         // 对每个元素做相同处理,返回新的集合(数量不变)
>         List<Employee> jiagongziList = employeeList.stream().map(item -> {
>             item.setSalary(item.getSalary() + 2000.0);
>             return item;
>         }).collect(Collectors.toList());
>         // 使用peek达成相同目标
>         List<Employee> jiagongziList01 = employeeList.stream().peek(item -> item.setSalary(item.getSalary() + 2000.0)).collect(Collectors.toList());
>         // 排序生成新的数组
>         List<Employee> employeeList2 = employeeList.stream().sorted((a, b) -> {
>             return a.getAge() - b.getAge();
>         }).collect(Collectors.toList());
>         System.out.println(employeeList2);
>         // 按年龄分组
>         Map<Integer, List<Employee>> groupByAge = employeeList.stream().collect(Collectors.groupingBy(Employee::getAge));
>         System.out.println(groupByAge);
>         // List转Map
>         Map<Integer, Employee> groupByAge = employeeList.stream().collect(Collectors.toMap(Employee::getId, Function.identity()));
>         Map<Integer, String> groupByAge = employeeList.stream().collect(Collectors.toMap(Employee::getId, Employee::getName));
>         // JSONArray转Map
>         JSONObject options = JSONObject.parseObject("{\"businessObjName\":\"\",\"refFieldCode\":\"\",\"maxNum\":0,\"minNum\":0,\"filter\":[{\"fieldType\":\"\"}],\"options\":[{\"label\":\"选项1\",\"value\":\"1\"},{\"label\":\"选项2\",\"value\":\"2\"}],\"linkUrl\":\"\",\"bindDict\":\"mes_origin_type\",\"maxFileNumber\":1,\"isDisplay\":1}");
>         Map<String, String> dictOptionMap = options.getJSONArray("options").stream().collect(Collectors.toMap(key -> ((JSONObject) key).getString("value"), val -> ((JSONObject) val).getString("label")));
>         System.out.println(dictOptionMap);
> ```
>
> 

### 新增方法引用格式

### 引入Optional

### 新增日期API

### 接口的默认方法和静态方法

### 支持并行（parallel）数组

### 对并发类（Concurrency）的扩展

### 使用Base64

### 注解相关改变

### 常用工具类

> Arrays
>
> > ```java
> >         // Arrays 几个代表方法
> >         Employee[] arr = new Employee[]{new Employee("张三", 18, 1800.0), new Employee("李四", 19, 1900.0), new Employee("王五", 20, 2000.0), new Employee("赵六", 21, 2100.0)};
> >         Arrays.sort(arr, 0, employeeList.size(), new Comparator<Employee>() {
> > 
> >             @Override
> >             public int compare(Employee o1, Employee o2) {
> >                 return o1.getAge() - o2.getAge();
> >             }
> >         });
> >         // 二分查找
> >         int i = Arrays.binarySearch(arr, 0, arr.length, arr[2], new Comparator<Employee>() {
> >             @Override
> >             public int compare(Employee o1, Employee o2) {
> >                 return o1.getAge() - o2.getAge();
> >             }
> >         });
> >         System.out.println(i);
> >         // 拷贝数组
> >         Employee[] arr02 = Arrays.copyOfRange(arr, 0, arr.length, Employee[].class);
> >         // 拷贝数组,默认从0开始拷贝
> >         Employee[] arr03 = Arrays.copyOf(arr, arr.length, Employee[].class);
> >         // 将数组转换成stream流,使用stream处理
> >         Arrays.stream(arr, 0, arr.length).map(item -> {
> >             item.setAge(item.getAge() * 2);
> >             return item;
> >         }).sorted((a, b) -> a.getAge() - b.getAge()).collect(Collectors.toList());
> >         // 填充数组
> >         Arrays.fill(arr, 0, arr.length, new Employee("牛逼", 30, 25000.0));
> >         // 比较数组元素是否相等,只有一层
> >         Arrays.deepEquals(arr, arr02);
> >         Arrays.spliterator(arr, 0, arr.length);
> >         // 可拆分的迭代器
> >         Spliterator<Employee> spliterator = Arrays.spliterator(arr);
> >         // 并行排序,提升排序效率
> >         Arrays.parallelSort(args);
> > ```
> >
> > 
>
> Collections
>
> > ```java
> > ```
> >
> > 

# git cherry-pick
> https://juejin.cn/post/7220995317633269816
## idea使用git cherry-pick
> https://blog.csdn.net/qq_23167527/article/details/102595278

>            for (Map.Entry<String, String> entry: rowData.entrySet()) {
>                // 校验Value字段合法性 entry.getValue();
>            }

## PostMan汉化

https://www.cnblogs.com/sansui6/p/17267525.html

`注意关闭音乐`

# Java日期时间格式

`yyyy-MM-dd HH:mm:ss` <strong style="color:red">HH 表示24小时制</strong>

```java
    public static boolean isValidDate(String dateStr, String format) {
        SimpleDateFormat sdf = new SimpleDateFormat(format);
        sdf.setLenient(false);
        // 设置解析日期时严格匹配，不容忍格式错误
        try {
            sdf.parse(dateStr);
            return true;
        } catch (ParseException e) {
            return false;
        }
    }

    public static void main(String[] args) {
        System.out.println(isValidDate("2023-09-25 22:04:23", "yyyy-MM-dd HH:mm:ss"));
        System.out.println(isValidDate("2023-09-25 02:04:23", "yyyy-MM-dd HH:mm:ss"));
        System.out.println(isValidDate("2023年09月25日 02时04分23秒", "yyyy年MM月dd日 HH时mm分ss秒"));
        System.out.println(isValidDate("2023年09月25日 22时04分23秒", "yyyy年MM月dd日 HH时mm分ss秒"));
    }
```

