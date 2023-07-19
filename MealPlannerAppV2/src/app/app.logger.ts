
export enum LogLevel {
    All = 0,
    Debug = 1,
    Info = 2,
    Warn = 3,
    Error = 4,
    Fatal = 5,
    Off = 6
}

export class Logger {

    // Sets the app-wide logging level
    appLevel: LogLevel = LogLevel.All;
    logWithDate: boolean = false;

    debug(msg: string) {
        this.writeToLog(msg, LogLevel.Debug);
    }
    
    info(msg: string) {
        this.writeToLog(msg, LogLevel.Info);
    }
    
    warn(msg: string) {
        this.writeToLog(msg, LogLevel.Warn);
    }
    
    error(msg: string) {
        this.writeToLog(msg, LogLevel.Error);
    }
    
    fatal(msg: string) {
        this.writeToLog(msg, LogLevel.Fatal);
    }
    
    private writeToLog(msg: string, msgLevel: LogLevel) {
        if (this.shouldLog(msgLevel)) {
            let value: string = "";
            
            // Build log string
            if (this.logWithDate) {
                value = new Date() + " - ";
            }
            
            value += "Type: " + LogLevel[msgLevel];
            value += " - Message: " + msg;
            
            // Log the value
            console.log(value);
        }
    }

    private shouldLog(level: LogLevel): boolean {
        let ret: boolean = false;
        if ((level >= this.appLevel && level !== LogLevel.Off) || this.appLevel === LogLevel.All) {
            ret = true;
        }
        return ret;
    }
}
