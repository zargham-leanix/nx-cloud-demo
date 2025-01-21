import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo35Component } from './lib8-demo35.component';

describe('Lib8Demo35Component', () => {
  let component: Lib8Demo35Component;
  let fixture: ComponentFixture<Lib8Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
