import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo13Component } from './lib33-demo13.component';

describe('Lib33Demo13Component', () => {
  let component: Lib33Demo13Component;
  let fixture: ComponentFixture<Lib33Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
