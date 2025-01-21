import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo39Component } from './lib28-demo39.component';

describe('Lib28Demo39Component', () => {
  let component: Lib28Demo39Component;
  let fixture: ComponentFixture<Lib28Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
