import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo39Component } from './lib47-demo39.component';

describe('Lib47Demo39Component', () => {
  let component: Lib47Demo39Component;
  let fixture: ComponentFixture<Lib47Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
