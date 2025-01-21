import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo35Component } from './lib48-demo35.component';

describe('Lib48Demo35Component', () => {
  let component: Lib48Demo35Component;
  let fixture: ComponentFixture<Lib48Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
