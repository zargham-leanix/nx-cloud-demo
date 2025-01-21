import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo32Component } from './lib8-demo32.component';

describe('Lib8Demo32Component', () => {
  let component: Lib8Demo32Component;
  let fixture: ComponentFixture<Lib8Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
