import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo14Component } from './lib4-demo14.component';

describe('Lib4Demo14Component', () => {
  let component: Lib4Demo14Component;
  let fixture: ComponentFixture<Lib4Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
