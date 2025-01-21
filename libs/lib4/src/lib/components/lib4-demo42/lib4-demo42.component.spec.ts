import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo42Component } from './lib4-demo42.component';

describe('Lib4Demo42Component', () => {
  let component: Lib4Demo42Component;
  let fixture: ComponentFixture<Lib4Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
