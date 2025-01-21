import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo11Component } from './lib8-demo11.component';

describe('Lib8Demo11Component', () => {
  let component: Lib8Demo11Component;
  let fixture: ComponentFixture<Lib8Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
