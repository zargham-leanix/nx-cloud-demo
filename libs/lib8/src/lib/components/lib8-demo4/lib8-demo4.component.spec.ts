import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo4Component } from './lib8-demo4.component';

describe('Lib8Demo4Component', () => {
  let component: Lib8Demo4Component;
  let fixture: ComponentFixture<Lib8Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
