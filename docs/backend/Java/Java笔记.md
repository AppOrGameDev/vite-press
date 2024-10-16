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
git remote rename origin xux
# git remote add xux http://ip:port/xux/fastboot.git
# git remote rm origin
git remote add singcheer http://ip:port/unified-platform/fastboot.git
git remote -v
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
> List<Employee> employeeList = Arrays.asList(new Employee("张三", 18, 1800.0), new Employee("李四", 19, 1900.0), new Employee("王五", 20, 2000.0), new Employee("赵六", 21, 2100.0));
> // 集合自带排序
> employeeList.sort((a, b) -> b.getAge() - a.getAge());
> System.out.println(employeeList);
> // 集合自带遍历
> employeeList.forEach(item -> System.out.println(item));
> System.out.println(employeeList.stream().filter(item -> item.getAge() >= 20).count());
> // 使用stream流来过滤生成新的集合
> List<Employee> employeeList1 = employeeList.stream().filter(item -> item.getAge() >= 20).collect(Collectors.toList());
> Set<Employee> employeeSet = employeeList.stream().filter(item -> item.getAge() >= 20).collect(Collectors.toSet());
> // 对象List中提取属性构成新的List
> List<String> names = employeeList.stream().map(Employee::getName).collect(Collectors.toList());
> // 名称去重
> List<String> names01 = employeeList.stream().map(Employee::getName).distinct().collect(Collectors.toList());
> // 对每个元素做相同处理,返回新的集合(数量不变)
> List<Employee> jiagongziList = employeeList.stream().map(item -> {
>    item.setSalary(item.getSalary() + 2000.0);
>    return item;
> }).collect(Collectors.toList());
> // 使用peek达成相同目标
> List<Employee> jiagongziList01 = employeeList.stream().peek(item -> item.setSalary(item.getSalary() + 2000.0)).collect(Collectors.toList());
> // 排序生成新的数组
> List<Employee> employeeList2 = employeeList.stream().sorted((a, b) -> {
>    return a.getAge() - b.getAge();
> }).collect(Collectors.toList());
> System.out.println(employeeList2);
> // 按年龄
> employeeList.sort(Comparator.comparing(Employee::getAge))
> // 按年龄分组
> Map<Integer, List<Employee>> groupByAge = employeeList.stream().collect(Collectors.groupingBy(Employee::getAge));
> System.out.println(groupByAge);
> // List转Map
> Map<Integer, Employee> groupByAge = employeeList.stream().collect(Collectors.toMap(Employee::getId, Function.identity()));
> Map<Integer, String> groupByAge = employeeList.stream().collect(Collectors.toMap(Employee::getId, Employee::getName));
> // JSONArray转Map
> JSONObject options = JSONObject.parseObject("{\"businessObjName\":\"\",\"refFieldCode\":\"\",\"maxNum\":0,\"minNum\":0,\"filter\":[{\"fieldType\":\"\"}],\"options\":[{\"label\":\"选项1\",\"value\":\"1\"},{\"label\":\"选项2\",\"value\":\"2\"}],\"linkUrl\":\"\",\"bindDict\":\"mes_origin_type\",\"maxFileNumber\":1,\"isDisplay\":1}");
> Map<String, String> dictOptionMap = options.getJSONArray("options").stream().collect(Collectors.toMap(key -> ((JSONObject) key).getString("value"), val -> ((JSONObject) val).getString("label")));
> System.out.println(dictOptionMap);
> 
> Map:
> 
> Map<String,String> map=cargolist.stream().collect(Collectors.toMap(CodeCargo::getCargoCode,CodeCargo::getCargoName));
> 
> Map<String, CodeCargo> map=cargolist.stream().collect(Collectors.toMap(CodeCargo::getCargoCode, Function.identity(), (oldValue, newValue) -> oldValue);
> 
> Map<String, List<CodeCargo>> map = cargolist.stream().collect(Collectors.groupingBy(CodeCargo::getCargoCode));
> 
> LinkedHashMap：
> 
> Map<String, CodeCargo> map= cargolist.stream().collect(Collectors.toMap(CodeCargo::getCargoCode, Function.identity(), (oldValue, newValue) -> oldValue, LinkedHashMap::new));
> 
> Map<String,List<CodeCargo>> map= cargolist.stream().collect(Collectors.groupingBy(CodeCargo::getCargoCode, LinkedHashMap::new,Collectors.toList()));
> 
> // lambda实现分页操作
> list.stream().skip((pageNo-1)*pageSize).limit(pageSize).collect(Collectors.toList());
> // 累加
> BigDecimal sum = list.stream().map(Person::getAge).reduce(BigDecimal.ZERO, BigDecimal::add);
> 
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

`.gitignore`
```txt
.settings

# Java class files
*.class
*.jar

# generated files
bin
gen
out
target

# Eclipse project files
.classpath
.project
.DS_Store

# IntelliJ IDEA Files
*.iml
*.ipr
*.iws
*.idea
.idea

# logs
logs
nacos
```

# Git常用命令

```shell
git remote -v
git remote add AppOrGameDev(别名) (git地址)

cherrypick
revert
reset

# 这两个命令配合+git仓库不限制禁止强制推送;可以将本地代码强制覆盖远程
git reset --hard commitid
git push -f

```

# 代码片段

`解决selectOne查出来多条的问题`

```java
// 解决selectOne查出来多条的问题
MetaBusinessTypeDO metaBusinessTypeDO = metaBusinessTypeMapper.selectOne(
                new LambdaQueryWrapperX<MetaBusinessTypeDO>()
                        .eqIfPresent(MetaBusinessTypeDO::getTenantId, tenantId)
                        .eqIfPresent(MetaBusinessTypeDO::getAppCode, appCode)
                        .eqIfPresent(MetaBusinessTypeDO::getDomainObjCode, domainObjCode)
                        .eqIfPresent(MetaBusinessTypeDO::getObjCode, objCode)
                        .eqIfPresent(MetaBusinessTypeDO::getCode, businessTypeCode)
                        .last("order by update_time desc limit 1"));

```

`解决根据指定条件更新指定字段的update语句`

```java
LambdaUpdateWrapper<XXXDO> lambdaUpdateWrapper = new LambdaUpdateWrapper<XXXDO>()
    .eq(XXXDO::getId, xxxDO.getId())
    .eq(XXXDO::getName, xxxDO.getName())
    .set(XXXDO::getErrorMsg, xxxDO.getMessage())
    .set(XXXDO::getDescription, xxxDO.getDescription());
XXXMapper.update(null, lambdaUpdateWrapper);

```

`解决一次性批量插入多条记录`

```sql
insert into dbo.表名(列名1,列名2,列名3) values
(数据1，数据2，数据3),
(数据4，数据5，数据6)
```

> 复用Mybatis-Plus的基础能力
>
> - XXXMapper.xml
> - XXXDO.java(@TableName指定表明;驼峰指定列名)
> - XXXMapper.java(都指向上面这个DO.java)
>
> ```java
> @Mapper
> public interface XXXMapper extends BaseMapperX<XXXDO>
> ```
>
> - BatchXXXMapper.java(都指向上面这个DO.java)
>
> ```java
> @Mapper
> public interface BatchXXXMapper extends RootMapper<XXXDO>
> ```

`将json字符串转换成目标对象`

```java
PageResult<Map<String, Object>> page = JSON.parseObject(JSON.toJSONString(resp.getData()), new TypeReference<PageResult<Map<String, Object>>>() {}.getType());
```

`将Excel直接导入表中`

- 定义Excel中sheet页的表头(第一行)名称和JavaBean对象属性字段的映射关系`(注意单元格的格式;日期时间--localDateTime;金额--BigDecimal)`

> ```java
> @Data
> @AllArgsConstructor
> @NoArgsConstructor
> @EqualsAndHashCode
> public class DemoData {
>     @ExcelProperty("名称")
>     private String name;
>     @ExcelProperty("ID")
>     private String id;
>     @ExcelProperty("创建时间")
>     private LocalDateTime createTime;
>     @ExcelProperty("金额(RMB)")
>     private BigDecimal money;
> }
> ```

- 监听Excel的sheet页读取监听

> ```java
> // 有个很重要的点 DemoDataListener 不能被spring管理，要每次读取excel都要new,然后里面用到spring可以构造方法传进去
> @Slf4j
> public class DemoDataListener implements ReadListener<DemoData> {
> 
>     /**
>      * 每隔5条存储数据库，实际使用中可以100条，然后清理list ，方便内存回收
>      */
>     private static final int BATCH_COUNT = 100;
>     /**
>      * 缓存的数据
>      */
>     private List<DemoData> cachedDataList = ListUtils.newArrayListWithExpectedSize(BATCH_COUNT);
>     /**
>      * 这个每一条数据解析都会来调用
>      *
>      * @param data    one row value. Is is same as {@link AnalysisContext#readRowHolder()}
>      * @param context
>      */
>     @Override
>     public void invoke(DemoData data, AnalysisContext context) {
>         log.info("解析到一条数据:{}", JSON.toJSONString(data));
>         cachedDataList.add(data);
>         // 达到BATCH_COUNT了，需要去存储一次数据库，防止数据几万条数据在内存，容易OOM
>         if (cachedDataList.size() >= BATCH_COUNT) {
>             saveData();
>             // 存储完成清理 list
>             cachedDataList = ListUtils.newArrayListWithExpectedSize(BATCH_COUNT);
>         }
>     }
> 
>     /**
>      * 所有数据解析完成了 都会来调用
>      *
>      * @param context
>      */
>     @Override
>     public void doAfterAllAnalysed(AnalysisContext context) {
>         // 这里也要保存数据，确保最后遗留的数据也存储到数据库
>         saveData();
>         log.info("所有数据解析完成！");
>     }
> 
>     /**
>      * 加上存储数据库
>      */
>     private void saveData() {
>         log.info("{}条数据，开始存储数据库！", cachedDataList.size());
>         demoDAO.save(cachedDataList);
>         log.info("存储数据库成功！");
>     }
> }
> ```

- 读取Excel

> ```java
> EasyExcel.read(file.getInputStream(), DemoData.class, new DemoDataListener()).sheet("测试sheet页名称").doRead();
> ```
>
> 

# IDEA设置

### services SpringBoot不显示端口

- `idea-->file-->Invalidate Caches / Restart`

- `弹出框全部勾选`

### IDEA关闭经常弹出证书合法性提醒

- `i549211577dea-->settings-->Tools-->Server Certificates-->勾选 Accept non-trusted certificates automatically`

### IDEA 开启软换行

- `idea-->settings-->Editor-->General-->Soft Wraps-->Soft-wrap these files`

### IDEA 关闭证书过期提示

- `idea-->settings-->Tools-->Server Certificates-->Accept non-trusted certificates automatically  勾选`

### IDEA 设置主题

- `idea-->settings-->Appearance & Behavior-->Appearance-->Theme-->One Dark Vivid`
- `idea-->settings-->Editor-->Color Scheme-->One Dark Vivid`

### 黑魔法工具

- ht删tp://j除ets.ide这ji些h字u符o.c试o试m/

### 高效快捷键

- alt+8
- alt+9
- shift+F9
- shift+F10
- shift+Esc
- ctrl+Number -

