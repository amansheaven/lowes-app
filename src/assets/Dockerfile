FROM     ubuntu:16.04
LABEL maintainer="bitard [dot] michael [at] gmail [dot] com"

ENV DEBIAN_FRONTEND=noninteractive     ANDROID_HOME=/opt/android-sdk-linux     NODE_VERSION=10.13.0     NPM_VERSION=6.4.1     IONIC_VERSION=4.3.1     CORDOVA_VERSION=8.1.2    GRADLE_VERSION=4.10.2

# Install basics
RUN apt-get update &&      apt-get install -y git wget curl unzip build-essential ruby ruby-dev ruby-ffi gcc make &&     curl --retry 3 -SLO "http://nodejs.org/dist/v/node-v-linux-x64.tar.gz" &&     tar -xzf "node-v-linux-x64.tar.gz" -C /usr/local --strip-components=1 &&     rm "node-v-linux-x64.tar.gz" &&     npm install -g npm@"" &&     npm install -g cordova@"" ionic@"" &&     npm cache clear --force &&     gem install sass &&     git config --global user.email "you@example.com" &&     git config --global user.name "Your Name" &&     ionic start myApp sidemenu --no-interactive
#ANDROID
#JAVA

# install python-software-properties (so you can do add-apt-repository)
RUN apt-get update && apt-get install -y -q python-software-properties software-properties-common  &&     add-apt-repository ppa:webupd8team/java -y &&     echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections &&     apt-get update && apt-get -y install oracle-java8-installer

#ANDROID STUFF
RUN echo ANDROID_HOME="/home/am.singh2/Android/Sdk" >> /etc/environment &&     dpkg --add-architecture i386 &&     apt-get update &&     apt-get install -y --force-yes expect ant wget zipalign libc6-i386 lib32stdc++6 lib32gcc1 lib32ncurses5 lib32z1 qemu-kvm kmod &&     apt-get clean &&     apt-get autoclean &&     rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Install Android SDK
RUN cd /opt &&     wget --output-document=android-sdk.tgz --quiet http://dl.google.com/android/android-sdk_r24.4.1-linux.tgz &&     tar xzf android-sdk.tgz &&     rm -f android-sdk.tgz &&     chown -R root. /opt

# Install Gradle
RUN wget https://services.gradle.org/distributions/gradle-""-bin.zip &&     mkdir /opt/gradle &&     unzip -d /opt/gradle gradle-""-bin.zip &&     rm -rf gradle-""-bin.zip

# Setup environment

ENV PATH /home/am.singh2/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/home/am.singh2/Android/Sdk/tools:/home/am.singh2/Android/Sdk/tools/bin:/home/am.singh2/Android/Sdk/platform-tools:/home/am.singh2/Android/Sdk/emulator:/home/am.singh2/flutter/flutter/bin:/home/am.singh2/Android/Sdk/tools:/home/am.singh2/Android/Sdk/tools/bin:/home/am.singh2/Android/Sdk/platform-tools:/home/am.singh2/Android/Sdk/emulator:/home/am.singh2/Desktop/lowesapp/ionic/src/assets/flutter/flutter/bin:/home/am.singh2/Android/Sdk/tools:/home/am.singh2/Android/Sdk/platform-tools:/opt/tools:/opt/gradle/gradle-""/bin

# Install sdk elements
COPY tools /opt/tools

