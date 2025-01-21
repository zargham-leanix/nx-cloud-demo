import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo39Component } from './lib82-demo39.component';

describe('Lib82Demo39Component', () => {
  let component: Lib82Demo39Component;
  let fixture: ComponentFixture<Lib82Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
