import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo39Component } from './lib52-demo39.component';

describe('Lib52Demo39Component', () => {
  let component: Lib52Demo39Component;
  let fixture: ComponentFixture<Lib52Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
