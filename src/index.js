import dva from 'dva';
import { createHashHistory as createHistory } from 'history'
import { message } from 'antd'
// 1. Initialize
const app = dva({
    history: createHistory(),
    onError(err) {
        message.error(err.message)
    },
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/zmock').default);

// 4. Router
app.router(require('./router').default);
// 5. Start
app.start('#root');
