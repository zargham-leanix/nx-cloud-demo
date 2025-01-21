import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo32Component } from './lib4-demo32.component';

describe('Lib4Demo32Component', () => {
  let component: Lib4Demo32Component;
  let fixture: ComponentFixture<Lib4Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
