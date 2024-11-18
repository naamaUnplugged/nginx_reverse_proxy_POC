# nginx_reverse_proxy_POC

This project demonstrates how to use Nginx as a reverse proxy to serve a React frontend and a Node.js backend under the same base URL.

## Prerequisites

- Node.js installed on your system.
- Nginx installed on your system.
- A React application running on port `3000`.
- A Node.js application (Express server) running on port `3001`.

## How It Works

The Nginx configuration file routes requests based on their paths:
- `/ui` → Proxies to the React development server on `http://127.0.0.1:3000`.
- `/app` → Proxies to the Node.js backend server on `http://127.0.0.1:3001`.

### Example Nginx Configuration

```nginx
http {
    include mime.types;
    default_type application/octet-stream;

    sendfile on;
    keepalive_timeout 65;

    server {
        listen 8081;
        server_name localhost;

        # Location for React (UI)
        location /ui {
            proxy_pass http://127.0.0.1:3000;  # Proxy to React dev server
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }

        # Location for Node.js (App)
        location /app {
            proxy_pass http://127.0.0.1:3001;  # Proxy to Node.js server
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }

        # Error page handling
        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
            root html;
        }
    }
}
```

## Starting Nginx

1. Place the `nginx.conf` file in the Nginx configuration directory (usually `/etc/nginx` on Linux or `conf/` on Windows).

2. Start Nginx using the command:
   ```bash
   nginx
   ```

3. Verify that Nginx is running by visiting `http://localhost:8081`.

### Stopping Nginx

To stop the Nginx server, use:
```bash
nginx -s stop
```

### Reloading Configuration

If you make changes to the `nginx.conf` file, reload Nginx with:
```bash
nginx -s reload
```

## Notes

- Ensure that your React and Node.js applications are running before starting Nginx.
- If you encounter any issues, check the Nginx error log for details.
