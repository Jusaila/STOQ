import React, { useState, useEffect, useRef } from 'react';
interface BubblePosition {
  x: number;
  y: number;
}
const TouchingBubbles: React.FC = () => {
  const [bubble1Pos, setBubble1Pos] = useState<BubblePosition>({ x: 150, y: 50 });
  const [bubble2Pos, setBubble2Pos] = useState<BubblePosition>({ x: 150, y: 350 });
  const [isTouching, setIsTouching] = useState<boolean>(false);
  const [direction1, setDirection1] = useState<number>(1);
  const [direction2, setDirection2] = useState<number>(-1);
  const animationRef = useRef<number>();
  const containerHeight = 400;
  const containerWidth = 300;
  const bubbleRadius = 25;
  const centerCirclePos = { x: 150, y: 200 };
  const innerCircleRadius = 15;
  const checkInnerCircleCollision = (): boolean => {
    const distance1 = Math.sqrt(
      Math.pow(bubble1Pos.x - centerCirclePos.x, 2) + Math.pow(bubble1Pos.y - centerCirclePos.y, 2)
    );
    const distance2 = Math.sqrt(
      Math.pow(bubble2Pos.x - centerCirclePos.x, 2) + Math.pow(bubble2Pos.y - centerCirclePos.y, 2)
    );
    return distance1 <= (bubbleRadius + innerCircleRadius) || distance2 <= (bubbleRadius + innerCircleRadius);
  };
  const animate = () => {
    setBubble1Pos(prev => {
      let newY = prev.y + direction1 * 0.5;
      if (newY <= 50) {
        newY = 50;
        setDirection1(1);
      } else if (newY >= 160) {
        newY = 160;
        setDirection1(-1);
      }
      return { ...prev, y: newY };
    });
    setBubble2Pos(prev => {
      let newY = prev.y + direction2 * 0.5;
      if (newY <= 240) {
        newY = 240;
        setDirection2(1);
      } else if (newY >= 350) {
        newY = 350;
        setDirection2(-1);
      }
      return { ...prev, y: newY };
    });
    animationRef.current = requestAnimationFrame(animate);
  };
  useEffect(() => {
    const touching = checkInnerCircleCollision();
    setIsTouching(touching);
  }, [bubble1Pos, bubble2Pos]);
  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [direction1, direction2]);
  const bubbleStyle = (pos: BubblePosition, isMoving: boolean = true) => ({
    position: 'absolute' as const,
    width: bubbleRadius * 2,
    height: bubbleRadius * 2,
    borderRadius: '50%',
    left: pos.x - bubbleRadius,
    top: pos.y - bubbleRadius,
    backgroundColor: isMoving
      ? '#52c41a'
      : isTouching
        ? '#000000'
        : '#ffa940',
    border: isMoving
      ? '3px solid #389e0d'
      : isTouching
        ? '3px solid #434343'
        : '3px solid #fa8c16',
    transition: 'background-color 0.8s ease, border-color 0.8s ease',
    boxShadow: isMoving
      ? '0 4px 12px rgba(82, 196, 26, 0.4)'
      : isTouching
        ? '0 4px 12px rgba(0, 0, 0, 0.6)'
        : '0 4px 12px rgba(255, 169, 64, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '12px',
    zIndex: isMoving ? 1 : 5
  });
  const innerCircleStyle = {
    position: 'absolute' as const,
    width: innerCircleRadius * 2,
    height: innerCircleRadius * 2,
    borderRadius: '50%',
    left: centerCirclePos.x - innerCircleRadius,
    top: centerCirclePos.y - innerCircleRadius,
    backgroundColor: isTouching ? '#ffffff' : '#ffcc80',
    border: '2px solid #ff9800',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333',
    fontWeight: 'bold',
    fontSize: '10px',
    transition: 'background-color 0.8s ease'
  };
  const containerStyle = {
    position: 'relative' as const,
    width: containerWidth,
    height: containerHeight,
    backgroundColor: '#f5f5f5',
    border: '2px solid #d9d9d9',
    borderRadius: '8px',
    margin: '20px auto',
    overflow: 'hidden'
  };
  const cardStyle = {
    maxWidth: 400,
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #d9d9d9',
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
  };
  const headerStyle = {
    display: 'flex' as const,
    justifyContent: 'space-between' as const,
    alignItems: 'center' as const,
    marginBottom: '16px',
    paddingBottom: '12px',
    borderBottom: '1px solid #f0f0f0'
  };
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <div style={cardStyle}>
        <div style={headerStyle}>
          <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>
            Touching Bubbles Animation
          </h3>
          <span style={{ 
            color: isTouching ? '#1890ff' : '#52c41a',
            fontWeight: 'bold'
          }}>
            {isTouching ? 'Touching!' : 'Not Touching'}
          </span>
        </div>
        <div style={containerStyle}>
          <div style={bubbleStyle(bubble1Pos, true)}>1</div>
          <div style={bubbleStyle(bubble2Pos, true)}>2</div>
          <div style={bubbleStyle(centerCirclePos, false)}>C</div>
          <div style={innerCircleStyle}>•</div>
        </div>
        <div style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
          <div>Bubble 1 Position: ({Math.round(bubble1Pos.x)}, {Math.round(bubble1Pos.y)})</div>
          <div>Bubble 2 Position: ({Math.round(bubble2Pos.x)}, {Math.round(bubble2Pos.y)})</div>
          <div>Center Circle Position: ({centerCirclePos.x}, {centerCirclePos.y})</div>
          <div style={{ marginTop: '8px', fontWeight: 'bold' }}>
            Distance to Inner Circle:
            <span style={{ marginLeft: '8px' }}>
              Bubble 1: {Math.round(
                Math.sqrt(
                  Math.pow(bubble1Pos.x - centerCirclePos.x, 2) +
                  Math.pow(bubble1Pos.y - centerCirclePos.y, 2)
                ) - bubbleRadius - innerCircleRadius)}px
            </span>
            <span style={{ marginLeft: '8px' }}>
              Bubble 2: {Math.round(
                Math.sqrt(
                  Math.pow(bubble2Pos.x - centerCirclePos.x, 2) +
                  Math.pow(bubble2Pos.y - centerCirclePos.y, 2)
                ) - bubbleRadius - innerCircleRadius)}px
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TouchingBubbles;


<path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
