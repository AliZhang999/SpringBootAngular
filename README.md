## 1.新建maven spring boot项目
## 2.新建一个RestController类
## 3.在springboot项目的根目录下用angular-cli新建angular项目web
## 4.在web项目根目录下用ng build --env=prod命令构建angular项目,会自动在angular项目的根目录下生成dist目录及文件
## 5.修改springboot项目的pom.xml文件，加入以下配置，以便构建springboot项目时，自动将web项目构建好的dist下的文件拷贝到springboot项目里：
```
	<plugin>
		<artifactId>maven-resources-plugin</artifactId>
		<executions>
			<execution>
				<id>copy-resources</id>
				<phase>validate</phase>
				<goals>
					<goal>copy-resources</goal>
				</goals>
				<configuration>
					<outputDirectory>${basedir}/target/classes/static/</outputDirectory>
					<resources>
						<resource>
							<directory>${basedir}/web/dist</directory>
						</resource>
					</resources>
				</configuration>
			</execution>
		</executions>
	</plugin>
```
## 6.运行mvn clean install命令构建springboot项目，生成的文件在target目录下
## 7.运行mvn spring-boot:run命令启动构建好的springboot-Angular项目
## 8.end
