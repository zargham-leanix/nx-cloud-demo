import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo3Component } from './lib4-demo3.component';

describe('Lib4Demo3Component', () => {
  let component: Lib4Demo3Component;
  let fixture: ComponentFixture<Lib4Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
