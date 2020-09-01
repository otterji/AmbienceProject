/**
 * Groupling Array
 * @param { Number } count
 * @param { List } targetList
 * @description list를 원하는 사이즈 만큼 그룹핑 해줌.
 * @return { List }
 */

export function groupList({ targetList, count }) {
  const listSize = targetList.length;
  const result = []; // 결과값 선언
  let lap = 1; // 순회 횟수 선언
  let index = 0;
  const share = parseInt(listSize / count); // 몫
  const remainder = listSize % count; // 나머지
  const unitCount = remainder === 0 ? share : share + 1; // 유닛 수
  for (let i = 0; i < unitCount; i += 1) {
    const sliceSize = lap <= share ? count : remainder;
    const unit = targetList.slice(index, index + sliceSize);
    index += count;
    lap += 1;
    result.push(unit);
  }
  return result;
}
