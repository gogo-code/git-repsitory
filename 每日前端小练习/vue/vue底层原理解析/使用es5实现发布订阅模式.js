// 定义一个暂时存放 watchEffect 传进来的参数的变量
let activeEffect
// 定义一个 Dep 类，该类将会为每一个响应式对象的每一个键生成一个发布者实例
class Dep {
   // 用 Set 做缓存列表以防止列表中添加多个完全相同的函数
  subscribers = new Set()

    // 这就是我们常说的依赖收集方法
  depend() {
      // 如果 activeEffect 这个变量为空 就证明不是在 watchEffect 这个函数里面触发的 get 操作
    if (activeEffect) {
           // 但如果 activeEffect 不为空就证明是在 watchEffect 里触发的 get 操作
      // 那就把 activeEffect 这个存着 watchEffect 参数的变量添加进缓存列表中
      this.subscribers.add(activeEffect)
    }
  }
  
  // 更新操作 通常会在值被修改后调用
  notify() {
     // 遍历缓存列表里存放的函数 并依次触发执行
    this.subscribers.forEach(effect => effect())
  }
}

function watchEffect(effect) {
  // 先把传进来的函数放入到 activeEffect 这个变量中
  activeEffect = effect
  // 然后执行 watchEffect 里面的函数
  effect()
   // 最后把 activeEffect 置为空值
  activeEffect = null
}

function reactive(raw) {
  // 使用 Object.defineProperty
  // 1. 遍历对象上存在的 key
  Object.keys(raw).forEach(key => {
    // 2. 为每个 key 都创建一个依赖对象
    const dep = new Dep()

    // 3. 用 getter 和 setter 重写原对象的属性
    let realValue = raw[key]
    Object.defineProperty(raw, key, {
      get() {
        // 4. 在 getter 和 setter 里调用依赖对象的对应方法
        dep.depend()
        return realValue
      },
      set(newValue) {
        realValue = newValue
        dep.notify()
      }
    })
  })
  return raw
}

// 实现
const dep = new Dep()

let actualCount = 0
const state = {
  get count() {
    dep.depend()
    return actualCount
  },
  set count(newCount) {
    actualCount = newCount
    dep.notify()
  }
}

watchEffect(() => {
  console.log(state.count)
}) // 0

state.count++ // 1
