import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo39Component } from './lib16-demo39.component';

describe('Lib16Demo39Component', () => {
  let component: Lib16Demo39Component;
  let fixture: ComponentFixture<Lib16Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
