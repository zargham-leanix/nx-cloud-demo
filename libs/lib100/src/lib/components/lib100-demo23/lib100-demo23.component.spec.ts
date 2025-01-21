import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo23Component } from './lib100-demo23.component';

describe('Lib100Demo23Component', () => {
  let component: Lib100Demo23Component;
  let fixture: ComponentFixture<Lib100Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
