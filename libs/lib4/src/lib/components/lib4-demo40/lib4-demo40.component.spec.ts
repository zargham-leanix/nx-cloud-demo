import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo40Component } from './lib4-demo40.component';

describe('Lib4Demo40Component', () => {
  let component: Lib4Demo40Component;
  let fixture: ComponentFixture<Lib4Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
