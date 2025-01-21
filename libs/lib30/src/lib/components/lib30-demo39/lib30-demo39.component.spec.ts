import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo39Component } from './lib30-demo39.component';

describe('Lib30Demo39Component', () => {
  let component: Lib30Demo39Component;
  let fixture: ComponentFixture<Lib30Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
