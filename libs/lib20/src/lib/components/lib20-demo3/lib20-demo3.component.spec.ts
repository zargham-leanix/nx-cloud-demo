import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo3Component } from './lib20-demo3.component';

describe('Lib20Demo3Component', () => {
  let component: Lib20Demo3Component;
  let fixture: ComponentFixture<Lib20Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
