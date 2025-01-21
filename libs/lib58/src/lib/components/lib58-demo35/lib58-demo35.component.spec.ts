import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo35Component } from './lib58-demo35.component';

describe('Lib58Demo35Component', () => {
  let component: Lib58Demo35Component;
  let fixture: ComponentFixture<Lib58Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
