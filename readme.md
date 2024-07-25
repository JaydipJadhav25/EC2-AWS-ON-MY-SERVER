# Control traffic to your AWS resources using security groups

A security group controls the traffic that is allowed to reach and leave the resources that it is associated with. For example, after you associate a security group with an EC2 instance, it controls the inbound and outbound traffic for the instance.

When you create a VPC, it comes with a default security group. You can create additional security groups for a VPC, each with their own inbound and outbound rules. You can specify the source, port range, and protocol for each inbound rule. You can specify the destination, port range, and protocol for each outbound rule.


<image src="/inbountrules.png">

1. first copy code on aws Ec2 instance


// scp file1 file2 ... user@<ip_address_of_user>: Destination

```
scp -i <Ec2 instancs key> -r source destinamtion:/path
```
2. setup nodeJs

```
sudo apt update
sudo apt upgrade

sudo apt install -y curl

curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

sudo apt install -y nodejs

```

3. install node_modules

```
npm i 
```

4. start server

```
node index.js
```



