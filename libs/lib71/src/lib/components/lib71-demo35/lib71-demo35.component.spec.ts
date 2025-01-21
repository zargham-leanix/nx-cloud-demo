import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo35Component } from './lib71-demo35.component';

describe('Lib71Demo35Component', () => {
  let component: Lib71Demo35Component;
  let fixture: ComponentFixture<Lib71Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
