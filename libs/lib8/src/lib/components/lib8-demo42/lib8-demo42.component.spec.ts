import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo42Component } from './lib8-demo42.component';

describe('Lib8Demo42Component', () => {
  let component: Lib8Demo42Component;
  let fixture: ComponentFixture<Lib8Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
