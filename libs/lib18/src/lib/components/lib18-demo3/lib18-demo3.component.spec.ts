import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo3Component } from './lib18-demo3.component';

describe('Lib18Demo3Component', () => {
  let component: Lib18Demo3Component;
  let fixture: ComponentFixture<Lib18Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
