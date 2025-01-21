import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo26Component } from './lib100-demo26.component';

describe('Lib100Demo26Component', () => {
  let component: Lib100Demo26Component;
  let fixture: ComponentFixture<Lib100Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
