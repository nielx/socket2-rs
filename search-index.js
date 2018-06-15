var searchIndex = {};
searchIndex["socket2"] = {"doc":"Utilities for handling sockets","items":[[3,"Socket","socket2","Newtype, owned, wrapper around a system socket.",null,null],[3,"SockAddr","","The address of a socket.",null,null],[3,"Domain","","Specification of the communication domain for a socket.",null,null],[3,"Type","","Specification of communication semantics on a socket.",null,null],[3,"Protocol","","Protocol specification used for creating sockets via `Socket::new`.",null,null],[11,"fmt","","",0,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"from_raw_parts","","Constructs a `SockAddr` from its raw components.",0,null],[11,"unix","","Constructs a `SockAddr` with the family `AF_UNIX` and the provided path.",0,{"i":[{"n":"p"}],"o":{"g":["sockaddr"],"n":"result"}}],[11,"as_inet","","Returns this address as a `SocketAddrV4` if it is in the `AF_INET` family.",0,{"i":[{"n":"self"}],"o":{"g":["socketaddrv4"],"n":"option"}}],[11,"as_inet6","","Returns this address as a `SocketAddrV4` if it is in the `AF_INET6` family.",0,{"i":[{"n":"self"}],"o":{"g":["socketaddrv6"],"n":"option"}}],[11,"family","","Returns this address's family.",0,{"i":[{"n":"self"}],"o":{"n":"sa_family_t"}}],[11,"len","","Returns the size of this address in bytes.",0,{"i":[{"n":"self"}],"o":{"n":"socklen_t"}}],[11,"as_ptr","","Returns a raw pointer to the address.",0,null],[11,"from","","",0,{"i":[{"n":"socketaddrv4"}],"o":{"n":"sockaddr"}}],[11,"from","","",0,{"i":[{"n":"socketaddrv6"}],"o":{"n":"sockaddr"}}],[11,"from","","",0,{"i":[{"n":"socketaddr"}],"o":{"n":"sockaddr"}}],[11,"new","","Creates a new socket ready to be configured.",1,{"i":[{"n":"domain"},{"n":"type"},{"g":["protocol"],"n":"option"}],"o":{"g":["socket"],"n":"result"}}],[11,"pair","","Creates a pair of sockets which are connected to each other.",1,{"i":[{"n":"domain"},{"n":"type"},{"g":["protocol"],"n":"option"}],"o":{"n":"result"}}],[11,"into_tcp_stream","","Consumes this `Socket`, converting it to a `TcpStream`.",1,{"i":[{"n":"self"}],"o":{"n":"tcpstream"}}],[11,"into_tcp_listener","","Consumes this `Socket`, converting it to a `TcpListener`.",1,{"i":[{"n":"self"}],"o":{"n":"tcplistener"}}],[11,"into_udp_socket","","Consumes this `Socket`, converting it to a `UdpSocket`.",1,{"i":[{"n":"self"}],"o":{"n":"udpsocket"}}],[11,"into_unix_stream","","Consumes this `Socket`, converting it into a `UnixStream`.",1,{"i":[{"n":"self"}],"o":{"n":"unixstream"}}],[11,"into_unix_listener","","Consumes this `Socket`, converting it into a `UnixListener`.",1,{"i":[{"n":"self"}],"o":{"n":"unixlistener"}}],[11,"into_unix_datagram","","Consumes this `Socket`, converting it into a `UnixDatagram`.",1,{"i":[{"n":"self"}],"o":{"n":"unixdatagram"}}],[11,"connect","","Initiate a connection on this socket to the specified address.",1,{"i":[{"n":"self"},{"n":"sockaddr"}],"o":{"n":"result"}}],[11,"connect_timeout","","Initiate a connection on this socket to the specified address, only only waiting for a certain period of time for the connection to be established.",1,{"i":[{"n":"self"},{"n":"sockaddr"},{"n":"duration"}],"o":{"n":"result"}}],[11,"bind","","Binds this socket to the specified address.",1,{"i":[{"n":"self"},{"n":"sockaddr"}],"o":{"n":"result"}}],[11,"listen","","Mark a socket as ready to accept incoming connection requests using accept()",1,{"i":[{"n":"self"},{"n":"i32"}],"o":{"n":"result"}}],[11,"accept","","Accept a new incoming connection from this listener.",1,{"i":[{"n":"self"}],"o":{"n":"result"}}],[11,"local_addr","","Returns the socket address of the local half of this TCP connection.",1,{"i":[{"n":"self"}],"o":{"g":["sockaddr"],"n":"result"}}],[11,"peer_addr","","Returns the socket address of the remote peer of this TCP connection.",1,{"i":[{"n":"self"}],"o":{"g":["sockaddr"],"n":"result"}}],[11,"try_clone","","Creates a new independently owned handle to the underlying socket.",1,{"i":[{"n":"self"}],"o":{"g":["socket"],"n":"result"}}],[11,"take_error","","Get the value of the `SO_ERROR` option on this socket.",1,{"i":[{"n":"self"}],"o":{"g":["option"],"n":"result"}}],[11,"set_nonblocking","","Moves this TCP stream into or out of nonblocking mode.",1,{"i":[{"n":"self"},{"n":"bool"}],"o":{"n":"result"}}],[11,"shutdown","","Shuts down the read, write, or both halves of this connection.",1,{"i":[{"n":"self"},{"n":"shutdown"}],"o":{"n":"result"}}],[11,"recv","","Receives data on the socket from the remote address to which it is connected.",1,null],[11,"peek","","Receives data on the socket from the remote adress to which it is connected, without removing that data from the queue. On success, returns the number of bytes peeked.",1,null],[11,"recv_from","","Receives data from the socket. On success, returns the number of bytes read and the address from whence the data came.",1,null],[11,"peek_from","","Receives data from the socket, without removing it from the queue.",1,null],[11,"send","","Sends data on the socket to a connected peer.",1,null],[11,"send_to","","Sends data on the socket to the given address. On success, returns the number of bytes written.",1,null],[11,"ttl","","Gets the value of the `IP_TTL` option for this socket.",1,{"i":[{"n":"self"}],"o":{"g":["u32"],"n":"result"}}],[11,"set_ttl","","Sets the value for the `IP_TTL` option on this socket.",1,{"i":[{"n":"self"},{"n":"u32"}],"o":{"n":"result"}}],[11,"unicast_hops_v6","","Gets the value of the `IPV6_UNICAST_HOPS` option for this socket.",1,{"i":[{"n":"self"}],"o":{"g":["u32"],"n":"result"}}],[11,"set_unicast_hops_v6","","Sets the value for the `IPV6_UNICAST_HOPS` option on this socket.",1,{"i":[{"n":"self"},{"n":"u32"}],"o":{"n":"result"}}],[11,"only_v6","","Gets the value of the `IPV6_V6ONLY` option for this socket.",1,{"i":[{"n":"self"}],"o":{"g":["bool"],"n":"result"}}],[11,"set_only_v6","","Sets the value for the `IPV6_V6ONLY` option on this socket.",1,{"i":[{"n":"self"},{"n":"bool"}],"o":{"n":"result"}}],[11,"read_timeout","","Returns the read timeout of this socket.",1,{"i":[{"n":"self"}],"o":{"g":["option"],"n":"result"}}],[11,"set_read_timeout","","Sets the read timeout to the timeout specified.",1,{"i":[{"n":"self"},{"g":["duration"],"n":"option"}],"o":{"n":"result"}}],[11,"write_timeout","","Returns the write timeout of this socket.",1,{"i":[{"n":"self"}],"o":{"g":["option"],"n":"result"}}],[11,"set_write_timeout","","Sets the write timeout to the timeout specified.",1,{"i":[{"n":"self"},{"g":["duration"],"n":"option"}],"o":{"n":"result"}}],[11,"nodelay","","Gets the value of the `TCP_NODELAY` option on this socket.",1,{"i":[{"n":"self"}],"o":{"g":["bool"],"n":"result"}}],[11,"set_nodelay","","Sets the value of the `TCP_NODELAY` option on this socket.",1,{"i":[{"n":"self"},{"n":"bool"}],"o":{"n":"result"}}],[11,"broadcast","","Sets the value of the `SO_BROADCAST` option for this socket.",1,{"i":[{"n":"self"}],"o":{"g":["bool"],"n":"result"}}],[11,"set_broadcast","","Gets the value of the `SO_BROADCAST` option for this socket.",1,{"i":[{"n":"self"},{"n":"bool"}],"o":{"n":"result"}}],[11,"multicast_loop_v4","","Gets the value of the `IP_MULTICAST_LOOP` option for this socket.",1,{"i":[{"n":"self"}],"o":{"g":["bool"],"n":"result"}}],[11,"set_multicast_loop_v4","","Sets the value of the `IP_MULTICAST_LOOP` option for this socket.",1,{"i":[{"n":"self"},{"n":"bool"}],"o":{"n":"result"}}],[11,"multicast_ttl_v4","","Gets the value of the `IP_MULTICAST_TTL` option for this socket.",1,{"i":[{"n":"self"}],"o":{"g":["u32"],"n":"result"}}],[11,"set_multicast_ttl_v4","","Sets the value of the `IP_MULTICAST_TTL` option for this socket.",1,{"i":[{"n":"self"},{"n":"u32"}],"o":{"n":"result"}}],[11,"multicast_hops_v6","","Gets the value of the `IPV6_MULTICAST_HOPS` option for this socket",1,{"i":[{"n":"self"}],"o":{"g":["u32"],"n":"result"}}],[11,"set_multicast_hops_v6","","Sets the value of the `IPV6_MULTICAST_HOPS` option for this socket",1,{"i":[{"n":"self"},{"n":"u32"}],"o":{"n":"result"}}],[11,"multicast_if_v4","","Gets the value of the `IP_MULTICAST_IF` option for this socket.",1,{"i":[{"n":"self"}],"o":{"g":["ipv4addr"],"n":"result"}}],[11,"set_multicast_if_v4","","Sets the value of the `IP_MULTICAST_IF` option for this socket.",1,{"i":[{"n":"self"},{"n":"ipv4addr"}],"o":{"n":"result"}}],[11,"multicast_if_v6","","Gets the value of the `IPV6_MULTICAST_IF` option for this socket.",1,{"i":[{"n":"self"}],"o":{"g":["u32"],"n":"result"}}],[11,"set_multicast_if_v6","","Sets the value of the `IPV6_MULTICAST_IF` option for this socket.",1,{"i":[{"n":"self"},{"n":"u32"}],"o":{"n":"result"}}],[11,"multicast_loop_v6","","Gets the value of the `IPV6_MULTICAST_LOOP` option for this socket.",1,{"i":[{"n":"self"}],"o":{"g":["bool"],"n":"result"}}],[11,"set_multicast_loop_v6","","Sets the value of the `IPV6_MULTICAST_LOOP` option for this socket.",1,{"i":[{"n":"self"},{"n":"bool"}],"o":{"n":"result"}}],[11,"join_multicast_v4","","Executes an operation of the `IP_ADD_MEMBERSHIP` type.",1,{"i":[{"n":"self"},{"n":"ipv4addr"},{"n":"ipv4addr"}],"o":{"n":"result"}}],[11,"join_multicast_v6","","Executes an operation of the `IPV6_ADD_MEMBERSHIP` type.",1,{"i":[{"n":"self"},{"n":"ipv6addr"},{"n":"u32"}],"o":{"n":"result"}}],[11,"leave_multicast_v4","","Executes an operation of the `IP_DROP_MEMBERSHIP` type.",1,{"i":[{"n":"self"},{"n":"ipv4addr"},{"n":"ipv4addr"}],"o":{"n":"result"}}],[11,"leave_multicast_v6","","Executes an operation of the `IPV6_DROP_MEMBERSHIP` type.",1,{"i":[{"n":"self"},{"n":"ipv6addr"},{"n":"u32"}],"o":{"n":"result"}}],[11,"linger","","Reads the linger duration for this socket by getting the SO_LINGER option",1,{"i":[{"n":"self"}],"o":{"g":["option"],"n":"result"}}],[11,"set_linger","","Sets the linger duration of this socket by setting the SO_LINGER option",1,{"i":[{"n":"self"},{"g":["duration"],"n":"option"}],"o":{"n":"result"}}],[11,"reuse_address","","Check the `SO_REUSEADDR` option on this socket.",1,{"i":[{"n":"self"}],"o":{"g":["bool"],"n":"result"}}],[11,"set_reuse_address","","Set value for the `SO_REUSEADDR` option on this socket.",1,{"i":[{"n":"self"},{"n":"bool"}],"o":{"n":"result"}}],[11,"recv_buffer_size","","Gets the value of the `SO_RCVBUF` option on this socket.",1,{"i":[{"n":"self"}],"o":{"g":["usize"],"n":"result"}}],[11,"set_recv_buffer_size","","Sets the value of the `SO_RCVBUF` option on this socket.",1,{"i":[{"n":"self"},{"n":"usize"}],"o":{"n":"result"}}],[11,"send_buffer_size","","Gets the value of the `SO_SNDBUF` option on this socket.",1,{"i":[{"n":"self"}],"o":{"g":["usize"],"n":"result"}}],[11,"set_send_buffer_size","","Sets the value of the `SO_SNDBUF` option on this socket.",1,{"i":[{"n":"self"},{"n":"usize"}],"o":{"n":"result"}}],[11,"keepalive","","Returns whether keepalive messages are enabled on this socket, and if so the duration of time between them.",1,{"i":[{"n":"self"}],"o":{"g":["option"],"n":"result"}}],[11,"set_keepalive","","Sets whether keepalive messages are enabled to be sent on this socket.",1,{"i":[{"n":"self"},{"g":["duration"],"n":"option"}],"o":{"n":"result"}}],[11,"reuse_port","","Check the value of the `SO_REUSEPORT` option on this socket.",1,{"i":[{"n":"self"}],"o":{"g":["bool"],"n":"result"}}],[11,"set_reuse_port","","Set value for the `SO_REUSEPORT` option on this socket.",1,{"i":[{"n":"self"},{"n":"bool"}],"o":{"n":"result"}}],[11,"read","","",1,null],[11,"write","","",1,null],[11,"flush","","",1,{"i":[{"n":"self"}],"o":{"n":"result"}}],[11,"fmt","","",1,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"from","","",1,{"i":[{"n":"tcpstream"}],"o":{"n":"socket"}}],[11,"from","","",1,{"i":[{"n":"tcplistener"}],"o":{"n":"socket"}}],[11,"from","","",1,{"i":[{"n":"udpsocket"}],"o":{"n":"socket"}}],[11,"from","","",1,{"i":[{"n":"unixstream"}],"o":{"n":"socket"}}],[11,"from","","",1,{"i":[{"n":"unixlistener"}],"o":{"n":"socket"}}],[11,"from","","",1,{"i":[{"n":"unixdatagram"}],"o":{"n":"socket"}}],[11,"ipv4","","Domain for IPv4 communication, corresponding to `AF_INET`.",2,{"o":{"n":"domain"}}],[11,"ipv6","","Domain for IPv6 communication, corresponding to `AF_INET6`.",2,{"o":{"n":"domain"}}],[11,"unix","","Domain for Unix socket communication, corresponding to `AF_UNIX`.",2,{"o":{"n":"domain"}}],[11,"from","","",2,{"i":[{"n":"i32"}],"o":{"n":"domain"}}],[11,"stream","","Type corresponding to `SOCK_STREAM`",3,{"o":{"n":"type"}}],[11,"dgram","","Type corresponding to `SOCK_DGRAM`",3,{"o":{"n":"type"}}],[11,"seqpacket","","Type corresponding to `SOCK_SEQPACKET`",3,{"o":{"n":"type"}}],[11,"raw","","Type corresponding to `SOCK_RAW`",3,{"o":{"n":"type"}}],[11,"icmpv4","","Protocol corresponding to `ICMPv4`",4,{"o":{"n":"self"}}],[11,"icmpv6","","Protocol corresponding to `ICMPv6`",4,{"o":{"n":"self"}}],[11,"tcp","","Protocol corresponding to `TCP`",4,{"o":{"n":"self"}}],[11,"udp","","Protocol corresponding to `UDP`",4,{"o":{"n":"self"}}],[11,"from","","",3,{"i":[{"n":"i32"}],"o":{"n":"type"}}],[11,"from","","",4,{"i":[{"n":"i32"}],"o":{"n":"protocol"}}],[11,"as_raw_fd","","",1,{"i":[{"n":"self"}],"o":{"n":"c_int"}}],[11,"into_raw_fd","","",1,{"i":[{"n":"self"}],"o":{"n":"c_int"}}],[11,"from_raw_fd","","",1,{"i":[{"n":"c_int"}],"o":{"n":"socket"}}],[11,"clone","","",2,{"i":[{"n":"self"}],"o":{"n":"domain"}}],[11,"clone","","",3,{"i":[{"n":"self"}],"o":{"n":"type"}}],[11,"clone","","",4,{"i":[{"n":"self"}],"o":{"n":"protocol"}}]],"paths":[[3,"SockAddr"],[3,"Socket"],[3,"Domain"],[3,"Type"],[3,"Protocol"]]};
initSearch(searchIndex);
