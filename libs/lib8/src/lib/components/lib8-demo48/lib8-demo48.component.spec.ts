import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo48Component } from './lib8-demo48.component';

describe('Lib8Demo48Component', () => {
  let component: Lib8Demo48Component;
  let fixture: ComponentFixture<Lib8Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
