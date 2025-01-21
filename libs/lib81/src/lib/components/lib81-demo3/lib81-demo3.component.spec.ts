import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo3Component } from './lib81-demo3.component';

describe('Lib81Demo3Component', () => {
  let component: Lib81Demo3Component;
  let fixture: ComponentFixture<Lib81Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
