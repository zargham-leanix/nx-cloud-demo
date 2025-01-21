import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo39Component } from './lib78-demo39.component';

describe('Lib78Demo39Component', () => {
  let component: Lib78Demo39Component;
  let fixture: ComponentFixture<Lib78Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
