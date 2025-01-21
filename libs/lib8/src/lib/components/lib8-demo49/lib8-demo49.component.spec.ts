import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo49Component } from './lib8-demo49.component';

describe('Lib8Demo49Component', () => {
  let component: Lib8Demo49Component;
  let fixture: ComponentFixture<Lib8Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
