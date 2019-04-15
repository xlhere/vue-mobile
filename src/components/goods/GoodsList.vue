<template>
  <div class="goodslist-container">
    <div class="goods-item">
      <img alt src="https://i8.mifile.cn/v1/a1/1c3e0097-73a6-1788-96f7-2cdb58d82ba1!360x360.webp">
      <h1>小米8 青春版</h1>
      <div class="goodsinfo">
        <p class="price">
          <span class="new">¥799</span>
          <span class="old">¥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余10件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img alt src="https://i8.mifile.cn/v1/a1/1c3e0097-73a6-1788-96f7-2cdb58d82ba1!360x360.webp">
      <h1>小米8 青春版青春版 啊喽拜拜 哈喽噗噗</h1>
      <div class="goodsinfo">
        <p class="price">
          <span class="new">¥799</span>
          <span class="old">¥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余10件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img alt src="https://i8.mifile.cn/v1/a1/1c3e0097-73a6-1788-96f7-2cdb58d82ba1!360x360.webp">
      <h1>小米8  </h1>
      <div class="goodsinfo">
        <p class="price">
          <span class="new">¥799</span>
          <span class="old">¥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余10件</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.goodslist-container {
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  justify-content: space-between;

  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 3px 0;
    padding: 2px;
    // position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 248px;
    img {
      width: 100%;
    }
    h1 {
      font-size: 18px;
    }
    .goodsinfo {
      background-color: rgba(0, 0, 0, 0.1);
    //   position: absolute;

      p {
        margin: 0;
      }
      .price {
        .new {
          font-size: 16px;
          color: red;
          font-weight: bold;
        }
        .old {
          color: 12px;
          margin-left: 10px;
          text-decoration: line-through;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>



