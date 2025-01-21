import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo39Component } from './lib12-demo39.component';

describe('Lib12Demo39Component', () => {
  let component: Lib12Demo39Component;
  let fixture: ComponentFixture<Lib12Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
