import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo39Component } from './lib44-demo39.component';

describe('Lib44Demo39Component', () => {
  let component: Lib44Demo39Component;
  let fixture: ComponentFixture<Lib44Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
