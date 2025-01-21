import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo8Component } from './lib100-demo8.component';

describe('Lib100Demo8Component', () => {
  let component: Lib100Demo8Component;
  let fixture: ComponentFixture<Lib100Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
