export const retry = async (fn, times) => {
    let i = 0
    while(i < times) {
      try {
        await fn();
        return;
      } catch (e){
        i++;
        if(i === times) {
          throw e
        }
      }
    }
  }