RUN ["/opt/tools/android-accept-licenses.sh", "android update sdk --all --no-ui --filter platform-tools,tools,build-tools-26.0.2,android-27,android-26,build-tools-25.0.0,android-25,extra-android-support,extra-android-m2repository,extra-google-m2repository"]
RUN unzip /home/am.singh2/Android/Sdk/temp/*.zip -d /home/am.singh2/Android/Sdk

# Test First Build so that it will be faster later
RUN cd myApp &&     ionic cordova build android --prod --no-interactive --release

WORKDIR myApp
EXPOSE 8100 35729
CMD ["ionic", "serve"]FROM     ubuntu:16.04
LABEL maintainer="bitard [dot] michael [at] gmail [dot] com"

ENV DEBIAN_FRONTEND=noninteractive     ANDROID_HOME=/opt/android-sdk-linux     NODE_VERSION=10.13.0     NPM_VERSION=6.4.1     IONIC_VERSION=4.3.1     CORDOVA_VERSION=8.1.2    GRADLE_VERSION=4.10.2

# Install basics
RUN apt-get update &&      apt-get install -y git wget curl unzip build-essential ruby ruby-dev ruby-ffi gcc make &&     curl --retry 3 -SLO "http://nodejs.org/dist/v/node-v-linux-x64.tar.gz" &&     tar -xzf "node-v-linux-x64.tar.gz" -C /usr/local --strip-components=1 &&     rm "node-v-linux-x64.tar.gz" &&     npm install -g npm@"" &&     npm install -g cordova@"" ionic@"" &&     npm cache clear --force &&     gem install sass &&     git config --global user.email "you@example.com" &&     git config --global user.name "Your Name" &&     ionic start myApp sidemenu --no-interactive
#ANDROID
#JAVA

# install python-software-properties (so you can do add-apt-repository)
RUN apt-get update && apt-get install -y -q python-software-properties software-properties-comwqclearmon  &&     add-apt-repository ppa:webupd8team/java -y &&     echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections &&     apt-get update && apt-get -y install oracle-java8-installer

#ANDROID STUFF
RUN echo ANDROID_HOME="/home/am.singh2/Android/Sdk" >> /etc/environment &&     dpkg --add-architecture i386 &&     apt-get update &&     apt-get install -y --force-yes expect ant wget zipalign libc6-i386 lib32stdc++6 lib32gcc1 lib32ncurses5 lib32z1 qemu-kvm kmod &&     apt-get clean &&     apt-get autoclean &&     rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Install Android SDK
RUN cd /opt &&     wget --output-document=android-sdk.tgz --quiet http://dl.google.com/android/android-sdk_r24.4.1-linux.tgz &&     tar xzf android-sdk.tgz &&     rm -f android-sdk.tgz &&     chown -R root. /opt

# Install Gradle
RUN wget https://services.gradle.org/distributions/gradle-""-bin.zip &&     mkdir /opt/gradle &&     unzip -d /opt/gradle gradle-""-bin.zip &&     rm -rf gradle-""-bin.zip

# Setup environment

ENV PATH /home/am.singh2/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/home/am.singh2/Android/Sdk/tools:/home/am.singh2/Android/Sdk/tools/bin:/home/am.singh2/Android/Sdk/platform-tools:/home/am.singh2/Android/Sdk/emulator:/home/am.singh2/flutter/flutter/bin:/home/am.singh2/Android/Sdk/tools:/home/am.singh2/Android/Sdk/tools/bin:/home/am.singh2/Android/Sdk/platform-tools:/home/am.singh2/Android/Sdk/emulator:/home/am.singh2/Desktop/lowesapp/ionic/src/assets/flutter/flutter/bin:/home/am.singh2/Android/Sdk/tools:/home/am.singh2/Android/Sdk/platform-tools:/opt/tools:/opt/gradle/gradle-""/bin

# Install sdk elements
COPY tools /opt/tools

RUN ["/opt/tools/android-accept-licenses.sh", "android update sdk --all --no-ui --filter platform-tools,tools,build-tools-26.0.2,android-27,android-26,build-tools-25.0.0,android-25,extra-android-support,extra-android-m2repository,extra-google-m2repository"]
RUN unzip /home/am.singh2/Android/Sdk/temp/*.zip -d /home/am.singh2/Android/Sdk

# Test First Build so that it will be faster later
RUN cd myApp &&     ionic cordova build android --prod --no-interactive --release

WORKDIR myApp
EXPOSE 8100 35729
CMD ["ionic", "serve"]
