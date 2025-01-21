import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo39Component } from './lib57-demo39.component';

describe('Lib57Demo39Component', () => {
  let component: Lib57Demo39Component;
  let fixture: ComponentFixture<Lib57Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
