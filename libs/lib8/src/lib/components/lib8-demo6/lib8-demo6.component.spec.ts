import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo6Component } from './lib8-demo6.component';

describe('Lib8Demo6Component', () => {
  let component: Lib8Demo6Component;
  let fixture: ComponentFixture<Lib8Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
