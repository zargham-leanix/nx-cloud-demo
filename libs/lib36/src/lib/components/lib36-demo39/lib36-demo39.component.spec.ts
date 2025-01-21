import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo39Component } from './lib36-demo39.component';

describe('Lib36Demo39Component', () => {
  let component: Lib36Demo39Component;
  let fixture: ComponentFixture<Lib36Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
