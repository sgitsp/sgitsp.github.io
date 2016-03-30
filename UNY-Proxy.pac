function FindProxyForURL(url, host) {
	if (shExpMatch(host, "webmail.uny.ac.id"))  { return "PROXY proxy.uny.ac.id:3128"; }

        if (shExpMatch(host, "uny.ac.id"))  { return "DIRECT"; }
	if (shExpMatch(host, "*.uny.ac.id"))  { return "DIRECT"; }
        if (shExpMatch(host, "localhost"))  { return "DIRECT"; }

	if (isInNet(host, "10.0.0.0",  "255.0.0.0"))  { return "DIRECT"; }
        if (isInNet(host, "192.168.209.0",  "255.255.255.0"))  { return "DIRECT"; }
	if (isInNet(host, "127.0.0.1", "255.255.255.255"))  { return "DIRECT"; }

        //ALL request  should that fail to respond, go directly to the WWW:
        return "PROXY proxy.uny.ac.id:3128; DIRECT";
   }

