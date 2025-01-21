import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo39Component } from './lib100-demo39.component';

describe('Lib100Demo39Component', () => {
  let component: Lib100Demo39Component;
  let fixture: ComponentFixture<Lib100Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
