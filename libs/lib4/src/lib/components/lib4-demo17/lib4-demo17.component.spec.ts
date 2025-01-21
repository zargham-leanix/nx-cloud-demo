import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo17Component } from './lib4-demo17.component';

describe('Lib4Demo17Component', () => {
  let component: Lib4Demo17Component;
  let fixture: ComponentFixture<Lib4Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
