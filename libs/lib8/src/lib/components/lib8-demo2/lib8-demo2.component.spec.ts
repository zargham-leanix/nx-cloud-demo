import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo2Component } from './lib8-demo2.component';

describe('Lib8Demo2Component', () => {
  let component: Lib8Demo2Component;
  let fixture: ComponentFixture<Lib8Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
