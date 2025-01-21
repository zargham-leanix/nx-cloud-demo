import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo35Component } from './lib30-demo35.component';

describe('Lib30Demo35Component', () => {
  let component: Lib30Demo35Component;
  let fixture: ComponentFixture<Lib30Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
