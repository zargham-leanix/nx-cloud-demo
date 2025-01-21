import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo17Component } from './lib33-demo17.component';

describe('Lib33Demo17Component', () => {
  let component: Lib33Demo17Component;
  let fixture: ComponentFixture<Lib33Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
