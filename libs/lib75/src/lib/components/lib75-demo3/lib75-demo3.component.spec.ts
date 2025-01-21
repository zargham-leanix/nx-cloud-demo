import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo3Component } from './lib75-demo3.component';

describe('Lib75Demo3Component', () => {
  let component: Lib75Demo3Component;
  let fixture: ComponentFixture<Lib75Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
