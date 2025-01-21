import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo35Component } from './lib55-demo35.component';

describe('Lib55Demo35Component', () => {
  let component: Lib55Demo35Component;
  let fixture: ComponentFixture<Lib55Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
