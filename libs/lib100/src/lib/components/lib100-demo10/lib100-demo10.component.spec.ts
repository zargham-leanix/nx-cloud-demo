import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo10Component } from './lib100-demo10.component';

describe('Lib100Demo10Component', () => {
  let component: Lib100Demo10Component;
  let fixture: ComponentFixture<Lib100Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
