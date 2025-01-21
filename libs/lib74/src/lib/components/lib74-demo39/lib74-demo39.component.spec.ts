import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo39Component } from './lib74-demo39.component';

describe('Lib74Demo39Component', () => {
  let component: Lib74Demo39Component;
  let fixture: ComponentFixture<Lib74Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
