import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo39Component } from './lib93-demo39.component';

describe('Lib93Demo39Component', () => {
  let component: Lib93Demo39Component;
  let fixture: ComponentFixture<Lib93Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
