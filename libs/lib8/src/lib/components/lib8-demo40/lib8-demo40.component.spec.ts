import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo40Component } from './lib8-demo40.component';

describe('Lib8Demo40Component', () => {
  let component: Lib8Demo40Component;
  let fixture: ComponentFixture<Lib8Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
