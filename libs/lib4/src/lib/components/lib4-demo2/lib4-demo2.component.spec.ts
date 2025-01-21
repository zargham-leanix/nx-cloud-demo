import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo2Component } from './lib4-demo2.component';

describe('Lib4Demo2Component', () => {
  let component: Lib4Demo2Component;
  let fixture: ComponentFixture<Lib4Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
