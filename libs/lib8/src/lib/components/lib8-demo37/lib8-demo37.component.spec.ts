import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo37Component } from './lib8-demo37.component';

describe('Lib8Demo37Component', () => {
  let component: Lib8Demo37Component;
  let fixture: ComponentFixture<Lib8Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
