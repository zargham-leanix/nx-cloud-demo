import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo3Component } from './lib87-demo3.component';

describe('Lib87Demo3Component', () => {
  let component: Lib87Demo3Component;
  let fixture: ComponentFixture<Lib87Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
