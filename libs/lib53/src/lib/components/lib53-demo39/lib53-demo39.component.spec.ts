import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo39Component } from './lib53-demo39.component';

describe('Lib53Demo39Component', () => {
  let component: Lib53Demo39Component;
  let fixture: ComponentFixture<Lib53Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
