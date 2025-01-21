import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo39Component } from './lib48-demo39.component';

describe('Lib48Demo39Component', () => {
  let component: Lib48Demo39Component;
  let fixture: ComponentFixture<Lib48Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
