import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo35Component } from './lib57-demo35.component';

describe('Lib57Demo35Component', () => {
  let component: Lib57Demo35Component;
  let fixture: ComponentFixture<Lib57Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
