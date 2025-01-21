import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo35Component } from './lib78-demo35.component';

describe('Lib78Demo35Component', () => {
  let component: Lib78Demo35Component;
  let fixture: ComponentFixture<Lib78Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
