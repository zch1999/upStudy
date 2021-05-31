/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-03-08 00:39:46
 * @LastEditors: zch1999
 * @LastEditTime: 2021-03-08 00:40:03
 */
function validIPAddress(IP) {
	let ipv4 = /^(([0-9]|[1-9][0-9]|[1][0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([1-9]|[1-9][0-9]|[1][0-9][0-9]|2[0-4][0-9]|25[0-5])$/;

	let ipv6 = /^([0-9a-fA-F]{1,4}\:){7}[0-9a-fA-F]{1,4}$/;
	if (ipv4.test(IP)) {
		return "IPv4";
	} else if (ipv6.test(IP)) {
		return "IPv6";
	} else {
		return "Neither";
	}
}
