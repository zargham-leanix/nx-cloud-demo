import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo14Component } from './lib8-demo14.component';

describe('Lib8Demo14Component', () => {
  let component: Lib8Demo14Component;
  let fixture: ComponentFixture<Lib8Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
