import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo35Component } from './lib53-demo35.component';

describe('Lib53Demo35Component', () => {
  let component: Lib53Demo35Component;
  let fixture: ComponentFixture<Lib53Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
