import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo35Component } from './lib47-demo35.component';

describe('Lib47Demo35Component', () => {
  let component: Lib47Demo35Component;
  let fixture: ComponentFixture<Lib47Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
