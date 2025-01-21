import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo33Component } from './lib8-demo33.component';

describe('Lib8Demo33Component', () => {
  let component: Lib8Demo33Component;
  let fixture: ComponentFixture<Lib8Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
