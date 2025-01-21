import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo35Component } from './lib52-demo35.component';

describe('Lib52Demo35Component', () => {
  let component: Lib52Demo35Component;
  let fixture: ComponentFixture<Lib52Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
