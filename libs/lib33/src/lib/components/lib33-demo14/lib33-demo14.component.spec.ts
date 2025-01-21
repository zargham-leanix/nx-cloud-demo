import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo14Component } from './lib33-demo14.component';

describe('Lib33Demo14Component', () => {
  let component: Lib33Demo14Component;
  let fixture: ComponentFixture<Lib33Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
