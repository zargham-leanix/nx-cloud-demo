import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo17Component } from './lib8-demo17.component';

describe('Lib8Demo17Component', () => {
  let component: Lib8Demo17Component;
  let fixture: ComponentFixture<Lib8Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
