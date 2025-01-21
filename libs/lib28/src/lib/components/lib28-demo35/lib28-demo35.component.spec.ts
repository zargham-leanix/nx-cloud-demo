import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo35Component } from './lib28-demo35.component';

describe('Lib28Demo35Component', () => {
  let component: Lib28Demo35Component;
  let fixture: ComponentFixture<Lib28Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
