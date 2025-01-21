import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo43Component } from './lib8-demo43.component';

describe('Lib8Demo43Component', () => {
  let component: Lib8Demo43Component;
  let fixture: ComponentFixture<Lib8Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
