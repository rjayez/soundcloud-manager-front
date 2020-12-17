#!/bin/bash

yarn build
scp -r build/ pi@192.168.1.29:/home/pi/Apps/soundcloud-manager/
sudo systemctl restart soundcloud-manager