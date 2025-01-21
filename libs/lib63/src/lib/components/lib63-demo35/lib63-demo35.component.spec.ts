import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo35Component } from './lib63-demo35.component';

describe('Lib63Demo35Component', () => {
  let component: Lib63Demo35Component;
  let fixture: ComponentFixture<Lib63Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
